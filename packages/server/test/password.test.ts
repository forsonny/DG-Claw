import { existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
	generateJwtToken,
	hashPassword,
	loadOrCreateAuth,
	verifyJwtToken,
	verifyPassword,
} from "../src/auth/password.js";

describe("hashPassword / verifyPassword", () => {
	it("should hash and verify a password correctly", async () => {
		const password = "test-password-123";
		const hash = await hashPassword(password);

		expect(hash).not.toBe(password);
		// bcryptjs v3 uses $2b$ prefix (same algorithm, renamed from $2a$)
		expect(hash.startsWith("$2b$") || hash.startsWith("$2a$")).toBe(true);

		const valid = await verifyPassword(password, hash);
		expect(valid).toBe(true);
	});

	it("should reject an incorrect password", async () => {
		const hash = await hashPassword("correct-password");
		const valid = await verifyPassword("wrong-password", hash);
		expect(valid).toBe(false);
	});

	it("should produce different hashes for the same password", async () => {
		const password = "same-password";
		const hash1 = await hashPassword(password);
		const hash2 = await hashPassword(password);
		expect(hash1).not.toBe(hash2);
	});
});

describe("generateJwtToken / verifyJwtToken", () => {
	const secret = "test-jwt-secret-for-testing";

	it("should create a valid JWT that verifies", () => {
		const token = generateJwtToken(secret);
		expect(typeof token).toBe("string");
		expect(token.split(".")).toHaveLength(3);

		const valid = verifyJwtToken(token, secret);
		expect(valid).toBe(true);
	});

	it("should reject a token signed with a different secret", () => {
		const token = generateJwtToken(secret);
		const valid = verifyJwtToken(token, "wrong-secret");
		expect(valid).toBe(false);
	});

	it("should reject a garbage string", () => {
		const valid = verifyJwtToken("not.a.jwt", secret);
		expect(valid).toBe(false);
	});

	it("should reject an empty string", () => {
		const valid = verifyJwtToken("", secret);
		expect(valid).toBe(false);
	});
});

describe("loadOrCreateAuth", () => {
	let tempDir: string;

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-test-auth-${Date.now()}-${Math.random().toString(36).slice(2)}`);
		mkdirSync(tempDir, { recursive: true });
	});

	afterEach(() => {
		rmSync(tempDir, { recursive: true, force: true });
	});

	it("should create auth.json when none exists", async () => {
		const configDir = join(tempDir, "config");
		const result = await loadOrCreateAuth(configDir);

		expect(result.passwordHash).toBeTruthy();
		// bcryptjs v3 uses $2b$ prefix (same algorithm, renamed from $2a$)
		expect(result.passwordHash.startsWith("$2b$") || result.passwordHash.startsWith("$2a$")).toBe(true);
		expect(result.jwtSecret).toBeTruthy();
		expect(result.jwtSecret.length).toBe(64); // 32 bytes hex

		const authPath = join(configDir, "auth.json");
		expect(existsSync(authPath)).toBe(true);

		const saved = JSON.parse(readFileSync(authPath, "utf8"));
		expect(saved.passwordHash).toBe(result.passwordHash);
		expect(saved.jwtSecret).toBe(result.jwtSecret);
	});

	it("should use envPassword when provided", async () => {
		const configDir = join(tempDir, "config");
		const result = await loadOrCreateAuth(configDir, "my-custom-password");

		const valid = await verifyPassword("my-custom-password", result.passwordHash);
		expect(valid).toBe(true);
	});

	it("should load existing auth.json and preserve values", async () => {
		const configDir = join(tempDir, "config");
		mkdirSync(configDir, { recursive: true });

		// Create initial auth
		const first = await loadOrCreateAuth(configDir, "initial-password");

		// Load again without env password -- should preserve hash
		const second = await loadOrCreateAuth(configDir);

		expect(second.passwordHash).toBe(first.passwordHash);
		expect(second.jwtSecret).toBe(first.jwtSecret);
	});

	it("should override existing hash when envPassword is provided", async () => {
		const configDir = join(tempDir, "config");

		// Create initial auth
		await loadOrCreateAuth(configDir, "old-password");

		// Override with new env password
		const result = await loadOrCreateAuth(configDir, "new-password");

		const validNew = await verifyPassword("new-password", result.passwordHash);
		expect(validNew).toBe(true);

		const validOld = await verifyPassword("old-password", result.passwordHash);
		expect(validOld).toBe(false);
	});
});
