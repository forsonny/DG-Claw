import { execSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { RatchetConfig } from "../src/types.js";

// Mock the mutation engine and eval harness
vi.mock("../src/mutation-engine.js", () => ({
	proposeMutation: vi.fn(),
}));

vi.mock("../src/eval/harness.js", () => ({
	evaluate: vi.fn(),
}));

// We do NOT mock git operations -- they run for real in the temp directory
// We do NOT mock @dg-claw/memory -- it runs for real with an in-memory-like temp DB

describe("ratchet-loop", () => {
	let repoPath: string;
	let memoryDir: string;
	let evalCasesDir: string;
	let targetPath: string;

	beforeEach(() => {
		const base = join(tmpdir(), `dg-claw-ratchet-test-${crypto.randomUUID()}`);
		repoPath = join(base, "repo");
		memoryDir = join(base, "memory");
		evalCasesDir = join(base, "eval");

		mkdirSync(repoPath, { recursive: true });
		mkdirSync(join(repoPath, "skills"), { recursive: true });
		mkdirSync(memoryDir, { recursive: true });
		mkdirSync(evalCasesDir, { recursive: true });

		// Initialize git repo
		execSync("git init", { cwd: repoPath });
		execSync("git checkout -b main", { cwd: repoPath });
		execSync('git config user.email "test@test.com"', { cwd: repoPath });
		execSync('git config user.name "Test"', { cwd: repoPath });

		// Create initial target file
		targetPath = join(repoPath, "skills", "system-prompt.md");
		writeFileSync(targetPath, "You are DG-Claw.");
		execSync("git add .", { cwd: repoPath });
		execSync('git commit -m "initial"', { cwd: repoPath });
	});

	afterEach(() => {
		const base = join(repoPath, "..");
		rmSync(base, { recursive: true, force: true });
		vi.restoreAllMocks();
	});

	function makeConfig(overrides?: Partial<RatchetConfig>): RatchetConfig {
		return {
			target: "system-prompt",
			targetPath,
			repoPath,
			evalCasesDir,
			maxIterations: 3,
			maxWallClockMs: 60_000,
			iterationTimeoutMs: 10_000,
			model: "anthropic:mock",
			judgeModel: "anthropic:mock-judge",
			memoryDbPath: join(memoryDir, "memory.sqlite"),
			maxConsecutiveCrashes: 5,
			...overrides,
		};
	}

	it("runs the specified number of iterations and returns a summary", async () => {
		const { proposeMutation } = await import("../src/mutation-engine.js");
		const { evaluate } = await import("../src/eval/harness.js");
		const { runRatchet } = await import("../src/ratchet-loop.js");

		const mockPropose = vi.mocked(proposeMutation);
		const mockEval = vi.mocked(evaluate);

		// Baseline eval
		mockEval.mockResolvedValueOnce({
			passRate: 0.5,
			judgeScore: 0.5,
			compositeScore: 0.5,
			testResults: [],
			judgeResults: [],
		});

		// 3 iterations: mutation -> eval -> decision
		for (let i = 0; i < 3; i++) {
			mockPropose.mockResolvedValueOnce({
				success: true,
				content: `Improved prompt v${i + 1}`,
				description: `improvement ${i + 1}`,
			});
			// Alternating: first two improve, third doesn't
			const score = i < 2 ? 0.5 + (i + 1) * 0.1 : 0.5;
			mockEval.mockResolvedValueOnce({
				passRate: score,
				judgeScore: score,
				compositeScore: score,
				testResults: [],
				judgeResults: [],
			});
		}

		const summary = await runRatchet(makeConfig({ maxIterations: 3 }));

		expect(summary.target).toBe("system-prompt");
		expect(summary.iterationsRun).toBe(3);
		expect(summary.kept).toBe(2);
		expect(summary.discarded).toBe(1);
		expect(summary.crashed).toBe(0);
		expect(summary.startScore).toBe(0.5);
		expect(summary.endScore).toBe(0.7);
		expect(summary.elapsedMs).toBeGreaterThan(0);
	});

	it("stops after maxConsecutiveCrashes", async () => {
		const { proposeMutation } = await import("../src/mutation-engine.js");
		const { evaluate } = await import("../src/eval/harness.js");
		const { runRatchet } = await import("../src/ratchet-loop.js");

		const mockPropose = vi.mocked(proposeMutation);
		const mockEval = vi.mocked(evaluate);

		// Baseline
		mockEval.mockResolvedValueOnce({
			passRate: 0.5,
			judgeScore: 0.5,
			compositeScore: 0.5,
			testResults: [],
			judgeResults: [],
		});

		// All mutations fail (crash)
		mockPropose.mockResolvedValue({
			success: false,
			content: null,
			description: "Failed",
			error: "LLM error",
		});

		const summary = await runRatchet(
			makeConfig({
				maxIterations: 20,
				maxConsecutiveCrashes: 3,
			}),
		);

		expect(summary.crashed).toBe(3);
		expect(summary.iterationsRun).toBe(3);
		expect(summary.kept).toBe(0);
		expect(summary.discarded).toBe(0);
	});

	it("discards mutations that do not improve the score", async () => {
		const { proposeMutation } = await import("../src/mutation-engine.js");
		const { evaluate } = await import("../src/eval/harness.js");
		const { runRatchet } = await import("../src/ratchet-loop.js");

		const mockPropose = vi.mocked(proposeMutation);
		const mockEval = vi.mocked(evaluate);

		// Baseline: 0.8
		mockEval.mockResolvedValueOnce({
			passRate: 0.8,
			judgeScore: 0.8,
			compositeScore: 0.8,
			testResults: [],
			judgeResults: [],
		});

		// Mutation scores lower (0.6)
		mockPropose.mockResolvedValueOnce({
			success: true,
			content: "Worse prompt",
			description: "Made it worse",
		});
		mockEval.mockResolvedValueOnce({
			passRate: 0.6,
			judgeScore: 0.6,
			compositeScore: 0.6,
			testResults: [],
			judgeResults: [],
		});

		const summary = await runRatchet(makeConfig({ maxIterations: 1 }));

		expect(summary.discarded).toBe(1);
		expect(summary.kept).toBe(0);
		expect(summary.endScore).toBe(0.8); // Unchanged
	});

	it("keeps mutations that improve the score", async () => {
		const { proposeMutation } = await import("../src/mutation-engine.js");
		const { evaluate } = await import("../src/eval/harness.js");
		const { runRatchet } = await import("../src/ratchet-loop.js");

		const mockPropose = vi.mocked(proposeMutation);
		const mockEval = vi.mocked(evaluate);

		// Baseline: 0.5
		mockEval.mockResolvedValueOnce({
			passRate: 0.5,
			judgeScore: 0.5,
			compositeScore: 0.5,
			testResults: [],
			judgeResults: [],
		});

		// Mutation scores higher (0.9)
		mockPropose.mockResolvedValueOnce({
			success: true,
			content: "Better prompt",
			description: "Major improvement",
		});
		mockEval.mockResolvedValueOnce({
			passRate: 0.9,
			judgeScore: 0.9,
			compositeScore: 0.9,
			testResults: [],
			judgeResults: [],
		});

		const summary = await runRatchet(makeConfig({ maxIterations: 1 }));

		expect(summary.kept).toBe(1);
		expect(summary.discarded).toBe(0);
		expect(summary.endScore).toBe(0.9);
	});
});
