import type Database from "better-sqlite3";
import { mkdirSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { closeMemoryDb, createMemoryDb } from "../src/db.js";
import { archiveBelowThreshold, decayAll, reinforce } from "../src/salience.js";
import { MemoryStore } from "../src/store.js";
import type { MemoryScope } from "../src/types.js";
import { MemoryCategory } from "../src/types.js";

describe("salience", () => {
	let db: Database.Database;
	let store: MemoryStore;
	let tempDir: string;
	const scope: MemoryScope = { userId: "user-1", groupId: "group-1" };

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-test-${crypto.randomUUID()}`);
		mkdirSync(tempDir, { recursive: true });
		db = createMemoryDb(join(tempDir, "memory.sqlite"));
		store = new MemoryStore(db);
	});

	afterEach(() => {
		closeMemoryDb(db);
		rmSync(tempDir, { recursive: true, force: true });
	});

	describe("decayAll", () => {
		it("reduces salience of all active entries by the decay rate", () => {
			store.insert({
				entity: "A",
				slot: "s",
				value: "v",
				category: MemoryCategory.Entity,
				scope,
				salience: 1.0,
				confidence: 1.0,
			});
			store.insert({
				entity: "B",
				slot: "s",
				value: "v",
				category: MemoryCategory.Entity,
				scope,
				salience: 0.5,
				confidence: 1.0,
			});

			const count = decayAll(db, 0.95);
			expect(count).toBe(2);

			const entries = store.getTopBySalience(scope, 10);
			expect(entries[0].salience).toBeCloseTo(0.95, 5);
			expect(entries[1].salience).toBeCloseTo(0.475, 5);
		});

		it("does not decay archived entries", () => {
			const entry = store.insert({
				entity: "X",
				slot: "s",
				value: "v",
				category: MemoryCategory.Entity,
				scope,
				salience: 1.0,
				confidence: 1.0,
			});
			store.supersede(entry.id, {
				entity: "Y",
				slot: "s",
				value: "v2",
				category: MemoryCategory.Entity,
				scope,
				salience: 0.8,
				confidence: 1.0,
			});

			// Only the active entry should be decayed
			const count = decayAll(db, 0.9);
			expect(count).toBe(1);
		});
	});

	describe("reinforce", () => {
		it("bumps salience by the boost amount", () => {
			const entry = store.insert({
				entity: "A",
				slot: "s",
				value: "v",
				category: MemoryCategory.Entity,
				scope,
				salience: 0.5,
				confidence: 1.0,
			});

			reinforce(db, entry.id, 0.2);
			const updated = store.getById(entry.id);
			expect(updated!.salience).toBeCloseTo(0.7, 5);
		});

		it("caps salience at 1.0", () => {
			const entry = store.insert({
				entity: "A",
				slot: "s",
				value: "v",
				category: MemoryCategory.Entity,
				scope,
				salience: 0.95,
				confidence: 1.0,
			});

			reinforce(db, entry.id, 0.2);
			const updated = store.getById(entry.id);
			expect(updated!.salience).toBe(1.0);
		});
	});

	describe("archiveBelowThreshold", () => {
		it("archives active entries below the threshold", () => {
			store.insert({
				entity: "high",
				slot: "s",
				value: "v",
				category: MemoryCategory.Entity,
				scope,
				salience: 0.5,
				confidence: 1.0,
			});
			store.insert({
				entity: "low",
				slot: "s",
				value: "v",
				category: MemoryCategory.Entity,
				scope,
				salience: 0.02,
				confidence: 1.0,
			});

			const count = archiveBelowThreshold(db, 0.05);
			expect(count).toBe(1);

			const remaining = store.getTopBySalience(scope, 10);
			expect(remaining.length).toBe(1);
			expect(remaining[0].entity).toBe("high");
		});

		it("returns 0 when no entries are below threshold", () => {
			store.insert({
				entity: "A",
				slot: "s",
				value: "v",
				category: MemoryCategory.Entity,
				scope,
				salience: 0.5,
				confidence: 1.0,
			});

			const count = archiveBelowThreshold(db, 0.05);
			expect(count).toBe(0);
		});
	});
});
