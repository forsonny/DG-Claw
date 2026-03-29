import { describe, expect, it } from "vitest";
import type { MemoryEntry, WriteGateConfig } from "../src/types.js";
import { MemoryCategory } from "../src/types.js";
import { evaluateGate } from "../src/write/write-gate.js";

function makeEntry(overrides: Partial<MemoryEntry> = {}): MemoryEntry {
	return {
		id: "test-id",
		entity: "Alice",
		slot: "works-at",
		value: "Acme Corp",
		category: MemoryCategory.Entity,
		scopeUserId: "user-1",
		scopeAgentId: null,
		scopeGroupId: "group-1",
		salience: 0.8,
		confidence: 0.9,
		embedding: null,
		parentId: null,
		sourceSessionId: null,
		sourceTurn: null,
		status: "active",
		expiresAt: null,
		createdAt: "2026-03-28T00:00:00.000Z",
		updatedAt: "2026-03-28T00:00:00.000Z",
		accessedAt: "2026-03-28T00:00:00.000Z",
		...overrides,
	};
}

const defaultConfig: WriteGateConfig = {
	salienceThreshold: 0.1,
	piiPatterns: [
		/\b\d{3}-\d{2}-\d{4}\b/, // SSN
		/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/, // Email
	],
};

describe("evaluateGate", () => {
	it("returns persist for a clean entry with no conflicts", () => {
		const entry = makeEntry();
		const result = evaluateGate(entry, [], defaultConfig);
		expect(result.action).toBe("persist");
	});

	it("rejects entries below the salience threshold", () => {
		const entry = makeEntry({ salience: 0.05 });
		const result = evaluateGate(entry, [], defaultConfig);
		expect(result.action).toBe("reject");
		expect(result.reason).toContain("salience");
	});

	it("rejects entries matching PII patterns (SSN)", () => {
		const entry = makeEntry({ value: "My SSN is 123-45-6789" });
		const result = evaluateGate(entry, [], defaultConfig);
		expect(result.action).toBe("reject");
		expect(result.reason).toContain("PII");
	});

	it("rejects entries matching PII patterns (email)", () => {
		const entry = makeEntry({ value: "Contact me at alice@example.com" });
		const result = evaluateGate(entry, [], defaultConfig);
		expect(result.action).toBe("reject");
		expect(result.reason).toContain("PII");
	});

	it("returns duplicate when an identical entity:slot:value exists", () => {
		const existing = makeEntry({ id: "existing-1" });
		const candidate = makeEntry({ id: "candidate" });
		const result = evaluateGate(candidate, [existing], defaultConfig);
		expect(result.action).toBe("duplicate");
		expect(result.existingId).toBe("existing-1");
	});

	it("returns supersede when same entity:slot but different value exists", () => {
		const existing = makeEntry({ id: "existing-1", value: "Old Corp" });
		const candidate = makeEntry({ id: "candidate", value: "New Corp" });
		const result = evaluateGate(candidate, [existing], defaultConfig);
		expect(result.action).toBe("supersede");
		expect(result.existingId).toBe("existing-1");
	});

	it("prioritizes PII rejection over conflict detection", () => {
		const existing = makeEntry({ id: "existing-1", value: "Old Corp" });
		const candidate = makeEntry({ id: "candidate", value: "SSN: 111-22-3333" });
		const result = evaluateGate(candidate, [existing], defaultConfig);
		expect(result.action).toBe("reject");
		expect(result.reason).toContain("PII");
	});

	it("prioritizes salience rejection over PII", () => {
		const candidate = makeEntry({ salience: 0.01, value: "SSN: 111-22-3333" });
		const result = evaluateGate(candidate, [], defaultConfig);
		expect(result.action).toBe("reject");
		expect(result.reason).toContain("salience");
	});
});
