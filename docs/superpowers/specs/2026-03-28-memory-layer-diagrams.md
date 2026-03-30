# DG-Claw Memory Layer -- Architecture Diagrams

Companion to `2026-03-28-memory-layer-design.md`. All diagrams in Mermaid format with edit links.

---

## Path 1 v2: Session Loading

[Edit in Mermaid](https://l.mermaid.ai/EMBZGc)

```mermaid
sequenceDiagram
    participant U as User
    participant CLI as DG-Claw CLI
    participant SM as Session Manager
    participant ML as Memory Layer
    participant US as User-Space Memory
    participant AS as Agent-Space Memory
    participant CTX as Context Assembler
    participant LLM as LLM Provider

    Note over U,LLM: PATH 1: SESSION LOADING (v2)

    U->>CLI: dg-claw start
    CLI->>SM: loadSession(userId, agentId, groupId)

    SM->>ML: loadMemory(userId, agentId, groupId)

    par Load User-Space (shared across agents)
        ML->>US: getProfile(userId)
        US-->>ML: name, timezone, language, preferences
        ML->>US: getGoals(userId)
        US-->>ML: active goals
    end

    par Load Agent-Space (private to this agent)
        ML->>AS: getCases(agentId)
        AS-->>ML: past problem-solution pairs
        ML->>AS: getPatterns(agentId)
        AS-->>ML: learned behavioral patterns
        ML->>AS: getToolMemory(agentId)
        AS-->>ML: tool success rates, param patterns
    end

    SM->>CTX: assembleContext(userMem, agentMem, history)

    Note over CTX: L0: Top-of-Mind summary injected always<br/>L1: Token-budgeted facts by salience<br/>L2: Hybrid BM25+vector on demand<br/>Hard budget: system prompt + L0 + L1 must fit

    CTX->>CTX: packByTokenBudget(maxTokens)
    CTX-->>SM: assembled context

    SM->>LLM: initStream(context)
    LLM-->>CLI: ready
    CLI-->>U: Session loaded
```

---

## Path 2 v2: Write Path (User Journey + Extraction)

[Edit in Mermaid](https://l.mermaid.ai/swULcP)

```mermaid
flowchart TB
    subgraph HOT ["HOT PATH (no blocking)"]
        UM[User Message]
        AG[Agent Response]
        EP[Append to Episodic Log]
        DQ[Debounce Queue]
    end

    subgraph EXTRACT ["ASYNC EXTRACTION (background)"]
        RL[RedoLog checkpoint]
        EX[LLM Fact Extractor]
        TR[Extract Entity:Slot:Value triples]
        CL[Classify: Profile / Preference /<br/>Entity / Event / Case /<br/>Pattern / Goal / Tool]
    end

    subgraph GATE ["WRITE GATE"]
        SL[Salience score above threshold?]
        PII[PII and injection scan]
        DD[Dedup: check existing triples]
        CR[Conflict resolution:<br/>new contradicts old?]
    end

    subgraph PERSIST ["PERSIST"]
        VC[Create version chain<br/>link new to old via parentId]
        WR[Atomic SQLite write]
        IX[Update BM25 + vector indexes]
        AL[Append to audit log]
    end

    subgraph SCOPE ["SCOPING"]
        US_W[User-Space: profile, prefs, goals]
        AS_W[Agent-Space: cases, patterns, tools]
    end

    UM --> AG
    AG --> EP
    EP --> DQ
    DQ -->|coalesced batch| RL
    RL --> EX
    EX --> TR
    TR --> CL

    CL --> SL
    SL -->|below threshold| AL
    SL -->|above threshold| PII
    PII -->|flagged| AL
    PII -->|clean| DD
    DD -->|duplicate| AL
    DD -->|new or updated| CR
    CR -->|no conflict| VC
    CR -->|conflict: latest wins| VC

    VC --> WR
    WR --> IX
    IX --> AL

    CL -->|profile/pref/goal| US_W
    CL -->|case/pattern/tool| AS_W
```

---

## Path 3 v2: Read Path (Tiered Retrieval)

[Edit in Mermaid](https://l.mermaid.ai/E4CBOA)

```mermaid
flowchart TB
    subgraph QUERY ["USER QUERY ARRIVES"]
        UQ[User message]
    end

    subgraph L0 ["L0: ALWAYS PRESENT"]
        TOM[Top-of-Mind summary]
        UP[User profile snapshot]
        AG[Active goals]
        L0B["Budget: max 500 tokens<br/>Updated on each compaction"]
    end

    subgraph L1 ["L1: TOKEN-BUDGETED INJECTION"]
        SC[Score all facts by:<br/>salience x recency x relevance]
        PK[Pack greedily until<br/>max_injection_tokens reached]
        RW[Rewrite facts to fit<br/>current conversation context]
        L1B["Budget: configurable<br/>default 2000 tokens"]
    end

    subgraph L2 ["L2: ON-DEMAND HYBRID SEARCH"]
        QE[Embed query]
        VS[Vector similarity search<br/>70% weight]
        BM[BM25 keyword search<br/>30% weight]
        FU[Fuse and rerank results]
        FI[Filter by scope:<br/>userId + agentId + groupId]
        L2B["Triggered only when<br/>L1 facts insufficient"]
    end

    subgraph ASSEMBLY ["CONTEXT ASSEMBLY"]
        CTX[Final context window]
        SYS[System prompt]
        HIS[Recent history verbatim]
        TOL[Tool definitions]
    end

    UQ --> L0
    UQ --> L1
    L0 --> CTX

    UQ --> SC
    SC --> PK
    PK --> RW
    RW --> CTX

    UQ --> QE
    QE --> VS
    QE --> BM
    VS --> FU
    BM --> FU
    FU --> FI
    FI --> RW

    SYS --> CTX
    HIS --> CTX
    TOL --> CTX

    CTX -->|fits token budget| LLM[Send to LLM]
    CTX -->|exceeds budget| CMP[Trigger compaction]
    CMP --> CTX
```

---

## Path 4 v2: Memory Tiers with Salience Decay

[Edit in Mermaid](https://l.mermaid.ai/riJ0zE) (v1 -- conceptually unchanged, salience added)

```mermaid
flowchart LR
    subgraph TIER1 ["TIER 1: Working Memory"]
        direction TB
        W1[Current context window]
        W2[Last ~20 messages verbatim]
        W3[Active tool results]
        W4[L0 Top-of-Mind + L1 facts]
        W5["Lifetime: THIS TURN"]
        W6["Storage: RAM only"]
        W7["Budget: token-limited"]
    end

    subgraph TIER2 ["TIER 2: Session Memory"]
        direction TB
        S1[Full conversation JSONL]
        S2[Compacted summaries .md]
        S3[Session metadata .json]
        S4[Branching tree state]
        S5["Lifetime: THIS SESSION"]
        S6["Storage: JSONL on disk"]
        S7["Size: unbounded"]
    end

    subgraph TIER3 ["TIER 3: Long-Term Memory"]
        direction TB
        L1a[Entity:Slot:Value triples]
        L2a[8 typed categories]
        L3a[Version chains via parentId]
        L4a[Salience scores with decay]
        L5["Lifetime: PERMANENT"]
        L6["Storage: SQLite + FTS5 + vectors"]
        L7["Scope: userId x agentId x groupId"]
    end

    subgraph FLOWS ["DATA FLOWS"]
        direction TB
        F1["COMPACTION: Working --> Session<br/>ContextChecker triggers Compactor<br/>Structured summary archived"]
        F2["EXTRACTION: Session --> Long-Term<br/>Async LLM extracts triples<br/>Write gate filters before persist"]
        F3["RETRIEVAL: Long-Term --> Working<br/>L0 always, L1 by salience budget<br/>L2 hybrid search on demand"]
        F4["DECAY: salience *= 0.95 per cycle<br/>Reinforcement on access<br/>Archive below threshold 0.05"]
    end

    TIER1 -->|compaction| TIER2
    TIER2 -->|extraction| TIER3
    TIER3 -->|retrieval| TIER1
    TIER3 -->|decay| TIER3
```

---

## Path 5 v2: Auto-Learning Ratchet Loop

[Edit in Mermaid](https://l.mermaid.ai/bB5dfd) (v1 -- conceptually unchanged)

```mermaid
flowchart TB
    subgraph RATCHET ["THE RATCHET LOOP"]
        direction TB
        R1[Select target to optimize]
        R2[Read current version from<br/>Procedural Store]
        R3[Agent proposes mutation]
        R4[Git commit mutation]
        R5[Run eval harness]
        R6{Score improved?}
        R7[KEEP: advance branch]
        R8[DISCARD: git reset]
        R9[Log result to experiment log]
    end

    subgraph TARGETS ["WHAT CAN BE OPTIMIZED"]
        T1[System prompts]
        T2[Skill definitions]
        T3[Tool configurations]
        T4[Retrieval parameters]
        T5[Compaction strategies]
    end

    subgraph EVAL ["EVALUATION HARNESS - immutable"]
        E1[Test cases: known good inputs and outputs]
        E2[LLM-as-judge: grade quality 0 to 100]
        E3[Binary criteria: pass or fail checks]
        E4[Composite score: weighted average]
    end

    subgraph MEMORY_LINK ["MEMORY INTEGRATION"]
        PS[Procedural Store: Cases + Patterns]
        EL[Experiment Log: SQLite table]
        TM[Tool Memory: success rates]
    end

    T1 --> R1
    T2 --> R1
    T3 --> R1
    T4 --> R1
    T5 --> R1

    R1 --> R2
    R2 --> R3
    R3 --> R4
    R4 --> R5
    R5 --> R6
    R6 -->|yes| R7
    R6 -->|no| R8
    R7 --> R9
    R8 --> R9
    R9 -->|loop| R1

    R5 --> E1
    R5 --> E2
    R5 --> E3
    E1 --> E4
    E2 --> E4
    E3 --> E4
    E4 --> R6

    R7 -->|update best version| PS
    R9 -->|all attempts logged| EL
    R7 -->|tool perf updated| TM

    PS -->|current best| R2
```

---

## Path 6 v2: Files on Disk

[Edit in Mermaid](https://l.mermaid.ai/v1S64M) (v1 -- updated with per-group isolation)

```mermaid
flowchart TB
    subgraph VPS ["VPS FILESYSTEM: ~/.dg-claw/"]
        subgraph MEMORY ["memory/{groupId}/"]
            DB["memory.sqlite<br/>-- memories: entity:slot:value triples<br/>-- memories_fts: BM25 index<br/>-- audit_log: every read/write<br/>-- experiments: ratchet loop results<br/>-- top_of_mind: L0 cache"]
        end

        subgraph SESSIONS ["sessions/"]
            SJ1["{sessionId}.jsonl<br/>Raw conversation (append-only)"]
            SJ2["{sessionId}.summary.md<br/>Compacted summaries"]
            SJ3["{sessionId}.meta.json<br/>Branch tree, model, timestamps"]
        end

        subgraph SKILLS ["skills/ (git-tracked)"]
            SK1["Skill definition .md files<br/>Mutated by ratchet loop<br/>Git commit = keep<br/>Git reset = discard"]
        end

        subgraph EVAL ["eval/ (git-tracked)"]
            EV1["harness.js -- immutable runner"]
            EV2["test-cases/ -- input-output pairs"]
            EV3["results.tsv -- all experiments"]
        end

        subgraph CONFIG ["config/"]
            CF1["settings.json"]
            CF2["providers.json"]
        end
    end

    subgraph ISOLATION ["ISOLATION MODEL"]
        I1["Per-group: separate memory.sqlite"]
        I2["Per-agent: scope columns in SQLite"]
        I3["Container: mount group dir as volume"]
        I4["Autonomy: ReadOnly / Supervised / Full"]
    end

    subgraph GIT ["GIT TRACKING"]
        G1["skills/ + eval/ = tracked"]
        G2["memory/ + sessions/ = NOT tracked"]
        G3["config/ = user choice"]
    end

    MEMORY --> I1
    MEMORY --> I2
    MEMORY --> I3
    SKILLS --> G1
    EVAL --> G1
    MEMORY --> G2
    SESSIONS --> G2
```

---

## Original v1 Diagrams (for reference)

### Path 1 v1: Session Loading
[Edit](https://l.mermaid.ai/vHOcIk)

### Path 2 v1: User Journey
[Edit](https://l.mermaid.ai/LHsS9r)

### Path 3 v1: Model Interaction
[Edit](https://l.mermaid.ai/SxfYJw)

### Path 4 v1: Memory Tiers
[Edit](https://l.mermaid.ai/riJ0zE)

### Path 5 v1: Auto-Learning Ratchet
[Edit](https://l.mermaid.ai/bB5dfd)

### Path 6 v1: Files on Disk
[Edit](https://l.mermaid.ai/v1S64M)
