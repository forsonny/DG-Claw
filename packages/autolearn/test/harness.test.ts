import { mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { TestCase } from "../src/types.js";
import { DEFAULTS } from "../src/types.js";

// Mock the sub-modules to isolate harness logic
vi.mock("../src/eval/test-runner.js", () => ({
	loadTestCases: vi.fn(),
	runTestCases: vi.fn(),
}));

vi.mock("../src/eval/judge.js", () => ({
	judgeResponse: vi.fn(),
}));

describe("harness", () => {
	let tempDir: string;

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-harness-test-${crypto.randomUUID()}`);
		mkdirSync(tempDir, { recursive: true });
	});

	afterEach(() => {
		rmSync(tempDir, { recursive: true, force: true });
		vi.restoreAllMocks();
	});

	it("computes correct composite score with both signals", async () => {
		const { loadTestCases, runTestCases } = await import("../src/eval/test-runner.js");
		const { judgeResponse } = await import("../src/eval/judge.js");
		const { evaluate } = await import("../src/eval/harness.js");

		const mockTestCases: TestCase[] = [
			{ id: "t1", input: "Q1", expected: "A1", criteria: "contains" },
			{ id: "t2", input: "Q2", expected: "A2", criteria: "contains" },
		];

		vi.mocked(loadTestCases).mockReturnValue(mockTestCases);
		vi.mocked(runTestCases).mockResolvedValue([
			{ testId: "t1", passed: true, response: "A1 response", expected: "A1", criteria: "contains" },
			{ testId: "t2", passed: false, response: "Wrong", expected: "A2", criteria: "contains" },
		]);
		vi.mocked(judgeResponse).mockResolvedValue({
			accuracy: 80,
			helpfulness: 80,
			conciseness: 80,
		});

		const result = await evaluate("You are helpful.", {
			evalCasesDir: tempDir,
			model: "anthropic:mock",
			judgeModel: "anthropic:mock-judge",
			iterationTimeoutMs: 120_000,
		});

		// passRate = 1/2 = 0.5
		expect(result.passRate).toBe(0.5);

		// judgeScore = avg(80, 80, 80) / 100 = 0.8
		expect(result.judgeScore).toBeCloseTo(0.8);

		// composite = 0.5 * 0.6 + 0.8 * 0.4 = 0.30 + 0.32 = 0.62
		expect(result.compositeScore).toBeCloseTo(0.62);

		expect(result.testResults).toHaveLength(2);
		expect(result.judgeResults).toHaveLength(2);
	});

	it("returns passRate 1.0 when no test cases exist", async () => {
		const { loadTestCases } = await import("../src/eval/test-runner.js");
		const { evaluate } = await import("../src/eval/harness.js");

		vi.mocked(loadTestCases).mockReturnValue([]);

		const result = await evaluate("system prompt", {
			evalCasesDir: tempDir,
			model: "anthropic:mock",
			judgeModel: "anthropic:mock-judge",
			iterationTimeoutMs: 120_000,
		});

		expect(result.passRate).toBe(1.0);
		// judgeScore = 0.5 (neutral, no responses to judge)
		expect(result.judgeScore).toBe(0.5);
		// composite = 1.0 * 0.6 + 0.5 * 0.4 = 0.6 + 0.2 = 0.8
		expect(result.compositeScore).toBeCloseTo(0.8);
	});

	it("uses neutral judge score (0.5) when judge fails for all responses", async () => {
		const { loadTestCases, runTestCases } = await import("../src/eval/test-runner.js");
		const { judgeResponse } = await import("../src/eval/judge.js");
		const { evaluate } = await import("../src/eval/harness.js");

		vi.mocked(loadTestCases).mockReturnValue([{ id: "t1", input: "Q1", expected: "A1", criteria: "contains" }]);
		vi.mocked(runTestCases).mockResolvedValue([
			{ testId: "t1", passed: true, response: "A1", expected: "A1", criteria: "contains" },
		]);
		vi.mocked(judgeResponse).mockRejectedValue(new Error("Judge API down"));

		const result = await evaluate("system prompt", {
			evalCasesDir: tempDir,
			model: "anthropic:mock",
			judgeModel: "anthropic:mock-judge",
			iterationTimeoutMs: 120_000,
		});

		expect(result.passRate).toBe(1.0);
		// When judge throws, fallback scores are { accuracy: 50, helpfulness: 50, conciseness: 50 }
		// avg(50,50,50)/100 = 0.5
		expect(result.judgeScore).toBeCloseTo(0.5);
	});

	it("samples at most 10 responses for judging when more than 10 test cases", async () => {
		const { loadTestCases, runTestCases } = await import("../src/eval/test-runner.js");
		const { judgeResponse } = await import("../src/eval/judge.js");
		const { evaluate } = await import("../src/eval/harness.js");

		// Create 15 test cases
		const cases: TestCase[] = Array.from({ length: 15 }, (_, i) => ({
			id: `t${i}`,
			input: `Q${i}`,
			expected: `A${i}`,
			criteria: "contains" as const,
		}));

		vi.mocked(loadTestCases).mockReturnValue(cases);
		vi.mocked(runTestCases).mockResolvedValue(
			cases.map((tc) => ({
				testId: tc.id,
				passed: true,
				response: tc.expected,
				expected: tc.expected,
				criteria: tc.criteria,
			})),
		);
		vi.mocked(judgeResponse).mockResolvedValue({
			accuracy: 90,
			helpfulness: 90,
			conciseness: 90,
		});

		const result = await evaluate("system prompt", {
			evalCasesDir: tempDir,
			model: "anthropic:mock",
			judgeModel: "anthropic:mock-judge",
			iterationTimeoutMs: 120_000,
		});

		// Judge should only be called 10 times, not 15
		expect(vi.mocked(judgeResponse)).toHaveBeenCalledTimes(10);
		expect(result.judgeResults).toHaveLength(10);
	});

	it("composite score weights match DEFAULTS", async () => {
		expect(DEFAULTS.testCaseWeight).toBe(0.6);
		expect(DEFAULTS.judgeWeight).toBe(0.4);
		expect(DEFAULTS.testCaseWeight + DEFAULTS.judgeWeight).toBe(1.0);
	});
});
