import { relative, resolve } from "node:path/posix";

/**
 * Resolves a path relative to the workspace root and verifies it doesn't escape.
 * Throws if the resolved path is outside the root.
 *
 * @param root - The workspace root directory (absolute path).
 * @param requestedPath - The path to resolve (relative or absolute).
 * @returns The resolved absolute path, guaranteed to be within root.
 */
export function guardPath(root: string, requestedPath: string): string {
	const resolved = resolve(root, requestedPath);
	const rel = relative(root, resolved);

	// If relative path starts with ".." or is absolute, it escaped the root.
	// An empty rel means the path IS the root, which is allowed.
	if (rel.startsWith("..") || resolve(rel) === rel) {
		throw new Error(`Path traversal blocked: "${requestedPath}" resolves outside workspace root`);
	}

	return resolved;
}
