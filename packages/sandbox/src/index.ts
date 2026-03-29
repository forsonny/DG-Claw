/**
 * @dg-claw/sandbox
 *
 * Sandboxed execution for DG-Claw agents.
 * Docker container isolation with fallback to direct host execution.
 */

export { DirectBackend } from "./direct-backend.js";
export { DockerBackend } from "./docker-backend.js";
export { IdleTimer } from "./idle-timer.js";
export { guardPath } from "./path-guard.js";
export type { ExecOptions, ExecResult, SandboxBackend, SandboxConfig } from "./types.js";
export { SANDBOX_DEFAULTS } from "./types.js";
