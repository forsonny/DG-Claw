import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { SandboxConfig } from "../src/types.js";

// --- Mock dockerode ---

const mockPing = vi.fn();

vi.mock("dockerode", () => {
	return {
		default: vi.fn().mockImplementation(() => ({
			ping: mockPing,
			getContainer: vi.fn(() => {
				throw new Error("No such container");
			}),
			createContainer: vi.fn().mockResolvedValue({
				start: vi.fn().mockResolvedValue(undefined),
				exec: vi.fn(),
				stop: vi.fn(),
				remove: vi.fn(),
				inspect: vi.fn(),
				modem: { demuxStream: vi.fn() },
			}),
		})),
	};
});

// Mock console.warn to suppress DirectBackend warnings
vi.spyOn(console, "warn").mockImplementation(() => {});

// Import after mock
import { DirectBackend } from "../src/direct-backend.js";
import { DockerBackend } from "../src/docker-backend.js";
import { createSandbox } from "../src/factory.js";

describe("createSandbox", () => {
	const config: SandboxConfig = {
		id: "factory-test",
		workspacePath: "/tmp/workspace",
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("returns DockerBackend when Docker is available", async () => {
		mockPing.mockResolvedValue("OK");

		const backend = await createSandbox(config);

		expect(backend).toBeInstanceOf(DockerBackend);
	});

	it("returns DirectBackend when Docker ping fails", async () => {
		mockPing.mockRejectedValue(new Error("Cannot connect to Docker daemon"));

		const backend = await createSandbox(config);

		expect(backend).toBeInstanceOf(DirectBackend);
	});

	it("returns DirectBackend when Docker constructor throws", async () => {
		const dockerMod = await import("dockerode");
		(dockerMod.default as unknown as ReturnType<typeof vi.fn>).mockImplementationOnce(() => {
			throw new Error("Docker not installed");
		});

		const backend = await createSandbox(config);

		expect(backend).toBeInstanceOf(DirectBackend);
	});
});
