# OpenViking: Architecture and Components

OpenViking is a sophisticated, multi-tenant long-term memory management system designed by Volcengine (ByteDance). It leverages an underlying file system (AGFS/VikingDB) rather than just an isolated vector database, treating context uniformly across resources, conversational memory, and skills.

## Architecture
The system differentiates data into three distinct context types:
- **Resource**: External data and documents.
- **Skill**: Executable actions and guidelines.
- **Memory**: Agent-driven, dynamically extracted information.

### Memory Storage and Hierarchy
OpenViking utilizes a specialized `viking://` URI namespace for internal addressing:
- `viking://user/{user_space}/memories/` - Stores user-scoped memories (Preferences, Profile, Entities, Events).
- `viking://agent/{agent_space}/memories/` - Stores agent-scoped memories (Cases, Patterns, Tool usage history).

The multi-tenant nature allows strict isolation using `agent_scope_mode` (either `"user+agent"` or just `"agent"` for shared knowledge across a single agent instance).

## Memory Extraction and Consolidation
1. **Background Extraction**: Rather than blocking the user response, session messages are committed and processed asynchronously via a `SemanticQueue`.
2. **6-Category Scheme**: LLMs classify and extract memories into six distinct structural buckets: Profile, Preferences, Entities, Events, Cases, and Patterns.
3. **Transactional Safety**: OpenViking implements extensive crash recovery. It uses a `RedoLog` so that if the process crashes during Phase 2 (the asynchronous extraction phase), it can trace back and safely re-extract the exact same memories idempotently upon startup.
