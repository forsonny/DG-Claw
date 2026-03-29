// @dg-claw/memory -- public API

export { closeMemoryDb, createMemoryDb } from "./db.js";
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
