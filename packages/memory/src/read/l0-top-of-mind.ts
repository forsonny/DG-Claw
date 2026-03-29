/**
 * L0 Top-of-Mind -- always-present summary (~500 tokens).
 *
 * Injected into every LLM call without retrieval.
 * Contains user profile snapshot, active goals, and a short context summary
 * that is updated on each compaction cycle.
 *
 * Stored in the `top_of_mind` table, keyed by scope.
 */

import type Database from "better-sqlite3";
import type { MemoryScope } from "../types.js";

/**
 * Build a scope key string from a MemoryScope.
 *
 * Format: "userId:agentId:groupId" (agent-space) or "userId::groupId" (user-space).
 */
export function buildScopeKey(scope: MemoryScope): string {
	const agentPart = scope.agentId ?? "";
	return `${scope.userId}:${agentPart}:${scope.groupId}`;
}

/**
 * Get the top-of-mind summary for a scope.
 *
 * @returns The summary text, or null if none exists.
 */
export function getTopOfMind(db: Database.Database, scopeKey: string): string | null {
	const stmt = db.prepare("SELECT summary FROM top_of_mind WHERE scope_key = ?");
	const row = stmt.get(scopeKey) as { summary: string } | undefined;
	return row?.summary ?? null;
}

/**
 * Update (upsert) the top-of-mind summary for a scope.
 *
 * This replaces any existing summary -- the top-of-mind is a single
 * rolling snapshot, not appended.
 */
export function updateTopOfMind(db: Database.Database, scopeKey: string, summary: string): void {
	const stmt = db.prepare(`
		INSERT INTO top_of_mind (scope_key, summary, updated_at)
		VALUES (?, ?, ?)
		ON CONFLICT(scope_key) DO UPDATE SET
			summary = excluded.summary,
			updated_at = excluded.updated_at
	`);
	stmt.run(scopeKey, summary, new Date().toISOString());
}
