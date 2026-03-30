# ReMe Memory Context

## Files with 'mem' in name:
benchmark\bfcl\init_task_memory_pool.py
benchmark\longmemeval\eval_longmemeval_reme.py
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py
docs\personal_memory\personal_memory.md
docs\sop_memory\making_sop_memories.md
docs\task_memory\task_memory.md
docs\tool_memory\tool_memory.md
docs\_static\figure\working_memory_intro.png
docs\_static\memory-lib\memory-lib.css
docs\_static\memory-lib\memory-lib.js
reme\core\enumeration\memory_source.py
reme\core\enumeration\memory_type.py
reme\core\schema\memory_chunk.py
reme\core\schema\memory_node.py
reme\core\schema\memory_search_result.py
reme\extension\procedural_memory\dump_memory.py
reme\extension\procedural_memory\load_memory.py
reme\extension\procedural_memory\retrieve\memory_deletion.py
reme\extension\procedural_memory\retrieve\memory_retrieval.py
reme\extension\procedural_memory\retrieve\merge_memory.py
reme\extension\procedural_memory\retrieve\rerank_memory.py
reme\extension\procedural_memory\retrieve\rerank_memory.yaml
reme\extension\procedural_memory\retrieve\rewrite_memory.py
reme\extension\procedural_memory\retrieve\rewrite_memory.yaml
reme\extension\procedural_memory\retrieve\update_memory_metadata.py
reme\extension\procedural_memory\summary\memory_addition.py
reme\extension\procedural_memory\summary\memory_deduplication.py
reme\extension\procedural_memory\summary\memory_validation.py
reme\extension\procedural_memory\summary\memory_validation.yaml
reme\memory\file_based\reme_in_memory_memory.py
reme\memory\file_based\tools\memory_get.py
reme\memory\file_based\tools\memory_search.py
reme\memory\vector_based\base_memory_agent.py
reme\memory\vector_tools\base_memory_tool.py
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py
reme\memory\vector_tools\record\add_memory.py
reme\memory\vector_tools\record\delete_memory.py
reme\memory\vector_tools\record\memory_handler.py
reme\memory\vector_tools\record\retrieve_memory.py
reme\memory\vector_tools\record\retrieve_recent_memory.py
reme\memory\vector_tools\record\update_memory.py
reme\memory\vector_tools\record\update_memory_v1.py
reme\memory\vector_tools\record\update_memory_v2.py
reme_ai\retrieve\personal\print_memory_op.py
reme_ai\retrieve\personal\print_memory_prompt.yaml
reme_ai\retrieve\personal\retrieve_memory_op.py
reme_ai\retrieve\task\merge_memory_op.py
reme_ai\retrieve\task\rerank_memory_op.py
reme_ai\retrieve\task\rerank_memory_prompt.yaml
reme_ai\retrieve\task\rewrite_memory_op.py
reme_ai\retrieve\task\rewrite_memory_prompt.yaml
reme_ai\retrieve\tool\retrieve_tool_memory_op.py
reme_ai\schema\memory.py
reme_ai\service\agentscope_runtime_memory_service.py
reme_ai\service\personal_memory_service.py
reme_ai\service\task_memory_service.py
reme_ai\summary\personal\load_today_memory_op.py
reme_ai\summary\task\memory_deduplication_op.py
reme_ai\summary\task\memory_validation_op.py
reme_ai\summary\task\memory_validation_prompt.yaml
reme_ai\summary\tool\summary_tool_memory_op.py
reme_ai\summary\tool\summary_tool_memory_prompt.yaml
reme_ai\utils\tool_memory_utils.py
reme_ai\vector_store\delete_memory_op.py
reme_ai\vector_store\update_memory_freq_op.py
reme_ai\vector_store\update_memory_utility_op.py
test\cookbook\bfcl\init_task_memory_pool.py
test\cookbook\simple_demo\mcp_task_memory.jsonl
test\cookbook\simple_demo\personal_memory.jsonl
test\cookbook\simple_demo\task_memory.jsonl
test\cookbook\simple_demo\use_personal_memory_demo.py
test\cookbook\simple_demo\use_task_memory_demo.py
test\cookbook\simple_demo\use_task_memory_mcp_demo.py
test\cookbook\simple_demo\use_tool_memory_demo.py
test\cookbook\working_memory\react_agent_with_working_memory.py
test\cookbook\working_memory\work_memory_demo.py
test\test\test_fs_memory_get.py
test\test\test_fs_memory_search.py
tests\demo_memory_search.py
tests\test_cache_memory_usage.py
tests\test_memory_vector_conversion.py
tests\test_reme_memory_error_handling.py


## .\README.md
.\README.md:35 - It tackles two core problems of agent memory: **limited context window** (early information is truncated or lost in long
.\README.md:48 - - **Personal assistant**: Provide long-term memory for agents like [CoPaw](https://github.com/agentscope-ai/CoPaw),
.\README.md:68 - [CoPaw](https://github.com/agentscope-ai/CoPaw) integrates long-term memory and context management by inheriting from
.\README.md:80 - ├── MEMORY.md              # Long-term memory: persistent info such as user preferences
.\README.md:91 - [ReMeLight](reme/reme_light.py) is the core class of the file-based memory system. It provides full memory management
.\README.md:96 - <tr><td rowspan="4">Context Management</td><td><code>check_context</code></td><td>📊 Check context size</td><td><a href="reme/memory/file_based/components/context_checker.py">ContextChecker</a> — checks whether context exceeds thresholds and splits messages</td></tr>
.\README.md:97 - <tr><td><code>compact_memory</code></td><td>📦 Compact history into summary</td><td><a href="reme/memory/file_based/components/compactor.py">Compactor</a> — ReActAgent that generates structured context summaries</td></tr>
.\README.md:98 - <tr><td><code>compact_tool_result</code></td><td>✂️ Compact long tool outputs</td><td><a href="reme/memory/file_based/components/tool_result_compactor.py">ToolResultCompactor</a> — truncates long tool outputs and stores them in <code>tool_result/</code> while keeping file references in messages</td></tr>
.\README.md:100 - <tr><td rowspan="2">Long-term Memory</td><td><code>summary_memory</code></td><td>📝 Persist important memory to files</td><td><a href="reme/memory/file_based/components/summarizer.py">Summarizer</a> — ReActAgent + file tools (<code>read</code> / <code>write</code> / <code>edit</code>)</td></tr>
.\README.md:101 - <tr><td><code>memory_search</code></td><td>🔍 Semantic memory search</td><td><a href="reme/memory/file_based/tools/memory_search.py">MemorySearch</a> — hybrid retrieval with vectors + BM25</td></tr>
.\README.md:102 - <tr><td rowspan="2">Session Memory</td><td><code>get_in_memory_memory</code></td><td>💾 Create in-session memory instance</td><td>Returns ReMeInMemoryMemory with dialog_path configured for persistence</td></tr>
.\README.md:163 - memory_compact_threshold=90000,  # Threshold to trigger compaction (tokens)
.\README.md:164 - memory_compact_reserve=10000,  # Token count to reserve for recent messages
.\README.md:168 - summary = await reme.compact_memory(
.\README.md:186 - memory_compact_reserve=10000,
.\README.md:192 - summary_result = await reme.summary_memory(
.\README.md:198 - result = await reme.memory_search(query="Python version preference", max_results=5)
.\README.md:201 - memory = reme.get_in_memory_memory()  # Auto-configures dialog_path
.\README.md:204 - token_stats = await memory.estimate_tokens(max_input_length=128000)
.\README.md:226 - [CoPaw MemoryManager](https://github.com/agentscope-ai/CoPaw/blob/main/src/copaw/agents/memory/memory_manager.py)
... and 28 more

## .\README_ZH.md
.\README_ZH.md:88 - <tr><td rowspan="4">上下文管理</td><td><code>check_context</code></td><td>📊 检查上下文大小</td><td><a href="reme/memory/file_based/components/context_checker.py">ContextChecker</a> — 检查上下文是否超出阈值并拆分 Message</td></tr>
.\README_ZH.md:89 - <tr><td><code>compact_memory</code></td><td>📦 压缩历史对话为摘要</td><td><a href="reme/memory/file_based/components/compactor.py">Compactor</a> — ReActAgent 生成结构化上下文摘要</td></tr>
.\README_ZH.md:90 - <tr><td><code>compact_tool_result</code></td><td>✂️ 压缩超长工具输出</td><td><a href="reme/memory/file_based/components/tool_result_compactor.py">ToolResultCompactor</a> — 截断超长的工具调用结果并转存到 <code>tool_result/</code>，消息中保留文件引用</td></tr>
.\README_ZH.md:92 - <tr><td rowspan="2">长期记忆</td><td><code>summary_memory</code></td><td>📝 将重要记忆写入文件</td><td><a href="reme/memory/file_based/components/summarizer.py">Summarizer</a> — ReActAgent + 文件工具（read / write / edit）</td></tr>
.\README_ZH.md:93 - <tr><td><code>memory_search</code></td><td>🔍 语义搜索记忆</td><td><a href="reme/memory/file_based/tools/memory_search.py">MemorySearch</a> — 向量 + BM25 混合检索</td></tr>
.\README_ZH.md:94 - <tr><td rowspan="2">会话内存</td><td><code>get_in_memory_memory</code></td><td>💾 创建会话内存实例</td><td>返回 ReMeInMemoryMemory，自动配置 dialog_path 实现对话持久化</td></tr>
.\README_ZH.md:155 - memory_compact_threshold=90000,  # 触发压缩的阈值（tokens）
.\README_ZH.md:156 - memory_compact_reserve=10000,  # 保留的近期消息 token 数
.\README_ZH.md:160 - summary = await reme.compact_memory(
.\README_ZH.md:178 - memory_compact_reserve=10000,
.\README_ZH.md:184 - summary_result = await reme.summary_memory(
.\README_ZH.md:190 - result = await reme.memory_search(query="Python 版本偏好", max_results=5)
.\README_ZH.md:193 - from reme.memory.file_based.reme_in_memory_memory import ReMeInMemoryMemory
.\README_ZH.md:194 - memory = reme.get_in_memory_memory()  # 自动配置 dialog_path
.\README_ZH.md:197 - token_stats = await memory.estimate_tokens(max_input_length=128000)
.\README_ZH.md:218 - [CoPaw MemoryManager](https://github.com/agentscope-ai/CoPaw/blob/main/src/copaw/agents/memory/memory_manager.py) 继承
.\README_ZH.md:356 - C[content] --> G[get_memory<br>exclude_mark=COMPRESSED]
.\README_ZH.md:464 - result = await reme.summarize_memory(
.\README_ZH.md:472 - memories = await reme.retrieve_memory(
.\README_ZH.md:480 - memory_node = await reme.add_memory(
... and 13 more

## benchmark\appworld\appworld_react_agent.py
benchmark\appworld\appworld_react_agent.py:42 - use_memory: bool = False,
benchmark\appworld\appworld_react_agent.py:43 - memory_base_url: str = "http://0.0.0.0:8002/",
benchmark\appworld\appworld_react_agent.py:44 - use_memory_addition: bool = False,
benchmark\appworld\appworld_react_agent.py:45 - use_memory_deletion: bool = False,
benchmark\appworld\appworld_react_agent.py:59 - self.use_memory: bool = use_memory
benchmark\appworld\appworld_react_agent.py:60 - self.use_memory_addition: bool = use_memory_addition if use_memory else False
benchmark\appworld\appworld_react_agent.py:61 - self.use_memory_deletion: bool = use_memory_deletion if use_memory else False
benchmark\appworld\appworld_react_agent.py:67 - self.memory_base_url: str = memory_base_url
benchmark\appworld\appworld_react_agent.py:70 - self.retrieved_memory_list: List[List[List[Any]]] = [[] for _ in range(num_trials)]
benchmark\appworld\appworld_react_agent.py:97 - def prompt_messages(self, run_id, task_index, previous_memories: None, world: AppWorld):
benchmark\appworld\appworld_react_agent.py:106 - if self.use_memory:
benchmark\appworld\appworld_react_agent.py:108 - response = self.get_memory(world.task.instruction)
benchmark\appworld\appworld_react_agent.py:109 - if response and "memory_list" in response["metadata"]:
benchmark\appworld\appworld_react_agent.py:110 - self.retrieved_memory_list[run_id][task_index] = response["metadata"]["memory_list"]
benchmark\appworld\appworld_react_agent.py:111 - task_memory = re.sub(r"\bMemory\s*(\d+)\s*[:]", r"Experience \1:", response["answer"])
benchmark\appworld\appworld_react_agent.py:112 - logger.info(f"loaded task_memory: {task_memory}")
benchmark\appworld\appworld_react_agent.py:121 - for i, memory in enumerate(previous_memories, 1):
benchmark\appworld\appworld_react_agent.py:122 - condition = memory["when_to_use"]
benchmark\appworld\appworld_react_agent.py:123 - memory_content = memory["content"]
benchmark\appworld\appworld_react_agent.py:124 - memory_text = f"Experience {i}:\n When to use: {condition}\n Content: {memory_content}\n"
... and 20 more

## benchmark\appworld\quickstart.md
benchmark\appworld\quickstart.md:56 - Launch the ReMe service to enable memory library functionality:
benchmark\appworld\quickstart.md:79 - ### 1. Test: With Memory vs Without Memory
benchmark\appworld\quickstart.md:81 - Run the main experiment script to compare performance with and without memory:
benchmark\appworld\quickstart.md:89 - - Compares agent performance with ReMe memory (`use_memory=True`) vs without memory
benchmark\appworld\quickstart.md:100 - - `use_memory`: Whether to use ReMe memory library (default: True)
benchmark\appworld\quickstart.md:101 - - `use_memory_addition`: Whether to enable selective addition (default: False)
benchmark\appworld\quickstart.md:102 - - `use_memory_deletion`: Whether to enable utility-based deletion (default: False)

## benchmark\appworld\run_appworld.py
benchmark\appworld\run_appworld.py:28 - use_memory: bool = False,
benchmark\appworld\run_appworld.py:29 - memory_base_url: str = "http://0.0.0.0:8002/",
benchmark\appworld\run_appworld.py:30 - use_memory_addition: bool = False,
benchmark\appworld\run_appworld.py:31 - use_memory_deletion: bool = False,
benchmark\appworld\run_appworld.py:77 - use_memory=use_memory,
benchmark\appworld\run_appworld.py:78 - memory_base_url=memory_base_url,
benchmark\appworld\run_appworld.py:79 - use_memory_addition=use_memory_addition,
benchmark\appworld\run_appworld.py:80 - use_memory_deletion=use_memory_deletion,
benchmark\appworld\run_appworld.py:122 - use_memory=use_memory,
benchmark\appworld\run_appworld.py:123 - memory_base_url=memory_base_url,
benchmark\appworld\run_appworld.py:124 - use_memory_addition=use_memory_addition,
benchmark\appworld\run_appworld.py:125 - use_memory_deletion=use_memory_deletion,
benchmark\appworld\run_appworld.py:145 - def load_memory(path: str = "docs/library", api_url: str = "http://0.0.0.0:8002/"):
benchmark\appworld\run_appworld.py:146 - """Load memories from disk into the vector store"""
benchmark\appworld\run_appworld.py:148 - url=f"{api_url}load_memory",
benchmark\appworld\run_appworld.py:157 - print(f"Memory loaded from {path}")
benchmark\appworld\run_appworld.py:168 - use_memory = True
benchmark\appworld\run_appworld.py:169 - use_memory_addition = False
benchmark\appworld\run_appworld.py:170 - use_memory_deletion = False
benchmark\appworld\run_appworld.py:171 - memory_base_url = "http://0.0.0.0:8002/"
... and 6 more

## benchmark\bfcl\bfcl_agent.py
benchmark\bfcl\bfcl_agent.py:70 - use_memory: bool = False,
benchmark\bfcl\bfcl_agent.py:71 - use_memory_addition: bool = False,
benchmark\bfcl\bfcl_agent.py:72 - use_memory_deletion: bool = False,
benchmark\bfcl\bfcl_agent.py:76 - memory_base_url: str = "http://0.0.0.0:8002/",
benchmark\bfcl\bfcl_agent.py:91 - self.use_memory: bool = use_memory
benchmark\bfcl\bfcl_agent.py:92 - self.use_memory_addition: bool = use_memory_addition if use_memory else False
benchmark\bfcl\bfcl_agent.py:93 - self.use_memory_deletion: bool = use_memory_deletion if use_memory else False
benchmark\bfcl\bfcl_agent.py:97 - self.memory_base_url: str = memory_base_url
benchmark\bfcl\bfcl_agent.py:102 - self.retrieved_memory_list: List[List[List[Any]]] = [[] for _ in range(num_trials)]
benchmark\bfcl\bfcl_agent.py:123 - def update_task_history_with_memory(self, run_id, task_index, previous_memories: None):
benchmark\bfcl\bfcl_agent.py:127 - response = self.get_memory(query)
benchmark\bfcl\bfcl_agent.py:128 - if response and "memory_list" in response["metadata"]:
benchmark\bfcl\bfcl_agent.py:129 - self.retrieved_memory_list[run_id][task_index] = response["metadata"]["memory_list"]
benchmark\bfcl\bfcl_agent.py:130 - task_memory = re.sub(r"\bMemory\s*(\d+)\s*[:]", r"Experience \1 :", response["answer"])
benchmark\bfcl\bfcl_agent.py:131 - logger.info(f"loaded task_memory: {task_memory}")
benchmark\bfcl\bfcl_agent.py:132 - self.history[run_id][task_index][0] = self.get_query_with_memory(query, task_memory)
benchmark\bfcl\bfcl_agent.py:135 - for i, memory in enumerate(previous_memories, 1):
benchmark\bfcl\bfcl_agent.py:136 - condition = memory["when_to_use"]
benchmark\bfcl\bfcl_agent.py:137 - memory_content = memory["content"]
benchmark\bfcl\bfcl_agent.py:138 - memory_text = f"Experience {i} :\n When to use: {condition}\n Content: {memory_content}\n"
... and 24 more

## benchmark\bfcl\init_task_memory_pool.py
benchmark\bfcl\init_task_memory_pool.py:123 - response = requests.post(f"{service_url}/summary_task_memory", json=request_data)
benchmark\bfcl\init_task_memory_pool.py:140 - service_url: memory summarizer service URL
benchmark\bfcl\init_task_memory_pool.py:160 - if "memory_list" in result["metadata"]:
benchmark\bfcl\init_task_memory_pool.py:161 - print(f'✅ Group {group_index} processed: {result["metadata"].get("memory_list", 0)}')
benchmark\bfcl\init_task_memory_pool.py:162 - memory_list = result["metadata"].get("memory_list", [])
benchmark\bfcl\init_task_memory_pool.py:163 - response = requests.post(url=f"{service_url}/add_task_memory", json={"memory_list": memory_list})
benchmark\bfcl\init_task_memory_pool.py:210 - total_memories = sum(len(r["metadata"].get("memory_list", [])) for r in results if "memory_list" in r["metadata"])

## benchmark\bfcl\quickstart.md
benchmark\bfcl\quickstart.md:61 - <summary>Option: init the task memory pool from scratch</summary>
benchmark\bfcl\quickstart.md:63 - - First, collect agent trajectories on training data set without task memory:
benchmark\bfcl\quickstart.md:66 - # important: num_runs = 8, use_memory = False, experiment_suffix="wo-memory", data_path="data/multiturn_data_base_train.jsonl"
benchmark\bfcl\quickstart.md:70 - - Second, using ReMe to construct the initial task memory pool:
benchmark\bfcl\quickstart.md:81 - Now you have inited the task memory pool using `local` backend. Then, run the following `curl` command to dump the memory library:
benchmark\bfcl\quickstart.md:83 - curl -X POST "http://0.0.0.0:8002/dump_memory" \
benchmark\bfcl\quickstart.md:90 - - Next time, you can import this previously exported task memory data to populate the new started workspace with existing knowledge:
benchmark\bfcl\quickstart.md:92 - curl -X POST "http://0.0.0.0:8002/load_memory" \
benchmark\bfcl\quickstart.md:103 - Run you can compare agent performance on the validation set with task memory (`use_memory=True`) and without task memory:

## benchmark\bfcl\run_bfcl.py
benchmark\bfcl\run_bfcl.py:25 - use_memory: bool = False,
benchmark\bfcl\run_bfcl.py:26 - memory_base_url: str = "http://0.0.0.0:8002/",
benchmark\bfcl\run_bfcl.py:27 - use_memory_addition: bool = True,
benchmark\bfcl\run_bfcl.py:28 - use_memory_deletion: bool = False,
benchmark\bfcl\run_bfcl.py:60 - use_memory=use_memory,
benchmark\bfcl\run_bfcl.py:61 - memory_base_url=memory_base_url,
benchmark\bfcl\run_bfcl.py:62 - use_memory_addition=use_memory_addition,
benchmark\bfcl\run_bfcl.py:63 - use_memory_deletion=use_memory_deletion,
benchmark\bfcl\run_bfcl.py:96 - def load_memory(path: str = "docs/library", api_url: str = "http://0.0.0.0:8002/"):
benchmark\bfcl\run_bfcl.py:97 - """Load memories from disk into the vector store"""
benchmark\bfcl\run_bfcl.py:99 - url=f"{api_url}load_memory",
benchmark\bfcl\run_bfcl.py:108 - print(f"Memory loaded from {path}")
benchmark\bfcl\run_bfcl.py:121 - use_memory = True
benchmark\bfcl\run_bfcl.py:122 - use_memory_addition = False
benchmark\bfcl\run_bfcl.py:123 - use_memory_deletion = False
benchmark\bfcl\run_bfcl.py:124 - memory_base_url = "http://0.0.0.0:8003/"
benchmark\bfcl\run_bfcl.py:126 - if use_memory:
benchmark\bfcl\run_bfcl.py:135 - experiment_suffix="w-fixed-memory",
benchmark\bfcl\run_bfcl.py:140 - use_memory=use_memory,
benchmark\bfcl\run_bfcl.py:141 - memory_base_url=memory_base_url,
... and 2 more

## benchmark\halumem\eval_reme.py
benchmark\halumem\eval_reme.py:189 - async def answer_question_with_memories(
benchmark\halumem\eval_reme.py:234 - async def evaluation_for_memory_accuracy(
benchmark\halumem\eval_reme.py:238 - candidate_memory: dict,
benchmark\halumem\eval_reme.py:247 - golden_memories: List of golden memory points from the session
benchmark\halumem\eval_reme.py:248 - candidate_memory: The extracted memory to evaluate
benchmark\halumem\eval_reme.py:260 - candidate_content = candidate_memory.get("content", candidate_memory.get("memory_content", str(candidate_memory)))
benchmark\halumem\eval_reme.py:266 - candidate_memory=candidate_content,
benchmark\halumem\eval_reme.py:277 - async def evaluation_for_memory_integrity(
benchmark\halumem\eval_reme.py:280 - expected_memory_point: dict,
benchmark\halumem\eval_reme.py:287 - extracted_memories: List of extracted memory dicts
benchmark\halumem\eval_reme.py:288 - expected_memory_point: The expected memory point dict with 'memory_content' field
benchmark\halumem\eval_reme.py:300 - expected_content = expected_memory_point.get("memory_content", str(expected_memory_point))
benchmark\halumem\eval_reme.py:305 - expected_memory_point=expected_content,
benchmark\halumem\eval_reme.py:320 - key_memory_points: str,
benchmark\halumem\eval_reme.py:332 - key_memory_points: The memory points used to derive the reference answer.
benchmark\halumem\eval_reme.py:333 - response: The answer produced by the memory system.
benchmark\halumem\eval_reme.py:344 - key_memory_points=key_memory_points,
benchmark\halumem\eval_reme.py:357 - # ==================== Memory Operations ====================
benchmark\halumem\eval_reme.py:360 - class MemoryProcessor:
benchmark\halumem\eval_reme.py:377 - async def add_memories(
... and 74 more

## benchmark\halumem\eval_reme.yaml
benchmark\halumem\eval_reme.yaml:54 - You are an intelligent memory assistant tasked with retrieving accurate information from conversation memories.
benchmark\halumem\eval_reme.yaml:57 - You have access to memories from two speakers in a conversation. These memories contain
benchmark\halumem\eval_reme.yaml:61 - 1. Carefully analyze all provided memories from both speakers
benchmark\halumem\eval_reme.yaml:66 - calculate the actual date based on the memory timestamp. For example, if a memory from
benchmark\halumem\eval_reme.yaml:71 - 7. Focus only on the content of the memories from both speakers. Do not confuse character
benchmark\halumem\eval_reme.yaml:91 - You are an intelligent memory assistant tasked with retrieving accurate information from conversation memories.
benchmark\halumem\eval_reme.yaml:94 - You have access to memories from a conversation. These memories contain
benchmark\halumem\eval_reme.yaml:103 - calculate the actual date based on the memory timestamp. For example, if a memory from
benchmark\halumem\eval_reme.yaml:132 - You have access to memories from two speakers in a conversation. These memories contain
benchmark\halumem\eval_reme.yaml:140 - 5. If the question involves time references (like "last year", "two months ago", etc.), you **must** calculate the actual date based on the memory's timestamp. For example, if a memory from 4 May 2022 mentions "went to India last year," then the trip occurred in 2021.
benchmark\halumem\eval_reme.yaml:147 - 2. Synthesize findings from multiple memories if a single entry is insufficient.
benchmark\halumem\eval_reme.yaml:150 - 5. Formulate a precise, concise answer based on the evidence from the memories (and allowed world knowledge).
benchmark\halumem\eval_reme.yaml:161 - You are an intelligent memory assistant tasked with retrieving accurate information from conversation memories.
benchmark\halumem\eval_reme.yaml:164 - You have access to memories from two speakers in a conversation. These memories contain
benchmark\halumem\eval_reme.yaml:168 - 1. Carefully analyze all provided memories from both speakers
benchmark\halumem\eval_reme.yaml:172 - 5. If there is a question about time references (like "last year", "two months ago", etc.), calculate the actual date based on the memory timestamp. For example, if a memory from 4 May 2022 mentions "went to India last year," then the trip occurred in 2021.
benchmark\halumem\eval_reme.yaml:174 - 7. Focus only on the content of the memories from both speakers. Do not confuse character names mentioned in memories with the actual users who created those memories.
benchmark\halumem\eval_reme.yaml:193 - EVALUATION_PROMPT_FOR_MEMORY_INTEGRITY: |
benchmark\halumem\eval_reme.yaml:203 - 2. **Expected Memory Point:**
benchmark\halumem\eval_reme.yaml:225 - * For **compound Expected Memory Points** (with multiple elements such as person/event/time/location/preference, etc.):
... and 27 more

## benchmark\locomo\eval_reme.py
benchmark\locomo\eval_reme.py:205 - # ==================== Memory Operations ====================
benchmark\locomo\eval_reme.py:208 - class MemoryProcessor:
benchmark\locomo\eval_reme.py:223 - async def add_memories(
benchmark\locomo\eval_reme.py:244 - result = await self.reme.summarize_memory(
benchmark\locomo\eval_reme.py:261 - async def search_memory(
benchmark\locomo\eval_reme.py:276 - # Retrieve memories from ReMe using new API
benchmark\locomo\eval_reme.py:277 - result = await self.reme.retrieve_memory(
benchmark\locomo\eval_reme.py:287 - # Extract memories from response
benchmark\locomo\eval_reme.py:292 - # Use LLM to generate structured answer from memories
benchmark\locomo\eval_reme.py:312 - async def answer_question_with_memories(
benchmark\locomo\eval_reme.py:371 - generated_answer: The answer produced by the memory system.
benchmark\locomo\eval_reme.py:416 - def __init__(self, memory_processor: MemoryProcessor, reme: ReMe, top_k: int, eval_model_name: str = "qwen3-max"):
benchmark\locomo\eval_reme.py:417 - self.memory_processor = memory_processor
benchmark\locomo\eval_reme.py:434 - answer_dict, agent_messages, duration_ms = await self.memory_processor.search_memory(
benchmark\locomo\eval_reme.py:615 - "search_memory_duration_time": search_duration / 1000 / 60,
benchmark\locomo\eval_reme.py:649 - "return_memory_nodes": True,
benchmark\locomo\eval_reme.py:666 - self.memory_processor = MemoryProcessor(
benchmark\locomo\eval_reme.py:733 - extracted_memories, agent_messages, duration_ms = await self.memory_processor.add_memories(
benchmark\locomo\eval_reme.py:798 - meta_memory_path = Path(f"meta_memory/{self.reme.default_vector_store.collection_name}")
benchmark\locomo\eval_reme.py:799 - if meta_memory_path.exists():
... and 4 more

## benchmark\locomo\eval_reme.yaml
benchmark\locomo\eval_reme.yaml:74 - ### Step 1: Create Memory Draft
benchmark\locomo\eval_reme.yaml:76 - - For each memory draft, fill in the required parameters:
benchmark\locomo\eval_reme.yaml:78 - * `memory_content`: concise memory content extracted from the conversation
benchmark\locomo\eval_reme.yaml:84 - Review each memory draft from Step 1 and compare it with the retrieved historical memories, then use `add_memory` to manage all memories in one call:
benchmark\locomo\eval_reme.yaml:86 - - For each new memory, fill in the required parameters:
benchmark\locomo\eval_reme.yaml:88 - * `memory_content`: memory content
benchmark\locomo\eval_reme.yaml:144 - **Tool**: `retrieve_memory` (without time constraints)
benchmark\locomo\eval_reme.yaml:163 - - Extract `history_id` from retrieved memory references
benchmark\locomo\eval_reme.yaml:172 - - Always cite sources with timestamps: `[timestamp] Memory content`

## benchmark\longmemeval\compute_stats.py
benchmark\longmemeval\compute_stats.py:148 - def compute_memory_stats(results: list[dict]) -> dict[str, Any]:
benchmark\longmemeval\compute_stats.py:157 - memory_counts = []
benchmark\longmemeval\compute_stats.py:180 - "memories_per_question": compute_stats(memory_counts),
benchmark\longmemeval\compute_stats.py:188 - memory_stats: dict,
benchmark\longmemeval\compute_stats.py:196 - memory_stats: Memory statistics
benchmark\longmemeval\compute_stats.py:235 - print("  Memory Summarization:")
benchmark\longmemeval\compute_stats.py:240 - print("  Memory Retrieval:")
benchmark\longmemeval\compute_stats.py:248 - print("\n📝 Memory Statistics:")
benchmark\longmemeval\compute_stats.py:249 - mem = memory_stats["memories_per_question"]
benchmark\longmemeval\compute_stats.py:250 - sess = memory_stats["sessions_per_question"]
benchmark\longmemeval\compute_stats.py:267 - memory_stats: dict,
benchmark\longmemeval\compute_stats.py:275 - memory_stats: Memory statistics
benchmark\longmemeval\compute_stats.py:281 - "memory": memory_stats,
benchmark\longmemeval\compute_stats.py:310 - memory_stats = compute_memory_stats(results)
benchmark\longmemeval\compute_stats.py:326 - description="Compute statistics from LongMemEval evaluation results",

## benchmark\longmemeval\eval_longmemeval_reme.py
benchmark\longmemeval\eval_longmemeval_reme.py:252 - async def answer_question_with_memories(
benchmark\longmemeval\eval_longmemeval_reme.py:297 - # ==================== Memory Operations ====================
benchmark\longmemeval\eval_longmemeval_reme.py:300 - class MemoryProcessor:
benchmark\longmemeval\eval_longmemeval_reme.py:319 - async def add_memories(
benchmark\longmemeval\eval_longmemeval_reme.py:340 - result = await self.reme.summarize_memory(
benchmark\longmemeval\eval_longmemeval_reme.py:357 - async def search_memory(
benchmark\longmemeval\eval_longmemeval_reme.py:372 - # Retrieve memories from ReMe using new API
benchmark\longmemeval\eval_longmemeval_reme.py:373 - result = await self.reme.retrieve_memory(
benchmark\longmemeval\eval_longmemeval_reme.py:384 - # Extract memories from response
benchmark\longmemeval\eval_longmemeval_reme.py:389 - # Use LLM to generate structured answer from memories
benchmark\longmemeval\eval_longmemeval_reme.py:409 - class LongMemEvalJudge:
benchmark\longmemeval\eval_longmemeval_reme.py:541 - class LongMemEvalEvaluator:
benchmark\longmemeval\eval_longmemeval_reme.py:625 - entry: A question entry from LongMemEval dataset
benchmark\longmemeval\eval_longmemeval_reme.py:658 - memory_processor = MemoryProcessor(
benchmark\longmemeval\eval_longmemeval_reme.py:666 - judge = LongMemEvalJudge(reme, self.config.eval_model_name)
benchmark\longmemeval\eval_longmemeval_reme.py:671 - # Step 2: Process all haystack sessions to build memory
benchmark\longmemeval\eval_longmemeval_reme.py:688 - extracted_memories, agent_messages, duration_ms = await memory_processor.add_memories(
benchmark\longmemeval\eval_longmemeval_reme.py:698 - # Step 3: Search memory and answer question
benchmark\longmemeval\eval_longmemeval_reme.py:700 - answer_dict, retrieve_messages, retrieve_duration_ms = await memory_processor.search_memory(
benchmark\longmemeval\eval_longmemeval_reme.py:889 - print("  Memory Summarization:")
... and 4 more

## benchmark\longmemeval\eval_longmemeval_reme_retrieve.py
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:216 - async def answer_question_with_memories(
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:261 - # ==================== Memory Operations ====================
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:281 - async def search_memory(
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:296 - # Retrieve memories from ReMe using new API
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:297 - result = await self.reme.retrieve_memory(
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:308 - # Extract memories from response
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:313 - # Use LLM to generate structured answer from memories
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:333 - class LongMemEvalJudge:
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:459 - class LongMemEvalRetrieveEvaluator:
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:505 - self.judge = LongMemEvalJudge(self.reme, config.eval_model_name)
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:522 - entry: A question entry from LongMemEval dataset
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:551 - answer_dict, retrieve_messages, retrieve_duration_ms = await self.retrieve_processor.search_memory(
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:606 - # NOTE: Do NOT clear vector store - we assume memories are already there from previous summary run
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:636 - print("⚠️  NOTE: Assumes memories are already in vector store from previous summary run")
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:730 - print("  Memory Retrieval:")
benchmark\longmemeval\eval_longmemeval_reme_retrieve.py:782 - async with LongMemEvalRetrieveEvaluator(config) as evaluator:

## benchmark\longmemeval\eval_reme.yaml
benchmark\longmemeval\eval_reme.yaml:54 - You are an intelligent memory assistant tasked with retrieving accurate information from conversation memories.
benchmark\longmemeval\eval_reme.yaml:57 - You have access to memories from two speakers in a conversation. These memories contain
benchmark\longmemeval\eval_reme.yaml:61 - 1. Carefully analyze all provided memories from both speakers
benchmark\longmemeval\eval_reme.yaml:66 - calculate the actual date based on the memory timestamp. For example, if a memory from
benchmark\longmemeval\eval_reme.yaml:71 - 7. Focus only on the content of the memories from both speakers. Do not confuse character
benchmark\longmemeval\eval_reme.yaml:91 - You are an intelligent memory assistant tasked with retrieving accurate information from conversation memories.
benchmark\longmemeval\eval_reme.yaml:94 - You have access to memories from a conversation. These memories contain
benchmark\longmemeval\eval_reme.yaml:103 - calculate the actual date based on the memory timestamp. For example, if a memory from
benchmark\longmemeval\eval_reme.yaml:132 - You have access to memories from two speakers in a conversation. These memories contain
benchmark\longmemeval\eval_reme.yaml:140 - 5. If the question involves time references (like "last year", "two months ago", etc.), you **must** calculate the actual date based on the memory's timestamp. For example, if a memory from 4 May 2022 mentions "went to India last year," then the trip occurred in 2021.
benchmark\longmemeval\eval_reme.yaml:147 - 2. Synthesize findings from multiple memories if a single entry is insufficient.
benchmark\longmemeval\eval_reme.yaml:150 - 5. Formulate a precise, concise answer based on the evidence from the memories (and allowed world knowledge).
benchmark\longmemeval\eval_reme.yaml:161 - You are an intelligent memory assistant tasked with retrieving accurate information from conversation memories.
benchmark\longmemeval\eval_reme.yaml:164 - You have access to memories from two speakers in a conversation. These memories contain
benchmark\longmemeval\eval_reme.yaml:168 - 1. Carefully analyze all provided memories from both speakers
benchmark\longmemeval\eval_reme.yaml:172 - 5. If there is a question about time references (like "last year", "two months ago", etc.), calculate the actual date based on the memory timestamp. For example, if a memory from 4 May 2022 mentions "went to India last year," then the trip occurred in 2021.
benchmark\longmemeval\eval_reme.yaml:174 - 7. Focus only on the content of the memories from both speakers. Do not confuse character names mentioned in memories with the actual users who created those memories.
benchmark\longmemeval\eval_reme.yaml:193 - EVALUATION_PROMPT_FOR_MEMORY_INTEGRITY: |
benchmark\longmemeval\eval_reme.yaml:203 - 2. **Expected Memory Point:**
benchmark\longmemeval\eval_reme.yaml:225 - * For **compound Expected Memory Points** (with multiple elements such as person/event/time/location/preference, etc.):
... and 27 more

## benchmark\longmemeval\eval_tools.py
benchmark\longmemeval\eval_tools.py:16 - async def evaluation_for_memory_integrity(
benchmark\longmemeval\eval_tools.py:19 - target_memory: str,
benchmark\longmemeval\eval_tools.py:27 - extract_memories: A formatted string concatenating all memory points extracted by the memory system.
benchmark\longmemeval\eval_tools.py:28 - target_memory: The target key memory point.
benchmark\longmemeval\eval_tools.py:34 - prompt = _PROMPTS["EVALUATION_PROMPT_FOR_MEMORY_INTEGRITY"].format(
benchmark\longmemeval\eval_tools.py:36 - expected_memory_point=target_memory,
benchmark\longmemeval\eval_tools.py:47 - async def evaluation_for_memory_accuracy(
benchmark\longmemeval\eval_tools.py:51 - candidate_memory: str,
benchmark\longmemeval\eval_tools.py:60 - golden_memories: The core memory points for this dialogue segment in the evaluation set .
benchmark\longmemeval\eval_tools.py:61 - candidate_memory: A specific memory point extracted by the memory system being evaluated.
benchmark\longmemeval\eval_tools.py:67 - prompt = _PROMPTS["EVALUATION_PROMPT_FOR_MEMORY_ACCURACY"].format(
benchmark\longmemeval\eval_tools.py:70 - candidate_memory=candidate_memory,
benchmark\longmemeval\eval_tools.py:81 - async def evaluation_for_update_memory(
benchmark\longmemeval\eval_tools.py:84 - target_update_memory: str,
benchmark\longmemeval\eval_tools.py:85 - original_memory: str,
benchmark\longmemeval\eval_tools.py:93 - extract_memories: A formatted string concatenating all memory points extracted by the memory system .
benchmark\longmemeval\eval_tools.py:94 - target_update_memory: The target updated memory point.
benchmark\longmemeval\eval_tools.py:95 - original_memory: A formatted string concatenating all original memory points corresponding.
benchmark\longmemeval\eval_tools.py:101 - prompt = _PROMPTS["EVALUATION_PROMPT_FOR_UPDATE_MEMORY"].format(
benchmark\longmemeval\eval_tools.py:103 - updated_memory=target_update_memory,
... and 10 more

## docs\index.md
docs\index.md:15 - # ReMe: Memory Management Kit for Agents
docs\index.md:30 - Agent memory can be viewed as:
docs\index.md:33 - Agent Memory = Long-Term Memory + Short-Term Memory
docs\index.md:34 - = (Personal + Task + Tool) Memory + (Working Memory)
docs\index.md:45 - ReMe integrates three complementary memory capabilities:
docs\index.md:47 - :::{admonition} Task Memory/Experience
docs\index.md:59 - Learn more about how to use task memory from [task memory](task_memory/task_memory.md)
docs\index.md:61 - :::{admonition} Personal Memory
docs\index.md:67 - - **Contextual Adaptation**: Intelligent memory management based on time and context
docs\index.md:73 - Learn more about how to use personal memory from [personal memory](personal_memory/personal_memory.md)
docs\index.md:75 - :::{admonition} Tool Memory
docs\index.md:87 - Learn more about how to use tool memory from [tool memory](tool_memory/tool_memory.md)
docs\index.md:89 - :::{admonition} Working Memory
docs\index.md:92 - Short‑term contextual memory for long‑running agents via **message offload & reload**:
docs\index.md:95 - - **Message Reload**: Search (`grep_working_memory`) and read (`read_working_memory`) offloaded content on demand
docs\index.md:98 - - Message offload overview: [Message Offload](work_memory/message_offload.md)
docs\index.md:99 - - Offload / reload operators: [Message Offload Ops](work_memory/message_offload_ops.md), [Message Reload Ops](work_memory/message_reload_ops.md)
docs\index.md:102 - - Working memory quick start: [Working Memory Quick Start](cookbook/working/quick_start.md)
docs\index.md:103 - - ReAct agent with working memory: [react_agent_with_working_memory.py](../cookbook/working_memory/react_agent_with_working_memory.py)
docs\index.md:104 - - Runnable demo: [work_memory_demo.py](../cookbook/working_memory/work_memory_demo.py)
... and 5 more

## docs\mcp_quick_start.md
docs\mcp_quick_start.md:181 - The `summary_task_memory` tool transforms conversation trajectories into valuable task memories:
docs\mcp_quick_start.md:210 - # Extract memory list from response
docs\mcp_quick_start.md:211 - memory_list = response_data.get("metadata", {}).get("memory_list", [])
docs\mcp_quick_start.md:212 - print(f"Created memories: {memory_list}")
docs\mcp_quick_start.md:215 - with open("task_memory.jsonl", "w") as f:
docs\mcp_quick_start.md:216 - f.write(json.dumps(memory_list, indent=2, ensure_ascii=False))
docs\mcp_quick_start.md:224 - The `retrieve_task_memory` tool allows you to retrieve relevant memories based on a query:
docs\mcp_quick_start.md:253 - print(f"Retrieved memory: {answer}")
docs\mcp_quick_start.md:257 - print(f"Error retrieving memory: {e}")
docs\mcp_quick_start.md:263 - Here's a complete example showing how to build a memory-augmented agent using the MCP client:
docs\mcp_quick_start.md:294 - """Generate task memories from conversation"""
docs\mcp_quick_start.md:306 - memory_list = response_data.get("metadata", {}).get("memory_list", [])
docs\mcp_quick_start.md:327 - async def memory_augmented_workflow():
docs\mcp_quick_start.md:338 - print("Creating memories from conversation")
docs\mcp_quick_start.md:339 - memory_list = await run_summary(client, messages)
docs\mcp_quick_start.md:344 - retrieved_memory = await run_retrieve(client, query1)
docs\mcp_quick_start.md:346 - # Step 4: Run agent with memory-augmented query
docs\mcp_quick_start.md:348 - augmented_query = f"{retrieved_memory}\n\nUser Question:\n{query1}"
docs\mcp_quick_start.md:358 - print(f"Memory-augmented response: {final_answer}")
docs\mcp_quick_start.md:391 - # Load memories from disk

## docs\quick_start.md
docs\quick_start.md:50 - response = requests.post("http://localhost:8002/summary_task_memory", json={
docs\quick_start.md:58 - response = requests.post("http://localhost:8002/retrieve_task_memory", json={
docs\quick_start.md:75 - "vector_store.default.backend=memory"
docs\quick_start.md:79 - name="summary_task_memory",
docs\quick_start.md:94 - name="retrieve_task_memory",
docs\quick_start.md:109 - curl -X POST http://localhost:8002/summary_task_memory \
docs\quick_start.md:119 - curl -X POST http://localhost:8002/retrieve_task_memory \
docs\quick_start.md:132 - fetch("http://localhost:8002/summary_task_memory", {
docs\quick_start.md:148 - fetch("http://localhost:8002/retrieve_task_memory", {
docs\quick_start.md:173 - # Memory Integration: Learn from user interactions
docs\quick_start.md:174 - response = requests.post("http://localhost:8002/summary_personal_memory", json={
docs\quick_start.md:187 - # Memory Retrieval: Get personal memory fragments
docs\quick_start.md:188 - response = requests.post("http://localhost:8002/retrieve_personal_memory", json={
docs\quick_start.md:205 - "vector_store.default.backend=memory"
docs\quick_start.md:207 - # Memory Integration: Learn from user interactions
docs\quick_start.md:209 - name="summary_personal_memory",
docs\quick_start.md:223 - # Memory Retrieval: Get personal memory fragments
docs\quick_start.md:225 - name="retrieve_personal_memory",
docs\quick_start.md:239 - # Memory Integration: Learn from user interactions
docs\quick_start.md:240 - curl -X POST http://localhost:8002/summary_personal_memory \
... and 15 more

## docs\README_0_2_x.md
docs\README_0_2_x.md:27 - Agent memory can be viewed as:
docs\README_0_2_x.md:30 - Agent Memory = Long-Term Memory + Short-Term Memory
docs\README_0_2_x.md:31 - = (Personal + Task + Tool) Memory + (Working Memory)
docs\README_0_2_x.md:34 - - **Personal Memory**: Understand user preferences and adapt to context
docs\README_0_2_x.md:35 - - **Task Memory**: Learn from experience and perform better on similar tasks
docs\README_0_2_x.md:36 - - **Tool Memory**: Optimize tool selection and parameter usage based on historical performance
docs\README_0_2_x.md:37 - - **Working Memory**: Manage short-term context for long-running agents without context overflow
docs\README_0_2_x.md:43 - - **[2026-02]** 💻 ReMeCli: A terminal-based AI chat assistant with built-in memory management. Automatically compacts long conversations into summaries to free up context space, and persists important information as Markdown files for retrieval in future sessions. Memory design inspired by [OpenClaw](https://github.com/openclaw/openclaw).
docs\README_0_2_x.md:60 - - **[2025-12]** 📄 Our procedural (task) memory paper has been released on [arXiv](https://arxiv.org/abs/2512.10696)
docs\README_0_2_x.md:63 - - **[2025-10]** 🔧 Tool Memory: data-driven tool selection and parameter optimization ([Guide](docs/tool_memory/tool_memory.md))
docs\README_0_2_x.md:79 - ReMe provides a **modular memory management kit** with pluggable components that can be integrated into any agent framework. The system consists of:
docs\README_0_2_x.md:90 - Learn more about how to use task memory from [task memory](docs/task_memory/task_memory.md)
docs\README_0_2_x.md:97 - - **Contextual Adaptation**: Intelligent memory management based on time and context
docs\README_0_2_x.md:101 - Learn more about how to use personal memory from [personal memory](docs/personal_memory/personal_memory.md)
docs\README_0_2_x.md:112 - Learn more about how to use tool memory from [tool memory](docs/tool_memory/tool_memory.md)
docs\README_0_2_x.md:116 - Short‑term contextual memory for long‑running agents via **message offload & reload**:
docs\README_0_2_x.md:118 - - **Message Reload**: Search (`grep_working_memory`) and read (`read_working_memory`) offloaded content on demand
docs\README_0_2_x.md:120 - - Message offload overview: [Message Offload](docs/work_memory/message_offload.md)
docs\README_0_2_x.md:121 - - Offload / reload operators: [Message Offload Ops](docs/work_memory/message_offload_ops.md), [Message Reload Ops](docs/work_memory/message_reload_ops.md)
docs\README_0_2_x.md:123 - - Working memory quick start: [Working Memory Quick Start](docs/cookbook/working/quick_start.md)
... and 57 more

## docs\README_0_2_x_ZH.md
docs\README_0_2_x_ZH.md:31 - Agent Memory = Long-Term Memory + Short-Term Memory
docs\README_0_2_x_ZH.md:32 - = (Personal + Task + Tool) Memory + (Working Memory)
docs\README_0_2_x_ZH.md:193 - response = requests.post("http://localhost:8002/summary_task_memory", json={
docs\README_0_2_x_ZH.md:201 - response = requests.post("http://localhost:8002/retrieve_task_memory", json={
docs\README_0_2_x_ZH.md:219 - "vector_store.default.backend=memory"
docs\README_0_2_x_ZH.md:223 - name="summary_task_memory",
docs\README_0_2_x_ZH.md:238 - name="retrieve_task_memory",
docs\README_0_2_x_ZH.md:256 - curl -X POST http://localhost:8002/summary_task_memory \
docs\README_0_2_x_ZH.md:266 - curl -X POST http://localhost:8002/retrieve_task_memory \
docs\README_0_2_x_ZH.md:281 - response = requests.post("http://localhost:8002/summary_personal_memory", json={
docs\README_0_2_x_ZH.md:295 - response = requests.post("http://localhost:8002/retrieve_personal_memory", json={
docs\README_0_2_x_ZH.md:313 - "vector_store.default.backend=memory"
docs\README_0_2_x_ZH.md:317 - name="summary_personal_memory",
docs\README_0_2_x_ZH.md:333 - name="retrieve_personal_memory",
docs\README_0_2_x_ZH.md:351 - curl -X POST http://localhost:8002/summary_personal_memory \
docs\README_0_2_x_ZH.md:364 - curl -X POST http://localhost:8002/retrieve_personal_memory \
docs\README_0_2_x_ZH.md:397 - response = requests.post("http://localhost:8002/summary_tool_memory", json={
docs\README_0_2_x_ZH.md:403 - response = requests.post("http://localhost:8002/retrieve_tool_memory", json={
docs\README_0_2_x_ZH.md:420 - "vector_store.default.backend=memory"
docs\README_0_2_x_ZH.md:442 - name="summary_tool_memory",
... and 18 more

## docs\vector_store_api_guide.md
docs\vector_store_api_guide.md:32 - - **MemoryVectorStore** ([source code](https://github.com/flowllm-ai/flowllm/blob/main/flowllm/core/vector_store/memory_vector_store.py)): An in-memory implementation offering fast access speeds. Ideal for temporary data or testing scenarios.
docs\vector_store_api_guide.md:92 - - **store_dir**: Persistence directory (default: `./memory_vector_store`).
docs\vector_store_api_guide.md:131 - - **`backend`** (required): Vector store backend type. Options: `local`, `memory`, `chroma`, `qdrant`, `elasticsearch`.
docs\vector_store_api_guide.md:161 - **Implementation**: [`flowllm/core/vector_store/memory_vector_store.py`](https://github.com/flowllm-ai/flowllm/blob/main/flowllm/core/vector_store/memory_vector_store.py)
docs\vector_store_api_guide.md:166 - backend: memory
docs\vector_store_api_guide.md:169 - store_dir: "./memory_vector_store"  # Persistence directory (optional; default: "./memory_vector_store")
docs\vector_store_api_guide.md:173 - vector_store.default.backend=memory
docs\vector_store_api_guide.md:174 - vector_store.default.params.store_dir=./memory_vector_store
docs\vector_store_api_guide.md:353 - - **Development & Testing**: Use MemoryVectorStore or LocalVectorStore—no additional services required.

## docs\_toc.yml
docs\_toc.yml:11 - - caption: Personal Memory
docs\_toc.yml:13 - - file: personal_memory/personal_memory
docs\_toc.yml:14 - - file: personal_memory/personal_retrieve_ops
docs\_toc.yml:15 - - file: personal_memory/personal_summary_ops
docs\_toc.yml:17 - - caption: Task Memory
docs\_toc.yml:19 - - file: task_memory/task_memory
docs\_toc.yml:20 - - file: task_memory/task_retrieve_ops
docs\_toc.yml:21 - - file: task_memory/task_summary_ops
docs\_toc.yml:23 - - caption: Tool Memory
docs\_toc.yml:25 - - file: tool_memory/tool_memory
docs\_toc.yml:26 - - file: tool_memory/tool_retrieve_ops
docs\_toc.yml:27 - - file: tool_memory/tool_summary_ops
docs\_toc.yml:28 - - file: tool_memory/tool_bench
docs\_toc.yml:30 - - caption: Working Memory
docs\_toc.yml:32 - - file: work_memory/message_offload
docs\_toc.yml:33 - - file: work_memory/message_offload_ops
docs\_toc.yml:34 - - file: work_memory/message_reload_ops

## docs\cli\quick_start_en.md
docs\cli\quick_start_en.md:3 - ## Memory Management: Why Does AI Need This?
docs\cli\quick_start_en.md:28 - > Memory design inspired by the [OpenClaw](https://github.com/openclaw/openclaw) memory architecture.
docs\cli\quick_start_en.md:45 - - **Location**: `{working_dir}/MEMORY.md`
docs\cli\quick_start_en.md:53 - - **Location**: `{working_dir}/memory/YYYY-MM-DD.md`
docs\cli\quick_start_en.md:128 - Controls how context space is allocated and how memory is searched:
docs\cli\quick_start_en.md:175 - | `memory_store`   | Corresponding memory store config      |

## docs\cookbook\experiment_overview.md
docs\cookbook\experiment_overview.md:44 - We evaluated Tool Memory effectiveness using a controlled benchmark with three mock search tools using Qwen3-30B-Instruct:
docs\cookbook\experiment_overview.md:56 - You can find more details in [tool_bench.md](../tool_memory/tool_bench.md) and the implementation at [run_reme_tool_bench.py](https://github.com/agentscope-ai/ReMe/tree/main/cookbook/tool_memory/run_reme_tool_bench.py).

## docs\cookbook\faq.md
docs\cookbook\faq.md:2 - This document provides answers to frequently asked questions about our paper "[Remember Me, Refine Me: A Dynamic Procedural Memory Framework for Experience-Driven Agent Evolution](https://arxiv.org/pdf/2512.10696)".
docs\cookbook\faq.md:29 - |memory_base_url|""|"http://0.0.0.0:8002/"|"http://0.0.0.0:8002/"|
docs\cookbook\faq.md:39 - Taking Appworld as an example, you can refer to issues [#55](https://github.com/agentscope-ai/ReMe/issues/55), [#58](https://github.com/agentscope-ai/ReMe/issues/58). To reproduce the results in our paper, you can use our constructed memory data in [docs/library/paper_data](https://github.com/agentscope-ai/ReMe/tree/main/docs/library/paper_data/task).
docs\cookbook\faq.md:47 - - For Qwen3-series No-Memory performance on AppWorld, you can refer to issue [#49](https://github.com/agentscope-ai/ReMe/issues/49).

## docs\cookbook\frozenlake\quickstart.md
docs\cookbook\frozenlake\quickstart.md:58 - Launch the ReMe service to enable memory library functionality:
docs\cookbook\frozenlake\quickstart.md:80 - Run the main experiment script to test agent performance using existing memory:
docs\cookbook\frozenlake\quickstart.md:93 - ### 2. Advanced: Training + Testing (Memory Generation)
docs\cookbook\frozenlake\quickstart.md:111 - - `experiment_name`: Used as the workspace ID for task memory
docs\cookbook\frozenlake\quickstart.md:156 - - `./exp_result/*_test_no_memory.jsonl`: Test results without task memory
docs\cookbook\frozenlake\quickstart.md:157 - - `./exp_result/*_test_with_memory.jsonl`: Test results with task memory
docs\cookbook\frozenlake\quickstart.md:162 - The task memory system works as follows:
docs\cookbook\frozenlake\quickstart.md:164 - 1. **Memory Creation**: During training, successful trajectories are sent to the ReMe service
docs\cookbook\frozenlake\quickstart.md:165 - 2. **Memory Retrieval**: During testing, the agent queries relevant memories based on the current map
docs\cookbook\frozenlake\quickstart.md:166 - 3. **Memory Application**: The agent uses retrieved memories to guide its decision-making

## docs\cookbook\working\quick_start.md
docs\cookbook\working\quick_start.md:56 - The MCP service provides tools for working memory management including:
docs\cookbook\working\quick_start.md:57 - - `grep_working_memory`: Search for content in working memory
docs\cookbook\working\quick_start.md:58 - - `read_working_memory`: Read specific sections of working memory
docs\cookbook\working\quick_start.md:83 - 3. Working memory automatically compresses the context from ~24,586 tokens to ~1,565 tokens (compression ratio: 0.06)
docs\cookbook\working\quick_start.md:113 - - **HTTP Client**: For flow execution (memory summarization)
docs\cookbook\working\quick_start.md:121 - if tool_call.name in ["grep_working_memory", "read_working_memory"]:
docs\cookbook\working\quick_start.md:127 - > Note: `summary_working_memory` is **not** an MCP tool.
docs\cookbook\working\quick_start.md:134 - result = await http_client.execute_flow("summary_working_memory",
docs\cookbook\working\quick_start.md:142 - store_dir="./test_working_memory")
docs\cookbook\working\quick_start.md:147 - **This is the core of working memory management.** Before each LLM call:
docs\cookbook\working\quick_start.md:154 - - **`store_dir`**: Directory to store compressed memory
docs\cookbook\working\quick_start.md:167 - result = await http_client.execute_flow("summary_working_memory", ...)
docs\cookbook\working\quick_start.md:185 - 1. **Compress**: Summarize working memory to reduce context size
docs\cookbook\working\quick_start.md:204 - - The model name is specified in `work_memory_demo.py`, for example:
docs\cookbook\working\quick_start.md:223 - You can customize the working memory behavior by adjusting parameters in the `summary_working_memory` call:
docs\cookbook\working\quick_start.md:235 - 4. **Memory errors**: Adjust `max_total_tokens` based on your available memory

## docs\library\library.md
docs\library\library.md:3 - <div id="memory-lib-root" class="ml-prose-container">
docs\library\library.md:23 - <div class="ml-muted">Loading memories…</div>
docs\library\library.md:27 - <div class="ml-muted">Failed to load memories.</div>
docs\library\library.md:33 - <button id="ml-back" class="ml-link">← Back to memory home</button>
docs\library\library.md:34 - <div class="ml-crumb-title" id="ml-crumb-title">memories</div>
docs\library\library.md:40 - <div id="ml-memories" class="ml-grid" hidden></div>
docs\library\library.md:70 - <h2 id="ml-modal-title" class="sr-only">Memory details</h2>
docs\library\library.md:78 - <div class="ml-section-title">Memory</div>
docs\library\library.md:87 - <div><span>Memory ID</span><b id="ml-modal-id" class="mono"></b></div>

## docs\library\use_library.md
docs\library\use_library.md:17 - ReMe provides pre-built memory libraries that agents can immediately use with verified best practices:
docs\library\use_library.md:21 - - **`appworld.jsonl`**: Memory library for Appworld agent interactions, covering complex task planning and execution
docs\library\use_library.md:23 - - **`bfcl_v3.jsonl`**: Working memory library for BFCL tool calls
docs\library\use_library.md:37 - response = requests.post("http://localhost:8002/retrieve_task_memory", json={

## docs\personal_memory\personal_memory.md
docs\personal_memory\personal_memory.md:20 - ReMe's personal memory system consists of two main components: retrieval and summarization. The configuration for these components is defined in the default.yaml file.
docs\personal_memory\personal_memory.md:25 - retrieve_personal_memory:
docs\personal_memory\personal_memory.md:26 - flow_content: set_query_op >> (extract_time_op | (retrieve_memory_op >> semantic_rank_op)) >> fuse_rerank_op
docs\personal_memory\personal_memory.md:30 - 1. `set_query_op`: Prepares the query for memory retrieval
docs\personal_memory\personal_memory.md:33 - - `retrieve_memory_op >> semantic_rank_op`: Retrieves memories and ranks them semantically
docs\personal_memory\personal_memory.md:39 - summary_personal_memory:
docs\personal_memory\personal_memory.md:40 - flow_content: info_filter_op >> (get_observation_op | get_observation_with_time_op | load_today_memory_op) >> contra_repeat_op >> update_vector_store_op
docs\personal_memory\personal_memory.md:48 - - `load_today_memory_op`: Loads memories from the current day
docs\personal_memory\personal_memory.md:54 - The following example demonstrates how to use personal memory in MemoryScope:
docs\personal_memory\personal_memory.md:65 - workspace_id = "personal_memory_demo"

## docs\personal_memory\personal_retrieve_ops.md
docs\personal_memory\personal_retrieve_ops.md:38 - `RetrieveMemoryOp` retrieves memories from the vector store based on the query. It extends the `RecallVectorStoreOp` class to provide memory retrieval functionality.
docs\personal_memory\personal_retrieve_ops.md:41 - - `op.retrieve_memory_op.params.recall_key`: Key in the context to use as the query (default: "query")
docs\personal_memory\personal_retrieve_ops.md:42 - - `op.retrieve_memory_op.params.top_k`: Maximum number of memories to retrieve (default: 3)
docs\personal_memory\personal_retrieve_ops.md:43 - - `op.retrieve_memory_op.params.threshold_score`: (Optional) Minimum similarity score for memories (filters out memories below this threshold)
docs\personal_memory\personal_retrieve_ops.md:60 - - `op.semantic_rank_op.params.output_memory_max_count`: Maximum number of memories to output (default: 10)
docs\personal_memory\personal_retrieve_ops.md:64 - 1. Retrieves the memory list from the context
docs\personal_memory\personal_retrieve_ops.md:76 - `FuseRerankOp` performs the final reranking of memories by combining multiple factors: semantic scores, memory types, and temporal relevance. It also formats the final output.
docs\personal_memory\personal_retrieve_ops.md:80 - - `op.fuse_rerank_op.params.fuse_ratio_dict`: Dictionary of memory type to score multiplier ratios (default: {"conversation": 0.5, "observation": 1, "obs_customized": 1.2, "insight": 2.0})
docs\personal_memory\personal_retrieve_ops.md:82 - - `op.fuse_rerank_op.params.output_memory_max_count`: Maximum number of memories to output (default: 5)
docs\personal_memory\personal_retrieve_ops.md:86 - 1. Retrieves extracted time information and memory list from the context
docs\personal_memory\personal_retrieve_ops.md:87 - 2. For each memory:
docs\personal_memory\personal_retrieve_ops.md:89 - - Applies a type-based adjustment factor based on the memory type
docs\personal_memory\personal_retrieve_ops.md:107 - 1. Retrieves the memory list from the context
docs\personal_memory\personal_retrieve_ops.md:108 - 2. Formats each memory with:
docs\personal_memory\personal_retrieve_ops.md:119 - `ReadMessageOp` fetches unmemorized chat messages from the context. This is useful for retrieving recent conversations that haven't been processed into memories yet.

## docs\personal_memory\personal_summary_ops.md
docs\personal_memory\personal_summary_ops.md:19 - Only messages with scores specified in `preserved_scores` are retained. Messages are also filtered to exclude those already memorized and to only include messages from the user.
docs\personal_memory\personal_summary_ops.md:35 - The operation creates `PersonalMemory` objects with observation type "personal_info" for each extracted observation.
docs\personal_memory\personal_summary_ops.md:48 - The operation creates `PersonalMemory` objects with observation type "personal_info_with_time" for each extracted observation, including the time information in the metadata.
docs\personal_memory\personal_summary_ops.md:53 - Loads memories created today from the vector store to prevent duplication and enable updating of recent memories.
docs\personal_memory\personal_summary_ops.md:56 - - `op.load_today_memory_op.params.top_k`: Maximum number of memories to retrieve (default: 50)
docs\personal_memory\personal_summary_ops.md:64 - Identifies and removes contradictory or repetitive information from the collected memories.
docs\personal_memory\personal_summary_ops.md:71 - This operation analyzes the combined memories from previous operations (observation_memories, observation_memories_with_time, today_memories) to identify contradictions or redundancies. It uses an LLM to evaluate each memory and mark it as:
docs\personal_memory\personal_summary_ops.md:76 - Memories marked as contradictory or contained are filtered out, and their IDs are tracked for deletion from the vector store.
docs\personal_memory\personal_summary_ops.md:116 - Generates reflection subjects (topics) from personal memories for insight extraction.
docs\personal_memory\personal_summary_ops.md:140 - This operation is the final step in the personal memory summarization flow. It:

## docs\sop_memory\making_sop_memories.md
docs\sop_memory\making_sop_memories.md:15 - # SOP Memory: Combining Atomic Operations into Complex Workflows
docs\sop_memory\making_sop_memories.md:82 - "search_summary")  # react_op's context parameter is retrieved from search_summary in memory

## docs\task_memory\task_memory.md
docs\task_memory\task_memory.md:17 - Task Memory is a key component of ReMe that allows AI agents to learn from memories and improve their performance on similar tasks in the future. This document explains how task memory works and how to use it in your applications.
docs\task_memory\task_memory.md:21 - Task Memory represents knowledge extracted from previous task executions, including:
docs\task_memory\task_memory.md:26 - Each task memory contains:
docs\task_memory\task_memory.md:27 - - `when_to_use`: Conditions that indicate when this memory is relevant
docs\task_memory\task_memory.md:28 - - `content`: The actual knowledge or memory to be applied
docs\task_memory\task_memory.md:33 - Task Memory in ReMe is configured through two main flows:
docs\task_memory\task_memory.md:37 - The `summary_task_memory` flow processes conversation trajectories to extract meaningful memories:
docs\task_memory\task_memory.md:40 - summary_task_memory:
docs\task_memory\task_memory.md:41 - flow_content: trajectory_preprocess_op >> (success_extraction_op|failure_extraction_op|comparative_extraction_op) >> memory_validation_op >> update_vector_store_op
docs\task_memory\task_memory.md:42 - description: "Summarizes conversation trajectories or messages into structured memory representations for long-term storage"
docs\task_memory\task_memory.md:55 - The `retrieve_task_memory` flow fetches relevant memories based on a query:
docs\task_memory\task_memory.md:58 - retrieve_task_memory:
docs\task_memory\task_memory.md:59 - flow_content: build_query_op >> recall_vector_store_op >> rerank_memory_op >> rewrite_memory_op
docs\task_memory\task_memory.md:60 - description: "Retrieves the most relevant top-k memory from historical data based on the current query to enhance task-solving capabilities"
docs\task_memory\task_memory.md:65 - 2. Recalls relevant memories from the vector store (`recall_vector_store_op`)
docs\task_memory\task_memory.md:73 - Here's how to use Task Memory in your application:
docs\task_memory\task_memory.md:97 - url=f"{BASE_URL}summary_task_memory",
docs\task_memory\task_memory.md:112 - url=f"{BASE_URL}retrieve_task_memory",
docs\task_memory\task_memory.md:118 - retrieved_memory = response.json().get("answer", "")
docs\task_memory\task_memory.md:125 - augmented_query = f"{retrieved_memory}\n\nUser Question:\n{your_query}"
... and 10 more

## docs\task_memory\task_retrieve_ops.md
docs\task_memory\task_retrieve_ops.md:7 - Constructs a query for memory retrieval either from a direct query input or by analyzing conversation messages.
docs\task_memory\task_retrieve_ops.md:36 - - `op.rerank_memory_op.params.enable_llm_rerank` (boolean, default: `true`):
docs\task_memory\task_retrieve_ops.md:38 - - `op.rerank_memory_op.params.enable_score_filter` (boolean, default: `false`):
docs\task_memory\task_retrieve_ops.md:40 - - `op.rerank_memory_op.params.min_score_threshold` (float, default: `0.3`):
docs\task_memory\task_retrieve_ops.md:42 - - `op.rerank_memory_op.params.top_k` (integer, default: `5`):
docs\task_memory\task_retrieve_ops.md:55 - - Generates a cohesive context message from multiple memories
docs\task_memory\task_retrieve_ops.md:59 - - `op.rewrite_memory_op.params.enable_llm_rewrite` (boolean, default: `true`):
docs\task_memory\task_retrieve_ops.md:71 - - Collects the content from all memories in the memory list

## docs\task_memory\task_summary_ops.md
docs\task_memory\task_summary_ops.md:31 - - Enables more focused memory extraction from specific parts of conversations
docs\task_memory\task_summary_ops.md:43 - Extracts task memories from successful trajectories.
docs\task_memory\task_summary_ops.md:59 - Extracts task memories from failed trajectories to capture lessons learned from unsuccessful attempts.
docs\task_memory\task_summary_ops.md:110 - - `op.memory_validation_op.params.validation_threshold` (float, default: `0.5`):
docs\task_memory\task_summary_ops.md:127 - - `op.memory_deduplication_op.params.similarity_threshold` (float, default: `0.5`):
docs\task_memory\task_summary_ops.md:129 - - `op.memory_deduplication_op.params.max_existing_task_memories` (integer, default: `1000`):
docs\task_memory\task_summary_ops.md:141 - - Extracts memories directly from complete trajectories

## docs\tool_memory\tool_bench.md
docs\tool_memory\tool_bench.md:42 - **Source:** `cookbook/tool_memory/query.json`
docs\tool_memory\tool_bench.md:54 - #### Step 1: Train without Memory
docs\tool_memory\tool_bench.md:64 - #### Step 2: Test without Memory
docs\tool_memory\tool_bench.md:74 - #### Step 3: Summarize Tool Memory
docs\tool_memory\tool_bench.md:80 - memories = retrieve_tool_memory(TRAIN_WORKSPACE, tool_names)
docs\tool_memory\tool_bench.md:83 - The summarization produces memory content including:
docs\tool_memory\tool_bench.md:88 - #### Step 4: Test with Memory
docs\tool_memory\tool_bench.md:94 - prompt_with_memory = f"Tool Information\n{memories}\nMust select one tool to answer\nQuery\n{query}"
docs\tool_memory\tool_bench.md:100 - test_scored_results_with_memory = add_tool_call_results(TEST_WORKSPACE, test_results)
docs\tool_memory\tool_bench.md:108 - # Calculate improvements (baseline: test without memory)
docs\tool_memory\tool_bench.md:109 - improvements = calculate_improvements(test_no_memory_stats, test_with_memory_stats)
docs\tool_memory\tool_bench.md:159 - memory_type="tool",
docs\tool_memory\tool_bench.md:177 - improvement_percentage = ((with_memory_score - without_memory_score) / without_memory_score) * 100
docs\tool_memory\tool_bench.md:183 - Tool Memory should enable the agent to:
docs\tool_memory\tool_bench.md:206 - IMPROVEMENTS WITH TOOL MEMORY (Baseline: Test without memory)
docs\tool_memory\tool_bench.md:235 - - `tool_memory_benchmark_results.json`: Complete benchmark results
docs\tool_memory\tool_bench.md:244 - 2. **`/add_tool_call_result`**: Add results to memory and get evaluation scores
docs\tool_memory\tool_bench.md:246 - - Output: `memory_list` with scored results
docs\tool_memory\tool_bench.md:248 - 3. **`/summary_tool_memory`**: Summarize tool performance
docs\tool_memory\tool_bench.md:250 - - Output: Updated `ToolMemory` with content
... and 3 more

## docs\tool_memory\tool_memory.md
docs\tool_memory\tool_memory.md:17 - ## 1. Background: Why Tool Memory?
docs\tool_memory\tool_memory.md:48 - ### The Solution: Tool Memory as Context Enhancement
docs\tool_memory\tool_memory.md:50 - Tool Memory solves this by providing **learned context from historical usage**, transforming static tool descriptions into dynamic, data-driven guidance:
docs\tool_memory\tool_memory.md:72 - + Tool Memory Context:
docs\tool_memory\tool_memory.md:98 - **Tool Memory Approach (Description + Historical Context):**
docs\tool_memory\tool_memory.md:109 - Before Tool Memory:
docs\tool_memory\tool_memory.md:116 - After Tool Memory:
docs\tool_memory\tool_memory.md:126 - As the MCP ecosystem grows, Tool Memory becomes essential:
docs\tool_memory\tool_memory.md:133 - **Tool Memory transforms tool descriptions from static documentation into living, learned manuals that improve with every use.**
docs\tool_memory\tool_memory.md:137 - Tool Memory is a structured knowledge base that captures insights from tool usage history. Each Tool Memory represents accumulated wisdom about a specific tool.
docs\tool_memory\tool_memory.md:143 - `ToolMemory` is the core data structure that stores comprehensive information about a tool's usage patterns:
docs\tool_memory\tool_memory.md:146 - class ToolMemory(BaseMemory):
docs\tool_memory\tool_memory.md:147 - memory_type: str = "tool"                    # Type identifier
docs\tool_memory\tool_memory.md:149 - memory_id: str                               # Unique memory ID
docs\tool_memory\tool_memory.md:205 - ## 3. How Tool Memory Works: The Complete Flow
docs\tool_memory\tool_memory.md:207 - Tool Memory operates through three complementary operations that work together to create a learning loop:
docs\tool_memory\tool_memory.md:246 - Based on `use_tool_memory_demo.py`, here's a typical workflow:
docs\tool_memory\tool_memory.md:260 - memory = retrieve_tool_memory("web_search")
docs\tool_memory\tool_memory.md:276 - **Purpose**: Evaluate and store tool call results into Tool Memory.
docs\tool_memory\tool_memory.md:282 - description: "Evaluates and adds tool call results to the tool memory database"
... and 59 more

## docs\tool_memory\tool_retrieve_ops.md
docs\tool_memory\tool_retrieve_ops.md:7 - Retrieves tool memories from the vector database based on tool names, providing usage patterns, best practices, and historical call data.
docs\tool_memory\tool_retrieve_ops.md:13 - - Validates that retrieved memories are of type "tool"

## docs\tool_memory\tool_summary_ops.md
docs\tool_memory\tool_summary_ops.md:49 - - Retrieves existing tool memories from the vector store
docs\tool_memory\tool_summary_ops.md:59 - To optimize costs and performance, `SummaryToolMemoryOp` tracks which tool call results have been included in a summary:
docs\tool_memory\tool_summary_ops.md:76 - - `op.summary_tool_memory_op.params.recent_call_count` (integer, default: `30`):
docs\tool_memory\tool_summary_ops.md:81 - - `op.summary_tool_memory_op.params.summary_sleep_interval` (float, default: `1.0`):

## docs\work_memory\message_offload.md
docs\work_memory\message_offload.md:35 - <img src="../_static/figure/working_memory_intro.png" alt="" width="60%">
docs\work_memory\message_offload.md:110 - **Traditional Approach (No Work Memory Management):**
docs\work_memory\message_offload.md:184 - 📖 **Tutorial Guide**: [Working Memory Quick Start](../cookbook/working/quick_start.md)
docs\work_memory\message_offload.md:189 - 💻 **Implementation Reference**: [react_agent_with_working_memory.py](../../cookbook/working_memory/react_agent_with_working_memory.py)
docs\work_memory\message_offload.md:194 - 🚀 **Demo Application**: [work_memory_demo.py](../../cookbook/working_memory/work_memory_demo.py)

## docs\work_memory\message_offload_ops.md
docs\work_memory\message_offload_ops.md:25 - - **Memory Pressure**: The context window quickly fills up as messages and tool results accumulate chronologically

## docs\_static\memory-lib\memory-lib.js
docs\_static\memory-lib\memory-lib.js:128 - <div class="ml-section-title">Memory</div>
docs\_static\memory-lib\memory-lib.js:136 - <div><span>Memory ID</span><b id="ml-modal-id" class="mono"></b></div>
docs\_static\memory-lib\memory-lib.js:223 - els.id.textContent = m.memory_id || 'N/A';
docs\_static\memory-lib\memory-lib.js:256 - <div class="ml-card-sub">${arr.length} memories</div>
docs\_static\memory-lib\memory-lib.js:331 - const modal = createMemoryModal();

## reme\reme.py
reme\reme.py:8 - from .core.enumeration import MemoryType, Role
reme\reme.py:9 - from .core.schema import Message, MemoryNode
reme\reme.py:10 - from .memory.vector_tools import (
reme\reme.py:20 - from .memory.vector_tools.profiles.profile_handler import ProfileHandler
reme\reme.py:21 - from .memory.vector_tools.record.memory_handler import MemoryHandler
reme\reme.py:22 - from .memory.vector_based import (
reme\reme.py:94 - memory_target_type_mapping: dict[str, MemoryType] = {}
reme\reme.py:97 - assert name not in memory_target_type_mapping, f"target_user_names={name} is already used."
reme\reme.py:98 - memory_target_type_mapping[name] = MemoryType.PERSONAL
reme\reme.py:102 - assert name not in memory_target_type_mapping, f"target_task_names={name} is already used."
reme\reme.py:103 - memory_target_type_mapping[name] = MemoryType.PROCEDURAL
reme\reme.py:107 - assert name not in memory_target_type_mapping, f"target_tool_names={name} is already used."
reme\reme.py:108 - memory_target_type_mapping[name] = MemoryType.TOOL
reme\reme.py:110 - self.service_context.memory_target_type_mapping = memory_target_type_mapping
reme\reme.py:119 - def _add_meta_memory(self, memory_type: str | MemoryType, memory_target: str):
reme\reme.py:120 - """Register or validate a memory target with the given memory type."""
reme\reme.py:121 - if memory_target in self.service_context.memory_target_type_mapping:
reme\reme.py:124 - self.service_context.memory_target_type_mapping[memory_target] = MemoryType(memory_type)
reme\reme.py:127 - def _resolve_memory_target(
reme\reme.py:131 - ) -> tuple[MemoryType, str]:
... and 98 more

## reme\reme_cli.py
reme\reme_cli.py:13 - from .memory.file_based.components import CliAgent
reme\reme_cli.py:45 - memory_path = working_path / "memory"
reme\reme_cli.py:46 - memory_path.mkdir(parents=True, exist_ok=True)

## reme\reme_light.py
reme\reme_light.py:29 - from .memory.file_based import ReMeInMemoryMemory
reme\reme_light.py:30 - from .memory.file_based.components import (
reme\reme_light.py:36 - from .memory.file_based.tools import FileIO, MemorySearch
reme\reme_light.py:37 - from .memory.file_based.utils import AsMsgHandler
reme\reme_light.py:59 - memory_path (Path): Path to the memory storage directory.
reme\reme_light.py:128 - self.memory_path = self.working_path / "memory"
reme\reme_light.py:129 - self.memory_path.mkdir(parents=True, exist_ok=True)
reme\reme_light.py:174 - def calculate_memory_compact_threshold(max_input_length: float, compact_ratio: float) -> int:
reme\reme_light.py:312 - memory_compact_threshold: int,
reme\reme_light.py:313 - memory_compact_reserve: int = 10000,
reme\reme_light.py:325 - memory_compact_threshold (int): Token count threshold for triggering
reme\reme_light.py:327 - memory_compact_reserve (int): Token count to reserve for recent messages
reme\reme_light.py:346 - memory_compact_threshold=memory_compact_threshold,
reme\reme_light.py:347 - memory_compact_reserve=memory_compact_reserve,
reme\reme_light.py:360 - async def compact_memory(
reme\reme_light.py:406 - memory_compact_threshold=self.calculate_memory_compact_threshold(max_input_length, compact_ratio),
reme\reme_light.py:423 - logger.exception(f"Error compacting memory: {e}")
reme\reme_light.py:428 - async def summary_memory(
reme\reme_light.py:484 - memory_dir=str(self.memory_path),
reme\reme_light.py:485 - memory_compact_threshold=self.calculate_memory_compact_threshold(max_input_length, compact_ratio),
... and 17 more

## reme\__init__.py
reme\__init__.py:6 - from . import memory

## reme\config\cli.yaml
reme\config\cli.yaml:47 - watch_paths: [ ".reme", ".reme/memory" ]

## reme\config\service.yaml
reme\config\service.yaml:17 - retrieve_task_memory:
reme\config\service.yaml:18 - flow_content: BuildQuery() >> MemoryRetrieval() >> RerankMemory() >> RewriteMemory()
reme\config\service.yaml:19 - description: "Retrieves the most relevant top-k memory experiences from historical data based on the current query to enhance task-solving capabilities"
reme\config\service.yaml:52 - summary_task_memory:
reme\config\service.yaml:53 - flow_content: TrajectoryPreprocess() >> (SuccessExtraction()|FailureExtraction()|ComparativeExtraction()) >> MemoryValidation() >> MemoryDeduplication()
reme\config\service.yaml:54 - description: "Summarizes conversation trajectories or messages into structured memory representations for long-term storage"
reme\config\service.yaml:88 - add_task_memory:
reme\config\service.yaml:89 - flow_content: MemoryAddition()
reme\config\service.yaml:94 - memory_list:
reme\config\service.yaml:96 - description: "A list of task memory to add to the vector store."
reme\config\service.yaml:100 - delete_task_memory:
reme\config\service.yaml:101 - flow_content: MemoryDeletion()
reme\config\service.yaml:108 - description: "The retrieved frequency threshold for deleting task memory."
reme\config\service.yaml:111 - description: "The utility/freq threshold for deleting task memory."
reme\config\service.yaml:116 - record_task_memory:
reme\config\service.yaml:117 - flow_content: UpdateMemoryMetadata()
reme\config\service.yaml:122 - memory_list:
reme\config\service.yaml:124 - description: "A list of retrieved task memory corresponding to the current task."
reme\config\service.yaml:127 - description: "Whether to update the utility attribute of the retrieved task memory."
reme\config\service.yaml:132 - load_memory:
... and 4 more

## reme\core\embedding\base_embedding_model.py
reme\core\embedding\base_embedding_model.py:16 - from ..schema import VectorNode, MemoryChunk
reme\core\embedding\base_embedding_model.py:54 - max_cache_size: Maximum number of embeddings to cache in memory (LRU)
reme\core\embedding\base_embedding_model.py:519 - async def get_chunk_embedding(self, chunk: MemoryChunk, **kwargs) -> MemoryChunk:
reme\core\embedding\base_embedding_model.py:523 - chunk: MemoryChunk object containing text to embed
reme\core\embedding\base_embedding_model.py:532 - async def get_chunk_embeddings(self, chunks: list[MemoryChunk], **kwargs) -> list[MemoryChunk]:
reme\core\embedding\base_embedding_model.py:536 - chunks: List of MemoryChunk objects containing text to embed
reme\core\embedding\base_embedding_model.py:552 - def get_chunk_embedding_sync(self, chunk: MemoryChunk, **kwargs) -> MemoryChunk:
reme\core\embedding\base_embedding_model.py:556 - chunk: MemoryChunk object containing text to embed
reme\core\embedding\base_embedding_model.py:565 - def get_chunk_embeddings_sync(self, chunks: list[MemoryChunk], **kwargs) -> list[MemoryChunk]:
reme\core\embedding\base_embedding_model.py:569 - chunks: List of MemoryChunk objects containing text to embed

## reme\core\enumeration\json_schema_enum.py
reme\core\enumeration\json_schema_enum.py:37 - """Return the lowercase JSON Schema type name for this enum member."""

## reme\core\enumeration\memory_source.py
reme\core\enumeration\memory_source.py:6 - class MemorySource(str, Enum):
reme\core\enumeration\memory_source.py:9 - MEMORY = "memory"

## reme\core\enumeration\memory_type.py
reme\core\enumeration\memory_type.py:10 - class MemoryType(str, Enum):

## reme\core\enumeration\__init__.py
reme\core\enumeration\__init__.py:6 - from .memory_source import MemorySource
reme\core\enumeration\__init__.py:7 - from .memory_type import MemoryType

## reme\core\file_store\base_file_store.py
reme\core\file_store\base_file_store.py:8 - from ..enumeration import MemorySource
reme\core\file_store\base_file_store.py:9 - from ..schema import FileMetadata, MemoryChunk, MemorySearchResult
reme\core\file_store\base_file_store.py:89 - async def get_chunk_embedding(self, chunk: MemoryChunk, **kwargs) -> MemoryChunk:
reme\core\file_store\base_file_store.py:101 - async def get_chunk_embeddings(self, chunks: list[MemoryChunk], **kwargs) -> list[MemoryChunk]:
reme\core\file_store\base_file_store.py:122 - async def upsert_file(self, file_meta: FileMetadata, source: MemorySource, chunks: list[MemoryChunk]):
reme\core\file_store\base_file_store.py:126 - async def delete_file(self, path: str, source: MemorySource):
reme\core\file_store\base_file_store.py:134 - async def upsert_chunks(self, chunks: list[MemoryChunk], source: MemorySource):
reme\core\file_store\base_file_store.py:138 - async def list_files(self, source: MemorySource) -> list[str]:
reme\core\file_store\base_file_store.py:142 - async def get_file_metadata(self, path: str, source: MemorySource) -> FileMetadata | None:
reme\core\file_store\base_file_store.py:146 - async def update_file_metadata(self, file_meta: FileMetadata, source: MemorySource) -> None:
reme\core\file_store\base_file_store.py:154 - source: Memory source
reme\core\file_store\base_file_store.py:158 - async def get_file_chunks(self, path: str, source: MemorySource) -> list[MemoryChunk]:
reme\core\file_store\base_file_store.py:166 - sources: list[MemorySource] | None = None,
reme\core\file_store\base_file_store.py:167 - ) -> list[MemorySearchResult]:
reme\core\file_store\base_file_store.py:184 - sources: list[MemorySource] | None = None,
reme\core\file_store\base_file_store.py:185 - ) -> list[MemorySearchResult]:
reme\core\file_store\base_file_store.py:202 - sources: list[MemorySource] | None = None,
reme\core\file_store\base_file_store.py:205 - ) -> list[MemorySearchResult]:

## reme\core\file_store\chroma_file_store.py
reme\core\file_store\chroma_file_store.py:11 - from ..enumeration import MemorySource
reme\core\file_store\chroma_file_store.py:12 - from ..schema import FileMetadata, MemoryChunk, MemorySearchResult
reme\core\file_store\chroma_file_store.py:141 - source: MemorySource,
reme\core\file_store\chroma_file_store.py:142 - chunks: list[MemoryChunk],
reme\core\file_store\chroma_file_store.py:196 - async def delete_file(self, path: str, source: MemorySource) -> None:
reme\core\file_store\chroma_file_store.py:235 - chunks: list[MemoryChunk],
reme\core\file_store\chroma_file_store.py:236 - source: MemorySource,
reme\core\file_store\chroma_file_store.py:275 - async def list_files(self, source: MemorySource) -> list[str]:
reme\core\file_store\chroma_file_store.py:284 - source: MemorySource,
reme\core\file_store\chroma_file_store.py:291 - async def update_file_metadata(self, file_meta: FileMetadata, source: MemorySource) -> None:
reme\core\file_store\chroma_file_store.py:307 - source: MemorySource,
reme\core\file_store\chroma_file_store.py:308 - ) -> list[MemoryChunk]:
reme\core\file_store\chroma_file_store.py:322 - source=MemorySource(metadata["source"]),
reme\core\file_store\chroma_file_store.py:339 - sources: list[MemorySource] | None = None,
reme\core\file_store\chroma_file_store.py:340 - ) -> list[MemorySearchResult]:
reme\core\file_store\chroma_file_store.py:386 - source=MemorySource(metadata["source"]),
reme\core\file_store\chroma_file_store.py:412 - source=MemorySource(metadata["source"]),
reme\core\file_store\chroma_file_store.py:425 - sources: list[MemorySource] | None = None,
reme\core\file_store\chroma_file_store.py:426 - ) -> list[MemorySearchResult]:
reme\core\file_store\chroma_file_store.py:500 - source=MemorySource(metadata["source"]),
... and 6 more

## reme\core\file_store\local_file_store.py
reme\core\file_store\local_file_store.py:10 - from ..enumeration import MemorySource
reme\core\file_store\local_file_store.py:11 - from ..schema import FileMetadata, MemoryChunk, MemorySearchResult
reme\core\file_store\local_file_store.py:35 - self._chunks: dict[str, MemoryChunk] = {}
reme\core\file_store\local_file_store.py:46 - """Load chunks from JSONL file into memory."""
reme\core\file_store\local_file_store.py:56 - chunk = MemoryChunk.model_validate(rec)
reme\core\file_store\local_file_store.py:76 - """Load file metadata from JSON file into memory."""
reme\core\file_store\local_file_store.py:141 - source: MemorySource,
reme\core\file_store\local_file_store.py:142 - chunks: list[MemoryChunk],
reme\core\file_store\local_file_store.py:167 - async def delete_file(self, path: str, source: MemorySource) -> None:
reme\core\file_store\local_file_store.py:193 - chunks: list[MemoryChunk],
reme\core\file_store\local_file_store.py:194 - source: MemorySource,
reme\core\file_store\local_file_store.py:209 - async def list_files(self, source: MemorySource) -> list[str]:
reme\core\file_store\local_file_store.py:216 - source: MemorySource,
reme\core\file_store\local_file_store.py:221 - async def update_file_metadata(self, file_meta: FileMetadata, source: MemorySource) -> None:
reme\core\file_store\local_file_store.py:237 - source: MemorySource,
reme\core\file_store\local_file_store.py:238 - ) -> list[MemoryChunk]:
reme\core\file_store\local_file_store.py:252 - sources: list[MemorySource] | None = None,
reme\core\file_store\local_file_store.py:253 - ) -> list[MemorySearchResult]:
reme\core\file_store\local_file_store.py:318 - sources: list[MemorySource] | None = None,
reme\core\file_store\local_file_store.py:319 - ) -> list[MemorySearchResult]:
... and 7 more

## reme\core\file_store\sqlite_file_store.py
reme\core\file_store\sqlite_file_store.py:11 - from ..enumeration import MemorySource
reme\core\file_store\sqlite_file_store.py:12 - from ..schema import FileMetadata, MemoryChunk, MemorySearchResult
reme\core\file_store\sqlite_file_store.py:180 - async def upsert_file(self, file_meta: FileMetadata, source: MemorySource, chunks: list[MemoryChunk]):
reme\core\file_store\sqlite_file_store.py:263 - async def delete_file(self, path: str, source: MemorySource):
reme\core\file_store\sqlite_file_store.py:349 - async def upsert_chunks(self, chunks: list[MemoryChunk], source: MemorySource):
reme\core\file_store\sqlite_file_store.py:425 - async def list_files(self, source: MemorySource) -> list[str]:
reme\core\file_store\sqlite_file_store.py:438 - async def get_file_metadata(self, path: str, source: MemorySource) -> FileMetadata | None:
reme\core\file_store\sqlite_file_store.py:470 - async def update_file_metadata(self, file_meta: FileMetadata, source: MemorySource) -> None:
reme\core\file_store\sqlite_file_store.py:488 - async def get_file_chunks(self, path: str, source: MemorySource) -> list[MemoryChunk]:
reme\core\file_store\sqlite_file_store.py:516 - source=MemorySource(source_val),
reme\core\file_store\sqlite_file_store.py:536 - sources: list[MemorySource] | None = None,
reme\core\file_store\sqlite_file_store.py:537 - ) -> list[MemorySearchResult]:
reme\core\file_store\sqlite_file_store.py:593 - source=MemorySource(src),
reme\core\file_store\sqlite_file_store.py:685 - sources: list[MemorySource] | None = None,
reme\core\file_store\sqlite_file_store.py:686 - ) -> list[MemorySearchResult]:
reme\core\file_store\sqlite_file_store.py:718 - sources: list[MemorySource] | None = None,
reme\core\file_store\sqlite_file_store.py:719 - ) -> list[MemorySearchResult]:
reme\core\file_store\sqlite_file_store.py:756 - source=MemorySource(src),
reme\core\file_store\sqlite_file_store.py:773 - sources: list[MemorySource] | None = None,
reme\core\file_store\sqlite_file_store.py:774 - ) -> list[MemorySearchResult]:
... and 7 more

## reme\core\file_watcher\base_file_watcher.py
reme\core\file_watcher\base_file_watcher.py:15 - from ..enumeration import MemorySource
reme\core\file_watcher\base_file_watcher.py:151 - files: list[str] = await self.file_store.list_files(MemorySource.MEMORY)
reme\core\file_watcher\base_file_watcher.py:153 - chunks = await self.file_store.get_file_chunks(file_path, MemorySource.MEMORY)

## reme\core\file_watcher\delta_file_watcher.py
reme\core\file_watcher\delta_file_watcher.py:14 - from ..enumeration import MemorySource
reme\core\file_watcher\delta_file_watcher.py:15 - from ..schema import FileMetadata, MemoryChunk
reme\core\file_watcher\delta_file_watcher.py:65 - old_chunks: list[MemoryChunk],
reme\core\file_watcher\delta_file_watcher.py:170 - old_chunks = await self.file_store.get_file_chunks(path, MemorySource.MEMORY)
reme\core\file_watcher\delta_file_watcher.py:171 - old_file_meta = await self.file_store.get_file_metadata(path, MemorySource.MEMORY)

## reme\core\file_watcher\full_file_watcher.py
reme\core\file_watcher\full_file_watcher.py:14 - from ..enumeration import MemorySource

## reme\core\schema\memory_chunk.py
reme\core\schema\memory_chunk.py:5 - from ..enumeration import MemorySource
reme\core\schema\memory_chunk.py:8 - class MemoryChunk(BaseModel):
reme\core\schema\memory_chunk.py:13 - source: MemorySource = Field(..., description="Source of the memory data")

## reme\core\schema\memory_node.py
reme\core\schema\memory_node.py:3 - This module defines the MemoryNode class for storing and retrieving
reme\core\schema\memory_node.py:14 - from ..enumeration import MemoryType
reme\core\schema\memory_node.py:27 - MEMORY_ID_LENGTH: int = 16
reme\core\schema\memory_node.py:30 - class MemoryNode(BaseModel):
reme\core\schema\memory_node.py:34 - memory_id: Unique identifier, auto-generated from content hash.
reme\core\schema\memory_node.py:35 - memory_type: Type of memory (e.g., SUMMARY, PERSONAL).
reme\core\schema\memory_node.py:36 - memory_target: Target or topic this memory relates to.
reme\core\schema\memory_node.py:38 - content: Actual memory content.
reme\core\schema\memory_node.py:39 - message_time: Time of the message that generated this memory.
reme\core\schema\memory_node.py:40 - ref_memory_id: Reference to related raw history memory.
reme\core\schema\memory_node.py:43 - author: Author or source of this memory.
reme\core\schema\memory_node.py:45 - vector: Vector embedding of the memory content.
reme\core\schema\memory_node.py:49 - memory_id: str = Field(default="", description="Unique memory identifier")
reme\core\schema\memory_node.py:50 - memory_type: MemoryType = Field(default=..., description="Type of memory")
reme\core\schema\memory_node.py:51 - memory_target: str = Field(default="", description="Target or topic of the memory")
reme\core\schema\memory_node.py:53 - content: str = Field(default="", description="Actual memory content")
reme\core\schema\memory_node.py:54 - message_time: str = Field(default="", description="Time of the message that generated this memory")
reme\core\schema\memory_node.py:55 - ref_memory_id: str = Field(default="", description="Reference to related raw history memory ID")
reme\core\schema\memory_node.py:59 - author: str = Field(default="", description="Author or source of the memory")
reme\core\schema\memory_node.py:62 - vector: list[float] | None = Field(default=None, description="Vector embedding of the memory content")
... and 30 more

## reme\core\schema\memory_search_result.py
reme\core\schema\memory_search_result.py:5 - from ..enumeration import MemorySource
reme\core\schema\memory_search_result.py:8 - class MemorySearchResult(BaseModel):
reme\core\schema\memory_search_result.py:9 - """Search result from memory index."""
reme\core\schema\memory_search_result.py:16 - source: MemorySource = Field(..., description="Source of the memory data")

## reme\core\schema\__init__.py
reme\core\schema\__init__.py:6 - from .memory_chunk import MemoryChunk
reme\core\schema\__init__.py:7 - from .memory_node import MemoryNode
reme\core\schema\__init__.py:8 - from .memory_search_result import MemorySearchResult

## reme\core\utils\chunking_utils.py
reme\core\utils\chunking_utils.py:4 - from ..enumeration import MemorySource
reme\core\utils\chunking_utils.py:5 - from ..schema import MemoryChunk
reme\core\utils\chunking_utils.py:11 - source: MemorySource,
reme\core\utils\chunking_utils.py:14 - ) -> list[MemoryChunk]:
reme\core\utils\chunking_utils.py:21 - source: Memory source
reme\core\utils\chunking_utils.py:36 - chunks: list[MemoryChunk] = []

## reme\core\utils\llm_utils.py
reme\core\utils\llm_utils.py:10 - from ..schema import Message, Trajectory, MemoryNode, ToolCall
reme\core\utils\llm_utils.py:249 - def deduplicate_memories(memories: list[MemoryNode]) -> list[MemoryNode]:
reme\core\utils\llm_utils.py:251 - seen_memories: dict[str, MemoryNode] = {}
reme\core\utils\llm_utils.py:252 - for memory in memories:
reme\core\utils\llm_utils.py:253 - if memory.memory_id not in seen_memories:
reme\core\utils\llm_utils.py:254 - seen_memories[memory.memory_id] = memory

## reme\core\utils\__init__.py
reme\core\utils\__init__.py:12 - from .llm_utils import extract_content, format_messages, deduplicate_memories

## reme\core\vector_store\local_vector_store.py
reme\core\vector_store\local_vector_store.py:36 - # In-memory cache: vector_id -> VectorNode

## reme\core\vector_store\qdrant_vector_store.py
reme\core\vector_store\qdrant_vector_store.py:62 - db_path: Local storage path for on-disk/in-memory mode.

## reme\extension\__init__.py
reme\extension\__init__.py:3 - from . import procedural_memory

## reme\extension\procedural_memory\dump_memory.py
reme\extension\procedural_memory\dump_memory.py:1 - """Operation for dumping memories from vector store to JSONL file."""
reme\extension\procedural_memory\dump_memory.py:10 - from ...core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\dump_memory.py:14 - class DumpMemory(BaseOp):
reme\extension\procedural_memory\dump_memory.py:15 - """Operation that dumps memories from vector store to a JSONL file.
reme\extension\procedural_memory\dump_memory.py:17 - This operation retrieves all memories from the vector store, converts them
reme\extension\procedural_memory\dump_memory.py:25 - Dumps all memories from the vector store to a JSONL file:
reme\extension\procedural_memory\dump_memory.py:54 - memory = MemoryNode.from_vector_node(node)
reme\extension\procedural_memory\dump_memory.py:56 - json_line = json.dumps(memory.model_dump(exclude_none=True), ensure_ascii=False)

## reme\extension\procedural_memory\load_memory.py
reme\extension\procedural_memory\load_memory.py:1 - """Operation for loading memories from JSONL file to vector store."""
reme\extension\procedural_memory\load_memory.py:11 - from ...core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\load_memory.py:15 - class LoadMemory(BaseOp):
reme\extension\procedural_memory\load_memory.py:16 - """Operation that loads memories from a JSONL file to vector store.
reme\extension\procedural_memory\load_memory.py:18 - This operation reads MemoryNode objects from a JSONL file (one JSON object
reme\extension\procedural_memory\load_memory.py:26 - Loads memories from a JSONL file to the vector store:
reme\extension\procedural_memory\load_memory.py:37 - loaded_count: Number of memories loaded from the file.
reme\extension\procedural_memory\load_memory.py:60 - logger.info("Cleared existing memories from vector store")
reme\extension\procedural_memory\load_memory.py:63 - memory_nodes: List[MemoryNode] = []
reme\extension\procedural_memory\load_memory.py:71 - memory = MemoryNode.model_validate(data)
reme\extension\procedural_memory\load_memory.py:76 - logger.info(f"Parsed {len(memory_nodes)} memories from {load_file_path}")
reme\extension\procedural_memory\load_memory.py:79 - if memory_nodes:
reme\extension\procedural_memory\load_memory.py:80 - vector_nodes: List[VectorNode] = [memory.to_vector_node() for memory in memory_nodes]

## reme\extension\procedural_memory\__init__.py
reme\extension\procedural_memory\__init__.py:5 - from .dump_memory import DumpMemory
reme\extension\procedural_memory\__init__.py:6 - from .load_memory import LoadMemory
reme\extension\procedural_memory\__init__.py:13 - from .summary.memory_validation import MemoryValidation
reme\extension\procedural_memory\__init__.py:14 - from .summary.memory_deduplication import MemoryDeduplication
reme\extension\procedural_memory\__init__.py:15 - from .summary.memory_addition import MemoryAddition
reme\extension\procedural_memory\__init__.py:18 - from .retrieve.memory_deletion import MemoryDeletion
reme\extension\procedural_memory\__init__.py:19 - from .retrieve.memory_retrieval import MemoryRetrieval
reme\extension\procedural_memory\__init__.py:20 - from .retrieve.merge_memory import MergeMemory
reme\extension\procedural_memory\__init__.py:21 - from .retrieve.rerank_memory import RerankMemory
reme\extension\procedural_memory\__init__.py:22 - from .retrieve.rewrite_memory import RewriteMemory
reme\extension\procedural_memory\__init__.py:23 - from .retrieve.update_memory_metadata import UpdateMemoryMetadata

## reme\extension\procedural_memory\retrieve\memory_deletion.py
reme\extension\procedural_memory\retrieve\memory_deletion.py:1 - """Operation for deleting memories from the vector store."""
reme\extension\procedural_memory\retrieve\memory_deletion.py:12 - class MemoryDeletion(BaseOp):
reme\extension\procedural_memory\retrieve\memory_deletion.py:13 - """Operation that deletes memories from the vector store.
reme\extension\procedural_memory\retrieve\memory_deletion.py:23 - Identifies and deletes memories from the vector store:
reme\extension\procedural_memory\retrieve\memory_deletion.py:26 - 3. Deletes identified memories from the vector store
reme\extension\procedural_memory\retrieve\memory_deletion.py:30 - - Memory frequency must be >= freq_threshold
reme\extension\procedural_memory\retrieve\memory_deletion.py:43 - deleted_memory_ids = []
reme\extension\procedural_memory\retrieve\memory_deletion.py:52 - if deleted_memory_ids:
reme\extension\procedural_memory\retrieve\memory_deletion.py:53 - await self.vector_store.delete(vector_ids=deleted_memory_ids)
reme\extension\procedural_memory\retrieve\memory_deletion.py:54 - logger.info(f"Deleted {len(deleted_memory_ids)} memories: {json.dumps(deleted_memory_ids, indent=2)}")

## reme\extension\procedural_memory\retrieve\memory_retrieval.py
reme\extension\procedural_memory\retrieve\memory_retrieval.py:1 - """Operation for recalling memories from the vector store based on a query."""
reme\extension\procedural_memory\retrieve\memory_retrieval.py:8 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\retrieve\memory_retrieval.py:12 - class MemoryRetrieval(BaseOp):
reme\extension\procedural_memory\retrieve\memory_retrieval.py:13 - """Operation that retrieves relevant memories from the vector store.
reme\extension\procedural_memory\retrieve\memory_retrieval.py:35 - memory_list: List of retrieved MemoryNode objects.
reme\extension\procedural_memory\retrieve\memory_retrieval.py:50 - memory_list: List[MemoryNode] = []
reme\extension\procedural_memory\retrieve\memory_retrieval.py:51 - memory_content_set: set[str] = set()  # for deduplication
reme\extension\procedural_memory\retrieve\memory_retrieval.py:54 - memory = MemoryNode.from_vector_node(node)
reme\extension\procedural_memory\retrieve\memory_retrieval.py:55 - if memory.content not in memory_content_set:
reme\extension\procedural_memory\retrieve\memory_retrieval.py:59 - logger.warning(f"Failed to convert VectorNode to MemoryNode: {e}")
reme\extension\procedural_memory\retrieve\memory_retrieval.py:61 - logger.info(f"Retrieved memory.size={len(memory_list)}")
reme\extension\procedural_memory\retrieve\memory_retrieval.py:65 - memory_list = [mem for mem in memory_list if mem.score >= threshold_score]
reme\extension\procedural_memory\retrieve\memory_retrieval.py:66 - logger.info(f"After threshold filter: {len(memory_list)} memories retained")
reme\extension\procedural_memory\retrieve\memory_retrieval.py:68 - self.context.response.metadata["memory_list"] = memory_list

## reme\extension\procedural_memory\retrieve\merge_memory.py
reme\extension\procedural_memory\retrieve\merge_memory.py:12 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\retrieve\merge_memory.py:15 - class MergeMemory(BaseOp):
reme\extension\procedural_memory\retrieve\merge_memory.py:20 - instructions for the LLM to consider the helpful parts from these memories.
reme\extension\procedural_memory\retrieve\merge_memory.py:26 - Merges memories from context metadata into a formatted string with
reme\extension\procedural_memory\retrieve\merge_memory.py:29 - memory_list: List[MemoryNode] = self.context.response.metadata["memory_list"]
reme\extension\procedural_memory\retrieve\merge_memory.py:31 - if not memory_list:
reme\extension\procedural_memory\retrieve\merge_memory.py:34 - content_collector = ["Previous Memory"]
reme\extension\procedural_memory\retrieve\merge_memory.py:35 - for memory in memory_list:
reme\extension\procedural_memory\retrieve\merge_memory.py:36 - if not memory.content:

## reme\extension\procedural_memory\retrieve\rerank_memory.py
reme\extension\procedural_memory\retrieve\rerank_memory.py:17 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\retrieve\rerank_memory.py:20 - class RerankMemory(BaseOp):
reme\extension\procedural_memory\retrieve\rerank_memory.py:35 - memory_list: List[MemoryNode] = self.context.response.metadata["memory_list"]
reme\extension\procedural_memory\retrieve\rerank_memory.py:41 - if not memory_list:
reme\extension\procedural_memory\retrieve\rerank_memory.py:49 - memory_list = await self._llm_rerank(retrieval_query, memory_list)
reme\extension\procedural_memory\retrieve\rerank_memory.py:50 - logger.info(f"After LLM reranking: {len(memory_list)} memories")
reme\extension\procedural_memory\retrieve\rerank_memory.py:54 - memory_list = self._score_based_filter(memory_list, min_score_threshold)
reme\extension\procedural_memory\retrieve\rerank_memory.py:55 - logger.info(f"After score filtering: {len(memory_list)} memories")
reme\extension\procedural_memory\retrieve\rerank_memory.py:58 - self.context.response.metadata["memory_list"] = memory_list
reme\extension\procedural_memory\retrieve\rerank_memory.py:60 - async def _llm_rerank(self, query: str, candidates: List[MemoryNode]) -> List[MemoryNode]:
reme\extension\procedural_memory\retrieve\rerank_memory.py:65 - candidates: List of memory candidates to rerank.
reme\extension\procedural_memory\retrieve\rerank_memory.py:77 - prompt_name="memory_rerank_prompt",
reme\extension\procedural_memory\retrieve\rerank_memory.py:106 - def _score_based_filter(memories: List[MemoryNode], min_score: float) -> List[MemoryNode]:
reme\extension\procedural_memory\retrieve\rerank_memory.py:118 - for memory in memories:
reme\extension\procedural_memory\retrieve\rerank_memory.py:120 - confidence = memory.metadata.get("confidence", 0.5)
reme\extension\procedural_memory\retrieve\rerank_memory.py:121 - validation_score = memory.score or 0.5
reme\extension\procedural_memory\retrieve\rerank_memory.py:129 - logger.debug(f"Filtered out memory with score {combined_score:.2f}")
reme\extension\procedural_memory\retrieve\rerank_memory.py:135 - def _format_candidates_for_rerank(candidates: List[MemoryNode]) -> str:
reme\extension\procedural_memory\retrieve\rerank_memory.py:139 - candidates: List of memory candidates to format.

## reme\extension\procedural_memory\retrieve\rerank_memory.yaml
reme\extension\procedural_memory\retrieve\rerank_memory.yaml:1 - memory_rerank_prompt: |

## reme\extension\procedural_memory\retrieve\rewrite_memory.py
reme\extension\procedural_memory\retrieve\rewrite_memory.py:16 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\retrieve\rewrite_memory.py:19 - class RewriteMemory(BaseOp):
reme\extension\procedural_memory\retrieve\rewrite_memory.py:30 - Retrieves memories from context metadata, formats them, and optionally
reme\extension\procedural_memory\retrieve\rewrite_memory.py:34 - memory_list: List[MemoryNode] = self.context.response.metadata["memory_list"]
reme\extension\procedural_memory\retrieve\rewrite_memory.py:38 - if not memory_list:
reme\extension\procedural_memory\retrieve\rewrite_memory.py:43 - logger.info(f"Generating context from {len(memory_list)} memories")
reme\extension\procedural_memory\retrieve\rewrite_memory.py:46 - rewritten_memory = await self._generate_context_message(query, messages, memory_list)
reme\extension\procedural_memory\retrieve\rewrite_memory.py:49 - self.context.response.answer = rewritten_memory
reme\extension\procedural_memory\retrieve\rewrite_memory.py:50 - self.context.response.metadata["memory_list"] = [memory.model_dump() for memory in memory_list]
reme\extension\procedural_memory\retrieve\rewrite_memory.py:52 - async def _generate_context_message(self, query: str, messages: List[Message], memories: List[MemoryNode]) -> str:
reme\extension\procedural_memory\retrieve\rewrite_memory.py:53 - """Generate context message from retrieved memories.
reme\extension\procedural_memory\retrieve\rewrite_memory.py:101 - prompt_name="memory_rewrite_prompt",
reme\extension\procedural_memory\retrieve\rewrite_memory.py:123 - def _format_memories_for_context(memories: List[MemoryNode]) -> str:
reme\extension\procedural_memory\retrieve\rewrite_memory.py:134 - for i, memory in enumerate(memories, 1):
reme\extension\procedural_memory\retrieve\rewrite_memory.py:135 - condition = memory.when_to_use
reme\extension\procedural_memory\retrieve\rewrite_memory.py:136 - memory_content = memory.content
reme\extension\procedural_memory\retrieve\rewrite_memory.py:137 - memory_text = f"Memory {i} :\n When to use: {condition}\n Content: {memory_content}\n"

## reme\extension\procedural_memory\retrieve\rewrite_memory.yaml
reme\extension\procedural_memory\retrieve\rewrite_memory.yaml:1 - memory_rewrite_prompt: |

## reme\extension\procedural_memory\retrieve\update_memory_metadata.py
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:13 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:17 - class UpdateMemoryMetadata(BaseOp):
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:18 - """Update memory metadata: frequency and optionally utility.
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:25 - memory_list: List of MemoryNode objects to update (already loaded from
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:27 - update_utility: Boolean flag. If True, also increment utility for each memory.
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:32 - memory_list: List[MemoryNode] = [MemoryNode(**node) for node in self.context.memory_list]
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:35 - if not memory_list:
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:40 - for memory in memory_list:
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:41 - meta = memory.metadata
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:45 - memory.metadata = meta
reme\extension\procedural_memory\retrieve\update_memory_metadata.py:46 - vector_node = memory.to_vector_node()

## reme\extension\procedural_memory\summary\comparative_extraction.py
reme\extension\procedural_memory\summary\comparative_extraction.py:11 - from ....core.enumeration import MemoryType, Role
reme\extension\procedural_memory\summary\comparative_extraction.py:13 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\summary\comparative_extraction.py:48 - soft_task_memories = await self._extract_soft_comparative_task_memory(highest_traj, lowest_traj)
reme\extension\procedural_memory\summary\comparative_extraction.py:57 - hard_task_memories = await self._extract_hard_comparative_task_memory(
reme\extension\procedural_memory\summary\comparative_extraction.py:98 - async def _extract_soft_comparative_task_memory(
reme\extension\procedural_memory\summary\comparative_extraction.py:102 - ) -> List[MemoryNode]:
reme\extension\procedural_memory\summary\comparative_extraction.py:110 - prompt_name="soft_comparative_step_task_memory_prompt",
reme\extension\procedural_memory\summary\comparative_extraction.py:117 - def parse_task_memories(message: Message) -> List[MemoryNode]:
reme\extension\procedural_memory\summary\comparative_extraction.py:122 - task_memory = MemoryNode(
reme\extension\procedural_memory\summary\comparative_extraction.py:123 - memory_type=MemoryType.PROCEDURAL,
reme\extension\procedural_memory\summary\comparative_extraction.py:138 - async def _extract_hard_comparative_task_memory(
reme\extension\procedural_memory\summary\comparative_extraction.py:143 - ) -> List[MemoryNode]:
reme\extension\procedural_memory\summary\comparative_extraction.py:146 - prompt_name="hard_comparative_step_task_memory_prompt",
reme\extension\procedural_memory\summary\comparative_extraction.py:152 - def parse_task_memories(message: Message) -> List[MemoryNode]:
reme\extension\procedural_memory\summary\comparative_extraction.py:157 - task_memory = MemoryNode(
reme\extension\procedural_memory\summary\comparative_extraction.py:158 - memory_type=MemoryType.PROCEDURAL,

## reme\extension\procedural_memory\summary\comparative_extraction.yaml
reme\extension\procedural_memory\summary\comparative_extraction.yaml:1 - soft_comparative_step_task_memory_prompt: |
reme\extension\procedural_memory\summary\comparative_extraction.yaml:41 - hard_comparative_step_task_memory_prompt: |

## reme\extension\procedural_memory\summary\failure_extraction.py
reme\extension\procedural_memory\summary\failure_extraction.py:3 - This module provides operations to extract task memories from failed trajectories,
reme\extension\procedural_memory\summary\failure_extraction.py:11 - from ....core.enumeration import MemoryType, Role
reme\extension\procedural_memory\summary\failure_extraction.py:13 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\summary\failure_extraction.py:23 - """Extract task memories from failed trajectories.
reme\extension\procedural_memory\summary\failure_extraction.py:31 - """Extract task memories from failed trajectories"""
reme\extension\procedural_memory\summary\failure_extraction.py:38 - logger.info(f"Extracting task memories from {len(failure_trajectories)} failed trajectories")
reme\extension\procedural_memory\summary\failure_extraction.py:47 - task_memories = await self._extract_failure_task_memory_from_steps(segment, trajectory)
reme\extension\procedural_memory\summary\failure_extraction.py:51 - task_memories = await self._extract_failure_task_memory_from_steps(trajectory.messages, trajectory)
reme\extension\procedural_memory\summary\failure_extraction.py:59 - async def _extract_failure_task_memory_from_steps(
reme\extension\procedural_memory\summary\failure_extraction.py:63 - ) -> List[MemoryNode]:
reme\extension\procedural_memory\summary\failure_extraction.py:64 - """Extract task memory from failed step sequences"""
reme\extension\procedural_memory\summary\failure_extraction.py:69 - prompt_name="failure_step_task_memory_prompt",
reme\extension\procedural_memory\summary\failure_extraction.py:76 - def parse_task_memories(message: Message) -> List[MemoryNode]:
reme\extension\procedural_memory\summary\failure_extraction.py:81 - task_memory = MemoryNode(
reme\extension\procedural_memory\summary\failure_extraction.py:82 - memory_type=MemoryType.PROCEDURAL,

## reme\extension\procedural_memory\summary\failure_extraction.yaml
reme\extension\procedural_memory\summary\failure_extraction.yaml:1 - failure_step_task_memory_prompt: |
reme\extension\procedural_memory\summary\failure_extraction.yaml:4 - Your task is to extract learning task memories from failures to prevent similar mistakes in future executions.

## reme\extension\procedural_memory\summary\memory_addition.py
reme\extension\procedural_memory\summary\memory_addition.py:7 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\summary\memory_addition.py:10 - class MemoryAddition(BaseOp):
reme\extension\procedural_memory\summary\memory_addition.py:14 - of memories to insert from response.metadata and performs the actual
reme\extension\procedural_memory\summary\memory_addition.py:22 - 1. Reads memory_list from context (can be dicts or MemoryNode)
reme\extension\procedural_memory\summary\memory_addition.py:27 - raw_memory_list = self.context.memory_list
reme\extension\procedural_memory\summary\memory_addition.py:28 - insert_memory_list: List[MemoryNode] = [MemoryNode(**x) if isinstance(x, dict) else x for x in raw_memory_list]
reme\extension\procedural_memory\summary\memory_addition.py:29 - if insert_memory_list:
reme\extension\procedural_memory\summary\memory_addition.py:30 - insert_nodes: List[VectorNode] = [x.to_vector_node() for x in insert_memory_list]

## reme\extension\procedural_memory\summary\memory_deduplication.py
reme\extension\procedural_memory\summary\memory_deduplication.py:12 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\summary\memory_deduplication.py:15 - class MemoryDeduplication(BaseOp):
reme\extension\procedural_memory\summary\memory_deduplication.py:26 - task_memories: List[MemoryNode] = self.context.response.metadata.get("memory_list", [])
reme\extension\procedural_memory\summary\memory_deduplication.py:43 - self.context.response.metadata["memory_list"] = deduplicated_task_memories
reme\extension\procedural_memory\summary\memory_deduplication.py:45 - async def _deduplicate_task_memories(self, task_memories: List[MemoryNode]) -> List[MemoryNode]:
reme\extension\procedural_memory\summary\memory_deduplication.py:55 - existing_embeddings = await self._get_existing_task_memory_embeddings()
reme\extension\procedural_memory\summary\memory_deduplication.py:57 - for task_memory in task_memories:
reme\extension\procedural_memory\summary\memory_deduplication.py:59 - current_embedding = await self._get_task_memory_embedding(task_memory)
reme\extension\procedural_memory\summary\memory_deduplication.py:62 - logger.warning(f"Failed to generate embedding for task memory: {str(task_memory.when_to_use)[:50]}...")
reme\extension\procedural_memory\summary\memory_deduplication.py:67 - logger.debug(f"Skipping similar task memory: {str(task_memory.when_to_use)[:50]}...")
reme\extension\procedural_memory\summary\memory_deduplication.py:76 - logger.debug(f"Skipping duplicate in current batch: {str(task_memory.when_to_use)[:50]}...")
reme\extension\procedural_memory\summary\memory_deduplication.py:81 - logger.debug(f"Added unique task memory: {str(task_memory.when_to_use)[:50]}...")
reme\extension\procedural_memory\summary\memory_deduplication.py:85 - async def _get_existing_task_memory_embeddings(self) -> List[List[float]]:
reme\extension\procedural_memory\summary\memory_deduplication.py:109 - logger.warning(f"Failed to retrieve existing task memory embeddings: {e}")
reme\extension\procedural_memory\summary\memory_deduplication.py:112 - async def _get_task_memory_embedding(self, task_memory: MemoryNode) -> List[float] | None:
reme\extension\procedural_memory\summary\memory_deduplication.py:117 - text_for_embedding = f"{task_memory.when_to_use} {task_memory.content}"
reme\extension\procedural_memory\summary\memory_deduplication.py:127 - logger.error(f"Error generating embedding for task memory: {e}")
reme\extension\procedural_memory\summary\memory_deduplication.py:130 - def _is_similar_to_existing_task_memories(
reme\extension\procedural_memory\summary\memory_deduplication.py:140 - logger.debug(f"Found similar existing task memory with similarity: {similarity:.3f}")
reme\extension\procedural_memory\summary\memory_deduplication.py:144 - async def _is_similar_to_current_task_memories(
... and 4 more

## reme\extension\procedural_memory\summary\memory_validation.py
reme\extension\procedural_memory\summary\memory_validation.py:17 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\summary\memory_validation.py:20 - class MemoryValidation(BaseOp):
reme\extension\procedural_memory\summary\memory_validation.py:31 - task_memories: List[MemoryNode] = []
reme\extension\procedural_memory\summary\memory_validation.py:45 - for task_memory in task_memories:
reme\extension\procedural_memory\summary\memory_validation.py:46 - validation_result = await self._validate_single_task_memory(task_memory)
reme\extension\procedural_memory\summary\memory_validation.py:48 - task_memory.score = validation_result.get("score", 0.0)
reme\extension\procedural_memory\summary\memory_validation.py:52 - logger.warning(f"Task memory validation failed: {reason}")
reme\extension\procedural_memory\summary\memory_validation.py:58 - self.context.response.metadata["memory_list"] = validated_task_memories
reme\extension\procedural_memory\summary\memory_validation.py:60 - async def _validate_single_task_memory(self, task_memory: MemoryNode) -> Dict[str, Any]:
reme\extension\procedural_memory\summary\memory_validation.py:62 - validation_info = await self._llm_validate_task_memory(task_memory)
reme\extension\procedural_memory\summary\memory_validation.py:66 - async def _llm_validate_task_memory(self, task_memory: MemoryNode) -> Dict[str, Any]:
reme\extension\procedural_memory\summary\memory_validation.py:70 - prompt_name="task_memory_validation_prompt",
reme\extension\procedural_memory\summary\memory_validation.py:71 - condition=task_memory.when_to_use,
reme\extension\procedural_memory\summary\memory_validation.py:72 - task_memory_content=task_memory.content,
reme\extension\procedural_memory\summary\memory_validation.py:91 - f"JSONDecodeError in task_memory_validation, fallback to regex parse: {json_err}",

## reme\extension\procedural_memory\summary\memory_validation.yaml
reme\extension\procedural_memory\summary\memory_validation.yaml:1 - task_memory_validation_prompt: |
reme\extension\procedural_memory\summary\memory_validation.yaml:7 - ● ACTIONABILITY: Is the task memory specific enough to guide future actions?
reme\extension\procedural_memory\summary\memory_validation.yaml:8 - ● ACCURACY: Does the task memory correctly reflect the patterns observed?
reme\extension\procedural_memory\summary\memory_validation.yaml:9 - ● RELEVANCE: Is the task memory applicable to similar future scenarios?
reme\extension\procedural_memory\summary\memory_validation.yaml:10 - ● CLARITY: Is the task memory clearly articulated and understandable?
reme\extension\procedural_memory\summary\memory_validation.yaml:11 - ● UNIQUENESS: Does the task memory provide novel insights or common knowledge?
reme\extension\procedural_memory\summary\memory_validation.yaml:15 - Task Memory Content: {task_memory_content}

## reme\extension\procedural_memory\summary\success_extraction.py
reme\extension\procedural_memory\summary\success_extraction.py:3 - This module provides operations to extract task memories from successful
reme\extension\procedural_memory\summary\success_extraction.py:11 - from ....core.enumeration import MemoryType, Role
reme\extension\procedural_memory\summary\success_extraction.py:13 - from ....core.schema.memory_node import MemoryNode
reme\extension\procedural_memory\summary\success_extraction.py:23 - """Extract task memories from successful trajectories.
reme\extension\procedural_memory\summary\success_extraction.py:31 - """Extract task memories from successful trajectories"""
reme\extension\procedural_memory\summary\success_extraction.py:38 - logger.info(f"Extracting task memories from {len(success_trajectories)} successful trajectories")
reme\extension\procedural_memory\summary\success_extraction.py:47 - task_memories = await self._extract_success_task_memory_from_steps(segment, trajectory)
reme\extension\procedural_memory\summary\success_extraction.py:51 - task_memories = await self._extract_success_task_memory_from_steps(trajectory.messages, trajectory)
reme\extension\procedural_memory\summary\success_extraction.py:59 - async def _extract_success_task_memory_from_steps(
reme\extension\procedural_memory\summary\success_extraction.py:63 - ) -> List[MemoryNode]:
reme\extension\procedural_memory\summary\success_extraction.py:64 - """Extract task memory from successful step sequences"""
reme\extension\procedural_memory\summary\success_extraction.py:69 - prompt_name="success_step_task_memory_prompt",
reme\extension\procedural_memory\summary\success_extraction.py:76 - def parse_task_memories(message: Message) -> list[MemoryNode]:
reme\extension\procedural_memory\summary\success_extraction.py:81 - task_memory = MemoryNode(
reme\extension\procedural_memory\summary\success_extraction.py:82 - memory_type=MemoryType.PROCEDURAL,

## reme\extension\procedural_memory\summary\success_extraction.yaml
reme\extension\procedural_memory\summary\success_extraction.yaml:1 - success_step_task_memory_prompt: |

## reme\extension\procedural_memory\summary\trajectory_segmentation.py
reme\extension\procedural_memory\summary\trajectory_segmentation.py:22 - allowing for more granular analysis and memory extraction from specific

## reme\memory\file_based\reme_in_memory_memory.py
reme\memory\file_based\reme_in_memory_memory.py:7 - from agentscope.agent._react_agent import _MemoryMark  # noqa
reme\memory\file_based\reme_in_memory_memory.py:8 - from agentscope.memory import InMemoryMemory
reme\memory\file_based\reme_in_memory_memory.py:18 - class ReMeInMemoryMemory(InMemoryMemory):
reme\memory\file_based\reme_in_memory_memory.py:37 - self._long_term_memory: str = ""
reme\memory\file_based\reme_in_memory_memory.py:112 - async def get_memory(
reme\memory\file_based\reme_in_memory_memory.py:117 - """Get the messages from the memory by mark (if provided).
reme\memory\file_based\reme_in_memory_memory.py:126 - filtered_content = [(msg, marks) for msg, marks in self.content if _MemoryMark.COMPRESSED not in marks]
reme\memory\file_based\reme_in_memory_memory.py:129 - if self._long_term_memory:
reme\memory\file_based\reme_in_memory_memory.py:180 - """Mark messages as compressed, persist them to dialog, and remove from memory.
reme\memory\file_based\reme_in_memory_memory.py:184 - 2. Removes them from memory
reme\memory\file_based\reme_in_memory_memory.py:198 - # Remove messages from memory
reme\memory\file_based\reme_in_memory_memory.py:204 - logger.info(f"Marked {removed_count} messages as compressed and removed from memory")
reme\memory\file_based\reme_in_memory_memory.py:225 - logger.info("Cleared all messages from memory")
reme\memory\file_based\reme_in_memory_memory.py:243 - messages = await self.get_memory(prepend_summary=False)

## reme\memory\file_based\__init__.py
reme\memory\file_based\__init__.py:6 - from .reme_in_memory_memory import ReMeInMemoryMemory

## reme\memory\file_based\components\cli.py
reme\memory\file_based\components\cli.py:16 - from ..tools import FileIO, MemorySearch
reme\memory\file_based\components\cli.py:88 - memory_path = Path(self.working_dir) / "memory"
reme\memory\file_based\components\cli.py:91 - memory_dir=str(memory_path),
reme\memory\file_based\components\cli.py:92 - memory_compact_threshold=int(self.context_window_tokens * 0.7),
reme\memory\file_based\components\cli.py:139 - memory_compact_threshold=self.context_window_tokens - self.reserve_tokens,
reme\memory\file_based\components\cli.py:140 - memory_compact_reserve=self.keep_recent_tokens,
reme\memory\file_based\components\cli.py:169 - memory_compact_threshold=self.context_window_tokens - self.reserve_tokens,
reme\memory\file_based\components\cli.py:224 - async def memory_search(self, query: str, max_results: int = 5, min_score: float = 0.1) -> ToolResponse:
reme\memory\file_based\components\cli.py:226 - Mandatory recall step: semantically search MEMORY.md + memory/*.md (and optional session transcripts)
reme\memory\file_based\components\cli.py:231 - query: The semantic search query to find relevant memory snippets
reme\memory\file_based\components\cli.py:238 - search_tool = MemorySearch(

## reme\memory\file_based\components\cli.yaml
reme\memory\file_based\components\cli.yaml:20 - - **Long-term memory:** `MEMORY.md` — when you pick up a lesson or catch yourself making a mistake, feel free to **read, edit, and update** MEMORY.md
reme\memory\file_based\components\cli.yaml:21 - - **Daily notes:** `memory/YYYY-MM-DD.md` — jot things down often. When the user says "remember this," or whenever you feel something is worth noting or adding as a todo, feel free to **read, edit, and update** `memory/YYYY-MM-DD.md`
reme\memory\file_based\components\cli.yaml:25 - 1. Start with `memory_search` — if nothing comes up, try rephrasing from a different angle
reme\memory\file_based\components\cli.yaml:40 - This is just a starting point. When you spot useful patterns or lessons during your conversations, note them in `MEMORY.md`. Do not modify system-level config files.

## reme\memory\file_based\components\compactor.py
reme\memory\file_based\components\compactor.py:30 - """Compactor class for compacting memory messages."""
reme\memory\file_based\components\compactor.py:34 - memory_compact_threshold: int,
reme\memory\file_based\components\compactor.py:41 - self.memory_compact_threshold: int = memory_compact_threshold
reme\memory\file_based\components\compactor.py:60 - memory_compact_threshold=self.memory_compact_threshold,

## reme\memory\file_based\components\context_checker.py
reme\memory\file_based\components\context_checker.py:21 - memory_compact_threshold (int): Token count threshold for triggering compaction.
reme\memory\file_based\components\context_checker.py:22 - memory_compact_reserve (int): Token count to reserve for recent messages.
reme\memory\file_based\components\context_checker.py:27 - memory_compact_threshold: int,
reme\memory\file_based\components\context_checker.py:28 - memory_compact_reserve: int = 10000,
reme\memory\file_based\components\context_checker.py:35 - memory_compact_threshold (int): Token count threshold for triggering
reme\memory\file_based\components\context_checker.py:37 - memory_compact_reserve (int): Token count to reserve for recent messages
reme\memory\file_based\components\context_checker.py:42 - self.memory_compact_threshold: int = memory_compact_threshold
reme\memory\file_based\components\context_checker.py:43 - self.memory_compact_reserve: int = memory_compact_reserve
reme\memory\file_based\components\context_checker.py:80 - memory_compact_threshold=self.memory_compact_threshold,
reme\memory\file_based\components\context_checker.py:81 - memory_compact_reserve=self.memory_compact_reserve,

## reme\memory\file_based\components\summarizer.py
reme\memory\file_based\components\summarizer.py:18 - """Summarizer class for summarizing memory messages."""
reme\memory\file_based\components\summarizer.py:23 - memory_dir: str,
reme\memory\file_based\components\summarizer.py:24 - memory_compact_threshold: int,
reme\memory\file_based\components\summarizer.py:33 - self.memory_dir: str = memory_dir
reme\memory\file_based\components\summarizer.py:34 - self.memory_compact_threshold: int = memory_compact_threshold
reme\memory\file_based\components\summarizer.py:59 - memory_compact_threshold=self.memory_compact_threshold,
reme\memory\file_based\components\summarizer.py:82 - memory_dir=self.memory_dir,
reme\memory\file_based\components\summarizer.py:92 - for i, (msg, _) in enumerate(agent.memory.content):
reme\memory\file_based\components\summarizer.py:93 - logger.info(f"Summarizer memory[{i}]: {msg.content}")

## reme\memory\file_based\components\summarizer.yaml
reme\memory\file_based\components\summarizer.yaml:10 - Immediately store persistent memory and reflections to: {memory_dir}/YYYY-MM-DD.md
reme\memory\file_based\components\summarizer.yaml:14 - - Persistent Memory: Facts, user profile updates, project states, and important events.
reme\memory\file_based\components\summarizer.yaml:23 - - Categorize clearly (e.g., separate "Factual Memory" from "Reflections & Logic").

## reme\memory\file_based\tools\memory_get.py
reme\memory\file_based\tools\memory_get.py:1 - """Memory get tool for reading specific snippets from memory files."""
reme\memory\file_based\tools\memory_get.py:16 - class MemoryGet(BaseTool):
reme\memory\file_based\tools\memory_get.py:17 - """Read specific snippets from memory files."""
reme\memory\file_based\tools\memory_get.py:30 - "Safe snippet read from MEMORY.md, memory/*.md with optional offset/limit; "
reme\memory\file_based\tools\memory_get.py:38 - "description": "Path to the memory file to read (relative or absolute)",

## reme\memory\file_based\tools\memory_search.py
reme\memory\file_based\tools\memory_search.py:6 - from ....core.enumeration import MemorySource
reme\memory\file_based\tools\memory_search.py:15 - class MemorySearch(BaseTool):
reme\memory\file_based\tools\memory_search.py:20 - sources: list[MemorySource] | None = None,
reme\memory\file_based\tools\memory_search.py:32 - self.sources = sources or [MemorySource.MEMORY]
reme\memory\file_based\tools\memory_search.py:42 - "Mandatory recall step: semantically search MEMORY.md + memory/*.md "
reme\memory\file_based\tools\memory_search.py:52 - "description": "The semantic search query to find relevant memory snippets",

## reme\memory\file_based\tools\__init__.py
reme\memory\file_based\tools\__init__.py:4 - from .memory_get import MemoryGet
reme\memory\file_based\tools\__init__.py:5 - from .memory_search import MemorySearch

## reme\memory\file_based\utils\as_msg_handler.py
reme\memory\file_based\utils\as_msg_handler.py:206 - memory_compact_threshold: int,
reme\memory\file_based\utils\as_msg_handler.py:216 - memory_compact_threshold: Maximum token count before skipping older messages.
reme\memory\file_based\utils\as_msg_handler.py:231 - if not is_latest and total_token_count + content_token_count > memory_compact_threshold:
reme\memory\file_based\utils\as_msg_handler.py:234 - f"{memory_compact_threshold} (current: {total_token_count})",
reme\memory\file_based\utils\as_msg_handler.py:238 - if is_latest and content_token_count > memory_compact_threshold:
reme\memory\file_based\utils\as_msg_handler.py:276 - memory_compact_threshold: int,
reme\memory\file_based\utils\as_msg_handler.py:277 - memory_compact_reserve: int,
reme\memory\file_based\utils\as_msg_handler.py:286 - memory_compact_threshold: Maximum token count threshold to trigger compaction.
reme\memory\file_based\utils\as_msg_handler.py:287 - memory_compact_reserve: Token limit for messages to keep.
reme\memory\file_based\utils\as_msg_handler.py:307 - if total_tokens < memory_compact_threshold:
reme\memory\file_based\utils\as_msg_handler.py:339 - if accumulated_tokens + stat.total_tokens > memory_compact_reserve:
reme\memory\file_based\utils\as_msg_handler.py:342 - f"{memory_compact_reserve} (current: {accumulated_tokens})",
reme\memory\file_based\utils\as_msg_handler.py:365 - if accumulated_tokens + stat.total_tokens + extra_tokens > memory_compact_reserve:
reme\memory\file_based\utils\as_msg_handler.py:393 - f"total tokens: {total_tokens}, threshold: {memory_compact_threshold}, "
reme\memory\file_based\utils\as_msg_handler.py:394 - f"reserve: {memory_compact_reserve}, kept tokens: {accumulated_tokens}, "

## reme\memory\file_based\utils\file_utils.py
reme\memory\file_based\utils\file_utils.py:207 - max_bytes: Maximum bytes to read into memory (default 1GB).

## reme\memory\vector_based\base_memory_agent.py
reme\memory\vector_based\base_memory_agent.py:6 - from ...core.enumeration import MemoryType
reme\memory\vector_based\base_memory_agent.py:8 - from ...core.schema import MemoryNode
reme\memory\vector_based\base_memory_agent.py:11 - class BaseMemoryAgent(BaseReact, metaclass=ABCMeta):
reme\memory\vector_based\base_memory_agent.py:12 - """Base class for memory agents that handle memory operations with tool-based reasoning."""
reme\memory\vector_based\base_memory_agent.py:14 - memory_type: MemoryType | None = None
reme\memory\vector_based\base_memory_agent.py:32 - def memory_target(self) -> str:
reme\memory\vector_based\base_memory_agent.py:37 - def history_node(self) -> MemoryNode:
reme\memory\vector_based\base_memory_agent.py:47 - def retrieved_nodes(self) -> list[MemoryNode]:
reme\memory\vector_based\base_memory_agent.py:54 - def memory_target_type_mapping(self) -> dict[str, MemoryType]:
reme\memory\vector_based\base_memory_agent.py:55 - """Get the memory target type mapping from context."""
reme\memory\vector_based\base_memory_agent.py:56 - memory_targets = self.context.memory_targets
reme\memory\vector_based\base_memory_agent.py:57 - memory_target_type_mapping = self.context.service_context.memory_target_type_mapping.copy()
reme\memory\vector_based\base_memory_agent.py:58 - if memory_targets:
reme\memory\vector_based\base_memory_agent.py:59 - return {memory_target: memory_target_type_mapping[memory_target] for memory_target in memory_targets}
reme\memory\vector_based\base_memory_agent.py:64 - def meta_memory_info(self) -> str:
reme\memory\vector_based\base_memory_agent.py:65 - """Get the meta memory info from context."""
reme\memory\vector_based\base_memory_agent.py:67 - for memory_target, memory_type in self.memory_target_type_mapping.items():
reme\memory\vector_based\base_memory_agent.py:69 - "agent": f"Agent managing {memory_type.value} memories for {memory_target}",
reme\memory\vector_based\base_memory_agent.py:70 - "memory_target": memory_target,

## reme\memory\vector_based\reme_retriever.py
reme\memory\vector_based\reme_retriever.py:3 - from .base_memory_agent import BaseMemoryAgent
reme\memory\vector_based\reme_retriever.py:10 - class ReMeRetriever(BaseMemoryAgent):
reme\memory\vector_based\reme_retriever.py:26 - meta_memory_info=self.meta_memory_info,
reme\memory\vector_based\reme_retriever.py:80 - agents: list[BaseMemoryAgent] = delegate_task_tool.response.metadata["agents"]

## reme\memory\vector_based\reme_retriever.yaml
reme\memory\vector_based\reme_retriever.yaml:8 - Each line below is a JSON object representing a specialized Memory Agent:
reme\memory\vector_based\reme_retriever.yaml:10 - - `memory_target`: The unique identifier for this agent (THIS IS WHAT YOU MUST USE)
reme\memory\vector_based\reme_retriever.yaml:16 - 1. Examine the context content and identify which memory_target(s) from the "Available Memory Agents" list above should be queried for relevant information
reme\memory\vector_based\reme_retriever.yaml:18 - - **CRITICAL**: The memory_target must be EXACTLY one of the `memory_target` field values from the JSON objects listed in "Available Memory Agents" above
reme\memory\vector_based\reme_retriever.yaml:19 - - **DO NOT** extract or create new memory_target names from the context content
reme\memory\vector_based\reme_retriever.yaml:20 - - **DO NOT** use topic names, entity names, descriptions, or any other identifiers from the context as memory_targets
reme\memory\vector_based\reme_retriever.yaml:22 - - **ONLY** use the exact string values from the `memory_target` fields in the JSON objects above

## reme\memory\vector_based\reme_summarizer.py
reme\memory\vector_based\reme_summarizer.py:3 - from .base_memory_agent import BaseMemoryAgent
reme\memory\vector_based\reme_summarizer.py:10 - class ReMeSummarizer(BaseMemoryAgent):
reme\memory\vector_based\reme_summarizer.py:30 - meta_memory_info=self.meta_memory_info,
reme\memory\vector_based\reme_summarizer.py:81 - memory_nodes = []
reme\memory\vector_based\reme_summarizer.py:85 - agents: list[BaseMemoryAgent] = delegate_task_tool.response.metadata["agents"]
reme\memory\vector_based\reme_summarizer.py:94 - "answer": memory_nodes,

## reme\memory\vector_based\reme_summarizer.yaml
reme\memory\vector_based\reme_summarizer.yaml:8 - Each line below is a JSON object representing a specialized Memory Agent:
reme\memory\vector_based\reme_summarizer.yaml:10 - - `memory_target`: The unique identifier for this agent (THIS IS WHAT YOU MUST USE)
reme\memory\vector_based\reme_summarizer.yaml:16 - 1. Examine the context content and identify which memory_target(s) from the "Available Memory Agents" list above should receive this information
reme\memory\vector_based\reme_summarizer.yaml:18 - - **CRITICAL**: The memory_target must be EXACTLY one of the `memory_target` field values from the JSON objects listed in "Available Memory Agents" above
reme\memory\vector_based\reme_summarizer.yaml:19 - - **DO NOT** extract or create new memory_target names from the context content
reme\memory\vector_based\reme_summarizer.yaml:20 - - **DO NOT** use topic names, preference categories, descriptions, or any other identifiers from the context as memory_targets
reme\memory\vector_based\reme_summarizer.yaml:22 - - **ONLY** use the exact string values from the `memory_target` fields in the JSON objects above
reme\memory\vector_based\reme_summarizer.yaml:26 - Note: If the context contains no memorable information (e.g., simple greetings), return `<NO_MEMORY_NEEDED>`.

## reme\memory\vector_based\__init__.py
reme\memory\vector_based\__init__.py:3 - from .base_memory_agent import BaseMemoryAgent

## reme\memory\vector_based\personal\personal_retriever.py
reme\memory\vector_based\personal\personal_retriever.py:3 - from ..base_memory_agent import BaseMemoryAgent
reme\memory\vector_based\personal\personal_retriever.py:4 - from ....core.enumeration import Role, MemoryType
reme\memory\vector_based\personal\personal_retriever.py:10 - class PersonalRetriever(BaseMemoryAgent):
reme\memory\vector_based\personal\personal_retriever.py:38 - memory_type: MemoryType = MemoryType.PERSONAL
reme\memory\vector_based\personal\personal_retriever.py:40 - def __init__(self, return_memory_nodes: bool = False, **kwargs):
reme\memory\vector_based\personal\personal_retriever.py:42 - self.return_memory_nodes: bool = return_memory_nodes
reme\memory\vector_based\personal\personal_retriever.py:55 - memory_target=self.memory_target,
reme\memory\vector_based\personal\personal_retriever.py:66 - memory_type=self.memory_type.value,
reme\memory\vector_based\personal\personal_retriever.py:67 - memory_target=self.memory_target,
reme\memory\vector_based\personal\personal_retriever.py:87 - memory_type=self.memory_type.value,
reme\memory\vector_based\personal\personal_retriever.py:88 - memory_target=self.memory_target,
reme\memory\vector_based\personal\personal_retriever.py:95 - if self.return_memory_nodes:
reme\memory\vector_based\personal\personal_retriever.py:99 - include_memory_id=False,
reme\memory\vector_based\personal\personal_retriever.py:103 - ref_memory_id_key="",

## reme\memory\vector_based\personal\personal_retriever.yaml
reme\memory\vector_based\personal\personal_retriever.yaml:14 - **Tool**: `retrieve_memory` (without time constraints)
reme\memory\vector_based\personal\personal_retriever.yaml:25 - **Tool**: `retrieve_memory` (with time filter)
reme\memory\vector_based\personal\personal_retriever.yaml:44 - - Extract `history_id` from retrieved memory references
reme\memory\vector_based\personal\personal_retriever.yaml:53 - - Always cite sources with timestamps: `[timestamp] Memory content`

## reme\memory\vector_based\personal\personal_summarizer.py
reme\memory\vector_based\personal\personal_summarizer.py:5 - from ..base_memory_agent import BaseMemoryAgent
reme\memory\vector_based\personal\personal_summarizer.py:6 - from ....core.enumeration import Role, MemoryType
reme\memory\vector_based\personal\personal_summarizer.py:11 - class PersonalSummarizer(BaseMemoryAgent):
reme\memory\vector_based\personal\personal_summarizer.py:12 - """Two-phase personal memory processor: retrieve/add memories then update profile."""
reme\memory\vector_based\personal\personal_summarizer.py:14 - memory_type: MemoryType = MemoryType.PERSONAL
reme\memory\vector_based\personal\personal_summarizer.py:23 - memory_type=self.memory_type.value,
reme\memory\vector_based\personal\personal_summarizer.py:24 - memory_target=self.memory_target,
reme\memory\vector_based\personal\personal_summarizer.py:37 - memory_type=self.memory_type.value,
reme\memory\vector_based\personal\personal_summarizer.py:38 - memory_target=self.memory_target,
reme\memory\vector_based\personal\personal_summarizer.py:57 - memory_type=self.memory_type.value,
reme\memory\vector_based\personal\personal_summarizer.py:58 - memory_target=self.memory_target,
reme\memory\vector_based\personal\personal_summarizer.py:66 - memory_tools = []
reme\memory\vector_based\personal\personal_summarizer.py:73 - elif "_memory" in tool_name:
reme\memory\vector_based\personal\personal_summarizer.py:81 - stage = "s1-memory"
reme\memory\vector_based\personal\personal_summarizer.py:86 - tools_s1, messages_s1, success_s1 = await self.react(messages_s1, memory_tools, stage=stage)
reme\memory\vector_based\personal\personal_summarizer.py:90 - memory_target=self.memory_target,
reme\memory\vector_based\personal\personal_summarizer.py:112 - memory_nodes = []
reme\memory\vector_based\personal\personal_summarizer.py:114 - if tool.memory_nodes:
reme\memory\vector_based\personal\personal_summarizer.py:122 - "memory_nodes": memory_nodes,

## reme\memory\vector_based\personal\personal_summarizer.yaml
reme\memory\vector_based\personal\personal_summarizer.yaml:9 - ### Step 1: Create Memory Draft
reme\memory\vector_based\personal\personal_summarizer.yaml:11 - - For each memory draft, fill in the required parameters:
reme\memory\vector_based\personal\personal_summarizer.yaml:13 - * `memory_content`: concise memory content extracted from the conversation
reme\memory\vector_based\personal\personal_summarizer.yaml:19 - Review each memory draft from Step 1 and compare it with the retrieved historical memories, then use `add_memory` to add new memories:
reme\memory\vector_based\personal\personal_summarizer.yaml:21 - **Parameters for each memory:**
reme\memory\vector_based\personal\personal_summarizer.yaml:23 - - `memory_content`: memory content

## reme\memory\vector_based\procedural\procedural_retriever.py
reme\memory\vector_based\procedural\procedural_retriever.py:3 - from ..base_memory_agent import BaseMemoryAgent
reme\memory\vector_based\procedural\procedural_retriever.py:4 - from ....core.enumeration import Role, MemoryType
reme\memory\vector_based\procedural\procedural_retriever.py:10 - class ProceduralRetriever(BaseMemoryAgent):
reme\memory\vector_based\procedural\procedural_retriever.py:19 - memory_type: MemoryType = MemoryType.PROCEDURAL
reme\memory\vector_based\procedural\procedural_retriever.py:21 - def __init__(self, return_memory_nodes: bool = False, **kwargs):
reme\memory\vector_based\procedural\procedural_retriever.py:23 - self.return_memory_nodes: bool = return_memory_nodes
reme\memory\vector_based\procedural\procedural_retriever.py:39 - memory_type=self.memory_type.value,
reme\memory\vector_based\procedural\procedural_retriever.py:40 - memory_target=self.memory_target,
reme\memory\vector_based\procedural\procedural_retriever.py:59 - memory_type=self.memory_type.value,
reme\memory\vector_based\procedural\procedural_retriever.py:60 - memory_target=self.memory_target,
reme\memory\vector_based\procedural\procedural_retriever.py:67 - if self.return_memory_nodes:
reme\memory\vector_based\procedural\procedural_retriever.py:71 - include_memory_id=False,
reme\memory\vector_based\procedural\procedural_retriever.py:75 - ref_memory_id_key="",

## reme\memory\vector_based\procedural\procedural_retriever.yaml
reme\memory\vector_based\procedural\procedural_retriever.yaml:11 - **Tool**: `retrieve_memory`
reme\memory\vector_based\procedural\procedural_retriever.yaml:29 - - Extract `history_id` from retrieved memory references

## reme\memory\vector_based\procedural\procedural_summarizer.py
reme\memory\vector_based\procedural\procedural_summarizer.py:5 - from ..base_memory_agent import BaseMemoryAgent
reme\memory\vector_based\procedural\procedural_summarizer.py:6 - from ....core.enumeration import Role, MemoryType
reme\memory\vector_based\procedural\procedural_summarizer.py:11 - class ProceduralSummarizer(BaseMemoryAgent):
reme\memory\vector_based\procedural\procedural_summarizer.py:12 - """Extract and store procedural memories from task execution trajectories.
reme\memory\vector_based\procedural\procedural_summarizer.py:21 - memory_type: MemoryType = MemoryType.PROCEDURAL
reme\memory\vector_based\procedural\procedural_summarizer.py:31 - memory_type=self.memory_type.value,
reme\memory\vector_based\procedural\procedural_summarizer.py:32 - memory_target=self.memory_target,
reme\memory\vector_based\procedural\procedural_summarizer.py:51 - memory_type=self.memory_type.value,
reme\memory\vector_based\procedural\procedural_summarizer.py:52 - memory_target=self.memory_target,
reme\memory\vector_based\procedural\procedural_summarizer.py:73 - memory_nodes = []
reme\memory\vector_based\procedural\procedural_summarizer.py:75 - if tool.memory_nodes:
reme\memory\vector_based\procedural\procedural_summarizer.py:83 - "memory_nodes": memory_nodes,

## reme\memory\vector_based\procedural\procedural_summarizer.yaml
reme\memory\vector_based\procedural\procedural_summarizer.yaml:8 - ### Step 1: Create Memory Draft
reme\memory\vector_based\procedural\procedural_summarizer.yaml:10 - - For each memory draft, fill in the required parameters:
reme\memory\vector_based\procedural\procedural_summarizer.yaml:11 - * `memory_content`: concise procedural knowledge extracted from the execution
reme\memory\vector_based\procedural\procedural_summarizer.yaml:22 - Review each memory draft from Step 1 and compare it with the retrieved historical memories, then use `add_memory` to add new memories:
reme\memory\vector_based\procedural\procedural_summarizer.yaml:24 - **Parameters for each memory:**
reme\memory\vector_based\procedural\procedural_summarizer.yaml:25 - - `memory_content`: procedural knowledge content

## reme\memory\vector_based\tool_call\tool_retriever.py
reme\memory\vector_based\tool_call\tool_retriever.py:3 - from ..base_memory_agent import BaseMemoryAgent
reme\memory\vector_based\tool_call\tool_retriever.py:4 - from ....core.enumeration import Role, MemoryType
reme\memory\vector_based\tool_call\tool_retriever.py:10 - class ToolRetriever(BaseMemoryAgent):
reme\memory\vector_based\tool_call\tool_retriever.py:20 - memory_type: MemoryType = MemoryType.TOOL
reme\memory\vector_based\tool_call\tool_retriever.py:22 - def __init__(self, return_memory_nodes: bool = False, **kwargs):
reme\memory\vector_based\tool_call\tool_retriever.py:24 - self.return_memory_nodes: bool = return_memory_nodes
reme\memory\vector_based\tool_call\tool_retriever.py:40 - memory_type=self.memory_type.value,
reme\memory\vector_based\tool_call\tool_retriever.py:41 - memory_target=self.memory_target,
reme\memory\vector_based\tool_call\tool_retriever.py:60 - memory_type=self.memory_type.value,
reme\memory\vector_based\tool_call\tool_retriever.py:61 - memory_target=self.memory_target,
reme\memory\vector_based\tool_call\tool_retriever.py:68 - if self.return_memory_nodes:
reme\memory\vector_based\tool_call\tool_retriever.py:72 - include_memory_id=False,
reme\memory\vector_based\tool_call\tool_retriever.py:76 - ref_memory_id_key="",

## reme\memory\vector_based\tool_call\tool_retriever.yaml
reme\memory\vector_based\tool_call\tool_retriever.yaml:11 - **Tool**: `retrieve_memory`
reme\memory\vector_based\tool_call\tool_retriever.yaml:29 - - Extract `history_id` from retrieved memory references

## reme\memory\vector_based\tool_call\tool_summarizer.py
reme\memory\vector_based\tool_call\tool_summarizer.py:5 - from ..base_memory_agent import BaseMemoryAgent
reme\memory\vector_based\tool_call\tool_summarizer.py:6 - from ....core.enumeration import Role, MemoryType
reme\memory\vector_based\tool_call\tool_summarizer.py:11 - class ToolSummarizer(BaseMemoryAgent):
reme\memory\vector_based\tool_call\tool_summarizer.py:12 - """Extract and store tool memories from task execution trajectories.
reme\memory\vector_based\tool_call\tool_summarizer.py:21 - memory_type: MemoryType = MemoryType.TOOL
reme\memory\vector_based\tool_call\tool_summarizer.py:31 - memory_type=self.memory_type.value,
reme\memory\vector_based\tool_call\tool_summarizer.py:32 - memory_target=self.memory_target,
reme\memory\vector_based\tool_call\tool_summarizer.py:51 - memory_type=self.memory_type.value,
reme\memory\vector_based\tool_call\tool_summarizer.py:52 - memory_target=self.memory_target,
reme\memory\vector_based\tool_call\tool_summarizer.py:73 - memory_nodes = []
reme\memory\vector_based\tool_call\tool_summarizer.py:75 - if tool.memory_nodes:
reme\memory\vector_based\tool_call\tool_summarizer.py:83 - "memory_nodes": memory_nodes,

## reme\memory\vector_based\tool_call\tool_summarizer.yaml
reme\memory\vector_based\tool_call\tool_summarizer.yaml:8 - ### Step 1: Create Memory Draft
reme\memory\vector_based\tool_call\tool_summarizer.yaml:10 - - For each memory draft, fill in the required parameters:
reme\memory\vector_based\tool_call\tool_summarizer.yaml:11 - * `memory_content`: concise tool usage knowledge extracted from the execution
reme\memory\vector_based\tool_call\tool_summarizer.yaml:22 - Review each memory draft from Step 1 and compare it with the retrieved historical memories, then use `add_memory` to add new memories:
reme\memory\vector_based\tool_call\tool_summarizer.yaml:24 - **Parameters for each memory:**
reme\memory\vector_based\tool_call\tool_summarizer.yaml:25 - - `memory_content`: tool usage knowledge content

## reme\memory\vector_tools\base_memory_tool.py
reme\memory\vector_tools\base_memory_tool.py:1 - """Base class for memory tool"""
reme\memory\vector_tools\base_memory_tool.py:6 - from ...core.enumeration import MemoryType
reme\memory\vector_tools\base_memory_tool.py:8 - from ...core.schema import ToolCall, MemoryNode, ToolAttr
reme\memory\vector_tools\base_memory_tool.py:11 - class BaseMemoryTool(BaseTool, metaclass=ABCMeta):
reme\memory\vector_tools\base_memory_tool.py:12 - """Base class for memory tool"""
reme\memory\vector_tools\base_memory_tool.py:62 - def memory_type(self) -> MemoryType:
reme\memory\vector_tools\base_memory_tool.py:63 - """Get the memory type from context."""
reme\memory\vector_tools\base_memory_tool.py:67 - def memory_target(self) -> str:
reme\memory\vector_tools\base_memory_tool.py:68 - """Get the memory target from context."""
reme\memory\vector_tools\base_memory_tool.py:69 - if "memory_target" in self.context:
reme\memory\vector_tools\base_memory_tool.py:71 - elif len(self.memory_target_type_mapping) == 1:
reme\memory\vector_tools\base_memory_tool.py:84 - def retrieved_nodes(self) -> list[MemoryNode]:
reme\memory\vector_tools\base_memory_tool.py:94 - def memory_nodes(self) -> list[MemoryNode | str]:
reme\memory\vector_tools\base_memory_tool.py:95 - """Get the memory nodes from context."""
reme\memory\vector_tools\base_memory_tool.py:96 - if "memory_nodes" not in self.context:
reme\memory\vector_tools\base_memory_tool.py:97 - self.context.memory_nodes = []
reme\memory\vector_tools\base_memory_tool.py:101 - def memory_target_type_mapping(self) -> dict[str, MemoryType]:
reme\memory\vector_tools\base_memory_tool.py:102 - """Get the memory target type mapping from context."""

## reme\memory\vector_tools\delegate_task.py
reme\memory\vector_tools\delegate_task.py:5 - from .base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\delegate_task.py:6 - from ..vector_based import BaseMemoryAgent
reme\memory\vector_tools\delegate_task.py:7 - from ...core.enumeration import MemoryType
reme\memory\vector_tools\delegate_task.py:11 - class DelegateTask(BaseMemoryTool):
reme\memory\vector_tools\delegate_task.py:14 - def __init__(self, memory_agents: list[BaseMemoryAgent] = None, **kwargs):
reme\memory\vector_tools\delegate_task.py:16 - kwargs["sub_ops"] = memory_agents or []
reme\memory\vector_tools\delegate_task.py:18 - self.sub_ops: list[BaseMemoryAgent] = [a for a in self.sub_ops if isinstance(a, BaseMemoryAgent)]
reme\memory\vector_tools\delegate_task.py:22 - def memory_agent_dict(self) -> dict[MemoryType, BaseMemoryAgent]:
reme\memory\vector_tools\delegate_task.py:24 - return {a.memory_type: a for a in self.sub_ops}
reme\memory\vector_tools\delegate_task.py:36 - "description": "List of tasks to delegate to specific memory agents",
reme\memory\vector_tools\delegate_task.py:41 - "memory_target": {
reme\memory\vector_tools\delegate_task.py:43 - "description": "The memory_target identifier to "
reme\memory\vector_tools\delegate_task.py:47 - "required": ["memory_target"],
reme\memory\vector_tools\delegate_task.py:59 - memory_target_tasks = sorted(set(task["memory_target"] for task in tasks))
reme\memory\vector_tools\delegate_task.py:62 - agent_list: list[BaseMemoryAgent] = []
reme\memory\vector_tools\delegate_task.py:63 - for i, memory_target in enumerate(memory_target_tasks):
reme\memory\vector_tools\delegate_task.py:64 - if memory_target not in self.memory_target_type_mapping:
reme\memory\vector_tools\delegate_task.py:68 - memory_type = self.memory_target_type_mapping[memory_target]
reme\memory\vector_tools\delegate_task.py:69 - agent = self.memory_agent_dict[memory_type].copy()
reme\memory\vector_tools\delegate_task.py:72 - logger.info(f"Task {i}: {memory_type.value} agent for {memory_target}")
... and 2 more

## reme\memory\vector_tools\__init__.py
reme\memory\vector_tools\__init__.py:3 - from .base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\__init__.py:22 - from .record.add_and_retrieve_similar_memory import AddAndRetrieveSimilarMemory
reme\memory\vector_tools\__init__.py:23 - from .record.add_draft_and_retrieve_similar_memory import AddDraftAndRetrieveSimilarMemory
reme\memory\vector_tools\__init__.py:24 - from .record.add_memory import AddMemory
reme\memory\vector_tools\__init__.py:25 - from .record.delete_memory import DeleteMemory
reme\memory\vector_tools\__init__.py:26 - from .record.retrieve_memory import RetrieveMemory
reme\memory\vector_tools\__init__.py:27 - from .record.retrieve_recent_memory import RetrieveRecentMemory
reme\memory\vector_tools\__init__.py:28 - from .record.update_memory import UpdateMemory
reme\memory\vector_tools\__init__.py:29 - from .record.update_memory_v1 import UpdateMemoryV1
reme\memory\vector_tools\__init__.py:30 - from .record.update_memory_v2 import UpdateMemoryV2

## reme\memory\vector_tools\history\add_history.py
reme\memory\vector_tools\history\add_history.py:7 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\history\add_history.py:8 - from ....core.enumeration import MemoryType
reme\memory\vector_tools\history\add_history.py:9 - from ....core.schema import ToolCall, MemoryNode, Message
reme\memory\vector_tools\history\add_history.py:13 - class AddHistory(BaseMemoryTool):
reme\memory\vector_tools\history\add_history.py:38 - history_node = MemoryNode(
reme\memory\vector_tools\history\add_history.py:39 - memory_type=MemoryType.HISTORY,
reme\memory\vector_tools\history\add_history.py:57 - return f"Successfully added history: {history_node.memory_id}"

## reme\memory\vector_tools\history\read_history.py
reme\memory\vector_tools\history\read_history.py:5 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\history\read_history.py:6 - from ....core.schema import MemoryNode, ToolCall
reme\memory\vector_tools\history\read_history.py:9 - class ReadHistory(BaseMemoryTool):
reme\memory\vector_tools\history\read_history.py:71 - memory_node: MemoryNode = MemoryNode.from_vector_node(node)
reme\memory\vector_tools\history\read_history.py:76 - logger.info(f"Successfully read {len(nodes)} history memory_node(s): {history_ids}")

## reme\memory\vector_tools\history\read_history_v2.py
reme\memory\vector_tools\history\read_history_v2.py:7 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\history\read_history_v2.py:8 - from ....core.schema import MemoryNode, ToolCall, Message
reme\memory\vector_tools\history\read_history_v2.py:12 - class ReadHistoryV2(BaseMemoryTool):
reme\memory\vector_tools\history\read_history_v2.py:93 - history_node: MemoryNode = await self.vector_store.get(vector_ids=history_id)

## reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:10 - class AddDraftAndReadAllProfiles(BaseMemoryTool):
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:13 - def __init__(self, enable_memory_target: bool = False, **kwargs):
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:15 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:35 - if self.enable_memory_target:
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:36 - properties["memory_target"] = {
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:38 - "description": "memory_target",
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:85 - if self.enable_memory_target:
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:86 - target = item["memory_target"]
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:88 - target = self.memory_target
reme\memory\vector_tools\profiles\add_draft_and_read_all_profiles.py:95 - profile_handler = ProfileHandler(profile_path=self.profile_path, memory_target=target)

## reme\memory\vector_tools\profiles\add_profile.py
reme\memory\vector_tools\profiles\add_profile.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\profiles\add_profile.py:10 - class AddProfile(BaseMemoryTool):
reme\memory\vector_tools\profiles\add_profile.py:43 - profile_handler = ProfileHandler(profile_path=self.profile_path, memory_target=self.memory_target)
reme\memory\vector_tools\profiles\add_profile.py:61 - new_nodes = profile_handler.add_batch(profiles=[profile], ref_memory_id=self.history_id)

## reme\memory\vector_tools\profiles\delete_profile.py
reme\memory\vector_tools\profiles\delete_profile.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\profiles\delete_profile.py:10 - class DeleteProfile(BaseMemoryTool):
reme\memory\vector_tools\profiles\delete_profile.py:35 - profile_handler = ProfileHandler(profile_path=self.profile_path, memory_target=self.memory_target)

## reme\memory\vector_tools\profiles\profile_handler.py
reme\memory\vector_tools\profiles\profile_handler.py:7 - from ....core.enumeration import MemoryType
reme\memory\vector_tools\profiles\profile_handler.py:8 - from ....core.schema import MemoryNode
reme\memory\vector_tools\profiles\profile_handler.py:9 - from ....core.utils import CacheHandler, deduplicate_memories
reme\memory\vector_tools\profiles\profile_handler.py:15 - def __init__(self, profile_path: str | Path, memory_target: str, max_capacity: int = 50):
reme\memory\vector_tools\profiles\profile_handler.py:17 - self.memory_target: str = memory_target
reme\memory\vector_tools\profiles\profile_handler.py:18 - self.cache_key: str = self.memory_target.replace(" ", "_").lower()
reme\memory\vector_tools\profiles\profile_handler.py:22 - def _load_nodes(self) -> list[MemoryNode]:
reme\memory\vector_tools\profiles\profile_handler.py:29 - def _save_nodes(self, nodes: list[MemoryNode], apply_limits: bool = True):
reme\memory\vector_tools\profiles\profile_handler.py:56 - nodes = [n for n in nodes if n.memory_id not in profile_ids_set]
reme\memory\vector_tools\profiles\profile_handler.py:68 - nodes = [n for n in nodes if n.memory_id != profile_id]
reme\memory\vector_tools\profiles\profile_handler.py:86 - def add(self, message_time: str, profile_key: str, profile_value: str, ref_memory_id: str = "") -> MemoryNode:
reme\memory\vector_tools\profiles\profile_handler.py:90 - new_node = MemoryNode(
reme\memory\vector_tools\profiles\profile_handler.py:91 - memory_type=MemoryType.PERSONAL,
reme\memory\vector_tools\profiles\profile_handler.py:92 - memory_target=self.memory_target,
reme\memory\vector_tools\profiles\profile_handler.py:96 - ref_memory_id=ref_memory_id,
reme\memory\vector_tools\profiles\profile_handler.py:110 - def add_batch(self, profiles: list[dict], ref_memory_id: str = "") -> list[MemoryNode]:
reme\memory\vector_tools\profiles\profile_handler.py:119 - memory_type=MemoryType.PERSONAL,
reme\memory\vector_tools\profiles\profile_handler.py:120 - memory_target=self.memory_target,
reme\memory\vector_tools\profiles\profile_handler.py:124 - ref_memory_id=ref_memory_id,
reme\memory\vector_tools\profiles\profile_handler.py:141 - def update(self, profile_id: str, message_time: str, profile_key: str, profile_value: str) -> MemoryNode | None:
... and 9 more

## reme\memory\vector_tools\profiles\read_all_profiles.py
reme\memory\vector_tools\profiles\read_all_profiles.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\profiles\read_all_profiles.py:10 - class ReadAllProfiles(BaseMemoryTool):
reme\memory\vector_tools\profiles\read_all_profiles.py:13 - def __init__(self, enable_memory_target: bool = False, **kwargs):
reme\memory\vector_tools\profiles\read_all_profiles.py:16 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\profiles\read_all_profiles.py:23 - if self.enable_memory_target:
reme\memory\vector_tools\profiles\read_all_profiles.py:24 - properties["memory_target"] = {
reme\memory\vector_tools\profiles\read_all_profiles.py:26 - "description": "memory_target",
reme\memory\vector_tools\profiles\read_all_profiles.py:42 - if self.enable_memory_target:
reme\memory\vector_tools\profiles\read_all_profiles.py:43 - target = self.context.get("memory_target")
reme\memory\vector_tools\profiles\read_all_profiles.py:45 - target = self.memory_target
reme\memory\vector_tools\profiles\read_all_profiles.py:47 - profile_handler = ProfileHandler(profile_path=self.profile_path, memory_target=target)

## reme\memory\vector_tools\profiles\update_profile.py
reme\memory\vector_tools\profiles\update_profile.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\profiles\update_profile.py:10 - class UpdateProfile(BaseMemoryTool):
reme\memory\vector_tools\profiles\update_profile.py:13 - def __init__(self, enable_memory_target: bool = False, **kwargs):
reme\memory\vector_tools\profiles\update_profile.py:16 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\profiles\update_profile.py:36 - if self.enable_memory_target:
reme\memory\vector_tools\profiles\update_profile.py:37 - profile_properties["memory_target"] = {
reme\memory\vector_tools\profiles\update_profile.py:39 - "description": "memory_target",
reme\memory\vector_tools\profiles\update_profile.py:85 - profile_handler = ProfileHandler(profile_path=self.profile_path, memory_target=self.memory_target)
reme\memory\vector_tools\profiles\update_profile.py:90 - if self.enable_memory_target:
reme\memory\vector_tools\profiles\update_profile.py:96 - target = profile.get("memory_target", self.memory_target)
reme\memory\vector_tools\profiles\update_profile.py:101 - profile_handler = ProfileHandler(profile_path=self.profile_path, memory_target=target)
reme\memory\vector_tools\profiles\update_profile.py:102 - new_nodes = profile_handler.add_batch(profiles=target_profiles, ref_memory_id=self.history_id)
reme\memory\vector_tools\profiles\update_profile.py:107 - profile_handler = ProfileHandler(profile_path=self.profile_path, memory_target=self.memory_target)
reme\memory\vector_tools\profiles\update_profile.py:108 - new_nodes = profile_handler.add_batch(profiles=profiles_to_add, ref_memory_id=self.history_id)

## reme\memory\vector_tools\profiles\update_profiles_v1.py
reme\memory\vector_tools\profiles\update_profiles_v1.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\profiles\update_profiles_v1.py:10 - class UpdateProfilesV1(BaseMemoryTool):
reme\memory\vector_tools\profiles\update_profiles_v1.py:13 - def __init__(self, name="update_profiles", enable_memory_target: bool = False, **kwargs):
reme\memory\vector_tools\profiles\update_profiles_v1.py:16 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\profiles\update_profiles_v1.py:48 - if self.enable_memory_target:
reme\memory\vector_tools\profiles\update_profiles_v1.py:49 - properties["memory_target"] = {
reme\memory\vector_tools\profiles\update_profiles_v1.py:51 - "description": "memory_target",
reme\memory\vector_tools\profiles\update_profiles_v1.py:96 - if self.enable_memory_target:
reme\memory\vector_tools\profiles\update_profiles_v1.py:99 - target = profile.get("memory_target", self.memory_target)
reme\memory\vector_tools\profiles\update_profiles_v1.py:107 - self.memory_target: [
reme\memory\vector_tools\profiles\update_profiles_v1.py:116 - profile_handler = ProfileHandler(profile_path=self.profile_path, memory_target=target)
reme\memory\vector_tools\profiles\update_profiles_v1.py:156 - all_memory_nodes = []
reme\memory\vector_tools\profiles\update_profiles_v1.py:161 - profile_handler = ProfileHandler(profile_path=self.profile_path, memory_target=target)
reme\memory\vector_tools\profiles\update_profiles_v1.py:162 - new_nodes = profile_handler.add_batch(profiles=target_profiles, ref_memory_id=self.history_id)

## reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:1 - """Add draft memory and retrieve similar memories from vector store"""
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:5 - from .memory_handler import MemoryHandler
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:7 - from ....core.schema import ToolCall, MemoryNode
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:8 - from ....core.utils import deduplicate_memories
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:11 - class AddAndRetrieveSimilarMemory(BaseMemoryTool):
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:17 - enable_memory_target: bool = False,
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:23 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:33 - "memory_content": {
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:35 - "description": "content of the memory.",
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:38 - required = ["message_time", "memory_content"]
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:43 - "description": "description of when to use this memory.",
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:47 - if self.enable_memory_target:
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:48 - properties["memory_target"] = {
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:50 - "description": "target memory type for this memory.",
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:63 - "description": "Add memory and retrieve similar memories from the vector store.",
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:71 - "description": "Add memory and retrieve similar memories from the vector store.",
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:94 - if self.enable_memory_target:
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:95 - target = item["memory_target"]
reme\memory\vector_tools\record\add_and_retrieve_similar_memory.py:97 - target = self.memory_target
... and 7 more

## reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:1 - """Add draft memory and retrieve similar memories from vector store"""
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:5 - from .memory_handler import MemoryHandler
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:7 - from ....core.schema import ToolCall, MemoryNode
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:8 - from ....core.utils import deduplicate_memories
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:11 - class AddDraftAndRetrieveSimilarMemory(BaseMemoryTool):
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:17 - enable_memory_target: bool = False,
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:23 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:33 - "memory_content": {
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:35 - "description": "content of the memory.",
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:38 - required = ["message_time", "memory_content"]
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:43 - "description": "description of when to use this memory.",
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:47 - if self.enable_memory_target:
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:48 - properties["memory_target"] = {
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:50 - "description": "target memory type for this memory.",
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:63 - "description": "Add draft memory and retrieve similar memories from the vector store.",
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:71 - "description": "Add draft memory and retrieve similar memories from the vector store.",
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:94 - if self.enable_memory_target:
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:95 - target = item["memory_target"]
reme\memory\vector_tools\record\add_draft_and_retrieve_similar_memory.py:97 - target = self.memory_target
... and 7 more

## reme\memory\vector_tools\record\add_memory.py
reme\memory\vector_tools\record\add_memory.py:5 - from .memory_handler import MemoryHandler
reme\memory\vector_tools\record\add_memory.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\record\add_memory.py:10 - class AddMemory(BaseMemoryTool):
reme\memory\vector_tools\record\add_memory.py:15 - enable_memory_target: bool = False,
reme\memory\vector_tools\record\add_memory.py:20 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\record\add_memory.py:23 - def _build_memory_parameters(self) -> dict:
reme\memory\vector_tools\record\add_memory.py:30 - "memory_content": {
reme\memory\vector_tools\record\add_memory.py:32 - "description": "content of the memory.",
reme\memory\vector_tools\record\add_memory.py:35 - required = ["message_time", "memory_content"]
reme\memory\vector_tools\record\add_memory.py:40 - "description": "description of when to use this memory.",
reme\memory\vector_tools\record\add_memory.py:44 - if self.enable_memory_target:
reme\memory\vector_tools\record\add_memory.py:45 - properties["memory_target"] = {
reme\memory\vector_tools\record\add_memory.py:47 - "description": "target memory type for this memory.",
reme\memory\vector_tools\record\add_memory.py:60 - "description": "add a memory to vector store for future retrieval.",
reme\memory\vector_tools\record\add_memory.py:61 - "parameters": self._build_memory_parameters(),
reme\memory\vector_tools\record\add_memory.py:75 - "items": self._build_memory_parameters(),
reme\memory\vector_tools\record\add_memory.py:90 - if self.enable_memory_target:
reme\memory\vector_tools\record\add_memory.py:93 - target = mem["memory_target"]
reme\memory\vector_tools\record\add_memory.py:98 - memories_by_target = {self.memory_target: memories}
reme\memory\vector_tools\record\add_memory.py:101 - all_memory_nodes = []
... and 9 more

## reme\memory\vector_tools\record\delete_memory.py
reme\memory\vector_tools\record\delete_memory.py:1 - """Delete memory from vector store"""
reme\memory\vector_tools\record\delete_memory.py:5 - from .memory_handler import MemoryHandler
reme\memory\vector_tools\record\delete_memory.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\record\delete_memory.py:10 - class DeleteMemory(BaseMemoryTool):
reme\memory\vector_tools\record\delete_memory.py:11 - """Tool to delete memories from vector store"""
reme\memory\vector_tools\record\delete_memory.py:16 - "description": "delete a memory from vector store using its unique ID.",
reme\memory\vector_tools\record\delete_memory.py:20 - "memory_id": {
reme\memory\vector_tools\record\delete_memory.py:22 - "description": "memory_id of the memory to delete.",
reme\memory\vector_tools\record\delete_memory.py:25 - "required": ["memory_id"],
reme\memory\vector_tools\record\delete_memory.py:33 - "description": "delete multiple memories from vector store using their unique IDs.",
reme\memory\vector_tools\record\delete_memory.py:37 - "memory_ids": {
reme\memory\vector_tools\record\delete_memory.py:39 - "description": "memory_ids of memories to delete.",
reme\memory\vector_tools\record\delete_memory.py:43 - "required": ["memory_ids"],
reme\memory\vector_tools\record\delete_memory.py:49 - memory_ids = self.context.get("memory_ids") or []
reme\memory\vector_tools\record\delete_memory.py:50 - if not memory_ids:
reme\memory\vector_tools\record\delete_memory.py:51 - memory_ids = [self.context.get("memory_id", "")]
reme\memory\vector_tools\record\delete_memory.py:53 - handler = MemoryHandler(self.memory_target, self.service_context)
reme\memory\vector_tools\record\delete_memory.py:57 - output = f"Successfully deleted {len(memory_ids)} memories."

## reme\memory\vector_tools\record\memory_handler.py
reme\memory\vector_tools\record\memory_handler.py:7 - from ....core.enumeration import MemoryType
reme\memory\vector_tools\record\memory_handler.py:8 - from ....core.schema import MemoryNode
reme\memory\vector_tools\record\memory_handler.py:13 - class MemoryHandler:
reme\memory\vector_tools\record\memory_handler.py:16 - def __init__(self, memory_target: str, service_context: ServiceContext):
reme\memory\vector_tools\record\memory_handler.py:17 - self.memory_target: str = memory_target
reme\memory\vector_tools\record\memory_handler.py:18 - self.memory_type: MemoryType | None = service_context.memory_target_type_mapping.get(memory_target, None)
reme\memory\vector_tools\record\memory_handler.py:21 - async def add_batch(self, memories: list[dict]) -> list[MemoryNode]:
reme\memory\vector_tools\record\memory_handler.py:24 - memory_ids_to_delete = [mem.get("memory_id") for mem in memories if mem.get("memory_id")]
reme\memory\vector_tools\record\memory_handler.py:25 - if memory_ids_to_delete:
reme\memory\vector_tools\record\memory_handler.py:29 - memory_nodes = [
reme\memory\vector_tools\record\memory_handler.py:31 - memory_type=self.memory_type,
reme\memory\vector_tools\record\memory_handler.py:32 - memory_target=self.memory_target,
reme\memory\vector_tools\record\memory_handler.py:36 - ref_memory_id=mem.get("ref_memory_id", ""),
reme\memory\vector_tools\record\memory_handler.py:45 - memory_dict = {node.content: node for node in memory_nodes}
reme\memory\vector_tools\record\memory_handler.py:46 - memory_nodes = list(memory_dict.values())
reme\memory\vector_tools\record\memory_handler.py:49 - vector_nodes = [node.to_vector_node() for node in memory_nodes]
reme\memory\vector_tools\record\memory_handler.py:58 - ref_memory_id: str = "",
reme\memory\vector_tools\record\memory_handler.py:62 - ) -> MemoryNode:
reme\memory\vector_tools\record\memory_handler.py:64 - memory_dict = {
reme\memory\vector_tools\record\memory_handler.py:68 - "ref_memory_id": ref_memory_id,
... and 47 more

## reme\memory\vector_tools\record\retrieve_memory.py
reme\memory\vector_tools\record\retrieve_memory.py:1 - """Retrieve memory from vector store"""
reme\memory\vector_tools\record\retrieve_memory.py:5 - from .memory_handler import MemoryHandler
reme\memory\vector_tools\record\retrieve_memory.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\record\retrieve_memory.py:7 - from ....core.schema import ToolCall, MemoryNode
reme\memory\vector_tools\record\retrieve_memory.py:8 - from ....core.utils import deduplicate_memories
reme\memory\vector_tools\record\retrieve_memory.py:11 - class RetrieveMemory(BaseMemoryTool):
reme\memory\vector_tools\record\retrieve_memory.py:17 - enable_memory_target: bool = False,
reme\memory\vector_tools\record\retrieve_memory.py:24 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\record\retrieve_memory.py:46 - if self.enable_memory_target:
reme\memory\vector_tools\record\retrieve_memory.py:47 - properties["memory_target"] = {
reme\memory\vector_tools\record\retrieve_memory.py:49 - "description": "memory_target",
reme\memory\vector_tools\record\retrieve_memory.py:62 - "description": "Retrieve relevant memories from the vector store using semantic similarity search.",
reme\memory\vector_tools\record\retrieve_memory.py:70 - "description": "Retrieve relevant memories from the vector store using semantic similarity search.",
reme\memory\vector_tools\record\retrieve_memory.py:93 - if self.enable_memory_target:
reme\memory\vector_tools\record\retrieve_memory.py:94 - target = item["memory_target"]
reme\memory\vector_tools\record\retrieve_memory.py:96 - target = self.memory_target
reme\memory\vector_tools\record\retrieve_memory.py:119 - memory_nodes: list[MemoryNode] = []
reme\memory\vector_tools\record\retrieve_memory.py:121 - handler = MemoryHandler(target, self.service_context)
reme\memory\vector_tools\record\retrieve_memory.py:129 - memory_nodes = deduplicate_memories(memory_nodes)
reme\memory\vector_tools\record\retrieve_memory.py:130 - retrieved_ids = {n.memory_id for n in self.retrieved_nodes if n.memory_id}
... and 2 more

## reme\memory\vector_tools\record\retrieve_recent_memory.py
reme\memory\vector_tools\record\retrieve_recent_memory.py:1 - """Retrieve most recent memories from vector store"""
reme\memory\vector_tools\record\retrieve_recent_memory.py:5 - from .memory_handler import MemoryHandler
reme\memory\vector_tools\record\retrieve_recent_memory.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\record\retrieve_recent_memory.py:7 - from ....core.schema import ToolCall, MemoryNode
reme\memory\vector_tools\record\retrieve_recent_memory.py:8 - from ....core.utils import deduplicate_memories
reme\memory\vector_tools\record\retrieve_recent_memory.py:11 - class RetrieveRecentMemory(BaseMemoryTool):
reme\memory\vector_tools\record\retrieve_recent_memory.py:32 - handler = MemoryHandler(self.memory_target, self.service_context)
reme\memory\vector_tools\record\retrieve_recent_memory.py:34 - memory_nodes: list[MemoryNode] = await handler.list(
reme\memory\vector_tools\record\retrieve_recent_memory.py:39 - memory_nodes = deduplicate_memories(memory_nodes)
reme\memory\vector_tools\record\retrieve_recent_memory.py:41 - retrieved_ids = {n.memory_id for n in self.retrieved_nodes if n.memory_id}
reme\memory\vector_tools\record\retrieve_recent_memory.py:42 - new_nodes = [n for n in memory_nodes if n.memory_id not in retrieved_ids]
reme\memory\vector_tools\record\retrieve_recent_memory.py:49 - output = "\n".join([n.format(ref_memory_id_key="history_id") for n in new_nodes])

## reme\memory\vector_tools\record\update_memory.py
reme\memory\vector_tools\record\update_memory.py:5 - from .memory_handler import MemoryHandler
reme\memory\vector_tools\record\update_memory.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\record\update_memory.py:10 - class UpdateMemory(BaseMemoryTool):
reme\memory\vector_tools\record\update_memory.py:15 - enable_memory_target: bool = False,
reme\memory\vector_tools\record\update_memory.py:20 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\record\update_memory.py:26 - "memory_id": {
reme\memory\vector_tools\record\update_memory.py:28 - "description": "unique identifier of memory to update.",
reme\memory\vector_tools\record\update_memory.py:34 - "memory_content": {
reme\memory\vector_tools\record\update_memory.py:36 - "description": "new content of the memory.",
reme\memory\vector_tools\record\update_memory.py:39 - required = ["memory_id", "message_time", "memory_content"]
reme\memory\vector_tools\record\update_memory.py:44 - "description": "description of when to use this memory.",
reme\memory\vector_tools\record\update_memory.py:48 - if self.enable_memory_target:
reme\memory\vector_tools\record\update_memory.py:49 - properties["memory_target"] = {
reme\memory\vector_tools\record\update_memory.py:51 - "description": "target memory type for this memory.",
reme\memory\vector_tools\record\update_memory.py:64 - "description": "update a memory in vector store by replacing old memory with new content.",
reme\memory\vector_tools\record\update_memory.py:78 - "description": "list of memory update objects.",
reme\memory\vector_tools\record\update_memory.py:94 - if self.enable_memory_target:
reme\memory\vector_tools\record\update_memory.py:97 - target = mem["memory_target"]
reme\memory\vector_tools\record\update_memory.py:102 - memories_by_target = {self.memory_target: memories}
reme\memory\vector_tools\record\update_memory.py:105 - all_memory_nodes = []
... and 7 more

## reme\memory\vector_tools\record\update_memory_v1.py
reme\memory\vector_tools\record\update_memory_v1.py:5 - from .memory_handler import MemoryHandler
reme\memory\vector_tools\record\update_memory_v1.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\record\update_memory_v1.py:10 - class UpdateMemoryV1(BaseMemoryTool):
reme\memory\vector_tools\record\update_memory_v1.py:15 - name="update_memory",
reme\memory\vector_tools\record\update_memory_v1.py:16 - enable_memory_target: bool = False,
reme\memory\vector_tools\record\update_memory_v1.py:22 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\record\update_memory_v1.py:25 - def _build_memory_parameters(self, include_memory_id: bool = False) -> dict:
reme\memory\vector_tools\record\update_memory_v1.py:29 - include_memory_id: If True, include memory_id field (for updates)
reme\memory\vector_tools\record\update_memory_v1.py:34 - if include_memory_id:
reme\memory\vector_tools\record\update_memory_v1.py:35 - properties["memory_id"] = {
reme\memory\vector_tools\record\update_memory_v1.py:37 - "description": "ID of the memory to update",
reme\memory\vector_tools\record\update_memory_v1.py:47 - "memory_content": {
reme\memory\vector_tools\record\update_memory_v1.py:49 - "description": "content of the memory.",
reme\memory\vector_tools\record\update_memory_v1.py:58 - "description": "description of when to use this memory.",
reme\memory\vector_tools\record\update_memory_v1.py:62 - if self.enable_memory_target:
reme\memory\vector_tools\record\update_memory_v1.py:63 - properties["memory_target"] = {
reme\memory\vector_tools\record\update_memory_v1.py:65 - "description": "target memory type for this memory.",
reme\memory\vector_tools\record\update_memory_v1.py:79 - "description": "update memories by updating existing memories and adding new memory entries.",
reme\memory\vector_tools\record\update_memory_v1.py:86 - "items": self._build_memory_parameters(include_memory_id=True),
reme\memory\vector_tools\record\update_memory_v1.py:91 - "items": self._build_memory_parameters(include_memory_id=False),
... and 17 more

## reme\memory\vector_tools\record\update_memory_v2.py
reme\memory\vector_tools\record\update_memory_v2.py:5 - from .memory_handler import MemoryHandler
reme\memory\vector_tools\record\update_memory_v2.py:6 - from ..base_memory_tool import BaseMemoryTool
reme\memory\vector_tools\record\update_memory_v2.py:10 - class UpdateMemoryV2(BaseMemoryTool):
reme\memory\vector_tools\record\update_memory_v2.py:15 - name="update_memory",
reme\memory\vector_tools\record\update_memory_v2.py:16 - enable_memory_target: bool = False,
reme\memory\vector_tools\record\update_memory_v2.py:22 - self.enable_memory_target: bool = enable_memory_target
reme\memory\vector_tools\record\update_memory_v2.py:25 - def _build_add_memory_parameters(self) -> dict:
reme\memory\vector_tools\record\update_memory_v2.py:32 - "memory_content": {
reme\memory\vector_tools\record\update_memory_v2.py:34 - "description": "content of the memory.",
reme\memory\vector_tools\record\update_memory_v2.py:37 - required = ["message_time", "memory_content"]
reme\memory\vector_tools\record\update_memory_v2.py:42 - "description": "description of when to use this memory.",
reme\memory\vector_tools\record\update_memory_v2.py:46 - if self.enable_memory_target:
reme\memory\vector_tools\record\update_memory_v2.py:47 - properties["memory_target"] = {
reme\memory\vector_tools\record\update_memory_v2.py:49 - "description": "target memory type for this memory.",
reme\memory\vector_tools\record\update_memory_v2.py:63 - "description": "update memories by removing and adding memory entries.",
reme\memory\vector_tools\record\update_memory_v2.py:67 - "memory_ids_to_delete": {
reme\memory\vector_tools\record\update_memory_v2.py:69 - "description": "List of memory IDs to delete",
reme\memory\vector_tools\record\update_memory_v2.py:77 - "items": self._build_add_memory_parameters(),
reme\memory\vector_tools\record\update_memory_v2.py:80 - "required": ["memory_ids_to_delete", "memories_to_add"],
reme\memory\vector_tools\record\update_memory_v2.py:87 - memory_ids_to_delete = self.context.get("memory_ids_to_delete", [])
... and 15 more

## reme_ai\main.py
reme_ai\main.py:4 - This module provides the main application class for the ReMe (Reflexive Memory) system,
reme_ai\main.py:5 - which extends FlowLLM with specialized memory management capabilities including:
reme_ai\main.py:6 - - Task Memory: Store and retrieve task execution histories
reme_ai\main.py:7 - - Tool Memory: Track tool usage patterns and experiences
reme_ai\main.py:8 - - Personal Memory: Manage user preferences and personal information
reme_ai\main.py:23 - ReMeApp - Main application class for Reflexive Memory system.
reme_ai\main.py:53 - vector_store.default.backend=memory
reme_ai\main.py:61 - "vector_store.default.backend=memory"
reme_ai\main.py:86 - - "vector_store.default.backend=memory" - Use memory vector store
reme_ai\main.py:149 - - "task_memory_flow": Query and manage task memories
reme_ai\main.py:150 - - "tool_memory_flow": Retrieve tool usage experiences
reme_ai\main.py:151 - - "personal_memory_flow": Access personal preferences
reme_ai\main.py:152 - - "sop_memory_flow": Execute standard operating procedures

## reme_ai\agent\tools\use_mock_search_op.py
reme_ai\agent\tools\use_mock_search_op.py:20 - from reme_ai.schema.memory import ToolCallResult

## reme_ai\config\default.yaml
reme_ai\config\default.yaml:16 - retrieve_task_memory:
reme_ai\config\default.yaml:17 - flow_content: BuildQueryOp() >> RecallVectorStoreOp() >> RerankMemoryOp(enable_llm_rerank=False, enable_score_filter=False, top_k=5) >> RewriteMemoryOp(enable_llm_rewrite=False)
reme_ai\config\default.yaml:18 - description: "Retrieves the most relevant top-k memory experiences from historical data based on the current query to enhance task-solving capabilities"
reme_ai\config\default.yaml:25 - summary_task_memory:
reme_ai\config\default.yaml:26 - flow_content: TrajectoryPreprocessOp(success_threshold=1.0) >> (SuccessExtractionOp()|FailureExtractionOp()|ComparativeExtractionOp(enable_soft_comparison=True)) >> MemoryValidationOp(validation_threshold=0.5) >> MemoryDeduplicationOp() >> UpdateVectorStoreOp()
reme_ai\config\default.yaml:27 - description: "Summarizes conversation trajectories or messages into structured memory representations for long-term storage"
reme_ai\config\default.yaml:34 - retrieve_task_memory_simple:
reme_ai\config\default.yaml:35 - flow_content: BuildQueryOp() >> RecallVectorStoreOp() >> MergeMemoryOp()
reme_ai\config\default.yaml:36 - description: "Retrieves the most relevant top-k memory experiences from historical data based on the current query to enhance task-solving capabilities"
reme_ai\config\default.yaml:43 - summary_task_memory_simple:
reme_ai\config\default.yaml:45 - description: "Summarizes conversation trajectories or messages into structured memory representations for long-term storage"
reme_ai\config\default.yaml:52 - retrieve_personal_memory:
reme_ai\config\default.yaml:53 - flow_content: SetQueryOp() >> (ExtractTimeOp() | (RetrieveMemoryOp() >> SemanticRankOp())) >> FuseRerankOp()
reme_ai\config\default.yaml:54 - description: "Retrieves the most relevant personal memories from historical data based on the query to enhance response quality"
reme_ai\config\default.yaml:61 - summary_personal_memory:
reme_ai\config\default.yaml:62 - flow_content: InfoFilterOp() >> (GetObservationOp() | GetObservationWithTimeOp() | LoadTodayMemoryOp()) >> ContraRepeatOp() >> UpdateVectorStoreOp()
reme_ai\config\default.yaml:70 - retrieve_tool_memory:
reme_ai\config\default.yaml:71 - flow_content: RetrieveToolMemoryOp()
reme_ai\config\default.yaml:72 - description: "Retrieves tool memories from the vector database based on tool names to provide tool usage patterns and best practices"
reme_ai\config\default.yaml:81 - description: "Evaluates and adds tool call results to the tool memory database, creating new memory or updating existing memory for the specified tool"
... and 21 more

## reme_ai\constants\common_constants.py
reme_ai\constants\common_constants.py:25 - MEMORY_MANAGER = "memory_manager"
reme_ai\constants\common_constants.py:29 - RETRIEVE_MEMORY_NODES = "retrieve_memory_nodes"
reme_ai\constants\common_constants.py:31 - RANKED_MEMORY_NODES = "ranked_memory_nodes"

## reme_ai\retrieve\__init__.py
reme_ai\retrieve\__init__.py:3 - This module provides submodules for different types of memory retrieval:
reme_ai\retrieve\__init__.py:4 - - personal: Personal memory retrieval operations
reme_ai\retrieve\__init__.py:5 - - task: Task memory retrieval operations
reme_ai\retrieve\__init__.py:6 - - tool: Tool memory retrieval operations
reme_ai\retrieve\__init__.py:7 - - working: Working-memory retrieval operations

## reme_ai\retrieve\personal\fuse_rerank_op.py
reme_ai\retrieve\personal\fuse_rerank_op.py:14 - from reme_ai.schema.memory import BaseMemory
reme_ai\retrieve\personal\fuse_rerank_op.py:26 - def match_memory_time(extract_time_dict: Dict[str, str], memory: BaseMemory):
reme_ai\retrieve\personal\fuse_rerank_op.py:32 - memory: Memory object to check for time relevance
reme_ai\retrieve\personal\fuse_rerank_op.py:40 - event_value = memory.metadata.get(f"event_{k}", "")
reme_ai\retrieve\personal\fuse_rerank_op.py:48 - msg_value = memory.metadata.get(f"msg_{k}", "")
reme_ai\retrieve\personal\fuse_rerank_op.py:57 - memory.metadata["match_event_flag"] = str(int(match_event_flag))
reme_ai\retrieve\personal\fuse_rerank_op.py:58 - memory.metadata["match_msg_flag"] = str(int(match_msg_flag))
reme_ai\retrieve\personal\fuse_rerank_op.py:66 - 1. Retrieves extraction time data and a list of memories from the context.
reme_ai\retrieve\personal\fuse_rerank_op.py:67 - 2. Reranks memories based on a combination of their original score, type,
reme_ai\retrieve\personal\fuse_rerank_op.py:85 - output_memory_max_count = self.op_params.get("output_memory_max_count", 5)
reme_ai\retrieve\personal\fuse_rerank_op.py:89 - memory_list: List[BaseMemory] = self.context.response.metadata.get("memory_list", [])
reme_ai\retrieve\personal\fuse_rerank_op.py:92 - if not memory_list:
reme_ai\retrieve\personal\fuse_rerank_op.py:95 - self.context.response.metadata["memory_list"] = []
reme_ai\retrieve\personal\fuse_rerank_op.py:98 - logger.info(f"Fuse reranking {len(memory_list)} memories with time dict: {bool(extract_time_dict)}")
reme_ai\retrieve\personal\fuse_rerank_op.py:114 - )[:output_memory_max_count]
reme_ai\retrieve\personal\fuse_rerank_op.py:122 - self.context.response.metadata["memory_list"] = reranked_memories
reme_ai\retrieve\personal\fuse_rerank_op.py:127 - memory_list: List[BaseMemory],
reme_ai\retrieve\personal\fuse_rerank_op.py:132 - ) -> List[BaseMemory]:
reme_ai\retrieve\personal\fuse_rerank_op.py:137 - memory_list: List of memories to rerank
reme_ai\retrieve\personal\fuse_rerank_op.py:140 - fuse_ratio_dict: Dictionary mapping memory types to score multipliers
... and 23 more

## reme_ai\retrieve\personal\print_memory_op.py
reme_ai\retrieve\personal\print_memory_op.py:13 - from reme_ai.schema.memory import BaseMemory
reme_ai\retrieve\personal\print_memory_op.py:17 - class PrintMemoryOp(BaseAsyncOp):
reme_ai\retrieve\personal\print_memory_op.py:31 - # Get memory list from context
reme_ai\retrieve\personal\print_memory_op.py:32 - memory_list: List[BaseMemory] = self.context.response.metadata.get("memory_list", [])
reme_ai\retrieve\personal\print_memory_op.py:34 - if not memory_list:
reme_ai\retrieve\personal\print_memory_op.py:42 - formatted_memories = self._format_memories_for_print(memory_list)
reme_ai\retrieve\personal\print_memory_op.py:49 - def _format_memories_for_print(memories: List[BaseMemory]) -> str:
reme_ai\retrieve\personal\print_memory_op.py:54 - memories: List of memory objects to format
reme_ai\retrieve\personal\print_memory_op.py:64 - for i, memory in enumerate(memories, 1):
reme_ai\retrieve\personal\print_memory_op.py:65 - memory_text = f"Memory {i}:\n"
reme_ai\retrieve\personal\print_memory_op.py:66 - memory_text += f"  When to use: {memory.when_to_use}\n"
reme_ai\retrieve\personal\print_memory_op.py:67 - memory_text += f"  Content: {memory.content}\n"
reme_ai\retrieve\personal\print_memory_op.py:70 - if hasattr(memory, "metadata") and memory.metadata:
reme_ai\retrieve\personal\print_memory_op.py:72 - for key, value in memory.metadata.items():
reme_ai\retrieve\personal\print_memory_op.py:76 - memory_text += f"  Metadata: {', '.join(metadata_items)}\n"
reme_ai\retrieve\personal\print_memory_op.py:83 - def format_memories_for_output(memories: List) -> str:
reme_ai\retrieve\personal\print_memory_op.py:88 - memories: List of memory objects
reme_ai\retrieve\personal\print_memory_op.py:97 - for i, memory in enumerate(memories, 1):
reme_ai\retrieve\personal\print_memory_op.py:98 - when_to_use = getattr(memory, "when_to_use", "") or memory.get("when_to_use", "")
reme_ai\retrieve\personal\print_memory_op.py:99 - content = getattr(memory, "content", "") or memory.get("content", "")
... and 8 more

## reme_ai\retrieve\personal\print_memory_prompt.yaml
reme_ai\retrieve\personal\print_memory_prompt.yaml:14 - ========== The {user_name}'s long-term memory about {target_name} ==========

## reme_ai\retrieve\personal\retrieve_memory_op.py
reme_ai\retrieve\personal\retrieve_memory_op.py:3 - This module provides functionality to retrieve memories from a vector store
reme_ai\retrieve\personal\retrieve_memory_op.py:14 - from reme_ai.schema.memory import BaseMemory, vector_node_to_memory
reme_ai\retrieve\personal\retrieve_memory_op.py:18 - class RetrieveMemoryOp(BaseAsyncOp):
reme_ai\retrieve\personal\retrieve_memory_op.py:20 - Retrieves memories based on specified criteria such as status, type, and timestamp.
reme_ai\retrieve\personal\retrieve_memory_op.py:30 - 1. Retrieves memories from vector store based on query similarity
reme_ai\retrieve\personal\retrieve_memory_op.py:47 - memory_list: List[BaseMemory] = []
reme_ai\retrieve\personal\retrieve_memory_op.py:48 - memory_content_list: List[str] = []
reme_ai\retrieve\personal\retrieve_memory_op.py:50 - memory: BaseMemory = vector_node_to_memory(node)
reme_ai\retrieve\personal\retrieve_memory_op.py:51 - if memory.content not in memory_content_list:
reme_ai\retrieve\personal\retrieve_memory_op.py:54 - logger.info(f"retrieve memory.size={len(memory_list)}")
reme_ai\retrieve\personal\retrieve_memory_op.py:58 - memory_list = [mem for mem in memory_list if mem.score >= threshold_score or mem.score is None]
reme_ai\retrieve\personal\retrieve_memory_op.py:59 - logger.info(f"after filter by threshold_score size={len(memory_list)}")
reme_ai\retrieve\personal\retrieve_memory_op.py:61 - self.context.response.metadata["memory_list"] = memory_list

## reme_ai\retrieve\personal\semantic_rank_op.py
reme_ai\retrieve\personal\semantic_rank_op.py:17 - from reme_ai.schema.memory import BaseMemory
reme_ai\retrieve\personal\semantic_rank_op.py:23 - The SemanticRankOp class processes queries by retrieving memory nodes,
reme_ai\retrieve\personal\semantic_rank_op.py:34 - - Retrieves query and memory list from context.
reme_ai\retrieve\personal\semantic_rank_op.py:44 - # Get memory list from context - previous op guarantees this exists
reme_ai\retrieve\personal\semantic_rank_op.py:45 - memory_list: List[BaseMemory] = self.context.response.metadata["memory_list"]
reme_ai\retrieve\personal\semantic_rank_op.py:50 - output_memory_max_count: int = self.op_params.get("output_memory_max_count", 10)
reme_ai\retrieve\personal\semantic_rank_op.py:52 - if not memory_list:
reme_ai\retrieve\personal\semantic_rank_op.py:56 - logger.info(f"Semantic ranking {len(memory_list)} memories for query: {query[:100]}...")
reme_ai\retrieve\personal\semantic_rank_op.py:58 - if not enable_ranker or len(memory_list) <= output_memory_max_count:
reme_ai\retrieve\personal\semantic_rank_op.py:63 - memory_dict = {memory.content.strip(): memory for memory in memory_list if memory.content.strip()}
reme_ai\retrieve\personal\semantic_rank_op.py:64 - memory_list = list(memory_dict.values())
reme_ai\retrieve\personal\semantic_rank_op.py:65 - logger.info(f"After deduplication: {len(memory_list)} memories")
reme_ai\retrieve\personal\semantic_rank_op.py:68 - ranked_memories = await self._semantic_rank_memories(query, memory_list)
reme_ai\retrieve\personal\semantic_rank_op.py:70 - memory_list = ranked_memories
reme_ai\retrieve\personal\semantic_rank_op.py:73 - memory_list = sorted(memory_list, key=lambda m: m.score, reverse=True)
reme_ai\retrieve\personal\semantic_rank_op.py:77 - for i, memory in enumerate(memory_list[:5]):  # Log top 5
reme_ai\retrieve\personal\semantic_rank_op.py:78 - logger.info(f"Top {i + 1}: Score={memory.score:.3f}, Content={memory.content[:80]}...")
reme_ai\retrieve\personal\semantic_rank_op.py:81 - self.context.response.metadata["memory_list"] = memory_list
reme_ai\retrieve\personal\semantic_rank_op.py:83 - async def _semantic_rank_memories(self, query: str, memories: List[BaseMemory]) -> List[BaseMemory]:
reme_ai\retrieve\personal\semantic_rank_op.py:161 - def apply_semantic_scores_to_memories(memories: List, rankings: List[dict]) -> int:
... and 7 more

## reme_ai\retrieve\personal\__init__.py
reme_ai\retrieve\personal\__init__.py:4 - from a vector store, including time extraction, semantic ranking, and memory formatting.
reme_ai\retrieve\personal\__init__.py:9 - from .print_memory_op import PrintMemoryOp
reme_ai\retrieve\personal\__init__.py:11 - from .retrieve_memory_op import RetrieveMemoryOp

## reme_ai\retrieve\task\merge_memory_op.py
reme_ai\retrieve\task\merge_memory_op.py:13 - from reme_ai.schema.memory import BaseMemory
reme_ai\retrieve\task\merge_memory_op.py:17 - class MergeMemoryOp(BaseAsyncOp):
reme_ai\retrieve\task\merge_memory_op.py:22 - instructions for the LLM to consider the helpful parts from these memories.
reme_ai\retrieve\task\merge_memory_op.py:28 - Merges memories from context metadata into a formatted string with
reme_ai\retrieve\task\merge_memory_op.py:31 - memory_list: List[BaseMemory] = self.context.response.metadata["memory_list"]
reme_ai\retrieve\task\merge_memory_op.py:33 - if not memory_list:
reme_ai\retrieve\task\merge_memory_op.py:36 - content_collector = ["Previous Memory"]
reme_ai\retrieve\task\merge_memory_op.py:37 - for memory in memory_list:
reme_ai\retrieve\task\merge_memory_op.py:38 - if not memory.content:

## reme_ai\retrieve\task\rerank_memory_op.py
reme_ai\retrieve\task\rerank_memory_op.py:18 - from reme_ai.schema.memory import BaseMemory
reme_ai\retrieve\task\rerank_memory_op.py:22 - class RerankMemoryOp(BaseAsyncOp):
reme_ai\retrieve\task\rerank_memory_op.py:39 - memory_list: List[BaseMemory] = self.context.response.metadata["memory_list"]
reme_ai\retrieve\task\rerank_memory_op.py:48 - if not memory_list:
reme_ai\retrieve\task\rerank_memory_op.py:56 - memory_list = await self._llm_rerank(retrieval_query, memory_list)
reme_ai\retrieve\task\rerank_memory_op.py:57 - logger.info(f"After LLM reranking: {len(memory_list)} memories")
reme_ai\retrieve\task\rerank_memory_op.py:61 - memory_list = self._score_based_filter(memory_list, min_score_threshold)
reme_ai\retrieve\task\rerank_memory_op.py:62 - logger.info(f"After score filtering: {len(memory_list)} memories")
reme_ai\retrieve\task\rerank_memory_op.py:65 - reranked_memories = memory_list[:top_k]
reme_ai\retrieve\task\rerank_memory_op.py:69 - self.context.response.metadata["memory_list"] = reranked_memories
reme_ai\retrieve\task\rerank_memory_op.py:71 - async def _llm_rerank(self, query: str, candidates: List[BaseMemory]) -> List[BaseMemory]:
reme_ai\retrieve\task\rerank_memory_op.py:76 - candidates: List of memory candidates to rerank.
reme_ai\retrieve\task\rerank_memory_op.py:88 - prompt_name="memory_rerank_prompt",
reme_ai\retrieve\task\rerank_memory_op.py:117 - def _score_based_filter(memories: List[BaseMemory], min_score: float) -> List[BaseMemory]:
reme_ai\retrieve\task\rerank_memory_op.py:129 - for memory in memories:
reme_ai\retrieve\task\rerank_memory_op.py:131 - confidence = memory.metadata.get("confidence", 0.5)
reme_ai\retrieve\task\rerank_memory_op.py:132 - validation_score = memory.score or 0.5
reme_ai\retrieve\task\rerank_memory_op.py:140 - logger.debug(f"Filtered out memory with score {combined_score:.2f}")
reme_ai\retrieve\task\rerank_memory_op.py:146 - def _format_candidates_for_rerank(candidates: List[BaseMemory]) -> str:
reme_ai\retrieve\task\rerank_memory_op.py:150 - candidates: List of memory candidates to format.

## reme_ai\retrieve\task\rerank_memory_prompt.yaml
reme_ai\retrieve\task\rerank_memory_prompt.yaml:1 - memory_rerank_prompt: |

## reme_ai\retrieve\task\rewrite_memory_op.py
reme_ai\retrieve\task\rewrite_memory_op.py:17 - from reme_ai.schema.memory import BaseMemory
reme_ai\retrieve\task\rewrite_memory_op.py:21 - class RewriteMemoryOp(BaseAsyncOp):
reme_ai\retrieve\task\rewrite_memory_op.py:34 - Retrieves memories from context metadata, formats them, and optionally
reme_ai\retrieve\task\rewrite_memory_op.py:38 - memory_list: List[BaseMemory] = self.context.response.metadata["memory_list"]
reme_ai\retrieve\task\rewrite_memory_op.py:42 - if not memory_list:
reme_ai\retrieve\task\rewrite_memory_op.py:47 - logger.info(f"Generating context from {len(memory_list)} memories")
reme_ai\retrieve\task\rewrite_memory_op.py:50 - rewritten_memory = await self._generate_context_message(query, messages, memory_list)
reme_ai\retrieve\task\rewrite_memory_op.py:53 - self.context.response.answer = rewritten_memory
reme_ai\retrieve\task\rewrite_memory_op.py:54 - self.context.response.metadata["memory_list"] = [memory.model_dump() for memory in memory_list]
reme_ai\retrieve\task\rewrite_memory_op.py:56 - async def _generate_context_message(self, query: str, messages: List[Message], memories: List[BaseMemory]) -> str:
reme_ai\retrieve\task\rewrite_memory_op.py:57 - """Generate context message from retrieved memories.
reme_ai\retrieve\task\rewrite_memory_op.py:105 - prompt_name="memory_rewrite_prompt",
reme_ai\retrieve\task\rewrite_memory_op.py:127 - def _format_memories_for_context(memories: List[BaseMemory]) -> str:
reme_ai\retrieve\task\rewrite_memory_op.py:138 - for i, memory in enumerate(memories, 1):
reme_ai\retrieve\task\rewrite_memory_op.py:139 - condition = memory.when_to_use
reme_ai\retrieve\task\rewrite_memory_op.py:140 - memory_content = memory.content
reme_ai\retrieve\task\rewrite_memory_op.py:141 - memory_text = f"Memory {i} :\n When to use: {condition}\n Content: {memory_content}\n"

## reme_ai\retrieve\task\rewrite_memory_prompt.yaml
reme_ai\retrieve\task\rewrite_memory_prompt.yaml:1 - memory_rewrite_prompt: |

## reme_ai\retrieve\task\__init__.py
reme_ai\retrieve\task\__init__.py:8 - from .merge_memory_op import MergeMemoryOp
reme_ai\retrieve\task\__init__.py:9 - from .rerank_memory_op import RerankMemoryOp
reme_ai\retrieve\task\__init__.py:10 - from .rewrite_memory_op import RewriteMemoryOp

## reme_ai\retrieve\tool\retrieve_tool_memory_op.py
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:3 - This module provides functionality to retrieve tool memories from a vector store
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:15 - from reme_ai.schema.memory import ToolMemory, vector_node_to_memory
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:19 - class RetrieveToolMemoryOp(BaseAsyncOp):
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:20 - """Retrieves tool memories from vector store based on tool names.
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:30 - def _format_tool_memories(memories: List[ToolMemory]) -> str:
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:34 - memories: List of ToolMemory objects to format.
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:39 - lines = [f"Retrieved {len(memories)} tool memory(ies):\n"]
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:41 - for idx, memory in enumerate(memories, 1):
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:42 - lines.append(f"Tool: {memory.when_to_use}")
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:62 - the top matching memory from the vector store and validates that it
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:79 - matched_tool_memories: List[ToolMemory] = []
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:90 - memory = vector_node_to_memory(top_node)
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:93 - if isinstance(memory, ToolMemory) and memory.when_to_use == tool_name:
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:96 - f"Found tool_memory for tool_name={tool_name}, "
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:97 - f"memory_id={memory.memory_id}, "
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:98 - f"total_calls={len(memory.tool_call_results)}",
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:103 - logger.warning(f"No memory found for tool_name={tool_name}")
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:117 - self.context.response.metadata["memory_list"] = matched_tool_memories
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:120 - for memory in matched_tool_memories:
reme_ai\retrieve\tool\retrieve_tool_memory_op.py:122 - f"Retrieved tool: {memory.when_to_use}, "
... and 2 more

## reme_ai\retrieve\tool\__init__.py
reme_ai\retrieve\tool\__init__.py:3 - This module provides operations for retrieving tool memories from a vector store
reme_ai\retrieve\tool\__init__.py:7 - from .retrieve_tool_memory_op import RetrieveToolMemoryOp

## reme_ai\schema\memory.py
reme_ai\schema\memory.py:20 - class BaseMemory(BaseModel, ABC):
reme_ai\schema\memory.py:21 - """Base class for all memory types in the ReMe system.
reme_ai\schema\memory.py:23 - This abstract base class provides common fields and methods for all memory
reme_ai\schema\memory.py:28 - workspace_id: Identifier for the workspace this memory belongs to.
reme_ai\schema\memory.py:29 - memory_id: Unique identifier for this memory instance.
reme_ai\schema\memory.py:30 - memory_type: Type of memory (task, personal, tool, etc.).
reme_ai\schema\memory.py:31 - when_to_use: Description of when this memory should be retrieved.
reme_ai\schema\memory.py:32 - content: The actual content of the memory (string or bytes).
reme_ai\schema\memory.py:33 - score: Relevance score for this memory (0.0 to 1.0).
reme_ai\schema\memory.py:34 - time_created: Timestamp when the memory was created.
reme_ai\schema\memory.py:35 - time_modified: Timestamp when the memory was last modified.
reme_ai\schema\memory.py:36 - author: Identifier of the entity that created this memory.
reme_ai\schema\memory.py:41 - memory_id: str = Field(default_factory=lambda: uuid4().hex)
reme_ai\schema\memory.py:42 - memory_type: str = Field(default=...)
reme_ai\schema\memory.py:70 - VectorNode: A vector node representation of this memory.
reme_ai\schema\memory.py:79 - """Create a memory instance from a VectorNode.
reme_ai\schema\memory.py:82 - node: VectorNode containing memory data.
reme_ai\schema\memory.py:85 - BaseMemory: A memory instance reconstructed from the vector node.
reme_ai\schema\memory.py:93 - class TaskMemory(BaseMemory):
reme_ai\schema\memory.py:94 - """Memory type for storing task-related information.
... and 86 more

## reme_ai\schema\__init__.py
reme_ai\schema\__init__.py:10 - from reme_ai.schema.memory import (

## reme_ai\service\agentscope_runtime_memory_service.py
reme_ai\service\agentscope_runtime_memory_service.py:3 - This module provides the abstract base class AgentscopeRuntimeMemoryService
reme_ai\service\agentscope_runtime_memory_service.py:4 - which defines the interface for memory services that integrate with
reme_ai\service\agentscope_runtime_memory_service.py:17 - class AgentscopeRuntimeMemoryService(ABC):
reme_ai\service\agentscope_runtime_memory_service.py:18 - """Abstract base class for memory services integrated with Agentscope runtime.
reme_ai\service\agentscope_runtime_memory_service.py:20 - This class provides a common interface for memory services and manages
reme_ai\service\agentscope_runtime_memory_service.py:35 - def add_session_memory_id(self, session_id: str, memory_id):
reme_ai\service\agentscope_runtime_memory_service.py:44 - memory_id: The memory identifier to associate with the session.
reme_ai\service\agentscope_runtime_memory_service.py:97 - async def add_memory(
reme_ai\service\agentscope_runtime_memory_service.py:113 - async def search_memory(
reme_ai\service\agentscope_runtime_memory_service.py:123 - Searches messages from the memory service.
reme_ai\service\agentscope_runtime_memory_service.py:130 - filters: The filters used to search memory
reme_ai\service\agentscope_runtime_memory_service.py:134 - async def list_memory(
reme_ai\service\agentscope_runtime_memory_service.py:148 - filters: The filters for the memory items.
reme_ai\service\agentscope_runtime_memory_service.py:152 - async def delete_memory(

## reme_ai\service\personal_memory_service.py
reme_ai\service\personal_memory_service.py:3 - This module provides the PersonalMemoryService class which extends the base
reme_ai\service\personal_memory_service.py:16 - from reme_ai.schema.memory import PersonalMemory
reme_ai\service\personal_memory_service.py:17 - from reme_ai.service.agentscope_runtime_memory_service import AgentscopeRuntimeMemoryService
reme_ai\service\personal_memory_service.py:20 - class PersonalMemoryService(AgentscopeRuntimeMemoryService):
reme_ai\service\personal_memory_service.py:52 - async def add_memory(self, user_id: str, messages: list, session_id: Optional[str] = None) -> None:
reme_ai\service\personal_memory_service.py:53 - """Add personal memory from messages.
reme_ai\service\personal_memory_service.py:62 - session_id: Optional session identifier to associate with the memory.
reme_ai\service\personal_memory_service.py:80 - result: FlowResponse = await self.app.async_execute_flow(name="summary_personal_memory", **kwargs)
reme_ai\service\personal_memory_service.py:81 - memory_list: List[PersonalMemory] = result.metadata.get("memory_list", [])
reme_ai\service\personal_memory_service.py:82 - for memory in memory_list:
reme_ai\service\personal_memory_service.py:83 - memory_id = memory.memory_id
reme_ai\service\personal_memory_service.py:85 - logger.info(f"[personal_memory_service] user_id={user_id} session_id={session_id} add memory: {memory}")
reme_ai\service\personal_memory_service.py:87 - async def search_memory(
reme_ai\service\personal_memory_service.py:128 - result: FlowResponse = await self.app.async_execute_flow(name="retrieve_personal_memory", **kwargs)
reme_ai\service\personal_memory_service.py:129 - logger.info(f"[personal_memory_service] user_id={user_id} search result: {result.model_dump_json()}")
reme_ai\service\personal_memory_service.py:133 - async def list_memory(
reme_ai\service\personal_memory_service.py:154 - logger.info(f"[personal_memory_service] list_memory result: {result}")
reme_ai\service\personal_memory_service.py:158 - logger.info(f"[personal_memory_service] list memory.{i}={line}")
reme_ai\service\personal_memory_service.py:161 - async def delete_memory(self, user_id: str, session_id: Optional[str] = None) -> None:
reme_ai\service\personal_memory_service.py:181 - memory_ids=delete_ids,
... and 7 more

## reme_ai\service\service_description.md
reme_ai\service\service_description.md:4 - <th width="100">MemoryType</th>
reme_ai\service\service_description.md:12 - <td align="center">ReMe.PersonalMemoryService</td>
reme_ai\service\service_description.md:13 - <td><code>from reme_ai.service.personal_memory_service import PersonalMemoryService</code></td>
reme_ai\service\service_description.md:18 - <td align="center">ReMe.TaskMemoryService</td>
reme_ai\service\service_description.md:19 - <td><code>from reme_ai.service.task_memory_service import TaskMemoryService</code></td>

## reme_ai\service\task_memory_service.py
reme_ai\service\task_memory_service.py:3 - This module provides the TaskMemoryService class which extends the base
reme_ai\service\task_memory_service.py:16 - from reme_ai.schema.memory import TaskMemory
reme_ai\service\task_memory_service.py:17 - from reme_ai.service.agentscope_runtime_memory_service import AgentscopeRuntimeMemoryService
reme_ai\service\task_memory_service.py:20 - class TaskMemoryService(AgentscopeRuntimeMemoryService):
reme_ai\service\task_memory_service.py:52 - async def add_memory(self, user_id: str, messages: list, session_id: Optional[str] = None) -> None:
reme_ai\service\task_memory_service.py:53 - """Add task memory from messages.
reme_ai\service\task_memory_service.py:62 - session_id: Optional session identifier to associate with the memory.
reme_ai\service\task_memory_service.py:80 - result: FlowResponse = await self.app.async_execute_flow(name="summary_task_memory", **kwargs)
reme_ai\service\task_memory_service.py:81 - memory_list: List[TaskMemory] = result.metadata.get("memory_list", [])
reme_ai\service\task_memory_service.py:82 - for memory in memory_list:
reme_ai\service\task_memory_service.py:83 - memory_id = memory.memory_id
reme_ai\service\task_memory_service.py:85 - logger.info(f"[task_memory_service] user_id={user_id} session_id={session_id} add memory: {memory}")
reme_ai\service\task_memory_service.py:87 - async def search_memory(
reme_ai\service\task_memory_service.py:124 - result: FlowResponse = await self.app.async_execute_flow(name="retrieve_task_memory", **kwargs)
reme_ai\service\task_memory_service.py:125 - logger.info(f"[task_memory_service] user_id={user_id} add result: {result.model_dump_json()}")
reme_ai\service\task_memory_service.py:129 - async def list_memory(
reme_ai\service\task_memory_service.py:150 - print("list_memory result:", result)
reme_ai\service\task_memory_service.py:154 - logger.info(f"[task_memory_service] list memory.{i}={line}")
reme_ai\service\task_memory_service.py:157 - async def delete_memory(self, user_id: str, session_id: Optional[str] = None) -> None:
reme_ai\service\task_memory_service.py:177 - memory_ids=delete_ids,
... and 7 more

## reme_ai\service\__init__.py
reme_ai\service\__init__.py:7 - from reme_ai.service.agentscope_runtime_memory_service import AgentscopeRuntimeMemoryService
reme_ai\service\__init__.py:8 - from reme_ai.service.personal_memory_service import PersonalMemoryService
reme_ai\service\__init__.py:9 - from reme_ai.service.task_memory_service import TaskMemoryService

## reme_ai\summary\personal\contra_repeat_op.py
reme_ai\summary\personal\contra_repeat_op.py:3 - This module provides the ContraRepeatOp class which processes memory nodes
reme_ai\summary\personal\contra_repeat_op.py:5 - observation memories from context, constructs prompts for language model
reme_ai\summary\personal\contra_repeat_op.py:20 - from reme_ai.schema.memory import BaseMemory
reme_ai\summary\personal\contra_repeat_op.py:26 - The `ContraRepeatOp` class specializes in processing memory nodes to identify and handle
reme_ai\summary\personal\contra_repeat_op.py:30 - - Collects observation memories from context.
reme_ai\summary\personal\contra_repeat_op.py:41 - 1. Gets memory list from context
reme_ai\summary\personal\contra_repeat_op.py:46 - # Get memory list from context - standardized key
reme_ai\summary\personal\contra_repeat_op.py:47 - memory_list: List[BaseMemory] = []
reme_ai\summary\personal\contra_repeat_op.py:52 - self.context.response.metadata["memory_list"] = memory_list
reme_ai\summary\personal\contra_repeat_op.py:54 - if not memory_list:
reme_ai\summary\personal\contra_repeat_op.py:56 - self.context.response.metadata["deleted_memory_ids"] = []
reme_ai\summary\personal\contra_repeat_op.py:65 - self.context.response.metadata["deleted_memory_ids"] = []
reme_ai\summary\personal\contra_repeat_op.py:69 - sorted_memories = sorted(memory_list, key=lambda x: x.time_created, reverse=True)[:contra_repeat_max_count]
reme_ai\summary\personal\contra_repeat_op.py:73 - self.context.response.metadata["memory_list"] = sorted_memories
reme_ai\summary\personal\contra_repeat_op.py:74 - self.context.response.metadata["deleted_memory_ids"] = []
reme_ai\summary\personal\contra_repeat_op.py:79 - for i, memory in enumerate(sorted_memories):
reme_ai\summary\personal\contra_repeat_op.py:105 - self.context.response.metadata["memory_list"] = sorted_memories
reme_ai\summary\personal\contra_repeat_op.py:106 - self.context.response.metadata["deleted_memory_ids"] = []
reme_ai\summary\personal\contra_repeat_op.py:113 - filtered_memories, deleted_memory_ids = self._parse_and_filter_memories(response_text, sorted_memories)
reme_ai\summary\personal\contra_repeat_op.py:116 - self.context.response.metadata["memory_list"] = filtered_memories
... and 6 more

## reme_ai\summary\personal\get_observation_op.py
reme_ai\summary\personal\get_observation_op.py:6 - observation memories from the filtered messages.
reme_ai\summary\personal\get_observation_op.py:17 - from reme_ai.schema.memory import BaseMemory, PersonalMemory
reme_ai\summary\personal\get_observation_op.py:71 - async def _extract_observations_from_messages(self, filtered_messages: List[Message]) -> List[BaseMemory]:
reme_ai\summary\personal\get_observation_op.py:96 - def parse_observations(message: Message) -> List[BaseMemory]:
reme_ai\summary\personal\get_observation_op.py:112 - observation = PersonalMemory(

## reme_ai\summary\personal\get_observation_with_time_op.py
reme_ai\summary\personal\get_observation_with_time_op.py:18 - from reme_ai.schema.memory import BaseMemory, PersonalMemory
reme_ai\summary\personal\get_observation_with_time_op.py:72 - async def _extract_observations_with_time_from_messages(self, filtered_messages: List[Message]) -> List[BaseMemory]:
reme_ai\summary\personal\get_observation_with_time_op.py:106 - def parse_observations(message: Message) -> List[BaseMemory]:
reme_ai\summary\personal\get_observation_with_time_op.py:122 - observation = PersonalMemory(

## reme_ai\summary\personal\get_reflection_subject_op.py
reme_ai\summary\personal\get_reflection_subject_op.py:1 - """Module for generating reflection subjects from personal memories.
reme_ai\summary\personal\get_reflection_subject_op.py:16 - from reme_ai.schema.memory import BaseMemory, PersonalMemory
reme_ai\summary\personal\get_reflection_subject_op.py:22 - A specialized operation class responsible for retrieving unreflected memory nodes,
reme_ai\summary\personal\get_reflection_subject_op.py:29 - def new_insight_memory(self, insight_content: str, target: str) -> PersonalMemory:
reme_ai\summary\personal\get_reflection_subject_op.py:38 - PersonalMemory: A new PersonalMemory instance representing the insight.
reme_ai\summary\personal\get_reflection_subject_op.py:48 - "memory_type": "personal_topic",
reme_ai\summary\personal\get_reflection_subject_op.py:54 - Generate reflection subjects (topics) from personal memories for insight extraction.
reme_ai\summary\personal\get_reflection_subject_op.py:57 - 1. Retrieve personal memories and existing insights from context
reme_ai\summary\personal\get_reflection_subject_op.py:63 - # Get memories from previous operation
reme_ai\summary\personal\get_reflection_subject_op.py:88 - memory_contents = []
reme_ai\summary\personal\get_reflection_subject_op.py:89 - for memory in personal_memories:
reme_ai\summary\personal\get_reflection_subject_op.py:90 - if hasattr(memory, "content") and memory.content.strip():
reme_ai\summary\personal\get_reflection_subject_op.py:93 - if not memory_contents:
reme_ai\summary\personal\get_reflection_subject_op.py:112 - memory_contents: List[str],
reme_ai\summary\personal\get_reflection_subject_op.py:116 - ) -> List[BaseMemory]:
reme_ai\summary\personal\get_reflection_subject_op.py:121 - memory_contents: List of memory content strings
reme_ai\summary\personal\get_reflection_subject_op.py:143 - user_query="\n".join(memory_contents),
reme_ai\summary\personal\get_reflection_subject_op.py:149 - def parse_reflection_response(message: Message) -> List[BaseMemory]:
reme_ai\summary\personal\get_reflection_subject_op.py:160 - insight_memory = self.new_insight_memory(

## reme_ai\summary\personal\info_filter_op.py
reme_ai\summary\personal\info_filter_op.py:17 - from reme_ai.schema.memory import PersonalMemory
reme_ai\summary\personal\info_filter_op.py:99 - ) -> List[PersonalMemory]:
reme_ai\summary\personal\info_filter_op.py:123 - def parse_and_filter(message: Message) -> List[PersonalMemory]:
reme_ai\summary\personal\info_filter_op.py:146 - # Create memory from filtered message with combined metadata
reme_ai\summary\personal\info_filter_op.py:147 - memory = PersonalMemory(

## reme_ai\summary\personal\load_today_memory_op.py
reme_ai\summary\personal\load_today_memory_op.py:1 - """Module for loading today's memories from vector store.
reme_ai\summary\personal\load_today_memory_op.py:3 - This module provides the LoadTodayMemoryOp class which loads memories from
reme_ai\summary\personal\load_today_memory_op.py:5 - retrieving and deduplicating memories from the current date using vector
reme_ai\summary\personal\load_today_memory_op.py:16 - from reme_ai.schema.memory import BaseMemory, vector_node_to_memory
reme_ai\summary\personal\load_today_memory_op.py:21 - class LoadTodayMemoryOp(BaseAsyncOp):
reme_ai\summary\personal\load_today_memory_op.py:23 - Operation to load today's memories from vector store for deduplication.
reme_ai\summary\personal\load_today_memory_op.py:24 - Focuses specifically on retrieving and deduplicating memories from the current date.
reme_ai\summary\personal\load_today_memory_op.py:31 - Load today's memories from vector store and perform deduplication.
reme_ai\summary\personal\load_today_memory_op.py:34 - 1. Retrieves memories from today using vector store search
reme_ai\summary\personal\load_today_memory_op.py:48 - # Get today's memories from vector store
reme_ai\summary\personal\load_today_memory_op.py:56 - logger.info(f"Retrieved {len(today_memories)} memories from today")
reme_ai\summary\personal\load_today_memory_op.py:58 - logger.info(f"Final today's memory list size: {len(today_memories)}")
reme_ai\summary\personal\load_today_memory_op.py:60 - async def _retrieve_today_memories(self, workspace_id: str, user_name: str, top_k: int) -> List[BaseMemory]:
reme_ai\summary\personal\load_today_memory_op.py:62 - Retrieve memories from today using vector store with date filtering.
reme_ai\summary\personal\load_today_memory_op.py:77 - logger.info(f"Searching for memories from date: {today_date}")
reme_ai\summary\personal\load_today_memory_op.py:81 - "memory_type": "personal",
reme_ai\summary\personal\load_today_memory_op.py:107 - def _convert_nodes_to_memories(nodes: List[VectorNode]) -> List[BaseMemory]:
reme_ai\summary\personal\load_today_memory_op.py:121 - memory = vector_node_to_memory(node)
reme_ai\summary\personal\load_today_memory_op.py:124 - logger.warning(f"Failed to convert node {i} to memory: {e}")

## reme_ai\summary\personal\long_contra_repeat_op.py
reme_ai\summary\personal\long_contra_repeat_op.py:19 - from reme_ai.schema.memory import BaseMemory, PersonalMemory
reme_ai\summary\personal\long_contra_repeat_op.py:38 - 1. Get updated insight memories from previous operation
reme_ai\summary\personal\long_contra_repeat_op.py:44 - # Get memories from previous operation
reme_ai\summary\personal\long_contra_repeat_op.py:49 - self.context.response.metadata["memory_list"] = []
reme_ai\summary\personal\long_contra_repeat_op.py:58 - self.context.response.metadata["memory_list"] = updated_insights
reme_ai\summary\personal\long_contra_repeat_op.py:70 - self.context.response.metadata["memory_list"] = sorted_memories
reme_ai\summary\personal\long_contra_repeat_op.py:79 - self.context.response.metadata["memory_list"] = filtered_memories
reme_ai\summary\personal\long_contra_repeat_op.py:82 - async def _analyze_and_resolve_conflicts(self, memories: List[BaseMemory]) -> List[BaseMemory]:
reme_ai\summary\personal\long_contra_repeat_op.py:95 - memory_texts = []
reme_ai\summary\personal\long_contra_repeat_op.py:96 - for i, memory in enumerate(memories):
reme_ai\summary\personal\long_contra_repeat_op.py:102 - num_obs=len(memory_texts),
reme_ai\summary\personal\long_contra_repeat_op.py:111 - user_query="\n".join(memory_texts),
reme_ai\summary\personal\long_contra_repeat_op.py:121 - logger.warning("Empty response from LLM, keeping all memories")
reme_ai\summary\personal\long_contra_repeat_op.py:128 - def _parse_and_filter_memories(response_text: str, memories: List[BaseMemory], user_name: str) -> List[BaseMemory]:
reme_ai\summary\personal\long_contra_repeat_op.py:144 - memory_idx = idx - 1  # Convert to 0-based index
reme_ai\summary\personal\long_contra_repeat_op.py:145 - if memory_idx >= len(memories):
reme_ai\summary\personal\long_contra_repeat_op.py:150 - memory = memories[memory_idx]
reme_ai\summary\personal\long_contra_repeat_op.py:157 - modified_memory = PersonalMemory(
reme_ai\summary\personal\long_contra_repeat_op.py:158 - workspace_id=memory.workspace_id,
reme_ai\summary\personal\long_contra_repeat_op.py:159 - memory_id=memory.memory_id,
... and 7 more

## reme_ai\summary\personal\update_insight_op.py
reme_ai\summary\personal\update_insight_op.py:17 - from reme_ai.schema.memory import PersonalMemory
reme_ai\summary\personal\update_insight_op.py:23 - This class is responsible for updating insight value in a memory system. It filters insight nodes
reme_ai\summary\personal\update_insight_op.py:35 - 1. Get insight subjects and personal memories from context
reme_ai\summary\personal\update_insight_op.py:40 - # Get memories from previous operations
reme_ai\summary\personal\update_insight_op.py:79 - for insight_memory, _relevance_score, relevant_observations in top_insights:
reme_ai\summary\personal\update_insight_op.py:94 - insight_memories: List[PersonalMemory],
reme_ai\summary\personal\update_insight_op.py:95 - observation_memories: List[PersonalMemory],
reme_ai\summary\personal\update_insight_op.py:107 - List[tuple]: List of (insight_memory, relevance_score, relevant_observations)
reme_ai\summary\personal\update_insight_op.py:111 - for insight_memory in insight_memories:
reme_ai\summary\personal\update_insight_op.py:115 - insight_subject = getattr(insight_memory, "reflection_subject", "") or insight_memory.content
reme_ai\summary\personal\update_insight_op.py:116 - insight_keywords = set(insight_memory.content.lower().split())
reme_ai\summary\personal\update_insight_op.py:119 - for obs_memory in observation_memories:
reme_ai\summary\personal\update_insight_op.py:142 - insight_memory: PersonalMemory,
reme_ai\summary\personal\update_insight_op.py:143 - obs_memory: PersonalMemory,
reme_ai\summary\personal\update_insight_op.py:153 - insight_memory: The insight memory to compare
reme_ai\summary\personal\update_insight_op.py:154 - obs_memory: The observation memory to compare against
reme_ai\summary\personal\update_insight_op.py:155 - insight_keywords: Set of keywords extracted from insight memory content
reme_ai\summary\personal\update_insight_op.py:162 - insight_subject = getattr(insight_memory, "reflection_subject", "")
reme_ai\summary\personal\update_insight_op.py:163 - obs_subject = getattr(obs_memory, "reflection_subject", "")
reme_ai\summary\personal\update_insight_op.py:169 - obs_keywords = set(obs_memory.content.lower().split())
... and 19 more

## reme_ai\summary\personal\__init__.py
reme_ai\summary\personal\__init__.py:17 - from reme_ai.summary.personal.load_today_memory_op import LoadTodayMemoryOp

## reme_ai\summary\task\comparative_extraction_op.py
reme_ai\summary\task\comparative_extraction_op.py:16 - from reme_ai.schema.memory import BaseMemory, TaskMemory
reme_ai\summary\task\comparative_extraction_op.py:50 - soft_task_memories = await self._extract_soft_comparative_task_memory(highest_traj, lowest_traj)
reme_ai\summary\task\comparative_extraction_op.py:60 - hard_task_memories = await self._extract_hard_comparative_task_memory(
reme_ai\summary\task\comparative_extraction_op.py:101 - async def _extract_soft_comparative_task_memory(
reme_ai\summary\task\comparative_extraction_op.py:105 - ) -> List[BaseMemory]:
reme_ai\summary\task\comparative_extraction_op.py:113 - prompt_name="soft_comparative_step_task_memory_prompt",
reme_ai\summary\task\comparative_extraction_op.py:120 - def parse_task_memories(message: Message) -> List[BaseMemory]:
reme_ai\summary\task\comparative_extraction_op.py:125 - task_memory = TaskMemory(
reme_ai\summary\task\comparative_extraction_op.py:141 - async def _extract_hard_comparative_task_memory(
reme_ai\summary\task\comparative_extraction_op.py:146 - ) -> List[BaseMemory]:
reme_ai\summary\task\comparative_extraction_op.py:149 - prompt_name="hard_comparative_step_task_memory_prompt",
reme_ai\summary\task\comparative_extraction_op.py:155 - def parse_task_memories(message: Message) -> List[BaseMemory]:
reme_ai\summary\task\comparative_extraction_op.py:160 - task_memory = TaskMemory(

## reme_ai\summary\task\comparative_extraction_prompt.yaml
reme_ai\summary\task\comparative_extraction_prompt.yaml:1 - soft_comparative_step_task_memory_prompt: |
reme_ai\summary\task\comparative_extraction_prompt.yaml:41 - hard_comparative_step_task_memory_prompt: |

## reme_ai\summary\task\failure_extraction_op.py
reme_ai\summary\task\failure_extraction_op.py:3 - This module provides operations to extract task memories from failed trajectories,
reme_ai\summary\task\failure_extraction_op.py:16 - from reme_ai.schema.memory import BaseMemory, TaskMemory
reme_ai\summary\task\failure_extraction_op.py:22 - """Extract task memories from failed trajectories.
reme_ai\summary\task\failure_extraction_op.py:32 - """Extract task memories from failed trajectories"""
reme_ai\summary\task\failure_extraction_op.py:39 - logger.info(f"Extracting task memories from {len(failure_trajectories)} failed trajectories")
reme_ai\summary\task\failure_extraction_op.py:48 - task_memories = await self._extract_failure_task_memory_from_steps(segment, trajectory)
reme_ai\summary\task\failure_extraction_op.py:52 - task_memories = await self._extract_failure_task_memory_from_steps(trajectory.messages, trajectory)
reme_ai\summary\task\failure_extraction_op.py:60 - async def _extract_failure_task_memory_from_steps(
reme_ai\summary\task\failure_extraction_op.py:64 - ) -> List[BaseMemory]:
reme_ai\summary\task\failure_extraction_op.py:65 - """Extract task memory from failed step sequences"""
reme_ai\summary\task\failure_extraction_op.py:70 - prompt_name="failure_step_task_memory_prompt",
reme_ai\summary\task\failure_extraction_op.py:77 - def parse_task_memories(message: Message) -> List[BaseMemory]:
reme_ai\summary\task\failure_extraction_op.py:82 - task_memory = TaskMemory(

## reme_ai\summary\task\failure_extraction_prompt.yaml
reme_ai\summary\task\failure_extraction_prompt.yaml:1 - failure_step_task_memory_prompt: |
reme_ai\summary\task\failure_extraction_prompt.yaml:4 - Your task is to extract learning task memories from failures to prevent similar mistakes in future executions.

## reme_ai\summary\task\memory_deduplication_op.py
reme_ai\summary\task\memory_deduplication_op.py:13 - from reme_ai.schema.memory import BaseMemory
reme_ai\summary\task\memory_deduplication_op.py:17 - class MemoryDeduplicationOp(BaseAsyncOp):
reme_ai\summary\task\memory_deduplication_op.py:30 - task_memories: List[BaseMemory] = self.context.response.metadata.get("memory_list", [])
reme_ai\summary\task\memory_deduplication_op.py:47 - self.context.response.metadata["memory_list"] = deduplicated_task_memories
reme_ai\summary\task\memory_deduplication_op.py:49 - async def _deduplicate_task_memories(self, task_memories: List[BaseMemory]) -> List[BaseMemory]:
reme_ai\summary\task\memory_deduplication_op.py:60 - existing_embeddings = await self._get_existing_task_memory_embeddings(workspace_id)
reme_ai\summary\task\memory_deduplication_op.py:62 - for task_memory in task_memories:
reme_ai\summary\task\memory_deduplication_op.py:64 - current_embedding = self._get_task_memory_embedding(task_memory)
reme_ai\summary\task\memory_deduplication_op.py:67 - logger.warning(f"Failed to generate embedding for task memory: {str(task_memory.when_to_use)[:50]}...")
reme_ai\summary\task\memory_deduplication_op.py:72 - logger.debug(f"Skipping similar task memory: {str(task_memory.when_to_use)[:50]}...")
reme_ai\summary\task\memory_deduplication_op.py:77 - logger.debug(f"Skipping duplicate in current batch: {str(task_memory.when_to_use)[:50]}...")
reme_ai\summary\task\memory_deduplication_op.py:82 - logger.debug(f"Added unique task memory: {str(task_memory.when_to_use)[:50]}...")
reme_ai\summary\task\memory_deduplication_op.py:86 - async def _get_existing_task_memory_embeddings(self, workspace_id: str) -> List[List[float]]:
reme_ai\summary\task\memory_deduplication_op.py:106 - f"Retrieved {len(existing_embeddings)} existing task memory embeddings from workspace {workspace_id}",
reme_ai\summary\task\memory_deduplication_op.py:111 - logger.warning(f"Failed to retrieve existing task memory embeddings: {e}")
reme_ai\summary\task\memory_deduplication_op.py:114 - def _get_task_memory_embedding(self, task_memory: BaseMemory) -> List[float] | None:
reme_ai\summary\task\memory_deduplication_op.py:119 - text_for_embedding = f"{task_memory.when_to_use} {task_memory.content}"
reme_ai\summary\task\memory_deduplication_op.py:129 - logger.error(f"Error generating embedding for task memory: {e}")
reme_ai\summary\task\memory_deduplication_op.py:132 - def _is_similar_to_existing_task_memories(
reme_ai\summary\task\memory_deduplication_op.py:142 - logger.debug(f"Found similar existing task memory with similarity: {similarity:.3f}")
... and 5 more

## reme_ai\summary\task\memory_validation_op.py
reme_ai\summary\task\memory_validation_op.py:18 - from reme_ai.schema.memory import BaseMemory
reme_ai\summary\task\memory_validation_op.py:22 - class MemoryValidationOp(BaseAsyncOp):
reme_ai\summary\task\memory_validation_op.py:35 - task_memories: List[BaseMemory] = []
reme_ai\summary\task\memory_validation_op.py:49 - for task_memory in task_memories:
reme_ai\summary\task\memory_validation_op.py:50 - validation_result = await self._validate_single_task_memory(task_memory)
reme_ai\summary\task\memory_validation_op.py:52 - task_memory.score = validation_result.get("score", 0.0)
reme_ai\summary\task\memory_validation_op.py:56 - logger.warning(f"Task memory validation failed: {reason}")
reme_ai\summary\task\memory_validation_op.py:62 - self.context.response.metadata["memory_list"] = validated_task_memories
reme_ai\summary\task\memory_validation_op.py:64 - async def _validate_single_task_memory(self, task_memory: BaseMemory) -> Dict[str, Any]:
reme_ai\summary\task\memory_validation_op.py:66 - validation_info = await self._llm_validate_task_memory(task_memory)
reme_ai\summary\task\memory_validation_op.py:70 - async def _llm_validate_task_memory(self, task_memory: BaseMemory) -> Dict[str, Any]:
reme_ai\summary\task\memory_validation_op.py:74 - prompt_name="task_memory_validation_prompt",
reme_ai\summary\task\memory_validation_op.py:75 - condition=task_memory.when_to_use,
reme_ai\summary\task\memory_validation_op.py:76 - task_memory_content=task_memory.content,

## reme_ai\summary\task\memory_validation_prompt.yaml
reme_ai\summary\task\memory_validation_prompt.yaml:1 - task_memory_validation_prompt: |
reme_ai\summary\task\memory_validation_prompt.yaml:7 - ● ACTIONABILITY: Is the task memory specific enough to guide future actions?
reme_ai\summary\task\memory_validation_prompt.yaml:8 - ● ACCURACY: Does the task memory correctly reflect the patterns observed?
reme_ai\summary\task\memory_validation_prompt.yaml:9 - ● RELEVANCE: Is the task memory applicable to similar future scenarios?
reme_ai\summary\task\memory_validation_prompt.yaml:10 - ● CLARITY: Is the task memory clearly articulated and understandable?
reme_ai\summary\task\memory_validation_prompt.yaml:11 - ● UNIQUENESS: Does the task memory provide novel insights or common knowledge?
reme_ai\summary\task\memory_validation_prompt.yaml:15 - Task Memory Content: {task_memory_content}

## reme_ai\summary\task\simple_comparative_summary_op.py
reme_ai\summary\task\simple_comparative_summary_op.py:17 - from reme_ai.schema.memory import BaseMemory, TaskMemory
reme_ai\summary\task\simple_comparative_summary_op.py:31 - async def compare_summary_trajectory(self, trajectory_a: Trajectory, trajectory_b: Trajectory) -> List[BaseMemory]:
reme_ai\summary\task\simple_comparative_summary_op.py:39 - List of extracted task memories from the comparison
reme_ai\summary\task\simple_comparative_summary_op.py:50 - task_memory_list = []
reme_ai\summary\task\simple_comparative_summary_op.py:58 - task_memory_content = tm_dict.get("experience", "").strip()
reme_ai\summary\task\simple_comparative_summary_op.py:59 - if when_to_use and task_memory_content:
reme_ai\summary\task\simple_comparative_summary_op.py:64 - content=task_memory_content,
reme_ai\summary\task\simple_comparative_summary_op.py:84 - trajectories for each task, and extracts task memories from the comparison.
reme_ai\summary\task\simple_comparative_summary_op.py:95 - memory_list = []
reme_ai\summary\task\simple_comparative_summary_op.py:108 - self.context.response.answer = json.dumps([x.model_dump() for x in memory_list])
reme_ai\summary\task\simple_comparative_summary_op.py:109 - self.context.response.metadata["memory_list"] = memory_list
reme_ai\summary\task\simple_comparative_summary_op.py:110 - for tm in memory_list:
reme_ai\summary\task\simple_comparative_summary_op.py:111 - logger.info(f"add task memory when_to_use={tm.when_to_use}\ncontent={tm.content}")

## reme_ai\summary\task\simple_summary_op.py
reme_ai\summary\task\simple_summary_op.py:3 - This module provides a simplified operation to extract task memories from
reme_ai\summary\task\simple_summary_op.py:17 - from reme_ai.schema.memory import BaseMemory, TaskMemory
reme_ai\summary\task\simple_summary_op.py:23 - """Extract task memories from individual trajectories.
reme_ai\summary\task\simple_summary_op.py:31 - async def summary_trajectory(self, trajectory: Trajectory) -> List[BaseMemory]:
reme_ai\summary\task\simple_summary_op.py:32 - """Extract task memories from a single trajectory.
reme_ai\summary\task\simple_summary_op.py:35 - trajectory: The trajectory to extract memories from
reme_ai\summary\task\simple_summary_op.py:54 - memory_list = []
reme_ai\summary\task\simple_summary_op.py:64 - memory = exp_dict.get("memory", "").strip()
reme_ai\summary\task\simple_summary_op.py:65 - if when_to_use and memory:
reme_ai\summary\task\simple_summary_op.py:70 - content=memory,
reme_ai\summary\task\simple_summary_op.py:95 - memory_list: List[BaseMemory] = []
reme_ai\summary\task\simple_summary_op.py:101 - self.context.response.answer = json.dumps([x.model_dump() for x in memory_list])
reme_ai\summary\task\simple_summary_op.py:102 - self.context.response.metadata["memory_list"] = memory_list
reme_ai\summary\task\simple_summary_op.py:103 - for memory in memory_list:
reme_ai\summary\task\simple_summary_op.py:104 - logger.info(f"add memory: when_to_use={memory.when_to_use}\ncontent={memory.content}")

## reme_ai\summary\task\simple_summary_prompt.yaml
reme_ai\summary\task\simple_summary_prompt.yaml:12 - The type of memory can be plain text or a piece of code that solves a specific problem.
reme_ai\summary\task\simple_summary_prompt.yaml:24 - "memory": "..."
reme_ai\summary\task\simple_summary_prompt.yaml:28 - "memory": "..."

## reme_ai\summary\task\success_extraction_op.py
reme_ai\summary\task\success_extraction_op.py:3 - This module provides operations to extract task memories from successful
reme_ai\summary\task\success_extraction_op.py:16 - from reme_ai.schema.memory import BaseMemory, TaskMemory
reme_ai\summary\task\success_extraction_op.py:22 - """Extract task memories from successful trajectories.
reme_ai\summary\task\success_extraction_op.py:32 - """Extract task memories from successful trajectories"""
reme_ai\summary\task\success_extraction_op.py:39 - logger.info(f"Extracting task memories from {len(success_trajectories)} successful trajectories")
reme_ai\summary\task\success_extraction_op.py:48 - task_memories = await self._extract_success_task_memory_from_steps(segment, trajectory)
reme_ai\summary\task\success_extraction_op.py:52 - task_memories = await self._extract_success_task_memory_from_steps(trajectory.messages, trajectory)
reme_ai\summary\task\success_extraction_op.py:60 - async def _extract_success_task_memory_from_steps(
reme_ai\summary\task\success_extraction_op.py:64 - ) -> List[BaseMemory]:
reme_ai\summary\task\success_extraction_op.py:65 - """Extract task memory from successful step sequences"""
reme_ai\summary\task\success_extraction_op.py:70 - prompt_name="success_step_task_memory_prompt",
reme_ai\summary\task\success_extraction_op.py:77 - def parse_task_memories(message: Message) -> List[BaseMemory]:
reme_ai\summary\task\success_extraction_op.py:82 - task_memory = TaskMemory(

## reme_ai\summary\task\success_extraction_prompt.yaml
reme_ai\summary\task\success_extraction_prompt.yaml:1 - success_step_task_memory_prompt: |

## reme_ai\summary\task\trajectory_segmentation_op.py
reme_ai\summary\task\trajectory_segmentation_op.py:25 - allowing for more granular analysis and memory extraction from specific

## reme_ai\summary\task\__init__.py
reme_ai\summary\task\__init__.py:4 - task memories from trajectories, including success/failure extraction, comparative
reme_ai\summary\task\__init__.py:10 - from .memory_deduplication_op import MemoryDeduplicationOp
reme_ai\summary\task\__init__.py:11 - from .memory_validation_op import MemoryValidationOp

## reme_ai\summary\tool\parse_tool_call_result_op.py
reme_ai\summary\tool\parse_tool_call_result_op.py:19 - from reme_ai.schema.memory import ToolMemory, ToolCallResult, vector_node_to_memory
reme_ai\summary\tool\parse_tool_call_result_op.py:112 - def _format_tool_memories_summary(memory_list: List[ToolMemory], deleted_memory_ids: List[str]) -> str:
reme_ai\summary\tool\parse_tool_call_result_op.py:117 - total_tools = len(memory_list)
reme_ai\summary\tool\parse_tool_call_result_op.py:118 - updated_tools = len(deleted_memory_ids)
reme_ai\summary\tool\parse_tool_call_result_op.py:124 - for idx, memory in enumerate(memory_list, 1):
reme_ai\summary\tool\parse_tool_call_result_op.py:125 - is_updated = memory.memory_id in deleted_memory_ids
reme_ai\summary\tool\parse_tool_call_result_op.py:129 - lines.append(f"  Total calls: {len(memory.tool_call_results)}")
reme_ai\summary\tool\parse_tool_call_result_op.py:132 - if memory.tool_call_results:
reme_ai\summary\tool\parse_tool_call_result_op.py:133 - recent_results = memory.tool_call_results[-3:]
reme_ai\summary\tool\parse_tool_call_result_op.py:140 - if idx < len(memory_list):
reme_ai\summary\tool\parse_tool_call_result_op.py:239 - async def _process_tool_memory(
reme_ai\summary\tool\parse_tool_call_result_op.py:244 - ) -> tuple[ToolMemory, bool, dict]:
reme_ai\summary\tool\parse_tool_call_result_op.py:261 - tool_memory: ToolMemory | None = None
reme_ai\summary\tool\parse_tool_call_result_op.py:266 - memory: ToolMemory = vector_node_to_memory(top_node)
reme_ai\summary\tool\parse_tool_call_result_op.py:268 - if isinstance(memory, ToolMemory) and memory.when_to_use == tool_name:
reme_ai\summary\tool\parse_tool_call_result_op.py:269 - tool_memory = memory
reme_ai\summary\tool\parse_tool_call_result_op.py:272 - if tool_memory is None:
reme_ai\summary\tool\parse_tool_call_result_op.py:273 - tool_memory = ToolMemory(workspace_id=workspace_id, when_to_use=tool_name)
reme_ai\summary\tool\parse_tool_call_result_op.py:275 - existing_hashes = {result.call_hash for result in tool_memory.tool_call_results if result.call_hash}
reme_ai\summary\tool\parse_tool_call_result_op.py:292 - if len(tool_memory.tool_call_results) > self.max_history_tool_call_cnt:
... and 11 more

## reme_ai\summary\tool\summary_tool_memory_op.py
reme_ai\summary\tool\summary_tool_memory_op.py:18 - from reme_ai.schema.memory import ToolMemory, vector_node_to_memory
reme_ai\summary\tool\summary_tool_memory_op.py:22 - class SummaryToolMemoryOp(BaseAsyncOp):
reme_ai\summary\tool\summary_tool_memory_op.py:23 - """Summarize tool memory usage patterns from recent tool call results.
reme_ai\summary\tool\summary_tool_memory_op.py:50 - def _format_summary_result(summarized_memories: List[ToolMemory], skipped_memories: List[ToolMemory]) -> str:
reme_ai\summary\tool\summary_tool_memory_op.py:63 - for idx, memory in enumerate(summarized_memories, 1):
reme_ai\summary\tool\summary_tool_memory_op.py:64 - lines.append(f"Tool: {memory.when_to_use}")
reme_ai\summary\tool\summary_tool_memory_op.py:103 - async def _summarize_single_tool(self, tool_memory: ToolMemory, index: int) -> ToolMemory:
reme_ai\summary\tool\summary_tool_memory_op.py:107 - tool_memory: The tool memory object to summarize
reme_ai\summary\tool\summary_tool_memory_op.py:115 - recent_calls = tool_memory.tool_call_results[-self.recent_call_count :]
reme_ai\summary\tool\summary_tool_memory_op.py:118 - logger.warning(f"No tool call results found for tool: {tool_memory.when_to_use}")
reme_ai\summary\tool\summary_tool_memory_op.py:124 - f"Summarizing tool {tool_memory.when_to_use}: "
reme_ai\summary\tool\summary_tool_memory_op.py:129 - statistics = tool_memory.statistic(recent_frequency=self.recent_call_count)
reme_ai\summary\tool\summary_tool_memory_op.py:138 - tool_name=tool_memory.when_to_use,
reme_ai\summary\tool\summary_tool_memory_op.py:142 - def parse_summary(message: Message) -> ToolMemory:
reme_ai\summary\tool\summary_tool_memory_op.py:156 - tool_memory.content = f"{llm_summary}\n\n## Statistics\n{statistics_md}"
reme_ai\summary\tool\summary_tool_memory_op.py:166 - f"Summarized tool {index}: tool_name={tool_memory.when_to_use}, "
reme_ai\summary\tool\summary_tool_memory_op.py:167 - f"content_length={len(tool_memory.content)}, "
reme_ai\summary\tool\summary_tool_memory_op.py:222 - async def _search_tool_memories(
reme_ai\summary\tool\summary_tool_memory_op.py:226 - ) -> List[ToolMemory]:
reme_ai\summary\tool\summary_tool_memory_op.py:236 - matched_tool_memories: List[ToolMemory] = []
... and 40 more

## reme_ai\summary\tool\__init__.py
reme_ai\summary\tool\__init__.py:8 - from .summary_tool_memory_op import SummaryToolMemoryOp

## reme_ai\summary\working\message_compact_op.py
reme_ai\summary\working\message_compact_op.py:26 - working-memory style summarization: the agent sees a short preview while the

## reme_ai\summary\working\message_offload_op.py
reme_ai\summary\working\message_offload_op.py:67 - logger.info("Working-memory offload mode: COMPACT (only compaction)")
reme_ai\summary\working\message_offload_op.py:72 - logger.info("Working-memory offload mode: COMPRESS (only compression)")
reme_ai\summary\working\message_offload_op.py:77 - logger.info("Working-memory offload mode: AUTO (compaction then optional compression)")
reme_ai\summary\working\message_offload_op.py:95 - f"Working-memory offload: compact ratio {compact_ratio:.2f} > "

## reme_ai\utils\__init__.py
reme_ai\utils\__init__.py:11 - tool_memory_utils: Utility functions for creating mock tool call results
reme_ai\utils\__init__.py:21 - from .tool_memory_utils import create_mock_tool_call_results

## reme_ai\vector_store\delete_memory_op.py
reme_ai\vector_store\delete_memory_op.py:11 - class DeleteMemoryOp(BaseAsyncOp):
reme_ai\vector_store\delete_memory_op.py:33 - - Memory frequency must be >= freq_threshold
reme_ai\vector_store\delete_memory_op.py:42 - deleted_memory_ids: List of memory IDs marked for deletion.
reme_ai\vector_store\delete_memory_op.py:49 - deleted_memory_ids = []
reme_ai\vector_store\delete_memory_op.py:57 - self.context.deleted_memory_ids = deleted_memory_ids

## reme_ai\vector_store\recall_vector_store_op.py
reme_ai\vector_store\recall_vector_store_op.py:1 - """Operation for recalling memories from the vector store based on a query."""
reme_ai\vector_store\recall_vector_store_op.py:10 - from reme_ai.schema.memory import BaseMemory, vector_node_to_memory
reme_ai\vector_store\recall_vector_store_op.py:15 - """Operation that retrieves relevant memories from the vector store.
reme_ai\vector_store\recall_vector_store_op.py:41 - response.metadata["memory_list"]: List of retrieved BaseMemory objects.
reme_ai\vector_store\recall_vector_store_op.py:55 - memory_list: List[BaseMemory] = []
reme_ai\vector_store\recall_vector_store_op.py:56 - memory_content_list: List[str] = []
reme_ai\vector_store\recall_vector_store_op.py:58 - memory: BaseMemory = vector_node_to_memory(node)
reme_ai\vector_store\recall_vector_store_op.py:59 - if memory.content not in memory_content_list:
reme_ai\vector_store\recall_vector_store_op.py:62 - logger.info(f"retrieve memory.size={len(memory_list)}")
reme_ai\vector_store\recall_vector_store_op.py:66 - memory_list = [mem for mem in memory_list if mem.score >= threshold_score or mem.score is None]
reme_ai\vector_store\recall_vector_store_op.py:67 - logger.info(f"after filter by threshold_score size={len(memory_list)}")
reme_ai\vector_store\recall_vector_store_op.py:69 - self.context.response.metadata["memory_list"] = memory_list

## reme_ai\vector_store\update_memory_freq_op.py
reme_ai\vector_store\update_memory_freq_op.py:9 - from reme_ai.schema.memory import BaseMemory, dict_to_memory
reme_ai\vector_store\update_memory_freq_op.py:13 - class UpdateMemoryFreqOp(BaseAsyncOp):
reme_ai\vector_store\update_memory_freq_op.py:29 - Processes memory dictionaries from context, converts them to BaseMemory
reme_ai\vector_store\update_memory_freq_op.py:35 - memory_dicts: List of memory dictionaries to update.
reme_ai\vector_store\update_memory_freq_op.py:38 - deleted_memory_ids: List of memory IDs to delete (for replacement).
reme_ai\vector_store\update_memory_freq_op.py:39 - memory_list: List of updated BaseMemory objects with incremented frequency.
reme_ai\vector_store\update_memory_freq_op.py:41 - memory_dicts: List[dict] = self.context.memory_dicts
reme_ai\vector_store\update_memory_freq_op.py:43 - if not memory_dicts:
reme_ai\vector_store\update_memory_freq_op.py:47 - memory_list: List[BaseMemory] = [dict_to_memory(memory_dict) for memory_dict in memory_dicts]
reme_ai\vector_store\update_memory_freq_op.py:48 - new_memory_list = []
reme_ai\vector_store\update_memory_freq_op.py:49 - deleted_memory_ids = []
reme_ai\vector_store\update_memory_freq_op.py:50 - for memory in memory_list:
reme_ai\vector_store\update_memory_freq_op.py:52 - metadata = memory.metadata
reme_ai\vector_store\update_memory_freq_op.py:59 - self.context.deleted_memory_ids = deleted_memory_ids
reme_ai\vector_store\update_memory_freq_op.py:60 - self.context.memory_list = new_memory_list

## reme_ai\vector_store\update_memory_utility_op.py
reme_ai\vector_store\update_memory_utility_op.py:9 - from reme_ai.schema.memory import BaseMemory
reme_ai\vector_store\update_memory_utility_op.py:13 - class UpdateMemoryUtilityOp(BaseAsyncOp):
reme_ai\vector_store\update_memory_utility_op.py:29 - Processes memories from context and increments their utility scores.
reme_ai\vector_store\update_memory_utility_op.py:35 - memory_dicts: List of memory dictionaries to update.
reme_ai\vector_store\update_memory_utility_op.py:37 - memory_list: List of BaseMemory objects to update.
reme_ai\vector_store\update_memory_utility_op.py:38 - deleted_memory_ids: List of memory IDs marked for deletion.
reme_ai\vector_store\update_memory_utility_op.py:41 - response.metadata["memory_list"]: List of updated BaseMemory objects.
reme_ai\vector_store\update_memory_utility_op.py:42 - response.metadata["deleted_memory_ids"]: List of memory IDs to delete.
reme_ai\vector_store\update_memory_utility_op.py:44 - memory_dicts: List[dict] = self.context.memory_dicts
reme_ai\vector_store\update_memory_utility_op.py:47 - if not memory_dicts:
reme_ai\vector_store\update_memory_utility_op.py:52 - self.context.response.metadata["memory_list"] = self.context.memory_list
reme_ai\vector_store\update_memory_utility_op.py:53 - self.context.response.metadata["deleted_memory_ids"] = self.context.deleted_memory_ids
reme_ai\vector_store\update_memory_utility_op.py:57 - memory_list: List[BaseMemory] = self.context.memory_list
reme_ai\vector_store\update_memory_utility_op.py:58 - new_memory_list = []
reme_ai\vector_store\update_memory_utility_op.py:59 - for memory in memory_list:
reme_ai\vector_store\update_memory_utility_op.py:61 - metadata = memory.metadata
reme_ai\vector_store\update_memory_utility_op.py:67 - self.context.response.metadata["memory_list"] = new_memory_list
reme_ai\vector_store\update_memory_utility_op.py:68 - self.context.response.metadata["deleted_memory_ids"] = self.context.deleted_memory_ids

## reme_ai\vector_store\update_vector_store_op.py
reme_ai\vector_store\update_vector_store_op.py:11 - from reme_ai.schema.memory import BaseMemory
reme_ai\vector_store\update_vector_store_op.py:28 - 2. Inserts new or updated memories from memory_list
reme_ai\vector_store\update_vector_store_op.py:37 - deleted_memory_ids: List of memory IDs to delete from vector store.
reme_ai\vector_store\update_vector_store_op.py:38 - memory_list: List of BaseMemory objects to insert into vector store.
reme_ai\vector_store\update_vector_store_op.py:46 - deleted_memory_ids: List[str] = self.context.response.metadata.get("deleted_memory_ids", [])
reme_ai\vector_store\update_vector_store_op.py:47 - if deleted_memory_ids:
reme_ai\vector_store\update_vector_store_op.py:48 - await self.vector_store.async_delete(node_ids=deleted_memory_ids, workspace_id=workspace_id)
reme_ai\vector_store\update_vector_store_op.py:49 - logger.info(f"delete memory_ids={json.dumps(deleted_memory_ids, indent=2)}")
reme_ai\vector_store\update_vector_store_op.py:51 - insert_memory_list: List[BaseMemory] = self.context.response.metadata.get("memory_list", [])
reme_ai\vector_store\update_vector_store_op.py:52 - if insert_memory_list:
reme_ai\vector_store\update_vector_store_op.py:53 - insert_nodes: List[VectorNode] = [x.to_vector_node() for x in insert_memory_list]
reme_ai\vector_store\update_vector_store_op.py:59 - "deleted_count": len(deleted_memory_ids) if deleted_memory_ids else 0,
reme_ai\vector_store\update_vector_store_op.py:60 - "inserted_count": len(insert_memory_list) if insert_memory_list else 0,

## reme_ai\vector_store\vector_store_action_op.py
reme_ai\vector_store\vector_store_action_op.py:7 - from reme_ai.schema.memory import vector_node_to_memory, dict_to_memory, BaseMemory
reme_ai\vector_store\vector_store_action_op.py:15 - - copy: Copy memories from one workspace to another
reme_ai\vector_store\vector_store_action_op.py:20 - - load: Import memories from a file into a workspace
reme_ai\vector_store\vector_store_action_op.py:36 - - delete_ids: memory_ids (list of memory IDs to delete)
reme_ai\vector_store\vector_store_action_op.py:62 - memory_ids: list = self.context.memory_ids
reme_ai\vector_store\vector_store_action_op.py:63 - result = await self.vector_store.async_delete(workspace_id=workspace_id, node_ids=memory_ids)
reme_ai\vector_store\vector_store_action_op.py:68 - def node_to_memory(node: VectorNode) -> dict:
reme_ai\vector_store\vector_store_action_op.py:75 - callback_fn=node_to_memory,
reme_ai\vector_store\vector_store_action_op.py:80 - def node_to_memory(node: VectorNode) -> dict:
reme_ai\vector_store\vector_store_action_op.py:84 - result = [node_to_memory(node) for node in result]
reme_ai\vector_store\vector_store_action_op.py:89 - def memory_dict_to_node(memory_dict: dict) -> VectorNode:
reme_ai\vector_store\vector_store_action_op.py:90 - memory: BaseMemory = dict_to_memory(memory_dict=memory_dict)
reme_ai\vector_store\vector_store_action_op.py:96 - callback_fn=memory_dict_to_node,

## reme_ai\vector_store\__init__.py
reme_ai\vector_store\__init__.py:11 - from .delete_memory_op import DeleteMemoryOp
reme_ai\vector_store\__init__.py:13 - from .update_memory_freq_op import UpdateMemoryFreqOp
reme_ai\vector_store\__init__.py:14 - from .update_memory_utility_op import UpdateMemoryUtilityOp

## test\cookbook\appworld\appworld_react_agent.py
test\cookbook\appworld\appworld_react_agent.py:41 - use_memory: bool = False,
test\cookbook\appworld\appworld_react_agent.py:42 - use_memory_addition: bool = False,
test\cookbook\appworld\appworld_react_agent.py:43 - use_memory_deletion: bool = False,
test\cookbook\appworld\appworld_react_agent.py:47 - memory_base_url: str = "http://0.0.0.0:8002/",
test\cookbook\appworld\appworld_react_agent.py:48 - memory_workspace_id: str = "appworld_v1",
test\cookbook\appworld\appworld_react_agent.py:59 - self.use_memory: bool = use_memory
test\cookbook\appworld\appworld_react_agent.py:60 - self.use_memory_addition: bool = use_memory_addition if use_memory else False
test\cookbook\appworld\appworld_react_agent.py:61 - self.use_memory_deletion: bool = use_memory_deletion if use_memory else False
test\cookbook\appworld\appworld_react_agent.py:65 - self.memory_base_url: str = memory_base_url
test\cookbook\appworld\appworld_react_agent.py:66 - self.memory_workspace_id: str = memory_workspace_id
test\cookbook\appworld\appworld_react_agent.py:71 - self.retrieved_memory_list: List[List[List[Any]]] = [[] for _ in range(num_trials)]
test\cookbook\appworld\appworld_react_agent.py:97 - def prompt_messages(self, run_id, task_index, previous_memories: None, world: AppWorld):
test\cookbook\appworld\appworld_react_agent.py:105 - if self.use_memory:
test\cookbook\appworld\appworld_react_agent.py:107 - response = self.get_memory(world.task.instruction)
test\cookbook\appworld\appworld_react_agent.py:108 - if response and "memory_list" in response["metadata"]:
test\cookbook\appworld\appworld_react_agent.py:109 - self.retrieved_memory_list[run_id][task_index] = response["metadata"]["memory_list"]
test\cookbook\appworld\appworld_react_agent.py:110 - task_memory = response["answer"]
test\cookbook\appworld\appworld_react_agent.py:111 - logger.info(f"loaded task_memory: {task_memory}")
test\cookbook\appworld\appworld_react_agent.py:116 - + re.sub(r"(?i)\bMemory\s*(\d+)\s*[:]", r"Experience \1:", task_memory)
test\cookbook\appworld\appworld_react_agent.py:120 - for i, memory in enumerate(previous_memories, 1):
... and 27 more

## test\cookbook\appworld\run_appworld.py
test\cookbook\appworld\run_appworld.py:47 - def dump_memory(workspace_id: str, path: str = "./", api_url: str = "http://0.0.0.0:8002/"):
test\cookbook\appworld\run_appworld.py:63 - def load_memory(workspace_id: str, path: str = "docs/library", api_url: str = "http://0.0.0.0:8002/"):
test\cookbook\appworld\run_appworld.py:64 - """Load memories from disk into the vector store"""
test\cookbook\appworld\run_appworld.py:76 - print(f"Memory loaded from {path}")
test\cookbook\appworld\run_appworld.py:85 - use_memory: bool = False,
test\cookbook\appworld\run_appworld.py:86 - use_memory_addition: bool = False,
test\cookbook\appworld\run_appworld.py:87 - use_memory_deletion: bool = False,
test\cookbook\appworld\run_appworld.py:133 - use_memory=use_memory,
test\cookbook\appworld\run_appworld.py:134 - use_memory_addition=use_memory_addition,
test\cookbook\appworld\run_appworld.py:135 - use_memory_deletion=use_memory_deletion,
test\cookbook\appworld\run_appworld.py:139 - memory_workspace_id=workspace_id,
test\cookbook\appworld\run_appworld.py:140 - memory_base_url=api_url,
test\cookbook\appworld\run_appworld.py:180 - use_memory=use_memory,
test\cookbook\appworld\run_appworld.py:181 - use_memory_addition=use_memory_addition,
test\cookbook\appworld\run_appworld.py:182 - use_memory_deletion=use_memory_deletion,
test\cookbook\appworld\run_appworld.py:204 - use_memory = True
test\cookbook\appworld\run_appworld.py:205 - use_memory_addition = True
test\cookbook\appworld\run_appworld.py:206 - use_memory_deletion = True
test\cookbook\appworld\run_appworld.py:217 - load_memory(workspace_id=workspace_id, api_url=api_url)
test\cookbook\appworld\run_appworld.py:223 - experiment_suffix=f"with-memory",
... and 3 more

## test\cookbook\bfcl\bfcl_agent.py
test\cookbook\bfcl\bfcl_agent.py:69 - use_memory: bool = False,
test\cookbook\bfcl\bfcl_agent.py:70 - use_memory_addition: bool = False,
test\cookbook\bfcl\bfcl_agent.py:71 - use_memory_deletion: bool = False,
test\cookbook\bfcl\bfcl_agent.py:75 - memory_base_url: str = "http://0.0.0.0:8002/",
test\cookbook\bfcl\bfcl_agent.py:76 - memory_workspace_id: str = "bfcl_v3",
test\cookbook\bfcl\bfcl_agent.py:91 - self.use_memory: bool = use_memory
test\cookbook\bfcl\bfcl_agent.py:92 - self.use_memory_addition: bool = use_memory_addition if use_memory else False
test\cookbook\bfcl\bfcl_agent.py:93 - self.use_memory_deletion: bool = use_memory_deletion if use_memory else False
test\cookbook\bfcl\bfcl_agent.py:97 - self.memory_base_url: str = memory_base_url
test\cookbook\bfcl\bfcl_agent.py:98 - self.memory_workspace_id: str = memory_workspace_id
test\cookbook\bfcl\bfcl_agent.py:101 - self.retrieved_memory_list: List[List[List[Any]]] = [[] for _ in range(num_trials)]
test\cookbook\bfcl\bfcl_agent.py:121 - def update_task_history_with_memory(self, run_id, task_index, previous_memories: None):
test\cookbook\bfcl\bfcl_agent.py:124 - response = self.get_memory(query)
test\cookbook\bfcl\bfcl_agent.py:125 - if response and "memory_list" in response["metadata"]:
test\cookbook\bfcl\bfcl_agent.py:126 - self.retrieved_memory_list[run_id][task_index] = response["metadata"]["memory_list"]
test\cookbook\bfcl\bfcl_agent.py:127 - task_memory = response["answer"]
test\cookbook\bfcl\bfcl_agent.py:128 - logger.info(f"loaded task_memory: {task_memory}")
test\cookbook\bfcl\bfcl_agent.py:129 - self.history[run_id][task_index][0] = self.get_query_with_memory(query, task_memory)
test\cookbook\bfcl\bfcl_agent.py:132 - for i, memory in enumerate(previous_memories, 1):
test\cookbook\bfcl\bfcl_agent.py:133 - condition = memory["when_to_use"]
... and 30 more

## test\cookbook\bfcl\init_exp_pool.py
test\cookbook\bfcl\init_exp_pool.py:101 - response = requests.post(f"{service_url}/summary_task_memory", json=request_data)
test\cookbook\bfcl\init_exp_pool.py:119 - service_url: memory summarizer service URL
test\cookbook\bfcl\init_exp_pool.py:142 - f'✅ Group {group_index} processed: {result["metadata"].get("memory_list", 0) if "memory_list" in result["metadata"] else "error"}',
test\cookbook\bfcl\init_exp_pool.py:160 - parser.add_argument("--workspace_id", type=str, required=True, help="Workspace ID for the task memory pool")
test\cookbook\bfcl\init_exp_pool.py:189 - total_memories = sum(len(r["metadata"].get("memory_list", [])) for r in results if "memory_list" in r["metadata"])

## test\cookbook\bfcl\init_task_memory_pool.py
test\cookbook\bfcl\init_task_memory_pool.py:101 - response = requests.post(f"{service_url}/summary_task_memory", json=request_data)
test\cookbook\bfcl\init_task_memory_pool.py:119 - service_url: memory summarizer service URL
test\cookbook\bfcl\init_task_memory_pool.py:142 - f'✅ Group {group_index} processed: {result["metadata"].get("memory_list", 0) if "memory_list" in result["metadata"] else "error"}',
test\cookbook\bfcl\init_task_memory_pool.py:160 - parser.add_argument("--workspace_id", type=str, required=True, help="Workspace ID for the task memory pool")
test\cookbook\bfcl\init_task_memory_pool.py:189 - total_memories = sum(len(r["metadata"].get("memory_list", [])) for r in results if "memory_list" in r["metadata"])

## test\cookbook\bfcl\local_file_to_library.py
test\cookbook\bfcl\local_file_to_library.py:10 - new_exp["memory_id"] = exp["unique_id"]
test\cookbook\bfcl\local_file_to_library.py:11 - new_exp["memory_type"] = exp["metadata"]["memory_type"]

## test\cookbook\bfcl\run_bfcl.py
test\cookbook\bfcl\run_bfcl.py:26 - use_memory: bool = False,
test\cookbook\bfcl\run_bfcl.py:27 - use_memory_addition: bool = True,
test\cookbook\bfcl\run_bfcl.py:28 - use_memory_deletion: bool = False,
test\cookbook\bfcl\run_bfcl.py:33 - memory_base_url: str = "http://0.0.0.0:8002/",
test\cookbook\bfcl\run_bfcl.py:34 - memory_workspace_id: str = "bfcl_v3",
test\cookbook\bfcl\run_bfcl.py:62 - use_memory=use_memory,
test\cookbook\bfcl\run_bfcl.py:63 - use_memory_addition=use_memory_addition,
test\cookbook\bfcl\run_bfcl.py:64 - use_memory_deletion=use_memory_deletion,
test\cookbook\bfcl\run_bfcl.py:69 - memory_base_url=memory_base_url,
test\cookbook\bfcl\run_bfcl.py:70 - memory_workspace_id=memory_workspace_id,
test\cookbook\bfcl\run_bfcl.py:95 - use_memory = False
test\cookbook\bfcl\run_bfcl.py:96 - use_memory_addition = False
test\cookbook\bfcl\run_bfcl.py:97 - use_memory_deletion = False
test\cookbook\bfcl\run_bfcl.py:98 - memory_base_url = "http://0.0.0.0:8002/"
test\cookbook\bfcl\run_bfcl.py:99 - memory_workspace_id = "bfcl_v3"
test\cookbook\bfcl\run_bfcl.py:114 - use_memory=use_memory,
test\cookbook\bfcl\run_bfcl.py:115 - use_memory_addition=use_memory_addition,
test\cookbook\bfcl\run_bfcl.py:116 - use_memory_deletion=use_memory_deletion,
test\cookbook\bfcl\run_bfcl.py:120 - memory_base_url=memory_base_url,
test\cookbook\bfcl\run_bfcl.py:121 - memory_workspace_id=memory_workspace_id,

## test\cookbook\frozenlake\frozenlake_react_agent.py
test\cookbook\frozenlake\frozenlake_react_agent.py:45 - use_task_memory: bool = False,
test\cookbook\frozenlake\frozenlake_react_agent.py:46 - make_task_memory: bool = False,
test\cookbook\frozenlake\frozenlake_react_agent.py:56 - self.use_task_memory = use_task_memory
test\cookbook\frozenlake\frozenlake_react_agent.py:57 - self.make_task_memory = make_task_memory
test\cookbook\frozenlake\frozenlake_react_agent.py:124 - def get_task_memory(self, map_desc: str, is_slippery: bool) -> str:
test\cookbook\frozenlake\frozenlake_react_agent.py:125 - """Retrieve relevant task memory from task memory service"""
test\cookbook\frozenlake\frozenlake_react_agent.py:126 - if not self.use_task_memory:
test\cookbook\frozenlake\frozenlake_react_agent.py:135 - url=base_url + "retrieve_task_memory",
test\cookbook\frozenlake\frozenlake_react_agent.py:147 - logger.warning(f"Task memory retrieval failed: {response.status_code}")
test\cookbook\frozenlake\frozenlake_react_agent.py:151 - logger.warning(f"Failed to get task memory: {e}")
test\cookbook\frozenlake\frozenlake_react_agent.py:200 - task_memory = self.get_task_memory(map_str, is_slippery)
test\cookbook\frozenlake\frozenlake_react_agent.py:204 - if task_memory:
test\cookbook\frozenlake\frozenlake_react_agent.py:205 - memory_content = f"Here are some relevant tips from previous successful games:\n\n{task_memory}\n\nUse these tips to help you succeed."
test\cookbook\frozenlake\frozenlake_react_agent.py:206 - messages.append({"role": "user", "content": memory_content})
test\cookbook\frozenlake\frozenlake_react_agent.py:283 - "use_task_memory": self.use_task_memory,
test\cookbook\frozenlake\frozenlake_react_agent.py:289 - def save_task_memory(self, results: List[GameResult], messages_list: List[List[Dict]]):
test\cookbook\frozenlake\frozenlake_react_agent.py:291 - if not self.make_task_memory:
test\cookbook\frozenlake\frozenlake_react_agent.py:316 - url=base_url + "summary_task_memory",
test\cookbook\frozenlake\frozenlake_react_agent.py:327 - logger.warning(f"Failed to save task memory: {response.status_code}")
test\cookbook\frozenlake\frozenlake_react_agent.py:330 - logger.error(f"Error saving task memory: {e}")
... and 1 more

## test\cookbook\frozenlake\run_frozenlake.py
test\cookbook\frozenlake\run_frozenlake.py:49 - for use_memory in [True, False]:
test\cookbook\frozenlake\run_frozenlake.py:55 - "use_task_memory": use_memory,
test\cookbook\frozenlake\run_frozenlake.py:57 - "task_id": f"test_map{map_id}_slip{is_slippery}_mem{use_memory}",
test\cookbook\frozenlake\run_frozenlake.py:72 - """Phase 1: Generate task memory from random maps"""
test\cookbook\frozenlake\run_frozenlake.py:100 - use_task_memory=False,  # No task memory in training phase
test\cookbook\frozenlake\run_frozenlake.py:101 - make_task_memory=True,  # Generate task memory
test\cookbook\frozenlake\run_frozenlake.py:124 - use_task_memory=False,
test\cookbook\frozenlake\run_frozenlake.py:125 - make_task_memory=True,
test\cookbook\frozenlake\run_frozenlake.py:146 - """Phase 2: Test on fixed maps with/without task memory"""
test\cookbook\frozenlake\run_frozenlake.py:156 - memory_configs = [c for c in test_configs if c.get("use_task_memory", False)]
test\cookbook\frozenlake\run_frozenlake.py:157 - no_memory_configs = [c for c in test_configs if not c.get("use_task_memory", False)]
test\cookbook\frozenlake\run_frozenlake.py:159 - logger.info(f"📝 Configs without task memory: {len(no_memory_configs)}")
test\cookbook\frozenlake\run_frozenlake.py:160 - logger.info(f"📝 Configs with task memory: {len(memory_configs)}")
test\cookbook\frozenlake\run_frozenlake.py:172 - results_no_memory = run_test_configs(
test\cookbook\frozenlake\run_frozenlake.py:173 - configs=no_memory_configs,
test\cookbook\frozenlake\run_frozenlake.py:177 - use_task_memory=False,
test\cookbook\frozenlake\run_frozenlake.py:185 - results_with_memory = run_test_configs(
test\cookbook\frozenlake\run_frozenlake.py:186 - configs=memory_configs,
test\cookbook\frozenlake\run_frozenlake.py:190 - use_task_memory=True,
test\cookbook\frozenlake\run_frozenlake.py:203 - use_task_memory: bool,
... and 4 more

## test\cookbook\simple_demo\import_usage_demo.py
test\cookbook\simple_demo\import_usage_demo.py:11 - async def summary_task_memory(app: ReMeApp):
test\cookbook\simple_demo\import_usage_demo.py:15 - curl -X POST http://localhost:8002/summary_task_memory \
test\cookbook\simple_demo\import_usage_demo.py:25 - name="summary_task_memory",
test\cookbook\simple_demo\import_usage_demo.py:36 - print("Summary Task Memory Result:")
test\cookbook\simple_demo\import_usage_demo.py:40 - async def retrieve_task_memory(app: ReMeApp):
test\cookbook\simple_demo\import_usage_demo.py:44 - curl -X POST http://localhost:8002/retrieve_task_memory \
test\cookbook\simple_demo\import_usage_demo.py:53 - name="retrieve_task_memory",
test\cookbook\simple_demo\import_usage_demo.py:58 - print("Retrieve Task Memory Result:")
test\cookbook\simple_demo\import_usage_demo.py:67 - async def summary_personal_memory(app: ReMeApp):
test\cookbook\simple_demo\import_usage_demo.py:69 - Memory Integration: Learn from user interactions
test\cookbook\simple_demo\import_usage_demo.py:71 - curl -X POST http://localhost:8002/summary_personal_memory \
test\cookbook\simple_demo\import_usage_demo.py:84 - name="summary_personal_memory",
test\cookbook\simple_demo\import_usage_demo.py:98 - print("Summary Personal Memory Result:")
test\cookbook\simple_demo\import_usage_demo.py:102 - async def retrieve_personal_memory(app: ReMeApp):
test\cookbook\simple_demo\import_usage_demo.py:104 - Memory Retrieval: Get personal memory fragments
test\cookbook\simple_demo\import_usage_demo.py:106 - curl -X POST http://localhost:8002/retrieve_personal_memory \
test\cookbook\simple_demo\import_usage_demo.py:115 - name="retrieve_personal_memory",
test\cookbook\simple_demo\import_usage_demo.py:120 - print("Retrieve Personal Memory Result:")
test\cookbook\simple_demo\import_usage_demo.py:169 - async def summary_tool_memory(app: ReMeApp):
test\cookbook\simple_demo\import_usage_demo.py:173 - curl -X POST http://localhost:8002/summary_tool_memory \
... and 7 more

## test\cookbook\simple_demo\use_personal_memory_demo.py
test\cookbook\simple_demo\use_personal_memory_demo.py:12 - workspace_id = "personal_memory_demo"
test\cookbook\simple_demo\use_personal_memory_demo.py:63 - # Step 3: Summarize personal memories from the conversation
test\cookbook\simple_demo\use_personal_memory_demo.py:79 - with open("personal_memory.jsonl", "w") as f:

## test\cookbook\simple_demo\use_task_memory_demo.py
test\cookbook\simple_demo\use_task_memory_demo.py:100 - def run_summary(messages: List[Dict[str, Any]], enable_dump_memory: bool = True) -> None:
test\cookbook\simple_demo\use_task_memory_demo.py:106 - enable_dump_memory: Whether to save memory list to a file
test\cookbook\simple_demo\use_task_memory_demo.py:116 - # url=f"{BASE_URL}summary_task_memory_simple",
test\cookbook\simple_demo\use_task_memory_demo.py:117 - url=f"{BASE_URL}summary_task_memory",
test\cookbook\simple_demo\use_task_memory_demo.py:130 - # Extract memory list from response
test\cookbook\simple_demo\use_task_memory_demo.py:131 - memory_list = result.get("metadata", {}).get("memory_list", [])
test\cookbook\simple_demo\use_task_memory_demo.py:132 - print(f"Memory list: {memory_list}")
test\cookbook\simple_demo\use_task_memory_demo.py:135 - if enable_dump_memory and memory_list:
test\cookbook\simple_demo\use_task_memory_demo.py:136 - with open("task_memory.jsonl", "w") as f:
test\cookbook\simple_demo\use_task_memory_demo.py:137 - f.write(json.dumps(memory_list, indent=2, ensure_ascii=False))
test\cookbook\simple_demo\use_task_memory_demo.py:152 - # url=f"{BASE_URL}retrieve_task_memory_simple",
test\cookbook\simple_demo\use_task_memory_demo.py:153 - url=f"{BASE_URL}retrieve_task_memory",
test\cookbook\simple_demo\use_task_memory_demo.py:166 - print(f"Retrieved memory: {answer}")
test\cookbook\simple_demo\use_task_memory_demo.py:170 - def run_agent_with_memory(query_first: str, query_second: str, enable_dump_memory: bool = True) -> List[Dict[str, Any]]:
test\cookbook\simple_demo\use_task_memory_demo.py:174 - This function demonstrates how to use task memory to enhance agent responses:
test\cookbook\simple_demo\use_task_memory_demo.py:181 - query_first: The query to run with memory augmentation
test\cookbook\simple_demo\use_task_memory_demo.py:183 - enable_dump_memory: Whether to save memory list to a file
test\cookbook\simple_demo\use_task_memory_demo.py:199 - retrieved_memory = run_retrieve(query_first)
test\cookbook\simple_demo\use_task_memory_demo.py:203 - augmented_query = f"{retrieved_memory}\n\nUser Question:\n{query_first}"
test\cookbook\simple_demo\use_task_memory_demo.py:210 - def dump_memory(path: str = "./") -> None:
... and 9 more

## test\cookbook\simple_demo\use_task_memory_mcp_demo.py
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:53 - async def run_summary(client: Client, messages: List[Dict[str, Any]], enable_dump_memory: bool = True) -> None:
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:60 - enable_dump_memory: Whether to save memory list to a file
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:81 - # Extract memory list from response
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:82 - print(f"Memory list: {answer}")
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:84 - if enable_dump_memory:
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:85 - with open("mcp_task_memory.jsonl", "w") as f:
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:110 - print(f"Retrieved memory: {answer}")
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:114 - async def run_agent_with_memory(
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:118 - enable_dump_memory: bool = True,
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:123 - This function demonstrates how to use task memory to enhance agent responses:
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:131 - query_first: The query to run with memory augmentation
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:133 - enable_dump_memory: Whether to save memory list to a file
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:149 - retrieved_memory = await run_retrieve(client, query_first)
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:153 - augmented_query = f"{retrieved_memory}\n\nUser Question:\n{query_first}"
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:160 - async def dump_memory(client: Client, path: str = "./") -> None:
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:182 - async def load_memory(client: Client, path: str = "./") -> None:
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:184 - Load memories from disk into the vector store
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:188 - path: Directory path to load the memories from
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:201 - print(f"Memory loaded from {path}")
test\cookbook\simple_demo\use_task_memory_mcp_demo.py:212 - print("=== Task Memory Demo (MCP Client) ===")
... and 4 more

## test\cookbook\simple_demo\use_tool_memory_demo.py
test\cookbook\simple_demo\use_tool_memory_demo.py:12 - from reme_ai.utils.tool_memory_utils import create_mock_tool_call_results
test\cookbook\simple_demo\use_tool_memory_demo.py:17 - WORKSPACE_ID = "test_tool_memory_workspace"
test\cookbook\simple_demo\use_tool_memory_demo.py:36 - "workspace_id": "test_tool_memory_workspace",
test\cookbook\simple_demo\use_tool_memory_demo.py:52 - "workspace_id": "test_tool_memory_workspace",
test\cookbook\simple_demo\use_tool_memory_demo.py:75 - memory_list = result.get("metadata", {}).get("memory_list", [])
test\cookbook\simple_demo\use_tool_memory_demo.py:81 - def summarize_tool_memory(tool_names: str) -> Optional[Dict[str, Any]]:
test\cookbook\simple_demo\use_tool_memory_demo.py:85 - curl -X POST http://0.0.0.0:8002/summary_tool_memory \
test\cookbook\simple_demo\use_tool_memory_demo.py:88 - "workspace_id": "test_tool_memory_workspace",
test\cookbook\simple_demo\use_tool_memory_demo.py:102 - memory_list = result.get("metadata", {}).get("memory_list", [])
test\cookbook\simple_demo\use_tool_memory_demo.py:104 - for memory in memory_list:
test\cookbook\simple_demo\use_tool_memory_demo.py:106 - print(f"Tool: {memory.get('when_to_use', 'N/A')}")
test\cookbook\simple_demo\use_tool_memory_demo.py:112 - def retrieve_tool_memory(tool_names: str, save_to_file: bool = False) -> str:
test\cookbook\simple_demo\use_tool_memory_demo.py:116 - curl -X POST http://0.0.0.0:8002/retrieve_tool_memory \
test\cookbook\simple_demo\use_tool_memory_demo.py:119 - "workspace_id": "test_tool_memory_workspace",
test\cookbook\simple_demo\use_tool_memory_demo.py:135 - memory_list = result.get("metadata", {}).get("memory_list", [])
test\cookbook\simple_demo\use_tool_memory_demo.py:136 - if not memory_list:
test\cookbook\simple_demo\use_tool_memory_demo.py:143 - for memory in memory_list:
test\cookbook\simple_demo\use_tool_memory_demo.py:145 - f"\nTool: {memory.get('when_to_use', 'N/A')}\n"
test\cookbook\simple_demo\use_tool_memory_demo.py:146 - f"Calls: {len(memory.get('tool_call_results', []))}\n"
test\cookbook\simple_demo\use_tool_memory_demo.py:153 - with open("tool_memory.json", "w") as f:
... and 7 more

## test\cookbook\tool_memory\run_reme_tool_bench.py
test\cookbook\tool_memory\run_reme_tool_bench.py:22 - from reme_ai.schema.memory import ToolCallResult, ToolMemory
test\cookbook\tool_memory\run_reme_tool_bench.py:192 - memory_list = api_result.get("metadata", {}).get("memory_list", [])
test\cookbook\tool_memory\run_reme_tool_bench.py:193 - logger.info(f"Received {len(memory_list)} tool memories from API")
test\cookbook\tool_memory\run_reme_tool_bench.py:195 - for memory_dict in memory_list:
test\cookbook\tool_memory\run_reme_tool_bench.py:196 - tool_memory = ToolMemory(**memory_dict)
test\cookbook\tool_memory\run_reme_tool_bench.py:197 - tool_name = tool_memory.when_to_use
test\cookbook\tool_memory\run_reme_tool_bench.py:198 - scored_results = tool_memory.tool_call_results
test\cookbook\tool_memory\run_reme_tool_bench.py:211 - def summarize_tool_memory(workspace_id: str, tool_names: str) -> bool:
test\cookbook\tool_memory\run_reme_tool_bench.py:213 - logger.info(f"Summarizing tool memory for {workspace_id}: {tool_names}")
test\cookbook\tool_memory\run_reme_tool_bench.py:223 - memory_list = result.get("metadata", {}).get("memory_list", [])
test\cookbook\tool_memory\run_reme_tool_bench.py:230 - def retrieve_tool_memory(workspace_id: str, tool_names: str) -> str:
test\cookbook\tool_memory\run_reme_tool_bench.py:240 - logger.info(f"Retrieving tool memory for {workspace_id}: {tool_names}")
test\cookbook\tool_memory\run_reme_tool_bench.py:253 - memory_list = result.get("metadata", {}).get("memory_list", [])
test\cookbook\tool_memory\run_reme_tool_bench.py:258 - for memory_dict in memory_list:
test\cookbook\tool_memory\run_reme_tool_bench.py:259 - tool_memory = ToolMemory(**memory_dict)
test\cookbook\tool_memory\run_reme_tool_bench.py:260 - if tool_memory.content:
test\cookbook\tool_memory\run_reme_tool_bench.py:262 - tool_name = tool_memory.when_to_use or "Unknown Tool"
test\cookbook\tool_memory\run_reme_tool_bench.py:263 - formatted_section = f"# {tool_name}\n\n{tool_memory.content}"
test\cookbook\tool_memory\run_reme_tool_bench.py:266 - f"Retrieved content for tool: {tool_name}, " f"content_length={len(tool_memory.content)}",
test\cookbook\tool_memory\run_reme_tool_bench.py:326 - print("IMPROVEMENTS WITH TOOL MEMORY (Baseline: Test without memory)")
... and 48 more

## test\cookbook\working_memory\react_agent_with_working_memory.py
test\cookbook\working_memory\react_agent_with_working_memory.py:24 - - `grep_working_memory`: search working memory by keyword / regex.
test\cookbook\working_memory\react_agent_with_working_memory.py:25 - - `read_working_memory`: read a specific segment of working memory.
test\cookbook\working_memory\react_agent_with_working_memory.py:56 - - ReMe MCP server, exposing `grep_working_memory` and `read_working_memory` tools, e.g.:
test\cookbook\working_memory\react_agent_with_working_memory.py:58 - - ReMe HTTP server, exposing the `summary_working_memory` flow, e.g.:
test\cookbook\working_memory\react_agent_with_working_memory.py:83 - if tool_call.name in ["grep_working_memory", "read_working_memory"]:
test\cookbook\working_memory\react_agent_with_working_memory.py:94 - # Before every LLM call, run `summary_working_memory` to:
test\cookbook\working_memory\react_agent_with_working_memory.py:107 - store_dir="./test_working_memory",

## test\cookbook\working_memory\work_memory_demo.py
test\cookbook\working_memory\work_memory_demo.py:7 - from react_agent_with_working_memory import ReactAgent
test\cookbook\working_memory\work_memory_demo.py:83 - content="根据readme回答task memory在appworld的效果是多少，需要具体的数值",

## test\test\reme_cli.py
test\test\reme_cli.py:27 - from .memory.cli import FbCli, FbCompactor, FbContextChecker, FbSummarizer
test\test\reme_cli.py:28 - from .memory.tools import MemoryGet, MemorySearch
test\test\reme_cli.py:60 - memory_path = working_path / "memory"
test\test\reme_cli.py:61 - memory_path.mkdir(parents=True, exist_ok=True)
test\test\reme_cli.py:323 - async def memory_search(self, query: str, max_results: int = 5, min_score: float = 0.1) -> str:
test\test\reme_cli.py:325 - Mandatory recall step: semantically search MEMORY.md + memory/*.md (and optional session transcripts)
test\test\reme_cli.py:330 - query: The semantic search query to find relevant memory snippets
test\test\reme_cli.py:337 - search_tool = MemorySearch(
test\test\reme_cli.py:348 - async def memory_get(self, path: str, offset: int | None = None, limit: int | None = None) -> str:
test\test\reme_cli.py:350 - Safe snippet read from MEMORY.md, memory/*.md with optional offset/limit;
test\test\reme_cli.py:354 - path: Path to the memory file to read (relative or absolute)
test\test\reme_cli.py:361 - get_tool = MemoryGet(cwd=self.working_dir)

## test\test\test_fs_file_watch_integration.py
test\test\test_fs_file_watch_integration.py:32 - MEMORY_SUBDIR = "memory"
test\test\test_fs_file_watch_integration.py:47 - memory_path = base_path / TestConfig.MEMORY_SUBDIR
test\test\test_fs_file_watch_integration.py:48 - memory_path.mkdir(parents=True, exist_ok=True)
test\test\test_fs_file_watch_integration.py:51 - profile_file = memory_path / "profile.md"
test\test\test_fs_file_watch_integration.py:71 - hobbies_file = memory_path / "hobbies.md"
test\test\test_fs_file_watch_integration.py:92 - projects_file = memory_path / "projects.md"
test\test\test_fs_file_watch_integration.py:126 - memory_path = base_path / TestConfig.MEMORY_SUBDIR
test\test\test_fs_file_watch_integration.py:129 - profile_file = memory_path / "profile.md"
test\test\test_fs_file_watch_integration.py:150 - hobbies_file = memory_path / "hobbies.md"
test\test\test_fs_file_watch_integration.py:173 - projects_file = memory_path / "projects.md"
test\test\test_fs_file_watch_integration.py:241 - content: Content retrieved from memory_get
test\test\test_fs_file_watch_integration.py:295 - "watch_paths": [TestConfig.WORKING_DIR, f"{TestConfig.WORKING_DIR}/memory"],
test\test\test_fs_file_watch_integration.py:303 - print(f"  Watch paths: {TestConfig.WORKING_DIR}, {TestConfig.WORKING_DIR}/memory")
test\test\test_fs_file_watch_integration.py:331 - result_json = await reme_fs.memory_search(
test\test\test_fs_file_watch_integration.py:344 - print_separator("STEP 5: Getting Specific Content with memory_get")
test\test\test_fs_file_watch_integration.py:347 - profile_path = f"{TestConfig.MEMORY_SUBDIR}/profile.md"
test\test\test_fs_file_watch_integration.py:350 - profile_content_before = await reme_fs.memory_get(
test\test\test_fs_file_watch_integration.py:362 - hobbies_path = f"{TestConfig.MEMORY_SUBDIR}/hobbies.md"
test\test\test_fs_file_watch_integration.py:365 - hobbies_content_before = await reme_fs.memory_get(path=hobbies_path)
test\test\test_fs_file_watch_integration.py:396 - result_json = await reme_fs.memory_search(
... and 4 more

## test\test\test_fs_memory_get.py
test\test\test_fs_memory_get.py:1 - """Tests for ReMeCli memory_get interface.
test\test\test_fs_memory_get.py:3 - This module tests the memory_get() method of ReMeCli class which provides
test\test\test_fs_memory_get.py:4 - a high-level interface for reading specific snippets from memory files.
test\test\test_fs_memory_get.py:6 - The memory_get function should enable the LLM to:
test\test\test_fs_memory_get.py:23 - content: Content returned from memory_get()
test\test\test_fs_memory_get.py:46 - def create_test_memory_file(workspace_dir: str) -> str:
test\test\test_fs_memory_get.py:58 - memory_dir = workspace_path / "memory"
test\test\test_fs_memory_get.py:59 - memory_dir.mkdir(parents=True, exist_ok=True)
test\test\test_fs_memory_get.py:61 - test_file = memory_dir / "test_profile.md"
test\test\test_fs_memory_get.py:98 - async def test_memory_get_full_file():
test\test\test_fs_memory_get.py:104 - print("TEST 1: Memory Get - Read Entire File")
test\test\test_fs_memory_get.py:112 - test_file_path = create_test_memory_file(workspace_dir)
test\test\test_fs_memory_get.py:124 - result = await reme_fs.memory_get(path=test_file_path)
test\test\test_fs_memory_get.py:126 - print_result(result, "MEMORY_GET RESULT", max_len=500)
test\test\test_fs_memory_get.py:137 - async def test_memory_get_with_offset():
test\test\test_fs_memory_get.py:138 - """Test memory_get() reads from specific line to end.
test\test\test_fs_memory_get.py:143 - print("TEST 2: Memory Get - Read with Offset")
test\test\test_fs_memory_get.py:150 - test_file_path = "memory/test_profile.md"
test\test\test_fs_memory_get.py:160 - result = await reme_fs.memory_get(path=test_file_path, offset=offset)
test\test\test_fs_memory_get.py:162 - print_result(result, "MEMORY_GET RESULT", max_len=400)
... and 23 more

## test\test\test_fs_memory_search.py
test\test\test_fs_memory_search.py:1 - """Tests for ReMeCli memory_search interface.
test\test\test_fs_memory_search.py:3 - This module tests the memory_search() method of ReMeCli class which provides
test\test\test_fs_memory_search.py:4 - a high-level interface for searching personal information stored in memory files.
test\test\test_fs_memory_search.py:6 - The memory_search function should enable:
test\test\test_fs_memory_search.py:20 - from reme.core.enumeration import MemorySource
test\test\test_fs_memory_search.py:21 - from reme.core.schema import FileMetadata, MemoryChunk
test\test\test_fs_memory_search.py:40 - def create_personal_info_chunks(test_name: str = "") -> list[MemoryChunk]:
test\test\test_fs_memory_search.py:42 - base_path = "memory/personal_info.md"
test\test\test_fs_memory_search.py:48 - source=MemorySource.MEMORY,
test\test\test_fs_memory_search.py:59 - source=MemorySource.MEMORY,
test\test\test_fs_memory_search.py:73 - source=MemorySource.MEMORY,
test\test\test_fs_memory_search.py:84 - def create_technical_chunks(test_name: str = "") -> list[MemoryChunk]:
test\test\test_fs_memory_search.py:86 - base_path = "memory/technical_notes.md"
test\test\test_fs_memory_search.py:92 - source=MemorySource.MEMORY,
test\test\test_fs_memory_search.py:106 - source=MemorySource.MEMORY,
test\test\test_fs_memory_search.py:120 - source=MemorySource.MEMORY,
test\test\test_fs_memory_search.py:131 - def create_session_chunks(test_name: str = "") -> list[MemoryChunk]:
test\test\test_fs_memory_search.py:139 - source=MemorySource.SESSIONS,
test\test\test_fs_memory_search.py:150 - source=MemorySource.SESSIONS,
test\test\test_fs_memory_search.py:201 - async def test_memory_search_basic():
... and 30 more

## test\test\test_fs_summary.py
test\test\test_fs_summary.py:67 - def delete_memory_file(working_dir: str, date: str):
test\test\test_fs_summary.py:74 - memory_path = Path(working_dir) / "memory" / f"{date}.md"
test\test\test_fs_summary.py:75 - if memory_path.exists():
test\test\test_fs_summary.py:82 - def check_memory_file(working_dir: str, date: str):
test\test\test_fs_summary.py:89 - memory_path = Path(working_dir) / "memory" / f"{date}.md"
test\test\test_fs_summary.py:90 - if memory_path.exists():
test\test\test_fs_summary.py:94 - content = memory_path.read_text()

## test\test\cli\fb_cli.yaml
test\test\cli\fb_cli.yaml:24 - - **Long-term memory:** `MEMORY.md` — when you pick up a lesson or catch yourself making a mistake, feel free to **read, edit, and update** MEMORY.md
test\test\cli\fb_cli.yaml:25 - - **Daily notes:** `memory/YYYY-MM-DD.md` — jot things down often. When the user says "remember this," or whenever you feel something is worth noting or adding as a todo, feel free to **read, edit, and update** `memory/YYYY-MM-DD.md`
test\test\cli\fb_cli.yaml:29 - 1. Start with `memory_search` — if nothing comes up, try rephrasing from a different angle
test\test\cli\fb_cli.yaml:44 - This is just a starting point. When you spot useful patterns or lessons during your conversations, note them in `MEMORY.md`. Do not modify system-level config files.

## test\test\cli\fb_summarizer.py
test\test\cli\fb_summarizer.py:19 - memory_dir: str = "memory",
test\test\cli\fb_summarizer.py:26 - self.memory_dir: str = memory_dir
test\test\cli\fb_summarizer.py:45 - memory_dir=self.memory_dir,
test\test\cli\fb_summarizer.py:58 - memory_dir=self.memory_dir,
test\test\cli\fb_summarizer.py:72 - memory_dir=self.memory_dir,

## test\test\cli\fb_summarizer.yaml
test\test\cli\fb_summarizer.yaml:19 - Immediately store persistent memory to: {memory_dir}/YYYY-MM-DD.md

## tests\demo_memory_search.py
tests\demo_memory_search.py:24 - from reme.core.enumeration import MemorySource
tests\demo_memory_search.py:33 - DB_PATH_FULL = "./demo_memory_search/full_watcher.db"
tests\demo_memory_search.py:34 - DB_PATH_DELTA = "./demo_memory_search/delta_watcher.db"
tests\demo_memory_search.py:68 - files = await store.list_files(MemorySource.MEMORY)
tests\demo_memory_search.py:75 - file_meta = await store.get_file_metadata(file_path, MemorySource.MEMORY)
tests\demo_memory_search.py:82 - chunks = await store.get_file_chunks(file_path, MemorySource.MEMORY)
tests\demo_memory_search.py:261 - initial_chunks = await store.get_file_chunks(test_file, MemorySource.MEMORY)
tests\demo_memory_search.py:289 - updated_chunks = await store.get_file_chunks(test_file, MemorySource.MEMORY)
tests\demo_memory_search.py:328 - final_chunks = await store.get_file_chunks(test_file, MemorySource.MEMORY)

## tests\test_cache_memory_usage.py
tests\test_cache_memory_usage.py:12 - def calculate_theoretical_memory():
tests\test_cache_memory_usage.py:40 - print("Memory per cache entry:")
tests\test_cache_memory_usage.py:48 - print("Memory usage at different cache sizes:")
tests\test_cache_memory_usage.py:50 - print(f"{'Cache Size':>12} | {'Memory (MB)':>12} | {'Memory (GB)':>12}")
tests\test_cache_memory_usage.py:63 - default_memory_mb = (default_size * entry_size) / (1024 * 1024)
tests\test_cache_memory_usage.py:66 - print(f"   Estimated memory: ~{default_memory_mb:.1f} MB")
tests\test_cache_memory_usage.py:68 - print("   • For memory-constrained environments: 1,000-5,000 (~8-42 MB)")
tests\test_cache_memory_usage.py:74 - def measure_actual_memory():
tests\test_cache_memory_usage.py:90 - print(f"{'Cache Size':>12} | {'Memory (MB)':>12} | {'Per Entry (KB)':>15}")
tests\test_cache_memory_usage.py:139 - print(f"   Actual memory usage: {mb:.2f} MB")
tests\test_cache_memory_usage.py:156 - print("2️⃣  Consider available memory:")
tests\test_cache_memory_usage.py:176 - print(f"{'Use Case':<25} | {'Configuration':<22} | {'Memory':<10}")
tests\test_cache_memory_usage.py:178 - for use_case, config, memory in examples:
tests\test_cache_memory_usage.py:179 - print(f"{use_case:<25} | {config:<22} | {memory:<10}")
tests\test_cache_memory_usage.py:199 - print("   print(f'Memory used: ~{stats[\"cache_size\"] * 8.4:.1f} KB')")

## tests\test_chunking_utils.py
tests\test_chunking_utils.py:5 - from reme.core.enumeration import MemorySource
tests\test_chunking_utils.py:23 - source=MemorySource.MEMORY,
tests\test_chunking_utils.py:30 - assert all(chunk.source == MemorySource.MEMORY for chunk in chunks)
tests\test_chunking_utils.py:40 - source=MemorySource.MEMORY,
tests\test_chunking_utils.py:56 - source=MemorySource.MEMORY,
tests\test_chunking_utils.py:75 - source=MemorySource.MEMORY,
tests\test_chunking_utils.py:94 - source=MemorySource.MEMORY,
tests\test_chunking_utils.py:114 - source=MemorySource.MEMORY,
tests\test_chunking_utils.py:135 - source=MemorySource.MEMORY,
tests\test_chunking_utils.py:163 - source=MemorySource.MEMORY,
tests\test_chunking_utils.py:183 - source=MemorySource.MEMORY,
tests\test_chunking_utils.py:199 - source=MemorySource.MEMORY,
tests\test_chunking_utils.py:215 - source=MemorySource.SESSIONS,
tests\test_chunking_utils.py:221 - assert chunks[0].source == MemorySource.SESSIONS
tests\test_chunking_utils.py:246 - source=MemorySource.MEMORY,

## tests\test_file_store.py
tests\test_file_store.py:26 - from reme.core.enumeration.memory_source import MemorySource
tests\test_file_store.py:32 - from reme.core.schema.memory_chunk import MemoryChunk
tests\test_file_store.py:48 - SQLITE_DB_PATH = "./test_file_store_sqlite/memory.db"
tests\test_file_store.py:65 - TEST_PATH_PREFIX = "test_memory_"
tests\test_file_store.py:75 - def create_sample_chunks(file_path: str, prefix: str = "") -> List[MemoryChunk]:
tests\test_file_store.py:83 - List[MemoryChunk]: List of sample chunks with diverse content
tests\test_file_store.py:92 - source=MemorySource.MEMORY,
tests\test_file_store.py:103 - source=MemorySource.MEMORY,
tests\test_file_store.py:114 - source=MemorySource.MEMORY,
tests\test_file_store.py:125 - def create_session_chunks(file_path: str, prefix: str = "") -> List[MemoryChunk]:
tests\test_file_store.py:133 - List[MemoryChunk]: List of session chunks
tests\test_file_store.py:142 - source=MemorySource.SESSIONS,
tests\test_file_store.py:153 - source=MemorySource.SESSIONS,
tests\test_file_store.py:288 - async def test_upsert_file(store: BaseFileStore, _store_name: str) -> tuple[FileMetadata, List[MemoryChunk]]:
tests\test_file_store.py:293 - file_path = "test_memory_file1.txt"
tests\test_file_store.py:306 - stored_meta = await store.get_file_metadata(file_path, MemorySource.MEMORY)
tests\test_file_store.py:312 - stored_chunks = await store.get_file_chunks(file_path, MemorySource.MEMORY)
tests\test_file_store.py:324 - memory_path = "test_memory_file2.txt"
tests\test_file_store.py:325 - memory_meta = SampleDataGenerator.create_file_metadata(memory_path)
tests\test_file_store.py:326 - memory_chunks = SampleDataGenerator.create_sample_chunks(memory_path, prefix="mem")
... and 52 more

## tests\test_keyword_search_performance.py
tests\test_keyword_search_performance.py:15 - from reme.core.enumeration.memory_source import MemorySource
tests\test_keyword_search_performance.py:17 - from reme.core.schema.memory_chunk import MemoryChunk
tests\test_keyword_search_performance.py:75 - def create_test_chunks(count: int = 1000, text_length: int = 10000) -> list[MemoryChunk]:
tests\test_keyword_search_performance.py:80 - chunk = MemoryChunk(
tests\test_keyword_search_performance.py:83 - source=MemorySource.MEMORY,

## tests\test_memory_vector_conversion.py
tests\test_memory_vector_conversion.py:21 - # Define MemoryType locally to avoid import issues
tests\test_memory_vector_conversion.py:22 - class MemoryType(str, Enum):
tests\test_memory_vector_conversion.py:23 - """Memory type enumeration for the three-layer memory architecture."""
tests\test_memory_vector_conversion.py:44 - # Define MemoryNode locally to avoid import issues
tests\test_memory_vector_conversion.py:51 - MEMORY_ID_LENGTH: int = 16
tests\test_memory_vector_conversion.py:54 - class MemoryNode(BaseModel):
tests\test_memory_vector_conversion.py:57 - memory_id: str = Field(default="", description="Unique memory identifier")
tests\test_memory_vector_conversion.py:58 - memory_type: MemoryType = Field(default=..., description="Type of memory")
tests\test_memory_vector_conversion.py:59 - memory_target: str = Field(default="", description="Target or topic of the memory")
tests\test_memory_vector_conversion.py:61 - content: str = Field(default="", description="Actual memory content")
tests\test_memory_vector_conversion.py:62 - ref_memory_id: str = Field(default="", description="Reference to related raw history memory ID")
tests\test_memory_vector_conversion.py:66 - author: str = Field(default="", description="Author or source of the memory")
tests\test_memory_vector_conversion.py:71 - def _update_modified_time(self) -> "MemoryNode":
tests\test_memory_vector_conversion.py:76 - def _update_memory_id(self) -> "MemoryNode":
tests\test_memory_vector_conversion.py:77 - """Generate memory_id from SHA-256 hash of content."""
tests\test_memory_vector_conversion.py:83 - self.memory_id = hex_dig[:MEMORY_ID_LENGTH]
tests\test_memory_vector_conversion.py:87 - def _update_after_init(self) -> "MemoryNode":
tests\test_memory_vector_conversion.py:89 - if not self.memory_id:
tests\test_memory_vector_conversion.py:106 - "memory_type": self.memory_type.value,
tests\test_memory_vector_conversion.py:107 - "memory_target": self.memory_target,
... and 161 more

## tests\test_reme.py
tests\test_reme.py:6 - from reme.core.schema import VectorNode, MemoryNode
tests\test_reme.py:81 - memory_node = MemoryNode.from_vector_node(node)
tests\test_reme.py:91 - result1 = await reme.retrieve_memory(query=query1, user_name="zhangwei")
tests\test_reme.py:97 - result2 = await reme.retrieve_memory(query=query2, user_name="zhangwei")
tests\test_reme.py:103 - result3 = await reme.retrieve_memory(query=query3, user_name="zhangwei")
tests\test_reme.py:109 - result4 = await reme.retrieve_memory(query=query4, user_name="zhangwei")

## tests\test_reme_memory_error_handling.py
tests\test_reme_memory_error_handling.py:64 - async def test_summarize_memory_propagates_raise_exception(
tests\test_reme_memory_error_handling.py:72 - result = await reme.summarize_memory(
tests\test_reme_memory_error_handling.py:85 - async def test_retrieve_memory_propagates_raise_exception(
tests\test_reme_memory_error_handling.py:93 - result = await reme.retrieve_memory(
tests\test_reme_memory_error_handling.py:105 - async def test_summarize_memory_raises_runtime_error_for_unstructured_result(monkeypatch: pytest.MonkeyPatch):
tests\test_reme_memory_error_handling.py:128 - with pytest.raises(RuntimeError, match="summarize_memory failed before producing a structured result"):

## tests\test_timer.py
tests\test_timer.py:27 - class TestMemberMethods:

## tests\light\test_compactor.py
tests\light\test_compactor.py:13 - from reme.memory.file_based.components import Compactor
tests\light\test_compactor.py:98 - memory_compact_threshold=4000,
tests\light\test_compactor.py:284 - memory_compact_threshold=500,
tests\light\test_compactor.py:307 - memory_compact_threshold=10000,

## tests\light\test_context_check.py
tests\light\test_context_check.py:9 - from reme.memory.file_based.utils import AsMsgHandler
tests\light\test_context_check.py:59 - memory_compact_threshold: int,
tests\light\test_context_check.py:60 - memory_compact_reserve: int,
tests\light\test_context_check.py:75 - memory_compact_threshold: The threshold parameter used
tests\light\test_context_check.py:76 - memory_compact_reserve: The reserve parameter used
tests\light\test_context_check.py:86 - if total_tokens <= memory_compact_threshold:
tests\light\test_context_check.py:94 - f"threshold ({memory_compact_threshold}), but to_keep differs from original messages"
tests\light\test_context_check.py:99 - assert kept_tokens <= memory_compact_reserve or len(to_keep) == 0, (
tests\light\test_context_check.py:100 - f"[{test_name}] Reserve violation: kept_tokens ({kept_tokens}) > " f"reserve ({memory_compact_reserve})"
tests\light\test_context_check.py:228 - memory_compact_threshold=threshold,
tests\light\test_context_check.py:229 - memory_compact_reserve=reserve,
tests\light\test_context_check.py:250 - memory_compact_threshold=threshold,  # Very high threshold
tests\light\test_context_check.py:251 - memory_compact_reserve=reserve,
tests\light\test_context_check.py:283 - memory_compact_threshold=threshold,  # Low threshold to trigger compaction
tests\light\test_context_check.py:284 - memory_compact_reserve=reserve,
tests\light\test_context_check.py:316 - memory_compact_threshold=threshold,  # Low threshold
tests\light\test_context_check.py:317 - memory_compact_reserve=reserve,
tests\light\test_context_check.py:349 - memory_compact_threshold=threshold,
tests\light\test_context_check.py:350 - memory_compact_reserve=reserve,
tests\light\test_context_check.py:376 - memory_compact_threshold=threshold,  # Very low threshold
... and 55 more

## tests\light\test_format_msgs_to_str.py
tests\light\test_format_msgs_to_str.py:12 - from reme.memory.file_based.utils import AsMsgHandler
tests\light\test_format_msgs_to_str.py:78 - threshold: The memory_compact_threshold value used.
tests\light\test_format_msgs_to_str.py:220 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:231 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:249 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:268 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:287 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:299 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:311 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:328 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:346 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold, include_thinking=False))
tests\light\test_format_msgs_to_str.py:359 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold, include_thinking=True))
tests\light\test_format_msgs_to_str.py:377 - memory_compact_threshold=threshold,
tests\light\test_format_msgs_to_str.py:385 - memory_compact_threshold=threshold,
tests\light\test_format_msgs_to_str.py:409 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:427 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:448 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:465 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:479 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=threshold))
tests\light\test_format_msgs_to_str.py:497 - result = asyncio.run(handler.format_msgs_to_str(msgs, memory_compact_threshold=exact_threshold))
... and 18 more

## tests\light\test_reme_light.py
tests\light\test_reme_light.py:67 - # ==================== 2. compact_memory ====================
tests\light\test_reme_light.py:75 - compact_summary = await reme.compact_memory(
tests\light\test_reme_light.py:86 - # ==================== 3. summary_memory ====================
tests\light\test_reme_light.py:94 - summary_result = await reme.summary_memory(messages=messages)
tests\light\test_reme_light.py:114 - memory_compact_reserve=10000,
tests\light\test_reme_light.py:126 - # ==================== 5. memory_search ====================
tests\light\test_reme_light.py:131 - search_result = await reme.memory_search(query="Python 版本偏好", max_results=5)
tests\light\test_reme_light.py:137 - # ==================== 6 & 7. ReMeInMemoryMemory ====================
tests\light\test_reme_light.py:144 - memory = reme.get_in_memory_memory()
tests\light\test_reme_light.py:151 - token_stats = await memory.estimate_tokens(max_input_length=128000)
tests\light\test_reme_light.py:161 - history_str = await memory.get_history_str(max_input_length=128000)
tests\light\test_reme_light.py:177 - print(f"  Step 2 compact_memory 摘要: {summary_tokens:,} tokens")

## tests\light\test_reme_light_log.txt
tests\light\test_reme_light_log.txt:77 - Step 2 compact_memory 摘要: 493 tokens

## tests\light\test_summarizer.py
tests\light\test_summarizer.py:16 - from reme.memory.file_based.components import Summarizer
tests\light\test_summarizer.py:17 - from reme.memory.file_based.tools import FileIO
tests\light\test_summarizer.py:110 - def create_summarizer(working_dir: str = None, memory_dir: str = "memory"):
tests\light\test_summarizer.py:116 - memory_path = Path(working_dir) / memory_dir
tests\light\test_summarizer.py:117 - memory_path.mkdir(parents=True, exist_ok=True)
tests\light\test_summarizer.py:122 - memory_dir=memory_dir,
tests\light\test_summarizer.py:123 - memory_compact_threshold=4000,
tests\light\test_summarizer.py:194 - memory_dir = "memory"
tests\light\test_summarizer.py:195 - memory_path = Path(working_dir) / memory_dir
tests\light\test_summarizer.py:196 - memory_path.mkdir(parents=True, exist_ok=True)
tests\light\test_summarizer.py:199 - logger.info(f"Memory path: {memory_path}")
tests\light\test_summarizer.py:204 - memory_dir=memory_dir,
tests\light\test_summarizer.py:205 - memory_compact_threshold=4000,
tests\light\test_summarizer.py:228 - expected_file = memory_path / f"{today}.md"
tests\light\test_summarizer.py:232 - files_after_round1 = list(memory_path.iterdir())

## tests\light\test_tools.py
tests\light\test_tools.py:13 - from reme.memory.file_based.tools.file_io import FileIO
tests\light\test_tools.py:14 - from reme.memory.file_based.tools.shell import Shell
tests\light\test_tools.py:15 - from reme.memory.file_based.utils import DEFAULT_MAX_BYTES

## tests\light\test_tool_result_compactor.py
tests\light\test_tool_result_compactor.py:10 - from reme.memory.file_based.components import ToolResultCompactor
tests\light\test_tool_result_compactor.py:11 - from reme.memory.file_based.utils import TRUNCATION_NOTICE_MARKER

## tests\light\test_truncate_text_output.py
tests\light\test_truncate_text_output.py:18 - from reme.memory.file_based.utils.file_utils import (

## tests\light\test_utils.py
tests\light\test_utils.py:7 - from reme.memory.file_based.utils import AsMsgHandler

## tests\vector\test_reme_vector.py
tests\vector\test_reme_vector.py:34 - result = await reme.summarize_memory(
tests\vector\test_reme_vector.py:42 - memories = await reme.retrieve_memory(
tests\vector\test_reme_vector.py:50 - memory_node = await reme.add_memory(
tests\vector\test_reme_vector.py:51 - memory_content="用户喜欢简洁的代码风格",
tests\vector\test_reme_vector.py:54 - print(f"添加的记忆: {memory_node}")
tests\vector\test_reme_vector.py:55 - memory_id = memory_node.memory_id
tests\vector\test_reme_vector.py:58 - fetched_memory = await reme.get_memory(memory_id=memory_id)
tests\vector\test_reme_vector.py:59 - print(f"获取的记忆: {fetched_memory}")
tests\vector\test_reme_vector.py:62 - updated_memory = await reme.update_memory(
tests\vector\test_reme_vector.py:63 - memory_id=memory_id,
tests\vector\test_reme_vector.py:65 - memory_content="用户喜欢简洁且带注释的代码风格",
tests\vector\test_reme_vector.py:67 - print(f"更新后的记忆: {updated_memory}")
tests\vector\test_reme_vector.py:70 - all_memories = await reme.list_memory(
tests\vector\test_reme_vector.py:79 - await reme.delete_memory(memory_id=memory_id)
tests\vector\test_reme_vector.py:80 - print(f"已删除记忆: {memory_id}")
