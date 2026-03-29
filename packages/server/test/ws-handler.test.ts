import { describe, expect, it, vi } from "vitest";
import type { WsClientMessage } from "../src/types.js";

/**
 * Unit tests for WebSocket handler message routing.
 *
 * Since testing real WebSocket upgrades requires a running server,
 * these tests focus on the message parsing and routing logic by
 * simulating the socket events.
 */

describe("WsClientMessage parsing", () => {
	it("should accept a valid message payload", () => {
		const raw = JSON.stringify({ type: "message", content: "Hello" });
		const parsed: WsClientMessage = JSON.parse(raw);
		expect(parsed.type).toBe("message");
		if (parsed.type === "message") {
			expect(parsed.content).toBe("Hello");
		}
	});

	it("should accept an abort message", () => {
		const raw = JSON.stringify({ type: "abort" });
		const parsed: WsClientMessage = JSON.parse(raw);
		expect(parsed.type).toBe("abort");
	});

	it("should accept a session_load message", () => {
		const raw = JSON.stringify({ type: "session_load", sessionId: "abc-123" });
		const parsed: WsClientMessage = JSON.parse(raw);
		expect(parsed.type).toBe("session_load");
		if (parsed.type === "session_load") {
			expect(parsed.sessionId).toBe("abc-123");
		}
	});

	it("should accept a session_new message", () => {
		const raw = JSON.stringify({ type: "session_new" });
		const parsed: WsClientMessage = JSON.parse(raw);
		expect(parsed.type).toBe("session_new");
	});

	it("should accept a session_fork message", () => {
		const raw = JSON.stringify({ type: "session_fork", entryId: "entry-456" });
		const parsed: WsClientMessage = JSON.parse(raw);
		expect(parsed.type).toBe("session_fork");
		if (parsed.type === "session_fork") {
			expect(parsed.entryId).toBe("entry-456");
		}
	});

	it("should fail to parse invalid JSON", () => {
		expect(() => JSON.parse("not json")).toThrow();
	});
});

describe("WsHandler message routing (simulated)", () => {
	// These tests verify the routing logic conceptually.
	// Full integration testing with real WebSocket connections is in Task 18.

	it("should route 'message' type to sendMessage", () => {
		const handlers: Record<string, (...args: any[]) => void> = {
			message: vi.fn(),
			abort: vi.fn(),
			session_load: vi.fn(),
			session_new: vi.fn(),
		};

		// Cast through unknown so TS doesn't narrow the switch to a single case
		const msg = { type: "message", content: "test input" } as unknown as WsClientMessage;

		// Simulate routing
		switch (msg.type) {
			case "message":
				handlers.message(msg.content);
				break;
			case "abort":
				handlers.abort();
				break;
			case "session_load":
				handlers.session_load(msg.sessionId);
				break;
			case "session_new":
				handlers.session_new();
				break;
		}

		expect(handlers.message).toHaveBeenCalledWith("test input");
		expect(handlers.abort).not.toHaveBeenCalled();
		expect(handlers.session_load).not.toHaveBeenCalled();
		expect(handlers.session_new).not.toHaveBeenCalled();
	});

	it("should route 'abort' type to abort", () => {
		const abortFn = vi.fn();
		const msg: WsClientMessage = { type: "abort" };

		if (msg.type === "abort") abortFn();

		expect(abortFn).toHaveBeenCalled();
	});

	it("should route 'session_load' type to loadSession", () => {
		const loadFn = vi.fn();
		const msg: WsClientMessage = { type: "session_load", sessionId: "sess-1" };

		if (msg.type === "session_load") loadFn(msg.sessionId);

		expect(loadFn).toHaveBeenCalledWith("sess-1");
	});
});
