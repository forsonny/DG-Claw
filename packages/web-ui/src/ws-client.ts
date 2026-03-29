/**
 * WebSocket client for DG-Claw web gateway.
 *
 * Features:
 * - Typed send/receive messages (WsClientMessage / WsServerMessage)
 * - Auto-reconnect with exponential backoff (1s, 2s, 4s, 8s, max 30s)
 * - Connection state tracking
 * - Event callback system
 *
 * Message types are defined locally to avoid a circular runtime dependency
 * on the @dg-claw/server package in the browser bundle.
 */

export type WsConnectionState = "connecting" | "connected" | "disconnected" | "reconnecting";

export type WsClientMessage =
	| { type: "message"; content: string; attachments?: unknown[] }
	| { type: "abort" }
	| { type: "session_load"; sessionId: string }
	| { type: "session_new" }
	| { type: "session_fork"; entryId: string };

export interface WsServerMessage {
	type: string;
	[key: string]: unknown;
}

export type WsMessageHandler = (message: WsServerMessage) => void;
export type WsStateChangeHandler = (state: WsConnectionState) => void;

const INITIAL_BACKOFF_MS = 1_000;
const MAX_BACKOFF_MS = 30_000;
const BACKOFF_MULTIPLIER = 2;

export class WsClient {
	private ws: WebSocket | null = null;
	private readonly url: string;
	private state: WsConnectionState = "disconnected";
	private backoffMs = INITIAL_BACKOFF_MS;
	private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
	private shouldReconnect = true;
	private readonly messageHandlers: WsMessageHandler[] = [];
	private readonly stateChangeHandlers: WsStateChangeHandler[] = [];

	constructor(url?: string) {
		if (url) {
			this.url = url;
		} else {
			const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
			this.url = `${protocol}//${window.location.host}/ws`;
		}
	}

	/** Current connection state. */
	get connectionState(): WsConnectionState {
		return this.state;
	}

	/**
	 * Register a handler for incoming server messages.
	 * Returns an unsubscribe function.
	 */
	onMessage(handler: WsMessageHandler): () => void {
		this.messageHandlers.push(handler);
		return () => {
			const idx = this.messageHandlers.indexOf(handler);
			if (idx >= 0) this.messageHandlers.splice(idx, 1);
		};
	}

	/**
	 * Register a handler for connection state changes.
	 * Returns an unsubscribe function.
	 */
	onStateChange(handler: WsStateChangeHandler): () => void {
		this.stateChangeHandlers.push(handler);
		return () => {
			const idx = this.stateChangeHandlers.indexOf(handler);
			if (idx >= 0) this.stateChangeHandlers.splice(idx, 1);
		};
	}

	/** Open the WebSocket connection. */
	connect(): void {
		this.shouldReconnect = true;
		this.doConnect();
	}

	/** Send a typed message to the server. No-ops if not connected. */
	send(message: WsClientMessage): void {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
			console.warn("[WsClient] Cannot send: not connected");
			return;
		}
		this.ws.send(JSON.stringify(message));
	}

	/** Close the connection permanently (no auto-reconnect). */
	close(): void {
		this.shouldReconnect = false;

		if (this.reconnectTimer !== null) {
			clearTimeout(this.reconnectTimer);
			this.reconnectTimer = null;
		}

		if (this.ws) {
			this.ws.close();
			this.ws = null;
		}

		this.setState("disconnected");
	}

	// ------------------------------------------------------------------
	// Private helpers
	// ------------------------------------------------------------------

	private doConnect(): void {
		if (this.ws) {
			this.ws.close();
			this.ws = null;
		}

		this.setState(this.state === "disconnected" ? "connecting" : "reconnecting");

		try {
			this.ws = new WebSocket(this.url);
		} catch (err) {
			console.error("[WsClient] Failed to create WebSocket:", err);
			this.scheduleReconnect();
			return;
		}

		this.ws.onopen = () => {
			this.setState("connected");
			this.backoffMs = INITIAL_BACKOFF_MS; // reset backoff on success
		};

		this.ws.onmessage = (event: MessageEvent) => {
			try {
				const message = JSON.parse(event.data as string) as WsServerMessage;
				for (const handler of this.messageHandlers) {
					handler(message);
				}
			} catch (err) {
				console.error("[WsClient] Failed to parse message:", err);
			}
		};

		this.ws.onclose = () => {
			this.ws = null;
			this.setState("disconnected");
			this.scheduleReconnect();
		};

		this.ws.onerror = (event: Event) => {
			console.error("[WsClient] WebSocket error:", event);
			// onclose fires after onerror and handles the reconnect schedule
		};
	}

	private scheduleReconnect(): void {
		if (!this.shouldReconnect) return;

		const delay = this.backoffMs;
		this.backoffMs = Math.min(this.backoffMs * BACKOFF_MULTIPLIER, MAX_BACKOFF_MS);

		this.setState("reconnecting");

		this.reconnectTimer = setTimeout(() => {
			this.reconnectTimer = null;
			this.doConnect();
		}, delay);
	}

	private setState(newState: WsConnectionState): void {
		if (this.state === newState) return;
		this.state = newState;
		for (const handler of this.stateChangeHandlers) {
			handler(newState);
		}
	}
}
