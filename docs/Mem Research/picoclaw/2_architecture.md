# Memory Architecture
1. **Streaming Logic**: It avoids loading large structures into RAM. Instead, it utilizes `modernc.org/memory` and streams sessions via a `JSONLStore` backend.
2. **Chunking**: Data is chunked into 32KB units, keeping the peak RAM usage completely constant regardless of file or history size.
3. **Hot Reloads**: Persistent memory like `memory/MEMORY.md` updates dynamically via filesystem `mtime` trackers rather than caching entirely in memory during run loops.
