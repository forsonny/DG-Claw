/**
 * AgentBridge -- bridges AgentSession events to WebSocket message format.
 *
 * This is the critical integration layer between the @dg-claw/coding-agent
 * runtime and the WebSocket protocol. It wraps an AgentSession, subscribes
 * to its events, and emits WsServerMessage objects via a callback.
 */

import {
	type AgentSession,
	type AgentSessionEvent,
	type CreateAgentSessionResult,
	createAgentSession,
	type SessionInfo,
	SessionManager,
} from "@dg-claw/coding-agent";
import type { SessionSummary, WsServerMessage } from "../types.js";

export type WsMessageCallback = (message: WsServerMessage) => void;

export interface AgentBridgeConfig {
	/** Working directory for the agent. */
	cwd: string;
	/** Global config directory (e.g., ~/.dg-claw). */
	agentDir: string;
	/** Callback invoked for each outbound WebSocket message. */
	onMessage: WsMessageCallback;
	/** Callback invoked when the bridge encounters a fatal error. */
	onError: (error: Error) => void;
}

export class AgentBridge {
	private session: AgentSession | null = null;
	private unsubscribe: (() => void) | null = null;
	private readonly config: AgentBridgeConfig;

	constructor(config: AgentBridgeConfig) {
		this.config = config;
	}

	/**
	 * Initialize the bridge by creating an AgentSession.
	 */
	async init(): Promise<void> {
		try {
			const result: CreateAgentSessionResult = await createAgentSession({
				cwd: this.config.cwd,
				agentDir: this.config.agentDir,
			});

			this.session = result.session;

			// Subscribe to session events and translate to WsServerMessage
			this.unsubscribe = this.session.subscribe((event: AgentSessionEvent) => {
				const message = this.translateEvent(event);
				if (message) {
					this.config.onMessage(message);
				}
			});
		} catch (err) {
			this.config.onError(err instanceof Error ? err : new Error(String(err)));
		}
	}

	/**
	 * Send a user message to the agent.
	 */
	async sendMessage(content: string): Promise<void> {
		if (!this.session) {
			this.config.onMessage({ type: "error", message: "Agent session not initialized" });
			return;
		}

		try {
			await this.session.prompt(content);
		} catch (err) {
			this.config.onMessage({
				type: "error",
				message: err instanceof Error ? err.message : String(err),
			});
		}
	}

	/**
	 * Abort the current agent response.
	 */
	async abort(): Promise<void> {
		if (!this.session) return;

		try {
			await this.session.abort();
		} catch (err) {
			this.config.onMessage({
				type: "error",
				message: `Abort failed: ${err instanceof Error ? err.message : String(err)}`,
			});
		}
	}

	/**
	 * Load a specific session by file path or session ID.
	 */
	async loadSession(sessionId: string): Promise<void> {
		if (!this.session) {
			this.config.onMessage({ type: "error", message: "Agent session not initialized" });
			return;
		}

		try {
			const success = await this.session.switchSession(sessionId);
			if (success) {
				const entries = this.session.sessionManager.getBranch();
				this.config.onMessage({
					type: "session_loaded",
					sessionId,
					entries,
				});
			} else {
				this.config.onMessage({ type: "error", message: `Failed to load session: ${sessionId}` });
			}
		} catch (err) {
			this.config.onMessage({
				type: "error",
				message: `Failed to load session: ${err instanceof Error ? err.message : String(err)}`,
			});
		}
	}

	/**
	 * Create a new session.
	 */
	async newSession(): Promise<void> {
		// Dispose and reinitialize
		this.dispose();
		await this.init();

		// Send session list to client
		const sessions = await this.getSessionList();
		this.config.onMessage({ type: "session_list", sessions });
	}

	/**
	 * Get a list of available sessions with summary metadata.
	 */
	async getSessionList(): Promise<SessionSummary[]> {
		if (!this.session) return [];

		try {
			const cwd = this.config.cwd;
			const sessionDir = this.session.sessionManager.getSessionDir();
			const sessions = await SessionManager.list(cwd, sessionDir);

			return sessions.map((info: SessionInfo) => ({
				id: info.id,
				name: info.name ?? info.id,
				timestamp: info.modified.toISOString(),
				messageCount: info.messageCount,
			}));
		} catch {
			return [];
		}
	}

	/**
	 * Clean up: unsubscribe from events, dispose of session resources.
	 */
	dispose(): void {
		if (this.unsubscribe) {
			this.unsubscribe();
			this.unsubscribe = null;
		}

		if (this.session) {
			this.session.dispose();
			this.session = null;
		}
	}

	/**
	 * Translate an AgentSessionEvent into a WsServerMessage.
	 * Returns null for events that should not be forwarded.
	 */
	private translateEvent(event: AgentSessionEvent): WsServerMessage | null {
		switch (event.type) {
			case "agent_start":
				return { type: "agent_start" };

			case "agent_end":
				return { type: "agent_end", messages: event.messages };

			case "turn_start":
				return { type: "turn_start" };

			case "turn_end":
				return {
					type: "turn_end",
					message: event.message,
					toolResults: event.toolResults,
				};

			case "message_start":
				return { type: "message_start", message: event.message };

			case "message_update":
				return {
					type: "message_update",
					message: event.message,
					delta: event.assistantMessageEvent,
				};

			case "message_end":
				return { type: "message_end", message: event.message };

			case "tool_execution_start":
				return {
					type: "tool_execution_start",
					toolCallId: event.toolCallId,
					toolName: event.toolName,
					args: event.args,
				};

			case "tool_execution_update":
				return {
					type: "tool_execution_update",
					toolCallId: event.toolCallId,
					toolName: event.toolName,
					partialResult: event.partialResult,
				};

			case "tool_execution_end":
				return {
					type: "tool_execution_end",
					toolCallId: event.toolCallId,
					toolName: event.toolName,
					result: event.result,
					isError: event.isError,
				};

			// Compaction and retry events are internal -- do not forward
			case "compaction_start":
			case "compaction_end":
			case "auto_retry_start":
			case "auto_retry_end":
				return null;

			default:
				return null;
		}
	}
}

/**
 * Factory function to create and initialize an AgentBridge.
 */
export async function createAgentBridge(config: AgentBridgeConfig): Promise<AgentBridge> {
	const bridge = new AgentBridge(config);
	await bridge.init();
	return bridge;
}
