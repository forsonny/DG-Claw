import type Database from "better-sqlite3";
import { mkdirSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { closeMemoryDb, createMemoryDb } from "../src/db.js";
import { getBestExperiment, getExperimentHistory, logExperiment } from "../src/experiments.js";

describe("experiments", () => {
	let db: Database.Database;
	let tempDir: string;

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-test-${crypto.randomUUID()}`);
		mkdirSync(tempDir, { recursive: true });
		db = createMemoryDb(join(tempDir, "memory.sqlite"));
	});

	afterEach(() => {
		closeMemoryDb(db);
		rmSync(tempDir, { recursive: true, force: true });
	});

	describe("logExperiment", () => {
		it("logs an experiment entry", () => {
			logExperiment(db, "prompt-v1", "Added chain-of-thought prefix", 0.85, "kept", "abc123");

			const history = getExperimentHistory(db, "prompt-v1");
			expect(history.length).toBe(1);
			expect(history[0].target).toBe("prompt-v1");
			expect(history[0].mutation).toBe("Added chain-of-thought prefix");
			expect(history[0].score).toBe(0.85);
			expect(history[0].status).toBe("kept");
			expect(history[0].commitHash).toBe("abc123");
			expect(history[0].timestamp).toBeDefined();
		});

		it("handles null score and commitHash", () => {
			logExperiment(db, "tool-config", "Tweaked timeout", null, "crashed");

			const history = getExperimentHistory(db, "tool-config");
			expect(history[0].score).toBeNull();
			expect(history[0].commitHash).toBeNull();
		});
	});

	describe("getExperimentHistory", () => {
		it("returns experiments ordered by timestamp ascending", () => {
			logExperiment(db, "skill-x", "Mutation A", 0.5, "discarded");
			logExperiment(db, "skill-x", "Mutation B", 0.7, "kept");
			logExperiment(db, "skill-x", "Mutation C", 0.3, "discarded");

			const history = getExperimentHistory(db, "skill-x");
			expect(history.length).toBe(3);
			expect(history[0].mutation).toBe("Mutation A");
			expect(history[2].mutation).toBe("Mutation C");
		});

		it("returns empty array for unknown target", () => {
			const history = getExperimentHistory(db, "non-existent");
			expect(history).toEqual([]);
		});

		it("only returns experiments for the specified target", () => {
			logExperiment(db, "skill-x", "Mutation A", 0.5, "kept");
			logExperiment(db, "skill-y", "Mutation B", 0.9, "kept");

			const history = getExperimentHistory(db, "skill-x");
			expect(history.length).toBe(1);
			expect(history[0].target).toBe("skill-x");
		});
	});

	describe("getBestExperiment", () => {
		it("returns the experiment with the highest score for a target", () => {
			logExperiment(db, "skill-x", "Mutation A", 0.5, "kept");
			logExperiment(db, "skill-x", "Mutation B", 0.9, "kept");
			logExperiment(db, "skill-x", "Mutation C", 0.7, "kept");

			const best = getBestExperiment(db, "skill-x");
			expect(best).not.toBeNull();
			expect(best!.mutation).toBe("Mutation B");
			expect(best!.score).toBe(0.9);
		});

		it("returns null for unknown target", () => {
			const best = getBestExperiment(db, "non-existent");
			expect(best).toBeNull();
		});

		it("ignores experiments with null scores", () => {
			logExperiment(db, "skill-x", "Crashed", null, "crashed");
			logExperiment(db, "skill-x", "OK", 0.3, "kept");

			const best = getBestExperiment(db, "skill-x");
			expect(best!.score).toBe(0.3);
		});
	});
});
