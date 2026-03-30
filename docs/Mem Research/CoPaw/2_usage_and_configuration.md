# Usage and Configuration: CoPaw

## Setup and Configuration
Memory capability relies on configuration passed via variables or `agent.json`. By default, CoPaw delegates embedding selection and vector DB via fallback configurations.

```json
// agent.json 
"running": {
  "embedding_config": {
    "backend": "openai",
    "dimensions": 1024,
    "enable_cache": true,
    "max_cache_size": 2000
  },
  "memory_summary": {
    "memory_summary_enabled": true,
    "force_memory_search": false,
    "rebuild_memory_index_on_start": false
  }
}
```

Environment Variable Fallbacks:
- `EMBEDDING_API_KEY`, `EMBEDDING_BASE_URL`, `EMBEDDING_MODEL_NAME`.
- `FTS_ENABLED` (default: `true`) to toggle BM25 keywords.
- `MEMORY_STORE_BACKEND`: Determines the native database engine. Can be `auto` (detects OS and sets `local` for Windows, `chroma` for Linux/macOS, or explicit `sqlite`).

## Memory File Structures
Agents directly query paths:
- **`{working_dir}/MEMORY.md`**: Persists core project constraints (e.g., "Project uses Python 3.12, strict PEP8").
- **`{working_dir}/memory/YYYY-MM-DD.md`**: Acts as a rolling daily log to trace sprint progress or ephemeral debugging sessions.

## Practical Agent Examples
According to CoPaw's implementation logic, two distinct approaches are utilized for context recall:
1. **Direct Read**: Known contexts are summoned via file IO. "Read memory/2025-02-13.md". 
2. **Hybrid Search**: Ambiguous facts trigger `memory_search(query: str, max_results: int)`. Example intent: "Previous discussion about deployment process."

The Vector indexing dynamically scores memory using a blend ratio.
```
Final Score = (Vector Score * 0.7) + (BM25 Score * 0.3)
```
This multi-tool approach balances natural language ambiguity and strict log token matching (`ECONNREFUSED` exception tracebacks).
