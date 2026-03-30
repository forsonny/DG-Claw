# memvid: Inferred Patterns and Unclear Areas

## Inferred Patterns
1. **Performance Obsession**: The choice of a single-file format with a custom WAL and Tantivy indices points to a goal of extreme latency reduction and high portability—eliminating network hops required by typical vector databases. 
2. **Video Metaphor**: The architecture explicitly mentions "video encoding" and "Smart Frames". The system handles blobs of multi-modal data (pdfs, text, audio) as continuous "Frames" appended to the end of the file, later relying on the triplet extractor (`Triplets Extractor`) to generate interconnected metadata over those raw frames.
3. **Control Plane Vendor Lock-in**: The presence of `MemoryBinding` and payload `SignedTicket` validations indicates that while `.mv2` is a local format, write-access might be strictly gated behind a proprietary remote issuer service (e.g., "memvid-dashboard").

## Unclear Areas / Blind Spots
- **Concurrency & Compaction**: Because `.mv2` is a single file format powered by a WAL, it resembles SQLite architecture. The actual mechanics of "garbage collection" (removing superseded MemoryCards from the physical file rather than just marking them invalid) to prevent unchecked file bloat are not immediately evident from the standard `put` API. 
- **LLM Triplet Execution**: It's unclear whether the `triplet/extractor.rs` relies on internal small-model heuristics or necessitates network calls to large LLM providers (e.g. OpenAI) on every document ingestion.
