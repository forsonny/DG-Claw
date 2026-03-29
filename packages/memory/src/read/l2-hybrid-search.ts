/**
 * L2 Hybrid search -- on-demand BM25 + vector cosine fusion.
 *
 * Triggered when L1 facts are insufficient (agent calls memory_search tool).
 * Uses reciprocal rank fusion to combine keyword (BM25 via FTS5) and
 * semantic (vector cosine similarity) search results.
 */

import type Database from "better-sqlite3";
import type { MemoryEntry, MemoryScope, MemorySearchResult } from "../types.js";

// ============================================================================
// Row mapping (same shape as store.ts -- extracted here to avoid coupling)
// ============================================================================

interface MemoryRow {
	id: string;
	entity: string;
	slot: string;
	value: string;
	category: string;
	scope_user_id: string;
	scope_agent_id: string | null;
	scope_group_id: string;
	salience: number;
	confidence: number;
	embedding: Buffer | null;
	parent_id: string | null;
	source_session_id: string | null;
	source_turn: number | null;
	status: string;
	expires_at: string | null;
	created_at: string;
	updated_at: string;
	accessed_at: string;
}

function rowToEntry(row: MemoryRow): MemoryEntry {
	return {
		id: row.id,
		entity: row.entity,
		slot: row.slot,
		value: row.value,
		category: row.category as MemoryEntry["category"],
		scopeUserId: row.scope_user_id,
		scopeAgentId: row.scope_agent_id,
		scopeGroupId: row.scope_group_id,
		salience: row.salience,
		confidence: row.confidence,
		embedding: row.embedding
			? new Float64Array(row.embedding.buffer, row.embedding.byteOffset, row.embedding.byteLength / 8)
			: null,
		parentId: row.parent_id,
		sourceSessionId: row.source_session_id,
		sourceTurn: row.source_turn,
		status: row.status as MemoryEntry["status"],
		expiresAt: row.expires_at,
		createdAt: row.created_at,
		updatedAt: row.updated_at,
		accessedAt: row.accessed_at,
	};
}

// ============================================================================
// Cosine similarity
// ============================================================================

function cosineSimilarity(a: Float64Array, b: number[]): number {
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
	return denom === 0 ? 0 : dot / denom;
}

// ============================================================================
// BM25 search (FTS5)
// ============================================================================

/**
 * Sanitize a plain-text query for FTS5.
 *
 * FTS5 treats hyphens as NOT operators and has other special syntax.
 * This wraps each whitespace-separated token in double quotes so that
 * they are treated as literal phrase searches, preserving hyphens
 * and other punctuation inside token boundaries.
 *
 * Tokens ending in * retain the prefix operator (e.g. "auth*").
 */
function sanitizeFtsQuery(query: string): string {
	return query
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((token) => {
			if (token.endsWith("*")) {
				// Prefix search: quote the stem and re-append *
				const stem = token.slice(0, -1);
				return `"${stem.replace(/"/g, '""')}"*`;
			}
			return `"${token.replace(/"/g, '""')}"`;
		})
		.join(" ");
}

/**
 * Search memories using BM25 keyword matching via FTS5.
 *
 * @param db - Database handle
 * @param query - Plain-text query (space-separated terms; hyphens are preserved)
 * @param scope - Scope to filter results
 * @param limit - Maximum number of results
 */
export function searchBM25(
	db: Database.Database,
	query: string,
	scope: MemoryScope,
	limit: number,
): MemorySearchResult[] {
	// FTS5 match with BM25 ranking, joined back to memories for scope filtering
	const stmt = db.prepare(`
		SELECT m.*, bm25(memories_fts) AS rank
		FROM memories_fts fts
		JOIN memories m ON m.rowid = fts.rowid
		WHERE memories_fts MATCH ?
		  AND m.scope_group_id = ?
		  AND m.scope_user_id = ?
		  AND m.status = 'active'
		ORDER BY rank
		LIMIT ?
	`);

	try {
		const sanitized = sanitizeFtsQuery(query);
		const rows = stmt.all(sanitized, scope.groupId, scope.userId, limit) as (MemoryRow & {
			rank: number;
		})[];
		return rows.map((row) => ({
			entry: rowToEntry(row),
			// BM25 rank is negative (lower = better). Negate for a positive score.
			score: -row.rank,
		}));
	} catch {
		// FTS5 query syntax errors should not crash the search
		return [];
	}
}

// ============================================================================
// Vector search
// ============================================================================

/**
 * Search memories by cosine similarity against a query embedding.
 *
 * Operates on pre-loaded entries (no DB access). Entries without
 * embeddings are skipped.
 *
 * @param entries - Candidate entries (typically loaded from DB)
 * @param queryEmbedding - Query vector
 * @param limit - Maximum number of results
 */
export function searchVector(entries: MemoryEntry[], queryEmbedding: number[], limit: number): MemorySearchResult[] {
	const scored: MemorySearchResult[] = [];

	for (const entry of entries) {
		if (!entry.embedding || entry.embedding.length === 0) continue;
		const sim = cosineSimilarity(entry.embedding, queryEmbedding);
		scored.push({ entry, score: sim });
	}

	scored.sort((a, b) => b.score - a.score);
	return scored.slice(0, limit);
}

// ============================================================================
// Hybrid search (reciprocal rank fusion)
// ============================================================================

export interface HybridSearchOptions {
	limit: number;
	/** Weight for BM25 results in fusion (default 0.3). */
	bm25Weight: number;
	/** Weight for vector results in fusion (default 0.7). */
	vectorWeight: number;
}

/**
 * Hybrid search combining BM25 and vector cosine with reciprocal rank fusion.
 *
 * RRF formula: score(d) = sum_over_lists( weight / (k + rank_in_list) )
 * where k=60 (standard RRF constant).
 *
 * @param db - Database handle
 * @param query - Keyword query for BM25
 * @param queryEmbedding - Query vector for cosine similarity (can be empty to skip vector)
 * @param scope - Scope to filter results
 * @param options - Search options
 */
export function hybridSearch(
	db: Database.Database,
	query: string,
	queryEmbedding: number[],
	scope: MemoryScope,
	options: HybridSearchOptions,
): MemorySearchResult[] {
	const k = 60; // Standard RRF constant
	const fetchLimit = options.limit * 3; // Over-fetch for fusion

	// BM25 results
	const bm25Results = searchBM25(db, query, scope, fetchLimit);

	// Vector results (need to load entries first if we have an embedding)
	let vectorResults: MemorySearchResult[] = [];
	if (queryEmbedding.length > 0) {
		// Load entries with embeddings from DB for vector search
		const stmt = db.prepare(`
			SELECT * FROM memories
			WHERE scope_group_id = ? AND scope_user_id = ?
			  AND status = 'active' AND embedding IS NOT NULL
			ORDER BY salience DESC
			LIMIT ?
		`);
		const rows = stmt.all(scope.groupId, scope.userId, fetchLimit) as MemoryRow[];
		const entries = rows.map(rowToEntry);
		vectorResults = searchVector(entries, queryEmbedding, fetchLimit);
	}

	// Reciprocal Rank Fusion
	const fusedScores = new Map<string, { entry: MemoryEntry; score: number }>();

	// Add BM25 contributions
	for (let rank = 0; rank < bm25Results.length; rank++) {
		const result = bm25Results[rank];
		const rrfScore = options.bm25Weight / (k + rank + 1);
		const existing = fusedScores.get(result.entry.id);
		if (existing) {
			existing.score += rrfScore;
		} else {
			fusedScores.set(result.entry.id, { entry: result.entry, score: rrfScore });
		}
	}

	// Add vector contributions
	for (let rank = 0; rank < vectorResults.length; rank++) {
		const result = vectorResults[rank];
		const rrfScore = options.vectorWeight / (k + rank + 1);
		const existing = fusedScores.get(result.entry.id);
		if (existing) {
			existing.score += rrfScore;
		} else {
			fusedScores.set(result.entry.id, { entry: result.entry, score: rrfScore });
		}
	}

	// Sort by fused score descending
	const sorted = Array.from(fusedScores.values()).sort((a, b) => b.score - a.score);
	return sorted.slice(0, options.limit).map(({ entry, score }) => ({ entry, score }));
}
