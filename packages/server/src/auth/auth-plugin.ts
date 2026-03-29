/**
 * Fastify auth plugin.
 *
 * Registers:
 * - POST /api/auth/login  -- verify password, set JWT cookie
 * - POST /api/auth/logout -- clear JWT cookie
 * - GET  /api/auth/status -- check authentication state
 * - onRequest hook        -- validate JWT cookie on protected routes
 */

import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fp from "fastify-plugin";
import { generateJwtToken, verifyJwtToken, verifyPassword } from "./password.js";

export interface AuthPluginOptions {
	passwordHash: string;
	jwtSecret: string;
}

const COOKIE_NAME = "dg_claw_jwt";
const COOKIE_MAX_AGE_SECONDS = 24 * 60 * 60; // 24 hours

/** Routes that do not require authentication. */
const PUBLIC_PREFIXES = ["/api/auth/", "/login"];

function isPublicRoute(url: string): boolean {
	for (const prefix of PUBLIC_PREFIXES) {
		if (url.startsWith(prefix)) return true;
	}
	return false;
}

function isStaticFileRoute(url: string): boolean {
	// Static files are anything that is not /api/* or /ws
	return !url.startsWith("/api/") && !url.startsWith("/ws") && url !== "/login";
}

async function authPlugin(fastify: FastifyInstance, options: AuthPluginOptions): Promise<void> {
	const { passwordHash, jwtSecret } = options;

	// ------------------------------------------------------------------
	// onRequest hook: validate JWT on protected routes
	// ------------------------------------------------------------------
	fastify.addHook("onRequest", async (request: FastifyRequest, reply: FastifyReply) => {
		const url = request.url.split("?")[0]; // Strip query params

		// Allow public routes and static file routes through
		if (isPublicRoute(url) || isStaticFileRoute(url)) {
			return;
		}

		const token = request.cookies?.[COOKIE_NAME];
		if (!token || !verifyJwtToken(token, jwtSecret)) {
			reply.status(401).send({ error: "Unauthorized" });
		}
	});

	// ------------------------------------------------------------------
	// POST /api/auth/login
	// ------------------------------------------------------------------
	fastify.post<{ Body: { password: string } }>("/api/auth/login", async (request, reply) => {
		const { password } = request.body ?? {};

		if (!password || typeof password !== "string") {
			return reply.status(400).send({ error: "Password is required" });
		}

		const valid = await verifyPassword(password, passwordHash);
		if (!valid) {
			return reply.status(401).send({ error: "Invalid password" });
		}

		const token = generateJwtToken(jwtSecret);

		reply.setCookie(COOKIE_NAME, token, {
			httpOnly: true,
			secure: false, // Set to true behind TLS reverse proxy
			sameSite: "strict",
			path: "/",
			maxAge: COOKIE_MAX_AGE_SECONDS,
		});

		return { ok: true };
	});

	// ------------------------------------------------------------------
	// POST /api/auth/logout
	// ------------------------------------------------------------------
	fastify.post("/api/auth/logout", async (_request, reply) => {
		reply.clearCookie(COOKIE_NAME, {
			path: "/",
		});

		return { ok: true };
	});

	// ------------------------------------------------------------------
	// GET /api/auth/status
	// ------------------------------------------------------------------
	fastify.get("/api/auth/status", async (request) => {
		const token = request.cookies?.[COOKIE_NAME];
		const authenticated = !!token && verifyJwtToken(token, jwtSecret);
		return { authenticated };
	});
}

export const authPluginRegistration = fp(authPlugin, {
	name: "dg-claw-auth",
	fastify: "5.x",
	dependencies: ["@fastify/cookie"],
});
