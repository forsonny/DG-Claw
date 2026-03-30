# memvid: Architecture and Components

Memvid proposes a radical departure from traditional multi-service databases (like Postgres + Qdrant) by implementing AI Memory as a **single-file format (`.mv2`)**, taking heavy architectural inspiration from video encoding algorithms.

## Single-File Architecture (`.mv2`)
Written in Rust, Memvid relies on zero sidecar files. An `.mv2` artifact contains:
- Primary file headers and config.
- Append-only Write-Ahead Logs (WAL) stored in sequences of "Smart Frames".
- Built-in search indices (using Tantivy).
- Embedded metadata.

## Core Schema: Memory Cards and Triplets
Memvid extracts conversational context using a Subject-Predicate-Object triplet extraction approach. These are parsed into `MemoryCard` constructs containing:
- `id` (MemoryCardId)
- `kind`: Strictly typed into 6 buckets (`Fact`, `Profile`, `Preference`, `Event`, `Relationship`, `Goal`).
- Content values and `VersionRelation` arrays indicating if a memory card supersedes an older fact.

## Search and Extensibility
- Implements `search_adaptive()` switching directly between semantic fast search and deep contextual evaluation.
- Multi-modal support baked-in: The engine directly interfaces with CLIP (e.g., `mobileclip-s2`) for visual frame indexing and Whisper for audio.
