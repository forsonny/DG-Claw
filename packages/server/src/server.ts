/**
 * Server assembly -- creates and configures the Fastify instance.
 *
 * Registers:
 * 1. @fastify/cookie for cookie parsing
 * 2. Auth plugin (JWT validation + login/logout/status routes)
 * 3. @fastify/static for serving web-ui dist
 * 4. @fastify/websocket + WebSocket handler
 * 5. REST API routes (sessions, memory, admin)
 * 6. Health check
 * 7. SPA fallback (serves index.html for unmatched routes)
 */

import { existsSync } from "node:fs";
import { join } from "node:path";
import cookie from "@fastify/cookie";
import fastifyStatic from "@fastify/static";
import fastifyWebSocket from "@fastify/websocket";
import Fastify, { type FastifyInstance } from "fastify";
import { registerAdminRoutes } from "./api/admin.js";
import { registerMemoryRoutes } from "./api/memory.js";
import { registerSessionRoutes } from "./api/sessions.js";
import { authPluginRegistration } from "./auth/auth-plugin.js";
import type { ServerConfig } from "./types.js";
import { SERVER_DEFAULTS } from "./types.js";
import { registerWsHandler } from "./ws/ws-handler.js";

export async function createServer(config: ServerConfig): Promise<FastifyInstance> {
	const fastify = Fastify({
		logger: {
			level: "info",
		},
	});

	// ------------------------------------------------------------------
	// 1. Cookie parsing
	// ------------------------------------------------------------------
	await fastify.register(cookie);

	// ------------------------------------------------------------------
	// 2. Auth plugin
	// ------------------------------------------------------------------
	await fastify.register(authPluginRegistration, {
		passwordHash: config.passwordHash,
		jwtSecret: config.jwtSecret,
	});

	// ------------------------------------------------------------------
	// 3. Static file serving (optional -- only if staticDir exists)
	// ------------------------------------------------------------------
	if (existsSync(config.staticDir)) {
		await fastify.register(fastifyStatic, {
			root: config.staticDir,
			prefix: "/",
			decorateReply: true,
		});
	}

	// ------------------------------------------------------------------
	// 4. WebSocket
	// ------------------------------------------------------------------
	await fastify.register(fastifyWebSocket);
	registerWsHandler(fastify, {
		jwtSecret: config.jwtSecret,
		cwd: config.cwd,
		agentDir: join(config.configDir, "agent"),
		bridgeIdleTimeoutMs: config.bridgeIdleTimeoutMs ?? SERVER_DEFAULTS.bridgeIdleTimeoutMs,
	});

	// ------------------------------------------------------------------
	// 5. REST API routes
	// ------------------------------------------------------------------
	registerSessionRoutes(fastify, {
		sessionsDir: config.sessionsDir,
	});

	registerMemoryRoutes(fastify, {
		memoryDbPath: config.memoryDbPath,
	});

	registerAdminRoutes(fastify, {
		configDir: join(config.configDir, "config"),
	});

	// ------------------------------------------------------------------
	// 6. Health check
	// ------------------------------------------------------------------
	fastify.get("/api/health", async () => {
		return { status: "ok", timestamp: new Date().toISOString() };
	});

	// ------------------------------------------------------------------
	// 7. SPA fallback -- serve index.html for non-API, non-WS routes
	// ------------------------------------------------------------------
	fastify.setNotFoundHandler(async (request, reply) => {
		const url = request.url.split("?")[0];

		// API and WebSocket routes should 404 normally
		if (url.startsWith("/api/") || url.startsWith("/ws")) {
			return reply.status(404).send({ error: "Not found" });
		}

		// Serve index.html for SPA routes if static dir is available
		const indexPath = join(config.staticDir, "index.html");
		if (existsSync(indexPath)) {
			return reply.sendFile("index.html");
		}

		return reply.status(404).send({ error: "Not found" });
	});

	return fastify;
}
