#!/usr/bin/env node
/**
 * CLI entry point for dg-claw-optimize.
 *
 * Commands:
 *   dg-claw-optimize <target>                           -- on-demand ratchet run
 *   dg-claw-optimize --schedule "<cron>" --target <t>   -- register a cron schedule
 *   dg-claw-optimize --daemon                           -- start the cron daemon
 *   dg-claw-optimize --stop                             -- stop the daemon
 *   dg-claw-optimize --list [target]                    -- list experiment history
 *   dg-claw-optimize --promote <target>                 -- merge autolearn branch to main
 *   dg-claw-optimize --rollback <target>                -- reset autolearn branch to main
 *   dg-claw-optimize --help                             -- show usage
 */

import { existsSync, mkdirSync, readFileSync, unlinkSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { closeMemoryDb, createMemoryDb, getBestExperiment, getExperimentHistory } from "@dg-claw/memory";
import { gitCheckoutBranch, gitMerge, gitResetToMain } from "./git.js";
import { runRatchet } from "./ratchet-loop.js";
import { saveSchedule, startDaemon } from "./scheduler.js";
import type { RatchetConfig, ScheduleEntry } from "./types.js";
import { DEFAULTS } from "./types.js";

export interface ParsedArgs {
	command: "run" | "schedule" | "daemon" | "stop" | "list" | "promote" | "rollback" | "help" | null;
	target: string | null;
	schedule: string | null;
	model: string | null;
	judgeModel: string | null;
	maxIterations: number | null;
	maxWallClockMs: number | null;
}

/** Parse CLI arguments into a structured object. */
export function parseArgs(argv: string[]): ParsedArgs {
	const args: ParsedArgs = {
		command: null,
		target: null,
		schedule: null,
		model: null,
		judgeModel: null,
		maxIterations: null,
		maxWallClockMs: null,
	};

	let i = 0;
	while (i < argv.length) {
		const arg = argv[i];

		if (arg === "--daemon") {
			args.command = "daemon";
		} else if (arg === "--stop") {
			args.command = "stop";
		} else if (arg === "--list") {
			args.command = "list";
			// Optional target after --list
			if (i + 1 < argv.length && !argv[i + 1].startsWith("--")) {
				args.target = argv[i + 1];
				i++;
			}
		} else if (arg === "--promote") {
			args.command = "promote";
			if (i + 1 < argv.length) {
				args.target = argv[i + 1];
				i++;
			}
		} else if (arg === "--rollback") {
			args.command = "rollback";
			if (i + 1 < argv.length) {
				args.target = argv[i + 1];
				i++;
			}
		} else if (arg === "--schedule") {
			args.command = "schedule";
			if (i + 1 < argv.length) {
				args.schedule = argv[i + 1];
				i++;
			}
		} else if (arg === "--target") {
			if (i + 1 < argv.length) {
				args.target = argv[i + 1];
				i++;
			}
		} else if (arg === "--model") {
			if (i + 1 < argv.length) {
				args.model = argv[i + 1];
				i++;
			}
		} else if (arg === "--judge-model") {
			if (i + 1 < argv.length) {
				args.judgeModel = argv[i + 1];
				i++;
			}
		} else if (arg === "--max-iterations") {
			if (i + 1 < argv.length) {
				args.maxIterations = Number.parseInt(argv[i + 1], 10);
				i++;
			}
		} else if (arg === "--max-wall-clock") {
			if (i + 1 < argv.length) {
				args.maxWallClockMs = Number.parseInt(argv[i + 1], 10);
				i++;
			}
		} else if (arg === "--help" || arg === "-h") {
			args.command = "help";
		} else if (!arg.startsWith("--") && args.command === null) {
			// Positional argument = target for on-demand run
			args.command = "run";
			args.target = arg;
		}

		i++;
	}

	return args;
}

const HELP_TEXT = `dg-claw-optimize -- Auto-learning engine for DG-Claw

Usage:
  dg-claw-optimize <target>                             Run ratchet loop on target
  dg-claw-optimize --schedule "<cron>" --target <t>     Register a cron schedule
  dg-claw-optimize --daemon                             Start the cron daemon
  dg-claw-optimize --stop                               Stop the daemon
  dg-claw-optimize --list [target]                      List experiment history
  dg-claw-optimize --promote <target>                   Merge autolearn branch to main
  dg-claw-optimize --rollback <target>                  Reset autolearn branch to main

Options:
  --model <provider:id>       LLM model for mutations
  --judge-model <provider:id> LLM model for judge scoring
  --max-iterations <n>        Maximum iterations per run (default: 50)
  --max-wall-clock <ms>       Maximum wall-clock time in ms (default: 3600000)
  -h, --help                  Show this help message
`;

function getDgClawDir(): string {
	return join(homedir(), ".dg-claw");
}

async function main(argv: string[]): Promise<void> {
	const args = parseArgs(argv);

	if (args.command === "help" || args.command === null) {
		console.log(HELP_TEXT);
		return;
	}

	const dgClawDir = getDgClawDir();

	switch (args.command) {
		case "run": {
			if (!args.target) {
				console.error("Error: target is required. Usage: dg-claw-optimize <target>");
				process.exit(1);
			}

			const config: RatchetConfig = {
				target: args.target,
				targetPath: join(dgClawDir, "skills", `${args.target}.md`),
				repoPath: dgClawDir,
				evalCasesDir: join(dgClawDir, "eval", "test-cases", args.target),
				maxIterations: args.maxIterations ?? DEFAULTS.maxIterations,
				maxWallClockMs: args.maxWallClockMs ?? DEFAULTS.maxWallClockMs,
				iterationTimeoutMs: DEFAULTS.iterationTimeoutMs,
				model: args.model ?? "anthropic:claude-sonnet-4-20250514",
				judgeModel: args.judgeModel ?? "anthropic:claude-haiku-3-20240307",
				memoryDbPath: join(dgClawDir, "memory", "global", "memory.sqlite"),
				maxConsecutiveCrashes: DEFAULTS.maxConsecutiveCrashes,
			};

			console.log(`Starting ratchet loop for "${args.target}"...`);
			const summary = await runRatchet(config);
			console.log(`\nCompleted in ${(summary.elapsedMs / 1000).toFixed(1)}s`);
			console.log(`  Iterations: ${summary.iterationsRun}`);
			console.log(`  Kept: ${summary.kept}`);
			console.log(`  Discarded: ${summary.discarded}`);
			console.log(`  Crashed: ${summary.crashed}`);
			console.log(`  Score: ${summary.startScore.toFixed(3)} -> ${summary.endScore.toFixed(3)}`);
			break;
		}

		case "schedule": {
			if (!args.target || !args.schedule) {
				console.error(
					'Error: --target and --schedule are required. Usage: dg-claw-optimize --schedule "0 2 * * *" --target <target>',
				);
				process.exit(1);
			}

			const entry: ScheduleEntry = {
				id: `${args.target}-${Date.now()}`,
				target: args.target,
				cron: args.schedule,
				config: {
					maxIterations: args.maxIterations ?? undefined,
					maxWallClockMs: args.maxWallClockMs ?? undefined,
					model: args.model ?? undefined,
					judgeModel: args.judgeModel ?? undefined,
				},
				enabled: true,
			};

			const configPath = join(dgClawDir, "config");
			saveSchedule(configPath, entry);
			console.log(`Scheduled "${args.target}" with cron "${args.schedule}" (id: ${entry.id})`);
			break;
		}

		case "daemon": {
			const memoryDbPath = join(dgClawDir, "memory", "global", "memory.sqlite");
			console.log("Starting autolearn daemon...");
			startDaemon(dgClawDir, memoryDbPath);
			console.log(`Daemon running (PID: ${process.pid})`);
			break;
		}

		case "stop": {
			const pidPath = join(dgClawDir, "autolearn.pid");
			if (!existsSync(pidPath)) {
				console.error("No daemon running (PID file not found).");
				process.exit(1);
			}

			const pid = Number.parseInt(readFileSync(pidPath, "utf8").trim(), 10);
			try {
				process.kill(pid, "SIGTERM");
				unlinkSync(pidPath);
				console.log(`Sent SIGTERM to daemon (PID: ${pid})`);
			} catch (err) {
				console.error(`Failed to stop daemon (PID: ${pid}): ${err instanceof Error ? err.message : String(err)}`);
				// Clean up stale PID file
				unlinkSync(pidPath);
				process.exit(1);
			}
			break;
		}

		case "list": {
			const memoryDbPath = join(dgClawDir, "memory", "global", "memory.sqlite");
			mkdirSync(join(dgClawDir, "memory", "global"), { recursive: true });
			const db = createMemoryDb(memoryDbPath);

			try {
				if (args.target) {
					const history = getExperimentHistory(db, args.target);
					const best = getBestExperiment(db, args.target);

					console.log(`Experiment history for "${args.target}" (${history.length} entries):`);
					if (best) {
						console.log(`Best score: ${best.score?.toFixed(3)} (${best.mutation})\n`);
					}

					for (const e of history.slice(-20)) {
						const score = e.score !== null ? e.score.toFixed(3) : "N/A  ";
						const hash = e.commitHash ? e.commitHash.slice(0, 7) : "-------";
						console.log(`  [${e.status.padEnd(9)}] ${score}  ${hash}  ${e.mutation}`);
					}
				} else {
					// List all targets
					console.log("Use: dg-claw-optimize --list <target>");
					console.log("Available targets can be found in ~/.dg-claw/eval/test-cases/");
				}
			} finally {
				closeMemoryDb(db);
			}
			break;
		}

		case "promote": {
			if (!args.target) {
				console.error("Error: target is required. Usage: dg-claw-optimize --promote <target>");
				process.exit(1);
			}

			const branch = `autolearn/${args.target}`;
			gitCheckoutBranch(dgClawDir, "main");
			gitMerge(dgClawDir, branch, `promote: autolearn improvements for ${args.target}`);
			console.log(`Promoted "${args.target}" -- merged ${branch} into main.`);
			break;
		}

		case "rollback": {
			if (!args.target) {
				console.error("Error: target is required. Usage: dg-claw-optimize --rollback <target>");
				process.exit(1);
			}

			const branch = `autolearn/${args.target}`;
			gitResetToMain(dgClawDir, branch);
			console.log(`Rolled back "${args.target}" -- ${branch} reset to main.`);
			break;
		}
	}
}

// Run main when executed directly
const isDirectExecution =
	typeof process !== "undefined" &&
	process.argv[1] != null &&
	(process.argv[1].endsWith("cli.js") || process.argv[1].endsWith("cli.ts"));

if (isDirectExecution) {
	main(process.argv.slice(2)).catch((err) => {
		console.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`);
		process.exit(1);
	});
}
