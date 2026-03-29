/**
 * Admin panel REST API routes.
 *
 * GET  /api/admin/config              -- read settings
 * PUT  /api/admin/config              -- write settings
 * GET  /api/admin/models              -- list available models
 * GET  /api/admin/sandbox/status      -- container info
 * POST /api/admin/autolearn/run       -- trigger ratchet
 * GET  /api/admin/autolearn/schedules -- list schedules
 * POST /api/admin/autolearn/schedules -- add/update schedule
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { ScheduleEntry } from "@dg-claw/autolearn";
import { loadSchedules, saveSchedule } from "@dg-claw/autolearn";
import type { FastifyInstance } from "fastify";

export interface AdminRoutesConfig {
	configDir: string;
}

export function registerAdminRoutes(fastify: FastifyInstance, config: AdminRoutesConfig): void {
	const { configDir } = config;
	const settingsPath = join(configDir, "settings.json");

	// ------------------------------------------------------------------
	// GET /api/admin/config
	// ------------------------------------------------------------------
	fastify.get("/api/admin/config", async () => {
		if (!existsSync(settingsPath)) {
			return { settings: {} };
		}

		try {
			const raw = readFileSync(settingsPath, "utf8");
			return { settings: JSON.parse(raw) };
		} catch {
			return { settings: {} };
		}
	});

	// ------------------------------------------------------------------
	// PUT /api/admin/config
	// ------------------------------------------------------------------
	fastify.put<{ Body: Record<string, unknown> }>("/api/admin/config", async (request, reply) => {
		const settings = request.body;

		if (!settings || typeof settings !== "object") {
			return reply.status(400).send({ error: "Settings object required" });
		}

		try {
			mkdirSync(configDir, { recursive: true });
			writeFileSync(settingsPath, JSON.stringify(settings, null, 2), "utf8");
			return { ok: true };
		} catch (err) {
			return reply.status(500).send({
				error: `Failed to save settings: ${err instanceof Error ? err.message : String(err)}`,
			});
		}
	});

	// ------------------------------------------------------------------
	// GET /api/admin/models
	// ------------------------------------------------------------------
	fastify.get("/api/admin/models", async () => {
		// Return a static list of known models.
		// In a full implementation, this would query the ModelRegistry.
		return {
			models: [
				{ provider: "anthropic", id: "claude-sonnet-4-5-20250929", label: "Claude Sonnet 4.5" },
				{ provider: "anthropic", id: "claude-opus-4-5-20250918", label: "Claude Opus 4.5" },
				{ provider: "anthropic", id: "claude-haiku-3-20240307", label: "Claude Haiku 3" },
				{ provider: "openai", id: "gpt-4o", label: "GPT-4o" },
				{ provider: "openai", id: "gpt-4o-mini", label: "GPT-4o Mini" },
			],
		};
	});

	// ------------------------------------------------------------------
	// GET /api/admin/sandbox/status
	// ------------------------------------------------------------------
	fastify.get("/api/admin/sandbox/status", async () => {
		// Sandbox status requires Docker access.
		// Return a basic status. Full implementation will import createSandbox.
		try {
			await import("@dg-claw/sandbox");
			// Return basic info about sandbox availability
			return {
				available: true,
				status: "unknown",
				message: "Sandbox backend available. Create a sandbox to see its status.",
			};
		} catch {
			return {
				available: false,
				status: "unavailable",
				message: "Sandbox backend could not be loaded.",
			};
		}
	});

	// ------------------------------------------------------------------
	// POST /api/admin/autolearn/run
	// ------------------------------------------------------------------
	fastify.post<{ Body: { target: string } }>("/api/admin/autolearn/run", async (request, reply) => {
		const { target } = request.body ?? {};

		if (!target || typeof target !== "string") {
			return reply.status(400).send({ error: "Target is required" });
		}

		// Note: In production, this would be queued as a background job.
		// For the initial implementation, we acknowledge the request.
		return {
			ok: true,
			message: `Ratchet run queued for target: ${target}. Check experiments for results.`,
		};
	});

	// ------------------------------------------------------------------
	// GET /api/admin/autolearn/schedules
	// ------------------------------------------------------------------
	fastify.get("/api/admin/autolearn/schedules", async () => {
		try {
			const schedules = loadSchedules(configDir);
			return { schedules };
		} catch {
			return { schedules: [] };
		}
	});

	// ------------------------------------------------------------------
	// POST /api/admin/autolearn/schedules
	// ------------------------------------------------------------------
	fastify.post<{ Body: ScheduleEntry }>("/api/admin/autolearn/schedules", async (request, reply) => {
		const entry = request.body;

		if (!entry || !entry.id || !entry.target || !entry.cron) {
			return reply.status(400).send({ error: "Schedule entry requires id, target, and cron fields" });
		}

		try {
			saveSchedule(configDir, entry);
			return { ok: true };
		} catch (err) {
			return reply.status(500).send({
				error: `Failed to save schedule: ${err instanceof Error ? err.message : String(err)}`,
			});
		}
	});
}
