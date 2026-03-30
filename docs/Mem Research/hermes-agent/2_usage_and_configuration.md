# Usage and Configuration: Hermes Agent

## Setup and Configuration
Configuration for the memory tool is maintained locally via `~/.hermes/config.yaml`. The memory module respects the following keys:
```yaml
memory:
  memory_enabled: true
  user_profile_enabled: true
  memory_char_limit: 2200   # roughly 800 tokens
  user_char_limit: 1375     # roughly 500 tokens
```
No external dependencies (such as PostgreSQL or Chroma) are required for the base functionality, as it strictly manipulates local markdown files. 

For continuous cross-session AI user-knowledge graph modeling, Hermes integrates optionally with **Honcho** (`honcho_integration/` directory), which is toggled via `hermes honcho setup` but resides alongside standard `MEMORY.md`.

## Memory Schema Example
The agent is provided with an explicit schema detailing how to use the memories:
```json
{
  "name": "memory",
  "description": "Save durable information to persistent memory that survives across sessions...",
  "parameters": {
    "type": "object",
    "properties": {
      "action": { "type": "string", "enum": ["add", "replace", "remove"] },
      "target": { "type": "string", "enum": ["memory", "user"] },
      "content": { "type": "string" },
      "old_text": { "type": "string" }
    }
  }
}
```

## Practical Agent Examples
According to documentation (`memory.md`), best practices include compact, information-dense strings.
**Good usage:**
- "Project ~/code/api uses Go 1.22, sqlc for DB queries, chi router."
**Bad usage:**
- "User has a project." (Too vague)
- "On January 5th... the user asked me to..." (Too verbose)

When memory fills up, the agent receives an automated `error` explicitly stating: `"Memory at 2,100/2,200 chars... Replace or remove existing entries first."` This cleverly pushes the LLM to autonomously trigger a `replace` call to condense existing facts.
