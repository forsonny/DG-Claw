import { describe, expect, it } from "vitest";
import { SANDBOX_DEFAULTS } from "../src/types.js";

describe("SANDBOX_DEFAULTS", () => {
	it("uses node:20-slim as the default image", () => {
		expect(SANDBOX_DEFAULTS.image).toBe("node:20-slim");
	});

	it("defaults CPU limit to 1 core", () => {
		expect(SANDBOX_DEFAULTS.cpuLimit).toBe(1);
	});

	it("defaults memory limit to 512MB", () => {
		expect(SANDBOX_DEFAULTS.memoryLimit).toBe(536_870_912);
	});

	it("defaults PID limit to 256", () => {
		expect(SANDBOX_DEFAULTS.pidsLimit).toBe(256);
	});

	it("defaults idle timeout to 30 minutes", () => {
		expect(SANDBOX_DEFAULTS.idleTimeoutMs).toBe(1_800_000);
	});

	it("defaults exec timeout to 30 seconds", () => {
		expect(SANDBOX_DEFAULTS.execTimeoutMs).toBe(30_000);
	});

	it("defaults working directory to /workspace", () => {
		expect(SANDBOX_DEFAULTS.workingDir).toBe("/workspace");
	});
});
