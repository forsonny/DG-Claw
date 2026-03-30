# Hermes Agent Memory System

## Overview and Role
Hermes Agent uses a bounded, curated persistent memory system designed to persist across sessions without overwhelming the LLM context window. Memory in Hermes serves to remember user preferences, environmental context, project structures, and learned knowledge. It exists across two primary scopes: the agent's "personal notes" (`memory`) and the "user profile" (`user`).

## Architecture Integration
Unlike dynamic vector databases, Hermes Agent injects memories directly into the **system prompt** via a "frozen snapshot" at the start of each session. This avoids polluting the LLM suffix window and keeps the prefix cache stable for cost efficiency and speed. The agent actively manages this memory through a unified `memory` tool that supports actions like `add`, `replace`, and `remove`. There is no `read` operation, as the LLM already receives its entire memory bank at the top of the prompt.

## Key Files, Modules, and Classes
- **`tools/memory_tool.py`**: The central implementation of the persistent memory logic. 
- **`MemoryStore` (Class)**: The core class representing the memory. It holds the active `memory_entries` and `user_entries` arrays, as well as the `_system_prompt_snapshot`.
  - `load_from_disk()`: Reads the underlying file contents and populates the system prompt snapshot.
  - `add(target, content)`: Safely appends knowledge to a specific target via an exclusive file lock.
  - `replace(target, old_text, new_content)`: Uses substring matching (`old_text`) to replace a memory entry.
  - `remove(target, old_text)`: Removes a memory entry safely.
- **`memory_tool` (Function)**: The dispatcher function mapped to the LLM's `memory` tool interface.
- **`website/docs/user-guide/features/memory.md`**: Comprehensive user documentation outlining how the memory functions and best practices for entries.

## Data and Control Flow
1. **Load Time**: `MemoryStore.load_from_disk()` fires. It parses `MEMORY.md` and `USER.md` (located in `~/.hermes/memories/`). The parsed entries are turned into a string block (the snapshot) and sent to the LLM system prompt.
2. **Action execution**: If the agent notices a user preference, it invokes the `memory` tool with `action="add"` and `target="user"`.
3. **Scan**: The memory tool scans the new entry content for prompt injection (e.g., hidden Unicode chars, "ignore previous instructions") or secrets exfiltration (e.g., `curl $SECRET`).
4. **Acquire Lock**: The app acquires an exclusive file lock (`MEMORY.md.lock`).
5. **Commit**: The memory list is mutated, then atomically saved to disk using a `.tmp` file mechanism, maintaining durability.
6. **Limit enforcement**: Limits (2,200 chars for `memory`, 1,375 chars for `user`) are statically checked, throwing an error back to the agent if exceeded.
