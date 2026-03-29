/**
 * @dg-claw/sandbox
 *
 * Sandboxed execution for DG-Claw agents.
 * Docker container isolation with fallback to direct host execution.
 */

export { DirectBackend } from "./direct-backend.js";
// --- Backends ---
export { DockerBackend } from "./docker-backend.js";
// --- Factory (primary entry point) ---
export { createSandbox } from "./factory.js";
// --- Utilities ---
export { IdleTimer } from "./idle-timer.js";
export { guardPath } from "./path-guard.js";
// --- Types and constants ---
export type { ExecOptions, ExecResult, SandboxBackend, SandboxConfig } from "./types.js";
export { SANDBOX_DEFAULTS } from "./types.js";
