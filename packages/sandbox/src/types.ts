/**
 * Types for @dg-claw/sandbox.
 */

/** Options for executing a command in the sandbox. */
export interface ExecOptions {
	/** Working directory inside the sandbox. Default: /workspace */
	cwd?: string;
	/** Environment variables to set. */
	env?: Record<string, string>;
	/** Timeout in milliseconds. Default: 30000. */
	timeoutMs?: number;
}

/** Result of executing a command in the sandbox. */
export interface ExecResult {
	stdout: string;
	stderr: string;
	exitCode: number;
}

/** Configuration for creating a sandbox. */
export interface SandboxConfig {
	/** Unique identifier for this sandbox (typically groupId). */
	id: string;
	/** Path to the workspace directory on the host (for volume mount). */
	workspacePath: string;
	/** Path to the memory directory on the host (mounted read-only). */
	memoryPath?: string;
	/** Docker image to use. Default: "node:20-slim". */
	image?: string;
	/** CPU limit in cores. Default: 1. */
	cpuLimit?: number;
	/** Memory limit in bytes. Default: 536870912 (512MB). */
	memoryLimit?: number;
	/** Maximum number of PIDs. Default: 256. */
	pidsLimit?: number;
	/** Idle timeout in milliseconds before stopping. Default: 1800000 (30 min). */
	idleTimeoutMs?: number;
}

/** Backend interface for sandbox execution. */
export interface SandboxBackend {
	/** Execute a command inside the sandbox. */
	exec(command: string, args?: string[], options?: ExecOptions): Promise<ExecResult>;
	/** Read a file from the sandbox workspace. */
	readFile(path: string): Promise<string>;
	/** Write a file in the sandbox workspace. */
	writeFile(path: string, content: string): Promise<void>;
	/** Check if the sandbox is running. */
	isRunning(): boolean;
	/** Stop the sandbox. */
	dispose(): Promise<void>;
}

/** Default configuration values. */
export const SANDBOX_DEFAULTS = {
	image: "node:20-slim",
	cpuLimit: 1,
	memoryLimit: 536_870_912, // 512MB
	pidsLimit: 256,
	idleTimeoutMs: 1_800_000, // 30 minutes
	execTimeoutMs: 30_000, // 30 seconds
	workingDir: "/workspace",
} as const;
