# memU Memory Context

## Files with 'mem' in name:
assets\memorize.png
assets\memUbot.png
examples\example_1_conversation_memory.py
examples\example_3_multimodal_memory.py
examples\example_4_openrouter_memory.py
examples\proactive\memory\local\memorize.py
examples\proactive\memory\platform\memorize.py
src\memu\app\memorize.py
src\memu\database\inmemory\repositories\memory_category_repo.py
src\memu\database\inmemory\repositories\memory_item_repo.py
src\memu\database\postgres\repositories\memory_category_repo.py
src\memu\database\postgres\repositories\memory_item_repo.py
src\memu\database\repositories\memory_category.py
src\memu\database\repositories\memory_item.py
src\memu\database\sqlite\repositories\memory_category_repo.py
src\memu\database\sqlite\repositories\memory_item_repo.py
tests\test_inmemory.py
tests\test_tool_memory.py


## .\AGENTS.md
.\AGENTS.md:22 - - Config models/defaults: `src/memu/app/settings.py`
.\AGENTS.md:25 - - In-memory: `src/memu/database/inmemory/*`
.\AGENTS.md:46 - 3. Wire behavior through `MemoryService` pipelines and step config (LLM profiles/capabilities).

## .\CHANGELOG.md
.\CHANGELOG.md:15 - * add non-propagate option for memory patch ([#386](https://github.com/NevaMind-AI/memU/issues/386)) ([3b67458](https://github.com/NevaMind-AI/memU/commit/3b67458c6325b4fcdaccbc34f6e0fea491b7ba96))
.\CHANGELOG.md:36 - * Add inline memory item references in category summaries ([#202](https://github.com/NevaMind-AI/memU/issues/202)) ([#205](https://github.com/NevaMind-AI/memU/issues/205)) ([5213571](https://github.com/NevaMind-AI/memU/commit/5213571b218d85784e0771f7a721eafd7da1c1ff))
.\CHANGELOG.md:37 - * Add salience-aware memory with reinforcement tracking ([#186](https://github.com/NevaMind-AI/memU/issues/186)) ([#206](https://github.com/NevaMind-AI/memU/issues/206)) ([2bdbcce](https://github.com/NevaMind-AI/memU/commit/2bdbcce1a87ae1017d5930901fb0ae8d2924dcee))
.\CHANGELOG.md:38 - * Add Tool Memory type with specialized metadata and statistics ([#247](https://github.com/NevaMind-AI/memU/issues/247)) ([4e8a035](https://github.com/NevaMind-AI/memU/commit/4e8a03578641afd0e07f9700629dff8d91d2b3fb))
.\CHANGELOG.md:44 - * remove unused type: ignore comment and add lazyllm mypy override ([#275](https://github.com/NevaMind-AI/memU/issues/275)) ([0e490f7](https://github.com/NevaMind-AI/memU/commit/0e490f7333feecffaef0901cccb1c9a5dbb7bafb))
.\CHANGELOG.md:62 - * add happened at and extra fields to memory item ([#262](https://github.com/NevaMind-AI/memU/issues/262)) ([77938e9](https://github.com/NevaMind-AI/memU/commit/77938e9c282e1c0eda11088675c35975d85c4ff0))
.\CHANGELOG.md:73 - * memory type & proactive example ([#272](https://github.com/NevaMind-AI/memU/issues/272)) ([710f14d](https://github.com/NevaMind-AI/memU/commit/710f14d4b171c5cde609a9dc2caf454681ab94b3))
.\CHANGELOG.md:90 - * clear memory ([#239](https://github.com/NevaMind-AI/memU/issues/239)) ([7da36da](https://github.com/NevaMind-AI/memU/commit/7da36da57d7013df213e537b1f238f5a526e69d9))
.\CHANGELOG.md:101 - * correct typo in PromptBlock class label attribute ([#231](https://github.com/NevaMind-AI/memU/issues/231)) ([d69053c](https://github.com/NevaMind-AI/memU/commit/d69053cece3467dd7c8cbf0634e72447649095f7))
.\CHANGELOG.md:117 - * custom memory type default prompt ([#169](https://github.com/NevaMind-AI/memU/issues/169)) ([5a0032f](https://github.com/NevaMind-AI/memU/commit/5a0032fc0f29229524d0356d454a3f5991e04f7b))
.\CHANGELOG.md:195 - * config & resource caption ([#142](https://github.com/NevaMind-AI/memU/issues/142)) ([ea4be13](https://github.com/NevaMind-AI/memU/commit/ea4be1396c0f55b02d706819f6c2b4d5c6e68be8))

## .\CONTRIBUTING.md
.\CONTRIBUTING.md:142 - feat(memory): add semantic search functionality
.\CONTRIBUTING.md:145 - test(agent): add unit tests for memory retrieval
.\CONTRIBUTING.md:146 - refactor(core): restructure memory storage logic

## .\README.md
.\README.md:55 - - **Navigate memories** like browsing directories—drill down from broad categories to specific facts
.\README.md:253 - Experience proactive memory instantly:
.\README.md:287 - **Test Continuous Learning** (in-memory):
.\README.md:311 - Both examples demonstrate **proactive memory workflows**:
.\README.md:313 - 2. **Auto-Extraction**: Immediate memory creation
.\README.md:314 - 3. **Proactive Retrieval**: Context-aware memory surfacing
.\README.md:324 - from memu import MemUService
.\README.md:354 - from memu import MemoryService
.\README.md:356 - service = MemoryService(
.\README.md:368 - "metadata_store": {"provider": "inmemory"},
.\README.md:409 - Processes inputs in real-time and immediately updates memory:
.\README.md:420 - # Returns immediately with extracted memory:
.\README.md:423 - "items": [...],         # Extracted memory items (available instantly)
.\README.md:443 - - ✅ **Instant context**: Sub-second memory surfacing
.\README.md:479 - "items": [...],          # Specific memory facts
.\README.md:496 - Continuously learns from every interaction without explicit memory commands:
.\README.md:532 - Unifies memory across different input types for comprehensive context:
.\README.md:562 - | **[memU](https://github.com/NevaMind-AI/memU)** | Core proactive memory engine | 7×24 learning pipeline, auto-categorization |
.\README.md:563 - | **[memU-server](https://github.com/NevaMind-AI/memU-server)** | Backend with continuous sync | Real-time memory updates, webhook triggers |
.\README.md:564 - | **[memU-ui](https://github.com/NevaMind-AI/memU-ui)** | Visual memory dashboard | Live memory evolution monitoring |

## docs\architecture.md
docs\architecture.md:11 - memU follows the "memory as file system" concept from the README and implements it with three persistent layers:
docs\architecture.md:14 - - `MemoryItem`: extracted atomic memories with embeddings
docs\architecture.md:15 - - `MemoryCategory`: grouped topic summaries
docs\architecture.md:50 - - `CRUDMixin`: list/clear/create/update/delete memory operations
docs\architecture.md:79 - 3. `extract_items`: per-memory-type LLM extraction into structured entries
docs\architecture.md:81 - 5. `categorize_items`: persist resource + memory items + item-category relations and embeddings
docs\architecture.md:126 - - `inmemory`: in-process dict/list state
docs\architecture.md:156 - - `memu.integrations.langgraph`: LangChain/LangGraph tool adapter (`save_memory`, `search_memory`)

## docs\HACKATHON_ISSUE_DRAFT.md
docs\HACKATHON_ISSUE_DRAFT.md:1 - # GitHub Issue Draft: Memory Types + Tool Memory
docs\HACKATHON_ISSUE_DRAFT.md:12 - This PR enhances MemU's memory type system to support specialized memory structures with type-specific metadata and introduces Tool Memory for agent self-improvement.
docs\HACKATHON_ISSUE_DRAFT.md:14 - **Current State:** MemU has a `memory_type` field with 5 types (profile, event, knowledge, behavior, skill) and uses different LLM prompts to extract each type. However, after extraction, all memories share the same storage schema - just `summary` and `embedding`. There's no type-specific metadata, no type-aware retrieval, and no way for agents to learn from their tool usage.
docs\HACKATHON_ISSUE_DRAFT.md:16 - **Enhancement:** Extend the memory system to support:
docs\HACKATHON_ISSUE_DRAFT.md:18 - - Tool Memory type for tracking tool execution history
docs\HACKATHON_ISSUE_DRAFT.md:54 - 2. `src/memu/database/repositories/memory_item.py` - Updated interface with new fields
docs\HACKATHON_ISSUE_DRAFT.md:58 - 6. `src/memu/prompts/memory_type/__init__.py` - Added tool type
docs\HACKATHON_ISSUE_DRAFT.md:68 - This builds on MemU's existing memory type foundation while adding the specialized structures needed for agentic applications. The Tool Memory feature is particularly valuable for agents that need to learn which tools work best in different situations.

## docs\HACKATHON_MAD_COMBOS.md
docs\HACKATHON_MAD_COMBOS.md:3 - > **Goal:** Implement high-impact features that MemU is missing, sourced from competitor analysis of 7 memory repos (memoripy, memlayer, ReMe, memX, memphora-sdk, MemOS, memor).
docs\HACKATHON_MAD_COMBOS.md:11 - #### FROM MEMORIPY:
docs\HACKATHON_MAD_COMBOS.md:21 - - ❌ `semantic_memory` clusters - Retrieve from semantic memory clusters
docs\HACKATHON_MAD_COMBOS.md:23 - #### FROM MEMLAYER:
docs\HACKATHON_MAD_COMBOS.md:55 - - ❌ **MEMORY TYPES:**
docs\HACKATHON_MAD_COMBOS.md:61 - - ❌ `WorkingMemory` operations:
docs\HACKATHON_MAD_COMBOS.md:70 - #### FROM MEMX:
docs\HACKATHON_MAD_COMBOS.md:78 - #### FROM MEMOS (MemOS):
docs\HACKATHON_MAD_COMBOS.md:79 - - ❌ **Memory Scheduler System:**
docs\HACKATHON_MAD_COMBOS.md:93 - - ❌ `entities` extraction - Extract entities from memories
docs\HACKATHON_MAD_COMBOS.md:95 - #### FROM MEMPHORA-SDK:
docs\HACKATHON_MAD_COMBOS.md:105 - ## 🏆 COMBO 1: "INTELLIGENT MEMORY LIFECYCLE"
docs\HACKATHON_MAD_COMBOS.md:107 - **Theme:** Memory that learns, ages, and self-curates like human memory
docs\HACKATHON_MAD_COMBOS.md:124 - Result: Self-healing, self-optimizing memory that mimics human forgetting!
docs\HACKATHON_MAD_COMBOS.md:133 - # Decay formula (from memoripy)
docs\HACKATHON_MAD_COMBOS.md:146 - ## 🏆 COMBO 2: "SMART MEMORY GATE"
docs\HACKATHON_MAD_COMBOS.md:166 - Result: Clean, high-quality memory that doesn't bloat!
docs\HACKATHON_MAD_COMBOS.md:175 - # Salience Gate (from memlayer)
docs\HACKATHON_MAD_COMBOS.md:191 - **Theme:** Memory that understands relationships
docs\HACKATHON_MAD_COMBOS.md:213 - Result: Memory that REASONS about relationships!
... and 43 more

## docs\langgraph_integration.md
docs\langgraph_integration.md:3 - The MemU LangGraph Integration provides a seamless adapter to expose MemU's powerful memory capabilities (`memorize` and `retrieve`) as standard [LangChain](https://python.langchain.com/) / [LangGraph](https://langchain-ai.github.io/langgraph/) tools. This allows your agents to persist information and recall it across sessions using MemU as the long-term memory backend.
docs\langgraph_integration.md:7 - This integration wraps the `MemoryService` and exposes two key tools:
docs\langgraph_integration.md:8 - - **`save_memory`**: Persists text, conversation snippets, or facts associated with a user.
docs\langgraph_integration.md:9 - - **`search_memory`**: Retrieves relevant memories based on semantic search queries.
docs\langgraph_integration.md:28 - from memu.app.service import MemoryService
docs\langgraph_integration.md:29 - from memu.integrations.langgraph import MemULangGraphTools
docs\langgraph_integration.md:36 - memory_service = MemoryService()
docs\langgraph_integration.md:41 - memu_tools = MemULangGraphTools(memory_service)
docs\langgraph_integration.md:50 - save_tool = memu_tools.save_memory_tool()
docs\langgraph_integration.md:60 - search_tool = memu_tools.search_memory_tool()
docs\langgraph_integration.md:79 - class MemULangGraphTools(memory_service: MemoryService)
docs\langgraph_integration.md:85 - - **Description**: Save a piece of information, conversation snippet, or memory for a user.

## docs\sealos-devbox-guide.md
docs\sealos-devbox-guide.md:3 - This guide demonstrates how to build and deploy a **Personal AI Assistant with Long-Term Memory** using MemU on [Sealos DevBox](https://sealos.io/products/devbox).
docs\sealos-devbox-guide.md:95 - from memu.app import MemoryService
docs\sealos-devbox-guide.md:98 - memory_service: MemoryService | None = None
docs\sealos-devbox-guide.md:123 - memory_service = MemoryService(llm_profiles=llm_profiles)
docs\sealos-devbox-guide.md:131 - description="AI Assistant with Long-Term Memory",
docs\sealos-devbox-guide.md:154 - class MemorizeRequest(BaseModel):
docs\sealos-devbox-guide.md:170 - return {"status": "healthy", "memory_service": memory_service is not None}
docs\sealos-devbox-guide.md:177 - 1. Retrieve relevant memories from past conversations
docs\sealos-devbox-guide.md:181 - if not memory_service:
docs\sealos-devbox-guide.md:182 - raise HTTPException(status_code=503, detail="Memory service not initialized")
docs\sealos-devbox-guide.md:185 - retrieve_result = await memory_service.retrieve(
docs\sealos-devbox-guide.md:192 - memories_context = "\n\nRelevant memories from past conversations:\n"
docs\sealos-devbox-guide.md:203 - # Step 3: Store the conversation as a new memory
docs\sealos-devbox-guide.md:210 - memorize_result = await memory_service.memorize(
docs\sealos-devbox-guide.md:226 - async def memorize(request: MemorizeRequest):
docs\sealos-devbox-guide.md:228 - if not memory_service:
docs\sealos-devbox-guide.md:229 - raise HTTPException(status_code=503, detail="Memory service not initialized")
docs\sealos-devbox-guide.md:237 - result = await memory_service.memorize(
docs\sealos-devbox-guide.md:253 - if not memory_service:
docs\sealos-devbox-guide.md:254 - raise HTTPException(status_code=503, detail="Memory service not initialized")
... and 2 more

## docs\sealos_use_case.md
docs\sealos_use_case.md:6 - Unlike a standard web app, this demo focuses on the **backend memory orchestration**. It runs as a **CLI (Command Line Interface)** tool to transparently show the internal memory logs, retrieval process, and state persistence without the abstraction layer of a UI.
docs\sealos_use_case.md:37 - 🤖 Agent: (Searching memory for context...)
docs\sealos_use_case.md:40 - Found Memory: Captain reported a 502 Bad Gateway error on port 3000.
docs\sealos_use_case.md:50 - - **CLI vs Web**: We chose a CLI implementation to provide clear visibility into the memory ingestion and retrieval logs, which are often hidden in web implementations.

## docs\sqlite.md
docs\sqlite.md:3 - MemU supports SQLite as a lightweight, file-based database backend for memory storage. This is ideal for:
docs\sqlite.md:15 - from memu.app import MemoryService
docs\sqlite.md:18 - service = MemoryService(
docs\sqlite.md:28 - service = MemoryService(
docs\sqlite.md:33 - "dsn": "sqlite:///path/to/your/memory.db",
docs\sqlite.md:41 - For testing or temporary storage, you can use an in-memory SQLite database:
docs\sqlite.md:44 - service = MemoryService(
docs\sqlite.md:49 - "dsn": "sqlite:///:memory:",
docs\sqlite.md:66 - - **In-memory**: `sqlite:///:memory:`
docs\sqlite.md:75 - service = MemoryService(
docs\sqlite.md:89 - **Note**: Brute-force search loads all embeddings into memory and computes similarity for each. This works well for moderate dataset sizes (up to ~100k items) but may be slow for larger datasets.
docs\sqlite.md:121 - from memu.database.sqlite import build_sqlite_database
docs\sqlite.md:122 - from memu.database.postgres import build_postgres_database
docs\sqlite.md:123 - from memu.app.settings import DatabaseConfig
docs\sqlite.md:170 - from memu.app import MemoryService
docs\sqlite.md:174 - service = MemoryService(

## docs\adr\0002-pluggable-storage-and-vector-strategy.md
docs\adr\0002-pluggable-storage-and-vector-strategy.md:20 - - `inmemory`: in-process state, brute-force similarity

## docs\adr\0003-user-scope-in-data-model.md
docs\adr\0003-user-scope-in-data-model.md:1 - # ADR 0003: Model User Scope as First-Class Fields on Memory Records

## docs\adr\README.md
docs\adr\README.md:5 - - [0003: Model User Scope as First-Class Fields on Memory Records](0003-user-scope-in-data-model.md)

## docs\integrations\grok.md
docs\integrations\grok.md:3 - MemU supports **Grok**, the AI model from xAI, as a first-class LLM provider.
docs\integrations\grok.md:33 - from memu.app.settings import LLMConfig

## docs\providers\grok.md
docs\providers\grok.md:3 - memU includes first-class support for [Grok](https://grok.x.ai/), allowing you to leverage xAI's powerful language models directly within your application.
docs\providers\grok.md:39 - from memu.app.settings import LLMConfig
docs\providers\grok.md:40 - from memu.app.service import MemoryService
docs\providers\grok.md:46 - service = MemoryService(llm_config=llm_config)

## docs\tutorials\getting_started.md
docs\tutorials\getting_started.md:1 - # Quickstart: Adding Long-Term Memory to Python Agents
docs\tutorials\getting_started.md:40 - Below is a complete, production-ready script that demonstrates the full lifecycle of a memory-enabled agent: **Initialization**, **Injection** (adding memory), and **Retrieval** (searching memory).
docs\tutorials\getting_started.md:50 - 2.  **Memory Injection**: Adding a specific memory with metadata.
docs\tutorials\getting_started.md:51 - 3.  **Retrieval**: Searching for that memory using natural language.
docs\tutorials\getting_started.md:64 - from memu.app import MemoryService
docs\tutorials\getting_started.md:87 - # We initialize the MemoryService with:
docs\tutorials\getting_started.md:89 - # - memorize_config: Pre-defining a memory category ensures we can organize memories efficiently.
docs\tutorials\getting_started.md:90 - print(f"[*] Initializing MemoryService with model: gpt-4o-mini...")
docs\tutorials\getting_started.md:91 - service = MemoryService(
docs\tutorials\getting_started.md:99 - "memory_categories": [
docs\tutorials\getting_started.md:113 - memory_content = "The user is a senior Python architect who loves clean code and type hints."
docs\tutorials\getting_started.md:116 - # memory_type='profile' indicates this is an attribute of the user.
docs\tutorials\getting_started.md:117 - result = await service.create_memory_item(
docs\tutorials\getting_started.md:118 - memory_type="profile",
docs\tutorials\getting_started.md:119 - memory_content=memory_content,
docs\tutorials\getting_started.md:120 - memory_categories=["User Facts"],
docs\tutorials\getting_started.md:122 - print(f"[OK] Memory created! ID: {result.get('memory_item', {}).get('id')}\n")
docs\tutorials\getting_started.md:136 - print(f"[OK] Found {len(items)} relevant memory item(s):")
docs\tutorials\getting_started.md:138 - print(f"   {idx}. {item.get('summary')} (Type: {item.get('memory_type')})")
docs\tutorials\getting_started.md:155 - 1.  **Initialization**: We configure `MemoryService` with specific `llm_profiles`. This tells MemU which model to use. We also define a `memorize_config` with a "User Facts" category. Categories help the LLM organize and retrieve information more effectively.
... and 3 more

## examples\example_1_conversation_memory.py
examples\example_1_conversation_memory.py:2 - Example 1: Multiple Conversations -> Memory Category File
examples\example_1_conversation_memory.py:16 - from memu.app import MemoryService
examples\example_1_conversation_memory.py:23 - async def generate_memory_md(categories, output_dir):
examples\example_1_conversation_memory.py:58 - 3. Extracts memory categories from conversations
examples\example_1_conversation_memory.py:61 - print("Example 1: Conversation Memory Processing")
examples\example_1_conversation_memory.py:72 - service = MemoryService(

## examples\example_2_skill_extraction.py
examples\example_2_skill_extraction.py:18 - from memu.app import MemoryService
examples\example_2_skill_extraction.py:136 - Extract skills from agent logs using incremental memory updates.
examples\example_2_skill_extraction.py:200 - "memory_types": ["skill"],
examples\example_2_skill_extraction.py:201 - "memory_type_prompts": {"skill": skill_prompt},
examples\example_2_skill_extraction.py:202 - "memory_categories": skill_categories,
examples\example_2_skill_extraction.py:207 - service = MemoryService(
examples\example_2_skill_extraction.py:238 - if item.get("memory_type") == "skill":

## examples\example_3_multimodal_memory.py
examples\example_3_multimodal_memory.py:2 - Example 3: Multimodal Processing -> Memory Category File
examples\example_3_multimodal_memory.py:16 - from memu.app import MemoryService
examples\example_3_multimodal_memory.py:23 - async def generate_memory_md(categories, output_dir):
examples\example_3_multimodal_memory.py:68 - print("Example 3: Multimodal Memory Processing")
examples\example_3_multimodal_memory.py:91 - service = MemoryService(
examples\example_3_multimodal_memory.py:98 - memorize_config={"memory_categories": multimodal_categories},

## examples\example_4_openrouter_memory.py
examples\example_4_openrouter_memory.py:2 - Example 4: Multiple Conversations -> Memory Category File (Using OpenRouter)
examples\example_4_openrouter_memory.py:16 - from memu.app import MemoryService
examples\example_4_openrouter_memory.py:22 - async def generate_memory_md(categories, output_dir):
examples\example_4_openrouter_memory.py:53 - 3. Extracts memory categories from conversations
examples\example_4_openrouter_memory.py:56 - print("Example 4: Conversation Memory Processing (OpenRouter)")
examples\example_4_openrouter_memory.py:65 - service = MemoryService(

## examples\example_5_with_lazyllm_client.py
examples\example_5_with_lazyllm_client.py:6 - 1. Example 1: Conversation Memory Processing
examples\example_5_with_lazyllm_client.py:32 - from memu.app import MemoryService
examples\example_5_with_lazyllm_client.py:35 - # PART 1: Conversation Memory Processing
examples\example_5_with_lazyllm_client.py:39 - async def run_conversation_memory_demo(service):
examples\example_5_with_lazyllm_client.py:41 - print("PART 1: Conversation Memory Processing")
examples\example_5_with_lazyllm_client.py:106 - service.memorize_config.memory_types = ["skill"]
examples\example_5_with_lazyllm_client.py:107 - service.memorize_config.memory_type_prompts = {"skill": skill_prompt}
examples\example_5_with_lazyllm_client.py:120 - if item.get("memory_type") == "skill":
examples\example_5_with_lazyllm_client.py:134 - # PART 3: Multimodal Memory
examples\example_5_with_lazyllm_client.py:140 - print("PART 3: Multimodal Memory Processing")
examples\example_5_with_lazyllm_client.py:158 - service.memorize_config.memory_types = ["knowledge"]
examples\example_5_with_lazyllm_client.py:159 - service.memorize_config.memory_type_prompts = {"knowledge": xml_prompt}
examples\example_5_with_lazyllm_client.py:224 - service = MemoryService(

## examples\getting_started_robust.py
examples\getting_started_robust.py:6 - 2.  **Memory Injection**: Adding a specific memory with metadata.
examples\getting_started_robust.py:7 - 3.  **Retrieval**: Searching for that memory using natural language.
examples\getting_started_robust.py:23 - from memu.app import MemoryService
examples\getting_started_robust.py:46 - # We initialize the MemoryService with:
examples\getting_started_robust.py:48 - # - memorize_config: Pre-defining a memory category ensures we can organize memories efficiently.
examples\getting_started_robust.py:49 - print("[*] Initializing MemoryService with model: gpt-4o-mini...")
examples\getting_started_robust.py:50 - service = MemoryService(
examples\getting_started_robust.py:58 - "memory_categories": [
examples\getting_started_robust.py:72 - memory_content = "The user is a senior Python architect who loves clean code and type hints."
examples\getting_started_robust.py:75 - # memory_type='profile' indicates this is an attribute of the user.
examples\getting_started_robust.py:76 - result = await service.create_memory_item(
examples\getting_started_robust.py:77 - memory_type="profile",
examples\getting_started_robust.py:78 - memory_content=memory_content,
examples\getting_started_robust.py:79 - memory_categories=["User Facts"],
examples\getting_started_robust.py:81 - print(f"[OK] Memory created! ID: {result.get('memory_item', {}).get('id')}\n")
examples\getting_started_robust.py:93 - print(f"[OK] Found {len(items)} relevant memory item(s):")
examples\getting_started_robust.py:95 - print(f"   {idx}. {item.get('summary')} (Type: {item.get('memory_type')})")

## examples\langgraph_demo.py
examples\langgraph_demo.py:13 - from memu.app.service import MemoryService
examples\langgraph_demo.py:14 - from memu.integrations.langgraph import MemULangGraphTools
examples\langgraph_demo.py:24 - async def initialize_infrastructure() -> MemULangGraphTools:
examples\langgraph_demo.py:31 - service = MemoryService()
examples\langgraph_demo.py:37 - save_tool = next(t for t in tools if t.name == "save_memory")
examples\langgraph_demo.py:52 - search_tool = next(t for t in tools if t.name == "search_memory")

## examples\sealos_support_agent.py
examples\sealos_support_agent.py:6 - from memu import Memory  # noqa: F401
examples\sealos_support_agent.py:43 - print_slow("🤖 Agent: (Processing input through Memory Pipeline...)", delay=0.01)
examples\sealos_support_agent.py:46 - print("✅ Memory stored! extracted 2 items:")
examples\sealos_support_agent.py:57 - print("   Found Memory (Score: 0.98): User reported 502 error on port 3000")
examples\sealos_support_agent.py:58 - print("   Found Memory (Score: 0.95): User was frustrated with timeout")

## examples\test_nebius_provider.py
examples\test_nebius_provider.py:107 - async def test_memu_with_nebius():
examples\test_nebius_provider.py:109 - from memu.app import MemoryService
examples\test_nebius_provider.py:118 - # Configure MemU to use Nebius (using dict config like example_1)
examples\test_nebius_provider.py:138 - service = MemoryService(llm_profiles=llm_profiles)

## examples\proactive\proactive.py
examples\proactive\proactive.py:10 - from memory.local.memorize import memorize
examples\proactive\proactive.py:11 - from memory.local.tools import _get_todos, memu_server
examples\proactive\proactive.py:20 - async def trigger_memorize(messages: list[dict[str, any]]) -> bool:
examples\proactive\proactive.py:30 - print(f"\n[Memory] Memorization initialization failed: {e!r}")
examples\proactive\proactive.py:97 - async def check_and_memorize(conversation_messages: list[dict[str, any]]) -> None:
examples\proactive\proactive.py:116 - print(f"\n[Memory] Memorization failed: {e!r}")
examples\proactive\proactive.py:179 - print(f"\n[Memory] Running memorization failed: {e!r}")
examples\proactive\proactive.py:192 - print(f"\n[Memory] Final memorization failed: {e!r}")

## examples\proactive\memory\config.py
examples\proactive\memory\config.py:2 - "memory_types": [
examples\proactive\memory\config.py:5 - "memory_type_prompts": {
examples\proactive\memory\config.py:21 - "prompt": "# Example\n## Output\n<item>\n    <memory>\n        <content>The user ask the agent to generate a code example for fastapi</content>\n        <categories>\n            <category>todo</category>\n        </categories>\n    </memory>\n    <memory>\n        <content>The agent suggest to use the code example from the document</content>\n        <categories>\n            <category>todo</category>\n        </categories>\n    </memory>\n    <memory>\n        <content>The agent ask the user to specify the response type</content>\n        <categories>\n            <category>todo</category>\n        </categories>\n    </memory>\n</item>",
examples\proactive\memory\config.py:25 - "memory_categories": [

## examples\proactive\memory\local\common.py
examples\proactive\memory\local\common.py:3 - from memu.app import MemoryService
examples\proactive\memory\local\common.py:5 - from ..config import memorize_config, retrieve_config
examples\proactive\memory\local\common.py:8 - SHARED_MEMORY_SERVICE = None
examples\proactive\memory\local\common.py:11 - def get_memory_service() -> MemoryService:
examples\proactive\memory\local\common.py:13 - if SHARED_MEMORY_SERVICE is not None:
examples\proactive\memory\local\common.py:21 - SHARED_MEMORY_SERVICE = MemoryService(

## examples\proactive\memory\local\memorize.py
examples\proactive\memory\local\memorize.py:8 - from .common import get_memory_service
examples\proactive\memory\local\memorize.py:34 - def memorize(conversation_messages: list[dict[str, Any]]) -> Awaitable[dict[str, Any]]:
examples\proactive\memory\local\memorize.py:35 - memory_service = get_memory_service()
examples\proactive\memory\local\memorize.py:38 - return memory_service.memorize(resource_url=resource_url, modality="conversation", user={"user_id": USER_ID})

## examples\proactive\memory\local\tools.py
examples\proactive\memory\local\tools.py:5 - from .common import get_memory_service
examples\proactive\memory\local\tools.py:10 - @tool("memu_memory", "Retrieve memory based on a query", {"query": str})
examples\proactive\memory\local\tools.py:11 - async def get_memory(args: dict[str, Any]) -> dict[str, Any]:
examples\proactive\memory\local\tools.py:12 - """Retrieve memory from the memory API based on the provided query."""
examples\proactive\memory\local\tools.py:15 - memory_service = get_memory_service()
examples\proactive\memory\local\tools.py:17 - result = await memory_service.retrieve(query, where={"user_id": USER_ID})
examples\proactive\memory\local\tools.py:23 - memory_service = get_memory_service()
examples\proactive\memory\local\tools.py:25 - result = await memory_service.list_memory_categories(where={"user_id": USER_ID})
examples\proactive\memory\local\tools.py:37 - """Retrieve todos from the memory API."""
examples\proactive\memory\local\tools.py:42 - memu_server = create_sdk_mcp_server(name="memu", version="1.0.0", tools=[get_memory, get_todos])

## examples\proactive\memory\platform\memorize.py
examples\proactive\memory\platform\memorize.py:5 - from ..config import memorize_config
examples\proactive\memory\platform\memorize.py:13 - async def memorize(conversation_messages: list[dict[str, Any]]) -> str | None:

## examples\proactive\memory\platform\tools.py
examples\proactive\memory\platform\tools.py:12 - @tool("memu_memory", "Retrieve memory based on a query", {"query": str})
examples\proactive\memory\platform\tools.py:13 - async def get_memory(args: dict[str, Any]) -> dict[str, Any]:
examples\proactive\memory\platform\tools.py:14 - """Retrieve memory from the memory API based on the provided query."""
examples\proactive\memory\platform\tools.py:16 - url = f"{BASE_URL}/api/v3/memory/retrieve"
examples\proactive\memory\platform\tools.py:27 - url = f"{BASE_URL}/api/v3/memory/categories"
examples\proactive\memory\platform\tools.py:46 - """Retrieve todos from the memory API."""
examples\proactive\memory\platform\tools.py:52 - memu_server = create_sdk_mcp_server(name="memu", version="1.0.0", tools=[get_memory, get_todos])

## examples\resources\docs\doc1.txt
examples\resources\docs\doc1.txt:1 - MemU: Agentic Memory Framework - Technical Documentation
examples\resources\docs\doc1.txt:12 - - Memory Items: Individual pieces of information extracted from inputs
examples\resources\docs\doc1.txt:13 - - Memory Categories: Semantic groupings of related memories
examples\resources\docs\doc1.txt:14 - - Memory Types: Classifications of memory content (profile, event, knowledge, behavior)
examples\resources\docs\doc1.txt:29 - d. Classification: Memory type identification
examples\resources\docs\doc1.txt:37 - The main entry point for all memory operations:
examples\resources\docs\doc1.txt:46 - - Memory type definitions
examples\resources\docs\doc1.txt:201 - - Customize memory type prompts
examples\resources\docs\doc1.txt:258 - from memu.app import MemoryService
examples\resources\docs\doc1.txt:261 - service = MemoryService(
examples\resources\docs\doc1.txt:289 - "memory_types": ["profile", "knowledge", "custom"],
examples\resources\docs\doc1.txt:290 - "memory_type_prompts": {
examples\resources\docs\doc1.txt:293 - "memory_categories": [
examples\resources\docs\doc1.txt:299 - service = MemoryService(
examples\resources\docs\doc1.txt:317 - - Memory export and import

## examples\resources\docs\doc2.txt
examples\resources\docs\doc2.txt:126 - Types of memory agents need:
examples\resources\docs\doc2.txt:127 - - Working memory: Current task context
examples\resources\docs\doc2.txt:128 - - Short-term memory: Recent interactions
examples\resources\docs\doc2.txt:129 - - Long-term memory: Persistent knowledge
examples\resources\docs\doc2.txt:130 - - Episodic memory: Past experiences
examples\resources\docs\doc2.txt:131 - - Semantic memory: General knowledge

## examples\resources\logs\log1.txt
examples\resources\logs\log1.txt:29 - - Resource limits: CPU 2 cores, Memory 4Gi

## examples\resources\logs\log2.txt
examples\resources\logs\log2.txt:117 - - Memory utilization: 58% (normal)

## examples\resources\logs\log3.txt
examples\resources\logs\log3.txt:53 - - Memory capacity: 52% utilization
examples\resources\logs\log3.txt:76 - resource_limits={"cpu": "2", "memory": "4Gi"}

## examples\sealos-assistant\main.py
examples\sealos-assistant\main.py:33 - from memu.app import MemoryService
examples\sealos-assistant\main.py:36 - memory_service: MemoryService | None = None
examples\sealos-assistant\main.py:72 - memory_service = MemoryService(llm_profiles=llm_profiles)
examples\sealos-assistant\main.py:85 - description="AI Assistant with Long-Term Memory powered by MemU",
examples\sealos-assistant\main.py:112 - class MemorizeRequest(BaseModel):
examples\sealos-assistant\main.py:117 - class MemorizeResponse(BaseModel):
examples\sealos-assistant\main.py:135 - "description": "AI Assistant with Long-Term Memory",
examples\sealos-assistant\main.py:141 - "POST /chat": "Chat with memory-aware AI",
examples\sealos-assistant\main.py:142 - "POST /memorize": "Store information in memory",
examples\sealos-assistant\main.py:153 - "memory_service_initialized": memory_service is not None,
examples\sealos-assistant\main.py:163 - 1. Retrieve relevant memories from past conversations
examples\sealos-assistant\main.py:167 - if not memory_service:
examples\sealos-assistant\main.py:168 - raise HTTPException(status_code=503, detail="Memory service not initialized")
examples\sealos-assistant\main.py:172 - retrieve_result = await memory_service.retrieve(queries=[{"role": "user", "content": request.message}])
examples\sealos-assistant\main.py:176 - # Build context from memories
examples\sealos-assistant\main.py:177 - memory_context = []
examples\sealos-assistant\main.py:184 - if memory_context:
examples\sealos-assistant\main.py:188 - + "\n".join(f"- {ctx[:100]}..." if len(ctx) > 100 else f"- {ctx}" for ctx in memory_context)
examples\sealos-assistant\main.py:201 - memorize_result = await memory_service.memorize(
examples\sealos-assistant\main.py:220 - async def memorize(request: MemorizeRequest):
... and 6 more

## examples\sealos-assistant\README.md
examples\sealos-assistant\README.md:3 - A personal AI assistant with long-term memory, designed for deployment on [Sealos DevBox](https://sealos.io/products/devbox).
examples\sealos-assistant\README.md:7 - - **Persistent Memory**: Remembers user preferences and past conversations

## readme\README_en.md
readme\README_en.md:53 - - **Navigate memories** like browsing directories—drill down from broad categories to specific facts
readme\README_en.md:251 - Experience proactive memory instantly:
readme\README_en.md:285 - **Test Continuous Learning** (in-memory):
readme\README_en.md:309 - Both examples demonstrate **proactive memory workflows**:
readme\README_en.md:311 - 2. **Auto-Extraction**: Immediate memory creation
readme\README_en.md:312 - 3. **Proactive Retrieval**: Context-aware memory surfacing
readme\README_en.md:322 - from memu import MemUService
readme\README_en.md:352 - from memu import MemoryService
readme\README_en.md:354 - service = MemoryService(
readme\README_en.md:366 - "metadata_store": {"provider": "inmemory"},
readme\README_en.md:407 - Processes inputs in real-time and immediately updates memory:
readme\README_en.md:418 - # Returns immediately with extracted memory:
readme\README_en.md:421 - "items": [...],         # Extracted memory items (available instantly)
readme\README_en.md:441 - - ✅ **Instant context**: Sub-second memory surfacing
readme\README_en.md:477 - "items": [...],          # Specific memory facts
readme\README_en.md:496 - Continuously learns from every interaction without explicit memory commands:
readme\README_en.md:532 - Unifies memory across different input types for comprehensive context:
readme\README_en.md:562 - | **[memU](https://github.com/NevaMind-AI/memU)** | Core proactive memory engine | 7×24 learning pipeline, auto-categorization |
readme\README_en.md:563 - | **[memU-server](https://github.com/NevaMind-AI/memU-server)** | Backend with continuous sync | Real-time memory updates, webhook triggers |
readme\README_en.md:564 - | **[memU-ui](https://github.com/NevaMind-AI/memU-ui)** | Visual memory dashboard | Live memory evolution monitoring |

## readme\README_es.md
readme\README_es.md:322 - from memu import MemUService
readme\README_es.md:352 - from memu import MemoryService
readme\README_es.md:354 - service = MemoryService(
readme\README_es.md:366 - "metadata_store": {"provider": "inmemory"},

## readme\README_fr.md
readme\README_fr.md:322 - from memu import MemUService
readme\README_fr.md:352 - from memu import MemoryService
readme\README_fr.md:354 - service = MemoryService(
readme\README_fr.md:366 - "metadata_store": {"provider": "inmemory"},

## readme\README_ja.md
readme\README_ja.md:322 - from memu import MemUService
readme\README_ja.md:352 - from memu import MemoryService
readme\README_ja.md:354 - service = MemoryService(
readme\README_ja.md:366 - "metadata_store": {"provider": "inmemory"},

## readme\README_ko.md
readme\README_ko.md:322 - from memu import MemUService
readme\README_ko.md:352 - from memu import MemoryService
readme\README_ko.md:354 - service = MemoryService(
readme\README_ko.md:366 - "metadata_store": {"provider": "inmemory"},

## readme\README_zh.md
readme\README_zh.md:320 - from memu import MemUService
readme\README_zh.md:350 - from memu import MemoryService
readme\README_zh.md:352 - service = MemoryService(
readme\README_zh.md:364 - "metadata_store": {"provider": "inmemory"},

## src\lib.rs
src\lib.rs:5 - "Hello from memu!".to_string()

## src\memu\__init__.py
src\memu\__init__.py:1 - from memu._core import hello_from_bin
src\memu\__init__.py:2 - from memu.app.service import MemoryService
src\memu\__init__.py:5 - MemUService = MemoryService

## src\memu\app\crud.py
src\memu\app\crud.py:11 - from memu.database.models import MemoryCategory, MemoryType
src\memu\app\crud.py:12 - from memu.prompts.category_patch import CATEGORY_PATCH_PROMPT
src\memu\app\crud.py:13 - from memu.workflow.step import WorkflowState, WorkflowStep
src\memu\app\crud.py:18 - from memu.app.service import Context
src\memu\app\crud.py:19 - from memu.app.settings import PatchConfig
src\memu\app\crud.py:20 - from memu.database.interfaces import Database
src\memu\app\crud.py:38 - async def list_memory_items(
src\memu\app\crud.py:52 - result = await self._run_workflow("crud_list_memory_items", state)
src\memu\app\crud.py:55 - msg = "List memory items workflow failed to produce a response"
src\memu\app\crud.py:59 - async def list_memory_categories(
src\memu\app\crud.py:72 - result = await self._run_workflow("crud_list_memory_categories", state)
src\memu\app\crud.py:75 - msg = "List memory categories workflow failed to produce a response"
src\memu\app\crud.py:79 - async def clear_memory(
src\memu\app\crud.py:93 - result = await self._run_workflow("crud_clear_memory", state)
src\memu\app\crud.py:96 - msg = "Clear memory workflow failed to produce a response"
src\memu\app\crud.py:100 - def _build_list_memory_items_workflow(self) -> list[WorkflowStep]:
src\memu\app\crud.py:103 - step_id="list_memory_items",
src\memu\app\crud.py:105 - handler=self._crud_list_memory_items,
src\memu\app\crud.py:122 - def _list_list_memories_initial_keys() -> set[str]:
src\memu\app\crud.py:129 - def _build_list_memory_categories_workflow(self) -> list[WorkflowStep]:
... and 123 more

## src\memu\app\memorize.py
src\memu\app\memorize.py:15 - from memu.app.settings import CategoryConfig, CustomPrompt
src\memu\app\memorize.py:16 - from memu.database.models import CategoryItem, MemoryCategory, MemoryItem, MemoryType, Resource
src\memu\app\memorize.py:17 - from memu.prompts.category_summary import (
src\memu\app\memorize.py:20 - from memu.prompts.category_summary import (
src\memu\app\memorize.py:23 - from memu.prompts.memory_type import (
src\memu\app\memorize.py:26 - from memu.prompts.memory_type import (
src\memu\app\memorize.py:30 - from memu.prompts.memory_type import (
src\memu\app\memorize.py:33 - from memu.prompts.preprocess import PROMPTS as PREPROCESS_PROMPTS
src\memu\app\memorize.py:34 - from memu.utils.conversation import format_conversation_for_preprocess
src\memu\app\memorize.py:35 - from memu.utils.video import VideoFrameExtractor
src\memu\app\memorize.py:36 - from memu.workflow.step import WorkflowState, WorkflowStep
src\memu\app\memorize.py:41 - from memu.app.service import Context
src\memu\app\memorize.py:42 - from memu.app.settings import MemorizeConfig
src\memu\app\memorize.py:43 - from memu.blob.local_fs import LocalFS
src\memu\app\memorize.py:44 - from memu.database.interfaces import Database
src\memu\app\memorize.py:47 - class MemorizeMixin:
src\memu\app\memorize.py:65 - async def memorize(
src\memu\app\memorize.py:77 - memory_types = self._resolve_memory_types()
src\memu\app\memorize.py:82 - "memory_types": memory_types,
src\memu\app\memorize.py:97 - def _build_memorize_workflow(self) -> list[WorkflowStep]:
... and 74 more

## src\memu\app\patch.py
src\memu\app\patch.py:11 - from memu.database.models import MemoryCategory, MemoryType
src\memu\app\patch.py:12 - from memu.prompts.category_patch import CATEGORY_PATCH_PROMPT
src\memu\app\patch.py:13 - from memu.workflow.step import WorkflowState, WorkflowStep
src\memu\app\patch.py:18 - from memu.app.service import Context
src\memu\app\patch.py:19 - from memu.app.settings import PatchConfig
src\memu\app\patch.py:20 - from memu.database.interfaces import Database
src\memu\app\patch.py:37 - async def create_memory_item(
src\memu\app\patch.py:40 - memory_type: MemoryType,
src\memu\app\patch.py:41 - memory_content: str,
src\memu\app\patch.py:42 - memory_categories: list[str],
src\memu\app\patch.py:46 - if memory_type not in get_args(MemoryType):
src\memu\app\patch.py:47 - msg = f"Invalid memory type: '{memory_type}', must be one of {get_args(MemoryType)}"
src\memu\app\patch.py:56 - "memory_payload": {
src\memu\app\patch.py:57 - "type": memory_type,
src\memu\app\patch.py:58 - "content": memory_content,
src\memu\app\patch.py:59 - "categories": memory_categories,
src\memu\app\patch.py:71 - msg = "Create memory item workflow failed to produce a response"
src\memu\app\patch.py:75 - async def update_memory_item(
src\memu\app\patch.py:78 - memory_id: str,
src\memu\app\patch.py:79 - memory_type: MemoryType | None = None,
... and 88 more

## src\memu\app\retrieve.py
src\memu\app\retrieve.py:11 - from memu.database.inmemory.vector import cosine_topk
src\memu\app\retrieve.py:12 - from memu.prompts.retrieve.llm_category_ranker import PROMPT as LLM_CATEGORY_RANKER_PROMPT
src\memu\app\retrieve.py:13 - from memu.prompts.retrieve.llm_item_ranker import PROMPT as LLM_ITEM_RANKER_PROMPT
src\memu\app\retrieve.py:14 - from memu.prompts.retrieve.llm_resource_ranker import PROMPT as LLM_RESOURCE_RANKER_PROMPT
src\memu\app\retrieve.py:15 - from memu.prompts.retrieve.pre_retrieval_decision import SYSTEM_PROMPT as PRE_RETRIEVAL_SYSTEM_PROMPT
src\memu\app\retrieve.py:16 - from memu.prompts.retrieve.pre_retrieval_decision import USER_PROMPT as PRE_RETRIEVAL_USER_PROMPT
src\memu\app\retrieve.py:17 - from memu.workflow.step import WorkflowState, WorkflowStep
src\memu\app\retrieve.py:22 - from memu.app.service import Context
src\memu\app\retrieve.py:23 - from memu.app.settings import RetrieveConfig
src\memu\app\retrieve.py:24 - from memu.database.interfaces import Database
src\memu\app\retrieve.py:270 - category_pool = store.memory_category_repo.list_categories(where_filters)
src\memu\app\retrieve.py:299 - category_pool = state.get("category_pool") or store.memory_category_repo.list_categories(where_filters)
src\memu\app\retrieve.py:326 - from memu.utils.references import extract_references
src\memu\app\retrieve.py:353 - items_pool = store.memory_item_repo.list_items(where_filters)
src\memu\app\retrieve.py:359 - state["item_hits"] = store.memory_item_repo.vector_search_items(
src\memu\app\retrieve.py:379 - items_pool = state.get("item_pool") or store.memory_item_repo.list_items(where_filters)
src\memu\app\retrieve.py:439 - categories_pool = state.get("category_pool") or store.memory_category_repo.list_categories(where_filters)
src\memu\app\retrieve.py:440 - items_pool = state.get("item_pool") or store.memory_item_repo.list_items(where_filters)
src\memu\app\retrieve.py:577 - category_pool = store.memory_category_repo.list_categories(where_filters)
src\memu\app\retrieve.py:630 - from memu.utils.references import extract_references
... and 27 more

## src\memu\app\service.py
src\memu\app\service.py:10 - from memu.app.crud import CRUDMixin
src\memu\app\service.py:11 - from memu.app.memorize import MemorizeMixin
src\memu\app\service.py:12 - from memu.app.retrieve import RetrieveMixin
src\memu\app\service.py:13 - from memu.app.settings import (
src\memu\app\service.py:23 - from memu.blob.local_fs import LocalFS
src\memu\app\service.py:24 - from memu.database.factory import build_database
src\memu\app\service.py:25 - from memu.database.interfaces import Database
src\memu\app\service.py:26 - from memu.llm.http_client import HTTPLLMClient
src\memu\app\service.py:27 - from memu.llm.wrapper import (
src\memu\app\service.py:33 - from memu.workflow.interceptor import WorkflowInterceptorHandle, WorkflowInterceptorRegistry
src\memu\app\service.py:34 - from memu.workflow.pipeline import PipelineManager
src\memu\app\service.py:35 - from memu.workflow.runner import WorkflowRunner, resolve_workflow_runner
src\memu\app\service.py:36 - from memu.workflow.step import WorkflowState, WorkflowStep
src\memu\app\service.py:49 - class MemoryService(MemorizeMixin, RetrieveMixin, CRUDMixin):
src\memu\app\service.py:71 - self.category_configs: list[CategoryConfig] = list(self.memorize_config.memory_categories or [])
src\memu\app\service.py:102 - from memu.llm.openai_sdk import OpenAISDKClient
src\memu\app\service.py:121 - from memu.llm.lazyllm_client import LazyLLMClient
src\memu\app\service.py:324 - patch_create_workflow = self._build_create_memory_item_workflow()
src\memu\app\service.py:325 - patch_create_initial_keys = CRUDMixin._list_create_memory_item_initial_keys()
src\memu\app\service.py:327 - patch_update_workflow = self._build_update_memory_item_workflow()
... and 11 more

## src\memu\app\settings.py
src\memu\app\settings.py:6 - from memu.prompts.category_summary import (
src\memu\app\settings.py:9 - from memu.prompts.category_summary import (
src\memu\app\settings.py:12 - from memu.prompts.memory_type import (
src\memu\app\settings.py:16 - from memu.prompts.memory_type import (
src\memu\app\settings.py:30 - def _default_memory_types() -> list[str]:
src\memu\app\settings.py:34 - def _default_memory_type_prompts() -> "dict[str, str | CustomPrompt]":
src\memu\app\settings.py:61 - CompleteMemoryTypePrompt = AfterValidator(lambda v: complete_prompt_blocks(v, DEFAULT_MEMORY_CUSTOM_PROMPT_ORDINAL))
src\memu\app\settings.py:74 - def _default_memory_categories() -> list[CategoryConfig]:
src\memu\app\settings.py:204 - class MemorizeConfig(BaseModel):
src\memu\app\settings.py:211 - memory_types: list[str] = Field(
src\memu\app\settings.py:212 - default_factory=_default_memory_types,
src\memu\app\settings.py:213 - description="Ordered list of memory types (profile/event/knowledge/behavior by default).",
src\memu\app\settings.py:215 - memory_type_prompts: dict[str, str | Annotated[CustomPrompt, CompleteMemoryTypePrompt]] = Field(
src\memu\app\settings.py:216 - default_factory=_default_memory_type_prompts,
src\memu\app\settings.py:217 - description="User prompt overrides for each memory type extraction.",
src\memu\app\settings.py:219 - memory_extract_llm_profile: str = Field(default="default", description="LLM profile for memory extract.")
src\memu\app\settings.py:220 - memory_categories: list[CategoryConfig] = Field(
src\memu\app\settings.py:221 - default_factory=_default_memory_categories,
src\memu\app\settings.py:222 - description="Global memory category definitions embedded at service startup.",
src\memu\app\settings.py:237 - description="Enable inline [ref:ITEM_ID] citations in category summaries linking to source memory items.",
... and 2 more

## src\memu\app\__init__.py
src\memu\app\__init__.py:1 - from memu.app.service import MemoryService
src\memu\app\__init__.py:2 - from memu.app.settings import (
src\memu\app\__init__.py:12 - from memu.workflow.runner import (

## src\memu\client\openai_wrapper.py
src\memu\client\openai_wrapper.py:14 - from memu.app.service import MemoryService
src\memu\client\openai_wrapper.py:17 - class MemuChatCompletions:
src\memu\client\openai_wrapper.py:23 - service: MemoryService,
src\memu\client\openai_wrapper.py:48 - def _inject_memories(self, messages: list[dict], memories: list[dict]) -> list[dict]:
src\memu\client\openai_wrapper.py:54 - memory_lines = [f"- {m.get('summary', '')}" for m in memories]
src\memu\client\openai_wrapper.py:73 - async def _retrieve_memories(self, query: str) -> list[dict]:
src\memu\client\openai_wrapper.py:130 - class MemuChat:
src\memu\client\openai_wrapper.py:136 - service: MemoryService,
src\memu\client\openai_wrapper.py:155 - class MemuOpenAIWrapper:
src\memu\client\openai_wrapper.py:161 - from memu.client import MemuOpenAIWrapper
src\memu\client\openai_wrapper.py:164 - service = MemoryService(...)
src\memu\client\openai_wrapper.py:182 - service: MemoryService,
src\memu\client\openai_wrapper.py:192 - service: memU MemoryService instance
src\memu\client\openai_wrapper.py:219 - service: MemoryService,
src\memu\client\openai_wrapper.py:232 - service: memU MemoryService instance
src\memu\client\openai_wrapper.py:245 - from memu.client import wrap_openai

## src\memu\client\__init__.py
src\memu\client\__init__.py:8 - from memu.client import wrap_openai
src\memu\client\__init__.py:12 - service = MemoryService(...)
src\memu\client\__init__.py:24 - from memu.client.openai_wrapper import MemuOpenAIWrapper, wrap_openai

## src\memu\database\factory.py
src\memu\database\factory.py:7 - from memu.app.settings import DatabaseConfig
src\memu\database\factory.py:8 - from memu.database.inmemory import build_inmemory_database
src\memu\database\factory.py:9 - from memu.database.interfaces import Database
src\memu\database\factory.py:24 - - "inmemory": In-memory storage (default, no persistence)
src\memu\database\factory.py:29 - if provider == "inmemory":
src\memu\database\factory.py:30 - return build_inmemory_database(config=config, user_model=user_model)
src\memu\database\factory.py:33 - from memu.database.postgres import build_postgres_database
src\memu\database\factory.py:38 - from memu.database.sqlite import build_sqlite_database

## src\memu\database\interfaces.py
src\memu\database\interfaces.py:5 - from memu.database.models import CategoryItem as CategoryItemRecord
src\memu\database\interfaces.py:6 - from memu.database.models import MemoryCategory as MemoryCategoryRecord
src\memu\database\interfaces.py:7 - from memu.database.models import MemoryItem as MemoryItemRecord
src\memu\database\interfaces.py:8 - from memu.database.models import Resource as ResourceRecord
src\memu\database\interfaces.py:9 - from memu.database.repositories import CategoryItemRepo, MemoryCategoryRepo, MemoryItemRepo, ResourceRepo
src\memu\database\interfaces.py:17 - memory_category_repo: MemoryCategoryRepo
src\memu\database\interfaces.py:18 - memory_item_repo: MemoryItemRepo
src\memu\database\interfaces.py:22 - items: dict[str, MemoryItemRecord]
src\memu\database\interfaces.py:23 - categories: dict[str, MemoryCategoryRecord]

## src\memu\database\models.py
src\memu\database\models.py:12 - MemoryType = Literal["profile", "event", "knowledge", "behavior", "skill", "tool"]
src\memu\database\models.py:15 - def compute_content_hash(summary: str, memory_type: str) -> str:
src\memu\database\models.py:23 - summary: The memory summary text
src\memu\database\models.py:24 - memory_type: The type of memory (profile, event, etc.)
src\memu\database\models.py:31 - content = f"{memory_type}:{normalized}"
src\memu\database\models.py:76 - class MemoryItem(BaseRecord):
src\memu\database\models.py:78 - memory_type: str
src\memu\database\models.py:91 - # - when_to_use: str - Hint for when this memory should be retrieved
src\memu\database\models.py:96 - class MemoryCategory(BaseRecord):
src\memu\database\models.py:126 - ) -> tuple[type[Resource], type[MemoryCategory], type[MemoryItem], type[CategoryItem]]:
src\memu\database\models.py:131 - memory_category_model = merge_scope_model(user_model, MemoryCategory, name_suffix="MemoryCategory")
src\memu\database\models.py:132 - memory_item_model = merge_scope_model(user_model, MemoryItem, name_suffix="MemoryItem")

## src\memu\database\state.py
src\memu\database\state.py:5 - from memu.database.models import CategoryItem, MemoryCategory, MemoryItem, Resource
src\memu\database\state.py:11 - items: dict[str, MemoryItem] = field(default_factory=dict)
src\memu\database\state.py:12 - categories: dict[str, MemoryCategory] = field(default_factory=dict)

## src\memu\database\__init__.py
src\memu\database\__init__.py:3 - from memu.database.factory import build_database
src\memu\database\__init__.py:4 - from memu.database.interfaces import (
src\memu\database\__init__.py:11 - from memu.database.repositories import CategoryItemRepo, MemoryCategoryRepo, MemoryItemRepo, ResourceRepo

## src\memu\database\inmemory\models.py
src\memu\database\inmemory\models.py:5 - from memu.database.models import (
src\memu\database\inmemory\models.py:14 - class InMemoryResource(Resource):
src\memu\database\inmemory\models.py:18 - class InMemoryMemoryItem(MemoryItem):
src\memu\database\inmemory\models.py:22 - class InMemoryMemoryCategory(MemoryCategory):
src\memu\database\inmemory\models.py:26 - class InMemoryCategoryItem(CategoryItem):
src\memu\database\inmemory\models.py:30 - def build_inmemory_models(
src\memu\database\inmemory\models.py:33 - type[InMemoryResource],
src\memu\database\inmemory\models.py:34 - type[InMemoryMemoryCategory],
src\memu\database\inmemory\models.py:35 - type[InMemoryMemoryItem],
src\memu\database\inmemory\models.py:36 - type[InMemoryCategoryItem],
src\memu\database\inmemory\models.py:39 - Build scoped in-memory models that inherit from both the base interface and the user scope model.
src\memu\database\inmemory\models.py:41 - resource_model = merge_scope_model(user_model, InMemoryResource, name_suffix="Resource")
src\memu\database\inmemory\models.py:42 - memory_category_model = merge_scope_model(user_model, InMemoryMemoryCategory, name_suffix="MemoryCategory")
src\memu\database\inmemory\models.py:43 - memory_item_model = merge_scope_model(user_model, InMemoryMemoryItem, name_suffix="MemoryItem")
src\memu\database\inmemory\models.py:44 - category_item_model = merge_scope_model(user_model, InMemoryCategoryItem, name_suffix="CategoryItem")

## src\memu\database\inmemory\repo.py
src\memu\database\inmemory\repo.py:7 - from memu.database.inmemory.models import build_inmemory_models
src\memu\database\inmemory\repo.py:8 - from memu.database.inmemory.repositories import (
src\memu\database\inmemory\repo.py:14 - from memu.database.inmemory.state import InMemoryState
src\memu\database\inmemory\repo.py:15 - from memu.database.interfaces import Database
src\memu\database\inmemory\repo.py:16 - from memu.database.models import CategoryItem, MemoryCategory, MemoryItem, Resource
src\memu\database\inmemory\repo.py:17 - from memu.database.repositories import MemoryCategoryRepo, ResourceRepo
src\memu\database\inmemory\repo.py:20 - class InMemoryStore(Database):
src\memu\database\inmemory\repo.py:26 - memory_item_model: type[Any] | None = None,
src\memu\database\inmemory\repo.py:27 - memory_category_model: type[Any] | None = None,
src\memu\database\inmemory\repo.py:29 - state: InMemoryState | None = None,
src\memu\database\inmemory\repo.py:37 - ) = build_inmemory_models(self.scope_model)
src\memu\database\inmemory\repo.py:39 - self.state = state or InMemoryState()
src\memu\database\inmemory\repo.py:41 - self.items: dict[str, MemoryItem] = self.state.items
src\memu\database\inmemory\repo.py:42 - self.categories: dict[str, MemoryCategory] = self.state.categories
src\memu\database\inmemory\repo.py:46 - memory_item_model = memory_item_model or default_memory_item_model or MemoryItem
src\memu\database\inmemory\repo.py:47 - memory_category_model = memory_category_model or default_memory_category_model or MemoryCategory
src\memu\database\inmemory\repo.py:50 - self.resource_repo: ResourceRepo = InMemoryResourceRepository(state=self.state, resource_model=resource_model)
src\memu\database\inmemory\repo.py:51 - self.memory_category_repo: MemoryCategoryRepo = InMemoryMemoryCategoryRepository(
src\memu\database\inmemory\repo.py:52 - state=self.state, memory_category_model=memory_category_model
src\memu\database\inmemory\repo.py:54 - self.memory_item_repo = InMemoryMemoryItemRepository(state=self.state, memory_item_model=memory_item_model)
... and 1 more

## src\memu\database\inmemory\state.py
src\memu\database\inmemory\state.py:3 - from memu.database.state import DatabaseState
src\memu\database\inmemory\state.py:5 - InMemoryState = DatabaseState
src\memu\database\inmemory\state.py:7 - __all__ = ["DatabaseState", "InMemoryState"]

## src\memu\database\inmemory\vector.py
src\memu\database\inmemory\vector.py:34 - reinforcement_count: Number of times this memory was reinforced
src\memu\database\inmemory\vector.py:35 - last_reinforced_at: When the memory was last reinforced

## src\memu\database\inmemory\__init__.py
src\memu\database\inmemory\__init__.py:5 - from memu.app.settings import DatabaseConfig
src\memu\database\inmemory\__init__.py:6 - from memu.database.inmemory.models import build_inmemory_models
src\memu\database\inmemory\__init__.py:7 - from memu.database.inmemory.repo import InMemoryStore
src\memu\database\inmemory\__init__.py:10 - def build_inmemory_database(
src\memu\database\inmemory\__init__.py:14 - ) -> InMemoryStore:
src\memu\database\inmemory\__init__.py:15 - resource_model, memory_category_model, memory_item_model, category_item_model = build_inmemory_models(user_model)
src\memu\database\inmemory\__init__.py:19 - memory_item_model=memory_item_model,
src\memu\database\inmemory\__init__.py:20 - memory_category_model=memory_category_model,
src\memu\database\inmemory\__init__.py:25 - __all__ = ["build_inmemory_database"]

## src\memu\database\inmemory\repositories\category_item_repo.py
src\memu\database\inmemory\repositories\category_item_repo.py:7 - from memu.database.inmemory.repositories.filter import matches_where
src\memu\database\inmemory\repositories\category_item_repo.py:8 - from memu.database.inmemory.state import InMemoryState
src\memu\database\inmemory\repositories\category_item_repo.py:9 - from memu.database.models import CategoryItem
src\memu\database\inmemory\repositories\category_item_repo.py:10 - from memu.database.repositories.category_item import CategoryItemRepo
src\memu\database\inmemory\repositories\category_item_repo.py:13 - class InMemoryCategoryItemRepository(CategoryItemRepo):
src\memu\database\inmemory\repositories\category_item_repo.py:14 - def __init__(self, *, state: InMemoryState, category_item_model: type[CategoryItem]) -> None:
src\memu\database\inmemory\repositories\category_item_repo.py:45 - __all__ = ["InMemoryCategoryItemRepository"]

## src\memu\database\inmemory\repositories\memory_category_repo.py
src\memu\database\inmemory\repositories\memory_category_repo.py:9 - from memu.database.inmemory.repositories.filter import matches_where
src\memu\database\inmemory\repositories\memory_category_repo.py:10 - from memu.database.inmemory.state import InMemoryState
src\memu\database\inmemory\repositories\memory_category_repo.py:11 - from memu.database.models import MemoryCategory
src\memu\database\inmemory\repositories\memory_category_repo.py:12 - from memu.database.repositories.memory_category import MemoryCategoryRepo as MemoryCategoryRepoProtocol
src\memu\database\inmemory\repositories\memory_category_repo.py:15 - class InMemoryMemoryCategoryRepository(MemoryCategoryRepoProtocol):
src\memu\database\inmemory\repositories\memory_category_repo.py:16 - def __init__(self, *, state: InMemoryState, memory_category_model: type[MemoryCategory]) -> None:
src\memu\database\inmemory\repositories\memory_category_repo.py:18 - self.memory_category_model = memory_category_model
src\memu\database\inmemory\repositories\memory_category_repo.py:19 - self.categories: dict[str, MemoryCategory] = self._state.categories
src\memu\database\inmemory\repositories\memory_category_repo.py:21 - def list_categories(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryCategory]:
src\memu\database\inmemory\repositories\memory_category_repo.py:26 - def clear_categories(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryCategory]:
src\memu\database\inmemory\repositories\memory_category_repo.py:37 - ) -> MemoryCategory:
src\memu\database\inmemory\repositories\memory_category_repo.py:49 - cat = self.memory_category_model(id=cid, name=name, description=description, embedding=embedding, **user_data)
src\memu\database\inmemory\repositories\memory_category_repo.py:61 - ) -> MemoryCategory:
src\memu\database\inmemory\repositories\memory_category_repo.py:83 - MemoryCategoryRepo = InMemoryMemoryCategoryRepository
src\memu\database\inmemory\repositories\memory_category_repo.py:85 - __all__ = ["InMemoryMemoryCategoryRepository", "MemoryCategoryRepo"]

## src\memu\database\inmemory\repositories\memory_item_repo.py
src\memu\database\inmemory\repositories\memory_item_repo.py:9 - from memu.database.inmemory.repositories.filter import matches_where
src\memu\database\inmemory\repositories\memory_item_repo.py:10 - from memu.database.inmemory.state import InMemoryState
src\memu\database\inmemory\repositories\memory_item_repo.py:11 - from memu.database.inmemory.vector import cosine_topk, cosine_topk_salience
src\memu\database\inmemory\repositories\memory_item_repo.py:12 - from memu.database.models import MemoryItem, MemoryType, compute_content_hash
src\memu\database\inmemory\repositories\memory_item_repo.py:13 - from memu.database.repositories.memory_item import MemoryItemRepo
src\memu\database\inmemory\repositories\memory_item_repo.py:16 - class InMemoryMemoryItemRepository(MemoryItemRepo):
src\memu\database\inmemory\repositories\memory_item_repo.py:17 - def __init__(self, *, state: InMemoryState, memory_item_model: type[MemoryItem]) -> None:
src\memu\database\inmemory\repositories\memory_item_repo.py:19 - self.memory_item_model = memory_item_model
src\memu\database\inmemory\repositories\memory_item_repo.py:20 - self.items: dict[str, MemoryItem] = self._state.items
src\memu\database\inmemory\repositories\memory_item_repo.py:22 - def list_items(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryItem]:
src\memu\database\inmemory\repositories\memory_item_repo.py:29 - ) -> dict[str, MemoryItem]:
src\memu\database\inmemory\repositories\memory_item_repo.py:42 - result: dict[str, MemoryItem] = {}
src\memu\database\inmemory\repositories\memory_item_repo.py:53 - def clear_items(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryItem]:
src\memu\database\inmemory\repositories\memory_item_repo.py:62 - def _find_by_hash(self, content_hash: str, user_data: dict[str, Any]) -> MemoryItem | None:
src\memu\database\inmemory\repositories\memory_item_repo.py:83 - memory_type: MemoryType,
src\memu\database\inmemory\repositories\memory_item_repo.py:89 - ) -> MemoryItem:
src\memu\database\inmemory\repositories\memory_item_repo.py:90 - if reinforce and memory_type != "tool":
src\memu\database\inmemory\repositories\memory_item_repo.py:93 - memory_type=memory_type,
src\memu\database\inmemory\repositories\memory_item_repo.py:110 - it = self.memory_item_model(
src\memu\database\inmemory\repositories\memory_item_repo.py:113 - memory_type=memory_type,
... and 11 more

## src\memu\database\inmemory\repositories\resource_repo.py
src\memu\database\inmemory\repositories\resource_repo.py:7 - from memu.database.inmemory.repositories.filter import matches_where
src\memu\database\inmemory\repositories\resource_repo.py:8 - from memu.database.inmemory.state import InMemoryState
src\memu\database\inmemory\repositories\resource_repo.py:9 - from memu.database.models import Resource
src\memu\database\inmemory\repositories\resource_repo.py:10 - from memu.database.repositories.resource import ResourceRepo as ResourceRepoProtocol
src\memu\database\inmemory\repositories\resource_repo.py:13 - class InMemoryResourceRepository(ResourceRepoProtocol):
src\memu\database\inmemory\repositories\resource_repo.py:14 - def __init__(self, *, state: InMemoryState, resource_model: type[Resource]) -> None:
src\memu\database\inmemory\repositories\resource_repo.py:60 - ResourceRepo = InMemoryResourceRepository
src\memu\database\inmemory\repositories\resource_repo.py:62 - __all__ = ["InMemoryResourceRepository", "ResourceRepo"]

## src\memu\database\inmemory\repositories\__init__.py
src\memu\database\inmemory\repositories\__init__.py:1 - from memu.database.inmemory.repositories.category_item_repo import (
src\memu\database\inmemory\repositories\__init__.py:5 - from memu.database.inmemory.repositories.memory_category_repo import (
src\memu\database\inmemory\repositories\__init__.py:9 - from memu.database.inmemory.repositories.memory_item_repo import InMemoryMemoryItemRepository, MemoryItemRepo
src\memu\database\inmemory\repositories\__init__.py:10 - from memu.database.inmemory.repositories.resource_repo import InMemoryResourceRepository, ResourceRepo

## src\memu\database\postgres\migration.py
src\memu\database\postgres\migration.py:44 - from memu.database.postgres.schema import get_metadata

## src\memu\database\postgres\models.py
src\memu\database\postgres\models.py:20 - from memu.database.models import CategoryItem, MemoryCategory, MemoryItem, MemoryType, Resource
src\memu\database\postgres\models.py:54 - class MemoryItemModel(BaseModelMixin, MemoryItem):
src\memu\database\postgres\models.py:56 - memory_type: MemoryType = Field(sa_column=Column(String, nullable=False))
src\memu\database\postgres\models.py:63 - class MemoryCategoryModel(BaseModelMixin, MemoryCategory):
src\memu\database\postgres\models.py:71 - item_id: str = Field(sa_column=Column(ForeignKey("memory_items.id", ondelete="CASCADE"), nullable=False))
src\memu\database\postgres\models.py:72 - category_id: str = Field(sa_column=Column(ForeignKey("memory_categories.id", ondelete="CASCADE"), nullable=False))
src\memu\database\postgres\models.py:164 - memory_category_model = build_table_model(
src\memu\database\postgres\models.py:165 - user_model, MemoryCategoryModel, tablename="memory_categories", unique_with_scope=["name"]
src\memu\database\postgres\models.py:167 - memory_item_model = build_table_model(user_model, MemoryItemModel, tablename="memory_items")

## src\memu\database\postgres\postgres.py
src\memu\database\postgres\postgres.py:8 - from memu.database.interfaces import Database
src\memu\database\postgres\postgres.py:9 - from memu.database.models import CategoryItem, MemoryCategory, MemoryItem, Resource
src\memu\database\postgres\postgres.py:10 - from memu.database.postgres.migration import DDLMode, run_migrations
src\memu\database\postgres\postgres.py:11 - from memu.database.postgres.repositories.category_item_repo import PostgresCategoryItemRepo
src\memu\database\postgres\postgres.py:12 - from memu.database.postgres.repositories.memory_category_repo import PostgresMemoryCategoryRepo
src\memu\database\postgres\postgres.py:13 - from memu.database.postgres.repositories.memory_item_repo import PostgresMemoryItemRepo
src\memu\database\postgres\postgres.py:14 - from memu.database.postgres.repositories.resource_repo import PostgresResourceRepo
src\memu\database\postgres\postgres.py:15 - from memu.database.postgres.schema import SQLAModels, get_sqlalchemy_models, require_sqlalchemy
src\memu\database\postgres\postgres.py:16 - from memu.database.postgres.session import SessionManager
src\memu\database\postgres\postgres.py:17 - from memu.database.repositories import CategoryItemRepo, MemoryCategoryRepo, MemoryItemRepo, ResourceRepo
src\memu\database\postgres\postgres.py:18 - from memu.database.state import DatabaseState
src\memu\database\postgres\postgres.py:25 - memory_category_repo: MemoryCategoryRepo
src\memu\database\postgres\postgres.py:26 - memory_item_repo: MemoryItemRepo
src\memu\database\postgres\postgres.py:29 - items: dict[str, MemoryItem]
src\memu\database\postgres\postgres.py:30 - categories: dict[str, MemoryCategory]
src\memu\database\postgres\postgres.py:42 - memory_category_model: type[Any] | None = None,
src\memu\database\postgres\postgres.py:43 - memory_item_model: type[Any] | None = None,
src\memu\database\postgres\postgres.py:60 - memory_category_model = memory_category_model or self._sqla_models.MemoryCategory
src\memu\database\postgres\postgres.py:61 - memory_item_model = memory_item_model or self._sqla_models.MemoryItem
src\memu\database\postgres\postgres.py:71 - self.memory_category_repo = PostgresMemoryCategoryRepo(
... and 3 more

## src\memu\database\postgres\schema.py
src\memu\database\postgres\schema.py:26 - from memu.database.postgres.models import (
src\memu\database\postgres\schema.py:39 - MemoryCategory: type[Any]
src\memu\database\postgres\schema.py:40 - MemoryItem: type[Any]
src\memu\database\postgres\schema.py:70 - memory_category_model = build_table_model(
src\memu\database\postgres\schema.py:73 - tablename="memory_categories",
src\memu\database\postgres\schema.py:76 - memory_item_model = build_table_model(
src\memu\database\postgres\schema.py:79 - tablename="memory_items",
src\memu\database\postgres\schema.py:96 - MemoryCategory=memory_category_model,
src\memu\database\postgres\schema.py:97 - MemoryItem=memory_item_model,

## src\memu\database\postgres\__init__.py
src\memu\database\postgres\__init__.py:5 - from memu.app.settings import DatabaseConfig
src\memu\database\postgres\__init__.py:6 - from memu.database.postgres.postgres import PostgresStore
src\memu\database\postgres\__init__.py:7 - from memu.database.postgres.schema import SQLAModels, get_sqlalchemy_models
src\memu\database\postgres\__init__.py:29 - memory_category_model=sqla_models.MemoryCategory,
src\memu\database\postgres\__init__.py:30 - memory_item_model=sqla_models.MemoryItem,

## src\memu\database\postgres\migrations\env.py
src\memu\database\postgres\migrations\env.py:8 - from memu.database.postgres.schema import get_metadata

## src\memu\database\postgres\repositories\base.py
src\memu\database\postgres\repositories\base.py:9 - from memu.database.postgres.session import SessionManager
src\memu\database\postgres\repositories\base.py:10 - from memu.database.state import DatabaseState

## src\memu\database\postgres\repositories\category_item_repo.py
src\memu\database\postgres\repositories\category_item_repo.py:6 - from memu.database.models import CategoryItem
src\memu\database\postgres\repositories\category_item_repo.py:7 - from memu.database.postgres.repositories.base import PostgresRepoBase
src\memu\database\postgres\repositories\category_item_repo.py:8 - from memu.database.postgres.session import SessionManager
src\memu\database\postgres\repositories\category_item_repo.py:9 - from memu.database.repositories.category_item import CategoryItemRepo
src\memu\database\postgres\repositories\category_item_repo.py:10 - from memu.database.state import DatabaseState

## src\memu\database\postgres\repositories\memory_category_repo.py
src\memu\database\postgres\repositories\memory_category_repo.py:6 - from memu.database.models import MemoryCategory
src\memu\database\postgres\repositories\memory_category_repo.py:7 - from memu.database.postgres.repositories.base import PostgresRepoBase
src\memu\database\postgres\repositories\memory_category_repo.py:8 - from memu.database.postgres.session import SessionManager
src\memu\database\postgres\repositories\memory_category_repo.py:9 - from memu.database.repositories.memory_category import MemoryCategoryRepo
src\memu\database\postgres\repositories\memory_category_repo.py:10 - from memu.database.state import DatabaseState
src\memu\database\postgres\repositories\memory_category_repo.py:13 - class PostgresMemoryCategoryRepo(PostgresRepoBase, MemoryCategoryRepo):
src\memu\database\postgres\repositories\memory_category_repo.py:18 - memory_category_model: type[MemoryCategory],
src\memu\database\postgres\repositories\memory_category_repo.py:24 - self._memory_category_model = memory_category_model
src\memu\database\postgres\repositories\memory_category_repo.py:25 - self.categories: dict[str, MemoryCategory] = self._state.categories
src\memu\database\postgres\repositories\memory_category_repo.py:27 - def list_categories(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryCategory]:
src\memu\database\postgres\repositories\memory_category_repo.py:30 - filters = self._build_filters(self._sqla_models.MemoryCategory, where)
src\memu\database\postgres\repositories\memory_category_repo.py:32 - rows = session.scalars(select(self._sqla_models.MemoryCategory).where(*filters)).all()
src\memu\database\postgres\repositories\memory_category_repo.py:33 - result: dict[str, MemoryCategory] = {}
src\memu\database\postgres\repositories\memory_category_repo.py:40 - def clear_categories(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryCategory]:
src\memu\database\postgres\repositories\memory_category_repo.py:43 - filters = self._build_filters(self._sqla_models.MemoryCategory, where)
src\memu\database\postgres\repositories\memory_category_repo.py:46 - rows = session.scalars(select(self._sqla_models.MemoryCategory).where(*filters)).all()
src\memu\database\postgres\repositories\memory_category_repo.py:47 - deleted: dict[str, MemoryCategory] = {}
src\memu\database\postgres\repositories\memory_category_repo.py:72 - ) -> MemoryCategory:
src\memu\database\postgres\repositories\memory_category_repo.py:77 - filters = [self._sqla_models.MemoryCategory.name == name]
src\memu\database\postgres\repositories\memory_category_repo.py:79 - filters.append(getattr(self._sqla_models.MemoryCategory, key) == value)
... and 7 more

## src\memu\database\postgres\repositories\memory_item_repo.py
src\memu\database\postgres\repositories\memory_item_repo.py:8 - from memu.database.models import MemoryItem, MemoryType, compute_content_hash
src\memu\database\postgres\repositories\memory_item_repo.py:9 - from memu.database.postgres.repositories.base import PostgresRepoBase
src\memu\database\postgres\repositories\memory_item_repo.py:10 - from memu.database.postgres.session import SessionManager
src\memu\database\postgres\repositories\memory_item_repo.py:11 - from memu.database.state import DatabaseState
src\memu\database\postgres\repositories\memory_item_repo.py:14 - class PostgresMemoryItemRepo(PostgresRepoBase):
src\memu\database\postgres\repositories\memory_item_repo.py:19 - memory_item_model: type[MemoryItem],
src\memu\database\postgres\repositories\memory_item_repo.py:28 - self._memory_item_model = memory_item_model
src\memu\database\postgres\repositories\memory_item_repo.py:29 - self.items: dict[str, MemoryItem] = self._state.items
src\memu\database\postgres\repositories\memory_item_repo.py:31 - def get_item(self, memory_id: str) -> MemoryItem | None:
src\memu\database\postgres\repositories\memory_item_repo.py:36 - select(self._sqla_models.MemoryItem).where(self._sqla_models.MemoryItem.id == memory_id)
src\memu\database\postgres\repositories\memory_item_repo.py:43 - def list_items(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryItem]:
src\memu\database\postgres\repositories\memory_item_repo.py:46 - filters = self._build_filters(self._sqla_models.MemoryItem, where)
src\memu\database\postgres\repositories\memory_item_repo.py:48 - rows = session.scalars(select(self._sqla_models.MemoryItem).where(*filters)).all()
src\memu\database\postgres\repositories\memory_item_repo.py:49 - result: dict[str, MemoryItem] = {}
src\memu\database\postgres\repositories\memory_item_repo.py:58 - ) -> dict[str, MemoryItem]:
src\memu\database\postgres\repositories\memory_item_repo.py:73 - filters = self._build_filters(self._sqla_models.MemoryItem, where)
src\memu\database\postgres\repositories\memory_item_repo.py:75 - ref_id_col = self._sqla_models.MemoryItem.extra["ref_id"].astext
src\memu\database\postgres\repositories\memory_item_repo.py:80 - rows = session.scalars(select(self._sqla_models.MemoryItem).where(*filters)).all()
src\memu\database\postgres\repositories\memory_item_repo.py:81 - result: dict[str, MemoryItem] = {}
src\memu\database\postgres\repositories\memory_item_repo.py:88 - def clear_items(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryItem]:
... and 27 more

## src\memu\database\postgres\repositories\resource_repo.py
src\memu\database\postgres\repositories\resource_repo.py:6 - from memu.database.models import Resource
src\memu\database\postgres\repositories\resource_repo.py:7 - from memu.database.postgres.repositories.base import PostgresRepoBase
src\memu\database\postgres\repositories\resource_repo.py:8 - from memu.database.postgres.session import SessionManager
src\memu\database\postgres\repositories\resource_repo.py:9 - from memu.database.repositories.resource import ResourceRepo
src\memu\database\postgres\repositories\resource_repo.py:10 - from memu.database.state import DatabaseState

## src\memu\database\postgres\repositories\__init__.py
src\memu\database\postgres\repositories\__init__.py:1 - from memu.database.postgres.repositories.category_item_repo import PostgresCategoryItemRepo
src\memu\database\postgres\repositories\__init__.py:2 - from memu.database.postgres.repositories.memory_category_repo import PostgresMemoryCategoryRepo
src\memu\database\postgres\repositories\__init__.py:3 - from memu.database.postgres.repositories.memory_item_repo import PostgresMemoryItemRepo
src\memu\database\postgres\repositories\__init__.py:4 - from memu.database.postgres.repositories.resource_repo import PostgresResourceRepo

## src\memu\database\repositories\category_item.py
src\memu\database\repositories\category_item.py:6 - from memu.database.models import CategoryItem

## src\memu\database\repositories\memory_category.py
src\memu\database\repositories\memory_category.py:6 - from memu.database.models import MemoryCategory
src\memu\database\repositories\memory_category.py:10 - class MemoryCategoryRepo(Protocol):
src\memu\database\repositories\memory_category.py:13 - categories: dict[str, MemoryCategory]
src\memu\database\repositories\memory_category.py:15 - def list_categories(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryCategory]: ...
src\memu\database\repositories\memory_category.py:17 - def clear_categories(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryCategory]: ...
src\memu\database\repositories\memory_category.py:21 - ) -> MemoryCategory: ...
src\memu\database\repositories\memory_category.py:31 - ) -> MemoryCategory: ...

## src\memu\database\repositories\memory_item.py
src\memu\database\repositories\memory_item.py:6 - from memu.database.models import MemoryItem, MemoryType
src\memu\database\repositories\memory_item.py:10 - class MemoryItemRepo(Protocol):
src\memu\database\repositories\memory_item.py:13 - items: dict[str, MemoryItem]
src\memu\database\repositories\memory_item.py:15 - def get_item(self, item_id: str) -> MemoryItem | None: ...
src\memu\database\repositories\memory_item.py:17 - def list_items(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryItem]: ...
src\memu\database\repositories\memory_item.py:19 - def clear_items(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryItem]: ...
src\memu\database\repositories\memory_item.py:25 - memory_type: MemoryType,
src\memu\database\repositories\memory_item.py:31 - ) -> MemoryItem: ...
src\memu\database\repositories\memory_item.py:37 - memory_type: MemoryType | None = None,
src\memu\database\repositories\memory_item.py:42 - ) -> MemoryItem: ...
src\memu\database\repositories\memory_item.py:48 - ) -> dict[str, MemoryItem]: ...

## src\memu\database\repositories\resource.py
src\memu\database\repositories\resource.py:6 - from memu.database.models import Resource

## src\memu\database\repositories\__init__.py
src\memu\database\repositories\__init__.py:1 - from memu.database.repositories.category_item import CategoryItemRepo
src\memu\database\repositories\__init__.py:2 - from memu.database.repositories.memory_category import MemoryCategoryRepo
src\memu\database\repositories\__init__.py:3 - from memu.database.repositories.memory_item import MemoryItemRepo
src\memu\database\repositories\__init__.py:4 - from memu.database.repositories.resource import ResourceRepo
src\memu\database\repositories\__init__.py:6 - __all__ = ["CategoryItemRepo", "MemoryCategoryRepo", "MemoryItemRepo", "ResourceRepo"]

## src\memu\database\sqlite\models.py
src\memu\database\sqlite\models.py:16 - from memu.database.models import CategoryItem, MemoryCategory, MemoryItem, MemoryType, Resource
src\memu\database\sqlite\models.py:78 - class SQLiteMemoryItemModel(SQLiteBaseModelMixin, MemoryItem):
src\memu\database\sqlite\models.py:82 - memory_type: MemoryType = Field(sa_column=Column(String, nullable=False))
src\memu\database\sqlite\models.py:97 - logger.warning("Failed to parse memory item embedding JSON: %s", e)
src\memu\database\sqlite\models.py:109 - class SQLiteMemoryCategoryModel(SQLiteBaseModelMixin, MemoryCategory):

## src\memu\database\sqlite\schema.py
src\memu\database\sqlite\schema.py:12 - from memu.database.sqlite.models import (
src\memu\database\sqlite\schema.py:27 - MemoryCategory: type[Any]
src\memu\database\sqlite\schema.py:28 - MemoryItem: type[Any]
src\memu\database\sqlite\schema.py:58 - memory_category_model = build_sqlite_table_model(
src\memu\database\sqlite\schema.py:61 - tablename="sqlite_memory_categories",
src\memu\database\sqlite\schema.py:64 - memory_item_model = build_sqlite_table_model(
src\memu\database\sqlite\schema.py:67 - tablename="sqlite_memory_items",
src\memu\database\sqlite\schema.py:84 - MemoryCategory=memory_category_model,
src\memu\database\sqlite\schema.py:85 - MemoryItem=memory_item_model,

## src\memu\database\sqlite\sqlite.py
src\memu\database\sqlite\sqlite.py:11 - from memu.database.interfaces import Database
src\memu\database\sqlite\sqlite.py:12 - from memu.database.models import CategoryItem, MemoryCategory, MemoryItem, Resource
src\memu\database\sqlite\sqlite.py:13 - from memu.database.repositories import CategoryItemRepo, MemoryCategoryRepo, MemoryItemRepo, ResourceRepo
src\memu\database\sqlite\sqlite.py:14 - from memu.database.sqlite.repositories.category_item_repo import SQLiteCategoryItemRepo
src\memu\database\sqlite\sqlite.py:15 - from memu.database.sqlite.repositories.memory_category_repo import SQLiteMemoryCategoryRepo
src\memu\database\sqlite\sqlite.py:16 - from memu.database.sqlite.repositories.memory_item_repo import SQLiteMemoryItemRepo
src\memu\database\sqlite\sqlite.py:17 - from memu.database.sqlite.repositories.resource_repo import SQLiteResourceRepo
src\memu\database\sqlite\sqlite.py:18 - from memu.database.sqlite.schema import SQLiteSQLAModels, get_sqlite_sqlalchemy_models
src\memu\database\sqlite\sqlite.py:19 - from memu.database.sqlite.session import SQLiteSessionManager
src\memu\database\sqlite\sqlite.py:20 - from memu.database.state import DatabaseState
src\memu\database\sqlite\sqlite.py:34 - memory_category_repo: Repository for memory categories.
src\memu\database\sqlite\sqlite.py:35 - memory_item_repo: Repository for memory items.
src\memu\database\sqlite\sqlite.py:38 - items: Dict cache of memory item records.
src\memu\database\sqlite\sqlite.py:39 - categories: Dict cache of memory category records.
src\memu\database\sqlite\sqlite.py:44 - memory_category_repo: MemoryCategoryRepo
src\memu\database\sqlite\sqlite.py:45 - memory_item_repo: MemoryItemRepo
src\memu\database\sqlite\sqlite.py:48 - items: dict[str, MemoryItem]
src\memu\database\sqlite\sqlite.py:49 - categories: dict[str, MemoryCategory]
src\memu\database\sqlite\sqlite.py:58 - memory_category_model: type[Any] | None = None,
src\memu\database\sqlite\sqlite.py:59 - memory_item_model: type[Any] | None = None,
... and 8 more

## src\memu\database\sqlite\__init__.py
src\memu\database\sqlite\__init__.py:7 - from memu.app.settings import DatabaseConfig
src\memu\database\sqlite\__init__.py:8 - from memu.database.sqlite.sqlite import SQLiteStore

## src\memu\database\sqlite\repositories\base.py
src\memu\database\sqlite\repositories\base.py:12 - from memu.database.sqlite.session import SQLiteSessionManager
src\memu\database\sqlite\repositories\base.py:13 - from memu.database.state import DatabaseState

## src\memu\database\sqlite\repositories\category_item_repo.py
src\memu\database\sqlite\repositories\category_item_repo.py:11 - from memu.database.models import CategoryItem
src\memu\database\sqlite\repositories\category_item_repo.py:12 - from memu.database.repositories.category_item import CategoryItemRepo
src\memu\database\sqlite\repositories\category_item_repo.py:13 - from memu.database.sqlite.repositories.base import SQLiteRepoBase
src\memu\database\sqlite\repositories\category_item_repo.py:14 - from memu.database.sqlite.schema import SQLiteSQLAModels
src\memu\database\sqlite\repositories\category_item_repo.py:15 - from memu.database.sqlite.session import SQLiteSessionManager
src\memu\database\sqlite\repositories\category_item_repo.py:16 - from memu.database.state import DatabaseState
src\memu\database\sqlite\repositories\category_item_repo.py:88 - item_id: Memory item ID.
src\memu\database\sqlite\repositories\category_item_repo.py:147 - item_id: Memory item ID.
src\memu\database\sqlite\repositories\category_item_repo.py:168 - item_id: Memory item ID.

## src\memu\database\sqlite\repositories\memory_category_repo.py
src\memu\database\sqlite\repositories\memory_category_repo.py:11 - from memu.database.models import MemoryCategory
src\memu\database\sqlite\repositories\memory_category_repo.py:12 - from memu.database.repositories.memory_category import MemoryCategoryRepo
src\memu\database\sqlite\repositories\memory_category_repo.py:13 - from memu.database.sqlite.repositories.base import SQLiteRepoBase
src\memu\database\sqlite\repositories\memory_category_repo.py:14 - from memu.database.sqlite.schema import SQLiteSQLAModels
src\memu\database\sqlite\repositories\memory_category_repo.py:15 - from memu.database.sqlite.session import SQLiteSessionManager
src\memu\database\sqlite\repositories\memory_category_repo.py:16 - from memu.database.state import DatabaseState
src\memu\database\sqlite\repositories\memory_category_repo.py:21 - class SQLiteMemoryCategoryRepo(SQLiteRepoBase, MemoryCategoryRepo):
src\memu\database\sqlite\repositories\memory_category_repo.py:28 - memory_category_model: type[Any],
src\memu\database\sqlite\repositories\memory_category_repo.py:37 - memory_category_model: SQLModel class for memory categories.
src\memu\database\sqlite\repositories\memory_category_repo.py:48 - self._memory_category_model = memory_category_model
src\memu\database\sqlite\repositories\memory_category_repo.py:51 - def list_categories(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryCategory]:
src\memu\database\sqlite\repositories\memory_category_repo.py:61 - stmt = select(self._memory_category_model)
src\memu\database\sqlite\repositories\memory_category_repo.py:62 - filters = self._build_filters(self._memory_category_model, where)
src\memu\database\sqlite\repositories\memory_category_repo.py:67 - result: dict[str, MemoryCategory] = {}
src\memu\database\sqlite\repositories\memory_category_repo.py:69 - cat = MemoryCategory(
src\memu\database\sqlite\repositories\memory_category_repo.py:84 - def clear_categories(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryCategory]:
src\memu\database\sqlite\repositories\memory_category_repo.py:93 - filters = self._build_filters(self._memory_category_model, where)
src\memu\database\sqlite\repositories\memory_category_repo.py:96 - stmt = select(self._memory_category_model)
src\memu\database\sqlite\repositories\memory_category_repo.py:101 - deleted: dict[str, MemoryCategory] = {}
src\memu\database\sqlite\repositories\memory_category_repo.py:103 - cat = MemoryCategory(
... and 11 more

## src\memu\database\sqlite\repositories\memory_item_repo.py
src\memu\database\sqlite\repositories\memory_item_repo.py:12 - from memu.database.inmemory.vector import cosine_topk, cosine_topk_salience
src\memu\database\sqlite\repositories\memory_item_repo.py:13 - from memu.database.models import MemoryItem, MemoryType, compute_content_hash
src\memu\database\sqlite\repositories\memory_item_repo.py:14 - from memu.database.repositories.memory_item import MemoryItemRepo
src\memu\database\sqlite\repositories\memory_item_repo.py:15 - from memu.database.sqlite.repositories.base import SQLiteRepoBase
src\memu\database\sqlite\repositories\memory_item_repo.py:16 - from memu.database.sqlite.schema import SQLiteSQLAModels
src\memu\database\sqlite\repositories\memory_item_repo.py:17 - from memu.database.sqlite.session import SQLiteSessionManager
src\memu\database\sqlite\repositories\memory_item_repo.py:18 - from memu.database.state import DatabaseState
src\memu\database\sqlite\repositories\memory_item_repo.py:23 - class SQLiteMemoryItemRepo(SQLiteRepoBase, MemoryItemRepo):
src\memu\database\sqlite\repositories\memory_item_repo.py:30 - memory_item_model: type[Any],
src\memu\database\sqlite\repositories\memory_item_repo.py:39 - memory_item_model: SQLModel class for memory items.
src\memu\database\sqlite\repositories\memory_item_repo.py:50 - self._memory_item_model = memory_item_model
src\memu\database\sqlite\repositories\memory_item_repo.py:53 - def get_item(self, item_id: str) -> MemoryItem | None:
src\memu\database\sqlite\repositories\memory_item_repo.py:67 - stmt = select(self._memory_item_model).where(self._memory_item_model.id == item_id)
src\memu\database\sqlite\repositories\memory_item_repo.py:73 - item = MemoryItem(
src\memu\database\sqlite\repositories\memory_item_repo.py:76 - memory_type=row.memory_type,
src\memu\database\sqlite\repositories\memory_item_repo.py:86 - def list_items(self, where: Mapping[str, Any] | None = None) -> dict[str, MemoryItem]:
src\memu\database\sqlite\repositories\memory_item_repo.py:96 - stmt = select(self._memory_item_model)
src\memu\database\sqlite\repositories\memory_item_repo.py:97 - filters = self._build_filters(self._memory_item_model, where)
src\memu\database\sqlite\repositories\memory_item_repo.py:102 - result: dict[str, MemoryItem] = {}
src\memu\database\sqlite\repositories\memory_item_repo.py:104 - item = MemoryItem(
... and 48 more

## src\memu\database\sqlite\repositories\resource_repo.py
src\memu\database\sqlite\repositories\resource_repo.py:11 - from memu.database.models import Resource
src\memu\database\sqlite\repositories\resource_repo.py:12 - from memu.database.repositories.resource import ResourceRepo
src\memu\database\sqlite\repositories\resource_repo.py:13 - from memu.database.sqlite.repositories.base import SQLiteRepoBase
src\memu\database\sqlite\repositories\resource_repo.py:14 - from memu.database.sqlite.schema import SQLiteSQLAModels
src\memu\database\sqlite\repositories\resource_repo.py:15 - from memu.database.sqlite.session import SQLiteSessionManager
src\memu\database\sqlite\repositories\resource_repo.py:16 - from memu.database.state import DatabaseState

## src\memu\database\sqlite\repositories\__init__.py
src\memu\database\sqlite\repositories\__init__.py:3 - from memu.database.sqlite.repositories.base import SQLiteRepoBase
src\memu\database\sqlite\repositories\__init__.py:4 - from memu.database.sqlite.repositories.category_item_repo import SQLiteCategoryItemRepo
src\memu\database\sqlite\repositories\__init__.py:5 - from memu.database.sqlite.repositories.memory_category_repo import SQLiteMemoryCategoryRepo
src\memu\database\sqlite\repositories\__init__.py:6 - from memu.database.sqlite.repositories.memory_item_repo import SQLiteMemoryItemRepo
src\memu\database\sqlite\repositories\__init__.py:7 - from memu.database.sqlite.repositories.resource_repo import SQLiteResourceRepo

## src\memu\embedding\http_client.py
src\memu\embedding\http_client.py:10 - from memu.embedding.backends.base import EmbeddingBackend
src\memu\embedding\http_client.py:11 - from memu.embedding.backends.doubao import DoubaoEmbeddingBackend, DoubaoMultimodalEmbeddingInput
src\memu\embedding\http_client.py:12 - from memu.embedding.backends.openai import OpenAIEmbeddingBackend

## src\memu\embedding\__init__.py
src\memu\embedding\__init__.py:1 - from memu.embedding.http_client import HTTPEmbeddingClient
src\memu\embedding\__init__.py:2 - from memu.embedding.openai_sdk import OpenAIEmbeddingSDKClient

## src\memu\embedding\backends\doubao.py
src\memu\embedding\backends\doubao.py:5 - from memu.embedding.backends.base import EmbeddingBackend

## src\memu\embedding\backends\openai.py
src\memu\embedding\backends\openai.py:5 - from memu.embedding.backends.base import EmbeddingBackend

## src\memu\embedding\backends\__init__.py
src\memu\embedding\backends\__init__.py:1 - from memu.embedding.backends.base import EmbeddingBackend
src\memu\embedding\backends\__init__.py:2 - from memu.embedding.backends.doubao import DoubaoEmbeddingBackend, DoubaoMultimodalEmbeddingInput
src\memu\embedding\backends\__init__.py:3 - from memu.embedding.backends.openai import OpenAIEmbeddingBackend

## src\memu\integrations\langgraph.py
src\memu\integrations\langgraph.py:16 - from memu.app.service import MemoryService
src\memu\integrations\langgraph.py:29 - class MemUIntegrationError(Exception):
src\memu\integrations\langgraph.py:38 - metadata: dict[str, Any] | None = Field(default=None, description="Additional metadata related to the memory.")
src\memu\integrations\langgraph.py:48 - default=None, description="Optional filter for memory metadata (e.g., {'category': 'work'})."
src\memu\integrations\langgraph.py:53 - class MemULangGraphTools:
src\memu\integrations\langgraph.py:56 - This class provides a bridge between the MemU MemoryService and LangChain's
src\memu\integrations\langgraph.py:60 - def __init__(self, memory_service: MemoryService):
src\memu\integrations\langgraph.py:62 - self.memory_service = memory_service
src\memu\integrations\langgraph.py:73 - def save_memory_tool(self) -> StructuredTool:
src\memu\integrations\langgraph.py:77 - logger.info("Entering save_memory_tool for user_id: %s", user_id)
src\memu\integrations\langgraph.py:86 - logger.debug("Calling memory_service.memorize with temporary file: %s", file_path)
src\memu\integrations\langgraph.py:92 - logger.info("Successfully saved memory for user_id: %s", user_id)
src\memu\integrations\langgraph.py:94 - error_msg = f"Failed to save memory for user {user_id}: {e!s}"
src\memu\integrations\langgraph.py:108 - name="save_memory",
src\memu\integrations\langgraph.py:109 - description="Save a piece of information, conversation snippet, or memory for a user.",
src\memu\integrations\langgraph.py:113 - def search_memory_tool(self) -> StructuredTool:
src\memu\integrations\langgraph.py:123 - logger.info("Entering search_memory_tool for user_id: %s, query: '%s'", user_id, query)
src\memu\integrations\langgraph.py:130 - logger.debug("Calling memory_service.retrieve with where_filter: %s", where_filter)
src\memu\integrations\langgraph.py:131 - result = await self.memory_service.retrieve(
src\memu\integrations\langgraph.py:137 - error_msg = f"Failed to search memory for user {user_id}: {e!s}"
... and 1 more

## src\memu\integrations\__init__.py
src\memu\integrations\__init__.py:1 - from .langgraph import MemULangGraphTools

## src\memu\llm\http_client.py
src\memu\llm\http_client.py:12 - from memu.llm.backends.base import LLMBackend
src\memu\llm\http_client.py:13 - from memu.llm.backends.doubao import DoubaoLLMBackend
src\memu\llm\http_client.py:14 - from memu.llm.backends.grok import GrokBackend
src\memu\llm\http_client.py:15 - from memu.llm.backends.openai import OpenAILLMBackend
src\memu\llm\http_client.py:16 - from memu.llm.backends.openrouter import OpenRouterLLMBackend

## src\memu\llm\lazyllm_client.py
src\memu\llm\lazyllm_client.py:62 - client = lazyllm.namespace("MEMU").OnlineModule(source=self.llm_source, model=self.chat_model, type="llm")
src\memu\llm\lazyllm_client.py:86 - client = lazyllm.namespace("MEMU").OnlineModule(source=self.llm_source, model=self.chat_model, type="llm")
src\memu\llm\lazyllm_client.py:113 - client = lazyllm.namespace("MEMU").OnlineModule(source=self.vlm_source, model=self.vlm_model, type="vlm")
src\memu\llm\lazyllm_client.py:156 - client = lazyllm.namespace("MEMU").OnlineModule(source=self.stt_source, model=self.stt_model, type="stt")

## src\memu\llm\backends\doubao.py
src\memu\llm\backends\doubao.py:5 - from memu.llm.backends.base import LLMBackend

## src\memu\llm\backends\grok.py
src\memu\llm\backends\grok.py:3 - from memu.llm.backends.openai import OpenAILLMBackend

## src\memu\llm\backends\openai.py
src\memu\llm\backends\openai.py:5 - from memu.llm.backends.base import LLMBackend

## src\memu\llm\backends\openrouter.py
src\memu\llm\backends\openrouter.py:5 - from memu.llm.backends.base import LLMBackend

## src\memu\llm\backends\__init__.py
src\memu\llm\backends\__init__.py:1 - from memu.llm.backends.base import LLMBackend
src\memu\llm\backends\__init__.py:2 - from memu.llm.backends.doubao import DoubaoLLMBackend
src\memu\llm\backends\__init__.py:3 - from memu.llm.backends.grok import GrokBackend
src\memu\llm\backends\__init__.py:4 - from memu.llm.backends.openai import OpenAILLMBackend
src\memu\llm\backends\__init__.py:5 - from memu.llm.backends.openrouter import OpenRouterLLMBackend

## src\memu\prompts\__init__.py
src\memu\prompts\__init__.py:1 - from memu.prompts.category_summary import PROMPT as CATEGORY_SUMMARY_PROMPT
src\memu\prompts\__init__.py:2 - from memu.prompts.memory_type import DEFAULT_MEMORY_TYPES
src\memu\prompts\__init__.py:3 - from memu.prompts.memory_type import PROMPTS as MEMORY_TYPE_PROMPTS
src\memu\prompts\__init__.py:4 - from memu.prompts.preprocess import PROMPTS as PREPROCESS_PROMPTS
src\memu\prompts\__init__.py:5 - from memu.prompts.retrieve.judger import PROMPT as RETRIEVE_JUDGER_PROMPT

## src\memu\prompts\category_patch\__init__.py
src\memu\prompts\category_patch\__init__.py:3 - from memu.prompts.category_patch.category import PROMPT

## src\memu\prompts\category_summary\category.py
src\memu\prompts\category_summary\category.py:86 - New memory items:
src\memu\prompts\category_summary\category.py:125 - New memory items:
src\memu\prompts\category_summary\category.py:238 - New memory items:
src\memu\prompts\category_summary\category.py:274 - New memory items:

## src\memu\prompts\category_summary\category_with_refs.py
src\memu\prompts\category_summary\category_with_refs.py:13 - IMPORTANT: You must include inline references to source memory items using the format [ref:ITEM_ID] when incorporating information from the provided memory items. This creates a traceable link between summary statements and their sources.
src\memu\prompts\category_summary\category_with_refs.py:54 - 1. Every piece of information from new memory items MUST have a [ref:ITEM_ID] citation
src\memu\prompts\category_summary\category_with_refs.py:74 - - ALWAYS include [ref:ITEM_ID] for information from new memory items.
src\memu\prompts\category_summary\category_with_refs.py:92 - New memory items with IDs:
src\memu\prompts\category_summary\category_with_refs.py:118 - New memory items with IDs:

## src\memu\prompts\category_summary\__init__.py
src\memu\prompts\category_summary\__init__.py:3 - from memu.prompts.category_summary.category import CUSTOM_PROMPT, PROMPT
src\memu\prompts\category_summary\__init__.py:4 - from memu.prompts.category_summary.category_with_refs import CUSTOM_PROMPT as CUSTOM_PROMPT_WITH_REFS
src\memu\prompts\category_summary\__init__.py:5 - from memu.prompts.category_summary.category_with_refs import PROMPT as PROMPT_WITH_REFS

## src\memu\prompts\memory_type\behavior.py
src\memu\prompts\memory_type\behavior.py:9 - ## Memory Categories:
src\memu\prompts\memory_type\behavior.py:15 - ## Memory Item Requirements:
src\memu\prompts\memory_type\behavior.py:23 - ## About Memory Categories:
src\memu\prompts\memory_type\behavior.py:29 - ## Memory Item Content Requirements:
src\memu\prompts\memory_type\behavior.py:38 - "content": "the content of the memory item",
src\memu\prompts\memory_type\behavior.py:39 - "categories": [list of memory categories that this memory item should belongs to, can be empty]
src\memu\prompts\memory_type\behavior.py:96 - ## Memory Categories:

## src\memu\prompts\memory_type\event.py
src\memu\prompts\memory_type\event.py:9 - ## Memory Categories:
src\memu\prompts\memory_type\event.py:15 - ## Memory Item Requirements:
src\memu\prompts\memory_type\event.py:35 - ## About Memory Categories:
src\memu\prompts\memory_type\event.py:41 - ## Memory Item Content Requirements:
src\memu\prompts\memory_type\event.py:50 - "content": "the content of the memory item",
src\memu\prompts\memory_type\event.py:51 - "categories": [list of memory categories that this memory item should belongs to, can be empty]
src\memu\prompts\memory_type\event.py:108 - ## Memory Categories:

## src\memu\prompts\memory_type\knowledge.py
src\memu\prompts\memory_type\knowledge.py:9 - ## Memory Categories:
src\memu\prompts\memory_type\knowledge.py:15 - ## Memory Item Requirements:
src\memu\prompts\memory_type\knowledge.py:25 - ## About Memory Categories:
src\memu\prompts\memory_type\knowledge.py:31 - ## Memory Item Content Requirements:
src\memu\prompts\memory_type\knowledge.py:40 - "content": "the content of the memory item",
src\memu\prompts\memory_type\knowledge.py:41 - "categories": [list of memory categories that this memory item should belongs to, can be empty]
src\memu\prompts\memory_type\knowledge.py:95 - ## Memory Categories:

## src\memu\prompts\memory_type\profile.py
src\memu\prompts\memory_type\profile.py:9 - ## Memory Categories:
src\memu\prompts\memory_type\profile.py:15 - ## Memory Item Requirements:
src\memu\prompts\memory_type\profile.py:34 - ## About Memory Categories:
src\memu\prompts\memory_type\profile.py:40 - ## Memory Item Content Requirements:
src\memu\prompts\memory_type\profile.py:49 - "content": "the content of the memory item",
src\memu\prompts\memory_type\profile.py:50 - "categories": [list of memory categories that this memory item should belongs to, can be empty]
src\memu\prompts\memory_type\profile.py:105 - ## Memory Categories:

## src\memu\prompts\memory_type\skill.py
src\memu\prompts\memory_type\skill.py:9 - ## Memory Categories:
src\memu\prompts\memory_type\skill.py:13 - Extract skill-based memory items as comprehensive skill profiles that include:
src\memu\prompts\memory_type\skill.py:275 - ## About Memory Categories:
src\memu\prompts\memory_type\skill.py:280 - ## Memory Item Content Requirements:
src\memu\prompts\memory_type\skill.py:344 - "categories": [list of memory categories]
src\memu\prompts\memory_type\skill.py:430 - ## Memory Categories:

## src\memu\prompts\memory_type\tool.py
src\memu\prompts\memory_type\tool.py:3 - You are a professional Tool Memory Extractor. Your core task is to extract tool usage patterns, execution results, and learnings from agent logs or tool execution traces. This enables agents to learn from their tool usage history.
src\memu\prompts\memory_type\tool.py:22 - - Each tool memory must capture: tool name, what it was used for, outcome, and when to use it again.
src\memu\prompts\memory_type\tool.py:25 - - Each memory should help answer: "When should I use this tool?"
src\memu\prompts\memory_type\tool.py:46 - ## Memory Categories:
src\memu\prompts\memory_type\tool.py:66 - Example 1: Tool Memory Extraction

## src\memu\prompts\memory_type\__init__.py
src\memu\prompts\memory_type\__init__.py:1 - from memu.prompts.memory_type import behavior, event, knowledge, profile, skill, tool
src\memu\prompts\memory_type\__init__.py:3 - # DEFAULT_MEMORY_TYPES: list[str] = ["profile", "event", "knowledge", "behavior"]
src\memu\prompts\memory_type\__init__.py:4 - DEFAULT_MEMORY_TYPES: list[str] = ["profile", "event"]
src\memu\prompts\memory_type\__init__.py:30 - DEFAULT_MEMORY_CUSTOM_PROMPT_ORDINAL: dict[str, int] = {

## src\memu\prompts\preprocess\__init__.py
src\memu\prompts\preprocess\__init__.py:1 - from memu.prompts.preprocess import audio, conversation, document, image, video

## src\memu\prompts\retrieve\llm_item_ranker.py
src\memu\prompts\retrieve\llm_item_ranker.py:35 - Available Memory Items:
src\memu\prompts\retrieve\llm_item_ranker.py:38 - These memory items belong to the following relevant categories that were already identified:

## src\memu\prompts\retrieve\pre_retrieval_decision.py
src\memu\prompts\retrieve\pre_retrieval_decision.py:3 - Determine whether the current query requires retrieving information from memory or can be answered directly without retrieval.

## src\memu\utils\references.py
src\memu\utils\references.py:14 - from memu.database.interfaces import Database
src\memu\utils\references.py:138 - item = store.memory_item_repo.get_item(item_id)
src\memu\utils\references.py:143 - "memory_type": item.memory_type,
src\memu\utils\references.py:161 - 'Available memory items for reference:\\n- [ref:abc] User loves coffee'
src\memu\utils\references.py:166 - lines = ["Available memory items for reference:"]

## src\memu\utils\tool.py
src\memu\utils\tool.py:8 - from memu.database.models import MemoryItem, ToolCallResult
src\memu\utils\tool.py:11 - def get_tool_calls(item: MemoryItem) -> list[dict[str, Any]]:
src\memu\utils\tool.py:12 - """Get tool calls from a memory item's extra field.
src\memu\utils\tool.py:15 - item: The MemoryItem to get tool calls from
src\memu\utils\tool.py:24 - def set_tool_calls(item: MemoryItem, tool_calls: list[dict[str, Any]]) -> None:
src\memu\utils\tool.py:28 - item: The MemoryItem to set tool calls on
src\memu\utils\tool.py:36 - def add_tool_call(item: MemoryItem, tool_call: ToolCallResult) -> None:
src\memu\utils\tool.py:37 - """Add a tool call result to a memory item (for tool type memories).
src\memu\utils\tool.py:40 - item: The MemoryItem to add the tool call to (must be tool type)
src\memu\utils\tool.py:44 - ValueError: If the memory item is not of type 'tool'
src\memu\utils\tool.py:46 - if item.memory_type != "tool":
src\memu\utils\tool.py:47 - msg = "add_tool_call can only be used with tool type memories"
src\memu\utils\tool.py:55 - def get_tool_statistics(item: MemoryItem, recent_n: int = 20) -> dict[str, Any]:
src\memu\utils\tool.py:59 - item: The MemoryItem to calculate statistics for

## src\memu\utils\__init__.py
src\memu\utils\__init__.py:3 - from memu.utils.video import VideoFrameExtractor

## src\memu\workflow\interceptor.py
src\memu\workflow\interceptor.py:11 - from memu.workflow.step import WorkflowState

## src\memu\workflow\pipeline.py
src\memu\workflow\pipeline.py:9 - from memu.workflow.step import WorkflowStep

## src\memu\workflow\runner.py
src\memu\workflow\runner.py:6 - from memu.workflow.step import WorkflowContext, WorkflowState, WorkflowStep, run_steps
src\memu\workflow\runner.py:9 - from memu.workflow.interceptor import WorkflowInterceptorRegistry

## src\memu\workflow\step.py
src\memu\workflow\step.py:9 - from memu.workflow.interceptor import WorkflowInterceptorRegistry
src\memu\workflow\step.py:57 - from memu.workflow.interceptor import (

## src\memu\workflow\__init__.py
src\memu\workflow\__init__.py:1 - from memu.workflow.interceptor import (
src\memu\workflow\__init__.py:6 - from memu.workflow.pipeline import PipelineManager, PipelineRevision
src\memu\workflow\__init__.py:7 - from memu.workflow.runner import (
src\memu\workflow\__init__.py:13 - from memu.workflow.step import WorkflowContext, WorkflowState, WorkflowStep, run_steps

## tests\rust_entry_test.py
tests\rust_entry_test.py:1 - from memu import _rust_entry
tests\rust_entry_test.py:5 - assert _rust_entry() == "Hello from memu!"

## tests\test_client_wrapper.py
tests\test_client_wrapper.py:10 - class TestMemuOpenAIWrapper:
tests\test_client_wrapper.py:15 - from memu.client.openai_wrapper import MemuChatCompletions
tests\test_client_wrapper.py:29 - from memu.client.openai_wrapper import MemuChatCompletions
tests\test_client_wrapper.py:42 - def test_inject_memories_into_existing_system(self):
tests\test_client_wrapper.py:44 - from memu.client.openai_wrapper import MemuChatCompletions
tests\test_client_wrapper.py:66 - def test_inject_memories_creates_system_message(self):
tests\test_client_wrapper.py:68 - from memu.client.openai_wrapper import MemuChatCompletions
tests\test_client_wrapper.py:85 - def test_inject_memories_empty_list(self):
tests\test_client_wrapper.py:87 - from memu.client.openai_wrapper import MemuChatCompletions
tests\test_client_wrapper.py:98 - from memu.client import wrap_openai
tests\test_client_wrapper.py:119 - from memu.client import MemuOpenAIWrapper

## tests\test_inmemory.py
tests\test_inmemory.py:3 - from memu.app import MemoryService
tests\test_inmemory.py:17 - service = MemoryService(
tests\test_inmemory.py:33 - "metadata_store": {"provider": "inmemory"},
tests\test_inmemory.py:40 - memory = await service.memorize(resource_url=file_path, modality="conversation", user={"user_id": "123"})
tests\test_inmemory.py:41 - for cat in memory.get("categories", []):
tests\test_inmemory.py:62 - print(f"    - [{item.get('memory_type')}] {item.get('summary', '')[:100]}...")
tests\test_inmemory.py:77 - print(f"    - [{item.get('memory_type')}] {item.get('summary', '')[:100]}...")

## tests\test_lazyllm.py
tests\test_lazyllm.py:18 - from memu.llm.lazyllm_client import LazyLLMClient  # noqa: E402

## tests\test_openrouter.py
tests\test_openrouter.py:24 - from memu.app import MemoryService
tests\test_openrouter.py:41 - memory_type = item.get("memory_type", "unknown")
tests\test_openrouter.py:46 - async def _test_memorize(service, file_path, output_data):
tests\test_openrouter.py:49 - memory = await service.memorize(
tests\test_openrouter.py:52 - items_count = len(memory.get("items", []))
tests\test_openrouter.py:53 - categories_count = len(memory.get("categories", []))
tests\test_openrouter.py:58 - output_data["memorize"] = memory
tests\test_openrouter.py:102 - service = MemoryService(
tests\test_openrouter.py:114 - "metadata_store": {"provider": "inmemory"},
tests\test_openrouter.py:130 - # Test 4: List memory items
tests\test_openrouter.py:131 - print("\n[OPENROUTER] Test 4: List memory items...")
tests\test_openrouter.py:132 - items_result = await service.list_memory_items(where={"user_id": "openrouter_test_user"})
tests\test_openrouter.py:138 - # Test 5: List memory categories
tests\test_openrouter.py:139 - print("\n[OPENROUTER] Test 5: List memory categories...")
tests\test_openrouter.py:140 - cats_result = await service.list_memory_categories(where={"user_id": "openrouter_test_user"})

## tests\test_postgres.py
tests\test_postgres.py:3 - from memu.app import MemoryService
tests\test_postgres.py:18 - service = MemoryService(
tests\test_postgres.py:33 - memory = await service.memorize(resource_url=file_path, modality="conversation", user={"user_id": "123"})
tests\test_postgres.py:34 - for cat in memory.get("categories", []):
tests\test_postgres.py:55 - print(f"    - [{item.get('memory_type')}] {item.get('summary', '')[:100]}...")
tests\test_postgres.py:70 - print(f"    - [{item.get('memory_type')}] {item.get('summary', '')[:100]}...")

## tests\test_references.py
tests\test_references.py:14 - from memu.utils.references import (
tests\test_references.py:142 - assert "Available memory items for reference:" in result

## tests\test_salience.py
tests\test_salience.py:2 - Tests for salience-aware memory features:
tests\test_salience.py:16 - def compute_content_hash(summary: str, memory_type: str) -> str:
tests\test_salience.py:19 - content = f"{memory_type}:{normalized}"
tests\test_salience.py:127 - def test_recent_memory_higher_score(self):
tests\test_salience.py:148 - # Memory A: high reinforcement (10), old (30 days)
tests\test_salience.py:151 - # Memory B: low reinforcement (1), recent (now)

## tests\test_sqlite.py
tests\test_sqlite.py:6 - from memu.app import MemoryService
tests\test_sqlite.py:16 - print(f"    - [{item.get('memory_type')}] {item.get('summary', '')[:100]}...")
tests\test_sqlite.py:40 - service = MemoryService(
tests\test_sqlite.py:55 - memory = await service.memorize(resource_url=file_path, modality="conversation", user={"user_id": "123"})
tests\test_sqlite.py:56 - for cat in memory.get("categories", []):

## tests\test_tool_memory.py
tests\test_tool_memory.py:1 - """Tests for Tool Memory feature - specialized memory type for tracking tool usage."""
tests\test_tool_memory.py:11 - # Add src to path for direct import - MUST be before any memu imports
tests\test_tool_memory.py:30 - "MemoryType": models.MemoryType,
tests\test_tool_memory.py:34 - models.MemoryItem.model_rebuild(_types_namespace=rebuild_ns)
tests\test_tool_memory.py:36 - MemoryItem = models.MemoryItem
tests\test_tool_memory.py:37 - MemoryType = models.MemoryType
tests\test_tool_memory.py:40 - # Import tool memory utility functions
tests\test_tool_memory.py:127 - class TestMemoryItemToolType:
tests\test_tool_memory.py:128 - """Tests for MemoryItem with tool type."""
tests\test_tool_memory.py:130 - def test_tool_memory_type_literal(self):
tests\test_tool_memory.py:134 - valid_types = get_args(MemoryType)
tests\test_tool_memory.py:137 - def test_create_tool_memory(self):
tests\test_tool_memory.py:138 - """Test creating a tool type memory item with tool fields in extra."""
tests\test_tool_memory.py:139 - item = MemoryItem(
tests\test_tool_memory.py:141 - memory_type="tool",
tests\test_tool_memory.py:149 - assert item.memory_type == "tool"
tests\test_tool_memory.py:155 - item = MemoryItem(
tests\test_tool_memory.py:157 - memory_type="tool",
tests\test_tool_memory.py:179 - item = MemoryItem(
tests\test_tool_memory.py:181 - memory_type="profile",
... and 15 more

## tests\example\example_conversation.json
tests\example\example_conversation.json:307 - "text": "Do you remember my ideal type I told you about? If I had to find someone by those standards, I'd probably only be able to date in 2D. No men like that exist in 3D."
tests\example\example_conversation.json:377 - "text": "Your memory's pretty good"

## tests\integrations\test_langgraph.py
tests\integrations\test_langgraph.py:11 - from memu.app.service import MemoryService  # noqa: E402
tests\integrations\test_langgraph.py:12 - from memu.integrations.langgraph import MemULangGraphTools  # noqa: E402
tests\integrations\test_langgraph.py:16 - def mock_memory_service():
tests\integrations\test_langgraph.py:18 - service = AsyncMock(spec=MemoryService)
tests\integrations\test_langgraph.py:23 - {"summary": "Test memory 1", "score": 0.9},
tests\integrations\test_langgraph.py:24 - {"summary": "Test memory 2", "score": 0.5},
tests\integrations\test_langgraph.py:31 - async def test_adapter_initialization(mock_memory_service):
tests\integrations\test_langgraph.py:33 - adapter = MemULangGraphTools(mock_memory_service)
tests\integrations\test_langgraph.py:37 - assert any(t.name == "save_memory" for t in tools)
tests\integrations\test_langgraph.py:38 - assert any(t.name == "search_memory" for t in tools)
tests\integrations\test_langgraph.py:45 - async def test_save_memory_tool_execution(mock_memory_service):
tests\integrations\test_langgraph.py:47 - adapter = MemULangGraphTools(mock_memory_service)
tests\integrations\test_langgraph.py:48 - save_tool = adapter.save_memory_tool()
tests\integrations\test_langgraph.py:57 - call_args = mock_memory_service.memorize.call_args
tests\integrations\test_langgraph.py:63 - async def test_search_memory_tool_execution(mock_memory_service):
tests\integrations\test_langgraph.py:65 - adapter = MemULangGraphTools(mock_memory_service)
tests\integrations\test_langgraph.py:66 - search_tool = adapter.search_memory_tool()

## tests\llm\test_grok_provider.py
tests\llm\test_grok_provider.py:4 - from memu.app.settings import LLMConfig
tests\llm\test_grok_provider.py:5 - from memu.llm.backends.grok import GrokBackend
tests\llm\test_grok_provider.py:6 - from memu.llm.openai_sdk import OpenAISDKClient

## tests\utils\test_conversation.py
tests\utils\test_conversation.py:5 - from memu.utils.conversation import format_conversation_for_preprocess  # type: ignore[import-untyped]
