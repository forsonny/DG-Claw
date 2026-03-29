/**
 * Append-only audit log for memory operations.
 *
 * Every memory create, supersede, access, decay, rejection, and quarantine
 * is logged for debugging and accountability.
 */

import type Database from "better-sqlite3";
import type { AuditAction, AuditEntry } from "./types.js";

interface AuditRow {
	id: number;
	memory_id: string | null;
	action: string;
	actor: string;
	details: string | null;
	timestamp: string;
}

function rowToEntry(row: AuditRow): AuditEntry {
	return {
		id: row.id,
		memoryId: row.memory_id,
		action: row.action as AuditAction,
		actor: row.actor,
		details: row.details ? (JSON.parse(row.details) as Record<string, unknown>) : null,
		timestamp: row.timestamp,
	};
}

/**
 * Append an entry to the audit log.
 *
 * @param db - Database handle
 * @param memoryId - ID of the memory entry (null for system-level events like bulk decay)
 * @param action - The action being logged
 * @param actor - Who performed the action ("extractor", "ratchet", "user", "system", "retriever")
 * @param details - Optional JSON-serializable details
 */
export function appendAudit(
	db: Database.Database,
	memoryId: string | null,
	action: AuditAction,
	actor: string,
	details?: Record<string, unknown>,
): void {
	const stmt = db.prepare(`
		INSERT INTO audit_log (memory_id, action, actor, details, timestamp)
		VALUES (?, ?, ?, ?, ?)
	`);
	stmt.run(memoryId, action, actor, details ? JSON.stringify(details) : null, new Date().toISOString());
}

/**
 * Get all audit entries for a given memory, ordered by timestamp ascending.
 */
export function getAuditLog(db: Database.Database, memoryId: string): AuditEntry[] {
	const stmt = db.prepare(`
		SELECT * FROM audit_log
		WHERE memory_id = ?
		ORDER BY id ASC
	`);
	const rows = stmt.all(memoryId) as AuditRow[];
	return rows.map(rowToEntry);
}
