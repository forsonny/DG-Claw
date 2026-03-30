# OpenViking Memory Context

## Files with 'mem' in name:
bot\vikingbot\agent\memory.py
bot\workspace\memory\MEMORY.md
docs\design\memory-extractor-optimization.md
examples\claude-code-memory-plugin\scripts\start-memory-server.mjs
examples\claude-code-memory-plugin\servers\memory-server.js
examples\claude-code-memory-plugin\src\memory-server.ts
examples\misc\memory_demo.py
examples\openclaw-plugin\demo-memory-ajie.py
examples\openclaw-plugin\demo-memory-xiaomei.py
examples\openclaw-plugin\memory-ranking.ts
examples\openclaw-plugin\test-memory-chain.py
examples\openclaw-plugin\upgrade_scripts\cleanup-memory-openviking.sh
examples\opencode-memory-plugin\openviking-memory.ts
openviking\prompts\templates\compression\memory_extraction.yaml
openviking\prompts\templates\compression\memory_merge.yaml
openviking\prompts\templates\compression\memory_merge_bundle.yaml
openviking\retrieve\memory_lifecycle.py
openviking\session\memory_archiver.py
openviking\session\memory_deduplicator.py
openviking\session\memory_extractor.py
openviking\session\memory\memory_react.py
openviking\session\memory\memory_type_registry.py
openviking\session\memory\memory_updater.py
openviking\telemetry\backends\memory.py
openviking_cli\utils\config\memory_config.py
tests\test_memory_lifecycle.py
tests\session\test_memory_dedup_actions.py
tests\session\test_memory_extractor_language.py
tests\session\test_memory_extractor_response_types.py
tests\session\memory\test_memory_extractor_flow.py
tests\session\memory\test_memory_patch.py
tests\session\memory\test_memory_react.py
tests\session\memory\test_memory_react_system_prompt.py
tests\session\memory\test_memory_tools.py
tests\session\memory\test_memory_updater.py
tests\session\memory\test_memory_utils.py
tests\unit\session\test_memory_archiver.py
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py
third_party\agfs\agfs-server\pkg\plugins\memfs\memfs.go
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go
third_party\krl\include\safe_memory.h
third_party\leveldb-1.23\db\memtable.cc
third_party\leveldb-1.23\db\memtable.h
third_party\leveldb-1.23\helpers\memenv\memenv.cc
third_party\leveldb-1.23\helpers\memenv\memenv.h
third_party\leveldb-1.23\helpers\memenv\memenv_test.cc
third_party\rapidjson\memorybuffer.h
third_party\rapidjson\memorystream.h


## .\README.md
.\README.md:42 - - **Limited Memory Iteration**: Current memory is just a record of user interactions, lacking Agent-related task memory.
.\README.md:56 - - **Automatic Session Management** → **Context Self-Iteration**: Automatically compresses content, resource references, tool calls, etc., in conversations, extracting long-term memory, making the Agent smarter with use.
.\README.md:514 - * Experimental Groups: Since users may not disable OpenClaw's native memory when using OpenViking, we added experimental groups with native memory enabled or disabled
.\README.md:528 - - With native memory enabled: 43% improvement over original OpenClaw with 91% reduction in input token cost; 15% improvement over LanceDB with 96% reduction in input token cost.
.\README.md:529 - - With native memory disabled: 49% improvement over original OpenClaw with 83% reduction in input token cost; 17% improvement over LanceDB with 92% reduction in input token cost.
.\README.md:533 - 👉 **[View: OpenCode Memory Plugin Example](examples/opencode-memory-plugin/README.md)**
.\README.md:619 - - **User Memory Update**: Update memories related to user preferences, making Agent responses better fit user needs.

## .\README_JA.md
.\README_JA.md:496 - 👉 **[参照: OpenCodeメモリプラグインの例](examples/opencode-memory-plugin/README.md)**

## bot\README.md
bot\README.md:7 - Vikingbot is deeply integrated with OpenViking, providing powerful knowledge management and memory retrieval capabilities:
bot\README.md:10 - - **7 dedicated Agent tools**: Resource management, semantic search, regex search, glob search, memory search
bot\README.md:12 - - **Automatic session memory submission**: Conversation history is automatically saved to OpenViking
bot\README.md:164 - - `memory_window`: Upper limit of conversation rounds for automatically submitting sessions to OpenViking
bot\README.md:174 - - root_api_key: In a multi-tenant scenario, the API KEY must have root privileges; otherwise, the bot cannot automatically register multiple OpenViking users, which is used to implement memory isolation.
bot\README.md:183 - "memory_window": 50,

## bot\README_CN.md
bot\README_CN.md:177 - - root_api_key: 多租户场景API KEY必须有root权限，否则bot无法自动注册多个OpenViking用户，用于实现memory的隔离
bot\README_CN.md:186 - "memory_window": 50,

## bot\deploy\vke\k8s\deployment.yaml
bot\deploy\vke\k8s\deployment.yaml:56 - memory: "1Gi"
bot\deploy\vke\k8s\deployment.yaml:59 - memory: "4Gi"

## bot\docs\rfc-openviking-cli-ov-chat.md
bot\docs\rfc-openviking-cli-ov-chat.md:302 - "memory_window": 50

## bot\eval\locomo\import_to_ov.py
bot\eval\locomo\import_to_ov.py:4 - Import conversations from LoCoMo JSON or plain text files into OpenViking memory.

## bot\eval\locomo\judge.py
bot\eval\locomo\judge.py:91 - default="./result/locomo_qa_result_only_sys_memory.csv",

## bot\eval\locomo\stat_judge_result.py
bot\eval\locomo\stat_judge_result.py:11 - default="./result/locomo_qa_result_only_sys_memory.csv",

## bot\vikingbot\agent\context.py
bot\vikingbot\agent\context.py:13 - from vikingbot.agent.memory import MemoryStore
bot\vikingbot\agent\context.py:42 - self._memory = None
bot\vikingbot\agent\context.py:49 - def memory(self):
bot\vikingbot\agent\context.py:51 - if self._memory is None:
bot\vikingbot\agent\context.py:52 - self._memory = MemoryStore(self.workspace)
bot\vikingbot\agent\context.py:74 - Build the system prompt from bootstrap files, memory, and skills.
bot\vikingbot\agent\context.py:116 - # memory = self.memory.get_memory_context()
bot\vikingbot\agent\context.py:117 - # if memory:
bot\vikingbot\agent\context.py:140 - profile = await self.memory.get_viking_user_profile(
bot\vikingbot\agent\context.py:152 - async def _build_user_memory(
bot\vikingbot\agent\context.py:156 - Build the system prompt from bootstrap files, memory, and skills.
bot\vikingbot\agent\context.py:173 - viking_memory = await self.memory.get_viking_memory_context(
bot\vikingbot\agent\context.py:178 - f"[READ_USER_MEMORY]: cost {cost}s, memory={viking_memory[:50] if viking_memory else 'None'}"
bot\vikingbot\agent\context.py:180 - if viking_memory:
bot\vikingbot\agent\context.py:230 - - Remember important facts: using openviking_memory_commit tool to commit"""
bot\vikingbot\agent\context.py:276 - user_info = await self._build_user_memory(session_key, current_message, self._sender_id)

## bot\vikingbot\agent\loop.py
bot\vikingbot\agent\loop.py:14 - from vikingbot.agent.memory import MemoryStore
bot\vikingbot\agent\loop.py:54 - memory_window: int = 50,
bot\vikingbot\agent\loop.py:74 - memory_window: Maximum number of messages to keep in session memory (default: 50).
bot\vikingbot\agent\loop.py:104 - self.memory_window = memory_window
bot\vikingbot\agent\loop.py:453 - await self._safe_consolidate_memory(session_clone, archive_all=True)
bot\vikingbot\agent\loop.py:455 - session_key=msg.session_key, content="🐈 New session started. Memory consolidated.", metadata=msg.metadata
bot\vikingbot\agent\loop.py:466 - session_key=msg.session_key, content="This conversation has been submitted to memory storage.", metadata=msg.metadata
bot\vikingbot\agent\loop.py:483 - if len(session.messages) > self.memory_window:
bot\vikingbot\agent\loop.py:486 - keep_count = min(10, max(2, self.memory_window // 2))
bot\vikingbot\agent\loop.py:490 - await self._safe_consolidate_memory(session_clone, archive_all=False)
bot\vikingbot\agent\loop.py:595 - async def _consolidate_memory(self, session, archive_all: bool = False) -> None:
bot\vikingbot\agent\loop.py:616 - memory_workspace = self.sandbox_manager.get_workspace_path(session.key)
bot\vikingbot\agent\loop.py:618 - memory_workspace = self.workspace
bot\vikingbot\agent\loop.py:620 - memory = MemoryStore(memory_workspace)
bot\vikingbot\agent\loop.py:625 - keep_count = min(10, max(2, self.memory_window // 2))
bot\vikingbot\agent\loop.py:630 - f"Memory consolidation started: {len(session.messages)} messages, archiving {len(old_messages)}, keeping {keep_count}"
bot\vikingbot\agent\loop.py:650 - current_memory = memory.read_long_term()
bot\vikingbot\agent\loop.py:652 - prompt = f"""You are a memory consolidation agent. Process this conversation and return a JSON object with exactly two keys:
bot\vikingbot\agent\loop.py:656 - 2. "memory_update": The updated long-term memory content. Add any new facts: user location, preferences, personal info, habits, project context, technical decisions, tools/services used. If nothing new, return the existing content unchanged.
bot\vikingbot\agent\loop.py:670 - "content": "You are a memory consolidation agent. Respond only with valid JSON.",
... and 7 more

## bot\vikingbot\agent\memory.py
bot\vikingbot\agent\memory.py:13 - class MemoryStore:
bot\vikingbot\agent\memory.py:14 - """Two-layer memory: MEMORY.md (long-term facts) + HISTORY.md (grep-searchable log)."""
bot\vikingbot\agent\memory.py:17 - self.memory_dir = ensure_dir(workspace / "memory")
bot\vikingbot\agent\memory.py:18 - self.memory_file = self.memory_dir / "MEMORY.md"
bot\vikingbot\agent\memory.py:19 - self.history_file = self.memory_dir / "HISTORY.md"
bot\vikingbot\agent\memory.py:22 - if self.memory_file.exists():
bot\vikingbot\agent\memory.py:23 - return self.memory_file.read_text(encoding="utf-8")
bot\vikingbot\agent\memory.py:26 - def _parse_viking_memory(self, result: Any) -> str:
bot\vikingbot\agent\memory.py:29 - for idx, memory in enumerate(result, start=1):
bot\vikingbot\agent\memory.py:31 - f"<memory index=\"{idx}\">\n"
bot\vikingbot\agent\memory.py:42 - self.memory_file.write_text(content, encoding="utf-8")
bot\vikingbot\agent\memory.py:48 - def get_memory_context(self) -> str:
bot\vikingbot\agent\memory.py:52 - async def get_viking_memory_context(self, current_message: str, workspace_id: str, sender_id: str) -> str:
bot\vikingbot\agent\memory.py:58 - result = await client.search_memory(query=current_message, user_id=user_id, agent_user_id=admin_user_id, limit=5)
bot\vikingbot\agent\memory.py:61 - user_memory = self._parse_viking_memory(result["user_memory"])
bot\vikingbot\agent\memory.py:62 - agent_memory = self._parse_viking_memory(result["agent_memory"])
bot\vikingbot\agent\memory.py:64 - f"### user memories:\n{user_memory}\n"
bot\vikingbot\agent\memory.py:65 - f"### agent memories:\n{agent_memory}"
bot\vikingbot\agent\memory.py:68 - logger.error(f"[READ_USER_MEMORY]: search error. {e}")

## bot\vikingbot\agent\__init__.py
bot\vikingbot\agent\__init__.py:5 - from vikingbot.agent.memory import MemoryStore
bot\vikingbot\agent\__init__.py:8 - __all__ = ["AgentLoop", "ContextBuilder", "MemoryStore", "SkillsLoader"]

## bot\vikingbot\agent\tools\ov_file.py
bot\vikingbot\agent\tools\ov_file.py:352 - class VikingMemoryCommitTool(OVFileTool):

## bot\vikingbot\channels\mochat.py
bot\vikingbot\channels\mochat.py:783 - def _remember_message_id(self, key: str, message_id: str) -> bool:

## bot\vikingbot\cli\commands.py
bot\vikingbot\cli\commands.py:341 - memory_window=config.agents.memory_window,

## bot\vikingbot\cli\werewolf_game.py
bot\vikingbot\cli\werewolf_game.py:345 - memory_window=config.agents.memory_window,
bot\vikingbot\cli\werewolf_game.py:1450 - memory_md = read_text(item / "memory" / "MEMORY.md")
bot\vikingbot\cli\werewolf_game.py:1451 - history_md = read_text(item / "memory" / "HISTORY.md")
bot\vikingbot\cli\werewolf_game.py:1463 - "memory": memory_md,
bot\vikingbot\cli\werewolf_game.py:1472 - def read_world_memory() -> dict[str, str]:
bot\vikingbot\cli\werewolf_game.py:1594 - { key: 'memory', label: 'MEMORY.md' },
bot\vikingbot\cli\werewolf_game.py:1675 - "world_memory": read_world_memory(),

## bot\vikingbot\config\schema.py
bot\vikingbot\config\schema.py:43 - class AgentMemoryMode(str, Enum):
bot\vikingbot\config\schema.py:394 - memory_window: int = 50
bot\vikingbot\config\schema.py:547 - memory: str = "1Gi"
bot\vikingbot\config\schema.py:626 - use_local_memory: bool = False

## bot\vikingbot\hooks\builtins\openviking_hooks.py
bot\vikingbot\hooks\builtins\openviking_hooks.py:7 - from vikingbot.config.schema import SessionKey, AgentMemoryMode
bot\vikingbot\hooks\builtins\openviking_hooks.py:63 - async def _read_skill_memory(self, workspace_id: str, skill_name: str) -> str:
bot\vikingbot\hooks\builtins\openviking_hooks.py:72 - skill_memory_uri = f"viking://agent/ffb1327b18bf/memories/skills/{skill_name}.md"
bot\vikingbot\hooks\builtins\openviking_hooks.py:75 - skill_memory_uri = (
bot\vikingbot\hooks\builtins\openviking_hooks.py:78 - content = await ov_client.read_content(skill_memory_uri, level="read")
bot\vikingbot\hooks\builtins\openviking_hooks.py:83 - logger.warning(f"Failed to read skill memory for {skill_name}: {e}")
bot\vikingbot\hooks\builtins\openviking_hooks.py:97 - skill_memory = await self._read_skill_memory(agent_space_name, skill_name)
bot\vikingbot\hooks\builtins\openviking_hooks.py:98 - # logger.debug(f"skill_memory={skill_memory}")
bot\vikingbot\hooks\builtins\openviking_hooks.py:99 - if skill_memory:
bot\vikingbot\hooks\builtins\openviking_hooks.py:100 - result = f"{result}{skill_memory}"

## bot\vikingbot\openviking_mount\ov_server.py
bot\vikingbot\openviking_mount\ov_server.py:195 - async def search_user_memory(self, query: str, user_id: str) -> list[Any]:
bot\vikingbot\openviking_mount\ov_server.py:199 - uri_user_memory = f"viking://user/{user_id}/memories/"
bot\vikingbot\openviking_mount\ov_server.py:200 - result = await self.client.search(query, target_uri=uri_user_memory)
bot\vikingbot\openviking_mount\ov_server.py:300 - async def search_memory(
bot\vikingbot\openviking_mount\ov_server.py:315 - "user_memory": [],
bot\vikingbot\openviking_mount\ov_server.py:316 - "agent_memory": [],
bot\vikingbot\openviking_mount\ov_server.py:319 - uri_user_memory = f"viking://user/{user_id}/memories/"
bot\vikingbot\openviking_mount\ov_server.py:320 - user_memory = await self.client.find(
bot\vikingbot\openviking_mount\ov_server.py:322 - target_uri=uri_user_memory,
bot\vikingbot\openviking_mount\ov_server.py:326 - uri_agent_memory = f"viking://agent/{agent_space_name}/memories/"
bot\vikingbot\openviking_mount\ov_server.py:327 - agent_memory = await self.client.find(
bot\vikingbot\openviking_mount\ov_server.py:329 - target_uri=uri_agent_memory,
bot\vikingbot\openviking_mount\ov_server.py:333 - "user_memory": user_memory.memories if hasattr(user_memory, "memories") else [],
bot\vikingbot\openviking_mount\ov_server.py:334 - "agent_memory": agent_memory.memories if hasattr(agent_memory, "memories") else [],
bot\vikingbot\openviking_mount\ov_server.py:454 - # res = await client.get_viking_memory_context("123", current_message="头疼", history=[])
bot\vikingbot\openviking_mount\ov_server.py:455 - res = await client.search_memory("你好", "user_1")

## bot\vikingbot\session\manager.py
bot\vikingbot\session\manager.py:102 - _cache: In-memory cache mapping SessionKey to Session objects.

## bot\vikingbot\utils\helpers.py
bot\vikingbot\utils\helpers.py:132 - if src.name == "memory":
bot\vikingbot\utils\helpers.py:160 - memory_dir = workspace / "memory"
bot\vikingbot\utils\helpers.py:161 - memory_dir.mkdir(exist_ok=True)
bot\vikingbot\utils\helpers.py:164 - memory_file = memory_dir / "MEMORY.md"
bot\vikingbot\utils\helpers.py:165 - if not memory_file.exists():
bot\vikingbot\utils\helpers.py:183 - history_file = memory_dir / "HISTORY.md"
bot\vikingbot\utils\helpers.py:247 - memory_dir = workspace / "memory"
bot\vikingbot\utils\helpers.py:248 - memory_dir.mkdir(exist_ok=True)
bot\vikingbot\utils\helpers.py:249 - memory_file = memory_dir / "MEMORY.md"
bot\vikingbot\utils\helpers.py:250 - if not memory_file.exists():
bot\vikingbot\utils\helpers.py:268 - history_file = memory_dir / "HISTORY.md"

## bot\workspace\TOOLS.md
bot\workspace\TOOLS.md:3 - **IMPORTANT: Always use OpenViking first for knowledge queries and memory storage**
bot\workspace\TOOLS.md:30 - openviking_memory_commit(session_id: str, messages: list) -> str

## crates\ov_cli\src\main.rs
crates\ov_cli\src\main.rs:716 - Commands::AddMemory { content } => handle_add_memory(content, ctx).await,
crates\ov_cli\src\main.rs:1142 - async fn handle_add_memory(content: String, ctx: CliContext) -> Result<()> {
crates\ov_cli\src\main.rs:1144 - commands::session::add_memory(&client, &content, ctx.output_format, ctx.compact).await

## crates\ov_cli\src\commands\session.rs
crates\ov_cli\src\commands\session.rs:125 - /// Add memory in one shot: creates a session, adds messages, and commits.
crates\ov_cli\src\commands\session.rs:183 - // Extract memories count from commit response

## deploy\helm\README.md
deploy\helm\README.md:32 - memory: 8Gi
deploy\helm\README.md:35 - memory: 2Gi

## deploy\helm\openviking\values.yaml
deploy\helm\openviking\values.yaml:57 - memory: 4Gi
deploy\helm\openviking\values.yaml:60 - memory: 1Gi

## docs\design\memory-extractor-optimization.md
docs\design\memory-extractor-optimization.md:7 - - [#578](https://github.com/volcengine/OpenViking/issues/578) "[Feature]: 允许提示词模板自定义添加和指定" - Current OpenViking memory_extractor uses 8 fixed memory categories (profile, preferences, entities, events, cases, patterns, tools, skills), adding new memory types requires modifying multiple core code files, prompt templates and merge logic are hard-coded. This design implements the custom template capability requested in #578. / [#578](https://github.com/volcengine/OpenViking/issues/578) "[Feature]: 允许提示词模板自定义添加和指定" - 当前 OpenViking 的 memory_extractor 使用 8 个固定的记忆类别（profile, preferences, entities, events, cases, patterns, tools, skills），新增记忆类型需要修改多处核心代码，提示模板和合并逻辑都是硬编码的。本设计实现了 #578 中要求的自定义模板能力。
docs\design\memory-extractor-optimization.md:13 - Implement a memory templating system based on OpenViking storage, such that: / 实现基于 OpenViking 存储的记忆模版化系统，使得：
docs\design\memory-extractor-optimization.md:18 - 5. Learn from commercial memory library implementations, adopt patch incremental update mechanism (including abstract and overview), reduce LLM call count / 借鉴商业化记忆库的实现，采用 patch 增量更新机制（包括abstract和overview），减少 LLM 调用次数
docs\design\memory-extractor-optimization.md:22 - This design references the following core ideas from the `../memory` project: / 本设计参考了 `../memory` 项目的以下核心思想：
docs\design\memory-extractor-optimization.md:126 - Example: "OpenViking is an AI Agent long-term memory management system the user is developing. The project uses Python and AGFS tech stack, core features include memory extraction, deduplication, and retrieval. Currently in active development, goal is to build Claude-like long-term memory capabilities."
docs\design\memory-extractor-optimization.md:164 - Example: "During memory system design discussion, found that the original 6 categories had blurry boundaries. Especially states, lessons, insights often overlapped and were hard to distinguish. Decided to refactor to 5 categories, removing these three to make classification boundaries clearer."
docs\design\memory-extractor-optimization.md:173 - Extract specific problem-solution pairs from the conversation that are worth remembering for future reference.
docs\design\memory-extractor-optimization.md:267 - 1. Parse JSON fields from `<!-- MEMORY_FIELDS -->` comment at the end of Markdown file / 从 Markdown 文件最后的 `<!-- MEMORY_FIELDS -->` 注释中解析 JSON 字段
docs\design\memory-extractor-optimization.md:282 - Tool memories help the agent learn from experience and use tools more effectively over time.
docs\design\memory-extractor-optimization.md:292 - Tool Memory Context:
docs\design\memory-extractor-optimization.md:403 - Skill memories help the agent learn from experience and execute skills more effectively over time.
docs\design\memory-extractor-optimization.md:410 - Skill Memory Context:
docs\design\memory-extractor-optimization.md:505 - Tool Memory Context:
docs\design\memory-extractor-optimization.md:550 - │  │  1. ls: Get all memory directory structures               │  │
docs\design\memory-extractor-optimization.md:571 - │  │  Output: MemoryOperations                                    │  │
docs\design\memory-extractor-optimization.md:572 - │  │  - WriteOp: New memory data (create or full replace)       │  │
docs\design\memory-extractor-optimization.md:582 - │  │  MemoryUpdater: Directly execute MemoryOperations          │  │
docs\design\memory-extractor-optimization.md:612 - #### 1.2 MemoryType (Memory Type Definition / 记忆类型定义)
docs\design\memory-extractor-optimization.md:617 - - directory: Full URI for memory data storage, e.g., "viking://user/{user_space}/memories/preferences" / 记忆数据存放的完整 URI，如 "viking://user/{user_space}/memories/preferences"
docs\design\memory-extractor-optimization.md:618 - - fields: MemoryField list / MemoryField 列表
... and 43 more

## docs\design\multi-tenant-design.md
docs\design\multi-tenant-design.md:234 - # memory.agent_scope_mode = "user+agent"
docs\design\multi-tenant-design.md:239 - # memory.agent_scope_mode = "agent"
docs\design\multi-tenant-design.md:271 - - **agent**：同一 account 内，agent 目录默认由 user_id + agent_id 共同决定；也可通过 `memory.agent_scope_mode="agent"` 改为仅由 agent_id 决定（见 4.3）
docs\design\multi-tenant-design.md:282 - if config.memory.agent_scope_mode == "agent":

## docs\design\openclaw-context-engine-refactor.md
docs\design\openclaw-context-engine-refactor.md:16 - 1. OpenViking 统一以 context engine 的方式注册，但继续保留并使用原有 hook 链路。这里的 hook 能力并不等同于“必须注册成独立 memory plugin 并占据 `kind=memory` slot 才能使用”的能力。当前问题不是要去掉 hook，而是要把 hook 与 context engine 生命周期之间的职责分工、调用优先级和数据流转规则明确收口。
docs\design\openclaw-context-engine-refactor.md:82 - 4. 保持 `level === 2` 作为最终可注入 detail memory 的判断标准，不把 L0/L1 直接当作最终注入正文。
docs\design\openclaw-context-engine-refactor.md:196 - assistant: [tool_call] memory_recall_auto({"query":"..."})
docs\design\openclaw-context-engine-refactor.md:264 - - `viking://agent/.../skills`：后续 skill memory Phase 3 的锚点
docs\design\openclaw-context-engine-refactor.md:368 - extracted_memory_uris: string[];
docs\design\openclaw-context-engine-refactor.md:396 - summaryOrMemoryUri: string,
docs\design\openclaw-context-engine-refactor.md:452 - memoryExpandMaxResults?: number;
docs\design\openclaw-context-engine-refactor.md:461 - - `memoryExpandMaxResults = 6`

## docs\design\openclaw-integration.md
docs\design\openclaw-integration.md:11 - ## Component 1: Memory Write Mechanism / 组件 1：记忆写入机制
docs\design\openclaw-integration.md:70 - - Non-blocking: User never waits for memory extraction / 非阻塞：用户永远不需要等待记忆提取
docs\design\openclaw-integration.md:71 - - Progressive: Memory is uploaded early, reduces final compact work / 渐进式：记忆提前上报，减少最终 compact 的工作量
docs\design\openclaw-integration.md:82 - This allows the agent to actively record memories via a `commit_memory` tool (or ov cli), supporting user requests like:
docs\design\openclaw-integration.md:88 - **commit_memory Tool / 工具**:
docs\design\openclaw-integration.md:89 - - **Purpose / 用途**: Actively commit a memory to long-term storage / 主动将记忆提交到长期存储
docs\design\openclaw-integration.md:91 - - **Parameters / 参数**: `memory_content`, `memory_type`, `priority`, `category`
docs\design\openclaw-integration.md:96 - ## Component 2: Memory Retrieval / 组件 2：记忆查询/召回
docs\design\openclaw-integration.md:100 - Memory retrieval has three parts:
docs\design\openclaw-integration.md:116 - - High-quality memory abstracts (only if quality score >= threshold) / 高质量记忆摘要（TODO：是否加入取决于摘要机制的质量是否ok / TODO: inclusion depends on whether the quality of the abstraction mechanism is acceptable）
docs\design\openclaw-integration.md:120 - ### Part 2: Per-turn Memory Retrieval / 第二部分：每轮记忆召回
docs\design\openclaw-integration.md:159 - 6. Format memories (L0/L1/L2 based on config) / 格式化记忆（根据配置使用 L0/L1/L2）
docs\design\openclaw-integration.md:164 - ## Component 3: Agentic Memory Query / 组件 3：Agent 通过工具主动记忆查询
docs\design\openclaw-integration.md:174 - To make the path to active memory as short as possible, pre-inject the results of `ov ls viking://` into the system prompt by default, so the agent knows in advance what data is available in OpenViking. Effect may be better if simulated as an agent-initiated call.
docs\design\openclaw-integration.md:208 - ## Component 4: Skill Memory Injection / 组件 4：Skill 记忆注入
docs\design\openclaw-integration.md:214 - Skill memories are a type of agent memory, with the key distinction that they are anchored to a specific skill.
docs\design\openclaw-integration.md:223 - - Look up skill memories from memory store / 从记忆存储中查找 skill 记忆
docs\design\openclaw-integration.md:242 - Augmented with skill memory:
docs\design\openclaw-integration.md:263 - ## Component 5: Tool Memory Injection / 组件 5：工具记忆注入
docs\design\openclaw-integration.md:343 - ov remember --content "what to remember" [--type <type>] [--priority N]

## docs\en\about\01-about-us.md
docs\en\about\01-about-us.md:37 - | **2024** | Released developer-facing product matrix: VikingDB, Viking Knowledge Base, Viking Memory Base | Officially provided on Volcano Engine public cloud; successfully supported thousands of enterprise customers building AI-native applications; marked the successful transition from internal tooling to commercial products |

## docs\en\api\05-sessions.md
docs\en\api\05-sessions.md:440 - context_type="resource",  # "resource", "memory", or "skill"

## docs\en\api\06-retrieval.md
docs\en\api\06-retrieval.md:35 - memories: List[MatchedContext]   # Memory contexts
docs\en\api\06-retrieval.md:48 - context_type: ContextType        # "resource", "memory", or "skill"

## docs\en\concepts\01-architecture.md
docs\en\concepts\01-architecture.md:120 - 4. **Memory Extraction**: Extract 6-category memories from messages

## docs\en\concepts\02-context-types.md
docs\en\concepts\02-context-types.md:3 - Based on a simplified mapping of human cognitive patterns and engineering considerations, OpenViking abstracts context into **three basic types: Resource, Memory, and Skill**, each serving different purposes in Agent applications.
docs\en\concepts\02-context-types.md:51 - - **Agent-driven**: Memory information actively extracted and recorded by Agent
docs\en\concepts\02-context-types.md:69 - # Memories are auto-extracted from sessions
docs\en\concepts\02-context-types.md:88 - - **Relatively static**: Skill definitions don't change at runtime, but usage memories related to tools are updated in memory
docs\en\concepts\02-context-types.md:126 - print(f"Memory: {ctx.uri}")

## docs\en\concepts\04-viking-uri.md
docs\en\concepts\04-viking-uri.md:123 - ├── agent/{agent_space}/          # agent_space is derived from memory.agent_scope_mode
docs\en\concepts\04-viking-uri.md:137 - The `agent_space` value depends on `memory.agent_scope_mode`:

## docs\en\concepts\05-storage.md
docs\en\concepts\05-storage.md:32 - 2. **Memory optimization**: Vector index doesn't store file content, saving memory

## docs\en\concepts\06-extraction.md
docs\en\concepts\06-extraction.md:106 - context_type: str, # resource/memory/skill
docs\en\concepts\06-extraction.md:199 - | **SemanticMsg type** | resource | memory | skill |
docs\en\concepts\06-extraction.md:228 - # Memory auto-extracted from session
docs\en\concepts\06-extraction.md:231 - # Flow: MemoryExtractor → TreeBuilder(scope=user) → SemanticQueue

## docs\en\concepts\07-retrieval.md
docs\en\concepts\07-retrieval.md:55 - context_type: ContextType  # MEMORY/RESOURCE/SKILL
docs\en\concepts\07-retrieval.md:71 - - **Multiple queries**: Complex tasks may need skill + resource + memory
docs\en\concepts\07-retrieval.md:95 - | MEMORY | `viking://user/memories`, `viking://agent/memories` |

## docs\en\concepts\08-session.md
docs\en\concepts\08-session.md:23 - | `commit()` | Commit: archive (sync) + summary generation and memory extraction (async background) |

## docs\en\concepts\09-transaction.md
docs\en\concepts\09-transaction.md:16 - 4. **Only session_memory needs crash recovery**: RedoLog re-executes memory extraction after a process crash
docs\en\concepts\09-transaction.md:80 - Memory extraction is idempotent — re-extracting from the same archive produces the same result.
docs\en\concepts\09-transaction.md:163 - **Server restart recovery**: SemanticMsg is persisted in QueueFS. On restart, `SemanticProcessor` detects that the `lifecycle_lock_handle_id` handle is missing from the in-memory LockManager and re-acquires a SUBTREE lock.
docs\en\concepts\09-transaction.md:180 - Phase 2 — Memory extraction + write (RedoLog):
docs\en\concepts\09-transaction.md:182 - 2. Extract memories from archived messages (LLM)
docs\en\concepts\09-transaction.md:195 - | During Phase 2 memory extraction/write | Redo marker exists | On startup: redo extraction + write + enqueue from archive |
docs\en\concepts\09-transaction.md:319 - | session_memory extraction crash | Redo memory extraction + write + enqueue from archive |

## docs\en\concepts\10-encryption.md
docs\en\concepts\10-encryption.md:9 - In a multi-tenant architecture, resources, memories, and skills from different customers (accounts) are stored in a shared AGFS instance. Encryption ensures:

## docs\en\concepts\11-multi-tenant.md
docs\en\concepts\11-multi-tenant.md:46 - - If `memory.agent_scope_mode = "agent"`, the same `agent_id` can share agent space across users in the same account
docs\en\concepts\11-multi-tenant.md:87 - | `agent` | No | Depends on `memory.agent_scope_mode` | Default: `user + agent` |
docs\en\concepts\11-multi-tenant.md:214 - - Internally, the plugin derives default `user` and `agent` memory scopes from the runtime identity

## docs\en\faq\faq.md
docs\en\faq\faq.md:12 - - **Limited Memory Iteration**: Lacks Agent-related task memory and self-evolution capabilities
docs\en\faq\faq.md:211 - Session management is a core capability of OpenViking, supporting conversation tracking and memory extraction:
docs\en\faq\faq.md:230 - OpenViking has 6 built-in memory categories, automatically extracted during session commit:

## docs\en\getting-started\01-introduction.md
docs\en\getting-started\01-introduction.md:9 - - **Context Fragmentation**: Memory in code, resources in vector databases, skills scattered everywhere — difficult to manage uniformly
docs\en\getting-started\01-introduction.md:13 - - **Limited Memory Iteration**: Current memory systems only record user memories, lacking Agent-related task memories
docs\en\getting-started\01-introduction.md:97 - **6 Memory Categories**:

## docs\en\getting-started\03-quickstart-server.md
docs\en\getting-started\03-quickstart-server.md:93 - Once configured, use the CLI to manage resources and query your Agent's memory:

## docs\en\guides\01-configuration.md
docs\en\guides\01-configuration.md:761 - For memory-related settings, add a `memory` section in `ov.conf`:
docs\en\guides\01-configuration.md:765 - "memory": {
docs\en\guides\01-configuration.md:773 - | `agent_scope_mode` | Agent memory namespace mode: `"user+agent"` isolates by `(user_id, agent_id)`, while `"agent"` isolates only by `agent_id` and shares agent memories across users of the same agent | `"user+agent"` |
docs\en\guides\01-configuration.md:1006 - "backend": "local|s3|memory",

## docs\en\guides\06-mcp-integration.md
docs\en\guides\06-mcp-integration.md:3 - OpenViking can be used as an [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) server, allowing any MCP-compatible client to access its memory and resource capabilities.

## docs\en\guides\07-operation-telemetry.md
docs\en\guides\07-operation-telemetry.md:133 - - `memory`: memory extraction or dedup summaries
docs\en\guides\07-operation-telemetry.md:256 - "query": "memory dedup",
docs\en\guides\07-operation-telemetry.md:284 - result = await client.find("memory dedup", telemetry=True)

## docs\zh\api\05-sessions.md
docs\zh\api\05-sessions.md:440 - context_type="resource",  # "resource"、"memory" 或 "skill"

## docs\zh\api\06-retrieval.md
docs\zh\api\06-retrieval.md:48 - context_type: ContextType        # "resource"、"memory" 或 "skill"

## docs\zh\concepts\06-extraction.md
docs\zh\concepts\06-extraction.md:105 - context_type: str, # resource/memory/skill
docs\zh\concepts\06-extraction.md:198 - | **SemanticMsg type** | resource | memory | skill |
docs\zh\concepts\06-extraction.md:230 - # 流程: MemoryExtractor → TreeBuilder(scope=user) → SemanticQueue

## docs\zh\concepts\07-retrieval.md
docs\zh\concepts\07-retrieval.md:55 - context_type: ContextType  # MEMORY/RESOURCE/SKILL
docs\zh\concepts\07-retrieval.md:95 - | MEMORY | `viking://user/memories`, `viking://agent/memories` |

## docs\zh\concepts\11-multi-tenant.md
docs\zh\concepts\11-multi-tenant.md:46 - - 如果 `memory.agent_scope_mode = "agent"`，则同一 `agent_id` 可在同 account 内跨用户共享 agent 空间

## docs\zh\guides\01-configuration.md
docs\zh\guides\01-configuration.md:742 - "memory": {
docs\zh\guides\01-configuration.md:752 - `agent_scope_mode` 只影响 `viking://agent/{agent_space}/memories/...` 这类 agent 级命名空间，不影响 `viking://user/{user_space}/memories/...` 下的 user memory。
docs\zh\guides\01-configuration.md:983 - "backend": "local|s3|memory",

## docs\zh\guides\07-operation-telemetry.md
docs\zh\guides\07-operation-telemetry.md:256 - "query": "memory dedup",
docs\zh\guides\07-operation-telemetry.md:284 - result = await client.find("memory dedup", telemetry=True)

## examples\basic-usage\README.md
examples\basic-usage\README.md:258 - class MemoryAssistant:
examples\basic-usage\README.md:269 - def remember(self, user_input: str, assistant_response: str):
examples\basic-usage\README.md:279 - """Extract long-term memories from session."""
examples\basic-usage\README.md:286 - - **[Claude Memory Plugin](../claude-memory-plugin/)**: Use with Claude Code
examples\basic-usage\README.md:287 - - **[OpenCode Memory Plugin](../opencode-memory-plugin/)**: Integrate with OpenCode

## examples\basic-usage\README_CN.md
examples\basic-usage\README_CN.md:258 - class MemoryAssistant:
examples\basic-usage\README_CN.md:269 - def remember(self, user_input: str, assistant_response: str):

## examples\claude-code-memory-plugin\.mcp.json
examples\claude-code-memory-plugin\.mcp.json:2 - "openviking-memory": {
examples\claude-code-memory-plugin\.mcp.json:4 - "args": ["${CLAUDE_PLUGIN_ROOT}/scripts/start-memory-server.mjs"],

## examples\claude-code-memory-plugin\MIGRATION.md
examples\claude-code-memory-plugin\MIGRATION.md:1 - # Migration Guide: claude-memory-plugin → claude-code-memory-plugin
examples\claude-code-memory-plugin\MIGRATION.md:3 - This guide helps you migrate from the legacy `claude-memory-plugin` to the new `claude-code-memory-plugin`.
examples\claude-code-memory-plugin\MIGRATION.md:22 - 2. **Transparent Auto-Recall**: No skill invocation needed — memories are automatically injected into context via `systemMessage` on every prompt. This matches the mental model of "memory just works."
examples\claude-code-memory-plugin\MIGRATION.md:40 - 3. **Coding Workflow Nature**: For coding tasks, "memory" is often about:
examples\claude-code-memory-plugin\MIGRATION.md:134 - The new plugin provides MCP tools for explicit memory operations:

## examples\claude-code-memory-plugin\package-lock.json
examples\claude-code-memory-plugin\package-lock.json:2 - "name": "claude-code-openviking-memory",
examples\claude-code-memory-plugin\package-lock.json:8 - "name": "claude-code-openviking-memory",

## examples\claude-code-memory-plugin\package.json
examples\claude-code-memory-plugin\package.json:2 - "name": "claude-code-openviking-memory",
examples\claude-code-memory-plugin\package.json:4 - "description": "OpenViking memory plugin for Claude Code — semantic long-term memory via MCP",

## examples\claude-code-memory-plugin\README.md
examples\claude-code-memory-plugin\README.md:3 - Long-term semantic memory for Claude Code, powered by [OpenViking](https://github.com/volcengine/OpenViking).
examples\claude-code-memory-plugin\README.md:85 - The MCP server provides tools for when Claude or the user needs explicit memory operations:
examples\claude-code-memory-plugin\README.md:272 - │   ├── start-memory-server.mjs  # Launches MCP server from plugin data runtime
examples\claude-code-memory-plugin\README.md:287 - Claude Code has a built-in auto-memory system using `MEMORY.md` files. This plugin **complements** that system:

## examples\claude-code-memory-plugin\.claude-plugin\plugin.json
examples\claude-code-memory-plugin\.claude-plugin\plugin.json:2 - "name": "openviking-memory",
examples\claude-code-memory-plugin\.claude-plugin\plugin.json:4 - "description": "Long-term semantic memory for Claude Code, powered by OpenViking. Auto-recall relevant memories at session start and capture important information during conversations.",

## examples\claude-code-memory-plugin\servers\memory-server.js
examples\claude-code-memory-plugin\servers\memory-server.js:4 - * Exposes OpenViking long-term memory as MCP tools:
examples\claude-code-memory-plugin\servers\memory-server.js:5 - *   - memory_recall  : semantic search across memories
examples\claude-code-memory-plugin\servers\memory-server.js:6 - *   - memory_store   : extract and persist new memories
examples\claude-code-memory-plugin\servers\memory-server.js:7 - *   - memory_forget  : delete memories by URI or query
examples\claude-code-memory-plugin\servers\memory-server.js:70 - const MEMORY_URI_PATTERNS = [
examples\claude-code-memory-plugin\servers\memory-server.js:80 - return MEMORY_URI_PATTERNS.some((p) => p.test(uri));
examples\claude-code-memory-plugin\servers\memory-server.js:241 - // Memory ranking helpers (ported from openclaw-plugin/memory-ranking.ts)
examples\claude-code-memory-plugin\servers\memory-server.js:267 - const key = getMemoryDedupeKey(item);
examples\claude-code-memory-plugin\servers\memory-server.js:282 - const category = item.category ?? "memory";
examples\claude-code-memory-plugin\servers\memory-server.js:287 - // Query-aware ranking (ported from openclaw-plugin/memory-ranking.ts)
examples\claude-code-memory-plugin\servers\memory-server.js:374 - name: "openviking-memory",
examples\claude-code-memory-plugin\servers\memory-server.js:377 - // -- Tool: memory_recall --------------------------------------------------
examples\claude-code-memory-plugin\servers\memory-server.js:378 - server.tool("memory_recall", "Search long-term memories from OpenViking. Use when you need past user preferences, facts, decisions, or any previously stored information.", {
examples\claude-code-memory-plugin\servers\memory-server.js:398 - return { content: [{ type: "text", text: "No relevant memories found in OpenViking." }] };
examples\claude-code-memory-plugin\servers\memory-server.js:415 - text: `Found ${memories.length} relevant memories:\n\n${lines.join("\n")}\n\n---\n${formatMemoryLines(memories)}`,
examples\claude-code-memory-plugin\servers\memory-server.js:419 - // -- Tool: memory_store ---------------------------------------------------
examples\claude-code-memory-plugin\servers\memory-server.js:421 - text: z.string().describe("The information to store as memory"),
examples\claude-code-memory-plugin\servers\memory-server.js:434 - text: "Memory stored but extraction returned 0 memories. The text may be too short or not contain extractable information. Check OpenViking server logs for details.",
examples\claude-code-memory-plugin\servers\memory-server.js:441 - text: `Successfully extracted ${extracted.length} memory/memories from the provided text and stored them in OpenViking.`,
examples\claude-code-memory-plugin\servers\memory-server.js:451 - // -- Tool: memory_forget --------------------------------------------------
... and 11 more

## examples\claude-code-memory-plugin\src\memory-server.ts
examples\claude-code-memory-plugin\src\memory-server.ts:4 - * Exposes OpenViking long-term memory as MCP tools:
examples\claude-code-memory-plugin\src\memory-server.ts:5 - *   - memory_recall  : semantic search across memories
examples\claude-code-memory-plugin\src\memory-server.ts:6 - *   - memory_store   : extract and persist new memories
examples\claude-code-memory-plugin\src\memory-server.ts:7 - *   - memory_forget  : delete memories by URI or query
examples\claude-code-memory-plugin\src\memory-server.ts:102 - const MEMORY_URI_PATTERNS = [
examples\claude-code-memory-plugin\src\memory-server.ts:113 - function isMemoryUri(uri: string): boolean {
examples\claude-code-memory-plugin\src\memory-server.ts:114 - return MEMORY_URI_PATTERNS.some((p) => p.test(uri));
examples\claude-code-memory-plugin\src\memory-server.ts:299 - // Memory ranking helpers (ported from openclaw-plugin/memory-ranking.ts)
examples\claude-code-memory-plugin\src\memory-server.ts:311 - function getMemoryDedupeKey(item: FindResultItem): string {
examples\claude-code-memory-plugin\src\memory-server.ts:328 - const key = getMemoryDedupeKey(item);
examples\claude-code-memory-plugin\src\memory-server.ts:337 - function formatMemoryLines(items: FindResultItem[]): string {
examples\claude-code-memory-plugin\src\memory-server.ts:342 - const category = item.category ?? "memory";
examples\claude-code-memory-plugin\src\memory-server.ts:348 - // Query-aware ranking (ported from openclaw-plugin/memory-ranking.ts)
examples\claude-code-memory-plugin\src\memory-server.ts:447 - name: "openviking-memory",
examples\claude-code-memory-plugin\src\memory-server.ts:451 - // -- Tool: memory_recall --------------------------------------------------
examples\claude-code-memory-plugin\src\memory-server.ts:455 - "Search long-term memories from OpenViking. Use when you need past user preferences, facts, decisions, or any previously stored information.",
examples\claude-code-memory-plugin\src\memory-server.ts:479 - return { content: [{ type: "text" as const, text: "No relevant memories found in OpenViking." }] };
examples\claude-code-memory-plugin\src\memory-server.ts:498 - text: `Found ${memories.length} relevant memories:\n\n${lines.join("\n")}\n\n---\n${formatMemoryLines(memories)}`,
examples\claude-code-memory-plugin\src\memory-server.ts:504 - // -- Tool: memory_store ---------------------------------------------------
examples\claude-code-memory-plugin\src\memory-server.ts:510 - text: z.string().describe("The information to store as memory"),
... and 13 more

## examples\cloud\GUIDE.md
examples\cloud\GUIDE.md:357 - enable_memory_decay: true
examples\cloud\GUIDE.md:358 - memory_decay_check_interval: 3600

## examples\common\boring_logging_config.py
examples\common\boring_logging_config.py:78 - "openviking.session.memory_extractor": {

## examples\k8s-helm\README.md
examples\k8s-helm\README.md:168 - targetMemoryUtilizationPercentage: 80
examples\k8s-helm\README.md:179 - memory: 4Gi
examples\k8s-helm\README.md:182 - memory: 1Gi

## examples\k8s-helm\README_CN.md
examples\k8s-helm\README_CN.md:168 - targetMemoryUtilizationPercentage: 80
examples\k8s-helm\README_CN.md:179 - memory: 4Gi
examples\k8s-helm\README_CN.md:182 - memory: 1Gi

## examples\k8s-helm\values.yaml
examples\k8s-helm\values.yaml:13 - memory: 2Gi
examples\k8s-helm\values.yaml:16 - memory: 512Mi

## examples\misc\memory_demo.py
examples\misc\memory_demo.py:23 - from openviking.session.memory_deduplicator import MemoryDeduplicator
examples\misc\memory_demo.py:53 - expect_no_new_memory: bool = False
examples\misc\memory_demo.py:101 - self._original = MemoryDeduplicator.deduplicate
examples\misc\memory_demo.py:116 - "uri": action.memory.uri,
examples\misc\memory_demo.py:125 - MemoryDeduplicator.deduplicate = _wrapped
examples\misc\memory_demo.py:129 - MemoryDeduplicator.deduplicate = self._original
examples\misc\memory_demo.py:159 - def _collect_memory_snapshot(client: SyncOpenViking) -> Dict[str, str]:
examples\misc\memory_demo.py:613 - if case.expect_no_new_memory and (created or deleted or changed):
examples\misc\memory_demo.py:639 - parser = argparse.ArgumentParser(description="OpenViking memory skill T1-T10 test demo")
examples\misc\memory_demo.py:642 - default="./ov_data_memory_test_demo",
examples\misc\memory_demo.py:690 - before_snapshot = _collect_memory_snapshot(client)
examples\misc\memory_demo.py:705 - after_snapshot = _collect_memory_snapshot(client)

## examples\openclaw-plugin\client.ts
examples\openclaw-plugin\client.ts:121 - const MEMORY_URI_PATTERNS = [
examples\openclaw-plugin\client.ts:132 - export function isMemoryUri(uri: string): boolean {
examples\openclaw-plugin\client.ts:133 - return MEMORY_URI_PATTERNS.some((pattern) => pattern.test(uri));

## examples\openclaw-plugin\config.ts
examples\openclaw-plugin\config.ts:5 - export type MemoryOpenVikingConfig = {
examples\openclaw-plugin\config.ts:115 - export const memoryOpenVikingConfigSchema = {
examples\openclaw-plugin\config.ts:116 - parse(value: unknown): Required<MemoryOpenVikingConfig> {
examples\openclaw-plugin\config.ts:276 - help: "Default OpenViking target URI for memory search",
examples\openclaw-plugin\config.ts:285 - help: "Extract memories from recent conversation messages via OpenViking sessions",
examples\openclaw-plugin\config.ts:317 - help: "Maximum characters per memory content in auto-recall injection. Content exceeding this is truncated.",
examples\openclaw-plugin\config.ts:322 - help: "Use memory abstract instead of fetching full content when abstract is available. Reduces token usage.",
examples\openclaw-plugin\config.ts:328 - help: "Maximum estimated tokens for auto-recall memory injection. Injection stops when budget is exhausted.",
examples\openclaw-plugin\config.ts:338 - help: "When transcript-like memory ingestion is detected, add a lightweight reply instruction to reduce NO_REPLY.",
examples\openclaw-plugin\config.ts:368 - export const DEFAULT_MEMORY_OPENVIKING_DATA_DIR = join(

## examples\openclaw-plugin\context-engine.ts
examples\openclaw-plugin\context-engine.ts:3 - import type { MemoryOpenVikingConfig } from "./config.js";
examples\openclaw-plugin\context-engine.ts:11 - } from "./memory-ranking.js";
examples\openclaw-plugin\context-engine.ts:450 - export function createMemoryOpenVikingContextEngine(params: {
examples\openclaw-plugin\context-engine.ts:454 - cfg: Required<MemoryOpenVikingConfig>;
examples\openclaw-plugin\context-engine.ts:808 - `openviking: Phase2 memory extraction runs asynchronously on the server (task_id=${commitResult.task_id}). ` +

## examples\openclaw-plugin\demo-memory-ajie.py
examples\openclaw-plugin\demo-memory-ajie.py:20 - python demo-memory-ajie.py --gateway http://127.0.0.1:18789
examples\openclaw-plugin\demo-memory-ajie.py:230 - parser = argparse.ArgumentParser(description=f"Memory 演示 — {DISPLAY_NAME}")

## examples\openclaw-plugin\demo-memory-xiaomei.py
examples\openclaw-plugin\demo-memory-xiaomei.py:20 - python demo-memory-xiaomei.py --gateway http://127.0.0.1:2026
examples\openclaw-plugin\demo-memory-xiaomei.py:230 - parser = argparse.ArgumentParser(description=f"Memory 演示 — {DISPLAY_NAME}")

## examples\openclaw-plugin\index.ts
examples\openclaw-plugin\index.ts:5 - import { memoryOpenVikingConfigSchema } from "./config.js";
examples\openclaw-plugin\index.ts:7 - import { OpenVikingClient, localClientCache, localClientPendingPromises, isMemoryUri } from "./client.js";
examples\openclaw-plugin\index.ts:21 - } from "./memory-ranking.js";
examples\openclaw-plugin\index.ts:266 - description: "OpenViking-backed context-engine memory with auto-recall/capture",
examples\openclaw-plugin\index.ts:268 - configSchema: memoryOpenVikingConfigSchema,
examples\openclaw-plugin\index.ts:275 - const cfg = memoryOpenVikingConfigSchema.parse(api.pluginConfig);
examples\openclaw-plugin\index.ts:363 - name: "memory_recall",
examples\openclaw-plugin\index.ts:364 - label: "Memory Recall (OpenViking)",
examples\openclaw-plugin\index.ts:366 - "Search long-term memories from OpenViking. Use when you need past user preferences, facts, or decisions.",
examples\openclaw-plugin\index.ts:400 - `openviking: memory_recall X-OpenViking-Agent="${agentId}" ` +
examples\openclaw-plugin\index.ts:443 - const uniqueMemories = allMemories.filter((memory, index, self) =>
examples\openclaw-plugin\index.ts:444 - index === self.findIndex((m) => m.uri === memory.uri)
examples\openclaw-plugin\index.ts:459 - content: [{ type: "text", text: "No relevant OpenViking memories found." }],
examples\openclaw-plugin\index.ts:467 - text: `Found ${memories.length} memories:\n\n${formatMemoryLines(memories)}`,
examples\openclaw-plugin\index.ts:480 - { name: "memory_recall" },
examples\openclaw-plugin\index.ts:485 - name: "memory_store",
examples\openclaw-plugin\index.ts:486 - label: "Memory Store (OpenViking)",
examples\openclaw-plugin\index.ts:490 - text: Type.String({ description: "Information to store as memory source text" }),
examples\openclaw-plugin\index.ts:506 - `openviking: memory_store invoked (textLength=${text?.length ?? 0}, sessionId=${sessionIdIn ?? "auto"})`,
examples\openclaw-plugin\index.ts:515 - sessionId = `memory-store-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
... and 30 more

## examples\openclaw-plugin\INSTALL-AGENT.md
examples\openclaw-plugin\INSTALL-AGENT.md:146 - Tell user: "OpenViking memory is active. I'll automatically remember important facts from our conversations and recall them when relevant."
examples\openclaw-plugin\INSTALL-AGENT.md:221 - Tell user: "OpenViking memory is connected to the remote server. I'll automatically remember important facts and recall them when relevant."

## examples\openclaw-plugin\INSTALL-ZH.md
examples\openclaw-plugin\INSTALL-ZH.md:36 - curl -O https://github.com/volcengine/OpenViking/blob/main/examples/openclaw-plugin/upgrade_scripts/cleanup-memory-openviking.sh
examples\openclaw-plugin\INSTALL-ZH.md:63 - 如果旧版本原来使用的是 `plugins.entries.memory-openviking.config`，请将第二步备份的openclaw配置文件中的 `mode`、`configPath`、`port`、`baseUrl`、`apiKey`、`agentId` 等参数按需迁移到新版 `plugins.entries.openviking.config`。

## examples\openclaw-plugin\INSTALL.md
examples\openclaw-plugin\INSTALL.md:3 - Provide long-term memory capabilities for [OpenClaw](https://github.com/openclaw/openclaw) via [OpenViking](https://github.com/volcengine/OpenViking). After installing, OpenClaw will automatically **remember** important information from conversations and **recall** relevant content before replying. The latest version of OpenViking includes a [WebConsole](https://github.com/volcengine/OpenViking/tree/main/openviking/console) for debugging and operations. Method 3 in this document also provides instructions on how to verify that memories are written via the WebConsole interface. We welcome you to try it out and provide feedback.
examples\openclaw-plugin\INSTALL.md:25 - ### Prerequisite Steps for Upgrading from Legacy `memory-openviking` to New `openviking`
examples\openclaw-plugin\INSTALL.md:36 - curl -fsSLO https://raw.githubusercontent.com/volcengine/OpenViking/main/examples/openclaw-plugin/upgrade_scripts/cleanup-memory-openviking.sh
examples\openclaw-plugin\INSTALL.md:57 - Edit `~/.openclaw/openclaw.json`, remove `"memory-openviking"` from `plugins.allow`, remove `plugins.entries.memory-openviking`, change `plugins.slots.memory` to `"none"`, and remove the legacy `memory-openviking` plugin path from `plugins.load.paths`.
examples\openclaw-plugin\INSTALL.md:63 - If the legacy plugin was using `plugins.entries.memory-openviking.config`, migrate `mode`, `configPath`, `port`, `baseUrl`, `apiKey`, `agentId`, and any other needed parameters from the backup `openclaw.json` file created in Step 2 into `plugins.entries.openviking.config`.
examples\openclaw-plugin\INSTALL.md:288 - Use OpenClaw logs to verify memory capture and recall:
examples\openclaw-plugin\INSTALL.md:482 - You can directly query file information on the web interface to verify whether the openclaw-plugin memory write is effective; you can also verify if openclaw-plugin is reading memories in the OpenClaw logs. The verification method is as follows:

## examples\openclaw-plugin\memory-ranking.ts
examples\openclaw-plugin\memory-ranking.ts:14 - function isEventOrCaseMemory(item: FindResultItem): boolean {
examples\openclaw-plugin\memory-ranking.ts:25 - function getMemoryDedupeKey(item: FindResultItem): string {
examples\openclaw-plugin\memory-ranking.ts:52 - const key = getMemoryDedupeKey(item);
examples\openclaw-plugin\memory-ranking.ts:65 - export function formatMemoryLines(items: FindResultItem[]): string {
examples\openclaw-plugin\memory-ranking.ts:70 - const category = item.category ?? "memory";
examples\openclaw-plugin\memory-ranking.ts:131 - function isPreferencesMemory(item: FindResultItem): boolean {
examples\openclaw-plugin\memory-ranking.ts:139 - function isEventMemory(item: FindResultItem): boolean {
examples\openclaw-plugin\memory-ranking.ts:144 - function isLeafLikeMemory(item: FindResultItem): boolean {
examples\openclaw-plugin\memory-ranking.ts:214 - const leafBoost = isLeafLikeMemory(item) ? 0.12 : 0;
examples\openclaw-plugin\memory-ranking.ts:215 - const eventBoost = query.wantsTemporal && isEventMemory(item) ? 0.1 : 0;
examples\openclaw-plugin\memory-ranking.ts:216 - const preferenceBoost = query.wantsPreference && isPreferencesMemory(item) ? 0.08 : 0;
examples\openclaw-plugin\memory-ranking.ts:243 - const leaves = deduped.filter((item) => isLeafLikeMemory(item));

## examples\openclaw-plugin\openclaw.plugin.json
examples\openclaw-plugin\openclaw.plugin.json:39 - "help": "Default OpenViking target URI for memory search"
examples\openclaw-plugin\openclaw.plugin.json:48 - "help": "Extract memories from recent conversation messages via OpenViking sessions"
examples\openclaw-plugin\openclaw.plugin.json:80 - "help": "Maximum characters per memory content in auto-recall injection"
examples\openclaw-plugin\openclaw.plugin.json:85 - "help": "Use memory abstract instead of fetching full content when available"
examples\openclaw-plugin\openclaw.plugin.json:91 - "help": "Maximum estimated tokens for auto-recall memory injection"
examples\openclaw-plugin\openclaw.plugin.json:101 - "help": "When transcript-like memory ingestion is detected, add a lightweight reply instruction to reduce NO_REPLY.",

## examples\openclaw-plugin\package.json
examples\openclaw-plugin\package.json:4 - "description": "OpenClaw OpenViking-backed long-term memory plugin (install to ~/.openclaw/extensions)",

## examples\openclaw-plugin\README.md
examples\openclaw-plugin\README.md:3 - Use [OpenViking](https://github.com/volcengine/OpenViking) as the long-term memory backend for [OpenClaw](https://github.com/openclaw/openclaw). In OpenClaw, this plugin is registered as the `openviking` context engine. Once installed, OpenClaw will automatically **remember** important information from conversations and **recall** relevant context before responding.
examples\openclaw-plugin\README.md:354 - | `targetUri` | `viking://user/memories` | Default memory search scope |
examples\openclaw-plugin\README.md:419 - | `memory_store failed: fetch failed` | OpenViking not running | Check `ov.conf` and Python path; verify service is up |

## examples\openclaw-plugin\README_CN.md
examples\openclaw-plugin\README_CN.md:419 - | `memory_store failed: fetch failed` | OpenViking 未运行 | 检查 `ov.conf` 和 Python 路径；验证服务是否运行 |

## examples\openclaw-plugin\test-memory-chain.py
examples\openclaw-plugin\test-memory-chain.py:27 - python test-memory-chain.py --gateway http://127.0.0.1:18790 --openviking http://127.0.0.1:8000
examples\openclaw-plugin\test-memory-chain.py:241 - def search_memories(
examples\openclaw-plugin\test-memory-chain.py:858 - python test-memory-chain.py --gateway http://127.0.0.1:18790

## examples\openclaw-plugin\text-utils.ts
examples\openclaw-plugin\text-utils.ts:3 - export const MEMORY_TRIGGERS = [
examples\openclaw-plugin\text-utils.ts:26 - const MEMORY_INTENT_RE = /记住|记下|remember|save|store|偏好|preference|规则|rule|事实|fact/i;
examples\openclaw-plugin\text-utils.ts:220 - reason: /<relevant-memories>/i.test(trimmed) ? "injected_memory_context_only" : "empty_text",

## examples\openclaw-plugin\setup-helper\install.js
examples\openclaw-plugin\setup-helper\install.js:58 - dir: "openclaw-memory-plugin",
examples\openclaw-plugin\setup-helper\install.js:59 - id: "memory-openviking",
examples\openclaw-plugin\setup-helper\install.js:60 - kind: "memory",
examples\openclaw-plugin\setup-helper\install.js:61 - slot: "memory",
examples\openclaw-plugin\setup-helper\install.js:762 - const manifestLegacy = await tryFetch(`${ghRaw}/examples/openclaw-memory-plugin/install-manifest.json`);
examples\openclaw-plugin\setup-helper\install.js:764 - pluginDir = "openclaw-memory-plugin";
examples\openclaw-plugin\setup-helper\install.js:773 - pluginDir = "openclaw-memory-plugin";
examples\openclaw-plugin\setup-helper\install.js:796 - let fallbackKey = pluginDir === "openclaw-memory-plugin" ? "legacy" : "current";
examples\openclaw-plugin\setup-helper\install.js:1765 - if (resolvedPluginId === "memory-openviking") return "none";
examples\openclaw-plugin\setup-helper\install.js:1913 - // Legacy (memory) plugins need explicit targetUri/autoRecall/autoCapture (new version has defaults in config.ts)
examples\openclaw-plugin\setup-helper\install.js:1914 - if (resolvedPluginKind === "memory") {
examples\openclaw-plugin\setup-helper\install.js:1915 - await oc(["config", "set", `plugins.entries.${pluginId}.config.targetUri`, "viking://user/memories"]);

## examples\openclaw-plugin\setup-helper\package.json
examples\openclaw-plugin\setup-helper\package.json:4 - "description": "Setup helper for installing OpenViking memory plugin into OpenClaw",

## examples\openclaw-plugin\skills\install-openviking-memory\SKILL.md
examples\openclaw-plugin\skills\install-openviking-memory\SKILL.md:2 - name: openviking-memory
examples\openclaw-plugin\skills\install-openviking-memory\SKILL.md:3 - description: OpenViking long-term memory plugin guide. Once installed, the plugin automatically remembers important facts from conversations and recalls relevant context before responding.
examples\openclaw-plugin\skills\install-openviking-memory\SKILL.md:10 - - **Auto-Capture**: At `afterTurn` (end of one user turn run), automatically extracts memories from user/assistant messages

## examples\openclaw-plugin\__tests__\context-bloat-730.test.ts
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:3 - import { postProcessMemories, pickMemoriesForInjection } from "../memory-ranking.js";
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:4 - import { memoryOpenVikingConfigSchema } from "../config.js";
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:7 - function mockMemory(overrides: Partial<FindResultItem> & { uri: string }): FindResultItem {
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:11 - category: "memory",
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:17 - it("mockMemory helper returns expected shape", () => {
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:18 - const m = mockMemory({ uri: "mem://test/1" });
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:25 - it("should filter memories below 0.15 threshold with default config", () => {
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:26 - const cfg = memoryOpenVikingConfigSchema.parse({});
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:29 - mockMemory({ uri: "viking://user/memories/1", score: 0.05 }),
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:30 - mockMemory({ uri: "viking://user/memories/2", score: 0.10 }),
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:31 - mockMemory({ uri: "viking://user/memories/3", score: 0.20 }),
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:32 - mockMemory({ uri: "viking://user/memories/4", score: 0.50 }),
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:49 - const cfg = memoryOpenVikingConfigSchema.parse({ recallScoreThreshold: 0.01 });
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:56 - const { buildMemoryLines } = await import("../index.js");
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:75 - const lines = await buildMemoryLines(memories, mockRead, {
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:90 - const { buildMemoryLines } = await import("../index.js");
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:104 - const lines = await buildMemoryLines(memories, mockRead, {
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:110 - const contentPart = lines[0]!.replace("- [memory] ", "");
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:116 - const cfg = memoryOpenVikingConfigSchema.parse({});
examples\openclaw-plugin\__tests__\context-bloat-730.test.ts:124 - const { buildMemoryLinesWithBudget } = await import("../index.js");
... and 9 more

## examples\openclaw-plugin\__tests__\context-engine-assemble.test.ts
examples\openclaw-plugin\__tests__\context-engine-assemble.test.ts:4 - import { memoryOpenVikingConfigSchema } from "../config.js";
examples\openclaw-plugin\__tests__\context-engine-assemble.test.ts:5 - import { createMemoryOpenVikingContextEngine } from "../context-engine.js";
examples\openclaw-plugin\__tests__\context-engine-assemble.test.ts:7 - const cfg = memoryOpenVikingConfigSchema.parse({
examples\openclaw-plugin\__tests__\context-engine-assemble.test.ts:46 - const engine = createMemoryOpenVikingContextEngine({

## examples\opencode-memory-plugin\INSTALL-ZH.md
examples\opencode-memory-plugin\INSTALL-ZH.md:69 - cp examples/opencode-memory-plugin/openviking-memory.ts ~/.config/opencode/plugins/openviking-memory.ts
examples\opencode-memory-plugin\INSTALL-ZH.md:70 - cp examples/opencode-memory-plugin/openviking-config.example.json ~/.config/opencode/plugins/openviking-config.json
examples\opencode-memory-plugin\INSTALL-ZH.md:71 - cp examples/opencode-memory-plugin/.gitignore ~/.config/opencode/plugins/.gitignore
examples\opencode-memory-plugin\INSTALL-ZH.md:118 - 原因是 OpenCode 会自动扫描 `~/.config/opencode/plugins/` 下面的一级 `*.ts` / `*.js` 文件，`openviking-memory.ts` 放在这个目录顶层即可被发现。
examples\opencode-memory-plugin\INSTALL-ZH.md:167 - - `~/.config/opencode/plugins/openviking-memory.log`
examples\opencode-memory-plugin\INSTALL-ZH.md:235 - - [openviking-memory.ts](./openviking-memory.ts): plugin implementation

## examples\opencode-memory-plugin\openviking-memory.ts
examples\opencode-memory-plugin\openviking-memory.ts:101 - logFilePath = path.join(pluginDir, "openviking-memory.log")
examples\opencode-memory-plugin\openviking-memory.ts:1244 - export const OpenVikingMemoryPlugin = async (input: PluginInput): Promise<Hooks> => {
examples\opencode-memory-plugin\openviking-memory.ts:1254 - log("INFO", "plugin", "OpenViking Memory Plugin initialized", { endpoint: config.endpoint })
examples\opencode-memory-plugin\openviking-memory.ts:1533 - "Retrieve the content of a specific memory, resource, or skill at a given viking:// URI.\n\nProgressive loading levels:\n- abstract: brief summary\n- overview: structured directory overview\n- read: full content\n- auto: choose overview for directories and read for files\n\nUse when:\n- You have a URI from memsearch or membrowse\n- You need to inspect a memory, resource, or skill in more detail\n\nRequires: Complete viking:// URI (e.g., viking://user/memories/profile.md)",
examples\opencode-memory-plugin\openviking-memory.ts:1538 - "Complete viking:// URI from search results or list output (e.g., viking://user/memories/profile.md, viking://agent/memories/context.md)",
examples\opencode-memory-plugin\openviking-memory.ts:1546 - log("INFO", "memread", "Reading memory", { uri: args.uri, level: args.level })
examples\opencode-memory-plugin\openviking-memory.ts:1651 - "Commit the current OpenCode session to OpenViking and extract persistent memories from the accumulated conversation.\n\nBy default this tool commits the OpenViking session mapped to the current OpenCode session. Use `session_id` only when you need to target a specific OpenViking session manually.\n\nUse when:\n- You want a mid-session memory extraction without ending the chat\n- You want recently discussed preferences, entities, or cases persisted immediately\n\nAutomatically extracts and stores:\n- User profile, preferences, entities, events → viking://user/memories/\n- Agent cases and patterns → viking://agent/memories/\n\nReturns background commit progress or completion details, including task_id, memories_extracted, and archived.",
examples\opencode-memory-plugin\openviking-memory.ts:1699 - message: `Memory extraction complete: ${task.result?.memories_extracted ?? 0} memories extracted`,
examples\opencode-memory-plugin\openviking-memory.ts:1734 - message: `Memory extraction complete: ${commitStart.result.memories_extracted ?? 0} memories extracted`,
examples\opencode-memory-plugin\openviking-memory.ts:1767 - message: `Memory extraction complete: ${task.result?.memories_extracted ?? 0} memories extracted`,
examples\opencode-memory-plugin\openviking-memory.ts:1790 - "Search OpenViking memories, resources, and skills through a unified interface.\n\nModes:\n- auto: choose between fast similarity search and deep context-aware search\n- fast: use simple semantic similarity search\n- deep: use intent analysis and optional session context\n\nReturns memories, resources, and skills with relevance scores and match reasons.\n\nUse when:\n- You want to find relevant memories or resources by meaning\n- You need a single search tool instead of choosing between low-level APIs\n- You want deeper retrieval for complex or ambiguous questions",

## examples\opencode-memory-plugin\README.md
examples\opencode-memory-plugin\README.md:21 - - Exposes four memory tools for OpenCode agents:
examples\opencode-memory-plugin\README.md:35 - - `openviking-memory.ts`: the plugin implementation used by OpenCode
examples\opencode-memory-plugin\README.md:63 - cp examples/opencode-memory-plugin/openviking-memory.ts ~/.config/opencode/plugins/openviking-memory.ts
examples\opencode-memory-plugin\README.md:64 - cp examples/opencode-memory-plugin/openviking-config.example.json ~/.config/opencode/plugins/openviking-config.json
examples\opencode-memory-plugin\README.md:65 - cp examples/opencode-memory-plugin/.gitignore ~/.config/opencode/plugins/.gitignore
examples\opencode-memory-plugin\README.md:193 - - Plugin not loading: confirm the file exists at `~/.config/opencode/plugins/openviking-memory.ts`

## examples\opencode-memory-plugin\README_CN.md
examples\opencode-memory-plugin\README_CN.md:63 - cp examples/opencode-memory-plugin/openviking-memory.ts ~/.config/opencode/plugins/openviking-memory.ts
examples\opencode-memory-plugin\README_CN.md:64 - cp examples/opencode-memory-plugin/openviking-config.example.json ~/.config/opencode/plugins/openviking-config.json
examples\opencode-memory-plugin\README_CN.md:65 - cp examples/opencode-memory-plugin/.gitignore ~/.config/opencode/plugins/.gitignore
examples\opencode-memory-plugin\README_CN.md:193 - - 插件未加载：确认文件存在于 `~/.config/opencode/plugins/openviking-memory.ts`

## examples\skills\ov-add-data\SKILL.md
examples\skills\ov-add-data\SKILL.md:3 - description: This skill adds data(like resources) to OpenViking Context Database (aka. ov). Use when an agent needs to add files, data from URLs, or external knowledge during interactions. Trigger this tool when 1. is explicitly requested adding files or knowledge; 2. identifies valuable resources worth importing; 3. the user mentioned adding to OV/OpenViking/Context Database. This skill helps how to use CLI like `ov add-resource`, `ov add-skill` and `ov add-memory` to add resource data, skill files, memory files to OpenViking.
examples\skills\ov-add-data\SKILL.md:111 - ### Mode 1: Plain Text for compressed memory
examples\skills\ov-add-data\SKILL.md:134 - Returns count of memory extracted:

## examples\skills\ov-search-context\SKILL.md
examples\skills\ov-search-context\SKILL.md:3 - description: Search context data(memories, skills and resource) from OpenViking Context Database (aka. ov). Trigger this tool when 1. need information that might be stored as memories, skills or resources on OpenViking; 2. is explicitly requested searching files or knowledge; 3. sees `search context`, `search openviking`, `search ov` request.

## openviking\agfs_manager.py
openviking\agfs_manager.py:186 - elif self.backend == "memory":
openviking\agfs_manager.py:187 - config["plugins"]["memfs"] = {

## openviking\console\static\app.js
openviking\console\static\app.js:88 - addMemoryInput: document.getElementById("addMemoryInput"),
openviking\console\static\app.js:89 - addMemoryBtn: document.getElementById("addMemoryBtn"),
openviking\console\static\app.js:850 - normalized.context_type || (key === "memories" ? "memory" : key.slice(0, -1)),
openviking\console\static\app.js:2266 - elements.addMemoryBtn.addEventListener("click", async () => {
openviking\console\static\app.js:2272 - const text = elements.addMemoryInput.value.trim();

## openviking\core\context.py
openviking\core\context.py:28 - MEMORY = "memory"

## openviking\core\directories.py
openviking\core\directories.py:25 - path: str  # Relative path, e.g., "memory/identity"
openviking\core\directories.py:40 - abstract="User scope. Stores user's long-term memory, persisted across sessions.",
openviking\core\directories.py:45 - abstract="User's long-term memory storage. Contains memory types like preferences, entities, events, managed hierarchically by type.",
openviking\core\directories.py:59 - abstract="Entity memories from user's world. Each entity has its own subdirectory, including projects, people, concepts, etc. "
openviking\core\directories.py:70 - "Examples: decided to refactor memory system, completed a project, attended an event. "
openviking\core\directories.py:85 - abstract="Agent's long-term memory storage. Contains cases and patterns, managed hierarchically by type.",

## openviking\message\message.py
openviking\message\message.py:119 - context_type=p.get("context_type", "memory"),
openviking\message\message.py:176 - context_type=ref.get("context_type", "memory"),

## openviking\message\part.py
openviking\message\part.py:29 - context_type: Literal["memory", "resource", "skill"] = "memory"
openviking\message\part.py:71 - context_type=data.get("context_type", "memory"),

## openviking\parse\parsers\legacy_doc.py
openviking\parse\parsers\legacy_doc.py:142 - # Cap ccpText to prevent memory exhaustion from crafted files

## openviking\parse\parsers\code\ast\languages\js_ts.py
openviking\parse\parsers\code\ast\languages\js_ts.py:112 - if s2.type in ("identifier", "type_identifier", "member_expression"):

## openviking\prompts\templates\compression\dedup_decision.yaml
openviking\prompts\templates\compression\dedup_decision.yaml:3 - name: "Memory Deduplication Decision"
openviking\prompts\templates\compression\dedup_decision.yaml:4 - description: "Decide candidate action (skip/create/none) and per-memory actions (merge/delete)"
openviking\prompts\templates\compression\dedup_decision.yaml:12 - description: "Candidate memory content (L2)"
openviking\prompts\templates\compression\dedup_decision.yaml:16 - description: "Candidate memory abstract (L0)"
openviking\prompts\templates\compression\dedup_decision.yaml:20 - description: "Candidate memory overview (L1)"
openviking\prompts\templates\compression\dedup_decision.yaml:28 - You are deciding how to update long-term memory with:
openviking\prompts\templates\compression\dedup_decision.yaml:30 - 2) existing similar memories (retrieved from store)
openviking\prompts\templates\compression\dedup_decision.yaml:32 - Candidate memory:
openviking\prompts\templates\compression\dedup_decision.yaml:54 - Existing-memory per-item action:
openviking\prompts\templates\compression\dedup_decision.yaml:67 - (for example any single preference facet), existing memories from other facets
openviking\prompts\templates\compression\dedup_decision.yaml:86 - - Use uri exactly from existing memories list.
openviking\prompts\templates\compression\dedup_decision.yaml:87 - - Omit unchanged existing memories from list.
openviking\prompts\templates\compression\dedup_decision.yaml:96 - "uri": "<existing memory uri>",

## openviking\prompts\templates\compression\memory_extraction.yaml
openviking\prompts\templates\compression\memory_extraction.yaml:2 - id: "compression.memory_extraction"
openviking\prompts\templates\compression\memory_extraction.yaml:3 - name: "Memory Extraction (Three-Level)"
openviking\prompts\templates\compression\memory_extraction.yaml:4 - description: "Extract memories from session context using L0/L1/L2 three-level structure"
openviking\prompts\templates\compression\memory_extraction.yaml:30 - description: "Target language for extracted memory fields (abstract, overview, content)"
openviking\prompts\templates\compression\memory_extraction.yaml:85 - Example: "Redis is an in-memory database" is general knowledge.
openviking\prompts\templates\compression\memory_extraction.yaml:207 - Each memory contains three levels, each serving a purpose:
openviking\prompts\templates\compression\memory_extraction.yaml:212 - - entities: `OpenViking project: AI Agent long-term memory management system`
openviking\prompts\templates\compression\memory_extraction.yaml:216 - - events: `Decided to refactor memory system: Simplify to 5 categories`
openviking\prompts\templates\compression\memory_extraction.yaml:254 - ❌ **Bad (mixed facets in one memory)**:
openviking\prompts\templates\compression\memory_extraction.yaml:295 - "abstract": "OpenViking project: AI Agent long-term memory management system",
openviking\prompts\templates\compression\memory_extraction.yaml:296 - "overview": "## Basic Info\\n- **Type**: Project\\n- **Status**: Active development\\n- **Tech stack**: Python, AGFS\\n\\n## Core Features\\n- Memory extraction (MemoryExtractor)\\n- Memory deduplication (MemoryDeduplicator)\\n- Memory retrieval (vector search)",
openviking\prompts\templates\compression\memory_extraction.yaml:297 - "content": "OpenViking is an AI Agent long-term memory management system the user is developing. The project uses Python and AGFS tech stack, core features include memory extraction, deduplication, and retrieval. Currently in active development, goal is to build Claude-like long-term memory capabilities."
openviking\prompts\templates\compression\memory_extraction.yaml:306 - "abstract": "Decided to refactor memory system: From 6 categories to 5 categories",
openviking\prompts\templates\compression\memory_extraction.yaml:307 - "overview": "## Decision Content\\nRefactor memory system classification\\n\\n## Reason\\nOriginal 6 categories had blurry boundaries between states/lessons/insights\\n\\n## Result\\nSimplified to profile/preferences/entities/events/cases/patterns",
openviking\prompts\templates\compression\memory_extraction.yaml:308 - "content": "During memory system design discussion, found that the original 6 categories (profile/states/lessons/insights/cases/patterns) had blurry boundaries. Especially states, lessons, insights often overlapped and were hard to distinguish. Decided to refactor to 5 categories, removing these three to make classification boundaries clearer."
openviking\prompts\templates\compression\memory_extraction.yaml:345 - "overview": "## Tool Info\\n- **Name**: web_search\\n- **Type**: external_api\\n\\n## Statistics\\n- **Success Rate**: 92%\\n- **Avg Time**: 2.3s\\n\\n## Tool Memory Context\\n- Best for: Technical documentation, tutorials, API references\\n- Optimal params: max_results: 5-20; language: 'en'; query: specific multi-word phrases\\n- Common failures: Single-word queries; max_results>50 timeout\\n- Recommendation: Use specific multi-word queries with qualifiers",
openviking\prompts\templates\compression\memory_extraction.yaml:362 - "overview": "## Skill Info\\n- **Name**: create_presentation\\n- **Type**: workflow\\n\\n## Statistics\\n- **Success Rate**: 85%\\n\\n## Skill Memory Context\\n- Best for: Slide creation with clear topic and audience\\n- Recommended flow: Confirm → Collect → Outline → Create → Refine\\n- Key dependencies: Clear topic; target audience; reference materials\\n- Common failures: Vague topic; missing audience; no references\\n- Recommendation: Confirm topic/audience first; collect reference materials",

## openviking\prompts\templates\compression\memory_merge.yaml
openviking\prompts\templates\compression\memory_merge.yaml:2 - id: "compression.memory_merge"
openviking\prompts\templates\compression\memory_merge.yaml:3 - name: "Memory Merge"
openviking\prompts\templates\compression\memory_merge.yaml:4 - description: "Merge existing memory with new information"
openviking\prompts\templates\compression\memory_merge.yaml:12 - description: "Existing memory content"
openviking\prompts\templates\compression\memory_merge.yaml:16 - description: "New memory content to merge"
openviking\prompts\templates\compression\memory_merge.yaml:20 - description: "Memory category (profile, preferences, etc.)"
openviking\prompts\templates\compression\memory_merge.yaml:32 - **Target Output Language**: {{ output_language }} ("auto" means infer from existing/new memory language)

## openviking\prompts\templates\compression\memory_merge_bundle.yaml
openviking\prompts\templates\compression\memory_merge_bundle.yaml:2 - id: "compression.memory_merge_bundle"
openviking\prompts\templates\compression\memory_merge_bundle.yaml:3 - name: "Memory Merge Bundle"
openviking\prompts\templates\compression\memory_merge_bundle.yaml:4 - description: "Merge memory and return L0/L1/L2 in one structured response"
openviking\prompts\templates\compression\memory_merge_bundle.yaml:12 - description: "Existing memory abstract (L0)"
openviking\prompts\templates\compression\memory_merge_bundle.yaml:17 - description: "Existing memory overview (L1)"
openviking\prompts\templates\compression\memory_merge_bundle.yaml:22 - description: "Existing memory content (L2)"
openviking\prompts\templates\compression\memory_merge_bundle.yaml:26 - description: "New memory abstract (L0)"
openviking\prompts\templates\compression\memory_merge_bundle.yaml:31 - description: "New memory overview (L1)"
openviking\prompts\templates\compression\memory_merge_bundle.yaml:36 - description: "New memory content (L2)"
openviking\prompts\templates\compression\memory_merge_bundle.yaml:40 - description: "Memory category (profile, preferences, etc.)"
openviking\prompts\templates\compression\memory_merge_bundle.yaml:54 - Existing memory:
openviking\prompts\templates\compression\memory_merge_bundle.yaml:59 - New memory:
openviking\prompts\templates\compression\memory_merge_bundle.yaml:66 - - Keep non-conflicting details from existing memory.

## openviking\prompts\templates\memory\cases.yaml
openviking\prompts\templates\memory\cases.yaml:1 - memory_type: cases
openviking\prompts\templates\memory\cases.yaml:4 - Extract specific problem-solution pairs from the conversation that are worth remembering for future reference.

## openviking\prompts\templates\memory\entities.yaml
openviking\prompts\templates\memory\entities.yaml:1 - memory_type: entities

## openviking\prompts\templates\memory\events.yaml
openviking\prompts\templates\memory\events.yaml:1 - memory_type: events
openviking\prompts\templates\memory\events.yaml:29 - Example: “In memory system design discussion, found original 6 category boundaries were unclear. Especially status, lessons learned, and insights often overlapped, making them difficult to distinguish. Decided to refactor to 5 categories, removing these three to make boundaries clearer.”

## openviking\prompts\templates\memory\patterns.yaml
openviking\prompts\templates\memory\patterns.yaml:1 - memory_type: patterns

## openviking\prompts\templates\memory\preferences.yaml
openviking\prompts\templates\memory\preferences.yaml:1 - memory_type: preferences

## openviking\prompts\templates\memory\profile.yaml
openviking\prompts\templates\memory\profile.yaml:1 - memory_type: profile

## openviking\prompts\templates\memory\skills.yaml
openviking\prompts\templates\memory\skills.yaml:1 - memory_type: skills
openviking\prompts\templates\memory\skills.yaml:7 - Skill memories help the agent learn from experience and execute skills more effectively over time.
openviking\prompts\templates\memory\skills.yaml:14 - Skill Memory Context:

## openviking\prompts\templates\memory\tools.yaml
openviking\prompts\templates\memory\tools.yaml:1 - memory_type: tools
openviking\prompts\templates\memory\tools.yaml:7 - Tool memories help the agent learn from experience and use tools more effectively over time.
openviking\prompts\templates\memory\tools.yaml:17 - Tool Memory Context:

## openviking\prompts\templates\parsing\context_generation.yaml
openviking\prompts\templates\parsing\context_generation.yaml:32 - description: "Context type, possible values: \"memory\" (user profile or historical event memory) / \"resource\" (materials/documents) / \"skill\" (agent skills)"
openviking\prompts\templates\parsing\context_generation.yaml:68 - {% elif context_type == "memory" %}
openviking\prompts\templates\parsing\context_generation.yaml:87 - {% elif context_type == "memory" %}
openviking\prompts\templates\parsing\context_generation.yaml:88 - - What it is: Type of experience/memory

## openviking\prompts\templates\retrieval\intent_analysis.yaml
openviking\prompts\templates\retrieval\intent_analysis.yaml:28 - description: "Restricted context type (skill/resource/memory)"
openviking\prompts\templates\retrieval\intent_analysis.yaml:114 - **Query Style**: Distinguish by memory type
openviking\prompts\templates\retrieval\intent_analysis.yaml:116 - **User Memory** - "User XX" format:
openviking\prompts\templates\retrieval\intent_analysis.yaml:122 - **Agent Memory** - "Experience executing XX" or "System insights about YY":
openviking\prompts\templates\retrieval\intent_analysis.yaml:134 - - Need to learn from historical experience (agent memory)
openviking\prompts\templates\retrieval\intent_analysis.yaml:142 - - Typical context combination: `skill + resource + memory`
openviking\prompts\templates\retrieval\intent_analysis.yaml:147 - | "Create an RFC document" | skill: "Create RFC document"<br>resource: "RFC document standard template"<br>memory: "User's preferred document style" |
openviking\prompts\templates\retrieval\intent_analysis.yaml:148 - | "Merge three PDFs" | skill: "Merge PDF documents"<br>memory: "User's file processing preferences" |
openviking\prompts\templates\retrieval\intent_analysis.yaml:152 - - Typical context combination: `resource + memory`
openviking\prompts\templates\retrieval\intent_analysis.yaml:157 - | "What is the standard format for RFC documents" | resource: "RFC document standard format specification"<br>memory: "System insights about RFC specifications" |
openviking\prompts\templates\retrieval\intent_analysis.yaml:183 - - Operational tasks typically need: skill (execution) + resource (reference) + memory (preference/experience)
openviking\prompts\templates\retrieval\intent_analysis.yaml:202 - "reasoning": "1. Task type (operational/informational/conversational); 2. What context is needed (skill/resource/memory); 3. What is already in context; 4. What is missing and needs to be queried",
openviking\prompts\templates\retrieval\intent_analysis.yaml:206 - "context_type": "skill|resource|memory",
openviking\prompts\templates\retrieval\intent_analysis.yaml:219 - "reasoning": "1. Operational task (need to create document); 2. Need skill for execution, resource for template, memory for style preferences; 3. No relevant information in context; 4. Need to query all three context types",
openviking\prompts\templates\retrieval\intent_analysis.yaml:235 - "context_type": "memory",

## openviking\pyagfs\client.py
openviking\pyagfs\client.py:385 - fstype: Filesystem type (e.g., 'sqlfs', 's3fs', 'memfs')

## openviking\pyagfs\helpers.py
openviking\pyagfs\helpers.py:26 - stream: If True, use streaming for large files (memory efficient)
openviking\pyagfs\helpers.py:62 - stream: If True, use streaming for large files (memory efficient)
openviking\pyagfs\helpers.py:100 - stream: If True, use streaming for large files (memory efficient)

## openviking\retrieve\hierarchical_retriever.py
openviking\retrieve\hierarchical_retriever.py:18 - from openviking.retrieve.memory_lifecycle import hotness_score
openviking\retrieve\hierarchical_retriever.py:609 - elif context_type == ContextType.MEMORY:

## openviking\retrieve\retrieval_stats.py
openviking\retrieve\retrieval_stats.py:87 - context_type="memory",

## openviking\server\api_keys.py
openviking\server\api_keys.py:32 - ARGON2_MEMORY_COST = 65536
openviking\server\api_keys.py:83 - """Load accounts and user keys from VikingFS into memory."""
openviking\server\api_keys.py:475 - memory_cost=ARGON2_MEMORY_COST,

## openviking\server\routers\sessions.py
openviking\server\routers\sessions.py:33 - context_type: Literal["memory", "resource", "skill"] = "memory"
openviking\server\routers\sessions.py:213 - """Extract memories from a session."""

## openviking\server\routers\stats.py
openviking\server\routers\stats.py:14 - from openviking.storage.stats_aggregator import MEMORY_CATEGORIES, StatsAggregator
openviking\server\routers\stats.py:27 - async def get_memory_stats(
openviking\server\routers\stats.py:30 - description="Filter by memory category (e.g. cases, patterns, tools)",
openviking\server\routers\stats.py:39 - if category and category not in MEMORY_CATEGORIES:
openviking\server\routers\stats.py:44 - message=f"Unknown category: {category}. Valid categories: {', '.join(MEMORY_CATEGORIES)}",
openviking\server\routers\stats.py:49 - result = await aggregator.get_memory_stats(_ctx, category=category)

## openviking\service\session_service.py
openviking\service\session_service.py:179 - """Extract memories from a session.

## openviking\service\task_tracker.py
openviking\service\task_tracker.py:119 - logger.info("[TaskTracker] Initialized (in-memory, max_tasks=%d)", self.MAX_TASKS)

## openviking\session\compressor.py
openviking\session\compressor.py:6 - Handles extraction of long-term memories from session conversations.
openviking\session\compressor.py:22 - from .memory_deduplicator import DedupDecision, MemoryActionDecision, MemoryDeduplicator
openviking\session\compressor.py:23 - from .memory_extractor import (
openviking\session\compressor.py:33 - ALWAYS_MERGE_CATEGORIES = {MemoryCategory.PROFILE}
openviking\session\compressor.py:68 - self.extractor = MemoryExtractor()
openviking\session\compressor.py:69 - self.deduplicator = MemoryDeduplicator(vikingdb=vikingdb)
openviking\session\compressor.py:128 - context_type="memory",
openviking\session\compressor.py:147 - async def _index_memory(
openviking\session\compressor.py:148 - self, memory: Context, ctx: RequestContext, change_type: str = "added"
openviking\session\compressor.py:156 - memory: The memory context to index
openviking\session\compressor.py:164 - vectorize_text = memory.get_vectorization_text()
openviking\session\compressor.py:166 - if vectorize_text and len(vectorize_text) > semantic.memory_chunk_chars:
openviking\session\compressor.py:180 - chunk_memory = copy.deepcopy(memory)
openviking\session\compressor.py:181 - chunk_memory.uri = f"{memory.uri}#chunk_{i:04d}"
openviking\session\compressor.py:182 - chunk_memory.parent_uri = memory.uri
openviking\session\compressor.py:183 - chunk_memory.set_vectorize(Vectorize(text=chunk))
openviking\session\compressor.py:184 - chunk_msg = EmbeddingMsgConverter.from_context(chunk_memory)
openviking\session\compressor.py:189 - embedding_msg = EmbeddingMsgConverter.from_context(memory)
openviking\session\compressor.py:191 - logger.info(f"Enqueued memory for vectorization: {memory.uri}")
openviking\session\compressor.py:193 - self._record_semantic_change(memory.uri, change_type, parent_uri=memory.parent_uri)
... and 66 more

## openviking\session\compressor_v2.py
openviking\session\compressor_v2.py:23 - from openviking.session.memory import MemoryReAct, MemoryUpdater, MemoryTypeRegistry
openviking\session\compressor_v2.py:48 - self._registry = MemoryTypeRegistry()
openviking\session\compressor_v2.py:54 - self._react_orchestrator: Optional[MemoryReAct] = None
openviking\session\compressor_v2.py:55 - self._memory_updater: Optional[MemoryUpdater] = None
openviking\session\compressor_v2.py:57 - def _get_or_create_react(self, ctx: Optional[RequestContext] = None) -> MemoryReAct:
openviking\session\compressor_v2.py:74 - def _get_or_create_updater(self) -> MemoryUpdater:
openviking\session\compressor_v2.py:76 - if self._memory_updater is not None:
openviking\session\compressor_v2.py:79 - self._memory_updater = MemoryUpdater(registry=self._registry, vikingdb=self.vikingdb)
openviking\session\compressor_v2.py:82 - async def extract_long_term_memories(
openviking\session\compressor_v2.py:91 - """Extract long-term memories from messages using v2 templating system.
openviking\session\compressor_v2.py:113 - logger.info("Starting v2 memory extraction from conversation")
openviking\session\compressor_v2.py:128 - f"Generated memory operations: write={len(operations.write_uris)}, "
openviking\session\compressor_v2.py:137 - f"Applied memory operations: written={len(result.written_uris)}, "

## openviking\session\memory_archiver.py
openviking\session\memory_archiver.py:14 - from openviking.retrieve.memory_lifecycle import hotness_score
openviking\session\memory_archiver.py:49 - class MemoryArchiver:
openviking\session\memory_archiver.py:52 - Uses ``hotness_score()`` from ``memory_lifecycle`` to identify memories
openviking\session\memory_archiver.py:229 - f"[MemoryArchiver] Archive complete: "
openviking\session\memory_archiver.py:246 - archived_uri: URI of the archived memory.
openviking\session\memory_archiver.py:255 - f"[MemoryArchiver] Cannot restore {archived_uri}: not in an archive directory"

## openviking\session\memory_deduplicator.py
openviking\session\memory_deduplicator.py:26 - from .memory_extractor import CandidateMemory
openviking\session\memory_deduplicator.py:35 - CREATE = "create"  # Create candidate memory
openviking\session\memory_deduplicator.py:39 - class MemoryActionDecision(str, Enum):
openviking\session\memory_deduplicator.py:42 - MERGE = "merge"  # Merge candidate into existing memory
openviking\session\memory_deduplicator.py:43 - DELETE = "delete"  # Delete conflicting existing memory
openviking\session\memory_deduplicator.py:47 - class ExistingMemoryAction:
openviking\session\memory_deduplicator.py:50 - memory: Context
openviking\session\memory_deduplicator.py:51 - decision: MemoryActionDecision
openviking\session\memory_deduplicator.py:60 - candidate: CandidateMemory
openviking\session\memory_deduplicator.py:62 - actions: Optional[List[ExistingMemoryAction]] = None
openviking\session\memory_deduplicator.py:67 - class MemoryDeduplicator:
openviking\session\memory_deduplicator.py:79 - if category in MemoryDeduplicator._USER_CATEGORIES:
openviking\session\memory_deduplicator.py:81 - elif category in MemoryDeduplicator._AGENT_CATEGORIES:
openviking\session\memory_deduplicator.py:100 - candidate: CandidateMemory,
openviking\session\memory_deduplicator.py:134 - async def _find_similar_memories(
openviking\session\memory_deduplicator.py:136 - candidate: CandidateMemory,
openviking\session\memory_deduplicator.py:240 - candidate: CandidateMemory,
openviking\session\memory_deduplicator.py:242 - ) -> tuple[DedupDecision, str, List[ExistingMemoryAction]]:
openviking\session\memory_deduplicator.py:315 - candidate: Optional[CandidateMemory] = None,
openviking\session\memory_deduplicator.py:316 - ) -> tuple[DedupDecision, str, List[ExistingMemoryAction]]:
... and 18 more

## openviking\session\memory_extractor.py
openviking\session\memory_extractor.py:6 - Extracts 6 categories of memories from session:
openviking\session\memory_extractor.py:7 - - UserMemory: profile, preferences, entities, events
openviking\session\memory_extractor.py:8 - - AgentMemory: cases, patterns
openviking\session\memory_extractor.py:40 - class MemoryCategory(str, Enum):
openviking\session\memory_extractor.py:59 - class CandidateMemory:
openviking\session\memory_extractor.py:60 - """Candidate memory extracted from session."""
openviking\session\memory_extractor.py:62 - category: MemoryCategory
openviking\session\memory_extractor.py:72 - class ToolSkillCandidateMemory(CandidateMemory):
openviking\session\memory_extractor.py:92 - class MergedMemoryPayload:
openviking\session\memory_extractor.py:101 - class MemoryExtractor:
openviking\session\memory_extractor.py:102 - """Extracts memories from session messages with 6-category classification."""
openviking\session\memory_extractor.py:106 - MemoryCategory.PROFILE: "memories/profile.md",  # User profile
openviking\session\memory_extractor.py:107 - MemoryCategory.PREFERENCES: "memories/preferences",
openviking\session\memory_extractor.py:108 - MemoryCategory.ENTITIES: "memories/entities",
openviking\session\memory_extractor.py:109 - MemoryCategory.EVENTS: "memories/events",
openviking\session\memory_extractor.py:110 - MemoryCategory.CASES: "memories/cases",
openviking\session\memory_extractor.py:111 - MemoryCategory.PATTERNS: "memories/patterns",
openviking\session\memory_extractor.py:113 - MemoryCategory.TOOLS: "memories/tools",
openviking\session\memory_extractor.py:114 - MemoryCategory.SKILLS: "memories/skills",
openviking\session\memory_extractor.py:137 - def _get_owner_space(category: MemoryCategory, ctx: RequestContext) -> str:
... and 85 more

## openviking\session\session.py
openviking\session\session.py:357 - Phase 2 (Memory extraction): Always runs in background via asyncio.create_task().
openviking\session\session.py:464 - async def _run_memory_extraction(
openviking\session\session.py:558 - f"Starting memory extraction from {len(messages)} archived messages"
openviking\session\session.py:632 - stage="memory_extraction",

## openviking\session\__init__.py
openviking\session\__init__.py:8 - from openviking.session.memory_archiver import (
openviking\session\__init__.py:13 - from openviking.session.memory_deduplicator import (
openviking\session\__init__.py:20 - from openviking.session.memory_extractor import (
openviking\session\__init__.py:36 - memory_version: Optional[str] = None,
openviking\session\__init__.py:43 - memory_version: Optional memory version override ("v1" or "v2").
openviking\session\__init__.py:50 - if memory_version is None:
openviking\session\__init__.py:53 - memory_version = config.memory.version
openviking\session\__init__.py:55 - logger.warning(f"Failed to get memory version from config, defaulting to v1: {e}")
openviking\session\__init__.py:56 - memory_version = "v1"
openviking\session\__init__.py:58 - if memory_version == "v2":

## openviking\session\memory\dataclass.py
openviking\session\memory\dataclass.py:12 - from openviking.session.memory.merge_op.base import (
openviking\session\memory\dataclass.py:29 - class MemoryField(BaseModel):
openviking\session\memory\dataclass.py:38 - class MemoryTypeSchema(BaseModel):
openviking\session\memory\dataclass.py:39 - """Memory type schema definition."""
openviking\session\memory\dataclass.py:41 - memory_type: str = Field(..., description="Memory type name")
openviking\session\memory\dataclass.py:43 - fields: List[MemoryField] = Field(default_factory=list, description="Field definitions")
openviking\session\memory\dataclass.py:47 - enabled: bool = Field(True, description="Whether this memory type is enabled")
openviking\session\memory\dataclass.py:50 - class MemoryData(BaseModel):
openviking\session\memory\dataclass.py:53 - memory_type: str = Field(..., description="Memory type name")
openviking\session\memory\dataclass.py:54 - uri: Optional[str] = Field(None, description="Memory URI (for updates)")
openviking\session\memory\dataclass.py:59 - name: Optional[str] = Field(None, description="Memory name")
openviking\session\memory\dataclass.py:80 - class MemoryOperationsProtocol(Protocol):
openviking\session\memory\dataclass.py:81 - """Protocol for memory operations (for type checking)."""
openviking\session\memory\dataclass.py:92 - class StructuredMemoryOperations(BaseModel):
openviking\session\memory\dataclass.py:115 - description="Edit operations for .overview.md files using memory_type",
openviking\session\memory\dataclass.py:135 - MemoryOperations = StructuredMemoryOperations

## openviking\session\memory\memory_react.py
openviking\session\memory\memory_react.py:18 - from openviking.session.memory.utils import (
openviking\session\memory\memory_react.py:27 - from openviking.session.memory.dataclass import MemoryOperations
openviking\session\memory\memory_react.py:28 - from openviking.session.memory.memory_type_registry import MemoryTypeRegistry
openviking\session\memory\memory_react.py:29 - from openviking.session.memory.schema_model_generator import (
openviking\session\memory\memory_react.py:33 - from openviking.session.memory.tools import (
openviking\session\memory\memory_react.py:46 - class MemoryReAct:
openviking\session\memory\memory_react.py:64 - registry: Optional[MemoryTypeRegistry] = None,
openviking\session\memory\memory_react.py:75 - registry: Optional MemoryTypeRegistry - if not provided, will be created
openviking\session\memory\memory_react.py:88 - schemas_dir = os.path.join(os.path.dirname(__file__), "..", "..", "prompts", "templates", "memory")
openviking\session\memory\memory_react.py:89 - self.registry = MemoryTypeRegistry()
openviking\session\memory\memory_react.py:117 - from openviking.session.memory.tools import get_tool
openviking\session\memory\memory_react.py:216 - ) -> Tuple[Optional[MemoryOperations], List[Dict[str, Any]]]:
openviking\session\memory\memory_react.py:236 - logger.info(f"Detected output language for memory ReAct: {self._output_language}")
openviking\session\memory\memory_react.py:284 - final_operations = MemoryOperations()
openviking\session\memory\memory_react.py:394 - IMPORTANT: Before you edit or update ANY existing memory file, you MUST first use the read tool to read its complete content.
openviking\session\memory\memory_react.py:405 - - For write_uris: Using memory_type and fields
openviking\session\memory\memory_react.py:406 - - For edit_uris: Using memory_type and fields to identify the target
openviking\session\memory\memory_react.py:407 - - For edit_overview_uris: Using memory_type to identify the directory, then updates the .overview.md file in that directory
openviking\session\memory\memory_react.py:408 - - For delete_uris: Using memory_type and fields to identify the target
openviking\session\memory\memory_react.py:417 - 2. The .overview.md provides a high-level summary for that memory type directory
... and 14 more

## openviking\session\memory\memory_type_registry.py
openviking\session\memory\memory_type_registry.py:4 - Memory type registry - loads YAML configurations.
openviking\session\memory\memory_type_registry.py:12 - from openviking.session.memory.dataclass import MemoryField, MemoryTypeSchema
openviking\session\memory\memory_type_registry.py:13 - from openviking.session.memory.merge_op import MergeOp
openviking\session\memory\memory_type_registry.py:14 - from openviking.session.memory.merge_op.base import FieldType
openviking\session\memory\memory_type_registry.py:20 - class MemoryTypeRegistry:
openviking\session\memory\memory_type_registry.py:24 - Loads memory type definitions from YAML files and provides
openviking\session\memory\memory_type_registry.py:25 - access to memory type configurations.
openviking\session\memory\memory_type_registry.py:29 - self._types: Dict[str, MemoryTypeSchema] = {}
openviking\session\memory\memory_type_registry.py:31 - def register(self, memory_type: MemoryTypeSchema) -> None:
openviking\session\memory\memory_type_registry.py:32 - """Register a memory type."""
openviking\session\memory\memory_type_registry.py:33 - self._types[memory_type.memory_type] = memory_type
openviking\session\memory\memory_type_registry.py:34 - logger.debug(f"Registered memory type: {memory_type.memory_type}")
openviking\session\memory\memory_type_registry.py:36 - def get(self, name: str) -> Optional[MemoryTypeSchema]:
openviking\session\memory\memory_type_registry.py:37 - """Get a memory type by name."""
openviking\session\memory\memory_type_registry.py:40 - def list_all(self, include_disabled: bool = False) -> List[MemoryTypeSchema]:
openviking\session\memory\memory_type_registry.py:44 - include_disabled: If True, include disabled memory types
openviking\session\memory\memory_type_registry.py:47 - List of memory type schemas
openviking\session\memory\memory_type_registry.py:54 - """List all registered memory type names.
openviking\session\memory\memory_type_registry.py:57 - include_disabled: If True, include disabled memory types
openviking\session\memory\memory_type_registry.py:60 - List of memory type names
... and 9 more

## openviking\session\memory\memory_updater.py
openviking\session\memory\memory_updater.py:14 - from openviking.session.memory.utils import (
openviking\session\memory\memory_updater.py:20 - from openviking.session.memory.dataclass import MemoryField
openviking\session\memory\memory_updater.py:21 - from openviking.session.memory.merge_op import MergeOpFactory, PatchOp
openviking\session\memory\memory_updater.py:22 - from openviking.session.memory.merge_op.base import FieldType, SearchReplaceBlock, StrPatch
openviking\session\memory\memory_updater.py:23 - from openviking.session.memory.memory_type_registry import MemoryTypeRegistry
openviking\session\memory\memory_updater.py:31 - class MemoryUpdateResult:
openviking\session\memory\memory_updater.py:70 - class MemoryUpdater:
openviking\session\memory\memory_updater.py:78 - def __init__(self, registry: Optional[MemoryTypeRegistry] = None, vikingdb=None):
openviking\session\memory\memory_updater.py:83 - def set_registry(self, registry: MemoryTypeRegistry) -> None:
openviking\session\memory\memory_updater.py:84 - """Set the memory type registry for URI resolution."""
openviking\session\memory\memory_updater.py:97 - registry: Optional[MemoryTypeRegistry] = None,
openviking\session\memory\memory_updater.py:98 - ) -> MemoryUpdateResult:
openviking\session\memory\memory_updater.py:105 - operations: StructuredMemoryOperations from LLM (final output) with flat models
openviking\session\memory\memory_updater.py:107 - registry: Optional MemoryTypeRegistry for URI resolution
openviking\session\memory\memory_updater.py:112 - result = MemoryUpdateResult()
openviking\session\memory\memory_updater.py:147 - logger.error(f"Failed to write memory: {e}")
openviking\session\memory\memory_updater.py:156 - logger.error(f"Failed to edit memory {uri}: {e}")
openviking\session\memory\memory_updater.py:174 - logger.error(f"Failed to delete memory {uri}: {e}")
openviking\session\memory\memory_updater.py:180 - logger.info(f"Memory operations applied: {result.summary()}")
openviking\session\memory\memory_updater.py:198 - # Get memory type schema to know which fields are business fields vs metadata
... and 27 more

## openviking\session\memory\schema_model_generator.py
openviking\session\memory\schema_model_generator.py:6 - Generates type-safe Pydantic models at runtime from MemoryTypeSchema
openviking\session\memory\schema_model_generator.py:18 - from openviking.session.memory.dataclass import MemoryTypeSchema
openviking\session\memory\schema_model_generator.py:19 - from openviking.session.memory.merge_op import MergeOp, MergeOpFactory
openviking\session\memory\schema_model_generator.py:20 - from openviking.session.memory.merge_op.base import FieldType, StrPatch, get_python_type_for_field
openviking\session\memory\schema_model_generator.py:21 - from openviking.session.memory.memory_type_registry import MemoryTypeRegistry
openviking\session\memory\schema_model_generator.py:38 - Dynamic Pydantic model generator from memory type schemas.
openviking\session\memory\schema_model_generator.py:47 - def __init__(self, registry: MemoryTypeRegistry):
openviking\session\memory\schema_model_generator.py:59 - def create_flat_data_model(self, memory_type: MemoryTypeSchema) -> Type[BaseModel]:
openviking\session\memory\schema_model_generator.py:61 - Create a fully flat Pydantic model for a specific memory type.
openviking\session\memory\schema_model_generator.py:69 - memory_type: The memory type schema
openviking\session\memory\schema_model_generator.py:74 - cache_key = memory_type.memory_type
openviking\session\memory\schema_model_generator.py:79 - model_name = f"{to_pascal_case(memory_type.memory_type)}Data"
openviking\session\memory\schema_model_generator.py:85 - field_definitions["memory_type"] = (
openviking\session\memory\schema_model_generator.py:86 - Literal[memory_type.memory_type],  # type: ignore
openviking\session\memory\schema_model_generator.py:87 - Field(..., description=f"Memory type: {memory_type.memory_type}"),
openviking\session\memory\schema_model_generator.py:91 - for field in memory_type.fields:
openviking\session\memory\schema_model_generator.py:125 - include_disabled: If True, include disabled memory types
openviking\session\memory\schema_model_generator.py:128 - Dictionary mapping memory_type to generated model class
openviking\session\memory\schema_model_generator.py:131 - for memory_type in self.registry.list_all(include_disabled=include_disabled):
openviking\session\memory\schema_model_generator.py:132 - models[memory_type.memory_type] = self.create_flat_data_model(memory_type)
... and 33 more

## openviking\session\memory\tools.py
openviking\session\memory\tools.py:14 - from openviking.session.memory.utils import parse_memory_file_with_fields
openviking\session\memory\tools.py:110 - class MemoryTool(ABC):
openviking\session\memory\tools.py:112 - Abstract base class for memory tools.
openviking\session\memory\tools.py:168 - class MemoryReadTool(MemoryTool):
openviking\session\memory\tools.py:186 - "description": "Memory URI to read, e.g., 'viking://user/user123/memories/profile.md'",
openviking\session\memory\tools.py:204 - # Parse MEMORY_FIELDS from comment and return dict directly
openviking\session\memory\tools.py:205 - parsed = parse_memory_file_with_fields(content)
openviking\session\memory\tools.py:212 - class MemorySearchTool(MemoryTool):
openviking\session\memory\tools.py:304 - class MemoryLsTool(MemoryTool):
openviking\session\memory\tools.py:364 - MEMORY_TOOLS_REGISTRY: Dict[str, MemoryTool] = {}
openviking\session\memory\tools.py:367 - def register_tool(tool: MemoryTool) -> None:
openviking\session\memory\tools.py:369 - MEMORY_TOOLS_REGISTRY[tool.name] = tool
openviking\session\memory\tools.py:370 - logger.debug(f"Registered memory tool: {tool.name}")
openviking\session\memory\tools.py:373 - def get_tool(name: str) -> Optional[MemoryTool]:
openviking\session\memory\tools.py:378 - def list_tools() -> Dict[str, MemoryTool]:

## openviking\session\memory\__init__.py
openviking\session\memory\__init__.py:10 - from openviking.session.memory.utils import (
openviking\session\memory\__init__.py:19 - from openviking.session.memory.dataclass import (
openviking\session\memory\__init__.py:26 - from openviking.session.memory.merge_op import MergeOp, FieldType, MemoryPatchHandler
openviking\session\memory\__init__.py:27 - from openviking.session.memory.memory_react import (
openviking\session\memory\__init__.py:30 - from openviking.session.memory.memory_type_registry import MemoryTypeRegistry
openviking\session\memory\__init__.py:31 - from openviking.session.memory.memory_updater import MemoryUpdater, MemoryUpdateResult
openviking\session\memory\__init__.py:32 - from openviking.session.memory.schema_model_generator import (
openviking\session\memory\__init__.py:36 - from openviking.session.memory.tools import (

## openviking\session\memory\merge_op\factory.py
openviking\session\memory\merge_op\factory.py:9 - from openviking.session.memory.merge_op.base import MergeOp, MergeOpBase, FieldType
openviking\session\memory\merge_op\factory.py:10 - from openviking.session.memory.merge_op.patch import PatchOp
openviking\session\memory\merge_op\factory.py:11 - from openviking.session.memory.merge_op.sum import SumOp
openviking\session\memory\merge_op\factory.py:12 - from openviking.session.memory.merge_op.immutable import ImmutableOp
openviking\session\memory\merge_op\factory.py:15 - from openviking.session.memory.dataclass import MemoryField
openviking\session\memory\merge_op\factory.py:43 - def from_field(field: 'MemoryField') -> MergeOpBase:
openviking\session\memory\merge_op\factory.py:44 - """Create a MergeOp instance from a MemoryField.
openviking\session\memory\merge_op\factory.py:47 - field: The memory field definition

## openviking\session\memory\merge_op\immutable.py
openviking\session\memory\merge_op\immutable.py:9 - from openviking.session.memory.merge_op.base import (

## openviking\session\memory\merge_op\patch.py
openviking\session\memory\merge_op\patch.py:9 - from openviking.session.memory.merge_op.base import (
openviking\session\memory\merge_op\patch.py:19 - from openviking.session.memory.merge_op.patch_handler import MemoryPatchHandler
openviking\session\memory\merge_op\patch.py:29 - self._patch_handler: 'MemoryPatchHandler | None' = None
openviking\session\memory\merge_op\patch.py:47 - - str with "<<<<<<< SEARCH": use MemoryPatchHandler
openviking\session\memory\merge_op\patch.py:58 - from openviking.session.memory.merge_op.patch_handler import (
openviking\session\memory\merge_op\patch.py:89 - self._patch_handler = MemoryPatchHandler()

## openviking\session\memory\merge_op\patch_handler.py
openviking\session\memory\merge_op\patch_handler.py:26 - from openviking.session.memory.merge_op.base import SearchReplaceBlock, StrPatch
openviking\session\memory\merge_op\patch_handler.py:27 - from openviking.session.memory.merge_op.factory import MergeOpFactory
openviking\session\memory\merge_op\patch_handler.py:31 - from openviking.session.memory.dataclass import MemoryField
openviking\session\memory\merge_op\patch_handler.py:743 - class MemoryPatchHandler:
openviking\session\memory\merge_op\patch_handler.py:1087 - from openviking.session.memory.merge_op.base import MergeOp

## openviking\session\memory\merge_op\sum.py
openviking\session\memory\merge_op\sum.py:9 - from openviking.session.memory.merge_op.base import (

## openviking\session\memory\merge_op\__init__.py
openviking\session\memory\merge_op\__init__.py:7 - from openviking.session.memory.merge_op.base import (
openviking\session\memory\merge_op\__init__.py:14 - from openviking.session.memory.merge_op.patch import PatchOp
openviking\session\memory\merge_op\__init__.py:15 - from openviking.session.memory.merge_op.sum import SumOp
openviking\session\memory\merge_op\__init__.py:16 - from openviking.session.memory.merge_op.immutable import ImmutableOp
openviking\session\memory\merge_op\__init__.py:17 - from openviking.session.memory.merge_op.factory import MergeOpFactory
openviking\session\memory\merge_op\__init__.py:18 - from openviking.session.memory.merge_op.patch_handler import (

## openviking\session\memory\utils\content.py
openviking\session\memory\utils\content.py:17 - MEMORY_FIELDS_PATTERN = re.compile(
openviking\session\memory\utils\content.py:23 - MEMORY_FIELDS_PATTERN_END = re.compile(
openviking\session\memory\utils\content.py:56 - content: The main memory content (Markdown)
openviking\session\memory\utils\content.py:58 - - memory_type: Type of memory (NOT included in output)
openviking\session\memory\utils\content.py:60 - - name: Memory name
openviking\session\memory\utils\content.py:71 - clean_metadata = {k: v for k, v in metadata.items() if v is not None and k != "memory_type"}
openviking\session\memory\utils\content.py:85 - comment = f"\n\n<!-- MEMORY_FIELDS\n{metadata_json}\n-->"
openviking\session\memory\utils\content.py:108 - content = MEMORY_FIELDS_PATTERN.sub("", full_content)
openviking\session\memory\utils\content.py:112 - content = MEMORY_FIELDS_PATTERN_END.sub("", content)
openviking\session\memory\utils\content.py:131 - match = MEMORY_FIELDS_PATTERN.search(full_content)
openviking\session\memory\utils\content.py:133 - match = MEMORY_FIELDS_PATTERN_END.search(full_content)

## openviking\session\memory\utils\messages.py
openviking\session\memory\utils\messages.py:85 - def parse_memory_file_with_fields(content: str) -> Dict[str, Any]:
openviking\session\memory\utils\messages.py:89 - Extracts fields from <!-- MEMORY_FIELDS { ... } --> comment and returns
openviking\session\memory\utils\messages.py:101 - # Pattern to match: <!-- MEMORY_FIELDS ... -->
openviking\session\memory\utils\messages.py:103 - pattern = r"<!--\s*MEMORY_FIELDS\s*([\s\S]*?)\s*-->"
openviking\session\memory\utils\messages.py:120 - logger.warning(f"Failed to parse MEMORY_FIELDS JSON: {e}")

## openviking\session\memory\utils\uri.py
openviking\session\memory\utils\uri.py:10 - from openviking.session.memory.dataclass import MemoryTypeSchema
openviking\session\memory\utils\uri.py:11 - from openviking.session.memory.memory_type_registry import MemoryTypeRegistry
openviking\session\memory\utils\uri.py:18 - memory_type: MemoryTypeSchema,
openviking\session\memory\utils\uri.py:24 - Generate a full URI from memory type schema and field values.
openviking\session\memory\utils\uri.py:27 - memory_type: The memory type schema with directory and filename_template
openviking\session\memory\utils\uri.py:40 - if memory_type.directory:
openviking\session\memory\utils\uri.py:41 - uri_template = memory_type.directory
openviking\session\memory\utils\uri.py:42 - if memory_type.filename_template:
openviking\session\memory\utils\uri.py:44 - uri_template = f"{uri_template}/{memory_type.filename_template}"
openviking\session\memory\utils\uri.py:46 - uri_template = memory_type.filename_template
openviking\session\memory\utils\uri.py:49 - raise ValueError("Memory type has neither directory nor filename_template")
openviking\session\memory\utils\uri.py:76 - def validate_uri_template(memory_type: MemoryTypeSchema) -> bool:
openviking\session\memory\utils\uri.py:78 - Validate that a memory type's URI template is well-formed.
openviking\session\memory\utils\uri.py:81 - memory_type: The memory type schema to validate
openviking\session\memory\utils\uri.py:86 - if not memory_type.directory and not memory_type.filename_template:
openviking\session\memory\utils\uri.py:90 - if memory_type.filename_template:
openviking\session\memory\utils\uri.py:91 - field_names = {f.name for f in memory_type.fields}
openviking\session\memory\utils\uri.py:92 - template_vars = set(re.findall(r"\{([^}]+)\}", memory_type.filename_template))
openviking\session\memory\utils\uri.py:106 - schemas: List[MemoryTypeSchema],
openviking\session\memory\utils\uri.py:114 - schemas: List of activated memory type schemas
... and 37 more

## openviking\session\memory\utils\__init__.py
openviking\session\memory\utils\__init__.py:7 - from openviking.session.memory.utils.content import (
openviking\session\memory\utils\__init__.py:13 - from openviking.session.memory.utils.language import (
openviking\session\memory\utils\__init__.py:16 - from openviking.session.memory.utils.messages import (
openviking\session\memory\utils\__init__.py:20 - from openviking.session.memory.utils.uri import (
openviking\session\memory\utils\__init__.py:33 - from openviking.session.memory.utils.json_parser import (
openviking\session\memory\utils\__init__.py:44 - from openviking.session.memory.utils.model import (

## openviking\storage\local_fs.py
openviking\storage\local_fs.py:25 - def _validate_ovpack_member_path(zip_path: str, base_name: str) -> str:

## openviking\storage\stats_aggregator.py
openviking\storage\stats_aggregator.py:12 - from openviking.retrieve.memory_lifecycle import hotness_score
openviking\storage\stats_aggregator.py:19 - # Memory categories from MemoryCategory enum
openviking\storage\stats_aggregator.py:20 - MEMORY_CATEGORIES = [
openviking\storage\stats_aggregator.py:37 - """Aggregates memory health statistics from VikingDB.
openviking\storage\stats_aggregator.py:46 - async def get_memory_stats(
openviking\storage\stats_aggregator.py:64 - categories = [category] if category else MEMORY_CATEGORIES
openviking\storage\stats_aggregator.py:71 - "oldest_memory_age_days": 0,
openviking\storage\stats_aggregator.py:115 - if age > staleness["oldest_memory_age_days"]:
openviking\storage\stats_aggregator.py:116 - staleness["oldest_memory_age_days"] = round(age, 1)
openviking\storage\stats_aggregator.py:155 - async def _query_all_memories(
openviking\storage\stats_aggregator.py:161 - Uses the context_type="memory" filter. Callers group by category
openviking\storage\stats_aggregator.py:166 - filter=Eq("context_type", "memory"),

## openviking\storage\vikingdb_manager.py
openviking\storage\vikingdb_manager.py:463 - async def search_similar_memories(

## openviking\storage\viking_fs.py
openviking\storage\viking_fs.py:916 - if ctx.context_type == ContextType.MEMORY:
openviking\storage\viking_fs.py:1057 - if ctx.context_type == ContextType.MEMORY:

## openviking\storage\viking_vector_index_backend.py
openviking\storage\viking_vector_index_backend.py:426 - ALLOWED_CONTEXT_TYPES = {"resource", "skill", "memory"}
openviking\storage\viking_vector_index_backend.py:779 - async def search_similar_memories(
openviking\storage\viking_vector_index_backend.py:977 - if context_type in {"memory", "skill"}:

## openviking\storage\queuefs\semantic_msg.py
openviking\storage\queuefs\semantic_msg.py:19 - context_type: Type of context (resource, memory, skill, session)
openviking\storage\queuefs\semantic_msg.py:30 - context_type: str  # resource, memory, skill, session

## openviking\storage\queuefs\semantic_processor.py
openviking\storage\queuefs\semantic_processor.py:272 - if msg.context_type == "memory":
openviking\storage\queuefs\semantic_processor.py:395 - async def _process_memory_directory(self, msg: SemanticMsg) -> None:
openviking\storage\queuefs\semantic_processor.py:398 - For memory directories:
openviking\storage\queuefs\semantic_processor.py:414 - logger.warning(f"Failed to list memory directory {dir_uri}: {e}")
openviking\storage\queuefs\semantic_processor.py:449 - f"Processing memory directory {dir_uri} with changes: "
openviking\storage\queuefs\semantic_processor.py:504 - context_type="memory",

## openviking\storage\transaction\lock_manager.py
openviking\storage\transaction\lock_manager.py:135 - async def _redo_session_memory(self, info: Dict[str, Any]) -> None:
openviking\storage\transaction\lock_manager.py:136 - """Re-extract memories from archive.
openviking\storage\transaction\lock_manager.py:155 - raise ValueError("Cannot redo session_memory: missing archive_uri or session_uri")
openviking\storage\transaction\lock_manager.py:190 - logger.info(f"Redo: extracted {len(memories)} memories from {archive_uri}")
openviking\storage\transaction\lock_manager.py:192 - logger.warning(f"Redo: memory extraction failed ({e}), falling back to queue")
openviking\storage\transaction\lock_manager.py:197 - context_type="memory",

## openviking\storage\vectordb\collection\local_collection.py
openviking\storage\vectordb\collection\local_collection.py:64 - path: Persistence path. If empty, creates an in-memory collection

## openviking\storage\vectordb\index\index.py
openviking\storage\vectordb\index\index.py:17 - - Volatile (in-memory): Fast but non-persistent, lost on process termination

## openviking\storage\vectordb\index\local_index.py
openviking\storage\vectordb\index\local_index.py:194 - This class serves as the base for both VolatileIndex (in-memory) and
openviking\storage\vectordb\index\local_index.py:397 - engine_proxy (IndexEngineProxy): Proxy to the in-memory index engine
openviking\storage\vectordb\index\local_index.py:442 - the index benefits from rebuilding to reclaim memory.

## openviking\storage\vectordb\project\local_project.py
openviking\storage\vectordb\project\local_project.py:37 - 1. Volatile mode (path=""): collections stored in memory, not persisted

## openviking\storage\vectordb\project\project_group.py
openviking\storage\vectordb\project\project_group.py:20 - - If empty: Create volatile project group, all projects stored in memory
openviking\storage\vectordb\project\project_group.py:42 - 1. Volatile mode (path=""): projects stored in memory, not persisted

## openviking\storage\vectordb\store\local_store.py
openviking\storage\vectordb\store\local_store.py:17 - path (str): Storage path. If empty, creates a volatile (in-memory) storage.

## openviking\telemetry\operation.py
openviking\telemetry\operation.py:45 - _MEMORY_EXTRACT_STAGE_KEYS = {
openviking\telemetry\operation.py:46 - "prepare_inputs_ms": "memory.extract.stage.prepare_inputs.duration_ms",
openviking\telemetry\operation.py:47 - "llm_extract_ms": "memory.extract.stage.llm_extract.duration_ms",
openviking\telemetry\operation.py:48 - "normalize_candidates_ms": "memory.extract.stage.normalize_candidates.duration_ms",
openviking\telemetry\operation.py:49 - "tool_skill_stats_ms": "memory.extract.stage.tool_skill_stats.duration_ms",
openviking\telemetry\operation.py:50 - "profile_create_ms": "memory.extract.stage.profile_create.duration_ms",
openviking\telemetry\operation.py:51 - "tool_skill_merge_ms": "memory.extract.stage.tool_skill_merge.duration_ms",
openviking\telemetry\operation.py:52 - "dedup_ms": "memory.extract.stage.dedup.duration_ms",
openviking\telemetry\operation.py:53 - "create_memory_ms": "memory.extract.stage.create_memory.duration_ms",
openviking\telemetry\operation.py:54 - "merge_existing_ms": "memory.extract.stage.merge_existing.duration_ms",
openviking\telemetry\operation.py:55 - "delete_existing_ms": "memory.extract.stage.delete_existing.duration_ms",
openviking\telemetry\operation.py:56 - "create_relations_ms": "memory.extract.stage.create_relations.duration_ms",
openviking\telemetry\operation.py:57 - "flush_semantic_ms": "memory.extract.stage.flush_semantic.duration_ms",
openviking\telemetry\operation.py:150 - memories_extracted = gauges.get("memory.extracted")
openviking\telemetry\operation.py:151 - if memories_extracted is None and counters.get("memory.extracted") is not None:
openviking\telemetry\operation.py:152 - memories_extracted = cls._i(counters.get("memory.extracted"), 0)
openviking\telemetry\operation.py:200 - if cls._has_metric_prefix("memory", counters, gauges):
openviking\telemetry\operation.py:201 - memory_summary = {
openviking\telemetry\operation.py:204 - if cls._has_metric_prefix("memory.extract", counters, gauges):
openviking\telemetry\operation.py:205 - memory_summary["extract"] = {
... and 10 more

## openviking\telemetry\runtime.py
openviking\telemetry\runtime.py:12 - class MemoryTelemetryMeter:
openviking\telemetry\runtime.py:56 - meter_instance: MemoryTelemetryMeter = field(default_factory=MemoryTelemetryMeter)
openviking\telemetry\runtime.py:58 - def meter(self) -> MemoryTelemetryMeter:

## openviking\telemetry\backends\memory.py
openviking\telemetry\backends\memory.py:8 - class MemoryOperationTelemetry(OperationTelemetry):
openviking\telemetry\backends\memory.py:12 - __all__ = ["MemoryOperationTelemetry"]

## openviking\telemetry\backends\__init__.py
openviking\telemetry\backends\__init__.py:5 - from .memory import MemoryOperationTelemetry
openviking\telemetry\backends\__init__.py:7 - __all__ = ["MemoryOperationTelemetry"]

## openviking\utils\summarizer.py
openviking\utils\summarizer.py:61 - if uri.startswith("viking://memory/"):
openviking\utils\summarizer.py:62 - context_type = "memory"

## openviking_cli\retrieve\types.py
openviking_cli\retrieve\types.py:17 - MEMORY = "memory"
openviking_cli\retrieve\types.py:243 - context_type: Target context type (memory/resources/skill)
openviking_cli\retrieve\types.py:324 - memories: Matched memory contexts
openviking_cli\retrieve\types.py:341 - yield from self.memories

## openviking_cli\session\user_id.py
openviking_cli\session\user_id.py:58 - scope_mode = get_openviking_config().memory.agent_scope_mode
openviking_cli\session\user_id.py:68 - """Agent-level space name derived from memory.agent_scope_mode."""
openviking_cli\session\user_id.py:71 - def memory_space_uri(self) -> str:

## openviking_cli\utils\config\agfs_config.py
openviking_cli\utils\config\agfs_config.py:107 - default="local", description="AGFS storage backend: 'local' | 's3' | 'memory'"
openviking_cli\utils\config\agfs_config.py:140 - if self.backend not in ["local", "s3", "memory"]:
openviking_cli\utils\config\agfs_config.py:142 - f"Invalid AGFS backend: '{self.backend}'. Must be one of: 'local', 's3', 'memory'"

## openviking_cli\utils\config\memory_config.py
openviking_cli\utils\config\memory_config.py:8 - class MemoryConfig(BaseModel):
openviking_cli\utils\config\memory_config.py:13 - description="Memory implementation version: 'v1' (legacy) or 'v2' (new templating system)",
openviking_cli\utils\config\memory_config.py:18 - "Agent memory namespace mode: 'user+agent' keeps agent memory isolated by "
openviking_cli\utils\config\memory_config.py:33 - def from_dict(cls, config: Dict[str, Any]) -> "MemoryConfig":

## openviking_cli\utils\config\open_viking_config.py
openviking_cli\utils\config\open_viking_config.py:24 - from .memory_config import MemoryConfig
openviking_cli\utils\config\open_viking_config.py:133 - enable_memory_decay: bool = Field(default=True, description="Enable automatic memory decay")
openviking_cli\utils\config\open_viking_config.py:135 - memory_decay_check_interval: int = Field(
openviking_cli\utils\config\open_viking_config.py:149 - memory: MemoryConfig = Field(
openviking_cli\utils\config\open_viking_config.py:150 - default_factory=lambda: MemoryConfig(), description="Memory configuration"
openviking_cli\utils\config\open_viking_config.py:206 - # Handle memory configuration from nested "memory" section
openviking_cli\utils\config\open_viking_config.py:207 - memory_config_data = None
openviking_cli\utils\config\open_viking_config.py:208 - if "memory" in config_copy:
openviking_cli\utils\config\open_viking_config.py:209 - memory_config_data = config_copy.pop("memory")
openviking_cli\utils\config\open_viking_config.py:218 - if memory_config_data is not None:
openviking_cli\utils\config\open_viking_config.py:219 - instance.memory = MemoryConfig.from_dict(memory_config_data)

## openviking_cli\utils\config\parser_config.py
openviking_cli\utils\config\parser_config.py:550 - memory_chunk_chars: int = 2000
openviking_cli\utils\config\parser_config.py:554 - memory_chunk_overlap: int = 200

## tests\README.md
tests\README.md:200 - | `test_full_workflow.py` | Complete workflows | Resource→vectorize→search flow; Session conversation→commit→memory extraction; Export→delete→import roundtrip; Full E2E with all components |

## tests\test_memory_lifecycle.py
tests\test_memory_lifecycle.py:10 - from openviking.retrieve.memory_lifecycle import DEFAULT_HALF_LIFE_DAYS, hotness_score
tests\test_memory_lifecycle.py:29 - def test_old_memory(self):
tests\test_memory_lifecycle.py:35 - def test_recent_memory(self):
tests\test_memory_lifecycle.py:98 - # Memory A: high semantic, cold (old, low access)
tests\test_memory_lifecycle.py:103 - # Memory B: lower semantic, hot (recent, high access)
tests\test_memory_lifecycle.py:115 - # Memory A: much higher semantic, cold
tests\test_memory_lifecycle.py:120 - # Memory B: much lower semantic, hot

## tests\test_session_task_tracking.py
tests\test_session_task_tracking.py:198 - async def test_task_failed_when_memory_extraction_raises(api_client):
tests\test_session_task_tracking.py:204 - raise RuntimeError("memory_extraction_failed: synthetic extractor error")

## tests\test_telemetry_runtime.py
tests\test_telemetry_runtime.py:24 - from openviking.telemetry.backends.memory import MemoryOperationTelemetry
tests\test_telemetry_runtime.py:56 - telemetry = MemoryOperationTelemetry(operation="resources.add_resource", enabled=True)
tests\test_telemetry_runtime.py:79 - summary = MemoryOperationTelemetry(
tests\test_telemetry_runtime.py:110 - assert result["memory"] == {"extracted": 6}
tests\test_telemetry_runtime.py:114 - telemetry = MemoryOperationTelemetry(operation="search.find", enabled=True)
tests\test_telemetry_runtime.py:128 - telemetry = MemoryOperationTelemetry(operation="resources.add_resource", enabled=True)
tests\test_telemetry_runtime.py:178 - telemetry = MemoryOperationTelemetry(operation="resources.add_resource", enabled=True)
tests\test_telemetry_runtime.py:235 - telemetry = MemoryOperationTelemetry(operation="resources.add_resource", enabled=True)
tests\test_telemetry_runtime.py:294 - def test_telemetry_summary_includes_only_memory_group_when_memory_metrics_exist():
tests\test_telemetry_runtime.py:295 - telemetry = MemoryOperationTelemetry(operation="session.commit", enabled=True)
tests\test_telemetry_runtime.py:301 - assert summary["memory"] == {"extracted": 4}

## tests\api_test\conftest.py
tests\api_test\conftest.py:168 - def format_memory(bytes_value):
tests\api_test\conftest.py:188 - def format_memory_delta(delta_bytes):
tests\api_test\conftest.py:238 - mem_info = process.memory_info()
tests\api_test\conftest.py:239 - item._start_memory = mem_info.rss
tests\api_test\conftest.py:255 - if hasattr(item, "_start_memory"):
tests\api_test\conftest.py:257 - mem_info = process.memory_info()
tests\api_test\conftest.py:258 - delta = mem_info.rss - item._start_memory
tests\api_test\conftest.py:259 - report.memory_current = mem_info.rss
tests\api_test\conftest.py:260 - report.memory_delta = delta
tests\api_test\conftest.py:290 - memory = cells[6]
tests\api_test\conftest.py:307 - memory_current = getattr(report, "memory_current", None)
tests\api_test\conftest.py:308 - memory_delta = getattr(report, "memory_delta", None)
tests\api_test\conftest.py:310 - memory_current_str = format_memory(memory_current)
tests\api_test\conftest.py:311 - memory_delta_str = format_memory_delta(memory_delta)
tests\api_test\conftest.py:313 - if memory_current_str and memory_delta_str:
tests\api_test\conftest.py:314 - memory_str = f"{memory_current_str} ({memory_delta_str})"
tests\api_test\conftest.py:315 - elif memory_current_str:
tests\api_test\conftest.py:316 - memory_str = memory_current_str
tests\api_test\conftest.py:318 - memory_str = ""
tests\api_test\conftest.py:331 - memory = cells[6]

## tests\cli\test_user_identifier.py
tests\cli\test_user_identifier.py:39 - """When memory.agent_scope_mode=agent, users of the same agent share the same space."""
tests\cli\test_user_identifier.py:42 - config.memory.agent_scope_mode = "agent"
tests\cli\test_user_identifier.py:51 - """When memory.agent_scope_mode=user+agent, different users remain isolated."""
tests\cli\test_user_identifier.py:54 - config.memory.agent_scope_mode = "user+agent"

## tests\eval\test_ragas_basic.py
tests\eval\test_ragas_basic.py:42 - f.write('{"question": "How does memory work?", "ground_truth": "Hierarchical"}\n')

## tests\integration\test_compressor_v2_e2e.py
tests\integration\test_compressor_v2_e2e.py:92 - async def test_memory_v2_extraction_e2e(
tests\integration\test_compressor_v2_e2e.py:136 - find_result = await client.find(query="OpenViking memory cards events")
tests\integration\test_compressor_v2_e2e.py:145 - async def print_memory_files(uri_prefix: str, memories_list: list):
tests\integration\test_compressor_v2_e2e.py:169 - await print_memory_files(f"viking://agent/{agent_space}/memories", agent_memories)
tests\integration\test_compressor_v2_e2e.py:180 - await print_memory_files(f"viking://user/{user_space}/memories", user_memories)

## tests\integration\test_compressor_v2_xiaomei.py
tests\integration\test_compressor_v2_xiaomei.py:202 - console.print(f"    [green]Memory:[/green] {uri} (score: {score:.4f})")

## tests\integration\test_encryption_integration.py
tests\integration\test_encryption_integration.py:605 - - Execute tests: resource, skill, memory, session, relation operations
tests\integration\test_encryption_integration.py:851 - # ========== 3. Memory operations ==========
tests\integration\test_encryption_integration.py:853 - print("Execute tests: 3. Memory operations")
tests\integration\test_encryption_integration.py:857 - memory_dir_uri = f"viking://{test_account_id}/user/{test_user_id}/memories"
tests\integration\test_encryption_integration.py:861 - await svc.viking_fs.mkdir(memory_dir_uri, ctx=ctx)
tests\integration\test_encryption_integration.py:866 - preferences_dir_uri = f"{memory_dir_uri}/preferences"
tests\integration\test_encryption_integration.py:873 - memory_content = "# Test Preferences\n\nUser prefers dark theme, likes clean code style."
tests\integration\test_encryption_integration.py:874 - memory_uri = f"{preferences_dir_uri}/theme.md"
tests\integration\test_encryption_integration.py:875 - await svc.viking_fs.write_file(memory_uri, memory_content, ctx=ctx)
tests\integration\test_encryption_integration.py:876 - print(f"  ✓ Memory file added: {memory_uri}")
tests\integration\test_encryption_integration.py:888 - memory_ls_entries = await svc.viking_fs.ls(user_dir_uri, ctx=ctx)
tests\integration\test_encryption_integration.py:889 - assert len(memory_ls_entries) >= 0
tests\integration\test_encryption_integration.py:895 - memory_tree_entries = await svc.viking_fs.tree(user_dir_uri, ctx=ctx)
tests\integration\test_encryption_integration.py:896 - assert len(memory_tree_entries) >= 0
tests\integration\test_encryption_integration.py:903 - memory_read_content = await svc.viking_fs.read_file(memory_uri, ctx=ctx)
tests\integration\test_encryption_integration.py:909 - memory_get_content = await svc.viking_fs.read_file(memory_uri, ctx=ctx)
tests\integration\test_encryption_integration.py:916 - memory_grep_result = await svc.viking_fs.grep(user_dir_uri, "dark theme", ctx=ctx)
tests\integration\test_encryption_integration.py:925 - memory_abstract = await svc.viking_fs.abstract(memory_uri, ctx=ctx)
tests\integration\test_encryption_integration.py:935 - memory_overview = await svc.viking_fs.overview(memory_uri, ctx=ctx)

## tests\integration\test_full_workflow.py
tests\integration\test_full_workflow.py:90 - """Test: session create -> multi-turn conversation -> commit -> memory extraction"""

## tests\integration\test_gemini_openviking_it.py
tests\integration\test_gemini_openviking_it.py:32 - # Test 1: Basic add-memory + search
tests\integration\test_gemini_openviking_it.py:146 - found = await client.find(query="memory management AI agents")

## tests\integration\test_vault_encryption_integration.py
tests\integration\test_vault_encryption_integration.py:562 - async def test_memory_operations_with_encryption(
tests\integration\test_vault_encryption_integration.py:565 - """Test 6: Memory operations and encryption verification"""
tests\integration\test_vault_encryption_integration.py:581 - memory_dir_uri = f"viking://{account_id}/user/{user_id}/memories"
tests\integration\test_vault_encryption_integration.py:582 - memory_file_uri = f"{memory_dir_uri}/preferences.md"
tests\integration\test_vault_encryption_integration.py:586 - await svc.viking_fs.mkdir(memory_dir_uri, ctx=ctx)
tests\integration\test_vault_encryption_integration.py:591 - memory_content = "# User Preferences\n\nTheme: dark\nLanguage: English"
tests\integration\test_vault_encryption_integration.py:592 - await svc.viking_fs.write_file(memory_file_uri, memory_content, ctx=ctx)
tests\integration\test_vault_encryption_integration.py:595 - read_content = await svc.viking_fs.read_file(memory_file_uri, ctx=ctx)
tests\integration\test_vault_encryption_integration.py:600 - agfs_path = svc.viking_fs._uri_to_path(memory_file_uri, ctx=ctx)
tests\integration\test_vault_encryption_integration.py:685 - memory_dir_uri = f"viking://{random_account_id}/user/{random_user_id}/memories"
tests\integration\test_vault_encryption_integration.py:686 - memory_file_uri = f"{memory_dir_uri}/test_memory.md"
tests\integration\test_vault_encryption_integration.py:688 - await svc.viking_fs.mkdir(memory_dir_uri, ctx=ctx)
tests\integration\test_vault_encryption_integration.py:691 - memory_content = "# Test Memory\n\nThis is a test memory for workflow"
tests\integration\test_vault_encryption_integration.py:692 - await svc.viking_fs.write_file(memory_file_uri, memory_content, ctx=ctx)
tests\integration\test_vault_encryption_integration.py:693 - print(f"✓ Memory created successfully: {memory_file_uri}")

## tests\integration\test_volcengine_kms_encryption_integration.py
tests\integration\test_volcengine_kms_encryption_integration.py:626 - async def test_memory_operations_with_encryption(
tests\integration\test_volcengine_kms_encryption_integration.py:629 - """Test 6: Memory operations and encryption verification"""
tests\integration\test_volcengine_kms_encryption_integration.py:645 - memory_dir_uri = f"viking://{account_id}/user/{user_id}/memories"
tests\integration\test_volcengine_kms_encryption_integration.py:646 - memory_file_uri = f"{memory_dir_uri}/preferences.md"
tests\integration\test_volcengine_kms_encryption_integration.py:650 - await svc.viking_fs.mkdir(memory_dir_uri, ctx=ctx)
tests\integration\test_volcengine_kms_encryption_integration.py:655 - memory_content = "# User Preferences\n\nTheme: dark\nLanguage: English"
tests\integration\test_volcengine_kms_encryption_integration.py:656 - await svc.viking_fs.write_file(memory_file_uri, memory_content, ctx=ctx)
tests\integration\test_volcengine_kms_encryption_integration.py:659 - read_content = await svc.viking_fs.read_file(memory_file_uri, ctx=ctx)
tests\integration\test_volcengine_kms_encryption_integration.py:664 - agfs_path = svc.viking_fs._uri_to_path(memory_file_uri, ctx=ctx)
tests\integration\test_volcengine_kms_encryption_integration.py:751 - memory_dir_uri = f"viking://{test_account_id}/user/{test_user_id}/memories"
tests\integration\test_volcengine_kms_encryption_integration.py:752 - memory_file_uri = f"{memory_dir_uri}/test_memory.md"
tests\integration\test_volcengine_kms_encryption_integration.py:754 - await svc.viking_fs.mkdir(memory_dir_uri, ctx=ctx)
tests\integration\test_volcengine_kms_encryption_integration.py:757 - memory_content = "# Test Memory\n\nThis is a test memory for workflow"
tests\integration\test_volcengine_kms_encryption_integration.py:758 - await svc.viking_fs.write_file(memory_file_uri, memory_content, ctx=ctx)
tests\integration\test_volcengine_kms_encryption_integration.py:759 - read_memory = await svc.viking_fs.read_file(memory_file_uri, ctx=ctx)

## tests\misc\test_semantic_config.py
tests\misc\test_semantic_config.py:18 - assert config.memory_chunk_chars == 2000
tests\misc\test_semantic_config.py:19 - assert config.memory_chunk_overlap == 200
tests\misc\test_semantic_config.py:93 - text = "Short memory content."
tests\misc\test_semantic_config.py:132 - def test_memory_chunk_config_custom():
tests\misc\test_semantic_config.py:133 - """Custom memory chunk config values work."""
tests\misc\test_semantic_config.py:134 - config = SemanticConfig(memory_chunk_chars=500, memory_chunk_overlap=50)
tests\misc\test_semantic_config.py:135 - assert config.memory_chunk_chars == 500
tests\misc\test_semantic_config.py:136 - assert config.memory_chunk_overlap == 50

## tests\models\test_embedding_telemetry_usage.py
tests\models\test_embedding_telemetry_usage.py:10 - from openviking.telemetry.backends.memory import MemoryOperationTelemetry
tests\models\test_embedding_telemetry_usage.py:27 - telemetry = MemoryOperationTelemetry(operation="search.find", enabled=True)
tests\models\test_embedding_telemetry_usage.py:56 - telemetry = MemoryOperationTelemetry(operation="resources.add_resource", enabled=True)
tests\models\test_embedding_telemetry_usage.py:92 - telemetry = MemoryOperationTelemetry(operation="search.find", enabled=True)

## tests\parse\test_feishu_parser.py
tests\parse\test_feishu_parser.py:239 - class TestTrimEmptyColumns:

## tests\server\test_api_sessions.py
tests\server\test_api_sessions.py:271 - class FakeMemory:
tests\server\test_api_sessions.py:281 - return [FakeMemory("viking://user/memories/mock.md")]

## tests\server\test_prometheus_metrics.py
tests\server\test_prometheus_metrics.py:98 - context_type="memory",

## tests\session\test_memory_dedup_actions.py
tests\session\test_memory_dedup_actions.py:13 - from openviking.session.memory_deduplicator import (
tests\session\test_memory_dedup_actions.py:20 - from openviking.session.memory_extractor import (
tests\session\test_memory_dedup_actions.py:58 - def _make_candidate() -> CandidateMemory:
tests\session\test_memory_dedup_actions.py:60 - category=MemoryCategory.PREFERENCES,
tests\session\test_memory_dedup_actions.py:70 - def _make_dedup(vikingdb=None, embedder=None) -> MemoryDeduplicator:
tests\session\test_memory_dedup_actions.py:71 - """Create MemoryDeduplicator without config dependency."""
tests\session\test_memory_dedup_actions.py:72 - dedup = MemoryDeduplicator.__new__(MemoryDeduplicator)
tests\session\test_memory_dedup_actions.py:81 - with patch("openviking.session.memory_deduplicator.get_openviking_config") as mock_config:
tests\session\test_memory_dedup_actions.py:93 - abstract="Existing preference memory",
tests\session\test_memory_dedup_actions.py:94 - context_type="memory",
tests\session\test_memory_dedup_actions.py:99 - class TestMemoryDeduplicatorPayload:
tests\session\test_memory_dedup_actions.py:101 - dedup = MemoryDeduplicator(vikingdb=_DummyVikingDB())
tests\session\test_memory_dedup_actions.py:105 - {"decision": "create", "reason": "new memory", "list": []},
tests\session\test_memory_dedup_actions.py:113 - dedup = MemoryDeduplicator(vikingdb=_DummyVikingDB())
tests\session\test_memory_dedup_actions.py:126 - assert actions[0].decision == MemoryActionDecision.MERGE
tests\session\test_memory_dedup_actions.py:129 - dedup = MemoryDeduplicator(vikingdb=_DummyVikingDB())
tests\session\test_memory_dedup_actions.py:144 - dedup = MemoryDeduplicator(vikingdb=_DummyVikingDB())
tests\session\test_memory_dedup_actions.py:168 - assert {a.memory.uri for a in actions} == {food.uri, routine.uri}
tests\session\test_memory_dedup_actions.py:169 - assert all(a.decision == MemoryActionDecision.DELETE for a in actions)
tests\session\test_memory_dedup_actions.py:172 - async def test_find_similar_memories_uses_path_must_filter_and__score(self):
... and 71 more

## tests\session\test_memory_extractor_language.py
tests\session\test_memory_extractor_language.py:10 - from openviking.session.memory_extractor import MemoryExtractor
tests\session\test_memory_extractor_language.py:31 - MEMORY=SimpleNamespace(value="memory")
tests\session\test_memory_extractor_language.py:51 - memory_extractor = importlib.util.module_from_spec(spec)
tests\session\test_memory_extractor_language.py:54 - MemoryExtractor = memory_extractor.MemoryExtractor
tests\session\test_memory_extractor_language.py:68 - language = MemoryExtractor._detect_output_language(messages, fallback_language="en")
tests\session\test_memory_extractor_language.py:76 - language = MemoryExtractor._detect_output_language(messages, fallback_language="en")
tests\session\test_memory_extractor_language.py:87 - language = MemoryExtractor._detect_output_language(messages, fallback_language="en")
tests\session\test_memory_extractor_language.py:94 - language = MemoryExtractor._detect_output_language(messages, fallback_language="en")
tests\session\test_memory_extractor_language.py:101 - language = MemoryExtractor._detect_output_language(messages, fallback_language="en")
tests\session\test_memory_extractor_language.py:108 - language = MemoryExtractor._detect_output_language(messages, fallback_language="en")
tests\session\test_memory_extractor_language.py:115 - language = MemoryExtractor._detect_output_language(messages, fallback_language="en")

## tests\session\test_memory_extractor_response_types.py
tests\session\test_memory_extractor_response_types.py:13 - Replicate the type-checking logic added in memory_extractor.py:extract().
tests\session\test_memory_extractor_response_types.py:27 - def _make_memory(category="patterns", content="user prefers dark mode"):
tests\session\test_memory_extractor_response_types.py:36 - payload = {"memories": [_make_memory()]}
tests\session\test_memory_extractor_response_types.py:43 - def test_list_response_wrapped_as_memories(self):
tests\session\test_memory_extractor_response_types.py:45 - memories_list = [_make_memory(), _make_memory(content="likes Python")]
tests\session\test_memory_extractor_response_types.py:72 - def test_empty_list_wraps_to_empty_memories(self):

## tests\session\test_session_commit.py
tests\session\test_session_commit.py:41 - async def test_commit_extracts_memories(
tests\session\test_session_commit.py:230 - assert failed_payload["stage"] == "memory_extraction"

## tests\session\test_session_compressor_vikingdb.py
tests\session\test_session_compressor_vikingdb.py:15 - async def test_delete_existing_memory_uses_vikingdb_manager():
tests\session\test_session_compressor_vikingdb.py:20 - memory = SimpleNamespace(
tests\session\test_session_compressor_vikingdb.py:26 - ok = await SessionCompressor._delete_existing_memory(compressor, memory, viking_fs, ctx)
tests\session\test_session_compressor_vikingdb.py:29 - viking_fs.rm.assert_awaited_once_with(memory.uri, recursive=False, ctx=ctx)

## tests\session\memory\test_compressor_v2.py
tests\session\memory\test_compressor_v2.py:22 - for logger_name in ["openviking", "openviking.session.memory"]:
tests\session\memory\test_compressor_v2.py:235 - "There are two main memory types: cards for knowledge cards (Zettelkasten note-taking method), and events for recording important events and decisions."
tests\session\memory\test_compressor_v2.py:270 - async def test_extract_long_term_memories_includes_latest_archive_overview(self):
tests\session\memory\test_compressor_v2.py:321 - async def test_extract_long_term_memories(self):
tests\session\memory\test_compressor_v2.py:332 - logger.info(f"Using config with memory.version = {config.memory.version}")
tests\session\memory\test_compressor_v2.py:370 - with patch("openviking.session.memory.memory_react.get_viking_fs", return_value=viking_fs):
tests\session\memory\test_compressor_v2.py:372 - "openviking.session.memory.memory_updater.get_viking_fs", return_value=viking_fs

## tests\session\memory\test_json_stability.py
tests\session\memory\test_json_stability.py:13 - from openviking.session.memory.utils import (
tests\session\memory\test_json_stability.py:58 - {"reasonning": "test", "write_uris": [{"memory_type": "cards", "name": "test"}]}
tests\session\memory\test_json_stability.py:68 - content = '''{"reasonning": "test", "write_uris": [{"memory_type": "preferences", "topic": "test"}]}
tests\session\memory\test_json_stability.py:257 - class TestMemoryOperationsIntegration:
tests\session\memory\test_json_stability.py:261 - memory_type: str
tests\session\memory\test_json_stability.py:266 - write_uris: List['TestMemoryOperationsIntegration.SimpleWriteOperation'] = Field(default_factory=list)
tests\session\memory\test_json_stability.py:274 - {"memory_type": "preferences", "topic": "theme"},
tests\session\memory\test_json_stability.py:275 - {"memory_type": "preferences", "topic": "notifications"}
tests\session\memory\test_json_stability.py:288 - "reasonning": "Removed old memory",
tests\session\memory\test_json_stability.py:297 - class TestParseMemoryFileWithFields:
tests\session\memory\test_json_stability.py:300 - def test_parses_memory_fields_comment(self):
tests\session\memory\test_json_stability.py:302 - content = '''<!-- MEMORY_FIELDS
tests\session\memory\test_json_stability.py:312 - result = parse_memory_file_with_fields(content)
tests\session\memory\test_json_stability.py:323 - result = parse_memory_file_with_fields(content)
tests\session\memory\test_json_stability.py:329 - result = parse_memory_file_with_fields("")
tests\session\memory\test_json_stability.py:335 - content = '''<!-- MEMORY_FIELDS
tests\session\memory\test_json_stability.py:339 - result = parse_memory_file_with_fields(content)
tests\session\memory\test_json_stability.py:347 - <!-- MEMORY_FIELDS {"test": "value"} -->
tests\session\memory\test_json_stability.py:349 - result = parse_memory_file_with_fields(content)
tests\session\memory\test_json_stability.py:357 - content = '''<!-- MEMORY_FIELDS {"tool_name": "test", "value": 42} -->
... and 1 more

## tests\session\memory\test_memory_extractor_flow.py
tests\session\memory\test_memory_extractor_flow.py:6 - This test simulates the complete memory extraction workflow:
tests\session\memory\test_memory_extractor_flow.py:22 - for logger_name in ["openviking", "openviking.session.memory"]:
tests\session\memory\test_memory_extractor_flow.py:32 - from openviking.session.memory import (
tests\session\memory\test_memory_extractor_flow.py:347 - parts=[TextPart("We're starting the memory extraction feature for the OpenViking project today. This project is an Agent-native context database.")],
tests\session\memory\test_memory_extractor_flow.py:355 - parts=[TextPart("Great! The memory extraction feature is important. What technical approach are we planning to use?")],
tests\session\memory\test_memory_extractor_flow.py:365 - "There are two main memory types: cards for knowledge cards (Zettelkasten note-taking method), and events for recording important events and decisions."
tests\session\memory\test_memory_extractor_flow.py:393 - def create_existing_memories_content() -> Dict[str, str]:
tests\session\memory\test_memory_extractor_flow.py:411 - "viking://agent/default/memories/cards/memory_react.md": """# MemoryReAct Pattern
tests\session\memory\test_memory_extractor_flow.py:423 - "name": "memory_react"
tests\session\memory\test_memory_extractor_flow.py:426 - "viking://user/default/memories/events/2026-03-20_Started_memory_extraction_feature_development.md": """# Event: Started memory extraction feature development
tests\session\memory\test_memory_extractor_flow.py:440 - "event_name": "Started_memory_extraction_feature_development",
tests\session\memory\test_memory_extractor_flow.py:472 - parts=[TextPart("Okay, I'll update the project card! Does the MemoryReAct pattern description need adjustment too?")],
tests\session\memory\test_memory_extractor_flow.py:476 - # Message 3: User updates MemoryReAct card and adds to event
tests\session\memory\test_memory_extractor_flow.py:481 - "Yes, the MemoryReAct card also needs updating: MemoryReAct is not just about analyzing conversations and generating operations, "
tests\session\memory\test_memory_extractor_flow.py:484 - "needs to add the reason: because the MemoryReAct pattern can handle uncertainty well, "
tests\session\memory\test_memory_extractor_flow.py:493 - class TestMemoryExtractorFlow:
tests\session\memory\test_memory_extractor_flow.py:527 - orchestrator = MemoryReAct(
tests\session\memory\test_memory_extractor_flow.py:554 - with patch('openviking.session.memory.memory_updater.get_viking_fs', return_value=viking_fs):
tests\session\memory\test_memory_extractor_flow.py:555 - updater = MemoryUpdater()
tests\session\memory\test_memory_extractor_flow.py:580 - async def test_update_existing_memories_with_real_llm(self):
... and 6 more

## tests\session\memory\test_memory_patch.py
tests\session\memory\test_memory_patch.py:9 - from openviking.session.memory.merge_op import MemoryPatchHandler, PatchParseError
tests\session\memory\test_memory_patch.py:12 - class TestMemoryPatchHandler:
tests\session\memory\test_memory_patch.py:16 - self.handler = MemoryPatchHandler()
tests\session\memory\test_memory_patch.py:132 - handler = MemoryPatchHandler(fuzzy_threshold=0.8)

## tests\session\memory\test_memory_react.py
tests\session\memory\test_memory_react.py:12 - from openviking.session.memory.memory_react import (
tests\session\memory\test_memory_react.py:15 - from openviking.session.memory.dataclass import (
tests\session\memory\test_memory_react.py:19 - from openviking.session.memory.merge_op.base import FieldType, MergeOp
tests\session\memory\test_memory_react.py:160 - with patch('openviking.session.memory.memory_react.MemoryTypeRegistry') as mock_registry_cls:
tests\session\memory\test_memory_react.py:164 - schema1 = MemoryTypeSchema(
tests\session\memory\test_memory_react.py:165 - memory_type="preferences",
tests\session\memory\test_memory_react.py:171 - schema2 = MemoryTypeSchema(
tests\session\memory\test_memory_react.py:172 - memory_type="tools",
tests\session\memory\test_memory_react.py:184 - patch('openviking.session.memory.memory_react.SchemaPromptGenerator') as mock_spg:
tests\session\memory\test_memory_react.py:194 - react = MemoryReAct(mock_vlm, mock_viking_fs)

## tests\session\memory\test_memory_react_system_prompt.py
tests\session\memory\test_memory_react_system_prompt.py:11 - from openviking.session.memory import MemoryReAct
tests\session\memory\test_memory_react_system_prompt.py:14 - class TestMemoryReActSystemPrompt:
tests\session\memory\test_memory_react_system_prompt.py:40 - react = MemoryReAct(llm_provider=mock_llm, viking_fs=mock_viking_fs)
tests\session\memory\test_memory_react_system_prompt.py:60 - react = MemoryReAct(llm_provider=mock_llm, viking_fs=mock_viking_fs)
tests\session\memory\test_memory_react_system_prompt.py:73 - react = MemoryReAct(llm_provider=mock_llm, viking_fs=mock_viking_fs)

## tests\session\memory\test_memory_tools.py
tests\session\memory\test_memory_tools.py:8 - from openviking.session.memory.tools import (
tests\session\memory\test_memory_tools.py:18 - class TestMemoryTools:
tests\session\memory\test_memory_tools.py:23 - tool = MemoryReadTool()
tests\session\memory\test_memory_tools.py:32 - tool = MemorySearchTool()
tests\session\memory\test_memory_tools.py:41 - tool = MemoryLsTool()
tests\session\memory\test_memory_tools.py:49 - tool = MemoryReadTool()

## tests\session\memory\test_memory_updater.py
tests\session\memory\test_memory_updater.py:11 - from openviking.session.memory.memory_updater import (
tests\session\memory\test_memory_updater.py:15 - from openviking.session.memory.memory_type_registry import MemoryTypeRegistry
tests\session\memory\test_memory_updater.py:16 - from openviking.session.memory.dataclass import (
tests\session\memory\test_memory_updater.py:20 - from openviking.session.memory.merge_op import (
tests\session\memory\test_memory_updater.py:24 - from openviking.session.memory.merge_op.base import FieldType
tests\session\memory\test_memory_updater.py:25 - from openviking.session.memory.utils import deserialize_full, serialize_with_metadata
tests\session\memory\test_memory_updater.py:28 - class TestMemoryUpdateResult:
tests\session\memory\test_memory_updater.py:33 - result = MemoryUpdateResult()
tests\session\memory\test_memory_updater.py:43 - result = MemoryUpdateResult()
tests\session\memory\test_memory_updater.py:51 - result = MemoryUpdateResult()
tests\session\memory\test_memory_updater.py:59 - result = MemoryUpdateResult()
tests\session\memory\test_memory_updater.py:67 - result = MemoryUpdateResult()
tests\session\memory\test_memory_updater.py:79 - class TestMemoryUpdater:
tests\session\memory\test_memory_updater.py:84 - updater = MemoryUpdater()
tests\session\memory\test_memory_updater.py:92 - registry = MemoryTypeRegistry()
tests\session\memory\test_memory_updater.py:93 - updater = MemoryUpdater(registry)
tests\session\memory\test_memory_updater.py:99 - updater = MemoryUpdater()
tests\session\memory\test_memory_updater.py:100 - registry = MemoryTypeRegistry()
tests\session\memory\test_memory_updater.py:119 - updater = MemoryUpdater()
tests\session\memory\test_memory_updater.py:171 - updater = MemoryUpdater()
... and 2 more

## tests\session\memory\test_memory_utils.py
tests\session\memory\test_memory_utils.py:9 - from openviking.session.memory.dataclass import (
tests\session\memory\test_memory_utils.py:14 - from openviking.session.memory.merge_op.base import FieldType, MergeOp
tests\session\memory\test_memory_utils.py:15 - from openviking.session.memory.utils import (
tests\session\memory\test_memory_utils.py:25 - from openviking.session.memory.memory_type_registry import MemoryTypeRegistry
tests\session\memory\test_memory_utils.py:32 - """Test generating URI for preferences memory type."""
tests\session\memory\test_memory_utils.py:33 - memory_type = MemoryTypeSchema(
tests\session\memory\test_memory_utils.py:34 - memory_type="preferences",
tests\session\memory\test_memory_utils.py:35 - description="User preference memory",
tests\session\memory\test_memory_utils.py:63 - """Test generating URI for tools memory type."""
tests\session\memory\test_memory_utils.py:64 - memory_type = MemoryTypeSchema(
tests\session\memory\test_memory_utils.py:65 - memory_type="tools",
tests\session\memory\test_memory_utils.py:66 - description="Tool usage memory",
tests\session\memory\test_memory_utils.py:89 - memory_type = MemoryTypeSchema(
tests\session\memory\test_memory_utils.py:90 - memory_type="test",
tests\session\memory\test_memory_utils.py:91 - description="Test memory",
tests\session\memory\test_memory_utils.py:97 - uri = generate_uri(memory_type, {}, user_space="alice")
tests\session\memory\test_memory_utils.py:103 - memory_type = MemoryTypeSchema(
tests\session\memory\test_memory_utils.py:104 - memory_type="test",
tests\session\memory\test_memory_utils.py:105 - description="Test memory",
tests\session\memory\test_memory_utils.py:118 - uri = generate_uri(memory_type, {"name": "test-file"})
... and 48 more

## tests\session\memory\test_merge_ops.py
tests\session\memory\test_merge_ops.py:13 - from openviking.session.memory.dataclass import (
tests\session\memory\test_merge_ops.py:17 - from openviking.session.memory.merge_op import (
tests\session\memory\test_merge_ops.py:28 - from openviking.session.memory.merge_op.base import FieldType
tests\session\memory\test_merge_ops.py:29 - from openviking.session.memory.schema_model_generator import (
tests\session\memory\test_merge_ops.py:34 - from openviking.session.memory.memory_type_registry import (
tests\session\memory\test_merge_ops.py:179 - """Factory should create from MemoryField."""
tests\session\memory\test_merge_ops.py:180 - field = MemoryField(

## tests\session\memory\test_schema_models.py
tests\session\memory\test_schema_models.py:12 - from openviking.session.memory.dataclass import (
tests\session\memory\test_schema_models.py:16 - from openviking.session.memory.merge_op.base import FieldType, MergeOp
tests\session\memory\test_schema_models.py:17 - from openviking.session.memory.memory_type_registry import (
tests\session\memory\test_schema_models.py:21 - from openviking.session.memory.schema_model_generator import (
tests\session\memory\test_schema_models.py:33 - assert to_pascal_case("profile_memory") == "ProfileMemory"
tests\session\memory\test_schema_models.py:37 - assert to_pascal_case("memory-type") == "MemoryType"
tests\session\memory\test_schema_models.py:52 - def sample_memory_type(self):
tests\session\memory\test_schema_models.py:55 - memory_type="test_type",
tests\session\memory\test_schema_models.py:56 - description="Test memory type",
tests\session\memory\test_schema_models.py:76 - def registry_with_sample(self, sample_memory_type):
tests\session\memory\test_schema_models.py:77 - """Create a registry with a sample memory type."""
tests\session\memory\test_schema_models.py:78 - registry = MemoryTypeRegistry()
tests\session\memory\test_schema_models.py:85 - schemas_dir = Path(__file__).parent.parent.parent.parent / "openviking" / "prompts" / "templates" / "memory"
tests\session\memory\test_schema_models.py:88 - def test_create_flat_data_model(self, sample_memory_type, registry_with_sample):
tests\session\memory\test_schema_models.py:89 - """Test creating a flat data model for a single memory type."""
tests\session\memory\test_schema_models.py:91 - model = generator.create_flat_data_model(sample_memory_type)
tests\session\memory\test_schema_models.py:98 - # memory_type is a required field with literal type
tests\session\memory\test_schema_models.py:158 - def test_get_memory_data_json_schema(self, real_registry):
tests\session\memory\test_schema_models.py:161 - json_schema = generator.get_memory_data_json_schema()
tests\session\memory\test_schema_models.py:167 - def test_model_caching(self, registry_with_sample, sample_memory_type):
... and 10 more

## tests\telemetry\test_execution.py
tests\telemetry\test_execution.py:9 - def test_operation_telemetry_summary_includes_memory_extract_breakdown():
tests\telemetry\test_execution.py:37 - assert summary["memory"]["extracted"] == 5
tests\telemetry\test_execution.py:38 - assert summary["memory"]["extract"] == {
tests\telemetry\test_execution.py:58 - "create_memory_ms": 56.1,
tests\telemetry\test_execution.py:75 - with telemetry.measure("memory.extract.stage.dedup"):
tests\telemetry\test_execution.py:77 - with telemetry.measure("memory.extract.stage.dedup"):
tests\telemetry\test_execution.py:82 - assert summary["memory"]["extract"]["stages"]["dedup_ms"] == 500.0

## tests\telemetry\test_layering_rules.py
tests\telemetry\test_layering_rules.py:9 - ALLOWED_FILES = {"openviking/session/memory_deduplicator.py"}

## tests\transaction\test_lock_manager.py
tests\transaction\test_lock_manager.py:96 - lm._redo_session_memory = AsyncMock(side_effect=asyncio.CancelledError("shutdown"))

## tests\unit\test_context.py
tests\unit\test_context.py:55 - def test_memory_type(self):
tests\unit\test_context.py:56 - """Test MEMORY context type."""
tests\unit\test_context.py:57 - assert ContextType.MEMORY == "memory"
tests\unit\test_context.py:58 - assert ContextType.MEMORY.value == "memory"
tests\unit\test_context.py:121 - context_type="memory",
tests\unit\test_context.py:135 - assert ctx.context_type == "memory"
tests\unit\test_context.py:182 - def test_derive_memory(self):
tests\unit\test_context.py:183 - """Test deriving memory type from URI."""
tests\unit\test_context.py:186 - assert ctx.context_type == "memory"
tests\unit\test_context.py:366 - "context_type": "memory",
tests\unit\test_context.py:375 - assert ctx.context_type == "memory"
tests\unit\test_context.py:439 - context_type="memory",

## tests\unit\test_litellm_embedder.py
tests\unit\test_litellm_embedder.py:218 - class TestLiteLLMEmbeddingFactory:

## tests\unit\test_message.py
tests\unit\test_message.py:66 - assert part.context_type == "memory"
tests\unit\test_message.py:83 - def test_memory_context_type(self):
tests\unit\test_message.py:84 - """Test memory context type."""
tests\unit\test_message.py:87 - context_type="memory",
tests\unit\test_message.py:90 - assert part.context_type == "memory"
tests\unit\test_message.py:405 - ContextPart(uri="viking://test/", context_type="memory"),
tests\unit\test_message.py:483 - "context_type": "memory",
tests\unit\test_message.py:524 - ContextPart(uri="viking://test/", context_type="memory"),
tests\unit\test_message.py:569 - {"uri": "viking://test/1.md", "context_type": "memory"},

## tests\unit\test_time_utils.py
tests\unit\test_time_utils.py:20 - "context_type": "memory",

## tests\unit\retrieve\test_retrieval_stats.py
tests\unit\retrieve\test_retrieval_stats.py:29 - context_type="memory",
tests\unit\retrieve\test_retrieval_stats.py:40 - assert stats.queries_by_type == {"memory": 1}
tests\unit\retrieve\test_retrieval_stats.py:58 - collector.record_query("memory", 2, [0.8, 0.6], latency_ms=30.0)
tests\unit\retrieve\test_retrieval_stats.py:60 - collector.record_query("memory", 0, [], latency_ms=5.0)
tests\unit\retrieve\test_retrieval_stats.py:66 - assert stats.queries_by_type == {"memory": 2, "resource": 1}
tests\unit\retrieve\test_retrieval_stats.py:71 - collector.record_query("memory", 1, [0.9], rerank_used=True)
tests\unit\retrieve\test_retrieval_stats.py:72 - collector.record_query("memory", 1, [0.7], rerank_fallback=True)
tests\unit\retrieve\test_retrieval_stats.py:80 - collector.record_query("memory", 1, [0.5], latency_ms=10.0)
tests\unit\retrieve\test_retrieval_stats.py:81 - collector.record_query("memory", 1, [0.5], latency_ms=100.0)
tests\unit\retrieve\test_retrieval_stats.py:82 - collector.record_query("memory", 1, [0.5], latency_ms=50.0)
tests\unit\retrieve\test_retrieval_stats.py:104 - collector.record_query("memory", 2, [0.9, 0.6], latency_ms=25.0)
tests\unit\retrieve\test_retrieval_stats.py:164 - collector.record_query("memory", 2, [0.9, 0.7], latency_ms=30.0)

## tests\unit\session\test_deduplicator_uri.py
tests\unit\session\test_deduplicator_uri.py:4 - from openviking.session.memory_deduplicator import MemoryDeduplicator
tests\unit\session\test_deduplicator_uri.py:9 - result = MemoryDeduplicator._extract_facet_key("饮食偏好：喜欢吃苹果和草莓")
tests\unit\session\test_deduplicator_uri.py:13 - result = MemoryDeduplicator._extract_facet_key("User preference: dark mode enabled")
tests\unit\session\test_deduplicator_uri.py:17 - result = MemoryDeduplicator._extract_facet_key("Coding style - prefer type hints")
tests\unit\session\test_deduplicator_uri.py:21 - result = MemoryDeduplicator._extract_facet_key("Work schedule — remote on Fridays")
tests\unit\session\test_deduplicator_uri.py:25 - result = MemoryDeduplicator._extract_facet_key(
tests\unit\session\test_deduplicator_uri.py:32 - result = MemoryDeduplicator._extract_facet_key("")
tests\unit\session\test_deduplicator_uri.py:36 - result = MemoryDeduplicator._extract_facet_key(None)
tests\unit\session\test_deduplicator_uri.py:40 - result = MemoryDeduplicator._extract_facet_key("  Multiple   spaces  :  value  ")
tests\unit\session\test_deduplicator_uri.py:44 - result = MemoryDeduplicator._extract_facet_key("Short")
tests\unit\session\test_deduplicator_uri.py:48 - result = MemoryDeduplicator._extract_facet_key("FOOD PREFERENCE: pizza")
tests\unit\session\test_deduplicator_uri.py:52 - result = MemoryDeduplicator._extract_facet_key(": starts with separator")
tests\unit\session\test_deduplicator_uri.py:56 - result = MemoryDeduplicator._extract_facet_key("Topic: Subtopic - Detail")
tests\unit\session\test_deduplicator_uri.py:63 - result = MemoryDeduplicator._cosine_similarity(vec, vec)
tests\unit\session\test_deduplicator_uri.py:69 - result = MemoryDeduplicator._cosine_similarity(vec_a, vec_b)
tests\unit\session\test_deduplicator_uri.py:75 - result = MemoryDeduplicator._cosine_similarity(vec_a, vec_b)
tests\unit\session\test_deduplicator_uri.py:81 - result = MemoryDeduplicator._cosine_similarity(vec_a, vec_b)
tests\unit\session\test_deduplicator_uri.py:87 - result = MemoryDeduplicator._cosine_similarity(vec_a, vec_b)
tests\unit\session\test_deduplicator_uri.py:93 - result = MemoryDeduplicator._cosine_similarity(vec_a, vec_b)
tests\unit\session\test_deduplicator_uri.py:99 - result = MemoryDeduplicator._cosine_similarity(vec_a, vec_b)
... and 4 more

## tests\unit\session\test_memory_archiver.py
tests\unit\session\test_memory_archiver.py:10 - from openviking.session.memory_archiver import (
tests\unit\session\test_memory_archiver.py:125 - async def test_scan_finds_cold_memories(self):
tests\unit\session\test_memory_archiver.py:131 - "context_type": "memory",
tests\unit\session\test_memory_archiver.py:135 - archiver = MemoryArchiver(
tests\unit\session\test_memory_archiver.py:147 - async def test_scan_skips_recent_memories(self):
tests\unit\session\test_memory_archiver.py:153 - "context_type": "memory",
tests\unit\session\test_memory_archiver.py:157 - archiver = MemoryArchiver(
tests\unit\session\test_memory_archiver.py:173 - "context_type": "memory",
tests\unit\session\test_memory_archiver.py:177 - archiver = MemoryArchiver(
tests\unit\session\test_memory_archiver.py:197 - archiver = MemoryArchiver(
tests\unit\session\test_memory_archiver.py:207 - async def test_scan_keeps_hot_memories(self):
tests\unit\session\test_memory_archiver.py:213 - "context_type": "memory",
tests\unit\session\test_memory_archiver.py:217 - archiver = MemoryArchiver(
tests\unit\session\test_memory_archiver.py:234 - "context_type": "memory",
tests\unit\session\test_memory_archiver.py:241 - "context_type": "memory",
tests\unit\session\test_memory_archiver.py:245 - archiver = MemoryArchiver(
tests\unit\session\test_memory_archiver.py:258 - archiver = MemoryArchiver(
tests\unit\session\test_memory_archiver.py:277 - archiver = MemoryArchiver(viking_fs=vfs, storage=_make_storage([]))
tests\unit\session\test_memory_archiver.py:298 - archiver = MemoryArchiver(viking_fs=vfs, storage=_make_storage([]))
tests\unit\session\test_memory_archiver.py:316 - archiver = MemoryArchiver(viking_fs=vfs, storage=_make_storage([]))
... and 8 more

## tests\unit\stats\test_stats_aggregator.py
tests\unit\stats\test_stats_aggregator.py:30 - def _make_memory_record(
tests\unit\stats\test_stats_aggregator.py:40 - "context_type": "memory",
tests\unit\stats\test_stats_aggregator.py:53 - result = await aggregator.get_memory_stats(mock_ctx)
tests\unit\stats\test_stats_aggregator.py:64 - _make_memory_record("cases", active_count=5, updated_at=now),
tests\unit\stats\test_stats_aggregator.py:65 - _make_memory_record("cases", active_count=3, updated_at=now),
tests\unit\stats\test_stats_aggregator.py:66 - _make_memory_record("tools", active_count=1, updated_at=now),
tests\unit\stats\test_stats_aggregator.py:70 - result = await aggregator.get_memory_stats(mock_ctx)
tests\unit\stats\test_stats_aggregator.py:81 - _make_memory_record("patterns", active_count=2, updated_at=now),
tests\unit\stats\test_stats_aggregator.py:85 - result = await aggregator.get_memory_stats(mock_ctx, category="patterns")
tests\unit\stats\test_stats_aggregator.py:95 - hot_record = _make_memory_record("cases", active_count=50, updated_at=now)
tests\unit\stats\test_stats_aggregator.py:97 - cold_record = _make_memory_record(
tests\unit\stats\test_stats_aggregator.py:102 - result = await aggregator.get_memory_stats(mock_ctx, category="cases")
tests\unit\stats\test_stats_aggregator.py:112 - old_record = _make_memory_record(
tests\unit\stats\test_stats_aggregator.py:120 - result = await aggregator.get_memory_stats(mock_ctx, category="events")
tests\unit\stats\test_stats_aggregator.py:124 - assert result["staleness"]["oldest_memory_age_days"] >= 49
tests\unit\stats\test_stats_aggregator.py:131 - result = await aggregator.get_memory_stats(mock_ctx, category="cases")

## tests\unit\stats\test_stats_api.py
tests\unit\stats\test_stats_api.py:54 - class TestGetMemoryStats:

## tests\unit\tool_skill\test_tool_skill_calibration.py
tests\unit\tool_skill\test_tool_skill_calibration.py:7 - from openviking.session.memory_extractor import MemoryCategory, ToolSkillCandidateMemory
tests\unit\tool_skill\test_tool_skill_calibration.py:11 - category: MemoryCategory, tool_name: str = "", skill_name: str = ""
tests\unit\tool_skill\test_tool_skill_calibration.py:12 - ) -> ToolSkillCandidateMemory:
tests\unit\tool_skill\test_tool_skill_calibration.py:33 - candidate = _candidate(MemoryCategory.TOOLS, tool_name="weather")
tests\unit\tool_skill\test_tool_skill_calibration.py:46 - candidate = _candidate(MemoryCategory.SKILLS, skill_name="weather")
tests\unit\tool_skill\test_tool_skill_calibration.py:55 - candidate = _candidate(MemoryCategory.TOOLS, tool_name="")
tests\unit\tool_skill\test_tool_skill_calibration.py:62 - candidate = _candidate(MemoryCategory.TOOLS, tool_name="calendar")
tests\unit\tool_skill\test_tool_skill_calibration.py:69 - candidate = _candidate(MemoryCategory.SKILLS, skill_name="weather使用")
tests\unit\tool_skill\test_tool_skill_calibration.py:79 - candidate = _candidate(MemoryCategory.TOOLS, tool_name="abcdefghij")

## tests\unit\tool_skill\test_tool_skill_memory_guardrails.py
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:10 - from openviking.session.memory_extractor import MemoryExtractor, ToolSkillCandidateMemory
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:13 - MemoryExtractor = None
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:14 - ToolSkillCandidateMemory = None
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:22 - reason="openviking.session.memory_extractor not available in this test env",
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:80 - async def test_merge_tool_memory_read_failure_skips_write(monkeypatch):
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:81 - extractor = MemoryExtractor()
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:86 - monkeypatch.setattr("openviking.session.memory_extractor.get_viking_fs", lambda: fs)
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:90 - result = await extractor._merge_tool_memory("tool_x", candidate, ctx)
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:96 - async def test_merge_tool_memory_not_found_allows_create(monkeypatch):
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:97 - extractor = MemoryExtractor()
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:102 - monkeypatch.setattr("openviking.session.memory_extractor.get_viking_fs", lambda: fs)
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:106 - result = await extractor._merge_tool_memory("tool_x", candidate, ctx)
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:112 - async def test_merge_tool_memory_monotonic_violation_skips_write(monkeypatch):
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:113 - extractor = MemoryExtractor()
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:120 - monkeypatch.setattr("openviking.session.memory_extractor.get_viking_fs", lambda: fs)
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:130 - result = await extractor._merge_tool_memory("tool_x", candidate, ctx)
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:136 - async def test_merge_skill_memory_read_failure_skips_write(monkeypatch):
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:137 - extractor = MemoryExtractor()
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:142 - monkeypatch.setattr("openviking.session.memory_extractor.get_viking_fs", lambda: fs)
tests\unit\tool_skill\test_tool_skill_memory_guardrails.py:146 - result = await extractor._merge_skill_memory("skill_x", candidate, ctx)
... and 26 more

## tests\vectordb\test_project_group.py
tests\vectordb\test_project_group.py:70 - # However, for robustness, we at least ensure it's gone from memory.

## tests\vectordb\test_recall.py
tests\vectordb\test_recall.py:550 - # Note: LocalCollection might not have an explicit close() that unloads everything from memory

## third_party\agfs\README.md
third_party\agfs\README.md:142 - agfs:/> cp /s3fs/mybucket/config.json /memfs/    # copy S3 file to memory

## third_party\agfs\agfs-fuse\pkg\fusefs\handles.go
third_party\agfs\agfs-fuse\pkg\fusefs\handles.go:354 - // trimStreamBuffer removes old data from the buffer to prevent memory leak

## third_party\agfs\agfs-mcp\README.md
third_party\agfs\agfs-mcp\README.md:173 - fstype: Filesystem type (e.g., 'sqlfs', 'memfs', 's3fs')

## third_party\agfs\agfs-mcp\src\agfs_mcp\server.py
third_party\agfs\agfs-mcp\src\agfs_mcp\server.py:129 - - **MemFS**: In-memory temporary storage (fast, volatile)
third_party\agfs\agfs-mcp\src\agfs_mcp\server.py:333 - "description": "Filesystem type (e.g., 'sqlfs', 'memfs', 's3fs')"

## third_party\agfs\agfs-sdk\python\pyagfs\client.py
third_party\agfs\agfs-sdk\python\pyagfs\client.py:384 - fstype: Filesystem type (e.g., 'sqlfs', 's3fs', 'memfs')

## third_party\agfs\agfs-sdk\python\pyagfs\helpers.py
third_party\agfs\agfs-sdk\python\pyagfs\helpers.py:25 - stream: If True, use streaming for large files (memory efficient)
third_party\agfs\agfs-sdk\python\pyagfs\helpers.py:55 - stream: If True, use streaming for large files (memory efficient)
third_party\agfs\agfs-sdk\python\pyagfs\helpers.py:87 - stream: If True, use streaming for large files (memory efficient)

## third_party\agfs\agfs-server\api.md
third_party\agfs\agfs-server\api.md:354 - "fstype": "memfs",      // Plugin type name
third_party\agfs\agfs-server\api.md:366 - -d '{"fstype": "memfs", "path": "/my_memfs", "config": {"init_dirs": ["/tmp"]}}'

## third_party\agfs\agfs-server\README.md
third_party\agfs\agfs-server\README.md:162 - -   **MemFS**: In-memory file system. Fast, non-persistent storage ideal for temporary data and caching.

## third_party\agfs\agfs-server\pkg\mountablefs\concurrent_test.go
third_party\agfs\agfs-server\pkg\mountablefs\concurrent_test.go:30 - fs := plugin.GetFileSystem().(*memfs.MemoryFS)
third_party\agfs\agfs-server\pkg\mountablefs\concurrent_test.go:134 - fs := plugin.GetFileSystem().(*memfs.MemoryFS)
third_party\agfs\agfs-server\pkg\mountablefs\concurrent_test.go:201 - fs := plugin.GetFileSystem().(*memfs.MemoryFS)

## third_party\agfs\agfs-server\pkg\mountablefs\handle_test.go
third_party\agfs\agfs-server\pkg\mountablefs\handle_test.go:34 - memfs1 := plugin1.GetFileSystem().(*memfs.MemoryFS)
third_party\agfs\agfs-server\pkg\mountablefs\handle_test.go:35 - memfs2 := plugin2.GetFileSystem().(*memfs.MemoryFS)
third_party\agfs\agfs-server\pkg\mountablefs\handle_test.go:195 - memfs1 := plugin1.GetFileSystem().(*memfs.MemoryFS)

## third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:20 - path, ok := readStringFromMemory(mod, pathPtr)
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:22 - log.Errorf("host_fs_read: failed to read path from memory")
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:41 - dataPtr, _, err := writeBytesToMemory(mod, data)
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:43 - log.Errorf("host_fs_read: failed to write data to memory: %v", err)
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:58 - path, ok := readStringFromMemory(mod, pathPtr)
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:60 - log.Errorf("host_fs_write: failed to read path from memory")
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:64 - data, ok := mod.Memory().Read(dataPtr, dataLen)
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:66 - log.Errorf("host_fs_write: failed to read data from memory")
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:91 - path, ok := readStringFromMemory(mod, pathPtr)
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:93 - log.Errorf("host_fs_stat: failed to read path from memory")
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:101 - errPtr, _, _ := writeStringToMemory(mod, "no host filesystem provided")
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:110 - errPtr, _, err := writeStringToMemory(mod, errStr)
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:124 - jsonPtr, _, err := writeStringToMemory(mod, string(jsonData))
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:126 - log.Errorf("host_fs_stat: failed to write JSON to memory: %v", err)
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:137 - path, ok := readStringFromMemory(mod, pathPtr)
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:139 - log.Errorf("host_fs_readdir: failed to read path from memory")
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:147 - errPtr, _, _ := writeStringToMemory(mod, "no host filesystem provided")
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:155 - errPtr, _, err := writeStringToMemory(mod, errStr)
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:169 - jsonPtr, _, err := writeStringToMemory(mod, string(jsonData))
third_party\agfs\agfs-server\pkg\plugin\api\host_fs.go:171 - log.Errorf("host_fs_readdir: failed to write JSON to memory: %v", err)
... and 19 more

## third_party\agfs\agfs-server\pkg\plugin\api\host_http.go
third_party\agfs\agfs-server\pkg\plugin\api\host_http.go:40 - // Read request JSON from memory
third_party\agfs\agfs-server\pkg\plugin\api\host_http.go:41 - requestJSON, ok := readStringFromMemory(mod, requestPtr)
third_party\agfs\agfs-server\pkg\plugin\api\host_http.go:43 - log.Errorf("host_http_request: failed to read request from memory")
third_party\agfs\agfs-server\pkg\plugin\api\host_http.go:142 - respPtr, _, err := writeBytesToMemory(mod, respJSON)
third_party\agfs\agfs-server\pkg\plugin\api\host_http.go:144 - log.Errorf("packHTTPResponse: failed to write response to memory: %v", err)

## third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:91 - // Write config to WASM memory
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:92 - configPtr, configPtrSize, err := writeStringToMemory(instance.module, string(configJSON))
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:94 - return fmt.Errorf("failed to write config to memory: %w", err)
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:107 - if errMsg, ok := readStringFromMemory(instance.module, errPtr); ok {
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:134 - // Write config to WASM memory
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:135 - configPtr, configPtrSize, err := writeStringToMemory(instance.module, string(configJSON))
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:137 - return fmt.Errorf("failed to write config to memory: %w", err)
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:150 - if errMsg, ok := readStringFromMemory(instance.module, errPtr); ok {
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:186 - if r, ok := readStringFromMemory(instance.module, ptr); ok {
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:220 - // Read JSON string from WASM memory
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:221 - if jsonStr, ok := readStringFromMemory(instance.module, ptr); ok {
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:541 - pathPtr, pathPtrSize, err := writeStringToMemoryWithBuffer(wfs.module, path, wfs.sharedBuffer)
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:554 - if errMsg, ok := readStringFromMemory(wfs.module, errPtr); ok {
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:571 - pathPtr, pathPtrSize, err := writeStringToMemory(wfs.module, path)
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:584 - if errMsg, ok := readStringFromMemory(wfs.module, errPtr); ok {
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:601 - pathPtr, pathPtrSize, err := writeStringToMemory(wfs.module, path)
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:614 - if errMsg, ok := readStringFromMemory(wfs.module, errPtr); ok {
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:632 - pathPtr, pathPtrSize, err := writeStringToMemory(wfs.module, path)
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:645 - if errMsg, ok := readStringFromMemory(wfs.module, errPtr); ok {
third_party\agfs\agfs-server\pkg\plugin\api\wasm_plugin.go:669 - pathPtr, pathPtrSize, err := writeStringToMemoryWithBuffer(wfs.module, path, wfs.sharedBuffer)
... and 44 more

## third_party\agfs\agfs-server\pkg\plugin\loader\loader.go
third_party\agfs\agfs-server\pkg\plugin\loader\loader.go:300 - log.Infof("Unloaded plugin: %s (library remains in memory)", absPath)

## third_party\agfs\agfs-server\pkg\plugin\loader\wasm_loader.go
third_party\agfs\agfs-server\pkg\plugin\loader\wasm_loader.go:205 - // Read string from memory
third_party\agfs\agfs-server\pkg\plugin\loader\wasm_loader.go:206 - if nameStr, ok := api.ReadStringFromWASMMemory(module, uint32(nameResults[0])); ok {

## third_party\agfs\agfs-server\pkg\plugins\httpfs\httpfs.go
third_party\agfs\agfs-server\pkg\plugins\httpfs\httpfs.go:718 - [plugins.httpfs_mem.config]

## third_party\agfs\agfs-server\pkg\plugins\memfs\memfs.go
third_party\agfs\agfs-server\pkg\plugins\memfs\memfs.go:16 - type MemFSPlugin struct {
third_party\agfs\agfs-server\pkg\plugins\memfs\memfs.go:23 - fs: NewMemoryFSWithPlugin(PluginName),
third_party\agfs\agfs-server\pkg\plugins\memfs\memfs.go:31 - func (p *MemFSPlugin) Validate(cfg map[string]interface{}) error {
third_party\agfs\agfs-server\pkg\plugins\memfs\memfs.go:51 - func (p *MemFSPlugin) Initialize(config map[string]interface{}) error {

## third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go:33 - type MemoryFS struct {
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go:60 - handles:      make(map[int64]*MemoryFileHandle),
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go:415 - type memoryReadCloser struct {
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go:433 - type memoryWriteCloser struct {
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go:462 - type MemoryFileHandle struct {
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go:690 - // Remove from MemoryFS handles map
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go:759 - handle := &MemoryFileHandle{
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go:798 - // Ensure MemoryFS implements HandleFS interface
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs.go:799 - var _ filesystem.HandleFS = (*MemoryFS)(nil)

## third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:21 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:49 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:73 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:100 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:133 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:160 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:186 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:203 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:220 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:249 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:271 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:292 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:324 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:353 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:382 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:409 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:426 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:449 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:472 - fs := NewMemoryFS()
third_party\agfs\agfs-server\pkg\plugins\memfs\memoryfs_test.go:511 - fs := NewMemoryFS()
... and 10 more

## third_party\agfs\agfs-server\pkg\plugins\proxyfs\README.md
third_party\agfs\agfs-server\pkg\plugins\proxyfs\README.md:277 - data, _ := mfs.Read("/remote/memfs/config.json")
third_party\agfs\agfs-server\pkg\plugins\proxyfs\README.md:429 - 4. **No Streaming**: Large files are loaded entirely into memory

## third_party\agfs\agfs-server\pkg\plugins\queuefs\backend.go
third_party\agfs\agfs-server\pkg\plugins\queuefs\backend.go:65 - type MemoryBackend struct {
third_party\agfs\agfs-server\pkg\plugins\queuefs\backend.go:75 - func (b *MemoryBackend) Initialize(config map[string]interface{}) error {
third_party\agfs\agfs-server\pkg\plugins\queuefs\backend.go:257 - backendType := "memory" // default

## third_party\agfs\agfs-server\pkg\plugins\queuefs\db_backend.go
third_party\agfs\agfs-server\pkg\plugins\queuefs\db_backend.go:266 - backendType := config.GetStringConfig(cfg, "backend", "memory")

## third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:43 - //   - memory (default): In-memory storage
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:94 - backendType := config.GetStringConfig(cfg, "backend", "memory")
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:96 - "memory":  true,
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:103 - return fmt.Errorf("unsupported backend: %s (valid options: memory, tidb, mysql, sqlite)", backendType)
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:107 - if backendType != "memory" {
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:131 - backendType := config.GetStringConfig(cfg, "backend", "memory")
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:138 - case "memory":
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:139 - backend = NewMemoryBackend()
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:209 - Memory Backend (default):
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:213 - # No additional config needed for memory backend
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:279 - - memory: Fastest, no persistence, lost on restart
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:291 - Default:     "memory",
third_party\agfs\agfs-server\pkg\plugins\queuefs\queuefs.go:292 - Description: "Queue backend (memory, tidb, mysql, sqlite, sqlite3)",

## third_party\agfs\agfs-server\pkg\plugins\s3fs\s3fs.go
third_party\agfs\agfs-server\pkg\plugins\s3fs\s3fs.go:866 - Stream a large file (memory efficient):

## third_party\agfs\agfs-server\pkg\plugins\serverinfofs\serverinfofs.go
third_party\agfs\agfs-server\pkg\plugins\serverinfofs\serverinfofs.go:174 - "memory": map[string]interface{}{
third_party\agfs\agfs-server\pkg\plugins\serverinfofs\serverinfofs.go:215 - "memory": map[string]interface{}{

## third_party\agfs\agfs-server\pkg\plugins\streamfs\README.md
third_party\agfs\agfs-server\pkg\plugins\streamfs\README.md:96 - # For live streaming: 512KB - 1MB (low latency, less memory)
third_party\agfs\agfs-server\pkg\plugins\streamfs\README.md:129 - - High memory usage: Reduce channel_buffer_size or limit concurrent readers

## third_party\agfs\agfs-server\pkg\plugins\streamfs\streamfs.go
third_party\agfs\agfs-server\pkg\plugins\streamfs\streamfs.go:779 - # For live streaming: 512KB - 1MB (low latency, less memory)
third_party\agfs\agfs-server\pkg\plugins\streamfs\streamfs.go:797 - MEMORY USAGE:
third_party\agfs\agfs-server\pkg\plugins\streamfs\streamfs.go:799 - File Size vs Memory Usage:
third_party\agfs\agfs-server\pkg\plugins\streamfs\streamfs.go:806 - Actual Memory Footprint:
third_party\agfs\agfs-server\pkg\plugins\streamfs\streamfs.go:809 - - Total memory = ring_buffer_size + (channel_buffer_size × number of readers)
third_party\agfs\agfs-server\pkg\plugins\streamfs\streamfs.go:834 - - High memory usage: Reduce channel_buffer_size or limit concurrent readers
third_party\agfs\agfs-server\pkg\plugins\streamfs\streamfs.go:870 - // Read buffer: sliding window to prevent memory leak
third_party\agfs\agfs-server\pkg\plugins\streamfs\streamfs.go:1129 - // trimBuffer removes old data from buffer to prevent memory leak

## third_party\agfs\agfs-shell\README.md
third_party\agfs\agfs-shell\README.md:88 - - **Streaming I/O**: Memory-efficient processing (8KB chunks)

## third_party\leveldb-1.23\CMakeLists.txt
third_party\leveldb-1.23\CMakeLists.txt:227 - # MemEnv is not part of the interface and could be pulled to a separate library.

## third_party\leveldb-1.23\README.md
third_party\leveldb-1.23\README.md:188 - uncompressed blocks in memory, the read performance improves again:

## third_party\leveldb-1.23\doc\index.md
third_party\leveldb-1.23\doc\index.md:116 - false, an update is pushed from the process memory into the operating system

## third_party\spdlog-1.14.1\README.md
third_party\spdlog-1.14.1\README.md:319 - void format(const spdlog::details::log_msg &, const std::tm &, spdlog::memory_buf_t &dest) override
third_party\spdlog-1.14.1\README.md:491 - [info] Queue memory : 8,192 x 272 = 2,176 KB
