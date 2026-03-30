# mem0: Architecture and Components

Mem0 (pronounced "mem-zero") is a powerful dual-storage memory layer designed for AI agents and applications, moving past stateless RAG by maintaining stateful interactions, personal preferences, and complex relationships over time.

## Architecture
Mem0 operates as a hybrid storage engine utilizing both:
1. **Vector-Based Storage**: For semantic search, enabling robust recall of specific facts, themes, and episodic memories.
2. **Graph-Based Storage**: (e.g., Memgraph, Neo4j, Apache AGE, Kuzu) For mapping relationships between distinct entities and capturing advanced conceptual linkages.

The system is deployed in two forms:
- **Managed Platform**: Accessed via `MemoryClient` REST API wrapper.
- **Self-Hosted (OSS)**: Accessed via the local `Memory` class, allowing raw connections to graph DBs and vector stores.

## Memory Types
Mem0 taxonomizes memory into four distinct functions:
- **Working Memory**: Short-term session awareness (ephemeral context).
- **Factual Memory**: Structured knowledge bases.
- **Episodic Memory**: Sequential, historical conversations and experiences.
- **Semantic Memory**: Generalized real-world knowledge.

## Core Entities and Identifiers
Mem0 specifically scopes memories using unique identifiers to prevent cross-contamination:
- `user_id`: Ties memory to a specific human user.
- `agent_id`: Ties memory to an AI agent's experiences.
- `app_id` / `project_id`: Segments memory across different tenant applications.
- `session_id`: Tracks ephemeral conversation rounds.

## Features
- **Temporal Management**: Memories support timestamps and explicit "Expiration Dates" for auto-cleanup.
- **Exporting and Importing**: Rich API routes for bulk importing JSON data and exporting existing memories via Pydantic schemas.
- **V2 Filters**: Supports advanced boolean querying (AND/OR logic) across memory metadata.
