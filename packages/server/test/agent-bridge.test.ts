import { beforeEach, describe, expect, it, vi } from "vitest";
import type { WsServerMessage } from "../src/types.js";

/**
 * Unit tests for AgentBridge event translation.
 *
 * These tests mock createAgentSession to avoid real agent initialization
 * and focus on verifying that AgentSessionEvents are correctly translated
 * to WsServerMessage objects.
 */

vi.mock("@dg-claw/coding-agent", () => {
	const listeners: Array<(event: any) => void> = [];

	const mockSession = {
		subscribe: vi.fn((listener: (event: any) => void) => {
			listeners.push(listener);
			return () => {
				const idx = listeners.indexOf(listener);
				if (idx >= 0) listeners.splice(idx, 1);
			};
		}),
		prompt: vi.fn(async () => {}),
		abort: vi.fn(async () => {}),
		dispose: vi.fn(),
		switchSession: vi.fn(async () => true),
		sessionManager: {
			getSessionDir: vi.fn(() => "/tmp/sessions"),
			buildSessionContext: vi.fn(() => ({ messages: [] })),
			getBranch: vi.fn(() => []),
		},
	};

	return {
		createAgentSession: vi.fn(async () => ({
			session: mockSession,
			extensionsResult: {},
		})),
		SessionManager: {
			list: vi.fn(async () => [
				{ id: "session-1", name: "session-1", modified: new Date("2026-03-29T00:00:00.000Z"), messageCount: 5 },
				{ id: "session-2", name: "session-2", modified: new Date("2026-03-29T01:00:00.000Z"), messageCount: 12 },
			]),
		},
		// Expose listeners for test use
		_testGetListeners: () => listeners,
		_testClearListeners: () => listeners.splice(0, listeners.length),
		_testGetMockSession: () => mockSession,
	};
});

// Import after mock is set up
const { AgentBridge } = await import("../src/ws/agent-bridge.js");
const { _testGetListeners, _testClearListeners, _testGetMockSession } = (await import("@dg-claw/coding-agent")) as any;

describe("AgentBridge", () => {
	let bridge: InstanceType<typeof AgentBridge>;
	let messages: WsServerMessage[];
	let errors: Error[];

	beforeEach(async () => {
		messages = [];
		errors = [];

		// Clear accumulated listeners from previous test's bridge
		_testClearListeners();

		bridge = new AgentBridge({
			cwd: "/tmp/test",
			agentDir: "/tmp/.dg-claw",
			onMessage: (msg) => messages.push(msg),
			onError: (err) => errors.push(err),
		});

		await bridge.init();
	});

	describe("event translation", () => {
		function emitEvent(event: any): void {
			const listeners = _testGetListeners();
			for (const listener of listeners) {
				listener(event);
			}
		}

		it("should translate agent_start", () => {
			emitEvent({ type: "agent_start" });
			expect(messages).toHaveLength(1);
			expect(messages[0]).toEqual({ type: "agent_start" });
		});

		it("should translate agent_end", () => {
			const msgs = [{ role: "assistant", content: "Hello" }];
			emitEvent({ type: "agent_end", messages: msgs });
			expect(messages).toHaveLength(1);
			expect(messages[0]).toEqual({ type: "agent_end", messages: msgs });
		});

		it("should translate turn_start", () => {
			emitEvent({ type: "turn_start" });
			expect(messages).toHaveLength(1);
			expect(messages[0]).toEqual({ type: "turn_start" });
		});

		it("should translate turn_end", () => {
			const msg = { role: "assistant", content: "Done" };
			const toolResults = [{ role: "toolResult", toolCallId: "tc1" }];
			emitEvent({ type: "turn_end", message: msg, toolResults });
			expect(messages).toHaveLength(1);
			expect(messages[0]).toEqual({ type: "turn_end", message: msg, toolResults });
		});

		it("should translate message_start", () => {
			const msg = { role: "assistant", content: [] };
			emitEvent({ type: "message_start", message: msg });
			expect(messages[0]).toEqual({ type: "message_start", message: msg });
		});

		it("should translate message_update", () => {
			const msg = { role: "assistant", content: "partial" };
			const delta = { type: "text", text: "partial" };
			emitEvent({ type: "message_update", message: msg, assistantMessageEvent: delta });
			expect(messages[0]).toEqual({ type: "message_update", message: msg, delta });
		});

		it("should translate message_end", () => {
			const msg = { role: "assistant", content: "Done" };
			emitEvent({ type: "message_end", message: msg });
			expect(messages[0]).toEqual({ type: "message_end", message: msg });
		});

		it("should translate tool_execution_start", () => {
			emitEvent({
				type: "tool_execution_start",
				toolCallId: "tc1",
				toolName: "bash",
				args: { command: "ls" },
			});
			expect(messages[0]).toEqual({
				type: "tool_execution_start",
				toolCallId: "tc1",
				toolName: "bash",
				args: { command: "ls" },
			});
		});

		it("should translate tool_execution_update", () => {
			emitEvent({
				type: "tool_execution_update",
				toolCallId: "tc1",
				toolName: "bash",
				args: {},
				partialResult: { stdout: "file.txt" },
			});
			expect(messages[0]).toEqual({
				type: "tool_execution_update",
				toolCallId: "tc1",
				toolName: "bash",
				partialResult: { stdout: "file.txt" },
			});
		});

		it("should translate tool_execution_end", () => {
			emitEvent({
				type: "tool_execution_end",
				toolCallId: "tc1",
				toolName: "bash",
				result: { stdout: "done" },
				isError: false,
			});
			expect(messages[0]).toEqual({
				type: "tool_execution_end",
				toolCallId: "tc1",
				toolName: "bash",
				result: { stdout: "done" },
				isError: false,
			});
		});

		it("should NOT forward compaction events", () => {
			emitEvent({ type: "compaction_start", reason: "threshold" });
			emitEvent({
				type: "compaction_end",
				reason: "threshold",
				result: undefined,
				aborted: false,
				willRetry: false,
			});
			expect(messages).toHaveLength(0);
		});

		it("should NOT forward auto_retry events", () => {
			emitEvent({ type: "auto_retry_start", attempt: 1, maxAttempts: 3, delayMs: 1000, errorMessage: "err" });
			emitEvent({ type: "auto_retry_end", success: true, attempt: 1 });
			expect(messages).toHaveLength(0);
		});
	});

	describe("sendMessage", () => {
		it("should call session.prompt with the content", async () => {
			const mockSession = _testGetMockSession();
			await bridge.sendMessage("Hello agent");
			expect(mockSession.prompt).toHaveBeenCalledWith("Hello agent");
		});

		it("should emit error message if session is not initialized", async () => {
			bridge.dispose();
			await bridge.sendMessage("Hello");
			expect(messages.some((m) => m.type === "error")).toBe(true);
		});
	});

	describe("abort", () => {
		it("should call session.abort", async () => {
			const mockSession = _testGetMockSession();
			await bridge.abort();
			expect(mockSession.abort).toHaveBeenCalled();
		});
	});

	describe("getSessionList", () => {
		it("should return session summaries", async () => {
			const list = await bridge.getSessionList();
			expect(list).toHaveLength(2);
			expect(list[0]).toEqual({
				id: "session-1",
				name: "session-1",
				timestamp: "2026-03-29T00:00:00.000Z",
				messageCount: 5,
			});
		});
	});

	describe("dispose", () => {
		it("should clean up session and unsubscribe", () => {
			const mockSession = _testGetMockSession();
			bridge.dispose();
			expect(mockSession.dispose).toHaveBeenCalled();
		});
	});
});
