import type Database from "better-sqlite3";
import { mkdirSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { closeMemoryDb, createMemoryDb } from "../src/db.js";
import { MemoryStore } from "../src/store.js";
import type { MemoryScope } from "../src/types.js";
import { MemoryCategory } from "../src/types.js";

describe("MemoryStore", () => {
	let db: Database.Database;
	let store: MemoryStore;
	let tempDir: string;
	const scope: MemoryScope = { userId: "user-1", groupId: "group-1" };

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-test-${crypto.randomUUID()}`);
		mkdirSync(tempDir, { recursive: true });
		db = createMemoryDb(join(tempDir, "memory.sqlite"));
		store = new MemoryStore(db);
	});

	afterEach(() => {
		closeMemoryDb(db);
		rmSync(tempDir, { recursive: true, force: true });
	});

	describe("insert", () => {
		it("inserts a user-space entry and returns it with generated fields", () => {
			const entry = store.insert({
				entity: "Alice",
				slot: "works-at",
				value: "Acme Corp",
				category: MemoryCategory.Entity,
				scope,
				salience: 0.9,
				confidence: 0.85,
				sourceSessionId: "sess-1",
				sourceTurn: 3,
			});

			expect(entry.id).toBeDefined();
			expect(entry.entity).toBe("Alice");
			expect(entry.slot).toBe("works-at");
			expect(entry.value).toBe("Acme Corp");
			expect(entry.category).toBe(MemoryCategory.Entity);
			expect(entry.scopeUserId).toBe("user-1");
			expect(entry.scopeAgentId).toBeNull();
			expect(entry.scopeGroupId).toBe("group-1");
			expect(entry.salience).toBe(0.9);
			expect(entry.confidence).toBe(0.85);
			expect(entry.parentId).toBeNull();
			expect(entry.status).toBe("active");
			expect(entry.createdAt).toBeDefined();
			expect(entry.updatedAt).toBeDefined();
			expect(entry.accessedAt).toBeDefined();
		});

		it("inserts an agent-space entry with agentId", () => {
			const agentScope: MemoryScope = { userId: "user-1", agentId: "agent-1", groupId: "group-1" };
			const entry = store.insert({
				entity: "CORS error",
				slot: "solved-by",
				value: "Added proxy middleware",
				category: MemoryCategory.Case,
				scope: agentScope,
				salience: 1.0,
				confidence: 1.0,
			});

			expect(entry.scopeAgentId).toBe("agent-1");
			expect(entry.category).toBe(MemoryCategory.Case);
		});
	});

	describe("getById", () => {
		it("retrieves an entry by id", () => {
			const inserted = store.insert({
				entity: "Alice",
				slot: "role",
				value: "data scientist",
				category: MemoryCategory.Profile,
				scope,
				salience: 1.0,
				confidence: 1.0,
			});

			const retrieved = store.getById(inserted.id);
			expect(retrieved).not.toBeNull();
			expect(retrieved!.id).toBe(inserted.id);
			expect(retrieved!.entity).toBe("Alice");
		});

		it("returns null for non-existent id", () => {
			const result = store.getById("non-existent");
			expect(result).toBeNull();
		});
	});

	describe("getByEntitySlot", () => {
		it("returns entries matching entity and slot within scope", () => {
			store.insert({
				entity: "Alice",
				slot: "works-at",
				value: "Acme Corp",
				category: MemoryCategory.Entity,
				scope,
				salience: 1.0,
				confidence: 1.0,
			});
			store.insert({
				entity: "Alice",
				slot: "works-at",
				value: "Beta Inc",
				category: MemoryCategory.Entity,
				scope,
				salience: 0.8,
				confidence: 0.9,
			});
			store.insert({
				entity: "Bob",
				slot: "works-at",
				value: "Gamma LLC",
				category: MemoryCategory.Entity,
				scope,
				salience: 1.0,
				confidence: 1.0,
			});

			const results = store.getByEntitySlot("Alice", "works-at", scope);
			expect(results.length).toBe(2);
			expect(results.every((r) => r.entity === "Alice" && r.slot === "works-at")).toBe(true);
		});

		it("respects scope filtering", () => {
			const otherScope: MemoryScope = { userId: "user-2", groupId: "group-2" };
			store.insert({
				entity: "Alice",
				slot: "role",
				value: "engineer",
				category: MemoryCategory.Profile,
				scope,
				salience: 1.0,
				confidence: 1.0,
			});
			store.insert({
				entity: "Alice",
				slot: "role",
				value: "manager",
				category: MemoryCategory.Profile,
				scope: otherScope,
				salience: 1.0,
				confidence: 1.0,
			});

			const results = store.getByEntitySlot("Alice", "role", scope);
			expect(results.length).toBe(1);
			expect(results[0].value).toBe("engineer");
		});
	});

	describe("supersede", () => {
		it("creates a new entry linked to the old one via parentId", () => {
			const old = store.insert({
				entity: "Alice",
				slot: "works-at",
				value: "Acme Corp",
				category: MemoryCategory.Entity,
				scope,
				salience: 1.0,
				confidence: 1.0,
			});

			const replacement = store.supersede(old.id, {
				entity: "Alice",
				slot: "works-at",
				value: "Beta Inc",
				category: MemoryCategory.Entity,
				scope,
				salience: 1.0,
				confidence: 0.95,
			});

			expect(replacement.parentId).toBe(old.id);
			expect(replacement.value).toBe("Beta Inc");

			// Old entry should be archived
			const oldRefreshed = store.getById(old.id);
			expect(oldRefreshed!.status).toBe("archived");
		});
	});

	describe("markAccessed", () => {
		it("updates accessedAt and bumps salience", async () => {
			const entry = store.insert({
				entity: "Alice",
				slot: "role",
				value: "data scientist",
				category: MemoryCategory.Profile,
				scope,
				salience: 0.5,
				confidence: 1.0,
			});

			// Wait a tick to ensure the timestamp differs after markAccessed
			await new Promise((r) => setTimeout(r, 2));
			store.markAccessed(entry.id);
			const updated = store.getById(entry.id);
			expect(updated!.salience).toBeGreaterThan(0.5);
			expect(updated!.accessedAt).not.toBe(entry.accessedAt);
		});
	});

	describe("getByCategory", () => {
		it("returns entries of the given category within scope", () => {
			store.insert({
				entity: "Alice",
				slot: "name",
				value: "Alice Smith",
				category: MemoryCategory.Profile,
				scope,
				salience: 1.0,
				confidence: 1.0,
			});
			store.insert({
				entity: "Alice",
				slot: "theme",
				value: "dark mode",
				category: MemoryCategory.Preference,
				scope,
				salience: 1.0,
				confidence: 1.0,
			});

			const profiles = store.getByCategory(MemoryCategory.Profile, scope);
			expect(profiles.length).toBe(1);
			expect(profiles[0].category).toBe(MemoryCategory.Profile);
		});
	});

	describe("getTopBySalience", () => {
		it("returns entries ordered by salience descending, limited", () => {
			for (let i = 0; i < 5; i++) {
				store.insert({
					entity: `entity-${i}`,
					slot: "slot",
					value: `value-${i}`,
					category: MemoryCategory.Entity,
					scope,
					salience: i * 0.2,
					confidence: 1.0,
				});
			}

			const top = store.getTopBySalience(scope, 3);
			expect(top.length).toBe(3);
			expect(top[0].salience).toBeGreaterThanOrEqual(top[1].salience);
			expect(top[1].salience).toBeGreaterThanOrEqual(top[2].salience);
		});

		it("only returns active entries", () => {
			const entry = store.insert({
				entity: "old",
				slot: "slot",
				value: "archived",
				category: MemoryCategory.Entity,
				scope,
				salience: 1.0,
				confidence: 1.0,
			});
			// Supersede will archive the old entry
			store.supersede(entry.id, {
				entity: "new",
				slot: "slot",
				value: "current",
				category: MemoryCategory.Entity,
				scope,
				salience: 0.5,
				confidence: 1.0,
			});

			const top = store.getTopBySalience(scope, 10);
			expect(top.every((e) => e.status === "active")).toBe(true);
		});
	});
});
