# mem0: Usage and Configuration

Mem0 provides dedicated SDKs natively in Python and TypeScript, as well as a fully unified CLI for terminal-based management.

## Installation and Setup
### Python
```bash
pip install mem0ai
```

### TypeScript
```bash
npm install mem0ai
```

## Configuration
Mem0 configuration is instantiated either via environment variables (`MEM0_API_KEY`, `MEM0_USER_ID`) or via configuration objects passed to clients.

For the Open Source (Self-Hosted) variant:
```python
from mem0 import Memory
from mem0.configs.base import MemoryConfig

config = MemoryConfig(
    vector_store={"provider": "qdrant", "config": {"collection_name": "my_memories", "host": "localhost", "port": 6333}},
    graph_store={"provider": "memgraph", "config": {"host": "localhost", "port": 7687}}
)
memory = Memory(config)
```

## Data Flow & Core Operations
The API exposes standard CRUD functionality that naturally maps to context flows:

1. **Adding Memory**:
   `memory.add("User prefers dark mode and uses vim bindings", user_id="alice")`
   This automatically extracts facts, handles conflicts, and inserts nodes into graph and vector stores.

2. **Searching Memory**:
   `relevant_memories = memory.search("editor preferences", user_id="alice", limit=3)`
   Returns ranked results matching the query.

3. **Updating Memory**:
   If the user states a new preference that overrides an old one, Mem0's LLM logic detects the contradiction. Alternatively, explicit updates:
   `memory.update(memory_id="abc-123", content="User uses emacs now")`

4. **Deleting Memory**:
   Supports cascading deletes by scopes via CLI or code:
   `memory.delete(user_id="alice")` (clears all memories for the entity).

## Built-in Integrations
Mem0 acts as the underlying memory backend engine for orchestration frameworks and RAG layers. For example, in **Embedchain**, Memchain utilizes `Mem0Config` to proxy its `ChatHistory` persistence directly to mem0 storage.
