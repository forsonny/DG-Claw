import Docker from "dockerode";
import { DirectBackend } from "./direct-backend.js";
import { DockerBackend } from "./docker-backend.js";
import type { SandboxBackend, SandboxConfig } from "./types.js";

/**
 * Create a sandbox backend. Detects Docker availability automatically.
 * Returns DockerBackend if Docker is running, DirectBackend otherwise.
 */
export async function createSandbox(config: SandboxConfig): Promise<SandboxBackend> {
	try {
		const docker = new Docker();
		await docker.ping();
		return new DockerBackend(config, docker);
	} catch {
		return new DirectBackend(config);
	}
}
