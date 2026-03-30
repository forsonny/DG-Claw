# AgentScope Memory System

## Overview and Role
AgentScope provides a robust, multi-tiered memory architecture built into its framework to support agents with history, context, and external retrieval. Memory within AgentScope serves to compress context (via summary mechanisms), deduplicate messages, store structured agent interactions (working memory), and provide long-lasting factual persistence (long-term memory).

## Architecture Integration
AgentScope operates on a dual-layer memory paradigm natively embedded within `StateModule` components (like `AgentBase`).
1. **Working Memory**: A short-term, high-fidelity message store. Implementations inherit from `MemoryBase`.
2. **Long-Term Memory**: A time-series or semantic memory management system where agents voluntarily extract information. Inherits from `LongTermMemoryBase`.

By default, the agents interact via `add(memories, marks)` to store conversation snippets (`Msg` objects) arrays, and retrieve via `get_memory(mark, exclude_mark)`.

## Key Files, Modules, and Classes
- **`src/agentscope/memory/_working_memory/_in_memory_memory.py`**: Contains `InMemoryMemory`, an ephemeral store backing the interactions of agents within a session.
- **`MemoryBase` (`_working_memory/_base.py`)**: Abstract base class defining `add`, `delete`, `size`, `clear`, `get_memory`, and `update_messages_mark`. Automatically handles context compression by maintaining a `_compressed_summary`.
- **`LongTermMemoryBase` (`_long_term_memory/_long_term_memory_base.py`)**: Base class requiring `record_to_memory` and `retrieve_from_memory` which form tool configurations for the LLMs to use iteratively.
- **Working Memory Alternatives**: AgentScope supports Redis (`_redis_memory.py`) and Async SQLAlchemy (`_sqlalchemy_memory.py`) for durable / cross-process working memory.
- **Long-Term Implementations**: Integrates with external providers like Mem0 (`_mem0_long_term_memory.py`) and ReMe (`_reme/*.py`) to handle vector search, task long term memory, and personal long term memory.

## Data and Control Flow
1. **Instantiation**: An Agent receives a memory implementation at instantiation.
2. **Runtime Appends**: The agent framework automatically appends user input messages and tool outputs via `memory.add(msg)`. The base `Msg` object carries its own unique ID.
3. **Retrieval**: When polling the LLM to process a new step, the agent retrieves the active context via `memory.get_memory(...)`, often fetching a structured conversation `["user", "_compressed_summary"]` coupled with the recent unmarked context window.
4. **Marking**: Developers can apply filters to filter out specific components via "marks," allowing context pruning dynamically (`new_mark`, `old_mark`, `msg_ids`).
