# DG-Claw Auto-Learning Engine Spec

**Date:** 2026-03-29
**Subsystem:** 4 of 6 (Auto-Learning Engine)
**Status:** Draft
**Depends on:** Subsystem 1 (Fork & Rebrand) -- DONE, Subsystem 3 (Memory Layer) -- DONE

---

## Overview

A Karpathy-style ratchet loop that autonomously improves system prompts through iterative mutation, evaluation, and selection. The loop mutates a target file, evaluates against an immutable harness, keeps improvements (git commit), discards regressions (git reset), and logs all experiments to the memory layer.

Runs as a standalone batch process (`@dg-claw/autolearn`), separate from the agent runtime. Supports both on-demand CLI invocation and autonomous scheduled execution via a built-in cron daemon.

## Design Sources

- **autoresearch** (Karpathy) -- the ratchet loop pattern, git as ratchet, immutable eval, fixed time budgets
- **Hermes Agent** -- procedural skill extraction from usage (future v2 target)
- **Ruflo** -- RL-optimized retrieval routing (future v2 target)
- **ReMe** -- trajectory-based procedural memory (Cases/Patterns feed the mutation engine context)

---

## 1. Package Structure

**New package:** `@dg-claw/autolearn`

Dependencies:
- `@dg-claw/ai` -- LLM calls for mutation and LLM-as-judge
- `@dg-claw/memory` -- experiment logging, procedural store access
- `better-sqlite3` -- direct DB access for experiments table
- `croner` -- cron schedule parsing
- `isomorphic-git` -- git operations (already in the monorepo)

Does NOT depend on `@dg-claw/coding-agent`. The auto-learning engine is a standalone batch process.

**CLI entry points:**
- `dg-claw optimize <target>` -- on-demand ratchet loop
- `dg-claw optimize --schedule "<cron>" --target <target>` -- register a cron schedule
- `dg-claw optimize --daemon` -- start the scheduler daemon
- `dg-claw optimize --stop` -- stop the daemon
- `dg-claw optimize --list` -- show experiment history
- `dg-claw optimize --promote <target>` -- merge autolearn branch to main
- `dg-claw optimize --rollback <target>` -- reset autolearn branch to main

---

## 2. The Ratchet Loop

### Core cycle

```
selectTarget -> readCurrentBest -> mutate -> gitCommit -> eval -> compare -> keep/discard -> log -> repeat
```

### Configuration

```typescript
interface RatchetConfig {
  /** Target file to optimize (e.g., "system-prompt"). */
  target: string;
  /** Maximum iterations per run. Default: 50. */
  maxIterations: number;
  /** Maximum wall-clock time per run in ms. Default: 3600000 (1 hour). */
  maxWallClockMs: number;
  /** Timeout per individual iteration in ms. Default: 120000 (2 min). */
  iterationTimeoutMs: number;
  /** Path to eval test cases directory. */
  evalCasesDir: string;
  /** LLM model for generating mutations. */
  model: string;
  /** LLM model for LLM-as-judge scoring (can be cheaper/faster). */
  judgeModel: string;
}
```

### Loop pseudocode

```
bestScore = evaluateCurrentTarget()
iterationCount = 0
startTime = Date.now()

while (iterationCount < maxIterations && elapsed < maxWallClockMs):
    mutation = mutationEngine.propose(target, experimentHistory)
    if mutation is invalid: log crash, continue

    gitCommit(mutation)
    score = evalHarness.evaluate(target, iterationTimeoutMs)

    if score is null: // eval crashed or timed out
        gitReset()
        logExperiment(target, mutation, null, "crashed")
    else if score > bestScore:
        bestScore = score
        logExperiment(target, mutation, score, "kept")
    else:
        gitReset()
        logExperiment(target, mutation, score, "discarded")

    iterationCount++
```

### Termination conditions

The loop stops when ANY of these is true:
- `iterationCount >= maxIterations`
- `Date.now() - startTime >= maxWallClockMs`
- External SIGTERM received
- 5 consecutive crashes (likely a broken target)

---

## 3. Mutation Engine

### Mutation process

1. Read the current target file content from the autolearn branch
2. Query experiment history for this target (last 10 results via `getExperimentHistory()`)
3. Send to the LLM with the mutation prompt (see below)
4. Receive modified file content
5. Validate: not empty, not identical to current, syntactically valid
6. Write to disk

### Mutation prompt template

```
You are optimizing a system prompt for an AI coding agent called DG-Claw.

## Current System Prompt
{currentContent}

## Recent Experiment History
{last 10 experiments: mutation description, score, status}

## Eval Criteria
{list of eval criteria from test cases and judge rubric}

## Your Task
Propose ONE specific change to the system prompt that might improve eval scores.

Rules:
- Make one focused change, not a complete rewrite
- Prefer removing complexity over adding it
- If a shorter prompt achieves the same score, that's a win
- Explain what you're changing and why in a one-line comment
- Return the complete modified system prompt

## Output Format
MUTATION_DESCRIPTION: {one-line description of what changed}
---
{complete modified system prompt content}
```

### Guard rails

- If the LLM returns content identical to current: retry once with "You returned the same content. Try a different approach."
- If the LLM returns empty content: mark as crashed
- Maximum 3 mutation retries per iteration before marking as crashed
- Mutation description is extracted and stored in the experiments table

---

## 4. Eval Harness

The eval harness is immutable -- the ratchet loop cannot modify it. It lives in `~/.dg-claw/eval/` (git-tracked on the main branch).

### Signal 1: Test cases (60% weight)

**Storage:** `~/.dg-claw/eval/test-cases/{target}/` directory containing JSON files.

**Test case format:**
```json
{
  "id": "test-001",
  "input": "What is the capital of France?",
  "expected": "Paris",
  "criteria": "contains"
}
```

**Criteria types:**
- `exact` -- response must exactly match expected
- `contains` -- response must contain expected as a substring
- `regex` -- response must match expected as a regular expression

**Execution:** For each test case, the harness:
1. Sends the input to the LLM with the mutated system prompt
2. Checks the response against the expected output using the specified criteria
3. Records pass/fail

**Score:** `passRate = passCount / totalCases` (0.0 to 1.0)

### Signal 2: LLM-as-judge (40% weight)

After running test cases, the judge model reviews a sample of responses (all if <= 10 cases, random 10 if more).

**Judge prompt:**
```
Rate the following AI assistant response on three criteria.
Each criterion is scored 0-100.

## User Input
{input}

## Assistant Response
{response}

## Criteria
1. Accuracy: Is the response factually correct and complete?
2. Helpfulness: Does the response directly address what was asked?
3. Conciseness: Is the response appropriately brief without omitting important details?

Return ONLY a JSON object:
{"accuracy": <0-100>, "helpfulness": <0-100>, "conciseness": <0-100>}
```

**Score:** `judgeScore = average(accuracy, helpfulness, conciseness) / 100` (0.0 to 1.0)

### Composite score

```
finalScore = (passRate * 0.6) + (judgeScore * 0.4)
```

### The ratchet decision

```
if (finalScore > bestScore) -> KEEP
if (finalScore <= bestScore) -> DISCARD
if (eval crashed or timed out) -> CRASH
```

---

## 5. Git Integration

### Repository

`~/.dg-claw/` is the git repository root (initialized on first `dg-claw optimize` run if `.git` doesn't exist). Both `skills/` and `eval/` are directories within this repo. The `.gitignore` excludes `memory/`, `sessions/`, `autolearn.pid`, `autolearn.lock`, `autolearn.log`, and `*.sqlite`.

### Per-target branching

- Each optimization target gets its own branch: `autolearn/{target}` (e.g., `autolearn/system-prompt`)
- The `main` branch holds production versions -- what the live agent uses
- Autolearn branches are isolated: mutations never affect the live agent until explicitly promoted

### Ratchet cycle git flow

```
1. git checkout autolearn/{target}
2. Write mutated file content
3. git add {target-file} && git commit -m "autolearn: {mutation description}"
4. Run eval harness
5. If KEEP: leave commit, update bestScore
6. If DISCARD: git reset HEAD~1
7. If CRASH: git reset HEAD~1, log error
8. Repeat
```

### Promotion

`dg-claw optimize --promote <target>` merges the autolearn branch into main:
```
git checkout main
git merge autolearn/{target} --no-ff -m "promote: autolearn improvements for {target}"
```

The live agent picks up the promoted changes on its next session load.

### Rollback

`dg-claw optimize --rollback <target>` discards all pending improvements:
```
git checkout autolearn/{target}
git reset --hard main
```

### Safety

- The eval harness files (`~/.dg-claw/eval/`) are never modified by the ratchet loop
- The mutation engine only touches the target file -- nothing else
- The autolearn branch is isolated from main
- File lock prevents concurrent ratchet runs on the same target

---

## 6. Scheduler

### Built-in cron daemon

Uses `croner` for cron expression parsing. Runs as a detached Node.js process.

### Schedule config

Stored at `~/.dg-claw/config/schedules.json`:

```json
[
  {
    "id": "nightly-prompt",
    "target": "system-prompt",
    "cron": "0 2 * * *",
    "config": {
      "maxIterations": 50,
      "maxWallClockMs": 3600000
    },
    "enabled": true
  }
]
```

### Daemon behavior

- Started via `dg-claw optimize --daemon`
- Spawned as detached process (`child_process.spawn` with `detached: true, stdio: 'ignore'`)
- PID written to `~/.dg-claw/autolearn.pid`
- Logs to `~/.dg-claw/autolearn.log`
- On each cron trigger:
  1. Acquire file lock (`~/.dg-claw/autolearn.lock`)
  2. Run the ratchet loop for the scheduled target
  3. Release file lock
- If lock already held (previous run still active), skip this trigger
- Graceful shutdown on SIGTERM: finish current iteration, log, exit

### CLI commands

- `dg-claw optimize --daemon` -- start the daemon
- `dg-claw optimize --stop` -- send SIGTERM to daemon (read PID from `.pid` file)
- `dg-claw optimize --schedule "<cron>" --target <target>` -- add/update a schedule entry
- Schedule entries can be enabled/disabled without removing them

---

## 7. Memory Integration

The auto-learning engine uses the memory layer for:

- **Experiment logging:** `logExperiment(db, target, mutation, score, status, commitHash)` -- every iteration is recorded
- **History retrieval:** `getExperimentHistory(db, target)` -- mutation engine reads past results to inform new proposals
- **Best experiment:** `getBestExperiment(db, target)` -- used to establish the baseline score

The memory DB is opened at `~/.dg-claw/memory/{groupId}/memory.sqlite`. For the autolearn process, `groupId` defaults to `"global"` since prompt optimization applies across all groups.

---

## 8. File Layout

```
~/.dg-claw/
  skills/                           # git repo
    system-prompt.md                # the target file (on main and autolearn branches)
  eval/                             # git-tracked, immutable
    test-cases/
      system-prompt/
        test-001.json
        test-002.json
        ...
    judge-rubric.json               # optional custom judge criteria
  config/
    schedules.json                  # cron schedule entries
  memory/
    global/
      memory.sqlite                 # experiments table lives here
  autolearn.pid                     # daemon PID
  autolearn.lock                    # file lock for concurrent run prevention
  autolearn.log                     # daemon log output
```

---

## 9. Implementation Dependencies

| Dependency | Purpose | Package |
|---|---|---|
| `@dg-claw/ai` | LLM calls for mutation + judge | existing |
| `@dg-claw/memory` | Experiment logging | existing |
| `better-sqlite3` | Direct DB access | existing |
| `croner` | Cron expression parsing | new dependency |
| `isomorphic-git` | Git operations | existing in monorepo |
| `proper-lockfile` | File locking | existing in monorepo |

---

## 10. Success Criteria

1. `dg-claw optimize system-prompt` runs the ratchet loop and produces measurably better prompts
2. Improvements persist via git commits on the `autolearn/system-prompt` branch
3. Regressions are always discarded via git reset -- the branch never goes backward
4. `dg-claw optimize --promote system-prompt` merges improvements to main
5. `dg-claw optimize --daemon` runs overnight, producing ~30-50 iterations per hour
6. All experiments logged to the memory layer's experiments table with scores and commit hashes
7. The live agent is unaffected until explicit promotion
8. 5 consecutive crashes trigger loop termination (safety valve)
9. File lock prevents concurrent ratchet runs on the same target

---

## 11. What This Spec Does NOT Cover

- Skill definition optimization (same loop, different target -- add after v1 validates the pattern)
- Tool configuration optimization (numeric optimization, different eval approach -- v2)
- Retrieval parameter optimization (v2, requires the RL approach from Ruflo)
- Multi-agent parallel ratchet (v2)
- UI for reviewing experiments (CLI and experiment log only in v1)
- Automatic skill extraction from user interactions (v2, uses Hermes-style extraction into Cases/Patterns)
