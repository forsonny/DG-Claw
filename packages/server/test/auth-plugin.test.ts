import cookie from "@fastify/cookie";
import Fastify from "fastify";
import { beforeEach, describe, expect, it } from "vitest";
import { authPluginRegistration } from "../src/auth/auth-plugin.js";
import { hashPassword } from "../src/auth/password.js";

const TEST_PASSWORD = "test-password-123";
const JWT_SECRET = "test-jwt-secret-for-auth-plugin";

async function createTestApp() {
	const passwordHash = await hashPassword(TEST_PASSWORD);
	const app = Fastify();

	await app.register(cookie);
	await app.register(authPluginRegistration, {
		passwordHash,
		jwtSecret: JWT_SECRET,
	});

	// Add a protected test route
	app.get("/api/protected", async () => {
		return { data: "secret" };
	});

	return app;
}

/** Parse Set-Cookie header to extract cookie value. */
function extractCookie(headers: Record<string, string | string[] | undefined>, name: string): string | null {
	const setCookie = headers["set-cookie"];
	if (!setCookie) return null;

	const cookies = Array.isArray(setCookie) ? setCookie : [setCookie];
	for (const c of cookies) {
		if (c.startsWith(`${name}=`)) {
			const value = c.split(";")[0].split("=").slice(1).join("=");
			return value;
		}
	}
	return null;
}

describe("auth plugin", () => {
	let app: ReturnType<typeof Fastify>;

	beforeEach(async () => {
		app = await createTestApp();
	});

	describe("POST /api/auth/login", () => {
		it("should return 200 and set cookie on correct password", async () => {
			const response = await app.inject({
				method: "POST",
				url: "/api/auth/login",
				payload: { password: TEST_PASSWORD },
			});

			expect(response.statusCode).toBe(200);
			expect(response.json()).toEqual({ ok: true });

			const jwtCookie = extractCookie(response.headers as Record<string, string>, "dg_claw_jwt");
			expect(jwtCookie).toBeTruthy();
			expect(jwtCookie!.split(".")).toHaveLength(3); // JWT format
		});

		it("should return 401 on wrong password", async () => {
			const response = await app.inject({
				method: "POST",
				url: "/api/auth/login",
				payload: { password: "wrong-password" },
			});

			expect(response.statusCode).toBe(401);
			expect(response.json()).toEqual({ error: "Invalid password" });
		});

		it("should return 400 when password is missing", async () => {
			const response = await app.inject({
				method: "POST",
				url: "/api/auth/login",
				payload: {},
			});

			expect(response.statusCode).toBe(400);
		});
	});

	describe("POST /api/auth/logout", () => {
		it("should clear the cookie", async () => {
			const response = await app.inject({
				method: "POST",
				url: "/api/auth/logout",
			});

			expect(response.statusCode).toBe(200);
			expect(response.json()).toEqual({ ok: true });
		});
	});

	describe("GET /api/auth/status", () => {
		it("should return authenticated: false when no cookie", async () => {
			const response = await app.inject({
				method: "GET",
				url: "/api/auth/status",
			});

			expect(response.statusCode).toBe(200);
			expect(response.json()).toEqual({ authenticated: false });
		});

		it("should return authenticated: true when valid cookie is present", async () => {
			// Login first
			const loginResponse = await app.inject({
				method: "POST",
				url: "/api/auth/login",
				payload: { password: TEST_PASSWORD },
			});

			const jwtCookie = extractCookie(loginResponse.headers as Record<string, string>, "dg_claw_jwt");

			// Check status with cookie
			const response = await app.inject({
				method: "GET",
				url: "/api/auth/status",
				cookies: { dg_claw_jwt: jwtCookie! },
			});

			expect(response.statusCode).toBe(200);
			expect(response.json()).toEqual({ authenticated: true });
		});
	});

	describe("Protected routes", () => {
		it("should return 401 for protected route without cookie", async () => {
			const response = await app.inject({
				method: "GET",
				url: "/api/protected",
			});

			expect(response.statusCode).toBe(401);
		});

		it("should return 200 for protected route with valid cookie", async () => {
			// Login first
			const loginResponse = await app.inject({
				method: "POST",
				url: "/api/auth/login",
				payload: { password: TEST_PASSWORD },
			});

			const jwtCookie = extractCookie(loginResponse.headers as Record<string, string>, "dg_claw_jwt");

			// Access protected route
			const response = await app.inject({
				method: "GET",
				url: "/api/protected",
				cookies: { dg_claw_jwt: jwtCookie! },
			});

			expect(response.statusCode).toBe(200);
			expect(response.json()).toEqual({ data: "secret" });
		});

		it("should return 401 for protected route with invalid cookie", async () => {
			const response = await app.inject({
				method: "GET",
				url: "/api/protected",
				cookies: { dg_claw_jwt: "invalid.jwt.token" },
			});

			expect(response.statusCode).toBe(401);
		});
	});

	describe("Public routes", () => {
		it("should allow /api/auth/status without cookie (returns authenticated: false)", async () => {
			const response = await app.inject({
				method: "GET",
				url: "/api/auth/status",
			});

			expect(response.statusCode).toBe(200);
		});

		it("should allow /api/auth/login without cookie", async () => {
			const response = await app.inject({
				method: "POST",
				url: "/api/auth/login",
				payload: { password: "anything" },
			});

			// 401 for wrong password, but NOT the hook's 401 -- the route handled it
			expect(response.statusCode).toBe(401);
			expect(response.json()).toEqual({ error: "Invalid password" });
		});
	});
});
