# Memory Architecture Research Findings

24 repos analyzed for improvements to DG-Claw's 6-path memory architecture.

---

## Proposed Improvements (Candidates for Voting)

### From Claw Ecosystem (OpenClaw, Nanobot, NanoClaw, ZeroClaw, PicoClaw, Moltworker, ClawTeam)

**C1: Per-group memory isolation (NanoClaw)**
Each messaging group gets its own isolated filesystem, CLAUDE.md memory file, and container. Memory never leaks between groups. Applies to Path 4 (tiers) and Path 6 (files).

**C2: Autonomy levels controlling memory write access (ZeroClaw)**
ReadOnly/Supervised/Full autonomy levels that gate what the agent can write to long-term memory. A ReadOnly agent cannot modify the Procedural Store. Applies to Path 2 (user journey) and Path 5 (auto-learning).

**C3: Filesystem-based inter-agent memory sharing (ClawTeam)**
Agents share memory via filesystem inboxes and ZeroMQ P2P, not a shared database. Each agent has its own git worktree. Applies to Path 6 (files) and multi-agent scenarios.

**C4: Edge-deployed conversation persistence (Moltworker)**
R2 object storage for conversation history on Cloudflare edge. Demonstrates that memory can be distributed, not just local SQLite. Applies to Path 6 (files).

**C5: Minimal single-process memory (Nanobot)**
SQLite + per-group message queues in one process. Proves core memory can be radically simple. Applies to Path 6 (files).

---

### From Agent Frameworks (Hermes, AgentScope, CoPaw, AgentScope-Runtime, DeerFlow, Ruflo, Edict, Eliza, Agency Swarm)

**F1: Procedural skill extraction loop (Hermes Agent)**
After completing complex tasks, Hermes automatically extracts reusable "skills" into procedural memory, then refines them on subsequent use. This is exactly our Path 5 ratchet loop but triggered by normal usage, not a separate overnight run. Applies to Path 2 + Path 5.

**F2: Parallel proactive memory bot (memU-style, seen in CoPaw)**
A separate background agent continuously monitors interactions, extracts insights, predicts intent, and runs autonomous proactive tasks -- not just reactive retrieval. Applies to Path 2 (user journey) and Path 3 (model interaction).

**F3: Governance gates on memory writes (Edict)**
Mandatory approval gates before certain memory writes (e.g., skill modifications, profile changes). A Chancellery agent reviews changes before they're persisted. Applies to Path 2 and Path 5.

**F4: Multi-framework adapter layer (AgentScope Runtime)**
Session management via Redis, Agent-as-a-Service with adapters for multiple frameworks. Memory isn't locked to one agent type. Applies to Path 1 (session loading).

**F5: Reinforcement learning for retrieval optimization (Ruflo)**
RuVector intelligence layer uses RL to improve retrieval routing decisions over time. The retrieval parameters themselves are optimized by the auto-learning loop. Applies to Path 3 and Path 5.

**F6: WASM deterministic shortcuts (Ruflo)**
Agent Booster uses WebAssembly to skip LLM calls for deterministic transforms. Not directly memory, but reduces load on the memory system by handling simple operations without retrieval. Applies to Path 3.

**F7: Trinity-RFT model finetuning integration (AgentScope)**
The framework includes integrated model finetuning through reinforcement learning from task feedback. Goes beyond prompt optimization to actual model weight updates. Applies to Path 5.

**F8: Plugin-based RAG with document ingestion (elizaOS)**
Document ingestion pipeline (PDFs, images, video transcripts) feeds into RAG retrieval alongside conversation memory. Memory isn't just conversation -- it includes uploaded artifacts. Applies to Path 3 and Path 6.

**F9: Organizational hierarchy for memory access (Agency Swarm)**
CEO agent sees all memory, Developer agent sees only its scope. Directional communication flows control which agents can read/write which memory partitions. Applies to Path 4 (tiers).

---

### From Memory-Specific Systems (ReMe, mem0, Supermemory, OpenViking, memvid, memU, Memori)

**M1: Pre-reasoning compaction hook (ReMe)**
A ContextChecker monitors token count BEFORE each LLM call. When threshold hit, a Compactor generates structured summaries (goals, constraints, progress, decisions) and a Summarizer maintains persistent markdown files. Not reactive -- proactive. Applies to Path 1 and Path 4.

**M2: Hybrid retrieval with 70/30 vector/BM25 fusion (ReMe)**
Weighted fusion of vector embeddings (70%) and BM25 keyword matching (30%). Both signals combined, not either/or. This is exactly what our Path 3 diagram shows. Validates our design.

**M3: Human-readable persistent memory files (ReMe)**
Daily journal markdown files + long-term MEMORY.md. Raw conversations in JSONL, long tool outputs externalized to separate files. All human-editable. Applies to Path 6.

**M4: Automatic fact extraction with contradiction resolution (mem0, Supermemory)**
LLM extracts structured facts from conversations at write time. When a new fact contradicts an existing one, the system resolves it (latest wins, or confidence-weighted). Supermemory adds temporal awareness and auto-forgetting of expired information. Applies to Path 2.

**M5: Multi-level memory scoping (mem0)**
Memory scoped to user, session, and agent levels. Simple add()/search() API. Each scope is independently queryable. Applies to Path 4.

**M6: Filesystem-hierarchy context database (OpenViking)**
Instead of flat vector storage, context organized into L0/L1/L2 directory tiers. "Directory Recursive Retrieval" combines filesystem positioning with semantic search. Only loads the relevant tier, dramatically reducing token consumption. Applies to Path 3 and Path 4.

**M7: Single-file portable memory (.mv2 format) (memvid)**
Packages data, embeddings, and search structures into one file using video-encoding-inspired compression. Dual BM25+HNSW retrieval with sub-5ms access. Time-travel debugging to rewind memory state. Applies to Path 6.

**M8: Proactive memory monitoring (memU)**
Parallel MemU Bot continuously monitors interactions, extracts insights, predicts intent. Three retrieval layers: resource (raw data + patterns), item (targeted facts), category (summaries + context assembly). PostgreSQL + pgvector. Applies to Path 2 and Path 3.

**M9: Typed memory categories (Memori)**
Seven typed categories: attributes, events, facts, relationships, preferences, rules, skills. Each type has different storage, retrieval, and decay characteristics. Entity->Process->Session scoping hierarchy. SQL-native, framework-agnostic. Claims 81.95% accuracy using only 4.97% of full-context tokens. Applies to Path 2 and Path 4.

**M10: Connector-based external memory ingestion (Supermemory)**
Connectors for Google Drive, Gmail, Notion, OneDrive, GitHub pull external data into the memory layer automatically. Memory isn't just conversation -- it includes the user's entire digital context. Applies to Path 1 and Path 6.

**M11: Multi-modal memory (memvid)**
Text, images (via CLIP), audio (via Whisper) all stored and retrievable in the same memory system. Applies to Path 3 and Path 6.

---

## Summary: 20 Candidate Improvements

| ID | Improvement | Paths Affected | Source |
|---|---|---|---|
| C1 | Per-group memory isolation | 4, 6 | NanoClaw |
| C2 | Autonomy levels for memory writes | 2, 5 | ZeroClaw |
| C3 | Filesystem inter-agent sharing | 6 | ClawTeam |
| C4 | Edge/distributed memory storage | 6 | Moltworker |
| C5 | Minimal single-process memory | 6 | Nanobot |
| F1 | Procedural skill extraction from usage | 2, 5 | Hermes |
| F2 | Parallel proactive memory bot | 2, 3 | CoPaw/memU |
| F3 | Governance gates on memory writes | 2, 5 | Edict |
| F4 | Multi-framework session adapter | 1 | AgentScope Runtime |
| F5 | RL-optimized retrieval routing | 3, 5 | Ruflo |
| F6 | WASM deterministic shortcuts | 3 | Ruflo |
| F7 | Model finetuning integration | 5 | AgentScope |
| F8 | Document ingestion into RAG | 3, 6 | elizaOS |
| F9 | Hierarchy-based memory access control | 4 | Agency Swarm |
| M1 | Pre-reasoning compaction hook | 1, 4 | ReMe |
| M4 | Auto fact extraction + contradiction resolution | 2 | mem0/Supermemory |
| M6 | Filesystem-hierarchy retrieval (L0/L1/L2) | 3, 4 | OpenViking |
| M7 | Single-file portable memory | 6 | memvid |
| M8 | Proactive memory monitoring | 2, 3 | memU |
| M9 | Typed memory categories (7 types) | 2, 4 | Memori |
