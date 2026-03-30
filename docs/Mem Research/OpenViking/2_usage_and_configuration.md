# OpenViking: Usage and Configuration

OpenViking heavily integrates with `OpenClaw` and other agent frameworks, relying on configuration files (`ov.conf`) rather than strictly manual execution.

## Configuration Engine
The primary runtime settings are heavily focused on limits (`memory_window`), backend selection (`backend: "local|s3|memory"`), and API gateways:
```json
{
  "memory": {
    "agent_scope_mode": "user+agent",
    "backend": "local",
    "memory_window": 50
  }
}
```

## Agent Tools and SDK Usage
For agents engaging in active remembering (Agentic Memory Query), OpenViking exposes native functionalities directly to the LLM:
- Waitless commits: `openviking_memory_commit(session_id: str, messages: list) -> str`
- Semantic Retrieval: `memory_recall_auto({"query":"..."})`
- Searching tool: `ov remember --content "what to remember" [--type <type>] [--priority N]`

## CLI Operations
OpenViking maintains a full operational CLI mimicking standard Unix operations:
- `ov add-memory` / `ov add-resource`
- Search interfaces capable of filtering out low-quality extraction abstracts via a dedicated score threshold.
