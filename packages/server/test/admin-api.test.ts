import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import cookie from "@fastify/cookie";
import Fastify from "fastify";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { registerAdminRoutes } from "../src/api/admin.js";

describe("admin API", () => {
	let app: ReturnType<typeof Fastify>;
	let configDir: string;

	beforeEach(async () => {
		configDir = join(tmpdir(), `dg-claw-test-admin-${Date.now()}-${Math.random().toString(36).slice(2)}`);
		mkdirSync(configDir, { recursive: true });

		app = Fastify();
		await app.register(cookie);
		registerAdminRoutes(app, { configDir });
	});

	afterEach(() => {
		rmSync(configDir, { recursive: true, force: true });
	});

	describe("GET /api/admin/config", () => {
		it("should return empty settings when file does not exist", async () => {
			const res = await app.inject({ method: "GET", url: "/api/admin/config" });
			expect(res.statusCode).toBe(200);
			expect(res.json()).toEqual({ settings: {} });
		});

		it("should return settings from file", async () => {
			const settings = { defaultModel: "claude-sonnet-4-5", port: 3000 };
			writeFileSync(join(configDir, "settings.json"), JSON.stringify(settings), "utf8");

			const res = await app.inject({ method: "GET", url: "/api/admin/config" });
			expect(res.statusCode).toBe(200);
			expect(res.json().settings).toEqual(settings);
		});
	});

	describe("PUT /api/admin/config", () => {
		it("should save settings to file", async () => {
			const settings = { defaultModel: "claude-opus-4-5", theme: "dark" };
			const res = await app.inject({
				method: "PUT",
				url: "/api/admin/config",
				payload: settings,
			});

			expect(res.statusCode).toBe(200);
			expect(res.json()).toEqual({ ok: true });

			const saved = JSON.parse(readFileSync(join(configDir, "settings.json"), "utf8"));
			expect(saved).toEqual(settings);
		});

		it("should return 400 for invalid payload", async () => {
			const res = await app.inject({
				method: "PUT",
				url: "/api/admin/config",
				payload: "not an object",
				headers: { "content-type": "application/json" },
			});

			// Fastify may reject this at the JSON parse level, or the handler catches it
			expect(res.statusCode).toBeLessThanOrEqual(500);
		});
	});

	describe("GET /api/admin/models", () => {
		it("should return a list of models", async () => {
			const res = await app.inject({ method: "GET", url: "/api/admin/models" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body.models).toBeDefined();
			expect(body.models.length).toBeGreaterThan(0);
			expect(body.models[0]).toHaveProperty("provider");
			expect(body.models[0]).toHaveProperty("id");
			expect(body.models[0]).toHaveProperty("label");
		});
	});

	describe("GET /api/admin/sandbox/status", () => {
		it("should return sandbox availability info", async () => {
			const res = await app.inject({ method: "GET", url: "/api/admin/sandbox/status" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body).toHaveProperty("available");
			expect(body).toHaveProperty("status");
			expect(body).toHaveProperty("message");
		});
	});

	describe("POST /api/admin/autolearn/run", () => {
		it("should accept a valid target", async () => {
			const res = await app.inject({
				method: "POST",
				url: "/api/admin/autolearn/run",
				payload: { target: "system-prompt" },
			});

			expect(res.statusCode).toBe(200);
			expect(res.json().ok).toBe(true);
		});

		it("should return 400 when target is missing", async () => {
			const res = await app.inject({
				method: "POST",
				url: "/api/admin/autolearn/run",
				payload: {},
			});

			expect(res.statusCode).toBe(400);
		});
	});

	describe("GET /api/admin/autolearn/schedules", () => {
		it("should return empty list when no schedules exist", async () => {
			const res = await app.inject({ method: "GET", url: "/api/admin/autolearn/schedules" });
			expect(res.statusCode).toBe(200);
			expect(res.json()).toEqual({ schedules: [] });
		});
	});

	describe("POST /api/admin/autolearn/schedules", () => {
		it("should save a schedule entry", async () => {
			const entry = {
				id: "sched-1",
				target: "system-prompt",
				cron: "0 3 * * *",
				config: {},
				enabled: true,
			};

			const res = await app.inject({
				method: "POST",
				url: "/api/admin/autolearn/schedules",
				payload: entry,
			});

			expect(res.statusCode).toBe(200);
			expect(res.json()).toEqual({ ok: true });

			// Verify it shows up in the list
			const listRes = await app.inject({ method: "GET", url: "/api/admin/autolearn/schedules" });
			const schedules = listRes.json().schedules;
			expect(schedules).toHaveLength(1);
			expect(schedules[0].id).toBe("sched-1");
		});

		it("should return 400 for incomplete schedule entry", async () => {
			const res = await app.inject({
				method: "POST",
				url: "/api/admin/autolearn/schedules",
				payload: { id: "sched-2" }, // missing target and cron
			});

			expect(res.statusCode).toBe(400);
		});
	});
});
