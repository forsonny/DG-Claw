import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { WsClient } from "../src/ws-client.js";

// ---------------------------------------------------------------------------
// Mock WebSocket
// ---------------------------------------------------------------------------

interface MockWsInstance {
	url: string;
	readyState: number;
	send: ReturnType<typeof vi.fn>;
	close: ReturnType<typeof vi.fn>;
	onopen: ((event: Event) => void) | null;
	onmessage: ((event: MessageEvent) => void) | null;
	onclose: ((event: CloseEvent) => void) | null;
	onerror: ((event: Event) => void) | null;
	// Test helpers
	simulateOpen(): void;
	simulateMessage(data: unknown): void;
	simulateClose(): void;
	simulateError(): void;
}

let lastCreatedWs: MockWsInstance | null = null;
const createdInstances: MockWsInstance[] = [];

class MockWebSocket implements MockWsInstance {
	static CONNECTING = 0;
	static OPEN = 1;
	static CLOSING = 2;
	static CLOSED = 3;

	CONNECTING = 0;
	OPEN = 1;
	CLOSING = 2;
	CLOSED = 3;

	url: string;
	readyState: number = MockWebSocket.CONNECTING;
	send = vi.fn();
	close = vi.fn().mockImplementation(() => {
		this.readyState = MockWebSocket.CLOSED;
		if (this.onclose) this.onclose({ type: "close" } as CloseEvent);
	});

	onopen: ((event: Event) => void) | null = null;
	onmessage: ((event: MessageEvent) => void) | null = null;
	onclose: ((event: CloseEvent) => void) | null = null;
	onerror: ((event: Event) => void) | null = null;

	constructor(url: string) {
		this.url = url;
		lastCreatedWs = this;
		createdInstances.push(this);
	}

	simulateOpen(): void {
		this.readyState = MockWebSocket.OPEN;
		if (this.onopen) this.onopen(new Event("open"));
	}

	simulateMessage(data: unknown): void {
		if (this.onmessage) {
			this.onmessage(new MessageEvent("message", { data: JSON.stringify(data) }));
		}
	}

	simulateClose(): void {
		this.readyState = MockWebSocket.CLOSED;
		if (this.onclose) this.onclose({ type: "close" } as CloseEvent);
	}

	simulateError(): void {
		if (this.onerror) this.onerror(new Event("error"));
	}
}

// ---------------------------------------------------------------------------
// Test setup
// ---------------------------------------------------------------------------

beforeEach(() => {
	lastCreatedWs = null;
	createdInstances.length = 0;
	vi.stubGlobal("WebSocket", MockWebSocket);
});

afterEach(() => {
	vi.restoreAllMocks();
	vi.useRealTimers();
});

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("WsClient", () => {
	describe("connect()", () => {
		it("creates a WebSocket with the given URL", () => {
			const client = new WsClient("ws://localhost:3000/ws");
			client.connect();
			expect(lastCreatedWs).not.toBeNull();
			expect(lastCreatedWs!.url).toBe("ws://localhost:3000/ws");
		});

		it("sets state to 'connecting' before open", () => {
			const client = new WsClient("ws://localhost:3000/ws");
			const states: string[] = [];
			client.onStateChange((s) => states.push(s));
			client.connect();
			expect(states).toContain("connecting");
			expect(client.connectionState).toBe("connecting");
		});

		it("sets state to 'connected' when WebSocket opens", () => {
			const client = new WsClient("ws://localhost:3000/ws");
			const states: string[] = [];
			client.onStateChange((s) => states.push(s));
			client.connect();
			lastCreatedWs!.simulateOpen();
			expect(client.connectionState).toBe("connected");
			expect(states).toContain("connected");
		});
	});

	describe("send()", () => {
		it("serializes message as JSON and calls ws.send()", () => {
			const client = new WsClient("ws://localhost:3000/ws");
			client.connect();
			lastCreatedWs!.simulateOpen();
			client.send({ type: "message", content: "hello" });
			expect(lastCreatedWs!.send).toHaveBeenCalledWith(JSON.stringify({ type: "message", content: "hello" }));
		});

		it("warns and does nothing when not connected", () => {
			const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
			const client = new WsClient("ws://localhost:3000/ws");
			client.connect(); // still CONNECTING, not OPEN
			client.send({ type: "abort" });
			expect(lastCreatedWs!.send).not.toHaveBeenCalled();
			expect(warn).toHaveBeenCalled();
		});
	});

	describe("close()", () => {
		it("closes the WebSocket and sets state to 'disconnected'", () => {
			const client = new WsClient("ws://localhost:3000/ws");
			client.connect();
			lastCreatedWs!.simulateOpen();
			const ws = lastCreatedWs!;
			client.close();
			expect(ws.close).toHaveBeenCalled();
			expect(client.connectionState).toBe("disconnected");
		});

		it("does not reconnect after explicit close()", () => {
			vi.useFakeTimers();
			const client = new WsClient("ws://localhost:3000/ws");
			client.connect();
			const ws = lastCreatedWs!;
			ws.simulateOpen();
			client.close();

			// Manually trigger close on the ws (already done by mock's close())
			// Advance timers -- no reconnect should happen
			vi.advanceTimersByTime(60_000);
			// Only 1 WebSocket instance should have been created
			expect(createdInstances.length).toBe(1);
		});
	});

	describe("onMessage()", () => {
		it("calls registered handler with parsed message", () => {
			const client = new WsClient("ws://localhost:3000/ws");
			const received: unknown[] = [];
			client.onMessage((msg) => received.push(msg));
			client.connect();
			lastCreatedWs!.simulateOpen();
			lastCreatedWs!.simulateMessage({ type: "pong" });
			expect(received).toEqual([{ type: "pong" }]);
		});

		it("returns an unsubscribe function that removes the handler", () => {
			const client = new WsClient("ws://localhost:3000/ws");
			const received: unknown[] = [];
			const unsub = client.onMessage((msg) => received.push(msg));
			client.connect();
			lastCreatedWs!.simulateOpen();
			unsub();
			lastCreatedWs!.simulateMessage({ type: "pong" });
			expect(received).toHaveLength(0);
		});
	});

	describe("onStateChange()", () => {
		it("returns an unsubscribe function that removes the handler", () => {
			const client = new WsClient("ws://localhost:3000/ws");
			const states: string[] = [];
			const unsub = client.onStateChange((s) => states.push(s));
			unsub();
			client.connect();
			lastCreatedWs!.simulateOpen();
			expect(states).toHaveLength(0);
		});
	});

	describe("auto-reconnect with exponential backoff", () => {
		it("reconnects after disconnect with 1s initial backoff", () => {
			vi.useFakeTimers();
			const client = new WsClient("ws://localhost:3000/ws");
			client.connect();
			lastCreatedWs!.simulateOpen();
			expect(createdInstances.length).toBe(1);

			// Simulate server-side close
			lastCreatedWs!.simulateClose();
			expect(client.connectionState).toBe("reconnecting");

			// Advance past initial backoff
			vi.advanceTimersByTime(1_000);
			expect(createdInstances.length).toBe(2);
		});

		it("doubles backoff on each failed attempt (1s -> 2s -> 4s -> 8s)", () => {
			vi.useFakeTimers();
			const client = new WsClient("ws://localhost:3000/ws");
			client.connect();
			// Never open -- simulates connection failure via close event
			lastCreatedWs!.simulateClose(); // disconnect at t=0, schedule 1s

			// After 1s: 2nd attempt created, immediately fails
			vi.advanceTimersByTime(1_000);
			expect(createdInstances.length).toBe(2);
			lastCreatedWs!.simulateClose(); // schedule 2s

			// After 2s: 3rd attempt
			vi.advanceTimersByTime(2_000);
			expect(createdInstances.length).toBe(3);
			lastCreatedWs!.simulateClose(); // schedule 4s

			// After 4s: 4th attempt
			vi.advanceTimersByTime(4_000);
			expect(createdInstances.length).toBe(4);
			lastCreatedWs!.simulateClose(); // schedule 8s

			// After 8s: 5th attempt
			vi.advanceTimersByTime(8_000);
			expect(createdInstances.length).toBe(5);
		});

		it("caps backoff at 30s", () => {
			vi.useFakeTimers();
			const client = new WsClient("ws://localhost:3000/ws");
			client.connect();

			// Run through enough failures to exceed the cap
			// Backoff sequence: 1, 2, 4, 8, 16, 30, 30, ...
			const sequence = [1_000, 2_000, 4_000, 8_000, 16_000, 30_000, 30_000];
			let totalInstances = 1;
			lastCreatedWs!.simulateClose();

			for (const delay of sequence) {
				vi.advanceTimersByTime(delay);
				totalInstances++;
				expect(createdInstances.length).toBe(totalInstances);
				lastCreatedWs!.simulateClose();
			}

			// One more 30s -- should still reconnect
			vi.advanceTimersByTime(30_000);
			expect(createdInstances.length).toBe(totalInstances + 1);
		});

		it("resets backoff to 1s after a successful reconnection", () => {
			vi.useFakeTimers();
			const client = new WsClient("ws://localhost:3000/ws");
			client.connect();

			// First connect: open then close
			lastCreatedWs!.simulateOpen();
			lastCreatedWs!.simulateClose(); // schedule reconnect at 1s

			vi.advanceTimersByTime(1_000); // 2nd WS created
			expect(createdInstances.length).toBe(2);
			lastCreatedWs!.simulateOpen(); // successful reconnect -- resets backoff
			lastCreatedWs!.simulateClose(); // now schedule next reconnect

			vi.advanceTimersByTime(1_000); // should reconnect at 1s again (reset)
			expect(createdInstances.length).toBe(3);
		});

		it("sets state to 'reconnecting' while waiting to reconnect", () => {
			vi.useFakeTimers();
			const client = new WsClient("ws://localhost:3000/ws");
			const states: string[] = [];
			client.onStateChange((s) => states.push(s));
			client.connect();
			lastCreatedWs!.simulateOpen();
			lastCreatedWs!.simulateClose();
			expect(client.connectionState).toBe("reconnecting");
		});
	});
});
