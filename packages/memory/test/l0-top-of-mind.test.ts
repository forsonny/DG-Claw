import type Database from "better-sqlite3";
import { mkdirSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { closeMemoryDb, createMemoryDb } from "../src/db.js";
import { buildScopeKey, getTopOfMind, updateTopOfMind } from "../src/read/l0-top-of-mind.js";

describe("L0 Top-of-Mind", () => {
	let db: Database.Database;
	let tempDir: string;

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-test-${crypto.randomUUID()}`);
		mkdirSync(tempDir, { recursive: true });
		db = createMemoryDb(join(tempDir, "memory.sqlite"));
	});

	afterEach(() => {
		closeMemoryDb(db);
		rmSync(tempDir, { recursive: true, force: true });
	});

	describe("buildScopeKey", () => {
		it("builds key with userId and groupId when no agentId", () => {
			expect(buildScopeKey({ userId: "u1", groupId: "g1" })).toBe("u1::g1");
		});

		it("builds key with all three axes", () => {
			expect(buildScopeKey({ userId: "u1", agentId: "a1", groupId: "g1" })).toBe("u1:a1:g1");
		});

		it("treats null agentId same as undefined", () => {
			expect(buildScopeKey({ userId: "u1", agentId: null, groupId: "g1" })).toBe("u1::g1");
		});
	});

	describe("updateTopOfMind / getTopOfMind", () => {
		it("stores and retrieves a summary", () => {
			const key = "u1::g1";
			updateTopOfMind(db, key, "Current goals: migrate auth system");

			const result = getTopOfMind(db, key);
			expect(result).toBe("Current goals: migrate auth system");
		});

		it("returns null for a non-existent scope key", () => {
			const result = getTopOfMind(db, "non-existent");
			expect(result).toBeNull();
		});

		it("replaces the summary on subsequent updates (upsert)", () => {
			const key = "u1::g1";
			updateTopOfMind(db, key, "First summary");
			updateTopOfMind(db, key, "Updated summary");

			const result = getTopOfMind(db, key);
			expect(result).toBe("Updated summary");
		});

		it("stores separate summaries for different scope keys", () => {
			updateTopOfMind(db, "u1::g1", "Group 1 summary");
			updateTopOfMind(db, "u1::g2", "Group 2 summary");

			expect(getTopOfMind(db, "u1::g1")).toBe("Group 1 summary");
			expect(getTopOfMind(db, "u1::g2")).toBe("Group 2 summary");
		});
	});
});
