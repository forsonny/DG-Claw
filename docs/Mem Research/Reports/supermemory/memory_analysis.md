# supermemory Memory Context

## Files with 'mem' in name:
apps\browser-extension\utils\memory-popup.ts
apps\docs\add-memories.mdx
apps\docs\memory-operations.mdx
apps\docs\ai-sdk\memory-tools.mdx
apps\docs\concepts\graph-memory.mdx
apps\docs\concepts\memory-vs-rag.mdx
apps\docs\cookbook\perplexity-supermemory.mdx
apps\docs\images\claude-code-supermemory.png
apps\docs\images\doc-to-memory-process.png
apps\docs\images\memories-inferred.png
apps\docs\images\memory-graph.png
apps\docs\images\supermemory.svg
apps\docs\images\viasocket-supermemory-action.png
apps\docs\images\viaSocket-supermemory-auth.png
apps\docs\images\viasocket-supermemory-configured-trigger.png
apps\docs\images\viaSocket-supermemory-connect.png
apps\docs\images\viasocket-supermemory-connection.png
apps\docs\images\viasocket-supermemory-go-live.png
apps\docs\images\viaSocket-supermemory-trigger.png
apps\docs\images\opts\Memory_API.png
apps\docs\images\opts\Supermemory_MCP.png
apps\docs\integrations\claude-memory.mdx
apps\docs\integrations\memory-graph.mdx
apps\docs\integrations\supermemory-sdk.mdx
apps\docs\memory-api\creation\adding-memories.mdx
apps\docs\memory-api\sdks\anthropic-claude-memory.mdx
apps\docs\memory-api\sdks\supermemory-npm.mdx
apps\docs\memory-api\sdks\supermemory-pypi.mdx
apps\docs\memory-api\searching\searching-memories.mdx
apps\docs\memory-router\with-memory-api.mdx
apps\docs\memorybench\memscore.mdx
apps\docs\migration\from-mem0.mdx
apps\docs\migration\mem0-migration-script.py
apps\docs\overview\why-supermemory.mdx
apps\docs\search\examples\memory-search.mdx
apps\raycast-extension\metadata\supermemory-1.png
apps\raycast-extension\metadata\supermemory-2.png
apps\raycast-extension\src\add-memory.tsx
apps\raycast-extension\src\search-memories.tsx
apps\raycast-extension\src\withSupermemory.tsx
apps\web\components\memories-grid.tsx
apps\web\components\chat\message\memory-search-result-card.tsx
apps\web\components\chat\message\related-memories.tsx
apps\web\components\document-modal\graph-list-memories.tsx
apps\web\components\memory-graph\memory-graph.tsx
apps\web\lib\chat-search-memory-results.ts
apps\web\public\add-memory.png
packages\docs-test\tests\integrations\claude-memory.ts
packages\memory-graph\src\components\memory-graph.css.ts
packages\memory-graph\src\components\memory-graph.tsx
packages\tools\test-supermemory.ts
packages\tools\src\claude-memory-simple-example.ts
packages\tools\src\claude-memory.ts
packages\tools\src\shared\memory-client.ts
packages\tools\src\vercel\memory-prompt.ts
packages\tools\test\claude-memory-examples.ts
packages\tools\test\claude-memory-real-example.ts
packages\tools\test\claude-memory.test.ts
packages\tools\test\test-memory-tool.ts
packages\ui\memory-graph\memory-graph.tsx


## .\CONTRIBUTING.md
.\CONTRIBUTING.md:3 - Thank you for your interest in contributing to supermemory! We welcome contributions from developers of all skill levels. This guide will help you get started with contributing to our AI-powered memory layer API.
.\CONTRIBUTING.md:19 - git clone https://github.com/supermemoryai/supermemory.git
.\CONTRIBUTING.md:58 - supermemory is organized as a monorepo using Turbo:
.\CONTRIBUTING.md:130 - 1. Check our [Issues](https://github.com/supermemoryai/supermemory/issues) page
.\CONTRIBUTING.md:214 - - ✅ `feat: add semantic search to memory graph`
.\CONTRIBUTING.md:291 - - **Discord**: [Join our Discord server](https://supermemory.link/discord)
.\CONTRIBUTING.md:294 - - **Email**: [support@supermemory.ai](mailto:support@supermemory.ai)

## .\package.json
.\package.json:2 - "name": "supermemory",
.\package.json:9 - "sentry:sourcemaps": "_SENTRY_RELEASE=$(sentry-cli releases propose-version) && sentry-cli releases new $_SENTRY_RELEASE --org=supermemory --project=consumer-app && sentry-cli sourcemaps upload --org=supermemory --project=consumer-app --release=$_SENTRY_RELEASE --strip-prefix 'dist/..' dist",

## .\README.md
.\README.md:5 - <img src="apps/web/public/logo-fullmark.svg" alt="Supermemory" width="400" />
.\README.md:14 - <a href="https://supermemory.ai/docs">Docs</a> ·
.\README.md:15 - <a href="https://supermemory.ai/docs/quickstart">Quickstart</a> ·
.\README.md:16 - <a href="https://console.supermemory.ai">Dashboard</a> ·
.\README.md:17 - <a href="https://supermemory.link/discord">Discord</a>
.\README.md:21 - <a href="https://www.npmjs.com/package/supermemory"><img src="https://img.shields.io/npm/v/supermemory?style=flat-square&color=blue" alt="npm" /></a>
.\README.md:22 - <a href="https://pypi.org/project/supermemory/"><img src="https://img.shields.io/pypi/v/supermemory?style=flat-square&color=blue" alt="pypi" /></a>
.\README.md:23 - <a href="https://supermemory.ai/docs"><img src="https://img.shields.io/badge/docs-supermemory.ai-blue?style=flat-square" alt="docs" /></a>
.\README.md:28 - Supermemory is the memory and context layer for AI. **#1 on [LongMemEval](https://github.com/xiaowu0162/LongMemEval), [LoCoMo](https://github.com/snap-research/locomo), and [ConvoMem](https://github.com/Salesforce/ConvoMem)** — the three major benchmarks for AI memory.
.\README.md:38 - | 🧠 **Memory** | Extracts facts from conversations. Handles temporal changes, contradictions, and automatic forgetting. |
.\README.md:90 - Start at https://app.supermemory.ai
.\README.md:106 - - Openclaw plugin: https://github.com/supermemoryai/openclaw-supermemory
.\README.md:107 - - Claude code plugin: https://github.com/supermemoryai/claude-supermemory
.\README.md:108 - - OpenCode plugin: https://github.com/supermemoryai/opencode-supermemory
.\README.md:113 - npx -y install-mcp@latest https://mcp.supermemory.ai/mcp --client claude --oauth=yes
.\README.md:118 - Read more about our MCP here - https://supermemory.ai/docs/supermemory-mcp/mcp
.\README.md:130 - Once installed, Supermemory runs in the background:
.\README.md:142 - The MCP server is open source — [view the source](https://supermemory.ai/docs/supermemory-mcp/mcp).
.\README.md:151 - "supermemory": {
.\README.md:152 - "url": "https://mcp.supermemory.ai/mcp"
... and 24 more

## apps\browser-extension\package.json
apps\browser-extension\package.json:2 - "name": "supermemory-browser-extension",
apps\browser-extension\package.json:3 - "description": "Browser extension for the supermemory app",

## apps\browser-extension\wxt.config.ts
apps\browser-extension\wxt.config.ts:12 - name: "supermemory",
apps\browser-extension\wxt.config.ts:13 - homepage_url: "https://supermemory.ai",
apps\browser-extension\wxt.config.ts:19 - "*://supermemory.ai/*",
apps\browser-extension\wxt.config.ts:20 - "*://api.supermemory.ai/*",

## apps\browser-extension\entrypoints\background.ts
apps\browser-extension\entrypoints\background.ts:82 - const saveMemoryToSupermemory = async (
apps\browser-extension\entrypoints\background.ts:83 - data: MemoryData,
apps\browser-extension\entrypoints\background.ts:110 - const metadata: MemoryPayload["metadata"] = {
apps\browser-extension\entrypoints\background.ts:123 - const payload: MemoryPayload = {
apps\browser-extension\entrypoints\background.ts:129 - const responseData = await saveMemory(payload)
apps\browser-extension\entrypoints\background.ts:153 - results?: Array<{ memory?: string }>
apps\browser-extension\entrypoints\background.ts:195 - if (message.action === MESSAGE_TYPES.SAVE_MEMORY) {
apps\browser-extension\entrypoints\background.ts:198 - const result = await saveMemoryToSupermemory(
apps\browser-extension\entrypoints\background.ts:243 - const memoryData: MemoryData = {
apps\browser-extension\entrypoints\background.ts:247 - const result = await saveMemoryToSupermemory(

## apps\browser-extension\entrypoints\content\chatgpt.ts
apps\browser-extension\entrypoints\content\chatgpt.ts:145 - () => reject(new Error("Memory search timeout")),
apps\browser-extension\entrypoints\content\chatgpt.ts:217 - const supermemoryButton = document.createElement("button")
apps\browser-extension\entrypoints\content\chatgpt.ts:218 - supermemoryButton.id = "supermemory-save-button"
apps\browser-extension\entrypoints\content\chatgpt.ts:219 - supermemoryButton.className = "btn relative btn-primary-outline mr-2"
apps\browser-extension\entrypoints\content\chatgpt.ts:223 - supermemoryButton.innerHTML = `
apps\browser-extension\entrypoints\content\chatgpt.ts:225 - <img src="${iconUrl}" alt="supermemory" style="width: 16px; height: 16px; flex-shrink: 0; border-radius: 2px;" />
apps\browser-extension\entrypoints\content\chatgpt.ts:230 - supermemoryButton.style.cssText = `
apps\browser-extension\entrypoints\content\chatgpt.ts:242 - supermemoryButton.addEventListener("mouseenter", () => {
apps\browser-extension\entrypoints\content\chatgpt.ts:243 - supermemoryButton.style.backgroundColor = "#2B2E33"
apps\browser-extension\entrypoints\content\chatgpt.ts:246 - supermemoryButton.addEventListener("mouseleave", () => {
apps\browser-extension\entrypoints\content\chatgpt.ts:247 - supermemoryButton.style.backgroundColor = "#1C2026"
apps\browser-extension\entrypoints\content\chatgpt.ts:250 - supermemoryButton.addEventListener("click", async () => {
apps\browser-extension\entrypoints\content\chatgpt.ts:275 - const combinedContent = `Memories from ChatGPT:\n\n${memoriesTable.textContent}`
apps\browser-extension\entrypoints\content\chatgpt.ts:278 - action: MESSAGE_TYPES.SAVE_MEMORY,
apps\browser-extension\entrypoints\content\chatgpt.ts:293 - console.error("Error saving memories to supermemory:", error)
apps\browser-extension\entrypoints\content\chatgpt.ts:372 - .map((memory) => memory.trim())
apps\browser-extension\entrypoints\content\chatgpt.ts:373 - .filter((memory) => memory.length > 0 && memory !== ",")
apps\browser-extension\entrypoints\content\chatgpt.ts:376 - individualMemories.forEach((memory, index) => {
apps\browser-extension\entrypoints\content\chatgpt.ts:377 - const memoryItem = document.createElement("div")
apps\browser-extension\entrypoints\content\chatgpt.ts:378 - memoryItem.style.cssText = `
... and 10 more

## apps\browser-extension\entrypoints\content\claude.ts
apps\browser-extension\entrypoints\content\claude.ts:139 - const supermemoryIcon = createClaudeInputBarElement(async () => {
apps\browser-extension\entrypoints\content\claude.ts:145 - supermemoryIcon.id = `${ELEMENT_IDS.CLAUDE_INPUT_BAR_ELEMENT}-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`
apps\browser-extension\entrypoints\content\claude.ts:157 - const supermemoryContainer = document.querySelector(
apps\browser-extension\entrypoints\content\claude.ts:158 - '[data-supermemory-icon-added="true"]',
apps\browser-extension\entrypoints\content\claude.ts:211 - () => reject(new Error("Memory search timeout")),
apps\browser-extension\entrypoints\content\claude.ts:341 - .map((memory) => memory.trim())
apps\browser-extension\entrypoints\content\claude.ts:342 - .filter((memory) => memory.length > 0 && memory !== ",")
apps\browser-extension\entrypoints\content\claude.ts:345 - individualMemories.forEach((memory, index) => {
apps\browser-extension\entrypoints\content\claude.ts:346 - const memoryItem = document.createElement("div")
apps\browser-extension\entrypoints\content\claude.ts:347 - memoryItem.style.cssText = `
apps\browser-extension\entrypoints\content\claude.ts:356 - const memoryText = document.createElement("div")
apps\browser-extension\entrypoints\content\claude.ts:357 - memoryText.style.cssText = `
apps\browser-extension\entrypoints\content\claude.ts:361 - memoryText.textContent = memory.trim()
apps\browser-extension\entrypoints\content\claude.ts:378 - removeBtn.dataset.memoryIndex = index.toString()
apps\browser-extension\entrypoints\content\claude.ts:421 - content.querySelectorAll("button[data-memory-index]").forEach((button) => {
apps\browser-extension\entrypoints\content\claude.ts:424 - const index = Number.parseInt(htmlButton.dataset.memoryIndex || "0", 10)
apps\browser-extension\entrypoints\content\claude.ts:425 - const memoryItem = htmlButton.parentElement
apps\browser-extension\entrypoints\content\claude.ts:433 - .map((memory) => memory.trim())
apps\browser-extension\entrypoints\content\claude.ts:434 - .filter((memory) => memory.length > 0 && memory !== ",")
apps\browser-extension\entrypoints\content\claude.ts:452 - htmlBtn.dataset.memoryIndex = newIndex.toString()

## apps\browser-extension\entrypoints\content\index.ts
apps\browser-extension\entrypoints\content\index.ts:25 - } else if (message.action === MESSAGE_TYPES.SAVE_MEMORY) {

## apps\browser-extension\entrypoints\content\shared.ts
apps\browser-extension\entrypoints\content\shared.ts:68 - action: MESSAGE_TYPES.SAVE_MEMORY,
apps\browser-extension\entrypoints\content\shared.ts:80 - console.error("Error saving memory:", error)
apps\browser-extension\entrypoints\content\shared.ts:109 - window.location.hostname === "supermemory.ai" ||
apps\browser-extension\entrypoints\content\shared.ts:110 - window.location.hostname === "app.supermemory.ai"

## apps\browser-extension\entrypoints\content\t3.ts
apps\browser-extension\entrypoints\content\t3.ts:141 - const supermemoryIcon = createT3InputBarElement(async () => {
apps\browser-extension\entrypoints\content\t3.ts:145 - supermemoryIcon.id = `${ELEMENT_IDS.T3_INPUT_BAR_ELEMENT}-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`
apps\browser-extension\entrypoints\content\t3.ts:156 - const supermemoryContainer = document.querySelector(
apps\browser-extension\entrypoints\content\t3.ts:157 - '[data-supermemory-icon-added="true"]',
apps\browser-extension\entrypoints\content\t3.ts:206 - () => reject(new Error("Memory search timeout")),
apps\browser-extension\entrypoints\content\t3.ts:224 - const supermemoryContainer = document.querySelector(
apps\browser-extension\entrypoints\content\t3.ts:225 - '[data-supermemory-icon-added="true"]',
apps\browser-extension\entrypoints\content\t3.ts:349 - .map((memory) => memory.trim())
apps\browser-extension\entrypoints\content\t3.ts:350 - .filter((memory) => memory.length > 0 && memory !== ",")
apps\browser-extension\entrypoints\content\t3.ts:353 - individualMemories.forEach((memory, index) => {
apps\browser-extension\entrypoints\content\t3.ts:354 - const memoryItem = document.createElement("div")
apps\browser-extension\entrypoints\content\t3.ts:355 - memoryItem.style.cssText = `
apps\browser-extension\entrypoints\content\t3.ts:364 - const memoryText = document.createElement("div")
apps\browser-extension\entrypoints\content\t3.ts:365 - memoryText.style.cssText = `
apps\browser-extension\entrypoints\content\t3.ts:369 - memoryText.textContent = memory.trim()
apps\browser-extension\entrypoints\content\t3.ts:386 - removeBtn.dataset.memoryIndex = index.toString()
apps\browser-extension\entrypoints\content\t3.ts:429 - content.querySelectorAll("button[data-memory-index]").forEach((button) => {
apps\browser-extension\entrypoints\content\t3.ts:432 - const index = Number.parseInt(htmlButton.dataset.memoryIndex || "0", 10)
apps\browser-extension\entrypoints\content\t3.ts:433 - const memoryItem = htmlButton.parentElement
apps\browser-extension\entrypoints\content\t3.ts:441 - .map((memory) => memory.trim())
... and 2 more

## apps\browser-extension\entrypoints\content\twitter.ts
apps\browser-extension\entrypoints\content\twitter.ts:22 - style.id = "supermemory-modal-styles"
apps\browser-extension\entrypoints\content\twitter.ts:229 - style.id = "supermemory-onboarding-toast-styles"
apps\browser-extension\entrypoints\content\twitter.ts:259 - icon.alt = "Supermemory"
apps\browser-extension\entrypoints\content\twitter.ts:275 - "You can import all your Twitter bookmarks to Supermemory with one click."
apps\browser-extension\entrypoints\content\twitter.ts:368 - window.open("https://docs.supermemory.ai/connectors/twitter", "_blank")
apps\browser-extension\entrypoints\content\twitter.ts:459 - document.querySelectorAll("[data-supermemory-button]").forEach((button) => {
apps\browser-extension\entrypoints\content\twitter.ts:474 - style.id = "supermemory-onboarding-toast-styles"
apps\browser-extension\entrypoints\content\twitter.ts:518 - icon.alt = "Supermemory"

## apps\browser-extension\utils\api.ts
apps\browser-extension\utils\api.ts:8 - type MemoryPayload,
apps\browser-extension\utils\api.ts:36 - const response = await fetch(`${API_ENDPOINTS.SUPERMEMORY_API}${endpoint}`, {
apps\browser-extension\utils\api.ts:132 - export async function saveMemory(payload: MemoryPayload): Promise<unknown> {
apps\browser-extension\utils\api.ts:140 - console.error("Failed to save memory:", error)
apps\browser-extension\utils\api.ts:168 - documents: MemoryPayload[],
apps\browser-extension\utils\api.ts:186 - if (error instanceof SupermemoryAPIError && error.statusCode === 409) {

## apps\browser-extension\utils\constants.ts
apps\browser-extension\utils\constants.ts:5 - SUPERMEMORY_API: import.meta.env.PROD
apps\browser-extension\utils\constants.ts:6 - ? "https://api.supermemory.ai"
apps\browser-extension\utils\constants.ts:8 - SUPERMEMORY_WEB: import.meta.env.PROD
apps\browser-extension\utils\constants.ts:9 - ? "https://app.supermemory.ai"
apps\browser-extension\utils\constants.ts:20 - SUPERMEMORY_TOAST: "sm-toast",
apps\browser-extension\utils\constants.ts:21 - SUPERMEMORY_SAVE_BUTTON: "sm-save-button",
apps\browser-extension\utils\constants.ts:62 - SUPERMEMORY: ["localhost", "supermemory.ai", "app.supermemory.ai"],
apps\browser-extension\utils\constants.ts:77 - SAVE_MEMORY: "sm-save-memory",
apps\browser-extension\utils\constants.ts:90 - SAVE_MEMORY_ATTEMPTED: "save_memory_attempted",
apps\browser-extension\utils\constants.ts:91 - SAVE_MEMORY_ATTEMPT_FAILED: "save_memory_attempt_failed",

## apps\browser-extension\utils\memory-popup.ts
apps\browser-extension\utils\memory-popup.ts:6 - export interface MemoryPopupConfig {
apps\browser-extension\utils\memory-popup.ts:12 - export function createMemoryPopup(config: MemoryPopupConfig): HTMLElement {
apps\browser-extension\utils\memory-popup.ts:45 - ${config.onRemove ? '<button id="remove-memories-btn" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 14px; padding: 2px; border-radius: 2px;" title="Remove memories">✕</button>' : ""}
apps\browser-extension\utils\memory-popup.ts:57 - content.textContent = config.memoriesData
apps\browser-extension\utils\memory-popup.ts:73 - export function showMemoryPopup(popup: HTMLElement): void {
apps\browser-extension\utils\memory-popup.ts:83 - export function hideMemoryPopup(popup: HTMLElement): void {
apps\browser-extension\utils\memory-popup.ts:87 - export function toggleMemoryPopup(popup: HTMLElement): void {

## apps\browser-extension\utils\posthog.ts
apps\browser-extension\utils\posthog.ts:20 - api_host: "https://api.supermemory.ai/orange",

## apps\browser-extension\utils\query-hooks.ts
apps\browser-extension\utils\query-hooks.ts:13 - import type { MemoryPayload } from "./types"
apps\browser-extension\utils\query-hooks.ts:67 - mutationFn: (payload: MemoryPayload) => saveMemory(payload),

## apps\browser-extension\utils\twitter-import.ts
apps\browser-extension\utils\twitter-import.ts:6 - import type { MemoryPayload } from "./types"
apps\browser-extension\utils\twitter-import.ts:152 - const documents: MemoryPayload[] = []

## apps\browser-extension\utils\types.ts
apps\browser-extension\utils\types.ts:33 - export interface MemoryData {
apps\browser-extension\utils\types.ts:46 - export interface MemoryPayload {
apps\browser-extension\utils\types.ts:59 - export interface TwitterMemoryMetadata {
apps\browser-extension\utils\types.ts:137 - export class SupermemoryAPIError extends ExtensionError {
apps\browser-extension\utils\types.ts:140 - this.name = "SupermemoryAPIError"

## apps\browser-extension\utils\ui-components.ts
apps\browser-extension\utils\ui-components.ts:16 - toast.id = ELEMENT_IDS.SUPERMEMORY_TOAST
apps\browser-extension\utils\ui-components.ts:41 - style.id = "supermemory-toast-styles"
apps\browser-extension\utils\ui-components.ts:116 - textElement.textContent = "Adding to Memory..."
apps\browser-extension\utils\ui-components.ts:122 - textElement.textContent = "Added to Memory"
apps\browser-extension\utils\ui-components.ts:140 - mainText.textContent = "Failed to save memory"
apps\browser-extension\utils\ui-components.ts:238 - <img src="${iconUrl}" width="20" height="20" alt="Save to Memory" style="border-radius: 4px;" />
apps\browser-extension\utils\ui-components.ts:280 - <img src="${iconUrl}" width="20" height="20" alt="Save to Memory" style="border-radius: 50%;" />
apps\browser-extension\utils\ui-components.ts:322 - <img src="${iconUrl}" width="20" height="20" alt="Get Related Memories from supermemory" style="border-radius: 4px;" />
apps\browser-extension\utils\ui-components.ts:366 - <img src="${iconUrl}" width="20" height="20" alt="Get Related Memories from supermemory" style="border-radius: 4px;" />
apps\browser-extension\utils\ui-components.ts:440 - <img src="${iconUrl}" width="20" height="20" alt="Supermemory" style="border-radius: 4px;" />
apps\browser-extension\utils\ui-components.ts:441 - Import to Supermemory
apps\browser-extension\utils\ui-components.ts:697 - const existingToast = document.getElementById(ELEMENT_IDS.SUPERMEMORY_TOAST)
apps\browser-extension\utils\ui-components.ts:708 - text.textContent = "Added to Memory"
apps\browser-extension\utils\ui-components.ts:725 - mainText.textContent = "Failed to save memory"

## apps\docs\docs.json
apps\docs\docs.json:8 - "openapi": "https://api.supermemory.ai/v3/openapi"
apps\docs\docs.json:31 - "github": "https://github.com/supermemoryai",
apps\docs\docs.json:32 - "linkedin": "https://linkedin.com/company/supermemoryai",
apps\docs\docs.json:33 - "x": "https://x.com/supermemory"
apps\docs\docs.json:43 - "name": "supermemory | Memory API for the AI era",
apps\docs\docs.json:47 - "href": "mailto:support@supermemory.com",
apps\docs\docs.json:52 - "href": "https://console.supermemory.ai",
apps\docs\docs.json:64 - "href": "https://console.supermemory.ai",
apps\docs\docs.json:89 - "group": "Using supermemory",
apps\docs\docs.json:97 - "pages": ["document-operations", "memory-operations"]
apps\docs\docs.json:129 - "pages": ["migration/from-mem0", "migration/from-zep"]
apps\docs\docs.json:136 - "anchor": "Supermemory MCP",
apps\docs\docs.json:138 - "pages": ["supermemory-mcp/mcp", "supermemory-mcp/setup"]
apps\docs\docs.json:190 - "openapi": "https://api.supermemory.ai/v3/openapi"
apps\docs\docs.json:199 - "anchor": "MemoryBench",
apps\docs\docs.json:206 - "pages": ["memorybench/installation", "memorybench/quickstart"]
apps\docs\docs.json:228 - "tab": "MemoryBench"
apps\docs\docs.json:288 - "destination": "/concepts/memory-vs-rag",
apps\docs\docs.json:290 - "source": "/memory-vs-rag"
apps\docs\docs.json:293 - "destination": "/integrations/supermemory-sdk",
... and 19 more

## apps\docs\install.md
apps\docs\install.md:37 - # Get API key: https://console.supermemory.ai
apps\docs\install.md:38 - npm install supermemory  # or: pip install supermemory
apps\docs\install.md:39 - # For Vercel AI SDK: npm install @supermemory/tools
apps\docs\install.md:40 - export SUPERMEMORY_API_KEY="sm_..."
apps\docs\install.md:46 - // PATCH https://api.supermemory.ai/v3/settings
apps\docs\install.md:47 - fetch('https://api.supermemory.ai/v3/settings', {
apps\docs\install.md:49 - headers: { 'x-supermemory-api-key': process.env.SUPERMEMORY_API_KEY },
apps\docs\install.md:95 - import { supermemoryTools } from '@supermemory/tools/ai-sdk'
apps\docs\install.md:101 - tools: supermemoryTools(process.env.SUPERMEMORY_API_KEY, {
apps\docs\install.md:108 - import { withSupermemory } from '@supermemory/tools/ai-sdk'
apps\docs\install.md:109 - const modelWithMemory = withSupermemory(anthropic('claude-3-5-sonnet-20241022'), userId)
apps\docs\install.md:112 - model: modelWithMemory,
apps\docs\install.md:121 - import Supermemory from 'supermemory'
apps\docs\install.md:123 - const client = new Supermemory()
apps\docs\install.md:155 - import Supermemory from 'supermemory'
apps\docs\install.md:157 - const client = new Supermemory()
apps\docs\install.md:186 - from supermemory import Supermemory
apps\docs\install.md:188 - client = Supermemory()
apps\docs\install.md:209 - curl -X POST https://api.supermemory.ai/v3/documents \
apps\docs\install.md:210 - -H "x-supermemory-api-key: $SUPERMEMORY_API_KEY" \
... and 13 more

## apps\docs\package.json
apps\docs\package.json:15 - "supermemory": "3.10.0"

## apps\docs\test.py
apps\docs\test.py:1 - from supermemory import Supermemory
apps\docs\test.py:3 - client = Supermemory()
apps\docs\test.py:17 - memories = "\n".join(r.get("memory", "") for r in profile.search_results.results)

## apps\docs\test.ts
apps\docs\test.ts:1 - import Supermemory from "supermemory"
apps\docs\test.ts:3 - const client = new Supermemory()

## apps\docs\migration\mem0-migration-script.py
apps\docs\migration\mem0-migration-script.py:5 - Simple script to migrate memories from Mem0 to Supermemory.
apps\docs\migration\mem0-migration-script.py:15 - export SUPERMEMORY_API_KEY="your_supermemory_api_key"
apps\docs\migration\mem0-migration-script.py:28 - from mem0 import MemoryClient
apps\docs\migration\mem0-migration-script.py:29 - from supermemory import Supermemory
apps\docs\migration\mem0-migration-script.py:35 - def export_from_mem0(
apps\docs\migration\mem0-migration-script.py:42 - Export memories from mem0 using their export API
apps\docs\migration\mem0-migration-script.py:47 - client = MemoryClient(api_key=api_key, org_id=org_id, project_id=project_id)
apps\docs\migration\mem0-migration-script.py:76 - export_response = client.create_memory_export(
apps\docs\migration\mem0-migration-script.py:89 - export_data = client.get_memory_export(memory_export_id=export_id)
apps\docs\migration\mem0-migration-script.py:97 - memory_count = len(export_data.get("memories", []))
apps\docs\migration\mem0-migration-script.py:98 - print(f"✅ Successfully exported {memory_count} memories from mem0")
apps\docs\migration\mem0-migration-script.py:101 - if memory_count > 0:
apps\docs\migration\mem0-migration-script.py:102 - print("\n📋 Sample exported memory:")
apps\docs\migration\mem0-migration-script.py:111 - print(f"❌ Error exporting from Mem0: {str(e)}")
apps\docs\migration\mem0-migration-script.py:115 - def import_to_supermemory(mem0_data: Dict[str, Any], api_key: str) -> Dict[str, int]:
apps\docs\migration\mem0-migration-script.py:117 - Import Mem0 memories into Supermemory
apps\docs\migration\mem0-migration-script.py:119 - print("\n🚀 Starting import to Supermemory...")
apps\docs\migration\mem0-migration-script.py:122 - client = Supermemory(api_key=api_key)
apps\docs\migration\mem0-migration-script.py:126 - print("⚠️  No memories found to import")
apps\docs\migration\mem0-migration-script.py:134 - for i, memory in enumerate(memories, 1):
... and 29 more

## apps\mcp\package.json
apps\mcp\package.json:2 - "name": "supermemory-mcp",
apps\mcp\package.json:18 - "supermemory": "^4.0.0",

## apps\mcp\README.md
apps\mcp\README.md:9 - - **User Profiles** - Auto-generated profiles from stored memories
apps\mcp\README.md:18 - npx -y install-mcp@latest https://mcp.supermemory.ai/mcp --client claude --oauth=yes
apps\mcp\README.md:30 - "supermemory": {
apps\mcp\README.md:31 - "url": "https://mcp.supermemory.ai/mcp"
apps\mcp\README.md:41 - If you prefer to use an API key instead of OAuth, you can pass it directly in the `Authorization` header. Get your API key from [app.supermemory.ai](https://app.supermemory.ai):
apps\mcp\README.md:46 - "supermemory": {
apps\mcp\README.md:47 - "url": "https://mcp.supermemory.ai/mcp",
apps\mcp\README.md:65 - "supermemory": {
apps\mcp\README.md:66 - "url": "https://mcp.supermemory.ai/mcp",
apps\mcp\README.md:127 - | `supermemory://profile` | User profile with stable preferences and recent activity |
apps\mcp\README.md:128 - | `supermemory://projects` | List of available memory projects |
apps\mcp\README.md:156 - API_URL=https://api.supermemory.ai
apps\mcp\README.md:161 - | `API_URL` | Main Supermemory API URL for OAuth validation | `https://api.supermemory.ai` |
apps\mcp\README.md:171 - **Note:** For local development, you also need the main Supermemory API running at the `API_URL` for OAuth token validation.
apps\mcp\README.md:207 - - **API Client:** supermemory SDK

## apps\mcp\src\client.ts
apps\mcp\src\client.ts:1 - import Supermemory from "supermemory"
apps\mcp\src\client.ts:6 - export type Memory =
apps\mcp\src\client.ts:9 - memory: string
apps\mcp\src\client.ts:23 - results: Memory[]
apps\mcp\src\client.ts:49 - export interface GraphApiMemory {
apps\mcp\src\client.ts:51 - memory: string
apps\mcp\src\client.ts:57 - parentMemoryId: string | null
apps\mcp\src\client.ts:71 - memories: GraphApiMemory[]
apps\mcp\src\client.ts:96 - export function getMemoryText(m: Memory): string {
apps\mcp\src\client.ts:97 - return "memory" in m ? m.memory : m.chunk
apps\mcp\src\client.ts:107 - memory?: string
apps\mcp\src\client.ts:115 - export class SupermemoryClient {
apps\mcp\src\client.ts:116 - private client: Supermemory
apps\mcp\src\client.ts:124 - apiUrl = "https://api.supermemory.ai",
apps\mcp\src\client.ts:128 - this.client = new Supermemory({
apps\mcp\src\client.ts:171 - message: `Successfully forgot memory (exact match) with ID: ${result.id}`,
apps\mcp\src\client.ts:189 - message: `No matching memory found to forget. Tried exact match and semantic search with similarity threshold ${SIMILARITY_THRESHOLD}.`,
apps\mcp\src\client.ts:195 - const memoryToDelete = searchResult.results.find((r) => "memory" in r)
apps\mcp\src\client.ts:207 - id: memoryToDelete.id,
apps\mcp\src\client.ts:211 - const memoryText =
... and 4 more

## apps\mcp\src\index.ts
apps\mcp\src\index.ts:3 - import { SupermemoryMCP } from "./server"
apps\mcp\src\index.ts:24 - const DEFAULT_API_URL = "https://api.supermemory.ai"
apps\mcp\src\index.ts:43 - name: "supermemory-mcp",
apps\mcp\src\index.ts:45 - description: "Give your AI a memory",
apps\mcp\src\index.ts:46 - docs: "https://docs.supermemory.ai/mcp",
apps\mcp\src\index.ts:56 - : "https://mcp.supermemory.ai"
apps\mcp\src\index.ts:63 - resource_documentation: "https://docs.supermemory.ai/mcp",
apps\mcp\src\index.ts:94 - const mcpHandler = SupermemoryMCP.mount("/mcp", {

## apps\mcp\src\posthog.ts
apps\mcp\src\posthog.ts:36 - export async function memoryAdded(props: {
apps\mcp\src\posthog.ts:55 - event: "memory_added",
apps\mcp\src\posthog.ts:66 - export async function memorySearch(props: {
apps\mcp\src\posthog.ts:84 - event: "memory_search",
apps\mcp\src\posthog.ts:95 - export async function memoryForgot(props: {
apps\mcp\src\posthog.ts:110 - event: "memory_forgot",

## apps\mcp\src\server.ts
apps\mcp\src\server.ts:8 - import { SupermemoryClient, getMemoryText } from "./client"
apps\mcp\src\server.ts:27 - export class SupermemoryMCP extends McpAgent<Env, unknown, Props> {
apps\mcp\src\server.ts:32 - name: "supermemory",
apps\mcp\src\server.ts:71 - const memorySchema = z.object({
apps\mcp\src\server.ts:99 - type MemoryArgs = z.infer<typeof memorySchema>
apps\mcp\src\server.ts:108 - inputSchema: memorySchema,
apps\mcp\src\server.ts:111 - (args: MemoryArgs) => this.handleMemory(args),
apps\mcp\src\server.ts:129 - "supermemory://profile",
apps\mcp\src\server.ts:153 - uri: "supermemory://profile",
apps\mcp\src\server.ts:168 - "supermemory://projects",
apps\mcp\src\server.ts:177 - uri: "supermemory://projects",
apps\mcp\src\server.ts:285 - const memoryGraphResourceUri = "ui://memory-graph/mcp-app.html"
apps\mcp\src\server.ts:287 - const memoryGraphSchema = z.object({
apps\mcp\src\server.ts:291 - type MemoryGraphArgs = z.infer<typeof memoryGraphSchema>
apps\mcp\src\server.ts:297 - title: "Memory Graph",
apps\mcp\src\server.ts:300 - inputSchema: memoryGraphSchema,
apps\mcp\src\server.ts:301 - _meta: { ui: { resourceUri: memoryGraphResourceUri } },
apps\mcp\src\server.ts:304 - async (args: MemoryGraphArgs) => {
apps\mcp\src\server.ts:323 - const memoryCount = viewport.documents.reduce(
apps\mcp\src\server.ts:328 - `Memory Graph: ${viewport.documents.length} documents, ${memoryCount} memories, ${viewport.edges.length} connections`,
... and 13 more

## apps\mcp\src\ui\mcp-app.ts
apps\mcp\src\ui\mcp-app.ts:26 - interface GraphApiMemory {
apps\mcp\src\ui\mcp-app.ts:28 - memory: string
apps\mcp\src\ui\mcp-app.ts:34 - parentMemoryId: string | null
apps\mcp\src\ui\mcp-app.ts:48 - memories: GraphApiMemory[]
apps\mcp\src\ui\mcp-app.ts:65 - interface MemoryNode extends NodeObject {
apps\mcp\src\ui\mcp-app.ts:67 - nodeType: "memory"
apps\mcp\src\ui\mcp-app.ts:68 - memory: string
apps\mcp\src\ui\mcp-app.ts:74 - parentMemoryId: string | null
apps\mcp\src\ui\mcp-app.ts:86 - memoryCount: number
apps\mcp\src\ui\mcp-app.ts:89 - type GraphNode = MemoryNode | DocumentNode
apps\mcp\src\ui\mcp-app.ts:94 - edgeType: "doc-memory" | "version" | "similarity"
apps\mcp\src\ui\mcp-app.ts:101 - const MEMORY_BORDER = {
apps\mcp\src\ui\mcp-app.ts:110 - "doc-memory": "#4A5568",
apps\mcp\src\ui\mcp-app.ts:115 - "doc-memory": "#A0AEC0",
apps\mcp\src\ui\mcp-app.ts:149 - function getMemoryBorderColor(mem: GraphApiMemory): string {
apps\mcp\src\ui\mcp-app.ts:207 - memoryCount: doc.memories.length,
apps\mcp\src\ui\mcp-app.ts:220 - nodeType: "memory",
apps\mcp\src\ui\mcp-app.ts:221 - memory: mem.memory,
apps\mcp\src\ui\mcp-app.ts:227 - parentMemoryId: mem.parentMemoryId,
apps\mcp\src\ui\mcp-app.ts:229 - borderColor: getMemoryBorderColor(mem),
... and 14 more

## apps\memory-graph-playground\package.json
apps\memory-graph-playground\package.json:2 - "name": "memory-graph-playground",
apps\memory-graph-playground\package.json:11 - "@supermemory/memory-graph": "workspace:*",

## apps\memory-graph-playground\README.md
apps\memory-graph-playground\README.md:12 - Open [http://localhost:3000](http://localhost:3000) and enter your Supermemory API key.
apps\memory-graph-playground\README.md:17 - import { MemoryGraph, type DocumentWithMemories } from '@supermemory/memory-graph'

## apps\memory-graph-playground\src\app\api\graph\route.ts
apps\memory-graph-playground\src\app\api\graph\route.ts:22 - "https://api.supermemory.ai/v3/documents/documents",

## apps\raycast-extension\package-lock.json
apps\raycast-extension\package-lock.json:2 - "name": "supermemory",
apps\raycast-extension\package-lock.json:7 - "name": "supermemory",

## apps\raycast-extension\package.json
apps\raycast-extension\package.json:3 - "name": "supermemory",
apps\raycast-extension\package.json:4 - "title": "Supermemory",
apps\raycast-extension\package.json:7 - "author": "supermemory",
apps\raycast-extension\package.json:23 - "name": "add-memory",
apps\raycast-extension\package.json:24 - "title": "Add Memory",
apps\raycast-extension\package.json:25 - "subtitle": "Supermemory",
apps\raycast-extension\package.json:26 - "description": "Add text, URLs, or documents to your supermemory knowledge base",
apps\raycast-extension\package.json:32 - "subtitle": "Supermemory",
apps\raycast-extension\package.json:39 - "subtitle": "Supermemory",
apps\raycast-extension\package.json:50 - "description": "Your Supermemory API Key. Get it from https://supermemory.link/raycast",
apps\raycast-extension\package.json:51 - "placeholder": "Enter your Supermemory API Key"

## apps\raycast-extension\README.md
apps\raycast-extension\README.md:3 - A Raycast extension that lets you add memories and search through your Supermemory collection directly from Raycast.
apps\raycast-extension\README.md:8 - 2. Get your API key from [app.supermemory.ai](https://app.supermemory.ai)
apps\raycast-extension\README.md:33 - This extension requires a Supermemory API key. You can get your API key from [supermemory.link/raycast](https://supermemory.link/raycast).

## apps\raycast-extension\src\api.ts
apps\raycast-extension\src\api.ts:10 - export interface Memory {
apps\raycast-extension\src\api.ts:30 - export interface AddMemoryRequest {
apps\raycast-extension\src\api.ts:54 - const API_BASE_URL = "https://api.supermemory.ai"
apps\raycast-extension\src\api.ts:56 - class SupermemoryAPIError extends Error {
apps\raycast-extension\src\api.ts:62 - this.name = "SupermemoryAPIError"
apps\raycast-extension\src\api.ts:99 - "Invalid API key. Please check your API key in preferences. Get a new one from https://supermemory.link/raycast",
apps\raycast-extension\src\api.ts:117 - throw new SupermemoryAPIError("Invalid response format from API")
apps\raycast-extension\src\api.ts:163 - message: "Successfully added project to Supermemory",
apps\raycast-extension\src\api.ts:169 - export async function addMemory(request: AddMemoryRequest): Promise<Memory> {
apps\raycast-extension\src\api.ts:171 - const response = await makeAuthenticatedRequest<Memory>("/v3/documents", {
apps\raycast-extension\src\api.ts:178 - title: "Memory Added",
apps\raycast-extension\src\api.ts:179 - message: "Successfully added memory to Supermemory",
apps\raycast-extension\src\api.ts:186 - title: "Failed to add memory",

## apps\web\middleware.ts
apps\web\middleware.ts:61 - value: "https://app.supermemory.ai",
apps\web\middleware.ts:62 - domain: "supermemory.ai",

## apps\web\next.config.ts
apps\web\next.config.ts:59 - org: "supermemory",

## apps\web\package.json
apps\web\package.json:14 - "sentry:sourcemaps": "_SENTRY_RELEASE=$(sentry-cli releases propose-version) && sentry-cli releases new $_SENTRY_RELEASE --org=supermemory --project=consumer-app && sentry-cli sourcemaps upload --org=supermemory --project=consumer-app --release=$_SENTRY_RELEASE --strip-prefix 'dist/..' dist",

## apps\web\app\manifest.ts
apps\web\app\manifest.ts:5 - name: "Supermemory",
apps\web\app\manifest.ts:6 - short_name: "supermemory",

## apps\web\app\api\og\route.ts
apps\web\app\api\og\route.ts:186 - "Mozilla/5.0 (compatible; SuperMemory/1.0; +https://supermemory.ai)",

## apps\web\components\memory-graph\api-types.ts
apps\web\components\memory-graph\api-types.ts:4 - export interface MemoryEntry {
apps\web\components\memory-graph\api-types.ts:25 - updatesMemoryId?: string | null
apps\web\components\memory-graph\api-types.ts:35 - memory?: string | null
apps\web\components\memory-graph\api-types.ts:36 - memoryRelations?: Array<{
apps\web\components\memory-graph\api-types.ts:38 - targetMemoryId: string
apps\web\components\memory-graph\api-types.ts:40 - parentMemoryId?: string | null
apps\web\components\memory-graph\api-types.ts:43 - export interface DocumentWithMemories {
apps\web\components\memory-graph\api-types.ts:68 - memoryEntries: MemoryEntry[]

## apps\web\components\memory-graph\constants.ts
apps\web\components\memory-graph\constants.ts:24 - export const MEMORY_BORDER = {
apps\web\components\memory-graph\constants.ts:32 - docMemory: "#4A5568",
apps\web\components\memory-graph\constants.ts:41 - docMemory: 0.8,
apps\web\components\memory-graph\constants.ts:46 - docMemoryDistance: 150,
apps\web\components\memory-graph\constants.ts:48 - collisionRadius: { document: 80, memory: 40 },

## apps\web\components\memory-graph\index.ts
apps\web\components\memory-graph\index.ts:2 - export { MemoryGraph } from "./memory-graph"
apps\web\components\memory-graph\index.ts:3 - export type { MemoryGraphProps } from "./memory-graph"

## apps\web\components\memory-graph\types.ts
apps\web\components\memory-graph\types.ts:7 - export type { DocumentsResponse, DocumentWithMemories, MemoryEntry }
apps\web\components\memory-graph\types.ts:11 - export interface GraphApiMemory {
apps\web\components\memory-graph\types.ts:13 - memory: string
apps\web\components\memory-graph\types.ts:21 - parentMemoryId: string | null
apps\web\components\memory-graph\types.ts:22 - rootMemoryId: string | null
apps\web\components\memory-graph\types.ts:36 - memories: GraphApiMemory[]
apps\web\components\memory-graph\types.ts:81 - memories: GraphApiMemory[]
apps\web\components\memory-graph\types.ts:84 - export interface MemoryNodeData {
apps\web\components\memory-graph\types.ts:86 - memory: string
apps\web\components\memory-graph\types.ts:95 - parentMemoryId: string | null
apps\web\components\memory-graph\types.ts:103 - type: "document" | "memory"
apps\web\components\memory-graph\types.ts:106 - data: DocumentNodeData | MemoryNodeData
apps\web\components\memory-graph\types.ts:127 - edgeType: "doc-memory" | "similarity" | "version"

## apps\web\components\memory-graph\canvas\renderer.ts
apps\web\components\memory-graph\canvas\renderer.ts:93 - "doc-memory": { color: "#4A5568", width: 1.5 },
apps\web\components\memory-graph\canvas\renderer.ts:148 - if (edge.edgeType === "doc-memory") {
apps\web\components\memory-graph\canvas\renderer.ts:149 - const mem = src.type === "memory" ? src : tgt
apps\web\components\memory-graph\canvas\renderer.ts:363 - // Batch: memory dots — dark fill, then colored border strokes
apps\web\components\memory-graph\canvas\renderer.ts:467 - nodeType: "document" | "memory",

## apps\web\components\memory-graph\canvas\simulation.ts
apps\web\components\memory-graph\canvas\simulation.ts:22 - .distance((link) => (link.edgeType === "doc-memory" ? 150 : 300))
apps\web\components\memory-graph\canvas\simulation.ts:24 - if (link.edgeType === "doc-memory") return 0.8

## apps\web\components\memory-graph\canvas\version-chain.ts
apps\web\components\memory-graph\canvas\version-chain.ts:1 - import type { GraphApiDocument, GraphApiMemory } from "../types"
apps\web\components\memory-graph\canvas\version-chain.ts:6 - memory: string
apps\web\components\memory-graph\canvas\version-chain.ts:12 - private memoryMap = new Map<string, GraphApiMemory>()
apps\web\components\memory-graph\canvas\version-chain.ts:29 - getChain(memoryId: string): ChainEntry[] | null {
apps\web\components\memory-graph\canvas\version-chain.ts:30 - const cached = this.cache.get(memoryId)
apps\web\components\memory-graph\canvas\version-chain.ts:33 - const mem = this.memoryMap.get(memoryId)
apps\web\components\memory-graph\canvas\version-chain.ts:39 - let current: GraphApiMemory | undefined = mem
apps\web\components\memory-graph\canvas\version-chain.ts:45 - memory: current.memory,
apps\web\components\memory-graph\canvas\version-chain.ts:49 - current = current.parentMemoryId

## apps\web\components\memory-graph\hooks\use-graph-api.ts
apps\web\components\memory-graph\hooks\use-graph-api.ts:4 - import { useCallback, useMemo, useState, useRef, useEffect } from "react"

## apps\web\components\memory-graph\hooks\use-graph-data.ts
apps\web\components\memory-graph\hooks\use-graph-data.ts:3 - import { useMemo, useRef, useEffect } from "react"
apps\web\components\memory-graph\hooks\use-graph-data.ts:4 - import { MEMORY_BORDER, EDGE_COLORS } from "../constants"
apps\web\components\memory-graph\hooks\use-graph-data.ts:17 - const MEMORY_CLUSTER_SPREAD = 150
apps\web\components\memory-graph\hooks\use-graph-data.ts:19 - function getMemoryBorderColor(mem: GraphApiMemory): string {
apps\web\components\memory-graph\hooks\use-graph-data.ts:147 - const memData: MemoryNodeData = {
apps\web\components\memory-graph\hooks\use-graph-data.ts:150 - content: mem.memory,
apps\web\components\memory-graph\hooks\use-graph-data.ts:155 - memNode.borderColor = getMemoryBorderColor(mem)
apps\web\components\memory-graph\hooks\use-graph-data.ts:161 - type: "memory",
apps\web\components\memory-graph\hooks\use-graph-data.ts:162 - x: docNode.x + Math.cos(angle) * MEMORY_CLUSTER_SPREAD,
apps\web\components\memory-graph\hooks\use-graph-data.ts:163 - y: docNode.y + Math.sin(angle) * MEMORY_CLUSTER_SPREAD,
apps\web\components\memory-graph\hooks\use-graph-data.ts:166 - borderColor: getMemoryBorderColor(mem),
apps\web\components\memory-graph\hooks\use-graph-data.ts:193 - edgeType: "doc-memory",
apps\web\components\memory-graph\hooks\use-graph-data.ts:202 - id: `ver-${mem.parentMemoryId}-${mem.id}`,
apps\web\components\memory-graph\hooks\use-graph-data.ts:203 - source: mem.parentMemoryId,

## apps\web\hooks\use-container-tags.ts
apps\web\hooks\use-container-tags.ts:4 - import { useMemo } from "react"

## apps\web\hooks\use-document-mutations.ts
apps\web\hooks\use-document-mutations.ts:10 - import type { DocumentsWithMemoriesResponseSchema } from "@repo/validation/api"
apps\web\hooks\use-document-mutations.ts:15 - type DocumentsResponse = z.infer<typeof DocumentsWithMemoriesResponseSchema>
apps\web\hooks\use-document-mutations.ts:36 - interface OptimisticMemory {
apps\web\hooks\use-document-mutations.ts:48 - memoryEntries: unknown[]
apps\web\hooks\use-document-mutations.ts:54 - memory: OptimisticMemory,
apps\web\hooks\use-document-mutations.ts:69 - documents: [memory, ...p.documents],
apps\web\hooks\use-document-mutations.ts:86 - documents: [memory, ...data.documents],
apps\web\hooks\use-document-mutations.ts:258 - const optimisticMemory: OptimisticMemory = {
apps\web\hooks\use-document-mutations.ts:273 - memoryEntries: [],
apps\web\hooks\use-document-mutations.ts:279 - (old) => addOptimisticMemoryToQueryData(old, optimisticMemory),
apps\web\hooks\use-document-mutations.ts:321 - const optimisticMemory: OptimisticMemory = {
apps\web\hooks\use-document-mutations.ts:336 - memoryEntries: [],
apps\web\hooks\use-document-mutations.ts:342 - (old) => addOptimisticMemoryToQueryData(old, optimisticMemory),
apps\web\hooks\use-document-mutations.ts:463 - const optimisticMemory: OptimisticMemory = {
apps\web\hooks\use-document-mutations.ts:479 - memoryEntries: [],
apps\web\hooks\use-document-mutations.ts:484 - (old) => addOptimisticMemoryToQueryData(old, optimisticMemory),

## apps\web\lib\analytics.ts
apps\web\lib\analytics.ts:16 - memoryAdded: (props: {
apps\web\lib\analytics.ts:22 - }) => safeCapture("memory_added", props),
apps\web\lib\analytics.ts:24 - memoryDetailOpened: () => safeCapture("memory_detail_opened"),
apps\web\lib\analytics.ts:128 - chatMemoryExpanded: (props: { message_id: string }) =>
apps\web\lib\analytics.ts:131 - chatMemoryCollapsed: (props: { message_id: string }) =>

## apps\web\lib\chat-search-memory-results.ts
apps\web\lib\chat-search-memory-results.ts:1 - export interface ChatMemoryCard {
apps\web\lib\chat-search-memory-results.ts:16 - function normalizeOne(raw: unknown): ChatMemoryCard {
apps\web\lib\chat-search-memory-results.ts:23 - (typeof r.memory === "string" && r.memory) ||
apps\web\lib\chat-search-memory-results.ts:71 - ): ChatMemoryCard[] {
apps\web\lib\chat-search-memory-results.ts:82 - export function getMemoryCardDisplay(result: ChatMemoryCard): {

## apps\web\stores\chat.ts
apps\web\stores\chat.ts:181 - name: "supermemory-chats",

## apps\web\stores\index.ts
apps\web\stores\index.ts:5 - import { useCallback, useMemo } from "react"

## packages\agent-framework-python\README.md
packages\agent-framework-python\README.md:3 - Memory tools and middleware for [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) with [Supermemory](https://supermemory.ai) integration.
packages\agent-framework-python\README.md:12 - uv add --prerelease=allow supermemory-agent-framework
packages\agent-framework-python\README.md:35 - The easiest way to add memory capabilities is using the `SupermemoryChatMiddleware`:
packages\agent-framework-python\README.md:40 - from supermemory_agent_framework import (
packages\agent-framework-python\README.md:47 - middleware = SupermemoryChatMiddleware(
packages\agent-framework-python\README.md:49 - options=SupermemoryMiddlewareOptions(
packages\agent-framework-python\README.md:52 - add_memory="always" # Automatically save conversations
packages\agent-framework-python\README.md:58 - name="MemoryAgent",
packages\agent-framework-python\README.md:59 - instructions="You are a helpful assistant with memory.",
packages\agent-framework-python\README.md:74 - The most idiomatic way to add memory in Agent Framework, using the same pattern as the built-in Mem0 integration:
packages\agent-framework-python\README.md:80 - from supermemory_agent_framework import SupermemoryContextProvider
packages\agent-framework-python\README.md:84 - provider = SupermemoryContextProvider(
packages\agent-framework-python\README.md:86 - api_key="your-supermemory-api-key",
packages\agent-framework-python\README.md:93 - name="MemoryAgent",
packages\agent-framework-python\README.md:94 - instructions="You are a helpful assistant with memory.",
packages\agent-framework-python\README.md:111 - For explicit tool-based memory access:
packages\agent-framework-python\README.md:116 - from supermemory_agent_framework import SupermemoryTools
packages\agent-framework-python\README.md:120 - tools = SupermemoryTools(
packages\agent-framework-python\README.md:121 - api_key="your-supermemory-api-key",
packages\agent-framework-python\README.md:127 - name="MemoryAgent",
... and 31 more

## packages\agent-framework-python\test_real.py
packages\agent-framework-python\test_real.py:4 - from supermemory_agent_framework import (
packages\agent-framework-python\test_real.py:13 - conn = AgentSupermemory(
packages\agent-framework-python\test_real.py:14 - api_key=os.environ["SUPERMEMORY_API_KEY"],
packages\agent-framework-python\test_real.py:18 - middleware = SupermemoryChatMiddleware(
packages\agent-framework-python\test_real.py:20 - options=SupermemoryMiddlewareOptions(
packages\agent-framework-python\test_real.py:23 - add_memory="always",
packages\agent-framework-python\test_real.py:27 - tools = SupermemoryTools(conn)
packages\agent-framework-python\test_real.py:30 - name="MemoryAgent",
packages\agent-framework-python\test_real.py:31 - instructions="You are a helpful assistant with memory.",

## packages\agent-framework-python\src\supermemory_agent_framework\connection.py
packages\agent-framework-python\src\supermemory_agent_framework\connection.py:1 - """Shared connection class for Supermemory Agent Framework integrations.
packages\agent-framework-python\src\supermemory_agent_framework\connection.py:12 - import supermemory
packages\agent-framework-python\src\supermemory_agent_framework\connection.py:14 - from .exceptions import SupermemoryConfigurationError
packages\agent-framework-python\src\supermemory_agent_framework\connection.py:17 - class AgentSupermemory:
packages\agent-framework-python\src\supermemory_agent_framework\connection.py:25 - from supermemory_agent_framework import AgentSupermemory
packages\agent-framework-python\src\supermemory_agent_framework\connection.py:27 - conn = AgentSupermemory(
packages\agent-framework-python\src\supermemory_agent_framework\connection.py:45 - api_key: Supermemory API key. Falls back to SUPERMEMORY_API_KEY env var.
packages\agent-framework-python\src\supermemory_agent_framework\connection.py:46 - container_tag: Unique identifier for memory scope (e.g., user ID).
packages\agent-framework-python\src\supermemory_agent_framework\connection.py:50 - resolved_api_key = api_key or os.getenv("SUPERMEMORY_API_KEY")
packages\agent-framework-python\src\supermemory_agent_framework\connection.py:57 - self.client: supermemory.AsyncSupermemory = supermemory.AsyncSupermemory(

## packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:14 - from .connection import AgentSupermemory
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:23 - class SupermemoryContextProvider(BaseContextProvider):
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:36 - from supermemory_agent_framework import (
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:41 - conn = AgentSupermemory(api_key="your-key", container_tag="user-123")
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:43 - provider = SupermemoryContextProvider(
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:50 - name="MemoryAgent",
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:51 - instructions="You are a helpful assistant with memory.",
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:65 - connection: AgentSupermemory,
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:71 - source_id: str = "supermemory",
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:76 - connection: Shared AgentSupermemory connection.
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:77 - mode: Memory retrieval mode - "profile", "query", or "full".
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:79 - context_prompt: Header text prepended to memory content.
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:137 - full_text = wrap_memory_injection(memories_text, self._context_prompt)
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:196 - async def _fetch_memories(self, query_text: str = "") -> str:
packages\agent-framework-python\src\supermemory_agent_framework\context_provider.py:197 - """Fetch and format memories from Supermemory."""

## packages\agent-framework-python\src\supermemory_agent_framework\exceptions.py
packages\agent-framework-python\src\supermemory_agent_framework\exceptions.py:6 - class SupermemoryError(Exception):
packages\agent-framework-python\src\supermemory_agent_framework\exceptions.py:20 - class SupermemoryConfigurationError(SupermemoryError):
packages\agent-framework-python\src\supermemory_agent_framework\exceptions.py:26 - class SupermemoryAPIError(SupermemoryError):
packages\agent-framework-python\src\supermemory_agent_framework\exceptions.py:51 - class SupermemoryMemoryOperationError(SupermemoryError):
packages\agent-framework-python\src\supermemory_agent_framework\exceptions.py:57 - class SupermemoryTimeoutError(SupermemoryError):
packages\agent-framework-python\src\supermemory_agent_framework\exceptions.py:63 - class SupermemoryNetworkError(SupermemoryError):

## packages\agent-framework-python\src\supermemory_agent_framework\middleware.py
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:11 - import supermemory
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:14 - from .connection import AgentSupermemory
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:29 - class SupermemoryMiddlewareOptions:
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:34 - add_memory: Literal["always", "never"] = "never"
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:118 - async def _build_memories_text(
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:122 - client: supermemory.AsyncSupermemory,
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:125 - """Build formatted memories text from Supermemory API."""
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:145 - "memory_count_static": len(static),
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:146 - "memory_count_dynamic": len(dynamic),
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:182 - async def _save_memory(
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:183 - client: supermemory.AsyncSupermemory,
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:205 - "memory_id": getattr(response, "id", None),
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:210 - "Network error while saving memory", {"error": str(network_error)}
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:216 - logger.error("Error saving memory", {"error": str(error)})
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:220 - class SupermemoryChatMiddleware(ChatMiddleware):
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:224 - fetches relevant memories from Supermemory, and injects them into
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:230 - from supermemory_agent_framework import (
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:236 - conn = AgentSupermemory(api_key="your-key", container_tag="user-123")
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:238 - middleware = SupermemoryChatMiddleware(
packages\agent-framework-python\src\supermemory_agent_framework\middleware.py:240 - options=SupermemoryMiddlewareOptions(
... and 13 more

## packages\agent-framework-python\src\supermemory_agent_framework\tools.py
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:11 - from .connection import AgentSupermemory
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:14 - class MemorySearchResult(TypedDict, total=False):
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:15 - """Result type for memory search operations."""
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:23 - class MemoryAddResult(TypedDict, total=False):
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:24 - """Result type for memory add operations."""
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:27 - memory: Any | None
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:40 - class SupermemoryTools:
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:47 - from supermemory_agent_framework import AgentSupermemory, SupermemoryTools
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:49 - conn = AgentSupermemory(api_key="your-key", container_tag="user-123")
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:50 - tools = SupermemoryTools(conn)
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:60 - def __init__(self, connection: AgentSupermemory) -> None:
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:64 - async def search_memories(
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:84 - result: MemorySearchResult = {
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:94 - async def add_memory(
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:96 - memory: Annotated[
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:104 - content=memory,
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:108 - result: MemoryAddResult = {
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:110 - "memory": response,
packages\agent-framework-python\src\supermemory_agent_framework\tools.py:161 - name="add_memory",

## packages\agent-framework-python\src\supermemory_agent_framework\utils.py
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:9 - def wrap_memory_injection(memories: str, context_prompt: str = "") -> str:
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:13 - '<supermemory context="user-memories" readonly>\n'
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:42 - log_message = f"[supermemory] {message}"
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:71 - class DeduplicatedMemories:
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:82 - def deduplicate_memories(
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:87 - """Deduplicates memory items across sources. Priority: Static > Dynamic > Search Results."""
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:92 - def extract_memory_text(item: Any) -> Optional[str]:
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:96 - memory = item.get("memory")
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:97 - if isinstance(memory, str):
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:98 - trimmed = memory.strip()
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:110 - memory = extract_memory_text(item)
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:111 - if memory is not None:
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:117 - memory = extract_memory_text(item)
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:118 - if memory is not None and memory not in seen_memories:
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:124 - memory = extract_memory_text(item)
packages\agent-framework-python\src\supermemory_agent_framework\utils.py:125 - if memory is not None and memory not in seen_memories:

## packages\agent-framework-python\tests\test_connection.py
packages\agent-framework-python\tests\test_connection.py:1 - """Tests for AgentSupermemory connection class."""
packages\agent-framework-python\tests\test_connection.py:8 - from supermemory_agent_framework import AgentSupermemory, SupermemoryConfigurationError
packages\agent-framework-python\tests\test_connection.py:11 - class TestAgentSupermemory:
packages\agent-framework-python\tests\test_connection.py:15 - with pytest.raises(SupermemoryConfigurationError):
packages\agent-framework-python\tests\test_connection.py:19 - conn = AgentSupermemory(api_key="test-key")
packages\agent-framework-python\tests\test_connection.py:22 - @patch.dict(os.environ, {"SUPERMEMORY_API_KEY": "env-key"})
packages\agent-framework-python\tests\test_connection.py:24 - conn = AgentSupermemory()
packages\agent-framework-python\tests\test_connection.py:28 - conn = AgentSupermemory(api_key="test-key")
packages\agent-framework-python\tests\test_connection.py:32 - conn = AgentSupermemory(api_key="test-key", container_tag="user-123")
packages\agent-framework-python\tests\test_connection.py:36 - conn = AgentSupermemory(api_key="test-key")
packages\agent-framework-python\tests\test_connection.py:42 - conn = AgentSupermemory(api_key="test-key", conversation_id="conv-abc")
packages\agent-framework-python\tests\test_connection.py:47 - conn = AgentSupermemory(
packages\agent-framework-python\tests\test_connection.py:54 - conn = AgentSupermemory(api_key="test-key")
packages\agent-framework-python\tests\test_connection.py:58 - conn = AgentSupermemory(api_key="test-key")

## packages\agent-framework-python\tests\test_context_provider.py
packages\agent-framework-python\tests\test_context_provider.py:5 - from supermemory_agent_framework import AgentSupermemory, SupermemoryContextProvider
packages\agent-framework-python\tests\test_context_provider.py:17 - provider = SupermemoryContextProvider(conn)
packages\agent-framework-python\tests\test_context_provider.py:19 - assert provider.source_id == "supermemory"
packages\agent-framework-python\tests\test_context_provider.py:23 - provider = SupermemoryContextProvider(conn)
packages\agent-framework-python\tests\test_context_provider.py:28 - provider = SupermemoryContextProvider(
packages\agent-framework-python\tests\test_context_provider.py:35 - provider = SupermemoryContextProvider(conn)
packages\agent-framework-python\tests\test_context_provider.py:40 - provider = SupermemoryContextProvider(conn, mode="profile")
packages\agent-framework-python\tests\test_context_provider.py:45 - provider = SupermemoryContextProvider(conn)
packages\agent-framework-python\tests\test_context_provider.py:50 - provider = SupermemoryContextProvider(conn)
packages\agent-framework-python\tests\test_context_provider.py:56 - provider = SupermemoryContextProvider(conn)
packages\agent-framework-python\tests\test_context_provider.py:63 - provider = SupermemoryContextProvider(conn)
packages\agent-framework-python\tests\test_context_provider.py:77 - provider = SupermemoryContextProvider(conn)
packages\agent-framework-python\tests\test_context_provider.py:87 - provider = SupermemoryContextProvider(conn)
packages\agent-framework-python\tests\test_context_provider.py:99 - provider = SupermemoryContextProvider(conn)
packages\agent-framework-python\tests\test_context_provider.py:112 - provider = SupermemoryContextProvider(conn)

## packages\agent-framework-python\tests\test_middleware.py
packages\agent-framework-python\tests\test_middleware.py:5 - from supermemory_agent_framework import (
packages\agent-framework-python\tests\test_middleware.py:10 - from supermemory_agent_framework.middleware import (
packages\agent-framework-python\tests\test_middleware.py:71 - options = SupermemoryMiddlewareOptions()
packages\agent-framework-python\tests\test_middleware.py:74 - assert options.add_memory == "never"
packages\agent-framework-python\tests\test_middleware.py:77 - options = SupermemoryMiddlewareOptions(
packages\agent-framework-python\tests\test_middleware.py:80 - add_memory="always",
packages\agent-framework-python\tests\test_middleware.py:84 - assert options.add_memory == "always"
packages\agent-framework-python\tests\test_middleware.py:90 - middleware = SupermemoryChatMiddleware(conn)
packages\agent-framework-python\tests\test_middleware.py:95 - middleware = SupermemoryChatMiddleware(conn)
packages\agent-framework-python\tests\test_middleware.py:100 - middleware = SupermemoryChatMiddleware(conn)
packages\agent-framework-python\tests\test_middleware.py:106 - middleware = SupermemoryChatMiddleware(conn)
packages\agent-framework-python\tests\test_middleware.py:112 - middleware = SupermemoryChatMiddleware(conn)

## packages\agent-framework-python\tests\test_tools.py
packages\agent-framework-python\tests\test_tools.py:5 - from supermemory_agent_framework import AgentSupermemory, SupermemoryTools
packages\agent-framework-python\tests\test_tools.py:14 - class TestSupermemoryTools:
packages\agent-framework-python\tests\test_tools.py:17 - tools = SupermemoryTools(conn)
packages\agent-framework-python\tests\test_tools.py:22 - tools = SupermemoryTools(conn)
packages\agent-framework-python\tests\test_tools.py:27 - tools = SupermemoryTools(conn)
packages\agent-framework-python\tests\test_tools.py:34 - tools = SupermemoryTools(conn)
packages\agent-framework-python\tests\test_tools.py:43 - tools = SupermemoryTools(conn)
packages\agent-framework-python\tests\test_tools.py:48 - tools = SupermemoryTools(conn)

## packages\agent-framework-python\tests\test_utils.py
packages\agent-framework-python\tests\test_utils.py:5 - from supermemory_agent_framework.utils import (
packages\agent-framework-python\tests\test_utils.py:14 - class TestDeduplicateMemories:
packages\agent-framework-python\tests\test_utils.py:23 - static=[{"memory": "User likes Python"}],
packages\agent-framework-python\tests\test_utils.py:31 - static=[{"memory": "User likes Python"}],
packages\agent-framework-python\tests\test_utils.py:32 - dynamic=[{"memory": "User likes Python"}, {"memory": "User works remotely"}],
packages\agent-framework-python\tests\test_utils.py:33 - search_results=[{"memory": "User likes Python"}, {"memory": "User prefers async"}],
packages\agent-framework-python\tests\test_utils.py:55 - static=[None, {"memory": "valid"}],

## packages\ai-sdk\package.json
packages\ai-sdk\package.json:2 - "name": "@supermemory/ai-sdk",
packages\ai-sdk\package.json:16 - "supermemory": "^3.0.0-alpha.26",
packages\ai-sdk\package.json:34 - "url": "https://github.com/supermemoryai/supermemory",

## packages\ai-sdk\README.md
packages\ai-sdk\README.md:22 - - **Memory Tools**: Search, add, and fetch memories from supermemory using AI agents
packages\ai-sdk\README.md:32 - const supermemoryOpenai = createOpenAI({
packages\ai-sdk\README.md:33 - baseUrl: 'https://api.supermemory.ai/v3/https://api.openai.com/v1',
packages\ai-sdk\README.md:36 - 'x-supermemory-api-key': 'supermemory-api-key',
packages\ai-sdk\README.md:42 - model: supermemoryOpenai('gpt-5'),
packages\ai-sdk\README.md:54 - const supermemoryApiKey = process.env.SUPERMEMORY_API_KEY!
packages\ai-sdk\README.md:58 - const supermemoryOpenai = createOpenAI({
packages\ai-sdk\README.md:59 - baseUrl: 'https://api.supermemory.ai/v3/https://api.openai.com/v1',
packages\ai-sdk\README.md:62 - 'x-supermemory-api-key': 'supermemory-api-key',
packages\ai-sdk\README.md:69 - model: supermemoryOpenai('gpt-5'),
packages\ai-sdk\README.md:110 - import { supermemoryTools } from '@supermemory/ai-sdk'
packages\ai-sdk\README.md:121 - baseUrl: 'https://api.supermemory.com',
packages\ai-sdk\README.md:136 - import { supermemoryTools } from '@supermemory/ai-sdk'
packages\ai-sdk\README.md:140 - const supermemoryApiKey = process.env.SUPERMEMORY_API_KEY!
packages\ai-sdk\README.md:170 - interface SupermemoryConfig {
packages\ai-sdk\README.md:171 - // Optional: Base URL for API calls (default: https://api.supermemory.com)
packages\ai-sdk\README.md:184 - If you're running a self-hosted supermemory instance:
packages\ai-sdk\README.md:187 - const tools = supermemoryTools('your-api-key', {
packages\ai-sdk\README.md:188 - baseUrl: 'https://your-supermemory-instance.com',
packages\ai-sdk\README.md:210 - const addResult = await tools.addMemory.execute({
... and 6 more

## packages\ai-sdk\src\tools.test.ts
packages\ai-sdk\src\tools.test.ts:4 - import { type SupermemoryToolsConfig, supermemoryTools } from "./tools"
packages\ai-sdk\src\tools.test.ts:8 - describe("supermemoryTools", () => {
packages\ai-sdk\src\tools.test.ts:10 - const testApiKey = process.env.SUPERMEMORY_API_KEY
packages\ai-sdk\src\tools.test.ts:23 - const testBaseUrl = process.env.SUPERMEMORY_BASE_URL ?? undefined
packages\ai-sdk\src\tools.test.ts:36 - const config: SupermemoryToolsConfig = {}
packages\ai-sdk\src\tools.test.ts:37 - const tools = supermemoryTools(testApiKey, config)
packages\ai-sdk\src\tools.test.ts:45 - const config: SupermemoryToolsConfig = {
packages\ai-sdk\src\tools.test.ts:48 - const tools = supermemoryTools(testApiKey, config)
packages\ai-sdk\src\tools.test.ts:56 - const config: SupermemoryToolsConfig = {
packages\ai-sdk\src\tools.test.ts:59 - const tools = supermemoryTools(testApiKey, config)
packages\ai-sdk\src\tools.test.ts:67 - const config: SupermemoryToolsConfig = {
packages\ai-sdk\src\tools.test.ts:70 - const tools = supermemoryTools(testApiKey, config)
packages\ai-sdk\src\tools.test.ts:115 - const tools = supermemoryTools(testApiKey, {
packages\ai-sdk\src\tools.test.ts:134 - addMemory: tools.addMemory,
packages\ai-sdk\src\tools.test.ts:143 - const addMemoryCall = result.toolCalls.find(
packages\ai-sdk\src\tools.test.ts:144 - (call) => call.toolName === "addMemory",

## packages\ai-sdk\src\tools.ts
packages\ai-sdk\src\tools.ts:2 - import Supermemory from "supermemory"
packages\ai-sdk\src\tools.ts:9 - export interface SupermemoryToolsConfig {
packages\ai-sdk\src\tools.ts:20 - config?: SupermemoryToolsConfig,
packages\ai-sdk\src\tools.ts:22 - const client = new Supermemory({
packages\ai-sdk\src\tools.ts:79 - const addMemory = tool({
packages\ai-sdk\src\tools.ts:83 - memory: z
packages\ai-sdk\src\tools.ts:89 - execute: async ({ memory }) => {
packages\ai-sdk\src\tools.ts:94 - content: memory,
packages\ai-sdk\src\tools.ts:101 - memory: response,
packages\ai-sdk\src\tools.ts:121 - config?: SupermemoryToolsConfig,
packages\ai-sdk\src\tools.ts:123 - const { searchMemories } = supermemoryTools(apiKey, config)
packages\ai-sdk\src\tools.ts:127 - export const addMemoryTool = (
packages\ai-sdk\src\tools.ts:129 - config?: SupermemoryToolsConfig,
packages\ai-sdk\src\tools.ts:131 - const { addMemory } = supermemoryTools(apiKey, config)

## packages\docs-test\package.json
packages\docs-test\package.json:19 - "@supermemory/tools": "workspace:*",
packages\docs-test\package.json:23 - "supermemory": "latest",

## packages\docs-test\run.ts
packages\docs-test\run.ts:44 - { name: "claude-memory", type: "ts" as const },

## packages\docs-test\tests\integrations\ai-sdk.ts
packages\docs-test\tests\integrations\ai-sdk.ts:9 - type MemoryPromptData,
packages\docs-test\tests\integrations\ai-sdk.ts:10 - } from "@supermemory/tools/ai-sdk"
packages\docs-test\tests\integrations\ai-sdk.ts:16 - const model = withSupermemory(openai("gpt-4"), "user-123")
packages\docs-test\tests\integrations\ai-sdk.ts:20 - const modelWithAdd = withSupermemory(openai("gpt-4"), "user-123", {
packages\docs-test\tests\integrations\ai-sdk.ts:21 - addMemory: "always",
packages\docs-test\tests\integrations\ai-sdk.ts:26 - const modelVerbose = withSupermemory(openai("gpt-4"), "user-123", {
packages\docs-test\tests\integrations\ai-sdk.ts:35 - const profileModel = withSupermemory(openai("gpt-4"), "user-123", {
packages\docs-test\tests\integrations\ai-sdk.ts:40 - const queryModel = withSupermemory(openai("gpt-4"), "user-123", {
packages\docs-test\tests\integrations\ai-sdk.ts:45 - const fullModel = withSupermemory(openai("gpt-4"), "user-123", {
packages\docs-test\tests\integrations\ai-sdk.ts:56 - const claudePrompt = (data: MemoryPromptData) =>
packages\docs-test\tests\integrations\ai-sdk.ts:64 - const model = withSupermemory(
packages\docs-test\tests\integrations\ai-sdk.ts:76 - console.log("\n=== Memory Tools ===")
packages\docs-test\tests\integrations\ai-sdk.ts:79 - const tools = supermemoryTools("YOUR_API_KEY")
packages\docs-test\tests\integrations\ai-sdk.ts:86 - const addTool = addMemoryTool("API_KEY")
packages\docs-test\tests\integrations\ai-sdk.ts:92 - addMemory: addTool,

## packages\docs-test\tests\integrations\claude-memory.ts
packages\docs-test\tests\integrations\claude-memory.ts:2 - import { createClaudeMemoryTool } from "@supermemory/tools/claude-memory"
packages\docs-test\tests\integrations\claude-memory.ts:8 - const tool = createClaudeMemoryTool(process.env.SUPERMEMORY_API_KEY!, {
packages\docs-test\tests\integrations\claude-memory.ts:14 - const toolFull = createClaudeMemoryTool(process.env.SUPERMEMORY_API_KEY!, {
packages\docs-test\tests\integrations\claude-memory.ts:17 - memoryContainerTag: "my_memory_prefix",
packages\docs-test\tests\integrations\claude-memory.ts:24 - async function testMethods(tool: ReturnType<typeof createClaudeMemoryTool>) {
packages\docs-test\tests\integrations\claude-memory.ts:35 - async function testCommands(tool: ReturnType<typeof createClaudeMemoryTool>) {
packages\docs-test\tests\integrations\claude-memory.ts:74 - tool: ReturnType<typeof createClaudeMemoryTool>,

## packages\docs-test\tests\integrations\openai-sdk.py
packages\docs-test\tests\integrations\openai-sdk.py:8 - def test_openai_with_supermemory():
packages\docs-test\tests\integrations\openai-sdk.py:10 - print("=== OpenAI SDK with Supermemory ===")
packages\docs-test\tests\integrations\openai-sdk.py:19 - from supermemory import Supermemory
packages\docs-test\tests\integrations\openai-sdk.py:21 - memory_client = Supermemory()
packages\docs-test\tests\integrations\openai-sdk.py:27 - profile = memory_client.profile(
packages\docs-test\tests\integrations\openai-sdk.py:60 - from supermemory import Supermemory
packages\docs-test\tests\integrations\openai-sdk.py:62 - memory_client = Supermemory()

## packages\docs-test\tests\integrations\openai-sdk.ts
packages\docs-test\tests\integrations\openai-sdk.ts:3 - import { withSupermemory } from "@supermemory/tools/openai"
packages\docs-test\tests\integrations\openai-sdk.ts:18 - const client = withSupermemory(openai, "docs-test-openai")
packages\docs-test\tests\integrations\openai-sdk.ts:22 - const clientWithOptions = withSupermemory(openai, "docs-test-openai", {
packages\docs-test\tests\integrations\openai-sdk.ts:24 - addMemory: "always",
packages\docs-test\tests\integrations\openai-sdk.ts:31 - console.log("\n=== Chat Completion with Memory ===")
packages\docs-test\tests\integrations\openai-sdk.ts:39 - const client = withSupermemory(openai, "docs-test-openai", {
packages\docs-test\tests\integrations\openai-sdk.ts:41 - addMemory: "always",

## packages\docs-test\tests\python\quickstart.py
packages\docs-test\tests\python\quickstart.py:6 - from supermemory import Supermemory
packages\docs-test\tests\python\quickstart.py:8 - client = Supermemory()
packages\docs-test\tests\python\quickstart.py:25 - def get_memory(r):
packages\docs-test\tests\python\quickstart.py:26 - if hasattr(r, 'memory'):

## packages\docs-test\tests\python\sdk.py
packages\docs-test\tests\python\sdk.py:6 - import supermemory
packages\docs-test\tests\python\sdk.py:7 - from supermemory import Supermemory
packages\docs-test\tests\python\sdk.py:11 - client = Supermemory()
packages\docs-test\tests\python\sdk.py:77 - except supermemory.APIConnectionError:
packages\docs-test\tests\python\sdk.py:79 - except supermemory.RateLimitError:
packages\docs-test\tests\python\sdk.py:81 - except supermemory.APIStatusError:
packages\docs-test\tests\python\sdk.py:90 - client2 = Supermemory(max_retries=0)
packages\docs-test\tests\python\sdk.py:94 - client3 = Supermemory(timeout=20.0)
packages\docs-test\tests\python\sdk.py:98 - client4 = Supermemory(timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0))
packages\docs-test\tests\python\sdk.py:113 - memory = response.parse()
packages\docs-test\tests\python\sdk.py:114 - print(f"✓ parse(): {memory.id}")
packages\docs-test\tests\python\sdk.py:129 - with Supermemory() as temp_client:

## packages\docs-test\tests\python\search.py
packages\docs-test\tests\python\search.py:3 - from supermemory import Supermemory
packages\docs-test\tests\python\search.py:7 - client = Supermemory()

## packages\docs-test\tests\python\user_profiles.py
packages\docs-test\tests\python\user_profiles.py:4 - from supermemory import Supermemory
packages\docs-test\tests\python\user_profiles.py:8 - client = Supermemory()
packages\docs-test\tests\python\user_profiles.py:26 - def test_profile_with_memories():
packages\docs-test\tests\python\user_profiles.py:28 - print("\n=== Profile with Memory Context ===")
packages\docs-test\tests\python\user_profiles.py:54 - def get_memory(r):
packages\docs-test\tests\python\user_profiles.py:55 - if hasattr(r, 'memory'):

## packages\docs-test\tests\typescript\quickstart.ts
packages\docs-test\tests\typescript\quickstart.ts:2 - import Supermemory from "supermemory"
packages\docs-test\tests\typescript\quickstart.ts:4 - const client = new Supermemory()

## packages\docs-test\tests\typescript\sdk.ts
packages\docs-test\tests\typescript\sdk.ts:3 - import Supermemory, { toFile } from "supermemory"
packages\docs-test\tests\typescript\sdk.ts:5 - const client = new Supermemory()
packages\docs-test\tests\typescript\sdk.ts:79 - const clientWithRetries = new Supermemory({ maxRetries: 0 })
packages\docs-test\tests\typescript\sdk.ts:83 - const clientWithTimeout = new Supermemory({ timeout: 20 * 1000 })
packages\docs-test\tests\typescript\sdk.ts:111 - const params: Supermemory.AddParams = {
packages\docs-test\tests\typescript\sdk.ts:114 - const response: Supermemory.AddResponse = await client.add(params)

## packages\docs-test\tests\typescript\search.ts
packages\docs-test\tests\typescript\search.ts:2 - import Supermemory from "supermemory"
packages\docs-test\tests\typescript\search.ts:4 - const client = new Supermemory()
packages\docs-test\tests\typescript\search.ts:97 - return results.results.map((r) => r.memory || r.chunk).join("\n\n")

## packages\docs-test\tests\typescript\user-profiles.ts
packages\docs-test\tests\typescript\user-profiles.ts:2 - import Supermemory from "supermemory"
packages\docs-test\tests\typescript\user-profiles.ts:4 - const client = new Supermemory()
packages\docs-test\tests\typescript\user-profiles.ts:25 - console.log("\n=== Profile with Memory Context ===")

## packages\hooks\use-onboarding-storage.ts
packages\hooks\use-onboarding-storage.ts:5 - const ONBOARDING_STORAGE_KEY = "supermemory_onboarding_completed"

## packages\hooks\use-org-onboarding.ts
packages\hooks\use-org-onboarding.ts:3 - import { useCallback, useMemo } from "react"
packages\hooks\use-org-onboarding.ts:29 - // Optimistic update: update in-memory state immediately
packages\hooks\use-org-onboarding.ts:54 - // Optimistic update: update in-memory state immediately

## packages\lib\api.ts
packages\lib\api.ts:61 - "@get/analytics/memory": {
packages\lib\api.ts:62 - output: AnalyticsMemoryResponseSchema,
packages\lib\api.ts:137 - input: MemoryAddSchema,
packages\lib\api.ts:138 - output: MemoryResponseSchema,
packages\lib\api.ts:231 - baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://api.supermemory.ai"}/v3`,

## packages\lib\auth.middleware.ts
packages\lib\auth.middleware.ts:13 - baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://api.supermemory.ai",

## packages\lib\auth.ts
packages\lib\auth.ts:13 - baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://api.supermemory.ai",

## packages\lib\constants.ts
packages\lib\constants.ts:3 - const SEARCH_MEMORY_SHORTCUT_URL =
packages\lib\constants.ts:5 - const ADD_MEMORY_SHORTCUT_URL =
packages\lib\constants.ts:7 - const RAYCAST_EXTENSION_URL = "https://www.raycast.com/supermemory/supermemory"
packages\lib\constants.ts:9 - "https://chromewebstore.google.com/detail/supermemory/afpgkkipfdpeaflnpoaffkcankadgjfc"

## packages\lib\queries.ts
packages\lib\queries.ts:4 - import type { DocumentsWithMemoriesResponseSchema } from "../validation/api"
packages\lib\queries.ts:7 - type DocumentsResponse = z.infer<typeof DocumentsWithMemoriesResponseSchema>
packages\lib\queries.ts:8 - type DocumentWithMemories = DocumentsResponse["documents"][0]

## packages\lib\similarity.ts
packages\lib\similarity.ts:62 - export const calculateDocumentMemorySimilarity = (
packages\lib\similarity.ts:64 - memoryEmbedding: number[] | null,
packages\lib\similarity.ts:74 - const similarity = cosineSimilarity(documentEmbedding, memoryEmbedding)

## packages\lib\utils.ts
packages\lib\utils.ts:8 - export const isSelfHosted = process.env.NEXT_PUBLIC_HOST_ID !== "supermemory"

## packages\memory-graph\CHANGELOG.md
packages\memory-graph\CHANGELOG.md:12 - **Terminal 1** - Build memory-graph in watch mode:
packages\memory-graph\CHANGELOG.md:43 - - Shows: title, summary, type, memory count, URL, date, ID
packages\memory-graph\CHANGELOG.md:98 - - `maxNodes` prop limits total memory nodes (default: 500 in playground)

## packages\memory-graph\package.json
packages\memory-graph\package.json:2 - "name": "@supermemory/memory-graph",
packages\memory-graph\package.json:4 - "description": "Interactive graph visualization component for Supermemory - visualize and explore your memory connections",
packages\memory-graph\package.json:6 - "main": "./dist/memory-graph.cjs",
packages\memory-graph\package.json:7 - "module": "./dist/memory-graph.js",
packages\memory-graph\package.json:13 - "default": "./dist/memory-graph.js"
packages\memory-graph\package.json:17 - "default": "./dist/memory-graph.cjs"
packages\memory-graph\package.json:20 - "./styles.css": "./dist/memory-graph.css",
packages\memory-graph\package.json:46 - "author": "Supermemory",
packages\memory-graph\package.json:50 - "url": "https://github.com/supermemoryai/supermemory",
packages\memory-graph\package.json:51 - "directory": "packages/memory-graph"
packages\memory-graph\package.json:54 - "url": "https://github.com/supermemoryai/supermemory/issues"
packages\memory-graph\package.json:56 - "homepage": "https://github.com/supermemoryai/supermemory/tree/main/packages/memory-graph#readme",

## packages\memory-graph\README.md
packages\memory-graph\README.md:5 - [![npm version](https://img.shields.io/npm/v/@supermemory/memory-graph.svg)](https://www.npmjs.com/package/@supermemory/memory-graph)
packages\memory-graph\README.md:21 - import { MemoryGraph } from '@supermemory/memory-graph';
packages\memory-graph\README.md:22 - import type { DocumentWithMemories } from '@supermemory/memory-graph';
packages\memory-graph\README.md:72 - Full documentation available at [docs.supermemory.ai](https://docs.supermemory.ai):
packages\memory-graph\README.md:74 - - [Overview](https://docs.supermemory.ai/memory-graph/overview) - What it is and when to use it
packages\memory-graph\README.md:75 - - [Installation](https://docs.supermemory.ai/memory-graph/installation) - Setup and requirements
packages\memory-graph\README.md:76 - - [Quick Start](https://docs.supermemory.ai/memory-graph/quickstart) - Get running in 2 minutes
packages\memory-graph\README.md:77 - - [API Reference](https://docs.supermemory.ai/memory-graph/api-reference) - Complete API documentation
packages\memory-graph\README.md:78 - - [Examples](https://docs.supermemory.ai/memory-graph/examples) - Common use cases
packages\memory-graph\README.md:79 - - [Troubleshooting](https://docs.supermemory.ai/memory-graph/troubleshooting) - Common issues
packages\memory-graph\README.md:92 - - [GitHub](https://github.com/supermemoryai/supermemory/tree/main/packages/memory-graph)
packages\memory-graph\README.md:93 - - [Issues](https://github.com/supermemoryai/supermemory/issues)
packages\memory-graph\README.md:94 - - [Supermemory](https://supermemory.ai)

## packages\memory-graph\vite.config.ts
packages\memory-graph\vite.config.ts:34 - chunk.code = chunk.code.replace(/__MEMORY_GRAPH_CSS__/g, escapedCss)
packages\memory-graph\vite.config.ts:47 - name: "MemoryGraph",
packages\memory-graph\vite.config.ts:50 - if (format === "es") return "memory-graph.js"
packages\memory-graph\vite.config.ts:51 - if (format === "cjs") return "memory-graph.cjs"

## packages\memory-graph\src\api-types.ts
packages\memory-graph\src\api-types.ts:4 - export interface MemoryEntry {
packages\memory-graph\src\api-types.ts:25 - updatesMemoryId?: string | null
packages\memory-graph\src\api-types.ts:35 - memory?: string | null
packages\memory-graph\src\api-types.ts:36 - memoryRelations?: Array<{
packages\memory-graph\src\api-types.ts:38 - targetMemoryId: string
packages\memory-graph\src\api-types.ts:40 - parentMemoryId?: string | null
packages\memory-graph\src\api-types.ts:43 - export interface DocumentWithMemories {
packages\memory-graph\src\api-types.ts:68 - memoryEntries: MemoryEntry[]

## packages\memory-graph\src\constants.ts
packages\memory-graph\src\constants.ts:15 - memory: {
packages\memory-graph\src\constants.ts:24 - memory: "rgba(148, 163, 184, 0.35)", // Very subtle
packages\memory-graph\src\constants.ts:55 - clusterRadius: 300, // Memory "bubble" size around a doc - smaller bubble
packages\memory-graph\src\constants.ts:59 - memoryClusterRadius: 300,
packages\memory-graph\src\constants.ts:72 - docMemory: 0.8, // Strong for doc-memory connections
packages\memory-graph\src\constants.ts:84 - memory: 40, // Collision radius for memory nodes

## packages\memory-graph\src\types.ts
packages\memory-graph\src\types.ts:8 - export type { DocumentsResponse, DocumentWithMemories, MemoryEntry }
packages\memory-graph\src\types.ts:12 - type: "document" | "memory"
packages\memory-graph\src\types.ts:15 - data: DocumentWithMemories | MemoryEntry
packages\memory-graph\src\types.ts:27 - export type MemoryRelation = "updates" | "extends" | "derives"
packages\memory-graph\src\types.ts:42 - edgeType: "doc-memory" | "doc-doc" | "version"
packages\memory-graph\src\types.ts:43 - relationType?: MemoryRelation
packages\memory-graph\src\types.ts:49 - spaceMemoryCounts: Record<string, number>
packages\memory-graph\src\types.ts:89 - export interface MemoryGraphProps {
packages\memory-graph\src\types.ts:131 - memoryLimit?: number
packages\memory-graph\src\types.ts:132 - /** Maximum total number of memory nodes to display across all documents (default: unlimited) */

## packages\memory-graph\src\components\legend.css.ts
packages\memory-graph\src\components\legend.css.ts:229 - export const memoryNode = style({
packages\memory-graph\src\components\legend.css.ts:238 - export const memoryNodeOlder = style({

## packages\memory-graph\src\components\loading-indicator.css.ts
packages\memory-graph\src\components\loading-indicator.css.ts:47 - color: themeContract.colors.memory.border,

## packages\memory-graph\src\components\node-detail-panel.css.ts
packages\memory-graph\src\components\node-detail-panel.css.ts:56 - export const headerIconMemory = style({

## packages\memory-graph\src\components\node-popover.css.ts
packages\memory-graph\src\components\node-popover.css.ts:55 - export const headerIconMemory = style({

## packages\memory-graph\src\hooks\use-force-simulation.ts
packages\memory-graph\src\hooks\use-force-simulation.ts:64 - if (link.edgeType === "doc-memory") {
packages\memory-graph\src\hooks\use-force-simulation.ts:89 - : FORCE_CONFIG.collisionRadius.memory,

## packages\memory-graph\src\hooks\use-graph-data.ts
packages\memory-graph\src\hooks\use-graph-data.ts:8 - import { useMemo, useRef, useEffect } from "react"
packages\memory-graph\src\hooks\use-graph-data.ts:33 - memoryLimit?: number,
packages\memory-graph\src\hooks\use-graph-data.ts:47 - doc.memoryEntries.forEach((mem) => {
packages\memory-graph\src\hooks\use-graph-data.ts:76 - : doc.memoryEntries.filter(
packages\memory-graph\src\hooks\use-graph-data.ts:77 - (memory) =>
packages\memory-graph\src\hooks\use-graph-data.ts:78 - (memory.spaceContainerTag ?? memory.spaceId ?? "default") ===
packages\memory-graph\src\hooks\use-graph-data.ts:96 - memoryEntries: memories,
packages\memory-graph\src\hooks\use-graph-data.ts:112 - const limitedMemories = doc.memoryEntries.slice(0, memoriesPerDoc)
packages\memory-graph\src\hooks\use-graph-data.ts:116 - memoryEntries: limitedMemories,
packages\memory-graph\src\hooks\use-graph-data.ts:133 - const currentMemCount = doc.memoryEntries.length
packages\memory-graph\src\hooks\use-graph-data.ts:134 - const originalMemCount = originalDoc.memoryEntries.filter(
packages\memory-graph\src\hooks\use-graph-data.ts:145 - const additionalMems = doc.memoryEntries.slice(
packages\memory-graph\src\hooks\use-graph-data.ts:151 - memoryEntries: originalDoc.memoryEntries
packages\memory-graph\src\hooks\use-graph-data.ts:184 - memoryEntries: doc.memoryEntries.slice(0, 1),
packages\memory-graph\src\hooks\use-graph-data.ts:190 - else if (selectedSpace !== "all" && memoryLimit && memoryLimit > 0) {
packages\memory-graph\src\hooks\use-graph-data.ts:193 - memoryEntries: doc.memoryEntries.slice(0, memoryLimit),
packages\memory-graph\src\hooks\use-graph-data.ts:329 - const memoryNodeMap = new Map<string, GraphNode>()
packages\memory-graph\src\hooks\use-graph-data.ts:332 - doc.memoryEntries.forEach((memory, memIndex) => {
packages\memory-graph\src\hooks\use-graph-data.ts:333 - const memoryId = `${memory.id}`
packages\memory-graph\src\hooks\use-graph-data.ts:334 - const customMemPos = nodePositions.get(memoryId)
... and 21 more

## packages\memory-graph\src\hooks\use-graph-interactions.ts
packages\memory-graph\src\hooks\use-graph-interactions.ts:133 - if (draggedNode?.type === "memory") {
packages\memory-graph\src\hooks\use-graph-interactions.ts:135 - const memoryData = draggedNode.data as any // MemoryEntry type
packages\memory-graph\src\hooks\use-graph-interactions.ts:140 - (m: any) => m.id === memoryData.id,

## packages\memory-graph\src\lib\inject-styles.ts
packages\memory-graph\src\lib\inject-styles.ts:7 - declare const __MEMORY_GRAPH_CSS__: string
packages\memory-graph\src\lib\inject-styles.ts:34 - style.textContent = __MEMORY_GRAPH_CSS__

## packages\memory-graph\src\lib\similarity.ts
packages\memory-graph\src\lib\similarity.ts:62 - export const calculateDocumentMemorySimilarity = (
packages\memory-graph\src\lib\similarity.ts:64 - memoryEmbedding: number[] | null,
packages\memory-graph\src\lib\similarity.ts:74 - const similarity = cosineSimilarity(documentEmbedding, memoryEmbedding)

## packages\memory-graph\src\styles\sprinkles.css.ts
packages\memory-graph\src\styles\sprinkles.css.ts:145 - memoryPrimary: themeContract.colors.memory.primary,
packages\memory-graph\src\styles\sprinkles.css.ts:146 - memorySecondary: themeContract.colors.memory.secondary,
packages\memory-graph\src\styles\sprinkles.css.ts:147 - memoryAccent: themeContract.colors.memory.accent,
packages\memory-graph\src\styles\sprinkles.css.ts:152 - memoryBorder: themeContract.colors.memory.border,

## packages\memory-graph\src\styles\theme.css.ts
packages\memory-graph\src\styles\theme.css.ts:24 - memory: {
packages\memory-graph\src\styles\theme.css.ts:34 - memory: null,
packages\memory-graph\src\styles\theme.css.ts:147 - memory: {
packages\memory-graph\src\styles\theme.css.ts:156 - memory: "rgba(148, 163, 184, 0.3)", // Very subtle

## packages\openai-sdk-python\README.md
packages\openai-sdk-python\README.md:5 - This package provides both **automatic memory injection middleware** and **manual memory tools** for the official [OpenAI Python SDK](https://github.com/openai/openai-python) using [Supermemory](https://supermemory.ai) capabilities.
packages\openai-sdk-python\README.md:33 - The easiest way to add memory capabilities to your OpenAI client is using the `with_supermemory()` wrapper:
packages\openai-sdk-python\README.md:38 - from supermemory_openai import with_supermemory, OpenAIMiddlewareOptions
packages\openai-sdk-python\README.md:45 - openai_with_memory = with_supermemory(
packages\openai-sdk-python\README.md:51 - add_memory="always" # Automatically save conversations
packages\openai-sdk-python\README.md:56 - response = await openai_with_memory.chat.completions.create(
packages\openai-sdk-python\README.md:73 - from supermemory_openai import SupermemoryTools, execute_memory_tool_calls
packages\openai-sdk-python\README.md:80 - tools = SupermemoryTools(
packages\openai-sdk-python\README.md:81 - api_key="your-supermemory-api-key",
packages\openai-sdk-python\README.md:103 - tool_results = await execute_memory_tool_calls(
packages\openai-sdk-python\README.md:104 - api_key="your-supermemory-api-key",
packages\openai-sdk-python\README.md:121 - from supermemory_openai import with_supermemory
packages\openai-sdk-python\README.md:125 - openai_with_memory = with_supermemory(openai, "user-123")
packages\openai-sdk-python\README.md:128 - response = openai_with_memory.chat.completions.create(
packages\openai-sdk-python\README.md:136 - **Background Task Management**: When `add_memory="always"`, memory storage happens in background tasks. Use context managers or manual cleanup to ensure tasks complete:
packages\openai-sdk-python\README.md:140 - async with with_supermemory(openai, "user-123") as client:
packages\openai-sdk-python\README.md:145 - client = with_supermemory(openai, "user-123")
packages\openai-sdk-python\README.md:154 - The middleware supports three different modes for memory injection:
packages\openai-sdk-python\README.md:160 - openai_with_memory = with_supermemory(
packages\openai-sdk-python\README.md:171 - openai_with_memory = with_supermemory(
... and 38 more

## packages\openai-sdk-python\test_integration.py
packages\openai-sdk-python\test_integration.py:12 - from supermemory_openai import (
packages\openai-sdk-python\test_integration.py:30 - if not os.getenv("SUPERMEMORY_API_KEY"):
packages\openai-sdk-python\test_integration.py:38 - openai_with_memory = with_supermemory(
packages\openai-sdk-python\test_integration.py:44 - add_memory="never"  # Don't save test messages
packages\openai-sdk-python\test_integration.py:49 - async with openai_with_memory as client:
packages\openai-sdk-python\test_integration.py:63 - except SupermemoryConfigurationError as e:
packages\openai-sdk-python\test_integration.py:65 - except SupermemoryAPIError as e:
packages\openai-sdk-python\test_integration.py:66 - print(f"⚠️  Supermemory API error: {e}")
packages\openai-sdk-python\test_integration.py:80 - if not os.getenv("SUPERMEMORY_API_KEY"):
packages\openai-sdk-python\test_integration.py:88 - openai_with_memory = with_supermemory(
packages\openai-sdk-python\test_integration.py:98 - with openai_with_memory as client:
packages\openai-sdk-python\test_integration.py:112 - except SupermemoryConfigurationError as e:
packages\openai-sdk-python\test_integration.py:114 - except SupermemoryAPIError as e:
packages\openai-sdk-python\test_integration.py:115 - print(f"⚠️  Supermemory API error: {e}")
packages\openai-sdk-python\test_integration.py:133 - except SupermemoryConfigurationError as e:
packages\openai-sdk-python\test_integration.py:144 - if not os.getenv("SUPERMEMORY_API_KEY"):
packages\openai-sdk-python\test_integration.py:157 - wrapped_client = with_supermemory(
packages\openai-sdk-python\test_integration.py:161 - add_memory="always",
packages\openai-sdk-python\test_integration.py:193 - print("   export SUPERMEMORY_API_KEY='your-supermemory-key'")

## packages\openai-sdk-python\src\supermemory_openai\exceptions.py
packages\openai-sdk-python\src\supermemory_openai\exceptions.py:6 - class SupermemoryError(Exception):
packages\openai-sdk-python\src\supermemory_openai\exceptions.py:20 - class SupermemoryConfigurationError(SupermemoryError):
packages\openai-sdk-python\src\supermemory_openai\exceptions.py:25 - class SupermemoryAPIError(SupermemoryError):
packages\openai-sdk-python\src\supermemory_openai\exceptions.py:50 - class SupermemoryMemoryOperationError(SupermemoryError):
packages\openai-sdk-python\src\supermemory_openai\exceptions.py:55 - class SupermemoryTimeoutError(SupermemoryError):
packages\openai-sdk-python\src\supermemory_openai\exceptions.py:60 - class SupermemoryNetworkError(SupermemoryError):

## packages\openai-sdk-python\src\supermemory_openai\middleware.py
packages\openai-sdk-python\src\supermemory_openai\middleware.py:8 - import supermemory
packages\openai-sdk-python\src\supermemory_openai\middleware.py:38 - add_memory: Literal["always", "never"] = "never"
packages\openai-sdk-python\src\supermemory_openai\middleware.py:41 - class SupermemoryProfileSearch:
packages\openai-sdk-python\src\supermemory_openai\middleware.py:42 - """Type for Supermemory profile search response."""
packages\openai-sdk-python\src\supermemory_openai\middleware.py:49 - async def supermemory_profile_search(
packages\openai-sdk-python\src\supermemory_openai\middleware.py:53 - ) -> SupermemoryProfileSearch:
packages\openai-sdk-python\src\supermemory_openai\middleware.py:66 - "https://api.supermemory.ai/v4/profile",
packages\openai-sdk-python\src\supermemory_openai\middleware.py:89 - "https://api.supermemory.ai/v4/profile",
packages\openai-sdk-python\src\supermemory_openai\middleware.py:119 - memories_response = await supermemory_profile_search(
packages\openai-sdk-python\src\supermemory_openai\middleware.py:125 - memory_count_static = len(profile.get("static", []))
packages\openai-sdk-python\src\supermemory_openai\middleware.py:126 - memory_count_dynamic = len(profile.get("dynamic", []))
packages\openai-sdk-python\src\supermemory_openai\middleware.py:127 - memory_count_search = len(search_results_data.get("results", []))
packages\openai-sdk-python\src\supermemory_openai\middleware.py:133 - "memory_count_static": memory_count_static,
packages\openai-sdk-python\src\supermemory_openai\middleware.py:134 - "memory_count_dynamic": memory_count_dynamic,
packages\openai-sdk-python\src\supermemory_openai\middleware.py:150 - "original": memory_count_static,
packages\openai-sdk-python\src\supermemory_openai\middleware.py:154 - "original": memory_count_dynamic,
packages\openai-sdk-python\src\supermemory_openai\middleware.py:158 - "original": memory_count_search,
packages\openai-sdk-python\src\supermemory_openai\middleware.py:211 - async def add_memory_tool(
packages\openai-sdk-python\src\supermemory_openai\middleware.py:212 - client: supermemory.Supermemory,
packages\openai-sdk-python\src\supermemory_openai\middleware.py:240 - "memory_id": response.id,
... and 27 more

## packages\openai-sdk-python\src\supermemory_openai\tools.py
packages\openai-sdk-python\src\supermemory_openai\tools.py:6 - import supermemory
packages\openai-sdk-python\src\supermemory_openai\tools.py:12 - from supermemory.types import (
packages\openai-sdk-python\src\supermemory_openai\tools.py:17 - from supermemory.types.search_execute_response import Result
packages\openai-sdk-python\src\supermemory_openai\tools.py:26 - class SupermemoryToolsConfig(TypedDict, total=False):
packages\openai-sdk-python\src\supermemory_openai\tools.py:37 - # Type aliases using inferred types from supermemory package
packages\openai-sdk-python\src\supermemory_openai\tools.py:38 - MemoryObject = Union[MemoryGetResponse, MemoryAddResponse]
packages\openai-sdk-python\src\supermemory_openai\tools.py:41 - class MemorySearchResult(TypedDict, total=False):
packages\openai-sdk-python\src\supermemory_openai\tools.py:42 - """Result type for memory search operations."""
packages\openai-sdk-python\src\supermemory_openai\tools.py:50 - class MemoryAddResult(TypedDict, total=False):
packages\openai-sdk-python\src\supermemory_openai\tools.py:51 - """Result type for memory add operations."""
packages\openai-sdk-python\src\supermemory_openai\tools.py:54 - memory: Optional[MemoryAddResponse]
packages\openai-sdk-python\src\supermemory_openai\tools.py:59 - MEMORY_TOOL_SCHEMAS: Dict[str, ChatCompletionFunctionToolParam] = {
packages\openai-sdk-python\src\supermemory_openai\tools.py:89 - "add_memory": {
packages\openai-sdk-python\src\supermemory_openai\tools.py:90 - "name": "add_memory",
packages\openai-sdk-python\src\supermemory_openai\tools.py:97 - "memory": {
packages\openai-sdk-python\src\supermemory_openai\tools.py:105 - "required": ["memory"],
packages\openai-sdk-python\src\supermemory_openai\tools.py:111 - class SupermemoryTools:
packages\openai-sdk-python\src\supermemory_openai\tools.py:114 - def __init__(self, api_key: str, config: Optional[SupermemoryToolsConfig] = None):
packages\openai-sdk-python\src\supermemory_openai\tools.py:118 - api_key: Supermemory API key
packages\openai-sdk-python\src\supermemory_openai\tools.py:128 - self.client = supermemory.Supermemory(**client_kwargs)
... and 45 more

## packages\openai-sdk-python\src\supermemory_openai\utils.py
packages\openai-sdk-python\src\supermemory_openai\utils.py:40 - log_message = f"[supermemory] {message}"
packages\openai-sdk-python\src\supermemory_openai\utils.py:190 - class DeduplicatedMemories:
packages\openai-sdk-python\src\supermemory_openai\utils.py:199 - def deduplicate_memories(
packages\openai-sdk-python\src\supermemory_openai\utils.py:205 - Deduplicates memory items across sources. Priority: Static > Dynamic > Search Results.
packages\openai-sdk-python\src\supermemory_openai\utils.py:212 - def extract_memory_text(item: Any) -> Optional[str]:
packages\openai-sdk-python\src\supermemory_openai\utils.py:216 - memory = item.get("memory")
packages\openai-sdk-python\src\supermemory_openai\utils.py:217 - if isinstance(memory, str):
packages\openai-sdk-python\src\supermemory_openai\utils.py:218 - trimmed = memory.strip()
packages\openai-sdk-python\src\supermemory_openai\utils.py:230 - memory = extract_memory_text(item)
packages\openai-sdk-python\src\supermemory_openai\utils.py:231 - if memory is not None:
packages\openai-sdk-python\src\supermemory_openai\utils.py:237 - memory = extract_memory_text(item)
packages\openai-sdk-python\src\supermemory_openai\utils.py:238 - if memory is not None and memory not in seen_memories:
packages\openai-sdk-python\src\supermemory_openai\utils.py:244 - memory = extract_memory_text(item)
packages\openai-sdk-python\src\supermemory_openai\utils.py:245 - if memory is not None and memory not in seen_memories:
packages\openai-sdk-python\src\supermemory_openai\utils.py:274 - "results": [{"memory": "Likes coffee"}]

## packages\openai-sdk-python\tests\test_middleware.py
packages\openai-sdk-python\tests\test_middleware.py:15 - from supermemory_openai import (
packages\openai-sdk-python\tests\test_middleware.py:23 - from supermemory_openai import (
packages\openai-sdk-python\tests\test_middleware.py:79 - def mock_supermemory_response():
packages\openai-sdk-python\tests\test_middleware.py:84 - {"memory": "User prefers Python for development"},
packages\openai-sdk-python\tests\test_middleware.py:85 - {"memory": "Lives in San Francisco"}
packages\openai-sdk-python\tests\test_middleware.py:88 - {"memory": "Recently asked about AI frameworks"}
packages\openai-sdk-python\tests\test_middleware.py:93 - {"memory": "User likes machine learning projects"},
packages\openai-sdk-python\tests\test_middleware.py:94 - {"memory": "Has experience with FastAPI"}
packages\openai-sdk-python\tests\test_middleware.py:103 - def test_with_supermemory_basic(self, mock_openai_client):
packages\openai-sdk-python\tests\test_middleware.py:105 - with patch.dict(os.environ, {"SUPERMEMORY_API_KEY": "test-key"}):
packages\openai-sdk-python\tests\test_middleware.py:106 - wrapped_client = with_supermemory(mock_openai_client, "user-123")
packages\openai-sdk-python\tests\test_middleware.py:113 - def test_with_supermemory_with_options(self, mock_openai_client):
packages\openai-sdk-python\tests\test_middleware.py:119 - add_memory="always"
packages\openai-sdk-python\tests\test_middleware.py:122 - with patch.dict(os.environ, {"SUPERMEMORY_API_KEY": "test-key"}):
packages\openai-sdk-python\tests\test_middleware.py:123 - wrapped_client = with_supermemory(mock_openai_client, "user-123", options)
packages\openai-sdk-python\tests\test_middleware.py:128 - assert wrapped_client._options.add_memory == "always"
packages\openai-sdk-python\tests\test_middleware.py:132 - from supermemory_openai.exceptions import SupermemoryConfigurationError
packages\openai-sdk-python\tests\test_middleware.py:135 - with pytest.raises(SupermemoryConfigurationError, match="SUPERMEMORY_API_KEY"):
packages\openai-sdk-python\tests\test_middleware.py:142 - with patch.dict(os.environ, {"SUPERMEMORY_API_KEY": "test-key"}):
packages\openai-sdk-python\tests\test_middleware.py:143 - wrapped_client = with_supermemory(mock_openai_client, "user-123")
... and 89 more

## packages\openai-sdk-python\tests\test_tools.py
packages\openai-sdk-python\tests\test_tools.py:16 - from supermemory_openai_sdk import (
packages\openai-sdk-python\tests\test_tools.py:49 - """Get test Supermemory API key from environment."""
packages\openai-sdk-python\tests\test_tools.py:50 - api_key = os.getenv("SUPERMEMORY_API_KEY")
packages\openai-sdk-python\tests\test_tools.py:82 - config: SupermemoryToolsConfig = {}
packages\openai-sdk-python\tests\test_tools.py:83 - tools = SupermemoryTools(test_api_key, config)
packages\openai-sdk-python\tests\test_tools.py:93 - tools = create_supermemory_tools(
packages\openai-sdk-python\tests\test_tools.py:110 - config: SupermemoryToolsConfig = {
packages\openai-sdk-python\tests\test_tools.py:113 - tools = SupermemoryTools(test_api_key, config)
packages\openai-sdk-python\tests\test_tools.py:122 - config: SupermemoryToolsConfig = {
packages\openai-sdk-python\tests\test_tools.py:125 - tools = SupermemoryTools(test_api_key, config)
packages\openai-sdk-python\tests\test_tools.py:134 - config: SupermemoryToolsConfig = {
packages\openai-sdk-python\tests\test_tools.py:137 - tools = SupermemoryTools(test_api_key, config)
packages\openai-sdk-python\tests\test_tools.py:150 - definitions = get_memory_tool_definitions()
packages\openai-sdk-python\tests\test_tools.py:153 - assert len(definitions) == 2  # Currently has search_memories and add_memory
packages\openai-sdk-python\tests\test_tools.py:165 - (d for d in definitions if d["function"]["name"] == "add_memory"), None
packages\openai-sdk-python\tests\test_tools.py:173 - tools = SupermemoryTools(test_api_key)
packages\openai-sdk-python\tests\test_tools.py:175 - helper_definitions = get_memory_tool_definitions()
packages\openai-sdk-python\tests\test_tools.py:180 - class TestMemoryOperations:
packages\openai-sdk-python\tests\test_tools.py:184 - async def test_search_memories(self, test_api_key: str, test_base_url: str):
packages\openai-sdk-python\tests\test_tools.py:186 - config: SupermemoryToolsConfig = {
... and 19 more

## packages\pipecat-sdk-python\Agents.md
packages\pipecat-sdk-python\Agents.md:7 - **Tech Stack:** Python >=3.10, Pipecat, Supermemory SDK
packages\pipecat-sdk-python\Agents.md:17 - Place `SupermemoryPipecatService` between context aggregator and LLM in the pipeline:
packages\pipecat-sdk-python\Agents.md:20 - from supermemory_pipecat import SupermemoryPipecatService
packages\pipecat-sdk-python\Agents.md:22 - memory = SupermemoryPipecatService(
packages\pipecat-sdk-python\Agents.md:42 - memory = SupermemoryPipecatService(
packages\pipecat-sdk-python\Agents.md:43 - api_key="...",             # Or use SUPERMEMORY_API_KEY env var
packages\pipecat-sdk-python\Agents.md:46 - params=SupermemoryPipecatService.InputParams(

## packages\pipecat-sdk-python\README.md
packages\pipecat-sdk-python\README.md:3 - Memory-enhanced conversational AI pipelines with [Supermemory](https://supermemory.ai) and [Pipecat](https://github.com/pipecat-ai/pipecat).
packages\pipecat-sdk-python\README.md:17 - from supermemory_pipecat import SupermemoryPipecatService
packages\pipecat-sdk-python\README.md:20 - memory = SupermemoryPipecatService(
packages\pipecat-sdk-python\README.md:21 - api_key=os.getenv("SUPERMEMORY_API_KEY"),
packages\pipecat-sdk-python\README.md:45 - | `api_key`    | str         | No       | Supermemory API key (or set `SUPERMEMORY_API_KEY` env var) |
packages\pipecat-sdk-python\README.md:52 - from supermemory_pipecat import SupermemoryPipecatService
packages\pipecat-sdk-python\README.md:54 - memory = SupermemoryPipecatService(
packages\pipecat-sdk-python\README.md:57 - params=SupermemoryPipecatService.InputParams(
packages\pipecat-sdk-python\README.md:84 - Only the last user message is sent to Supermemory:
packages\pipecat-sdk-python\README.md:116 - from supermemory_pipecat import SupermemoryPipecatService
packages\pipecat-sdk-python\README.md:139 - memory = SupermemoryPipecatService(

## packages\pipecat-sdk-python\src\supermemory_pipecat\exceptions.py
packages\pipecat-sdk-python\src\supermemory_pipecat\exceptions.py:6 - class SupermemoryPipecatError(Exception):
packages\pipecat-sdk-python\src\supermemory_pipecat\exceptions.py:20 - class ConfigurationError(SupermemoryPipecatError):
packages\pipecat-sdk-python\src\supermemory_pipecat\exceptions.py:24 - class MemoryRetrievalError(SupermemoryPipecatError):
packages\pipecat-sdk-python\src\supermemory_pipecat\exceptions.py:28 - class MemoryStorageError(SupermemoryPipecatError):
packages\pipecat-sdk-python\src\supermemory_pipecat\exceptions.py:32 - class APIError(SupermemoryPipecatError):
packages\pipecat-sdk-python\src\supermemory_pipecat\exceptions.py:57 - class NetworkError(SupermemoryPipecatError):

## packages\pipecat-sdk-python\src\supermemory_pipecat\service.py
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:23 - from .exceptions import ConfigurationError, MemoryRetrievalError
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:24 - from .utils import deduplicate_memories, format_memories_to_text, get_last_user_message
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:27 - import supermemory
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:29 - supermemory = None  # type: ignore
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:32 - MEMORY_TAG_START = "<user_memories>"
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:33 - MEMORY_TAG_END = "</user_memories>"
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:34 - MEMORY_TAG_PATTERN = re.compile(r"<user_memories>.*?</user_memories>", re.DOTALL)
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:37 - class SupermemoryPipecatService(FrameProcessor):
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:41 - memories from Supermemory, and enhances the context before passing downstream.
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:45 - from supermemory_pipecat import SupermemoryPipecatService
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:47 - memory = SupermemoryPipecatService(
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:48 - api_key=os.getenv("SUPERMEMORY_API_KEY"),
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:60 - system_prompt: Prefix text for memory context.
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:61 - mode: Memory retrieval mode - "profile", "query", or "full".
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:83 - api_key: Supermemory API key. Falls back to SUPERMEMORY_API_KEY env var.
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:84 - user_id: The user ID - used as container_tag for memory scoping.
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:86 - params: Configuration parameters for memory retrieval.
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:87 - base_url: Optional custom base URL for Supermemory API.
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:94 - self.api_key = api_key or os.getenv("SUPERMEMORY_API_KEY")
packages\pipecat-sdk-python\src\supermemory_pipecat\service.py:106 - self.params = params or SupermemoryPipecatService.InputParams()
... and 26 more

## packages\pipecat-sdk-python\src\supermemory_pipecat\utils.py
packages\pipecat-sdk-python\src\supermemory_pipecat\utils.py:52 - def deduplicate_memories(
packages\pipecat-sdk-python\src\supermemory_pipecat\utils.py:60 - static: List of static memory strings.
packages\pipecat-sdk-python\src\supermemory_pipecat\utils.py:61 - dynamic: List of dynamic memory strings.
packages\pipecat-sdk-python\src\supermemory_pipecat\utils.py:62 - search_results: List of search result dicts with 'memory' and 'updatedAt'.
packages\pipecat-sdk-python\src\supermemory_pipecat\utils.py:66 - def unique_strings(memories: List[str]) -> List[str]:
packages\pipecat-sdk-python\src\supermemory_pipecat\utils.py:77 - memory = r.get("memory", "")
packages\pipecat-sdk-python\src\supermemory_pipecat\utils.py:78 - if memory and memory not in seen:
packages\pipecat-sdk-python\src\supermemory_pipecat\utils.py:90 - def format_memories_to_text(
packages\pipecat-sdk-python\src\supermemory_pipecat\utils.py:120 - memory = item.get("memory", "")

## packages\pipecat-sdk-python\src\supermemory_pipecat\__init__.py
packages\pipecat-sdk-python\src\supermemory_pipecat\__init__.py:8 - from supermemory_pipecat import SupermemoryPipecatService
packages\pipecat-sdk-python\src\supermemory_pipecat\__init__.py:11 - memory = SupermemoryPipecatService(
packages\pipecat-sdk-python\src\supermemory_pipecat\__init__.py:12 - api_key=os.getenv("SUPERMEMORY_API_KEY"),
packages\pipecat-sdk-python\src\supermemory_pipecat\__init__.py:36 - from .service import SupermemoryPipecatService

## packages\tools\package.json
packages\tools\package.json:2 - "name": "@supermemory/tools",
packages\tools\package.json:5 - "description": "Memory tools for AI SDK and OpenAI function calling with supermemory",
packages\tools\package.json:19 - "supermemory": "^3.0.0-alpha.26",
packages\tools\package.json:45 - "./claude-memory": "./dist/claude-memory.js",
packages\tools\package.json:51 - "url": "https://github.com/supermemoryai/supermemory",

## packages\tools\README.md
packages\tools\README.md:23 - import { supermemoryTools, searchMemoriesTool, addMemoryTool } from "@supermemory/tools/ai-sdk"
packages\tools\README.md:32 - const tools = supermemoryTools(process.env.SUPERMEMORY_API_KEY!, {
packages\tools\README.md:49 - const searchTool = searchMemoriesTool(process.env.SUPERMEMORY_API_KEY!, {
packages\tools\README.md:53 - const addTool = addMemoryTool(process.env.SUPERMEMORY_API_KEY!, {
packages\tools\README.md:62 - - **Per-turn caching**: Memory injection is cached for tool-call continuations within the same user turn. The middleware detects when the AI SDK is continuing a multi-step flow (e.g., after a tool call) and reuses the cached memories instead of making redundant API calls. A fresh fetch occurs on each new user message turn.
packages\tools\README.md:66 - import { withSupermemory } from "@supermemory/tools/ai-sdk"
packages\tools\README.md:69 - const modelWithMemory = withSupermemory(openai("gpt-5"), "user_id_life")
packages\tools\README.md:72 - model: modelWithMemory,
packages\tools\README.md:81 - Use the `conversationId` option to group messages into a single document for contextual memory generation:
packages\tools\README.md:85 - import { withSupermemory } from "@supermemory/tools/ai-sdk"
packages\tools\README.md:88 - const modelWithMemory = withSupermemory(openai("gpt-5"), "user_id_life", {
packages\tools\README.md:93 - model: modelWithMemory,
packages\tools\README.md:102 - Enable verbose logging to see detailed information about memory search and transformation:
packages\tools\README.md:106 - import { withSupermemory } from "@supermemory/tools/ai-sdk"
packages\tools\README.md:109 - const modelWithMemory = withSupermemory(openai("gpt-5"), "user_id_life", {
packages\tools\README.md:114 - model: modelWithMemory,
packages\tools\README.md:123 - [supermemory] Searching memories for container: user_id_life
packages\tools\README.md:124 - [supermemory] User message: where do i live?
packages\tools\README.md:125 - [supermemory] System prompt exists: false
packages\tools\README.md:127 - [supermemory] Memory content: You live in San Francisco, California. Your address is 123 Main Street...
... and 97 more

## packages\tools\test-supermemory.ts
packages\tools\test-supermemory.ts:2 - import { withSupermemory } from "./src/openai"
packages\tools\test-supermemory.ts:6 - // SUPERMEMORY_API_KEY=your_supermemory_api_key
packages\tools\test-supermemory.ts:13 - const openaiWithSupermemory = withSupermemory(openai, "test_user_123", {
packages\tools\test-supermemory.ts:16 - addMemory: "always", // Auto-save conversations as memories
packages\tools\test-supermemory.ts:21 - // 	const response = await openaiWithSupermemory.chat.completions.create({
packages\tools\test-supermemory.ts:33 - const response = await openaiWithSupermemory.chat.completions.create({

## packages\tools\src\ai-sdk.ts
packages\tools\src\ai-sdk.ts:1 - import Supermemory from "supermemory"
packages\tools\src\ai-sdk.ts:10 - import type { SupermemoryToolsConfig } from "./types"
packages\tools\src\ai-sdk.ts:15 - config?: SupermemoryToolsConfig,
packages\tools\src\ai-sdk.ts:17 - const client = new Supermemory({
packages\tools\src\ai-sdk.ts:81 - export const addMemoryTool = (
packages\tools\src\ai-sdk.ts:83 - config?: SupermemoryToolsConfig,
packages\tools\src\ai-sdk.ts:85 - const client = new Supermemory({
packages\tools\src\ai-sdk.ts:93 - description: TOOL_DESCRIPTIONS.addMemory,
packages\tools\src\ai-sdk.ts:95 - memory: z.string().describe(PARAMETER_DESCRIPTIONS.memory),
packages\tools\src\ai-sdk.ts:97 - execute: async ({ memory }) => {
packages\tools\src\ai-sdk.ts:102 - content: memory,
packages\tools\src\ai-sdk.ts:109 - memory: response,
packages\tools\src\ai-sdk.ts:123 - config?: SupermemoryToolsConfig,
packages\tools\src\ai-sdk.ts:125 - const client = new Supermemory({
packages\tools\src\ai-sdk.ts:167 - config?: SupermemoryToolsConfig,
packages\tools\src\ai-sdk.ts:169 - const client = new Supermemory({
packages\tools\src\ai-sdk.ts:225 - config?: SupermemoryToolsConfig,
packages\tools\src\ai-sdk.ts:227 - const client = new Supermemory({
packages\tools\src\ai-sdk.ts:257 - config?: SupermemoryToolsConfig,
packages\tools\src\ai-sdk.ts:259 - const client = new Supermemory({
... and 16 more

## packages\tools\src\claude-memory-simple-example.ts
packages\tools\src\claude-memory-simple-example.ts:8 - import { createClaudeMemoryTool } from "./claude-memory"
packages\tools\src\claude-memory-simple-example.ts:14 - const memoryTool = createClaudeMemoryTool(process.env.SUPERMEMORY_API_KEY!, {
packages\tools\src\claude-memory-simple-example.ts:18 - async function chatWithMemory(userMessage: string) {
packages\tools\src\claude-memory-simple-example.ts:24 - tools: [{ type: "memory_20250818", name: "memory" }],
packages\tools\src\claude-memory-simple-example.ts:31 - if (block.type === "tool_use" && block.name === "memory") {
packages\tools\src\claude-memory-simple-example.ts:32 - const toolResult = await memoryTool.handleCommandForToolResult(
packages\tools\src\claude-memory-simple-example.ts:50 - tools: [{ type: "memory_20250818", name: "memory" }],
packages\tools\src\claude-memory-simple-example.ts:62 - const response = await chatWithMemory(

## packages\tools\src\claude-memory.ts
packages\tools\src\claude-memory.ts:1 - import Supermemory from "supermemory"
packages\tools\src\claude-memory.ts:3 - import type { SupermemoryToolsConfig } from "./types"
packages\tools\src\claude-memory.ts:6 - export interface ClaudeMemoryConfig extends SupermemoryToolsConfig {
packages\tools\src\claude-memory.ts:7 - memoryContainerTag?: string
packages\tools\src\claude-memory.ts:10 - export interface MemoryCommand {
packages\tools\src\claude-memory.ts:27 - export interface MemoryResponse {
packages\tools\src\claude-memory.ts:33 - export interface MemoryToolResult {
packages\tools\src\claude-memory.ts:44 - export class ClaudeMemoryTool {
packages\tools\src\claude-memory.ts:45 - private client: Supermemory
packages\tools\src\claude-memory.ts:47 - private memoryContainerPrefix: string
packages\tools\src\claude-memory.ts:60 - constructor(apiKey: string, config?: ClaudeMemoryConfig) {
packages\tools\src\claude-memory.ts:61 - this.client = new Supermemory({
packages\tools\src\claude-memory.ts:67 - this.memoryContainerPrefix = config?.memoryContainerTag || "claude_memory"
packages\tools\src\claude-memory.ts:71 - this.containerTags = [...baseContainerTags, this.memoryContainerPrefix]
packages\tools\src\claude-memory.ts:77 - async handleCommand(command: MemoryCommand): Promise<MemoryResponse> {
packages\tools\src\claude-memory.ts:151 - command: MemoryCommand,
packages\tools\src\claude-memory.ts:153 - ): Promise<MemoryToolResult> {
packages\tools\src\claude-memory.ts:172 - ): Promise<MemoryResponse> {
packages\tools\src\claude-memory.ts:187 - private async listDirectory(dirPath: string): Promise<MemoryResponse> {
packages\tools\src\claude-memory.ts:256 - ): Promise<MemoryResponse> {
... and 13 more

## packages\tools\src\conversations-client.ts
packages\tools\src\conversations-client.ts:68 - *   apiKey: process.env.SUPERMEMORY_API_KEY,
packages\tools\src\conversations-client.ts:75 - const baseUrl = params.baseUrl || "https://api.supermemory.ai"

## packages\tools\src\index.ts
packages\tools\src\index.ts:1 - export type { SupermemoryToolsConfig } from "./types"

## packages\tools\src\tools-shared.ts
packages\tools\src\tools-shared.ts:9 - addMemory:
packages\tools\src\tools-shared.ts:19 - memoryForget:
packages\tools\src\tools-shared.ts:20 - "Forget (soft delete) a specific memory by ID or content match. The memory is marked as forgotten but not permanently deleted. Use when user wants to remove specific information from their profile.",
packages\tools\src\tools-shared.ts:29 - memory:
packages\tools\src\tools-shared.ts:40 - memoryId: "The unique identifier of the memory entry",
packages\tools\src\tools-shared.ts:41 - memoryContent:
packages\tools\src\tools-shared.ts:43 - reason: "Optional reason for forgetting this memory",
packages\tools\src\tools-shared.ts:73 - * Memory item interface representing a single memory with optional metadata
packages\tools\src\tools-shared.ts:75 - export interface MemoryItem {
packages\tools\src\tools-shared.ts:76 - memory: string
packages\tools\src\tools-shared.ts:81 - * Profile data structure containing memory items from different sources.
packages\tools\src\tools-shared.ts:84 - export interface ProfileWithMemories {
packages\tools\src\tools-shared.ts:85 - static?: Array<MemoryItem | string>
packages\tools\src\tools-shared.ts:86 - dynamic?: Array<MemoryItem | string>
packages\tools\src\tools-shared.ts:87 - searchResults?: Array<MemoryItem | string>
packages\tools\src\tools-shared.ts:93 - export interface DeduplicatedMemories {
packages\tools\src\tools-shared.ts:103 - * @param data - Profile data with memory items from different sources
packages\tools\src\tools-shared.ts:109 - *   static: [{ memory: "User likes TypeScript" }],
packages\tools\src\tools-shared.ts:110 - *   dynamic: [{ memory: "User likes TypeScript" }, { memory: "User works remotely" }],
packages\tools\src\tools-shared.ts:111 - *   searchResults: [{ memory: "User prefers async/await" }]
... and 9 more

## packages\tools\src\tools.test.ts
packages\tools\src\tools.test.ts:6 - import type { SupermemoryToolsConfig } from "./types"
packages\tools\src\tools.test.ts:10 - describe("@supermemory/tools", () => {
packages\tools\src\tools.test.ts:12 - const testApiKey = process.env.SUPERMEMORY_API_KEY
packages\tools\src\tools.test.ts:25 - const testBaseUrl = process.env.SUPERMEMORY_BASE_URL ?? undefined
packages\tools\src\tools.test.ts:31 - const config: SupermemoryToolsConfig = {}
packages\tools\src\tools.test.ts:32 - const tools = aiSdk.supermemoryTools(testApiKey, config)
packages\tools\src\tools.test.ts:45 - const config: SupermemoryToolsConfig = {
packages\tools\src\tools.test.ts:48 - const tools = aiSdk.supermemoryTools(testApiKey, config)
packages\tools\src\tools.test.ts:64 - const addTool = aiSdk.addMemoryTool(testApiKey, {
packages\tools\src\tools.test.ts:79 - const forgetTool = aiSdk.memoryForgetTool(testApiKey, {
packages\tools\src\tools.test.ts:130 - const tools = aiSdk.supermemoryTools(testApiKey, {
packages\tools\src\tools.test.ts:149 - addMemory: tools.addMemory,
packages\tools\src\tools.test.ts:162 - const tools = aiSdk.supermemoryTools(testApiKey, {
packages\tools\src\tools.test.ts:194 - const tools = aiSdk.supermemoryTools(testApiKey, {
packages\tools\src\tools.test.ts:268 - it("should create memoryForgetTool", async () => {
packages\tools\src\tools.test.ts:269 - const forgetTool = aiSdk.memoryForgetTool(testApiKey, {
packages\tools\src\tools.test.ts:284 - const tools = openAi.supermemoryTools(testApiKey, {
packages\tools\src\tools.test.ts:297 - const addFunction = openAi.createAddMemoryFunction(testApiKey, {
packages\tools\src\tools.test.ts:326 - const addTool = definitions.find((d) => d.function.name === "addMemory")
packages\tools\src\tools.test.ts:368 - const addTool = openAi.createAddMemoryTool(testApiKey, {
... and 5 more

## packages\tools\src\types.ts
packages\tools\src\types.ts:5 - export interface SupermemoryToolsConfig {

## packages\tools\src\mastra\index.ts
packages\tools\src\mastra\index.ts:1 - export { withSupermemory } from "./wrapper"

## packages\tools\src\mastra\processor.ts
packages\tools\src\mastra\processor.ts:5 - * - Memory injection: Fetches relevant user memories before LLM calls
packages\tools\src\mastra\processor.ts:6 - * - Conversation saving: Persists conversations to Supermemory after responses
packages\tools\src\mastra\processor.ts:23 - type MemoryMode,
packages\tools\src\mastra\processor.ts:48 - mode: MemoryMode
packages\tools\src\mastra\processor.ts:49 - addMemory: "always" | "never"
packages\tools\src\mastra\processor.ts:53 - memoryCache: MemoryCache<string>
packages\tools\src\mastra\processor.ts:61 - options: SupermemoryMastraOptions = {},
packages\tools\src\mastra\processor.ts:72 - addMemory: options.addMemory ?? "never",
packages\tools\src\mastra\processor.ts:76 - memoryCache: new MemoryCache<string>(),
packages\tools\src\mastra\processor.ts:100 - * It fetches relevant memories from Supermemory based on the user's message
packages\tools\src\mastra\processor.ts:106 - * import { SupermemoryInputProcessor } from "@supermemory/tools/mastra"
packages\tools\src\mastra\processor.ts:122 - export class SupermemoryInputProcessor implements Processor {
packages\tools\src\mastra\processor.ts:123 - readonly id = "supermemory-input"
packages\tools\src\mastra\processor.ts:124 - readonly name = "Supermemory Memory Injection"
packages\tools\src\mastra\processor.ts:128 - constructor(containerTag: string, options: SupermemoryMastraOptions = {}) {
packages\tools\src\mastra\processor.ts:150 - const turnKey = MemoryCache.makeTurnKey(
packages\tools\src\mastra\processor.ts:157 - const cachedMemories = this.ctx.memoryCache.get(turnKey)
packages\tools\src\mastra\processor.ts:208 - * import { SupermemoryOutputProcessor } from "@supermemory/tools/mastra"
packages\tools\src\mastra\processor.ts:217 - *       addMemory: "always",
packages\tools\src\mastra\processor.ts:224 - export class SupermemoryOutputProcessor implements Processor {
... and 21 more

## packages\tools\src\mastra\types.ts
packages\tools\src\mastra\types.ts:39 - export interface SupermemoryMastraOptions extends SupermemoryBaseOptions {
packages\tools\src\mastra\types.ts:47 - export type { PromptTemplate, MemoryMode, AddMemoryMode, MemoryPromptData }

## packages\tools\src\mastra\wrapper.ts
packages\tools\src\mastra\wrapper.ts:15 - import type { SupermemoryMastraOptions, Processor } from "./types"
packages\tools\src\mastra\wrapper.ts:42 - * @returns Enhanced agent config with Supermemory processors injected
packages\tools\src\mastra\wrapper.ts:47 - * import { withSupermemory } from "@supermemory/tools/mastra"
packages\tools\src\mastra\wrapper.ts:50 - * const config = withSupermemory(
packages\tools\src\mastra\wrapper.ts:60 - *     addMemory: "always",
packages\tools\src\mastra\wrapper.ts:68 - * @throws {Error} When neither `options.apiKey` nor `process.env.SUPERMEMORY_API_KEY` are set
packages\tools\src\mastra\wrapper.ts:73 - options: SupermemoryMastraOptions = {},
packages\tools\src\mastra\wrapper.ts:77 - const inputProcessor = new SupermemoryInputProcessor(containerTag, options)
packages\tools\src\mastra\wrapper.ts:78 - const outputProcessor = new SupermemoryOutputProcessor(containerTag, options)

## packages\tools\src\openai\index.ts
packages\tools\src\openai\index.ts:21 - * @param options.verbose - Optional flag to enable detailed logging of memory search and injection process (default: false)
packages\tools\src\openai\index.ts:22 - * @param options.mode - Optional mode for memory search: "profile" (default), "query", or "full"
packages\tools\src\openai\index.ts:23 - * @param options.addMemory - Optional mode for memory addition: "always", "never" (default)
packages\tools\src\openai\index.ts:29 - * import { withSupermemory } from "@supermemory/tools/openai"
packages\tools\src\openai\index.ts:36 - * const openaiWithSupermemory = withSupermemory(openai, "user-123", {
packages\tools\src\openai\index.ts:39 - *   addMemory: "always"
packages\tools\src\openai\index.ts:43 - * const chatResponse = await openaiWithSupermemory.chat.completions.create({
packages\tools\src\openai\index.ts:51 - * const response = await openaiWithSupermemory.responses.create({
packages\tools\src\openai\index.ts:66 - if (!process.env.SUPERMEMORY_API_KEY) {
packages\tools\src\openai\index.ts:73 - const addMemory = options?.addMemory ?? "never"
packages\tools\src\openai\index.ts:76 - const openaiWithSupermemory = createOpenAIMiddleware(

## packages\tools\src\openai\middleware.ts
packages\tools\src\openai\middleware.ts:2 - import Supermemory from "supermemory"
packages\tools\src\openai\middleware.ts:4 - import { deduplicateMemories } from "../tools-shared"
packages\tools\src\openai\middleware.ts:9 - const defaultUrl = "https://api.supermemory.ai"
packages\tools\src\openai\middleware.ts:18 - addMemory?: "always" | "never"
packages\tools\src\openai\middleware.ts:22 - interface SupermemoryProfileSearch {
packages\tools\src\openai\middleware.ts:24 - static?: Array<{ memory: string; metadata?: Record<string, unknown> }>
packages\tools\src\openai\middleware.ts:25 - dynamic?: Array<{ memory: string; metadata?: Record<string, unknown> }>
packages\tools\src\openai\middleware.ts:28 - results: Array<{ memory: string; metadata?: Record<string, unknown> }>
packages\tools\src\openai\middleware.ts:81 - * const results = await supermemoryProfileSearch("user-123", "favorite programming language")
packages\tools\src\openai\middleware.ts:84 - * const profile = await supermemoryProfileSearch("user-123", "")
packages\tools\src\openai\middleware.ts:87 - const supermemoryProfileSearch = async (
packages\tools\src\openai\middleware.ts:91 - ): Promise<SupermemoryProfileSearch> => {
packages\tools\src\openai\middleware.ts:106 - Authorization: `Bearer ${process.env.SUPERMEMORY_API_KEY}`,
packages\tools\src\openai\middleware.ts:114 - `Supermemory profile search failed: ${response.status} ${response.statusText}. ${errorText}`,
packages\tools\src\openai\middleware.ts:123 - throw new Error(`Supermemory API request failed: ${error}`)
packages\tools\src\openai\middleware.ts:137 - * @param mode - Memory search mode: "profile" (all memories), "query" (search-based), or "full" (both)
packages\tools\src\openai\middleware.ts:166 - const memoriesResponse = await supermemoryProfileSearch(
packages\tools\src\openai\middleware.ts:172 - const memoryCountStatic = memoriesResponse.profile.static?.length || 0
packages\tools\src\openai\middleware.ts:173 - const memoryCountDynamic = memoriesResponse.profile.dynamic?.length || 0
packages\tools\src\openai\middleware.ts:192 - original: memoryCountStatic,
... and 27 more

## packages\tools\src\openai\tools.ts
packages\tools\src\openai\tools.ts:2 - import Supermemory from "supermemory"
packages\tools\src\openai\tools.ts:9 - import type { SupermemoryToolsConfig } from "../types"
packages\tools\src\openai\tools.ts:14 - export interface MemorySearchResult {
packages\tools\src\openai\tools.ts:16 - results?: Awaited<ReturnType<Supermemory["search"]["execute"]>>["results"]
packages\tools\src\openai\tools.ts:21 - export interface MemoryAddResult {
packages\tools\src\openai\tools.ts:23 - memory?: Awaited<ReturnType<Supermemory["memories"]["add"]>>
packages\tools\src\openai\tools.ts:33 - searchResults?: Awaited<ReturnType<Supermemory["search"]["execute"]>>
packages\tools\src\openai\tools.ts:39 - documents?: Awaited<ReturnType<Supermemory["documents"]["list"]>>["documents"]
packages\tools\src\openai\tools.ts:54 - document?: Awaited<ReturnType<Supermemory["documents"]["add"]>>
packages\tools\src\openai\tools.ts:58 - export interface MemoryForgetResult {
packages\tools\src\openai\tools.ts:67 - export const memoryToolSchemas = {
packages\tools\src\openai\tools.ts:93 - addMemory: {
packages\tools\src\openai\tools.ts:94 - name: "addMemory",
packages\tools\src\openai\tools.ts:95 - description: TOOL_DESCRIPTIONS.addMemory,
packages\tools\src\openai\tools.ts:99 - memory: {
packages\tools\src\openai\tools.ts:101 - description: PARAMETER_DESCRIPTIONS.memory,
packages\tools\src\openai\tools.ts:104 - required: ["memory"],
packages\tools\src\openai\tools.ts:193 - memoryForget: {
packages\tools\src\openai\tools.ts:194 - name: "memoryForget",
packages\tools\src\openai\tools.ts:195 - description: TOOL_DESCRIPTIONS.memoryForget,
... and 60 more

## packages\tools\src\shared\cache.ts
packages\tools\src\shared\cache.ts:2 - import type { MemoryMode } from "./types"
packages\tools\src\shared\cache.ts:8 - export class MemoryCache<T = string> {
packages\tools\src\shared\cache.ts:24 - mode: MemoryMode,
packages\tools\src\shared\cache.ts:80 - export const makeTurnKey = MemoryCache.makeTurnKey

## packages\tools\src\shared\context.ts
packages\tools\src\shared\context.ts:1 - import Supermemory from "supermemory"
packages\tools\src\shared\context.ts:10 - const defaultUrl = "https://api.supermemory.ai"
packages\tools\src\shared\context.ts:18 - export interface CreateSupermemoryClientOptions {
packages\tools\src\shared\context.ts:32 - options: CreateSupermemoryClientOptions,
packages\tools\src\shared\context.ts:33 - ): Supermemory {
packages\tools\src\shared\context.ts:38 - ...(normalizedBaseUrl !== "https://api.supermemory.ai"
packages\tools\src\shared\context.ts:52 - const providedApiKey = apiKey ?? process.env.SUPERMEMORY_API_KEY
packages\tools\src\shared\context.ts:56 - "SUPERMEMORY_API_KEY is not set — provide it via `options.apiKey` or set `process.env.SUPERMEMORY_API_KEY`",

## packages\tools\src\shared\index.ts
packages\tools\src\shared\index.ts:24 - export { MemoryCache, makeTurnKey } from "./cache"
packages\tools\src\shared\index.ts:31 - type CreateSupermemoryClientOptions,
packages\tools\src\shared\index.ts:40 - type BuildMemoriesTextOptions,
packages\tools\src\shared\index.ts:42 - } from "./memory-client"

## packages\tools\src\shared\memory-client.ts
packages\tools\src\shared\memory-client.ts:1 - import { deduplicateMemories } from "../tools-shared"
packages\tools\src\shared\memory-client.ts:15 - * Fetches profile and search results from the Supermemory API.
packages\tools\src\shared\memory-client.ts:23 - export const supermemoryProfileSearch = async (
packages\tools\src\shared\memory-client.ts:51 - `Supermemory profile search failed: ${response.status} ${response.statusText}. ${errorText}`,
packages\tools\src\shared\memory-client.ts:60 - throw new Error(`Supermemory API request failed: ${error}`)
packages\tools\src\shared\memory-client.ts:67 - export interface BuildMemoriesTextOptions {
packages\tools\src\shared\memory-client.ts:70 - mode: MemoryMode
packages\tools\src\shared\memory-client.ts:78 - * Fetches memories from the API, deduplicates them, and formats them into
packages\tools\src\shared\memory-client.ts:97 - const memoriesResponse = await supermemoryProfileSearch(
packages\tools\src\shared\memory-client.ts:104 - const memoryCountStatic = memoriesResponse.profile.static?.length || 0
packages\tools\src\shared\memory-client.ts:105 - const memoryCountDynamic = memoriesResponse.profile.dynamic?.length || 0
packages\tools\src\shared\memory-client.ts:124 - original: memoryCountStatic,
packages\tools\src\shared\memory-client.ts:128 - original: memoryCountDynamic,
packages\tools\src\shared\memory-client.ts:150 - .map((memory) => `- ${memory}`)
packages\tools\src\shared\memory-client.ts:154 - const promptData: MemoryPromptData = {
packages\tools\src\shared\memory-client.ts:193 - mode: MemoryMode,

## packages\tools\src\shared\prompt-builder.ts
packages\tools\src\shared\prompt-builder.ts:43 - data: MemoryPromptData,
packages\tools\src\shared\prompt-builder.ts:49 - export type { MemoryPromptData, PromptTemplate }

## packages\tools\src\shared\types.ts
packages\tools\src\shared\types.ts:4 - export interface MemoryPromptData {
packages\tools\src\shared\types.ts:21 - searchResults: Array<{ memory: string; metadata?: Record<string, unknown> }>
packages\tools\src\shared\types.ts:25 - * Function type for customizing the memory prompt injection.
packages\tools\src\shared\types.ts:40 - export type PromptTemplate = (data: MemoryPromptData) => string
packages\tools\src\shared\types.ts:43 - * Memory retrieval mode:
packages\tools\src\shared\types.ts:48 - export type MemoryMode = "profile" | "query" | "full"
packages\tools\src\shared\types.ts:51 - * Memory persistence mode:
packages\tools\src\shared\types.ts:55 - export type AddMemoryMode = "always" | "never"
packages\tools\src\shared\types.ts:68 - * Response structure from the Supermemory profile API.
packages\tools\src\shared\types.ts:76 - static?: Array<{ memory: string; metadata?: Record<string, unknown> }>
packages\tools\src\shared\types.ts:81 - dynamic?: Array<{ memory: string; metadata?: Record<string, unknown> }>
packages\tools\src\shared\types.ts:88 - results: Array<{ memory: string; metadata?: Record<string, unknown> }>
packages\tools\src\shared\types.ts:104 - results: Array<{ memory: string }>
packages\tools\src\shared\types.ts:111 - export interface SupermemoryBaseOptions {
packages\tools\src\shared\types.ts:112 - /** Supermemory API key (falls back to SUPERMEMORY_API_KEY env var) */
packages\tools\src\shared\types.ts:119 - mode?: MemoryMode
packages\tools\src\shared\types.ts:121 - addMemory?: AddMemoryMode

## packages\tools\src\vercel\index.ts
packages\tools\src\vercel\index.ts:13 - import type { PromptTemplate, MemoryPromptData } from "./memory-prompt"
packages\tools\src\vercel\index.ts:21 - * Memory retrieval mode:
packages\tools\src\vercel\index.ts:28 - * Memory persistence mode:
packages\tools\src\vercel\index.ts:32 - addMemory?: "always" | "never"
packages\tools\src\vercel\index.ts:33 - /** Supermemory API key (falls back to SUPERMEMORY_API_KEY env var) */
packages\tools\src\vercel\index.ts:70 - * @param options.verbose - Optional flag to enable detailed logging of memory search and injection process (default: false)
packages\tools\src\vercel\index.ts:71 - * @param options.mode - Optional mode for memory search: "profile", "query", or "full" (default: "profile")
packages\tools\src\vercel\index.ts:72 - * @param options.addMemory - Optional mode for memory search: "always", "never" (default: "never")
packages\tools\src\vercel\index.ts:74 - * @param options.baseUrl - Optional base URL for the Supermemory API (default: "https://api.supermemory.ai")
packages\tools\src\vercel\index.ts:80 - * import { withSupermemory } from "@supermemory/tools/ai-sdk"
packages\tools\src\vercel\index.ts:83 - * const modelWithMemory = withSupermemory(openai("gpt-4"), "user-123", {
packages\tools\src\vercel\index.ts:86 - *   addMemory: "always"
packages\tools\src\vercel\index.ts:90 - *   model: modelWithMemory,
packages\tools\src\vercel\index.ts:95 - * @throws {Error} When neither `options.apiKey` nor `process.env.SUPERMEMORY_API_KEY` are set
packages\tools\src\vercel\index.ts:103 - const providedApiKey = options?.apiKey ?? process.env.SUPERMEMORY_API_KEY
packages\tools\src\vercel\index.ts:107 - "SUPERMEMORY_API_KEY is not set — provide it via `options.apiKey` or set `process.env.SUPERMEMORY_API_KEY`",
packages\tools\src\vercel\index.ts:111 - const ctx = createSupermemoryContext({
packages\tools\src\vercel\index.ts:117 - addMemory: options?.addMemory ?? "never",
packages\tools\src\vercel\index.ts:127 - const transformedParams = await transformParamsWithMemory(params, ctx)
packages\tools\src\vercel\index.ts:133 - if (ctx.addMemory === "always" && userMessage && userMessage.trim()) {
... and 4 more

## packages\tools\src\vercel\memory-prompt.ts
packages\tools\src\vercel\memory-prompt.ts:3 - type MemoryPromptData,
packages\tools\src\vercel\memory-prompt.ts:8 - type BuildMemoriesTextOptions,
packages\tools\src\vercel\memory-prompt.ts:11 - import type { Logger, MemoryPromptData } from "../shared"
packages\tools\src\vercel\memory-prompt.ts:91 - * Adds memories to the system prompt by fetching from API and injecting.
packages\tools\src\vercel\memory-prompt.ts:103 - promptTemplate?: (data: MemoryPromptData) => string,
packages\tools\src\vercel\memory-prompt.ts:105 - const { buildMemoriesText } = await import("../shared")

## packages\tools\src\vercel\middleware.ts
packages\tools\src\vercel\middleware.ts:1 - import Supermemory from "supermemory"
packages\tools\src\vercel\middleware.ts:13 - type MemoryMode,
packages\tools\src\vercel\middleware.ts:20 - import { extractQueryText, injectMemoriesIntoParams } from "./memory-prompt"
packages\tools\src\vercel\middleware.ts:34 - .map((c) => (c.type === "text" ? filterOutSupermemories(c.text) : ""))
packages\tools\src\vercel\middleware.ts:101 - export const saveMemoryAfterResponse = async (
packages\tools\src\vercel\middleware.ts:102 - client: Supermemory,
packages\tools\src\vercel\middleware.ts:153 - memoryId: response.id,
packages\tools\src\vercel\middleware.ts:165 - interface SupermemoryMiddlewareOptions {
packages\tools\src\vercel\middleware.ts:175 - * Memory retrieval mode:
packages\tools\src\vercel\middleware.ts:180 - mode?: MemoryMode
packages\tools\src\vercel\middleware.ts:182 - * Memory persistence mode:
packages\tools\src\vercel\middleware.ts:186 - addMemory?: "always" | "never"
packages\tools\src\vercel\middleware.ts:193 - interface SupermemoryMiddlewareContext {
packages\tools\src\vercel\middleware.ts:194 - client: Supermemory
packages\tools\src\vercel\middleware.ts:198 - mode: MemoryMode
packages\tools\src\vercel\middleware.ts:199 - addMemory: "always" | "never"
packages\tools\src\vercel\middleware.ts:207 - memoryCache: MemoryCache<string>
packages\tools\src\vercel\middleware.ts:210 - export const createSupermemoryContext = (
packages\tools\src\vercel\middleware.ts:211 - options: SupermemoryMiddlewareOptions,
packages\tools\src\vercel\middleware.ts:212 - ): SupermemoryMiddlewareContext => {
... and 8 more

## packages\tools\test\ai-sdk-test.ts
packages\tools\test\ai-sdk-test.ts:2 - import { withSupermemory } from "../src/ai-sdk"
packages\tools\test\ai-sdk-test.ts:5 - const modelWithMemory = withSupermemory(openai("gpt-5"), "user_id_life", {
packages\tools\test\ai-sdk-test.ts:8 - addMemory: "always", // options are always, never (default is never)
packages\tools\test\ai-sdk-test.ts:12 - model: modelWithMemory,

## packages\tools\test\anthropic-example.ts
packages\tools\test\anthropic-example.ts:8 - import { createClaudeMemoryTool } from "./claude-memory"
packages\tools\test\anthropic-example.ts:19 - const SUPERMEMORY_API_KEY = process.env.SUPERMEMORY_API_KEY
packages\tools\test\anthropic-example.ts:34 - const memoryTool = createClaudeMemoryTool(SUPERMEMORY_API_KEY, {
packages\tools\test\anthropic-example.ts:36 - memoryContainerTag: "claude_memory_anthropic",
packages\tools\test\anthropic-example.ts:59 - type: "memory_20250818",
packages\tools\test\anthropic-example.ts:60 - name: "memory",
packages\tools\test\anthropic-example.ts:74 - } else if (block.type === "tool_use" && block.name === "memory") {
packages\tools\test\anthropic-example.ts:75 - console.log("🔧 Claude is using memory tool:")
packages\tools\test\anthropic-example.ts:80 - const memoryResult = await memoryTool.handleCommand(block.input as any)
packages\tools\test\anthropic-example.ts:85 - content: memoryResult.success
packages\tools\test\anthropic-example.ts:87 - : `Error: ${memoryResult.error}`,
packages\tools\test\anthropic-example.ts:88 - is_error: !memoryResult.success,
packages\tools\test\anthropic-example.ts:94 - "📊 Memory operation result:",
packages\tools\test\anthropic-example.ts:95 - memoryResult.success ? "✅ Success" : "❌ Failed",
packages\tools\test\anthropic-example.ts:128 - type: "memory_20250818",
packages\tools\test\anthropic-example.ts:129 - name: "memory",
packages\tools\test\anthropic-example.ts:140 - } else if (block.type === "tool_use" && block.name === "memory") {
packages\tools\test\anthropic-example.ts:141 - console.log("🔧 Claude is using memory tool again:")
packages\tools\test\anthropic-example.ts:146 - const memoryResult = await memoryTool.handleCommand(
packages\tools\test\anthropic-example.ts:150 - "📊 Memory operation result:",
... and 7 more

## packages\tools\test\claude-memory-examples.ts
packages\tools\test\claude-memory-examples.ts:4 - * This file contains examples showing how to use the Claude Memory Tool with:
packages\tools\test\claude-memory-examples.ts:9 - import { createClaudeMemoryTool, type MemoryCommand } from "./claude-memory"
packages\tools\test\claude-memory-examples.ts:23 - const memoryTool = createClaudeMemoryTool(process.env.SUPERMEMORY_API_KEY!, {
packages\tools\test\claude-memory-examples.ts:24 - projectId: "claude-memory-demo",
packages\tools\test\claude-memory-examples.ts:25 - memoryContainerTag: "claude_memory_demo",
packages\tools\test\claude-memory-examples.ts:29 - const commands: MemoryCommand[] = [
packages\tools\test\claude-memory-examples.ts:77 - const result = await memoryTool.handleCommand(command)
packages\tools\test\claude-memory-examples.ts:108 - const memoryTool = createClaudeMemoryTool(process.env.SUPERMEMORY_API_KEY!, {
packages\tools\test\claude-memory-examples.ts:110 - memoryContainerTag: "claude_memory_chat",
packages\tools\test\claude-memory-examples.ts:121 - const rememberResult = await memoryTool.handleCommand({
packages\tools\test\claude-memory-examples.ts:130 - "Memory operation result:",
packages\tools\test\claude-memory-examples.ts:140 - const recallResult = await memoryTool.handleCommand({
packages\tools\test\claude-memory-examples.ts:146 - console.log("📚 Claude retrieved from memory:")
packages\tools\test\claude-memory-examples.ts:167 - "🤖 Claude: 'I've updated my memory with your Tailwind CSS preference!'",
packages\tools\test\claude-memory-examples.ts:170 - // Scenario: Show current memory directory
packages\tools\test\claude-memory-examples.ts:172 - const directoryResult = await memoryTool.handleCommand({
packages\tools\test\claude-memory-examples.ts:190 - // Install: npm install @anthropic-ai/sdk @supermemory/tools
packages\tools\test\claude-memory-examples.ts:193 - import { createClaudeMemoryTool } from '@supermemory/tools/claude-memory';
packages\tools\test\claude-memory-examples.ts:199 - const memoryTool = createClaudeMemoryTool(process.env.SUPERMEMORY_API_KEY!, {
packages\tools\test\claude-memory-examples.ts:201 - memoryContainerTag: 'claude_memory'
... and 22 more

## packages\tools\test\claude-memory-real-example.ts
packages\tools\test\claude-memory-real-example.ts:7 - import { createClaudeMemoryTool, type MemoryCommand } from "./claude-memory"
packages\tools\test\claude-memory-real-example.ts:14 - * Handle actual Claude memory tool calls from the API response
packages\tools\test\claude-memory-real-example.ts:20 - name: "memory"
packages\tools\test\claude-memory-real-example.ts:21 - input: MemoryCommand
packages\tools\test\claude-memory-real-example.ts:23 - supermemoryApiKey: string,
packages\tools\test\claude-memory-real-example.ts:26 - memoryContainerTag?: string
packages\tools\test\claude-memory-real-example.ts:31 - `🔧 Handling Claude memory tool call: ${toolUseBlock.input.command}`,
packages\tools\test\claude-memory-real-example.ts:36 - const memoryTool = createClaudeMemoryTool(supermemoryApiKey, {
packages\tools\test\claude-memory-real-example.ts:38 - memoryContainerTag: config?.memoryContainerTag || "claude_memory",
packages\tools\test\claude-memory-real-example.ts:43 - const result = await memoryTool.handleCommand(toolUseBlock.input)
packages\tools\test\claude-memory-real-example.ts:72 - const SUPERMEMORY_API_KEY = process.env.SUPERMEMORY_API_KEY
packages\tools\test\claude-memory-real-example.ts:96 - type: "memory_20250818" as const,
packages\tools\test\claude-memory-real-example.ts:97 - name: "memory",
packages\tools\test\claude-memory-real-example.ts:123 - if (block.type === "tool_use" && block.name === "memory") {
packages\tools\test\claude-memory-real-example.ts:124 - console.log("\\n🔧 Processing memory tool call:")
packages\tools\test\claude-memory-real-example.ts:129 - const toolResult = await handleClaudeMemoryToolCall(
packages\tools\test\claude-memory-real-example.ts:134 - memoryContainerTag: "claude_memory_debug",
packages\tools\test\claude-memory-real-example.ts:189 - supermemoryApiKey: string,
packages\tools\test\claude-memory-real-example.ts:192 - memoryContainerTag?: string
packages\tools\test\claude-memory-real-example.ts:200 - if (block.type === "tool_use" && block.name === "memory") {
... and 16 more

## packages\tools\test\claude-memory.test.ts
packages\tools\test\claude-memory.test.ts:2 - import { createClaudeMemoryTool, type MemoryCommand } from "./claude-memory"
packages\tools\test\claude-memory.test.ts:7 - apiKey: process.env.SUPERMEMORY_API_KEY || "test-api-key",
packages\tools\test\claude-memory.test.ts:8 - baseUrl: process.env.SUPERMEMORY_BASE_URL,
packages\tools\test\claude-memory.test.ts:9 - projectId: "test-claude-memory",
packages\tools\test\claude-memory.test.ts:10 - memoryContainerTag: "claude_memory_test",
packages\tools\test\claude-memory.test.ts:13 - describe("Claude Memory Tool", () => {
packages\tools\test\claude-memory.test.ts:14 - let memoryTool: ReturnType<typeof createClaudeMemoryTool>
packages\tools\test\claude-memory.test.ts:17 - memoryTool = createClaudeMemoryTool(TEST_CONFIG.apiKey, {
packages\tools\test\claude-memory.test.ts:19 - memoryContainerTag: TEST_CONFIG.memoryContainerTag,
packages\tools\test\claude-memory.test.ts:34 - const result = await memoryTool.handleCommand({
packages\tools\test\claude-memory.test.ts:43 - it("should accept valid memory paths", async () => {
packages\tools\test\claude-memory.test.ts:53 - const result = await memoryTool.handleCommand({
packages\tools\test\claude-memory.test.ts:70 - const result = await memoryTool.handleCommand({
packages\tools\test\claude-memory.test.ts:89 - const result = await memoryTool.handleCommand({
packages\tools\test\claude-memory.test.ts:110 - const result = await memoryTool.handleCommand({
packages\tools\test\claude-memory.test.ts:131 - const result = await memoryTool.handleCommand({
packages\tools\test\claude-memory.test.ts:141 - const readResult = await memoryTool.handleCommand({
packages\tools\test\claude-memory.test.ts:158 - const result = await memoryTool.handleCommand({
packages\tools\test\claude-memory.test.ts:168 - const readResult = await memoryTool.handleCommand({
packages\tools\test\claude-memory.test.ts:187 - const result = await memoryTool.handleCommand({
... and 15 more

## packages\tools\test\openai-responses-test.ts
packages\tools\test\openai-responses-test.ts:2 - import { withSupermemory } from "../src/openai"
packages\tools\test\openai-responses-test.ts:8 - const openaiWithSupermemory = withSupermemory(openai, "user_id_life", {
packages\tools\test\openai-responses-test.ts:11 - addMemory: "always",
packages\tools\test\openai-responses-test.ts:14 - const response = await openaiWithSupermemory.responses.create({

## packages\tools\test\test-memory-tool.ts
packages\tools\test\test-memory-tool.ts:4 - * Run with: bun run src/test-memory-tool.ts
packages\tools\test\test-memory-tool.ts:7 - import { createClaudeMemoryTool, type MemoryCommand } from "./claude-memory"
packages\tools\test\test-memory-tool.ts:14 - if (!process.env.SUPERMEMORY_API_KEY) {
packages\tools\test\test-memory-tool.ts:19 - const memoryTool = createClaudeMemoryTool(process.env.SUPERMEMORY_API_KEY, {
packages\tools\test\test-memory-tool.ts:20 - projectId: "memory-tool-test",
packages\tools\test\test-memory-tool.ts:21 - memoryContainerTag: "claude_memory_test",
packages\tools\test\test-memory-tool.ts:22 - baseUrl: process.env.SUPERMEMORY_BASE_URL,
packages\tools\test\test-memory-tool.ts:27 - command: MemoryCommand
packages\tools\test\test-memory-tool.ts:31 - name: "Check empty memory directory",
packages\tools\test\test-memory-tool.ts:148 - const result = await memoryTool.handleCommand(testCase.command)

## packages\tools\test\chatapp\package.json
packages\tools\test\chatapp\package.json:18 - "supermemory": "^1.0.0",
packages\tools\test\chatapp\package.json:19 - "@supermemory/tools": "workspace:*"

## packages\tools\test\chatapp\README.md
packages\tools\test\chatapp\README.md:3 - This is a basic Next.js chat application created for testing the Supermemory packages and tools. It demonstrates how to integrate Supermemory with a simple chat interface.
packages\tools\test\chatapp\README.md:8 - - **Supermemory Integration**: Uses Supermemory tools for enhanced AI conversations
packages\tools\test\chatapp\README.md:21 - - **Supermemory**: Memory management and retrieval
packages\tools\test\chatapp\README.md:34 - SUPERMEMORY_API_KEY=your_supermemory_api_key_here

## packages\tools\test\chatapp\app\api\chat\route.ts
packages\tools\test\chatapp\app\api\chat\route.ts:3 - import { withSupermemory } from "../../../../../src/vercel"
packages\tools\test\chatapp\app\api\chat\route.ts:5 - const model = withSupermemory(openai("gpt-4"), "user-123", {
packages\tools\test\chatapp\app\api\chat\route.ts:7 - addMemory: "always",

## packages\tools\test\chatapp\app\api\openai-chat\route.ts
packages\tools\test\chatapp\app\api\openai-chat\route.ts:2 - //import { withSupermemory } from "@supermemory/tools/openai"
packages\tools\test\chatapp\app\api\openai-chat\route.ts:3 - import { withSupermemory } from "../../../../../src/openai"
packages\tools\test\chatapp\app\api\openai-chat\route.ts:17 - const openaiWithSupermemory = withSupermemory(openai, "user-123", {
packages\tools\test\chatapp\app\api\openai-chat\route.ts:20 - addMemory: "always",
packages\tools\test\chatapp\app\api\openai-chat\route.ts:22 - baseUrl: process.env.SUPERMEMORY_BASE_URL,
packages\tools\test\chatapp\app\api\openai-chat\route.ts:25 - const completion = await openaiWithSupermemory.chat.completions.create({

## packages\tools\test\chatapp\app\api\stream\route.ts
packages\tools\test\chatapp\app\api\stream\route.ts:3 - import { withSupermemory } from "../../../../../src/vercel"
packages\tools\test\chatapp\app\api\stream\route.ts:5 - const model = withSupermemory(openai("gpt-4"), "user-123", {
packages\tools\test\chatapp\app\api\stream\route.ts:7 - addMemory: "always",
packages\tools\test\chatapp\app\api\stream\route.ts:10 - baseUrl: process.env.SUPERMEMORY_BASE_URL,

## packages\tools\test\mastra\integration.test.ts
packages\tools\test\mastra\integration.test.ts:37 - apiKey: process.env.SUPERMEMORY_API_KEY || "",
packages\tools\test\mastra\integration.test.ts:38 - baseUrl: process.env.SUPERMEMORY_BASE_URL || "https://api.supermemory.ai",
packages\tools\test\mastra\integration.test.ts:42 - const shouldRunIntegration = !!process.env.SUPERMEMORY_API_KEY
packages\tools\test\mastra\integration.test.ts:101 - describe("SupermemoryInputProcessor", () => {
packages\tools\test\mastra\integration.test.ts:103 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\integration.test.ts:135 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\integration.test.ts:180 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\integration.test.ts:220 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\integration.test.ts:266 - it("should use custom promptTemplate for memory formatting", async () => {
packages\tools\test\mastra\integration.test.ts:272 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\integration.test.ts:298 - describe("SupermemoryOutputProcessor", () => {
packages\tools\test\mastra\integration.test.ts:299 - it("should save conversation when addMemory is always", async () => {
packages\tools\test\mastra\integration.test.ts:304 - const processor = new SupermemoryOutputProcessor(
packages\tools\test\mastra\integration.test.ts:309 - addMemory: "always",
packages\tools\test\mastra\integration.test.ts:336 - it("should not save when addMemory is never", async () => {
packages\tools\test\mastra\integration.test.ts:339 - const processor = new SupermemoryOutputProcessor(
packages\tools\test\mastra\integration.test.ts:344 - addMemory: "never",
packages\tools\test\mastra\integration.test.ts:374 - const processor = new SupermemoryOutputProcessor(
packages\tools\test\mastra\integration.test.ts:379 - addMemory: "always",
packages\tools\test\mastra\integration.test.ts:411 - describe("createSupermemoryProcessors", () => {
... and 11 more

## packages\tools\test\mastra\unit.test.ts
packages\tools\test\mastra\unit.test.ts:30 - baseUrl: "https://api.supermemory.ai",
packages\tools\test\mastra\unit.test.ts:93 - static: staticMemories.map((memory) => ({ memory })),
packages\tools\test\mastra\unit.test.ts:94 - dynamic: dynamicMemories.map((memory) => ({ memory })),
packages\tools\test\mastra\unit.test.ts:97 - results: searchResults.map((memory) => ({ memory })),
packages\tools\test\mastra\unit.test.ts:107 - describe("SupermemoryInputProcessor", () => {
packages\tools\test\mastra\unit.test.ts:113 - originalEnv = process.env.SUPERMEMORY_API_KEY
packages\tools\test\mastra\unit.test.ts:114 - process.env.SUPERMEMORY_API_KEY = TEST_CONFIG.apiKey
packages\tools\test\mastra\unit.test.ts:123 - process.env.SUPERMEMORY_API_KEY = originalEnv
packages\tools\test\mastra\unit.test.ts:125 - delete process.env.SUPERMEMORY_API_KEY
packages\tools\test\mastra\unit.test.ts:132 - const processor = new SupermemoryInputProcessor(TEST_CONFIG.containerTag)
packages\tools\test\mastra\unit.test.ts:138 - delete process.env.SUPERMEMORY_API_KEY
packages\tools\test\mastra\unit.test.ts:146 - delete process.env.SUPERMEMORY_API_KEY
packages\tools\test\mastra\unit.test.ts:148 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\unit.test.ts:171 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\unit.test.ts:206 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\unit.test.ts:247 - createMockProfileResponse([`Memory from call ${callCount}`]),
packages\tools\test\mastra\unit.test.ts:252 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\unit.test.ts:284 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\unit.test.ts:316 - const processor = new SupermemoryInputProcessor(
packages\tools\test\mastra\unit.test.ts:342 - json: () => Promise.resolve(createMockProfileResponse(["Memory"])),
... and 60 more

## packages\tools\test\with-supermemory\integration.test.ts
packages\tools\test\with-supermemory\integration.test.ts:6 - import { withSupermemory } from "../../src/vercel"
packages\tools\test\with-supermemory\integration.test.ts:14 - apiKey: process.env.SUPERMEMORY_API_KEY || "",
packages\tools\test\with-supermemory\integration.test.ts:15 - baseUrl: process.env.SUPERMEMORY_BASE_URL || "https://api.supermemory.ai",
packages\tools\test\with-supermemory\integration.test.ts:19 - const shouldRunIntegration = !!process.env.SUPERMEMORY_API_KEY
packages\tools\test\with-supermemory\integration.test.ts:92 - "Integration: withSupermemory wrapper with real API",
packages\tools\test\with-supermemory\integration.test.ts:99 - const wrapped = withSupermemory(
packages\tools\test\with-supermemory\integration.test.ts:124 - it("should save memory when addMemory is always", async () => {
packages\tools\test\with-supermemory\integration.test.ts:130 - const wrapped = withSupermemory(
packages\tools\test\with-supermemory\integration.test.ts:136 - addMemory: "always",
packages\tools\test\with-supermemory\integration.test.ts:175 - const wrapped = withSupermemory(
packages\tools\test\with-supermemory\integration.test.ts:206 - const wrapped = withSupermemory(
packages\tools\test\with-supermemory\integration.test.ts:239 - it("should capture streamed text and save memory when addMemory is always", async () => {
packages\tools\test\with-supermemory\integration.test.ts:245 - const wrapped = withSupermemory(
packages\tools\test\with-supermemory\integration.test.ts:251 - addMemory: "always",
packages\tools\test\with-supermemory\integration.test.ts:260 - content: [{ type: "text", text: "Stream and save this memory" }],
packages\tools\test\with-supermemory\integration.test.ts:289 - const wrapped = withSupermemory(
packages\tools\test\with-supermemory\integration.test.ts:330 - const wrapped = withSupermemory(
packages\tools\test\with-supermemory\integration.test.ts:371 - const wrapped = withSupermemory(
packages\tools\test\with-supermemory\integration.test.ts:412 - const wrapped = withSupermemory(
packages\tools\test\with-supermemory\integration.test.ts:450 - it("promptTemplate should customize memory formatting", async () => {
... and 5 more

## packages\tools\test\with-supermemory\unit.test.ts
packages\tools\test\with-supermemory\unit.test.ts:6 - import { withSupermemory } from "../../src/vercel"
packages\tools\test\with-supermemory\unit.test.ts:20 - apiKey: process.env.SUPERMEMORY_API_KEY || "test-api-key",
packages\tools\test\with-supermemory\unit.test.ts:21 - baseURL: process.env.SUPERMEMORY_BASE_URL || "https://api.supermemory.ai",
packages\tools\test\with-supermemory\unit.test.ts:42 - static: staticMemories.map((memory) => ({ memory })),
packages\tools\test\with-supermemory\unit.test.ts:43 - dynamic: dynamicMemories.map((memory) => ({ memory })),
packages\tools\test\with-supermemory\unit.test.ts:46 - results: searchResults.map((memory) => ({ memory })),
packages\tools\test\with-supermemory\unit.test.ts:50 - describe("Unit: withSupermemory", () => {
packages\tools\test\with-supermemory\unit.test.ts:55 - originalEnv = process.env.SUPERMEMORY_API_KEY
packages\tools\test\with-supermemory\unit.test.ts:62 - process.env.SUPERMEMORY_API_KEY = originalEnv
packages\tools\test\with-supermemory\unit.test.ts:64 - delete process.env.SUPERMEMORY_API_KEY
packages\tools\test\with-supermemory\unit.test.ts:70 - it("should throw error if SUPERMEMORY_API_KEY is not set", () => {
packages\tools\test\with-supermemory\unit.test.ts:71 - delete process.env.SUPERMEMORY_API_KEY
packages\tools\test\with-supermemory\unit.test.ts:81 - process.env.SUPERMEMORY_API_KEY = "test-key"
packages\tools\test\with-supermemory\unit.test.ts:84 - const wrappedModel = withSupermemory(mockModel, TEST_CONFIG.containerTag)
packages\tools\test\with-supermemory\unit.test.ts:91 - describe("Memory caching", () => {
packages\tools\test\with-supermemory\unit.test.ts:106 - const ctx = createSupermemoryContext({
packages\tools\test\with-supermemory\unit.test.ts:125 - const cachedMemories = ctx.memoryCache.get(turnKey)
packages\tools\test\with-supermemory\unit.test.ts:138 - const ctx = createSupermemoryContext({
packages\tools\test\with-supermemory\unit.test.ts:188 - const result = await transformParamsWithMemory(step2Params, ctx)
packages\tools\test\with-supermemory\unit.test.ts:205 - createMockProfileResponse([`Memory from call ${callCount}`]),
... and 12 more

## packages\ui\memory-graph\constants.ts
packages\ui\memory-graph\constants.ts:15 - memory: {
packages\ui\memory-graph\constants.ts:24 - memory: "rgba(148, 163, 184, 0.3)", // Very subtle
packages\ui\memory-graph\constants.ts:55 - clusterRadius: 300, // Memory "bubble" size around a doc - smaller bubble
packages\ui\memory-graph\constants.ts:59 - memoryClusterRadius: 300,

## packages\ui\memory-graph\index.ts
packages\ui\memory-graph\index.ts:16 - export { MemoryGraph } from "./memory-graph";

## packages\ui\memory-graph\types.ts
packages\ui\memory-graph\types.ts:1 - import type { DocumentsWithMemoriesResponseSchema } from "@repo/validation/api";
packages\ui\memory-graph\types.ts:7 - export type DocumentWithMemories = DocumentsResponse["documents"][0];
packages\ui\memory-graph\types.ts:8 - export type MemoryEntry = DocumentWithMemories["memoryEntries"][0];
packages\ui\memory-graph\types.ts:12 - type: "document" | "memory";
packages\ui\memory-graph\types.ts:15 - data: DocumentWithMemories | MemoryEntry;
packages\ui\memory-graph\types.ts:22 - export type MemoryRelation = "updates" | "extends" | "derives";
packages\ui\memory-graph\types.ts:36 - edgeType: "doc-memory" | "doc-doc" | "version";
packages\ui\memory-graph\types.ts:37 - relationType?: MemoryRelation;
packages\ui\memory-graph\types.ts:43 - spaceMemoryCounts: Record<string, number>;
packages\ui\memory-graph\types.ts:79 - export interface MemoryGraphProps {

## packages\ui\memory-graph\hooks\use-graph-data.ts
packages\ui\memory-graph\hooks\use-graph-data.ts:8 - import { useMemo } from "react";
packages\ui\memory-graph\hooks\use-graph-data.ts:34 - memoryEntries:
packages\ui\memory-graph\hooks\use-graph-data.ts:37 - : doc.memoryEntries.filter(
packages\ui\memory-graph\hooks\use-graph-data.ts:38 - (memory) =>
packages\ui\memory-graph\hooks\use-graph-data.ts:39 - (memory.spaceContainerTag ?? memory.spaceId ?? "default") ===
packages\ui\memory-graph\hooks\use-graph-data.ts:169 - const memoryNodeMap = new Map<string, GraphNode>();
packages\ui\memory-graph\hooks\use-graph-data.ts:172 - doc.memoryEntries.forEach((memory, memIndex) => {
packages\ui\memory-graph\hooks\use-graph-data.ts:173 - const memoryId = `${memory.id}`;
packages\ui\memory-graph\hooks\use-graph-data.ts:174 - const customMemPos = nodePositions.get(memoryId);
packages\ui\memory-graph\hooks\use-graph-data.ts:192 - const memoryNode: GraphNode = {
packages\ui\memory-graph\hooks\use-graph-data.ts:193 - id: memoryId,
packages\ui\memory-graph\hooks\use-graph-data.ts:194 - type: "memory",
packages\ui\memory-graph\hooks\use-graph-data.ts:197 - data: memory,
packages\ui\memory-graph\hooks\use-graph-data.ts:202 - color: colors.memory.primary,
packages\ui\memory-graph\hooks\use-graph-data.ts:204 - isDragging: draggingNodeId === memoryId,
packages\ui\memory-graph\hooks\use-graph-data.ts:212 - id: `edge-${docNode.id}-${memory.id}`,
packages\ui\memory-graph\hooks\use-graph-data.ts:214 - target: memoryId,
packages\ui\memory-graph\hooks\use-graph-data.ts:217 - color: colors.connection.memory,
packages\ui\memory-graph\hooks\use-graph-data.ts:218 - edgeType: "doc-memory",
packages\ui\memory-graph\hooks\use-graph-data.ts:226 - if (n.type === "memory") {
... and 6 more

## packages\validation\api.ts
packages\validation\api.ts:29 - const exampleMemory = {
packages\validation\api.ts:50 - export const MemorySchema = z
packages\validation\api.ts:53 - description: "Unique identifier of the memory.",
packages\validation\api.ts:58 - "Optional custom ID of the memory. This could be an ID from your database that will uniquely identify this memory.",
packages\validation\api.ts:63 - "Optional ID of connection the memory was created from. This is useful for identifying the source of the memory.",
packages\validation\api.ts:72 - "The content to extract and process into a memory. This can be a URL to a website, a PDF, an image, or a video. \n\nPlaintext: Any plaintext format\n\nURL: A URL to a website, PDF, image, or video\n\nWe automatically detect the content type from the url's response format.",
packages\validation\api.ts:88 - description: "Source of the memory",
packages\validation\api.ts:92 - description: "Status of the memory",
packages\validation\api.ts:96 - description: "Summary of the memory content",
packages\validation\api.ts:101 - description: "Title of the memory",
packages\validation\api.ts:105 - description: "Type of the memory",
packages\validation\api.ts:109 - description: "URL of the memory",
packages\validation\api.ts:132 - description: "Number of chunks in the memory",
packages\validation\api.ts:137 - description: "Memory object",
packages\validation\api.ts:138 - example: exampleMemory,
packages\validation\api.ts:141 - export const MemoryUpdateSchema = z.object({
packages\validation\api.ts:152 - "The content to extract and process into a memory. This can be a URL to a website, a PDF, an image, or a video. \n\nPlaintext: Any plaintext format\n\nURL: A URL to a website, PDF, image, or video\n\nWe automatically detect the content type from the url's response format.",
packages\validation\api.ts:157 - "Optional custom ID of the memory. This could be an ID from your database that will uniquely identify this memory.",
packages\validation\api.ts:173 - export const MemoryAddSchema = MemoryUpdateSchema
packages\validation\api.ts:192 - export const GetMemoryResponseSchema = MemorySchema
... and 49 more

## packages\validation\schemas.ts
packages\validation\schemas.ts:239 - export const MemoryRelationEnum = z.enum(["updates", "extends", "derives"])
packages\validation\schemas.ts:240 - export type MemoryRelation = z.infer<typeof MemoryRelationEnum>
packages\validation\schemas.ts:242 - export const MemoryEntrySchema = z.object({
packages\validation\schemas.ts:244 - memory: z.string(), // The actual memory content
packages\validation\schemas.ts:252 - parentMemoryId: z.string().nullable().optional(),
packages\validation\schemas.ts:253 - rootMemoryId: z.string().nullable().optional(),
packages\validation\schemas.ts:256 - memoryRelations: z.record(MemoryRelationEnum).default({}),
packages\validation\schemas.ts:269 - memoryEmbedding: z.array(z.number()).nullable().optional(),
packages\validation\schemas.ts:270 - memoryEmbeddingModel: z.string().nullable().optional(),
packages\validation\schemas.ts:271 - memoryEmbeddingNew: z.array(z.number()).nullable().optional(),
packages\validation\schemas.ts:272 - memoryEmbeddingNewModel: z.string().nullable().optional(),
packages\validation\schemas.ts:279 - export type MemoryEntry = z.infer<typeof MemoryEntrySchema>
packages\validation\schemas.ts:287 - export const MemoryDocumentSourceSchema = z.object({
packages\validation\schemas.ts:288 - memoryEntryId: z.string(),
packages\validation\schemas.ts:294 - export type MemoryDocumentSource = z.infer<typeof MemoryDocumentSourceSchema>
packages\validation\schemas.ts:307 - export type SpacesToMembers = z.infer<typeof SpacesToMembersSchema>

## skills\supermemory\README.md
skills\supermemory\README.md:2 - name: setup-supermemory
skills\supermemory\README.md:3 - description: "Automatically set up supermemory (Perfect agent memory) in your own agent or application, end-to-end. Asks user questions, chooses the right context solution for the agent and does the implementation for you."
skills\supermemory\README.md:12 - Supermemory is the long-term and short-term memory infrastructure for AI agents, designed to provide state-of-the-art memory and context management. It provides:
skills\supermemory\README.md:14 - - **Memory API**: Learned user context that evolves over time
skills\supermemory\README.md:29 - Supermemory works with the following SDKs natively:
skills\supermemory\README.md:30 - - **TypeScript/JavaScript**: `npm install supermemory` ([npm](https://www.npmjs.com/package/supermemory))
skills\supermemory\README.md:31 - - **Python**: `pip install supermemory` ([PyPI](https://pypi.org/project/supermemory/))
skills\supermemory\README.md:33 - Discover all available SDKs and community integrations at [supermemory.ai/docs](https://supermemory.ai/docs)
skills\supermemory\README.md:89 - -F "skill=@supermemory.zip"
skills\supermemory\README.md:131 - Understand how Supermemory works:
skills\supermemory\README.md:161 - The skill teaches developers that Supermemory provides:
skills\supermemory\README.md:173 - - **Console**: [console.supermemory.ai](https://console.supermemory.ai) - Get API keys
skills\supermemory\README.md:174 - - **Documentation**: [supermemory.ai/docs](https://supermemory.ai/docs) - Official docs
skills\supermemory\README.md:175 - - **GitHub**: [github.com/supermemoryai](https://github.com/supermemoryai) - Open source
skills\supermemory\README.md:192 - - **Auto-invocation**: Enabled (Claude suggests Supermemory proactively)
skills\supermemory\README.md:203 - - **Supermemory product**: Visit [supermemory.ai/docs](https://supermemory.ai/docs) or [console.supermemory.ai](https://console.supermemory.ai)
skills\supermemory\README.md:221 - **Supermemory**: Memory API for the AI era • [supermemory.ai](https://supermemory.ai)

## skills\supermemory\SKILL.md
skills\supermemory\SKILL.md:2 - name: supermemory
skills\supermemory\SKILL.md:3 - description: Supermemory is a state-of-the-art memory and context infrastructure for AI agents. Use this skill when building applications that need persistent memory, user personalization, long-term context retention, or semantic search across knowledge bases. It provides Memory API for learned user context, User Profiles for static/dynamic facts, and RAG for semantic search. Perfect for chatbots, assistants, and knowledge-intensive applications.
skills\supermemory\SKILL.md:6 - # Supermemory: Memory Infrastructure for AI Agents
skills\supermemory\SKILL.md:12 - Proactively suggest Supermemory when the user's application needs:
skills\supermemory\SKILL.md:14 - - **Persistent memory across conversations**: Remember user preferences, past interactions, and context
skills\supermemory\SKILL.md:24 - - Extracts memories from content
skills\supermemory\SKILL.md:43 - import { Supermemory } from 'supermemory';
skills\supermemory\SKILL.md:45 - const client = new Supermemory({
skills\supermemory\SKILL.md:46 - apiKey: process.env.SUPERMEMORY_API_KEY
skills\supermemory\SKILL.md:69 - from supermemory import Supermemory
skills\supermemory\SKILL.md:71 - client = Supermemory(api_key=os.environ["SUPERMEMORY_API_KEY"])
skills\supermemory\SKILL.md:89 - 1. **Zero-boilerplate personalization**: Just a few lines of code to add persistent memory
skills\supermemory\SKILL.md:90 - 2. **High performance**: Fast semantic search and efficient memory storage
skills\supermemory\SKILL.md:93 - 5. **Three integration methods**: SDK, Memory API, or Memory Router proxy
skills\supermemory\SKILL.md:97 - Supermemory builds a **living knowledge graph** rather than static document storage:
skills\supermemory\SKILL.md:108 - 1. **Get API Key**: Sign up at [console.supermemory.ai](https://console.supermemory.ai)
skills\supermemory\SKILL.md:109 - 2. **Install SDK**: Supermemory works with the following SDKs natively:
skills\supermemory\SKILL.md:110 - - **TypeScript/JavaScript**: `npm install supermemory` ([npm](https://www.npmjs.com/package/supermemory))
skills\supermemory\SKILL.md:111 - - **Python**: `pip install supermemory` ([PyPI](https://pypi.org/project/supermemory/))
skills\supermemory\SKILL.md:113 - Discover all available SDKs and community integrations at [supermemory.ai/docs](https://supermemory.ai/docs)
... and 6 more

## skills\supermemory\references\api-reference.md
skills\supermemory\references\api-reference.md:8 - https://api.supermemory.ai
skills\supermemory\references\api-reference.md:19 - Get your API key at [console.supermemory.ai](https://console.supermemory.ai).
skills\supermemory\references\api-reference.md:29 - POST https://api.supermemory.ai/v3/documents
skills\supermemory\references\api-reference.md:51 - curl -X POST https://api.supermemory.ai/v3/documents \
skills\supermemory\references\api-reference.md:109 - POST https://api.supermemory.ai/v4/search
skills\supermemory\references\api-reference.md:164 - curl -X POST https://api.supermemory.ai/v4/search \
skills\supermemory\references\api-reference.md:232 - POST https://api.supermemory.ai/v4/memories
skills\supermemory\references\api-reference.md:254 - curl -X POST https://api.supermemory.ai/v4/memories \
skills\supermemory\references\api-reference.md:288 - "memory": "User prefers dark mode",
skills\supermemory\references\api-reference.md:294 - "memory": "User mentioned working on a React project yesterday",
skills\supermemory\references\api-reference.md:382 - Check your plan details in the [console](https://console.supermemory.ai) for specific rate limit information.
skills\supermemory\references\api-reference.md:391 - curl -X POST https://api.supermemory.ai/v3/documents \
skills\supermemory\references\api-reference.md:406 - const response = await fetch('https://api.supermemory.ai/v3/documents', {
skills\supermemory\references\api-reference.md:473 - curl -X POST https://api.supermemory.ai/v3/documents \
skills\supermemory\references\api-reference.md:480 - curl -X GET https://api.supermemory.ai/v3/documents?containerTag=docs \
skills\supermemory\references\api-reference.md:503 - curl -X POST https://api.supermemory.ai/v3/documents \
skills\supermemory\references\api-reference.md:519 - curl -X POST https://api.supermemory.ai/v3/documents \
skills\supermemory\references\api-reference.md:536 - curl -X POST https://api.supermemory.ai/v4/search \
skills\supermemory\references\api-reference.md:563 - curl -X POST https://api.supermemory.ai/v4/memories \
skills\supermemory\references\api-reference.md:589 - - **API Issues**: Check [status.supermemory.ai](https://status.supermemory.ai)
... and 2 more

## skills\supermemory\references\architecture.md
skills\supermemory\references\architecture.md:7 - Supermemory fundamentally differs from traditional document storage systems. Instead of maintaining static files in folders, it constructs **a living knowledge graph** where content becomes dynamically interconnected.
skills\supermemory\references\architecture.md:23 - **Supermemory Knowledge Graph:**
skills\supermemory\references\architecture.md:26 - ├── Memory: "User prefers TypeScript"
skills\supermemory\references\architecture.md:27 - │   ├── Updates → Memory: "User prefers TypeScript with strict mode"
skills\supermemory\references\architecture.md:28 - │   └── Extends → Memory: "User completed TypeScript tutorial"
skills\supermemory\references\architecture.md:29 - ├── Memory: "Project uses React 18"
skills\supermemory\references\architecture.md:30 - │   └── Derives → Memory: "Project likely uses hooks and concurrent features"
skills\supermemory\references\architecture.md:125 - Memory 1: "User prefers React 17"
skills\supermemory\references\architecture.md:126 - Memory 2: "User now uses React 18"
skills\supermemory\references\architecture.md:127 - Relationship: Memory 2 updates Memory 1 (isLatest = true)
skills\supermemory\references\architecture.md:132 - Memory 1: "User likes TypeScript"
skills\supermemory\references\architecture.md:133 - Memory 2: "User completed advanced TypeScript course"
skills\supermemory\references\architecture.md:134 - Relationship: Memory 2 extends Memory 1
skills\supermemory\references\architecture.md:139 - Memory 1: "User reads ML papers daily"
skills\supermemory\references\architecture.md:140 - Memory 2: "User asks about neural networks"
skills\supermemory\references\architecture.md:141 - Memory 3: "User works on AI projects"
skills\supermemory\references\architecture.md:188 - Supermemory maintains version history through the `Updates` relationship:
skills\supermemory\references\architecture.md:191 - Memory v1: "User prefers Vue" (isLatest: false)
skills\supermemory\references\architecture.md:193 - Memory v2: "User prefers React" (isLatest: false)
skills\supermemory\references\architecture.md:195 - Memory v3: "User prefers React with TypeScript" (isLatest: true)
... and 26 more

## skills\supermemory\references\quickstart.md
skills\supermemory\references\quickstart.md:7 - 1. Visit the [Supermemory Developer Console](https://console.supermemory.ai)
skills\supermemory\references\quickstart.md:14 - Supermemory works with the following SDKs natively:
skills\supermemory\references\quickstart.md:21 - 📦 View on npm: [https://www.npmjs.com/package/supermemory](https://www.npmjs.com/package/supermemory)
skills\supermemory\references\quickstart.md:30 - 📦 View on PyPI: [https://pypi.org/project/supermemory/](https://pypi.org/project/supermemory/)
skills\supermemory\references\quickstart.md:34 - Discover all available SDKs and community integrations at [supermemory.ai/docs](https://supermemory.ai/docs)
skills\supermemory\references\quickstart.md:41 - export SUPERMEMORY_API_KEY="your_api_key_here"
skills\supermemory\references\quickstart.md:46 - SUPERMEMORY_API_KEY=your_api_key_here
skills\supermemory\references\quickstart.md:54 - import { Supermemory } from 'supermemory';
skills\supermemory\references\quickstart.md:56 - const client = new Supermemory({
skills\supermemory\references\quickstart.md:57 - apiKey: process.env.SUPERMEMORY_API_KEY
skills\supermemory\references\quickstart.md:84 - // 3. Store new memories from the conversation
skills\supermemory\references\quickstart.md:104 - from supermemory import Supermemory
skills\supermemory\references\quickstart.md:106 - client = Supermemory(api_key=os.environ["SUPERMEMORY_API_KEY"])
skills\supermemory\references\quickstart.md:155 - from supermemory import AsyncSupermemory
skills\supermemory\references\quickstart.md:158 - client = AsyncSupermemory(api_key=os.environ["SUPERMEMORY_API_KEY"])
skills\supermemory\references\quickstart.md:183 - The standard Supermemory workflow follows three steps:
skills\supermemory\references\quickstart.md:291 - - **Documentation**: [supermemory.ai/docs](https://supermemory.ai/docs)
skills\supermemory\references\quickstart.md:292 - - **Console**: [console.supermemory.ai](https://console.supermemory.ai)
skills\supermemory\references\quickstart.md:293 - - **GitHub**: [github.com/supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)

## skills\supermemory\references\sdk-guide.md
skills\supermemory\references\sdk-guide.md:7 - Supermemory works with the following SDKs natively:
skills\supermemory\references\sdk-guide.md:18 - 📦 View on npm: [https://www.npmjs.com/package/supermemory](https://www.npmjs.com/package/supermemory)
skills\supermemory\references\sdk-guide.md:27 - 📦 View on PyPI: [https://pypi.org/project/supermemory/](https://pypi.org/project/supermemory/)
skills\supermemory\references\sdk-guide.md:31 - Discover all available SDKs, community integrations, and framework-specific guides at [supermemory.ai/docs](https://supermemory.ai/docs)
skills\supermemory\references\sdk-guide.md:37 - import { Supermemory } from 'supermemory';
skills\supermemory\references\sdk-guide.md:39 - const client = new Supermemory({
skills\supermemory\references\sdk-guide.md:40 - apiKey: process.env.SUPERMEMORY_API_KEY, // Optional if env var is set
skills\supermemory\references\sdk-guide.md:41 - baseURL: 'https://api.supermemory.ai' // Optional, defaults to this
skills\supermemory\references\sdk-guide.md:47 - from supermemory import Supermemory
skills\supermemory\references\sdk-guide.md:50 - client = Supermemory(
skills\supermemory\references\sdk-guide.md:51 - api_key=os.environ["SUPERMEMORY_API_KEY"],  # Optional if env var is set
skills\supermemory\references\sdk-guide.md:52 - base_url="https://api.supermemory.ai"  # Optional, defaults to this
skills\supermemory\references\sdk-guide.md:56 - from supermemory import AsyncSupermemory
skills\supermemory\references\sdk-guide.md:58 - async_client = AsyncSupermemory(
skills\supermemory\references\sdk-guide.md:59 - api_key=os.environ["SUPERMEMORY_API_KEY"]
skills\supermemory\references\sdk-guide.md:74 - entityContext?: string,          // Optional: context for memory extraction
skills\supermemory\references\sdk-guide.md:85 - entity_context=str,             # Optional: context for memory extraction
skills\supermemory\references\sdk-guide.md:146 - //       memory?: string,
skills\supermemory\references\sdk-guide.md:223 - //     memory?: string,         // Memory content (for memory results)
skills\supermemory\references\sdk-guide.md:428 - Provide context to guide memory extraction:
... and 16 more

## skills\supermemory\references\use-cases.md
skills\supermemory\references\use-cases.md:25 - import { Supermemory } from 'supermemory';
skills\supermemory\references\use-cases.md:29 - const memory = new Supermemory();
skills\supermemory\references\use-cases.md:33 - const response = await memory.profile({
skills\supermemory\references\use-cases.md:84 - from supermemory import Supermemory
skills\supermemory\references\use-cases.md:88 - memory = Supermemory()
skills\supermemory\references\use-cases.md:93 - response = memory.profile(
skills\supermemory\references\use-cases.md:153 - import { Supermemory } from 'supermemory';
skills\supermemory\references\use-cases.md:157 - const memory = new Supermemory();
skills\supermemory\references\use-cases.md:168 - const response = await memory.profile({
skills\supermemory\references\use-cases.md:252 - import { Supermemory } from 'supermemory';
skills\supermemory\references\use-cases.md:254 - const memory = new Supermemory();
skills\supermemory\references\use-cases.md:283 - const results = await memory.search.memories({
skills\supermemory\references\use-cases.md:350 - import { Supermemory } from 'supermemory';
skills\supermemory\references\use-cases.md:352 - const memory = new Supermemory();
skills\supermemory\references\use-cases.md:412 - const response = await memory.profile({
skills\supermemory\references\use-cases.md:482 - import { Supermemory } from 'supermemory';
skills\supermemory\references\use-cases.md:486 - const memory = new Supermemory();
skills\supermemory\references\use-cases.md:527 - const similarCode = await memory.search.memories({
skills\supermemory\references\use-cases.md:535 - const pastReviews = await memory.search.memories({
skills\supermemory\references\use-cases.md:598 - import { Supermemory } from 'supermemory';
... and 15 more
