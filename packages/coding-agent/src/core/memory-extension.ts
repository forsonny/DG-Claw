/**
 * Memory extension -- wires @dg-claw/memory into coding-agent lifecycle.
 *
 * Lifecycle hooks:
 * - session_start: open/create memory DB for the current group
 * - before_agent_start: inject L0 summary + L1 facts into system prompt
 * - turn_end: push exchange to debounce queue for async extraction
 * - session_compact: update Top-of-Mind summary, apply salience decay
 * - session_shutdown: flush debounce queue, close DB
 *
 * Registers `memory_search` tool for L2 on-demand retrieval.
 */

import type { MemoryExtensionConfig, MemoryScope, MemorySearchResult } from "@dg-claw/memory";
import {
	appendAudit,
	archiveBelowThreshold,
	buildScopeKey,
	closeMemoryDb,
	createMemoryDb,
	DebounceQueue,
	decayAll,
	getTopOfMind,
	MemoryStore,
	packFacts,
	searchBM25,
	updateTopOfMind,
} from "@dg-claw/memory";
import { Type } from "@sinclair/typebox";
import type Database from "better-sqlite3";
import { existsSync, mkdirSync } from "fs";
import { homedir } from "os";
import { join } from "path";
import type { ExtensionAPI } from "./extensions/types.js";

// ============================================================================
// Defaults
// ============================================================================

const DEFAULT_MEMORY_DIR = join(homedir(), ".dg-claw", "memory");
const DEFAULT_DEBOUNCE_MS = 5000;
const DEFAULT_MAX_INJECTION_TOKENS = 2000;
const DEFAULT_DECAY_RATE = 0.95;
const DEFAULT_MIN_SALIENCE = 0.05;

// ============================================================================
// Turn payload (what we enqueue for extraction)
// ============================================================================

interface TurnPayload {
	userMessage: string;
	assistantMessage: string;
	sessionId: string;
	turnIndex: number;
}

// ============================================================================
// Extension factory
// ============================================================================

/**
 * Create a memory extension for the coding-agent.
 *
 * @param config - Optional configuration overrides
 * @returns Extension factory function compatible with ExtensionAPI
 */
export function createMemoryExtension(config: MemoryExtensionConfig = {}) {
	const memoryDir = config.memoryDir ?? DEFAULT_MEMORY_DIR;
	const debounceMs = config.debounceMs ?? DEFAULT_DEBOUNCE_MS;
	const maxInjectionTokens = config.maxInjectionTokens ?? DEFAULT_MAX_INJECTION_TOKENS;
	const decayRate = config.decayRate ?? DEFAULT_DECAY_RATE;
	const minSalience = config.minSalience ?? DEFAULT_MIN_SALIENCE;

	return function memoryExtension(api: ExtensionAPI) {
		// Per-session state
		let db: Database.Database | null = null;
		let store: MemoryStore | null = null;
		let scope: MemoryScope | null = null;
		let scopeKey: string | null = null;
		let queue: DebounceQueue<TurnPayload> | null = null;

		// Track the last user message for pairing with assistant response
		let lastUserMessage = "";
		let currentTurnIndex = 0;

		// ------------------------------------------------------------------
		// session_start: open memory DB
		// ------------------------------------------------------------------
		api.on("session_start", async (_event, ctx) => {
			try {
				const sessionId = ctx.sessionManager.getSessionId();
				// Derive groupId from session -- in a multi-channel setup this comes from
				// the gateway; for single-user CLI use, session ID serves as group.
				const groupId = sessionId;
				const userId = "default-user"; // TODO: resolve from config when multi-user is implemented

				scope = { userId, groupId };
				scopeKey = buildScopeKey(scope);

				// Ensure directory exists
				const groupDir = join(memoryDir, groupId);
				if (!existsSync(groupDir)) {
					mkdirSync(groupDir, { recursive: true });
				}

				const dbPath = join(groupDir, "memory.sqlite");
				db = createMemoryDb(dbPath);
				store = new MemoryStore(db);

				// Initialize debounce queue
				queue = new DebounceQueue<TurnPayload>(debounceMs);
				queue.onFlush((batch: TurnPayload[]) => {
					// Async extraction placeholder -- batch is logged to audit for now.
					// The full LLM-based extractor will be implemented in the auto-learning subsystem.
					if (db && scope) {
						appendAudit(db, null, "create", "extractor", {
							type: "extraction_batch",
							turnCount: batch.length,
							sessionId: batch[0]?.sessionId,
						});
					}
				});
			} catch (err) {
				console.error("[memory-extension] session_start error:", err);
			}
		});

		// ------------------------------------------------------------------
		// before_agent_start: inject L0 + L1 into system prompt
		// ------------------------------------------------------------------
		api.on("before_agent_start", async (event, _ctx) => {
			if (!db || !store || !scope || !scopeKey) return;

			try {
				const parts: string[] = [];

				// L0: Top-of-Mind summary
				const topOfMind = getTopOfMind(db, scopeKey);
				if (topOfMind) {
					parts.push(`<memory-context type="top-of-mind">\n${topOfMind}\n</memory-context>`);
				}

				// L1: Token-budgeted facts
				const candidates = store.getTopBySalience(scope, 50);
				if (candidates.length > 0) {
					const packed = packFacts(candidates, maxInjectionTokens);
					if (packed.length > 0) {
						const factsText = packed
							.map((e) => `- ${e.entity} | ${e.slot}: ${e.value} [${e.category}]`)
							.join("\n");
						parts.push(`<memory-context type="facts">\n${factsText}\n</memory-context>`);

						// Bump salience for accessed entries
						for (const entry of packed) {
							store.markAccessed(entry.id);
						}
					}
				}

				if (parts.length > 0) {
					const memoryBlock = parts.join("\n\n");
					return {
						systemPrompt: `${event.systemPrompt}\n\n${memoryBlock}`,
					};
				}
			} catch (err) {
				console.error("[memory-extension] before_agent_start error:", err);
			}

			return undefined;
		});

		// ------------------------------------------------------------------
		// turn_start: track turn index
		// ------------------------------------------------------------------
		api.on("turn_start", async (event) => {
			currentTurnIndex = event.turnIndex;
		});

		// ------------------------------------------------------------------
		// message_end: capture user messages for pairing
		// ------------------------------------------------------------------
		api.on("message_end", async (event) => {
			if (event.message.role === "user") {
				const msg = event.message;
				if (typeof msg.content === "string") {
					lastUserMessage = msg.content;
				} else if (Array.isArray(msg.content)) {
					lastUserMessage = msg.content
						.filter((b): b is { type: "text"; text: string } => b.type === "text")
						.map((b) => b.text)
						.join("\n");
				}
			}
		});

		// ------------------------------------------------------------------
		// turn_end: enqueue for extraction
		// ------------------------------------------------------------------
		api.on("turn_end", async (event, ctx) => {
			if (!queue || !scope) return;

			try {
				const assistantMsg = event.message;
				let assistantText = "";
				if (assistantMsg.role === "assistant" && "content" in assistantMsg) {
					const content = (assistantMsg as { content: Array<{ type: string; text?: string }> }).content;
					assistantText = content
						.filter((b): b is { type: "text"; text: string } => b.type === "text")
						.map((b) => b.text)
						.join("\n");
				}

				if (lastUserMessage && assistantText) {
					queue.push({
						userMessage: lastUserMessage,
						assistantMessage: assistantText,
						sessionId: ctx.sessionManager.getSessionId(),
						turnIndex: currentTurnIndex,
					});
				}
			} catch (err) {
				console.error("[memory-extension] turn_end error:", err);
			}
		});

		// ------------------------------------------------------------------
		// session_compact: update Top-of-Mind, decay salience
		// ------------------------------------------------------------------
		api.on("session_compact", async (event) => {
			if (!db || !scopeKey) return;

			try {
				// Update L0 summary from compaction output
				const summary = event.compactionEntry.summary;
				if (summary) {
					updateTopOfMind(db, scopeKey, summary);
				}

				// Apply salience decay
				decayAll(db, decayRate);

				// Archive below threshold
				archiveBelowThreshold(db, minSalience);
			} catch (err) {
				console.error("[memory-extension] session_compact error:", err);
			}
		});

		// ------------------------------------------------------------------
		// session_shutdown: flush queue, close DB
		// ------------------------------------------------------------------
		api.on("session_shutdown", async () => {
			try {
				if (queue) {
					queue.flush();
					queue.dispose();
					queue = null;
				}
			} catch (err) {
				console.error("[memory-extension] session_shutdown queue flush error:", err);
			}
			try {
				if (db) {
					closeMemoryDb(db);
					db = null;
					store = null;
				}
			} catch (err) {
				console.error("[memory-extension] session_shutdown db close error:", err);
			}
		});

		// ------------------------------------------------------------------
		// Register memory_search tool (L2 on-demand)
		// ------------------------------------------------------------------
		api.registerTool({
			name: "memory_search",
			label: "Memory Search",
			description:
				"Search the agent's long-term memory for relevant facts. " +
				"Use when you need to recall information from past sessions. " +
				"Returns Entity:Slot:Value triples with salience scores.",
			promptSnippet: "memory_search: Search long-term memory for facts from past sessions",
			parameters: Type.Object({
				query: Type.String({ description: "Search query -- keywords or natural language" }),
				category: Type.Optional(
					Type.String({
						description: "Filter by category: Profile, Preference, Goal, Entity, Event, Case, Pattern, Tool",
					}),
				),
				limit: Type.Optional(
					Type.Number({
						description: "Maximum results to return (default 10)",
						default: 10,
					}),
				),
			}),
			async execute(_toolCallId, params, _signal, _onUpdate, _ctx) {
				if (!db || !scope) {
					return {
						content: [{ type: "text", text: "Memory system not initialized." }],
						details: undefined,
					};
				}

				const limit = params.limit ?? 10;
				let results: MemorySearchResult[];

				try {
					// Use BM25 search (vector search requires embedding the query,
					// which will be added when the embedding pipeline is wired up)
					results = searchBM25(db, params.query, scope, limit);
				} catch {
					return {
						content: [{ type: "text", text: "Memory search failed. Try a different query." }],
						details: undefined,
					};
				}

				// Filter by category if specified
				if (params.category) {
					results = results.filter((r) => r.entry.category === params.category);
				}

				if (results.length === 0) {
					return {
						content: [{ type: "text", text: "No memories found matching the query." }],
						details: undefined,
					};
				}

				// Format results
				const text = results
					.map(
						(r) =>
							`- ${r.entry.entity} | ${r.entry.slot}: ${r.entry.value} [${r.entry.category}] (salience: ${r.entry.salience.toFixed(2)}, created: ${r.entry.createdAt})`,
					)
					.join("\n");

				// Mark all returned entries as accessed
				if (store) {
					for (const r of results) {
						store.markAccessed(r.entry.id);
					}
				}

				return {
					content: [{ type: "text", text: `Found ${results.length} memories:\n${text}` }],
					details: { resultCount: results.length },
				};
			},
		});
	};
}
