# DG-Claw Sandboxed Execution Spec

**Date:** 2026-03-29
**Subsystem:** 5 of 6 (Sandboxed Execution)
**Status:** Draft
**Depends on:** Subsystem 1 (Fork & Rebrand) -- DONE, Subsystem 3 (Memory Layer) -- DONE, Subsystem 4 (Auto-Learning) -- DONE

---

## Overview

Full agent isolation via Docker containers. Every tool execution (bash, file I/O, browser automation) runs inside an isolated container with its own filesystem, resource limits, and no access to the host beyond mounted volumes. When Docker is unavailable, the system falls back to direct host execution with a logged warning.

Security-first: the container cannot read host files, cannot fork-bomb the VPS, and cannot corrupt the memory store (mounted read-only). The sandbox API is identical regardless of backend -- callers don't know whether Docker or direct execution is backing it.

---

## 1. Package Structure

**New package:** `@dg-claw/sandbox`

Dependencies:
- `dockerode` -- Docker API client for Node.js
- `@dg-claw/ai` -- not directly, but the sandbox is used by packages that depend on it

Does NOT depend on `@dg-claw/coding-agent` or `@dg-claw/memory`. The sandbox is a standalone isolation layer consumed by other packages.

**Architecture:**

```
Agent Runtime (@dg-claw/coding-agent)
    |
    v
Sandbox (@dg-claw/sandbox)
    |
    v
Docker Container (isolated filesystem, capped resources)
    |
    v
Tool execution (bash, file read/write/edit, browser)
```

---

## 2. Sandbox Interface

The sandbox exposes a backend-agnostic API:

```typescript
interface SandboxBackend {
  /** Execute a command inside the sandbox. */
  exec(command: string, args?: string[], options?: ExecOptions): Promise<ExecResult>;

  /** Read a file from the sandbox workspace. */
  readFile(path: string): Promise<string>;

  /** Write a file in the sandbox workspace. */
  writeFile(path: string, content: string): Promise<void>;

  /** Check if the sandbox is running. */
  isRunning(): boolean;

  /** Stop the sandbox (or start idle timeout). */
  dispose(): Promise<void>;
}

interface ExecOptions {
  /** Working directory inside the sandbox. Default: /workspace */
  cwd?: string;
  /** Environment variables to set. */
  env?: Record<string, string>;
  /** Timeout in milliseconds. Default: 30000. */
  timeoutMs?: number;
}

interface ExecResult {
  stdout: string;
  stderr: string;
  exitCode: number;
}

interface SandboxConfig {
  /** Unique identifier for this sandbox (typically groupId). */
  id: string;
  /** Path to the workspace directory on the host (for volume mount). */
  workspacePath: string;
  /** Path to the memory directory on the host (mounted read-only). */
  memoryPath?: string;
  /** Docker image to use. Default: "node:20-slim". */
  image?: string;
  /** CPU limit in cores. Default: 1. */
  cpuLimit?: number;
  /** Memory limit in bytes. Default: 536870912 (512MB). */
  memoryLimit?: number;
  /** Maximum number of PIDs. Default: 256. */
  pidsLimit?: number;
  /** Idle timeout in milliseconds before stopping. Default: 1800000 (30 min). */
  idleTimeoutMs?: number;
}
```

**Factory function:**

```typescript
async function createSandbox(config: SandboxConfig): Promise<SandboxBackend>
```

This function:
1. Checks for Docker availability by pinging the daemon
2. If Docker available: returns a `DockerBackend` instance
3. If Docker unavailable: logs warning, returns a `DirectBackend` instance

---

## 3. Docker Backend

### Container lifecycle

- **Create:** On first `exec`/`readFile`/`writeFile` call, the backend checks if a container for this `id` already exists and is running. If not, it creates and starts one.
- **Reuse:** Subsequent calls reuse the running container via `docker exec`.
- **Idle timeout:** After `idleTimeoutMs` of no calls, the container is stopped (not removed). On next use, it's restarted.
- **Dispose:** Stops and removes the container and its associated resources (but NOT the workspace volume).

### Container configuration

```typescript
// Docker container create options
{
  Image: config.image ?? "node:20-slim",
  Cmd: ["sleep", "infinity"],  // Keep container alive for exec calls
  HostConfig: {
    Binds: [
      `${config.workspacePath}:/workspace:rw`,
      `${config.memoryPath}:/memory:ro`,  // read-only
    ],
    Memory: config.memoryLimit ?? 536_870_912,  // 512MB
    NanoCpus: (config.cpuLimit ?? 1) * 1_000_000_000,
    PidsLimit: config.pidsLimit ?? 256,
    NetworkMode: "bridge",  // outbound allowed, no inbound
    SecurityOpt: ["no-new-privileges"],
  },
  WorkingDir: "/workspace",
}
```

### Filesystem mounts

| Mount | Container Path | Mode | Purpose |
|---|---|---|---|
| Workspace volume | `/workspace` | Read-write | Agent's project files, persists across sessions |
| Memory directory | `/memory` | Read-only | Memory DB for this group, prevents corruption |

No other host paths are accessible. The container sees only its mounts.

### Resource limits

| Resource | Default | Configurable | Purpose |
|---|---|---|---|
| CPU | 1 core | Yes | Prevents CPU monopolization |
| RAM | 512MB | Yes | Prevents OOM on VPS |
| PIDs | 256 | Yes | Prevents fork bombs |
| Network | Unrestricted outbound | No (v1) | Agents need browser/API access |

### Exec implementation

```typescript
// Simplified flow for sandbox.exec()
async exec(command, args, options) {
  this.resetIdleTimer();
  await this.ensureRunning();

  const exec = await this.container.exec({
    Cmd: [command, ...(args ?? [])],
    WorkingDir: options?.cwd ?? "/workspace",
    Env: objectToEnvArray(options?.env),
    AttachStdout: true,
    AttachStderr: true,
  });

  const stream = await exec.start({});
  const { stdout, stderr } = await collectOutput(stream, options?.timeoutMs);
  const { ExitCode } = await exec.inspect();

  return { stdout, stderr, exitCode: ExitCode };
}
```

---

## 4. Direct Backend (Fallback)

When Docker is unavailable, the `DirectBackend` provides the same API but executes commands directly on the host:

- `exec()` uses `child_process.spawn` with `cwd` set to `config.workspacePath`
- `readFile()` uses `fs.readFile` with path resolved relative to workspace
- `writeFile()` uses `fs.writeFile` with path resolved relative to workspace
- Path traversal prevention: all paths are resolved and checked to ensure they stay within the workspace root (reject `../` escapes)
- No resource limits enforced (no container boundary)
- `isRunning()` always returns `true`
- `dispose()` is a no-op

**Warning on startup:**
```
[sandbox] Docker not found -- running in degraded mode without isolation.
Tool execution is NOT sandboxed. Install Docker for full security.
```

---

## 5. Container Image

### Default image: `node:20-slim`

Pre-installed in the default image:
- Node.js 20 (matches DG-Claw requirement)
- Basic Linux utilities (bash, curl, git)

### Custom images

Users can specify a custom image via `SandboxConfig.image`:

```json
{
  "sandbox": {
    "image": "dg-claw-custom:latest"
  }
}
```

This allows users to pre-install Python, Go, Playwright, or other tools they need. The sandbox pulls the image on first use if not present locally.

Custom image building (Dockerfiles) is deferred to v2.

---

## 6. Idle Timeout and Lifecycle

### Timeout behavior

```
Session starts
  -> sandbox.exec("bash", ["-c", "ls"])       // container created/started
  -> sandbox.exec("bash", ["-c", "npm test"])  // reuses running container
  -> (user stops chatting)
  -> (30 min passes with no exec calls)
  -> container stopped (NOT removed)           // resources freed

Next session
  -> sandbox.exec("bash", ["-c", "git status"])
  -> container restarted                       // workspace volume intact
```

### Container state management

The sandbox tracks containers by `id` (groupId). State transitions:

```
NOT_CREATED -> RUNNING  (on first exec)
RUNNING -> STOPPED      (on idle timeout or explicit dispose)
STOPPED -> RUNNING      (on next exec after timeout)
RUNNING -> REMOVED      (on explicit dispose with remove=true)
```

Stopped containers retain their state but release CPU/RAM. Restarting is faster than creating new (~500ms vs ~2s).

---

## 7. Integration with Coding-Agent

The sandbox integrates via a **sandbox extension** that wraps tool execution.

### Extension behavior

```typescript
function createSandboxExtension(config: SandboxConfig) {
  return (api: ExtensionAPI) => {
    let sandbox: SandboxBackend;

    api.on("session_start", async () => {
      sandbox = await createSandbox(config);
    });

    api.on("tool_call", async (event) => {
      // Route bash, read, write, edit, grep, find, ls through sandbox
      if (isSandboxedTool(event.toolName)) {
        return routeThroughSandbox(sandbox, event);
      }
    });

    api.on("session_shutdown", async () => {
      // Don't dispose -- let idle timeout handle it
      // Dispose only on explicit container cleanup
    });
  };
}
```

### Tool routing

| Tool | Sandbox Method | How |
|---|---|---|
| `bash` | `sandbox.exec("bash", ["-c", command])` | Full command execution in container |
| `read` | `sandbox.readFile(path)` | Read from /workspace |
| `write` | `sandbox.writeFile(path, content)` | Write to /workspace |
| `edit` | `sandbox.readFile` + transform + `sandbox.writeFile` | Read-modify-write cycle |
| `grep` | `sandbox.exec("grep", [...args])` | Search in container filesystem |
| `find` | `sandbox.exec("find", [...args])` | Find in container filesystem |
| `ls` | `sandbox.exec("ls", [...args])` | List in container filesystem |

### Autolearn integration

The ratchet loop creates its own sandbox for eval execution:

```typescript
// In ratchet-loop.ts
const evalSandbox = await createSandbox({
  id: `autolearn-${config.target}`,
  workspacePath: config.repoPath,
  memoryPath: dirname(config.memoryDbPath),
});

// Run eval inside sandbox
const result = await evalSandbox.exec("node", ["eval-runner.js", ...args]);
```

This ensures mutated prompts can't escape the eval environment.

---

## 8. File Layout

```
packages/sandbox/
  package.json
  tsconfig.build.json
  vitest.config.ts
  src/
    index.ts                  -- public API: createSandbox, types
    types.ts                  -- SandboxBackend, SandboxConfig, ExecResult, ExecOptions
    factory.ts                -- createSandbox: detects Docker, returns backend
    docker-backend.ts         -- DockerBackend: full container isolation
    direct-backend.ts         -- DirectBackend: fallback host execution
    idle-timer.ts             -- Idle timeout management
    path-guard.ts             -- Path traversal prevention for DirectBackend
  test/
    factory.test.ts           -- Backend selection tests
    direct-backend.test.ts    -- Host execution tests
    docker-backend.test.ts    -- Container tests (requires Docker)
    idle-timer.test.ts        -- Timeout tests
    path-guard.test.ts        -- Path traversal prevention tests
```

---

## 9. Implementation Dependencies

| Dependency | Purpose | Package |
|---|---|---|
| `dockerode` | Docker API client | new dependency |
| `@types/dockerode` | TypeScript types | new dev dependency |

No other external dependencies. The `DirectBackend` uses only Node.js built-ins (`child_process`, `fs`, `path`).

---

## 10. Success Criteria

1. `sandbox.exec("echo hello")` returns "hello" from inside a Docker container
2. Files written inside the container persist across sessions via Docker volumes
3. The container cannot read host files outside `/workspace` and `/memory`
4. Resource limits prevent a runaway process from consuming all VPS resources (CPU, RAM, PIDs)
5. When Docker is unavailable, tools fall back to direct execution with a logged warning
6. The coding-agent's bash/read/write/edit tools work identically whether sandboxed or not
7. Idle containers are stopped after the configured timeout
8. Path traversal attacks (`../../../etc/passwd`) are blocked in DirectBackend

---

## 11. What This Spec Does NOT Cover

- Network egress logging (v2 -- future audit subsystem)
- Custom Dockerfile building (v2 -- users configure image name only in v1)
- Browser tool pre-packaging in containers (v2 -- users add via custom images)
- Multi-VPS container orchestration (v2 -- Kubernetes/Swarm out of scope)
- Container monitoring dashboard (v2 -- CLI status only)
- Tiered network access per autonomy level (v2)
- GPU passthrough for containers (v2)
