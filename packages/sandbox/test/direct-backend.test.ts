import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DirectBackend } from "../src/direct-backend.js";
import type { SandboxConfig } from "../src/types.js";

describe("DirectBackend", () => {
	let tempDir: string;
	let backend: DirectBackend;
	const tempDirs: string[] = [];

	beforeEach(async () => {
		// Suppress the degraded-mode warnings during tests
		vi.spyOn(console, "warn").mockImplementation(() => {});

		tempDir = await mkdtemp(join(tmpdir(), "dg-sandbox-direct-"));
		tempDirs.push(tempDir);

		const config: SandboxConfig = {
			id: "test-direct",
			workspacePath: tempDir,
		};
		backend = new DirectBackend(config);
	});

	afterEach(async () => {
		vi.restoreAllMocks();
		await Promise.all(tempDirs.splice(0, tempDirs.length).map((dir) => rm(dir, { recursive: true, force: true })));
	});

	describe("constructor", () => {
		it("logs degraded-mode warnings", () => {
			vi.restoreAllMocks();
			const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
			const config: SandboxConfig = { id: "warn-test", workspacePath: tempDir };
			new DirectBackend(config);

			expect(warnSpy).toHaveBeenCalledWith(
				"[sandbox] Docker not found -- running in degraded mode without isolation.",
			);
			expect(warnSpy).toHaveBeenCalledWith(
				"[sandbox] Tool execution is NOT sandboxed. Install Docker for full security.",
			);
		});
	});

	describe("exec", () => {
		it("executes a command and captures stdout", async () => {
			const result = await backend.exec("echo", ["hello sandbox"]);
			expect(result.stdout.trim()).toBe("hello sandbox");
			expect(result.exitCode).toBe(0);
		});

		it("captures stderr", async () => {
			const result = await backend.exec("bash", ["-c", "echo error >&2"]);
			expect(result.stderr.trim()).toBe("error");
		});

		it("returns non-zero exit code on failure", async () => {
			const result = await backend.exec("bash", ["-c", "exit 42"]);
			expect(result.exitCode).toBe(42);
		});

		it("respects custom environment variables", async () => {
			const result = await backend.exec("bash", ["-c", "echo $MY_VAR"], {
				env: { MY_VAR: "sandbox_value" },
			});
			expect(result.stdout.trim()).toBe("sandbox_value");
		});

		it("kills process on timeout and returns exit code 137", async () => {
			const result = await backend.exec("bash", ["-c", "sleep 60"], {
				timeoutMs: 500,
			});
			expect(result.exitCode).toBe(137);
			expect(result.stderr).toContain("timeout");
		});
	});

	describe("readFile / writeFile", () => {
		it("round-trips file content", async () => {
			await backend.writeFile("test.txt", "hello world");
			const content = await backend.readFile("test.txt");
			expect(content).toBe("hello world");
		});

		it("creates nested directories for writeFile", async () => {
			await backend.writeFile("deep/nested/dir/file.txt", "nested content");
			const content = await backend.readFile("deep/nested/dir/file.txt");
			expect(content).toBe("nested content");
		});

		it("reads a pre-existing file", async () => {
			const filePath = join(tempDir, "existing.txt");
			await writeFile(filePath, "pre-existing", "utf-8");

			const content = await backend.readFile("existing.txt");
			expect(content).toBe("pre-existing");
		});

		it("throws on readFile for non-existent file", async () => {
			await expect(backend.readFile("no-such-file.txt")).rejects.toThrow();
		});
	});

	describe("path traversal prevention", () => {
		it("blocks readFile with ../ escape", async () => {
			await expect(backend.readFile("../../../etc/passwd")).rejects.toThrow("Path traversal blocked");
		});

		it("blocks writeFile with ../ escape", async () => {
			await expect(backend.writeFile("../../evil.txt", "bad")).rejects.toThrow("Path traversal blocked");
		});

		it("blocks readFile with absolute path outside workspace", async () => {
			await expect(backend.readFile("/etc/passwd")).rejects.toThrow("Path traversal blocked");
		});
	});

	describe("isRunning / dispose", () => {
		it("isRunning always returns true", () => {
			expect(backend.isRunning()).toBe(true);
		});

		it("dispose is a no-op that resolves", async () => {
			await expect(backend.dispose()).resolves.toBeUndefined();
			expect(backend.isRunning()).toBe(true);
		});
	});
});
