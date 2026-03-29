/**
 * Memory dashboard REST API routes.
 *
 * GET /api/memory/facts         -- browse facts with filtering
 * GET /api/memory/top-of-mind   -- L0 summary
 * GET /api/memory/experiments   -- ratchet experiment history
 * GET /api/memory/stats         -- memory statistics
 */

import {
	buildScopeKey,
	closeMemoryDb,
	createMemoryDb,
	getExperimentHistory,
	getTopOfMind,
	type MemoryCategory,
	type MemoryEntry,
	type MemoryScope,
	MemoryStore,
} from "@dg-claw/memory";
import type Database from "better-sqlite3";
import type { FastifyInstance } from "fastify";

export interface MemoryRoutesConfig {
	memoryDbPath: string;
}

/**
 * Open the memory database. Returns the Database handle.
 * The caller is responsible for closing it.
 */
function openDb(path: string): Database.Database {
	return createMemoryDb(path);
}

export function registerMemoryRoutes(fastify: FastifyInstance, config: MemoryRoutesConfig): void {
	const { memoryDbPath } = config;

	// ------------------------------------------------------------------
	// GET /api/memory/facts
	// ------------------------------------------------------------------
	fastify.get<{
		Querystring: {
			groupId?: string;
			category?: string;
			limit?: string;
			offset?: string;
		};
	}>("/api/memory/facts", async (request) => {
		const { groupId = "default", category, limit = "50", offset = "0" } = request.query;
		const db = openDb(memoryDbPath);

		try {
			const store = new MemoryStore(db);
			const scope: MemoryScope = { userId: "default", groupId };

			let facts: MemoryEntry[];
			if (category) {
				facts = store.getByCategory(category as MemoryCategory, scope);
			} else {
				facts = store.getTopBySalience(scope, 500); // Get all active, cap at 500
			}

			// Apply offset/limit
			const offsetNum = Number.parseInt(offset, 10) || 0;
			const limitNum = Number.parseInt(limit, 10) || 50;
			const paginated = facts.slice(offsetNum, offsetNum + limitNum);

			return {
				facts: paginated,
				total: facts.length,
				offset: offsetNum,
				limit: limitNum,
			};
		} finally {
			closeMemoryDb(db);
		}
	});

	// ------------------------------------------------------------------
	// GET /api/memory/top-of-mind
	// ------------------------------------------------------------------
	fastify.get<{
		Querystring: { groupId?: string };
	}>("/api/memory/top-of-mind", async (request) => {
		const { groupId = "default" } = request.query;
		const db = openDb(memoryDbPath);

		try {
			const scopeKey = buildScopeKey({ userId: "default", groupId });
			const summary = getTopOfMind(db, scopeKey);
			return { summary: summary ?? "" };
		} finally {
			closeMemoryDb(db);
		}
	});

	// ------------------------------------------------------------------
	// GET /api/memory/experiments
	// ------------------------------------------------------------------
	fastify.get<{
		Querystring: { target?: string };
	}>("/api/memory/experiments", async (request) => {
		const { target } = request.query;
		const db = openDb(memoryDbPath);

		try {
			if (target) {
				const history = getExperimentHistory(db, target);
				return { experiments: history };
			}

			// If no target specified, return all experiments (query directly)
			const stmt = db.prepare("SELECT * FROM experiments ORDER BY timestamp DESC LIMIT 100");
			const rows = stmt.all();
			return { experiments: rows };
		} finally {
			closeMemoryDb(db);
		}
	});

	// ------------------------------------------------------------------
	// GET /api/memory/stats
	// ------------------------------------------------------------------
	fastify.get<{
		Querystring: { groupId?: string };
	}>("/api/memory/stats", async (request) => {
		const { groupId = "default" } = request.query;
		const db = openDb(memoryDbPath);

		try {
			// Total active facts
			const totalStmt = db.prepare(
				"SELECT COUNT(*) as count FROM memories WHERE scope_group_id = ? AND status = 'active'",
			);
			const total = (totalStmt.get(groupId) as { count: number }).count;

			// By category
			const byCatStmt = db.prepare(
				"SELECT category, COUNT(*) as count FROM memories WHERE scope_group_id = ? AND status = 'active' GROUP BY category",
			);
			const byCategory = byCatStmt.all(groupId) as Array<{ category: string; count: number }>;

			// By salience range
			const highStmt = db.prepare(
				"SELECT COUNT(*) as count FROM memories WHERE scope_group_id = ? AND status = 'active' AND salience >= 0.7",
			);
			const high = (highStmt.get(groupId) as { count: number }).count;

			const medStmt = db.prepare(
				"SELECT COUNT(*) as count FROM memories WHERE scope_group_id = ? AND status = 'active' AND salience >= 0.3 AND salience < 0.7",
			);
			const medium = (medStmt.get(groupId) as { count: number }).count;

			const lowStmt = db.prepare(
				"SELECT COUNT(*) as count FROM memories WHERE scope_group_id = ? AND status = 'active' AND salience < 0.3",
			);
			const low = (lowStmt.get(groupId) as { count: number }).count;

			return {
				total,
				byCategory: Object.fromEntries(byCategory.map((r) => [r.category, r.count])),
				bySalience: { high, medium, low },
			};
		} finally {
			closeMemoryDb(db);
		}
	});
}
