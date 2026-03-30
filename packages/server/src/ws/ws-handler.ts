/**
 * WebSocket handler for @dg-claw/server.
 *
 * Registers the /ws route with @fastify/websocket.
 * On connection: verifies JWT cookie, creates/reuses AgentBridge.
 * On message: parses WsClientMessage, routes to appropriate bridge method.
 * On close: starts idle timeout before disposing the bridge.
 */

import "@fastify/websocket";
import type { WebSocket } from "@fastify/websocket";
import type { FastifyInstance } from "fastify";
import { verifyJwtToken } from "../auth/password.js";
import type { WsClientMessage, WsServerMessage } from "../types.js";
import { type AgentBridge, createAgentBridge } from "./agent-bridge.js";

export interface WsHandlerOptions {
	jwtSecret: string;
	cwd: string;
	agentDir: string;
	bridgeIdleTimeoutMs: number;
}

/** Tracks active bridges keyed by a connection identifier. */
const activeBridges = new Map<string, { bridge: AgentBridge; idleTimer: ReturnType<typeof setTimeout> | null }>();

function clearIdleTimer(entry: { idleTimer: ReturnType<typeof setTimeout> | null }): void {
	if (entry.idleTimer) {
		clearTimeout(entry.idleTimer);
		entry.idleTimer = null;
	}
}

/**
 * Register the /ws WebSocket route on the Fastify instance.
 */
export function registerWsHandler(fastify: FastifyInstance, options: WsHandlerOptions): void {
	fastify.get("/ws", { websocket: true }, async (socket: WebSocket, request) => {
		// ------------------------------------------------------------------
		// Auth: verify JWT cookie on upgrade
		// ------------------------------------------------------------------
		const token = (request as any).cookies?.dg_claw_jwt;
		if (!token || !verifyJwtToken(token, options.jwtSecret)) {
			socket.close(4001, "Unauthorized");
			return;
		}

		// ------------------------------------------------------------------
		// Create or reuse AgentBridge for this connection
		// ------------------------------------------------------------------
		// For single-user scenario, use a fixed key. Multi-user would use a session/user ID.
		const bridgeKey = "default";

		// Dispose existing bridge if any (previous connection closed)
		const existing = activeBridges.get(bridgeKey);
		if (existing) {
			clearIdleTimer(existing);
			existing.bridge.dispose();
			activeBridges.delete(bridgeKey);
		}

		// Create fresh bridge for this connection -- the onMessage callback
		// must reference THIS socket, not a stale one from a previous connection.
		const bridge = await createAgentBridge({
			cwd: options.cwd,
			agentDir: options.agentDir,
			onMessage: (msg: WsServerMessage) => {
				if (socket.readyState === socket.OPEN) {
					socket.send(JSON.stringify(msg));
				}
			},
			onError: (err: Error) => {
				if (socket.readyState === socket.OPEN) {
					socket.send(JSON.stringify({ type: "error", message: err.message }));
				}
			},
		});

		activeBridges.set(bridgeKey, { bridge, idleTimer: null });

		// Send initial session list
		const sessions = await bridge.getSessionList();
		if (socket.readyState === socket.OPEN) {
			socket.send(JSON.stringify({ type: "session_list", sessions }));
		}

		// ------------------------------------------------------------------
		// Message routing
		// ------------------------------------------------------------------
		socket.on("message", async (raw: Buffer | string) => {
			let msg: WsClientMessage;
			try {
				const text = typeof raw === "string" ? raw : raw.toString("utf8");
				msg = JSON.parse(text) as WsClientMessage;
			} catch {
				socket.send(JSON.stringify({ type: "error", message: "Invalid message format" }));
				return;
			}

			try {
				switch (msg.type) {
					case "message":
						await bridge.sendMessage(msg.content);
						break;
					case "abort":
						await bridge.abort();
						break;
					case "session_load":
						await bridge.loadSession(msg.sessionId);
						break;
					case "session_new":
						await bridge.newSession();
						break;
					case "session_fork":
						// Fork is a future extension -- acknowledge but no-op for now
						socket.send(JSON.stringify({ type: "error", message: "Session fork is not yet implemented" }));
						break;
					default:
						socket.send(JSON.stringify({ type: "error", message: `Unknown message type: ${(msg as any).type}` }));
				}
			} catch (err) {
				socket.send(
					JSON.stringify({
						type: "error",
						message: err instanceof Error ? err.message : String(err),
					}),
				);
			}
		});

		// ------------------------------------------------------------------
		// Close: start idle timeout
		// ------------------------------------------------------------------
		socket.on("close", () => {
			const currentEntry = activeBridges.get(bridgeKey);
			if (currentEntry) {
				currentEntry.idleTimer = setTimeout(() => {
					currentEntry.bridge.dispose();
					activeBridges.delete(bridgeKey);
				}, options.bridgeIdleTimeoutMs);
			}
		});

		// ------------------------------------------------------------------
		// Error handling
		// ------------------------------------------------------------------
		socket.on("error", (err: Error) => {
			fastify.log.error({ err }, "WebSocket error");
		});
	});
}
