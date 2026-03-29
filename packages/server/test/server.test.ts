import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { hashPassword } from "../src/auth/password.js";
import { createServer } from "../src/server.js";
import type { ServerConfig } from "../src/types.js";

const JWT_SECRET = "test-jwt-secret-for-server-assembly";

async function buildConfig(overrides: Partial<ServerConfig> = {}): Promise<ServerConfig> {
	const passwordHash = await hashPassword("test-password-123");
	const tmpDir = join(tmpdir(), `dg-claw-server-test-${Date.now()}`);

	return {
		port: 3000,
		host: "127.0.0.1",
		staticDir: join(tmpDir, "nonexistent-static"),
		passwordHash,
		jwtSecret: JWT_SECRET,
		memoryDbPath: join(tmpDir, "memory.sqlite"),
		cwd: tmpDir,
		configDir: tmpDir,
		sessionsDir: join(tmpDir, "sessions"),
		bridgeIdleTimeoutMs: 60_000,
		...overrides,
	};
}

describe("createServer", () => {
	let server: Awaited<ReturnType<typeof createServer>> | null = null;

	afterEach(async () => {
		if (server) {
			await server.close();
			server = null;
		}
	});

	it("should return a Fastify instance", async () => {
		const config = await buildConfig();
		server = await createServer(config);

		// Fastify instances expose inject, listen, close, log, etc.
		expect(typeof server.inject).toBe("function");
		expect(typeof server.listen).toBe("function");
		expect(typeof server.close).toBe("function");
		expect(server.log).toBeDefined();
	});

	it("GET /api/health returns { status: 'ok' } with a timestamp", async () => {
		const config = await buildConfig();
		server = await createServer(config);

		const response = await server.inject({
			method: "GET",
			url: "/api/health",
		});

		expect(response.statusCode).toBe(200);
		const body = response.json<{ status: string; timestamp: string }>();
		expect(body.status).toBe("ok");
		expect(typeof body.timestamp).toBe("string");
		// Verify it is a valid ISO date string
		expect(Number.isNaN(new Date(body.timestamp).getTime())).toBe(false);
	});

	it("GET /api/health is publicly accessible (no auth required)", async () => {
		const config = await buildConfig();
		server = await createServer(config);

		// No JWT cookie -- should still return 200
		const response = await server.inject({
			method: "GET",
			url: "/api/health",
		});

		expect(response.statusCode).toBe(200);
	});

	it("GET /api/sessions returns 401 without authentication", async () => {
		const config = await buildConfig();
		server = await createServer(config);

		const response = await server.inject({
			method: "GET",
			url: "/api/sessions",
		});

		expect(response.statusCode).toBe(401);
	});

	it("GET /api/nonexistent returns 401 for unknown API routes (auth guard fires first)", async () => {
		const config = await buildConfig();
		server = await createServer(config);

		// Unknown API routes hit the auth guard before the not-found handler
		const response = await server.inject({
			method: "GET",
			url: "/api/nonexistent-route-xyz",
		});

		// 401 because auth hook fires before the not-found handler for /api/* routes
		expect(response.statusCode).toBe(401);
	});

	it("GET /api/auth/status returns unauthenticated state without cookie", async () => {
		const config = await buildConfig();
		server = await createServer(config);

		const response = await server.inject({
			method: "GET",
			url: "/api/auth/status",
		});

		expect(response.statusCode).toBe(200);
		expect(response.json<{ authenticated: boolean }>().authenticated).toBe(false);
	});
});
