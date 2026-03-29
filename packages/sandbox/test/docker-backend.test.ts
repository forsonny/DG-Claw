import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { SandboxConfig } from "../src/types.js";
import { SANDBOX_DEFAULTS } from "../src/types.js";

// --- Mock dockerode before importing DockerBackend ---

const mockExecInspect = vi.fn().mockResolvedValue({ ExitCode: 0 });
const mockExecStart = vi.fn().mockImplementation(() => {
	const { PassThrough } = require("node:stream");
	const stream = new PassThrough();
	// Simulate Docker demuxed output by ending the stream immediately
	process.nextTick(() => stream.end());
	return Promise.resolve(stream);
});
const mockContainerExec = vi.fn().mockResolvedValue({
	start: mockExecStart,
	inspect: mockExecInspect,
});

const mockContainerStart = vi.fn().mockResolvedValue(undefined);
const mockContainerStop = vi.fn().mockResolvedValue(undefined);
const mockContainerRemove = vi.fn().mockResolvedValue(undefined);
const mockContainerInspect = vi.fn();

const mockContainer = {
	exec: mockContainerExec,
	start: mockContainerStart,
	stop: mockContainerStop,
	remove: mockContainerRemove,
	inspect: mockContainerInspect,
	modem: {
		demuxStream: vi.fn((stream: NodeJS.ReadableStream, stdout: NodeJS.WritableStream) => {
			stream.pipe(stdout as NodeJS.WritableStream & { write: (chunk: unknown) => boolean });
		}),
	},
};

const mockGetContainer = vi.fn();
const mockCreateContainer = vi.fn().mockResolvedValue(mockContainer);

const mockDockerInstance = {
	getContainer: mockGetContainer,
	createContainer: mockCreateContainer,
};

const MockDocker = vi.fn().mockImplementation(() => mockDockerInstance);

vi.mock("dockerode", () => {
	return {
		default: MockDocker,
	};
});

// Import after mock is set up
import { DockerBackend } from "../src/docker-backend.js";

describe("DockerBackend", () => {
	let backend: DockerBackend;
	const config: SandboxConfig = {
		id: "test-group",
		workspacePath: "/host/workspace",
		memoryPath: "/host/memory",
	};

	beforeEach(() => {
		vi.clearAllMocks();
		vi.useFakeTimers();

		// Restore MockDocker constructor after clearAllMocks wipes the implementation
		MockDocker.mockImplementation(() => mockDockerInstance);

		// By default, getContainer throws (container doesn't exist)
		mockGetContainer.mockImplementation(() => {
			throw new Error("No such container");
		});

		// Re-setup default mocks after clearAllMocks
		mockContainerExec.mockResolvedValue({
			start: mockExecStart,
			inspect: mockExecInspect,
		});
		mockExecInspect.mockResolvedValue({ ExitCode: 0 });
		mockExecStart.mockImplementation(() => {
			const { PassThrough } = require("node:stream");
			const stream = new PassThrough();
			process.nextTick(() => stream.end());
			return Promise.resolve(stream);
		});
		mockContainerStart.mockResolvedValue(undefined);
		mockContainerStop.mockResolvedValue(undefined);
		mockContainerRemove.mockResolvedValue(undefined);
		mockCreateContainer.mockResolvedValue(mockContainer);
		mockContainer.modem.demuxStream.mockImplementation(
			(stream: NodeJS.ReadableStream, stdout: NodeJS.WritableStream) => {
				stream.pipe(stdout as NodeJS.WritableStream & { write: (chunk: unknown) => boolean });
			},
		);

		backend = new DockerBackend(config, mockDockerInstance as unknown as import("dockerode"));
	});

	afterEach(async () => {
		vi.useRealTimers();
	});

	describe("ensureRunning (via exec)", () => {
		it("creates a new container with correct config on first exec", async () => {
			await backend.exec("echo", ["hello"]);

			expect(mockCreateContainer).toHaveBeenCalledTimes(1);
			const createArgs = mockCreateContainer.mock.calls[0][0];

			expect(createArgs.name).toBe("dg-claw-sandbox-test-group");
			expect(createArgs.Image).toBe(SANDBOX_DEFAULTS.image);
			expect(createArgs.Cmd).toEqual(["sleep", "infinity"]);
			expect(createArgs.WorkingDir).toBe("/workspace");
			expect(createArgs.HostConfig.Binds).toContain("/host/workspace:/workspace:rw");
			expect(createArgs.HostConfig.Binds).toContain("/host/memory:/memory:ro");
			expect(createArgs.HostConfig.Memory).toBe(SANDBOX_DEFAULTS.memoryLimit);
			expect(createArgs.HostConfig.NanoCpus).toBe(1_000_000_000);
			expect(createArgs.HostConfig.PidsLimit).toBe(SANDBOX_DEFAULTS.pidsLimit);
			expect(createArgs.HostConfig.SecurityOpt).toContain("no-new-privileges");
		});

		it("starts the created container", async () => {
			await backend.exec("echo", ["hello"]);

			expect(mockContainerStart).toHaveBeenCalledTimes(1);
		});

		it("reuses an existing running container", async () => {
			mockGetContainer.mockReturnValue({
				...mockContainer,
				inspect: vi.fn().mockResolvedValue({ State: { Running: true } }),
			});

			await backend.exec("ls", []);

			expect(mockCreateContainer).not.toHaveBeenCalled();
		});

		it("restarts a stopped container", async () => {
			const stoppedContainer = {
				...mockContainer,
				inspect: vi.fn().mockResolvedValue({ State: { Running: false } }),
				start: vi.fn().mockResolvedValue(undefined),
			};
			mockGetContainer.mockReturnValue(stoppedContainer);

			await backend.exec("ls", []);

			expect(stoppedContainer.start).toHaveBeenCalledTimes(1);
			expect(mockCreateContainer).not.toHaveBeenCalled();
		});
	});

	describe("exec", () => {
		it("calls container.exec with correct command and options", async () => {
			await backend.exec("node", ["--version"], {
				cwd: "/workspace/src",
				env: { NODE_ENV: "test" },
			});

			expect(mockContainerExec).toHaveBeenCalledWith({
				Cmd: ["node", "--version"],
				WorkingDir: "/workspace/src",
				Env: ["NODE_ENV=test"],
				AttachStdout: true,
				AttachStderr: true,
			});
		});

		it("uses default working directory when cwd not specified", async () => {
			await backend.exec("echo", ["hi"]);

			expect(mockContainerExec).toHaveBeenCalledWith(
				expect.objectContaining({
					WorkingDir: "/workspace",
				}),
			);
		});

		it("returns stdout, stderr, and exit code", async () => {
			mockExecInspect.mockResolvedValueOnce({ ExitCode: 0 });

			const result = await backend.exec("echo", ["hello"]);

			expect(result).toHaveProperty("stdout");
			expect(result).toHaveProperty("stderr");
			expect(result.exitCode).toBe(0);
		});

		it("returns non-zero exit code from failed command", async () => {
			mockExecInspect.mockResolvedValueOnce({ ExitCode: 1 });

			const result = await backend.exec("false", []);

			expect(result.exitCode).toBe(1);
		});
	});

	describe("readFile", () => {
		it("executes cat inside the container", async () => {
			await backend.readFile("/workspace/package.json");

			expect(mockContainerExec).toHaveBeenCalledWith(
				expect.objectContaining({
					Cmd: ["cat", "/workspace/package.json"],
				}),
			);
		});

		it("throws when cat fails", async () => {
			mockExecInspect.mockResolvedValueOnce({ ExitCode: 1 });
			mockExecStart.mockImplementationOnce(() => {
				const { PassThrough } = require("node:stream");
				const stream = new PassThrough();
				process.nextTick(() => stream.end());
				return Promise.resolve(stream);
			});

			await expect(backend.readFile("/workspace/nonexistent.txt")).rejects.toThrow("Failed to read file");
		});
	});

	describe("dispose", () => {
		it("stops and removes the container", async () => {
			// First exec to create the container
			await backend.exec("echo", ["setup"]);

			await backend.dispose();

			expect(mockContainerStop).toHaveBeenCalled();
			expect(mockContainerRemove).toHaveBeenCalled();
			expect(backend.isRunning()).toBe(false);
		});

		it("handles dispose when no container exists", async () => {
			await expect(backend.dispose()).resolves.toBeUndefined();
		});
	});

	describe("idle timer", () => {
		it("stops container after idle timeout", async () => {
			// Create the container
			await backend.exec("echo", ["start"]);
			expect(backend.isRunning()).toBe(true);

			// Advance past idle timeout (default 30 min)
			await vi.advanceTimersByTimeAsync(SANDBOX_DEFAULTS.idleTimeoutMs);

			expect(mockContainerStop).toHaveBeenCalled();
		});

		it("resets idle timer on exec", async () => {
			// Create container
			await backend.exec("echo", ["start"]);

			// Advance 20 minutes
			vi.advanceTimersByTime(20 * 60 * 1000);
			expect(mockContainerStop).not.toHaveBeenCalled();

			// Another exec resets the timer
			await backend.exec("echo", ["activity"]);

			// Advance another 20 minutes (40 total, but only 20 since last reset)
			vi.advanceTimersByTime(20 * 60 * 1000);
			expect(mockContainerStop).not.toHaveBeenCalled();

			// Advance the remaining 10 minutes to hit the timeout
			await vi.advanceTimersByTimeAsync(10 * 60 * 1000);
			expect(mockContainerStop).toHaveBeenCalled();
		});
	});

	describe("isRunning", () => {
		it("returns false before any exec", () => {
			expect(backend.isRunning()).toBe(false);
		});

		it("returns true after exec", async () => {
			await backend.exec("echo", ["hello"]);
			expect(backend.isRunning()).toBe(true);
		});
	});

	describe("custom config", () => {
		it("omits memory bind when memoryPath not provided", async () => {
			const noMemConfig: SandboxConfig = {
				id: "no-mem",
				workspacePath: "/host/workspace",
			};
			const noMemBackend = new DockerBackend(noMemConfig, mockDockerInstance as unknown as import("dockerode"));

			await noMemBackend.exec("echo", ["hi"]);

			const createArgs = mockCreateContainer.mock.calls[0][0];
			expect(createArgs.HostConfig.Binds).toHaveLength(1);
			expect(createArgs.HostConfig.Binds[0]).toBe("/host/workspace:/workspace:rw");
		});

		it("uses custom image when specified", async () => {
			const customConfig: SandboxConfig = {
				id: "custom-img",
				workspacePath: "/host/workspace",
				image: "python:3.12-slim",
			};
			const customBackend = new DockerBackend(customConfig, mockDockerInstance as unknown as import("dockerode"));

			await customBackend.exec("python", ["--version"]);

			const createArgs = mockCreateContainer.mock.calls[0][0];
			expect(createArgs.Image).toBe("python:3.12-slim");
		});
	});
});
