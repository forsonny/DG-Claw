import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import type { ExecOptions, ExecResult, SandboxBackend, SandboxConfig } from "./types.js";
import { SANDBOX_DEFAULTS } from "./types.js";

/**
 * Guards a host-filesystem path using native node:path (not posix).
 * Required because guardPath uses posix semantics, which breaks on Windows
 * when the workspace root is a Windows absolute path (e.g. C:\Users\...).
 */
function guardHostPath(root: string, requestedPath: string): string {
	const resolved = resolve(root, requestedPath);
	const rel = relative(root, resolved);

	// If relative path starts with ".." it escaped the root.
	if (rel.startsWith("..") || resolve(rel) === rel) {
		throw new Error(`Path traversal blocked: "${requestedPath}" resolves outside workspace root`);
	}

	return resolved;
}

/**
 * Fallback sandbox backend that executes commands directly on the host.
 * Used when Docker is not available. Provides NO isolation --
 * only path traversal prevention for file operations.
 */
export class DirectBackend implements SandboxBackend {
	private readonly workspacePath: string;

	constructor(config: SandboxConfig) {
		this.workspacePath = config.workspacePath;
		console.warn("[sandbox] Docker not found -- running in degraded mode without isolation.");
		console.warn("[sandbox] Tool execution is NOT sandboxed. Install Docker for full security.");
	}

	async exec(command: string, args: string[] = [], options?: ExecOptions): Promise<ExecResult> {
		const cwd = options?.cwd ?? this.workspacePath;
		const timeoutMs = options?.timeoutMs ?? SANDBOX_DEFAULTS.execTimeoutMs;

		return new Promise<ExecResult>((resolve, reject) => {
			const child = spawn(command, args, {
				cwd,
				env: { ...process.env, ...options?.env },
				stdio: ["ignore", "pipe", "pipe"],
			});

			let stdout = "";
			let stderr = "";
			let settled = false;

			const settle = (result: ExecResult) => {
				if (!settled) {
					settled = true;
					resolve(result);
				}
			};

			const timer = setTimeout(() => {
				// Resolve immediately on timeout -- do not wait for child close,
				// since killing a process tree on Windows may be unreliable.
				settle({
					stdout,
					stderr: `${stderr}\nProcess killed: timeout after ${timeoutMs}ms`,
					exitCode: 137,
				});
				try {
					child.kill("SIGKILL");
				} catch {
					// Best-effort kill; ignore errors.
				}
			}, timeoutMs);

			child.stdout.on("data", (chunk: Buffer) => {
				stdout += chunk.toString();
			});

			child.stderr.on("data", (chunk: Buffer) => {
				stderr += chunk.toString();
			});

			child.on("error", (err) => {
				clearTimeout(timer);
				if (!settled) {
					settled = true;
					reject(err);
				}
			});

			child.on("close", (code) => {
				clearTimeout(timer);
				settle({ stdout, stderr, exitCode: code ?? 1 });
			});
		});
	}

	async readFile(path: string): Promise<string> {
		const safePath = guardHostPath(this.workspacePath, path);
		return readFile(safePath, "utf-8");
	}

	async writeFile(path: string, content: string): Promise<void> {
		const safePath = guardHostPath(this.workspacePath, path);
		await mkdir(dirname(safePath), { recursive: true });
		await writeFile(safePath, content, "utf-8");
	}

	isRunning(): boolean {
		return true;
	}

	async dispose(): Promise<void> {
		// No-op for direct backend -- nothing to clean up.
	}
}
