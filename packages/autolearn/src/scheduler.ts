/**
 * Cron scheduler daemon for the auto-learning engine.
 *
 * Reads schedule entries from a JSON file, creates cron jobs using croner,
 * and runs ratchet loops on schedule with file locking.
 */

import { appendFileSync, existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { Cron } from "croner";
import { acquireLock, isLocked } from "./file-lock.js";
import { runRatchet } from "./ratchet-loop.js";
import type { RatchetConfig, ScheduleEntry } from "./types.js";
import { DEFAULTS } from "./types.js";

/**
 * Load schedule entries from the schedules.json file.
 *
 * @param configPath - Path to the config directory (e.g., ~/.dg-claw/config)
 * @returns Array of schedule entries
 */
export function loadSchedules(configPath: string): ScheduleEntry[] {
	const filePath = join(configPath, "schedules.json");
	if (!existsSync(filePath)) {
		return [];
	}

	try {
		const raw = readFileSync(filePath, "utf8");
		return JSON.parse(raw) as ScheduleEntry[];
	} catch {
		return [];
	}
}

/**
 * Save or update a schedule entry.
 *
 * If an entry with the same ID exists, it is replaced.
 * Otherwise, the new entry is appended.
 *
 * @param configPath - Path to the config directory
 * @param entry - The schedule entry to save
 */
export function saveSchedule(configPath: string, entry: ScheduleEntry): void {
	mkdirSync(configPath, { recursive: true });
	const schedules = loadSchedules(configPath);

	const existingIndex = schedules.findIndex((s) => s.id === entry.id);
	if (existingIndex >= 0) {
		schedules[existingIndex] = entry;
	} else {
		schedules.push(entry);
	}

	const filePath = join(configPath, "schedules.json");
	writeFileSync(filePath, JSON.stringify(schedules, null, 2), "utf8");
}

/**
 * Build a full RatchetConfig from a schedule entry's partial config.
 *
 * @param entry - The schedule entry
 * @param configDir - The root config directory (~/.dg-claw)
 * @param memoryDbPath - Path to the memory database
 */
function buildRatchetConfig(entry: ScheduleEntry, configDir: string, memoryDbPath: string): RatchetConfig {
	const partial = entry.config;
	return {
		target: entry.target,
		targetPath: partial.targetPath ?? join(configDir, "skills", `${entry.target}.md`),
		repoPath: partial.repoPath ?? configDir,
		evalCasesDir: partial.evalCasesDir ?? join(configDir, "eval", "test-cases", entry.target),
		maxIterations: partial.maxIterations ?? DEFAULTS.maxIterations,
		maxWallClockMs: partial.maxWallClockMs ?? DEFAULTS.maxWallClockMs,
		iterationTimeoutMs: partial.iterationTimeoutMs ?? DEFAULTS.iterationTimeoutMs,
		model: partial.model ?? "anthropic:claude-sonnet-4-20250514",
		judgeModel: partial.judgeModel ?? "anthropic:claude-haiku-3-20240307",
		apiKey: partial.apiKey,
		judgeApiKey: partial.judgeApiKey,
		memoryDbPath,
		maxConsecutiveCrashes: partial.maxConsecutiveCrashes ?? DEFAULTS.maxConsecutiveCrashes,
	};
}

/**
 * Append a log message to the log file.
 */
function appendLog(logPath: string, message: string): void {
	appendFileSync(logPath, message);
}

/**
 * Start the cron daemon.
 *
 * Reads all enabled schedules and creates cron jobs for each.
 * Each job acquires a file lock before running the ratchet loop.
 * If the lock is already held (previous run still active), the trigger is skipped.
 *
 * The daemon writes its PID to ~/.dg-claw/autolearn.pid for stop/status commands.
 *
 * @param configDir - Root config directory (e.g., ~/.dg-claw)
 * @param memoryDbPath - Path to the memory database
 */
export function startDaemon(configDir: string, memoryDbPath: string): void {
	const configPath = join(configDir, "config");
	const lockPath = join(configDir, "autolearn.lock");
	const pidPath = join(configDir, "autolearn.pid");
	const logPath = join(configDir, "autolearn.log");

	// Write PID
	mkdirSync(configDir, { recursive: true });
	writeFileSync(pidPath, String(process.pid));

	const schedules = loadSchedules(configPath);
	const enabledSchedules = schedules.filter((s) => s.enabled);

	const jobs: Cron[] = [];

	for (const entry of enabledSchedules) {
		const job = new Cron(entry.cron, async () => {
			// Skip if lock is already held (previous run still running)
			if (isLocked(lockPath)) {
				const msg = `[${new Date().toISOString()}] Skipping ${entry.target}: lock held\n`;
				appendLog(logPath, msg);
				return;
			}

			let release: (() => Promise<void>) | null = null;
			try {
				release = await acquireLock(lockPath);
				const config = buildRatchetConfig(entry, configDir, memoryDbPath);

				const msg = `[${new Date().toISOString()}] Starting ratchet for ${entry.target}\n`;
				appendLog(logPath, msg);

				const summary = await runRatchet(config);

				const doneMsg = `[${new Date().toISOString()}] Completed ${entry.target}: ${summary.kept} kept, ${summary.discarded} discarded, ${summary.crashed} crashed (${summary.startScore.toFixed(3)} -> ${summary.endScore.toFixed(3)})\n`;
				appendLog(logPath, doneMsg);
			} catch (err) {
				const errMsg = `[${new Date().toISOString()}] Error running ${entry.target}: ${err instanceof Error ? err.message : String(err)}\n`;
				appendLog(logPath, errMsg);
			} finally {
				if (release) {
					await release();
				}
			}
		});

		jobs.push(job);
	}

	// Graceful shutdown on SIGTERM
	process.on("SIGTERM", () => {
		for (const job of jobs) {
			job.stop();
		}
		// Clean up PID file
		try {
			unlinkSync(pidPath);
		} catch {
			// Ignore -- file may already be gone
		}
		process.exit(0);
	});
}
