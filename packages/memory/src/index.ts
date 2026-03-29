// @dg-claw/memory -- public API

export { appendAudit, getAuditLog } from "./audit.js";
export { closeMemoryDb, createMemoryDb } from "./db.js";
export { archiveBelowThreshold, decayAll, reinforce } from "./salience.js";
export { type InsertMemoryInput, MemoryStore } from "./store.js";
export {
	AGENT_SPACE_CATEGORIES,
	type AuditAction,
	type AuditEntry,
	type ExperimentEntry,
	type ExperimentStatus,
	MemoryCategory,
	type MemoryEntry,
	type MemoryExtensionConfig,
	type MemoryScope,
	type MemorySearchResult,
	type MemoryStatus,
	type TopOfMind,
	USER_SPACE_CATEGORIES,
	type WriteGateAction,
	type WriteGateConfig,
	type WriteGateResult,
} from "./types.js";
export { DebounceQueue } from "./write/debounce-queue.js";
export { evaluateGate } from "./write/write-gate.js";
