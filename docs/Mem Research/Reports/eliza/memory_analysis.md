# eliza Memory Context

## Files with 'mem' in name:
packages\computeruse\packages\kv\src\adapters\memory.ts
packages\docs\agents\memory-and-state.mdx
packages\docs\images\meme-lord.jpg
packages\docs\runtime\memory.mdx
packages\python\elizaos\advanced_memory\memory_service.py
packages\python\elizaos\advanced_memory\test_advanced_memory.py
packages\python\elizaos\types\memory.py
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.pyi
packages\python\tests\test_advanced_memory_behavior.py
packages\python\tests\test_advanced_memory_flag.py
packages\python\tests\test_memory_bounds.py
packages\python\tests\verify_memory_architecture.py
packages\rust\proto\eliza\v1\memory.proto
packages\rust\src\advanced_memory\memory_service.rs
packages\rust\src\advanced_memory\providers\long_term_memory.rs
packages\rust\src\types\memory.rs
packages\rust\tests\advanced_memory_tests.rs
packages\rust\tests\fixtures\memory.json
packages\schemas\eliza\v1\memory.proto
packages\typescript\scripts\perf-memory.ts
packages\typescript\src\memory.ts
packages\typescript\src\advanced-memory\providers\long-term-memory.ts
packages\typescript\src\advanced-memory\schemas\long-term-memories.ts
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts
packages\typescript\src\advanced-memory\services\memory-service.ts
packages\typescript\src\database\inMemoryAdapter.ts
packages\typescript\src\schemas\memory.ts
packages\typescript\src\types\memory-storage.ts
packages\typescript\src\types\memory.ts
packages\typescript\src\__tests__\advanced-memory.test.ts
packages\typescript\src\__tests__\memory-leak-fixes.test.ts
packages\typescript\src\__tests__\memory.test.ts


## .\turbo.json
.\turbo.json:216 - "@elizaos/plugin-inmemorydb-root#build": {

## docs\API_REFERENCE.md
docs\API_REFERENCE.md:21 - - `composeState(message: Memory, includeList?: string[] | null, onlyInclude?: boolean, skipCache?: boolean): Promise<State>`
docs\API_REFERENCE.md:28 - - `processActions(message: Memory, responses: Memory[], state?: State, callback?: HandlerCallback, options?: { onStreamChunk?: (chunk: string, messageId?: string) => Promise<void> }): Promise<void>`
docs\API_REFERENCE.md:29 - - `evaluate(message: Memory, state?: State, didRespond?: boolean, callback?: HandlerCallback, responses?: Memory[]): Promise<Evaluator[] | null>`
docs\API_REFERENCE.md:97 - get: (runtime: IAgentRuntime, message: Memory, state: State) => Promise<ProviderResult>;
docs\API_REFERENCE.md:130 - - **File**: `packages/typescript/src/types/memory.ts`
docs\API_REFERENCE.md:133 - export interface Memory {
docs\API_REFERENCE.md:144 - metadata?: MemoryMetadata;
docs\API_REFERENCE.md:150 - - `createMessageMemory(...)`: `packages/typescript/src/memory.ts`

## docs\ARCHITECTURE.md
docs\ARCHITECTURE.md:22 - - Memory helpers: `packages/typescript/src/memory.ts`
docs\ARCHITECTURE.md:44 - - **Memory**: persisted conversational / knowledge objects (`packages/typescript/src/types/memory.ts`).

## docs\CORE_CONCEPTS.md
docs\CORE_CONCEPTS.md:27 - All persistent data is stored as `Memory` objects (`packages/typescript/src/types/memory.ts`) with:
docs\CORE_CONCEPTS.md:68 - - Then create a message memory (often with `createMessageMemory(...)`) and call:

## docs\INTEROP_GUIDE.md
docs\INTEROP_GUIDE.md:62 - - Memory ownership is explicit: Rust allocates returned strings and exports a free function so Python can release them.

## packages\computeruse\crates\computeruse\browser-extension\worker.js
packages\computeruse\crates\computeruse\browser-extension\worker.js:396 - // 2. THEN: Clear in-memory state (after detachment completes)

## packages\computeruse\crates\computeruse\examples\virtual_display_test.rs
packages\computeruse\crates\computeruse\examples\virtual_display_test.rs:64 - fallback_to_memory: true,

## packages\computeruse\crates\computeruse\src\platforms\windows_benchmarks.rs
packages\computeruse\crates\computeruse\src\platforms\windows_benchmarks.rs:182 - let memory_before = get_process_memory_mb();
packages\computeruse\crates\computeruse\src\platforms\windows_benchmarks.rs:209 - let memory_after = get_process_memory_mb();
packages\computeruse\crates\computeruse\src\platforms\windows_benchmarks.rs:213 - let memory_delta = memory_after.saturating_sub(memory_before);
packages\computeruse\crates\computeruse\src\platforms\windows_benchmarks.rs:228 - println!("     Memory Delta: {memory_delta}MB");
packages\computeruse\crates\computeruse\src\platforms\windows_benchmarks.rs:337 - let memory_str = String::from_utf8_lossy(&output.stdout);
packages\computeruse\crates\computeruse\src\platforms\windows_benchmarks.rs:338 - memory_str.trim().parse::<u64>().unwrap_or(0) / 1024 / 1024
packages\computeruse\crates\computeruse\src\platforms\windows_benchmarks.rs:381 - memory_mb: u64,

## packages\computeruse\crates\computeruse\src\platforms\windows\engine.rs
packages\computeruse\crates\computeruse\src\platforms\windows\engine.rs:339 - warn!("Virtual display init failed, using memory fallback: {}", e);

## packages\computeruse\crates\computeruse\src\platforms\windows\virtual_display.rs
packages\computeruse\crates\computeruse\src\platforms\windows\virtual_display.rs:184 - pub fallback_to_memory: bool,
packages\computeruse\crates\computeruse\src\platforms\windows\virtual_display.rs:192 - fallback_to_memory: true,

## packages\computeruse\packages\kv\package-lock.json
packages\computeruse\packages\kv\package-lock.json:1974 - "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",

## packages\computeruse\packages\kv\README.md
packages\computeruse\packages\kv\README.md:7 - *   **Pluggable Backends**: Switch between Redis (production), File-system (local persistence), and Memory (testing) without changing code.
packages\computeruse\packages\kv\README.md:78 - *   **Memory**: `memory://`
packages\computeruse\packages\kv\README.md:94 - const memKv = createClient({ backend: 'memory' });

## packages\computeruse\packages\kv\src\index.test.ts
packages\computeruse\packages\kv\src\index.test.ts:130 - runKVTestSuite('Memory', () => createClient({ backend: 'memory' }));
packages\computeruse\packages\kv\src\index.test.ts:169 - it('should return MemoryKV for memory protocol', () => {
packages\computeruse\packages\kv\src\index.test.ts:170 - const c = createClient({ url: 'memory://' });

## packages\computeruse\packages\kv\src\index.ts
packages\computeruse\packages\kv\src\index.ts:4 - import { MemoryKV } from './adapters/memory';
packages\computeruse\packages\kv\src\index.ts:14 - * 2. `config.url` protocol (redis://, file://, memory://, http://, https://).
packages\computeruse\packages\kv\src\index.ts:16 - * 4. Defaults to `file://./computeruse-kv.json` (or memory in test environment).
packages\computeruse\packages\kv\src\index.ts:27 - if (config.backend === 'memory') return new MemoryKV();
packages\computeruse\packages\kv\src\index.ts:59 - if (url.startsWith('memory:')) {

## packages\computeruse\packages\kv\src\types.ts
packages\computeruse\packages\kv\src\types.ts:89 - export type KVBackendType = 'redis' | 'memory' | 'file' | 'http';
packages\computeruse\packages\kv\src\types.ts:94 - * e.g. redis://localhost:6379, file://./data.json, memory://, https://app.mediar.ai/api/kv

## packages\computeruse\packages\kv\src\adapters\memory.ts
packages\computeruse\packages\kv\src\adapters\memory.ts:3 - export class MemoryKV implements KVClient {

## packages\computeruse\packages\workflow\package-lock.json
packages\computeruse\packages\workflow\package-lock.json:3188 - "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",

## packages\computeruse\vagrant\README-VAGRANT.md
packages\computeruse\vagrant\README-VAGRANT.md:122 - vb.memory = 8192  # 8GB RAM

## packages\docs\docs.json
packages\docs\docs.json:322 - "group": "MEMORY",

## packages\docs\README.md
packages\docs\README.md:3 - Welcome to the official documentation repository for [elizaOS](https://github.com/elizaos/elizaos) - a powerful framework for building AI agents with memory, planning, and tool use capabilities.

## packages\interop\README.md
packages\interop\README.md:177 - "memory": { ... },
packages\interop\README.md:204 - "memory": { ... },
packages\interop\README.md:296 - Ephemeral in-memory database adapter with vector search:
packages\interop\README.md:414 - - **IPC (subprocess stdin/stdout)**: isolates memory space, but **does not prevent exfiltration** (plugins can still perform network/file I/O unless the operator constrains the process).
packages\interop\README.md:415 - - **WASM**: provides isolation from host memory, but security depends on the host runtime imports and resource limits. It is not an automatic “secure enclave.”
packages\interop\README.md:420 - - Supports `maxPendingRequests`, `maxMessageBytes`, and `maxBufferBytes` to prevent unbounded memory growth from malformed or hostile plugin output.

## packages\interop\examples\py_loads_all.py
packages\interop\examples\py_loads_all.py:26 - from elizaos.types.memory import Memory
packages\interop\examples\py_loads_all.py:63 - mock_memory = {
packages\interop\examples\py_loads_all.py:74 - result = await action.handler(None, mock_memory, mock_state, {})
packages\interop\examples\py_loads_all.py:113 - mock_memory = {
packages\interop\examples\py_loads_all.py:120 - result = await action.handler(None, mock_memory, mock_state, {})
packages\interop\examples\py_loads_all.py:158 - mock_memory = {
packages\interop\examples\py_loads_all.py:165 - result = await action.handler(None, mock_memory, mock_state, {})

## packages\interop\examples\README.md
packages\interop\examples\README.md:51 - const result = await plugin.actions[0].handler(runtime, memory, state, {});
packages\interop\examples\README.md:84 - result = await plugin.actions[0].handler(runtime, memory, state, {})
packages\interop\examples\README.md:96 - let result = plugin.invoke_action("generate-response", &memory, &state, &options)?;
packages\interop\examples\README.md:108 - let result = plugin.invoke_action("generate-response", &memory, &state, &options)?;
packages\interop\examples\README.md:139 - async def my_handler(runtime, memory, state, options):
packages\interop\examples\README.md:173 - handler: async (runtime, memory, state, options) => {
packages\interop\examples\README.md:194 - "memory": { "content": { "text": "Hello" } },

## packages\interop\examples\rust_loads_all.rs
packages\interop\examples\rust_loads_all.rs:153 - memory: &serde_json::Value,
packages\interop\examples\rust_loads_all.rs:161 - "memory": memory,
packages\interop\examples\rust_loads_all.rs:225 - let memory = serde_json::json!({
packages\interop\examples\rust_loads_all.rs:268 - let memory = serde_json::json!({
packages\interop\examples\rust_loads_all.rs:313 - let memory = serde_json::json!({

## packages\interop\examples\ts-loads-all.ts
packages\interop\examples\ts-loads-all.ts:15 - import type { Memory, State } from "@elizaos/core";
packages\interop\examples\ts-loads-all.ts:45 - const mockMemory: Memory = {
packages\interop\examples\ts-loads-all.ts:95 - const mockMemory: Memory = {

## packages\interop\python\bridge_server.py
packages\interop\python\bridge_server.py:23 - from elizaos.types.memory import Memory
packages\interop\python\bridge_server.py:189 - memory = self._parse_memory(request.get("memory"))
packages\interop\python\bridge_server.py:193 - valid = await action.validate(None, memory, state)  # type: ignore
packages\interop\python\bridge_server.py:206 - memory = self._parse_memory(request.get("memory"))
packages\interop\python\bridge_server.py:236 - memory = self._parse_memory(request.get("memory"))
packages\interop\python\bridge_server.py:239 - result = await provider.get(None, memory, state)  # type: ignore
packages\interop\python\bridge_server.py:257 - memory = self._parse_memory(request.get("memory"))
packages\interop\python\bridge_server.py:410 - def _parse_memory(self, data: dict[str, Any] | None) -> Memory:
packages\interop\python\bridge_server.py:411 - """Parse memory from JSON."""
packages\interop\python\bridge_server.py:413 - return Memory()  # type: ignore
packages\interop\python\bridge_server.py:415 - return Memory(**data)  # type: ignore

## packages\interop\python\rust_ffi.py
packages\interop\python\rust_ffi.py:17 - from elizaos.types.memory import Memory
packages\interop\python\rust_ffi.py:56 - - elizaos_validate_action(name: *const c_char, memory: *const c_char, state: *const c_char) -> c_int
packages\interop\python\rust_ffi.py:57 - - elizaos_invoke_action(name: *const c_char, memory: *const c_char, state: *const c_char, options: *const c_char) -> *const c_char
packages\interop\python\rust_ffi.py:58 - - elizaos_get_provider(name: *const c_char, memory: *const c_char, state: *const c_char) -> *const c_char
packages\interop\python\rust_ffi.py:59 - - elizaos_validate_evaluator(name: *const c_char, memory: *const c_char, state: *const c_char) -> c_int
packages\interop\python\rust_ffi.py:60 - - elizaos_invoke_evaluator(name: *const c_char, memory: *const c_char, state: *const c_char) -> *const c_char
packages\interop\python\rust_ffi.py:169 - def validate_action(self, name: str, memory: Memory, state: State | None) -> bool:
packages\interop\python\rust_ffi.py:171 - memory_json = json.dumps(memory.model_dump() if hasattr(memory, "model_dump") else memory)
packages\interop\python\rust_ffi.py:184 - self, name: str, memory: Memory, state: State | None, options: dict[str, Any] | None
packages\interop\python\rust_ffi.py:187 - memory_json = json.dumps(memory.model_dump() if hasattr(memory, "model_dump") else memory)
packages\interop\python\rust_ffi.py:206 - def get_provider(self, name: str, memory: Memory, state: State) -> ProviderResult:
packages\interop\python\rust_ffi.py:208 - memory_json = json.dumps(memory.model_dump() if hasattr(memory, "model_dump") else memory)
packages\interop\python\rust_ffi.py:223 - def validate_evaluator(self, name: str, memory: Memory, state: State | None) -> bool:
packages\interop\python\rust_ffi.py:225 - memory_json = json.dumps(memory.model_dump() if hasattr(memory, "model_dump") else memory)
packages\interop\python\rust_ffi.py:237 - def invoke_evaluator(self, name: str, memory: Memory, state: State | None) -> ActionResult | None:
packages\interop\python\rust_ffi.py:239 - memory_json = json.dumps(memory.model_dump() if hasattr(memory, "model_dump") else memory)
packages\interop\python\rust_ffi.py:276 - async def validate(runtime: Any, message: Memory, state: State | None) -> bool:
packages\interop\python\rust_ffi.py:284 - message: Memory,
packages\interop\python\rust_ffi.py:316 - async def get(runtime: Any, message: Memory, state: State) -> ProviderResult:
packages\interop\python\rust_ffi.py:340 - async def validate(runtime: Any, message: Memory, state: State | None) -> bool:
... and 1 more

## packages\interop\python\ts_bridge.py
packages\interop\python\ts_bridge.py:18 - from elizaos.types.memory import Memory
packages\interop\python\ts_bridge.py:286 - async def validate(runtime: Any, message: Memory, state: State | None) -> bool:
packages\interop\python\ts_bridge.py:290 - "memory": message.model_dump() if hasattr(message, "model_dump") else message,
packages\interop\python\ts_bridge.py:301 - message: Memory,
packages\interop\python\ts_bridge.py:310 - "memory": message.model_dump() if hasattr(message, "model_dump") else message,
packages\interop\python\ts_bridge.py:339 - async def get(runtime: Any, message: Memory, state: State) -> ProviderResult:
packages\interop\python\ts_bridge.py:343 - "memory": message.model_dump() if hasattr(message, "model_dump") else message,
packages\interop\python\ts_bridge.py:369 - async def validate(runtime: Any, message: Memory, state: State | None) -> bool:
packages\interop\python\ts_bridge.py:373 - "memory": message.model_dump() if hasattr(message, "model_dump") else message,
packages\interop\python\ts_bridge.py:384 - message: Memory,
packages\interop\python\ts_bridge.py:393 - "memory": message.model_dump() if hasattr(message, "model_dump") else message,

## packages\interop\python\wasm_loader.py
packages\interop\python\wasm_loader.py:23 - from elizaos.types.memory import Memory
packages\interop\python\wasm_loader.py:61 - max_memory_bytes: int | None = None,
packages\interop\python\wasm_loader.py:92 - self.max_memory_bytes = max_memory_bytes
packages\interop\python\wasm_loader.py:124 - data = self._read_memory(ptr, len_)
packages\interop\python\wasm_loader.py:129 - data = self._read_memory(ptr, len_)
packages\interop\python\wasm_loader.py:144 - memory_export = self.instance.exports(self.store).get("memory")
packages\interop\python\wasm_loader.py:145 - if memory_export is None:
packages\interop\python\wasm_loader.py:147 - self.memory = memory_export
packages\interop\python\wasm_loader.py:149 - if self.max_memory_bytes is not None:
packages\interop\python\wasm_loader.py:150 - mem_data = self.memory.data_ptr(self.store)
packages\interop\python\wasm_loader.py:151 - if len(mem_data) > self.max_memory_bytes:
packages\interop\python\wasm_loader.py:156 - def _read_memory(self, ptr: int, length: int) -> bytes:
packages\interop\python\wasm_loader.py:157 - """Read bytes from WASM memory."""
packages\interop\python\wasm_loader.py:158 - data = self.memory.data_ptr(self.store)
packages\interop\python\wasm_loader.py:161 - def _write_memory(self, ptr: int, data: bytes) -> None:
packages\interop\python\wasm_loader.py:163 - mem_data = self.memory.data_ptr(self.store)
packages\interop\python\wasm_loader.py:168 - """Read a null-terminated string from WASM memory."""
packages\interop\python\wasm_loader.py:169 - mem_data = self.memory.data_ptr(self.store)
packages\interop\python\wasm_loader.py:249 - def validate_action(self, name: str, memory: Memory, state: State | None) -> bool:
packages\interop\python\wasm_loader.py:251 - result = self._call_validate("validate_action", name, memory, state)
... and 20 more

## packages\interop\python\tests\test_bridge_server.py
packages\interop\python\tests\test_bridge_server.py:38 - "memory": {"content": {"text": "Hello"}},
packages\interop\python\tests\test_bridge_server.py:48 - assert parsed["memory"]["content"]["text"] == "Hello"
packages\interop\python\tests\test_bridge_server.py:56 - "memory": {"content": {"text": "Test"}},
packages\interop\python\tests\test_bridge_server.py:72 - "memory": {"content": {}},
packages\interop\python\tests\test_bridge_server.py:389 - async def mock_handler(memory, state, options):
packages\interop\python\tests\test_bridge_server.py:403 - async def mock_get(memory, state):

## packages\interop\python\tests\test_interop.py
packages\interop\python\tests\test_interop.py:41 - def test_memory_structure(self) -> None:
packages\interop\python\tests\test_interop.py:43 - memory = {
packages\interop\python\tests\test_interop.py:137 - "memory": {
packages\interop\python\tests\test_interop.py:175 - "memory": {"id": "mem-1", "content": {"text": "test"}},

## packages\interop\python\tests\test_rust_ffi.py
packages\interop\python\tests\test_rust_ffi.py:86 - def test_memory_serialization(self):
packages\interop\python\tests\test_rust_ffi.py:88 - memory = {
packages\interop\python\tests\test_rust_ffi.py:95 - json_str = json.dumps(memory)
packages\interop\python\tests\test_rust_ffi.py:98 - assert parsed["id"] == memory["id"]
packages\interop\python\tests\test_rust_ffi.py:143 - memory_json = json.dumps({"content": {"text": "Hello"}})
packages\interop\python\tests\test_rust_ffi.py:155 - _memory_json = json.dumps({"content": {"text": "Hello"}})
packages\interop\python\tests\test_rust_ffi.py:169 - _memory_json = json.dumps({"content": {}})

## packages\interop\python\tests\test_rust_ffi_loader.py
packages\interop\python\tests\test_rust_ffi_loader.py:25 - def validate_action(self, name: str, memory: object, state: object) -> bool:
packages\interop\python\tests\test_rust_ffi_loader.py:28 - def invoke_action(self, name: str, memory: object, state: object, options: object) -> object:
packages\interop\python\tests\test_rust_ffi_loader.py:31 - def get_provider(self, name: str, memory: object, state: object) -> object:
packages\interop\python\tests\test_rust_ffi_loader.py:34 - def validate_evaluator(self, name: str, memory: object, state: object) -> bool:
packages\interop\python\tests\test_rust_ffi_loader.py:37 - def invoke_evaluator(self, name: str, memory: object, state: object) -> object:

## packages\interop\rust\ffi_exports.rs
packages\interop\rust\ffi_exports.rs:35 - fn validate_action(&self, name: &str, memory_json: &str, state_json: &str) -> bool;
packages\interop\rust\ffi_exports.rs:41 - memory_json: &str,
packages\interop\rust\ffi_exports.rs:47 - fn get_provider(&self, name: &str, memory_json: &str, state_json: &str) -> String;
packages\interop\rust\ffi_exports.rs:50 - fn validate_evaluator(&self, name: &str, memory_json: &str, state_json: &str) -> bool;
packages\interop\rust\ffi_exports.rs:53 - fn invoke_evaluator(&self, name: &str, memory_json: &str, state_json: &str) -> String;
packages\interop\rust\ffi_exports.rs:128 - memory_json: *const c_char,
packages\interop\rust\ffi_exports.rs:135 - let memory = cstr_to_string(memory_json).unwrap_or_else(|| "null".to_string());
packages\interop\rust\ffi_exports.rs:159 - memory_json: *const c_char,
packages\interop\rust\ffi_exports.rs:167 - let memory = cstr_to_string(memory_json).unwrap_or_else(|| "null".to_string());
packages\interop\rust\ffi_exports.rs:173 - Some(plugin) => string_to_cstr(plugin.invoke_action(&name, &memory, &state, &options)),
packages\interop\rust\ffi_exports.rs:186 - memory_json: *const c_char,
packages\interop\rust\ffi_exports.rs:193 - let memory = cstr_to_string(memory_json).unwrap_or_else(|| "null".to_string());
packages\interop\rust\ffi_exports.rs:198 - Some(plugin) => string_to_cstr(plugin.get_provider(&name, &memory, &state)),
packages\interop\rust\ffi_exports.rs:210 - memory_json: *const c_char,
packages\interop\rust\ffi_exports.rs:217 - let memory = cstr_to_string(memory_json).unwrap_or_else(|| "null".to_string());
packages\interop\rust\ffi_exports.rs:241 - memory_json: *const c_char,
packages\interop\rust\ffi_exports.rs:248 - let memory = cstr_to_string(memory_json).unwrap_or_else(|| "null".to_string());
packages\interop\rust\ffi_exports.rs:253 - Some(plugin) => string_to_cstr(plugin.invoke_evaluator(&name, &memory, &state)),
packages\interop\rust\ffi_exports.rs:324 - fn validate_action(&self, _name: &str, _memory: &str, _state: &str) -> bool {
packages\interop\rust\ffi_exports.rs:328 - fn invoke_action(&self, _name: &str, _memory: &str, _state: &str, _options: &str) -> String {
... and 3 more

## packages\interop\rust\py_loader.rs
packages\interop\rust\py_loader.rs:260 - memory: &serde_json::Value,
packages\interop\rust\py_loader.rs:265 - "memory": memory,
packages\interop\rust\py_loader.rs:284 - memory: &serde_json::Value,
packages\interop\rust\py_loader.rs:290 - "memory": memory,
packages\interop\rust\py_loader.rs:318 - memory: &serde_json::Value,
packages\interop\rust\py_loader.rs:323 - "memory": memory,
packages\interop\rust\py_loader.rs:343 - memory: &serde_json::Value,
packages\interop\rust\py_loader.rs:348 - "memory": memory,

## packages\interop\rust\ts_loader.rs
packages\interop\rust\ts_loader.rs:111 - memory: serde_json::Value,
packages\interop\rust\ts_loader.rs:118 - memory: serde_json::Value,
packages\interop\rust\ts_loader.rs:126 - memory: serde_json::Value,
packages\interop\rust\ts_loader.rs:133 - memory: serde_json::Value,
packages\interop\rust\ts_loader.rs:266 - res = { type: 'validate.result', id: req.id, valid: a ? await a.validate(null, req.memory, req.state) : false };
packages\interop\rust\ts_loader.rs:271 - const r = await act.handler(null, req.memory, req.state, req.options);
packages\interop\rust\ts_loader.rs:276 - res = { type: 'provider.result', id: req.id, result: prov ? await prov.get(null, req.memory, req.state) : {} };
packages\interop\rust\ts_loader.rs:281 - const er = await ev.handler(null, req.memory, req.state);
packages\interop\rust\ts_loader.rs:342 - memory: &serde_json::Value,
packages\interop\rust\ts_loader.rs:349 - memory: memory.clone(),
packages\interop\rust\ts_loader.rs:364 - memory: &serde_json::Value,
packages\interop\rust\ts_loader.rs:372 - memory: memory.clone(),
packages\interop\rust\ts_loader.rs:388 - memory: &serde_json::Value,
packages\interop\rust\ts_loader.rs:395 - memory: memory.clone(),
packages\interop\rust\ts_loader.rs:410 - memory: &serde_json::Value,
packages\interop\rust\ts_loader.rs:417 - memory: memory.clone(),

## packages\interop\rust\wasm_plugin.rs
packages\interop\rust\wasm_plugin.rs:157 - fn validate_action(&self, name: &str, memory_json: &str, state_json: &str) -> bool;
packages\interop\rust\wasm_plugin.rs:163 - memory_json: &str,
packages\interop\rust\wasm_plugin.rs:169 - fn get_provider(&self, name: &str, memory_json: &str, state_json: &str) -> ProviderResult;
packages\interop\rust\wasm_plugin.rs:172 - fn validate_evaluator(&self, name: &str, memory_json: &str, state_json: &str) -> bool;
packages\interop\rust\wasm_plugin.rs:178 - memory_json: &str,
packages\interop\rust\wasm_plugin.rs:219 - pub fn validate_action(name: &str, memory_json: &str, state_json: &str) -> bool {
packages\interop\rust\wasm_plugin.rs:222 - Some(plugin) => plugin.validate_action(name, memory_json, state_json),
packages\interop\rust\wasm_plugin.rs:231 - memory_json: &str,
packages\interop\rust\wasm_plugin.rs:238 - let result = plugin.invoke_action(name, memory_json, state_json, options_json);
packages\interop\rust\wasm_plugin.rs:249 - pub fn get_provider(name: &str, memory_json: &str, state_json: &str) -> String {
packages\interop\rust\wasm_plugin.rs:253 - let result = plugin.get_provider(name, memory_json, state_json);
packages\interop\rust\wasm_plugin.rs:264 - pub fn validate_evaluator(name: &str, memory_json: &str, state_json: &str) -> bool {
packages\interop\rust\wasm_plugin.rs:267 - Some(plugin) => plugin.validate_evaluator(name, memory_json, state_json),
packages\interop\rust\wasm_plugin.rs:274 - pub fn invoke_evaluator(name: &str, memory_json: &str, state_json: &str) -> String {
packages\interop\rust\wasm_plugin.rs:277 - Some(plugin) => match plugin.invoke_evaluator(name, memory_json, state_json) {

## packages\interop\typescript\python-bridge.ts
packages\interop\typescript\python-bridge.ts:403 - message: Memory,
packages\interop\typescript\python-bridge.ts:410 - memory: message,
packages\interop\typescript\python-bridge.ts:418 - message: Memory,
packages\interop\typescript\python-bridge.ts:427 - memory: message,
packages\interop\typescript\python-bridge.ts:453 - message: Memory,
packages\interop\typescript\python-bridge.ts:460 - memory: message,
packages\interop\typescript\python-bridge.ts:487 - message: Memory,
packages\interop\typescript\python-bridge.ts:494 - memory: message,
packages\interop\typescript\python-bridge.ts:502 - message: Memory,
packages\interop\typescript\python-bridge.ts:509 - memory: message,

## packages\interop\typescript\types.ts
packages\interop\typescript\types.ts:11 - import type { Content, Memory, State } from "@elizaos/core";
packages\interop\typescript\types.ts:136 - memory: Memory;
packages\interop\typescript\types.ts:166 - memory: Memory;
packages\interop\typescript\types.ts:184 - memory: Memory;
packages\interop\typescript\types.ts:211 - memory: Memory;
packages\interop\typescript\types.ts:331 - memory_json: string,
packages\interop\typescript\types.ts:338 - memory_json: string,
packages\interop\typescript\types.ts:346 - memory_json: string,
packages\interop\typescript\types.ts:353 - memory_json: string,
packages\interop\typescript\types.ts:360 - memory_json: string,
packages\interop\typescript\types.ts:375 - * WASM memory interface
packages\interop\typescript\types.ts:377 - export interface WasmMemory {
packages\interop\typescript\types.ts:386 - memory: WasmMemory;

## packages\interop\typescript\wasm-loader.ts
packages\interop\typescript\wasm-loader.ts:46 - maxMemoryBytes?: number;
packages\interop\typescript\wasm-loader.ts:172 - const memory = instance.exports.memory as WebAssembly.Memory;
packages\interop\typescript\wasm-loader.ts:174 - typeof options.maxMemoryBytes === "number" &&
packages\interop\typescript\wasm-loader.ts:185 - const bytes = new Uint8Array(memory.buffer, ptr, len);
packages\interop\typescript\wasm-loader.ts:192 - const bytes = new Uint8Array(memory.buffer, ptr, len);
packages\interop\typescript\wasm-loader.ts:204 - const view = new Uint8Array(memory.buffer, buf, len);
packages\interop\typescript\wasm-loader.ts:223 - memory_json: string,
packages\interop\typescript\wasm-loader.ts:228 - memory_json: string,
packages\interop\typescript\wasm-loader.ts:234 - memory_json: string,
packages\interop\typescript\wasm-loader.ts:239 - memory_json: string,
packages\interop\typescript\wasm-loader.ts:244 - memory_json: string,
packages\interop\typescript\wasm-loader.ts:258 - memory: { buffer: memory.buffer },
packages\interop\typescript\wasm-loader.ts:289 - const { exports, memory } = instance;
packages\interop\typescript\wasm-loader.ts:297 - const view = new Uint8Array(memory.buffer, ptr, bytes.length);
packages\interop\typescript\wasm-loader.ts:313 - const view = new Uint8Array(memory.buffer);
packages\interop\typescript\wasm-loader.ts:350 - message: Memory,
packages\interop\typescript\wasm-loader.ts:363 - message: Memory,
packages\interop\typescript\wasm-loader.ts:396 - message: Memory,
packages\interop\typescript\wasm-loader.ts:425 - message: Memory,
packages\interop\typescript\wasm-loader.ts:438 - message: Memory,

## packages\interop\typescript\__tests__\cross-language.test.ts
packages\interop\typescript\__tests__\cross-language.test.ts:76 - memory: {
packages\interop\typescript\__tests__\cross-language.test.ts:149 - it("should have consistent Memory structure", () => {
packages\interop\typescript\__tests__\cross-language.test.ts:150 - const memory = {

## packages\interop\typescript\__tests__\python-bridge.test.ts
packages\interop\typescript\__tests__\python-bridge.test.ts:5 - import type { Memory, State, UUID } from "@elizaos/core";
packages\interop\typescript\__tests__\python-bridge.test.ts:20 - const memory: Memory = {
packages\interop\typescript\__tests__\python-bridge.test.ts:49 - const memory: Memory = {
packages\interop\typescript\__tests__\python-bridge.test.ts:70 - const memory: Memory = {
packages\interop\typescript\__tests__\python-bridge.test.ts:402 - test("should handle nested objects in memory", () => {
packages\interop\typescript\__tests__\python-bridge.test.ts:403 - const memory: Memory = {
packages\interop\typescript\__tests__\python-bridge.test.ts:441 - memory: {
packages\interop\typescript\__tests__\python-bridge.test.ts:462 - memory: { content: { text: largeData } },

## packages\interop\typescript\__tests__\types.test.ts
packages\interop\typescript\__tests__\types.test.ts:5 - import type { Memory, State, UUID } from "@elizaos/core";
packages\interop\typescript\__tests__\types.test.ts:124 - const memory: Memory = {
packages\interop\typescript\__tests__\types.test.ts:167 - const memory: Memory = {
packages\interop\typescript\__tests__\types.test.ts:206 - const memory: Memory = {

## packages\interop\typescript\__tests__\wasm-loader.test.ts
packages\interop\typescript\__tests__\wasm-loader.test.ts:107 - describe("Memory Serialization", () => {
packages\interop\typescript\__tests__\wasm-loader.test.ts:108 - test("should serialize memory objects for WASM", () => {
packages\interop\typescript\__tests__\wasm-loader.test.ts:109 - const memory = {
packages\interop\typescript\__tests__\wasm-loader.test.ts:122 - const json = JSON.stringify(memory);
packages\interop\typescript\__tests__\wasm-loader.test.ts:169 - validate_action: (_action: string, _memory: string, _state: string) =>
packages\interop\typescript\__tests__\wasm-loader.test.ts:173 - _memory: string,
packages\interop\typescript\__tests__\wasm-loader.test.ts:177 - get_provider: (_provider: string, _memory: string, _state: string) =>
packages\interop\typescript\__tests__\wasm-loader.test.ts:181 - _memory: string,
packages\interop\typescript\__tests__\wasm-loader.test.ts:186 - _memory: string,
packages\interop\typescript\__tests__\wasm-loader.test.ts:227 - validate_action: (action, memory, _state) => {
packages\interop\typescript\__tests__\wasm-loader.test.ts:228 - const memObj = JSON.parse(memory);
packages\interop\typescript\__tests__\wasm-loader.test.ts:235 - invoke_action: (action, memory, _state, _options) => {
packages\interop\typescript\__tests__\wasm-loader.test.ts:236 - const memObj = JSON.parse(memory);
packages\interop\typescript\__tests__\wasm-loader.test.ts:244 - const memory = JSON.stringify({ content: { text: "Hello" } });
packages\interop\typescript\__tests__\wasm-loader.test.ts:269 - get_provider: (provider, _memory, _state) => {

## packages\prompts\specs\evaluators\core.json
packages\prompts\specs\evaluators\core.json:33 - "outcome": "<response>\n  <thought>I'm engaging appropriately with a new community member, maintaining a welcoming and professional tone. My questions are helping to learn more about John and make him feel welcome.</thought>\n  <facts>\n    <fact>\n      <claim>John is new to the community</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n    <fact>\n      <claim>John found the community through a friend interested in AI</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n  </facts>\n  <relationships>\n    <relationship>\n      <sourceEntityId>sarah-agent</sourceEntityId>\n      <targetEntityId>user-123</targetEntityId>\n      <tags>group_interaction</tags>\n    </relationship>\n  </relationships>\n</response>"
packages\prompts\specs\evaluators\core.json:93 - "outcome": "<response>\n  <thought>I'm dominating the conversation and not giving others a chance to share their perspectives. I've sent multiple messages in a row without waiting for responses. I need to step back and create space for other members to participate.</thought>\n  <facts>\n    <fact>\n      <claim>The discussion is about chapter 5 of a book</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n    <fact>\n      <claim>Max has sent 4 consecutive messages without user responses</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n  </facts>\n  <relationships>\n    <relationship>\n      <sourceEntityId>max-agent</sourceEntityId>\n      <targetEntityId>user-789</targetEntityId>\n      <tags>group_interaction,excessive_interaction</tags>\n    </relationship>\n  </relationships>\n</response>"
packages\prompts\specs\evaluators\core.json:123 - "name": "MEMORY_SUMMARIZATION",
packages\prompts\specs\evaluators\core.json:134 - "name": "LONG_TERM_MEMORY_EXTRACTION",
packages\prompts\specs\evaluators\core.json:136 - "similes": ["MEMORY_EXTRACTION", "FACT_LEARNING", "USER_PROFILING"],

## packages\prompts\specs\providers\core.json
packages\prompts\specs\providers\core.json:108 - "name": "LONG_TERM_MEMORY",

## packages\python\README.md
packages\python\README.md:57 - from elizaos import Character, ChannelType, Content, Memory
packages\python\README.md:60 - from elizaos_plugin_inmemorydb import plugin as inmemorydb_plugin
packages\python\README.md:92 - message = Memory(

## packages\python\elizaos\prompts.py
packages\python\elizaos\prompts.py:656 - LONG_TERM_EXTRACTION_TEMPLATE = """# Task: Extract Long-Term Memory (Strict Criteria)

## packages\python\elizaos\runtime.py
packages\python\elizaos\runtime.py:26 - from elizaos.types.memory import Memory
packages\python\elizaos\runtime.py:252 - if getattr(self._character, "advanced_memory", None) is True:
packages\python\elizaos\runtime.py:253 - has_adv = any(p.name == "memory" for p in self._initial_plugins)
packages\python\elizaos\runtime.py:255 - from elizaos.advanced_memory import advanced_memory_plugin
packages\python\elizaos\runtime.py:706 - message: Memory,
packages\python\elizaos\runtime.py:707 - responses: list[Memory],
packages\python\elizaos\runtime.py:875 - message: Memory,
packages\python\elizaos\runtime.py:879 - responses: list[Memory] | None = None,
packages\python\elizaos\runtime.py:967 - message: Memory,
packages\python\elizaos\runtime.py:1363 - async def add_embedding_to_memory(self, memory: Memory) -> Memory:
packages\python\elizaos\runtime.py:1366 - async def queue_embedding_generation(self, memory: Memory, priority: str = "normal") -> None:
packages\python\elizaos\runtime.py:1369 - {"runtime": self, "memory": memory, "priority": priority, "source": "runtime"},
packages\python\elizaos\runtime.py:1372 - async def get_all_memories(self) -> list[Memory]:
packages\python\elizaos\runtime.py:1379 - async def clear_all_agent_memories(self) -> None:
packages\python\elizaos\runtime.py:1550 - async def get_memories(
packages\python\elizaos\runtime.py:1588 - async def get_memory_by_id(self, id: UUID) -> Any | None:
packages\python\elizaos\runtime.py:1593 - async def get_memories_by_ids(
packages\python\elizaos\runtime.py:1600 - async def get_memories_by_room_ids(self, params: dict[str, Any]) -> list[Any]:
packages\python\elizaos\runtime.py:1628 - async def search_memories(self, params: dict[str, Any]) -> list[Any]:
packages\python\elizaos\runtime.py:1633 - async def create_memory(
... and 7 more

## packages\python\elizaos\streaming_context.py
packages\python\elizaos\streaming_context.py:60 - async def handle_request(message: Memory) -> None:
packages\python\elizaos\streaming_context.py:93 - async def handle_request(message: Memory) -> None:

## packages\python\elizaos\__init__.py
packages\python\elizaos\__init__.py:144 - "Memory": Memory,

## packages\python\elizaos\advanced_capabilities\actions\add_contact.py
packages\python\elizaos\advanced_capabilities\actions\add_contact.py:43 - self, runtime: IAgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\add_contact.py:51 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\add_contact.py:55 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\actions\follow_room.py
packages\python\elizaos\advanced_capabilities\actions\follow_room.py:9 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\actions\follow_room.py:29 - self, runtime: IAgentRuntime, message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\follow_room.py:52 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\follow_room.py:56 - responses: list[Memory] | None = None,
packages\python\elizaos\advanced_capabilities\actions\follow_room.py:97 - memory_type="action",

## packages\python\elizaos\advanced_capabilities\actions\image_generation.py
packages\python\elizaos\advanced_capabilities\actions\image_generation.py:12 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\actions\image_generation.py:58 - self, runtime: IAgentRuntime, message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\image_generation.py:65 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\image_generation.py:69 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\actions\mute_room.py
packages\python\elizaos\advanced_capabilities\actions\mute_room.py:10 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\actions\mute_room.py:56 - self, runtime: IAgentRuntime, message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\mute_room.py:79 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\mute_room.py:83 - responses: list[Memory] | None = None,
packages\python\elizaos\advanced_capabilities\actions\mute_room.py:124 - memory_type="action",

## packages\python\elizaos\advanced_capabilities\actions\remove_contact.py
packages\python\elizaos\advanced_capabilities\actions\remove_contact.py:43 - self, runtime: IAgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\remove_contact.py:51 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\remove_contact.py:55 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\actions\roles.py
packages\python\elizaos\advanced_capabilities\actions\roles.py:14 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\actions\roles.py:68 - self, runtime: IAgentRuntime, message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\roles.py:90 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\roles.py:94 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\actions\schedule_follow_up.py
packages\python\elizaos\advanced_capabilities\actions\schedule_follow_up.py:44 - self, runtime: IAgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\schedule_follow_up.py:53 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\schedule_follow_up.py:57 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\actions\search_contacts.py
packages\python\elizaos\advanced_capabilities\actions\search_contacts.py:43 - self, runtime: IAgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\search_contacts.py:51 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\search_contacts.py:55 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\actions\send_message.py
packages\python\elizaos\advanced_capabilities\actions\send_message.py:10 - from elizaos.types.memory import Memory as MemoryType
packages\python\elizaos\advanced_capabilities\actions\send_message.py:14 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\actions\send_message.py:60 - self, runtime: IAgentRuntime, message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\send_message.py:69 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\send_message.py:73 - responses: list[Memory] | None = None,
packages\python\elizaos\advanced_capabilities\actions\send_message.py:158 - memory_type="message",

## packages\python\elizaos\advanced_capabilities\actions\settings.py
packages\python\elizaos\advanced_capabilities\actions\settings.py:13 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\actions\settings.py:37 - self, runtime: IAgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\settings.py:44 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\settings.py:48 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\actions\unfollow_room.py
packages\python\elizaos\advanced_capabilities\actions\unfollow_room.py:10 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\actions\unfollow_room.py:56 - self, runtime: IAgentRuntime, message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\unfollow_room.py:79 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\unfollow_room.py:83 - responses: list[Memory] | None = None,
packages\python\elizaos\advanced_capabilities\actions\unfollow_room.py:124 - memory_type="action",

## packages\python\elizaos\advanced_capabilities\actions\unmute_room.py
packages\python\elizaos\advanced_capabilities\actions\unmute_room.py:10 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\actions\unmute_room.py:56 - self, runtime: IAgentRuntime, message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\unmute_room.py:79 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\unmute_room.py:83 - responses: list[Memory] | None = None,
packages\python\elizaos\advanced_capabilities\actions\unmute_room.py:124 - memory_type="action",

## packages\python\elizaos\advanced_capabilities\actions\update_contact.py
packages\python\elizaos\advanced_capabilities\actions\update_contact.py:43 - self, runtime: IAgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\update_contact.py:51 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\update_contact.py:55 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\actions\update_entity.py
packages\python\elizaos\advanced_capabilities\actions\update_entity.py:14 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\actions\update_entity.py:32 - self, runtime: IAgentRuntime, message: Memory, _state: State | None = None
packages\python\elizaos\advanced_capabilities\actions\update_entity.py:39 - message: Memory,
packages\python\elizaos\advanced_capabilities\actions\update_entity.py:43 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\evaluators\reflection.py
packages\python\elizaos\advanced_capabilities\evaluators\reflection.py:12 - from elizaos.types import Content, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\evaluators\reflection.py:20 - message: Memory,
packages\python\elizaos\advanced_capabilities\evaluators\reflection.py:104 - message: Memory,
packages\python\elizaos\advanced_capabilities\evaluators\reflection.py:112 - message: Memory,
packages\python\elizaos\advanced_capabilities\evaluators\reflection.py:115 - callback: Callable[[Content], Awaitable[list[Memory]]] | None = None,
packages\python\elizaos\advanced_capabilities\evaluators\reflection.py:116 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\evaluators\relationship_extraction.py
packages\python\elizaos\advanced_capabilities\evaluators\relationship_extraction.py:11 - from elizaos.types import Content, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\evaluators\relationship_extraction.py:120 - message: Memory,
packages\python\elizaos\advanced_capabilities\evaluators\relationship_extraction.py:173 - message: Memory,
packages\python\elizaos\advanced_capabilities\evaluators\relationship_extraction.py:181 - message: Memory,
packages\python\elizaos\advanced_capabilities\evaluators\relationship_extraction.py:184 - callback: Callable[[Content], Awaitable[list[Memory]]] | None = None,
packages\python\elizaos\advanced_capabilities\evaluators\relationship_extraction.py:185 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_capabilities\providers\agent_settings.py
packages\python\elizaos\advanced_capabilities\providers\agent_settings.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\providers\agent_settings.py:24 - message: Memory,

## packages\python\elizaos\advanced_capabilities\providers\contacts.py
packages\python\elizaos\advanced_capabilities\providers\contacts.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\providers\contacts.py:14 - message: Memory,

## packages\python\elizaos\advanced_capabilities\providers\facts.py
packages\python\elizaos\advanced_capabilities\providers\facts.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\providers\facts.py:13 - message: Memory,
packages\python\elizaos\advanced_capabilities\providers\facts.py:25 - memory_type="fact",
packages\python\elizaos\advanced_capabilities\providers\facts.py:47 - memory_type="fact",

## packages\python\elizaos\advanced_capabilities\providers\follow_ups.py
packages\python\elizaos\advanced_capabilities\providers\follow_ups.py:10 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\providers\follow_ups.py:15 - message: Memory,

## packages\python\elizaos\advanced_capabilities\providers\knowledge.py
packages\python\elizaos\advanced_capabilities\providers\knowledge.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\providers\knowledge.py:13 - message: Memory,

## packages\python\elizaos\advanced_capabilities\providers\relationships.py
packages\python\elizaos\advanced_capabilities\providers\relationships.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\providers\relationships.py:26 - message: Memory,

## packages\python\elizaos\advanced_capabilities\providers\roles.py
packages\python\elizaos\advanced_capabilities\providers\roles.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\providers\roles.py:18 - message: Memory,

## packages\python\elizaos\advanced_capabilities\providers\settings.py
packages\python\elizaos\advanced_capabilities\providers\settings.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\advanced_capabilities\providers\settings.py:14 - message: Memory,

## packages\python\elizaos\advanced_memory\evaluators.py
packages\python\elizaos\advanced_memory\evaluators.py:9 - svc = runtime.get_service("memory")
packages\python\elizaos\advanced_memory\evaluators.py:26 - svc = runtime.get_service("memory")
packages\python\elizaos\advanced_memory\evaluators.py:47 - svc = runtime.get_service("memory")
packages\python\elizaos\advanced_memory\evaluators.py:60 - svc = runtime.get_service("memory")
packages\python\elizaos\advanced_memory\evaluators.py:80 - name="MEMORY_SUMMARIZATION",
packages\python\elizaos\advanced_memory\evaluators.py:83 - similes=["CONVERSATION_SUMMARY", "CONTEXT_COMPRESSION", "MEMORY_OPTIMIZATION"],
packages\python\elizaos\advanced_memory\evaluators.py:90 - name="LONG_TERM_MEMORY_EXTRACTION",
packages\python\elizaos\advanced_memory\evaluators.py:93 - similes=["MEMORY_EXTRACTION", "FACT_LEARNING", "USER_PROFILING"],

## packages\python\elizaos\advanced_memory\memory_service.py
packages\python\elizaos\advanced_memory\memory_service.py:28 - _TABLE_LONG_TERM_MEMORY = "long_term_memory"
packages\python\elizaos\advanced_memory\memory_service.py:29 - _GLOBAL_LONG_TERM_ROOM_ID = string_to_uuid("advanced-memory:long-term")
packages\python\elizaos\advanced_memory\memory_service.py:45 - def _parse_memory_extraction_xml(xml: str) -> list[MemoryExtraction]:
packages\python\elizaos\advanced_memory\memory_service.py:53 - out: list[MemoryExtraction] = []
packages\python\elizaos\advanced_memory\memory_service.py:60 - category = LongTermMemoryCategory(category_str)
packages\python\elizaos\advanced_memory\memory_service.py:68 - out.append(MemoryExtraction(category=category, content=content, confidence=confidence))
packages\python\elizaos\advanced_memory\memory_service.py:72 - def _top_k_by_confidence(items: list[LongTermMemory], limit: int) -> list[LongTermMemory]:
packages\python\elizaos\advanced_memory\memory_service.py:80 - class MemoryService(Service):
packages\python\elizaos\advanced_memory\memory_service.py:81 - service_type = "memory"
packages\python\elizaos\advanced_memory\memory_service.py:90 - self._config: MemoryConfig = MemoryConfig()
packages\python\elizaos\advanced_memory\memory_service.py:93 - self._long_term: dict[str, list[LongTermMemory]] = {}
packages\python\elizaos\advanced_memory\memory_service.py:105 - if (v := settings.get("MEMORY_SUMMARIZATION_THRESHOLD")) is not None and isinstance(
packages\python\elizaos\advanced_memory\memory_service.py:109 - if (v := settings.get("MEMORY_RETAIN_RECENT")) is not None and isinstance(
packages\python\elizaos\advanced_memory\memory_service.py:113 - if (v := settings.get("MEMORY_SUMMARIZATION_INTERVAL")) is not None and isinstance(
packages\python\elizaos\advanced_memory\memory_service.py:117 - if (v := settings.get("MEMORY_MAX_NEW_MESSAGES")) is not None and isinstance(
packages\python\elizaos\advanced_memory\memory_service.py:121 - if (v := settings.get("MEMORY_LONG_TERM_ENABLED")) is not None:
packages\python\elizaos\advanced_memory\memory_service.py:126 - if (v := settings.get("MEMORY_CONFIDENCE_THRESHOLD")) is not None and isinstance(
packages\python\elizaos\advanced_memory\memory_service.py:130 - if (v := settings.get("MEMORY_EXTRACTION_THRESHOLD")) is not None and isinstance(
packages\python\elizaos\advanced_memory\memory_service.py:134 - if (v := settings.get("MEMORY_EXTRACTION_INTERVAL")) is not None and isinstance(
packages\python\elizaos\advanced_memory\memory_service.py:139 - runtime.logger.info("MemoryService started successfully", src="service:memory")
... and 20 more

## packages\python\elizaos\advanced_memory\plugin.py
packages\python\elizaos\advanced_memory\plugin.py:6 - from .memory_service import MemoryService
packages\python\elizaos\advanced_memory\plugin.py:7 - from .providers import context_summary_provider, long_term_memory_provider
packages\python\elizaos\advanced_memory\plugin.py:10 - def create_advanced_memory_plugin() -> Plugin:
packages\python\elizaos\advanced_memory\plugin.py:14 - src="plugin:advanced-memory",
packages\python\elizaos\advanced_memory\plugin.py:19 - name="memory",
packages\python\elizaos\advanced_memory\plugin.py:20 - description="Built-in advanced memory (summaries + long-term facts)",
packages\python\elizaos\advanced_memory\plugin.py:23 - services=[MemoryService],
packages\python\elizaos\advanced_memory\plugin.py:25 - providers=[long_term_memory_provider, context_summary_provider],
packages\python\elizaos\advanced_memory\plugin.py:30 - advanced_memory_plugin = create_advanced_memory_plugin()

## packages\python\elizaos\advanced_memory\providers.py
packages\python\elizaos\advanced_memory\providers.py:6 - async def long_term_memory_get(runtime, message, _state=None) -> ProviderResult:
packages\python\elizaos\advanced_memory\providers.py:7 - svc = runtime.get_service("memory")
packages\python\elizaos\advanced_memory\providers.py:9 - return ProviderResult(text="", values={"longTermMemories": ""}, data={"memoryCount": 0})
packages\python\elizaos\advanced_memory\providers.py:13 - return ProviderResult(text="", values={"longTermMemories": ""}, data={"memoryCount": 0})
packages\python\elizaos\advanced_memory\providers.py:17 - return ProviderResult(text="", values={"longTermMemories": ""}, data={"memoryCount": 0})
packages\python\elizaos\advanced_memory\providers.py:29 - values={"longTermMemories": text, "memoryCategories": category_list},
packages\python\elizaos\advanced_memory\providers.py:30 - data={"memoryCount": len(memories), "categories": category_list},
packages\python\elizaos\advanced_memory\providers.py:35 - svc = runtime.get_service("memory")
packages\python\elizaos\advanced_memory\providers.py:78 - long_term_memory_provider = Provider(
packages\python\elizaos\advanced_memory\providers.py:79 - name="LONG_TERM_MEMORY",
packages\python\elizaos\advanced_memory\providers.py:82 - get=long_term_memory_get,

## packages\python\elizaos\advanced_memory\test_advanced_memory.py
packages\python\elizaos\advanced_memory\test_advanced_memory.py:13 - from .memory_service import (
packages\python\elizaos\advanced_memory\test_advanced_memory.py:66 - # XML Parsing: Memory Extraction
packages\python\elizaos\advanced_memory\test_advanced_memory.py:70 - class TestParseMemoryExtractionXml:
packages\python\elizaos\advanced_memory\test_advanced_memory.py:90 - extractions = _parse_memory_extraction_xml(xml)
packages\python\elizaos\advanced_memory\test_advanced_memory.py:92 - assert extractions[0].category == LongTermMemoryCategory.SEMANTIC
packages\python\elizaos\advanced_memory\test_advanced_memory.py:95 - assert extractions[1].category == LongTermMemoryCategory.EPISODIC
packages\python\elizaos\advanced_memory\test_advanced_memory.py:96 - assert extractions[2].category == LongTermMemoryCategory.PROCEDURAL
packages\python\elizaos\advanced_memory\test_advanced_memory.py:112 - extractions = _parse_memory_extraction_xml(xml)
packages\python\elizaos\advanced_memory\test_advanced_memory.py:123 - extractions = _parse_memory_extraction_xml(xml)
packages\python\elizaos\advanced_memory\test_advanced_memory.py:127 - assert _parse_memory_extraction_xml("") == []
packages\python\elizaos\advanced_memory\test_advanced_memory.py:129 - def test_no_memories(self):
packages\python\elizaos\advanced_memory\test_advanced_memory.py:130 - assert _parse_memory_extraction_xml("The model didn't return structured data.") == []
packages\python\elizaos\advanced_memory\test_advanced_memory.py:147 - category=LongTermMemoryCategory.SEMANTIC,
packages\python\elizaos\advanced_memory\test_advanced_memory.py:155 - category=LongTermMemoryCategory.SEMANTIC,
packages\python\elizaos\advanced_memory\test_advanced_memory.py:163 - category=LongTermMemoryCategory.SEMANTIC,
packages\python\elizaos\advanced_memory\test_advanced_memory.py:181 - category=LongTermMemoryCategory.SEMANTIC,
packages\python\elizaos\advanced_memory\test_advanced_memory.py:199 - svc = MemoryService()
packages\python\elizaos\advanced_memory\test_advanced_memory.py:207 - svc = MemoryService()
packages\python\elizaos\advanced_memory\test_advanced_memory.py:214 - svc = MemoryService()
packages\python\elizaos\advanced_memory\test_advanced_memory.py:232 - svc = MemoryService()
... and 12 more

## packages\python\elizaos\advanced_memory\types.py
packages\python\elizaos\advanced_memory\types.py:8 - class LongTermMemoryCategory(str, Enum):
packages\python\elizaos\advanced_memory\types.py:15 - class MemoryConfig:
packages\python\elizaos\advanced_memory\types.py:30 - class LongTermMemory:
packages\python\elizaos\advanced_memory\types.py:34 - category: LongTermMemoryCategory
packages\python\elizaos\advanced_memory\types.py:62 - class MemoryExtraction:
packages\python\elizaos\advanced_memory\types.py:63 - category: LongTermMemoryCategory

## packages\python\elizaos\advanced_memory\__init__.py
packages\python\elizaos\advanced_memory\__init__.py:1 - from .plugin import advanced_memory_plugin, create_advanced_memory_plugin
packages\python\elizaos\advanced_memory\__init__.py:3 - __all__ = ["advanced_memory_plugin", "create_advanced_memory_plugin"]

## packages\python\elizaos\advanced_memory\actions\reset_session.py
packages\python\elizaos\advanced_memory\actions\reset_session.py:10 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_memory\actions\reset_session.py:25 - self, runtime: IAgentRuntime, message: Memory, state: State | None = None
packages\python\elizaos\advanced_memory\actions\reset_session.py:47 - message: Memory,
packages\python\elizaos\advanced_memory\actions\reset_session.py:51 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_memory\evaluators\reflection.py
packages\python\elizaos\advanced_memory\evaluators\reflection.py:12 - from elizaos.types import Content, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_memory\evaluators\reflection.py:20 - message: Memory,
packages\python\elizaos\advanced_memory\evaluators\reflection.py:104 - message: Memory,
packages\python\elizaos\advanced_memory\evaluators\reflection.py:112 - message: Memory,
packages\python\elizaos\advanced_memory\evaluators\reflection.py:115 - callback: Callable[[Content], Awaitable[list[Memory]]] | None = None,
packages\python\elizaos\advanced_memory\evaluators\reflection.py:116 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_memory\evaluators\relationship_extraction.py
packages\python\elizaos\advanced_memory\evaluators\relationship_extraction.py:11 - from elizaos.types import Content, IAgentRuntime, Memory, State
packages\python\elizaos\advanced_memory\evaluators\relationship_extraction.py:120 - message: Memory,
packages\python\elizaos\advanced_memory\evaluators\relationship_extraction.py:173 - message: Memory,
packages\python\elizaos\advanced_memory\evaluators\relationship_extraction.py:181 - message: Memory,
packages\python\elizaos\advanced_memory\evaluators\relationship_extraction.py:184 - callback: Callable[[Content], Awaitable[list[Memory]]] | None = None,
packages\python\elizaos\advanced_memory\evaluators\relationship_extraction.py:185 - responses: list[Memory] | None = None,

## packages\python\elizaos\advanced_planning\planning_service.py
packages\python\elizaos\advanced_planning\planning_service.py:14 - from elizaos.types.memory import Memory
packages\python\elizaos\advanced_planning\planning_service.py:74 - working_memory: dict[str, object]
packages\python\elizaos\advanced_planning\planning_service.py:107 - message: Memory,
packages\python\elizaos\advanced_planning\planning_service.py:171 - message: Memory | None,
packages\python\elizaos\advanced_planning\planning_service.py:372 - message: Memory | None = None,
packages\python\elizaos\advanced_planning\planning_service.py:452 - message: Memory,
packages\python\elizaos\advanced_planning\planning_service.py:457 - working_memory: dict[str, object] = {}
packages\python\elizaos\advanced_planning\planning_service.py:463 - state=execution_state, working_memory=working_memory, results=results
packages\python\elizaos\advanced_planning\planning_service.py:510 - message: Memory,
packages\python\elizaos\advanced_planning\planning_service.py:529 - message: Memory,
packages\python\elizaos\advanced_planning\planning_service.py:547 - message: Memory,
packages\python\elizaos\advanced_planning\planning_service.py:606 - message: Memory,
packages\python\elizaos\advanced_planning\planning_service.py:631 - options.context = {"workingMemory": execution.working_memory}  # type: ignore[attr-defined]

## packages\python\elizaos\advanced_planning\actions\schedule_follow_up.py
packages\python\elizaos\advanced_planning\actions\schedule_follow_up.py:79 - self, runtime: IAgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos\advanced_planning\actions\schedule_follow_up.py:88 - message: Memory,
packages\python\elizaos\advanced_planning\actions\schedule_follow_up.py:92 - responses: list[Memory] | None = None,

## packages\python\elizaos\basic_capabilities\actions\choice.py
packages\python\elizaos\basic_capabilities\actions\choice.py:13 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\actions\choice.py:31 - self, runtime: IAgentRuntime, message: Memory, _state: State | None = None
packages\python\elizaos\basic_capabilities\actions\choice.py:47 - message: Memory,
packages\python\elizaos\basic_capabilities\actions\choice.py:51 - responses: list[Memory] | None = None,

## packages\python\elizaos\basic_capabilities\actions\ignore.py
packages\python\elizaos\basic_capabilities\actions\ignore.py:11 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\actions\ignore.py:29 - self, runtime: IAgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos\basic_capabilities\actions\ignore.py:36 - message: Memory,
packages\python\elizaos\basic_capabilities\actions\ignore.py:40 - responses: list[Memory] | None = None,

## packages\python\elizaos\basic_capabilities\actions\none.py
packages\python\elizaos\basic_capabilities\actions\none.py:11 - from elizaos.types import HandlerCallback, HandlerOptions, IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\actions\none.py:24 - self, runtime: IAgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos\basic_capabilities\actions\none.py:31 - message: Memory,
packages\python\elizaos\basic_capabilities\actions\none.py:35 - responses: list[Memory] | None = None,

## packages\python\elizaos\basic_capabilities\actions\reply.py
packages\python\elizaos\basic_capabilities\actions\reply.py:37 - self, runtime: IAgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos\basic_capabilities\actions\reply.py:44 - message: Memory,
packages\python\elizaos\basic_capabilities\actions\reply.py:48 - responses: list[Memory] | None = None,

## packages\python\elizaos\basic_capabilities\providers\actions.py
packages\python\elizaos\basic_capabilities\providers\actions.py:79 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\action_state.py
packages\python\elizaos\basic_capabilities\providers\action_state.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\action_state.py:13 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\agent_settings.py
packages\python\elizaos\basic_capabilities\providers\agent_settings.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\agent_settings.py:27 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\attachments.py
packages\python\elizaos\basic_capabilities\providers\attachments.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\attachments.py:34 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\capabilities.py
packages\python\elizaos\basic_capabilities\providers\capabilities.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\capabilities.py:13 - message: Memory,
packages\python\elizaos\basic_capabilities\providers\capabilities.py:25 - if runtime.get_setting("ENABLE_MEMORY"):

## packages\python\elizaos\basic_capabilities\providers\character.py
packages\python\elizaos\basic_capabilities\providers\character.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\character.py:17 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\choice.py
packages\python\elizaos\basic_capabilities\providers\choice.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\choice.py:23 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\contacts.py
packages\python\elizaos\basic_capabilities\providers\contacts.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\contacts.py:17 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\context_bench.py
packages\python\elizaos\basic_capabilities\providers\context_bench.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\context_bench.py:13 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\current_time.py
packages\python\elizaos\basic_capabilities\providers\current_time.py:10 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\current_time.py:18 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\entities.py
packages\python\elizaos\basic_capabilities\providers\entities.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\entities.py:17 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\evaluators.py
packages\python\elizaos\basic_capabilities\providers\evaluators.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\evaluators.py:13 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\facts.py
packages\python\elizaos\basic_capabilities\providers\facts.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\facts.py:17 - message: Memory,
packages\python\elizaos\basic_capabilities\providers\facts.py:29 - memory_type="fact",
packages\python\elizaos\basic_capabilities\providers\facts.py:51 - memory_type="fact",

## packages\python\elizaos\basic_capabilities\providers\follow_ups.py
packages\python\elizaos\basic_capabilities\providers\follow_ups.py:10 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\follow_ups.py:18 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\knowledge.py
packages\python\elizaos\basic_capabilities\providers\knowledge.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\knowledge.py:17 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\providers_list.py
packages\python\elizaos\basic_capabilities\providers\providers_list.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\providers_list.py:13 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\recent_messages.py
packages\python\elizaos\basic_capabilities\providers\recent_messages.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\recent_messages.py:17 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\relationships.py
packages\python\elizaos\basic_capabilities\providers\relationships.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\relationships.py:30 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\roles.py
packages\python\elizaos\basic_capabilities\providers\roles.py:9 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\roles.py:21 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\settings.py
packages\python\elizaos\basic_capabilities\providers\settings.py:10 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\settings.py:18 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\time.py
packages\python\elizaos\basic_capabilities\providers\time.py:10 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\time.py:18 - message: Memory,

## packages\python\elizaos\basic_capabilities\providers\world.py
packages\python\elizaos\basic_capabilities\providers\world.py:8 - from elizaos.types import IAgentRuntime, Memory, State
packages\python\elizaos\basic_capabilities\providers\world.py:13 - message: Memory,

## packages\python\elizaos\generated\action_docs.py
packages\python\elizaos\generated\action_docs.py:2686 - "name": "LONG_TERM_MEMORY",
packages\python\elizaos\generated\action_docs.py:2816 - "name": "LONG_TERM_MEMORY",
packages\python\elizaos\generated\action_docs.py:2875 - "outcome": "<response>\\n  <thought>I'm engaging appropriately with a new community member, maintaining a welcoming and professional tone. My questions are helping to learn more about John and make him feel welcome.</thought>\\n  <facts>\\n    <fact>\\n      <claim>John is new to the community</claim>\\n      <type>fact</type>\\n      <in_bio>false</in_bio>\\n      <already_known>false</already_known>\\n    </fact>\\n    <fact>\\n      <claim>John found the community through a friend interested in AI</claim>\\n      <type>fact</type>\\n      <in_bio>false</in_bio>\\n      <already_known>false</already_known>\\n    </fact>\\n  </facts>\\n  <relationships>\\n    <relationship>\\n      <sourceEntityId>sarah-agent</sourceEntityId>\\n      <targetEntityId>user-123</targetEntityId>\\n      <tags>group_interaction</tags>\\n    </relationship>\\n  </relationships>\\n</response>"
packages\python\elizaos\generated\action_docs.py:2941 - "outcome": "<response>\\n  <thought>I'm dominating the conversation and not giving others a chance to share their perspectives. I've sent multiple messages in a row without waiting for responses. I need to step back and create space for other members to participate.</thought>\\n  <facts>\\n    <fact>\\n      <claim>The discussion is about chapter 5 of a book</claim>\\n      <type>fact</type>\\n      <in_bio>false</in_bio>\\n      <already_known>false</already_known>\\n    </fact>\\n    <fact>\\n      <claim>Max has sent 4 consecutive messages without user responses</claim>\\n      <type>fact</type>\\n      <in_bio>false</in_bio>\\n      <already_known>false</already_known>\\n    </fact>\\n  </facts>\\n  <relationships>\\n    <relationship>\\n      <sourceEntityId>max-agent</sourceEntityId>\\n      <targetEntityId>user-789</targetEntityId>\\n      <tags>group_interaction,excessive_interaction</tags>\\n    </relationship>\\n  </relationships>\\n</response>"
packages\python\elizaos\generated\action_docs.py:2971 - "name": "MEMORY_SUMMARIZATION",
packages\python\elizaos\generated\action_docs.py:2982 - "name": "LONG_TERM_MEMORY_EXTRACTION",
packages\python\elizaos\generated\action_docs.py:3030 - "outcome": "<response>\\n  <thought>I'm engaging appropriately with a new community member, maintaining a welcoming and professional tone. My questions are helping to learn more about John and make him feel welcome.</thought>\\n  <facts>\\n    <fact>\\n      <claim>John is new to the community</claim>\\n      <type>fact</type>\\n      <in_bio>false</in_bio>\\n      <already_known>false</already_known>\\n    </fact>\\n    <fact>\\n      <claim>John found the community through a friend interested in AI</claim>\\n      <type>fact</type>\\n      <in_bio>false</in_bio>\\n      <already_known>false</already_known>\\n    </fact>\\n  </facts>\\n  <relationships>\\n    <relationship>\\n      <sourceEntityId>sarah-agent</sourceEntityId>\\n      <targetEntityId>user-123</targetEntityId>\\n      <tags>group_interaction</tags>\\n    </relationship>\\n  </relationships>\\n</response>"
packages\python\elizaos\generated\action_docs.py:3096 - "outcome": "<response>\\n  <thought>I'm dominating the conversation and not giving others a chance to share their perspectives. I've sent multiple messages in a row without waiting for responses. I need to step back and create space for other members to participate.</thought>\\n  <facts>\\n    <fact>\\n      <claim>The discussion is about chapter 5 of a book</claim>\\n      <type>fact</type>\\n      <in_bio>false</in_bio>\\n      <already_known>false</already_known>\\n    </fact>\\n    <fact>\\n      <claim>Max has sent 4 consecutive messages without user responses</claim>\\n      <type>fact</type>\\n      <in_bio>false</in_bio>\\n      <already_known>false</already_known>\\n    </fact>\\n  </facts>\\n  <relationships>\\n    <relationship>\\n      <sourceEntityId>max-agent</sourceEntityId>\\n      <targetEntityId>user-789</targetEntityId>\\n      <tags>group_interaction,excessive_interaction</tags>\\n    </relationship>\\n  </relationships>\\n</response>"
packages\python\elizaos\generated\action_docs.py:3126 - "name": "MEMORY_SUMMARIZATION",
packages\python\elizaos\generated\action_docs.py:3137 - "name": "LONG_TERM_MEMORY_EXTRACTION",

## packages\python\elizaos\services\message_service.py
packages\python\elizaos\services\message_service.py:12 - from elizaos.types.memory import Memory
packages\python\elizaos\services\message_service.py:20 - HandlerCallback = Callable[[Content], Coroutine[Any, Any, list[Memory]]]
packages\python\elizaos\services\message_service.py:28 - response_messages: list[Memory] = field(default_factory=list)
packages\python\elizaos\services\message_service.py:36 - response_memory: Memory
packages\python\elizaos\services\message_service.py:45 - message: Memory,
packages\python\elizaos\services\message_service.py:53 - message: Memory,
packages\python\elizaos\services\message_service.py:336 - message: Memory,
packages\python\elizaos\services\message_service.py:428 - # Step 1: Save incoming message to memory (if adapter available)
packages\python\elizaos\services\message_service.py:432 - existing_memory = await runtime.get_memory_by_id(message.id)
packages\python\elizaos\services\message_service.py:433 - if not existing_memory:
packages\python\elizaos\services\message_service.py:645 - response_memory = Memory(
packages\python\elizaos\services\message_service.py:667 - "message": response_memory,
packages\python\elizaos\services\message_service.py:671 - responses = [response_memory]
packages\python\elizaos\services\message_service.py:717 - message: Memory,
packages\python\elizaos\services\message_service.py:780 - message: Memory,
packages\python\elizaos\services\message_service.py:913 - response_memory = Memory(
packages\python\elizaos\services\message_service.py:1015 - message: Memory,
packages\python\elizaos\services\message_service.py:1137 - message: Memory,
packages\python\elizaos\services\message_service.py:1151 - existing_memory = await runtime.get_memory_by_id(message.id)
packages\python\elizaos\services\message_service.py:1152 - if not existing_memory:
... and 3 more

## packages\python\elizaos\types\components.py
packages\python\elizaos\types\components.py:12 - from elizaos.types.memory import Memory
packages\python\elizaos\types\components.py:30 - HandlerCallback = Callable[[Content], Awaitable[list["Memory"]]]
packages\python\elizaos\types\components.py:45 - Validator = Callable[["IAgentRuntime", "Memory", "State | None"], Awaitable[bool]]
packages\python\elizaos\types\components.py:141 - get: Callable[[IAgentRuntime, Memory, State], Awaitable[ProviderResult]]
packages\python\elizaos\types\components.py:146 - get: Callable[[IAgentRuntime, Memory, State], Awaitable[ProviderResult]],

## packages\python\elizaos\types\database.py
packages\python\elizaos\types\database.py:20 - MemoryRetrievalOptions = database_pb2.MemoryRetrievalOptions
packages\python\elizaos\types\database.py:21 - MemorySearchOptions = database_pb2.MemorySearchOptions
packages\python\elizaos\types\database.py:22 - MultiRoomMemoryOptions = database_pb2.MultiRoomMemoryOptions
packages\python\elizaos\types\database.py:25 - MemoryOptions = MemoryRetrievalOptions  # Alias for compatibility
packages\python\elizaos\types\database.py:26 - SearchOptions = MemorySearchOptions  # Alias for compatibility

## packages\python\elizaos\types\memory.py
packages\python\elizaos\types\memory.py:3 - from elizaos.types.generated.eliza.v1 import memory_pb2
packages\python\elizaos\types\memory.py:6 - class _MemoryTypeValue(str):
packages\python\elizaos\types\memory.py:14 - class MemoryType:
packages\python\elizaos\types\memory.py:15 - """Memory type constants (mirrors the TypeScript MemoryType enum)."""
packages\python\elizaos\types\memory.py:17 - MESSAGE = _MemoryTypeValue("MESSAGE")
packages\python\elizaos\types\memory.py:18 - DOCUMENT = _MemoryTypeValue("DOCUMENT")
packages\python\elizaos\types\memory.py:19 - FRAGMENT = _MemoryTypeValue("FRAGMENT")
packages\python\elizaos\types\memory.py:20 - DESCRIPTION = _MemoryTypeValue("DESCRIPTION")
packages\python\elizaos\types\memory.py:21 - CUSTOM = _MemoryTypeValue("CUSTOM")
packages\python\elizaos\types\memory.py:24 - BaseMetadata = memory_pb2.BaseMetadata
packages\python\elizaos\types\memory.py:25 - DocumentMetadata = memory_pb2.DocumentMetadata
packages\python\elizaos\types\memory.py:26 - FragmentMetadata = memory_pb2.FragmentMetadata
packages\python\elizaos\types\memory.py:27 - MessageMetadata = memory_pb2.MessageMetadata
packages\python\elizaos\types\memory.py:28 - DescriptionMetadata = memory_pb2.DescriptionMetadata
packages\python\elizaos\types\memory.py:29 - CustomMetadata = memory_pb2.CustomMetadata
packages\python\elizaos\types\memory.py:30 - MemoryMetadata = memory_pb2.MemoryMetadata
packages\python\elizaos\types\memory.py:31 - Memory = memory_pb2.Memory
packages\python\elizaos\types\memory.py:32 - MessageMemory = memory_pb2.MessageMemory

## packages\python\elizaos\types\runtime.py
packages\python\elizaos\types\runtime.py:23 - from elizaos.types.memory import Memory
packages\python\elizaos\types\runtime.py:127 - async def get_memories(
packages\python\elizaos\types\runtime.py:132 - async def create_memory(
packages\python\elizaos\types\runtime.py:134 - memory: dict[str, object] | None = None,
packages\python\elizaos\types\runtime.py:207 - message: Memory,
packages\python\elizaos\types\runtime.py:208 - responses: list[Memory],
packages\python\elizaos\types\runtime.py:221 - message: Memory,
packages\python\elizaos\types\runtime.py:225 - responses: list[Memory] | None = None,
packages\python\elizaos\types\runtime.py:278 - message: Memory,
packages\python\elizaos\types\runtime.py:382 - async def add_embedding_to_memory(self, memory: Memory) -> Memory: ...
packages\python\elizaos\types\runtime.py:386 - self, memory: Memory, priority: str = "normal"
packages\python\elizaos\types\runtime.py:390 - async def get_all_memories(self) -> list[Memory]: ...
packages\python\elizaos\types\runtime.py:393 - async def clear_all_agent_memories(self) -> None: ...
packages\python\elizaos\types\runtime.py:396 - async def update_memory(self, memory: Memory | dict[str, Any]) -> bool: ...
packages\python\elizaos\types\runtime.py:455 - async def search_memories(self, params: dict[str, Any]) -> list[Any]: ...

## packages\python\elizaos\types\state.py
packages\python\elizaos\types\state.py:12 - WorkingMemoryItem = state_pb2.WorkingMemoryItem

## packages\python\elizaos\types\__init__.py
packages\python\elizaos\types\__init__.py:81 - from elizaos.types.memory import (

## packages\python\elizaos\types\generated\eliza\v1\agent_pb2.py
packages\python\elizaos\types\generated\eliza\v1\agent_pb2.py:29 - DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14\x65liza/v1/agent.proto\x12\x08\x65liza.v1\x1a\x19\x65liza/v1/primitives.proto\x1a\x1cgoogle/protobuf/struct.proto\"Q\n\x0eMessageExample\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12+\n\x07\x63ontent\x18\x02 \x01(\x0b\x32\x11.eliza.v1.ContentR\x07\x63ontent\"k\n\rKnowledgeItem\x12\x14\n\x04path\x18\x01 \x01(\tH\x00R\x04path\x12<\n\tdirectory\x18\x02 \x01(\x0b\x32\x1c.eliza.v1.KnowledgeDirectoryH\x00R\tdirectoryB\x06\n\x04item\"P\n\x12KnowledgeDirectory\x12\x12\n\x04path\x18\x01 \x01(\tR\x04path\x12\x1b\n\x06shared\x18\x02 \x01(\x08H\x00R\x06shared\x88\x01\x01\x42\t\n\x07_shared\"\xa1\n\n\x11\x43haracterSettings\x12\x35\n\x14should_respond_model\x18\x01 \x01(\tH\x00R\x12shouldRespondModel\x88\x01\x01\x12)\n\x0euse_multi_step\x18\x02 \x01(\x08H\x01R\x0cuseMultiStep\x88\x01\x01\x12=\n\x18max_multistep_iterations\x18\x03 \x01(\x05H\x02R\x16maxMultistepIterations\x88\x01\x01\x12\x45\n\x1c\x62\x61sic_capabilities_defllmoff\x18\x04 \x01(\x08H\x03R\x1a\x62\x61sicCapabilitiesDefllmoff\x88\x01\x01\x12\x44\n\x1c\x62\x61sic_capabilities_keep_resp\x18\x05 \x01(\x08H\x04R\x19\x62\x61sicCapabilitiesKeepResp\x88\x01\x01\x12@\n\x1aproviders_total_timeout_ms\x18\x06 \x01(\x05H\x05R\x17providersTotalTimeoutMs\x88\x01\x01\x12@\n\x1amax_working_memory_entries\x18\x07 \x01(\x05H\x06R\x17maxWorkingMemoryEntries\x88\x01\x01\x12;\n\x17\x61lways_respond_channels\x18\x08 \x01(\tH\x07R\x15\x61lwaysRespondChannels\x88\x01\x01\x12\x39\n\x16\x61lways_respond_sources\x18\t \x01(\tH\x08R\x14\x61lwaysRespondSources\x88\x01\x01\x12\x34\n\x13\x64\x65\x66\x61ult_temperature\x18\n \x01(\x01H\tR\x12\x64\x65\x66\x61ultTemperature\x88\x01\x01\x12\x31\n\x12\x64\x65\x66\x61ult_max_tokens\x18\x0b \x01(\x05H\nR\x10\x64\x65\x66\x61ultMaxTokens\x88\x01\x01\x12?\n\x19\x64\x65\x66\x61ult_frequency_penalty\x18\x0c \x01(\x01H\x0bR\x17\x64\x65\x66\x61ultFrequencyPenalty\x88\x01\x01\x12=\n\x18\x64\x65\x66\x61ult_presence_penalty\x18\r \x01(\x01H\x0cR\x16\x64\x65\x66\x61ultPresencePenalty\x88\x01\x01\x12\x41\n\x1a\x64isable_basic_capabilities\x18\x0e \x01(\x08H\rR\x18\x64isableBasicCapabilities\x88\x01\x01\x12-\n\x05\x65xtra\x18\x10 \x01(\x0b\x32\x17.google.protobuf.StructR\x05\x65xtraB\x17\n\x15_should_respond_modelB\x11\n\x0f_use_multi_stepB\x1b\n\x19_max_multistep_iterationsB\x1f\n\x1d_basic_capabilities_defllmoffB\x1f\n\x1d_basic_capabilities_keep_respB\x1d\n\x1b_providers_total_timeout_msB\x1d\n\x1b_max_working_memory_entriesB\x1a\n\x18_always_respond_channelsB\x19\n\x17_always_respond_sourcesB\x16\n\x14_default_temperatureB\x15\n\x13_default_max_tokensB\x1c\n\x1a_default_frequency_penaltyB\x1b\n\x19_default_presence_penaltyB\x1d\n\x1b_disable_basic_capabilities\"G\n\x0bStyleGuides\x12\x10\n\x03\x61ll\x18\x01 \x03(\tR\x03\x61ll\x12\x12\n\x04\x63hat\x18\x02 \x03(\tR\x04\x63hat\x12\x12\n\x04post\x18\x03 \x03(\tR\x04post\"\xa4\x07\n\tCharacter\x12\x13\n\x02id\x18\x01 \x01(\tH\x00R\x02id\x88\x01\x01\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12\x1f\n\x08username\x18\x03 \x01(\tH\x01R\x08username\x88\x01\x01\x12\x1b\n\x06system\x18\x04 \x01(\tH\x02R\x06system\x88\x01\x01\x12@\n\ttemplates\x18\x05 \x03(\x0b\x32\".eliza.v1.Character.TemplatesEntryR\ttemplates\x12\x10\n\x03\x62io\x18\x06 \x03(\tR\x03\x62io\x12H\n\x10message_examples\x18\x07 \x03(\x0b\x32\x1d.eliza.v1.MessageExampleGroupR\x0fmessageExamples\x12#\n\rpost_examples\x18\x08 \x03(\tR\x0cpostExamples\x12\x16\n\x06topics\x18\t \x03(\tR\x06topics\x12\x1e\n\nadjectives\x18\n \x03(\tR\nadjectives\x12\x35\n\tknowledge\x18\x0b \x03(\x0b\x32\x17.eliza.v1.KnowledgeItemR\tknowledge\x12\x18\n\x07plugins\x18\x0c \x03(\tR\x07plugins\x12<\n\x08settings\x18\r \x01(\x0b\x32\x1b.eliza.v1.CharacterSettingsH\x03R\x08settings\x88\x01\x01\x12:\n\x07secrets\x18\x0e \x03(\x0b\x32 .eliza.v1.Character.SecretsEntryR\x07secrets\x12\x30\n\x05style\x18\x0f \x01(\x0b\x32\x15.eliza.v1.StyleGuidesH\x04R\x05style\x88\x01\x01\x12\x30\n\x11\x61\x64vanced_planning\x18\x10 \x01(\x08H\x05R\x10\x61\x64vancedPlanning\x88\x01\x01\x12,\n\x0f\x61\x64vanced_memory\x18\x11 \x01(\x08H\x06R\x0e\x61\x64vancedMemory\x88\x01\x01\x1a<\n\x0eTemplatesEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a:\n\x0cSecretsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x42\x05\n\x03_idB\x0b\n\t_usernameB\t\n\x07_systemB\x0b\n\t_settingsB\x08\n\x06_styleB\x14\n\x12_advanced_planningB\x12\n\x10_advanced_memory\"K\n\x13MessageExampleGroup\x12\x34\n\x08\x65xamples\x18\x01 \x03(\x0b\x32\x18.eliza.v1.MessageExampleR\x08\x65xamples\"\xd2\x01\n\x05\x41gent\x12\x31\n\tcharacter\x18\x01 \x01(\x0b\x32\x13.eliza.v1.CharacterR\tcharacter\x12\x1d\n\x07\x65nabled\x18\x02 \x01(\x08H\x00R\x07\x65nabled\x88\x01\x01\x12-\n\x06status\x18\x03 \x01(\x0e\x32\x15.eliza.v1.AgentStatusR\x06status\x12\x1d\n\ncreated_at\x18\x04 \x01(\x03R\tcreatedAt\x12\x1d\n\nupdated_at\x18\x05 \x01(\x03R\tupdatedAtB\n\n\x08_enabled*_\n\x0b\x41gentStatus\x12\x1c\n\x18\x41GENT_STATUS_UNSPECIFIED\x10\x00\x12\x17\n\x13\x41GENT_STATUS_ACTIVE\x10\x01\x12\x19\n\x15\x41GENT_STATUS_INACTIVE\x10\x02\x42\x8d\x01\n\x0c\x63om.eliza.v1B\nAgentProtoP\x01Z0github.com/elizaos/eliza/gen/go/eliza/v1;elizav1\xa2\x02\x03\x45XX\xaa\x02\x08\x45liza.V1\xca\x02\x08\x45liza\\V1\xe2\x02\x14\x45liza\\V1\\GPBMetadata\xea\x02\tEliza::V1b\x06proto3')

## packages\python\elizaos\types\generated\eliza\v1\database_pb2.py
packages\python\elizaos\types\generated\eliza\v1\database_pb2.py:25 - from eliza.v1 import memory_pb2 as eliza_dot_v1_dot_memory__pb2
packages\python\elizaos\types\generated\eliza\v1\database_pb2.py:30 - DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x17\x65liza/v1/database.proto\x12\x08\x65liza.v1\x1a\x15\x65liza/v1/memory.proto\x1a\x1cgoogle/protobuf/struct.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\xd9\x02\n\x0b\x42\x61seLogBody\x12\x1a\n\x06run_id\x18\x01 \x01(\tH\x00R\x05runId\x88\x01\x01\x12\'\n\rparent_run_id\x18\x02 \x01(\tH\x01R\x0bparentRunId\x88\x01\x01\x12\x1b\n\x06status\x18\x03 \x01(\tH\x02R\x06status\x88\x01\x01\x12\"\n\nmessage_id\x18\x04 \x01(\tH\x03R\tmessageId\x88\x01\x01\x12\x1c\n\x07room_id\x18\x05 \x01(\tH\x04R\x06roomId\x88\x01\x01\x12 \n\tentity_id\x18\x06 \x01(\tH\x05R\x08\x65ntityId\x88\x01\x01\x12\x33\n\x08metadata\x18\x07 \x01(\x0b\x32\x17.google.protobuf.StructR\x08metadataB\t\n\x07_run_idB\x10\n\x0e_parent_run_idB\t\n\x07_statusB\r\n\x0b_message_idB\n\n\x08_room_idB\x0c\n\n_entity_id\"y\n\x10\x41\x63tionLogContent\x12\x18\n\x07\x61\x63tions\x18\x01 \x03(\tR\x07\x61\x63tions\x12\x17\n\x04text\x18\x02 \x01(\tH\x00R\x04text\x88\x01\x01\x12\x1d\n\x07thought\x18\x03 \x01(\tH\x01R\x07thought\x88\x01\x01\x42\x07\n\x05_textB\n\n\x08_thought\"\xb0\x01\n\x0f\x41\x63tionLogResult\x12\x1d\n\x07success\x18\x01 \x01(\x08H\x00R\x07success\x88\x01\x01\x12+\n\x04\x64\x61ta\x18\x02 \x01(\x0b\x32\x17.google.protobuf.StructR\x04\x64\x61ta\x12\x17\n\x04text\x18\x03 \x01(\tH\x01R\x04text\x88\x01\x01\x12\x19\n\x05\x65rror\x18\x04 \x01(\tH\x02R\x05\x65rror\x88\x01\x01\x42\n\n\x08_successB\x07\n\x05_textB\x08\n\x06_error\"f\n\x0f\x41\x63tionLogPrompt\x12\x1d\n\nmodel_type\x18\x01 \x01(\tR\tmodelType\x12\x16\n\x06prompt\x18\x02 \x01(\tR\x06prompt\x12\x1c\n\ttimestamp\x18\x03 \x01(\x03R\ttimestamp\"\x84\x05\n\rActionLogBody\x12)\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x15.eliza.v1.BaseLogBodyR\x04\x62\x61se\x12\x1b\n\x06\x61\x63tion\x18\x02 \x01(\tH\x00R\x06\x61\x63tion\x88\x01\x01\x12 \n\taction_id\x18\x03 \x01(\tH\x01R\x08\x61\x63tionId\x88\x01\x01\x12\x1d\n\x07message\x18\x04 \x01(\tH\x02R\x07message\x88\x01\x01\x12-\n\x05state\x18\x05 \x01(\x0b\x32\x17.google.protobuf.StructR\x05state\x12\x35\n\tresponses\x18\x06 \x03(\x0b\x32\x17.google.protobuf.StructR\tresponses\x12\x39\n\x07\x63ontent\x18\x07 \x01(\x0b\x32\x1a.eliza.v1.ActionLogContentH\x03R\x07\x63ontent\x88\x01\x01\x12\x36\n\x06result\x18\x08 \x01(\x0b\x32\x19.eliza.v1.ActionLogResultH\x04R\x06result\x88\x01\x01\x12\x33\n\x07prompts\x18\t \x03(\x0b\x32\x19.eliza.v1.ActionLogPromptR\x07prompts\x12&\n\x0cprompt_count\x18\x0b \x01(\x05H\x05R\x0bpromptCount\x88\x01\x01\x12 \n\tplan_step\x18\x0c \x01(\tH\x06R\x08planStep\x88\x01\x01\x12&\n\x0cplan_thought\x18\r \x01(\tH\x07R\x0bplanThought\x88\x01\x01\x42\t\n\x07_actionB\x0c\n\n_action_idB\n\n\x08_messageB\n\n\x08_contentB\t\n\x07_resultB\x0f\n\r_prompt_countB\x0c\n\n_plan_stepB\x0f\n\r_plan_thought\"\xc8\x01\n\x10\x45valuatorLogBody\x12)\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x15.eliza.v1.BaseLogBodyR\x04\x62\x61se\x12!\n\tevaluator\x18\x02 \x01(\tH\x00R\tevaluator\x88\x01\x01\x12\x1d\n\x07message\x18\x03 \x01(\tH\x01R\x07message\x88\x01\x01\x12-\n\x05state\x18\x04 \x01(\x0b\x32\x17.google.protobuf.StructR\x05stateB\x0c\n\n_evaluatorB\n\n\x08_message\"R\n\x12ModelActionContext\x12\x1f\n\x0b\x61\x63tion_name\x18\x01 \x01(\tR\nactionName\x12\x1b\n\taction_id\x18\x02 \x01(\tR\x08\x61\x63tionId\"\xe0\x04\n\x0cModelLogBody\x12)\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x15.eliza.v1.BaseLogBodyR\x04\x62\x61se\x12\"\n\nmodel_type\x18\x02 \x01(\tH\x00R\tmodelType\x88\x01\x01\x12 \n\tmodel_key\x18\x03 \x01(\tH\x01R\x08modelKey\x88\x01\x01\x12/\n\x06params\x18\x04 \x01(\x0b\x32\x17.google.protobuf.StructR\x06params\x12\x1b\n\x06prompt\x18\x05 \x01(\tH\x02R\x06prompt\x88\x01\x01\x12(\n\rsystem_prompt\x18\x06 \x01(\tH\x03R\x0csystemPrompt\x88\x01\x01\x12!\n\ttimestamp\x18\x07 \x01(\x03H\x04R\ttimestamp\x88\x01\x01\x12*\n\x0e\x65xecution_time\x18\x08 \x01(\x03H\x05R\rexecutionTime\x88\x01\x01\x12\x1f\n\x08provider\x18\t \x01(\tH\x06R\x08provider\x88\x01\x01\x12H\n\x0e\x61\x63tion_context\x18\n \x01(\x0b\x32\x1c.eliza.v1.ModelActionContextH\x07R\ractionContext\x88\x01\x01\x12\x32\n\x08response\x18\x0b \x01(\x0b\x32\x16.google.protobuf.ValueR\x08responseB\r\n\x0b_model_typeB\x0c\n\n_model_keyB\t\n\x07_promptB\x10\n\x0e_system_promptB\x0c\n\n_timestampB\x11\n\x0f_execution_timeB\x0b\n\t_providerB\x11\n\x0f_action_context\"\x9b\x01\n\x10\x45mbeddingLogBody\x12)\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x15.eliza.v1.BaseLogBodyR\x04\x62\x61se\x12 \n\tmemory_id\x18\x02 \x01(\tH\x00R\x08memoryId\x88\x01\x01\x12\x1f\n\x08\x64uration\x18\x03 \x01(\x03H\x01R\x08\x64uration\x88\x01\x01\x42\x0c\n\n_memory_idB\x0b\n\t_duration\"\x99\x02\n\x07LogBody\x12+\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x15.eliza.v1.BaseLogBodyH\x00R\x04\x62\x61se\x12\x31\n\x06\x61\x63tion\x18\x02 \x01(\x0b\x32\x17.eliza.v1.ActionLogBodyH\x00R\x06\x61\x63tion\x12:\n\tevaluator\x18\x03 \x01(\x0b\x32\x1a.eliza.v1.EvaluatorLogBodyH\x00R\tevaluator\x12.\n\x05model\x18\x04 \x01(\x0b\x32\x16.eliza.v1.ModelLogBodyH\x00R\x05model\x12:\n\tembedding\x18\x05 \x01(\x0b\x32\x1a.eliza.v1.EmbeddingLogBodyH\x00R\tembeddingB\x06\n\x04\x62ody\"\xde\x01\n\x03Log\x12\x13\n\x02id\x18\x01 \x01(\tH\x00R\x02id\x88\x01\x01\x12\x1b\n\tentity_id\x18\x02 \x01(\tR\x08\x65ntityId\x12\x1c\n\x07room_id\x18\x03 \x01(\tH\x01R\x06roomId\x88\x01\x01\x12%\n\x04\x62ody\x18\x04 \x01(\x0b\x32\x11.eliza.v1.LogBodyR\x04\x62ody\x12\x12\n\x04type\x18\x05 \x01(\tR\x04type\x12\x39\n\ncreated_at\x18\x06 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tcreatedAtB\x05\n\x03_idB\n\n\x08_room_id\"\x83\x01\n\x0e\x41gentRunCounts\x12\x18\n\x07\x61\x63tions\x18\x01 \x01(\x05R\x07\x61\x63tions\x12\x1f\n\x0bmodel_calls\x18\x02 \x01(\x05R\nmodelCalls\x12\x16\n\x06\x65rrors\x18\x03 \x01(\x05R\x06\x65rrors\x12\x1e\n\nevaluators\x18\x04 \x01(\x05R\nevaluators\"\xf1\x03\n\x0f\x41gentRunSummary\x12\x15\n\x06run_id\x18\x01 \x01(\tR\x05runId\x12-\n\x06status\x18\x02 \x01(\x0e\x32\x15.eliza.v1.DbRunStatusR\x06status\x12\"\n\nstarted_at\x18\x03 \x01(\x03H\x00R\tstartedAt\x88\x01\x01\x12\x1e\n\x08\x65nded_at\x18\x04 \x01(\x03H\x01R\x07\x65ndedAt\x88\x01\x01\x12$\n\x0b\x64uration_ms\x18\x05 \x01(\x03H\x02R\ndurationMs\x88\x01\x01\x12\"\n\nmessage_id\x18\x06 \x01(\tH\x03R\tmessageId\x88\x01\x01\x12\x1c\n\x07room_id\x18\x07 \x01(\tH\x04R\x06roomId\x88\x01\x01\x12 \n\tentity_id\x18\x08 \x01(\tH\x05R\x08\x65ntityId\x88\x01\x01\x12\x33\n\x08metadata\x18\t \x01(\x0b\x32\x17.google.protobuf.StructR\x08metadata\x12\x35\n\x06\x63ounts\x18\n \x01(\x0b\x32\x18.eliza.v1.AgentRunCountsH\x06R\x06\x63ounts\x88\x01\x01\x42\r\n\x0b_started_atB\x0b\n\t_ended_atB\x0e\n\x0c_duration_msB\r\n\x0b_message_idB\n\n\x08_room_idB\x0c\n\n_entity_idB\t\n\x07_counts\"w\n\x15\x41gentRunSummaryResult\x12-\n\x04runs\x18\x01 \x03(\x0b\x32\x19.eliza.v1.AgentRunSummaryR\x04runs\x12\x14\n\x05total\x18\x02 \x01(\x05R\x05total\x12\x19\n\x08has_more\x18\x03 \x01(\x08R\x07hasMore\"b\n\x15\x45mbeddingSearchResult\x12\x1c\n\tembedding\x18\x01 \x03(\x02R\tembedding\x12+\n\x11levenshtein_score\x18\x02 \x01(\x05R\x10levenshteinScore\"\xef\x01\n\x16MemoryRetrievalOptions\x12\x17\n\x07room_id\x18\x01 \x01(\tR\x06roomId\x12\x19\n\x05\x63ount\x18\x02 \x01(\x05H\x00R\x05\x63ount\x88\x01\x01\x12\x1b\n\x06unique\x18\x03 \x01(\x08H\x01R\x06unique\x88\x01\x01\x12\x19\n\x05start\x18\x04 \x01(\x03H\x02R\x05start\x88\x01\x01\x12\x15\n\x03\x65nd\x18\x05 \x01(\x03H\x03R\x03\x65nd\x88\x01\x01\x12\x1e\n\x08\x61gent_id\x18\x06 \x01(\tH\x04R\x07\x61gentId\x88\x01\x01\x42\x08\n\x06_countB\t\n\x07_uniqueB\x08\n\x06_startB\x06\n\x04_endB\x0b\n\t_agent_id\"\xd0\x02\n\x13MemorySearchOptions\x12\x1c\n\tembedding\x18\x01 \x03(\x02R\tembedding\x12,\n\x0fmatch_threshold\x18\x02 \x01(\x02H\x00R\x0ematchThreshold\x88\x01\x01\x12\x19\n\x05\x63ount\x18\x03 \x01(\x05H\x01R\x05\x63ount\x88\x01\x01\x12\x17\n\x07room_id\x18\x04 \x01(\tR\x06roomId\x12\x1e\n\x08\x61gent_id\x18\x05 \x01(\tH\x02R\x07\x61gentId\x88\x01\x01\x12\x1b\n\x06unique\x18\x06 \x01(\x08H\x03R\x06unique\x88\x01\x01\x12\x39\n\x08metadata\x18\x07 \x01(\x0b\x32\x18.eliza.v1.MemoryMetadataH\x04R\x08metadata\x88\x01\x01\x42\x12\n\x10_match_thresholdB\x08\n\x06_countB\x0b\n\t_agent_idB\t\n\x07_uniqueB\x0b\n\t_metadata\"\x85\x01\n\x16MultiRoomMemoryOptions\x12\x19\n\x08room_ids\x18\x01 \x03(\tR\x07roomIds\x12\x19\n\x05limit\x18\x02 \x01(\x05H\x00R\x05limit\x88\x01\x01\x12\x1e\n\x08\x61gent_id\x18\x03 \x01(\tH\x01R\x07\x61gentId\x88\x01\x01\x42\x08\n\x06_limitB\x0b\n\t_agent_id*\x98\x01\n\x0b\x44\x62RunStatus\x12\x1d\n\x19\x44\x42_RUN_STATUS_UNSPECIFIED\x10\x00\x12\x19\n\x15\x44\x42_RUN_STATUS_STARTED\x10\x01\x12\x1b\n\x17\x44\x42_RUN_STATUS_COMPLETED\x10\x02\x12\x19\n\x15\x44\x42_RUN_STATUS_TIMEOUT\x10\x03\x12\x17\n\x13\x44\x42_RUN_STATUS_ERROR\x10\x04*\xdc\x01\n\x0fVectorDimension\x12 \n\x1cVECTOR_DIMENSION_UNSPECIFIED\x10\x00\x12\x1b\n\x16VECTOR_DIMENSION_SMALL\x10\x80\x03\x12\x1c\n\x17VECTOR_DIMENSION_MEDIUM\x10\x80\x04\x12\x1b\n\x16VECTOR_DIMENSION_LARGE\x10\x80\x06\x12\x18\n\x13VECTOR_DIMENSION_XL\x10\x80\x08\x12\x19\n\x14VECTOR_DIMENSION_XXL\x10\x80\x0c\x12\x1a\n\x15VECTOR_DIMENSION_XXXL\x10\x80\x18\x42\x90\x01\n\x0c\x63om.eliza.v1B\rDatabaseProtoP\x01Z0github.com/elizaos/eliza/gen/go/eliza/v1;elizav1\xa2\x02\x03\x45XX\xaa\x02\x08\x45liza.V1\xca\x02\x08\x45liza\\V1\xe2\x02\x14\x45liza\\V1\\GPBMetadata\xea\x02\tEliza::V1b\x06proto3')
packages\python\elizaos\types\generated\eliza\v1\database_pb2.py:72 - _globals['_MEMORYRETRIEVALOPTIONS']._serialized_start=3945
packages\python\elizaos\types\generated\eliza\v1\database_pb2.py:73 - _globals['_MEMORYRETRIEVALOPTIONS']._serialized_end=4184
packages\python\elizaos\types\generated\eliza\v1\database_pb2.py:74 - _globals['_MEMORYSEARCHOPTIONS']._serialized_start=4187
packages\python\elizaos\types\generated\eliza\v1\database_pb2.py:75 - _globals['_MEMORYSEARCHOPTIONS']._serialized_end=4523
packages\python\elizaos\types\generated\eliza\v1\database_pb2.py:76 - _globals['_MULTIROOMMEMORYOPTIONS']._serialized_start=4526
packages\python\elizaos\types\generated\eliza\v1\database_pb2.py:77 - _globals['_MULTIROOMMEMORYOPTIONS']._serialized_end=4659

## packages\python\elizaos\types\generated\eliza\v1\events_pb2.py
packages\python\elizaos\types\generated\eliza\v1\events_pb2.py:26 - from eliza.v1 import memory_pb2 as eliza_dot_v1_dot_memory__pb2
packages\python\elizaos\types\generated\eliza\v1\events_pb2.py:32 - DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15\x65liza/v1/events.proto\x12\x08\x65liza.v1\x1a\x1a\x65liza/v1/environment.proto\x1a\x15\x65liza/v1/memory.proto\x1a\x14\x65liza/v1/model.proto\x1a\x19\x65liza/v1/primitives.proto\x1a\x1cgoogle/protobuf/struct.proto\"&\n\x0c\x45ventPayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\"\xa1\x01\n\x0cWorldPayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12%\n\x05world\x18\x02 \x01(\x0b\x32\x0f.eliza.v1.WorldR\x05world\x12$\n\x05rooms\x18\x03 \x03(\x0b\x32\x0e.eliza.v1.RoomR\x05rooms\x12,\n\x08\x65ntities\x18\x04 \x03(\x0b\x32\x10.eliza.v1.EntityR\x08\x65ntities\"\xe3\x01\n\rEntityPayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12\x1b\n\tentity_id\x18\x02 \x01(\tR\x08\x65ntityId\x12\x1e\n\x08world_id\x18\x03 \x01(\tH\x00R\x07worldId\x88\x01\x01\x12\x1c\n\x07room_id\x18\x04 \x01(\tH\x01R\x06roomId\x88\x01\x01\x12\x39\n\x08metadata\x18\x05 \x01(\x0b\x32\x18.eliza.v1.EntityMetadataH\x02R\x08metadata\x88\x01\x01\x42\x0b\n\t_world_idB\n\n\x08_room_idB\x0b\n\t_metadata\"\xb5\x01\n\x0e\x45ntityMetadata\x12\x1f\n\x0boriginal_id\x18\x01 \x01(\tR\noriginalId\x12\x1a\n\x08username\x18\x02 \x01(\tR\x08username\x12&\n\x0c\x64isplay_name\x18\x03 \x01(\tH\x00R\x0b\x64isplayName\x88\x01\x01\x12-\n\x05\x65xtra\x18\x04 \x01(\x0b\x32\x17.google.protobuf.StructR\x05\x65xtraB\x0f\n\r_display_name\"T\n\x0eMessagePayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12*\n\x07message\x18\x02 \x01(\x0b\x32\x10.eliza.v1.MemoryR\x07message\"\x8a\x01\n\x15\x43hannelClearedPayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12\x17\n\x07room_id\x18\x02 \x01(\tR\x06roomId\x12\x1d\n\nchannel_id\x18\x03 \x01(\tR\tchannelId\x12!\n\x0cmemory_count\x18\x04 \x01(\x05R\x0bmemoryCount\"t\n\rInvokePayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12\x19\n\x08world_id\x18\x02 \x01(\tR\x07worldId\x12\x17\n\x07user_id\x18\x03 \x01(\tR\x06userId\x12\x17\n\x07room_id\x18\x04 \x01(\tR\x06roomId\"\xe1\x02\n\x0fRunEventPayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12\x15\n\x06run_id\x18\x02 \x01(\tR\x05runId\x12\x1d\n\nmessage_id\x18\x03 \x01(\tR\tmessageId\x12\x17\n\x07room_id\x18\x04 \x01(\tR\x06roomId\x12\x1b\n\tentity_id\x18\x05 \x01(\tR\x08\x65ntityId\x12\x1d\n\nstart_time\x18\x06 \x01(\x03R\tstartTime\x12+\n\x06status\x18\x07 \x01(\x0e\x32\x13.eliza.v1.RunStatusR\x06status\x12\x1e\n\x08\x65nd_time\x18\x08 \x01(\x03H\x00R\x07\x65ndTime\x88\x01\x01\x12\x1f\n\x08\x64uration\x18\t \x01(\x03H\x01R\x08\x64uration\x88\x01\x01\x12\x19\n\x05\x65rror\x18\n \x01(\tH\x02R\x05\x65rror\x88\x01\x01\x42\x0b\n\t_end_timeB\x0b\n\t_durationB\x08\n\x06_error\"\xc0\x01\n\x12\x41\x63tionEventPayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12\x17\n\x07room_id\x18\x02 \x01(\tR\x06roomId\x12\x19\n\x08world_id\x18\x03 \x01(\tR\x07worldId\x12+\n\x07\x63ontent\x18\x04 \x01(\x0b\x32\x11.eliza.v1.ContentR\x07\x63ontent\x12\"\n\nmessage_id\x18\x05 \x01(\tH\x00R\tmessageId\x88\x01\x01\x42\r\n\x0b_message_id\"\x82\x02\n\x15\x45valuatorEventPayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12!\n\x0c\x65valuator_id\x18\x02 \x01(\tR\x0b\x65valuatorId\x12%\n\x0e\x65valuator_name\x18\x03 \x01(\tR\revaluatorName\x12\"\n\nstart_time\x18\x04 \x01(\x03H\x00R\tstartTime\x88\x01\x01\x12!\n\tcompleted\x18\x05 \x01(\x08H\x01R\tcompleted\x88\x01\x01\x12\x19\n\x05\x65rror\x18\x06 \x01(\tH\x02R\x05\x65rror\x88\x01\x01\x42\r\n\x0b_start_timeB\x0c\n\n_completedB\x08\n\x06_error\"_\n\x0fModelTokenUsage\x12\x16\n\x06prompt\x18\x01 \x01(\x05R\x06prompt\x12\x1e\n\ncompletion\x18\x02 \x01(\x05R\ncompletion\x12\x14\n\x05total\x18\x03 \x01(\x05R\x05total\"\xcb\x01\n\x11ModelEventPayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12\x1a\n\x08provider\x18\x02 \x01(\tR\x08provider\x12\'\n\x04type\x18\x03 \x01(\x0e\x32\x13.eliza.v1.ModelTypeR\x04type\x12\x16\n\x06prompt\x18\x04 \x01(\tR\x06prompt\x12\x36\n\x06tokens\x18\x05 \x01(\x0b\x32\x19.eliza.v1.ModelTokenUsageH\x00R\x06tokens\x88\x01\x01\x42\t\n\x07_tokens\"\xed\x02\n\x1a\x45mbeddingGenerationPayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12(\n\x06memory\x18\x02 \x01(\x0b\x32\x10.eliza.v1.MemoryR\x06memory\x12\x37\n\x08priority\x18\x03 \x01(\x0e\x32\x1b.eliza.v1.EmbeddingPriorityR\x08priority\x12$\n\x0bretry_count\x18\x04 \x01(\x05H\x00R\nretryCount\x88\x01\x01\x12$\n\x0bmax_retries\x18\x05 \x01(\x05H\x01R\nmaxRetries\x88\x01\x01\x12\x1c\n\tembedding\x18\x06 \x03(\x02R\tembedding\x12\x19\n\x05\x65rror\x18\x07 \x01(\tH\x02R\x05\x65rror\x88\x01\x01\x12\x1a\n\x06run_id\x18\x08 \x01(\tH\x03R\x05runId\x88\x01\x01\x42\x0e\n\x0c_retry_countB\x0e\n\x0c_max_retriesB\x08\n\x06_errorB\t\n\x07_run_id\"\xc8\x01\n\x10UIControlPayload\x12\x36\n\x06\x61\x63tion\x18\x01 \x01(\x0e\x32\x1e.eliza.v1.ControlMessageActionR\x06\x61\x63tion\x12\x1b\n\x06target\x18\x02 \x01(\tH\x00R\x06target\x88\x01\x01\x12\x1b\n\x06reason\x18\x03 \x01(\tH\x01R\x06reason\x88\x01\x01\x12\x1f\n\x08\x64uration\x18\x04 \x01(\x05H\x02R\x08\x64uration\x88\x01\x01\x42\t\n\x07_targetB\t\n\x07_reasonB\x0b\n\t_duration\"s\n\x0e\x43ontrolMessage\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x34\n\x07payload\x18\x02 \x01(\x0b\x32\x1a.eliza.v1.UIControlPayloadR\x07payload\x12\x17\n\x07room_id\x18\x03 \x01(\tR\x06roomId\"c\n\x15\x43ontrolMessagePayload\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12\x32\n\x07message\x18\x02 \x01(\x0b\x32\x18.eliza.v1.ControlMessageR\x07message*\xd9\x07\n\tEventType\x12\x1a\n\x16\x45VENT_TYPE_UNSPECIFIED\x10\x00\x12\x1b\n\x17\x45VENT_TYPE_WORLD_JOINED\x10\x01\x12\x1e\n\x1a\x45VENT_TYPE_WORLD_CONNECTED\x10\x02\x12\x19\n\x15\x45VENT_TYPE_WORLD_LEFT\x10\x03\x12\x1c\n\x18\x45VENT_TYPE_ENTITY_JOINED\x10\x04\x12\x1a\n\x16\x45VENT_TYPE_ENTITY_LEFT\x10\x05\x12\x1d\n\x19\x45VENT_TYPE_ENTITY_UPDATED\x10\x06\x12\x1a\n\x16\x45VENT_TYPE_ROOM_JOINED\x10\x07\x12\x18\n\x14\x45VENT_TYPE_ROOM_LEFT\x10\x08\x12\x1f\n\x1b\x45VENT_TYPE_MESSAGE_RECEIVED\x10\t\x12\x1b\n\x17\x45VENT_TYPE_MESSAGE_SENT\x10\n\x12\x1e\n\x1a\x45VENT_TYPE_MESSAGE_DELETED\x10\x0b\x12\x1e\n\x1a\x45VENT_TYPE_CHANNEL_CLEARED\x10\x0c\x12%\n!EVENT_TYPE_VOICE_MESSAGE_RECEIVED\x10\r\x12!\n\x1d\x45VENT_TYPE_VOICE_MESSAGE_SENT\x10\x0e\x12 \n\x1c\x45VENT_TYPE_REACTION_RECEIVED\x10\x0f\x12\x1d\n\x19\x45VENT_TYPE_POST_GENERATED\x10\x10\x12#\n\x1f\x45VENT_TYPE_INTERACTION_RECEIVED\x10\x11\x12\x1a\n\x16\x45VENT_TYPE_RUN_STARTED\x10\x12\x12\x18\n\x14\x45VENT_TYPE_RUN_ENDED\x10\x13\x12\x1a\n\x16\x45VENT_TYPE_RUN_TIMEOUT\x10\x14\x12\x1d\n\x19\x45VENT_TYPE_ACTION_STARTED\x10\x15\x12\x1f\n\x1b\x45VENT_TYPE_ACTION_COMPLETED\x10\x16\x12 \n\x1c\x45VENT_TYPE_EVALUATOR_STARTED\x10\x17\x12\"\n\x1e\x45VENT_TYPE_EVALUATOR_COMPLETED\x10\x18\x12\x19\n\x15\x45VENT_TYPE_MODEL_USED\x10\x19\x12-\n)EVENT_TYPE_EMBEDDING_GENERATION_REQUESTED\x10\x1a\x12-\n)EVENT_TYPE_EMBEDDING_GENERATION_COMPLETED\x10\x1b\x12*\n&EVENT_TYPE_EMBEDDING_GENERATION_FAILED\x10\x1c\x12\x1e\n\x1a\x45VENT_TYPE_CONTROL_MESSAGE\x10\x1d*\x83\x01\n\x0ePlatformPrefix\x12\x1f\n\x1bPLATFORM_PREFIX_UNSPECIFIED\x10\x00\x12\x1b\n\x17PLATFORM_PREFIX_DISCORD\x10\x01\x12\x1c\n\x18PLATFORM_PREFIX_TELEGRAM\x10\x02\x12\x15\n\x11PLATFORM_PREFIX_X\x10\x03*q\n\tRunStatus\x12\x1a\n\x16RUN_STATUS_UNSPECIFIED\x10\x00\x12\x16\n\x12RUN_STATUS_STARTED\x10\x01\x12\x18\n\x14RUN_STATUS_COMPLETED\x10\x02\x12\x16\n\x12RUN_STATUS_TIMEOUT\x10\x03*\x8f\x01\n\x11\x45mbeddingPriority\x12\"\n\x1e\x45MBEDDING_PRIORITY_UNSPECIFIED\x10\x00\x12\x1b\n\x17\x45MBEDDING_PRIORITY_HIGH\x10\x01\x12\x1d\n\x19\x45MBEDDING_PRIORITY_NORMAL\x10\x02\x12\x1a\n\x16\x45MBEDDING_PRIORITY_LOW\x10\x03*\x91\x01\n\x14\x43ontrolMessageAction\x12&\n\"CONTROL_MESSAGE_ACTION_UNSPECIFIED\x10\x00\x12(\n$CONTROL_MESSAGE_ACTION_DISABLE_INPUT\x10\x01\x12\'\n#CONTROL_MESSAGE_ACTION_ENABLE_INPUT\x10\x02\x42\x8e\x01\n\x0c\x63om.eliza.v1B\x0b\x45ventsProtoP\x01Z0github.com/elizaos/eliza/gen/go/eliza/v1;elizav1\xa2\x02\x03\x45XX\xaa\x02\x08\x45liza.V1\xca\x02\x08\x45liza\\V1\xe2\x02\x14\x45liza\\V1\\GPBMetadata\xea\x02\tEliza::V1b\x06proto3')

## packages\python\elizaos\types\generated\eliza\v1\ipc_pb2.py
packages\python\elizaos\types\generated\eliza\v1\ipc_pb2.py:26 - from eliza.v1 import memory_pb2 as eliza_dot_v1_dot_memory__pb2
packages\python\elizaos\types\generated\eliza\v1\ipc_pb2.py:33 - DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x12\x65liza/v1/ipc.proto\x12\x08\x65liza.v1\x1a\x19\x65liza/v1/components.proto\x1a\x15\x65liza/v1/memory.proto\x1a\x15\x65liza/v1/plugin.proto\x1a\x16\x65liza/v1/service.proto\x1a\x14\x65liza/v1/state.proto\x1a\x1cgoogle/protobuf/struct.proto\"\xbf\x02\n\x13PluginInteropConfig\x12\x35\n\x08protocol\x18\x01 \x01(\x0e\x32\x19.eliza.v1.InteropProtocolR\x08protocol\x12 \n\twasm_path\x18\x02 \x01(\tH\x00R\x08wasmPath\x88\x01\x01\x12+\n\x0fshared_lib_path\x18\x03 \x01(\tH\x01R\rsharedLibPath\x88\x01\x01\x12$\n\x0bipc_command\x18\x04 \x01(\tH\x02R\nipcCommand\x88\x01\x01\x12\x1e\n\x08ipc_port\x18\x05 \x01(\x05H\x03R\x07ipcPort\x88\x01\x01\x12\x15\n\x03\x63wd\x18\x06 \x01(\tH\x04R\x03\x63wd\x88\x01\x01\x42\x0c\n\n_wasm_pathB\x12\n\x10_shared_lib_pathB\x0e\n\x0c_ipc_commandB\x0b\n\t_ipc_portB\x06\n\x04_cwd\"\xcc\x06\n\x1b\x43rossLanguagePluginManifest\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12 \n\x0b\x64\x65scription\x18\x02 \x01(\tR\x0b\x64\x65scription\x12\x18\n\x07version\x18\x03 \x01(\tR\x07version\x12\x34\n\x08language\x18\x04 \x01(\x0e\x32\x18.eliza.v1.PluginLanguageR\x08language\x12<\n\x07interop\x18\x05 \x01(\x0b\x32\x1d.eliza.v1.PluginInteropConfigH\x00R\x07interop\x88\x01\x01\x12I\n\x06\x63onfig\x18\x06 \x03(\x0b\x32\x31.eliza.v1.CrossLanguagePluginManifest.ConfigEntryR\x06\x63onfig\x12\"\n\x0c\x64\x65pendencies\x18\x07 \x03(\tR\x0c\x64\x65pendencies\x12\x32\n\x07\x61\x63tions\x18\x08 \x03(\x0b\x32\x18.eliza.v1.ActionManifestR\x07\x61\x63tions\x12\x38\n\tproviders\x18\t \x03(\x0b\x32\x1a.eliza.v1.ProviderManifestR\tproviders\x12;\n\nevaluators\x18\n \x03(\x0b\x32\x1b.eliza.v1.EvaluatorManifestR\nevaluators\x12\x35\n\x08services\x18\x0b \x03(\x0b\x32\x19.eliza.v1.ServiceManifestR\x08services\x12/\n\x06routes\x18\x0c \x03(\x0b\x32\x17.eliza.v1.RouteManifestR\x06routes\x12I\n\x06\x65vents\x18\r \x03(\x0b\x32\x31.eliza.v1.CrossLanguagePluginManifest.EventsEntryR\x06\x65vents\x1a\x39\n\x0b\x43onfigEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1aU\n\x0b\x45ventsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x30\n\x05value\x18\x02 \x01(\x0b\x32\x1a.eliza.v1.EventHandlerListR\x05value:\x02\x38\x01\x42\n\n\x08_interop\"0\n\nIPCMessage\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\"\xe4\x01\n\x13\x41\x63tionInvokeRequest\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x16\n\x06\x61\x63tion\x18\x03 \x01(\tR\x06\x61\x63tion\x12(\n\x06memory\x18\x04 \x01(\x0b\x32\x10.eliza.v1.MemoryR\x06memory\x12*\n\x05state\x18\x05 \x01(\x0b\x32\x0f.eliza.v1.StateH\x00R\x05state\x88\x01\x01\x12\x31\n\x07options\x18\x06 \x01(\x0b\x32\x17.google.protobuf.StructR\x07optionsB\x08\n\x06_state\"j\n\x14\x41\x63tionResultResponse\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12.\n\x06result\x18\x03 \x01(\x0b\x32\x16.eliza.v1.ActionResultR\x06result\"\xb3\x01\n\x15\x41\x63tionValidateRequest\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x16\n\x06\x61\x63tion\x18\x03 \x01(\tR\x06\x61\x63tion\x12(\n\x06memory\x18\x04 \x01(\x0b\x32\x10.eliza.v1.MemoryR\x06memory\x12*\n\x05state\x18\x05 \x01(\x0b\x32\x0f.eliza.v1.StateH\x00R\x05state\x88\x01\x01\x42\x08\n\x06_state\"N\n\x12ValidationResponse\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x14\n\x05valid\x18\x03 \x01(\x08R\x05valid\"\xa5\x01\n\x12ProviderGetRequest\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x1a\n\x08provider\x18\x03 \x01(\tR\x08provider\x12(\n\x06memory\x18\x04 \x01(\x0b\x32\x10.eliza.v1.MemoryR\x06memory\x12%\n\x05state\x18\x05 \x01(\x0b\x32\x0f.eliza.v1.StateR\x05state\"n\n\x16ProviderResultResponse\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x30\n\x06result\x18\x03 \x01(\x0b\x32\x18.eliza.v1.ProviderResultR\x06result\"\xba\x01\n\x16\x45valuatorInvokeRequest\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x1c\n\tevaluator\x18\x03 \x01(\tR\tevaluator\x12(\n\x06memory\x18\x04 \x01(\x0b\x32\x10.eliza.v1.MemoryR\x06memory\x12*\n\x05state\x18\x05 \x01(\x0b\x32\x0f.eliza.v1.StateH\x00R\x05state\x88\x01\x01\x42\x08\n\x06_state\"S\n\x13ServiceStartRequest\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x18\n\x07service\x18\x03 \x01(\tR\x07service\"R\n\x12ServiceStopRequest\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x18\n\x07service\x18\x03 \x01(\tR\x07service\"t\n\x0fServiceResponse\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x18\n\x07success\x18\x03 \x01(\x08R\x07success\x12\x19\n\x05\x65rror\x18\x04 \x01(\tH\x00R\x05\x65rror\x88\x01\x01\x42\x08\n\x06_error\"\x8c\x04\n\x13RouteHandlerRequest\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x12\n\x04path\x18\x03 \x01(\tR\x04path\x12\x16\n\x06method\x18\x04 \x01(\tR\x06method\x12+\n\x04\x62ody\x18\x05 \x01(\x0b\x32\x17.google.protobuf.StructR\x04\x62ody\x12\x41\n\x06params\x18\x06 \x03(\x0b\x32).eliza.v1.RouteHandlerRequest.ParamsEntryR\x06params\x12>\n\x05query\x18\x07 \x03(\x0b\x32(.eliza.v1.RouteHandlerRequest.QueryEntryR\x05query\x12\x44\n\x07headers\x18\x08 \x03(\x0b\x32*.eliza.v1.RouteHandlerRequest.HeadersEntryR\x07headers\x1a\x39\n\x0bParamsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a\x38\n\nQueryEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a:\n\x0cHeadersEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\"\x81\x02\n\x14RouteHandlerResponse\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x16\n\x06status\x18\x03 \x01(\x05R\x06status\x12\x45\n\x07headers\x18\x04 \x03(\x0b\x32+.eliza.v1.RouteHandlerResponse.HeadersEntryR\x07headers\x12*\n\x04\x62ody\x18\x05 \x01(\x0b\x32\x16.google.protobuf.ValueR\x04\x62ody\x1a:\n\x0cHeadersEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\"\xb3\x01\n\x11PluginInitRequest\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12?\n\x06\x63onfig\x18\x03 \x03(\x0b\x32\'.eliza.v1.PluginInitRequest.ConfigEntryR\x06\x63onfig\x1a\x39\n\x0b\x43onfigEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\"w\n\x12PluginInitResponse\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x18\n\x07success\x18\x03 \x01(\x08R\x07success\x12\x19\n\x05\x65rror\x18\x04 \x01(\tH\x00R\x05\x65rror\x88\x01\x01\x42\x08\n\x06_error\"|\n\rErrorResponse\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x14\n\x05\x65rror\x18\x03 \x01(\tR\x05\x65rror\x12\x31\n\x07\x64\x65tails\x18\x04 \x01(\x0b\x32\x17.google.protobuf.StructR\x07\x64\x65tails\"\xc8\x04\n\nIPCRequest\x12\x44\n\raction_invoke\x18\x01 \x01(\x0b\x32\x1d.eliza.v1.ActionInvokeRequestH\x00R\x0c\x61\x63tionInvoke\x12J\n\x0f\x61\x63tion_validate\x18\x02 \x01(\x0b\x32\x1f.eliza.v1.ActionValidateRequestH\x00R\x0e\x61\x63tionValidate\x12\x41\n\x0cprovider_get\x18\x03 \x01(\x0b\x32\x1c.eliza.v1.ProviderGetRequestH\x00R\x0bproviderGet\x12M\n\x10\x65valuator_invoke\x18\x04 \x01(\x0b\x32 .eliza.v1.EvaluatorInvokeRequestH\x00R\x0f\x65valuatorInvoke\x12\x44\n\rservice_start\x18\x05 \x01(\x0b\x32\x1d.eliza.v1.ServiceStartRequestH\x00R\x0cserviceStart\x12\x41\n\x0cservice_stop\x18\x06 \x01(\x0b\x32\x1c.eliza.v1.ServiceStopRequestH\x00R\x0bserviceStop\x12\x42\n\x0croute_handle\x18\x07 \x01(\x0b\x32\x1d.eliza.v1.RouteHandlerRequestH\x00R\x0brouteHandle\x12>\n\x0bplugin_init\x18\x08 \x01(\x0b\x32\x1b.eliza.v1.PluginInitRequestH\x00R\npluginInitB\t\n\x07request\"\xce\x03\n\x0bIPCResponse\x12\x45\n\raction_result\x18\x01 \x01(\x0b\x32\x1e.eliza.v1.ActionResultResponseH\x00R\x0c\x61\x63tionResult\x12>\n\nvalidation\x18\x02 \x01(\x0b\x32\x1c.eliza.v1.ValidationResponseH\x00R\nvalidation\x12K\n\x0fprovider_result\x18\x03 \x01(\x0b\x32 .eliza.v1.ProviderResultResponseH\x00R\x0eproviderResult\x12\x35\n\x07service\x18\x04 \x01(\x0b\x32\x19.eliza.v1.ServiceResponseH\x00R\x07service\x12\x36\n\x05route\x18\x05 \x01(\x0b\x32\x1e.eliza.v1.RouteHandlerResponseH\x00R\x05route\x12?\n\x0bplugin_init\x18\x06 \x01(\x0b\x32\x1c.eliza.v1.PluginInitResponseH\x00R\npluginInit\x12/\n\x05\x65rror\x18\x07 \x01(\x0b\x32\x17.eliza.v1.ErrorResponseH\x00R\x05\x65rrorB\n\n\x08response*\x9f\x01\n\x0fInteropProtocol\x12 \n\x1cINTEROP_PROTOCOL_UNSPECIFIED\x10\x00\x12\x19\n\x15INTEROP_PROTOCOL_WASM\x10\x01\x12\x18\n\x14INTEROP_PROTOCOL_FFI\x10\x02\x12\x18\n\x14INTEROP_PROTOCOL_IPC\x10\x03\x12\x1b\n\x17INTEROP_PROTOCOL_NATIVE\x10\x04*\x87\x01\n\x0ePluginLanguage\x12\x1f\n\x1bPLUGIN_LANGUAGE_UNSPECIFIED\x10\x00\x12\x1e\n\x1aPLUGIN_LANGUAGE_TYPESCRIPT\x10\x01\x12\x18\n\x14PLUGIN_LANGUAGE_RUST\x10\x02\x12\x1a\n\x16PLUGIN_LANGUAGE_PYTHON\x10\x03\x42\x8b\x01\n\x0c\x63om.eliza.v1B\x08IpcProtoP\x01Z0github.com/elizaos/eliza/gen/go/eliza/v1;elizav1\xa2\x02\x03\x45XX\xaa\x02\x08\x45liza.V1\xca\x02\x08\x45liza\\V1\xe2\x02\x14\x45liza\\V1\\GPBMetadata\xea\x02\tEliza::V1b\x06proto3')

## packages\python\elizaos\types\generated\eliza\v1\knowledge_pb2.py
packages\python\elizaos\types\generated\eliza\v1\knowledge_pb2.py:25 - from eliza.v1 import memory_pb2 as eliza_dot_v1_dot_memory__pb2
packages\python\elizaos\types\generated\eliza\v1\knowledge_pb2.py:29 - DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18\x65liza/v1/knowledge.proto\x12\x08\x65liza.v1\x1a\x15\x65liza/v1/memory.proto\x1a\x19\x65liza/v1/primitives.proto\"\x96\x01\n\x0fKnowledgeRecord\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12+\n\x07\x63ontent\x18\x02 \x01(\x0b\x32\x11.eliza.v1.ContentR\x07\x63ontent\x12\x39\n\x08metadata\x18\x03 \x01(\x0b\x32\x18.eliza.v1.MemoryMetadataH\x00R\x08metadata\x88\x01\x01\x42\x0b\n\t_metadata\"U\n\rDirectoryItem\x12\x1c\n\tdirectory\x18\x01 \x01(\tR\tdirectory\x12\x1b\n\x06shared\x18\x02 \x01(\x08H\x00R\x06shared\x88\x01\x01\x42\t\n\x07_sharedB\x91\x01\n\x0c\x63om.eliza.v1B\x0eKnowledgeProtoP\x01Z0github.com/elizaos/eliza/gen/go/eliza/v1;elizav1\xa2\x02\x03\x45XX\xaa\x02\x08\x45liza.V1\xca\x02\x08\x45liza\\V1\xe2\x02\x14\x45liza\\V1\\GPBMetadata\xea\x02\tEliza::V1b\x06proto3')

## packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py:4 - # source: eliza/v1/memory.proto
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py:29 - DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15\x65liza/v1/memory.proto\x12\x08\x65liza.v1\x1a\x19\x65liza/v1/primitives.proto\x1a\x1cgoogle/protobuf/struct.proto\"\xe4\x01\n\x0c\x42\x61seMetadata\x12\x12\n\x04type\x18\x01 \x01(\tR\x04type\x12\x1b\n\x06source\x18\x02 \x01(\tH\x00R\x06source\x88\x01\x01\x12 \n\tsource_id\x18\x03 \x01(\tH\x01R\x08sourceId\x88\x01\x01\x12\x19\n\x05scope\x18\x04 \x01(\tH\x02R\x05scope\x88\x01\x01\x12!\n\ttimestamp\x18\x05 \x01(\x03H\x03R\ttimestamp\x88\x01\x01\x12\x12\n\x04tags\x18\x06 \x03(\tR\x04tagsB\t\n\x07_sourceB\x0c\n\n_source_idB\x08\n\x06_scopeB\x0c\n\n_timestamp\">\n\x10\x44ocumentMetadata\x12*\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x16.eliza.v1.BaseMetadataR\x04\x62\x61se\"{\n\x10\x46ragmentMetadata\x12*\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x16.eliza.v1.BaseMetadataR\x04\x62\x61se\x12\x1f\n\x0b\x64ocument_id\x18\x02 \x01(\tR\ndocumentId\x12\x1a\n\x08position\x18\x03 \x01(\x05R\x08position\"\xcf\x01\n\x0fMessageMetadata\x12*\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x16.eliza.v1.BaseMetadataR\x04\x62\x61se\x12\x31\n\x12trajectory_step_id\x18\x02 \x01(\tH\x00R\x10trajectoryStepId\x88\x01\x01\x12\x30\n\x11\x62\x65nchmark_context\x18\x03 \x01(\tH\x01R\x10\x62\x65nchmarkContext\x88\x01\x01\x42\x15\n\x13_trajectory_step_idB\x14\n\x12_benchmark_context\"A\n\x13\x44\x65scriptionMetadata\x12*\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x16.eliza.v1.BaseMetadataR\x04\x62\x61se\"v\n\x0e\x43ustomMetadata\x12*\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x16.eliza.v1.BaseMetadataR\x04\x62\x61se\x12\x38\n\x0b\x63ustom_data\x18\x02 \x01(\x0b\x32\x17.google.protobuf.StructR\ncustomData\"\xbe\x02\n\x0eMemoryMetadata\x12\x38\n\x08\x64ocument\x18\x01 \x01(\x0b\x32\x1a.eliza.v1.DocumentMetadataH\x00R\x08\x64ocument\x12\x38\n\x08\x66ragment\x18\x02 \x01(\x0b\x32\x1a.eliza.v1.FragmentMetadataH\x00R\x08\x66ragment\x12\x35\n\x07message\x18\x03 \x01(\x0b\x32\x19.eliza.v1.MessageMetadataH\x00R\x07message\x12\x41\n\x0b\x64\x65scription\x18\x04 \x01(\x0b\x32\x1d.eliza.v1.DescriptionMetadataH\x00R\x0b\x64\x65scription\x12\x32\n\x06\x63ustom\x18\x05 \x01(\x0b\x32\x18.eliza.v1.CustomMetadataH\x00R\x06\x63ustomB\n\n\x08metadata\"\xd6\x03\n\x06Memory\x12\x13\n\x02id\x18\x01 \x01(\tH\x00R\x02id\x88\x01\x01\x12\x1b\n\tentity_id\x18\x02 \x01(\tR\x08\x65ntityId\x12\x1e\n\x08\x61gent_id\x18\x03 \x01(\tH\x01R\x07\x61gentId\x88\x01\x01\x12\"\n\ncreated_at\x18\x04 \x01(\x03H\x02R\tcreatedAt\x88\x01\x01\x12+\n\x07\x63ontent\x18\x05 \x01(\x0b\x32\x11.eliza.v1.ContentR\x07\x63ontent\x12\x1c\n\tembedding\x18\x06 \x03(\x02R\tembedding\x12\x17\n\x07room_id\x18\x07 \x01(\tR\x06roomId\x12\x1e\n\x08world_id\x18\x08 \x01(\tH\x03R\x07worldId\x88\x01\x01\x12\x1b\n\x06unique\x18\t \x01(\x08H\x04R\x06unique\x88\x01\x01\x12#\n\nsimilarity\x18\n \x01(\x02H\x05R\nsimilarity\x88\x01\x01\x12\x39\n\x08metadata\x18\x0b \x01(\x0b\x32\x18.eliza.v1.MemoryMetadataH\x06R\x08metadata\x88\x01\x01\x42\x05\n\x03_idB\x0b\n\t_agent_idB\r\n\x0b_created_atB\x0b\n\t_world_idB\t\n\x07_uniqueB\r\n\x0b_similarityB\x0b\n\t_metadata\"9\n\rMessageMemory\x12(\n\x06memory\x18\x01 \x01(\x0b\x32\x10.eliza.v1.MemoryR\x06memoryB\x8e\x01\n\x0c\x63om.eliza.v1B\x0bMemoryProtoP\x01Z0github.com/elizaos/eliza/gen/go/eliza/v1;elizav1\xa2\x02\x03\x45XX\xaa\x02\x08\x45liza.V1\xca\x02\x08\x45liza\\V1\xe2\x02\x14\x45liza\\V1\\GPBMetadata\xea\x02\tEliza::V1b\x06proto3')
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py:36 - _globals['DESCRIPTOR']._serialized_options = b'\n\014com.eliza.v1B\013MemoryProtoP\001Z0github.com/elizaos/eliza/gen/go/eliza/v1;elizav1\242\002\003EXX\252\002\010Eliza.V1\312\002\010Eliza\\V1\342\002\024Eliza\\V1\\GPBMetadata\352\002\tEliza::V1'
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py:49 - _globals['_MEMORYMETADATA']._serialized_start=910
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py:50 - _globals['_MEMORYMETADATA']._serialized_end=1228
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py:51 - _globals['_MEMORY']._serialized_start=1231
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py:52 - _globals['_MEMORY']._serialized_end=1701
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py:53 - _globals['_MESSAGEMEMORY']._serialized_start=1703
packages\python\elizaos\types\generated\eliza\v1\memory_pb2.py:54 - _globals['_MESSAGEMEMORY']._serialized_end=1760

## packages\python\elizaos\types\generated\eliza\v1\message_service_pb2.py
packages\python\elizaos\types\generated\eliza\v1\message_service_pb2.py:25 - from eliza.v1 import memory_pb2 as eliza_dot_v1_dot_memory__pb2
packages\python\elizaos\types\generated\eliza\v1\message_service_pb2.py:30 - DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1e\x65liza/v1/message_service.proto\x12\x08\x65liza.v1\x1a\x15\x65liza/v1/memory.proto\x1a\x19\x65liza/v1/primitives.proto\x1a\x14\x65liza/v1/state.proto\"\xa3\x03\n\x18MessageProcessingOptions\x12$\n\x0bmax_retries\x18\x01 \x01(\x05H\x00R\nmaxRetries\x88\x01\x01\x12.\n\x10timeout_duration\x18\x02 \x01(\x03H\x01R\x0ftimeoutDuration\x88\x01\x01\x12)\n\x0euse_multi_step\x18\x03 \x01(\x08H\x02R\x0cuseMultiStep\x88\x01\x01\x12>\n\x19max_multi_step_iterations\x18\x04 \x01(\x05H\x03R\x16maxMultiStepIterations\x88\x01\x01\x12W\n\x14should_respond_model\x18\x05 \x01(\x0e\x32 .eliza.v1.ShouldRespondModelTypeH\x04R\x12shouldRespondModel\x88\x01\x01\x42\x0e\n\x0c_max_retriesB\x13\n\x11_timeout_durationB\x11\n\x0f_use_multi_stepB\x1c\n\x1a_max_multi_step_iterationsB\x17\n\x15_should_respond_model\"\xbb\x02\n\x17MessageProcessingResult\x12\x1f\n\x0b\x64id_respond\x18\x01 \x01(\x08R\ndidRespond\x12\x41\n\x10response_content\x18\x02 \x01(\x0b\x32\x11.eliza.v1.ContentH\x00R\x0fresponseContent\x88\x01\x01\x12=\n\x11response_messages\x18\x03 \x03(\x0b\x32\x10.eliza.v1.MemoryR\x10responseMessages\x12%\n\x05state\x18\x04 \x01(\x0b\x32\x0f.eliza.v1.StateR\x05state\x12\x38\n\x04mode\x18\x05 \x01(\x0e\x32\x1f.eliza.v1.MessageProcessingModeH\x01R\x04mode\x88\x01\x01\x42\x13\n\x11_response_contentB\x07\n\x05_mode\"z\n\x10ResponseDecision\x12%\n\x0eshould_respond\x18\x01 \x01(\x08R\rshouldRespond\x12\'\n\x0fskip_evaluation\x18\x02 \x01(\x08R\x0eskipEvaluation\x12\x16\n\x06reason\x18\x03 \x01(\tR\x06reason*\x8d\x01\n\x16ShouldRespondModelType\x12)\n%SHOULD_RESPOND_MODEL_TYPE_UNSPECIFIED\x10\x00\x12#\n\x1fSHOULD_RESPOND_MODEL_TYPE_SMALL\x10\x01\x12#\n\x1fSHOULD_RESPOND_MODEL_TYPE_LARGE\x10\x02*\xab\x01\n\x15MessageProcessingMode\x12\'\n#MESSAGE_PROCESSING_MODE_UNSPECIFIED\x10\x00\x12\"\n\x1eMESSAGE_PROCESSING_MODE_SIMPLE\x10\x01\x12#\n\x1fMESSAGE_PROCESSING_MODE_ACTIONS\x10\x02\x12 \n\x1cMESSAGE_PROCESSING_MODE_NONE\x10\x03\x42\x96\x01\n\x0c\x63om.eliza.v1B\x13MessageServiceProtoP\x01Z0github.com/elizaos/eliza/gen/go/eliza/v1;elizav1\xa2\x02\x03\x45XX\xaa\x02\x08\x45liza.V1\xca\x02\x08\x45liza\\V1\xe2\x02\x14\x45liza\\V1\\GPBMetadata\xea\x02\tEliza::V1b\x06proto3')

## packages\python\elizaos\types\generated\eliza\v1\messaging_pb2.py
packages\python\elizaos\types\generated\eliza\v1\messaging_pb2.py:25 - from eliza.v1 import memory_pb2 as eliza_dot_v1_dot_memory__pb2
packages\python\elizaos\types\generated\eliza\v1\messaging_pb2.py:29 - DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18\x65liza/v1/messaging.proto\x12\x08\x65liza.v1\x1a\x15\x65liza/v1/memory.proto\x1a\x19\x65liza/v1/primitives.proto\"\x91\x02\n\nTargetInfo\x12\x16\n\x06source\x18\x01 \x01(\tR\x06source\x12\x1c\n\x07room_id\x18\x02 \x01(\tH\x00R\x06roomId\x88\x01\x01\x12\"\n\nchannel_id\x18\x03 \x01(\tH\x01R\tchannelId\x88\x01\x01\x12 \n\tserver_id\x18\x04 \x01(\tH\x02R\x08serverId\x88\x01\x01\x12 \n\tentity_id\x18\x05 \x01(\tH\x03R\x08\x65ntityId\x88\x01\x01\x12 \n\tthread_id\x18\x06 \x01(\tH\x04R\x08threadId\x88\x01\x01\x42\n\n\x08_room_idB\r\n\x0b_channel_idB\x0c\n\n_server_idB\x0c\n\n_entity_idB\x0c\n\n_thread_id\"\xa0\x01\n\x19MessageStreamChunkPayload\x12\x1d\n\nmessage_id\x18\x01 \x01(\tR\tmessageId\x12\x14\n\x05\x63hunk\x18\x02 \x01(\tR\x05\x63hunk\x12\x14\n\x05index\x18\x03 \x01(\x05R\x05index\x12\x1d\n\nchannel_id\x18\x04 \x01(\tR\tchannelId\x12\x19\n\x08\x61gent_id\x18\x05 \x01(\tR\x07\x61gentId\"\xc3\x01\n\x19MessageStreamErrorPayload\x12\x1d\n\nmessage_id\x18\x01 \x01(\tR\tmessageId\x12\x1d\n\nchannel_id\x18\x02 \x01(\tR\tchannelId\x12\x19\n\x08\x61gent_id\x18\x03 \x01(\tR\x07\x61gentId\x12\x14\n\x05\x65rror\x18\x04 \x01(\tR\x05\x65rror\x12&\n\x0cpartial_text\x18\x05 \x01(\tH\x00R\x0bpartialText\x88\x01\x01\x42\x0f\n\r_partial_text\"\x17\n\x15MessageHandlerOptions\"\xf2\x01\n\rMessageResult\x12\x1d\n\nmessage_id\x18\x01 \x01(\tR\tmessageId\x12\x38\n\x0cuser_message\x18\x02 \x01(\x0b\x32\x10.eliza.v1.MemoryH\x00R\x0buserMessage\x88\x01\x01\x12:\n\x0f\x61gent_responses\x18\x03 \x03(\x0b\x32\x11.eliza.v1.ContentR\x0e\x61gentResponses\x12\x31\n\x05usage\x18\x04 \x01(\x0b\x32\x16.eliza.v1.MessageUsageH\x01R\x05usage\x88\x01\x01\x42\x0f\n\r_user_messageB\x08\n\x06_usage\"l\n\x0cMessageUsage\x12!\n\x0cinput_tokens\x18\x01 \x01(\x05R\x0binputTokens\x12#\n\routput_tokens\x18\x02 \x01(\x05R\x0coutputTokens\x12\x14\n\x05model\x18\x03 \x01(\tR\x05model*\x85\x02\n\x11SocketMessageType\x12#\n\x1fSOCKET_MESSAGE_TYPE_UNSPECIFIED\x10\x00\x12$\n SOCKET_MESSAGE_TYPE_ROOM_JOINING\x10\x01\x12$\n SOCKET_MESSAGE_TYPE_SEND_MESSAGE\x10\x02\x12\x1f\n\x1bSOCKET_MESSAGE_TYPE_MESSAGE\x10\x03\x12\x1b\n\x17SOCKET_MESSAGE_TYPE_ACK\x10\x04\x12 \n\x1cSOCKET_MESSAGE_TYPE_THINKING\x10\x05\x12\x1f\n\x1bSOCKET_MESSAGE_TYPE_CONTROL\x10\x06\x42\x91\x01\n\x0c\x63om.eliza.v1B\x0eMessagingProtoP\x01Z0github.com/elizaos/eliza/gen/go/eliza/v1;elizav1\xa2\x02\x03\x45XX\xaa\x02\x08\x45liza.V1\xca\x02\x08\x45liza\\V1\xe2\x02\x14\x45liza\\V1\\GPBMetadata\xea\x02\tEliza::V1b\x06proto3')

## packages\python\elizaos\types\generated\eliza\v1\state_pb2.py
packages\python\elizaos\types\generated\eliza\v1\state_pb2.py:30 - DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14\x65liza/v1/state.proto\x12\x08\x65liza.v1\x1a\x19\x65liza/v1/components.proto\x1a\x1a\x65liza/v1/environment.proto\x1a\x1cgoogle/protobuf/struct.proto\"\xa5\x01\n\x0e\x41\x63tionPlanStep\x12\x16\n\x06\x61\x63tion\x18\x01 \x01(\tR\x06\x61\x63tion\x12\x16\n\x06status\x18\x02 \x01(\tR\x06status\x12\x19\n\x05\x65rror\x18\x03 \x01(\tH\x00R\x05\x65rror\x88\x01\x01\x12\x33\n\x06result\x18\x04 \x01(\x0b\x32\x16.eliza.v1.ActionResultH\x01R\x06result\x88\x01\x01\x42\x08\n\x06_errorB\t\n\x07_result\"\xcf\x01\n\nActionPlan\x12\x18\n\x07thought\x18\x01 \x01(\tR\x07thought\x12\x1f\n\x0btotal_steps\x18\x02 \x01(\x05R\ntotalSteps\x12!\n\x0c\x63urrent_step\x18\x03 \x01(\x05R\x0b\x63urrentStep\x12.\n\x05steps\x18\x04 \x03(\x0b\x32\x18.eliza.v1.ActionPlanStepR\x05steps\x12\x33\n\x08metadata\x18\x05 \x01(\x0b\x32\x17.google.protobuf.StructR\x08metadata\"\x94\x01\n\x12ProviderCacheEntry\x12\x17\n\x04text\x18\x01 \x01(\tH\x00R\x04text\x88\x01\x01\x12/\n\x06values\x18\x02 \x01(\x0b\x32\x17.google.protobuf.StructR\x06values\x12+\n\x04\x64\x61ta\x18\x03 \x01(\x0b\x32\x17.google.protobuf.StructR\x04\x64\x61taB\x07\n\x05_text\"\x82\x01\n\x11WorkingMemoryItem\x12\x1f\n\x0b\x61\x63tion_name\x18\x01 \x01(\tR\nactionName\x12.\n\x06result\x18\x02 \x01(\x0b\x32\x16.eliza.v1.ActionResultR\x06result\x12\x1c\n\ttimestamp\x18\x03 \x01(\x03R\ttimestamp\"\xb3\x05\n\tStateData\x12\'\n\x04room\x18\x01 \x01(\x0b\x32\x0e.eliza.v1.RoomH\x00R\x04room\x88\x01\x01\x12*\n\x05world\x18\x02 \x01(\x0b\x32\x0f.eliza.v1.WorldH\x01R\x05world\x88\x01\x01\x12-\n\x06\x65ntity\x18\x03 \x01(\x0b\x32\x10.eliza.v1.EntityH\x02R\x06\x65ntity\x88\x01\x01\x12@\n\tproviders\x18\x04 \x03(\x0b\x32\".eliza.v1.StateData.ProvidersEntryR\tproviders\x12:\n\x0b\x61\x63tion_plan\x18\x05 \x01(\x0b\x32\x14.eliza.v1.ActionPlanH\x03R\nactionPlan\x88\x01\x01\x12=\n\x0e\x61\x63tion_results\x18\x06 \x03(\x0b\x32\x16.eliza.v1.ActionResultR\ractionResults\x12M\n\x0eworking_memory\x18\x07 \x03(\x0b\x32&.eliza.v1.StateData.WorkingMemoryEntryR\rworkingMemory\x12-\n\x05\x65xtra\x18\x08 \x01(\x0b\x32\x17.google.protobuf.StructR\x05\x65xtra\x1aZ\n\x0eProvidersEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x32\n\x05value\x18\x02 \x01(\x0b\x32\x1c.eliza.v1.ProviderCacheEntryR\x05value:\x02\x38\x01\x1a]\n\x12WorkingMemoryEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x31\n\x05value\x18\x02 \x01(\x0b\x32\x1b.eliza.v1.WorkingMemoryItemR\x05value:\x02\x38\x01\x42\x07\n\x05_roomB\x08\n\x06_worldB\t\n\x07_entityB\x0e\n\x0c_action_plan\"\xd9\x01\n\x0bStateValues\x12\"\n\nagent_name\x18\x01 \x01(\tH\x00R\tagentName\x88\x01\x01\x12&\n\x0c\x61\x63tion_names\x18\x02 \x01(\tH\x01R\x0b\x61\x63tionNames\x88\x01\x01\x12!\n\tproviders\x18\x03 \x01(\tH\x02R\tproviders\x88\x01\x01\x12-\n\x05\x65xtra\x18\x04 \x01(\x0b\x32\x17.google.protobuf.StructR\x05\x65xtraB\r\n\x0b_agent_nameB\x0f\n\r_action_namesB\x0c\n\n_providers\"\xa2\x01\n\x05State\x12-\n\x06values\x18\x01 \x01(\x0b\x32\x15.eliza.v1.StateValuesR\x06values\x12\'\n\x04\x64\x61ta\x18\x02 \x01(\x0b\x32\x13.eliza.v1.StateDataR\x04\x64\x61ta\x12\x12\n\x04text\x18\x03 \x01(\tR\x04text\x12-\n\x05\x65xtra\x18\x04 \x01(\x0b\x32\x17.google.protobuf.StructR\x05\x65xtraB\x8d\x01\n\x0c\x63om.eliza.v1B\nStateProtoP\x01Z0github.com/elizaos/eliza/gen/go/eliza/v1;elizav1\xa2\x02\x03\x45XX\xaa\x02\x08\x45liza.V1\xca\x02\x08\x45liza\\V1\xe2\x02\x14\x45liza\\V1\\GPBMetadata\xea\x02\tEliza::V1b\x06proto3')
packages\python\elizaos\types\generated\eliza\v1\state_pb2.py:40 - _globals['_STATEDATA_WORKINGMEMORYENTRY']._loaded_options = None
packages\python\elizaos\types\generated\eliza\v1\state_pb2.py:41 - _globals['_STATEDATA_WORKINGMEMORYENTRY']._serialized_options = b'8\001'
packages\python\elizaos\types\generated\eliza\v1\state_pb2.py:48 - _globals['_WORKINGMEMORYITEM']._serialized_start=649
packages\python\elizaos\types\generated\eliza\v1\state_pb2.py:49 - _globals['_WORKINGMEMORYITEM']._serialized_end=779
packages\python\elizaos\types\generated\eliza\v1\state_pb2.py:54 - _globals['_STATEDATA_WORKINGMEMORYENTRY']._serialized_start=1334
packages\python\elizaos\types\generated\eliza\v1\state_pb2.py:55 - _globals['_STATEDATA_WORKINGMEMORYENTRY']._serialized_end=1427

## packages\python\elizaos\utils\validation.py
packages\python\elizaos\utils\validation.py:3 - from elizaos.types.memory import Memory
packages\python\elizaos\utils\validation.py:7 - message: Memory, recent_messages: list[Memory], keywords: list[str]
packages\python\elizaos\utils\validation.py:42 - message: Memory, recent_messages: list[Memory], regex_pattern: str
packages\python\elizaos\utils\validation.py:48 - message: The current message memory

## packages\python\elizaos_atropos_shared\canonical_eliza.py
packages\python\elizaos_atropos_shared\canonical_eliza.py:31 - from elizaos.types.memory import Memory, MessageMetadata
packages\python\elizaos_atropos_shared\canonical_eliza.py:66 - ) -> Memory:
packages\python\elizaos_atropos_shared\canonical_eliza.py:133 - _runtime: AgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos_atropos_shared\canonical_eliza.py:180 - _runtime: AgentRuntime, _message: Memory, _state: State | None = None
packages\python\elizaos_atropos_shared\canonical_eliza.py:186 - _message: Memory,

## packages\python\tests\test_actions_provider_examples.py
packages\python\tests\test_actions_provider_examples.py:6 - from elizaos.types import Character, Content, Memory, as_uuid
packages\python\tests\test_actions_provider_examples.py:24 - message = Memory(

## packages\python\tests\test_action_parameters.py
packages\python\tests\test_action_parameters.py:30 - async def validate(_rt: IAgentRuntime, _msg: Memory, _state: State | None) -> bool:
packages\python\tests\test_action_parameters.py:35 - _msg: Memory,
packages\python\tests\test_action_parameters.py:39 - _responses: list[Memory] | None,
packages\python\tests\test_action_parameters.py:66 - message = Memory(
packages\python\tests\test_action_parameters.py:73 - response = Memory(
packages\python\tests\test_action_parameters.py:98 - async def validate(_rt: IAgentRuntime, _msg: Memory, _state: State | None) -> bool:
packages\python\tests\test_action_parameters.py:103 - _msg: Memory,
packages\python\tests\test_action_parameters.py:107 - _responses: list[Memory] | None,
packages\python\tests\test_action_parameters.py:134 - message = Memory(
packages\python\tests\test_action_parameters.py:141 - response = Memory(

## packages\python\tests\test_advanced_memory_behavior.py
packages\python\tests\test_advanced_memory_behavior.py:5 - from elizaos.advanced_memory.memory_service import MemoryService
packages\python\tests\test_advanced_memory_behavior.py:6 - from elizaos.advanced_memory.types import LongTermMemoryCategory
packages\python\tests\test_advanced_memory_behavior.py:10 - from elizaos.types.memory import Memory
packages\python\tests\test_advanced_memory_behavior.py:14 - @pytest.mark.skip(reason="MemoryService requires runtime settings.get() which isn't implemented")
packages\python\tests\test_advanced_memory_behavior.py:16 - async def test_memory_provider_formats_long_term_memories() -> None:
packages\python\tests\test_advanced_memory_behavior.py:18 - character=Character(name="AdvMemoryBehavior", bio=["Test"], advanced_memory=True),
packages\python\tests\test_advanced_memory_behavior.py:23 - svc = runtime.get_service("memory")
packages\python\tests\test_advanced_memory_behavior.py:33 - category=LongTermMemoryCategory.SEMANTIC,
packages\python\tests\test_advanced_memory_behavior.py:40 - msg = Memory(
packages\python\tests\test_advanced_memory_behavior.py:47 - provider = next(p for p in runtime.providers if p.name == "LONG_TERM_MEMORY")
packages\python\tests\test_advanced_memory_behavior.py:52 - @pytest.mark.skip(reason="MemoryService runtime not set")
packages\python\tests\test_advanced_memory_behavior.py:54 - async def test_get_long_term_memories_returns_top_confidence() -> None:
packages\python\tests\test_advanced_memory_behavior.py:55 - svc = MemoryService(runtime=None)
packages\python\tests\test_advanced_memory_behavior.py:61 - category=LongTermMemoryCategory.SEMANTIC,
packages\python\tests\test_advanced_memory_behavior.py:70 - category=LongTermMemoryCategory.SEMANTIC,
packages\python\tests\test_advanced_memory_behavior.py:79 - category=LongTermMemoryCategory.SEMANTIC,
packages\python\tests\test_advanced_memory_behavior.py:92 - async def test_get_long_term_memories_handles_zero_limit() -> None:
packages\python\tests\test_advanced_memory_behavior.py:93 - svc = MemoryService(runtime=None)

## packages\python\tests\test_advanced_memory_flag.py
packages\python\tests\test_advanced_memory_flag.py:9 - @pytest.mark.skip(reason="MemoryService requires runtime settings.get() which isn't implemented")
packages\python\tests\test_advanced_memory_flag.py:11 - async def test_advanced_memory_autoloads_when_enabled() -> None:
packages\python\tests\test_advanced_memory_flag.py:13 - character=Character(name="AdvMemoryOn", bio=["Test"], advanced_memory=True),
packages\python\tests\test_advanced_memory_flag.py:18 - assert any(p.name == "LONG_TERM_MEMORY" for p in runtime.providers)
packages\python\tests\test_advanced_memory_flag.py:19 - assert any(e.name == "MEMORY_SUMMARIZATION" for e in runtime.evaluators)
packages\python\tests\test_advanced_memory_flag.py:22 - @pytest.mark.skip(reason="MemoryService requires runtime settings.get() which isn't implemented")
packages\python\tests\test_advanced_memory_flag.py:24 - async def test_advanced_memory_not_loaded_when_disabled() -> None:
packages\python\tests\test_advanced_memory_flag.py:26 - character=Character(name="AdvMemoryOff", bio=["Test"], advanced_memory=False),

## packages\python\tests\test_advanced_planning_behavior.py
packages\python\tests\test_advanced_planning_behavior.py:13 - from elizaos.types.memory import Memory
packages\python\tests\test_advanced_planning_behavior.py:43 - msg = Memory(
packages\python\tests\test_advanced_planning_behavior.py:64 - msg = Memory(
packages\python\tests\test_advanced_planning_behavior.py:116 - msg = Memory(
packages\python\tests\test_advanced_planning_behavior.py:136 - _msg: Memory,
packages\python\tests\test_advanced_planning_behavior.py:147 - _msg: Memory,
packages\python\tests\test_advanced_planning_behavior.py:158 - _msg: Memory,
packages\python\tests\test_advanced_planning_behavior.py:167 - async def validate_true(_rt: IAgentRuntime, _msg: Memory, _state: State | None) -> bool:
packages\python\tests\test_advanced_planning_behavior.py:216 - msg = Memory(

## packages\python\tests\test_autonomy.py
packages\python\tests\test_autonomy.py:25 - from elizaos.types.memory import Memory
packages\python\tests\test_autonomy.py:49 - runtime.create_memory = AsyncMock(return_value="memory-id")
packages\python\tests\test_autonomy.py:70 - def test_memory():
packages\python\tests\test_autonomy.py:194 - older = Memory(
packages\python\tests\test_autonomy.py:202 - newer = Memory(
packages\python\tests\test_autonomy.py:211 - async def get_memories(params):
packages\python\tests\test_autonomy.py:263 - older = Memory(
packages\python\tests\test_autonomy.py:271 - newer = Memory(
packages\python\tests\test_autonomy.py:327 - message = Memory(
packages\python\tests\test_autonomy.py:340 - async def test_validate_not_in_autonomous_room(self, test_runtime, test_memory):
packages\python\tests\test_autonomy.py:346 - is_valid = await send_to_admin_action.validate(test_runtime, test_memory)
packages\python\tests\test_autonomy.py:350 - async def test_validate_no_admin_configured(self, test_runtime, test_memory):
packages\python\tests\test_autonomy.py:352 - mock_service.get_autonomous_room_id = MagicMock(return_value=test_memory.room_id)
packages\python\tests\test_autonomy.py:356 - is_valid = await send_to_admin_action.validate(test_runtime, test_memory)
packages\python\tests\test_autonomy.py:366 - async def test_returns_empty_when_no_service(self, test_runtime, test_memory):
packages\python\tests\test_autonomy.py:369 - result = await admin_chat_provider.get(test_runtime, test_memory, {})
packages\python\tests\test_autonomy.py:374 - async def test_returns_empty_when_not_in_autonomous_room(self, test_runtime, test_memory):
packages\python\tests\test_autonomy.py:379 - result = await admin_chat_provider.get(test_runtime, test_memory, {})
packages\python\tests\test_autonomy.py:384 - async def test_indicates_no_admin_configured(self, test_runtime, test_memory):
packages\python\tests\test_autonomy.py:386 - mock_service.get_autonomous_room_id = MagicMock(return_value=test_memory.room_id)
... and 10 more

## packages\python\tests\test_history_compaction.py
packages\python\tests\test_history_compaction.py:9 - from elizaos.advanced_memory.actions.reset_session import (
packages\python\tests\test_history_compaction.py:12 - from elizaos.advanced_memory.actions.reset_session import (
packages\python\tests\test_history_compaction.py:21 - from elizaos.types import Content, Memory, as_uuid
packages\python\tests\test_history_compaction.py:52 - def _message() -> Memory:

## packages\python\tests\test_memory_bounds.py
packages\python\tests\test_memory_bounds.py:8 - from elizaos.advanced_memory.memory_service import MemoryService
packages\python\tests\test_memory_bounds.py:9 - from elizaos.advanced_memory.types import LongTermMemoryCategory
packages\python\tests\test_memory_bounds.py:63 - async def test_advanced_memory_fallback_storage_is_bounded() -> None:
packages\python\tests\test_memory_bounds.py:64 - service = MemoryService(runtime=None)
packages\python\tests\test_memory_bounds.py:88 - category=LongTermMemoryCategory.SEMANTIC,
packages\python\tests\test_memory_bounds.py:100 - category=LongTermMemoryCategory.SEMANTIC,

## packages\python\tests\test_runtime.py
packages\python\tests\test_runtime.py:89 - async def get_data(rt: IAgentRuntime, msg: Memory, state: State) -> ProviderResult:
packages\python\tests\test_runtime.py:105 - async def validate(rt: IAgentRuntime, msg: Memory, state: State | None) -> bool:
packages\python\tests\test_runtime.py:110 - msg: Memory,
packages\python\tests\test_runtime.py:114 - responses: list[Memory] | None,
packages\python\tests\test_runtime.py:132 - async def validate(rt: IAgentRuntime, msg: Memory, state: State | None) -> bool:
packages\python\tests\test_runtime.py:137 - msg: Memory,
packages\python\tests\test_runtime.py:141 - responses: list[Memory] | None,
packages\python\tests\test_runtime.py:160 - async def get_data(rt: IAgentRuntime, msg: Memory, state: State) -> ProviderResult:
packages\python\tests\test_runtime.py:210 - class TestAgentRuntimeModels:

## packages\python\tests\test_schedule_follow_up_action.py
packages\python\tests\test_schedule_follow_up_action.py:17 - from elizaos.types import Content, Memory, as_uuid
packages\python\tests\test_schedule_follow_up_action.py:35 - message: Memory,
packages\python\tests\test_schedule_follow_up_action.py:39 - responses: list[Memory] | None,
packages\python\tests\test_schedule_follow_up_action.py:111 - async def compose_state(self, _message: Memory, _providers: list[str]) -> SimpleNamespace:
packages\python\tests\test_schedule_follow_up_action.py:147 - message = Memory(
packages\python\tests\test_schedule_follow_up_action.py:194 - message = Memory(
packages\python\tests\test_schedule_follow_up_action.py:242 - message = Memory(

## packages\python\tests\test_send_message_action_targets.py
packages\python\tests\test_send_message_action_targets.py:14 - from elizaos.types.memory import Memory
packages\python\tests\test_send_message_action_targets.py:21 - runtime.create_memory = AsyncMock()
packages\python\tests\test_send_message_action_targets.py:30 - def _make_message() -> Memory:
packages\python\tests\test_send_message_action_targets.py:69 - create_kwargs = runtime.create_memory.await_args.kwargs

## packages\python\tests\test_types.py
packages\python\tests\test_types.py:44 - def test_default_uuid_can_be_used_in_memory(self) -> None:
packages\python\tests\test_types.py:45 - memory = Memory(
packages\python\tests\test_types.py:50 - assert memory.room_id == DEFAULT_UUID
packages\python\tests\test_types.py:75 - class TestMemory:
packages\python\tests\test_types.py:76 - def test_minimal_memory(self) -> None:
packages\python\tests\test_types.py:77 - memory = Memory(
packages\python\tests\test_types.py:82 - assert memory.entity_id == "12345678-1234-1234-1234-123456789012"
packages\python\tests\test_types.py:83 - assert memory.content.text == "Hello"
packages\python\tests\test_types.py:85 - def test_memory_with_embedding(self) -> None:
packages\python\tests\test_types.py:87 - memory = Memory(
packages\python\tests\test_types.py:94 - assert list(memory.embedding) == pytest.approx(embedding, rel=1e-6)

## packages\python\tests\test_validation.py
packages\python\tests\test_validation.py:3 - from elizaos.types.memory import Memory
packages\python\tests\test_validation.py:8 - def create_mock_memory(text: str, id: str = "1") -> Memory:
packages\python\tests\test_validation.py:20 - mock_message = Memory(
packages\python\tests\test_validation.py:73 - msg = create_mock_memory("I want to transfer sol", "124")
packages\python\tests\test_validation.py:83 - msg_upper = create_mock_memory("I want to TRANSFER sol", "125")
packages\python\tests\test_validation.py:90 - msg_partial = Memory(
packages\python\tests\test_validation.py:102 - mock_message = create_mock_memory("Hello world", "123")
packages\python\tests\test_validation.py:112 - msg = create_mock_memory("Transfer 100 SOL")
packages\python\tests\test_validation.py:125 - msg = create_mock_memory("user@example.com")
packages\python\tests\test_validation.py:130 - msg = create_mock_memory("Transfer 100 €")
packages\python\tests\test_validation.py:135 - msg = create_mock_memory("Hello (world) [ok]")
packages\python\tests\test_validation.py:140 - msg = create_mock_memory(long_text)

## packages\python\tests\verify_memory_architecture.py
packages\python\tests\verify_memory_architecture.py:10 - from elizaos.types.memory import Memory
packages\python\tests\verify_memory_architecture.py:71 - class VerifyMemoryArchitecture(unittest.IsolatedAsyncioTestCase):
packages\python\tests\verify_memory_architecture.py:72 - async def test_end_to_end_memory_flow(self):
packages\python\tests\verify_memory_architecture.py:83 - short_memory = Memory(
packages\python\tests\verify_memory_architecture.py:97 - payload = SimpleNamespace(extra={"memory": short_memory})
packages\python\tests\verify_memory_architecture.py:102 - stored_short = runtime._adapter.update_memory.call_args[0][0]
packages\python\tests\verify_memory_architecture.py:119 - long_memory = Memory(
packages\python\tests\verify_memory_architecture.py:129 - payload_long = SimpleNamespace(extra={"memory": long_memory})
packages\python\tests\verify_memory_architecture.py:133 - stored_long = runtime._adapter.update_memory.call_args[0][0]

## packages\rust\README.md
packages\rust\README.md:24 - Benchmarks and harnesses can attach metadata to inbound messages (stored under `Memory.metadata` as custom JSON):

## packages\rust\examples\README.md
packages\rust\examples\README.md:42 - Demonstrates UUID generation, character parsing, and memory operations:

## packages\rust\examples\wasm\basic.ts
packages\rust\examples\wasm\basic.ts:33 - const memory = elizaos.parseMemory(
packages\rust\examples\wasm\basic.ts:40 - const memoryJson = memory.toJson();
packages\rust\examples\wasm\basic.ts:41 - console.log(`Memory JSON: ${memoryJson}`);

## packages\rust\examples\wasm\benchmark.ts
packages\rust\examples\wasm\benchmark.ts:53 - const memoryJson = JSON.stringify({
packages\rust\examples\wasm\benchmark.ts:58 - const memory = elizaos.parseMemory(memoryJson);
packages\rust\examples\wasm\benchmark.ts:59 - const roundTrip = memory.toJson();

## packages\rust\src\deterministic.rs
packages\rust\src\deterministic.rs:8 - use crate::types::memory::Memory;
packages\rust\src\deterministic.rs:104 - message: Option<&Memory>,

## packages\rust\src\lib.rs
packages\rust\src\lib.rs:111 - pub use types::memory::{Memory, MemoryMetadata};

## packages\rust\src\prompts.rs
packages\rust\src\prompts.rs:517 - /// Template for extracting long-term memories from conversations.
packages\rust\src\prompts.rs:518 - pub const LONG_TERM_EXTRACTION_TEMPLATE: &str = r#"# Task: Extract Long-Term Memory (Strict Criteria)

## packages\rust\src\runtime.rs
packages\rust\src\runtime.rs:5 - use crate::advanced_memory;
packages\rust\src\runtime.rs:17 - use crate::types::memory::Memory;
packages\rust\src\runtime.rs:69 - async fn get_memories(&self, params: GetMemoriesParams) -> Result<Vec<Memory>>;
packages\rust\src\runtime.rs:72 - async fn search_memories(&self, params: SearchMemoriesParams) -> Result<Vec<Memory>>;
packages\rust\src\runtime.rs:74 - // ----- Memory CRUD: batch-only (aligned with TypeScript adapter API) -----
packages\rust\src\runtime.rs:77 - async fn create_memories(&self, items: &[CreateMemoryItem]) -> Result<Vec<UUID>>;
packages\rust\src\runtime.rs:80 - async fn update_memories(&self, items: &[UpdateMemoryItem]) -> Result<()>;
packages\rust\src\runtime.rs:83 - async fn delete_memories(&self, memory_ids: &[UUID]) -> Result<()>;
packages\rust\src\runtime.rs:86 - async fn get_memory_by_id(&self, id: &UUID) -> Result<Option<Memory>>;
packages\rust\src\runtime.rs:89 - /// Default: calls [get_memory_by_id] for each id. Adapters may override for efficiency.
packages\rust\src\runtime.rs:97 - if let Some(m) = self.get_memory_by_id(id).await? {
packages\rust\src\runtime.rs:106 - /// Create a single memory. Default: calls [create_memories] with one item.
packages\rust\src\runtime.rs:107 - async fn create_memory(&self, memory: &Memory, table_name: &str) -> Result<UUID> {
packages\rust\src\runtime.rs:112 - /// Create a single memory with optional unique flag. Default: calls [create_memories].
packages\rust\src\runtime.rs:115 - memory: &Memory,
packages\rust\src\runtime.rs:119 - let items = [CreateMemoryItem {
packages\rust\src\runtime.rs:120 - memory: memory.clone(),
packages\rust\src\runtime.rs:130 - /// Update a single memory. Default: calls [update_memories] with one item.
packages\rust\src\runtime.rs:131 - async fn update_memory(&self, memory: &Memory) -> Result<bool> {
packages\rust\src\runtime.rs:133 - UpdateMemoryItem::from_memory(memory).context("update_memory requires memory.id")?;
... and 28 more

## packages\rust\src\sync_runtime.rs
packages\rust\src\sync_runtime.rs:54 - use crate::types::memory::Memory;
packages\rust\src\sync_runtime.rs:123 - async fn get_memories(&self, params: GetMemoriesParams) -> Result<Vec<Memory>>;
packages\rust\src\sync_runtime.rs:126 - async fn search_memories(&self, params: SearchMemoriesParams) -> Result<Vec<Memory>>;
packages\rust\src\sync_runtime.rs:129 - async fn create_memory(&self, memory: &Memory, table_name: &str) -> Result<UUID>;
packages\rust\src\sync_runtime.rs:132 - async fn update_memory(&self, memory: &Memory) -> Result<bool>;
packages\rust\src\sync_runtime.rs:135 - async fn delete_memory(&self, memory_id: &UUID) -> Result<()>;
packages\rust\src\sync_runtime.rs:138 - async fn get_memory_by_id(&self, id: &UUID) -> Result<Option<Memory>>;
packages\rust\src\sync_runtime.rs:149 - if let Some(m) = self.get_memory_by_id(id).await? {
packages\rust\src\sync_runtime.rs:157 - async fn create_memories(&self, items: &[CreateMemoryItem]) -> Result<Vec<UUID>> {
packages\rust\src\sync_runtime.rs:166 - async fn update_memories(&self, items: &[UpdateMemoryItem]) -> Result<()> {
packages\rust\src\sync_runtime.rs:168 - let mut existing = match self.get_memory_by_id(&item.id).await? {
packages\rust\src\sync_runtime.rs:193 - async fn delete_memories(&self, memory_ids: &[UUID]) -> Result<()> {
packages\rust\src\sync_runtime.rs:353 - async fn get(&self, message: &Memory, state: &State) -> Result<UnifiedProviderResult>;
packages\rust\src\sync_runtime.rs:363 - async fn validate(&self, message: &Memory, state: Option<&State>) -> bool;
packages\rust\src\sync_runtime.rs:368 - message: &Memory,
packages\rust\src\sync_runtime.rs:381 - async fn validate(&self, message: &Memory, state: Option<&State>) -> bool;
packages\rust\src\sync_runtime.rs:386 - message: &Memory,
packages\rust\src\sync_runtime.rs:691 - pub async fn compose_state(&self, message: &Memory) -> Result<State> {
packages\rust\src\sync_runtime.rs:851 - message: &Memory,
packages\rust\src\sync_runtime.rs:898 - message: &Memory,
... and 15 more

## packages\rust\src\validation.rs
packages\rust\src\validation.rs:1 - use crate::types::memory::Memory;
packages\rust\src\validation.rs:8 - message: &Memory,
packages\rust\src\validation.rs:9 - recent_messages: &[Memory],
packages\rust\src\validation.rs:52 - message: &Memory,
packages\rust\src\validation.rs:53 - recent_messages: &[Memory],
packages\rust\src\validation.rs:95 - use crate::types::memory::Memory;
packages\rust\src\validation.rs:98 - fn create_mock_memory(text: &str) -> Memory {
packages\rust\src\validation.rs:118 - let msg = create_mock_memory("I want to transfer sol");
packages\rust\src\validation.rs:122 - let msg_empty = create_mock_memory("ok");
packages\rust\src\validation.rs:131 - let recent_none = vec![create_mock_memory("hello")];
packages\rust\src\validation.rs:139 - let msg_caps = create_mock_memory("TRANSFER NOW");
packages\rust\src\validation.rs:148 - let msg = create_mock_memory("I want to transfer 100 sol");
packages\rust\src\validation.rs:155 - let msg_empty = create_mock_memory("ok");
packages\rust\src\validation.rs:163 - let recent_none = vec![create_mock_memory("hello")];
packages\rust\src\validation.rs:170 - let msg_unicode = create_mock_memory("Transfer 100 €");
packages\rust\src\validation.rs:178 - let msg_special = create_mock_memory("Hello (world) [ok]");

## packages\rust\src\advanced_capabilities\actions\add_contact.rs
packages\rust\src\advanced_capabilities\actions\add_contact.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\advanced_capabilities\actions\add_contact.rs:41 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\add_contact.rs:49 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\add_contact.rs:51 - _responses: Option<&[Memory]>,

## packages\rust\src\advanced_capabilities\actions\follow_room.rs
packages\rust\src\advanced_capabilities\actions\follow_room.rs:11 - use crate::types::{ActionResult, Content, Memory, MemoryType, State};
packages\rust\src\advanced_capabilities\actions\follow_room.rs:43 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\follow_room.rs:73 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\follow_room.rs:75 - _responses: Option<&[Memory]>,
packages\rust\src\advanced_capabilities\actions\follow_room.rs:130 - MemoryType::Action,

## packages\rust\src\advanced_capabilities\actions\image_generation.rs
packages\rust\src\advanced_capabilities\actions\image_generation.rs:11 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\advanced_capabilities\actions\image_generation.rs:44 - async fn validate(&self, runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\image_generation.rs:51 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\image_generation.rs:53 - _responses: Option<&[Memory]>,

## packages\rust\src\advanced_capabilities\actions\mute_room.rs
packages\rust\src\advanced_capabilities\actions\mute_room.rs:11 - use crate::types::{ActionResult, Content, Memory, MemoryType, State};
packages\rust\src\advanced_capabilities\actions\mute_room.rs:43 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\mute_room.rs:73 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\mute_room.rs:75 - _responses: Option<&[Memory]>,
packages\rust\src\advanced_capabilities\actions\mute_room.rs:130 - MemoryType::Action,

## packages\rust\src\advanced_capabilities\actions\remove_contact.rs
packages\rust\src\advanced_capabilities\actions\remove_contact.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\advanced_capabilities\actions\remove_contact.rs:41 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\remove_contact.rs:48 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\remove_contact.rs:50 - _responses: Option<&[Memory]>,

## packages\rust\src\advanced_capabilities\actions\roles.rs
packages\rust\src\advanced_capabilities\actions\roles.rs:9 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\advanced_capabilities\actions\roles.rs:44 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\roles.rs:76 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\roles.rs:78 - _responses: Option<&[Memory]>,

## packages\rust\src\advanced_capabilities\actions\search_contacts.rs
packages\rust\src\advanced_capabilities\actions\search_contacts.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\advanced_capabilities\actions\search_contacts.rs:41 - async fn validate(&self, runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\search_contacts.rs:48 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\search_contacts.rs:50 - _responses: Option<&[Memory]>,

## packages\rust\src\advanced_capabilities\actions\send_message.rs
packages\rust\src\advanced_capabilities\actions\send_message.rs:13 - use crate::types::{ActionResult, Content, Memory, MemoryType, State};
packages\rust\src\advanced_capabilities\actions\send_message.rs:45 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\send_message.rs:52 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\send_message.rs:54 - responses: Option<&[Memory]>,
packages\rust\src\advanced_capabilities\actions\send_message.rs:86 - let message_memory = Memory {
packages\rust\src\advanced_capabilities\actions\send_message.rs:113 - MemoryType::Message,
packages\rust\src\advanced_capabilities\actions\send_message.rs:120 - if let Ok(message_json) = serde_json::to_value(&message_memory) {

## packages\rust\src\advanced_capabilities\actions\settings.rs
packages\rust\src\advanced_capabilities\actions\settings.rs:9 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\advanced_capabilities\actions\settings.rs:40 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\settings.rs:47 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\settings.rs:49 - _responses: Option<&[Memory]>,

## packages\rust\src\advanced_capabilities\actions\unfollow_room.rs
packages\rust\src\advanced_capabilities\actions\unfollow_room.rs:11 - use crate::types::{ActionResult, Content, Memory, MemoryType, State};
packages\rust\src\advanced_capabilities\actions\unfollow_room.rs:43 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\unfollow_room.rs:73 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\unfollow_room.rs:75 - _responses: Option<&[Memory]>,
packages\rust\src\advanced_capabilities\actions\unfollow_room.rs:128 - MemoryType::Action,

## packages\rust\src\advanced_capabilities\actions\unmute_room.rs
packages\rust\src\advanced_capabilities\actions\unmute_room.rs:11 - use crate::types::{ActionResult, Content, Memory, MemoryType, State};
packages\rust\src\advanced_capabilities\actions\unmute_room.rs:43 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\unmute_room.rs:73 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\unmute_room.rs:75 - _responses: Option<&[Memory]>,
packages\rust\src\advanced_capabilities\actions\unmute_room.rs:128 - MemoryType::Action,

## packages\rust\src\advanced_capabilities\actions\update_contact.rs
packages\rust\src\advanced_capabilities\actions\update_contact.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\advanced_capabilities\actions\update_contact.rs:41 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\update_contact.rs:48 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\update_contact.rs:50 - _responses: Option<&[Memory]>,

## packages\rust\src\advanced_capabilities\actions\update_entity.rs
packages\rust\src\advanced_capabilities\actions\update_entity.rs:12 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\advanced_capabilities\actions\update_entity.rs:44 - async fn validate(&self, _runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\advanced_capabilities\actions\update_entity.rs:51 - message: &Memory,
packages\rust\src\advanced_capabilities\actions\update_entity.rs:53 - _responses: Option<&[Memory]>,

## packages\rust\src\advanced_capabilities\providers\agent_settings.rs
packages\rust\src\advanced_capabilities\providers\agent_settings.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\advanced_capabilities\providers\agent_settings.rs:47 - _message: &Memory,

## packages\rust\src\advanced_capabilities\providers\contacts.rs
packages\rust\src\advanced_capabilities\providers\contacts.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\advanced_capabilities\providers\contacts.rs:36 - _message: &Memory,

## packages\rust\src\advanced_capabilities\providers\facts.rs
packages\rust\src\advanced_capabilities\providers\facts.rs:9 - use crate::types::{Memory, MemoryType, ProviderResult, State};
packages\rust\src\advanced_capabilities\providers\facts.rs:36 - message: &Memory,
packages\rust\src\advanced_capabilities\providers\facts.rs:48 - .get_memories(None, Some(entity_id), Some(MemoryType::Fact), 10)
packages\rust\src\advanced_capabilities\providers\facts.rs:88 - .get_memories(Some(room_id), None, Some(MemoryType::Fact), 5)

## packages\rust\src\advanced_capabilities\providers\follow_ups.rs
packages\rust\src\advanced_capabilities\providers\follow_ups.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\advanced_capabilities\providers\follow_ups.rs:36 - _message: &Memory,

## packages\rust\src\advanced_capabilities\providers\knowledge.rs
packages\rust\src\advanced_capabilities\providers\knowledge.rs:10 - use crate::types::{Memory, MemoryType, ProviderResult, State};
packages\rust\src\advanced_capabilities\providers\knowledge.rs:37 - message: &Memory,

## packages\rust\src\advanced_capabilities\providers\relationships.rs
packages\rust\src\advanced_capabilities\providers\relationships.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\advanced_capabilities\providers\relationships.rs:36 - message: &Memory,

## packages\rust\src\advanced_capabilities\providers\roles.rs
packages\rust\src\advanced_capabilities\providers\roles.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\advanced_capabilities\providers\roles.rs:36 - message: &Memory,

## packages\rust\src\advanced_capabilities\providers\settings.rs
packages\rust\src\advanced_capabilities\providers\settings.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\advanced_capabilities\providers\settings.rs:49 - _message: &Memory,

## packages\rust\src\advanced_memory\memory_service.rs
packages\rust\src\advanced_memory\memory_service.rs:1 - use crate::advanced_memory::types::{
packages\rust\src\advanced_memory\memory_service.rs:6 - use crate::types::memory::{Memory, MemoryMetadata};
packages\rust\src\advanced_memory\memory_service.rs:14 - pub struct MemoryService {
packages\rust\src\advanced_memory\memory_service.rs:16 - config: Mutex<MemoryConfig>,
packages\rust\src\advanced_memory\memory_service.rs:20 - /// In-memory extraction checkpoints: key = "entityId:roomId" -> message count
packages\rust\src\advanced_memory\memory_service.rs:50 - pub fn new(runtime: Weak<AgentRuntime>, config: MemoryConfig) -> Self {
packages\rust\src\advanced_memory\memory_service.rs:89 - pub fn update_config(&self, updates: MemoryConfig) {
packages\rust\src\advanced_memory\memory_service.rs:195 - pub async fn store_long_term_memory(&self, memory: LongTermMemory) -> Result<UUID> {
packages\rust\src\advanced_memory\memory_service.rs:201 - let metadata = serde_json::to_value(&memory.metadata).unwrap_or(serde_json::Value::Null);
packages\rust\src\advanced_memory\memory_service.rs:210 - serde_json::to_value(&memory.category).unwrap(),
packages\rust\src\advanced_memory\memory_service.rs:212 - if let Some(conf) = memory.confidence {
packages\rust\src\advanced_memory\memory_service.rs:218 - if let Some(src) = &memory.source {
packages\rust\src\advanced_memory\memory_service.rs:221 - if let Some(acc) = memory.access_count {
packages\rust\src\advanced_memory\memory_service.rs:228 - let mem = Memory {
packages\rust\src\advanced_memory\memory_service.rs:229 - id: Some(memory.id),
packages\rust\src\advanced_memory\memory_service.rs:230 - entity_id: memory.entity_id.clone(),
packages\rust\src\advanced_memory\memory_service.rs:231 - agent_id: Some(memory.agent_id),
packages\rust\src\advanced_memory\memory_service.rs:233 - text: Some(memory.content),
packages\rust\src\advanced_memory\memory_service.rs:236 - embedding: memory.embedding,
packages\rust\src\advanced_memory\memory_service.rs:238 - metadata: Some(MemoryMetadata::Custom(serde_json::Value::Object(
... and 18 more

## packages\rust\src\advanced_memory\mod.rs
packages\rust\src\advanced_memory\mod.rs:3 - //! Rust parity goals (w/ TS core advanced memory):
packages\rust\src\advanced_memory\mod.rs:4 - //! - `MemoryService` ("memory") with config + extraction checkpointing
packages\rust\src\advanced_memory\mod.rs:5 - //! - Providers: `LONG_TERM_MEMORY`, `SUMMARIZED_CONTEXT`
packages\rust\src\advanced_memory\mod.rs:6 - //! - Evaluators: `MEMORY_SUMMARIZATION`, `LONG_TERM_MEMORY_EXTRACTION`
packages\rust\src\advanced_memory\mod.rs:27 - use crate::types::Memory;
packages\rust\src\advanced_memory\mod.rs:35 - const TABLE_LONG_TERM_MEMORY: &str = "long_term_memory";
packages\rust\src\advanced_memory\mod.rs:36 - const TABLE_EXTRACTION_CHECKPOINT: &str = "memory_extraction_checkpoint";
packages\rust\src\advanced_memory\mod.rs:40 - pub struct MemoryConfig {
packages\rust\src\advanced_memory\mod.rs:109 - pub struct LongTermMemory {
packages\rust\src\advanced_memory\mod.rs:117 - pub category: LongTermMemoryCategory,
packages\rust\src\advanced_memory\mod.rs:194 - struct MemoryExtraction {
packages\rust\src\advanced_memory\mod.rs:195 - category: LongTermMemoryCategory,
packages\rust\src\advanced_memory\mod.rs:200 - fn parse_memory_extraction_xml(xml: &str) -> Vec<MemoryExtraction> {
packages\rust\src\advanced_memory\mod.rs:201 - let mut out: Vec<MemoryExtraction> = Vec::new();
packages\rust\src\advanced_memory\mod.rs:203 - while let Some(mem_start) = rem.find("<memory>") {
packages\rust\src\advanced_memory\mod.rs:204 - let after = &rem[mem_start + "<memory>".len()..];
packages\rust\src\advanced_memory\mod.rs:205 - let Some(mem_end) = after.find("</memory>") else {
packages\rust\src\advanced_memory\mod.rs:216 - if let Some(category) = LongTermMemoryCategory::from_str(&cat) {
packages\rust\src\advanced_memory\mod.rs:225 - rem = &after[mem_end + "</memory>".len()..];
packages\rust\src\advanced_memory\mod.rs:232 - pub struct MemoryService {
... and 71 more

## packages\rust\src\advanced_memory\prompts.rs
packages\rust\src\advanced_memory\prompts.rs:68 - pub const LONG_TERM_EXTRACTION_TEMPLATE: &str = r#"# Task: Extract Long-Term Memory (Strict Criteria)

## packages\rust\src\advanced_memory\types.rs
packages\rust\src\advanced_memory\types.rs:16 - pub struct LongTermMemory {
packages\rust\src\advanced_memory\types.rs:20 - pub category: LongTermMemoryCategory,
packages\rust\src\advanced_memory\types.rs:63 - pub struct MemoryConfig {
packages\rust\src\advanced_memory\types.rs:106 - /// Result from LLM long-term memory extraction (XML parsed)
packages\rust\src\advanced_memory\types.rs:108 - pub struct MemoryExtraction {
packages\rust\src\advanced_memory\types.rs:109 - pub category: LongTermMemoryCategory,

## packages\rust\src\advanced_memory\actions\reset_session.rs
packages\rust\src\advanced_memory\actions\reset_session.rs:10 - use crate::types::memory::Memory;
packages\rust\src\advanced_memory\actions\reset_session.rs:44 - async fn validate(&self, message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\advanced_memory\actions\reset_session.rs:85 - message: &Memory,

## packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:1 - use crate::advanced_memory::memory_service::MemoryService;
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:2 - use crate::advanced_memory::prompts::LONG_TERM_EXTRACTION_TEMPLATE;
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:3 - use crate::advanced_memory::types::{LongTermMemory, LongTermMemoryCategory, MemoryExtraction};
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:9 - use crate::types::memory::Memory;
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:30 - /// Parse XML memory extraction response from LLM.
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:31 - fn parse_memory_extraction_xml(xml: &str) -> Vec<MemoryExtraction> {
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:48 - warn!("Invalid memory category: {}", category_str);
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:53 - "episodic" => LongTermMemoryCategory::Episodic,
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:54 - "semantic" => LongTermMemoryCategory::Semantic,
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:55 - "procedural" => LongTermMemoryCategory::Procedural,
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:100 - name: "LONG_TERM_MEMORY_EXTRACTION".to_string(),
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:112 - async fn validate(&self, message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:128 - let service_opt = runtime.get_service("memory").await;
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:133 - let memory_service = match service_arc.as_any().downcast_ref::<MemoryService>() {
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:138 - let config = memory_service.get_config();
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:152 - message: &Memory,
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:161 - let service_opt = runtime.get_service("memory").await;
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:169 - let memory_service = match service_arc.as_any().downcast_ref::<MemoryService>() {
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:172 - error!("MemoryService type mismatch");
packages\rust\src\advanced_memory\evaluators\long_term_extraction.rs:177 - let config = memory_service.get_config();
... and 13 more

## packages\rust\src\advanced_memory\evaluators\summarization.rs
packages\rust\src\advanced_memory\evaluators\summarization.rs:1 - use crate::advanced_memory::memory_service::MemoryService;
packages\rust\src\advanced_memory\evaluators\summarization.rs:2 - use crate::advanced_memory::prompts::{
packages\rust\src\advanced_memory\evaluators\summarization.rs:5 - use crate::advanced_memory::types::SummaryResult;
packages\rust\src\advanced_memory\evaluators\summarization.rs:11 - use crate::types::memory::Memory;
packages\rust\src\advanced_memory\evaluators\summarization.rs:27 - fn is_dialogue_message(msg: &Memory) -> bool {
packages\rust\src\advanced_memory\evaluators\summarization.rs:33 - crate::types::memory::MemoryMetadata::Custom(serde_json::Value::Object(map)) => {
packages\rust\src\advanced_memory\evaluators\summarization.rs:112 - name: "MEMORY_SUMMARIZATION".to_string(),
packages\rust\src\advanced_memory\evaluators\summarization.rs:125 - async fn validate(&self, message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\advanced_memory\evaluators\summarization.rs:136 - let service_opt = runtime.get_service("memory").await;
packages\rust\src\advanced_memory\evaluators\summarization.rs:141 - let memory_service = match service_arc.as_any().downcast_ref::<MemoryService>() {
packages\rust\src\advanced_memory\evaluators\summarization.rs:146 - let config = memory_service.get_config();
packages\rust\src\advanced_memory\evaluators\summarization.rs:152 - let existing = memory_service
packages\rust\src\advanced_memory\evaluators\summarization.rs:168 - message: &Memory,
packages\rust\src\advanced_memory\evaluators\summarization.rs:177 - let service_opt = runtime.get_service("memory").await;
packages\rust\src\advanced_memory\evaluators\summarization.rs:185 - let memory_service = match service_arc.as_any().downcast_ref::<MemoryService>() {
packages\rust\src\advanced_memory\evaluators\summarization.rs:188 - error!("MemoryService type mismatch");
packages\rust\src\advanced_memory\evaluators\summarization.rs:193 - let config = memory_service.get_config();
packages\rust\src\advanced_memory\evaluators\summarization.rs:198 - let existing = memory_service
packages\rust\src\advanced_memory\evaluators\summarization.rs:219 - let all_dialogue: Vec<&Memory> = all_messages
packages\rust\src\advanced_memory\evaluators\summarization.rs:242 - let mut sorted_dialogue: Vec<&Memory> = all_dialogue;
... and 3 more

## packages\rust\src\advanced_memory\providers\context_summary.rs
packages\rust\src\advanced_memory\providers\context_summary.rs:1 - use crate::advanced_memory::memory_service::MemoryService;
packages\rust\src\advanced_memory\providers\context_summary.rs:4 - use crate::types::memory::Memory;
packages\rust\src\advanced_memory\providers\context_summary.rs:53 - async fn get(&self, message: &Memory, _state: &State) -> Result<ProviderResult> {
packages\rust\src\advanced_memory\providers\context_summary.rs:59 - let service_opt = runtime.get_service("memory").await;
packages\rust\src\advanced_memory\providers\context_summary.rs:64 - let memory_service = match service_arc.as_any().downcast_ref::<MemoryService>() {
packages\rust\src\advanced_memory\providers\context_summary.rs:70 - let current_summary = match memory_service.get_current_session_summary(room_id).await {

## packages\rust\src\advanced_memory\providers\long_term_memory.rs
packages\rust\src\advanced_memory\providers\long_term_memory.rs:1 - use crate::advanced_memory::memory_service::MemoryService;
packages\rust\src\advanced_memory\providers\long_term_memory.rs:2 - use crate::advanced_memory::types::LongTermMemory;
packages\rust\src\advanced_memory\providers\long_term_memory.rs:5 - use crate::types::memory::Memory;
packages\rust\src\advanced_memory\providers\long_term_memory.rs:12 - pub struct LongTermMemoryProvider {
packages\rust\src\advanced_memory\providers\long_term_memory.rs:42 - service: &MemoryService,
packages\rust\src\advanced_memory\providers\long_term_memory.rs:56 - let mut grouped: Vec<(String, Vec<&LongTermMemory>)> = Vec::new();
packages\rust\src\advanced_memory\providers\long_term_memory.rs:105 - async fn get(&self, message: &Memory, _state: &State) -> Result<ProviderResult> {
packages\rust\src\advanced_memory\providers\long_term_memory.rs:111 - let service_opt = runtime.get_service("memory").await;
packages\rust\src\advanced_memory\providers\long_term_memory.rs:114 - if let Some(memory_service) = service_arc.as_any().downcast_ref::<MemoryService>() {
packages\rust\src\advanced_memory\providers\long_term_memory.rs:120 - let (text, memories) = self.get_formatted_memories(memory_service, entity_id).await;

## packages\rust\src\advanced_planning\mod.rs
packages\rust\src\advanced_planning\mod.rs:14 - use crate::types::memory::Memory;
packages\rust\src\advanced_planning\mod.rs:85 - async fn get(&self, message: &Memory, _state: &State) -> Result<ProviderResult, anyhow::Error> {
packages\rust\src\advanced_planning\mod.rs:260 - async fn validate(&self, _message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\advanced_planning\mod.rs:266 - message: &Memory,
packages\rust\src\advanced_planning\mod.rs:336 - async fn validate(&self, _message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\advanced_planning\mod.rs:342 - _message: &Memory,
packages\rust\src\advanced_planning\mod.rs:409 - async fn validate(&self, _message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\advanced_planning\mod.rs:415 - _message: &Memory,
packages\rust\src\advanced_planning\mod.rs:450 - async fn validate(&self, message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\advanced_planning\mod.rs:466 - _message: &Memory,
packages\rust\src\advanced_planning\mod.rs:591 - pub fn create_simple_plan(&self, message: &Memory) -> ActionPlan {
packages\rust\src\advanced_planning\mod.rs:789 - message: &Memory,
packages\rust\src\advanced_planning\mod.rs:846 - message: &Memory,
packages\rust\src\advanced_planning\mod.rs:1019 - async fn validate(&self, _message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\advanced_planning\mod.rs:1025 - _message: &Memory,
packages\rust\src\advanced_planning\mod.rs:1097 - let message = Memory::message(UUID::new_v4(), UUID::new_v4(), "hi");

## packages\rust\src\advanced_planning\actions\schedule_follow_up.rs
packages\rust\src\advanced_planning\actions\schedule_follow_up.rs:9 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\advanced_planning\actions\schedule_follow_up.rs:42 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\advanced_planning\actions\schedule_follow_up.rs:49 - message: &Memory,
packages\rust\src\advanced_planning\actions\schedule_follow_up.rs:51 - _responses: Option<&[Memory]>,

## packages\rust\src\autonomy\action.rs
packages\rust\src\autonomy\action.rs:12 - use crate::types::memory::Memory;
packages\rust\src\autonomy\action.rs:44 - async fn validate(&self, message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\autonomy\action.rs:57 - message: &Memory,
packages\rust\src\autonomy\action.rs:94 - let mut mem = Memory::new(rt.agent_id.clone(), rt.agent_id.clone(), content);
packages\rust\src\autonomy\action.rs:96 - let _ = adapter.create_memory(&mem, "messages").await?;

## packages\rust\src\autonomy\providers.rs
packages\rust\src\autonomy\providers.rs:13 - use crate::types::memory::Memory;
packages\rust\src\autonomy\providers.rs:48 - async fn get(&self, message: &Memory, _state: &State) -> Result<ProviderResult> {
packages\rust\src\autonomy\providers.rs:168 - async fn get(&self, message: &Memory, _state: &State) -> Result<ProviderResult> {

## packages\rust\src\autonomy\service.rs
packages\rust\src\autonomy\service.rs:23 - use crate::types::memory::Memory;
packages\rust\src\autonomy\service.rs:340 - fn dedupe_and_sort_memories(memories: Vec<Memory>, messages: Vec<Memory>) -> Vec<Memory> {
packages\rust\src\autonomy\service.rs:341 - let mut by_id: HashMap<UUID, Memory> = HashMap::new();
packages\rust\src\autonomy\service.rs:354 - let mut combined: Vec<Memory> = by_id.into_values().collect();
packages\rust\src\autonomy\service.rs:359 - fn latest_autonomous_thought(memories: Vec<Memory>, agent_id: &UUID) -> Option<String> {
packages\rust\src\autonomy\service.rs:523 - let mut msg = crate::types::memory::Memory::new(
packages\rust\src\autonomy\service.rs:678 - let older = build_memory(
packages\rust\src\autonomy\service.rs:686 - let newer = build_memory(shared_id, 20, entity_id, room_id, "new", false);
packages\rust\src\autonomy\service.rs:699 - let first = build_memory(
packages\rust\src\autonomy\service.rs:707 - let second = build_memory(
packages\rust\src\autonomy\service.rs:715 - let other = build_memory(UUID::new_v4(), 20, other_id, room_id, "other", true);

## packages\rust\src\basic_capabilities\actions\choice.rs
packages\rust\src\basic_capabilities\actions\choice.rs:11 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\basic_capabilities\actions\choice.rs:44 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\actions\choice.rs:51 - message: &Memory,
packages\rust\src\basic_capabilities\actions\choice.rs:53 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\actions\ignore.rs
packages\rust\src\basic_capabilities\actions\ignore.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\actions\ignore.rs:42 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\actions\ignore.rs:49 - _message: &Memory,
packages\rust\src\basic_capabilities\actions\ignore.rs:51 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\actions\mod.rs
packages\rust\src\basic_capabilities\actions\mod.rs:14 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\actions\mod.rs:31 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool;
packages\rust\src\basic_capabilities\actions\mod.rs:37 - message: &Memory,
packages\rust\src\basic_capabilities\actions\mod.rs:39 - responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\actions\none.rs
packages\rust\src\basic_capabilities\actions\none.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\actions\none.rs:42 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\actions\none.rs:49 - _message: &Memory,
packages\rust\src\basic_capabilities\actions\none.rs:51 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\actions\reply.rs
packages\rust\src\basic_capabilities\actions\reply.rs:11 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\basic_capabilities\actions\reply.rs:45 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\actions\reply.rs:52 - message: &Memory,
packages\rust\src\basic_capabilities\actions\reply.rs:54 - responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\runtime.rs
packages\rust\src\basic_capabilities\bootstrap\runtime.rs:13 - use crate::types::{Character, Content, Entity, Memory, MemoryType, ModelType, Room, State, World};
packages\rust\src\basic_capabilities\bootstrap\runtime.rs:57 - memory_type: MemoryType,
packages\rust\src\basic_capabilities\bootstrap\runtime.rs:66 - memory_type: Option<MemoryType>,
packages\rust\src\basic_capabilities\bootstrap\runtime.rs:71 - async fn search_knowledge(&self, query: &str, limit: usize) -> PluginResult<Vec<Memory>>;
packages\rust\src\basic_capabilities\bootstrap\runtime.rs:74 - async fn compose_state(&self, message: &Memory, providers: &[&str]) -> PluginResult<State>;
packages\rust\src\basic_capabilities\bootstrap\runtime.rs:153 - _message: Memory,

## packages\rust\src\basic_capabilities\bootstrap\types.rs
packages\rust\src\basic_capabilities\bootstrap\types.rs:150 - /// Memory type enumeration.
packages\rust\src\basic_capabilities\bootstrap\types.rs:166 - pub struct Memory {
packages\rust\src\basic_capabilities\bootstrap\types.rs:177 - /// Memory type
packages\rust\src\basic_capabilities\bootstrap\types.rs:178 - pub memory_type: MemoryType,
packages\rust\src\basic_capabilities\bootstrap\types.rs:193 - memory_type: MemoryType::Message,

## packages\rust\src\basic_capabilities\bootstrap\actions\add_contact.rs
packages\rust\src\basic_capabilities\bootstrap\actions\add_contact.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\bootstrap\actions\add_contact.rs:41 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\add_contact.rs:49 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\add_contact.rs:51 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\choice.rs
packages\rust\src\basic_capabilities\bootstrap\actions\choice.rs:11 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\choice.rs:44 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\choice.rs:51 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\choice.rs:53 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\follow_room.rs
packages\rust\src\basic_capabilities\bootstrap\actions\follow_room.rs:11 - use crate::types::{ActionResult, Content, Memory, MemoryType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\follow_room.rs:43 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\follow_room.rs:73 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\follow_room.rs:75 - _responses: Option<&[Memory]>,
packages\rust\src\basic_capabilities\bootstrap\actions\follow_room.rs:130 - MemoryType::Action,

## packages\rust\src\basic_capabilities\bootstrap\actions\ignore.rs
packages\rust\src\basic_capabilities\bootstrap\actions\ignore.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\bootstrap\actions\ignore.rs:42 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\ignore.rs:49 - _message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\ignore.rs:51 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\image_generation.rs
packages\rust\src\basic_capabilities\bootstrap\actions\image_generation.rs:11 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\image_generation.rs:44 - async fn validate(&self, runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\image_generation.rs:51 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\image_generation.rs:53 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\mod.rs
packages\rust\src\basic_capabilities\bootstrap\actions\mod.rs:45 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\bootstrap\actions\mod.rs:62 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool;
packages\rust\src\basic_capabilities\bootstrap\actions\mod.rs:68 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\mod.rs:70 - responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\mute_room.rs
packages\rust\src\basic_capabilities\bootstrap\actions\mute_room.rs:11 - use crate::types::{ActionResult, Content, Memory, MemoryType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\mute_room.rs:43 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\mute_room.rs:73 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\mute_room.rs:75 - _responses: Option<&[Memory]>,
packages\rust\src\basic_capabilities\bootstrap\actions\mute_room.rs:130 - MemoryType::Action,

## packages\rust\src\basic_capabilities\bootstrap\actions\none.rs
packages\rust\src\basic_capabilities\bootstrap\actions\none.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\bootstrap\actions\none.rs:42 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\none.rs:49 - _message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\none.rs:51 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\remove_contact.rs
packages\rust\src\basic_capabilities\bootstrap\actions\remove_contact.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\bootstrap\actions\remove_contact.rs:41 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\remove_contact.rs:48 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\remove_contact.rs:50 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\reply.rs
packages\rust\src\basic_capabilities\bootstrap\actions\reply.rs:11 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\reply.rs:45 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\reply.rs:52 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\reply.rs:54 - responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\roles.rs
packages\rust\src\basic_capabilities\bootstrap\actions\roles.rs:9 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\roles.rs:44 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\roles.rs:76 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\roles.rs:78 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\schedule_follow_up.rs
packages\rust\src\basic_capabilities\bootstrap\actions\schedule_follow_up.rs:9 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\bootstrap\actions\schedule_follow_up.rs:42 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\schedule_follow_up.rs:49 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\schedule_follow_up.rs:51 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\search_contacts.rs
packages\rust\src\basic_capabilities\bootstrap\actions\search_contacts.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\bootstrap\actions\search_contacts.rs:41 - async fn validate(&self, runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\search_contacts.rs:48 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\search_contacts.rs:50 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\send_message.rs
packages\rust\src\basic_capabilities\bootstrap\actions\send_message.rs:13 - use crate::types::{ActionResult, Content, Memory, MemoryType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\send_message.rs:46 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\send_message.rs:53 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\send_message.rs:55 - responses: Option<&[Memory]>,
packages\rust\src\basic_capabilities\bootstrap\actions\send_message.rs:87 - let message_memory = Memory {
packages\rust\src\basic_capabilities\bootstrap\actions\send_message.rs:114 - MemoryType::Message,
packages\rust\src\basic_capabilities\bootstrap\actions\send_message.rs:121 - if let Ok(message_json) = serde_json::to_value(&message_memory) {

## packages\rust\src\basic_capabilities\bootstrap\actions\settings.rs
packages\rust\src\basic_capabilities\bootstrap\actions\settings.rs:9 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\settings.rs:40 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\settings.rs:47 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\settings.rs:49 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\unfollow_room.rs
packages\rust\src\basic_capabilities\bootstrap\actions\unfollow_room.rs:11 - use crate::types::{ActionResult, Content, Memory, MemoryType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\unfollow_room.rs:43 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\unfollow_room.rs:73 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\unfollow_room.rs:75 - _responses: Option<&[Memory]>,
packages\rust\src\basic_capabilities\bootstrap\actions\unfollow_room.rs:128 - MemoryType::Action,

## packages\rust\src\basic_capabilities\bootstrap\actions\unmute_room.rs
packages\rust\src\basic_capabilities\bootstrap\actions\unmute_room.rs:11 - use crate::types::{ActionResult, Content, Memory, MemoryType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\unmute_room.rs:43 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\unmute_room.rs:73 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\unmute_room.rs:75 - _responses: Option<&[Memory]>,
packages\rust\src\basic_capabilities\bootstrap\actions\unmute_room.rs:128 - MemoryType::Action,

## packages\rust\src\basic_capabilities\bootstrap\actions\update_contact.rs
packages\rust\src\basic_capabilities\bootstrap\actions\update_contact.rs:10 - use crate::types::{ActionResult, Memory, State};
packages\rust\src\basic_capabilities\bootstrap\actions\update_contact.rs:41 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\update_contact.rs:48 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\update_contact.rs:50 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\actions\update_entity.rs
packages\rust\src\basic_capabilities\bootstrap\actions\update_entity.rs:12 - use crate::types::{ActionResult, Memory, ModelType, State};
packages\rust\src\basic_capabilities\bootstrap\actions\update_entity.rs:44 - async fn validate(&self, _runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\actions\update_entity.rs:51 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\actions\update_entity.rs:53 - _responses: Option<&[Memory]>,

## packages\rust\src\basic_capabilities\bootstrap\evaluators\mod.rs
packages\rust\src\basic_capabilities\bootstrap\evaluators\mod.rs:13 - use crate::types::{EvaluatorResult, Memory, State};
packages\rust\src\basic_capabilities\bootstrap\evaluators\mod.rs:26 - async fn validate(&self, runtime: &dyn IAgentRuntime, message: &Memory) -> bool;
packages\rust\src\basic_capabilities\bootstrap\evaluators\mod.rs:32 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\evaluators\reflection.rs
packages\rust\src\basic_capabilities\bootstrap\evaluators\reflection.rs:10 - use crate::types::{EvaluatorResult, Memory, ModelType, State};
packages\rust\src\basic_capabilities\bootstrap\evaluators\reflection.rs:32 - async fn validate(&self, _runtime: &dyn IAgentRuntime, _message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\evaluators\reflection.rs:39 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\evaluators\relationship_extraction.rs
packages\rust\src\basic_capabilities\bootstrap\evaluators\relationship_extraction.rs:10 - use crate::types::{EvaluatorResult, Memory, State};
packages\rust\src\basic_capabilities\bootstrap\evaluators\relationship_extraction.rs:120 - async fn validate(&self, _runtime: &dyn IAgentRuntime, message: &Memory) -> bool {
packages\rust\src\basic_capabilities\bootstrap\evaluators\relationship_extraction.rs:132 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\actions.rs
packages\rust\src\basic_capabilities\bootstrap\providers\actions.rs:13 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\actions.rs:157 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\action_state.rs
packages\rust\src\basic_capabilities\bootstrap\providers\action_state.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\action_state.rs:36 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\agent_settings.rs
packages\rust\src\basic_capabilities\bootstrap\providers\agent_settings.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\agent_settings.rs:47 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\attachments.rs
packages\rust\src\basic_capabilities\bootstrap\providers\attachments.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\attachments.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\capabilities.rs
packages\rust\src\basic_capabilities\bootstrap\providers\capabilities.rs:9 - use crate::types::{Memory, ModelType, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\capabilities.rs:36 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\character.rs
packages\rust\src\basic_capabilities\bootstrap\providers\character.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\character.rs:37 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\choice.rs
packages\rust\src\basic_capabilities\bootstrap\providers\choice.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\choice.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\contacts.rs
packages\rust\src\basic_capabilities\bootstrap\providers\contacts.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\contacts.rs:36 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\context_bench.rs
packages\rust\src\basic_capabilities\bootstrap\providers\context_bench.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\context_bench.rs:35 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\providers\context_bench.rs:39 - let crate::types::memory::MemoryMetadata::Custom(v) = meta;

## packages\rust\src\basic_capabilities\bootstrap\providers\current_time.rs
packages\rust\src\basic_capabilities\bootstrap\providers\current_time.rs:10 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\current_time.rs:37 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\entities.rs
packages\rust\src\basic_capabilities\bootstrap\providers\entities.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\entities.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\evaluators_list.rs
packages\rust\src\basic_capabilities\bootstrap\providers\evaluators_list.rs:13 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\evaluators_list.rs:98 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\facts.rs
packages\rust\src\basic_capabilities\bootstrap\providers\facts.rs:9 - use crate::types::{Memory, MemoryType, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\facts.rs:36 - message: &Memory,
packages\rust\src\basic_capabilities\bootstrap\providers\facts.rs:48 - .get_memories(None, Some(entity_id), Some(MemoryType::Fact), 10)
packages\rust\src\basic_capabilities\bootstrap\providers\facts.rs:88 - .get_memories(Some(room_id), None, Some(MemoryType::Fact), 5)

## packages\rust\src\basic_capabilities\bootstrap\providers\follow_ups.rs
packages\rust\src\basic_capabilities\bootstrap\providers\follow_ups.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\follow_ups.rs:36 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\knowledge.rs
packages\rust\src\basic_capabilities\bootstrap\providers\knowledge.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\knowledge.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\mod.rs
packages\rust\src\basic_capabilities\bootstrap\providers\mod.rs:53 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\mod.rs:74 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\providers_list.rs
packages\rust\src\basic_capabilities\bootstrap\providers\providers_list.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\providers_list.rs:36 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\recent_messages.rs
packages\rust\src\basic_capabilities\bootstrap\providers\recent_messages.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\recent_messages.rs:37 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\relationships.rs
packages\rust\src\basic_capabilities\bootstrap\providers\relationships.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\relationships.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\roles.rs
packages\rust\src\basic_capabilities\bootstrap\providers\roles.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\roles.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\settings.rs
packages\rust\src\basic_capabilities\bootstrap\providers\settings.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\settings.rs:49 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\time.rs
packages\rust\src\basic_capabilities\bootstrap\providers\time.rs:10 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\time.rs:38 - _message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\providers\world.rs
packages\rust\src\basic_capabilities\bootstrap\providers\world.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\bootstrap\providers\world.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities\bootstrap\services\task.rs
packages\rust\src\basic_capabilities\bootstrap\services\task.rs:19 - use crate::types::memory::Memory;
packages\rust\src\basic_capabilities\bootstrap\services\task.rs:47 - _message: Memory,
packages\rust\src\basic_capabilities\bootstrap\services\task.rs:146 - .validate(Arc::clone(&rt), Memory::default(), State::default())
packages\rust\src\basic_capabilities\bootstrap\services\task.rs:361 - .validate(Arc::clone(&rt), Memory::default(), State::default())

## packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:3 - use crate::types::memory::Memory;
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:13 - pub memories: Mutex<HashMap<String, Memory>>,
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:43 - async fn get_memories(&self, _params: GetMemoriesParams) -> Result<Vec<Memory>> {
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:46 - async fn search_memories(&self, _params: SearchMemoriesParams) -> Result<Vec<Memory>> {
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:50 - async fn create_memory(&self, memory: &Memory, _table_name: &str) -> Result<UUID> {
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:52 - let id = memory.id.clone().unwrap_or_else(UUID::new_v4);
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:53 - let mut new_memory = memory.clone();
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:54 - new_memory.id = Some(id.clone());
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:59 - async fn update_memory(&self, memory: &Memory) -> Result<bool> {
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:61 - if let Some(id) = &memory.id {
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:69 - async fn delete_memory(&self, _memory_id: &UUID) -> Result<()> {
packages\rust\src\basic_capabilities\bootstrap\services\embedding\mock_adapter.rs:73 - async fn get_memory_by_id(&self, id: &UUID) -> Result<Option<Memory>> {

## packages\rust\src\basic_capabilities\providers\actions.rs
packages\rust\src\basic_capabilities\providers\actions.rs:14 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\actions.rs:158 - message: &Memory,

## packages\rust\src\basic_capabilities\providers\action_state.rs
packages\rust\src\basic_capabilities\providers\action_state.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\action_state.rs:36 - _message: &Memory,

## packages\rust\src\basic_capabilities\providers\attachments.rs
packages\rust\src\basic_capabilities\providers\attachments.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\attachments.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities\providers\capabilities.rs
packages\rust\src\basic_capabilities\providers\capabilities.rs:9 - use crate::types::{Memory, ModelType, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\capabilities.rs:36 - _message: &Memory,

## packages\rust\src\basic_capabilities\providers\character.rs
packages\rust\src\basic_capabilities\providers\character.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\character.rs:50 - _message: &Memory,

## packages\rust\src\basic_capabilities\providers\choice.rs
packages\rust\src\basic_capabilities\providers\choice.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\choice.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities\providers\context_bench.rs
packages\rust\src\basic_capabilities\providers\context_bench.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\context_bench.rs:35 - message: &Memory,
packages\rust\src\basic_capabilities\providers\context_bench.rs:39 - let crate::types::memory::MemoryMetadata::Custom(v) = meta;

## packages\rust\src\basic_capabilities\providers\current_time.rs
packages\rust\src\basic_capabilities\providers\current_time.rs:14 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\current_time.rs:41 - message: &Memory,

## packages\rust\src\basic_capabilities\providers\entities.rs
packages\rust\src\basic_capabilities\providers\entities.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\entities.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities\providers\evaluators_list.rs
packages\rust\src\basic_capabilities\providers\evaluators_list.rs:13 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\evaluators_list.rs:98 - _message: &Memory,

## packages\rust\src\basic_capabilities\providers\mod.rs
packages\rust\src\basic_capabilities\providers\mod.rs:34 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\mod.rs:55 - message: &Memory,

## packages\rust\src\basic_capabilities\providers\providers_list.rs
packages\rust\src\basic_capabilities\providers\providers_list.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\providers_list.rs:36 - _message: &Memory,

## packages\rust\src\basic_capabilities\providers\recent_messages.rs
packages\rust\src\basic_capabilities\providers\recent_messages.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\recent_messages.rs:37 - message: &Memory,

## packages\rust\src\basic_capabilities\providers\time.rs
packages\rust\src\basic_capabilities\providers\time.rs:14 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\time.rs:42 - message: &Memory,

## packages\rust\src\basic_capabilities\providers\world.rs
packages\rust\src\basic_capabilities\providers\world.rs:9 - use crate::types::{Memory, ProviderResult, State};
packages\rust\src\basic_capabilities\providers\world.rs:36 - message: &Memory,

## packages\rust\src\basic_capabilities_core\mod.rs
packages\rust\src\basic_capabilities_core\mod.rs:21 - use crate::types::memory::Memory;
packages\rust\src\basic_capabilities_core\mod.rs:97 - async fn validate(&self, _message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\basic_capabilities_core\mod.rs:103 - message: &Memory,
packages\rust\src\basic_capabilities_core\mod.rs:144 - async fn validate(&self, _message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\basic_capabilities_core\mod.rs:150 - _message: &Memory,
packages\rust\src\basic_capabilities_core\mod.rs:183 - async fn validate(&self, _message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\basic_capabilities_core\mod.rs:189 - _message: &Memory,
packages\rust\src\basic_capabilities_core\mod.rs:223 - _message: &Memory,
packages\rust\src\basic_capabilities_core\mod.rs:267 - _message: &Memory,
packages\rust\src\basic_capabilities_core\mod.rs:305 - _message: &Memory,
packages\rust\src\basic_capabilities_core\mod.rs:346 - _message: &Memory,
packages\rust\src\basic_capabilities_core\mod.rs:382 - async fn get(&self, message: &Memory, _state: &State) -> Result<ProviderResult, anyhow::Error> {

## packages\rust\src\generated\action_docs.rs
packages\rust\src\generated\action_docs.rs:2595 - "name": "LONG_TERM_MEMORY",
packages\rust\src\generated\action_docs.rs:2725 - "name": "LONG_TERM_MEMORY",
packages\rust\src\generated\action_docs.rs:2784 - "outcome": "<response>\n  <thought>I'm engaging appropriately with a new community member, maintaining a welcoming and professional tone. My questions are helping to learn more about John and make him feel welcome.</thought>\n  <facts>\n    <fact>\n      <claim>John is new to the community</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n    <fact>\n      <claim>John found the community through a friend interested in AI</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n  </facts>\n  <relationships>\n    <relationship>\n      <sourceEntityId>sarah-agent</sourceEntityId>\n      <targetEntityId>user-123</targetEntityId>\n      <tags>group_interaction</tags>\n    </relationship>\n  </relationships>\n</response>"
packages\rust\src\generated\action_docs.rs:2850 - "outcome": "<response>\n  <thought>I'm dominating the conversation and not giving others a chance to share their perspectives. I've sent multiple messages in a row without waiting for responses. I need to step back and create space for other members to participate.</thought>\n  <facts>\n    <fact>\n      <claim>The discussion is about chapter 5 of a book</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n    <fact>\n      <claim>Max has sent 4 consecutive messages without user responses</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n  </facts>\n  <relationships>\n    <relationship>\n      <sourceEntityId>max-agent</sourceEntityId>\n      <targetEntityId>user-789</targetEntityId>\n      <tags>group_interaction,excessive_interaction</tags>\n    </relationship>\n  </relationships>\n</response>"
packages\rust\src\generated\action_docs.rs:2880 - "name": "MEMORY_SUMMARIZATION",
packages\rust\src\generated\action_docs.rs:2891 - "name": "LONG_TERM_MEMORY_EXTRACTION",
packages\rust\src\generated\action_docs.rs:2939 - "outcome": "<response>\n  <thought>I'm engaging appropriately with a new community member, maintaining a welcoming and professional tone. My questions are helping to learn more about John and make him feel welcome.</thought>\n  <facts>\n    <fact>\n      <claim>John is new to the community</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n    <fact>\n      <claim>John found the community through a friend interested in AI</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n  </facts>\n  <relationships>\n    <relationship>\n      <sourceEntityId>sarah-agent</sourceEntityId>\n      <targetEntityId>user-123</targetEntityId>\n      <tags>group_interaction</tags>\n    </relationship>\n  </relationships>\n</response>"
packages\rust\src\generated\action_docs.rs:3005 - "outcome": "<response>\n  <thought>I'm dominating the conversation and not giving others a chance to share their perspectives. I've sent multiple messages in a row without waiting for responses. I need to step back and create space for other members to participate.</thought>\n  <facts>\n    <fact>\n      <claim>The discussion is about chapter 5 of a book</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n    <fact>\n      <claim>Max has sent 4 consecutive messages without user responses</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n  </facts>\n  <relationships>\n    <relationship>\n      <sourceEntityId>max-agent</sourceEntityId>\n      <targetEntityId>user-789</targetEntityId>\n      <tags>group_interaction,excessive_interaction</tags>\n    </relationship>\n  </relationships>\n</response>"
packages\rust\src\generated\action_docs.rs:3035 - "name": "MEMORY_SUMMARIZATION",
packages\rust\src\generated\action_docs.rs:3046 - "name": "LONG_TERM_MEMORY_EXTRACTION",

## packages\rust\src\services\message_service.rs
packages\rust\src\services\message_service.rs:13 - use crate::types::memory::Memory;
packages\rust\src\services\message_service.rs:40 - pub response_messages: Vec<Memory>,
packages\rust\src\services\message_service.rs:64 - message: &mut Memory,
packages\rust\src\services\message_service.rs:92 - message: &mut Memory,
packages\rust\src\services\message_service.rs:98 - let crate::types::memory::MemoryMetadata::Custom(v) = meta;
packages\rust\src\services\message_service.rs:137 - let existing = adapter.get_memory_by_id(message_id).await?;
packages\rust\src\services\message_service.rs:408 - let response_memory = Memory {
packages\rust\src\services\message_service.rs:431 - if let Ok(message_json) = serde_json::to_value(&response_memory) {
packages\rust\src\services\message_service.rs:444 - let mut response_messages: Vec<Memory> = vec![response_memory.clone()];
packages\rust\src\services\message_service.rs:509 - async fn persist_outbound_memories(runtime: &AgentRuntime, memories: &[Memory]) -> Result<()> {
packages\rust\src\services\message_service.rs:526 - message: &Memory,
packages\rust\src\services\message_service.rs:551 - let mem = Memory {
packages\rust\src\services\message_service.rs:577 - fn build_canonical_prompt(character_name: &str, message: &Memory, state: &State) -> Result<String> {
packages\rust\src\services\message_service.rs:598 - message: &Memory,
packages\rust\src\services\message_service.rs:675 - message: &mut Memory,
packages\rust\src\services\message_service.rs:943 - let mut msg = Memory::message(UUID::new_v4(), UUID::new_v4(), "hello");
packages\rust\src\services\message_service.rs:983 - async fn validate(&self, _message: &Memory, _state: Option<&State>) -> bool {
packages\rust\src\services\message_service.rs:989 - _message: &Memory,
packages\rust\src\services\message_service.rs:1023 - let mut msg = Memory::message(UUID::new_v4(), UUID::new_v4(), "hello");

## packages\rust\src\types\agent.rs
packages\rust\src\types\agent.rs:105 - /// Enable built-in advanced memory (core, gated by `advancedMemory: true`)
packages\rust\src\types\agent.rs:107 - pub advanced_memory: Option<bool>,
packages\rust\src\types\agent.rs:175 - advanced_memory: None,
packages\rust\src\types\agent.rs:308 - "advancedMemory": true

## packages\rust\src\types\components.rs
packages\rust\src\types\components.rs:16 - use super::memory::Memory;
packages\rust\src\types\components.rs:238 - /// Callback type for handling content and producing memories.
packages\rust\src\types\components.rs:240 - dyn Fn(Content) -> Pin<Box<dyn Future<Output = Vec<Memory>> + Send + 'static>> + Send + Sync,
packages\rust\src\types\components.rs:256 - async fn validate(&self, message: &Memory, state: Option<&State>) -> bool;
packages\rust\src\types\components.rs:260 - message: &Memory,
packages\rust\src\types\components.rs:275 - async fn get(&self, message: &Memory, state: &State) -> Result<ProviderResult, anyhow::Error>;
packages\rust\src\types\components.rs:287 - async fn validate(&self, message: &Memory, state: Option<&State>) -> bool;
packages\rust\src\types\components.rs:291 - message: &Memory,

## packages\rust\src\types\database.rs
packages\rust\src\types\database.rs:8 - use super::memory::{Memory, MemoryMetadata};
packages\rust\src\types\database.rs:201 - pub memory_id: Option<String>,
packages\rust\src\types\database.rs:321 - pub struct GetMemoriesParams {
packages\rust\src\types\database.rs:355 - pub struct CreateMemoryItem {
packages\rust\src\types\database.rs:357 - pub memory: Memory,
packages\rust\src\types\database.rs:368 - pub struct UpdateMemoryItem {
packages\rust\src\types\database.rs:369 - /// Required: memory ID to update
packages\rust\src\types\database.rs:375 - pub metadata: Option<super::memory::MemoryMetadata>,
packages\rust\src\types\database.rs:388 - /// Build an update item from a full memory (all updatable fields set).
packages\rust\src\types\database.rs:390 - pub fn from_memory(memory: &Memory) -> Option<Self> {
packages\rust\src\types\database.rs:391 - let id = memory.id.clone()?;
packages\rust\src\types\database.rs:394 - content: Some(memory.content.clone()),
packages\rust\src\types\database.rs:395 - metadata: memory.metadata.clone(),
packages\rust\src\types\database.rs:396 - created_at: memory.created_at,
packages\rust\src\types\database.rs:397 - embedding: memory.embedding.clone(),
packages\rust\src\types\database.rs:398 - unique: memory.unique,
packages\rust\src\types\database.rs:406 - pub struct SearchMemoriesParams {
packages\rust\src\types\database.rs:447 - pub struct MemoryRetrievalOptions {
packages\rust\src\types\database.rs:470 - pub struct MemorySearchOptions {
packages\rust\src\types\database.rs:489 - pub metadata: Option<MemoryMetadata>,

## packages\rust\src\types\events.rs
packages\rust\src\types\events.rs:9 - use super::memory::Memory;
packages\rust\src\types\events.rs:183 - pub message: Memory,
packages\rust\src\types\events.rs:198 - pub memory_count: usize,
packages\rust\src\types\events.rs:337 - pub memory: Memory,

## packages\rust\src\types\memory.rs
packages\rust\src\types\memory.rs:18 - pub struct Memory {
packages\rust\src\types\memory.rs:48 - pub metadata: Option<MemoryMetadata>,
packages\rust\src\types\memory.rs:98 - pub type MessageMemory = Memory;
packages\rust\src\types\memory.rs:100 - /// Memory type enumeration.

## packages\rust\src\types\mod.rs
packages\rust\src\types\mod.rs:48 - // From memory
packages\rust\src\types\mod.rs:49 - pub use memory::{Memory, MemoryMetadata, MemoryType, MessageMemory};

## packages\rust\src\types\task.rs
packages\rust\src\types\task.rs:13 - use super::memory::Memory;
packages\rust\src\types\task.rs:40 - _message: &Memory,

## packages\rust\src\wasm\mod.rs
packages\rust\src\wasm\mod.rs:22 - use crate::types::{Agent, Character, Content, Entity, Memory, Plugin, Room, UUID};
packages\rust\src\wasm\mod.rs:75 - pub struct WasmMemory {
packages\rust\src\wasm\mod.rs:76 - inner: Memory,
packages\rust\src\wasm\mod.rs:82 - /// Create a new memory from JSON
packages\rust\src\wasm\mod.rs:84 - pub fn from_json(json: &str) -> Result<WasmMemory, JsValue> {
packages\rust\src\wasm\mod.rs:85 - serde_json::from_str::<Memory>(json)
packages\rust\src\wasm\mod.rs:87 - .map_err(|e| WasmError::from_json_error(&e, Some("memory".to_string())).into_js_value())
packages\rust\src\wasm\mod.rs:94 - WasmError::parse_error(format!("Failed to serialize Memory: {}", e), None)
packages\rust\src\wasm\mod.rs:370 - #[wasm_bindgen(js_name = "parseMemory")]
packages\rust\src\wasm\mod.rs:371 - pub fn parse_memory(json: &str) -> Result<WasmMemory, JsValue> {
packages\rust\src\wasm\mod.rs:372 - WasmMemory::from_json(json)
packages\rust\src\wasm\mod.rs:515 - let message_result: Result<Memory, _> = serde_json::from_str(message_json);
packages\rust\src\wasm\mod.rs:551 - let response_memory = Memory {
packages\rust\src\wasm\mod.rs:569 - "responseMessages": [response_memory],
packages\rust\src\wasm\mod.rs:619 - #[wasm_bindgen(js_name = "testMemoryRoundTrip")]
packages\rust\src\wasm\mod.rs:620 - pub fn test_memory_round_trip(json: &str) -> Result<bool, JsValue> {
packages\rust\src\wasm\mod.rs:621 - let memory = WasmMemory::from_json(json)?;
packages\rust\src\wasm\mod.rs:622 - let serialized = memory.to_json()?;
packages\rust\src\wasm\mod.rs:623 - let reparsed = WasmMemory::from_json(&serialized)?;

## packages\rust\tests\advanced_memory_tests.rs
packages\rust\tests\advanced_memory_tests.rs:6 - use elizaos::{advanced_memory, AgentRuntime};
packages\rust\tests\advanced_memory_tests.rs:16 - advanced_memory: Some(true),
packages\rust\tests\advanced_memory_tests.rs:29 - advanced_memory: Some(false),
packages\rust\tests\advanced_memory_tests.rs:46 - advanced_memory: Some(true),
packages\rust\tests\advanced_memory_tests.rs:54 - let svc = runtime.get_service("memory").await.expect("memory service");
packages\rust\tests\advanced_memory_tests.rs:57 - .downcast_ref::<advanced_memory::MemoryService>()
packages\rust\tests\advanced_memory_tests.rs:61 - ms.store_long_term_memory(advanced_memory::LongTermMemory {
packages\rust\tests\advanced_memory_tests.rs:65 - category: advanced_memory::LongTermMemoryCategory::Semantic,
packages\rust\tests\advanced_memory_tests.rs:72 - let msg = elizaos::Memory::message(entity_id.clone(), elizaos::UUID::new_v4(), "hi");
packages\rust\tests\advanced_memory_tests.rs:80 - let service = advanced_memory::MemoryService::default();
packages\rust\tests\advanced_memory_tests.rs:84 - service.store_long_term_memory(advanced_memory::LongTermMemory {
packages\rust\tests\advanced_memory_tests.rs:88 - category: advanced_memory::LongTermMemoryCategory::Semantic,
packages\rust\tests\advanced_memory_tests.rs:94 - service.store_long_term_memory(advanced_memory::LongTermMemory {
packages\rust\tests\advanced_memory_tests.rs:98 - category: advanced_memory::LongTermMemoryCategory::Semantic,
packages\rust\tests\advanced_memory_tests.rs:104 - service.store_long_term_memory(advanced_memory::LongTermMemory {
packages\rust\tests\advanced_memory_tests.rs:108 - category: advanced_memory::LongTermMemoryCategory::Semantic,
packages\rust\tests\advanced_memory_tests.rs:123 - let service = advanced_memory::MemoryService::default();

## packages\rust\tests\advanced_planning_plugin_tests.rs
packages\rust\tests\advanced_planning_plugin_tests.rs:36 - let msg = elizaos::Memory::message(

## packages\rust\tests\autonomy_tests.rs
packages\rust\tests\autonomy_tests.rs:44 - let msg = elizaos::Memory::message(elizaos::UUID::new_v4(), elizaos::UUID::new_v4(), "hello");
packages\rust\tests\autonomy_tests.rs:230 - let msg = elizaos::Memory::message(elizaos::UUID::new_v4(), elizaos::UUID::new_v4(), "hello");

## packages\rust\tests\integration_tests.rs
packages\rust\tests\integration_tests.rs:37 - memories: Mutex<HashMap<String, Memory>>,
packages\rust\tests\integration_tests.rs:91 - async fn get_memories(&self, params: GetMemoriesParams) -> Result<Vec<Memory>> {
packages\rust\tests\integration_tests.rs:93 - let mut result: Vec<Memory> = memories.values().cloned().collect();
packages\rust\tests\integration_tests.rs:108 - async fn search_memories(&self, params: SearchMemoriesParams) -> Result<Vec<Memory>> {
packages\rust\tests\integration_tests.rs:111 - let mut result: Vec<Memory> = memories
packages\rust\tests\integration_tests.rs:124 - async fn create_memories(&self, items: &[CreateMemoryItem]) -> Result<Vec<UUID>> {
packages\rust\tests\integration_tests.rs:127 - let id = self.create_memory(&item.memory, &item.table_name).await?;
packages\rust\tests\integration_tests.rs:133 - async fn update_memories(&self, items: &[UpdateMemoryItem]) -> Result<()> {
packages\rust\tests\integration_tests.rs:135 - let mut existing = match self.get_memory_by_id(&item.id).await? {
packages\rust\tests\integration_tests.rs:159 - async fn delete_memories(&self, memory_ids: &[UUID]) -> Result<()> {
packages\rust\tests\integration_tests.rs:166 - async fn create_memory(&self, memory: &Memory, _table_name: &str) -> Result<UUID> {
packages\rust\tests\integration_tests.rs:168 - let id = memory.id.clone().unwrap_or_else(UUID::new_v4);
packages\rust\tests\integration_tests.rs:169 - let mut new_memory = memory.clone();
packages\rust\tests\integration_tests.rs:170 - new_memory.id = Some(id.clone());
packages\rust\tests\integration_tests.rs:175 - async fn update_memory(&self, memory: &Memory) -> Result<bool> {
packages\rust\tests\integration_tests.rs:177 - if let Some(id) = &memory.id {
packages\rust\tests\integration_tests.rs:185 - async fn delete_memory(&self, memory_id: &UUID) -> Result<()> {
packages\rust\tests\integration_tests.rs:191 - async fn get_memory_by_id(&self, id: &UUID) -> Result<Option<Memory>> {
packages\rust\tests\integration_tests.rs:303 - async fn validate(&self, message: &Memory, _state: Option<&State>) -> bool {
packages\rust\tests\integration_tests.rs:310 - message: &Memory,
... and 26 more

## packages\rust\tests\serialization_tests.rs
packages\rust\tests\serialization_tests.rs:13 - let memory = Memory {
packages\rust\tests\serialization_tests.rs:30 - let json = serde_json::to_string(&memory).unwrap();
packages\rust\tests\serialization_tests.rs:216 - let memory = Memory {
packages\rust\tests\serialization_tests.rs:230 - let json = serde_json::to_string(&memory).unwrap();

## packages\rust\tests\trajectory_parity_test.rs
packages\rust\tests\trajectory_parity_test.rs:28 - let message = elizaos::types::Memory::default();

## packages\rust\tests\wasm_tests.rs
packages\rust\tests\wasm_tests.rs:3 - use elizaos::wasm::{error::WasmError, shims::JsModelHandler, WasmMemory};
packages\rust\tests\wasm_tests.rs:40 - let memory = WasmMemory::from_json(json).unwrap();
packages\rust\tests\wasm_tests.rs:41 - let serialized = memory.to_json().unwrap();

## packages\rust\tests\interop\serialization_equivalence.rs
packages\rust\tests\interop\serialization_equivalence.rs:9 - memory::{Memory, MemoryMetadata, MemoryType},
packages\rust\tests\interop\serialization_equivalence.rs:88 - let memory = Memory {
packages\rust\tests\interop\serialization_equivalence.rs:101 - let serialized = serde_json::to_value(&memory).unwrap();
packages\rust\tests\interop\serialization_equivalence.rs:102 - let expected = fixtures::basic_memory_json();
packages\rust\tests\interop\serialization_equivalence.rs:118 - let typescript_json = fixtures::basic_memory_json();
packages\rust\tests\interop\serialization_equivalence.rs:119 - let memory: Memory = serde_json::from_value(typescript_json).unwrap();
packages\rust\tests\interop\serialization_equivalence.rs:140 - let original = fixtures::basic_memory_json();
packages\rust\tests\interop\serialization_equivalence.rs:141 - let memory: Memory = serde_json::from_value(original.clone()).unwrap();
packages\rust\tests\interop\serialization_equivalence.rs:142 - let serialized = serde_json::to_value(&memory).unwrap();
packages\rust\tests\interop\serialization_equivalence.rs:143 - let reparsed: Memory = serde_json::from_value(serialized.clone()).unwrap();
packages\rust\tests\interop\serialization_equivalence.rs:336 - (MemoryType::Message, "message"),
packages\rust\tests\interop\serialization_equivalence.rs:337 - (MemoryType::Document, "document"),
packages\rust\tests\interop\serialization_equivalence.rs:338 - (MemoryType::Post, "post"),
packages\rust\tests\interop\serialization_equivalence.rs:339 - (MemoryType::Custom("custom".to_string()), "custom"),
packages\rust\tests\interop\serialization_equivalence.rs:343 - let serialized = serde_json::to_value(&memory_type).unwrap();

## packages\rust\tests\interop\type_mapping.rs
packages\rust\tests\interop\type_mapping.rs:10 - memory::{Memory, MemoryMetadata, MemoryType},
packages\rust\tests\interop\type_mapping.rs:22 - let minimal_memory = Memory {
packages\rust\tests\interop\type_mapping.rs:29 - let json = serde_json::to_value(&minimal_memory).unwrap();
packages\rust\tests\interop\type_mapping.rs:59 - let memory = Memory {
packages\rust\tests\interop\type_mapping.rs:71 - let json = serde_json::to_value(&memory).unwrap();
packages\rust\tests\interop\type_mapping.rs:312 - let metadata = MemoryMetadata {
packages\rust\tests\interop\type_mapping.rs:313 - memory_type: Some(MemoryType::Message),

## packages\rust\__tests__\python\test_wasm_bindings.py
packages\rust\__tests__\python\test_wasm_bindings.py:23 - from wasmer import Store, Module, Instance, ImportObject, Function, Memory
packages\rust\__tests__\python\test_wasm_bindings.py:83 - class TestMemorySerialization(unittest.TestCase):
packages\rust\__tests__\python\test_wasm_bindings.py:84 - """Test Memory type serialization compatibility"""
packages\rust\__tests__\python\test_wasm_bindings.py:86 - def test_memory_json_structure(self):
packages\rust\__tests__\python\test_wasm_bindings.py:88 - memory = {
packages\rust\__tests__\python\test_wasm_bindings.py:100 - json_str = json.dumps(memory)
packages\rust\__tests__\python\test_wasm_bindings.py:106 - def test_memory_minimal_structure(self):
packages\rust\__tests__\python\test_wasm_bindings.py:108 - memory = {
packages\rust\__tests__\python\test_wasm_bindings.py:114 - json_str = json.dumps(memory)
packages\rust\__tests__\python\test_wasm_bindings.py:339 - memory = {
packages\rust\__tests__\python\test_wasm_bindings.py:345 - json_str = json.dumps(memory)
packages\rust\__tests__\python\test_wasm_bindings.py:352 - memory = {
packages\rust\__tests__\python\test_wasm_bindings.py:358 - json_str = json.dumps(memory, ensure_ascii=False)
packages\rust\__tests__\python\test_wasm_bindings.py:366 - memory = {
packages\rust\__tests__\python\test_wasm_bindings.py:373 - json_str = json.dumps(memory)

## packages\rust\__tests__\wasm\interop-equivalence.test.ts
packages\rust\__tests__\wasm\interop-equivalence.test.ts:10 - import type { Character, CharacterInput, Content, Memory } from "@elizaos/core";
packages\rust\__tests__\wasm\interop-equivalence.test.ts:19 - parseMemory(json: string): { toJson: () => string };
packages\rust\__tests__\wasm\interop-equivalence.test.ts:21 - testMemoryRoundTrip(json: string): boolean;
packages\rust\__tests__\wasm\interop-equivalence.test.ts:75 - describe("Memory Serialization Equivalence", () => {
packages\rust\__tests__\wasm\interop-equivalence.test.ts:76 - it("should serialize Memory identically", () => {
packages\rust\__tests__\wasm\interop-equivalence.test.ts:79 - const memory: Memory = {
packages\rust\__tests__\wasm\interop-equivalence.test.ts:90 - const tsJson = JSON.stringify(memory);
packages\rust\__tests__\wasm\interop-equivalence.test.ts:91 - const rustMemory = wasm.parseMemory(tsJson);
packages\rust\__tests__\wasm\interop-equivalence.test.ts:92 - const rustJson = rustMemory.toJson();
packages\rust\__tests__\wasm\interop-equivalence.test.ts:109 - const minimalMemory: Memory = {
packages\rust\__tests__\wasm\interop-equivalence.test.ts:115 - const tsJson = JSON.stringify(minimalMemory);
packages\rust\__tests__\wasm\interop-equivalence.test.ts:116 - const rustMemory = wasm.parseMemory(tsJson);
packages\rust\__tests__\wasm\interop-equivalence.test.ts:117 - const rustJson = rustMemory.toJson();
packages\rust\__tests__\wasm\interop-equivalence.test.ts:130 - const memory: Memory = {
packages\rust\__tests__\wasm\interop-equivalence.test.ts:223 - const memory: Memory = {
packages\rust\__tests__\wasm\interop-equivalence.test.ts:236 - const rustMemory = wasm.parseMemory(JSON.stringify(memory));
packages\rust\__tests__\wasm\interop-equivalence.test.ts:237 - const rustJson = rustMemory.toJson();
packages\rust\__tests__\wasm\interop-equivalence.test.ts:288 - const memory: Memory = {
packages\rust\__tests__\wasm\interop-equivalence.test.ts:294 - const rustMemory = wasm.parseMemory(JSON.stringify(memory));
packages\rust\__tests__\wasm\interop-equivalence.test.ts:295 - const rustObj = JSON.parse(rustMemory.toJson());
... and 11 more

## packages\rust\__tests__\wasm\wasm-bindings.test.ts
packages\rust\__tests__\wasm\wasm-bindings.test.ts:21 - WasmMemory: {
packages\rust\__tests__\wasm\wasm-bindings.test.ts:54 - parseMemory(json: string): ReturnType<WasmModule["WasmMemory"]["fromJson"]>;
packages\rust\__tests__\wasm\wasm-bindings.test.ts:59 - testMemoryRoundTrip(json: string): boolean;
packages\rust\__tests__\wasm\wasm-bindings.test.ts:138 - describe("Memory Operations", () => {
packages\rust\__tests__\wasm\wasm-bindings.test.ts:139 - const testMemoryJson = JSON.stringify({
packages\rust\__tests__\wasm\wasm-bindings.test.ts:150 - it("should parse memory from JSON", () => {
packages\rust\__tests__\wasm\wasm-bindings.test.ts:153 - const memory = wasm.parseMemory(testMemoryJson);
packages\rust\__tests__\wasm\wasm-bindings.test.ts:159 - it("should convert memory to JSON", () => {
packages\rust\__tests__\wasm\wasm-bindings.test.ts:162 - const memory = wasm.WasmMemory.fromJson(testMemoryJson);
packages\rust\__tests__\wasm\wasm-bindings.test.ts:163 - const json = memory.toJson();
packages\rust\__tests__\wasm\wasm-bindings.test.ts:170 - it("should pass memory round-trip test", () => {

## packages\schemas\README.md
packages\schemas\README.md:105 - MEMORY_TYPE_UNSPECIFIED = 0;
packages\schemas\README.md:106 - MEMORY_TYPE_DOCUMENT = 1;
packages\schemas\README.md:107 - MEMORY_TYPE_MESSAGE = 2;
packages\schemas\README.md:171 - export { Memory as MemoryType } from "./generated/eliza/v1/memory_pb";

## packages\skills\skills\apple-notes\SKILL.md
packages\skills\skills\apple-notes\SKILL.md:28 - Use `memo notes` to manage Apple Notes directly from the terminal. Create, view, edit, delete, search, move notes between folders, and export to HTML/Markdown.

## packages\skills\skills\discord\SKILL.md
packages\skills\skills\discord\SKILL.md:3 - description: "Use when you need to control Discord from Otto via the discord tool: send messages, react, post or upload stickers, upload emojis, run polls, manage threads/pins/search, create/edit/delete channels and categories, fetch permissions or member/role/channel info, set bot presence/activity, or handle moderation actions in Discord DMs or channels."

## packages\skills\skills\healthcheck\SKILL.md
packages\skills\skills\healthcheck\SKILL.md:233 - Follow the durable-memory prompt format used by Otto compaction:

## packages\skills\skills\security-dwarf-expert\SKILL.md
packages\skills\skills\security-dwarf-expert\SKILL.md:55 - | `DW_TAG_member` | Struct field |

## packages\skills\skills\sharp-edges\skills\sharp-edges\references\case-studies.md
packages\skills\skills\sharp-edges\skills\sharp-edges\references\case-studies.md:35 - ### Sharp Edge: Memory Not Securely Cleared
packages\skills\skills\sharp-edges\skills\sharp-edges\references\case-studies.md:45 - **The Problem**: `mpz_clear` doesn't zero memory before freeing. Secrets persist.
packages\skills\skills\sharp-edges\skills\sharp-edges\references\case-studies.md:141 - ### Sharp Edge: Memory Ownership Confusion
packages\skills\skills\sharp-edges\skills\sharp-edges\references\case-studies.md:156 - **The Problem**: Memory ownership indicated by subtle naming conventions that aren't documented together and aren't consistent across the API.

## packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-c.md
packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-c.md:56 - // Attacker input: "%n" → writes to memory
packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-c.md:81 - // Option 2: SecureZeroMemory (Windows)
packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-c.md:125 - ptr->value = 42;  // Writing to freed memory

## packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-java.md
packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-java.md:140 - // DANGEROUS: substring() memory (pre-Java 7u6)
packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-java.md:257 - | `String +=` in loop | Performance, memory |

## packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-rust.md
packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-rust.md:52 - // - CVE-2019-15548: memory safety bug in slice::from_raw_parts
packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-rust.md:79 - std::mem::forget(vec);  // Vec's memory leaked, but ptr still valid... maybe

## packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-swift.md
packages\skills\skills\sharp-edges\skills\sharp-edges\references\lang-swift.md:105 - // DANGEROUS: Strong reference cycles cause memory leaks

## packages\skills\skills\static-analysis\skills\codeql\SKILL.md
packages\skills\skills\static-analysis\skills\codeql\SKILL.md:296 - | Out of memory | Set `CODEQL_RAM=48000` environment variable (48GB) |

## packages\skills\skills\testing-handbook-skills\SKILL.md
packages\skills\skills\testing-handbook-skills\SKILL.md:3 - description: "Application security testing toolkit from the Trail of Bits Testing Handbook. Helps the agent set up fuzzing campaigns, write fuzz harnesses, run coverage-guided fuzzers (libFuzzer, AFL++, cargo-fuzz, Atheris, Ruzzy), and triage crashes. Covers memory-safety sanitizers (AddressSanitizer, UBSan, MSan), static analysis with Semgrep and CodeQL, cryptographic validation using Wycheproof test vectors, and constant-time verification. Use when testing C, C++, Rust, Python, or Ruby code for vulnerabilities, improving code coverage, building seed corpora, creating fuzzing dictionaries, overcoming fuzzing obstacles, or integrating security checks into CI/CD with OSS-Fuzz."

## packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:72 - Execute the ASan-instrumented binary. When memory errors are detected, ASan will print detailed reports:
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:78 - ### Step 4: Adjust Fuzzer Memory Limits
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:80 - ASan requires approximately 20TB of virtual memory. Disable fuzzer memory restrictions:
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:132 - When ASan detects a memory error, it prints a detailed report including:
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:136 - - **Allocation/deallocation traces**: Where memory was allocated/freed
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:137 - - **Memory map**: Shadow memory state around the error
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:165 - | Not disabling memory limits | Fuzzer may kill process due to 20TB virtual memory | Set `-rss_limit_mb=0` or `-m none` |
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:189 - See: [libFuzzer: AddressSanitizer](https://github.com/google/fuzzing/blob/master/docs/good-fuzz-target.md#memory-error-detection)
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:199 - Run with unlimited memory:
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:258 - | Fuzzer kills process immediately | Memory limit too low for ASan's 20TB virtual memory | Use `-rss_limit_mb=0` (libFuzzer) or `-m none` (AFL++) |
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:271 - | **libfuzzer** | Compile with `-fsanitize=fuzzer,address` for integrated fuzzing with memory error detection |
packages\skills\skills\testing-handbook-skills\skills\address-sanitizer\SKILL.md:308 - - `detect_leaks`: Control memory leak detection

## packages\skills\skills\testing-handbook-skills\skills\aflpp\SKILL.md
packages\skills\skills\testing-handbook-skills\skills\aflpp\SKILL.md:313 - | `-m 1000` | Memory limit in megabytes (default: 0 = unlimited) |
packages\skills\skills\testing-handbook-skills\skills\aflpp\SKILL.md:407 - **Note:** Memory limit (`-m`) is not supported with ASan due to 20TB virtual memory reservation.
packages\skills\skills\testing-handbook-skills\skills\aflpp\SKILL.md:458 - For better performance, use `fmemopen` to create file descriptors from memory.

## packages\skills\skills\testing-handbook-skills\skills\atheris\SKILL.md
packages\skills\skills\testing-handbook-skills\skills\atheris\SKILL.md:372 - | Memory allocation failures | Set `ASAN_OPTIONS=allocator_may_return_null=1` |

## packages\skills\skills\testing-handbook-skills\skills\cargo-fuzz\SKILL.md
packages\skills\skills\testing-handbook-skills\skills\cargo-fuzz\SKILL.md:227 - ASan is enabled by default and detects memory errors:

## packages\skills\skills\testing-handbook-skills\skills\codeql\SKILL.md
packages\skills\skills\testing-handbook-skills\skills\codeql\SKILL.md:151 - class MemcpyCall extends FunctionCall {
packages\skills\skills\testing-handbook-skills\skills\codeql\SKILL.md:169 - from MemcpyCall call
packages\skills\skills\testing-handbook-skills\skills\codeql\SKILL.md:177 - | `from Type x where P(x) select f(x)` | Query: select f(x) for all x where P(x) is true | `from FunctionCall call where call.getTarget().getName() = "memcpy" select call` |

## packages\skills\skills\testing-handbook-skills\skills\constant-time-testing\SKILL.md
packages\skills\skills\testing-handbook-skills\skills\constant-time-testing\SKILL.md:165 - - [Memsan](https://clang.llvm.org/docs/MemorySanitizer.html): [Tutorial](https://crocs-muni.github.io/ct-tools/tutorials/memsan)
packages\skills\skills\testing-handbook-skills\skills\constant-time-testing\SKILL.md:253 - [Timecop](https://post-apocalyptic-crypto.org/timecop/) wraps Valgrind to detect runtime operations dependent on secret memory regions.
packages\skills\skills\testing-handbook-skills\skills\constant-time-testing\SKILL.md:493 - Comprehensive usability study of constant-time analysis tools. Key findings: developers struggle with false positives, need better error messages, and benefit from tool integration. Evaluates FaCT, ct-verif, dudect, and Memsan across multiple cryptographic implementations. Recommends improved tooling UX and better documentation.

## packages\skills\skills\testing-handbook-skills\skills\coverage-analysis\SKILL.md
packages\skills\skills\testing-handbook-skills\skills\coverage-analysis\SKILL.md:139 - printf("Failed to allocate memory for file: %s\n", filename);

## packages\skills\skills\testing-handbook-skills\skills\libafl\SKILL.md
packages\skills\skills\testing-handbook-skills\skills\libafl\SKILL.md:218 - InMemoryCorpus::new(),

## packages\skills\skills\testing-handbook-skills\skills\libfuzzer\SKILL.md
packages\skills\skills\testing-handbook-skills\skills\libfuzzer\SKILL.md:243 - | `-fsanitize=address` | Enable AddressSanitizer (memory error detection) |
packages\skills\skills\testing-handbook-skills\skills\libfuzzer\SKILL.md:426 - | `rss: NMb` | Resident memory usage |
packages\skills\skills\testing-handbook-skills\skills\libfuzzer\SKILL.md:568 - - Requires ~20TB virtual memory (disable memory limits: `-rss_limit_mb=0`)
packages\skills\skills\testing-handbook-skills\skills\libfuzzer\SKILL.md:593 - clang++ -fsanitize=fuzzer,memory -g -O2 harness.cc target.cc -o fuzz
packages\skills\skills\testing-handbook-skills\skills\libfuzzer\SKILL.md:601 - | Out of memory | Set `ASAN_OPTIONS=rss_limit_mb=0` or `-rss_limit_mb=0` |
packages\skills\skills\testing-handbook-skills\skills\libfuzzer\SKILL.md:604 - | MSan reports in dependencies | Rebuild all dependencies with `-fsanitize=memory` |
packages\skills\skills\testing-handbook-skills\skills\libfuzzer\SKILL.md:749 - | Out of memory | ASan's 20TB virtual memory | Set `-rss_limit_mb=0` to disable RSS limit |
packages\skills\skills\testing-handbook-skills\skills\libfuzzer\SKILL.md:755 - | Crashes but ASan doesn't trigger | Memory error not detected without ASan | Recompile with `-fsanitize=address` |

## packages\skills\skills\testing-handbook-skills\skills\ruzzy\SKILL.md
packages\skills\skills\testing-handbook-skills\skills\ruzzy\SKILL.md:258 - | `ERROR: AddressSanitizer: heap-use-after-free` | Memory corruption detected |

## packages\skills\skills\yara-authoring\SKILL.md
packages\skills\skills\yara-authoring\SKILL.md:3 - description: "Write and test YARA rules for malware detection and threat hunting. Use when creating YARA signatures, detecting malware families, scanning files or memory for indicators of compromise, or building detection rules for threat intelligence."

## packages\training\python\config\profiles\12gb.json
packages\training\python\config\profiles\12gb.json:3 - "description": "Optimized for 12GB VRAM - uses 0.5B model with minimal vLLM memory",
packages\training\python\config\profiles\12gb.json:5 - "vllm_gpu_memory": 0.25,

## packages\training\python\config\profiles\16gb.json
packages\training\python\config\profiles\16gb.json:5 - "vllm_gpu_memory": 0.35,

## packages\training\python\config\profiles\24gb.json
packages\training\python\config\profiles\24gb.json:5 - "vllm_gpu_memory": 0.40,

## packages\training\python\config\profiles\48gb.json
packages\training\python\config\profiles\48gb.json:5 - "vllm_gpu_memory": 0.45,

## packages\training\python\config\profiles\cpu.json
packages\training\python\config\profiles\cpu.json:5 - "vllm_gpu_memory": 0,

## packages\training\python\config\profiles\l40-2gpu-safe.json
packages\training\python\config\profiles\l40-2gpu-safe.json:5 - "vllm_gpu_memory": 0.50,

## packages\training\python\config\profiles\l40-2gpu.json
packages\training\python\config\profiles\l40-2gpu.json:5 - "vllm_gpu_memory": 0.85,

## packages\training\python\config\profiles\l40-4gpu.json
packages\training\python\config\profiles\l40-4gpu.json:5 - "vllm_gpu_memory": 0.45,

## packages\training\python\config\profiles\l40.json
packages\training\python\config\profiles\l40.json:5 - "vllm_gpu_memory": 0.50,

## packages\training\python\scripts\run_training.py
packages\training\python\scripts\run_training.py:107 - print(f"    vLLM Memory: {profile.get('vllm_gpu_memory', 0.45) * 100:.0f}%")
packages\training\python\scripts\run_training.py:156 - gpu_mem = torch.cuda.get_device_properties(0).total_memory / 1e9
packages\training\python\scripts\run_training.py:189 - vllm_gpu_memory: float = 0.45,
packages\training\python\scripts\run_training.py:223 - self.vllm_gpu_memory = vllm_gpu_memory
packages\training\python\scripts\run_training.py:306 - vllm_gpu_memory_utilization=self.vllm_gpu_memory,
packages\training\python\scripts\run_training.py:739 - help="GPU memory fraction for vLLM"
packages\training\python\scripts\run_training.py:849 - if args.vllm_gpu_memory == 0.45 and "vllm_gpu_memory" in profile:  # 0.45 is the default
packages\training\python\scripts\run_training.py:850 - args.vllm_gpu_memory = profile["vllm_gpu_memory"]
packages\training\python\scripts\run_training.py:862 - f"vllm_mem={args.vllm_gpu_memory:.0%}, batch={args.batch_size}{tp_info}")
packages\training\python\scripts\run_training.py:888 - vllm_gpu_memory=args.vllm_gpu_memory,

## packages\training\python\scripts\test_pipeline.py
packages\training\python\scripts\test_pipeline.py:225 - vram = torch.cuda.get_device_properties(0).total_memory / 1e9

## packages\training\python\scripts\train_local.py
packages\training\python\scripts\train_local.py:302 - f"VRAM: {torch.cuda.get_device_properties(0).total_memory / 1e9:.1f} GB")
packages\training\python\scripts\train_local.py:516 - help="Batch size (Note: CUDA uses a fixed batch size of 1 for memory optimization)")

## packages\training\python\src\training\atropos_trainer.py
packages\training\python\src\training\atropos_trainer.py:121 - vllm_gpu_utilization: float = Field(default=0.45, description="GPU memory for vLLM")
packages\training\python\src\training\atropos_trainer.py:464 - "--gpu-memory-utilization", str(self.config.vllm_gpu_utilization),
packages\training\python\src\training\atropos_trainer.py:930 - help="Fraction of GPU memory allocated to vLLM",

## packages\training\python\src\training\error_recovery.py
packages\training\python\src\training\error_recovery.py:545 - MAX_ERRORS_IN_MEMORY: int = 200
packages\training\python\src\training\error_recovery.py:561 - if len(self.errors_encountered) > self.MAX_ERRORS_IN_MEMORY:
packages\training\python\src\training\error_recovery.py:562 - self.errors_encountered = self.errors_encountered[-self.MAX_ERRORS_IN_MEMORY:]

## packages\training\python\src\training\hybrid_env.py
packages\training\python\src\training\hybrid_env.py:56 - description="Number of trajectories to cache in memory"

## packages\training\python\src\training\service_manager.py
packages\training\python\src\training\service_manager.py:67 - vllm_gpu_memory_utilization: float = 0.85
packages\training\python\src\training\service_manager.py:328 - logger.info(f"  GPU Memory: {cfg.vllm_gpu_memory_utilization * 100:.0f}%")
packages\training\python\src\training\service_manager.py:535 - gpu_mem = torch.cuda.get_device_properties(0).total_memory / 1e9

## packages\training\python\tests\test_service_manager.py
packages\training\python\tests\test_service_manager.py:49 - assert config.vllm_gpu_memory_utilization == 0.85
packages\training\python\tests\test_service_manager.py:65 - vllm_gpu_memory_utilization=0.5,
packages\training\python\tests\test_service_manager.py:74 - assert config.vllm_gpu_memory_utilization == 0.5
packages\training\python\tests\test_service_manager.py:79 - def test_gpu_memory_boundary_values(self):
packages\training\python\tests\test_service_manager.py:82 - config_min = ServiceConfig(vllm_gpu_memory_utilization=0.0)
packages\training\python\tests\test_service_manager.py:83 - assert config_min.vllm_gpu_memory_utilization == 0.0
packages\training\python\tests\test_service_manager.py:85 - config_max = ServiceConfig(vllm_gpu_memory_utilization=1.0)
packages\training\python\tests\test_service_manager.py:86 - assert config_max.vllm_gpu_memory_utilization == 1.0
packages\training\python\tests\test_service_manager.py:89 - config_small = ServiceConfig(vllm_gpu_memory_utilization=0.01)
packages\training\python\tests\test_service_manager.py:90 - assert config_small.vllm_gpu_memory_utilization == 0.01

## packages\training\python\tests\test_training_orchestrator.py
packages\training\python\tests\test_training_orchestrator.py:109 - assert orch.vllm_gpu_memory == 0.45

## packages\training\scripts\run_task_benchmark.ts
packages\training\scripts\run_task_benchmark.ts:8 - type Memory,
packages\training\scripts\run_task_benchmark.ts:23 - type IAgentRuntimeManager,
packages\training\scripts\run_task_benchmark.ts:42 - class BenchmarkRuntimeManager implements IAgentRuntimeManager {
packages\training\scripts\run_task_benchmark.ts:110 - const userMemory: Memory = {
packages\training\scripts\run_task_benchmark.ts:122 - // createMemory(memory: Memory, tableName: string, unique?: boolean)
packages\training\scripts\run_task_benchmark.ts:126 - const state: State = await runtime.composeState(userMemory);

## packages\training\src\dependencies.ts
packages\training\src\dependencies.ts:74 - export interface IAgentRuntimeManager {
packages\training\src\dependencies.ts:246 - assertFn(config.agentRuntimeManager, "agentRuntimeManager", [
packages\training\src\dependencies.ts:286 - if (config.agentRuntimeManager) {
packages\training\src\dependencies.ts:287 - _agentRuntimeManager = config.agentRuntimeManager;

## packages\training\src\benchmark\ModelBenchmarkService.ts
packages\training\src\benchmark\ModelBenchmarkService.ts:21 - import { getAgentRuntimeManager } from "../dependencies";

## packages\training\src\huggingface\HuggingFaceModelUploader.ts
packages\training\src\huggingface\HuggingFaceModelUploader.ts:418 - import { agentRuntimeManager } from '@elizaos/agents';

## packages\training\src\training\BenchmarkService.ts
packages\training\src\training\BenchmarkService.ts:20 - import { getAgentRuntimeManager } from "../dependencies";

## packages\training\src\training\ModelDeployer.ts
packages\training\src\training\ModelDeployer.ts:9 - import { getAgentRuntimeManager } from "../dependencies";

## packages\typescript\CHANGELOG.md
packages\typescript\CHANGELOG.md:62 - - **getTasks(agentIds) only.** `getTasks` now takes required `agentIds: UUID[]` (no optional `agentId`). All adapters (in-memory, plugin-sql PG/MySQL) and call sites updated; empty `agentIds` returns `[]` without querying.
packages\typescript\CHANGELOG.md:68 - - **Autonomy section** with `contextBuilder` that builds context from `getTargetRoomContextText()`, last thought from memories, and the same task/continuous templates. Schema matches the message pipeline (thought, providers, actions, text, simple).
packages\typescript\CHANGELOG.md:69 - - **Why:** Recurring sections get no message buffer; context must come from runtime and memories. Same templates preserve behavior; same schema lets the facade consume batcher output without a separate contract.

## packages\typescript\README.md
packages\typescript\README.md:12 - - **Evaluators:** Process conversation data to extract insights, build long-term memory, and maintain contextual awareness.
packages\typescript\README.md:14 - - **Entity and Memory Management:** Core support for tracking entities and their associated information.
packages\typescript\README.md:63 - - `ALLOW_NO_DATABASE`: Allow running without a persistent database adapter. When `true`, `AgentRuntime.initialize()` will fall back to an in-memory adapter (useful for benchmarks/tests).
packages\typescript\README.md:73 - - `DISABLE_MEMORY_CREATION` / `ALLOW_MEMORY_SOURCE_IDS`: Basic-capabilities-related; see plugin docs. Shown in the basic-capabilities banner when set.
packages\typescript\README.md:280 - The autonomy service lets the agent "think" and act on a schedule without user messages. It uses the **prompt batcher** with the **task system** for scheduling: when `enableAutonomy` is true, a recurring section is registered with `think("autonomy", ...)`. A BATCHER_DRAIN task for the autonomy affinity determines when the section drains; results are delivered to `onResult`, which runs the same post-LLM steps as the message pipeline (actions, memory, evaluators) via an execution facade.
packages\typescript\README.md:313 - Evaluators analyze conversation data and other inputs to extract meaningful information, build the agent's memory, and maintain contextual awareness. They help the agent:
packages\typescript\README.md:322 - The runtime talks to persistence through the `IDatabaseAdapter` interface. Adapters (e.g. plugin-sql, plugin-localdb, InMemory) implement this contract so the same runtime code works with different backends.
packages\typescript\README.md:434 - - **A**: Implement custom evaluators and integrate them with `AgentRuntime` (typically via a plugin). These can be tailored to extract specific information, enhancing the agent's memory and contextual understanding.

## packages\typescript\docs\DESIGN.md
packages\typescript\docs\DESIGN.md:38 - When **DISABLE_MEMORY_CREATION** is true, the message service does **not** call `createMemory` for: the incoming message (and does not queue embeddings), the agent’s response messages, or the “ignore” response. The message still gets a synthetic `message.id` (v4) so downstream logic (e.g. actions, evaluators) can run. **Why:** Reduces storage, meets retention rules, or runs without persisting (e.g. tests or one-off channels).
packages\typescript\docs\DESIGN.md:40 - **ALLOW_MEMORY_SOURCE_IDS** is an optional whitelist (array or comma-separated or JSON array). When **DISABLE_MEMORY_CREATION** is false and this list is set, only messages whose `metadata.sourceId` is in the list are persisted; others are skipped (and get a synthetic id). When the list is null/empty, all messages are persisted (subject only to DISABLE_MEMORY_CREATION). So: disable globally with DISABLE_MEMORY_CREATION; or leave creation on and restrict which sources are stored with ALLOW_MEMORY_SOURCE_IDS.

## packages\typescript\e2e\setup\global-setup.ts
packages\typescript\e2e\setup\global-setup.ts:7 - import { InMemoryDatabaseAdapter } from "../../src/database/inMemoryAdapter";
packages\typescript\e2e\setup\global-setup.ts:12 - import type { Character, Memory, Plugin, UUID } from "../../src/types";
packages\typescript\e2e\setup\global-setup.ts:101 - const adapter = new InMemoryDatabaseAdapter(agentId);
packages\typescript\e2e\setup\global-setup.ts:198 - const message: Memory = {
packages\typescript\e2e\setup\global-setup.ts:244 - const message: Memory = {

## packages\typescript\scripts\perf-memory.ts
packages\typescript\scripts\perf-memory.ts:11 - type Memory,
packages\typescript\scripts\perf-memory.ts:30 - autonomyMemoryCount?: number;
packages\typescript\scripts\perf-memory.ts:45 - finalAutonomyMemoryCount?: number;
packages\typescript\scripts\perf-memory.ts:106 - name: "Memory Profile Agent",
packages\typescript\scripts\perf-memory.ts:145 - source: "memory-profile",
packages\typescript\scripts\perf-memory.ts:201 - const worldId = stringToUuid(`memory-profile-world-${runtime.agentId}`);
packages\typescript\scripts\perf-memory.ts:202 - const userEntityId = stringToUuid(`memory-profile-user-${runtime.agentId}`);
packages\typescript\scripts\perf-memory.ts:267 - runtime.getMemoryById = async (): Promise<Memory | null> => null;
packages\typescript\scripts\perf-memory.ts:268 - runtime.getMemories = async (): Promise<Memory[]> => [];
packages\typescript\scripts\perf-memory.ts:269 - runtime.getMemoriesByRoomIds = async (): Promise<Memory[]> => [];
packages\typescript\scripts\perf-memory.ts:270 - runtime.createMemory = async (memory: Memory): Promise<UUID> =>
packages\typescript\scripts\perf-memory.ts:272 - runtime.updateMemory = async (): Promise<boolean> => true;
packages\typescript\scripts\perf-memory.ts:273 - runtime.deleteMemory = async (): Promise<void> => undefined;
packages\typescript\scripts\perf-memory.ts:311 - const usage = process.memoryUsage();
packages\typescript\scripts\perf-memory.ts:353 - finalAutonomyMemoryCount: last?.autonomyMemoryCount,
packages\typescript\scripts\perf-memory.ts:364 - const callback = async (): Promise<Memory[]> => [];
packages\typescript\scripts\perf-memory.ts:365 - const baseRoomId = stringToUuid(`memory-profile-room-${params.name}`);
packages\typescript\scripts\perf-memory.ts:366 - const entityId = stringToUuid(`memory-profile-user-${params.name}`);
packages\typescript\scripts\perf-memory.ts:389 - const message: Memory = {
packages\typescript\scripts\perf-memory.ts:397 - source: "memory-profile",
... and 2 more

## packages\typescript\scripts\test_trajectory_parity.ts
packages\typescript\scripts\test_trajectory_parity.ts:5 - type Memory,
packages\typescript\scripts\test_trajectory_parity.ts:24 - msg: Memory,

## packages\typescript\src\character.ts
packages\typescript\src\character.ts:35 - advancedMemory?: boolean;
packages\typescript\src\character.ts:55 - advancedMemory?: boolean;
packages\typescript\src\character.ts:152 - advancedMemory: input.advancedMemory,

## packages\typescript\src\database.ts
packages\typescript\src\database.ts:227 - }): Promise<Memory[]>;
packages\typescript\src\database.ts:233 - }): Promise<Memory[]>;
packages\typescript\src\database.ts:238 - * @param tableName Optional table name to filter memories by type
packages\typescript\src\database.ts:242 - memoryIds: UUID[],
packages\typescript\src\database.ts:244 - ): Promise<Memory[]>;
packages\typescript\src\database.ts:319 - }): Promise<Memory[]>;
packages\typescript\src\database.ts:323 - memories: Array<{ memory: Memory; tableName: string; unique?: boolean }>,
packages\typescript\src\database.ts:326 - memories: Array<Partial<Memory> & { id: UUID; metadata?: MemoryMetadata }>,
packages\typescript\src\database.ts:333 - memories: Array<{ memory: Memory; tableName: string }>,
packages\typescript\src\database.ts:336 - abstract deleteMemories(memoryIds: UUID[]): Promise<void>;
packages\typescript\src\database.ts:545 - }): Promise<Memory[]>;

## packages\typescript\src\deterministic.ts
packages\typescript\src\deterministic.ts:1 - import type { Memory, State } from "./types";
packages\typescript\src\deterministic.ts:163 - message?: Pick<Memory, "roomId" | "worldId">;
packages\typescript\src\deterministic.ts:209 - message: Pick<Memory, "roomId">;

## packages\typescript\src\entities.ts
packages\typescript\src\entities.ts:5 - type Memory,
packages\typescript\src\entities.ts:157 - ): Promise<{ entity: Entity; interactions: Memory[]; count: number }[]> {
packages\typescript\src\entities.ts:160 - interactions: Memory[];
packages\typescript\src\entities.ts:171 - const interactions: Memory[] = [];
packages\typescript\src\entities.ts:212 - message: Memory,

## packages\typescript\src\index.browser.ts
packages\typescript\src\index.browser.ts:13 - export * from "./database/inMemoryAdapter";
packages\typescript\src\index.browser.ts:16 - export * from "./memory";

## packages\typescript\src\index.edge.ts
packages\typescript\src\index.edge.ts:29 - export * from "./database/inMemoryAdapter";
packages\typescript\src\index.edge.ts:35 - export * from "./memory";

## packages\typescript\src\index.node.ts
packages\typescript\src\index.node.ts:33 - export * from "./database/inMemoryAdapter";
packages\typescript\src\index.node.ts:43 - export * from "./memory";

## packages\typescript\src\logger.ts
packages\typescript\src\logger.ts:71 - maxMemoryLogs?: number;
packages\typescript\src\logger.ts:116 - interface InMemoryDestination {
packages\typescript\src\logger.ts:678 - function createInMemoryDestination(maxLogs = 100): InMemoryDestination {
packages\typescript\src\logger.ts:711 - const globalInMemoryDestination = createInMemoryDestination();
packages\typescript\src\logger.ts:924 - maxMemoryLogs?: number;
packages\typescript\src\logger.ts:928 - let maxMemoryLogs: number | undefined;
packages\typescript\src\logger.ts:936 - typeof bindings.maxMemoryLogs === "number"
packages\typescript\src\logger.ts:938 - maxMemoryLogs = bindings.maxMemoryLogs;
packages\typescript\src\logger.ts:942 - const { level: _, maxMemoryLogs: __, ...rest } = bindings;
packages\typescript\src\logger.ts:955 - const { level, base, maxMemoryLogs } = extractBindingsConfig(bindings);
packages\typescript\src\logger.ts:958 - if (typeof maxMemoryLogs === "number" && maxMemoryLogs > 0) {
packages\typescript\src\logger.ts:1293 - export const recentLogs = (): string => globalInMemoryDestination.recentLogs();

## packages\typescript\src\memory.ts
packages\typescript\src\memory.ts:7 - type Memory,
packages\typescript\src\memory.ts:8 - type MemoryMetadata,
packages\typescript\src\memory.ts:10 - type MessageMemory,
packages\typescript\src\memory.ts:15 - export function createMessageMemory(params: {
packages\typescript\src\memory.ts:22 - }): MessageMemory {
packages\typescript\src\memory.ts:28 - type: MemoryType.MESSAGE,
packages\typescript\src\memory.ts:36 - metadata: MemoryMetadata,
packages\typescript\src\memory.ts:38 - return metadata.type === MemoryType.DOCUMENT;
packages\typescript\src\memory.ts:42 - * Type guard to check if a memory metadata is a FragmentMetadata
packages\typescript\src\memory.ts:47 - metadata: MemoryMetadata,
packages\typescript\src\memory.ts:49 - return metadata.type === MemoryType.FRAGMENT;
packages\typescript\src\memory.ts:53 - metadata: MemoryMetadata,
packages\typescript\src\memory.ts:55 - return metadata.type === MemoryType.MESSAGE;
packages\typescript\src\memory.ts:59 - * Type guard to check if a memory metadata is a DescriptionMetadata
packages\typescript\src\memory.ts:64 - metadata: MemoryMetadata,
packages\typescript\src\memory.ts:66 - return metadata.type === MemoryType.DESCRIPTION;
packages\typescript\src\memory.ts:70 - metadata: MemoryMetadata,
packages\typescript\src\memory.ts:73 - metadata.type !== MemoryType.DOCUMENT &&
packages\typescript\src\memory.ts:74 - metadata.type !== MemoryType.FRAGMENT &&
packages\typescript\src\memory.ts:75 - metadata.type !== MemoryType.MESSAGE &&
... and 12 more

## packages\typescript\src\prompts.ts
packages\typescript\src\prompts.ts:753 - export const longTermExtractionTemplate = `# Task: Extract Long-Term Memory (Strict Criteria)

## packages\typescript\src\runtime.ts
packages\typescript\src\runtime.ts:3 - interface WorkingMemoryEntry {
packages\typescript\src\runtime.ts:20 - import { InMemoryDatabaseAdapter } from "./database/inMemoryAdapter";
packages\typescript\src\runtime.ts:59 - type Memory,
packages\typescript\src\runtime.ts:60 - type MemoryMetadata,
packages\typescript\src\runtime.ts:226 - private maxWorkingMemoryEntries: number = 50; // Default value, can be overridden
packages\typescript\src\runtime.ts:239 - /** Database adapter. Use InMemoryDatabaseAdapter for in-memory-only runs. WHY: Caller owns DB lifecycle; no plugin registration race; single source of truth. */
packages\typescript\src\runtime.ts:382 - // Set max working memory entries from settings or environment
packages\typescript\src\runtime.ts:384 - this.maxWorkingMemoryEntries =
packages\typescript\src\runtime.ts:387 - this.maxWorkingMemoryEntries = getNumberEnv(
packages\typescript\src\runtime.ts:754 - if (this.character.advancedMemory === true) {
packages\typescript\src\runtime.ts:755 - const { createAdvancedMemoryPlugin } = await import(
packages\typescript\src\runtime.ts:1408 - message: Memory,
packages\typescript\src\runtime.ts:1409 - responses: Memory[],
packages\typescript\src\runtime.ts:1653 - const actionMemory: Memory = {
packages\typescript\src\runtime.ts:1900 - accumulatedState.data.workingMemory = {};
packages\typescript\src\runtime.ts:1904 - const memoryKey = `action_${responseAction}_${uuidv4()}`;
packages\typescript\src\runtime.ts:1905 - const memoryEntry: WorkingMemoryEntry = {
packages\typescript\src\runtime.ts:1910 - const workingMemory = accumulatedState.data.workingMemory as Record<
packages\typescript\src\runtime.ts:1914 - workingMemory[memoryKey] = memoryEntry;
packages\typescript\src\runtime.ts:1917 - const entries = Object.entries(workingMemory);
... and 44 more

## packages\typescript\src\utils.ts
packages\typescript\src\utils.ts:320 - messages: Memory[];
packages\typescript\src\utils.ts:327 - const groupedMessages: { [roomId: string]: Memory[] } = {};
packages\typescript\src\utils.ts:353 - .filter((message: Memory) => message.entityId)
packages\typescript\src\utils.ts:354 - .map((message: Memory) => {
packages\typescript\src\utils.ts:428 - messages: Memory[];

## packages\typescript\src\advanced-capabilities\actions\addContact.ts
packages\typescript\src\advanced-capabilities\actions\addContact.ts:52 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\addContact.ts:68 - message: Memory,

## packages\typescript\src\advanced-capabilities\actions\createTask.ts
packages\typescript\src\advanced-capabilities\actions\createTask.ts:126 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\createTask.ts:137 - message: Memory,

## packages\typescript\src\advanced-capabilities\actions\followRoom.ts
packages\typescript\src\advanced-capabilities\actions\followRoom.ts:33 - validate: async (runtime: IAgentRuntime, message: Memory) => {
packages\typescript\src\advanced-capabilities\actions\followRoom.ts:50 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\followRoom.ts:54 - _responses?: Memory[],

## packages\typescript\src\advanced-capabilities\actions\imageGeneration.ts
packages\typescript\src\advanced-capabilities\actions\imageGeneration.ts:41 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\imageGeneration.ts:45 - responses?: Memory[],

## packages\typescript\src\advanced-capabilities\actions\muteRoom.ts
packages\typescript\src\advanced-capabilities\actions\muteRoom.ts:25 - validate: async (runtime: IAgentRuntime, message: Memory) => {
packages\typescript\src\advanced-capabilities\actions\muteRoom.ts:35 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\muteRoom.ts:39 - _responses?: Memory[],

## packages\typescript\src\advanced-capabilities\actions\removeContact.ts
packages\typescript\src\advanced-capabilities\actions\removeContact.ts:36 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\removeContact.ts:48 - message: Memory,

## packages\typescript\src\advanced-capabilities\actions\roles.ts
packages\typescript\src\advanced-capabilities\actions\roles.ts:101 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\roles.ts:126 - message: Memory,

## packages\typescript\src\advanced-capabilities\actions\scheduleFollowUp.ts
packages\typescript\src\advanced-capabilities\actions\scheduleFollowUp.ts:49 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\scheduleFollowUp.ts:67 - message: Memory,

## packages\typescript\src\advanced-capabilities\actions\searchContacts.ts
packages\typescript\src\advanced-capabilities\actions\searchContacts.ts:47 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\searchContacts.ts:65 - message: Memory,

## packages\typescript\src\advanced-capabilities\actions\sendMessage.ts
packages\typescript\src\advanced-capabilities\actions\sendMessage.ts:146 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\sendMessage.ts:171 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\sendMessage.ts:175 - responses?: Memory[],
packages\typescript\src\advanced-capabilities\actions\sendMessage.ts:335 - const lookupMessage: Memory =

## packages\typescript\src\advanced-capabilities\actions\settings.ts
packages\typescript\src\advanced-capabilities\actions\settings.ts:345 - _message: Memory,
packages\typescript\src\advanced-capabilities\actions\settings.ts:737 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\settings.ts:797 - message: Memory,

## packages\typescript\src\advanced-capabilities\actions\unfollowRoom.ts
packages\typescript\src\advanced-capabilities\actions\unfollowRoom.ts:24 - validate: async (runtime: IAgentRuntime, message: Memory) => {
packages\typescript\src\advanced-capabilities\actions\unfollowRoom.ts:34 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\unfollowRoom.ts:38 - _responses?: Memory[],

## packages\typescript\src\advanced-capabilities\actions\unmuteRoom.ts
packages\typescript\src\advanced-capabilities\actions\unmuteRoom.ts:25 - validate: async (runtime: IAgentRuntime, message: Memory) => {
packages\typescript\src\advanced-capabilities\actions\unmuteRoom.ts:35 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\unmuteRoom.ts:39 - _responses?: Memory[],

## packages\typescript\src\advanced-capabilities\actions\updateContact.ts
packages\typescript\src\advanced-capabilities\actions\updateContact.ts:53 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\updateContact.ts:65 - message: Memory,

## packages\typescript\src\advanced-capabilities\actions\updateEntity.ts
packages\typescript\src\advanced-capabilities\actions\updateEntity.ts:146 - _message: Memory,
packages\typescript\src\advanced-capabilities\actions\updateEntity.ts:163 - message: Memory,
packages\typescript\src\advanced-capabilities\actions\updateEntity.ts:167 - responses?: Memory[],

## packages\typescript\src\advanced-capabilities\evaluators\reflection.ts
packages\typescript\src\advanced-capabilities\evaluators\reflection.ts:142 - message: Memory,
packages\typescript\src\advanced-capabilities\evaluators\reflection.ts:261 - const factMemory = {
packages\typescript\src\advanced-capabilities\evaluators\reflection.ts:270 - const createdMemoryId = await runtime.createMemory(
packages\typescript\src\advanced-capabilities\evaluators\reflection.ts:275 - // Update the memory object with the actual ID from the database
packages\typescript\src\advanced-capabilities\evaluators\reflection.ts:276 - const createdMemory = { ...factMemory, id: createdMemoryId };
packages\typescript\src\advanced-capabilities\evaluators\reflection.ts:378 - message: Memory,
packages\typescript\src\advanced-capabilities\evaluators\reflection.ts:407 - function formatFacts(facts: Memory[]) {

## packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:64 - message: Memory,
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:73 - message: Memory,
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:263 - _recentMessages: Memory[],
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:290 - message: Memory,
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:325 - messages: Memory[],
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:329 - const messagesBySender = new Map<UUID, Memory[]>();
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:356 - messagesA: Memory[],
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:357 - messagesB: Memory[],
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:626 - const entity = await runtime.getEntityById(memory.entityId);
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:676 - messages: Memory[],
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:765 - message: Memory,
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:806 - message: Memory,
packages\typescript\src\advanced-capabilities\evaluators\relationshipExtraction.ts:807 - _recentMessages: Memory[],

## packages\typescript\src\advanced-capabilities\providers\contacts.ts
packages\typescript\src\advanced-capabilities\providers\contacts.ts:19 - _message: Memory,

## packages\typescript\src\advanced-capabilities\providers\facts.ts
packages\typescript\src\advanced-capabilities\providers\facts.ts:25 - function formatFacts(facts: Memory[]) {
packages\typescript\src\advanced-capabilities\providers\facts.ts:44 - get: async (runtime: IAgentRuntime, message: Memory, _state: State) => {
packages\typescript\src\advanced-capabilities\providers\facts.ts:90 - const allFacts: Memory[] = [];

## packages\typescript\src\advanced-capabilities\providers\followUps.ts
packages\typescript\src\advanced-capabilities\providers\followUps.ts:19 - _message: Memory,

## packages\typescript\src\advanced-capabilities\providers\knowledge.ts
packages\typescript\src\advanced-capabilities\providers\knowledge.ts:25 - get: async (runtime: IAgentRuntime, message: Memory, _state: State) => {

## packages\typescript\src\advanced-capabilities\providers\relationships.ts
packages\typescript\src\advanced-capabilities\providers\relationships.ts:109 - get: async (runtime: IAgentRuntime, message: Memory) => {

## packages\typescript\src\advanced-capabilities\providers\roles.ts
packages\typescript\src\advanced-capabilities\providers\roles.ts:36 - message: Memory,

## packages\typescript\src\advanced-capabilities\providers\settings.ts
packages\typescript\src\advanced-capabilities\providers\settings.ts:162 - message: Memory,

## packages\typescript\src\advanced-memory\index.ts
packages\typescript\src\advanced-memory\index.ts:10 - import { MemoryService } from "./services/memory-service.ts";
packages\typescript\src\advanced-memory\index.ts:22 - export { MemoryService } from "./services/memory-service.ts";
packages\typescript\src\advanced-memory\index.ts:33 - export function createAdvancedMemoryPlugin(): Plugin {
packages\typescript\src\advanced-memory\index.ts:35 - name: "memory",
packages\typescript\src\advanced-memory\index.ts:38 - services: [MemoryService],
packages\typescript\src\advanced-memory\index.ts:40 - providers: [longTermMemoryProvider, contextSummaryProvider],

## packages\typescript\src\advanced-memory\prompts.ts
packages\typescript\src\advanced-memory\prompts.ts:65 - export const longTermExtractionTemplate = `# Task: Extract Long-Term Memory (Strict Criteria)

## packages\typescript\src\advanced-memory\types.ts
packages\typescript\src\advanced-memory\types.ts:15 - export interface LongTermMemory {
packages\typescript\src\advanced-memory\types.ts:19 - category: LongTermMemoryCategory;
packages\typescript\src\advanced-memory\types.ts:49 - export interface MemoryConfig {
packages\typescript\src\advanced-memory\types.ts:63 - export interface MemoryExtraction {
packages\typescript\src\advanced-memory\types.ts:64 - category: LongTermMemoryCategory;
packages\typescript\src\advanced-memory\types.ts:76 - export type MemoryServiceTypeName = "memory";

## packages\typescript\src\advanced-memory\actions\resetSession.ts
packages\typescript\src\advanced-memory\actions\resetSession.ts:31 - message: Memory,
packages\typescript\src\advanced-memory\actions\resetSession.ts:56 - message: Memory,
packages\typescript\src\advanced-memory\actions\resetSession.ts:60 - _responses?: Memory[],

## packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:7 - type Memory,
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:12 - import type { MemoryService } from "../services/memory-service.ts";
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:13 - import { LongTermMemoryCategory, type MemoryExtraction } from "../types.ts";
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:15 - const spec = requireEvaluatorSpec("LONG_TERM_MEMORY_EXTRACTION");
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:16 - const validMemoryCategories = new Set(Object.values(LongTermMemoryCategory));
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:18 - function parseMemoryExtractionXML(xml: string): MemoryExtraction[] {
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:19 - const memoryMatches = xml.matchAll(
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:23 - const extractions: MemoryExtraction[] = [];
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:26 - const category = match[1].trim() as LongTermMemoryCategory;
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:32 - { src: "evaluator:memory" },
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:33 - `Invalid memory category: ${category}`,
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:55 - message: Memory,
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:60 - const memoryService = runtime.getService("memory") as MemoryService | null;
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:63 - const config = memoryService.getConfig();
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:66 - { src: "evaluator:memory" },
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:84 - handler: async (runtime: IAgentRuntime, message: Memory) => {
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:85 - const memoryService = runtime.getService("memory") as MemoryService;
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:87 - logger.error({ src: "evaluator:memory" }, "MemoryService not found");
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:91 - const config = memoryService.getConfig();
packages\typescript\src\advanced-memory\evaluators\long-term-extraction.ts:96 - { src: "evaluator:memory" },
... and 10 more

## packages\typescript\src\advanced-memory\evaluators\reflection.ts
packages\typescript\src\advanced-memory\evaluators\reflection.ts:137 - message: Memory,
packages\typescript\src\advanced-memory\evaluators\reflection.ts:256 - const factMemory = {
packages\typescript\src\advanced-memory\evaluators\reflection.ts:265 - const createdMemoryId = await runtime.createMemory(
packages\typescript\src\advanced-memory\evaluators\reflection.ts:270 - // Update the memory object with the actual ID from the database
packages\typescript\src\advanced-memory\evaluators\reflection.ts:271 - const createdMemory = { ...factMemory, id: createdMemoryId };
packages\typescript\src\advanced-memory\evaluators\reflection.ts:367 - message: Memory,
packages\typescript\src\advanced-memory\evaluators\reflection.ts:561 - function formatFacts(facts: Memory[]) {
packages\typescript\src\advanced-memory\evaluators\reflection.ts:564 - .map((fact: Memory) => fact.content.text)

## packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:77 - message: Memory,
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:86 - message: Memory,
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:269 - _recentMessages: Memory[],
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:296 - message: Memory,
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:331 - messages: Memory[],
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:335 - const messagesBySender = new Map<UUID, Memory[]>();
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:362 - messagesA: Memory[],
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:363 - messagesB: Memory[],
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:625 - const entity = await runtime.getEntityById(memory.entityId);
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:675 - messages: Memory[],
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:764 - message: Memory,
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:805 - message: Memory,
packages\typescript\src\advanced-memory\evaluators\relationshipExtraction.ts:806 - _recentMessages: Memory[],

## packages\typescript\src\advanced-memory\evaluators\summarization.ts
packages\typescript\src\advanced-memory\evaluators\summarization.ts:7 - type Memory,
packages\typescript\src\advanced-memory\evaluators\summarization.ts:16 - import type { MemoryService } from "../services/memory-service.ts";
packages\typescript\src\advanced-memory\evaluators\summarization.ts:20 - const spec = requireEvaluatorSpec("MEMORY_SUMMARIZATION");
packages\typescript\src\advanced-memory\evaluators\summarization.ts:22 - function isDialogueMessage(msg: Memory): boolean {
packages\typescript\src\advanced-memory\evaluators\summarization.ts:83 - message: Memory,
packages\typescript\src\advanced-memory\evaluators\summarization.ts:87 - const memoryService = runtime.getService("memory") as MemoryService | null;
packages\typescript\src\advanced-memory\evaluators\summarization.ts:90 - const config = memoryService.getConfig();
packages\typescript\src\advanced-memory\evaluators\summarization.ts:95 - const existingSummary = await memoryService.getCurrentSessionSummary(
packages\typescript\src\advanced-memory\evaluators\summarization.ts:107 - handler: async (runtime: IAgentRuntime, message: Memory) => {
packages\typescript\src\advanced-memory\evaluators\summarization.ts:108 - const memoryService = runtime.getService("memory") as MemoryService;
packages\typescript\src\advanced-memory\evaluators\summarization.ts:110 - logger.error({ src: "evaluator:memory" }, "MemoryService not found");
packages\typescript\src\advanced-memory\evaluators\summarization.ts:114 - const config = memoryService.getConfig();
packages\typescript\src\advanced-memory\evaluators\summarization.ts:119 - { src: "evaluator:memory" },
packages\typescript\src\advanced-memory\evaluators\summarization.ts:141 - { src: "evaluator:memory" },
packages\typescript\src\advanced-memory\evaluators\summarization.ts:152 - { src: "evaluator:memory" },
packages\typescript\src\advanced-memory\evaluators\summarization.ts:167 - { src: "evaluator:memory" },
packages\typescript\src\advanced-memory\evaluators\summarization.ts:222 - { src: "evaluator:memory" },
packages\typescript\src\advanced-memory\evaluators\summarization.ts:252 - { src: "evaluator:memory" },
packages\typescript\src\advanced-memory\evaluators\summarization.ts:271 - { src: "evaluator:memory" },
packages\typescript\src\advanced-memory\evaluators\summarization.ts:278 - { src: "evaluator:memory", err },

## packages\typescript\src\advanced-memory\providers\context-summary.ts
packages\typescript\src\advanced-memory\providers\context-summary.ts:10 - import type { MemoryService } from "../services/memory-service.ts";
packages\typescript\src\advanced-memory\providers\context-summary.ts:19 - message: Memory,
packages\typescript\src\advanced-memory\providers\context-summary.ts:23 - const memoryService = runtime.getService(
packages\typescript\src\advanced-memory\providers\context-summary.ts:75 - { src: "provider:memory", err },

## packages\typescript\src\advanced-memory\providers\index.ts
packages\typescript\src\advanced-memory\providers\index.ts:2 - export { longTermMemoryProvider } from "./long-term-memory.ts";

## packages\typescript\src\advanced-memory\providers\long-term-memory.ts
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:10 - import type { MemoryService } from "../services/memory-service.ts";
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:12 - export const longTermMemoryProvider: Provider = {
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:13 - name: "LONG_TERM_MEMORY",
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:19 - message: Memory,
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:23 - const memoryService = runtime.getService(
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:28 - data: { memoryCount: 0 },
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:37 - data: { memoryCount: 0 },
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:43 - const memories = await memoryService.getLongTermMemories(
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:50 - data: { memoryCount: 0 },
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:62 - const count = categoryCounts.get(memory.category) || 0;
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:72 - memoryCount: memories.length,
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:77 - memoryCategories: categoryList,
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:84 - { src: "provider:memory", err },
packages\typescript\src\advanced-memory\providers\long-term-memory.ts:88 - data: { memoryCount: 0 },

## packages\typescript\src\advanced-memory\schemas\index.ts
packages\typescript\src\advanced-memory\schemas\index.ts:8 - export { longTermMemories } from "./long-term-memories";
packages\typescript\src\advanced-memory\schemas\index.ts:9 - export { memoryAccessLogs } from "./memory-access-logs";

## packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:10 - export const memoryAccessLogs: SchemaTable = {
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:11 - name: "memory_access_logs",
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:15 - memory_id: { name: "memory_id", type: "varchar(36)", notNull: true },
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:16 - memory_type: { name: "memory_type", type: "text", notNull: true },
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:27 - memory_access_logs_memory_id_idx: {
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:28 - name: "memory_access_logs_memory_id_idx",
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:29 - columns: [{ expression: "memory_id", isExpression: false }],
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:32 - memory_access_logs_agent_id_idx: {
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:33 - name: "memory_access_logs_agent_id_idx",
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:37 - memory_access_logs_accessed_at_idx: {
packages\typescript\src\advanced-memory\schemas\memory-access-logs.ts:38 - name: "memory_access_logs_accessed_at_idx",

## packages\typescript\src\advanced-memory\services\autoCompaction.ts
packages\typescript\src\advanced-memory\services\autoCompaction.ts:20 - import { MemoryType, ModelType } from "../../types/index.ts";
packages\typescript\src\advanced-memory\services\autoCompaction.ts:153 - metadata: { type: MemoryType.CUSTOM },

## packages\typescript\src\advanced-memory\services\memory-service.ts
packages\typescript\src\advanced-memory\services\memory-service.ts:8 - import type { MemoryStorageProvider } from "../../types/memory-storage.ts";
packages\typescript\src\advanced-memory\services\memory-service.ts:16 - export class MemoryService extends Service {
packages\typescript\src\advanced-memory\services\memory-service.ts:17 - static serviceType: ServiceTypeName = "memory" as ServiceTypeName;
packages\typescript\src\advanced-memory\services\memory-service.ts:20 - private memoryConfig: MemoryConfig;
packages\typescript\src\advanced-memory\services\memory-service.ts:24 - private storage: MemoryStorageProvider | null = null;
packages\typescript\src\advanced-memory\services\memory-service.ts:33 - this.memoryConfig = {
packages\typescript\src\advanced-memory\services\memory-service.ts:49 - const service = new MemoryService(runtime);
packages\typescript\src\advanced-memory\services\memory-service.ts:55 - logger.info({ src: "service:memory" }, "MemoryService stopped");
packages\typescript\src\advanced-memory\services\memory-service.ts:68 - { src: "service:memory", agentId: runtime.agentId },
packages\typescript\src\advanced-memory\services\memory-service.ts:70 - "Register a memoryStorage service from your database plugin to enable them.",
packages\typescript\src\advanced-memory\services\memory-service.ts:76 - const threshold = runtime.getSetting("MEMORY_SUMMARIZATION_THRESHOLD");
packages\typescript\src\advanced-memory\services\memory-service.ts:78 - this.memoryConfig.shortTermSummarizationThreshold = Number.parseInt(
packages\typescript\src\advanced-memory\services\memory-service.ts:84 - const retainRecent = runtime.getSetting("MEMORY_RETAIN_RECENT");
packages\typescript\src\advanced-memory\services\memory-service.ts:86 - this.memoryConfig.shortTermRetainRecent = Number.parseInt(
packages\typescript\src\advanced-memory\services\memory-service.ts:96 - this.memoryConfig.shortTermSummarizationInterval = Number.parseInt(
packages\typescript\src\advanced-memory\services\memory-service.ts:102 - const maxNewMessages = runtime.getSetting("MEMORY_MAX_NEW_MESSAGES");
packages\typescript\src\advanced-memory\services\memory-service.ts:104 - this.memoryConfig.summaryMaxNewMessages = Number.parseInt(
packages\typescript\src\advanced-memory\services\memory-service.ts:110 - const longTermEnabled = runtime.getSetting("MEMORY_LONG_TERM_ENABLED");
packages\typescript\src\advanced-memory\services\memory-service.ts:112 - this.memoryConfig.longTermExtractionEnabled = false;
packages\typescript\src\advanced-memory\services\memory-service.ts:114 - this.memoryConfig.longTermExtractionEnabled = true;
... and 46 more

## packages\typescript\src\advanced-planning\types.ts
packages\typescript\src\advanced-planning\types.ts:27 - message?: Memory;
packages\typescript\src\advanced-planning\types.ts:91 - message?: Memory,
packages\typescript\src\advanced-planning\types.ts:99 - message: Memory,

## packages\typescript\src\advanced-planning\actions\chain-example.ts
packages\typescript\src\advanced-planning\actions\chain-example.ts:26 - validate: async (_runtime: IAgentRuntime, _message: Memory) => true,
packages\typescript\src\advanced-planning\actions\chain-example.ts:30 - message: Memory,
packages\typescript\src\advanced-planning\actions\chain-example.ts:74 - validate: async (_runtime: IAgentRuntime, _message: Memory) => true,
packages\typescript\src\advanced-planning\actions\chain-example.ts:78 - _message: Memory,
packages\typescript\src\advanced-planning\actions\chain-example.ts:132 - validate: async (_runtime: IAgentRuntime, _message: Memory) => true,
packages\typescript\src\advanced-planning\actions\chain-example.ts:136 - _message: Memory,
packages\typescript\src\advanced-planning\actions\chain-example.ts:203 - validate: async (_runtime: IAgentRuntime, message: Memory) => {
packages\typescript\src\advanced-planning\actions\chain-example.ts:216 - _message: Memory,

## packages\typescript\src\advanced-planning\actions\scheduleFollowUp.ts
packages\typescript\src\advanced-planning\actions\scheduleFollowUp.ts:129 - message: Memory,
packages\typescript\src\advanced-planning\actions\scheduleFollowUp.ts:156 - message: Memory,

## packages\typescript\src\advanced-planning\services\planning-service.ts
packages\typescript\src\advanced-planning\services\planning-service.ts:12 - type Memory,
packages\typescript\src\advanced-planning\services\planning-service.ts:25 - workingMemory: Record<string, JsonValue>;
packages\typescript\src\advanced-planning\services\planning-service.ts:72 - type WorkingMemory = Record<string, JsonValue>;
packages\typescript\src\advanced-planning\services\planning-service.ts:75 - class PlanWorkingMemory {
packages\typescript\src\advanced-planning\services\planning-service.ts:76 - private memory = new Map<string, JsonValue>();
packages\typescript\src\advanced-planning\services\planning-service.ts:118 - workingMemory: WorkingMemory;
packages\typescript\src\advanced-planning\services\planning-service.ts:132 - message: Memory,
packages\typescript\src\advanced-planning\services\planning-service.ts:216 - message?: Memory,
packages\typescript\src\advanced-planning\services\planning-service.ts:257 - message: Memory,
packages\typescript\src\advanced-planning\services\planning-service.ts:261 - const workingMemory = new PlanWorkingMemory();
packages\typescript\src\advanced-planning\services\planning-service.ts:278 - workingMemory: workingMemory.serialize(),
packages\typescript\src\advanced-planning\services\planning-service.ts:474 - message?: Memory,
packages\typescript\src\advanced-planning\services\planning-service.ts:738 - message: Memory,
packages\typescript\src\advanced-planning\services\planning-service.ts:739 - workingMemory: PlanWorkingMemory,
packages\typescript\src\advanced-planning\services\planning-service.ts:786 - message: Memory,
packages\typescript\src\advanced-planning\services\planning-service.ts:787 - workingMemory: PlanWorkingMemory,
packages\typescript\src\advanced-planning\services\planning-service.ts:828 - message: Memory,
packages\typescript\src\advanced-planning\services\planning-service.ts:829 - workingMemory: PlanWorkingMemory,
packages\typescript\src\advanced-planning\services\planning-service.ts:872 - message: Memory,
packages\typescript\src\advanced-planning\services\planning-service.ts:873 - workingMemory: PlanWorkingMemory,
... and 1 more

## packages\typescript\src\autonomy\action.ts
packages\typescript\src\autonomy\action.ts:81 - message: Memory,
packages\typescript\src\autonomy\action.ts:112 - message: Memory,
packages\typescript\src\autonomy\action.ts:190 - const adminMessage: Memory = {

## packages\typescript\src\autonomy\autonomousState.ts
packages\typescript\src\autonomy\autonomousState.ts:151 - _message: Memory,

## packages\typescript\src\autonomy\execution-facade.ts
packages\typescript\src\autonomy\execution-facade.ts:81 - autonomousMessage: Memory,
packages\typescript\src\autonomy\execution-facade.ts:93 - // WHY: processActions expects Memory[] with content; one item matches the message pipeline's single-shot response shape.
packages\typescript\src\autonomy\execution-facade.ts:94 - const responseMessages: Memory[] = [
packages\typescript\src\autonomy\execution-facade.ts:114 - { src: "autonomy:facade", memoryId: responseMemory.id },

## packages\typescript\src\autonomy\providers.ts
packages\typescript\src\autonomy\providers.ts:30 - message: Memory,
packages\typescript\src\autonomy\providers.ts:97 - const recentAdminMessages: Memory[] = [];
packages\typescript\src\autonomy\providers.ts:142 - message: Memory,

## packages\typescript\src\autonomy\service.ts
packages\typescript\src\autonomy\service.ts:25 - type Memory,
packages\typescript\src\autonomy\service.ts:131 - if (memory.entityId === this.runtime.agentId) {
packages\typescript\src\autonomy\service.ts:138 - const messagesByRoom = new Map<UUID, Memory[]>();
packages\typescript\src\autonomy\service.ts:143 - if (memory.entityId === this.runtime.agentId) {
packages\typescript\src\autonomy\service.ts:146 - const bucket = messagesByRoom.get(memory.roomId) ?? [];
packages\typescript\src\autonomy\service.ts:163 - .map((memory) => {
packages\typescript\src\autonomy\service.ts:167 - typeof memory.content.text === "string" ? memory.content.text : "";
packages\typescript\src\autonomy\service.ts:175 - .filter((memory) => memory.entityId === this.runtime.agentId)
packages\typescript\src\autonomy\service.ts:176 - .map((memory) =>
packages\typescript\src\autonomy\service.ts:177 - typeof memory.content.text === "string" ? memory.content.text : "",
packages\typescript\src\autonomy\service.ts:395 - let lastAgentThought: Memory | null = null;
packages\typescript\src\autonomy\service.ts:398 - memory.entityId === agentEntity.id &&
packages\typescript\src\autonomy\service.ts:403 - (memory.content.metadata as Record<string, ContentValue>)?.type ===
packages\typescript\src\autonomy\service.ts:410 - lastAgentThought = memory;
packages\typescript\src\autonomy\service.ts:439 - const autonomousMessage: Memory = {
packages\typescript\src\autonomy\service.ts:468 - const autonomyLogMemory: Memory = {
packages\typescript\src\autonomy\service.ts:490 - const callback = async (content: Content): Promise<Memory[]> => {
packages\typescript\src\autonomy\service.ts:497 - const responseMemory: Memory = {
packages\typescript\src\autonomy\service.ts:625 - * from runtime (room context, last thought from memories) and the same templates
packages\typescript\src\autonomy\service.ts:646 - let lastAgentThought: Memory | null = null;
... and 7 more

## packages\typescript\src\basic-capabilities\index.ts
packages\typescript\src\basic-capabilities\index.ts:52 - import { MemoryType } from "../types/memory.ts";
packages\typescript\src\basic-capabilities\index.ts:358 - message: Memory,
packages\typescript\src\basic-capabilities\index.ts:463 - message: Memory;
packages\typescript\src\basic-capabilities\index.ts:465 - await runtime.createMemories([{ memory: message, tableName: "messages" }]);
packages\typescript\src\basic-capabilities\index.ts:501 - const message: Memory = {
packages\typescript\src\basic-capabilities\index.ts:509 - type: MemoryType.MESSAGE,

## packages\typescript\src\basic-capabilities\actions\choice.ts
packages\typescript\src\basic-capabilities\actions\choice.ts:27 - message: Memory,
packages\typescript\src\basic-capabilities\actions\choice.ts:72 - message: Memory,
packages\typescript\src\basic-capabilities\actions\choice.ts:76 - _responses?: Memory[],

## packages\typescript\src\basic-capabilities\actions\compactSession.ts
packages\typescript\src\basic-capabilities\actions\compactSession.ts:23 - import { MemoryType, ModelType } from "../../types/index.ts";
packages\typescript\src\basic-capabilities\actions\compactSession.ts:72 - message: Memory,
packages\typescript\src\basic-capabilities\actions\compactSession.ts:87 - message: Memory,
packages\typescript\src\basic-capabilities\actions\compactSession.ts:91 - _responses?: Memory[],
packages\typescript\src\basic-capabilities\actions\compactSession.ts:114 - metadata: { type: MemoryType.CUSTOM },

## packages\typescript\src\basic-capabilities\actions\ignore.ts
packages\typescript\src\basic-capabilities\actions\ignore.ts:18 - validate: async (_runtime: IAgentRuntime, _message: Memory) => {
packages\typescript\src\basic-capabilities\actions\ignore.ts:24 - _message: Memory,
packages\typescript\src\basic-capabilities\actions\ignore.ts:28 - responses?: Memory[],

## packages\typescript\src\basic-capabilities\actions\none.ts
packages\typescript\src\basic-capabilities\actions\none.ts:16 - validate: async (_runtime: IAgentRuntime, _message: Memory) => {
packages\typescript\src\basic-capabilities\actions\none.ts:22 - _message: Memory,

## packages\typescript\src\basic-capabilities\actions\reply.ts
packages\typescript\src\basic-capabilities\actions\reply.ts:29 - message: Memory,
packages\typescript\src\basic-capabilities\actions\reply.ts:33 - responses?: Memory[],

## packages\typescript\src\basic-capabilities\providers\actions.ts
packages\typescript\src\basic-capabilities\providers\actions.ts:32 - * @typedef {import('./Memory').Memory} Memory
packages\typescript\src\basic-capabilities\providers\actions.ts:51 - get: async (runtime: IAgentRuntime, message: Memory, state: State) => {

## packages\typescript\src\basic-capabilities\providers\actionState.ts
packages\typescript\src\basic-capabilities\providers\actionState.ts:17 - type WorkingMemoryEntry = {
packages\typescript\src\basic-capabilities\providers\actionState.ts:31 - get: async (runtime: IAgentRuntime, message: Memory, state: State) => {
packages\typescript\src\basic-capabilities\providers\actionState.ts:34 - const workingMemory = state.data.workingMemory;
packages\typescript\src\basic-capabilities\providers\actionState.ts:145 - let memoryText = "";
packages\typescript\src\basic-capabilities\providers\actionState.ts:147 - const entries = Object.entries(workingMemory) as Array<
packages\typescript\src\basic-capabilities\providers\actionState.ts:150 - const topEntries: Array<[string, WorkingMemoryEntry]> = [];
packages\typescript\src\basic-capabilities\providers\actionState.ts:162 - const memoryEntries = topEntries
packages\typescript\src\basic-capabilities\providers\actionState.ts:175 - memoryText = addHeader("# Working Memory", memoryEntries);
packages\typescript\src\basic-capabilities\providers\actionState.ts:178 - // Get recent action result memories from the database
packages\typescript\src\basic-capabilities\providers\actionState.ts:195 - const groupedByRun = new Map<string, Memory[]>();
packages\typescript\src\basic-capabilities\providers\actionState.ts:211 - const textChars = memories.reduce((sum, memory) => {
packages\typescript\src\basic-capabilities\providers\actionState.ts:212 - const content = memory.content;
packages\typescript\src\basic-capabilities\providers\actionState.ts:230 - (a: Memory, b: Memory) => (a.createdAt || 0) - (b.createdAt || 0),
packages\typescript\src\basic-capabilities\providers\actionState.ts:234 - .map((mem: Memory) => {
packages\typescript\src\basic-capabilities\providers\actionState.ts:253 - const firstMemory = sortedMemories[0];
packages\typescript\src\basic-capabilities\providers\actionState.ts:254 - const thought = firstMemory?.content?.planThought || "";
packages\typescript\src\basic-capabilities\providers\actionState.ts:266 - const allText = [planText, resultsText, memoryText, actionMemoriesText]

## packages\typescript\src\basic-capabilities\providers\attachments.ts
packages\typescript\src\basic-capabilities\providers\attachments.ts:34 - get: async (runtime: IAgentRuntime, message: Memory) => {

## packages\typescript\src\basic-capabilities\providers\character.ts
packages\typescript\src\basic-capabilities\providers\character.ts:43 - get: async (runtime: IAgentRuntime, message: Memory, state: State) => {

## packages\typescript\src\basic-capabilities\providers\choice.ts
packages\typescript\src\basic-capabilities\providers\choice.ts:43 - message: Memory,

## packages\typescript\src\basic-capabilities\providers\contextBench.ts
packages\typescript\src\basic-capabilities\providers\contextBench.ts:13 - meta: Memory["metadata"] | undefined,
packages\typescript\src\basic-capabilities\providers\contextBench.ts:14 - ): meta is Memory["metadata"] & { benchmarkContext?: string } {
packages\typescript\src\basic-capabilities\providers\contextBench.ts:38 - get: async (_runtime: IAgentRuntime, message: Memory, _state: State) => {

## packages\typescript\src\basic-capabilities\providers\currentTime.ts
packages\typescript\src\basic-capabilities\providers\currentTime.ts:24 - get: async (_runtime: IAgentRuntime, _message: Memory, _state: State) => {

## packages\typescript\src\basic-capabilities\providers\entities.ts
packages\typescript\src\basic-capabilities\providers\entities.ts:22 - get: async (runtime: IAgentRuntime, message: Memory) => {

## packages\typescript\src\basic-capabilities\providers\evaluators.ts
packages\typescript\src\basic-capabilities\providers\evaluators.ts:95 - get: async (runtime: IAgentRuntime, message: Memory, state: State) => {

## packages\typescript\src\basic-capabilities\providers\providers.ts
packages\typescript\src\basic-capabilities\providers\providers.ts:31 - get: async (runtime: IAgentRuntime, _message: Memory, _state: State) => {

## packages\typescript\src\basic-capabilities\providers\recentMessages.ts
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:43 - ): Promise<Memory[]> => {
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:67 - * @param {Memory} message - The message to retrieve data from.
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:74 - get: async (runtime: IAgentRuntime, message: Memory, _state: State) => {
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:139 - const groupedByRun = new Map<string, Memory[]>();
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:155 - const textChars = memories.reduce((sum, memory) => {
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:156 - const content = memory.content;
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:175 - (a: Memory, b: Memory) => (a.createdAt || 0) - (b.createdAt || 0),
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:178 - const firstMemory = sortedMemories[0];
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:179 - const thought = firstMemory?.content?.planThought || "";
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:181 - .map((mem: Memory) => {
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:340 - recentInteractionsData: Memory[],
packages\typescript\src\basic-capabilities\providers\recentMessages.ts:365 - recentInteractionsData: Memory[],

## packages\typescript\src\basic-capabilities\providers\time.ts
packages\typescript\src\basic-capabilities\providers\time.ts:24 - get: async (_runtime: IAgentRuntime, _message: Memory, _state: State) => {

## packages\typescript\src\basic-capabilities\providers\world.ts
packages\typescript\src\basic-capabilities\providers\world.ts:25 - get: async (runtime: IAgentRuntime, message: Memory, _state: State) => {

## packages\typescript\src\database\inMemoryAdapter.ts
packages\typescript\src\database\inMemoryAdapter.ts:59 - export class InMemoryDatabaseAdapter extends DatabaseAdapter<
packages\typescript\src\database\inMemoryAdapter.ts:73 - private memoriesById = new Map<string, Memory>();
packages\typescript\src\database\inMemoryAdapter.ts:74 - private memoriesByRoom = new Map<string, Memory[]>();
packages\typescript\src\database\inMemoryAdapter.ts:168 - // WHY no-op: InMemory adapter has no persistent storage, so no cleanup needed.
packages\typescript\src\database\inMemoryAdapter.ts:234 - // WHY simple set: For InMemory, upsert is just Map.set() which naturally
packages\typescript\src\database\inMemoryAdapter.ts:246 - // WHY O(N) scan: InMemory has no indexing, so we iterate all entities.
packages\typescript\src\database\inMemoryAdapter.ts:272 - // WHY O(N) scan: InMemory has no indexing. Match ANY name in entity.names.
packages\typescript\src\database\inMemoryAdapter.ts:375 - }): Promise<Memory[]> {
packages\typescript\src\database\inMemoryAdapter.ts:384 - all = all.filter((memory) => {
packages\typescript\src\database\inMemoryAdapter.ts:385 - const createdAt = memory.createdAt ?? 0;
packages\typescript\src\database\inMemoryAdapter.ts:396 - // WHY: In-memory metadata filtering uses deep equality check for each
packages\typescript\src\database\inMemoryAdapter.ts:401 - all = all.filter((memory) => {
packages\typescript\src\database\inMemoryAdapter.ts:403 - const memMeta = memory.metadata as Record<string, unknown>;
packages\typescript\src\database\inMemoryAdapter.ts:404 - // Check if memory.metadata contains all key-value pairs from params.metadata
packages\typescript\src\database\inMemoryAdapter.ts:423 - async getMemoriesByIds(ids: UUID[]): Promise<Memory[]> {
packages\typescript\src\database\inMemoryAdapter.ts:424 - const out: Memory[] = [];
packages\typescript\src\database\inMemoryAdapter.ts:436 - }): Promise<Memory[]> {
packages\typescript\src\database\inMemoryAdapter.ts:438 - const out: Memory[] = [];
packages\typescript\src\database\inMemoryAdapter.ts:539 - async searchMemories(): Promise<Memory[]> {
packages\typescript\src\database\inMemoryAdapter.ts:545 - memories: Array<{ memory: Memory; tableName: string; unique?: boolean }>,
... and 16 more

## packages\typescript\src\generated\action-docs.ts
packages\typescript\src\generated\action-docs.ts:2680 - "name": "LONG_TERM_MEMORY",
packages\typescript\src\generated\action-docs.ts:2810 - "name": "LONG_TERM_MEMORY",
packages\typescript\src\generated\action-docs.ts:2869 - "outcome": "<response>\n  <thought>I'm engaging appropriately with a new community member, maintaining a welcoming and professional tone. My questions are helping to learn more about John and make him feel welcome.</thought>\n  <facts>\n    <fact>\n      <claim>John is new to the community</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n    <fact>\n      <claim>John found the community through a friend interested in AI</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n  </facts>\n  <relationships>\n    <relationship>\n      <sourceEntityId>sarah-agent</sourceEntityId>\n      <targetEntityId>user-123</targetEntityId>\n      <tags>group_interaction</tags>\n    </relationship>\n  </relationships>\n</response>"
packages\typescript\src\generated\action-docs.ts:2935 - "outcome": "<response>\n  <thought>I'm dominating the conversation and not giving others a chance to share their perspectives. I've sent multiple messages in a row without waiting for responses. I need to step back and create space for other members to participate.</thought>\n  <facts>\n    <fact>\n      <claim>The discussion is about chapter 5 of a book</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n    <fact>\n      <claim>Max has sent 4 consecutive messages without user responses</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n  </facts>\n  <relationships>\n    <relationship>\n      <sourceEntityId>max-agent</sourceEntityId>\n      <targetEntityId>user-789</targetEntityId>\n      <tags>group_interaction,excessive_interaction</tags>\n    </relationship>\n  </relationships>\n</response>"
packages\typescript\src\generated\action-docs.ts:2965 - "name": "MEMORY_SUMMARIZATION",
packages\typescript\src\generated\action-docs.ts:2976 - "name": "LONG_TERM_MEMORY_EXTRACTION",
packages\typescript\src\generated\action-docs.ts:3027 - "outcome": "<response>\n  <thought>I'm engaging appropriately with a new community member, maintaining a welcoming and professional tone. My questions are helping to learn more about John and make him feel welcome.</thought>\n  <facts>\n    <fact>\n      <claim>John is new to the community</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n    <fact>\n      <claim>John found the community through a friend interested in AI</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n  </facts>\n  <relationships>\n    <relationship>\n      <sourceEntityId>sarah-agent</sourceEntityId>\n      <targetEntityId>user-123</targetEntityId>\n      <tags>group_interaction</tags>\n    </relationship>\n  </relationships>\n</response>"
packages\typescript\src\generated\action-docs.ts:3093 - "outcome": "<response>\n  <thought>I'm dominating the conversation and not giving others a chance to share their perspectives. I've sent multiple messages in a row without waiting for responses. I need to step back and create space for other members to participate.</thought>\n  <facts>\n    <fact>\n      <claim>The discussion is about chapter 5 of a book</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n    <fact>\n      <claim>Max has sent 4 consecutive messages without user responses</claim>\n      <type>fact</type>\n      <in_bio>false</in_bio>\n      <already_known>false</already_known>\n    </fact>\n  </facts>\n  <relationships>\n    <relationship>\n      <sourceEntityId>max-agent</sourceEntityId>\n      <targetEntityId>user-789</targetEntityId>\n      <tags>group_interaction,excessive_interaction</tags>\n    </relationship>\n  </relationships>\n</response>"
packages\typescript\src\generated\action-docs.ts:3123 - "name": "MEMORY_SUMMARIZATION",
packages\typescript\src\generated\action-docs.ts:3134 - "name": "LONG_TERM_MEMORY_EXTRACTION",

## packages\typescript\src\providers\onboarding-progress.ts
packages\typescript\src\providers\onboarding-progress.ts:186 - message: Memory,
packages\typescript\src\providers\onboarding-progress.ts:274 - message: Memory,

## packages\typescript\src\providers\sessionKeys.ts
packages\typescript\src\providers\sessionKeys.ts:11 - type Memory,
packages\typescript\src\providers\sessionKeys.ts:85 - message: Memory,

## packages\typescript\src\providers\skill-eligibility.ts
packages\typescript\src\providers\skill-eligibility.ts:87 - _message: Memory,
packages\typescript\src\providers\skill-eligibility.ts:242 - _message: Memory,

## packages\typescript\src\schemas\character.ts
packages\typescript\src\schemas\character.ts:189 - maxWorkingMemoryEntries: z.number().int().optional(),
packages\typescript\src\schemas\character.ts:314 - advancedMemory: z

## packages\typescript\src\schemas\embedding.ts
packages\typescript\src\schemas\embedding.ts:18 - memory_id: {
packages\typescript\src\schemas\embedding.ts:19 - name: "memory_id",
packages\typescript\src\schemas\embedding.ts:54 - idx_embedding_memory: {
packages\typescript\src\schemas\embedding.ts:55 - name: "idx_embedding_memory",
packages\typescript\src\schemas\embedding.ts:56 - columns: [{ expression: "memory_id", isExpression: false }],
packages\typescript\src\schemas\embedding.ts:57 - // WHY: Unique constraint (unique_embedding_memory) guarantees 1:1 memory→embedding.
packages\typescript\src\schemas\embedding.ts:64 - fk_embedding_memory: {
packages\typescript\src\schemas\embedding.ts:65 - name: "fk_embedding_memory",
packages\typescript\src\schemas\embedding.ts:68 - columnsFrom: ["memory_id"],
packages\typescript\src\schemas\embedding.ts:76 - // WHY: upsertMemories uses ON CONFLICT (memory_id) to update the embedding
packages\typescript\src\schemas\embedding.ts:80 - unique_embedding_memory: {
packages\typescript\src\schemas\embedding.ts:81 - name: "unique_embedding_memory",
packages\typescript\src\schemas\embedding.ts:82 - columns: ["memory_id"],
packages\typescript\src\schemas\embedding.ts:88 - value: '"memory_id" IS NOT NULL',

## packages\typescript\src\schemas\index.ts
packages\typescript\src\schemas\index.ts:13 - // Import advanced memory schemas
packages\typescript\src\schemas\index.ts:18 - } from "../advanced-memory/schemas/index.ts";
packages\typescript\src\schemas\index.ts:28 - import { memorySchema } from "./memory.ts";
packages\typescript\src\schemas\index.ts:82 - memory: unknown;
packages\typescript\src\schemas\index.ts:122 - memory: buildTable(memorySchema, adapter),

## packages\typescript\src\schemas\memory.ts
packages\typescript\src\schemas\memory.ts:7 - export const memorySchema: SchemaTable = {
packages\typescript\src\schemas\memory.ts:64 - // WHY: Nearly every memory query filters on agent_id + type. This is the

## packages\typescript\src\schemas\__tests__\schema-comparison.test.ts
packages\typescript\src\schemas\__tests__\schema-comparison.test.ts:133 - it("memory table structure matches expected schema", () => {
packages\typescript\src\schemas\__tests__\schema-comparison.test.ts:135 - const memoryTable = tables.memory;
packages\typescript\src\schemas\__tests__\schema-comparison.test.ts:141 - expect(memoryTable).toHaveProperty("type");

## packages\typescript\src\security\redact.ts
packages\typescript\src\security\redact.ts:8 - * from appearing in agent outputs or memories.

## packages\typescript\src\services\action-filter.ts
packages\typescript\src\services\action-filter.ts:165 - export function buildQueryText(message: Memory, state: State): string {
packages\typescript\src\services\action-filter.ts:457 - message: Memory,
packages\typescript\src\services\action-filter.ts:567 - message: Memory,
packages\typescript\src\services\action-filter.ts:682 - message: Memory,
packages\typescript\src\services\action-filter.ts:820 - private computeMomentumBoosts(message: Memory): Map<string, number> {

## packages\typescript\src\services\agentEvent.ts
packages\typescript\src\services\agentEvent.ts:488 - memoryId?: UUID;
packages\typescript\src\services\agentEvent.ts:506 - memoryId?: UUID;
packages\typescript\src\services\agentEvent.ts:523 - memoryId?: UUID;
packages\typescript\src\services\agentEvent.ts:628 - * Helper: Emit a memory event (create, update, delete, search, retrieved)
packages\typescript\src\services\agentEvent.ts:630 - emitMemory(runId: string, data: MemoryEventData, sessionKey?: string): void {
packages\typescript\src\services\agentEvent.ts:633 - stream: "memory",
packages\typescript\src\services\agentEvent.ts:640 - * Convenience: Emit memory create event
packages\typescript\src\services\agentEvent.ts:645 - memoryId: UUID;
packages\typescript\src\services\agentEvent.ts:660 - * Convenience: Emit memory search event
packages\typescript\src\services\agentEvent.ts:680 - * Convenience: Emit memory retrieved event
packages\typescript\src\services\agentEvent.ts:685 - memoryId?: UUID;

## packages\typescript\src\services\approval.ts
packages\typescript\src\services\approval.ts:501 - message: Memory,

## packages\typescript\src\services\embedding.ts
packages\typescript\src\services\embedding.ts:3 - import type { Memory } from "../types/memory";
packages\typescript\src\services\embedding.ts:10 - memory: Memory;
packages\typescript\src\services\embedding.ts:177 - memoryId: memory.id,
packages\typescript\src\services\embedding.ts:339 - memoryId: item.memory.id,
packages\typescript\src\services\embedding.ts:363 - roomId: item.memory.roomId || this.runtime.agentId,
packages\typescript\src\services\embedding.ts:367 - memoryId: item.memory.id,
packages\typescript\src\services\embedding.ts:379 - memory: item.memory,
packages\typescript\src\services\embedding.ts:395 - const { memory } = item;
packages\typescript\src\services\embedding.ts:397 - const memoryContent = memory.content;
packages\typescript\src\services\embedding.ts:403 - memoryId: memory.id,
packages\typescript\src\services\embedding.ts:415 - text: memory.content.text ?? "",
packages\typescript\src\services\embedding.ts:423 - memoryId: memory.id,
packages\typescript\src\services\embedding.ts:432 - id: memory.id,
packages\typescript\src\services\embedding.ts:439 - roomId: memory.roomId || this.runtime.agentId,
packages\typescript\src\services\embedding.ts:443 - memoryId: memory.id,
packages\typescript\src\services\embedding.ts:453 - memory: { ...memory, embedding },
packages\typescript\src\services\embedding.ts:462 - memoryId: memory.id,

## packages\typescript\src\services\followUp.ts
packages\typescript\src\services\followUp.ts:3 - import type { Memory } from "../types/memory";
packages\typescript\src\services\followUp.ts:4 - import { MemoryType } from "../types/memory";
packages\typescript\src\services\followUp.ts:389 - const memory: Memory = {
packages\typescript\src\services\followUp.ts:390 - id: createUniqueUuid(runtime, `followup-memory-${Date.now()}`),
packages\typescript\src\services\followUp.ts:399 - type: MemoryType.CUSTOM,

## packages\typescript\src\services\message.test.ts
packages\typescript\src\services\message.test.ts:4 - describe("MessageService memory persistence logic", () => {
packages\typescript\src\services\message.test.ts:5 - describe("canPersistMemory calculation", () => {
packages\typescript\src\services\message.test.ts:6 - // The correct logic: ALLOW_MEMORY_SOURCE_IDS should override DISABLE_MEMORY_CREATION
packages\typescript\src\services\message.test.ts:7 - // Formula MUST be: canPersistMemory = !disableMemoryCreation || memorySourceAllowed
packages\typescript\src\services\message.test.ts:11 - it("should allow memory when DISABLE_MEMORY_CREATION is false", () => {
packages\typescript\src\services\message.test.ts:12 - const disableMemoryCreation = false;
packages\typescript\src\services\message.test.ts:13 - const memorySourceAllowed = false;
packages\typescript\src\services\message.test.ts:16 - const canPersistMemory = !disableMemoryCreation || memorySourceAllowed;
packages\typescript\src\services\message.test.ts:21 - it("should allow memory for whitelisted source when DISABLE_MEMORY_CREATION is true", () => {
packages\typescript\src\services\message.test.ts:22 - const disableMemoryCreation = true;
packages\typescript\src\services\message.test.ts:23 - const memorySourceAllowed = true; // Source is in ALLOW_MEMORY_SOURCE_IDS
packages\typescript\src\services\message.test.ts:27 - const canPersistMemory = !disableMemoryCreation || memorySourceAllowed;
packages\typescript\src\services\message.test.ts:32 - it("should block memory for non-whitelisted source when DISABLE_MEMORY_CREATION is true", () => {
packages\typescript\src\services\message.test.ts:33 - const disableMemoryCreation = true;
packages\typescript\src\services\message.test.ts:34 - const memorySourceAllowed = false;
packages\typescript\src\services\message.test.ts:36 - const canPersistMemory = !disableMemoryCreation || memorySourceAllowed;
packages\typescript\src\services\message.test.ts:61 - const disableMemoryCreation = true;
packages\typescript\src\services\message.test.ts:62 - const memorySourceAllowed = true;
packages\typescript\src\services\message.test.ts:65 - const wrongResult = !disableMemoryCreation && memorySourceAllowed;
packages\typescript\src\services\message.test.ts:69 - const correctResult = !disableMemoryCreation || memorySourceAllowed;

## packages\typescript\src\services\message.ts
packages\typescript\src\services\message.ts:22 - import type { Memory } from "../types/memory";
packages\typescript\src\services\message.ts:160 - responseMessages: Memory[];
packages\typescript\src\services\message.ts:200 - message: Memory,
packages\typescript\src\services\message.ts:560 - message: Memory,
packages\typescript\src\services\message.ts:608 - let memoryToQueue: Memory;
packages\typescript\src\services\message.ts:611 - const existingMemory = await runtime.getMemoryById(message.id);
packages\typescript\src\services\message.ts:617 - memoryToQueue = existingMemory;
packages\typescript\src\services\message.ts:619 - const createdMemoryId = await runtime.createMemory(message, "messages");
packages\typescript\src\services\message.ts:620 - memoryToQueue = { ...message, id: createdMemoryId };
packages\typescript\src\services\message.ts:624 - const memoryId = await runtime.createMemory(message, "messages");
packages\typescript\src\services\message.ts:625 - message.id = memoryId;
packages\typescript\src\services\message.ts:626 - memoryToQueue = { ...message, id: memoryId };
packages\typescript\src\services\message.ts:826 - let responseMessages: Memory[] = [];
packages\typescript\src\services\message.ts:890 - responseMemory.content = responseContent;
packages\typescript\src\services\message.ts:893 - { src: "service:message", memoryId: responseMemory.id },
packages\typescript\src\services\message.ts:901 - message: responseMemory,
packages\typescript\src\services\message.ts:1021 - const ignoreMemory: Memory = {
packages\typescript\src\services\message.ts:1031 - { src: "service:message", memoryId: ignoreMemory.id },
packages\typescript\src\services\message.ts:1170 - message: Memory,
packages\typescript\src\services\message.ts:1562 - message: Memory,
... and 10 more

## packages\typescript\src\services\task.ts
packages\typescript\src\services\task.ts:4 - import type { Memory } from "../types/memory";

## packages\typescript\src\services\trajectoryLogger.ts
packages\typescript\src\services\trajectoryLogger.ts:37 - * This is intentionally lightweight: it stores logs in memory and exposes them

## packages\typescript\src\services\triggerWorker.ts
packages\typescript\src\services\triggerWorker.ts:80 - const memory: Memory = {

## packages\typescript\src\sessions\provider.ts
packages\typescript\src\sessions\provider.ts:10 - import type { Memory, MemoryMetadata } from "../types/memory.js";
packages\typescript\src\sessions\provider.ts:20 - * Extract session context from a memory object.
packages\typescript\src\sessions\provider.ts:27 - * @param memory - Memory to extract session from
packages\typescript\src\sessions\provider.ts:30 - export function extractSessionContext(memory: Memory): {
packages\typescript\src\sessions\provider.ts:36 - const memoryRecord = memory as Memory & Record<string, unknown>;
packages\typescript\src\sessions\provider.ts:37 - const directSessionId = memoryRecord.sessionId as string | undefined;
packages\typescript\src\sessions\provider.ts:38 - const directSessionKey = memoryRecord.sessionKey as string | undefined;
packages\typescript\src\sessions\provider.ts:41 - const metadata = memory.metadata as
packages\typescript\src\sessions\provider.ts:85 - message: Memory,
packages\typescript\src\sessions\provider.ts:171 - message: Memory,
packages\typescript\src\sessions\provider.ts:241 - message: Memory,

## packages\typescript\src\sessions\types.ts
packages\typescript\src\sessions\types.ts:15 - import type { SessionOrigin, SessionSkillsSnapshot } from "../types/memory.js";
packages\typescript\src\sessions\types.ts:212 - memoryFlushAt?: number;
packages\typescript\src\sessions\types.ts:215 - memoryFlushCompactionCount?: number;

## packages\typescript\src\testing\index.ts
packages\typescript\src\testing\index.ts:27 - *       const memory = await runtime.createMemory({

## packages\typescript\src\testing\test-helpers.ts
packages\typescript\src\testing\test-helpers.ts:9 - import type { Character, Content, Memory, UUID } from "../types";
packages\typescript\src\testing\test-helpers.ts:21 - interface CreateTestMemoryParams {
packages\typescript\src\testing\test-helpers.ts:31 - export function createTestMemory(params: CreateTestMemoryParams): Memory {

## packages\typescript\src\testing\test-utils.ts
packages\typescript\src\testing\test-utils.ts:5 - import type { Character, Content, Memory, UUID } from "../types";
packages\typescript\src\testing\test-utils.ts:12 - overrides: Partial<Omit<Memory, "content">> & {
packages\typescript\src\testing\test-utils.ts:15 - ): Memory {
packages\typescript\src\testing\test-utils.ts:20 - : (content ?? { text: "test memory" });

## packages\typescript\src\types\agent.ts
packages\typescript\src\types\agent.ts:69 - advancedMemory?: boolean;

## packages\typescript\src\types\agentEvent.ts
packages\typescript\src\types\agentEvent.ts:231 - memoryId?: UUID;
packages\typescript\src\types\agentEvent.ts:281 - export interface MemoryEventData {
packages\typescript\src\types\agentEvent.ts:284 - memoryId?: UUID;

## packages\typescript\src\types\components.ts
packages\typescript\src\types\components.ts:1 - import type { Memory } from "./memory";
packages\typescript\src\types\components.ts:112 - ) => Promise<Memory[]>;
packages\typescript\src\types\components.ts:119 - message: Memory,
packages\typescript\src\types\components.ts:123 - responses?: Memory[],
packages\typescript\src\types\components.ts:131 - message: Memory,
packages\typescript\src\types\components.ts:303 - message: Memory,

## packages\typescript\src\types\database.ts
packages\typescript\src\types\database.ts:10 - import type { Memory, MemoryMetadata } from "./memory";
packages\typescript\src\types\database.ts:430 - * - InMemory: map.has(id) ? map.set(id, merged) : map.set(id, agent)
packages\typescript\src\types\database.ts:477 - * - InMemory: Executes callback directly (NOT atomic - see warning below)
packages\typescript\src\types\database.ts:479 - * TRAP - InMemory non-atomicity: The InMemory adapter does NOT provide true
packages\typescript\src\types\database.ts:487 - * @throws Error if any operation in the callback fails (SQL: rolls back, InMemory: does NOT)
packages\typescript\src\types\database.ts:519 - * - InMemory: entities.set(id, merged)
packages\typescript\src\types\database.ts:540 - * - InMemory: O(N) scan with substring match
packages\typescript\src\types\database.ts:686 - * - InMemory: Find by natural key, update if found, insert if not
packages\typescript\src\types\database.ts:716 - * - InMemory: Deep equality check (less efficient but correct)
packages\typescript\src\types\database.ts:724 - * @param params.tableName Memory type/table (required)
packages\typescript\src\types\database.ts:749 - }): Promise<Memory[]>;
packages\typescript\src\types\database.ts:751 - getMemoriesByIds(ids: UUID[], tableName?: string): Promise<Memory[]>;
packages\typescript\src\types\database.ts:757 - }): Promise<Memory[]>;
packages\typescript\src\types\database.ts:841 - }): Promise<Memory[]>;
packages\typescript\src\types\database.ts:844 - // WHY batch-only: memory ingestion (e.g. bulk import of conversation
packages\typescript\src\types\database.ts:846 - // Even single-message flows benefit: the runtime's createMemory()
packages\typescript\src\types\database.ts:858 - memories: Array<{ memory: Memory; tableName: string; unique?: boolean }>,
packages\typescript\src\types\database.ts:877 - memories: Array<Partial<Memory> & { id: UUID; metadata?: MemoryMetadata }>,
packages\typescript\src\types\database.ts:879 - deleteMemories(memoryIds: UUID[]): Promise<void>;
packages\typescript\src\types\database.ts:886 - * overwrite existing memories. Used for bulk data refresh or re-import scenarios.
... and 14 more

## packages\typescript\src\types\events.ts
packages\typescript\src\types\events.ts:3 - import type { Memory } from "./memory";
packages\typescript\src\types\events.ts:149 - message: Memory;
packages\typescript\src\types\events.ts:223 - memory: Memory;

## packages\typescript\src\types\index.ts
packages\typescript\src\types\index.ts:15 - export * from "./memory";
packages\typescript\src\types\index.ts:16 - export * from "./memory-storage";

## packages\typescript\src\types\knowledge.ts
packages\typescript\src\types\knowledge.ts:43 - metadata?: MemoryMetadata;

## packages\typescript\src\types\memory-storage.ts
packages\typescript\src\types\memory-storage.ts:2 - * Memory Storage Provider interface.
packages\typescript\src\types\memory-storage.ts:6 - * register a service that implements this interface. MemoryService
packages\typescript\src\types\memory-storage.ts:18 - } from "../advanced-memory/types.ts";
packages\typescript\src\types\memory-storage.ts:21 - export interface MemoryStorageProvider {
packages\typescript\src\types\memory-storage.ts:25 - memory: Omit<
packages\typescript\src\types\memory-storage.ts:29 - ): Promise<LongTermMemory>;
packages\typescript\src\types\memory-storage.ts:34 - opts?: { category?: LongTermMemoryCategory; limit?: number },
packages\typescript\src\types\memory-storage.ts:35 - ): Promise<LongTermMemory[]>;
packages\typescript\src\types\memory-storage.ts:46 - deleteLongTermMemory(id: UUID, agentId: UUID, entityId: UUID): Promise<void>;

## packages\typescript\src\types\memory.ts
packages\typescript\src\types\memory.ts:14 - * Memory type enumeration for built-in memory types
packages\typescript\src\types\memory.ts:16 - export type MemoryTypeAlias = string;
packages\typescript\src\types\memory.ts:24 - * - `CUSTOM`: For any other type of memory not covered by the built-in types.
packages\typescript\src\types\memory.ts:27 - export const MemoryType = {
packages\typescript\src\types\memory.ts:35 - export type MemoryType = (typeof MemoryType)[keyof typeof MemoryType];
packages\typescript\src\types\memory.ts:38 - * - `shared`: The memory is accessible to multiple entities or across different contexts (e.g., a public fact).
packages\typescript\src\types\memory.ts:39 - * - `private`: The memory is specific to a single entity or a private context (e.g., a user's personal preference).
packages\typescript\src\types\memory.ts:40 - * - `room`: The memory is scoped to a specific room or channel.
packages\typescript\src\types\memory.ts:43 - export type MemoryScope = "shared" | "private" | "room";
packages\typescript\src\types\memory.ts:46 - * Base interface for all memory metadata types.
packages\typescript\src\types\memory.ts:48 - * - `type`: The kind of memory (e.g., `MemoryType.MESSAGE`, `MemoryType.DOCUMENT`).
packages\typescript\src\types\memory.ts:49 - * - `source`: An optional string indicating the origin of the memory (e.g., 'discord', 'user_input').
packages\typescript\src\types\memory.ts:51 - * - `scope`: The visibility scope of the memory (`shared`, `private`, or `room`).
packages\typescript\src\types\memory.ts:52 - * - `timestamp`: An optional numerical timestamp (e.g., milliseconds since epoch) of when the memory was created or relevant.
packages\typescript\src\types\memory.ts:61 - type: MemoryTypeAlias;
packages\typescript\src\types\memory.ts:62 - scope?: MemoryScope;
packages\typescript\src\types\memory.ts:515 - [key: string]: MetadataValue | MemoryTypeAlias | BaseMetadata | undefined;
packages\typescript\src\types\memory.ts:518 - interface MemoryMetadataBase {
packages\typescript\src\types\memory.ts:519 - type?: MemoryTypeAlias;
packages\typescript\src\types\memory.ts:521 - scope?: MemoryScope;
... and 6 more

## packages\typescript\src\types\message-service.ts
packages\typescript\src\types\message-service.ts:3 - import type { Memory } from "./memory";
packages\typescript\src\types\message-service.ts:48 - responseMessages: Memory[];
packages\typescript\src\types\message-service.ts:124 - message: Memory,
packages\typescript\src\types\message-service.ts:141 - message: Memory,
packages\typescript\src\types\message-service.ts:160 - * Deletes a message from the agent's memory.
packages\typescript\src\types\message-service.ts:167 - deleteMessage(runtime: IAgentRuntime, message: Memory): Promise<void>;

## packages\typescript\src\types\messaging.ts
packages\typescript\src\types\messaging.ts:1 - import type { Memory } from "./memory";
packages\typescript\src\types\messaging.ts:144 - userMessage?: Memory;

## packages\typescript\src\types\plugin-store.ts
packages\typescript\src\types\plugin-store.ts:8 - * and prevents plugins from working with in-memory adapters.
packages\typescript\src\types\plugin-store.ts:24 - * WHY limited set: These map cleanly to PostgreSQL, MySQL, and in-memory storage.

## packages\typescript\src\types\prompt-batcher.ts
packages\typescript\src\types\prompt-batcher.ts:1 - import type { Memory } from "./memory";
packages\typescript\src\types\prompt-batcher.ts:12 - messages: Memory[];
packages\typescript\src\types\prompt-batcher.ts:66 - messages: Memory[],
packages\typescript\src\types\prompt-batcher.ts:75 - messages: Memory[],

## packages\typescript\src\types\proto.ts
packages\typescript\src\types\proto.ts:10 - *    - Example: `MEMORY_TYPE_MESSAGE`
packages\typescript\src\types\proto.ts:32 - export * from "./generated/eliza/v1/memory_pb.js";

## packages\typescript\src\types\runtime.ts
packages\typescript\src\types\runtime.ts:21 - import type { Memory, MemoryMetadata } from "./memory";
packages\typescript\src\types\runtime.ts:160 - message: Memory,
packages\typescript\src\types\runtime.ts:161 - responses: Memory[],
packages\typescript\src\types\runtime.ts:172 - message: Memory,
packages\typescript\src\types\runtime.ts:176 - responses?: Memory[],
packages\typescript\src\types\runtime.ts:267 - message: Memory,
packages\typescript\src\types\runtime.ts:423 - addEmbeddingToMemory(memory: Memory): Promise<Memory>;
packages\typescript\src\types\runtime.ts:433 - memory: Memory,
packages\typescript\src\types\runtime.ts:437 - getAllMemories(): Promise<Memory[]>;
packages\typescript\src\types\runtime.ts:476 - // The createMemory() wrapper is special: it also performs secret
packages\typescript\src\types\runtime.ts:585 - * WHY: Completes the singular convenience pattern for memory operations.
packages\typescript\src\types\runtime.ts:587 - upsertMemory(memory: Memory, tableName: string): Promise<void>;
packages\typescript\src\types\runtime.ts:597 - getMemoryById(id: UUID): Promise<Memory | null>;
packages\typescript\src\types\runtime.ts:599 - memory: Memory,
packages\typescript\src\types\runtime.ts:604 - memory: Partial<Memory> & { id: UUID; metadata?: MemoryMetadata },
packages\typescript\src\types\runtime.ts:606 - deleteMemory(memoryId: UUID): Promise<void>;

## packages\typescript\src\types\state.ts
packages\typescript\src\types\state.ts:58 - export interface WorkingMemoryEntry
packages\typescript\src\types\state.ts:70 - export type WorkingMemory = Record<string, WorkingMemoryEntry>;
packages\typescript\src\types\state.ts:102 - workingMemory?: WorkingMemory;

## packages\typescript\src\types\task.ts
packages\typescript\src\types\task.ts:1 - import type { Memory } from "./memory";
packages\typescript\src\types\task.ts:45 - message: Memory,
packages\typescript\src\types\task.ts:54 - message: Memory,

## packages\typescript\src\types\tools.ts
packages\typescript\src\types\tools.ts:29 - "group:memory": ["scratchpad_search", "scratchpad_read"],
packages\typescript\src\types\tools.ts:92 - "group:memory",

## packages\typescript\src\utils\prompt-batcher\batcher.ts
packages\typescript\src\utils\prompt-batcher\batcher.ts:1 - import type { Memory } from "../../types/memory";
packages\typescript\src\utils\prompt-batcher\batcher.ts:39 - private readonly messageBuffers = new Map<string, Memory[]>();
packages\typescript\src\utils\prompt-batcher\batcher.ts:44 - private readonly inMemoryCache = new Map<string, CacheEntry>();
packages\typescript\src\utils\prompt-batcher\batcher.ts:187 - tick(message?: Memory): void {
packages\typescript\src\utils\prompt-batcher\batcher.ts:378 - messages: Memory[],
packages\typescript\src\utils\prompt-batcher\batcher.ts:456 - private _pushMessage(key: string, message: Memory): void {
packages\typescript\src\utils\prompt-batcher\batcher.ts:687 - messages: Memory[];
packages\typescript\src\utils\prompt-batcher\batcher.ts:866 - messages: Memory[],
packages\typescript\src\utils\prompt-batcher\batcher.ts:891 - messages: Memory[],
packages\typescript\src\utils\prompt-batcher\batcher.ts:1036 - private _getMessagesForAffinity(affinityKey: string): Memory[] {
packages\typescript\src\utils\prompt-batcher\batcher.ts:1118 - let entry = this.inMemoryCache.get(key);
packages\typescript\src\utils\prompt-batcher\batcher.ts:1185 - messages: Memory[],

## packages\typescript\src\utils\prompt-batcher\shared.ts
packages\typescript\src\utils\prompt-batcher\shared.ts:1 - import type { Memory } from "../../types/memory";
packages\typescript\src\utils\prompt-batcher\shared.ts:138 - export function getSourceMessageId(message: Memory): string {

## packages\typescript\src\validation\keywords.ts
packages\typescript\src\validation\keywords.ts:1 - import type { Memory } from "../types";
packages\typescript\src\validation\keywords.ts:15 - message: Memory,
packages\typescript\src\validation\keywords.ts:16 - recentMessages: Memory[],
packages\typescript\src\validation\keywords.ts:70 - message: Memory,
packages\typescript\src\validation\keywords.ts:71 - recentMessages: Memory[],

## packages\typescript\src\validation\__tests__\keywords.test.ts
packages\typescript\src\validation\__tests__\keywords.test.ts:2 - import type { Memory, UUID } from "../../types";
packages\typescript\src\validation\__tests__\keywords.test.ts:6 - const createMockMemory = (text: string, id: string = "1"): Memory => ({
packages\typescript\src\validation\__tests__\keywords.test.ts:17 - const mockMessage = createMockMemory("Hello world", "123");
packages\typescript\src\validation\__tests__\keywords.test.ts:18 - const mockRecentMessages: Memory[] = [
packages\typescript\src\validation\__tests__\keywords.test.ts:27 - const msg = createMockMemory("I want to transfer sol");
packages\typescript\src\validation\__tests__\keywords.test.ts:44 - const msg = createMockMemory("I want to TRANSFER sol");
packages\typescript\src\validation\__tests__\keywords.test.ts:55 - const msg = createMockMemory("cryptography");
packages\typescript\src\validation\__tests__\keywords.test.ts:60 - const msg = createMockMemory("transfer");
packages\typescript\src\validation\__tests__\keywords.test.ts:68 - const createMockMemory = (text: string, id: string = "1"): Memory => ({
packages\typescript\src\validation\__tests__\keywords.test.ts:79 - const mockMessage = createMockMemory("Hello world", "123");
packages\typescript\src\validation\__tests__\keywords.test.ts:80 - const mockRecentMessages: Memory[] = [
packages\typescript\src\validation\__tests__\keywords.test.ts:89 - const msg = createMockMemory("Transfer 100 SOL");
packages\typescript\src\validation\__tests__\keywords.test.ts:109 - const msg = createMockMemory("user@example.com");

## packages\typescript\src\__tests__\action-chaining-simple.test.ts
packages\typescript\src\__tests__\action-chaining-simple.test.ts:111 - describe("Working Memory Cleanup", () => {
packages\typescript\src\__tests__\action-chaining-simple.test.ts:112 - it("should enforce MAX_WORKING_MEMORY_ENTRIES limit", () => {
packages\typescript\src\__tests__\action-chaining-simple.test.ts:114 - const MAX_WORKING_MEMORY_ENTRIES = 50;
packages\typescript\src\__tests__\action-chaining-simple.test.ts:116 - interface WorkingMemoryEntry {
packages\typescript\src\__tests__\action-chaining-simple.test.ts:122 - const workingMemory: Record<string, WorkingMemoryEntry> = {};
packages\typescript\src\__tests__\action-chaining-simple.test.ts:126 - workingMemory[`action_${i}`] = {
packages\typescript\src\__tests__\action-chaining-simple.test.ts:134 - const entries = Object.entries(workingMemory);

## packages\typescript\src\__tests__\action-filter.test.ts
packages\typescript\src\__tests__\action-filter.test.ts:14 - import type { Action, IAgentRuntime, Memory, State } from "../types";
packages\typescript\src\__tests__\action-filter.test.ts:154 - tags: ["knowledge", "memory"],
packages\typescript\src\__tests__\action-filter.test.ts:291 - function createMockMemory(text: string, roomId?: string): Memory {
packages\typescript\src\__tests__\action-filter.test.ts:925 - const message = createMockMemory("swap my ETH for USDC");
packages\typescript\src\__tests__\action-filter.test.ts:931 - const message = createMockMemory("");
packages\typescript\src\__tests__\action-filter.test.ts:937 - const message = { ...createMockMemory(""), content: {} } as Memory;
packages\typescript\src\__tests__\action-filter.test.ts:943 - const message = createMockMemory("hello");
packages\typescript\src\__tests__\action-filter.test.ts:955 - const message = createMockMemory("continue");
packages\typescript\src\__tests__\action-filter.test.ts:1039 - const message = createMockMemory("swap tokens");
packages\typescript\src\__tests__\action-filter.test.ts:1051 - const message = createMockMemory("swap tokens");
packages\typescript\src\__tests__\action-filter.test.ts:1061 - const message = createMockMemory("I want to trade my ETH for USDC");
packages\typescript\src\__tests__\action-filter.test.ts:1070 - const message = createMockMemory("message Alice on telegram");
packages\typescript\src\__tests__\action-filter.test.ts:1079 - const message = createMockMemory("tweet about the latest news");
packages\typescript\src\__tests__\action-filter.test.ts:1088 - const message = createMockMemory("run this python script");
packages\typescript\src\__tests__\action-filter.test.ts:1097 - const message = createMockMemory("draw me a picture of a sunset");
packages\typescript\src\__tests__\action-filter.test.ts:1108 - const message = createMockMemory(
packages\typescript\src\__tests__\action-filter.test.ts:1136 - const message = createMockMemory("totally unrelated query");
packages\typescript\src\__tests__\action-filter.test.ts:1149 - const message = createMockMemory(
packages\typescript\src\__tests__\action-filter.test.ts:1172 - const message = createMockMemory("swap tokens");
packages\typescript\src\__tests__\action-filter.test.ts:1204 - const message = createMockMemory("swap tokens cryptocurrency exchange");
... and 19 more

## packages\typescript\src\__tests__\action-parameters.test.ts
packages\typescript\src\__tests__\action-parameters.test.ts:140 - /** Build a minimal Memory without the deprecated `type` field. */
packages\typescript\src\__tests__\action-parameters.test.ts:141 - function makeMemory(overrides: Partial<Memory> = {}): Memory {
packages\typescript\src\__tests__\action-parameters.test.ts:204 - const message = makeMemory({ content: { text: "tick" } });
packages\typescript\src\__tests__\action-parameters.test.ts:206 - const responses: Memory[] = [
packages\typescript\src\__tests__\action-parameters.test.ts:269 - const message = makeMemory({ content: { text: "tick" } });
packages\typescript\src\__tests__\action-parameters.test.ts:271 - const responses: Memory[] = [
packages\typescript\src\__tests__\action-parameters.test.ts:322 - const message = makeMemory({ content: { text: "tick" } });
packages\typescript\src\__tests__\action-parameters.test.ts:324 - const responses: Memory[] = [

## packages\typescript\src\__tests__\action-planning.test.ts
packages\typescript\src\__tests__\action-planning.test.ts:4 - import type { Character, IDatabaseAdapter, Memory, UUID } from "../types";
packages\typescript\src\__tests__\action-planning.test.ts:5 - import { MemoryType } from "../types";
packages\typescript\src\__tests__\action-planning.test.ts:261 - const message: Memory = {
packages\typescript\src\__tests__\action-planning.test.ts:269 - type: MemoryType.MESSAGE,
packages\typescript\src\__tests__\action-planning.test.ts:274 - const responses: Memory[] = [
packages\typescript\src\__tests__\action-planning.test.ts:283 - type: MemoryType.MESSAGE,
packages\typescript\src\__tests__\action-planning.test.ts:328 - const message: Memory = {
packages\typescript\src\__tests__\action-planning.test.ts:336 - type: MemoryType.MESSAGE,
packages\typescript\src\__tests__\action-planning.test.ts:341 - const responses: Memory[] = [
packages\typescript\src\__tests__\action-planning.test.ts:350 - type: MemoryType.MESSAGE,
packages\typescript\src\__tests__\action-planning.test.ts:383 - const message: Memory = {
packages\typescript\src\__tests__\action-planning.test.ts:391 - type: MemoryType.MESSAGE,
packages\typescript\src\__tests__\action-planning.test.ts:395 - const responses: Memory[] = [
packages\typescript\src\__tests__\action-planning.test.ts:404 - type: MemoryType.MESSAGE,
packages\typescript\src\__tests__\action-planning.test.ts:464 - const message: Memory = {
packages\typescript\src\__tests__\action-planning.test.ts:472 - type: MemoryType.MESSAGE,
packages\typescript\src\__tests__\action-planning.test.ts:476 - const responses: Memory[] = [
packages\typescript\src\__tests__\action-planning.test.ts:485 - type: MemoryType.MESSAGE,

## packages\typescript\src\__tests__\advanced-memory.test.ts
packages\typescript\src\__tests__\advanced-memory.test.ts:2 - import { MemoryService } from "../advanced-memory";
packages\typescript\src\__tests__\advanced-memory.test.ts:3 - import { LongTermMemoryCategory } from "../advanced-memory/types";
packages\typescript\src\__tests__\advanced-memory.test.ts:7 - describe("advanced memory (built-in)", () => {
packages\typescript\src\__tests__\advanced-memory.test.ts:8 - test("auto-loads providers + evaluators + memory service when enabled", async () => {
packages\typescript\src\__tests__\advanced-memory.test.ts:10 - name: "AdvMemory",
packages\typescript\src\__tests__\advanced-memory.test.ts:18 - advancedMemory: true,
packages\typescript\src\__tests__\advanced-memory.test.ts:29 - expect(runtime.providers.some((p) => p.name === "LONG_TERM_MEMORY")).toBe(
packages\typescript\src\__tests__\advanced-memory.test.ts:36 - runtime.evaluators.some((e) => e.name === "MEMORY_SUMMARIZATION"),
packages\typescript\src\__tests__\advanced-memory.test.ts:39 - runtime.evaluators.some((e) => e.name === "LONG_TERM_MEMORY_EXTRACTION"),
packages\typescript\src\__tests__\advanced-memory.test.ts:65 - name: "AdvMemoryOff",
packages\typescript\src\__tests__\advanced-memory.test.ts:73 - advancedMemory: false,
packages\typescript\src\__tests__\advanced-memory.test.ts:82 - expect(runtime.providers.some((p) => p.name === "LONG_TERM_MEMORY")).toBe(
packages\typescript\src\__tests__\advanced-memory.test.ts:88 - const svc = new MemoryService({} as AgentRuntime);
packages\typescript\src\__tests__\advanced-memory.test.ts:100 - category: LongTermMemoryCategory.SEMANTIC,
packages\typescript\src\__tests__\advanced-memory.test.ts:112 - category: LongTermMemoryCategory.SEMANTIC,
packages\typescript\src\__tests__\advanced-memory.test.ts:124 - category: LongTermMemoryCategory.SEMANTIC,
packages\typescript\src\__tests__\advanced-memory.test.ts:142 - const svc = new MemoryService({} as AgentRuntime);

## packages\typescript\src\__tests__\advanced-planning.test.ts
packages\typescript\src\__tests__\advanced-planning.test.ts:5 - import type { Character, Memory, State, UUID } from "../types";
packages\typescript\src\__tests__\advanced-planning.test.ts:10 - function makeMemory(text: string): Memory {
packages\typescript\src\__tests__\advanced-planning.test.ts:102 - const msg = makeMemory("Please plan a small project");

## packages\typescript\src\__tests__\autonomy-task.test.ts
packages\typescript\src\__tests__\autonomy-task.test.ts:46 - createMemory: async () => undefined,

## packages\typescript\src\__tests__\autonomy.test.ts
packages\typescript\src\__tests__\autonomy.test.ts:4 - import type { IAgentRuntime, Memory, UUID } from "../types";
packages\typescript\src\__tests__\autonomy.test.ts:8 - const makeMemory = (
packages\typescript\src\__tests__\autonomy.test.ts:14 - ): Memory => ({

## packages\typescript\src\__tests__\character-provider.test.ts
packages\typescript\src\__tests__\character-provider.test.ts:52 - function makeMessage(): Memory {
packages\typescript\src\__tests__\character-provider.test.ts:53 - return { roomId: TEST_ROOM_ID } as Memory;

## packages\typescript\src\__tests__\character-validation.test.ts
packages\typescript\src\__tests__\character-validation.test.ts:55 - test("should accept advancedMemory flag", () => {
packages\typescript\src\__tests__\character-validation.test.ts:56 - const characterWithAdvancedMemory: Character = {
packages\typescript\src\__tests__\character-validation.test.ts:58 - advancedMemory: true,
packages\typescript\src\__tests__\character-validation.test.ts:60 - const result = validateCharacter(characterWithAdvancedMemory);

## packages\typescript\src\__tests__\context-management.test.ts
packages\typescript\src\__tests__\context-management.test.ts:33 - ): Memory {

## packages\typescript\src\__tests__\core-features.test.ts
packages\typescript\src\__tests__\core-features.test.ts:4 - import type { Character, IDatabaseAdapter, Memory, UUID } from "../types";
packages\typescript\src\__tests__\core-features.test.ts:5 - import { MemoryType } from "../types";
packages\typescript\src\__tests__\core-features.test.ts:23 - getMemoryById: vi.fn().mockResolvedValue(null),
packages\typescript\src\__tests__\core-features.test.ts:29 - createMemory: vi.fn().mockResolvedValue(stringToUuid(uuidv4())),
packages\typescript\src\__tests__\core-features.test.ts:30 - deleteMemory: vi.fn().mockResolvedValue(undefined),
packages\typescript\src\__tests__\core-features.test.ts:83 - updateMemory: vi.fn().mockResolvedValue(true),
packages\typescript\src\__tests__\core-features.test.ts:119 - it("should be usable as a roomId in Memory", () => {
packages\typescript\src\__tests__\core-features.test.ts:120 - const memory: Memory = {
packages\typescript\src\__tests__\core-features.test.ts:126 - metadata: { type: MemoryType.MESSAGE },
packages\typescript\src\__tests__\core-features.test.ts:131 - it("should be usable as a worldId in Memory", () => {
packages\typescript\src\__tests__\core-features.test.ts:132 - const memory: Memory = {
packages\typescript\src\__tests__\core-features.test.ts:139 - metadata: { type: MemoryType.MESSAGE },
packages\typescript\src\__tests__\core-features.test.ts:208 - it("should allow Memory creation with DEFAULT_UUID as roomId", () => {
packages\typescript\src\__tests__\core-features.test.ts:210 - const memory: Memory = {
packages\typescript\src\__tests__\core-features.test.ts:217 - metadata: { type: MemoryType.MESSAGE },

## packages\typescript\src\__tests__\create-task-action.test.ts
packages\typescript\src\__tests__\create-task-action.test.ts:3 - import type { IAgentRuntime, Memory, UUID } from "../types";
packages\typescript\src\__tests__\create-task-action.test.ts:5 - function makeMessage(text: string): Memory {

## packages\typescript\src\__tests__\deterministic.test.ts
packages\typescript\src\__tests__\deterministic.test.ts:6 - import type { Memory, State, UUID } from "../types";

## packages\typescript\src\__tests__\entities.test.ts
packages\typescript\src\__tests__\entities.test.ts:10 - import type { Entity, Memory, State, UUID } from "../types";
packages\typescript\src\__tests__\entities.test.ts:17 - let mockMemory: Memory;
packages\typescript\src\__tests__\entities.test.ts:53 - mockMemory = {
packages\typescript\src\__tests__\entities.test.ts:54 - id: "memory-123" as UUID,
packages\typescript\src\__tests__\entities.test.ts:123 - const result = await findEntityByName(runtime, mockMemory, mockState);
packages\typescript\src\__tests__\entities.test.ts:134 - const result = await findEntityByName(runtime, mockMemory, mockState);
packages\typescript\src\__tests__\entities.test.ts:236 - const result = await findEntityByName(runtime, mockMemory, mockState);
packages\typescript\src\__tests__\entities.test.ts:329 - const result = await findEntityByName(runtime, mockMemory, mockState);
packages\typescript\src\__tests__\entities.test.ts:377 - const result = await findEntityByName(runtime, mockMemory, mockState);
packages\typescript\src\__tests__\entities.test.ts:423 - const result = await findEntityByName(runtime, mockMemory, mockState);

## packages\typescript\src\__tests__\history-compaction.test.ts
packages\typescript\src\__tests__\history-compaction.test.ts:12 - import type { Memory, UUID } from "../types/index.ts";
packages\typescript\src\__tests__\history-compaction.test.ts:19 - ): Memory {
packages\typescript\src\__tests__\history-compaction.test.ts:33 - describe("InMemoryAdapter getMemories with start/end parameters", () => {
packages\typescript\src\__tests__\history-compaction.test.ts:35 - const { InMemoryDatabaseAdapter } = await import(
packages\typescript\src\__tests__\history-compaction.test.ts:39 - const adapter = new InMemoryDatabaseAdapter();
packages\typescript\src\__tests__\history-compaction.test.ts:54 - memory: msg,
packages\typescript\src\__tests__\history-compaction.test.ts:72 - const { InMemoryDatabaseAdapter } = await import(
packages\typescript\src\__tests__\history-compaction.test.ts:76 - const adapter = new InMemoryDatabaseAdapter();
packages\typescript\src\__tests__\history-compaction.test.ts:91 - memory: msg,
packages\typescript\src\__tests__\history-compaction.test.ts:109 - const { InMemoryDatabaseAdapter } = await import(
packages\typescript\src\__tests__\history-compaction.test.ts:113 - const adapter = new InMemoryDatabaseAdapter();
packages\typescript\src\__tests__\history-compaction.test.ts:128 - memory: msg,
packages\typescript\src\__tests__\history-compaction.test.ts:147 - const { InMemoryDatabaseAdapter } = await import(
packages\typescript\src\__tests__\history-compaction.test.ts:151 - const adapter = new InMemoryDatabaseAdapter();
packages\typescript\src\__tests__\history-compaction.test.ts:158 - memory: createMockMessage(1000, "Exact", roomId),
packages\typescript\src\__tests__\history-compaction.test.ts:182 - const { InMemoryDatabaseAdapter } = await import(
packages\typescript\src\__tests__\history-compaction.test.ts:186 - const adapter = new InMemoryDatabaseAdapter();
packages\typescript\src\__tests__\history-compaction.test.ts:193 - memory: createMockMessage(1000, "Old", roomId),
packages\typescript\src\__tests__\history-compaction.test.ts:210 - const { InMemoryDatabaseAdapter } = await import(
packages\typescript\src\__tests__\history-compaction.test.ts:214 - const adapter = new InMemoryDatabaseAdapter();
... and 16 more

## packages\typescript\src\__tests__\logger.test.ts
packages\typescript\src\__tests__\logger.test.ts:351 - describe("InMemoryDestination Coverage", () => {

## packages\typescript\src\__tests__\memory-leak-fixes.test.ts
packages\typescript\src\__tests__\memory-leak-fixes.test.ts:2 - * Tests for memory leak fixes across the codebase:

## packages\typescript\src\__tests__\memory.test.ts
packages\typescript\src\__tests__\memory.test.ts:12 - } from "../memory";
packages\typescript\src\__tests__\memory.test.ts:19 - type Memory,
packages\typescript\src\__tests__\memory.test.ts:25 - describe("Memory Utilities", () => {
packages\typescript\src\__tests__\memory.test.ts:30 - describe("createMessageMemory", () => {
packages\typescript\src\__tests__\memory.test.ts:31 - it("should create a message memory with required fields", () => {
packages\typescript\src\__tests__\memory.test.ts:32 - const memory = createMessageMemory({
packages\typescript\src\__tests__\memory.test.ts:41 - expect(memory.metadata.type).toBe(MemoryType.MESSAGE);
packages\typescript\src\__tests__\memory.test.ts:47 - const memory = createMessageMemory({
packages\typescript\src\__tests__\memory.test.ts:58 - const memory = createMessageMemory({
packages\typescript\src\__tests__\memory.test.ts:69 - const memory = createMessageMemory({
packages\typescript\src\__tests__\memory.test.ts:81 - const memory = createMessageMemory({
packages\typescript\src\__tests__\memory.test.ts:93 - const memory = createMessageMemory({
packages\typescript\src\__tests__\memory.test.ts:108 - type: MemoryType.DOCUMENT,
packages\typescript\src\__tests__\memory.test.ts:116 - type: MemoryType.MESSAGE,
packages\typescript\src\__tests__\memory.test.ts:127 - type: MemoryType.FRAGMENT,
packages\typescript\src\__tests__\memory.test.ts:135 - type: MemoryType.MESSAGE,
packages\typescript\src\__tests__\memory.test.ts:146 - type: MemoryType.MESSAGE,
packages\typescript\src\__tests__\memory.test.ts:155 - type: MemoryType.DOCUMENT,
packages\typescript\src\__tests__\memory.test.ts:165 - type: MemoryType.DESCRIPTION,
packages\typescript\src\__tests__\memory.test.ts:173 - type: MemoryType.MESSAGE,
... and 28 more

## packages\typescript\src\__tests__\message-service.test.ts
packages\typescript\src\__tests__\message-service.test.ts:4 - import type { Content, HandlerCallback, Memory, UUID } from "../types";
packages\typescript\src\__tests__\message-service.test.ts:46 - async (memory: Memory) => {
packages\typescript\src\__tests__\message-service.test.ts:146 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:171 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:211 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:248 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:276 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:305 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:333 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:361 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:380 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:404 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:429 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:456 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:479 - it("should store incoming message in memory", async () => {
packages\typescript\src\__tests__\message-service.test.ts:480 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:508 - const voiceMessage: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:534 - const message: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:558 - const agentMessage: Memory = {
packages\typescript\src\__tests__\message-service.test.ts:583 - it("should delete a message memory by ID", async () => {
... and 14 more

## packages\typescript\src\__tests__\messages.test.ts
packages\typescript\src\__tests__\messages.test.ts:3 - import type { Content, Entity, Memory, UUID } from "../types";
packages\typescript\src\__tests__\messages.test.ts:29 - const messages: Memory[] = [
packages\typescript\src\__tests__\messages.test.ts:55 - const messages: Memory[] = [
packages\typescript\src\__tests__\messages.test.ts:82 - const messages: Memory[] = [
packages\typescript\src\__tests__\messages.test.ts:143 - const messagesWithUnknownUser: Memory[] = [
packages\typescript\src\__tests__\messages.test.ts:162 - const messagesWithoutAction: Memory[] = [

## packages\typescript\src\__tests__\onboarding-cli.test.ts
packages\typescript\src\__tests__\onboarding-cli.test.ts:180 - const welcomeMessages = this.config.messages?.welcome || [

## packages\typescript\src\__tests__\prompt-batcher.test.ts
packages\typescript\src\__tests__\prompt-batcher.test.ts:3 - import type { Memory } from "../types/memory";

## packages\typescript\src\__tests__\runtime-embedding.test.ts
packages\typescript\src\__tests__\runtime-embedding.test.ts:6 - type Memory,
packages\typescript\src\__tests__\runtime-embedding.test.ts:60 - it("should emit EMBEDDING_GENERATION_REQUESTED event for memory with text", async () => {
packages\typescript\src\__tests__\runtime-embedding.test.ts:61 - const memory: Memory = {
packages\typescript\src\__tests__\runtime-embedding.test.ts:62 - id: "test-memory-id" as UUID,
packages\typescript\src\__tests__\runtime-embedding.test.ts:66 - content: { text: "Test memory content" },
packages\typescript\src\__tests__\runtime-embedding.test.ts:85 - it("should skip memory that already has embeddings", async () => {
packages\typescript\src\__tests__\runtime-embedding.test.ts:86 - const memory: Memory = {
packages\typescript\src\__tests__\runtime-embedding.test.ts:87 - id: "test-memory-id" as UUID,
packages\typescript\src\__tests__\runtime-embedding.test.ts:91 - content: { text: "Test memory content" },
packages\typescript\src\__tests__\runtime-embedding.test.ts:104 - it("should skip memory without text content", async () => {
packages\typescript\src\__tests__\runtime-embedding.test.ts:105 - const memory: Memory = {
packages\typescript\src\__tests__\runtime-embedding.test.ts:106 - id: "test-memory-id" as UUID,
packages\typescript\src\__tests__\runtime-embedding.test.ts:125 - memory: {
packages\typescript\src\__tests__\runtime-embedding.test.ts:136 - memory: {
packages\typescript\src\__tests__\runtime-embedding.test.ts:147 - memory: {
packages\typescript\src\__tests__\runtime-embedding.test.ts:180 - const memory: Memory = {
packages\typescript\src\__tests__\runtime-embedding.test.ts:181 - id: "test-memory-id" as UUID,
packages\typescript\src\__tests__\runtime-embedding.test.ts:200 - const memory: Memory = {
packages\typescript\src\__tests__\runtime-embedding.test.ts:201 - id: "test-memory-id" as UUID,
packages\typescript\src\__tests__\runtime-embedding.test.ts:218 - const memories = Array.from({ length: 100 }, (_, i) => ({
... and 15 more

## packages\typescript\src\__tests__\runtime.test.ts
packages\typescript\src\__tests__\runtime.test.ts:35 - import { isStreamableModelType, MemoryType, ModelType } from "../types";
packages\typescript\src\__tests__\runtime.test.ts:199 - const createMockMemory = (
packages\typescript\src\__tests__\runtime.test.ts:205 - ): Memory => ({
packages\typescript\src\__tests__\runtime.test.ts:212 - metadata: { type: MemoryType.MESSAGE }, // Simple metadata
packages\typescript\src\__tests__\runtime.test.ts:655 - const message = createMockMemory(
packages\typescript\src\__tests__\runtime.test.ts:704 - const message = createMockMemory(
packages\typescript\src\__tests__\runtime.test.ts:807 - let message: Memory;
packages\typescript\src\__tests__\runtime.test.ts:808 - let responseMemory: Memory;
packages\typescript\src\__tests__\runtime.test.ts:817 - message = createMockMemory(
packages\typescript\src\__tests__\runtime.test.ts:824 - responseMemory = createMockMemory(
packages\typescript\src\__tests__\runtime.test.ts:831 - responseMemory.content.actions = ["TestAction"]; // Specify action to run
packages\typescript\src\__tests__\runtime.test.ts:872 - responseMemory.content.actions = ["NonExistentAction"];
packages\typescript\src\__tests__\runtime.test.ts:908 - responseMemory.content.actions = ["REPLY"];
packages\typescript\src\__tests__\runtime.test.ts:919 - responseMemory.content.actions = ["REPLY_WITH_IMAGE"];
packages\typescript\src\__tests__\runtime.test.ts:950 - const memory: Memory = {
packages\typescript\src\__tests__\runtime.test.ts:959 - const responses: Memory[] = [
packages\typescript\src\__tests__\runtime.test.ts:964 - roomId: memory.roomId,
packages\typescript\src\__tests__\runtime.test.ts:995 - const memory: Memory = {
packages\typescript\src\__tests__\runtime.test.ts:1005 - const responses: Memory[] = [];
packages\typescript\src\__tests__\runtime.test.ts:1030 - it("getMemoryById should call adapter.getMemoriesByIds", async () => {
... and 2 more

## packages\typescript\src\__tests__\services-by-type.test.ts
packages\typescript\src\__tests__\services-by-type.test.ts:3 - import { InMemoryDatabaseAdapter } from "../database/inMemoryAdapter";
packages\typescript\src\__tests__\services-by-type.test.ts:60 - adapter: new InMemoryDatabaseAdapter(),

## packages\typescript\src\__tests__\test-utils.ts
packages\typescript\src\__tests__\test-utils.ts:29 - import { ChannelType, MemoryType } from "../types";
packages\typescript\src\__tests__\test-utils.ts:86 - const memories = new Map<UUID, Memory>();
packages\typescript\src\__tests__\test-utils.ts:133 - const result: Memory[] = [];
packages\typescript\src\__tests__\test-utils.ts:143 - ids.map((id) => memories.get(id)).filter(Boolean) as Memory[],
packages\typescript\src\__tests__\test-utils.ts:146 - const result: Memory[] = [];
packages\typescript\src\__tests__\test-utils.ts:158 - memoryBatch: Array<{
packages\typescript\src\__tests__\test-utils.ts:159 - memory: Memory;
packages\typescript\src\__tests__\test-utils.ts:166 - const id = memory.id || createUUID();
packages\typescript\src\__tests__\test-utils.ts:174 - async (memoryBatch: Array<Partial<Memory> & { id: UUID }>) => {
packages\typescript\src\__tests__\test-utils.ts:175 - return memoryBatch.map((mem) => {
packages\typescript\src\__tests__\test-utils.ts:478 - overrides: Partial<Memory> & { content?: Content | string } = {},
packages\typescript\src\__tests__\test-utils.ts:479 - ): Memory {
packages\typescript\src\__tests__\test-utils.ts:498 - metadata: { type: MemoryType.MESSAGE } as MemoryMetadata,
packages\typescript\src\__tests__\test-utils.ts:548 - messageOverrides?: Partial<Memory>;
packages\typescript\src\__tests__\test-utils.ts:553 - message: Memory;
packages\typescript\src\__tests__\test-utils.ts:569 - const message = createTestMemory({
packages\typescript\src\__tests__\test-utils.ts:589 - const callback = vi.fn().mockResolvedValue([] as Memory[]);

## packages\typescript\src\__tests__\testing-infrastructure.test.ts
packages\typescript\src\__tests__\testing-infrastructure.test.ts:37 - describe("createTestMemory", () => {
packages\typescript\src\__tests__\testing-infrastructure.test.ts:38 - it("should create memory with string content", () => {
packages\typescript\src\__tests__\testing-infrastructure.test.ts:39 - const memory = createTestMemory({ content: "Hello, world!" });
packages\typescript\src\__tests__\testing-infrastructure.test.ts:44 - expect(memory.content).toEqual({ text: "Hello, world!" });
packages\typescript\src\__tests__\testing-infrastructure.test.ts:48 - it("should create memory with Content object", () => {
packages\typescript\src\__tests__\testing-infrastructure.test.ts:50 - const memory = createTestMemory({ content });
packages\typescript\src\__tests__\testing-infrastructure.test.ts:60 - const memory = createTestMemory({

## packages\typescript\src\__tests__\testing-integration-runtime.test.ts
packages\typescript\src\__tests__\testing-integration-runtime.test.ts:35 - getMemoryById: vi.fn().mockResolvedValue(null),
packages\typescript\src\__tests__\testing-integration-runtime.test.ts:39 - createMemory: vi.fn().mockResolvedValue(undefined),
packages\typescript\src\__tests__\testing-integration-runtime.test.ts:42 - deleteMemory: vi.fn().mockResolvedValue(undefined),

## packages\typescript\src\__tests__\tool-policy.test.ts
packages\typescript\src\__tests__\tool-policy.test.ts:90 - it("should expand group:memory to memory tools", () => {
packages\typescript\src\__tests__\tool-policy.test.ts:91 - const expanded = expandToolGroups(["group:memory"]);
packages\typescript\src\__tests__\tool-policy.test.ts:205 - expect(policy?.allow).toContain("group:memory");

## packages\typescript\src\__tests__\utils.test.ts
packages\typescript\src\__tests__\utils.test.ts:2 - import type { Content, Entity, IAgentRuntime, Memory, State } from "../types";
packages\typescript\src\__tests__\utils.test.ts:583 - const messages: Memory[] = [
packages\typescript\src\__tests__\utils.test.ts:605 - const messages: Memory[] = [
packages\typescript\src\__tests__\utils.test.ts:629 - const messages: Memory[] = [
packages\typescript\src\__tests__\utils.test.ts:662 - // Testing edge case: malformed memory with null entityId
packages\typescript\src\__tests__\utils.test.ts:663 - interface MalformedMemory extends Omit<Memory, "entityId"> {
packages\typescript\src\__tests__\utils.test.ts:666 - const malformedMessage: MalformedMemory = {
packages\typescript\src\__tests__\utils.test.ts:674 - const messages: Memory[] = [
packages\typescript\src\__tests__\utils.test.ts:704 - const messages: Memory[] = [
packages\typescript\src\__tests__\utils.test.ts:738 - const messages: Memory[] = [
packages\typescript\src\__tests__\utils.test.ts:760 - const messages: Memory[] = [
packages\typescript\src\__tests__\utils.test.ts:782 - const messages: Memory[] = [
packages\typescript\src\__tests__\utils.test.ts:805 - // Testing edge case: malformed memory with null roomId
packages\typescript\src\__tests__\utils.test.ts:806 - interface MalformedMemory extends Omit<Memory, "roomId"> {
packages\typescript\src\__tests__\utils.test.ts:809 - const malformedMessage: MalformedMemory = {
packages\typescript\src\__tests__\utils.test.ts:820 - const messages: Memory[] = [malformedMessage as Memory];

## packages\typescript\src\__tests__\integration\real-runtime.test.ts
packages\typescript\src\__tests__\integration\real-runtime.test.ts:31 - const memories = new Map<UUID, Memory>();
packages\typescript\src\__tests__\integration\real-runtime.test.ts:78 - const result: Memory[] = [];
packages\typescript\src\__tests__\integration\real-runtime.test.ts:88 - ids.map((id) => memories.get(id)).filter(Boolean) as Memory[],
packages\typescript\src\__tests__\integration\real-runtime.test.ts:95 - batch: Array<{ memory: Memory; tableName: string; unique?: boolean }>,
packages\typescript\src\__tests__\integration\real-runtime.test.ts:99 - const id = memory.id || (stringToUuid(uuidv4()) as UUID);
packages\typescript\src\__tests__\integration\real-runtime.test.ts:378 - it("should create and retrieve a memory", async () => {
packages\typescript\src\__tests__\integration\real-runtime.test.ts:381 - const memory: Memory = {
packages\typescript\src\__tests__\integration\real-runtime.test.ts:393 - const memoryId = await runtime.createMemory(memory, "messages");
packages\typescript\src\__tests__\integration\real-runtime.test.ts:404 - const found = memories.find((m) => m.id === memory.id);

## packages\typescript\src\__tests__\utils\streaming.test.ts
packages\typescript\src\__tests__\utils\streaming.test.ts:302 - it("should handle large content before <text> tag without memory issues", () => {

## scripts\benchmark_long_context.py
scripts\benchmark_long_context.py:8 - from elizaos.advanced_memory.memory_service import MemoryService
scripts\benchmark_long_context.py:9 - from elizaos.advanced_memory.types import LongTermMemoryCategory, LongTermMemory
scripts\benchmark_long_context.py:16 - service = MemoryService(runtime=None)
scripts\benchmark_long_context.py:42 - category=LongTermMemoryCategory.SEMANTIC,
scripts\benchmark_long_context.py:52 - category=LongTermMemoryCategory.SEMANTIC,
scripts\benchmark_long_context.py:60 - memories: List[LongTermMemory] = await service.get_long_term_memories(entity_id, limit=5)

## scripts\context-test.ts
scripts\context-test.ts:147 - const mem = item.memory ?? item;
scripts\context-test.ts:154 - updateMemories: async (ms: any[]) => { for (const m of ms) await adapter.updateMemory?.(m); },
scripts\context-test.ts:157 - const mem = item.memory ?? item;
scripts\context-test.ts:162 - deleteMemories: async (ids: string[]) => { for (const id of ids) await adapter.deleteMemory?.(id); },
scripts\context-test.ts:307 - const message = createMessageMemory({

## scripts\test_trajectory_pipeline.py
scripts\test_trajectory_pipeline.py:7 - from elizaos.types.memory import Memory
scripts\test_trajectory_pipeline.py:60 - message = Memory(
