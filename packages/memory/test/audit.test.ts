import type Database from "better-sqlite3";
import { mkdirSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { appendAudit, getAuditLog } from "../src/audit.js";
import { closeMemoryDb, createMemoryDb } from "../src/db.js";

describe("audit", () => {
	let db: Database.Database;
	let tempDir: string;

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-test-${crypto.randomUUID()}`);
		mkdirSync(tempDir, { recursive: true });
		db = createMemoryDb(join(tempDir, "memory.sqlite"));
	});

	afterEach(() => {
		closeMemoryDb(db);
		rmSync(tempDir, { recursive: true, force: true });
	});

	it("appends an audit entry and retrieves it", () => {
		appendAudit(db, "mem-1", "create", "extractor", { source: "conversation" });

		const log = getAuditLog(db, "mem-1");
		expect(log.length).toBe(1);
		expect(log[0].memoryId).toBe("mem-1");
		expect(log[0].action).toBe("create");
		expect(log[0].actor).toBe("extractor");
		expect(log[0].details).toEqual({ source: "conversation" });
		expect(log[0].timestamp).toBeDefined();
	});

	it("appends multiple entries for the same memory", () => {
		appendAudit(db, "mem-1", "create", "extractor");
		appendAudit(db, "mem-1", "access", "retriever");
		appendAudit(db, "mem-1", "supersede", "extractor", { newId: "mem-2" });

		const log = getAuditLog(db, "mem-1");
		expect(log.length).toBe(3);
		expect(log[0].action).toBe("create");
		expect(log[1].action).toBe("access");
		expect(log[2].action).toBe("supersede");
	});

	it("handles null memoryId for system-level audit entries", () => {
		appendAudit(db, null, "decay", "system", { count: 42 });

		// System entries don't appear in per-memory queries
		const log = getAuditLog(db, "non-existent");
		expect(log.length).toBe(0);
	});

	it("handles missing details (undefined)", () => {
		appendAudit(db, "mem-1", "gate_reject", "write-gate");

		const log = getAuditLog(db, "mem-1");
		expect(log.length).toBe(1);
		expect(log[0].details).toBeNull();
	});
});
