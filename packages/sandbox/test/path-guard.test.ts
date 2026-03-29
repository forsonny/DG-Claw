import { join } from "node:path/posix";
import { describe, expect, it } from "vitest";
import { guardPath } from "../src/path-guard.js";

describe("guardPath", () => {
	const root = "/workspace/project";

	describe("valid paths", () => {
		it("resolves a simple relative path", () => {
			const result = guardPath(root, "src/index.ts");
			expect(result).toBe(join(root, "src/index.ts"));
		});

		it("resolves a nested relative path", () => {
			const result = guardPath(root, "src/utils/helpers.ts");
			expect(result).toBe(join(root, "src/utils/helpers.ts"));
		});

		it("resolves a path within root that uses ../ internally", () => {
			// /workspace/project/src/../lib resolves to /workspace/project/lib
			const result = guardPath(root, "src/../lib/util.ts");
			expect(result).toBe(join(root, "lib/util.ts"));
		});

		it("allows the root directory itself", () => {
			const result = guardPath(root, ".");
			expect(result).toBe(root);
		});

		it("resolves a bare filename in root", () => {
			const result = guardPath(root, "file.txt");
			expect(result).toBe(join(root, "file.txt"));
		});
	});

	describe("blocked paths", () => {
		it("blocks a simple ../ escape", () => {
			expect(() => guardPath(root, "../secret.txt")).toThrow("Path traversal blocked");
		});

		it("blocks a deep ../ escape", () => {
			expect(() => guardPath(root, "../../etc/passwd")).toThrow("Path traversal blocked");
		});

		it("blocks an absolute path outside root", () => {
			expect(() => guardPath(root, "/etc/passwd")).toThrow("Path traversal blocked");
		});

		it("blocks an escape that first enters a subdirectory", () => {
			// src/../../.. goes above root
			expect(() => guardPath(root, "src/../../../secret")).toThrow("Path traversal blocked");
		});

		it("blocks a Windows-style absolute path on non-Windows (or absolute resolve)", () => {
			// Even if this isn't a real Windows path, resolve() treats it as relative
			// on POSIX. The test verifies behavior regardless.
			const absPath = "/tmp/evil";
			expect(() => guardPath(root, absPath)).toThrow("Path traversal blocked");
		});
	});
});
