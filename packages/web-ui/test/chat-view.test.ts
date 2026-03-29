/**
 * Tests for chat-view.ts -- WS message handling logic.
 *
 * We test the message-handling state machine and helper functions in isolation,
 * without a real DOM or browser environment.
 */

import { describe, expect, it } from "vitest";

// ---------------------------------------------------------------------------
// Replicated helpers from chat-view (tested in isolation)
// ---------------------------------------------------------------------------

interface ChatMessage {
	id: string;
	role: "user" | "assistant";
	text: string;
	streaming: boolean;
}

interface AgentMessage {
	role?: string;
	content?: string | Array<{ type: string; text?: string }>;
}

function resolveRole(msg: AgentMessage): "user" | "assistant" | null {
	if (!msg || typeof msg !== "object") return null;
	const role = msg.role;
	if (role === "user" || role === "user-with-attachments") return "user";
	if (role === "assistant") return "assistant";
	return null;
}

function extractText(msg: AgentMessage): string {
	if (!msg || typeof msg !== "object") return "";
	const content = msg.content;

	if (typeof content === "string") return content;

	if (Array.isArray(content)) {
		return content
			.filter((block): block is { type: "text"; text: string } => block?.type === "text")
			.map((block) => block.text)
			.join("");
	}

	return "";
}

let _nextId = 0;
function nextId(): string {
	return String(++_nextId);
}

/** Simulate the handleServerMessage logic */
function handleServerMessage(
	msg: { type: string; [k: string]: unknown },
	state: {
		messages: ChatMessage[];
		isAgentRunning: boolean;
	},
): void {
	switch (msg.type) {
		case "agent_start":
			state.isAgentRunning = true;
			break;

		case "agent_end":
			state.isAgentRunning = false;
			state.messages = state.messages.map((m) => (m.streaming ? { ...m, streaming: false } : m));
			break;

		case "message_start": {
			const agentMsg = msg.message as AgentMessage;
			const role = resolveRole(agentMsg);
			if (!role) break;
			state.messages = [
				...state.messages,
				{ id: nextId(), role, text: extractText(agentMsg), streaming: role === "assistant" },
			];
			break;
		}

		case "message_update": {
			const agentMsg = msg.message as AgentMessage;
			state.messages = state.messages.map((m, idx) =>
				idx === state.messages.length - 1 && m.streaming ? { ...m, text: extractText(agentMsg) } : m,
			);
			break;
		}

		case "message_end": {
			const agentMsg = msg.message as AgentMessage;
			state.messages = state.messages.map((m, idx) =>
				idx === state.messages.length - 1 && m.streaming
					? { ...m, text: extractText(agentMsg), streaming: false }
					: m,
			);
			break;
		}

		case "session_loaded": {
			const entries = msg.entries as Array<{ type: string; message?: AgentMessage }>;
			state.messages = [];
			for (const entry of entries) {
				if (entry.type === "message" && entry.message) {
					const role = resolveRole(entry.message);
					if (role) {
						state.messages = [
							...state.messages,
							{
								id: nextId(),
								role,
								text: extractText(entry.message),
								streaming: false,
							},
						];
					}
				}
			}
			break;
		}
	}
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("resolveRole()", () => {
	it("returns 'user' for role=user", () => {
		expect(resolveRole({ role: "user" })).toBe("user");
	});

	it("returns 'user' for role=user-with-attachments", () => {
		expect(resolveRole({ role: "user-with-attachments" })).toBe("user");
	});

	it("returns 'assistant' for role=assistant", () => {
		expect(resolveRole({ role: "assistant" })).toBe("assistant");
	});

	it("returns null for unknown role", () => {
		expect(resolveRole({ role: "system" })).toBeNull();
	});

	it("returns null for missing message", () => {
		expect(resolveRole(null as unknown as AgentMessage)).toBeNull();
	});
});

describe("extractText()", () => {
	it("returns string content directly", () => {
		expect(extractText({ content: "hello" })).toBe("hello");
	});

	it("concatenates text blocks from array content", () => {
		expect(
			extractText({
				content: [
					{ type: "text", text: "Hello " },
					{ type: "text", text: "world" },
				],
			}),
		).toBe("Hello world");
	});

	it("skips non-text blocks", () => {
		expect(
			extractText({
				content: [
					{ type: "tool_call", text: "ignored" },
					{ type: "text", text: "visible" },
				],
			}),
		).toBe("visible");
	});

	it("returns empty string for missing content", () => {
		expect(extractText({})).toBe("");
	});

	it("returns empty string for null input", () => {
		expect(extractText(null as unknown as AgentMessage)).toBe("");
	});
});

describe("ChatView WS message handling", () => {
	function makeState(): { messages: ChatMessage[]; isAgentRunning: boolean } {
		return { messages: [], isAgentRunning: false };
	}

	describe("agent_start / agent_end", () => {
		it("sets isAgentRunning=true on agent_start", () => {
			const s = makeState();
			handleServerMessage({ type: "agent_start" }, s);
			expect(s.isAgentRunning).toBe(true);
		});

		it("sets isAgentRunning=false on agent_end and finalises streaming messages", () => {
			const s = makeState();
			s.isAgentRunning = true;
			s.messages = [{ id: "1", role: "assistant", text: "partial", streaming: true }];
			handleServerMessage({ type: "agent_end", messages: [] }, s);
			expect(s.isAgentRunning).toBe(false);
			expect(s.messages[0].streaming).toBe(false);
		});
	});

	describe("message_start", () => {
		it("adds a user message (not streaming)", () => {
			const s = makeState();
			handleServerMessage({ type: "message_start", message: { role: "user", content: "Hi" } }, s);
			expect(s.messages).toHaveLength(1);
			expect(s.messages[0].role).toBe("user");
			expect(s.messages[0].text).toBe("Hi");
			expect(s.messages[0].streaming).toBe(false);
		});

		it("adds an assistant message as streaming", () => {
			const s = makeState();
			handleServerMessage({ type: "message_start", message: { role: "assistant", content: "" } }, s);
			expect(s.messages).toHaveLength(1);
			expect(s.messages[0].role).toBe("assistant");
			expect(s.messages[0].streaming).toBe(true);
		});

		it("ignores messages with unknown role", () => {
			const s = makeState();
			handleServerMessage({ type: "message_start", message: { role: "system", content: "ignore me" } }, s);
			expect(s.messages).toHaveLength(0);
		});
	});

	describe("message_update", () => {
		it("updates text of last streaming message", () => {
			const s = makeState();
			s.messages = [{ id: "1", role: "assistant", text: "Hel", streaming: true }];
			handleServerMessage({ type: "message_update", message: { role: "assistant", content: "Hello" } }, s);
			expect(s.messages[0].text).toBe("Hello");
		});

		it("does not update non-streaming messages", () => {
			const s = makeState();
			s.messages = [{ id: "1", role: "user", text: "fixed", streaming: false }];
			handleServerMessage({ type: "message_update", message: { role: "user", content: "changed" } }, s);
			expect(s.messages[0].text).toBe("fixed");
		});
	});

	describe("message_end", () => {
		it("finalises streaming and sets final text", () => {
			const s = makeState();
			s.messages = [{ id: "1", role: "assistant", text: "partial", streaming: true }];
			handleServerMessage({ type: "message_end", message: { role: "assistant", content: "final text" } }, s);
			expect(s.messages[0].text).toBe("final text");
			expect(s.messages[0].streaming).toBe(false);
		});
	});

	describe("session_loaded", () => {
		it("replaces messages with session entries", () => {
			const s = makeState();
			s.messages = [{ id: "old", role: "user", text: "stale", streaming: false }];

			handleServerMessage(
				{
					type: "session_loaded",
					sessionId: "abc",
					entries: [
						{ type: "message", message: { role: "user", content: "Hello" } },
						{ type: "message", message: { role: "assistant", content: "Hi there" } },
					],
				},
				s,
			);

			expect(s.messages).toHaveLength(2);
			expect(s.messages[0].role).toBe("user");
			expect(s.messages[0].text).toBe("Hello");
			expect(s.messages[1].role).toBe("assistant");
			expect(s.messages[1].text).toBe("Hi there");
			// Loaded messages should not be streaming
			expect(s.messages[1].streaming).toBe(false);
		});

		it("skips non-message entries", () => {
			const s = makeState();
			handleServerMessage(
				{
					type: "session_loaded",
					sessionId: "abc",
					entries: [{ type: "tool_execution" }, { type: "message", message: { role: "user", content: "hi" } }],
				},
				s,
			);
			expect(s.messages).toHaveLength(1);
		});
	});

	describe("text block extraction from array content", () => {
		it("handles assistant messages with block-array content", () => {
			const s = makeState();
			handleServerMessage(
				{
					type: "message_start",
					message: {
						role: "assistant",
						content: [
							{ type: "text", text: "Hello " },
							{ type: "text", text: "world" },
						],
					},
				},
				s,
			);
			expect(s.messages[0].text).toBe("Hello world");
		});
	});
});
