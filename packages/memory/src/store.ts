/**
 * MemoryStore -- CRUD operations on the memories table.
 *
 * All methods are synchronous (better-sqlite3 is synchronous).
 * Takes a Database handle from createMemoryDb().
 */

import type Database from "better-sqlite3";
import type { MemoryCategory, MemoryEntry, MemoryScope } from "./types.js";
import { AGENT_SPACE_CATEGORIES } from "./types.js";

// ============================================================================
// Input type for insert (generated fields excluded)
// ============================================================================

export interface InsertMemoryInput {
	entity: string;
	slot: string;
	value: string;
	category: MemoryCategory;
	scope: MemoryScope;
	salience: number;
	confidence: number;
	embedding?: Float64Array | null;
	parentId?: string | null;
	sourceSessionId?: string | null;
	sourceTurn?: number | null;
	status?: "active" | "completed" | "archived";
	expiresAt?: string | null;
}

// ============================================================================
// Row <-> MemoryEntry mapping
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
		category: row.category as MemoryCategory,
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
// MemoryStore
// ============================================================================

/** Default salience boost on access (spec section 6). */
const ACCESS_SALIENCE_BOOST = 0.1;

export class MemoryStore {
	private readonly db: Database.Database;

	// Prepared statements (lazily cached)
	private stmtInsert: Database.Statement | undefined;
	private stmtGetById: Database.Statement | undefined;
	private stmtGetByEntitySlot: Database.Statement | undefined;
	private stmtArchive: Database.Statement | undefined;
	private stmtMarkAccessed: Database.Statement | undefined;
	private stmtGetByCategory: Database.Statement | undefined;
	private stmtGetTopBySalience: Database.Statement | undefined;

	constructor(db: Database.Database) {
		this.db = db;
	}

	/** Insert a new memory entry. Returns the persisted entry with generated fields. */
	insert(input: InsertMemoryInput): MemoryEntry {
		const id = crypto.randomUUID();
		const now = new Date().toISOString();
		const isAgentSpace = (AGENT_SPACE_CATEGORIES as readonly string[]).includes(input.category);
		const scopeAgentId = isAgentSpace ? (input.scope.agentId ?? null) : null;
		const embeddingBuf = input.embedding
			? Buffer.from(input.embedding.buffer, input.embedding.byteOffset, input.embedding.byteLength)
			: null;

		if (!this.stmtInsert) {
			this.stmtInsert = this.db.prepare(`
				INSERT INTO memories (
					id, entity, slot, value, category,
					scope_user_id, scope_agent_id, scope_group_id,
					salience, confidence, embedding,
					parent_id, source_session_id, source_turn,
					status, expires_at,
					created_at, updated_at, accessed_at
				) VALUES (
					?, ?, ?, ?, ?,
					?, ?, ?,
					?, ?, ?,
					?, ?, ?,
					?, ?,
					?, ?, ?
				)
			`);
		}

		this.stmtInsert.run(
			id,
			input.entity,
			input.slot,
			input.value,
			input.category,
			input.scope.userId,
			scopeAgentId,
			input.scope.groupId,
			input.salience,
			input.confidence,
			embeddingBuf,
			input.parentId ?? null,
			input.sourceSessionId ?? null,
			input.sourceTurn ?? null,
			input.status ?? "active",
			input.expiresAt ?? null,
			now,
			now,
			now,
		);

		return this.getById(id)!;
	}

	/** Retrieve a single memory by id. Returns null if not found. */
	getById(id: string): MemoryEntry | null {
		if (!this.stmtGetById) {
			this.stmtGetById = this.db.prepare("SELECT * FROM memories WHERE id = ?");
		}
		const row = this.stmtGetById.get(id) as MemoryRow | undefined;
		return row ? rowToEntry(row) : null;
	}

	/** Get all entries matching entity + slot within a scope. */
	getByEntitySlot(entity: string, slot: string, scope: MemoryScope): MemoryEntry[] {
		if (!this.stmtGetByEntitySlot) {
			this.stmtGetByEntitySlot = this.db.prepare(`
				SELECT * FROM memories
				WHERE entity = ? AND slot = ? AND scope_group_id = ? AND scope_user_id = ?
				  AND status = 'active'
				ORDER BY salience DESC
			`);
		}
		const rows = this.stmtGetByEntitySlot.all(entity, slot, scope.groupId, scope.userId) as MemoryRow[];
		return rows.map(rowToEntry);
	}

	/**
	 * Supersede an existing entry: archives the old entry and creates a new one
	 * linked via parentId.
	 */
	supersede(oldId: string, input: InsertMemoryInput): MemoryEntry {
		if (!this.stmtArchive) {
			this.stmtArchive = this.db.prepare("UPDATE memories SET status = 'archived', updated_at = ? WHERE id = ?");
		}

		const now = new Date().toISOString();
		this.stmtArchive.run(now, oldId);

		return this.insert({ ...input, parentId: oldId });
	}

	/** Mark an entry as accessed: updates accessedAt, bumps salience by 0.1 (capped at 1.0). */
	markAccessed(id: string): void {
		if (!this.stmtMarkAccessed) {
			this.stmtMarkAccessed = this.db.prepare(`
				UPDATE memories
				SET accessed_at = ?,
				    salience = MIN(1.0, salience + ?),
				    updated_at = ?
				WHERE id = ?
			`);
		}
		const now = new Date().toISOString();
		this.stmtMarkAccessed.run(now, ACCESS_SALIENCE_BOOST, now, id);
	}

	/** Get all active entries of a given category within a scope. */
	getByCategory(category: MemoryCategory, scope: MemoryScope): MemoryEntry[] {
		if (!this.stmtGetByCategory) {
			this.stmtGetByCategory = this.db.prepare(`
				SELECT * FROM memories
				WHERE category = ? AND scope_group_id = ? AND scope_user_id = ?
				  AND status = 'active'
				ORDER BY salience DESC
			`);
		}
		const rows = this.stmtGetByCategory.all(category, scope.groupId, scope.userId) as MemoryRow[];
		return rows.map(rowToEntry);
	}

	/** Get the top N active entries by salience within a scope. */
	getTopBySalience(scope: MemoryScope, limit: number): MemoryEntry[] {
		if (!this.stmtGetTopBySalience) {
			this.stmtGetTopBySalience = this.db.prepare(`
				SELECT * FROM memories
				WHERE scope_group_id = ? AND scope_user_id = ?
				  AND status = 'active'
				ORDER BY salience DESC
				LIMIT ?
			`);
		}
		const rows = this.stmtGetTopBySalience.all(scope.groupId, scope.userId, limit) as MemoryRow[];
		return rows.map(rowToEntry);
	}
}
