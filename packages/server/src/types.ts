/**
 * Types for @dg-claw/server.
 */

import type { AgentEvent, AgentMessage } from "@dg-claw/agent";
import type { SessionEntry } from "@dg-claw/coding-agent";

// ============================================================================
// Server Configuration
// ============================================================================

export interface ServerConfig {
	/** HTTP port. Default: 3000. */
	port: number;
	/** Bind address. Default: "0.0.0.0". */
	host: string;
	/** Path to the web-ui dist/ directory for static file serving. */
	staticDir: string;
	/** bcrypt hash of the login password. */
	passwordHash: string;
	/** Secret used to sign JWT tokens. */
	jwtSecret: string;
	/** Path to the memory SQLite database. */
	memoryDbPath: string;
	/** Working directory for agent sessions. Default: process.cwd(). */
	cwd: string;
	/** Global config directory. Default: ~/.dg-claw. */
	configDir: string;
	/** Path to the sessions directory. */
	sessionsDir: string;
	/** Idle timeout (ms) before disposing an inactive agent bridge. Default: 600000 (10 min). */
	bridgeIdleTimeoutMs: number;
}

export const SERVER_DEFAULTS = {
	port: 3000,
	host: "0.0.0.0",
	bridgeIdleTimeoutMs: 600_000,
} as const;

// ============================================================================
// WebSocket Client -> Server Messages
// ============================================================================

export type WsClientMessage =
	| { type: "message"; content: string; attachments?: unknown[] }
	| { type: "abort" }
	| { type: "session_load"; sessionId: string }
	| { type: "session_new" }
	| { type: "session_fork"; entryId: string };

// ============================================================================
// WebSocket Server -> Client Messages
// ============================================================================

export type WsServerMessage =
	// Agent lifecycle events (mirrors AgentEvent)
	| { type: "agent_start" }
	| { type: "agent_end"; messages: AgentMessage[] }
	| { type: "turn_start" }
	| { type: "turn_end"; message: AgentMessage; toolResults: unknown[] }
	| { type: "message_start"; message: AgentMessage }
	| { type: "message_update"; message: AgentMessage; delta: unknown }
	| { type: "message_end"; message: AgentMessage }
	| { type: "tool_execution_start"; toolCallId: string; toolName: string; args: unknown }
	| { type: "tool_execution_update"; toolCallId: string; toolName: string; partialResult: unknown }
	| { type: "tool_execution_end"; toolCallId: string; toolName: string; result: unknown; isError: boolean }
	// Session events
	| { type: "session_loaded"; sessionId: string; entries: SessionEntry[] }
	| { type: "session_list"; sessions: SessionSummary[] }
	// Error
	| { type: "error"; message: string };

// Ensure WsServerMessage stays aligned with AgentEvent at compile time
type _AgentEventCheck = AgentEvent extends
	| { type: "agent_start" }
	| { type: "agent_end"; messages: AgentMessage[] }
	| { type: "turn_start" }
	| { type: "turn_end"; message: AgentMessage; toolResults: unknown[] }
	| { type: "message_start"; message: AgentMessage }
	| { type: "message_update"; message: AgentMessage; assistantMessageEvent: unknown }
	| { type: "message_end"; message: AgentMessage }
	| { type: "tool_execution_start"; toolCallId: string; toolName: string; args: unknown }
	| { type: "tool_execution_update"; toolCallId: string; toolName: string; args: unknown; partialResult: unknown }
	| { type: "tool_execution_end"; toolCallId: string; toolName: string; result: unknown; isError: boolean }
	? true
	: false;

// ============================================================================
// Session Summary
// ============================================================================

export interface SessionSummary {
	id: string;
	name: string;
	timestamp: string;
	messageCount: number;
}
