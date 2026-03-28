# DG-Claw Fork & Rebrand Spec

**Date:** 2026-03-28
**Subsystem:** 1 of 6 (Fork & Rebrand)
**Status:** Draft

---

## Overview

Fork `badlogic/pi-mono` into `forsonny/DG-Claw`, rebrand all public-facing surfaces, strip unused packages, and verify the build. This produces the foundation for the remaining 5 DG-Claw subsystems (gateway, memory, auto-learning, sandboxing, VPS deployment).

## Context

DG-Claw is a full-service AI agent host for VPS deployment. Pi-mono provides the agent runtime, multi-provider LLM abstraction, extension system, and session management. DG-Claw builds on this with multi-channel messaging, persistent memory, auto-learning (Karpathy ratchet loop), and sandboxed execution.

This spec covers only the fork and rebrand -- establishing a clean, building, independently versioned codebase.

---

## 1. Repository Setup

### Clone & Remote Configuration

- Clone `badlogic/pi-mono` into `C:\dev\myclaw`
- Remove default `origin`, set `origin` to `https://github.com/forsonny/DG-Claw.git`
- Add `upstream` remote pointing to `https://github.com/badlogic/pi-mono.git` (fetch-only, for future cherry-picks)
- Push initial unmodified code to `forsonny/DG-Claw` on `main` as a baseline
- Create a `rebrand` branch for all rename work

### Strip Packages

Delete the following packages and remove them from the root workspace configuration:

- `packages/mom/` -- Slack bot (DG-Claw will have its own multi-channel gateway)
- `packages/pods/` -- GPU pod management (irrelevant for VPS deployment)

Remove any cross-references to these packages in other packages' dependencies or imports.

### Root Files to Update

| File | Action |
|---|---|
| `package.json` | Name to `dg-claw`, remove `mom` and `pods` from workspaces |
| `CONTRIBUTING.md` | Rebrand all pi/pi-mono references to DG-Claw |
| `AGENTS.md` | Rebrand all pi/pi-mono references to DG-Claw |
| `README.md` | Full rewrite for DG-Claw identity and vision |
| `LICENSE` | Keep MIT, update copyright holder |

---

## 2. Package Renaming

### Scope Rename Mapping

| Old Package Name | New Package Name |
|---|---|
| `@mariozechner/pi-ai` | `@dg-claw/ai` |
| `@mariozechner/pi-agent-core` | `@dg-claw/agent` |
| `@mariozechner/pi-coding-agent` | `@dg-claw/coding-agent` |
| `@mariozechner/pi-tui` | `@dg-claw/tui` |
| `@mariozechner/pi-web-ui` | `@dg-claw/web-ui` |

### Directory Structure

Directory names remain unchanged (`packages/ai/`, `packages/agent/`, etc.). Only the `name` field in each `package.json` and all import paths change. This minimizes churn and keeps the structure readable.

### CLI Binary

- Rename `pi` to `dg-claw` in `packages/coding-agent/package.json` `bin` field
- Update all references to the `pi` command in documentation, system prompts, and config paths

### Config Paths

| Old | New |
|---|---|
| `.pi/` (shipped config in coding-agent) | `.dg-claw/` |
| `~/.pi/` (user config home) | `~/.dg-claw/` |
| `PI_*` environment variables | `DG_CLAW_*` |

### Internal String References

All occurrences of the following must be updated:

- System prompt references to "pi" -> "DG-Claw"
- Package descriptions in each `package.json`
- Hardcoded `"pi"` strings in `config.ts`, `cli.ts`, `main.ts`
- Any user-facing error messages, help text, or branding strings

---

## 3. Build & Verification

### Build Order

Preserved from pi-mono:

```
ai -> agent -> coding-agent -> tui -> web-ui
```

### Verification Checklist

1. `npm install` at root -- all workspace dependencies resolve with new package names
2. `npm run build` -- all 5 packages compile without errors
3. `npm run check` -- linting/formatting passes (Biome)
4. `npm test` -- existing test suites pass against renamed packages
5. `dg-claw --version` -- CLI binary runs and prints version
6. `dg-claw --help` -- help text shows "DG-Claw" branding, not "pi"

### Versioning

- Reset all packages to `0.1.0` -- clean start, independent of pi-mono's version
- Lockstep versioning retained (all packages share the same version number)

### What Stays Untouched

- All provider implementations in `ai/src/providers/`
- Agent loop logic in `agent/src/`
- Tool implementations (read, write, edit, bash)
- Extension system, session management, compaction
- TUI rendering, web-ui components
- Test files (except import path updates)

---

## 4. Upstream Sync Strategy

### Remote Configuration

```
origin   -> forsonny/DG-Claw.git   (push + pull)
upstream -> badlogic/pi-mono.git    (fetch only)
```

### Sync Workflow

Manual, when desired:

1. `git fetch upstream main`
2. Review upstream commits for relevant changes
3. Cherry-pick individual commits (not merge -- avoids conflict storms from renamed files)
4. Resolve `@mariozechner/pi-*` -> `@dg-claw/*` references in cherry-picked code
5. Test, commit

### Worth Pulling from Upstream

- New LLM provider additions in `packages/ai/src/providers/`
- Model metadata updates in `models.generated.ts`
- Bugfixes in the agent loop or tool implementations
- Security patches

### Ignore from Upstream

- Changes to `mom/` or `pods/` (stripped)
- Branding/docs changes
- Pi-specific CLI features that conflict with DG-Claw direction

No automated sync. DG-Claw will diverge increasingly as subsystems are added. Upstream sync is a convenience, not a dependency.

---

## 5. Deliverables

### This Spec Produces

- A working `dg-claw` CLI built from 5 rebranded packages
- Clean repo at `forsonny/DG-Claw` with upstream remote configured
- All tests passing, build green
- README reflecting DG-Claw identity and vision

### This Spec Does NOT Produce

- Multi-channel gateway (subsystem 2 -- separate spec)
- Memory layer (subsystem 3 -- separate spec)
- Auto-learning engine (subsystem 4 -- separate spec)
- Sandboxed execution (subsystem 5 -- separate spec)
- VPS deployment (subsystem 6 -- separate spec)
- npm publishing (future step, requires `@dg-claw` org on npmjs.com)

### Success Criteria

1. `git clone forsonny/DG-Claw && npm install && npm run build` succeeds
2. `dg-claw` binary launches and shows DG-Claw branding
3. Zero references to "pi" (as a product name) or "@mariozechner" in package names, CLI output, user-facing config paths, or branding strings. Incidental occurrences (e.g., "api", "pipeline", mathematical pi) are not in scope.
4. `git remote -v` shows both `origin` and `upstream`
5. All existing tests pass
