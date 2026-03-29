import { execSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
	gitBranchExists,
	gitCheckoutBranch,
	gitCommit,
	gitCurrentBranch,
	gitInit,
	gitMerge,
	gitReset,
	gitResetToMain,
} from "../src/git.js";

describe("git operations", () => {
	let repoPath: string;

	beforeEach(() => {
		repoPath = join(tmpdir(), `dg-claw-git-test-${crypto.randomUUID()}`);
		mkdirSync(repoPath, { recursive: true });
		// Configure git user for commits in this temp repo
		execSync("git init", { cwd: repoPath });
		execSync("git checkout -b main", { cwd: repoPath });
		execSync('git config user.email "test@test.com"', { cwd: repoPath });
		execSync('git config user.name "Test"', { cwd: repoPath });
		execSync('git commit --allow-empty -m "initial"', { cwd: repoPath });
	});

	afterEach(() => {
		rmSync(repoPath, { recursive: true, force: true });
	});

	describe("gitInit", () => {
		it("does nothing if .git already exists", () => {
			// repoPath already has .git from beforeEach
			gitInit(repoPath);
			expect(gitCurrentBranch(repoPath)).toBe("main");
		});

		it("initializes a new repo when .git is absent", () => {
			const freshDir = join(tmpdir(), `dg-claw-git-fresh-${crypto.randomUUID()}`);
			mkdirSync(freshDir, { recursive: true });
			// Configure git user before init creates commits
			execSync('git config --global user.email "test@test.com" || true', { cwd: freshDir });
			execSync('git config --global user.name "Test" || true', { cwd: freshDir });
			try {
				gitInit(freshDir);
				expect(gitCurrentBranch(freshDir)).toBe("main");
			} finally {
				rmSync(freshDir, { recursive: true, force: true });
			}
		});
	});

	describe("gitCheckoutBranch", () => {
		it("creates and checks out a new branch", () => {
			gitCheckoutBranch(repoPath, "autolearn/test-target");
			expect(gitCurrentBranch(repoPath)).toBe("autolearn/test-target");
		});

		it("checks out an existing branch", () => {
			gitCheckoutBranch(repoPath, "autolearn/existing");
			gitCheckoutBranch(repoPath, "main");
			gitCheckoutBranch(repoPath, "autolearn/existing");
			expect(gitCurrentBranch(repoPath)).toBe("autolearn/existing");
		});
	});

	describe("gitCommit", () => {
		it("stages a file, commits, and returns the commit hash", () => {
			const filePath = join(repoPath, "target.md");
			writeFileSync(filePath, "# System Prompt v1\n");

			const hash = gitCommit(repoPath, "target.md", "autolearn: initial prompt");
			expect(hash).toMatch(/^[a-f0-9]{40}$/);

			// Verify the commit message
			const log = execSync("git log -1 --pretty=%s", {
				cwd: repoPath,
				encoding: "utf8",
			}).trim();
			expect(log).toBe("autolearn: initial prompt");
		});
	});

	describe("gitReset", () => {
		it("undoes the last commit", () => {
			const filePath = join(repoPath, "target.md");
			writeFileSync(filePath, "v1");
			gitCommit(repoPath, "target.md", "commit 1");

			writeFileSync(filePath, "v2");
			gitCommit(repoPath, "target.md", "commit 2");

			const beforeReset = execSync("git log --oneline", {
				cwd: repoPath,
				encoding: "utf8",
			}).trim();
			const commitCountBefore = beforeReset.split("\n").length;

			gitReset(repoPath);

			const afterReset = execSync("git log --oneline", {
				cwd: repoPath,
				encoding: "utf8",
			}).trim();
			const commitCountAfter = afterReset.split("\n").length;

			expect(commitCountAfter).toBe(commitCountBefore - 1);
		});
	});

	describe("gitMerge", () => {
		it("merges a branch into current with a merge commit", () => {
			// Create a feature branch with a commit
			gitCheckoutBranch(repoPath, "autolearn/feature");
			const filePath = join(repoPath, "feature.md");
			writeFileSync(filePath, "feature content");
			gitCommit(repoPath, "feature.md", "feature commit");

			// Switch to main and merge
			gitCheckoutBranch(repoPath, "main");
			gitMerge(repoPath, "autolearn/feature", "promote: feature improvements");

			const log = execSync("git log -1 --pretty=%s", {
				cwd: repoPath,
				encoding: "utf8",
			}).trim();
			expect(log).toBe("promote: feature improvements");
		});
	});

	describe("gitCurrentBranch", () => {
		it("returns the current branch name", () => {
			expect(gitCurrentBranch(repoPath)).toBe("main");
		});
	});

	describe("gitBranchExists", () => {
		it("returns true for an existing branch", () => {
			expect(gitBranchExists(repoPath, "main")).toBe(true);
		});

		it("returns false for a non-existent branch", () => {
			expect(gitBranchExists(repoPath, "no-such-branch")).toBe(false);
		});
	});

	describe("gitResetToMain", () => {
		it("resets a branch to match main", () => {
			// Create diverged branch
			gitCheckoutBranch(repoPath, "autolearn/diverged");
			const filePath = join(repoPath, "diverged.md");
			writeFileSync(filePath, "diverged content");
			gitCommit(repoPath, "diverged.md", "diverged commit");

			// Get main HEAD
			gitCheckoutBranch(repoPath, "main");
			const mainHead = execSync("git rev-parse HEAD", {
				cwd: repoPath,
				encoding: "utf8",
			}).trim();

			// Reset the diverged branch to main
			gitResetToMain(repoPath, "autolearn/diverged");

			const branchHead = execSync("git rev-parse HEAD", {
				cwd: repoPath,
				encoding: "utf8",
			}).trim();
			expect(branchHead).toBe(mainHead);
		});
	});
});
