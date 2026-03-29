import { describe, expect, it } from "vitest";
import type {
	EvalResult,
	IterationOutcome,
	JudgeScores,
	MutationResult,
	RatchetConfig,
	RatchetRunSummary,
	ScheduleEntry,
	TestCase,
	TestCaseResult,
} from "../src/types.js";
import { DEFAULTS } from "../src/types.js";

describe("types", () => {
	describe("DEFAULTS", () => {
		it("has expected maxIterations", () => {
			expect(DEFAULTS.maxIterations).toBe(50);
		});

		it("has expected maxWallClockMs (1 hour)", () => {
			expect(DEFAULTS.maxWallClockMs).toBe(3_600_000);
		});

		it("has expected iterationTimeoutMs (2 minutes)", () => {
			expect(DEFAULTS.iterationTimeoutMs).toBe(120_000);
		});

		it("has expected maxConsecutiveCrashes", () => {
			expect(DEFAULTS.maxConsecutiveCrashes).toBe(5);
		});

		it("has expected scoring weights summing to 1.0", () => {
			expect(DEFAULTS.testCaseWeight + DEFAULTS.judgeWeight).toBe(1.0);
		});

		it("weights test cases at 60% and judge at 40%", () => {
			expect(DEFAULTS.testCaseWeight).toBe(0.6);
			expect(DEFAULTS.judgeWeight).toBe(0.4);
		});
	});

	describe("type shape validation (compile-time + runtime spot-checks)", () => {
		it("RatchetConfig satisfies required fields", () => {
			const config: RatchetConfig = {
				target: "system-prompt",
				targetPath: "/home/user/.dg-claw/skills/system-prompt.md",
				repoPath: "/home/user/.dg-claw",
				evalCasesDir: "/home/user/.dg-claw/eval/test-cases/system-prompt",
				maxIterations: 50,
				maxWallClockMs: 3_600_000,
				iterationTimeoutMs: 120_000,
				model: "anthropic:claude-sonnet-4-20250514",
				judgeModel: "anthropic:claude-haiku-3-20240307",
				memoryDbPath: "/home/user/.dg-claw/memory/global/memory.sqlite",
				maxConsecutiveCrashes: 5,
			};
			expect(config.target).toBe("system-prompt");
			expect(config.apiKey).toBeUndefined();
			expect(config.judgeApiKey).toBeUndefined();
		});

		it("TestCase has all required fields", () => {
			const tc: TestCase = {
				id: "test-001",
				input: "What is 2+2?",
				expected: "4",
				criteria: "contains",
			};
			expect(tc.id).toBe("test-001");
			expect(["exact", "contains", "regex"]).toContain(tc.criteria);
		});

		it("TestCaseResult tracks pass/fail with response", () => {
			const result: TestCaseResult = {
				testId: "test-001",
				passed: true,
				response: "The answer is 4.",
				expected: "4",
				criteria: "contains",
			};
			expect(result.passed).toBe(true);
		});

		it("JudgeScores has three numeric fields", () => {
			const scores: JudgeScores = {
				accuracy: 85,
				helpfulness: 90,
				conciseness: 75,
			};
			expect(scores.accuracy).toBeGreaterThanOrEqual(0);
			expect(scores.helpfulness).toBeGreaterThanOrEqual(0);
			expect(scores.conciseness).toBeGreaterThanOrEqual(0);
		});

		it("EvalResult computes composite correctly", () => {
			const result: EvalResult = {
				passRate: 0.8,
				judgeScore: 0.7,
				compositeScore: 0.8 * 0.6 + 0.7 * 0.4,
				testResults: [],
				judgeResults: [],
			};
			expect(result.compositeScore).toBeCloseTo(0.76);
		});

		it("MutationResult can represent failure", () => {
			const fail: MutationResult = {
				success: false,
				content: null,
				description: "Failed to generate mutation",
				error: "LLM returned empty content",
			};
			expect(fail.success).toBe(false);
			expect(fail.content).toBeNull();
			expect(fail.error).toBeDefined();
		});

		it("IterationOutcome covers all three states", () => {
			const outcomes: IterationOutcome[] = ["kept", "discarded", "crashed"];
			expect(outcomes).toHaveLength(3);
		});

		it("RatchetRunSummary tracks full run metrics", () => {
			const summary: RatchetRunSummary = {
				target: "system-prompt",
				iterationsRun: 25,
				kept: 8,
				discarded: 15,
				crashed: 2,
				startScore: 0.5,
				endScore: 0.82,
				elapsedMs: 1_800_000,
			};
			expect(summary.kept + summary.discarded + summary.crashed).toBe(summary.iterationsRun);
		});

		it("ScheduleEntry has cron and enabled flag", () => {
			const entry: ScheduleEntry = {
				id: "nightly-prompt",
				target: "system-prompt",
				cron: "0 2 * * *",
				config: { maxIterations: 30 },
				enabled: true,
			};
			expect(entry.enabled).toBe(true);
			expect(entry.cron).toBe("0 2 * * *");
		});
	});
});
