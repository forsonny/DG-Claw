import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { evaluateTestCase, loadTestCases, runTestCases } from "../src/eval/test-runner.js";
import type { TestCase } from "../src/types.js";

// Mock @dg-claw/ai to avoid real LLM calls
vi.mock("@dg-claw/ai", () => ({
	completeSimple: vi.fn(),
	getModel: vi.fn(() => ({
		id: "mock-model",
		api: "anthropic-messages",
		provider: "anthropic",
		maxTokens: 4096,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
	})),
}));

describe("test-runner", () => {
	let tempDir: string;

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-test-runner-${crypto.randomUUID()}`);
		mkdirSync(tempDir, { recursive: true });
	});

	afterEach(() => {
		rmSync(tempDir, { recursive: true, force: true });
		vi.restoreAllMocks();
	});

	describe("loadTestCases", () => {
		it("loads JSON test case files from a directory", () => {
			const tc1: TestCase = {
				id: "test-001",
				input: "What is 2+2?",
				expected: "4",
				criteria: "contains",
			};
			const tc2: TestCase = {
				id: "test-002",
				input: "Say hello",
				expected: "hello",
				criteria: "contains",
			};
			writeFileSync(join(tempDir, "test-001.json"), JSON.stringify(tc1));
			writeFileSync(join(tempDir, "test-002.json"), JSON.stringify(tc2));
			// Non-JSON files should be ignored
			writeFileSync(join(tempDir, "README.md"), "not a test case");

			const cases = loadTestCases(tempDir);
			expect(cases).toHaveLength(2);
			expect(cases.map((c) => c.id).sort()).toEqual(["test-001", "test-002"]);
		});

		it("returns empty array for non-existent directory", () => {
			const cases = loadTestCases("/non/existent/path");
			expect(cases).toEqual([]);
		});

		it("returns empty array for empty directory", () => {
			const cases = loadTestCases(tempDir);
			expect(cases).toEqual([]);
		});
	});

	describe("evaluateTestCase", () => {
		it("exact: passes on exact match (trimmed)", () => {
			const tc: TestCase = { id: "t1", input: "", expected: "Paris", criteria: "exact" };
			expect(evaluateTestCase(tc, "Paris")).toBe(true);
			expect(evaluateTestCase(tc, "  Paris  ")).toBe(true);
			expect(evaluateTestCase(tc, "The capital is Paris")).toBe(false);
		});

		it("contains: passes when response includes expected (case-insensitive)", () => {
			const tc: TestCase = { id: "t2", input: "", expected: "Paris", criteria: "contains" };
			expect(evaluateTestCase(tc, "The capital of France is Paris.")).toBe(true);
			expect(evaluateTestCase(tc, "the capital of france is paris.")).toBe(true);
			expect(evaluateTestCase(tc, "The capital is Berlin.")).toBe(false);
		});

		it("regex: passes when response matches the regex", () => {
			const tc: TestCase = {
				id: "t3",
				input: "",
				expected: "\\d{3}-\\d{4}",
				criteria: "regex",
			};
			expect(evaluateTestCase(tc, "Call me at 555-1234")).toBe(true);
			expect(evaluateTestCase(tc, "No number here")).toBe(false);
		});

		it("returns false for unknown criteria", () => {
			const tc = { id: "t4", input: "", expected: "x", criteria: "unknown" as any };
			expect(evaluateTestCase(tc, "x")).toBe(false);
		});
	});

	describe("runTestCases", () => {
		it("runs test cases through mocked LLM and evaluates results", async () => {
			const { completeSimple } = await import("@dg-claw/ai");
			const mockComplete = vi.mocked(completeSimple);

			// Mock LLM to return "The answer is 4" for all inputs
			mockComplete.mockResolvedValue({
				role: "assistant",
				content: [{ type: "text", text: "The answer is 4" }],
				api: "anthropic-messages",
				provider: "anthropic",
				model: "mock",
				usage: {
					input: 10,
					output: 5,
					cacheRead: 0,
					cacheWrite: 0,
					totalTokens: 15,
					cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
				},
				stopReason: "stop",
				timestamp: Date.now(),
			});

			const testCases: TestCase[] = [
				{ id: "tc-1", input: "What is 2+2?", expected: "4", criteria: "contains" },
				{ id: "tc-2", input: "What is 3+3?", expected: "6", criteria: "contains" },
			];

			const results = await runTestCases(testCases, "You are a math bot.", "anthropic:mock-model");

			expect(results).toHaveLength(2);
			expect(results[0].testId).toBe("tc-1");
			expect(results[0].passed).toBe(true); // "The answer is 4" contains "4"
			expect(results[1].testId).toBe("tc-2");
			expect(results[1].passed).toBe(false); // "The answer is 4" does NOT contain "6"
		});

		it("handles LLM errors gracefully", async () => {
			const { completeSimple } = await import("@dg-claw/ai");
			const mockComplete = vi.mocked(completeSimple);
			mockComplete.mockRejectedValue(new Error("API rate limit exceeded"));

			const testCases: TestCase[] = [{ id: "tc-err", input: "test", expected: "test", criteria: "contains" }];

			const results = await runTestCases(testCases, "system prompt", "anthropic:mock");
			expect(results).toHaveLength(1);
			expect(results[0].passed).toBe(false);
			expect(results[0].response).toContain("Error:");
		});
	});
});
