import { PassThrough } from "node:stream";
import type Docker from "dockerode";
import { IdleTimer } from "./idle-timer.js";
import type { ExecOptions, ExecResult, SandboxBackend, SandboxConfig } from "./types.js";
import { SANDBOX_DEFAULTS } from "./types.js";

/**
 * Converts a Record<string, string> to Docker's env array format: ["KEY=value", ...].
 */
function objectToEnvArray(env?: Record<string, string>): string[] | undefined {
	if (!env) return undefined;
	return Object.entries(env).map(([key, value]) => `${key}=${value}`);
}

/**
 * Collects stdout and stderr from a Docker exec stream.
 * Handles Docker's multiplexed stream format (demux).
 */
function collectOutput(
	container: Docker.Container,
	_execInstance: Docker.Exec,
	stream: NodeJS.ReadableStream,
	timeoutMs: number,
): Promise<{ stdout: string; stderr: string }> {
	return new Promise((resolve, reject) => {
		let stdout = "";
		let stderr = "";
		let timedOut = false;

		const timer = setTimeout(() => {
			timedOut = true;
			// Attempt to stop the exec by destroying the stream
			(stream as NodeJS.ReadableStream & { destroy?: () => void }).destroy?.();
			reject(new Error(`Exec timed out after ${timeoutMs}ms`));
		}, timeoutMs);

		const stdoutStream = new PassThrough();
		const stderrStream = new PassThrough();

		stdoutStream.on("data", (chunk: Buffer) => {
			stdout += chunk.toString();
		});
		stderrStream.on("data", (chunk: Buffer) => {
			stderr += chunk.toString();
		});

		container.modem.demuxStream(stream, stdoutStream, stderrStream);

		stream.on("end", () => {
			clearTimeout(timer);
			if (!timedOut) {
				resolve({ stdout, stderr });
			}
		});

		stream.on("error", (err: Error) => {
			clearTimeout(timer);
			if (!timedOut) {
				reject(err);
			}
		});
	});
}

/**
 * Docker-based sandbox backend providing full container isolation.
 *
 * - Creates a long-running container per sandbox ID
 * - Routes exec/readFile/writeFile through the container
 * - Stops the container after idle timeout
 * - dispose() stops and removes the container
 */
export class DockerBackend implements SandboxBackend {
	private readonly config: SandboxConfig;
	private readonly docker: Docker;
	private readonly idleTimer: IdleTimer;
	private readonly containerName: string;
	private container: Docker.Container | null = null;
	private running = false;

	constructor(config: SandboxConfig, docker: Docker) {
		this.config = config;
		this.docker = docker;
		this.containerName = `dg-claw-sandbox-${config.id}`;
		this.idleTimer = new IdleTimer(config.idleTimeoutMs ?? SANDBOX_DEFAULTS.idleTimeoutMs, () => {
			this.stopContainer().catch((err) => {
				console.error(`[sandbox] Failed to stop idle container ${this.containerName}:`, err);
			});
		});
	}

	/**
	 * Ensures the container is running. Creates or restarts as needed.
	 */
	private async ensureRunning(): Promise<Docker.Container> {
		if (this.container && this.running) {
			return this.container;
		}

		// Check if container already exists
		try {
			const existing = this.docker.getContainer(this.containerName);
			const info = await existing.inspect();

			if (info.State.Running) {
				this.container = existing;
				this.running = true;
				return existing;
			}

			// Container exists but stopped -- restart it
			await existing.start();
			this.container = existing;
			this.running = true;
			return existing;
		} catch {
			// Container doesn't exist -- create it
		}

		const binds: string[] = [`${this.config.workspacePath}:/workspace:rw`];
		if (this.config.memoryPath) {
			binds.push(`${this.config.memoryPath}:/memory:ro`);
		}

		const container = await this.docker.createContainer({
			name: this.containerName,
			Image: this.config.image ?? SANDBOX_DEFAULTS.image,
			Cmd: ["sleep", "infinity"],
			WorkingDir: SANDBOX_DEFAULTS.workingDir,
			HostConfig: {
				Binds: binds,
				Memory: this.config.memoryLimit ?? SANDBOX_DEFAULTS.memoryLimit,
				NanoCpus: (this.config.cpuLimit ?? SANDBOX_DEFAULTS.cpuLimit) * 1_000_000_000,
				PidsLimit: this.config.pidsLimit ?? SANDBOX_DEFAULTS.pidsLimit,
				NetworkMode: "bridge",
				SecurityOpt: ["no-new-privileges"],
			},
		});

		await container.start();
		this.container = container;
		this.running = true;
		return container;
	}

	/**
	 * Stops the container without removing it (for idle timeout).
	 */
	private async stopContainer(): Promise<void> {
		if (this.container && this.running) {
			try {
				await this.container.stop();
			} catch {
				// Container may already be stopped
			}
			this.running = false;
		}
	}

	async exec(command: string, args: string[] = [], options?: ExecOptions): Promise<ExecResult> {
		this.idleTimer.reset();
		const container = await this.ensureRunning();
		const timeoutMs = options?.timeoutMs ?? SANDBOX_DEFAULTS.execTimeoutMs;

		const cmd = [command, ...args];
		const execInstance = await container.exec({
			Cmd: cmd,
			WorkingDir: options?.cwd ?? SANDBOX_DEFAULTS.workingDir,
			Env: objectToEnvArray(options?.env),
			AttachStdout: true,
			AttachStderr: true,
		});

		const stream = await execInstance.start({});
		const { stdout, stderr } = await collectOutput(container, execInstance, stream, timeoutMs);
		const inspectResult = await execInstance.inspect();

		return {
			stdout,
			stderr,
			exitCode: inspectResult.ExitCode ?? 1,
		};
	}

	async readFile(path: string): Promise<string> {
		const result = await this.exec("cat", [path]);
		if (result.exitCode !== 0) {
			throw new Error(`Failed to read file "${path}": ${result.stderr}`);
		}
		return result.stdout;
	}

	async writeFile(path: string, content: string): Promise<void> {
		// Ensure parent directory exists, then write via shell
		const escapedContent = content.replace(/'/g, "'\\''");
		const result = await this.exec("sh", [
			"-c",
			`mkdir -p "$(dirname '${path}')" && printf '%s' '${escapedContent}' > '${path}'`,
		]);
		if (result.exitCode !== 0) {
			throw new Error(`Failed to write file "${path}": ${result.stderr}`);
		}
	}

	isRunning(): boolean {
		return this.running;
	}

	async dispose(): Promise<void> {
		this.idleTimer.cancel();
		if (this.container) {
			try {
				await this.container.stop();
			} catch {
				// Container may already be stopped
			}
			try {
				await this.container.remove();
			} catch {
				// Container may already be removed
			}
			this.container = null;
			this.running = false;
		}
	}
}
