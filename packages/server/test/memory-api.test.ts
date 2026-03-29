import { mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
	buildScopeKey,
	closeMemoryDb,
	createMemoryDb,
	logExperiment,
	MemoryStore,
	updateTopOfMind,
} from "@dg-claw/memory";
import cookie from "@fastify/cookie";
import Fastify from "fastify";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { registerMemoryRoutes } from "../src/api/memory.js";

describe("memory API", () => {
	let app: ReturnType<typeof Fastify>;
	let tempDir: string;
	let dbPath: string;

	beforeEach(async () => {
		tempDir = join(tmpdir(), `dg-claw-test-memory-${Date.now()}-${Math.random().toString(36).slice(2)}`);
		mkdirSync(tempDir, { recursive: true });
		dbPath = join(tempDir, "memory.sqlite");

		// Seed the database
		const db = createMemoryDb(dbPath);
		const store = new MemoryStore(db);

		store.insert({
			entity: "User",
			slot: "name",
			value: "Sonny",
			category: "Profile",
			scope: { userId: "default", groupId: "default" },
			salience: 0.9,
			confidence: 1.0,
		});

		store.insert({
			entity: "User",
			slot: "preference_lang",
			value: "TypeScript",
			category: "Preference",
			scope: { userId: "default", groupId: "default" },
			salience: 0.5,
			confidence: 0.8,
		});

		store.insert({
			entity: "User",
			slot: "low_salience_fact",
			value: "likes cats",
			category: "Preference",
			scope: { userId: "default", groupId: "default" },
			salience: 0.1,
			confidence: 0.5,
		});

		updateTopOfMind(db, buildScopeKey({ userId: "default", groupId: "default" }), "Sonny is a TypeScript developer.");

		logExperiment(db, "system-prompt", "improved greeting", 0.85, "kept", "abc123");
		logExperiment(db, "system-prompt", "removed filler", 0.72, "discarded");

		closeMemoryDb(db);

		app = Fastify();
		await app.register(cookie);
		registerMemoryRoutes(app, { memoryDbPath: dbPath });
	});

	afterEach(() => {
		rmSync(tempDir, { recursive: true, force: true });
	});

	describe("GET /api/memory/facts", () => {
		it("should return all facts with default pagination", async () => {
			const res = await app.inject({ method: "GET", url: "/api/memory/facts" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body.total).toBe(3);
			expect(body.facts).toHaveLength(3);
			expect(body.offset).toBe(0);
			expect(body.limit).toBe(50);
		});

		it("should filter by category", async () => {
			const res = await app.inject({ method: "GET", url: "/api/memory/facts?category=Profile" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body.total).toBe(1);
			expect(body.facts[0].entity).toBe("User");
			expect(body.facts[0].slot).toBe("name");
		});

		it("should respect limit and offset", async () => {
			const res = await app.inject({ method: "GET", url: "/api/memory/facts?limit=1&offset=1" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body.facts).toHaveLength(1);
			expect(body.offset).toBe(1);
		});
	});

	describe("GET /api/memory/top-of-mind", () => {
		it("should return the L0 summary", async () => {
			const res = await app.inject({ method: "GET", url: "/api/memory/top-of-mind" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body.summary).toBe("Sonny is a TypeScript developer.");
		});

		it("should return empty string for non-existent scope", async () => {
			const res = await app.inject({ method: "GET", url: "/api/memory/top-of-mind?groupId=nonexistent" });
			expect(res.statusCode).toBe(200);
			expect(res.json().summary).toBe("");
		});
	});

	describe("GET /api/memory/experiments", () => {
		it("should return experiments for a target", async () => {
			const res = await app.inject({ method: "GET", url: "/api/memory/experiments?target=system-prompt" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body.experiments).toHaveLength(2);
		});

		it("should return all experiments when no target specified", async () => {
			const res = await app.inject({ method: "GET", url: "/api/memory/experiments" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body.experiments.length).toBeGreaterThanOrEqual(2);
		});
	});

	describe("GET /api/memory/stats", () => {
		it("should return stats with counts", async () => {
			const res = await app.inject({ method: "GET", url: "/api/memory/stats" });
			expect(res.statusCode).toBe(200);

			const body = res.json();
			expect(body.total).toBe(3);
			expect(body.byCategory).toBeDefined();
			expect(body.byCategory.Profile).toBe(1);
			expect(body.byCategory.Preference).toBe(2);
			expect(body.bySalience.high).toBe(1); // 0.9
			expect(body.bySalience.medium).toBe(1); // 0.5
			expect(body.bySalience.low).toBe(1); // 0.1
		});
	});
});
