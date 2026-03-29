import { describe, expect, it } from "vitest";
import { packFacts } from "../src/read/l1-injection.js";
import type { MemoryEntry } from "../src/types.js";
import { MemoryCategory } from "../src/types.js";

function makeEntry(overrides: Partial<MemoryEntry> = {}): MemoryEntry {
	const now = new Date().toISOString();
	return {
		id: crypto.randomUUID(),
		entity: "Test",
		slot: "slot",
		value: "value",
		category: MemoryCategory.Entity,
		scopeUserId: "user-1",
		scopeAgentId: null,
		scopeGroupId: "group-1",
		salience: 0.5,
		confidence: 1.0,
		embedding: null,
		parentId: null,
		sourceSessionId: null,
		sourceTurn: null,
		status: "active",
		expiresAt: null,
		createdAt: now,
		updatedAt: now,
		accessedAt: now,
		...overrides,
	};
}

describe("packFacts", () => {
	it("returns entries sorted by composite score descending", () => {
		const high = makeEntry({ entity: "high", salience: 0.9, accessedAt: new Date().toISOString() });
		const low = makeEntry({ entity: "low", salience: 0.1, accessedAt: new Date().toISOString() });
		const mid = makeEntry({ entity: "mid", salience: 0.5, accessedAt: new Date().toISOString() });

		const packed = packFacts([low, mid, high], 10000);
		expect(packed[0].entity).toBe("high");
		expect(packed[2].entity).toBe("low");
	});

	it("respects the token budget -- excludes entries that would exceed it", () => {
		// Each entry: "entity slot value" ~ roughly 15 chars ~ 4 tokens
		// Create entries with long values to consume budget
		const entries = Array.from({ length: 10 }, (_, i) =>
			makeEntry({
				entity: `entity-${i}`,
				slot: "description",
				value: "x".repeat(200), // ~50 tokens each
				salience: 0.5,
			}),
		);

		// Budget for ~3 entries (150 tokens)
		const packed = packFacts(entries, 150);
		expect(packed.length).toBeLessThanOrEqual(5); // Should not include all 10
		expect(packed.length).toBeGreaterThan(0);
	});

	it("returns empty array for zero budget", () => {
		const entries = [makeEntry()];
		const packed = packFacts(entries, 0);
		expect(packed).toEqual([]);
	});

	it("gives higher weight to recently accessed entries", () => {
		const recent = makeEntry({
			entity: "recent",
			salience: 0.5,
			accessedAt: new Date().toISOString(), // Now
		});
		const old = makeEntry({
			entity: "old",
			salience: 0.5,
			accessedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
		});

		const packed = packFacts([old, recent], 10000);
		expect(packed[0].entity).toBe("recent");
	});

	it("incorporates query embedding relevance when provided", () => {
		// Create entries with simple embeddings
		const relevant = makeEntry({
			entity: "relevant",
			salience: 0.5,
			embedding: new Float64Array([1, 0, 0]),
		});
		const irrelevant = makeEntry({
			entity: "irrelevant",
			salience: 0.5,
			embedding: new Float64Array([0, 0, 1]),
		});

		// Query embedding aligned with "relevant"
		const queryEmbedding = [1, 0, 0];
		const packed = packFacts([irrelevant, relevant], 10000, queryEmbedding);
		expect(packed[0].entity).toBe("relevant");
	});

	it("handles entries without embeddings when queryEmbedding is provided", () => {
		const withEmb = makeEntry({
			entity: "with-emb",
			salience: 0.5,
			embedding: new Float64Array([1, 0, 0]),
		});
		const noEmb = makeEntry({
			entity: "no-emb",
			salience: 0.5,
			embedding: null,
		});

		const packed = packFacts([noEmb, withEmb], 10000, [1, 0, 0]);
		// Both should appear; null embedding gets relevance=1.0 fallback
		expect(packed.length).toBe(2);
	});
});
