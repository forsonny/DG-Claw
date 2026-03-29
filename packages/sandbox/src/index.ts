/**
 * @dg-claw/sandbox
 *
 * Sandboxed execution for DG-Claw agents.
 * Docker container isolation with fallback to direct host execution.
 */

export type { ExecOptions, ExecResult, SandboxBackend, SandboxConfig } from "./types.js";
export { SANDBOX_DEFAULTS } from "./types.js";
