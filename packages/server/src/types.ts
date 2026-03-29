// @dg-claw/server -- stub, implemented in Task 2

export interface ServerConfig {
	port: number;
	host: string;
	staticDir: string;
	passwordHash: string;
	jwtSecret: string;
	memoryDbPath: string;
	cwd: string;
	configDir: string;
	sessionsDir: string;
	bridgeIdleTimeoutMs: number;
}

export const SERVER_DEFAULTS = {
	port: 3000,
	host: "0.0.0.0",
	bridgeIdleTimeoutMs: 600_000,
} as const;

export type WsClientMessage =
	| { type: "message"; content: string; attachments?: unknown[] }
	| { type: "abort" }
	| { type: "session_load"; sessionId: string }
	| { type: "session_new" }
	| { type: "session_fork"; entryId: string };

export type WsServerMessage = { type: "agent_start" } | { type: "agent_end" } | { type: "error"; message: string };

export interface SessionSummary {
	id: string;
	name: string;
	timestamp: string;
	messageCount: number;
}
