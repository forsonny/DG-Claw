import { mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { acquireLock, isLocked } from "../src/file-lock.js";

describe("file-lock", () => {
	let tempDir: string;
	let lockPath: string;

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-lock-test-${crypto.randomUUID()}`);
		mkdirSync(tempDir, { recursive: true });
		lockPath = join(tempDir, "autolearn.lock");
	});

	afterEach(() => {
		rmSync(tempDir, { recursive: true, force: true });
	});

	it("acquires a lock and isLocked returns true", async () => {
		const release = await acquireLock(lockPath);
		expect(isLocked(lockPath)).toBe(true);
		await release();
	});

	it("isLocked returns false when no lock is held", () => {
		expect(isLocked(lockPath)).toBe(false);
	});

	it("isLocked returns false for non-existent file", () => {
		expect(isLocked(join(tempDir, "nonexistent.lock"))).toBe(false);
	});

	it("release function makes the lock available again", async () => {
		const release = await acquireLock(lockPath);
		expect(isLocked(lockPath)).toBe(true);

		await release();
		expect(isLocked(lockPath)).toBe(false);

		// Should be able to acquire again
		const release2 = await acquireLock(lockPath);
		expect(isLocked(lockPath)).toBe(true);
		await release2();
	});

	it("throws when trying to acquire an already-held lock", async () => {
		const release = await acquireLock(lockPath);

		await expect(acquireLock(lockPath)).rejects.toThrow();

		await release();
	});
});
