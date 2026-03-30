# Memory Analysis Report: Agency Swarm

## 1. Overview
The `agency-swarm` repository implements a generic message-passing and conversation memory system for collaborative AI agents. Memory is organized globally using a flat data store (`MessageStore`) instead of deep, segmented thread trees, allowing more efficient lookup of conversations between arbitrary agent pairs.

## 2. Architecture & Key Modules

### `MessageStore` (Flat Message Architecture)
Located in `agency_swarm/utils/thread.py`, the `MessageStore` acts as a flat list storing all `TResponseInputItem` messages across all agents.
- Each message embeds metadata identifying the recipient (`agent`) and the sender (`callerAgent`).
- **Semantic Ordering:** By preserving insertion order instead of segmenting by threads, the flow across multi-agent exchanges remains globally sound.

### `ThreadManager`
The `ThreadManager` coordinates access to the `MessageStore` and controls persistence:
- **Filtering Retrieval:** Provides methods like `get_conversation_between(agent1, agent2)` and `get_conversation_history(...)` to dynamically view subsets of the flat message history.
- **Persistence Callbacks:** Uses `ThreadLoadCallback` and `ThreadSaveCallback`. To save memory to disk or a database, users configure these callbacks when initializing `ThreadManager`.

### Agent-to-Agent Interaction
Agents can query the `ThreadManager` to recall past interactions natively. Testing (e.g., `test_agent_to_agent_persistence.py`) explicitly validates that agents can instruct another "Memory Agent" to remember and recall secrets across conversation turns.

## 3. Data Flow
1. An agent sends a message. The data includes `agent` and `callerAgent`.
2. `ThreadManager` catches the message and uses `_store.add_message(message)`.
3. If a save callback is registered, `_save_messages()` is executed.
4. When context is needed, `get_conversation_history()` filters the flat history and creates the LLM context sliding window.

## 4. Strengths & Takeaways
- **Simplicity:** The flat array model is easier to parse and serialize compared to complex tree structures.
- **Pluggability:** Persistence is intentionally decoupled using pure functions (callbacks), meaning consumers can store history in JSON, SQLite, or a remote document DB seamlessly.
