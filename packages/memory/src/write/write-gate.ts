/**
 * Write gate -- pre-persist filter for extracted memory triples.
 *
 * Evaluation order (short-circuits on first match):
 * 1. Salience threshold -- below-threshold entries are rejected
 * 2. PII / injection scan -- flagged entries are rejected (quarantine)
 * 3. Deduplication -- identical entity:slot:value = duplicate
 * 4. Conflict resolution -- same entity:slot, different value = supersede
 * 5. Otherwise: persist
 */

import type { MemoryEntry, WriteGateConfig, WriteGateResult } from "../types.js";

/**
 * Evaluate whether a candidate memory entry should be persisted.
 *
 * @param entry - The candidate entry to evaluate
 * @param existing - Existing entries with the same entity:slot in the same scope
 * @param config - Write gate configuration (thresholds, PII patterns)
 * @returns WriteGateResult indicating what action to take
 */
export function evaluateGate(entry: MemoryEntry, existing: MemoryEntry[], config: WriteGateConfig): WriteGateResult {
	// 1. Salience threshold
	if (entry.salience < config.salienceThreshold) {
		return {
			action: "reject",
			reason: `Below salience threshold (${entry.salience.toFixed(3)} < ${config.salienceThreshold})`,
		};
	}

	// 2. PII / injection scan
	const textToScan = `${entry.entity} ${entry.slot} ${entry.value}`;
	for (const pattern of config.piiPatterns) {
		if (pattern.test(textToScan)) {
			return {
				action: "reject",
				reason: `PII or sensitive content detected (matched pattern: ${pattern.source})`,
			};
		}
	}

	// 3. Deduplication -- exact entity:slot:value match
	for (const ex of existing) {
		if (ex.entity === entry.entity && ex.slot === entry.slot && ex.value === entry.value) {
			return {
				action: "duplicate",
				reason: `Exact duplicate of existing memory`,
				existingId: ex.id,
			};
		}
	}

	// 4. Conflict resolution -- same entity:slot, different value
	for (const ex of existing) {
		if (ex.entity === entry.entity && ex.slot === entry.slot && ex.value !== entry.value) {
			return {
				action: "supersede",
				reason: `Conflicts with existing value "${ex.value}" -- will create version chain`,
				existingId: ex.id,
			};
		}
	}

	// 5. Clean pass
	return {
		action: "persist",
		reason: "Passed all gate checks",
	};
}
