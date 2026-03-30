# memray: Inferred Patterns and Unclear Areas

## Inferred Patterns
1. **Low-Level Native Focus**: `memray` actively filters out uninteresting frames (such as `importlib` internals) to make the reports readable. It includes sophisticated handlers to discern C/CPython internal bindings (`is_cpython_internal`, `is_frame_from_import_system`).
2. **Temporal Flamegraphs**: Beyond static flamegraphs, the Javascript payloads (`temporal_flamegraph.js`) indicate that Memray calculates the "High Water Mark" of RAM usage and permits the user to scrub back and forth on a timeline axis.

## Unclear Areas / Blind Spots
- **Irrelevance to AI Cognitive Memory**: Since the overarching goal of this research batch was evaluating conversational LLM long-term semantic memory patterns, Memray mathematically tracks resident `bytes` allocated by object buffers rather than analyzing semantic intents or deduplication of string facts. It represents a completely orthogonal use of the keyword "Memory".
