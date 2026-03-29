import { existsSync, mkdirSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { closeMemoryDb, createMemoryDb } from "../src/db.js";

describe("createMemoryDb", () => {
	let dbPath: string;
	let tempDir: string;

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-test-${crypto.randomUUID()}`);
		mkdirSync(tempDir, { recursive: true });
		dbPath = join(tempDir, "memory.sqlite");
	});

	afterEach(() => {
		rmSync(tempDir, { recursive: true, force: true });
	});

	it("creates a database file at the given path", () => {
		const db = createMemoryDb(dbPath);
		expect(existsSync(dbPath)).toBe(true);
		closeMemoryDb(db);
	});

	it("enables WAL mode", () => {
		const db = createMemoryDb(dbPath);
		const result = db.pragma("journal_mode") as { journal_mode: string }[];
		expect(result[0].journal_mode).toBe("wal");
		closeMemoryDb(db);
	});

	it("creates the memories table with expected columns", () => {
		const db = createMemoryDb(dbPath);
		const columns = db.pragma("table_info(memories)") as { name: string }[];
		const names = columns.map((c) => c.name);
		expect(names).toContain("id");
		expect(names).toContain("entity");
		expect(names).toContain("slot");
		expect(names).toContain("value");
		expect(names).toContain("category");
		expect(names).toContain("scope_user_id");
		expect(names).toContain("scope_agent_id");
		expect(names).toContain("scope_group_id");
		expect(names).toContain("salience");
		expect(names).toContain("confidence");
		expect(names).toContain("embedding");
		expect(names).toContain("parent_id");
		expect(names).toContain("source_session_id");
		expect(names).toContain("source_turn");
		expect(names).toContain("status");
		expect(names).toContain("expires_at");
		expect(names).toContain("created_at");
		expect(names).toContain("updated_at");
		expect(names).toContain("accessed_at");
		closeMemoryDb(db);
	});

	it("creates the memories_fts virtual table", () => {
		const db = createMemoryDb(dbPath);
		const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='memories_fts'").all() as {
			name: string;
		}[];
		expect(tables.length).toBe(1);
		closeMemoryDb(db);
	});

	it("creates the audit_log table", () => {
		const db = createMemoryDb(dbPath);
		const columns = db.pragma("table_info(audit_log)") as { name: string }[];
		const names = columns.map((c) => c.name);
		expect(names).toContain("id");
		expect(names).toContain("memory_id");
		expect(names).toContain("action");
		expect(names).toContain("actor");
		expect(names).toContain("details");
		expect(names).toContain("timestamp");
		closeMemoryDb(db);
	});

	it("creates the experiments table", () => {
		const db = createMemoryDb(dbPath);
		const columns = db.pragma("table_info(experiments)") as { name: string }[];
		const names = columns.map((c) => c.name);
		expect(names).toContain("id");
		expect(names).toContain("target");
		expect(names).toContain("mutation");
		expect(names).toContain("score");
		expect(names).toContain("status");
		expect(names).toContain("commit_hash");
		expect(names).toContain("timestamp");
		closeMemoryDb(db);
	});

	it("creates the top_of_mind table", () => {
		const db = createMemoryDb(dbPath);
		const columns = db.pragma("table_info(top_of_mind)") as { name: string }[];
		const names = columns.map((c) => c.name);
		expect(names).toContain("scope_key");
		expect(names).toContain("summary");
		expect(names).toContain("updated_at");
		closeMemoryDb(db);
	});

	it("creates the redo_log table", () => {
		const db = createMemoryDb(dbPath);
		const columns = db.pragma("table_info(redo_log)") as { name: string }[];
		const names = columns.map((c) => c.name);
		expect(names).toContain("id");
		expect(names).toContain("batch_id");
		expect(names).toContain("payload");
		expect(names).toContain("status");
		expect(names).toContain("retry_count");
		expect(names).toContain("created_at");
		expect(names).toContain("completed_at");
		closeMemoryDb(db);
	});

	it("creates the schema_version table with version 1", () => {
		const db = createMemoryDb(dbPath);
		const rows = db.prepare("SELECT version FROM schema_version").all() as { version: number }[];
		expect(rows.length).toBe(1);
		expect(rows[0].version).toBe(1);
		closeMemoryDb(db);
	});

	it("is idempotent -- opening the same path twice does not error", () => {
		const db1 = createMemoryDb(dbPath);
		closeMemoryDb(db1);
		const db2 = createMemoryDb(dbPath);
		const rows = db2.prepare("SELECT version FROM schema_version").all() as { version: number }[];
		expect(rows.length).toBe(1);
		closeMemoryDb(db2);
	});

	it("sets busy_timeout to 5000ms", () => {
		const db = createMemoryDb(dbPath);
		const result = db.pragma("busy_timeout") as { timeout: number }[];
		expect(result[0].timeout).toBe(5000);
		closeMemoryDb(db);
	});
});
