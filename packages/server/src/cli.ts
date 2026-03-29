#!/usr/bin/env node

/**
 * CLI entry point for dg-claw-server.
 *
 * Usage:
 *   dg-claw-server [--port 3000] [--host 0.0.0.0] [--static-dir ./path]
 *
 * The server loads config from ~/.dg-claw/ and auth from ~/.dg-claw/config/auth.json.
 * The password can be set via the DG_CLAW_PASSWORD environment variable on first run.
 */

import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { parseArgs } from "node:util";
import { loadOrCreateAuth } from "./auth/password.js";
import { createServer } from "./server.js";
import { SERVER_DEFAULTS } from "./types.js";

async function main(): Promise<void> {
	const { values } = parseArgs({
		options: {
			port: { type: "string", short: "p", default: String(SERVER_DEFAULTS.port) },
			host: { type: "string", short: "h", default: SERVER_DEFAULTS.host },
			"static-dir": { type: "string", short: "s" },
		},
		strict: false,
	});

	const port = Number.parseInt(values.port as string, 10) || SERVER_DEFAULTS.port;
	const host = (values.host as string) || SERVER_DEFAULTS.host;

	// Resolve paths
	const dgClawDir = join(homedir(), ".dg-claw");
	const configDir = dgClawDir;
	const sessionsDir = join(dgClawDir, "sessions");
	const memoryDbPath = join(dgClawDir, "memory", "global", "memory.sqlite");

	// Static dir: explicit flag > sibling web-ui dist > default
	let staticDir: string;
	if (values["static-dir"]) {
		staticDir = resolve(values["static-dir"] as string);
	} else {
		// Try to find the web-ui dist directory relative to this package
		const siblingDist = resolve(join(import.meta.dirname, "..", "..", "web-ui", "dist"));
		if (existsSync(siblingDist)) {
			staticDir = siblingDist;
		} else {
			staticDir = join(dgClawDir, "web-ui-dist");
		}
	}

	// Load or create auth (creates auth.json with a random password if not present)
	const auth = await loadOrCreateAuth(join(configDir, "config"), process.env.DG_CLAW_PASSWORD);

	const server = await createServer({
		port,
		host,
		staticDir,
		passwordHash: auth.passwordHash,
		jwtSecret: auth.jwtSecret,
		memoryDbPath,
		cwd: process.cwd(),
		configDir,
		sessionsDir,
		bridgeIdleTimeoutMs: SERVER_DEFAULTS.bridgeIdleTimeoutMs,
	});

	try {
		await server.listen({ port, host });
		console.log(`\n  DG-Claw server listening on http://${host}:${port}\n`);
		console.log(`  Static dir: ${staticDir}`);
		console.log(`  Config dir: ${configDir}`);
		console.log(`  Sessions:   ${sessionsDir}`);
		console.log(`  Memory DB:  ${memoryDbPath}\n`);
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}

	// ------------------------------------------------------------------
	// Graceful shutdown
	// ------------------------------------------------------------------
	const shutdown = async (signal: string) => {
		console.log(`\n  Received ${signal}, shutting down...`);
		try {
			await server.close();
			console.log("  Server closed gracefully.");
			process.exit(0);
		} catch (err) {
			console.error("  Error during shutdown:", err);
			process.exit(1);
		}
	};

	process.on("SIGTERM", () => shutdown("SIGTERM"));
	process.on("SIGINT", () => shutdown("SIGINT"));
}

main().catch((err) => {
	console.error("Fatal error:", err);
	process.exit(1);
});
