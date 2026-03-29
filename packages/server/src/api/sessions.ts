/**
 * Session management REST API routes.
 *
 * GET    /api/sessions      -- list sessions
 * GET    /api/sessions/:id  -- read a session's entries
 * DELETE /api/sessions/:id  -- delete a session
 */

import { existsSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import type { FastifyInstance } from "fastify";
import type { SessionSummary } from "../types.js";

export interface SessionRoutesConfig {
	sessionsDir: string;
}

export function registerSessionRoutes(fastify: FastifyInstance, config: SessionRoutesConfig): void {
	const { sessionsDir } = config;

	// ------------------------------------------------------------------
	// GET /api/sessions
	// ------------------------------------------------------------------
	fastify.get("/api/sessions", async () => {
		if (!existsSync(sessionsDir)) {
			return { sessions: [] };
		}

		const files = readdirSync(sessionsDir).filter((f) => f.endsWith(".jsonl"));
		const sessions: SessionSummary[] = [];

		for (const file of files) {
			const filePath = join(sessionsDir, file);
			try {
				const stat = statSync(filePath);
				const raw = readFileSync(filePath, "utf8");
				const lines = raw.trim().split("\n").filter(Boolean);

				// Parse header to get session ID
				let id = file.replace(".jsonl", "");
				let timestamp = stat.mtime.toISOString();
				let messageCount = 0;

				if (lines.length > 0) {
					try {
						const header = JSON.parse(lines[0]);
						if (header.type === "session" && header.id) {
							id = header.id;
							timestamp = header.timestamp || timestamp;
						}
					} catch {
						// Use filename-based defaults
					}

					// Count message entries
					messageCount = lines.filter((line) => {
						try {
							const entry = JSON.parse(line);
							return entry.type === "message";
						} catch {
							return false;
						}
					}).length;
				}

				sessions.push({
					id,
					name: id,
					timestamp,
					messageCount,
				});
			} catch {
				// Skip files that can't be read
			}
		}

		// Sort by timestamp descending (newest first)
		sessions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

		return { sessions };
	});

	// ------------------------------------------------------------------
	// GET /api/sessions/:id
	// ------------------------------------------------------------------
	fastify.get<{ Params: { id: string } }>("/api/sessions/:id", async (request, reply) => {
		const { id } = request.params;
		const filePath = join(sessionsDir, `${id}.jsonl`);

		if (!existsSync(filePath)) {
			return reply.status(404).send({ error: "Session not found" });
		}

		try {
			const raw = readFileSync(filePath, "utf8");
			const lines = raw.trim().split("\n").filter(Boolean);
			const entries: unknown[] = lines.map((line) => JSON.parse(line));
			return { id, entries };
		} catch (err) {
			return reply.status(500).send({
				error: `Failed to read session: ${err instanceof Error ? err.message : String(err)}`,
			});
		}
	});

	// ------------------------------------------------------------------
	// DELETE /api/sessions/:id
	// ------------------------------------------------------------------
	fastify.delete<{ Params: { id: string } }>("/api/sessions/:id", async (request, reply) => {
		const { id } = request.params;
		const filePath = join(sessionsDir, `${id}.jsonl`);

		if (!existsSync(filePath)) {
			return reply.status(404).send({ error: "Session not found" });
		}

		try {
			rmSync(filePath);
			return { ok: true };
		} catch (err) {
			return reply.status(500).send({
				error: `Failed to delete session: ${err instanceof Error ? err.message : String(err)}`,
			});
		}
	});
}
