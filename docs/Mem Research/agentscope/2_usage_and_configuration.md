# Usage and Configuration: AgentScope

## Setup and Configuration
AgentScope supports highly modular memory configurations via standard Python dependency injection patterns combined with object initialization properties.

For Working Memory:
```python
memory = InMemoryMemory() # Ephemeral list
# Or
memory = RedisMemory(host="localhost", port=6379, db=0)
```

For Long-Term Memory (Mem0 / ReMe):
```python
ltm = Mem0LongTermMemory(user_id="user_123")
agent = ReactAgent(memory=memory, long_term_memory=ltm)
```

## Dependencies
External memory backends demand their respective libraries:
- `mem0-ai` (for Mem0 integration)
- `qdrant-client` / `redis` / `sqlalchemy` (depending on the memory driver implemented)
- `agentscope` core message structures (`Msg` dataclass representation).

## Practical Agent Examples
**Working Memory Retrieval:**
The framework implicitly supports context summarization constraints. Memory includes a string attribute `_compressed_summary`.
```python
async def get_memory(self, ...) -> list[Msg]:
    # Returns [Msg("user", self._compressed_summary), *rest_of_messages]
```
This forces the compressed summary to act as the primary head node of the LLM context, effectively achieving context window compaction.

**Updating Marks:**
```python
# To remove all messages marked 'temporary' and mark current context as 'archived'
await memory.update_messages_mark(new_mark="archived", old_mark="temporary")
```
This explicit marking configuration gives developers robust granular control over context windows without deleting underlying conversation telemetry.
