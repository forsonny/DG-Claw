/**
 * Eval harness orchestrator.
 *
 * Combines the test runner (60% weight) and LLM-as-judge (40% weight)
 * into a single composite score for the ratchet loop.
 */

import type { EvalResult, JudgeScores, RatchetConfig, TestCaseResult } from "../types.js";
import { DEFAULTS } from "../types.js";
import { judgeResponse } from "./judge.js";
import { loadTestCases, runTestCases } from "./test-runner.js";

/**
 * Evaluate a system prompt against the full harness.
 *
 * 1. Load test cases from evalCasesDir
 * 2. Run test cases through the LLM with the system prompt
 * 3. Compute pass rate (Signal 1)
 * 4. Run LLM-as-judge on a sample of responses (Signal 2)
 * 5. Compute composite score
 *
 * If no test cases found, passRate defaults to 1.0 (skip).
 * If the judge fails, judgeScore defaults to 0.5 (neutral).
 */
export async function evaluate(
	systemPrompt: string,
	config: Pick<
		RatchetConfig,
		"evalCasesDir" | "model" | "judgeModel" | "apiKey" | "judgeApiKey" | "iterationTimeoutMs"
	>,
): Promise<EvalResult> {
	// --- Signal 1: Test cases ---
	const testCases = loadTestCases(config.evalCasesDir);
	let testResults: TestCaseResult[] = [];
	let passRate: number;

	if (testCases.length === 0) {
		// No test cases -- skip, treat as perfect
		passRate = 1.0;
	} else {
		testResults = await runTestCases(testCases, systemPrompt, config.model, config.apiKey);
		const passCount = testResults.filter((r) => r.passed).length;
		passRate = passCount / testResults.length;
	}

	// --- Signal 2: LLM-as-judge ---
	// Sample responses to judge: all if <= 10, random 10 otherwise
	let responsesToJudge: TestCaseResult[];
	if (testResults.length <= 10) {
		responsesToJudge = testResults;
	} else {
		// Shuffle and take 10
		const shuffled = [...testResults].sort(() => Math.random() - 0.5);
		responsesToJudge = shuffled.slice(0, 10);
	}

	const judgeResults: JudgeScores[] = [];
	let judgeScore: number;

	if (responsesToJudge.length === 0) {
		// No responses to judge (no test cases) -- neutral score
		judgeScore = 0.5;
	} else {
		const judgeApiKey = config.judgeApiKey ?? config.apiKey;

		for (const result of responsesToJudge) {
			try {
				// Find the original test case to get the input
				const originalCase = testCases.find((tc) => tc.id === result.testId);
				const input = originalCase?.input ?? result.expected;

				const scores = await judgeResponse(input, result.response, config.judgeModel, judgeApiKey);
				judgeResults.push(scores);
			} catch {
				// If judge fails for one response, use neutral scores
				judgeResults.push({ accuracy: 50, helpfulness: 50, conciseness: 50 });
			}
		}

		// Average all judge scores across all judged responses
		const totalScores = judgeResults.reduce(
			(acc, s) => ({
				accuracy: acc.accuracy + s.accuracy,
				helpfulness: acc.helpfulness + s.helpfulness,
				conciseness: acc.conciseness + s.conciseness,
			}),
			{ accuracy: 0, helpfulness: 0, conciseness: 0 },
		);

		const count = judgeResults.length;
		const avgScore =
			(totalScores.accuracy / count + totalScores.helpfulness / count + totalScores.conciseness / count) / 3;

		// Normalize to 0.0 - 1.0
		judgeScore = avgScore / 100;
	}

	// --- Composite score ---
	const compositeScore = passRate * DEFAULTS.testCaseWeight + judgeScore * DEFAULTS.judgeWeight;

	return {
		passRate,
		judgeScore,
		compositeScore,
		testResults,
		judgeResults,
	};
}
