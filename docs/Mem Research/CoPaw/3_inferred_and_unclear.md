# Inferred and Unclear Mechanisms in CoPaw Memory

## 1. Directory Watching Concurrency
**Inferred Behavior:** A watcher asynchronously catches file alterations (`write_file`, `edit_file`) on `MEMORY.md` and rebuilds the vector index chunk by chunk.
**Unclear Extent:** If an agent heavily uses `edit_file` to repeatedly swap singular words inside a large document, does the entire document re-embed? Is there debouncing? Rapid tool actions might queue massive ingestion spikes into the backend embedding cluster.

## 2. ReMe Version Binding
**Inferred Behavior:** `ReMeLightMemoryManager` explicitly checks for `_EXPECTED_REME_VERSION = "0.3.1.6"` and logs warnings if missing. 
**Unclear Extent:** This hints at highly volatile API structures underneath CoPaw relating to memory management routines (`compat_memory`, `check_context`). The tight coupling implies `reme` might frequently introduce breaking protocol changes to the underlying file-chunking pipelines. Also, the reliance on a distinct, external local python package indicates that memory indexing is heavily abstracted from the core Agent loop.

## 3. Summary Compaction and Daily Logs
**Inferred Behavior:** If an agent's context exceeds limits, `compact_memory()` yields a string containing condensed instructions/facts. Also, day-by-day notes (`YYYY-MM-DD.md`) act as long logs.
**Unclear Aspects:** It's unclear how these interact continuously without growing infinitely. If the daily file is summarized into `compact_memory`, what cleans up the raw log? A large project operating for 300 days generates 300 markdown files. Hybrid search will eventually bloat, leading to hallucinated context unless older files are intelligently dropped/archived by the compaction system.
