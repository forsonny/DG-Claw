/**
 * L1 Token-budgeted injection.
 *
 * On each turn, score all candidate facts by:
 *   salience * recencyWeight * relevance
 *
 * Sort descending, pack greedily until maxTokens is exhausted.
 *
 * Token estimation: Math.ceil(text.length / 4) (conservative).
 */

import type { MemoryEntry } from "../types.js";

// ============================================================================
// Scoring helpers
// ============================================================================

/** Rough token estimation: ~4 chars per token. */
function estimateTokens(entry: MemoryEntry): number {
	const text = `${entry.entity} ${entry.slot} ${entry.value}`;
	return Math.ceil(text.length / 4);
}

/** Recency weight: 1 / (1 + daysSinceAccess). Recent = higher weight. */
function recencyWeight(accessedAt: string): number {
	const accessedMs = new Date(accessedAt).getTime();
	const nowMs = Date.now();
	const daysSince = Math.max(0, (nowMs - accessedMs) / (1000 * 60 * 60 * 24));
	return 1 / (1 + daysSince);
}

/** Cosine similarity between two vectors. Returns 0 if either is empty. */
export function cosineSimilarity(a: Float64Array | number[], b: number[]): number {
	if (a.length !== b.length || a.length === 0) return 0;

	let dot = 0;
	let normA = 0;
	let normB = 0;
	for (let i = 0; i < a.length; i++) {
		dot += a[i] * b[i];
		normA += a[i] * a[i];
		normB += b[i] * b[i];
	}

	const denom = Math.sqrt(normA) * Math.sqrt(normB);
	if (denom === 0) return 0;
	return dot / denom;
}

// ============================================================================
// Pack facts
// ============================================================================

interface ScoredEntry {
	entry: MemoryEntry;
	score: number;
	tokens: number;
}

/**
 * Score and pack memory entries into a token budget.
 *
 * @param entries - Candidate memory entries (typically top-N by salience from DB)
 * @param maxTokens - Maximum token budget for injection
 * @param queryEmbedding - Optional query vector for relevance scoring
 * @returns Packed entries ordered by score descending, within budget
 */
export function packFacts(entries: MemoryEntry[], maxTokens: number, queryEmbedding?: number[]): MemoryEntry[] {
	if (maxTokens <= 0 || entries.length === 0) {
		return [];
	}

	// Score each entry
	const scored: ScoredEntry[] = entries.map((entry) => {
		const recency = recencyWeight(entry.accessedAt);

		let relevance = 1.0;
		if (queryEmbedding && queryEmbedding.length > 0) {
			if (entry.embedding && entry.embedding.length === queryEmbedding.length) {
				relevance = Math.max(0, cosineSimilarity(entry.embedding, queryEmbedding));
			}
			// If no embedding on the entry, keep relevance=1.0 as fallback
		}

		return {
			entry,
			score: entry.salience * recency * relevance,
			tokens: estimateTokens(entry),
		};
	});

	// Sort by score descending
	scored.sort((a, b) => b.score - a.score);

	// Greedy packing
	const packed: MemoryEntry[] = [];
	let usedTokens = 0;

	for (const item of scored) {
		if (usedTokens + item.tokens > maxTokens) {
			continue; // Skip but keep trying smaller entries
		}
		packed.push(item.entry);
		usedTokens += item.tokens;
	}

	return packed;
}
