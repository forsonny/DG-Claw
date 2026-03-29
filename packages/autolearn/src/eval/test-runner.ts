/**
 * Test runner for the eval harness.
 *
 * Loads test case JSON files from a directory and evaluates LLM responses
 * against expected outputs using exact, contains, or regex criteria.
 */

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Api, Model } from "@dg-claw/ai";
import { completeSimple, getModel } from "@dg-claw/ai";
import type { TestCase, TestCaseResult } from "../types.js";

/**
 * Load all test case JSON files from a directory.
 * Each .json file should contain a single TestCase object.
 */
export function loadTestCases(dir: string): TestCase[] {
	let files: string[];
	try {
		files = readdirSync(dir).filter((f) => f.endsWith(".json"));
	} catch {
		return [];
	}

	const cases: TestCase[] = [];
	for (const file of files) {
		const raw = readFileSync(join(dir, file), "utf8");
		const parsed = JSON.parse(raw) as TestCase;
		cases.push(parsed);
	}

	return cases;
}

/**
 * Evaluate a single test case against a response string.
 * Returns true if the response matches the expected output per the criteria.
 */
export function evaluateTestCase(testCase: TestCase, response: string): boolean {
	switch (testCase.criteria) {
		case "exact":
			return response.trim() === testCase.expected.trim();
		case "contains":
			return response.toLowerCase().includes(testCase.expected.toLowerCase());
		case "regex": {
			const re = new RegExp(testCase.expected, "i");
			return re.test(response);
		}
		default:
			return false;
	}
}

/**
 * Resolve a model string like "anthropic:claude-sonnet-4-20250514" into a Model object.
 * The format is "provider:modelId".
 */
function resolveModel(modelStr: string): Model<Api> {
	const [provider, ...rest] = modelStr.split(":");
	const modelId = rest.join(":");
	return getModel(provider as any, modelId as any);
}

/**
 * Run all test cases against the LLM with the given system prompt.
 * Each test case's input is sent to the model; the response is evaluated.
 */
export async function runTestCases(
	testCases: TestCase[],
	systemPrompt: string,
	model: string,
	apiKey?: string,
): Promise<TestCaseResult[]> {
	const results: TestCaseResult[] = [];
	const modelObj = resolveModel(model);

	for (const tc of testCases) {
		try {
			const assistantMsg = await completeSimple(
				modelObj,
				{
					systemPrompt,
					messages: [
						{
							role: "user",
							content: tc.input,
							timestamp: Date.now(),
						},
					],
				},
				apiKey ? { apiKey } : undefined,
			);

			// Extract text content from the assistant message
			const responseText = assistantMsg.content
				.filter((c): c is { type: "text"; text: string } => c.type === "text")
				.map((c) => c.text)
				.join("");

			const passed = evaluateTestCase(tc, responseText);

			results.push({
				testId: tc.id,
				passed,
				response: responseText,
				expected: tc.expected,
				criteria: tc.criteria,
			});
		} catch (err) {
			results.push({
				testId: tc.id,
				passed: false,
				response: `Error: ${err instanceof Error ? err.message : String(err)}`,
				expected: tc.expected,
				criteria: tc.criteria,
			});
		}
	}

	return results;
}
