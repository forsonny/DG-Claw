/**
 * Git operations for the ratchet loop.
 *
 * All functions use child_process.execSync with { cwd: repoPath, encoding: "utf8" }.
 * No isomorphic-git -- we shell out to the git CLI directly.
 */

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const GIT_OPTS = { encoding: "utf8" as const };

function git(repoPath: string, args: string): string {
	return execSync(`git ${args}`, { ...GIT_OPTS, cwd: repoPath }).trim();
}

/**
 * Initialize a git repo if .git doesn't already exist.
 * Also creates an initial commit on main so branches can be created.
 */
export function gitInit(repoPath: string): void {
	if (existsSync(join(repoPath, ".git"))) {
		return;
	}
	git(repoPath, "init");
	git(repoPath, "checkout -b main");
	// Create an initial commit so HEAD exists and branches can be created
	git(repoPath, 'commit --allow-empty -m "init: autolearn repository"');
}

/**
 * Checkout a branch, creating it if it doesn't exist.
 * If the branch doesn't exist, it is created from the current HEAD.
 */
export function gitCheckoutBranch(repoPath: string, branch: string): void {
	if (gitBranchExists(repoPath, branch)) {
		git(repoPath, `checkout ${branch}`);
	} else {
		git(repoPath, `checkout -b ${branch}`);
	}
}

/**
 * Stage a file and commit it. Returns the commit hash.
 */
export function gitCommit(repoPath: string, filePath: string, message: string): string {
	git(repoPath, `add "${filePath}"`);
	git(repoPath, `commit -m "${message.replace(/"/g, '\\"')}"`);
	return git(repoPath, "rev-parse HEAD");
}

/**
 * Hard-reset the current branch by one commit (undo the last commit).
 */
export function gitReset(repoPath: string): void {
	git(repoPath, "reset HEAD~1 --hard");
}

/**
 * Merge a branch into the current branch with a merge commit.
 */
export function gitMerge(repoPath: string, fromBranch: string, message: string): void {
	git(repoPath, `merge ${fromBranch} --no-ff -m "${message.replace(/"/g, '\\"')}"`);
}

/**
 * Get the name of the current branch.
 */
export function gitCurrentBranch(repoPath: string): string {
	return git(repoPath, "rev-parse --abbrev-ref HEAD");
}

/**
 * Check whether a branch exists (local only).
 */
export function gitBranchExists(repoPath: string, branch: string): boolean {
	try {
		git(repoPath, `rev-parse --verify refs/heads/${branch}`);
		return true;
	} catch {
		return false;
	}
}

/**
 * Reset a branch to match main. Checks out the branch first, then hard-resets to main.
 */
export function gitResetToMain(repoPath: string, branch: string): void {
	git(repoPath, `checkout ${branch}`);
	git(repoPath, "reset --hard main");
}
