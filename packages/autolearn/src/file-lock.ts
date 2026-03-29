/**
 * File lock wrapper around proper-lockfile.
 *
 * Prevents concurrent ratchet runs on the same target by
 * locking a well-known file path.
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import lockfile from "proper-lockfile";

/**
 * Acquire a file lock.
 *
 * Creates the lock file's parent directory and the file itself if they don't exist.
 * Returns a release function that must be called when the lock is no longer needed.
 *
 * @param lockPath - Path to the file to lock (e.g., ~/.dg-claw/autolearn.lock)
 * @returns A release function: `() => Promise<void>`
 * @throws If the lock is already held by another process
 */
export async function acquireLock(lockPath: string): Promise<() => Promise<void>> {
	// Ensure the directory and file exist
	mkdirSync(dirname(lockPath), { recursive: true });
	if (!existsSync(lockPath)) {
		writeFileSync(lockPath, "");
	}

	const release = await lockfile.lock(lockPath, {
		stale: 300_000, // Consider stale after 5 minutes (safety valve)
		retries: 0, // Don't retry -- fail fast if already locked
	});

	return release;
}

/**
 * Check if a file lock is currently held.
 *
 * @param lockPath - Path to the lock file
 * @returns true if the lock is held, false otherwise
 */
export function isLocked(lockPath: string): boolean {
	if (!existsSync(lockPath)) {
		return false;
	}

	try {
		return lockfile.checkSync(lockPath);
	} catch {
		return false;
	}
}
