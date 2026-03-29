/**
 * Salience decay and reinforcement.
 *
 * Salience scores determine memory importance. They decay on each compaction
 * cycle (natural forgetting) and are reinforced when memories are accessed
 * (retrieval strengthens retention).
 */

import type Database from "better-sqlite3";

/**
 * Decay salience of all active entries by multiplying by `rate`.
 *
 * @param db - Database handle
 * @param rate - Decay multiplier (e.g. 0.95 reduces salience by 5%)
 * @returns Number of entries updated
 */
export function decayAll(db: Database.Database, rate: number): number {
	const stmt = db.prepare(`
		UPDATE memories
		SET salience = salience * ?,
		    updated_at = ?
		WHERE status = 'active'
	`);
	const result = stmt.run(rate, new Date().toISOString());
	return result.changes;
}

/**
 * Reinforce a specific entry's salience by adding `boost`, capped at 1.0.
 *
 * @param db - Database handle
 * @param id - Memory entry ID
 * @param boost - Amount to add to salience (e.g. 0.1)
 */
export function reinforce(db: Database.Database, id: string, boost: number): void {
	const stmt = db.prepare(`
		UPDATE memories
		SET salience = MIN(1.0, salience + ?),
		    updated_at = ?
		WHERE id = ?
	`);
	stmt.run(boost, new Date().toISOString(), id);
}

/**
 * Archive all active entries with salience below the given threshold.
 *
 * @param db - Database handle
 * @param threshold - Minimum salience to remain active (e.g. 0.05)
 * @returns Number of entries archived
 */
export function archiveBelowThreshold(db: Database.Database, threshold: number): number {
	const stmt = db.prepare(`
		UPDATE memories
		SET status = 'archived',
		    updated_at = ?
		WHERE status = 'active' AND salience < ?
	`);
	const result = stmt.run(new Date().toISOString(), threshold);
	return result.changes;
}
