/**
 * Core types for @dg-claw/memory.
 *
 * All memory entries use Entity:Slot:Value triples classified into
 * one of 8 categories. Scoping is three-axis: userId, agentId, groupId.
 */

// ============================================================================
// Category
// ============================================================================

export const MemoryCategory = {
	Profile: "Profile",
	Preference: "Preference",
	Goal: "Goal",
	Entity: "Entity",
	Event: "Event",
	Case: "Case",
	Pattern: "Pattern",
	Tool: "Tool",
} as const;

export type MemoryCategory = (typeof MemoryCategory)[keyof typeof MemoryCategory];

export const USER_SPACE_CATEGORIES: readonly MemoryCategory[] = [
	MemoryCategory.Profile,
	MemoryCategory.Preference,
	MemoryCategory.Goal,
	MemoryCategory.Entity,
	MemoryCategory.Event,
] as const;

export const AGENT_SPACE_CATEGORIES: readonly MemoryCategory[] = [
	MemoryCategory.Case,
	MemoryCategory.Pattern,
	MemoryCategory.Tool,
] as const;

// ============================================================================
// Scope
// ============================================================================

export interface MemoryScope {
	userId: string;
	agentId?: string | null;
	groupId: string;
}

// ============================================================================
// Memory Entry
// ============================================================================

export type MemoryStatus = "active" | "completed" | "archived";

export interface MemoryEntry {
	id: string;
	entity: string;
	slot: string;
	value: string;
	category: MemoryCategory;
	scopeUserId: string;
	scopeAgentId: string | null;
	scopeGroupId: string;
	salience: number;
	confidence: number;
	embedding: Float64Array | null;
	parentId: string | null;
	sourceSessionId: string | null;
	sourceTurn: number | null;
	status: MemoryStatus;
	expiresAt: string | null;
	createdAt: string;
	updatedAt: string;
	accessedAt: string;
}

// ============================================================================
// Audit
// ============================================================================

export type AuditAction = "create" | "supersede" | "access" | "decay" | "gate_reject" | "quarantine" | "delete";

export interface AuditEntry {
	id: number;
	memoryId: string | null;
	action: AuditAction;
	actor: string;
	details: Record<string, unknown> | null;
	timestamp: string;
}

// ============================================================================
// Experiments
// ============================================================================

export type ExperimentStatus = "kept" | "discarded" | "crashed";

export interface ExperimentEntry {
	id: number;
	target: string;
	mutation: string;
	score: number | null;
	status: ExperimentStatus;
	commitHash: string | null;
	timestamp: string;
}

// ============================================================================
// Top-of-Mind
// ============================================================================

export interface TopOfMind {
	scopeKey: string;
	summary: string;
	updatedAt: string;
}

// ============================================================================
// Search
// ============================================================================

export interface MemorySearchResult {
	entry: MemoryEntry;
	score: number;
}

// ============================================================================
// Write Gate
// ============================================================================

export type WriteGateAction = "persist" | "reject" | "supersede" | "duplicate";

export interface WriteGateResult {
	action: WriteGateAction;
	reason: string;
	existingId?: string;
}

// ============================================================================
// Config
// ============================================================================

export interface WriteGateConfig {
	salienceThreshold: number;
	piiPatterns: RegExp[];
}

export interface MemoryExtensionConfig {
	memoryDir?: string;
	debounceMs?: number;
	maxInjectionTokens?: number;
	decayRate?: number;
	minSalience?: number;
	writeGate?: Partial<WriteGateConfig>;
}
