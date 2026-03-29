/**
 * Core ratchet loop for the auto-learning engine.
 *
 * This is the heart of the system. It:
 * 1. Opens the memory DB and initializes git
 * 2. Evaluates the current target to establish a baseline
 * 3. Loops: mutate -> commit -> eval -> compare -> keep/discard -> log
 * 4. Stops on maxIterations, wall-clock timeout, SIGTERM, or 5 consecutive crashes
 * 5. Returns a summary of the run
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { closeMemoryDb, createMemoryDb, getExperimentHistory, logExperiment } from "@dg-claw/memory";
import type Database from "better-sqlite3";
import { evaluate } from "./eval/harness.js";
import { gitCheckoutBranch, gitCommit, gitInit, gitReset } from "./git.js";
import { proposeMutation } from "./mutation-engine.js";
import type { EvalResult, RatchetConfig, RatchetRunSummary } from "./types.js";

/**
 * Run the ratchet loop for a given configuration.
 *
 * @param config - Full ratchet configuration
 * @returns Summary of the run including iterations, scores, and timing
 */
export async function runRatchet(config: RatchetConfig): Promise<RatchetRunSummary> {
	const startTime = Date.now();
	let terminated = false;

	// Handle SIGTERM gracefully
	const onSigterm = () => {
		terminated = true;
	};
	process.on("SIGTERM", onSigterm);

	// Open memory DB
	mkdirSync(dirname(config.memoryDbPath), { recursive: true });
	const db: Database.Database = createMemoryDb(config.memoryDbPath);

	// Initialize git and checkout the autolearn branch
	gitInit(config.repoPath);
	const branch = `autolearn/${config.target}`;
	gitCheckoutBranch(config.repoPath, branch);

	// Read current target content
	let currentContent: string;
	try {
		currentContent = readFileSync(config.targetPath, "utf8");
	} catch {
		// Target file doesn't exist yet -- start with empty
		currentContent = "";
		mkdirSync(dirname(config.targetPath), { recursive: true });
		writeFileSync(config.targetPath, currentContent);
		gitCommit(config.repoPath, config.targetPath, `autolearn: initialize ${config.target}`);
	}

	// Evaluate baseline
	let bestScore: number;
	try {
		const baseline = await evaluate(currentContent, {
			evalCasesDir: config.evalCasesDir,
			model: config.model,
			judgeModel: config.judgeModel,
			apiKey: config.apiKey,
			judgeApiKey: config.judgeApiKey,
			iterationTimeoutMs: config.iterationTimeoutMs,
		});
		bestScore = baseline.compositeScore;
	} catch {
		bestScore = 0;
	}

	const startScore = bestScore;
	let iterationsRun = 0;
	let kept = 0;
	let discarded = 0;
	let crashed = 0;
	let consecutiveCrashes = 0;

	// Main loop
	while (
		iterationsRun < config.maxIterations &&
		Date.now() - startTime < config.maxWallClockMs &&
		!terminated &&
		consecutiveCrashes < config.maxConsecutiveCrashes
	) {
		try {
			// Get experiment history for context
			const history = getExperimentHistory(db, config.target);

			// Propose a mutation
			const mutation = await proposeMutation(
				currentContent,
				history,
				`Test cases from ${config.evalCasesDir}`,
				config.model,
				config.apiKey,
			);

			if (!mutation.success || mutation.content === null) {
				// Mutation generation failed
				logExperiment(db, config.target, mutation.description, null, "crashed");
				crashed++;
				consecutiveCrashes++;
				iterationsRun++;
				continue;
			}

			// Write the mutated content and commit
			writeFileSync(config.targetPath, mutation.content);
			const commitHash = gitCommit(config.repoPath, config.targetPath, `autolearn: ${mutation.description}`);

			// Evaluate the mutation
			let evalResult: EvalResult;
			try {
				evalResult = await evaluate(mutation.content, {
					evalCasesDir: config.evalCasesDir,
					model: config.model,
					judgeModel: config.judgeModel,
					apiKey: config.apiKey,
					judgeApiKey: config.judgeApiKey,
					iterationTimeoutMs: config.iterationTimeoutMs,
				});
			} catch {
				// Eval crashed or timed out
				gitReset(config.repoPath);
				currentContent = readFileSync(config.targetPath, "utf8");
				logExperiment(db, config.target, mutation.description, null, "crashed", commitHash);
				crashed++;
				consecutiveCrashes++;
				iterationsRun++;
				continue;
			}

			// Ratchet decision
			if (evalResult.compositeScore > bestScore) {
				// KEEP -- the mutation improved the score
				bestScore = evalResult.compositeScore;
				currentContent = mutation.content;
				logExperiment(db, config.target, mutation.description, evalResult.compositeScore, "kept", commitHash);
				kept++;
				consecutiveCrashes = 0;
			} else {
				// DISCARD -- no improvement
				gitReset(config.repoPath);
				currentContent = readFileSync(config.targetPath, "utf8");
				logExperiment(db, config.target, mutation.description, evalResult.compositeScore, "discarded", commitHash);
				discarded++;
				consecutiveCrashes = 0;
			}
		} catch (err) {
			// Unexpected error -- treat as crash
			logExperiment(
				db,
				config.target,
				`Unexpected error: ${err instanceof Error ? err.message : String(err)}`,
				null,
				"crashed",
			);
			crashed++;
			consecutiveCrashes++;
		}

		iterationsRun++;
	}

	// Cleanup
	process.removeListener("SIGTERM", onSigterm);
	closeMemoryDb(db);

	return {
		target: config.target,
		iterationsRun,
		kept,
		discarded,
		crashed,
		startScore,
		endScore: bestScore,
		elapsedMs: Date.now() - startTime,
	};
}
