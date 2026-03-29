/**
 * Password hashing, JWT management, and auth config persistence.
 *
 * Auth state is stored in {configDir}/auth.json:
 * {
 *   "passwordHash": "$2a$10$...",
 *   "jwtSecret": "random-hex-string"
 * }
 */

import { randomBytes } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const BCRYPT_ROUNDS = 10;
const JWT_EXPIRY = "24h";

interface AuthConfig {
	passwordHash: string;
	jwtSecret: string;
}

/**
 * Hash a plaintext password with bcrypt.
 */
export async function hashPassword(password: string): Promise<string> {
	return bcrypt.hash(password, BCRYPT_ROUNDS);
}

/**
 * Verify a plaintext password against a bcrypt hash.
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
	return bcrypt.compare(password, hash);
}

/**
 * Generate a JWT token with 24h expiry.
 */
export function generateJwtToken(jwtSecret: string): string {
	return jwt.sign({ iat: Math.floor(Date.now() / 1000) }, jwtSecret, {
		expiresIn: JWT_EXPIRY,
	});
}

/**
 * Verify a JWT token. Returns true if valid, false otherwise.
 */
export function verifyJwtToken(token: string, jwtSecret: string): boolean {
	try {
		jwt.verify(token, jwtSecret);
		return true;
	} catch {
		return false;
	}
}

/**
 * Load auth config from disk, or create it if missing.
 *
 * Priority:
 * 1. If `envPassword` is provided (from DG_CLAW_PASSWORD env var), hash it and use it.
 * 2. If auth.json exists on disk, load it.
 * 3. Otherwise, generate a random password, print it to stdout, and save.
 *
 * The jwtSecret is always loaded from auth.json or generated fresh.
 *
 * @param configDir - Path to the config directory (e.g., ~/.dg-claw/config)
 * @param envPassword - Optional password from DG_CLAW_PASSWORD environment variable
 * @returns The passwordHash and jwtSecret
 */
export async function loadOrCreateAuth(
	configDir: string,
	envPassword?: string,
): Promise<{ passwordHash: string; jwtSecret: string }> {
	mkdirSync(configDir, { recursive: true });
	const authPath = join(configDir, "auth.json");

	let config: AuthConfig | null = null;

	// Try to load existing auth.json
	if (existsSync(authPath)) {
		try {
			const raw = readFileSync(authPath, "utf8");
			config = JSON.parse(raw) as AuthConfig;
		} catch {
			config = null;
		}
	}

	// Determine jwtSecret
	const jwtSecret = config?.jwtSecret ?? randomBytes(32).toString("hex");

	// Determine passwordHash
	let passwordHash: string;

	if (envPassword) {
		// Environment variable takes precedence
		passwordHash = await hashPassword(envPassword);
	} else if (config?.passwordHash) {
		// Use existing hash from disk
		passwordHash = config.passwordHash;
	} else {
		// Generate a random password and print it
		const generated = randomBytes(16).toString("hex");
		console.log(`\n  Generated password: ${generated}\n`);
		console.log("  Set DG_CLAW_PASSWORD to use a custom password.\n");
		passwordHash = await hashPassword(generated);
	}

	// Save (always write to ensure jwtSecret is persisted)
	const toSave: AuthConfig = { passwordHash, jwtSecret };
	writeFileSync(authPath, JSON.stringify(toSave, null, 2), "utf8");

	return { passwordHash, jwtSecret };
}
