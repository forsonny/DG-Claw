import type { ExperimentEntry } from "@dg-claw/memory";
import { describe, expect, it, vi } from "vitest";

// Mock @dg-claw/ai
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

describe("mutation-engine", () => {
	it("parses a well-formed mutation response", async () => {
		const { completeSimple } = await import("@dg-claw/ai");
		const mockComplete = vi.mocked(completeSimple);

		mockComplete.mockResolvedValue({
			role: "assistant",
			content: [
				{
					type: "text",
					text: `MUTATION_DESCRIPTION: Added step-by-step reasoning instruction\n---\nYou are DG-Claw, an AI coding agent.\n\nWhen answering questions, think step by step before providing your final answer.`,
				},
			],
			api: "anthropic-messages",
			provider: "anthropic",
			model: "mock",
			usage: {
				input: 100,
				output: 50,
				cacheRead: 0,
				cacheWrite: 0,
				totalTokens: 150,
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
			},
			stopReason: "stop",
			timestamp: Date.now(),
		});

		const { proposeMutation } = await import("../src/mutation-engine.js");

		const result = await proposeMutation(
			"You are DG-Claw, an AI coding agent.",
			[],
			"Accuracy, helpfulness, conciseness",
			"anthropic:mock",
		);

		expect(result.success).toBe(true);
		expect(result.description).toBe("Added step-by-step reasoning instruction");
		expect(result.content).toContain("think step by step");
	});

	it("retries when LLM returns identical content", async () => {
		const { completeSimple } = await import("@dg-claw/ai");
		const mockComplete = vi.mocked(completeSimple);

		const currentContent = "You are DG-Claw.";

		// First call returns identical content, second call returns different content
		let callCount = 0;
		mockComplete.mockImplementation(async () => {
			callCount++;
			const text =
				callCount <= 1
					? `MUTATION_DESCRIPTION: No change\n---\n${currentContent}`
					: `MUTATION_DESCRIPTION: Added clarity\n---\nYou are DG-Claw, an expert coding agent.`;

			return {
				role: "assistant" as const,
				content: [{ type: "text" as const, text }],
				api: "anthropic-messages" as const,
				provider: "anthropic" as const,
				model: "mock",
				usage: {
					input: 0,
					output: 0,
					cacheRead: 0,
					cacheWrite: 0,
					totalTokens: 0,
					cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
				},
				stopReason: "stop" as const,
				timestamp: Date.now(),
			};
		});

		const { proposeMutation } = await import("../src/mutation-engine.js");

		const result = await proposeMutation(currentContent, [], "Accuracy", "anthropic:mock");

		expect(result.success).toBe(true);
		expect(result.content).toContain("expert coding agent");
		expect(callCount).toBeGreaterThan(1);
	});

	it("returns failure after max retries of unparseable responses", async () => {
		const { completeSimple } = await import("@dg-claw/ai");
		const mockComplete = vi.mocked(completeSimple);

		// Always return unparseable content (no MUTATION_DESCRIPTION line)
		mockComplete.mockResolvedValue({
			role: "assistant",
			content: [{ type: "text", text: "Here is my suggestion: make it better." }],
			api: "anthropic-messages",
			provider: "anthropic",
			model: "mock",
			usage: {
				input: 0,
				output: 0,
				cacheRead: 0,
				cacheWrite: 0,
				totalTokens: 0,
				cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
			},
			stopReason: "stop",
			timestamp: Date.now(),
		});

		const { proposeMutation } = await import("../src/mutation-engine.js");

		const result = await proposeMutation("current content", [], "Accuracy", "anthropic:mock");

		expect(result.success).toBe(false);
		expect(result.error).toContain("retry attempts exhausted");
	});

	it("returns failure when LLM throws an error on all attempts", async () => {
		const { completeSimple } = await import("@dg-claw/ai");
		const mockComplete = vi.mocked(completeSimple);

		mockComplete.mockRejectedValue(new Error("API key invalid"));

		const { proposeMutation } = await import("../src/mutation-engine.js");

		const result = await proposeMutation("current content", [], "Accuracy", "anthropic:mock");

		expect(result.success).toBe(false);
		expect(result.error).toContain("API key invalid");
	});

	it("includes experiment history in the prompt context", async () => {
		const { completeSimple } = await import("@dg-claw/ai");
		const mockComplete = vi.mocked(completeSimple);

		let capturedPrompt = "";
		mockComplete.mockImplementation(async (_model, context) => {
			if (context.messages[0]?.role === "user") {
				const content = context.messages[0].content;
				capturedPrompt = typeof content === "string" ? content : "";
			}
			return {
				role: "assistant" as const,
				content: [
					{
						type: "text" as const,
						text: "MUTATION_DESCRIPTION: test\n---\nnew content",
					},
				],
				api: "anthropic-messages" as const,
				provider: "anthropic" as const,
				model: "mock",
				usage: {
					input: 0,
					output: 0,
					cacheRead: 0,
					cacheWrite: 0,
					totalTokens: 0,
					cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
				},
				stopReason: "stop" as const,
				timestamp: Date.now(),
			};
		});

		const history: ExperimentEntry[] = [
			{
				id: 1,
				target: "prompt",
				mutation: "Added reasoning",
				score: 0.75,
				status: "kept",
				commitHash: "abc123",
				timestamp: "2026-03-28T00:00:00Z",
			},
			{
				id: 2,
				target: "prompt",
				mutation: "Shortened intro",
				score: 0.65,
				status: "discarded",
				commitHash: null,
				timestamp: "2026-03-28T01:00:00Z",
			},
		];

		const { proposeMutation } = await import("../src/mutation-engine.js");

		await proposeMutation("current content", history, "Accuracy, helpfulness", "anthropic:mock");

		expect(capturedPrompt).toContain("Added reasoning");
		expect(capturedPrompt).toContain("score: 0.750");
		expect(capturedPrompt).toContain("Shortened intro");
		expect(capturedPrompt).toContain("status: discarded");
	});
});
