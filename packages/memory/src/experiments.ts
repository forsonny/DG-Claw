/**
 * Experiment tracking for the ratchet loop.
 *
 * Logs each mutation attempt with its score, status, and optional git commit.
 * Used by the auto-learning engine (subsystem 4) to track optimization history.
 */

import type Database from "better-sqlite3";
import type { ExperimentEntry, ExperimentStatus } from "./types.js";

interface ExperimentRow {
	id: number;
	target: string;
	mutation: string;
	score: number | null;
	status: string;
	commit_hash: string | null;
	timestamp: string;
}

function rowToEntry(row: ExperimentRow): ExperimentEntry {
	return {
		id: row.id,
		target: row.target,
		mutation: row.mutation,
		score: row.score,
		status: row.status as ExperimentStatus,
		commitHash: row.commit_hash,
		timestamp: row.timestamp,
	};
}

/**
 * Log an experiment to the experiments table.
 *
 * @param db - Database handle
 * @param target - What was optimized (skill name, prompt template, etc.)
 * @param mutation - Description of the change
 * @param score - Evaluation score (null if crashed/untested)
 * @param status - Outcome: "kept", "discarded", or "crashed"
 * @param commitHash - Optional git commit hash in skills/ repo
 */
export function logExperiment(
	db: Database.Database,
	target: string,
	mutation: string,
	score: number | null,
	status: ExperimentStatus,
	commitHash?: string,
): void {
	const stmt = db.prepare(`
		INSERT INTO experiments (target, mutation, score, status, commit_hash, timestamp)
		VALUES (?, ?, ?, ?, ?, ?)
	`);
	stmt.run(target, mutation, score, status, commitHash ?? null, new Date().toISOString());
}

/**
 * Get all experiments for a given target, ordered by timestamp ascending.
 */
export function getExperimentHistory(db: Database.Database, target: string): ExperimentEntry[] {
	const stmt = db.prepare(`
		SELECT * FROM experiments
		WHERE target = ?
		ORDER BY id ASC
	`);
	const rows = stmt.all(target) as ExperimentRow[];
	return rows.map(rowToEntry);
}

/**
 * Get the best-scoring experiment for a given target.
 * Returns null if no scored experiments exist for the target.
 */
export function getBestExperiment(db: Database.Database, target: string): ExperimentEntry | null {
	const stmt = db.prepare(`
		SELECT * FROM experiments
		WHERE target = ? AND score IS NOT NULL
		ORDER BY score DESC
		LIMIT 1
	`);
	const row = stmt.get(target) as ExperimentRow | undefined;
	return row ? rowToEntry(row) : null;
}
