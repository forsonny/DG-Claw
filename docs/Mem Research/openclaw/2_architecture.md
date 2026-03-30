# Memory Architecture
The memory architecture relies on a plugin slot system (`plugins.slots.memory`).
1. **Backends**: Includes `memory-core`, `memory-lancedb`, and `memory/builtin sqlite` (with FTS5 BM25 ordering).
2. **Tools**: Agents use standard tools like `memory_search` and `memory_get`.
3. **Embeddings**: Native support for embeddings, including Gemini embeddings.
4. **Persistence**: Concept of "memory flush" (`memoryFlushWritePath`) periodically writes durable notes structurally to `memory/YYYY-MM-DD.md` or a global `MEMORY.md`.
