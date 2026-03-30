# Supermemory: Inferred Patterns and Unclear Areas

## Inferred Patterns
1. **Aggressive Middleware Hooking**:
   Supermemory shifts the burden of memory maintenance away from explicit "insert/retrieve" developer logic. Instead, frameworks like `@supermemory/tools/ai-sdk` and `SupermemoryChatMiddleware` literally wrap the upstream model API calls. They sniff outgoing messages to extract memories behind the scenes and inject relevant memories as system prompts before the request leaves the client.

2. **Temporal Decay and Mutation Graphics**:
   The deliberate inclusion of a `packages/memory-graph` visualizer with `parentMemoryId` chains signals that the backend doesn't just overwrite rows in a database; it builds an immutable append-only ledger of memory changes. If a user moves from "NYC" to "London", it graphs the transition rather than destroying the "NYC" record.

3. **High Consumer/Browser Focus**:
   Unlike many enterprise-only frameworks, the explicit browser plugins, Twitter bookmark importers, and Raycast implementations indicate a focus on "personal AI assistants" built locally by users for capturing multi-modal context during continuous desktop usage.

## Unclear Areas / Blind Spots
- **API Engine Specifics**: Because most SDK calls route back to `https://api.supermemory.ai/v3`, the exact open-source backend implementation details (e.g., what underlying vector DB or LLM powers the managed extraction pipelines) are abstracted completely from the main client repository.
- **Privacy Constraints on Middleware**: If `add_memory="always"` is passed, it is unclear if there are robust client-side heuristics identifying what should NOT be sent to Supermemory (e.g., PII masking, password filters) before the data hits the Cloud REST API.
