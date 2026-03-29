import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import cookie from "@fastify/cookie";
import Fastify from "fastify";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { registerSessionRoutes } from "../src/api/sessions.js";

describe("sessions API", () => {
	let app: ReturnType<typeof Fastify>;
	let sessionsDir: string;

	beforeEach(async () => {
		sessionsDir = join(tmpdir(), `dg-claw-test-sessions-${Date.now()}-${Math.random().toString(36).slice(2)}`);
		mkdirSync(sessionsDir, { recursive: true });

		app = Fastify();
		await app.register(cookie);
		registerSessionRoutes(app, { sessionsDir });
	});

	afterEach(() => {
		rmSync(sessionsDir, { recursive: true, force: true });
	});

	function writeSession(id: string, entries: object[]): void {
		const lines = entries.map((e) => JSON.stringify(e)).join("\n");
		writeFileSync(join(sessionsDir, `${id}.jsonl`), lines, "utf8");
	}

	describe("GET /api/sessions", () => {
		it("should return empty list when no sessions exist", async () => {
			const res = await app.inject({ method: "GET", url: "/api/sessions" });
			expect(res.statusCode).toBe(200);
			expect(res.json()).toEqual({ sessions: [] });
		});

		it("should list sessions with metadata", async () => {
			writeSession("session-1", [
				{ type: "session", id: "session-1", timestamp: "2026-03-29T10:00:00.000Z", cwd: "/tmp" },
				{
					type: "message",
					id: "msg-1",
					parentId: null,
					timestamp: "2026-03-29T10:00:01.000Z",
					message: { role: "user", content: "Hello" },
				},
				{
					type: "message",
					id: "msg-2",
					parentId: "msg-1",
					timestamp: "2026-03-29T10:00:02.000Z",
					message: { role: "assistant", content: "Hi!" },
				},
			]);

			writeSession("session-2", [
				{ type: "session", id: "session-2", timestamp: "2026-03-29T11:00:00.000Z", cwd: "/tmp" },
				{
					type: "message",
					id: "msg-3",
					parentId: null,
					timestamp: "2026-03-29T11:00:01.000Z",
					message: { role: "user", content: "Goodbye" },
				},
			]);

			const res = await app.inject({ method: "GET", url: "/api/sessions" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body.sessions).toHaveLength(2);

			// Should be sorted newest first
			expect(body.sessions[0].id).toBe("session-2");
			expect(body.sessions[1].id).toBe("session-1");

			// Verify counts
			expect(body.sessions[1].messageCount).toBe(2);
			expect(body.sessions[0].messageCount).toBe(1);
		});
	});

	describe("GET /api/sessions/:id", () => {
		it("should return session entries", async () => {
			writeSession("my-session", [
				{ type: "session", id: "my-session", timestamp: "2026-03-29T10:00:00.000Z", cwd: "/tmp" },
				{
					type: "message",
					id: "msg-1",
					parentId: null,
					timestamp: "2026-03-29T10:00:01.000Z",
					message: { role: "user", content: "Hello" },
				},
			]);

			const res = await app.inject({ method: "GET", url: "/api/sessions/my-session" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body.id).toBe("my-session");
			expect(body.entries).toHaveLength(2);
			expect(body.entries[0].type).toBe("session");
			expect(body.entries[1].type).toBe("message");
		});

		it("should return 404 for non-existent session", async () => {
			const res = await app.inject({ method: "GET", url: "/api/sessions/does-not-exist" });
			expect(res.statusCode).toBe(404);
		});
	});

	describe("DELETE /api/sessions/:id", () => {
		it("should delete a session file", async () => {
			writeSession("to-delete", [
				{ type: "session", id: "to-delete", timestamp: "2026-03-29T10:00:00.000Z", cwd: "/tmp" },
			]);

			const deleteRes = await app.inject({ method: "DELETE", url: "/api/sessions/to-delete" });
			expect(deleteRes.statusCode).toBe(200);
			expect(deleteRes.json()).toEqual({ ok: true });

			// Verify it's gone
			const getRes = await app.inject({ method: "GET", url: "/api/sessions/to-delete" });
			expect(getRes.statusCode).toBe(404);
		});

		it("should return 404 for non-existent session", async () => {
			const res = await app.inject({ method: "DELETE", url: "/api/sessions/does-not-exist" });
			expect(res.statusCode).toBe(404);
		});
	});
});
