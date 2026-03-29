import { describe, expect, it, vi } from "vitest";
import { judgeResponse, parseJudgeResponse } from "../src/eval/judge.js";

// Mock @dg-claw/ai
vi.mock("@dg-claw/ai", () => ({
	completeSimple: vi.fn(),
	getModel: vi.fn(() => ({
		id: "mock-judge",
		api: "anthropic-messages",
		provider: "anthropic",
		maxTokens: 4096,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
	})),
}));

describe("judge", () => {
	describe("parseJudgeResponse", () => {
		it("parses valid JSON response", () => {
			const raw = '{"accuracy": 85, "helpfulness": 90, "conciseness": 75}';
			const scores = parseJudgeResponse(raw);
			expect(scores.accuracy).toBe(85);
			expect(scores.helpfulness).toBe(90);
			expect(scores.conciseness).toBe(75);
		});

		it("parses JSON wrapped in markdown code fences", () => {
			const raw = '```json\n{"accuracy": 80, "helpfulness": 70, "conciseness": 60}\n```';
			const scores = parseJudgeResponse(raw);
			expect(scores.accuracy).toBe(80);
			expect(scores.helpfulness).toBe(70);
			expect(scores.conciseness).toBe(60);
		});

		it("parses JSON embedded in extra text", () => {
			const raw = 'Here are the scores:\n{"accuracy": 95, "helpfulness": 88, "conciseness": 92}\nThese look good.';
			const scores = parseJudgeResponse(raw);
			expect(scores.accuracy).toBe(95);
			expect(scores.helpfulness).toBe(88);
			expect(scores.conciseness).toBe(92);
		});

		it("clamps scores above 100 to 100", () => {
			const raw = '{"accuracy": 150, "helpfulness": 90, "conciseness": 80}';
			const scores = parseJudgeResponse(raw);
			expect(scores.accuracy).toBe(100);
		});

		it("clamps scores below 0 to 0", () => {
			const raw = '{"accuracy": -10, "helpfulness": 90, "conciseness": 80}';
			const scores = parseJudgeResponse(raw);
			expect(scores.accuracy).toBe(0);
		});

		it("throws on completely malformed input", () => {
			expect(() => parseJudgeResponse("no json here at all")).toThrow("No JSON object found");
		});

		it("throws on JSON missing required fields", () => {
			const raw = '{"accuracy": 80}';
			expect(() => parseJudgeResponse(raw)).toThrow("missing required numeric fields");
		});

		it("throws on non-numeric score values", () => {
			const raw = '{"accuracy": "high", "helpfulness": 90, "conciseness": 80}';
			expect(() => parseJudgeResponse(raw)).toThrow("missing required numeric fields");
		});
	});

	describe("judgeResponse", () => {
		it("sends prompt to LLM and parses the judge scores", async () => {
			const { completeSimple } = await import("@dg-claw/ai");
			const mockComplete = vi.mocked(completeSimple);

			mockComplete.mockResolvedValue({
				role: "assistant",
				content: [
					{
						type: "text",
						text: '{"accuracy": 85, "helpfulness": 90, "conciseness": 75}',
					},
				],
				api: "anthropic-messages",
				provider: "anthropic",
				model: "mock-judge",
				usage: {
					input: 50,
					output: 20,
					cacheRead: 0,
					cacheWrite: 0,
					totalTokens: 70,
					cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
				},
				stopReason: "stop",
				timestamp: Date.now(),
			});

			const scores = await judgeResponse(
				"What is the capital of France?",
				"The capital of France is Paris.",
				"anthropic:mock-judge",
			);

			expect(scores.accuracy).toBe(85);
			expect(scores.helpfulness).toBe(90);
			expect(scores.conciseness).toBe(75);
			expect(mockComplete).toHaveBeenCalledOnce();
		});
	});
});
