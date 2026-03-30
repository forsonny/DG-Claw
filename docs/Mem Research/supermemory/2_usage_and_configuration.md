# Supermemory: Usage and Configuration

Supermemory is designed to be highly plug-and-play, prioritizing standard abstractions and middleware injection over manual API calls (though the REST fallback exists).

## Installation
For Python applications using Microsoft Agent Framework:
```bash
pip install supermemory-agent-framework
```
For Node.js (Vercel AI SDK):
```bash
npm install @supermemory/tools
```

## Setup and Integration

### Agent Frameworks (Python)
Usage relies on middleware classes that intercept typical LLM chat events, transparently adding context constraints:
```python
from supermemory_agent_framework import SupermemoryChatMiddleware, SupermemoryMiddlewareOptions

middleware = SupermemoryChatMiddleware(
    api_key="your-api-key",
    container_tag="user-123", # Defines scope
    options=SupermemoryMiddlewareOptions(add_memory="always") # Auto-ingestion
)
```

### Vercel AI SDK (TypeScript)
Integrates via standard tooling payloads passed directly into `.generateText()` overrides:
```typescript
import { withSupermemory } from '@supermemory/tools/ai-sdk'
import { anthropic } from '@ai-sdk/anthropic'

// Wraps the entire model connection
const modelWithMemory = withSupermemory(anthropic('claude-3-5-sonnet-20241022'), 'user123')
```

## Model Context Protocol (MCP)
Users can attach Supermemory to MCP-compliant agents (like Anthropic's Claude Desktop) directly via terminal configuration:
```bash
npx -y install-mcp@latest https://mcp.supermemory.ai/mcp --client claude --oauth=yes
```

## Deduplication and Overwrite Logic
When injecting context, `DeduplicatedMemories` mechanisms process "Static" profiles vs. "Dynamic" recent history vs. "Search Results", automatically ensuring that the injection window is not overloaded with identical sub-facts.
