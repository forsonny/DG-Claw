# DG-Claw Memory Layer Spec

**Date:** 2026-03-28
**Subsystem:** 3 of 6 (Persistent Memory)
**Status:** Draft
**Depends on:** Subsystem 1 (Fork & Rebrand) -- DONE

---

## Overview

A persistent memory layer for DG-Claw that stores, retrieves, and evolves agent knowledge across sessions. Memory is the backbone for all other subsystems -- the auto-learning engine (subsystem 4) reads from and writes to it, the multi-channel gateway (subsystem 2) scopes it per group, and sandboxed execution (subsystem 5) isolates it per container.

## Design Sources

This spec synthesizes patterns from 24 researched projects. Key influences:
- **Storage**: SQLite + FTS5 (ReMe, Ruflo, memU convergence)
- **Schema**: Entity:Slot:Value triples with typed categories (memvid MemoryCard model)
- **Write path**: Async extraction with debounce queue + write gating (DeerFlow, Ruflo, OpenViking)
- **Read path**: L0/L1/L2 tiered retrieval with token budgets (DeerFlow, OpenViking, ReMe)
- **Versioning**: Append-only version chains (Supermemory)
- **Scoping**: Dual user-space + agent-space (OpenViking)

---

## 1. Memory Taxonomy (8 Categories)

Every memory entry is classified into exactly one category:

| Category | Scope | Description | Example | Retention |
|---|---|---|---|---|
| **Profile** | User | Who the user is | "Name: Alice, Role: data scientist" | Permanent |
| **Preference** | User | How they want things done | "Prefers dark mode, terse responses" | Permanent |
| **Goal** | User | What they're trying to achieve | "Migrate auth system by March 30" | Until completed/expired (see `status` and `expires_at` columns) |
| **Entity** | User | People, places, things they mention | "Alice works at Acme Corp" | Salience-decayed |
| **Event** | User | Things that happened, timestamped | "Deployed v2.3 on 2026-03-25" | Salience-decayed |
| **Case** | Agent | Past problem-solution pairs | "Fixed CORS by adding proxy middleware" | Permanent |
| **Pattern** | Agent | Recurring behavioral observations | "User always reviews PRs before merging" | Salience-decayed |
| **Tool** | Agent | Tool execution history and performance | "gh CLI: 94% success, avg 1.2s" | Rolling window (last 100 invocations per tool) |

**User-space** categories (Profile, Preference, Goal, Entity, Event) are shared across all agents serving the same user. **Agent-space** categories (Case, Pattern, Tool) are private to each agent persona.

**Why 8 categories (vs. the 6-category convergence in OpenViking/memvid)?** Goal and Tool are DG-Claw-specific additions. Goal enables deadline-aware proactive behavior and is essential for the multi-channel gateway. Tool enables the ratchet loop to optimize tool configurations based on performance history. Both are absent from projects that don't have auto-learning or VPS scheduling.

---

## 2. Storage Schema

### Primary Store: SQLite with FTS5

Single file: `~/.dg-claw/memory/{groupId}/memory.sqlite`

```sql
-- Schema version (for migrations)
CREATE TABLE schema_version (
  version INTEGER PRIMARY KEY,
  applied_at TEXT NOT NULL
);
INSERT INTO schema_version VALUES (1, datetime('now'));

-- Core memory table
CREATE TABLE memories (
  id TEXT PRIMARY KEY,           -- UUID
  entity TEXT NOT NULL,          -- "Alice", "auth-service", "project-x"
  slot TEXT NOT NULL,            -- "works-at", "deployed-on", "prefers"
  value TEXT NOT NULL,           -- "Acme Corp", "2026-03-25", "dark mode"
  category TEXT NOT NULL CHECK (category IN (
    'Profile', 'Preference', 'Goal', 'Entity', 'Event', 'Case', 'Pattern', 'Tool'
  )),
  scope_user_id TEXT,            -- set for user-space categories
  scope_agent_id TEXT,           -- set for agent-space categories, NULL for user-space
  scope_group_id TEXT NOT NULL,  -- always scoped to a group
  salience REAL DEFAULT 1.0,    -- decays over time, bumped on access
  confidence REAL DEFAULT 1.0,  -- extraction confidence
  embedding BLOB,               -- vector embedding (dimensions set by config)
  parent_id TEXT,               -- version chain: links to superseded memory
  source_session_id TEXT,       -- which session created this
  source_turn INTEGER,          -- which conversation turn
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived')),
  expires_at TEXT,              -- ISO 8601, for Goal category
  created_at TEXT NOT NULL,     -- ISO 8601
  updated_at TEXT NOT NULL,     -- ISO 8601
  accessed_at TEXT NOT NULL,    -- last retrieval (initialized to created_at)
  -- Enforce user-space/agent-space invariant:
  CHECK (
    (category IN ('Profile', 'Preference', 'Goal', 'Entity', 'Event') AND scope_agent_id IS NULL)
    OR
    (category IN ('Case', 'Pattern', 'Tool') AND scope_agent_id IS NOT NULL)
  )
);

-- Indexes for L1 scoring (avoid full table scans)
CREATE INDEX idx_memories_scope ON memories(scope_group_id, scope_user_id, scope_agent_id);
CREATE INDEX idx_memories_salience ON memories(scope_group_id, salience DESC);
CREATE INDEX idx_memories_category ON memories(category);

-- Full-text search index for BM25
CREATE VIRTUAL TABLE memories_fts USING fts5(
  entity, slot, value, category,
  content='memories',
  content_rowid='rowid'
);

-- Triggers to keep FTS5 in sync with memories table
CREATE TRIGGER memories_ai AFTER INSERT ON memories BEGIN
  INSERT INTO memories_fts(rowid, entity, slot, value, category)
  VALUES (new.rowid, new.entity, new.slot, new.value, new.category);
END;
CREATE TRIGGER memories_ad AFTER DELETE ON memories BEGIN
  INSERT INTO memories_fts(memories_fts, rowid, entity, slot, value, category)
  VALUES ('delete', old.rowid, old.entity, old.slot, old.value, old.category);
END;
CREATE TRIGGER memories_au AFTER UPDATE ON memories BEGIN
  INSERT INTO memories_fts(memories_fts, rowid, entity, slot, value, category)
  VALUES ('delete', old.rowid, old.entity, old.slot, old.value, old.category);
  INSERT INTO memories_fts(rowid, entity, slot, value, category)
  VALUES (new.rowid, new.entity, new.slot, new.value, new.category);
END;

-- Audit log (append-only, covers both reads and writes)
CREATE TABLE audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  memory_id TEXT,
  action TEXT NOT NULL,          -- 'create', 'supersede', 'access', 'decay', 'gate_reject', 'quarantine'
  actor TEXT NOT NULL,           -- 'extractor', 'ratchet', 'user', 'system', 'retriever'
  details TEXT,                  -- JSON blob with context
  timestamp TEXT NOT NULL
);

-- Experiment log (for ratchet loop)
CREATE TABLE experiments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  target TEXT NOT NULL,          -- what was optimized (skill name, prompt, etc.)
  mutation TEXT NOT NULL,        -- description of the change
  score REAL,                   -- eval score
  status TEXT NOT NULL CHECK (status IN ('kept', 'discarded', 'crashed')),
  commit_hash TEXT,             -- git commit in skills/ repo
  timestamp TEXT NOT NULL
);

-- Top-of-Mind summary (L0 cache)
-- scope_key format: "userId::groupId" for user-space, "userId:agentId:groupId" for agent-space
CREATE TABLE top_of_mind (
  scope_key TEXT PRIMARY KEY,
  summary TEXT NOT NULL,        -- <500 token summary
  updated_at TEXT NOT NULL
);

-- Redo log for crash-safe extraction (pending batches)
CREATE TABLE redo_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  batch_id TEXT NOT NULL,       -- UUID for the extraction batch
  payload TEXT NOT NULL,        -- JSON: array of conversation turns to extract
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'done', 'failed')),
  retry_count INTEGER DEFAULT 0,
  created_at TEXT NOT NULL,
  completed_at TEXT
);
-- Cleanup: entries with status 'done' are purged after 24 hours.
-- Entries with status 'failed' are retained for 7 days for debugging, then purged.

-- Pending approvals queue (for Supervised autonomy mode)
CREATE TABLE pending_approvals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  memory_id TEXT NOT NULL,      -- UUID matching the would-be memory
  entity TEXT NOT NULL,
  slot TEXT NOT NULL,
  value TEXT NOT NULL,
  category TEXT NOT NULL,
  scope_user_id TEXT,
  scope_agent_id TEXT,
  scope_group_id TEXT NOT NULL,
  confidence REAL,
  source_session_id TEXT,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL      -- default: created_at + 7 days
);

-- Session-to-group mapping
CREATE TABLE session_groups (
  session_id TEXT PRIMARY KEY,
  group_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  agent_id TEXT,
  created_at TEXT NOT NULL
);
```

### Session Store: JSONL files

`~/.dg-claw/sessions/{sessionId}.jsonl` -- raw conversation log, append-only.
`~/.dg-claw/sessions/{sessionId}.summary.md` -- compacted summaries, human-readable.
`~/.dg-claw/sessions/{sessionId}.meta.json` -- branch tree, model, timestamps.

### Indexes

- **BM25**: SQLite FTS5 (built-in, zero dependency)
- **Vector**: HNSW index via `sqlite-vec` or `vectra` (lightweight, in-process)
- Both indexes are derived artifacts from the `memories` table and can be rebuilt.

---

## 3. Write Path

### 3.1 Hot Path (non-blocking)

```
User Message -> Agent Response -> Append to Episodic JSONL -> Debounce Queue
```

The user never waits for memory processing. The episodic log is append-only and immediate.

### 3.2 Debounce Queue

Configurable `debounce_ms` (default: 5000ms). Coalesces rapid exchanges into a single extraction batch. Prevents I/O storms during fast back-and-forth.

- **Scope**: One queue per group. Groups do not share queues.
- **Max depth**: 50 turns per batch (configurable). If the queue reaches max depth before the debounce timer fires, it flushes immediately.
- **Backpressure**: If the extraction worker is busy processing a previous batch, new turns continue to accumulate in the queue. No turns are dropped.

### 3.3 Async Extraction (background worker)

1. **RedoLog checkpoint** -- write pending batch to a WAL-like file before processing. If the worker crashes, it resumes from the checkpoint on restart.
2. **LLM Fact Extractor** -- secondary LLM call extracts Entity:Slot:Value triples from the conversation batch.
3. **Classification** -- each triple is classified into one of the 8 categories.

### 3.4 Write Gate (pre-persist filter)

Every extracted triple must pass through the gate before persistence:

1. **Salience threshold** -- below-threshold facts are logged to audit but not persisted.
2. **PII and injection scan** -- check for prompt injection patterns, secrets, and sensitive data. Flagged entries are quarantined.
3. **Deduplication** -- check if an identical entity:slot:value triple already exists. If duplicate, bump salience of existing entry instead.
4. **Conflict resolution** -- if new triple contradicts an existing one (same entity:slot, different value), resolve by creating a version chain. The new value becomes current; the old value is preserved with a `parent_id` link.

### 3.5 Persistence

- Atomic SQLite write (WAL mode)
- Update FTS5 and vector indexes
- Append to audit log (action, actor, timestamp)
- Route to correct scope (user-space or agent-space based on category)

---

## 4. Read Path (Tiered Retrieval)

### L0: Always Present (~500 tokens)

Injected into every LLM call without retrieval:
- **Top-of-Mind summary** -- short context summary updated on each compaction cycle
- **User profile snapshot** -- name, timezone, language, key preferences
- **Active goals** -- current objectives with deadlines

Stored in the `top_of_mind` table, updated by the compaction process.

### L1: Token-Budgeted Injection (~2000 tokens, configurable)

On each turn:
1. Score all facts by `salience * recency_weight * relevance_to_query` where `recency_weight = 1 / (1 + days_since_access)` and `relevance_to_query = cosine_similarity(fact_embedding, query_embedding)`
2. Sort descending
3. Pack greedily until `max_injection_tokens` is reached
4. **Rewrite** injected facts to fit the current conversational context (not raw dumps)
5. Bump `accessed_at` and `salience` for all retrieved facts

### L2: On-Demand Hybrid Search

Triggered when L1 facts are insufficient (agent requests more context via tool call):
1. Embed the query
2. **Vector search** (70% weight) -- cosine similarity against memory embeddings
3. **BM25 search** (30% weight) -- keyword matching via FTS5
4. Fuse results, rerank
5. Filter by scope: `userId + agentId + groupId`
6. Rewrite and inject

### Agent Memory Tools

The agent interacts with memory through explicit tool calls, not just background extraction:

**`memory_search`** (L2 on-demand retrieval):
- Parameters: `query` (string), `category` (optional filter), `limit` (default 10)
- Returns: array of `{ entity, slot, value, category, salience, created_at }`
- Uses hybrid BM25+vector search scoped to current userId+agentId+groupId

**`memory_write`** (explicit memory creation):
- Parameters: `entity` (string), `slot` (string), `value` (string), `category` (one of 8)
- Passes through the write gate (salience, PII, dedup, conflict resolution)
- In Supervised mode, goes to pending_approvals queue
- Returns: `{ id, status: "stored" | "pending" | "duplicate" | "quarantined" }`

**`memory_delete`** (explicit forgetting):
- Parameters: `entity` (string), `slot` (optional -- deletes all slots if omitted)
- Sets matching memories to `status: 'archived'` (soft delete, never hard delete)
- Audit logged with action `'delete'`, actor `'agent'` or `'user'`
- In Supervised mode, requires approval before archiving

These tools are registered as DG-Claw agent tools alongside read/write/edit/bash.

### Compaction (Context Overflow)

**Trigger threshold**: Compaction fires when context window usage exceeds 80% of the model's max context (configurable via `compaction_threshold_pct`, default 0.8). A reserve of 20% is maintained for the agent's response and tool calls.

When threshold is reached:
1. ContextChecker detects token count > threshold
2. Compactor generates structured summary (goals, constraints, progress, decisions)
3. Summary replaces older messages in working memory
4. **Tool result compaction**: long tool outputs (>2000 tokens) are truncated to a summary + file reference. The full output is externalized to `sessions/{sessionId}.tool-outputs/{turnNumber}.txt`.
5. Summary archived to session `.summary.md`
6. Top-of-Mind (L0) updated: replaces the previous summary (not appended). Format is structured prose: "Current goals: ... Key decisions: ... Active context: ..."

---

## 5. Scoping and Isolation

### Three-axis scoping

Every memory entry is scoped by:
- **userId** -- which user owns this memory
- **agentId** -- which agent persona (null for user-space memories)
- **groupId** -- which messaging group/channel

### Filesystem isolation

On VPS, each group gets its own SQLite file:
```
~/.dg-claw/memory/
  group-abc123/
    memory.sqlite      -- all memories for this group
  group-def456/
    memory.sqlite      -- isolated from other groups
```

For container deployments, each group directory is mounted as a separate volume -- OS-level isolation, not just application-level.

### Autonomy levels

| Level | Read | Write | Ratchet |
|---|---|---|---|
| ReadOnly | All scoped memories | None | None |
| Supervised | All scoped memories | Queued for approval | None |
| Full | All scoped memories | Direct write | Can run ratchet loop |

---

## 6. Salience and Decay

Every memory has a `salience` score (0.0 to 1.0):
- **Initial salience**: set by extraction confidence
- **Decay**: `salience *= decay_rate` on each compaction cycle (configurable, default 0.95)
- **Reinforcement**: `salience = min(1.0, salience + 0.1)` when accessed via retrieval
- **Threshold**: memories below `min_salience` (default 0.05) are archived, not deleted

This implements natural forgetting without manual deletion. Frequently-accessed facts stay relevant; forgotten facts fade.

### Capacity Limits

Per-group memory limits prevent unbounded growth:
- **Max active memories per group**: 10,000 (configurable). When exceeded, the lowest-salience memories are archived until the count is below the limit.
- **Max memories per category per group**: 2,000. Prevents any single category from dominating.
- **Goal expiration**: Goals with `expires_at` in the past are automatically archived on the next compaction cycle.
- **Tool memory rolling window**: Only the last 100 invocations per tool are retained. Older entries are summarized into aggregate stats (success rate, avg latency) and archived.

When capacity limits are hit, the agent receives a system message: "Memory store at capacity (9,800/10,000). Low-salience memories will be archived." This teaches the agent to use `memory_write` judiciously.

---

## 7. Auto-Learning Integration (Ratchet Loop Interface)

The memory layer exposes these interfaces to the auto-learning engine (subsystem 4):

- `getSkillsForOptimization(agentId)` -- returns Case and Pattern memories as optimization targets
- `getToolPerformance(agentId)` -- returns Tool memory with success rates
- `commitMutation(target, mutation, score, status)` -- logs to experiments table
- `promoteSkill(caseId)` -- promotes a Case to higher salience after successful ratchet iteration
- `getExperimentHistory(target)` -- returns past mutations and scores for a given target

The ratchet loop reads current-best from the Procedural Store, mutates, evals, and writes results back. Git serves as the ratchet mechanism for skill files. The experiments table tracks all attempts.

---

## 8. File Layout on Disk

```
~/.dg-claw/
  memory/
    {groupId}/
      memory.sqlite          -- memories, FTS5 index, audit log, experiments, top-of-mind, redo log, pending approvals
  sessions/
    {sessionId}.jsonl        -- raw conversation (append-only)
    {sessionId}.summary.md   -- compacted summaries (human-readable)
    {sessionId}.meta.json    -- branch tree, model, timestamps
  skills/
    {skillName}.md           -- skill definitions (git-tracked, ratchet-mutated)
  eval/
    harness.js               -- immutable eval runner (git-tracked)
    test-cases/              -- input-output pairs (git-tracked)
    results.tsv              -- all experiment results
  config/
    settings.json            -- user preferences, model defaults
    providers.json           -- API keys, provider configs
```

**Git tracking:**
- `skills/` and `eval/` are tracked -- ratchet loop uses commit/reset
- `memory/` and `sessions/` are NOT tracked -- too large, binary/private
- `config/` is user choice

---

## 9. Implementation Dependencies

| Dependency | Purpose | Package | Notes |
|---|---|---|---|
| SQLite | Primary memory store | `better-sqlite3` | WAL mode, single-writer |
| FTS5 | BM25 keyword search | Built into SQLite | Content-synced via triggers |
| Vector search | Semantic similarity | `sqlite-vec` | Chosen over vectra: same SQLite process, HNSW index, no external deps |
| Embeddings | Generate vectors | `@dg-claw/ai` providers | Default: OpenAI `text-embedding-3-small` (1536 dims), configurable |

All dependencies run in-process on a single VPS. No external services required.

### Embedding configuration

- **Default model**: `text-embedding-3-small` (1536 dimensions) via the configured provider
- **Embedding cache**: LRU cache of last 2000 embeddings to avoid redundant API calls
- **Fallback**: If embedding provider is unavailable, L1 falls back to BM25-only scoring (no vector component). L2 degrades to BM25-only search. Logged to audit.
- **Model migration**: If the embedding model changes, existing embeddings are invalidated. A background re-embedding job processes all memories incrementally. The `schema_version` table tracks this.

---

## 10. Concurrency Model

DG-Claw uses SQLite in WAL mode with `better-sqlite3` (synchronous, single-writer):

- **Single writer**: Only one process writes to a given group's `memory.sqlite` at a time. The debounce queue serializes write operations.
- **Multiple readers**: WAL mode allows concurrent reads while a write is in progress.
- **Multi-agent same group**: If multiple agents share a group, they share the same SQLite file. Write operations are serialized through the debounce queue. Each agent's background extraction worker enqueues to the same queue.
- **Cross-process**: If multiple Node.js processes access the same group (e.g., during VPS scaling), use SQLite's built-in locking. `better-sqlite3` handles this via `PRAGMA busy_timeout = 5000`.

---

## 11. Case Extraction from Normal Usage

Cases (problem-solution pairs) are not just populated by the ratchet loop -- they are extracted from normal conversation when the extractor detects a resolved problem:

1. The LLM Fact Extractor identifies conversation patterns where: (a) the user described a problem, (b) the agent proposed a solution, (c) the user confirmed it worked (or tool execution succeeded).
2. The extractor produces a Case triple: `entity: "CORS error on /api/users", slot: "solved-by", value: "Added proxy middleware in vite.config.ts"`.
3. The Case passes through the write gate like any other triple.
4. The ratchet loop (subsystem 4) can later optimize these Cases by generalizing them into reusable skill patterns.

The extraction prompt includes explicit instructions to look for resolved problems and emit Case triples.

---

## 12. Supervised Autonomy: Approval Queue

When an agent runs in Supervised mode:

1. Extracted triples that pass the write gate are inserted into a `pending_approvals` queue (a table in SQLite) instead of `memories`.
2. The user is notified (via the messaging channel or CLI) that N memories are pending approval.
3. The user can approve, reject, or edit each pending memory.
4. Approved memories are moved to the `memories` table. Rejected ones are logged to audit with action `gate_reject`.
5. Pending memories expire after 7 days if not reviewed (configurable). Expired entries are logged and discarded.

---

## 13. Error Handling

### Extraction failures
- **LLM API down**: Batch stays in `redo_log` with status `pending`. Retried with exponential backoff (1s, 5s, 30s, 5m). After 5 failures, batch is marked `failed` and logged to audit.
- **Malformed output**: If the LLM returns invalid triples, the batch is re-extracted once with a stricter prompt. If still invalid, individual turns are extracted separately (batch split).
- **Timeout**: Extraction calls have a 30s timeout. Timed-out batches are retried.

### Retrieval failures
- **Vector index corrupted**: Fall back to BM25-only. Log warning. Trigger background re-index.
- **Embedding API down**: L1 uses salience + recency only (no relevance component). L2 uses BM25-only. Logged to audit.

### Write gate quarantine
- Entries flagged by PII/injection scan go to the `audit_log` with action `quarantine` and `details` containing the flagged content.
- Quarantined entries are never persisted to `memories`.
- In Supervised mode, quarantined entries are surfaced to the user for review.

---

## 14. Migration Strategy

Schema changes are managed via a version table and migration scripts:

1. `schema_version` table tracks current version.
2. Migration scripts are numbered: `001_initial.sql`, `002_add_column.sql`, etc.
3. On startup, the memory layer checks `schema_version` against the expected version and runs any pending migrations.
4. Since each group has its own SQLite file, migrations run per-group on first access (lazy migration).
5. Migrations must be backward-compatible: new columns use DEFAULT values, removed columns are ignored.

---

## 15. Performance Targets

| Operation | Target | Notes |
|---|---|---|
| L0 retrieval | <1ms | Single row lookup by scope_key |
| L1 scoring | <50ms for 10,000 memories | Uses `idx_memories_salience` index, top-N query not full scan |
| L2 hybrid search | <200ms | HNSW vector search + FTS5 BM25, fused |
| Write (hot path) | <5ms | Append to JSONL + enqueue to debounce |
| Write (extraction) | <5s per batch | Background, non-blocking |
| Compaction | <10s | LLM call for summary generation |
| Session load | <100ms | L0 lookup + L1 top-N query |

L1 scoring uses `SELECT * FROM memories WHERE scope_group_id = ? AND salience > 0.05 ORDER BY salience DESC LIMIT 50` -- an indexed query, not a full scan. Relevance-to-query is computed only on the top-50 by salience, not all facts.

---

## 16. Success Criteria

1. Memory persists across sessions -- facts extracted in session A are available in session B
2. Hybrid retrieval returns relevant results for both keyword and semantic queries
3. Contradiction resolution correctly supersedes stale facts
4. Context window never overflows -- compaction triggers before limit
5. Salience decay naturally prunes unused memories over time
6. Per-group isolation prevents memory leakage between groups
7. Audit log traces every memory read/write for debugging
8. Auto-learning engine can read from and write to the memory layer
9. All memory operations are non-blocking on the user's hot path

---

## 17. What This Spec Does NOT Cover

- Multi-channel gateway integration (subsystem 2 -- separate spec)
- Auto-learning ratchet loop implementation (subsystem 4 -- separate spec, uses interfaces from section 7)
- Sandboxed execution (subsystem 5 -- separate spec)
- VPS deployment (subsystem 6 -- separate spec)
- Multi-modal extraction (images, audio, PDFs -- deferred to v2)
- Document ingestion / external connectors (deferred to v2)
- Graph database / relationship traversal (deferred to v2, triplets provide graph-lite for v1)
- Middleware-first memory injection (deferred -- evaluate after gateway subsystem is designed)
- Backup/restore automation (deferred -- manual SQLite file copy is sufficient for v1)
- Memory export/import between instances (deferred to v2)
- Storage size limits and disk monitoring (deferred -- rely on VPS disk alerts for v1)
- Human-readable MEMORY.md export view (deferred to v2 -- SQLite is canonical, a `dg-claw memory export --format=md` CLI command can generate markdown snapshots on demand)
- Proactive memory surfacing / intent prediction (deferred to v2 -- evaluate after core reactive pipeline is proven)

---

## 18. Design Decisions and Tradeoffs

### Dynamic per-turn memory vs. frozen snapshot (Hermes pattern)
Hermes Agent freezes all memory into the system prompt at session start, making it immutable within a session. This enables prefix caching and guarantees zero retrieval misses for small memory budgets. DG-Claw intentionally uses dynamic per-turn retrieval (L0/L1/L2) because: (a) memory stores will grow beyond what fits in a prompt, (b) multi-hour sessions need updated context, (c) the auto-learning engine writes new Cases mid-session. The tradeoff is higher per-turn cost. Performance targets in Section 15 account for this.

### BM25 at L2 only, not L1
L1 is salience-scored (fast indexed query) with cosine relevance as a secondary signal. BM25 is reserved for L2 (explicit search) because the FTS5 query is more expensive than the salience index scan and is unnecessary when the top-50-by-salience already covers most relevant facts. If L1 quality proves insufficient in testing, BM25 can be added as a third scoring component.

### 8 categories vs. research convergence on 6
See note in Section 1. Goal and Tool are DG-Claw-specific additions justified by the auto-learning and multi-channel subsystems.
