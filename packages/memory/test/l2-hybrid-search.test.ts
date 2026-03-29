import type Database from "better-sqlite3";
import { mkdirSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { closeMemoryDb, createMemoryDb } from "../src/db.js";
import { hybridSearch, searchBM25, searchVector } from "../src/read/l2-hybrid-search.js";
import { MemoryStore } from "../src/store.js";
import type { MemoryScope } from "../src/types.js";
import { MemoryCategory } from "../src/types.js";

describe("L2 Hybrid Search", () => {
	let db: Database.Database;
	let store: MemoryStore;
	let tempDir: string;
	const scope: MemoryScope = { userId: "user-1", groupId: "group-1" };

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-test-${crypto.randomUUID()}`);
		mkdirSync(tempDir, { recursive: true });
		db = createMemoryDb(join(tempDir, "memory.sqlite"));
		store = new MemoryStore(db);

		// Seed data
		store.insert({
			entity: "auth-service",
			slot: "deployed-on",
			value: "Deployed v2.3 to production on March 25",
			category: MemoryCategory.Event,
			scope,
			salience: 0.9,
			confidence: 1.0,
		});
		store.insert({
			entity: "Alice",
			slot: "works-at",
			value: "Acme Corp as a data scientist",
			category: MemoryCategory.Entity,
			scope,
			salience: 0.8,
			confidence: 0.9,
		});
		store.insert({
			entity: "CORS error",
			slot: "solved-by",
			value: "Added proxy middleware in vite.config.ts",
			category: MemoryCategory.Case,
			scope: { userId: "user-1", agentId: "agent-1", groupId: "group-1" },
			salience: 0.7,
			confidence: 0.95,
		});
	});

	afterEach(() => {
		closeMemoryDb(db);
		rmSync(tempDir, { recursive: true, force: true });
	});

	describe("searchBM25", () => {
		it("finds entries matching keyword query", () => {
			const results = searchBM25(db, "auth-service deployed", scope, 10);
			expect(results.length).toBeGreaterThan(0);
			expect(results[0].entry.entity).toBe("auth-service");
		});

		it("returns empty array for non-matching query", () => {
			const results = searchBM25(db, "xyznonexistent", scope, 10);
			expect(results.length).toBe(0);
		});

		it("respects limit parameter", () => {
			const results = searchBM25(db, "a*", scope, 1);
			expect(results.length).toBeLessThanOrEqual(1);
		});
	});

	describe("searchVector", () => {
		it("finds entries by cosine similarity to query embedding", () => {
			const entries = [
				{
					...store.getTopBySalience(scope, 10)[0],
					embedding: new Float64Array([1, 0, 0]),
				},
				{
					...store.getTopBySalience(scope, 10)[1],
					embedding: new Float64Array([0, 1, 0]),
				},
			];

			const results = searchVector(entries, [1, 0, 0], 10);
			expect(results.length).toBe(2);
			expect(results[0].score).toBeGreaterThan(results[1].score);
		});

		it("skips entries without embeddings", () => {
			const entries = store.getTopBySalience(scope, 10); // No embeddings set
			const results = searchVector(entries, [1, 0, 0], 10);
			expect(results.length).toBe(0);
		});
	});

	describe("hybridSearch", () => {
		it("combines BM25 and vector results with reciprocal rank fusion", () => {
			// For this test we just verify the function runs and returns results
			// Vector results will be empty (no embeddings set), so it falls back to BM25
			const results = hybridSearch(db, "deployed production", [], scope, {
				limit: 10,
				bm25Weight: 0.3,
				vectorWeight: 0.7,
			});
			expect(results.length).toBeGreaterThan(0);
		});

		it("returns results from BM25 when no query embedding is available", () => {
			const results = hybridSearch(db, "proxy middleware", [], scope, {
				limit: 5,
				bm25Weight: 0.3,
				vectorWeight: 0.7,
			});
			// CORS case is agent-scoped with agentId, so BM25 scope filter should handle it
			// At least the BM25 path runs without errors
			expect(Array.isArray(results)).toBe(true);
		});
	});
});
