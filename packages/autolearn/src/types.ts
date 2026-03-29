/**
 * Types for @dg-claw/autolearn.
 */

/** Configuration for the ratchet loop. */
export interface RatchetConfig {
	/** Target identifier (e.g., "system-prompt"). */
	target: string;
	/** Path to the target file to optimize. */
	targetPath: string;
	/** Path to the git repo root (typically ~/.dg-claw/). */
	repoPath: string;
	/** Path to eval test cases directory. */
	evalCasesDir: string;
	/** Maximum iterations per run. Default: 50. */
	maxIterations: number;
	/** Maximum wall-clock time per run in ms. Default: 3600000 (1 hour). */
	maxWallClockMs: number;
	/** Timeout per individual iteration in ms. Default: 120000 (2 min). */
	iterationTimeoutMs: number;
	/** LLM model ID for generating mutations. */
	model: string;
	/** LLM model ID for judging (can be cheaper/faster). */
	judgeModel: string;
	/** API key for the mutation model provider. */
	apiKey?: string;
	/** API key for the judge model provider (defaults to apiKey). */
	judgeApiKey?: string;
	/** Path to memory database. Default: ~/.dg-claw/memory/global/memory.sqlite */
	memoryDbPath: string;
	/** Maximum consecutive crashes before stopping. Default: 5. */
	maxConsecutiveCrashes: number;
}

/** A single test case for evaluation. */
export interface TestCase {
	/** Unique identifier. */
	id: string;
	/** User input to send to the LLM. */
	input: string;
	/** Expected response or pattern to match. */
	expected: string;
	/** How to compare: exact match, substring, or regex. */
	criteria: "exact" | "contains" | "regex";
}

/** Result of a single test case execution. */
export interface TestCaseResult {
	testId: string;
	passed: boolean;
	response: string;
	expected: string;
	criteria: string;
}

/** Scores from the LLM judge for a single response. */
export interface JudgeScores {
	accuracy: number;
	helpfulness: number;
	conciseness: number;
}

/** Result of evaluating a mutated prompt against the full harness. */
export interface EvalResult {
	/** Test case pass rate (0.0 to 1.0). */
	passRate: number;
	/** Average judge score (0.0 to 1.0). */
	judgeScore: number;
	/** Composite: passRate * 0.6 + judgeScore * 0.4. */
	compositeScore: number;
	/** Individual test case results. */
	testResults: TestCaseResult[];
	/** Individual judge scores per evaluated response. */
	judgeResults: JudgeScores[];
}

/** Result of a mutation proposal. */
export interface MutationResult {
	/** Whether the mutation was successfully generated. */
	success: boolean;
	/** The mutated file content (null if failed). */
	content: string | null;
	/** One-line description of the change. */
	description: string;
	/** Why it failed, if applicable. */
	error?: string;
}

/** Outcome of a single ratchet iteration. */
export type IterationOutcome = "kept" | "discarded" | "crashed";

/** Summary of a complete ratchet run. */
export interface RatchetRunSummary {
	target: string;
	iterationsRun: number;
	kept: number;
	discarded: number;
	crashed: number;
	startScore: number;
	endScore: number;
	elapsedMs: number;
}

/** A schedule entry for the cron daemon. */
export interface ScheduleEntry {
	id: string;
	target: string;
	cron: string;
	config: Partial<RatchetConfig>;
	enabled: boolean;
}

/** Default configuration values. */
export const DEFAULTS = {
	maxIterations: 50,
	maxWallClockMs: 3_600_000,
	iterationTimeoutMs: 120_000,
	maxConsecutiveCrashes: 5,
	testCaseWeight: 0.6,
	judgeWeight: 0.4,
} as const;
