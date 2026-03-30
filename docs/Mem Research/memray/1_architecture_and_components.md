# memray: Architecture and Components

**Important Distinction**: Unlike the other projects in this research batch which focus on Semantic/Cognitive context storage for AI (RAG, long-term memory databases), `memray` is a **RAM/Process Memory profiler for Python applications**. Developed by Bloomberg, its architectural goal is tracking `malloc`, `free`, and Python internal heap allocations instead of conversational facts.

## Architecture
Memray is implemented as a highly optimized C/C++ extension (`_memray.pyx`) wrapping Python's core dynamic allocation hooks.

- **Allocation Record**: The core data structure, tracking the specific byte size, thread ID, and exact Python C-level/Python-level call stack that requested memory.
- **Hooks & Trampolines**: It attaches to Python's memory allocators (`pymalloc` and standard OS `malloc`) to seamlessly record events.
- **Reporters**: Once tracing finishes, the stored binary format is parsed by several rendering systems:
  - `flamegraph`
  - `table`
  - `tree`
  - `summary`
  - `stats`
