# Memori Memory Context

## Files with 'mem' in name:
docs\memori-byodb\concepts\how-memory-works.mdx
docs\memori-cloud\concepts\how-memory-works.mdx
docs\memori-cloud\dashboard\memories.mdx
integrations\openclaw\src\utils\memori-client.ts
integrations\openclaw\tests\utils\memori-client.test.ts
memori-ts\src\memori.ts
memori-ts\tests\memori.test.ts
tests\memory\test_memory_augmentation_db_writer.py
tests\memory\test_memory_struct.py
tests\memory\test_memory_struct_triples.py
tests\memory\test_memory_writer.py


## .\conftest.py
.\conftest.py:3 - from memori._config import Config
.\conftest.py:4 - from memori.storage import Manager as StorageManager

## .\CONTRIBUTING.md
.\CONTRIBUTING.md:165 - __init__.py        # Main Memori class and public API

## .\docker-compose.yml
.\docker-compose.yml:128 - test: ["CMD-SHELL", "echo 'SELECT 1 FROM DUAL;' | sqlplus -s system/memori@FREEPDB1 || exit 1"]

## .\README.md
.\README.md:12 - <strong>→ <a href="https://memorilabs.ai/docs/memori-cloud/">Memori Cloud</a></strong> — Zero config. Get an API key and start building in minutes.
.\README.md:77 - import { Memori } from '@memorilabs/memori';
.\README.md:105 - from memori import Memori
.\README.md:156 - openclaw config set plugins.entries.openclaw-memori.config.apiKey "YOUR_MEMORI_API_KEY"
.\README.md:157 - openclaw config set plugins.entries.openclaw-memori.config.entityId "your-app-user-id"
.\README.md:305 - The Memori CLI is the unified tool for managing your account, keys, and quotas across all SDKs. To use it, execute the following from the command line:
.\README.md:312 - This will display a menu of the available options. For more information about what you can do with the Memori CLI, please reference [Command Line Interface](docs/memori-byodb/concepts/cli-quickstart.mdx).
.\README.md:316 - We welcome contributions from the community! Please see our [Contributing Guidelines](https://github.com/MemoriLabs/Memori/blob/main/CONTRIBUTING.md) for details on:

## benchmarks\README.md
benchmarks\README.md:74 - 1. **`01_load_indexes.ipynb`** — builds `indexes_gemma/` from augmented memories.

## examples\agno\main.py
examples\agno\main.py:15 - from memori import Memori
examples\agno\main.py:27 - mem.config.storage.build()
examples\agno\main.py:33 - "Remember customer preferences and history from previous conversations.",

## examples\agno\README.md
examples\agno\README.md:26 - - **Persistent memory**: Conversations are stored in SQLite and recalled automatically
examples\agno\README.md:27 - - **Context awareness**: The agent remembers details from earlier in the conversation
examples\agno\README.md:28 - - **Customer support use case**: Shows a realistic scenario where memory is valuable

## examples\cockroachdb\main.py
examples\cockroachdb\main.py:12 - from memori import Memori
examples\cockroachdb\main.py:23 - mem.config.storage.build()

## examples\cockroachdb\README.md
examples\cockroachdb\README.md:3 - **Memori + CockroachDB** brings durable, distributed memory to AI - instantly, globally, and at any scale. Memori transforms conversations into structured, queryable intelligence, while CockroachDB keeps that memory available, resilient, and consistently accurate across regions. Deploy and scale effortlessly from prototype to production with zero downtime on enterprise-grade infrastructure. Give your AI a foundation to remember, reason, and evolve - with the simplicity of cloud and the reliability and power of distributed SQL.
examples\cockroachdb\README.md:40 - - **Interactive chat**: Type messages and see how Memori maintains context across the conversation

## examples\digitalocean\main.py
examples\digitalocean\main.py:14 - from memori import Memori
examples\digitalocean\main.py:40 - mem.config.storage.build()

## examples\digitalocean\README.md
examples\digitalocean\README.md:28 - - **Persistent memory**: Conversations are stored in PostgreSQL and recalled automatically
examples\digitalocean\README.md:30 - - **Context awareness**: The agent remembers details from earlier in the conversation

## examples\mongodb\main.py
examples\mongodb\main.py:12 - from memori import Memori
examples\mongodb\main.py:21 - mem.config.storage.build()

## examples\mongodb\README.md
examples\mongodb\README.md:28 - - **Interactive chat**: Type messages and see how Memori maintains context across the conversation

## examples\nebius\main.py
examples\nebius\main.py:15 - from memori import Memori
examples\nebius\main.py:30 - mem.config.storage.build()

## examples\nebius\README.md
examples\nebius\README.md:32 - - **Open-source models**: Access to models like Llama 3.1 70B with persistent memory
examples\nebius\README.md:34 - - **Persistent memory**: Conversations are stored in SQLite and recalled automatically
examples\nebius\README.md:35 - - **Context awareness**: The LLM remembers details from earlier in the conversation

## examples\neon\main.py
examples\neon\main.py:13 - from memori import Memori
examples\neon\main.py:26 - mem.config.storage.build()

## examples\neon\README.md
examples\neon\README.md:30 - - **Interactive chat**: Type messages and see how Memori maintains context across the conversation

## examples\oceanbase\main.py
examples\oceanbase\main.py:14 - from memori import Memori
examples\oceanbase\main.py:32 - mem.config.storage.build()

## examples\postgres\main.py
examples\postgres\main.py:13 - from memori import Memori
examples\postgres\main.py:26 - mem.config.storage.build()

## examples\postgres\README.md
examples\postgres\README.md:28 - - **Interactive chat**: Type messages and see how Memori maintains context across the conversation

## examples\sqlite\main.py
examples\sqlite\main.py:13 - from memori import Memori
examples\sqlite\main.py:25 - mem.config.storage.build()

## examples\sqlite\README.md
examples\sqlite\README.md:26 - - **Interactive chat**: Type messages and see how Memori maintains context across the conversation

## integrations\openclaw\openclaw.plugin.json
integrations\openclaw\openclaw.plugin.json:5 - "description": "Hosted memory backend",
integrations\openclaw\openclaw.plugin.json:6 - "kind": "memory",
integrations\openclaw\openclaw.plugin.json:13 - "help": "API key from memorilabs.ai (or use MEMORI_API_KEY env var)"

## integrations\openclaw\package.json
integrations\openclaw\package.json:4 - "description": "Official MemoriLabs.ai long-term memory plugin for OpenClaw",

## integrations\openclaw\README.md
integrations\openclaw\README.md:8 - <i>Give OpenClaw persistent, structured memory with Memori. Capture what matters, recall it when relevant, and move from lightweight experimentation to production-ready memory infrastructure.</i>
integrations\openclaw\README.md:87 - - A Memori API key from [app.memorilabs.ai](https://app.memorilabs.ai)
integrations\openclaw\README.md:112 - openclaw config set plugins.entries.openclaw-memori.config.apiKey "YOUR_MEMORI_API_KEY"
integrations\openclaw\README.md:113 - openclaw config set plugins.entries.openclaw-memori.config.entityId "your-app-user-id"
integrations\openclaw\README.md:159 - To test the full memory loop:
integrations\openclaw\README.md:172 - This plugin integrates with OpenClaw's event lifecycle to provide persistent memory without interfering with the agent's core logic:
integrations\openclaw\README.md:179 - We welcome contributions from the community! Please see our [Contributing Guidelines](https://github.com/MemoriLabs/Memori/blob/main/CONTRIBUTING.md) for details on code style, standards, and submitting pull requests.

## integrations\openclaw\src\index.ts
integrations\openclaw\src\index.ts:4 - import { OpenClawEvent, OpenClawContext, MemoriPluginConfig } from './types.js';
integrations\openclaw\src\index.ts:6 - import { MemoriLogger } from './utils/index.js';
integrations\openclaw\src\index.ts:11 - description: 'Hosted memory backend',
integrations\openclaw\src\index.ts:16 - const config: MemoriPluginConfig = {

## integrations\openclaw\src\types.ts
integrations\openclaw\src\types.ts:1 - export interface MemoriPluginConfig {

## integrations\openclaw\src\handlers\augmentation.ts
integrations\openclaw\src\handlers\augmentation.ts:1 - import { IntegrationRequest, IntegrationMetadata } from '@memorilabs/memori/integrations';
integrations\openclaw\src\handlers\augmentation.ts:2 - import { OpenClawEvent, OpenClawContext, MemoriPluginConfig } from '../types.js';
integrations\openclaw\src\handlers\augmentation.ts:3 - import { extractContext, MemoriLogger, initializeMemoriClient } from '../utils/index.js';
integrations\openclaw\src\handlers\augmentation.ts:24 - config: MemoriPluginConfig,
integrations\openclaw\src\handlers\augmentation.ts:87 - const memoriClient = initializeMemoriClient(config.apiKey, context);

## integrations\openclaw\src\handlers\recall.ts
integrations\openclaw\src\handlers\recall.ts:2 - import { OpenClawEvent, OpenClawContext, MemoriPluginConfig } from '../types.js';
integrations\openclaw\src\handlers\recall.ts:4 - import { extractContext, MemoriLogger, initializeMemoriClient } from '../utils/index.js';
integrations\openclaw\src\handlers\recall.ts:9 - config: MemoriPluginConfig,
integrations\openclaw\src\handlers\recall.ts:27 - const memoriClient = initializeMemoriClient(config.apiKey, context);

## integrations\openclaw\src\utils\index.ts
integrations\openclaw\src\utils\index.ts:2 - export { MemoriLogger } from './logger.js';
integrations\openclaw\src\utils\index.ts:3 - export { initializeMemoriClient } from './memori-client.js';

## integrations\openclaw\src\utils\logger.ts
integrations\openclaw\src\utils\logger.ts:4 - export class MemoriLogger {

## integrations\openclaw\src\utils\memori-client.ts
integrations\openclaw\src\utils\memori-client.ts:1 - import { Memori } from '@memorilabs/memori';
integrations\openclaw\src\utils\memori-client.ts:2 - import { OpenClawIntegration } from '@memorilabs/memori/integrations';
integrations\openclaw\src\utils\memori-client.ts:17 - memori.config.apiKey = apiKey;

## integrations\openclaw\tests\index.test.ts
integrations\openclaw\tests\index.test.ts:2 - import memoriPlugin from '../src/index.js';

## integrations\openclaw\tests\handlers\augmentation.test.ts
integrations\openclaw\tests\handlers\augmentation.test.ts:9 - import type { MemoriLogger } from '../../src/utils/logger.js';
integrations\openclaw\tests\handlers\augmentation.test.ts:33 - let config: MemoriPluginConfig;
integrations\openclaw\tests\handlers\augmentation.test.ts:68 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:82 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:108 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:154 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:181 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:201 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:224 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:254 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:266 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:288 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:319 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:344 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:360 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\augmentation.test.ts:401 - it('should handle API errors from memori client', async () => {
integrations\openclaw\tests\handlers\augmentation.test.ts:402 - const { initializeMemoriClient } = await import('../../src/utils/index.js');

## integrations\openclaw\tests\handlers\recall.test.ts
integrations\openclaw\tests\handlers\recall.test.ts:3 - import type { OpenClawEvent, OpenClawContext, MemoriPluginConfig } from '../../src/types.js';
integrations\openclaw\tests\handlers\recall.test.ts:4 - import type { MemoriLogger } from '../../src/utils/logger.js';
integrations\openclaw\tests\handlers\recall.test.ts:24 - let config: MemoriPluginConfig;
integrations\openclaw\tests\handlers\recall.test.ts:70 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\recall.test.ts:83 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\recall.test.ts:95 - const { initializeMemoriClient } = await import('../../src/utils/index.js');
integrations\openclaw\tests\handlers\recall.test.ts:177 - it('should handle API errors from memori client', async () => {
integrations\openclaw\tests\handlers\recall.test.ts:178 - const { initializeMemoriClient } = await import('../../src/utils/index.js');

## integrations\openclaw\tests\utils\logger.test.ts
integrations\openclaw\tests\utils\logger.test.ts:2 - import { MemoriLogger } from '../../src/utils/logger.js';

## integrations\openclaw\tests\utils\memori-client.test.ts
integrations\openclaw\tests\utils\memori-client.test.ts:2 - import { initializeMemoriClient } from '../../src/utils/memori-client.js';
integrations\openclaw\tests\utils\memori-client.test.ts:34 - const { Memori } = await import('@memorilabs/memori');
integrations\openclaw\tests\utils\memori-client.test.ts:46 - expect(memoriInstance.config.apiKey).toBe('test-api-key-123');
integrations\openclaw\tests\utils\memori-client.test.ts:50 - const { Memori } = await import('@memorilabs/memori');
integrations\openclaw\tests\utils\memori-client.test.ts:51 - const { OpenClawIntegration } = await import('@memorilabs/memori/integrations');
integrations\openclaw\tests\utils\memori-client.test.ts:67 - const { Memori } = await import('@memorilabs/memori');
integrations\openclaw\tests\utils\memori-client.test.ts:84 - const { Memori } = await import('@memorilabs/memori');
integrations\openclaw\tests\utils\memori-client.test.ts:101 - const { Memori } = await import('@memorilabs/memori');
integrations\openclaw\tests\utils\memori-client.test.ts:118 - const { Memori } = await import('@memorilabs/memori');
integrations\openclaw\tests\utils\memori-client.test.ts:131 - expect(memoriInstance.config.apiKey).toBe('secret-key');

## memori\_cli.py
memori\_cli.py:13 - from memori._config import Config

## memori\_exceptions.py
memori\_exceptions.py:27 - class MemoriApiError(Exception):
memori\_exceptions.py:31 - class MemoriApiClientError(MemoriApiError):
memori\_exceptions.py:45 - class MemoriApiValidationError(MemoriApiClientError):
memori\_exceptions.py:49 - class MemoriApiRequestRejectedError(MemoriApiClientError):
memori\_exceptions.py:53 - class MissingMemoriApiKeyError(RuntimeError):
memori\_exceptions.py:56 - def __init__(self, env_var: str = "MEMORI_API_KEY"):
memori\_exceptions.py:96 - class MemoriLegacyPackageWarning(UserWarning):
memori\_exceptions.py:100 - def warn_if_legacy_memorisdk_installed() -> None:

## memori\_network.py
memori\_network.py:23 - from memori._config import Config
memori\_network.py:24 - from memori._exceptions import (

## memori\_setup.py
memori\_setup.py:13 - from memori._cli import Cli
memori\_setup.py:14 - from memori._config import Config

## memori\__init__.py
memori\__init__.py:16 - from memori._config import Config
memori\__init__.py:17 - from memori._exceptions import (
memori\__init__.py:24 - from memori.embeddings import embed_texts
memori\__init__.py:25 - from memori.llm._providers import Agno as LlmProviderAgno
memori\__init__.py:26 - from memori.llm._providers import Anthropic as LlmProviderAnthropic
memori\__init__.py:27 - from memori.llm._providers import Google as LlmProviderGoogle
memori\__init__.py:28 - from memori.llm._providers import LangChain as LlmProviderLangChain
memori\__init__.py:29 - from memori.llm._providers import OpenAi as LlmProviderOpenAi
memori\__init__.py:30 - from memori.llm._providers import PydanticAi as LlmProviderPydanticAi
memori\__init__.py:31 - from memori.llm._providers import XAi as LlmProviderXAi
memori\__init__.py:32 - from memori.memory.augmentation import Manager as AugmentationManager
memori\__init__.py:33 - from memori.memory.recall import Recall
memori\__init__.py:34 - from memori.storage import Manager as StorageManager
memori\__init__.py:42 - def __init__(self, memori):
memori\__init__.py:57 - from memori.llm._registry import register_llm
memori\__init__.py:73 - class Memori:
memori\__init__.py:79 - from memori._logging import set_truncate_enabled
memori\__init__.py:82 - self.config.api_key = os.environ.get("MEMORI_API_KEY", None)
memori\__init__.py:167 - def __enter__(self) -> "Memori":

## memori\__main__.py
memori\__main__.py:14 - from memori._cli import Cli
memori\__main__.py:15 - from memori._config import Config
memori\__main__.py:16 - from memori._setup import Manager as SetupManager
memori\__main__.py:17 - from memori.api._quota import Manager as ApiQuotaManager
memori\__main__.py:18 - from memori.api._sign_up import Manager as ApiSignUpManager
memori\__main__.py:19 - from memori.storage.cockroachdb._cluster_manager import (

## memori\api\_quota.py
memori\api\_quota.py:11 - from memori._cli import Cli
memori\api\_quota.py:12 - from memori._config import Config
memori\api\_quota.py:13 - from memori._network import Api

## memori\api\_sign_up.py
memori\api\_sign_up.py:15 - from memori._config import Config
memori\api\_sign_up.py:16 - from memori._network import Api

## memori\embeddings\_api.py
memori\embeddings\_api.py:19 - from memori.embeddings._sentence_transformers import get_sentence_transformers_embedder
memori\embeddings\_api.py:20 - from memori.embeddings._tei import TEI
memori\embeddings\_api.py:21 - from memori.embeddings._tei_embed import embed_texts_via_tei
memori\embeddings\_api.py:22 - from memori.embeddings._utils import prepare_text_inputs

## memori\embeddings\_sentence_transformers.py
memori\embeddings\_sentence_transformers.py:26 - from memori.embeddings._utils import embedding_dimension, zero_vectors

## memori\embeddings\_tei_embed.py
memori\embeddings\_tei_embed.py:18 - from memori.embeddings._chunking import chunk_text_by_tokens
memori\embeddings\_tei_embed.py:19 - from memori.embeddings._tei import TEI

## memori\embeddings\__init__.py
memori\embeddings\__init__.py:17 - from memori.embeddings._api import embed_texts
memori\embeddings\__init__.py:18 - from memori.embeddings._format import format_embedding_for_db
memori\embeddings\__init__.py:19 - from memori.embeddings._tei import TEI

## memori\llm\_base.py
memori\llm\_base.py:17 - from memori._config import Config
memori\llm\_base.py:18 - from memori._utils import merge_chunk
memori\llm\_base.py:19 - from memori.llm._utils import agno_is_openai, llm_is_openai, llm_is_xai
memori\llm\_base.py:20 - from memori.llm.helpers.serialization import convert_to_json
memori\llm\_base.py:56 - from memori.llm.invoke.invoke import (

## memori\llm\_providers.py
memori\llm\_providers.py:13 - from memori.llm._base import BaseProvider
memori\llm\_providers.py:14 - from memori.llm.clients import Agno as AgnoMemoriClient
memori\llm\_providers.py:15 - from memori.llm.clients import Anthropic as AnthropicMemoriClient
memori\llm\_providers.py:16 - from memori.llm.clients import Google as GoogleMemoriClient
memori\llm\_providers.py:17 - from memori.llm.clients import LangChain as LangChainMemoriClient
memori\llm\_providers.py:18 - from memori.llm.clients import OpenAi as OpenAiMemoriClient
memori\llm\_providers.py:19 - from memori.llm.clients import PydanticAi as PydanticAiMemoriClient
memori\llm\_providers.py:20 - from memori.llm.clients import XAi as XAiMemoriClient
memori\llm\_providers.py:31 - self.client = AgnoMemoriClient(self.config).register(
memori\llm\_providers.py:49 - self.client = AnthropicMemoriClient(self.config).register(client)
memori\llm\_providers.py:62 - self.client = GoogleMemoriClient(self.config).register(client)
memori\llm\_providers.py:77 - self.client = LangChainMemoriClient(self.config).register(
memori\llm\_providers.py:95 - self.client = OpenAiMemoriClient(self.config).register(
memori\llm\_providers.py:110 - self.client = PydanticAiMemoriClient(self.config).register(client)
memori\llm\_providers.py:123 - self.client = XAiMemoriClient(self.config).register(client, stream=stream)

## memori\llm\_registry.py
memori\llm\_registry.py:14 - from memori._exceptions import UnsupportedLLMProviderError
memori\llm\_registry.py:15 - from memori.llm._base import BaseClient, BaseLlmAdaptor
memori\llm\_registry.py:23 - - Adapter classes are registered at import time via `memori.llm.__init__`.
memori\llm\_registry.py:125 - from memori.llm._constants import (
memori\llm\_registry.py:133 - memori.config.framework.provider = AGNO_FRAMEWORK_PROVIDER
memori\llm\_registry.py:134 - memori.config.llm.provider = _first_provider(
memori\llm\_registry.py:148 - from memori.llm._constants import (
memori\llm\_registry.py:156 - memori.config.framework.provider = LANGCHAIN_FRAMEWORK_PROVIDER
memori\llm\_registry.py:157 - memori.config.llm.provider = _first_provider(
memori\llm\_registry.py:171 - client_handler = Registry().client(client, memori.config)
memori\llm\_registry.py:176 - provider = getattr(memori.config.llm, "provider", None)

## memori\llm\_utils.py
memori\llm\_utils.py:11 - from memori.llm._constants import (

## memori\llm\_xai_wrappers.py
memori\llm\_xai_wrappers.py:19 - from memori.llm._constants import XAI_LLM_PROVIDER
memori\llm\_xai_wrappers.py:20 - from memori.memory.augmentation._message import ConversationMessage
memori\llm\_xai_wrappers.py:143 - from memori.memory._manager import Manager as MemoryManager
memori\llm\_xai_wrappers.py:163 - MemoryManager(self.config).execute(payload)
memori\llm\_xai_wrappers.py:166 - from memori.memory.augmentation.input import AugmentationInput
memori\llm\_xai_wrappers.py:190 - from memori.memory._manager import Manager as MemoryManager
memori\llm\_xai_wrappers.py:210 - MemoryManager(self.config).execute(payload)
memori\llm\_xai_wrappers.py:213 - from memori.memory.augmentation.input import AugmentationInput
memori\llm\_xai_wrappers.py:237 - from memori.memory._manager import Manager as MemoryManager
memori\llm\_xai_wrappers.py:273 - MemoryManager(self.config).execute(payload)
memori\llm\_xai_wrappers.py:276 - from memori.memory.augmentation.input import AugmentationInput

## memori\llm\__init__.py
memori\llm\__init__.py:11 - from memori.llm import clients  # noqa: F401
memori\llm\__init__.py:12 - from memori.llm._registry import Registry
memori\llm\__init__.py:13 - from memori.llm.adapters import anthropic, bedrock, google, openai, xai  # noqa: F401

## memori\llm\adapters\anthropic\_adapter.py
memori\llm\adapters\anthropic\_adapter.py:11 - from memori.llm._base import BaseLlmAdaptor
memori\llm\adapters\anthropic\_adapter.py:12 - from memori.llm._registry import Registry
memori\llm\adapters\anthropic\_adapter.py:13 - from memori.llm._utils import agno_is_anthropic, llm_is_anthropic

## memori\llm\adapters\anthropic\__init__.py
memori\llm\adapters\anthropic\__init__.py:1 - from memori.llm.adapters.anthropic._adapter import Adapter

## memori\llm\adapters\bedrock\_adapter.py
memori\llm\adapters\bedrock\_adapter.py:11 - from memori.llm._base import BaseLlmAdaptor
memori\llm\adapters\bedrock\_adapter.py:12 - from memori.llm._registry import Registry
memori\llm\adapters\bedrock\_adapter.py:13 - from memori.llm._utils import llm_is_bedrock

## memori\llm\adapters\bedrock\__init__.py
memori\llm\adapters\bedrock\__init__.py:1 - from memori.llm.adapters.bedrock._adapter import Adapter

## memori\llm\adapters\google\_adapter.py
memori\llm\adapters\google\_adapter.py:11 - from memori.llm._base import BaseLlmAdaptor
memori\llm\adapters\google\_adapter.py:12 - from memori.llm._registry import Registry
memori\llm\adapters\google\_adapter.py:13 - from memori.llm._utils import agno_is_google, llm_is_google

## memori\llm\adapters\google\__init__.py
memori\llm\adapters\google\__init__.py:1 - from memori.llm.adapters.google._adapter import Adapter

## memori\llm\adapters\openai\_adapter.py
memori\llm\adapters\openai\_adapter.py:11 - from memori.llm._base import BaseLlmAdaptor
memori\llm\adapters\openai\_adapter.py:12 - from memori.llm._registry import Registry
memori\llm\adapters\openai\_adapter.py:13 - from memori.llm._utils import agno_is_openai, llm_is_openai

## memori\llm\adapters\openai\__init__.py
memori\llm\adapters\openai\__init__.py:1 - from memori.llm.adapters.openai._adapter import Adapter

## memori\llm\adapters\xai\_adapter.py
memori\llm\adapters\xai\_adapter.py:11 - from memori.llm._base import BaseLlmAdaptor
memori\llm\adapters\xai\_adapter.py:12 - from memori.llm._registry import Registry
memori\llm\adapters\xai\_adapter.py:13 - from memori.llm._utils import agno_is_xai, llm_is_xai

## memori\llm\adapters\xai\__init__.py
memori\llm\adapters\xai\__init__.py:1 - from memori.llm.adapters.xai._adapter import Adapter

## memori\llm\clients\direct.py
memori\llm\clients\direct.py:1 - from memori.llm._base import BaseClient
memori\llm\clients\direct.py:2 - from memori.llm._constants import (
memori\llm\clients\direct.py:11 - from memori.llm._registry import Registry
memori\llm\clients\direct.py:12 - from memori.llm._utils import (
memori\llm\clients\direct.py:19 - from memori.llm.invoke.invoke import Invoke, InvokeAsync, InvokeAsyncIterator
memori\llm\clients\direct.py:240 - from memori.llm._constants import XAI_LLM_PROVIDER
memori\llm\clients\direct.py:241 - from memori.llm._xai_wrappers import XAiWrappers

## memori\llm\clients\frameworks.py
memori\llm\clients\frameworks.py:1 - from memori.llm._base import BaseClient
memori\llm\clients\frameworks.py:2 - from memori.llm._constants import (
memori\llm\clients\frameworks.py:10 - from memori.llm.clients.direct import Anthropic, Google, OpenAi, XAi
memori\llm\clients\frameworks.py:11 - from memori.llm.invoke.invoke import Invoke, InvokeAsync, InvokeAsyncIterator

## memori\llm\clients\__init__.py
memori\llm\clients\__init__.py:1 - from memori.llm.clients.direct import Anthropic, Google, OpenAi, PydanticAi, XAi
memori\llm\clients\__init__.py:2 - from memori.llm.clients.frameworks import Agno, LangChain

## memori\llm\helpers\query_extraction.py
memori\llm\helpers\query_extraction.py:6 - from memori.llm.helpers.serialization import str_object_mapping

## memori\llm\helpers\serialization.py
memori\llm\helpers\serialization.py:8 - from memori.llm._utils import provider_is_langchain

## memori\llm\invoke\invoke.py
memori\llm\invoke\invoke.py:9 - from memori._logging import truncate
memori\llm\invoke\invoke.py:10 - from memori._utils import merge_chunk
memori\llm\invoke\invoke.py:11 - from memori.llm._base import BaseInvoke
memori\llm\invoke\invoke.py:12 - from memori.llm._utils import client_is_bedrock
memori\llm\invoke\invoke.py:13 - from memori.llm.invoke.iterable import Iterable as MemoriIterable
memori\llm\invoke\invoke.py:14 - from memori.llm.invoke.iterator import AsyncIterator as MemoriAsyncIterator
memori\llm\invoke\invoke.py:15 - from memori.llm.invoke.iterator import Iterator as MemoriIterator
memori\llm\invoke\invoke.py:16 - from memori.llm.invoke.streaming import StreamingBody as MemoriStreamingBody
memori\llm\invoke\invoke.py:17 - from memori.llm.pipelines.conversation_injection import inject_conversation_messages
memori\llm\invoke\invoke.py:18 - from memori.llm.pipelines.post_invoke import handle_post_response
memori\llm\invoke\invoke.py:19 - from memori.llm.pipelines.recall_injection import inject_recalled_facts
memori\llm\invoke\invoke.py:42 - MemoriIterator(self.config, raw_response)
memori\llm\invoke\invoke.py:51 - MemoriIterable(self.config, raw_response["body"])
memori\llm\invoke\invoke.py:57 - MemoriStreamingBody(self.config, raw_response["body"])
memori\llm\invoke\invoke.py:89 - MemoriAsyncIterator(self.config, raw_response)
memori\llm\invoke\invoke.py:114 - MemoriAsyncIterator(self.config, raw_response)

## memori\llm\invoke\iterable.py
memori\llm\invoke\iterable.py:4 - from memori._config import Config
memori\llm\invoke\iterable.py:5 - from memori._utils import bytes_to_json
memori\llm\invoke\iterable.py:6 - from memori.llm._base import BaseInvoke
memori\llm\invoke\iterable.py:7 - from memori.llm._utils import client_is_bedrock
memori\llm\invoke\iterable.py:8 - from memori.llm.helpers.serialization import format_kwargs, format_response
memori\llm\invoke\iterable.py:9 - from memori.llm.pipelines.post_invoke import format_payload
memori\llm\invoke\iterable.py:10 - from memori.memory._manager import Manager as MemoryManager
memori\llm\invoke\iterable.py:45 - MemoryManager(self.config).execute(

## memori\llm\invoke\iterator.py
memori\llm\invoke\iterator.py:3 - from memori.llm._base import BaseIterator
memori\llm\invoke\iterator.py:4 - from memori.llm.helpers.serialization import format_kwargs, format_response
memori\llm\invoke\iterator.py:5 - from memori.llm.pipelines.post_invoke import format_payload
memori\llm\invoke\iterator.py:6 - from memori.memory._manager import Manager as MemoryManager
memori\llm\invoke\iterator.py:25 - MemoryManager(self.config).execute(
memori\llm\invoke\iterator.py:70 - MemoryManager(self.config).execute(

## memori\llm\invoke\streaming.py
memori\llm\invoke\streaming.py:4 - from memori._config import Config
memori\llm\invoke\streaming.py:5 - from memori._utils import bytes_to_json
memori\llm\invoke\streaming.py:6 - from memori.llm._base import BaseInvoke
memori\llm\invoke\streaming.py:7 - from memori.llm._utils import client_is_bedrock
memori\llm\invoke\streaming.py:8 - from memori.llm.helpers.serialization import format_kwargs, format_response
memori\llm\invoke\streaming.py:9 - from memori.llm.pipelines.post_invoke import format_payload
memori\llm\invoke\streaming.py:10 - from memori.memory._manager import Manager as MemoryManager
memori\llm\invoke\streaming.py:38 - MemoryManager(self.config).execute(

## memori\llm\pipelines\conversation_injection.py
memori\llm\pipelines\conversation_injection.py:6 - from memori.llm._utils import (

## memori\llm\pipelines\post_invoke.py
memori\llm\pipelines\post_invoke.py:5 - from memori._logging import truncate
memori\llm\pipelines\post_invoke.py:6 - from memori.llm.helpers.serialization import (
memori\llm\pipelines\post_invoke.py:12 - from memori.memory.augmentation.augmentations.memori.models import (
memori\llm\pipelines\post_invoke.py:36 - from memori.memory._conversation_messages import parse_payload_conversation_messages
memori\llm\pipelines\post_invoke.py:95 - from memori.memory._manager import Manager as MemoryManager
memori\llm\pipelines\post_invoke.py:130 - MemoryManager(invoke.config).execute(payload)
memori\llm\pipelines\post_invoke.py:132 - from memori.memory.augmentation._handler import handle_augmentation

## memori\llm\pipelines\recall_injection.py
memori\llm\pipelines\recall_injection.py:5 - from memori._logging import truncate
memori\llm\pipelines\recall_injection.py:6 - from memori._utils import format_date_created
memori\llm\pipelines\recall_injection.py:7 - from memori.llm._utils import (
memori\llm\pipelines\recall_injection.py:13 - from memori.llm.helpers.google_system_instruction import (
memori\llm\pipelines\recall_injection.py:16 - from memori.llm.helpers.query_extraction import extract_user_query
memori\llm\pipelines\recall_injection.py:17 - from memori.memory.recall import (
memori\llm\pipelines\recall_injection.py:21 - from memori.search._types import FactSearchResult
memori\llm\pipelines\recall_injection.py:101 - from memori.memory.recall import Recall
memori\llm\pipelines\recall_injection.py:105 - from memori.memory.recall import CloudRecallResponse

## memori\memory\recall.py
memori\memory\recall.py:18 - from memori._config import Config
memori\memory\recall.py:19 - from memori._logging import truncate
memori\memory\recall.py:20 - from memori._network import Api
memori\memory\recall.py:21 - from memori.embeddings import embed_texts
memori\memory\recall.py:22 - from memori.search import search_facts as search_facts_api
memori\memory\recall.py:23 - from memori.search._types import FactSearchResult

## memori\memory\_collector.py
memori\memory\_collector.py:20 - from memori._config import Config

## memori\memory\_conversation_messages.py
memori\memory\_conversation_messages.py:63 - from memori.llm._registry import Registry as LlmRegistry

## memori\memory\_manager.py
memori\memory\_manager.py:14 - from memori._config import Config
memori\memory\_manager.py:15 - from memori._exceptions import MemoriApiError
memori\memory\_manager.py:16 - from memori._network import Api
memori\memory\_manager.py:17 - from memori.memory._writer import Writer

## memori\memory\_struct.py
memori\memory\_struct.py:102 - class Memories:
memori\memory\_struct.py:108 - def configure_from_advanced_augmentation(self, json_: dict) -> "Memories":

## memori\memory\_writer.py
memori\memory\_writer.py:16 - from memori._config import Config

## memori\memory\augmentation\input.py
memori\memory\augmentation\input.py:13 - from memori.memory.augmentation._message import ConversationMessage

## memori\memory\augmentation\_base.py
memori\memory\augmentation\_base.py:11 - from memori.memory.augmentation.input import AugmentationInput

## memori\memory\augmentation\_db_writer.py
memori\memory\augmentation\_db_writer.py:17 - from memori.storage._connection import connection_context

## memori\memory\augmentation\_handler.py
memori\memory\augmentation\_handler.py:17 - from memori._exceptions import MemoriApiError
memori\memory\augmentation\_handler.py:18 - from memori._network import Api, ApiSubdomain
memori\memory\augmentation\_handler.py:19 - from memori.memory.augmentation.augmentations.memori.models import AugmentationInputData
memori\memory\augmentation\_handler.py:20 - from memori.memory.augmentation.input import AugmentationInput

## memori\memory\augmentation\_manager.py
memori\memory\augmentation\_manager.py:17 - from memori._config import Config
memori\memory\augmentation\_manager.py:18 - from memori.memory.augmentation._base import AugmentationContext
memori\memory\augmentation\_manager.py:19 - from memori.memory.augmentation._db_writer import WriteTask, get_db_writer
memori\memory\augmentation\_manager.py:20 - from memori.memory.augmentation._registry import Registry as AugmentationRegistry
memori\memory\augmentation\_manager.py:21 - from memori.memory.augmentation._runtime import get_runtime
memori\memory\augmentation\_manager.py:22 - from memori.memory.augmentation.input import AugmentationInput
memori\memory\augmentation\_manager.py:23 - from memori.storage._connection import connection_context
memori\memory\augmentation\_manager.py:98 - from memori._exceptions import QuotaExceededError
memori\memory\augmentation\_manager.py:135 - from memori._exceptions import QuotaExceededError
memori\memory\augmentation\_manager.py:148 - from memori._exceptions import QuotaExceededError

## memori\memory\augmentation\__init__.py
memori\memory\augmentation\__init__.py:11 - from memori.memory.augmentation._manager import Manager
memori\memory\augmentation\__init__.py:12 - from memori.memory.augmentation.augmentations import memori  # noqa: F401

## memori\memory\augmentation\augmentations\memori\models.py
memori\memory\augmentation\augmentations\memori\models.py:13 - from memori.memory.augmentation._message import ConversationMessage

## memori\memory\augmentation\augmentations\memori\_augmentation.py
memori\memory\augmentation\augmentations\memori\_augmentation.py:14 - from memori._network import Api
memori\memory\augmentation\augmentations\memori\_augmentation.py:15 - from memori.embeddings import embed_texts
memori\memory\augmentation\augmentations\memori\_augmentation.py:16 - from memori.memory._struct import Memories, build_fact_text_from_triple_entry
memori\memory\augmentation\augmentations\memori\_augmentation.py:17 - from memori.memory.augmentation._base import AugmentationContext, BaseAugmentation
memori\memory\augmentation\augmentations\memori\_augmentation.py:18 - from memori.memory.augmentation._models import (
memori\memory\augmentation\augmentations\memori\_augmentation.py:34 - from memori.memory.augmentation._registry import Registry
memori\memory\augmentation\augmentations\memori\_augmentation.py:161 - from memori._exceptions import QuotaExceededError
memori\memory\augmentation\augmentations\memori\_augmentation.py:182 - async def _process_api_response(self, api_response: dict) -> Memories:

## memori\memory\augmentation\augmentations\memori\__init__.py
memori\memory\augmentation\augmentations\memori\__init__.py:11 - from memori.memory.augmentation.augmentations.memori._augmentation import (
memori\memory\augmentation\augmentations\memori\__init__.py:23 - from memori.memory.augmentation.augmentations.memori.models import (

## memori\search\_api.py
memori\search\_api.py:15 - from memori.search._core import (
memori\search\_api.py:18 - from memori.search._faiss import find_similar_embeddings
memori\search\_api.py:19 - from memori.search._lexical import dense_lexical_weights, lexical_scores_for_ids
memori\search\_api.py:20 - from memori.search._types import FactCandidate, FactSearchResult

## memori\search\_core.py
memori\search\_core.py:17 - from memori.search._types import FactCandidate, FactId, FactSearchResult

## memori\search\_faiss.py
memori\search\_faiss.py:20 - from memori.search._parsing import parse_embedding
memori\search\_faiss.py:21 - from memori.search._types import FactId

## memori\search\_lexical.py
memori\search\_lexical.py:19 - from memori.search._types import FactId

## memori\search\_parsing.py
memori\search\_parsing.py:27 - if isinstance(raw, bytes | memoryview):

## memori\search\__init__.py
memori\search\__init__.py:20 - from memori.search._api import search_facts
memori\search\__init__.py:21 - from memori.search._faiss import find_similar_embeddings
memori\search\__init__.py:22 - from memori.search._parsing import parse_embedding
memori\search\__init__.py:23 - from memori.search._types import FactCandidate, FactSearchResult

## memori\storage\_builder.py
memori\storage\_builder.py:11 - from memori._cli import Cli
memori\storage\_builder.py:12 - from memori._config import Config
memori\storage\_builder.py:13 - from memori.storage._registry import Registry

## memori\storage\_connection.py
memori\storage\_connection.py:15 - from memori.storage._base import BaseStorageAdapter
memori\storage\_connection.py:16 - from memori.storage._registry import Registry

## memori\storage\_manager.py
memori\storage\_manager.py:11 - from memori._config import Config
memori\storage\_manager.py:12 - from memori.storage._builder import Builder
memori\storage\_manager.py:13 - from memori.storage._connection import connection_context
memori\storage\_manager.py:14 - from memori.storage._registry import Registry

## memori\storage\_registry.py
memori\storage\_registry.py:14 - from memori._exceptions import UnsupportedDatabaseError
memori\storage\_registry.py:15 - from memori.storage._base import BaseStorageAdapter

## memori\storage\__init__.py
memori\storage\__init__.py:13 - from memori.storage._manager import Manager

## memori\storage\adapters\dbapi\_adapter.py
memori\storage\adapters\dbapi\_adapter.py:11 - from memori.storage._base import BaseStorageAdapter
memori\storage\adapters\dbapi\_adapter.py:12 - from memori.storage._registry import Registry

## memori\storage\adapters\dbapi\__init__.py
memori\storage\adapters\dbapi\__init__.py:1 - from memori.storage.adapters.dbapi._adapter import Adapter

## memori\storage\adapters\django\_adapter.py
memori\storage\adapters\django\_adapter.py:11 - from memori.storage._base import BaseStorageAdapter
memori\storage\adapters\django\_adapter.py:12 - from memori.storage._registry import Registry

## memori\storage\adapters\django\__init__.py
memori\storage\adapters\django\__init__.py:1 - from memori.storage.adapters.django._adapter import Adapter

## memori\storage\adapters\mongodb\_adapter.py
memori\storage\adapters\mongodb\_adapter.py:13 - from memori.storage._base import BaseStorageAdapter
memori\storage\adapters\mongodb\_adapter.py:14 - from memori.storage._registry import Registry

## memori\storage\adapters\mongodb\__init__.py
memori\storage\adapters\mongodb\__init__.py:1 - from memori.storage.adapters.mongodb._adapter import Adapter

## memori\storage\adapters\sqlalchemy\_adapter.py
memori\storage\adapters\sqlalchemy\_adapter.py:11 - from memori.storage._base import BaseStorageAdapter
memori\storage\adapters\sqlalchemy\_adapter.py:12 - from memori.storage._registry import Registry

## memori\storage\adapters\sqlalchemy\__init__.py
memori\storage\adapters\sqlalchemy\__init__.py:1 - from memori.storage.adapters.sqlalchemy._adapter import Adapter

## memori\storage\cockroachdb\_cluster_manager.py
memori\storage\cockroachdb\_cluster_manager.py:18 - from memori._cli import Cli
memori\storage\cockroachdb\_cluster_manager.py:19 - from memori._config import Config
memori\storage\cockroachdb\_cluster_manager.py:20 - from memori._exceptions import MissingPsycopgError
memori\storage\cockroachdb\_cluster_manager.py:21 - from memori._network import Api
memori\storage\cockroachdb\_cluster_manager.py:22 - from memori.storage._builder import Builder
memori\storage\cockroachdb\_cluster_manager.py:23 - from memori.storage._manager import Manager
memori\storage\cockroachdb\_cluster_manager.py:24 - from memori.storage.cockroachdb._display import Display
memori\storage\cockroachdb\_cluster_manager.py:25 - from memori.storage.cockroachdb._files import Files

## memori\storage\cockroachdb\_display.py
memori\storage\cockroachdb\_display.py:11 - from memori.storage.cockroachdb._files import Files

## memori\storage\drivers\mongodb\_driver.py
memori\storage\drivers\mongodb\_driver.py:14 - from memori.storage._base import (
memori\storage\drivers\mongodb\_driver.py:28 - from memori.storage._registry import Registry
memori\storage\drivers\mongodb\_driver.py:29 - from memori.storage.migrations._mongodb import migrations
memori\storage\drivers\mongodb\_driver.py:182 - from memori._utils import generate_uniq
memori\storage\drivers\mongodb\_driver.py:183 - from memori.embeddings import format_embedding_for_db
memori\storage\drivers\mongodb\_driver.py:382 - from memori._utils import generate_uniq
memori\storage\drivers\mongodb\_driver.py:525 - from memori._utils import generate_uniq

## memori\storage\drivers\mongodb\__init__.py
memori\storage\drivers\mongodb\__init__.py:1 - from memori.storage.drivers.mongodb._driver import Driver

## memori\storage\drivers\mysql\_driver.py
memori\storage\drivers\mysql\_driver.py:13 - from memori._utils import generate_uniq
memori\storage\drivers\mysql\_driver.py:14 - from memori.storage._base import (
memori\storage\drivers\mysql\_driver.py:28 - from memori.storage._registry import Registry
memori\storage\drivers\mysql\_driver.py:29 - from memori.storage.migrations._mysql import migrations
memori\storage\drivers\mysql\_driver.py:44 - FROM memori_conversation c
memori\storage\drivers\mysql\_driver.py:85 - FROM memori_conversation
memori\storage\drivers\mysql\_driver.py:119 - FROM memori_conversation
memori\storage\drivers\mysql\_driver.py:138 - FROM memori_conversation
memori\storage\drivers\mysql\_driver.py:186 - FROM memori_conversation_message
memori\storage\drivers\mysql\_driver.py:239 - FROM memori_subject
memori\storage\drivers\mysql\_driver.py:275 - FROM memori_predicate
memori\storage\drivers\mysql\_driver.py:316 - FROM memori_object
memori\storage\drivers\mysql\_driver.py:382 - FROM memori_entity
memori\storage\drivers\mysql\_driver.py:404 - from memori.embeddings import format_embedding_for_db
memori\storage\drivers\mysql\_driver.py:453 - FROM memori_entity_fact
memori\storage\drivers\mysql\_driver.py:491 - FROM memori_entity_fact
memori\storage\drivers\mysql\_driver.py:513 - FROM memori_entity_fact
memori\storage\drivers\mysql\_driver.py:534 - FROM memori_entity_fact_mention m
memori\storage\drivers\mysql\_driver.py:581 - FROM memori_process
memori\storage\drivers\mysql\_driver.py:659 - FROM memori_session
... and 3 more

## memori\storage\drivers\mysql\__init__.py
memori\storage\drivers\mysql\__init__.py:1 - from memori.storage.drivers.mysql._driver import Driver

## memori\storage\drivers\oceanbase\_driver.py
memori\storage\drivers\oceanbase\_driver.py:13 - from memori._utils import generate_uniq
memori\storage\drivers\oceanbase\_driver.py:14 - from memori.storage._registry import Registry
memori\storage\drivers\oceanbase\_driver.py:15 - from memori.storage.drivers.mysql._driver import Driver as MysqlDriver
memori\storage\drivers\oceanbase\_driver.py:16 - from memori.storage.drivers.mysql._driver import EntityFact as MysqlEntityFact
memori\storage\drivers\oceanbase\_driver.py:17 - from memori.storage.migrations._oceanbase import migrations
memori\storage\drivers\oceanbase\_driver.py:31 - from memori.embeddings import format_embedding_for_db
memori\storage\drivers\oceanbase\_driver.py:82 - FROM memori_entity_fact

## memori\storage\drivers\oceanbase\__init__.py
memori\storage\drivers\oceanbase\__init__.py:1 - from memori.storage.drivers.oceanbase._driver import Driver

## memori\storage\drivers\oracle\_driver.py
memori\storage\drivers\oracle\_driver.py:13 - from memori.storage._base import (
memori\storage\drivers\oracle\_driver.py:27 - from memori.storage._registry import Registry
memori\storage\drivers\oracle\_driver.py:28 - from memori.storage.migrations._oracle import migrations
memori\storage\drivers\oracle\_driver.py:43 - FROM memori_conversation c
memori\storage\drivers\oracle\_driver.py:87 - FROM memori_conversation
memori\storage\drivers\oracle\_driver.py:121 - FROM memori_conversation
memori\storage\drivers\oracle\_driver.py:140 - FROM memori_conversation
memori\storage\drivers\oracle\_driver.py:188 - FROM memori_conversation_message
memori\storage\drivers\oracle\_driver.py:224 - FROM memori_entity
memori\storage\drivers\oracle\_driver.py:246 - from memori._utils import generate_uniq
memori\storage\drivers\oracle\_driver.py:247 - from memori.embeddings import format_embedding_for_db
memori\storage\drivers\oracle\_driver.py:289 - FROM memori_entity_fact
memori\storage\drivers\oracle\_driver.py:334 - FROM memori_entity_fact
memori\storage\drivers\oracle\_driver.py:358 - FROM memori_entity_fact
memori\storage\drivers\oracle\_driver.py:379 - FROM memori_entity_fact_mention m
memori\storage\drivers\oracle\_driver.py:408 - from memori._utils import generate_uniq
memori\storage\drivers\oracle\_driver.py:437 - FROM memori_subject
memori\storage\drivers\oracle\_driver.py:470 - FROM memori_predicate
memori\storage\drivers\oracle\_driver.py:506 - FROM memori_object
memori\storage\drivers\oracle\_driver.py:564 - FROM memori_process
... and 5 more

## memori\storage\drivers\oracle\__init__.py
memori\storage\drivers\oracle\__init__.py:1 - from memori.storage.drivers.oracle._driver import Driver

## memori\storage\drivers\postgresql\_driver.py
memori\storage\drivers\postgresql\_driver.py:13 - from memori.storage._base import (
memori\storage\drivers\postgresql\_driver.py:27 - from memori.storage._registry import Registry
memori\storage\drivers\postgresql\_driver.py:28 - from memori.storage.migrations._postgresql import migrations
memori\storage\drivers\postgresql\_driver.py:43 - FROM memori_conversation c
memori\storage\drivers\postgresql\_driver.py:85 - FROM memori_conversation
memori\storage\drivers\postgresql\_driver.py:119 - FROM memori_conversation
memori\storage\drivers\postgresql\_driver.py:138 - FROM memori_conversation
memori\storage\drivers\postgresql\_driver.py:186 - FROM memori_conversation_message
memori\storage\drivers\postgresql\_driver.py:223 - FROM memori_entity
memori\storage\drivers\postgresql\_driver.py:245 - from memori._utils import generate_uniq
memori\storage\drivers\postgresql\_driver.py:246 - from memori.embeddings import format_embedding_for_db
memori\storage\drivers\postgresql\_driver.py:296 - FROM memori_entity_fact
memori\storage\drivers\postgresql\_driver.py:333 - FROM memori_entity_fact
memori\storage\drivers\postgresql\_driver.py:353 - FROM memori_entity_fact
memori\storage\drivers\postgresql\_driver.py:380 - FROM memori_entity_fact_mention m
memori\storage\drivers\postgresql\_driver.py:411 - from memori._utils import generate_uniq
memori\storage\drivers\postgresql\_driver.py:446 - FROM memori_subject
memori\storage\drivers\postgresql\_driver.py:483 - FROM memori_predicate
memori\storage\drivers\postgresql\_driver.py:525 - FROM memori_object
memori\storage\drivers\postgresql\_driver.py:591 - FROM memori_process
... and 5 more

## memori\storage\drivers\postgresql\__init__.py
memori\storage\drivers\postgresql\__init__.py:1 - from memori.storage.drivers.postgresql._driver import Driver

## memori\storage\drivers\sqlite\_driver.py
memori\storage\drivers\sqlite\_driver.py:13 - from memori.storage._base import (
memori\storage\drivers\sqlite\_driver.py:27 - from memori.storage._registry import Registry
memori\storage\drivers\sqlite\_driver.py:28 - from memori.storage.migrations._sqlite import migrations
memori\storage\drivers\sqlite\_driver.py:43 - FROM memori_conversation c
memori\storage\drivers\sqlite\_driver.py:84 - FROM memori_conversation
memori\storage\drivers\sqlite\_driver.py:118 - FROM memori_conversation
memori\storage\drivers\sqlite\_driver.py:137 - FROM memori_conversation
memori\storage\drivers\sqlite\_driver.py:185 - FROM memori_conversation_message
memori\storage\drivers\sqlite\_driver.py:222 - FROM memori_entity
memori\storage\drivers\sqlite\_driver.py:244 - from memori._utils import generate_uniq
memori\storage\drivers\sqlite\_driver.py:245 - from memori.embeddings import format_embedding_for_db
memori\storage\drivers\sqlite\_driver.py:294 - FROM memori_entity_fact
memori\storage\drivers\sqlite\_driver.py:332 - FROM memori_entity_fact
memori\storage\drivers\sqlite\_driver.py:354 - FROM memori_entity_fact
memori\storage\drivers\sqlite\_driver.py:375 - FROM memori_entity_fact_mention m
memori\storage\drivers\sqlite\_driver.py:407 - from memori._utils import generate_uniq
memori\storage\drivers\sqlite\_driver.py:435 - "SELECT id FROM memori_subject WHERE uniq = ?",
memori\storage\drivers\sqlite\_driver.py:464 - "SELECT id FROM memori_predicate WHERE uniq = ?",
memori\storage\drivers\sqlite\_driver.py:497 - "SELECT id FROM memori_object WHERE uniq = ?",
memori\storage\drivers\sqlite\_driver.py:554 - FROM memori_process
... and 5 more

## memori\storage\drivers\sqlite\__init__.py
memori\storage\drivers\sqlite\__init__.py:1 - from memori.storage.drivers.sqlite._driver import Driver

## memori-ts\README.md
memori-ts\README.md:43 - import { Memori } from '@memorilabs/memori';
memori-ts\README.md:94 - - **Zero-Latency Memory:** Background processing ensures your LLM calls are never slowed down.
memori-ts\README.md:181 - We welcome contributions from the community! Please see our [Contributing Guidelines](https://github.com/MemoriLabs/Memori/blob/main/CONTRIBUTING.md) for details on:

## memori-ts\examples\cloud\simple.ts
memori-ts\examples\cloud\simple.ts:9 - import { Memori } from '../../src/index.js';

## memori-ts\src\index.ts
memori-ts\src\index.ts:1 - export { Memori } from './memori.js';

## memori-ts\src\memori.ts
memori-ts\src\memori.ts:1 - import { Axon } from '@memorilabs/axon';
memori-ts\src\memori.ts:14 - * This class orchestrates the connection between your application, the Memori Cloud,
memori-ts\src\memori.ts:20 - export class Memori {
memori-ts\src\memori.ts:95 - * Manually retrieves relevant facts from Memori based on a query.

## memori-ts\src\core\errors.ts
memori-ts\src\core\errors.ts:1 - export { UnsupportedLLMProviderError } from '@memorilabs/axon';
memori-ts\src\core\errors.ts:3 - /** Base class for all Memori SDK errors. */
memori-ts\src\core\errors.ts:4 - export class MemoriError extends Error {
memori-ts\src\core\errors.ts:13 - export class QuotaExceededError extends MemoriError {
memori-ts\src\core\errors.ts:24 - export class MemoriApiClientError extends MemoriError {
memori-ts\src\core\errors.ts:37 - export class MemoriApiValidationError extends MemoriApiClientError {
memori-ts\src\core\errors.ts:45 - export class MemoriApiRequestRejectedError extends MemoriApiClientError {
memori-ts\src\core\errors.ts:53 - export class MissingMemoriApiKeyError extends MemoriError {
memori-ts\src\core\errors.ts:63 - export class TimeoutError extends MemoriError {

## memori-ts\src\engines\augmentation.ts
memori-ts\src\engines\augmentation.ts:1 - import { CallContext, LLMRequest, LLMResponse } from '@memorilabs/axon';

## memori-ts\src\engines\persistence.ts
memori-ts\src\engines\persistence.ts:1 - import { CallContext, LLMRequest, LLMResponse } from '@memorilabs/axon';

## memori-ts\src\engines\recall.ts
memori-ts\src\engines\recall.ts:1 - import { CallContext, LLMRequest, Message, Role } from '@memorilabs/axon';

## memori-ts\src\integrations\base.ts
memori-ts\src\integrations\base.ts:1 - import { LLMRequest, LLMResponse, CallContext } from '@memorilabs/axon';
memori-ts\src\integrations\base.ts:2 - import { MemoriCore, IntegrationRequest } from '../types/integrations.js';
memori-ts\src\integrations\base.ts:5 - * Abstract base class for Memori framework integrations.

## memori-ts\src\types\api.ts
memori-ts\src\types\api.ts:32 - * Raw response shape from the Memori Cloud API.
memori-ts\src\types\api.ts:66 - * The ISO timestamp (YYYY-MM-DD HH:mm) when this memory was originally created.

## memori-ts\src\types\integrations.ts
memori-ts\src\types\integrations.ts:13 - export interface MemoriCore {
memori-ts\src\types\integrations.ts:84 - * Used to strictly type the return value of the `memori.integrate()` method.
memori-ts\src\types\integrations.ts:89 - * Constructor signature for a Memori integration class.
memori-ts\src\types\integrations.ts:93 - export type IntegrationConstructor<T extends SupportedIntegration> = new (core: MemoriCore) => T;

## memori-ts\src\utils\utils.ts
memori-ts\src\utils\utils.ts:1 - import { Message } from '@memorilabs/axon';

## memori-ts\tests\memori.test.ts
memori-ts\tests\memori.test.ts:2 - import { Memori } from '../src/memori.js';
memori-ts\tests\memori.test.ts:10 - expect(memori.config).toBeInstanceOf(Config);
memori-ts\tests\memori.test.ts:21 - expect(memori.config.entityId).toBe('user-123');
memori-ts\tests\memori.test.ts:22 - expect(memori.config.processId).toBe('process-xyz');

## memori-ts\tests\core\config.test.ts
memori-ts\tests\core\config.test.ts:17 - process.env.MEMORI_API_KEY = 'env-key';
memori-ts\tests\core\config.test.ts:23 - process.env.MEMORI_TEST_MODE = '1';
memori-ts\tests\core\config.test.ts:30 - process.env.MEMORI_API_URL_BASE = 'https://custom.memori.ai';
memori-ts\tests\core\config.test.ts:32 - expect(config.baseUrl).toBe('https://custom.memori.ai');
memori-ts\tests\core\config.test.ts:36 - delete process.env.MEMORI_TEST_MODE;
memori-ts\tests\core\config.test.ts:37 - delete process.env.MEMORI_API_URL_BASE;
memori-ts\tests\core\config.test.ts:39 - expect(config.baseUrl).toBe('https://api.memorilabs.ai');

## memori-ts\tests\core\network.test.ts
memori-ts\tests\core\network.test.ts:175 - const { MemoriApiRequestRejectedError } = await import('../../src/core/errors.js');

## memori-ts\tests\engines\augmentation.test.ts
memori-ts\tests\engines\augmentation.test.ts:6 - import { LLMRequest, LLMResponse } from '@memorilabs/axon';

## memori-ts\tests\engines\persistence.test.ts
memori-ts\tests\engines\persistence.test.ts:6 - import { LLMRequest, LLMResponse } from '@memorilabs/axon';

## memori-ts\tests\engines\recall.test.ts
memori-ts\tests\engines\recall.test.ts:6 - import { LLMRequest } from '@memorilabs/axon';

## memori-ts\tests\integrations\base.test.ts
memori-ts\tests\integrations\base.test.ts:3 - import { IntegrationRequest, MemoriCore } from '../../src/types/integrations.js';
memori-ts\tests\integrations\base.test.ts:4 - import { LLMRequest } from '@memorilabs/axon';

## memori-ts\tests\integrations\openclaw.test.ts
memori-ts\tests\integrations\openclaw.test.ts:3 - import { MemoriCore } from '../../src/types/integrations.js';
memori-ts\tests\integrations\openclaw.test.ts:67 - const mockMemoryContext = '<memori_context>context data</memori_context>';

## memori-ts\tests\integrations\cloud\anthropic.test.ts
memori-ts\tests\integrations\cloud\anthropic.test.ts:3 - import { Memori } from '../../../src/memori.js';
memori-ts\tests\integrations\cloud\anthropic.test.ts:12 - const hasKeys = !!(process.env.ANTHROPIC_API_KEY && process.env.MEMORI_API_KEY);

## memori-ts\tests\integrations\cloud\cloud-helpers.ts
memori-ts\tests\integrations\cloud\cloud-helpers.ts:36 - // Intercept all POST requests made by the Memori Api class

## memori-ts\tests\integrations\cloud\gemini.test.ts
memori-ts\tests\integrations\cloud\gemini.test.ts:3 - import { Memori } from '../../../src/memori.js';
memori-ts\tests\integrations\cloud\gemini.test.ts:12 - const hasKeys = !!(process.env.GEMINI_API_KEY && process.env.MEMORI_API_KEY);

## memori-ts\tests\integrations\cloud\openai.test.ts
memori-ts\tests\integrations\cloud\openai.test.ts:3 - import { Memori } from '../../../src/memori.js';
memori-ts\tests\integrations\cloud\openai.test.ts:12 - const hasKeys = !!(process.env.OPENAI_API_KEY && process.env.MEMORI_API_KEY);

## memori-ts\tests\utils\utils.test.ts
memori-ts\tests\utils\utils.test.ts:10 - import { Message } from '@memorilabs/axon';

## tests\test_cli.py
tests\test_cli.py:7 - from memori.__main__ import main
tests\test_cli.py:8 - from memori._cli import Cli
tests\test_cli.py:9 - from memori._config import Config

## tests\test_config.py
tests\test_config.py:3 - from memori._config import Config

## tests\test_init.py
tests\test_init.py:3 - from memori import Memori
tests\test_init.py:4 - from memori._exceptions import MissingMemoriApiKeyError
tests\test_init.py:15 - assert mem.config.cloud is False
tests\test_init.py:23 - assert mem.config.cloud is True
tests\test_init.py:50 - assert mem.config.cloud is False
tests\test_init.py:80 - session_id = mem.config.session_id
tests\test_init.py:85 - assert mem.config.session_id is not None
tests\test_init.py:86 - assert mem.config.session_id != session_id
tests\test_init.py:99 - assert mem.config.session_id == "66cf2a0b-7503-4dcd-b717-b29c826fa1db"
tests\test_init.py:110 - mem.config.cache.conversation_id = 123
tests\test_init.py:111 - mem.config.cache.session_id = 456
tests\test_init.py:115 - assert mem.config.cache.conversation_id is None
tests\test_init.py:116 - assert mem.config.cache.session_id is None
tests\test_init.py:127 - mem.config.embeddings.model = "test-model"
tests\test_init.py:147 - mem.config.recall_facts_limit = 10

## tests\test_legacy_package_warning.py
tests\test_legacy_package_warning.py:5 - from memori._exceptions import (
tests\test_legacy_package_warning.py:11 - def test_warn_if_legacy_memorisdk_not_installed():
tests\test_legacy_package_warning.py:28 - def test_warn_if_legacy_memorisdk_installed():
tests\test_legacy_package_warning.py:79 - import memori
tests\test_legacy_package_warning.py:87 - def test_no_warning_when_only_memori_installed():

## tests\test_llm_auto_registration.py
tests\test_llm_auto_registration.py:5 - from memori import Memori
tests\test_llm_auto_registration.py:6 - from memori._exceptions import UnsupportedLLMProviderError
tests\test_llm_auto_registration.py:7 - from memori.llm._base import BaseClient
tests\test_llm_auto_registration.py:8 - from memori.llm._registry import Registry
tests\test_llm_auto_registration.py:12 - def memori_instance(mocker):
tests\test_llm_auto_registration.py:17 - "memori.memory.augmentation.Manager.start", return_value=mocker.MagicMock()
tests\test_llm_auto_registration.py:41 - def test_llm_register_auto_detects_openai_client(memori_instance, mocker):
tests\test_llm_auto_registration.py:60 - def test_llm_register_auto_detects_anthropic_client(memori_instance, mocker):
tests\test_llm_auto_registration.py:80 - def test_llm_register_auto_detects_google_genai_client(memori_instance, mocker):
tests\test_llm_auto_registration.py:105 - def test_llm_register_auto_detects_google_generativeai_client(memori_instance, mocker):
tests\test_llm_auto_registration.py:130 - def test_llm_register_auto_detects_xai_client(memori_instance, mocker):
tests\test_llm_auto_registration.py:149 - def test_llm_register_auto_detects_pydantic_ai_client(memori_instance, mocker):
tests\test_llm_auto_registration.py:164 - def test_llm_register_returns_memori_instance(memori_instance, mocker):
tests\test_llm_auto_registration.py:182 - def test_llm_register_allows_chaining(memori_instance, mocker):
tests\test_llm_auto_registration.py:204 - def test_llm_register_handles_multiple_registrations(memori_instance, mocker):
tests\test_llm_auto_registration.py:225 - def test_llm_register_agno_openai_chat(memori_instance, mocker):
tests\test_llm_auto_registration.py:238 - def test_llm_register_agno_claude(memori_instance, mocker):
tests\test_llm_auto_registration.py:251 - def test_llm_register_langchain_chatopenai(memori_instance, mocker):
tests\test_llm_auto_registration.py:267 - def test_llm_register_raises_when_mixing_client_and_framework(memori_instance, mocker):
tests\test_llm_auto_registration.py:279 - def test_llm_register_raises_when_mixing_agno_and_langchain(memori_instance, mocker):
... and 1 more

## tests\test_network.py
tests\test_network.py:10 - from memori._config import Config
tests\test_network.py:11 - from memori._exceptions import (
tests\test_network.py:18 - from memori._network import Api, ApiSubdomain, _ApiRetryRecoverable
tests\test_network.py:55 - assert api._Api__base == "https://api.memorilabs.ai"  # type: ignore[attr-defined]
tests\test_network.py:65 - assert api._Api__base == "https://collector.memorilabs.ai"  # type: ignore[attr-defined]
tests\test_network.py:83 - assert api._Api__base == "https://staging-api.memorilabs.ai"  # type: ignore[attr-defined]
tests\test_network.py:95 - assert api._Api__base == "https://staging-api.memorilabs.ai"  # type: ignore[attr-defined]
tests\test_network.py:107 - assert api._Api__base == "https://api.memorilabs.ai"  # type: ignore[attr-defined]

## tests\test_search.py
tests\test_search.py:18 - from memori.search import (
tests\test_search.py:47 - def test_parse_embedding_from_memoryview_postgresql():
tests\test_search.py:49 - raw = memoryview(struct.pack(f"<{len(embedding)}f", *embedding))

## tests\test_utils.py
tests\test_utils.py:1 - from memori._utils import bytes_to_json, generate_uniq, merge_chunk

## tests\database\core.py
tests\database\core.py:70 - poolclass=StaticPool if ":memory:" in sqlite_test_uri else NullPool,

## tests\database\init_db.py
tests\database\init_db.py:1 - from memori import Memori
tests\database\init_db.py:9 - if mem.config.storage is not None:
tests\database\init_db.py:10 - mem.config.storage.build()

## tests\embeddings\test_tei_chunking.py
tests\embeddings\test_tei_chunking.py:14 - from memori.embeddings._chunking import chunk_text_by_tokens
tests\embeddings\test_tei_chunking.py:15 - from memori.embeddings._tei_embed import embed_texts_via_tei

## tests\integration\conftest.py
tests\integration\conftest.py:90 - def memori_test_mode():
tests\integration\conftest.py:115 - def memori_instance(sqlite_session_factory, memori_test_mode):
tests\integration\conftest.py:116 - from memori import Memori
tests\integration\conftest.py:119 - mem.config.storage.build()
tests\integration\conftest.py:127 - def registered_openai_client(memori_instance, openai_client):
tests\integration\conftest.py:134 - def registered_async_openai_client(memori_instance, async_openai_client):
tests\integration\conftest.py:162 - def registered_anthropic_client(memori_instance, anthropic_client):
tests\integration\conftest.py:169 - def registered_async_anthropic_client(memori_instance, async_anthropic_client):
tests\integration\conftest.py:195 - def registered_google_client(memori_instance, google_client):
tests\integration\conftest.py:229 - def registered_xai_client(memori_instance, xai_client):
tests\integration\conftest.py:236 - def registered_async_xai_client(memori_instance, async_xai_client):
tests\integration\conftest.py:267 - def registered_bedrock_client(memori_instance, bedrock_client):
tests\integration\conftest.py:384 - def memori_instance_with_capture(
tests\integration\conftest.py:387 - from memori import Memori
tests\integration\conftest.py:390 - mem.config.storage.build()

## tests\integration\test_aa_payload.py
tests\integration\test_aa_payload.py:20 - def test_sync_call_triggers_aa_pipeline(self, memori_instance, openai_api_key):
tests\integration\test_aa_payload.py:38 - mem.config.augmentation.wait(timeout=5.0)
tests\integration\test_aa_payload.py:42 - def test_sync_streaming_triggers_aa_pipeline(self, memori_instance, openai_api_key):
tests\integration\test_aa_payload.py:65 - mem.config.augmentation.wait(timeout=5.0)
tests\integration\test_aa_payload.py:69 - def test_multi_turn_conversation_triggers_aa(self, memori_instance, openai_api_key):
tests\integration\test_aa_payload.py:97 - mem.config.augmentation.wait(timeout=5.0)
tests\integration\test_aa_payload.py:125 - mem.config.augmentation.wait(timeout=5.0)
tests\integration\test_aa_payload.py:156 - mem.config.augmentation.wait(timeout=5.0)
tests\integration\test_aa_payload.py:162 - def test_no_aa_without_attribution(self, memori_instance, openai_api_key):
tests\integration\test_aa_payload.py:181 - def test_aa_with_entity_only(self, memori_instance, openai_api_key):
tests\integration\test_aa_payload.py:197 - mem.config.augmentation.wait(timeout=5.0)
tests\integration\test_aa_payload.py:201 - def test_multiple_calls_same_session(self, memori_instance, openai_api_key):
tests\integration\test_aa_payload.py:218 - mem.config.augmentation.wait(timeout=10.0)
tests\integration\test_aa_payload.py:222 - def test_memori_test_mode_is_enabled(self):
tests\integration\test_aa_payload.py:227 - def test_memori_instance_in_test_mode(self, memori_instance):
tests\integration\test_aa_payload.py:230 - assert memori_instance.config is not None

## tests\integration\cloud\conftest.py
tests\integration\cloud\conftest.py:31 - def cloud_memori_instance(sqlite_session_factory, cloud_test_mode):
tests\integration\cloud\conftest.py:41 - from memori import Memori
tests\integration\cloud\conftest.py:44 - mem.config.cloud = True
tests\integration\cloud\conftest.py:45 - mem.config.storage.build()
tests\integration\cloud\conftest.py:54 - def cloud_registered_openai_client(cloud_memori_instance, openai_client):
tests\integration\cloud\conftest.py:63 - def cloud_registered_async_openai_client(cloud_memori_instance, async_openai_client):
tests\integration\cloud\conftest.py:72 - def cloud_registered_anthropic_client(cloud_memori_instance, anthropic_client):
tests\integration\cloud\conftest.py:92 - def cloud_registered_google_client(cloud_memori_instance, google_client):
tests\integration\cloud\conftest.py:101 - def cloud_registered_xai_client(cloud_memori_instance, xai_client):
tests\integration\cloud\conftest.py:110 - def cloud_registered_async_xai_client(cloud_memori_instance, async_xai_client):
tests\integration\cloud\conftest.py:119 - def cloud_registered_bedrock_client(cloud_memori_instance, bedrock_client):

## tests\integration\cloud\test_cloud_anthropic.py
tests\integration\cloud\test_cloud_anthropic.py:36 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:49 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:51 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_anthropic.py:54 - conversation = cloud_memori_instance.config.storage.driver.conversation.read(
tests\integration\cloud\test_cloud_anthropic.py:73 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:75 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_anthropic.py:77 - cloud_memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\cloud\test_cloud_anthropic.py:117 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:132 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:134 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_anthropic.py:137 - conversation = cloud_memori_instance.config.storage.driver.conversation.read(
tests\integration\cloud\test_cloud_anthropic.py:158 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:179 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:194 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:211 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:228 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:241 - first_conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_anthropic.py:244 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_anthropic.py:254 - second_conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_anthropic.py:258 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)

## tests\integration\cloud\test_cloud_bedrock.py
tests\integration\cloud\test_cloud_bedrock.py:40 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:49 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:51 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_bedrock.py:54 - conversation = cloud_memori_instance.config.storage.driver.conversation.read(
tests\integration\cloud\test_cloud_bedrock.py:69 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:71 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_bedrock.py:73 - cloud_memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\cloud\test_cloud_bedrock.py:109 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:120 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:122 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_bedrock.py:125 - conversation = cloud_memori_instance.config.storage.driver.conversation.read(
tests\integration\cloud\test_cloud_bedrock.py:145 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:162 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:173 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:190 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:203 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:212 - first_conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_bedrock.py:215 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_bedrock.py:221 - second_conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_bedrock.py:225 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)

## tests\integration\cloud\test_cloud_gemini.py
tests\integration\cloud\test_cloud_gemini.py:41 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:55 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:57 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_gemini.py:60 - conversation = cloud_memori_instance.config.storage.driver.conversation.read(
tests\integration\cloud\test_cloud_gemini.py:78 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:80 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_gemini.py:82 - cloud_memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\cloud\test_cloud_gemini.py:120 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:136 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:138 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_gemini.py:141 - conversation = cloud_memori_instance.config.storage.driver.conversation.read(
tests\integration\cloud\test_cloud_gemini.py:166 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:190 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:204 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:222 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:238 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:250 - first_conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_gemini.py:253 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_gemini.py:262 - second_conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_gemini.py:266 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)

## tests\integration\cloud\test_cloud_openai.py
tests\integration\cloud\test_cloud_openai.py:36 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_openai.py:49 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_openai.py:51 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_openai.py:54 - conversation = cloud_memori_instance.config.storage.driver.conversation.read(
tests\integration\cloud\test_cloud_openai.py:73 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_openai.py:75 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_openai.py:77 - cloud_memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\cloud\test_cloud_openai.py:116 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_openai.py:131 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_openai.py:133 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_openai.py:136 - conversation = cloud_memori_instance.config.storage.driver.conversation.read(
tests\integration\cloud\test_cloud_openai.py:163 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_openai.py:187 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_openai.py:202 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_openai.py:220 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_openai.py:224 - def test_cloud_memori_instance_is_configured(self, cloud_memori_instance):
tests\integration\cloud\test_cloud_openai.py:225 - assert cloud_memori_instance.config is not None
tests\integration\cloud\test_cloud_openai.py:226 - assert cloud_memori_instance.config.augmentation is not None
tests\integration\cloud\test_cloud_openai.py:227 - assert cloud_memori_instance.config.storage is not None
tests\integration\cloud\test_cloud_openai.py:246 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
... and 6 more

## tests\integration\cloud\test_cloud_xai.py
tests\integration\cloud\test_cloud_xai.py:36 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:49 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:51 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_xai.py:54 - conversation = cloud_memori_instance.config.storage.driver.conversation.read(
tests\integration\cloud\test_cloud_xai.py:73 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:75 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_xai.py:77 - cloud_memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\cloud\test_cloud_xai.py:116 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:131 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:133 - conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_xai.py:136 - conversation = cloud_memori_instance.config.storage.driver.conversation.read(
tests\integration\cloud\test_cloud_xai.py:163 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:187 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:202 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:220 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:237 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:250 - first_conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_xai.py:253 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)
tests\integration\cloud\test_cloud_xai.py:263 - second_conversation_id = cloud_memori_instance.config.cache.conversation_id
tests\integration\cloud\test_cloud_xai.py:267 - cloud_memori_instance.config.augmentation.wait(timeout=AA_WAIT_TIMEOUT)

## tests\integration\databases\conftest.py
tests\integration\databases\conftest.py:123 - def memori_test_mode():
tests\integration\databases\conftest.py:135 - def sqlite_memori(sqlite_session_factory, memori_test_mode):
tests\integration\databases\conftest.py:137 - from memori import Memori
tests\integration\databases\conftest.py:140 - mem.config.storage.build()
tests\integration\databases\conftest.py:149 - def postgres_memori(postgres_session_factory, memori_test_mode):
tests\integration\databases\conftest.py:151 - from memori import Memori
tests\integration\databases\conftest.py:154 - mem.config.storage.build()
tests\integration\databases\conftest.py:163 - def mysql_memori(mysql_session_factory, memori_test_mode):
tests\integration\databases\conftest.py:165 - from memori import Memori
tests\integration\databases\conftest.py:168 - mem.config.storage.build()
tests\integration\databases\conftest.py:177 - def mongodb_memori(mongodb_client, memori_test_mode):
tests\integration\databases\conftest.py:179 - from memori import Memori
tests\integration\databases\conftest.py:182 - mem.config.storage.build()

## tests\integration\databases\test_database_storage.py
tests\integration\databases\test_database_storage.py:27 - def test_store_and_search_facts(self, sqlite_memori, openai_api_key):
tests\integration\databases\test_database_storage.py:43 - conversation_id = sqlite_memori.config.cache.conversation_id
tests\integration\databases\test_database_storage.py:46 - conversation = sqlite_memori.config.storage.driver.conversation.read(
tests\integration\databases\test_database_storage.py:55 - def test_multiple_entities_isolation(self, sqlite_memori, openai_api_key):
tests\integration\databases\test_database_storage.py:67 - conversation_id_1 = sqlite_memori.config.cache.conversation_id
tests\integration\databases\test_database_storage.py:79 - conversation_id_2 = sqlite_memori.config.cache.conversation_id
tests\integration\databases\test_database_storage.py:89 - def test_conversation_storage(self, sqlite_memori, openai_api_key):
tests\integration\databases\test_database_storage.py:103 - conversation_id = sqlite_memori.config.cache.conversation_id
tests\integration\databases\test_database_storage.py:104 - messages = sqlite_memori.config.storage.driver.conversation.messages.read(
tests\integration\databases\test_database_storage.py:125 - def test_store_and_search_facts(self, postgres_memori, openai_api_key):
tests\integration\databases\test_database_storage.py:139 - conversation_id = postgres_memori.config.cache.conversation_id
tests\integration\databases\test_database_storage.py:142 - conversation = postgres_memori.config.storage.driver.conversation.read(
tests\integration\databases\test_database_storage.py:151 - def test_multiple_entities_isolation(self, postgres_memori, openai_api_key):
tests\integration\databases\test_database_storage.py:163 - conversation_id_1 = postgres_memori.config.cache.conversation_id
tests\integration\databases\test_database_storage.py:175 - conversation_id_2 = postgres_memori.config.cache.conversation_id
tests\integration\databases\test_database_storage.py:184 - def test_conversation_storage(self, postgres_memori, openai_api_key):
tests\integration\databases\test_database_storage.py:198 - conversation_id = postgres_memori.config.cache.conversation_id
tests\integration\databases\test_database_storage.py:199 - messages = postgres_memori.config.storage.driver.conversation.messages.read(
tests\integration\databases\test_database_storage.py:219 - def test_store_and_search_facts(self, mysql_memori, openai_api_key):
tests\integration\databases\test_database_storage.py:236 - conversation_id = mysql_memori.config.cache.conversation_id
... and 16 more

## tests\integration\providers\test_anthropic.py
tests\integration\providers\test_anthropic.py:324 - def test_invalid_api_key_raises_authentication_error(self, memori_instance):
tests\integration\providers\test_anthropic.py:347 - async def test_async_invalid_api_key_raises_error(self, memori_instance):
tests\integration\providers\test_anthropic.py:413 - class TestMemoriIntegration:
tests\integration\providers\test_anthropic.py:416 - def test_memori_wrapper_does_not_modify_response_type(
tests\integration\providers\test_anthropic.py:441 - def test_config_captures_provider_info(self, memori_instance, anthropic_api_key):
tests\integration\providers\test_anthropic.py:445 - assert memori_instance.config.llm.provider_sdk_version is not None
tests\integration\providers\test_anthropic.py:460 - assert memori_instance.config.entity_id == "user-123"
tests\integration\providers\test_anthropic.py:461 - assert memori_instance.config.process_id == "process-456"
tests\integration\providers\test_anthropic.py:469 - assert memori_instance.config.entity_id == "user-123"
tests\integration\providers\test_anthropic.py:470 - assert memori_instance.config.process_id == "process-456"
tests\integration\providers\test_anthropic.py:485 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_anthropic.py:488 - conversation = memori_instance.config.storage.driver.conversation.read(
tests\integration\providers\test_anthropic.py:507 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_anthropic.py:510 - messages = memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\providers\test_anthropic.py:536 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_anthropic.py:539 - conversation = memori_instance.config.storage.driver.conversation.read(
tests\integration\providers\test_anthropic.py:555 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_anthropic.py:557 - memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\providers\test_anthropic.py:570 - memori_instance.config.storage.driver.conversation.messages.read(

## tests\integration\providers\test_bedrock.py
tests\integration\providers\test_bedrock.py:236 - def test_invalid_credentials_raises_error(self, memori_instance):
tests\integration\providers\test_bedrock.py:260 - def test_invalid_model_raises_error(self, memori_instance, aws_credentials):
tests\integration\providers\test_bedrock.py:329 - class TestMemoriIntegration:
tests\integration\providers\test_bedrock.py:332 - def test_memori_wrapper_does_not_modify_response_type(
tests\integration\providers\test_bedrock.py:356 - def test_config_captures_provider_info(self, memori_instance, aws_credentials):
tests\integration\providers\test_bedrock.py:365 - assert memori_instance.config.llm.provider_sdk_version is not None
tests\integration\providers\test_bedrock.py:376 - assert memori_instance.config.entity_id == "user-123"
tests\integration\providers\test_bedrock.py:377 - assert memori_instance.config.process_id == "process-456"
tests\integration\providers\test_bedrock.py:381 - assert memori_instance.config.entity_id == "user-123"
tests\integration\providers\test_bedrock.py:382 - assert memori_instance.config.process_id == "process-456"
tests\integration\providers\test_bedrock.py:393 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_bedrock.py:396 - conversation = memori_instance.config.storage.driver.conversation.read(
tests\integration\providers\test_bedrock.py:411 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_bedrock.py:414 - messages = memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\providers\test_bedrock.py:431 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_bedrock.py:434 - conversation = memori_instance.config.storage.driver.conversation.read(
tests\integration\providers\test_bedrock.py:446 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_bedrock.py:448 - memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\providers\test_bedrock.py:457 - memori_instance.config.storage.driver.conversation.messages.read(

## tests\integration\providers\test_google.py
tests\integration\providers\test_google.py:17 - def test_client_registration_marks_installed(self, memori_instance, google_api_key):
tests\integration\providers\test_google.py:286 - def test_invalid_api_key_raises_error(self, memori_instance):
tests\integration\providers\test_google.py:314 - async def test_async_invalid_api_key_raises_error(self, memori_instance):
tests\integration\providers\test_google.py:377 - class TestMemoriIntegration:
tests\integration\providers\test_google.py:380 - def test_memori_wrapper_does_not_modify_response_type(
tests\integration\providers\test_google.py:407 - def test_config_captures_provider_info(self, memori_instance, google_api_key):
tests\integration\providers\test_google.py:413 - assert memori_instance.config.llm.provider_sdk_version is not None
tests\integration\providers\test_google.py:429 - assert memori_instance.config.entity_id == "user-123"
tests\integration\providers\test_google.py:430 - assert memori_instance.config.process_id == "process-456"
tests\integration\providers\test_google.py:437 - assert memori_instance.config.entity_id == "user-123"
tests\integration\providers\test_google.py:438 - assert memori_instance.config.process_id == "process-456"
tests\integration\providers\test_google.py:452 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_google.py:455 - conversation = memori_instance.config.storage.driver.conversation.read(
tests\integration\providers\test_google.py:473 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_google.py:476 - messages = memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\providers\test_google.py:497 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_google.py:500 - conversation = memori_instance.config.storage.driver.conversation.read(
tests\integration\providers\test_google.py:515 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_google.py:517 - memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\providers\test_google.py:529 - memori_instance.config.storage.driver.conversation.messages.read(

## tests\integration\providers\test_openai.py
tests\integration\providers\test_openai.py:375 - def test_invalid_api_key_raises_authentication_error(self, memori_instance):
tests\integration\providers\test_openai.py:398 - async def test_async_invalid_api_key_raises_error(self, memori_instance):
tests\integration\providers\test_openai.py:471 - class TestMemoriIntegration:
tests\integration\providers\test_openai.py:474 - def test_memori_wrapper_does_not_modify_response_type(
tests\integration\providers\test_openai.py:499 - def test_config_captures_provider_info(self, memori_instance, openai_api_key):
tests\integration\providers\test_openai.py:503 - assert memori_instance.config.llm.provider_sdk_version is not None
tests\integration\providers\test_openai.py:518 - assert memori_instance.config.entity_id == "user-123"
tests\integration\providers\test_openai.py:519 - assert memori_instance.config.process_id == "process-456"
tests\integration\providers\test_openai.py:527 - assert memori_instance.config.entity_id == "user-123"
tests\integration\providers\test_openai.py:528 - assert memori_instance.config.process_id == "process-456"
tests\integration\providers\test_openai.py:534 - def test_beta_parse_registration(self, memori_instance, openai_api_key):
tests\integration\providers\test_openai.py:553 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_openai.py:556 - conversation = memori_instance.config.storage.driver.conversation.read(
tests\integration\providers\test_openai.py:574 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_openai.py:577 - conversation = memori_instance.config.storage.driver.conversation.read(
tests\integration\providers\test_openai.py:595 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_openai.py:598 - messages = memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\providers\test_openai.py:623 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_openai.py:625 - memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\providers\test_openai.py:638 - memori_instance.config.storage.driver.conversation.messages.read(
... and 23 more

## tests\integration\providers\test_xai.py
tests\integration\providers\test_xai.py:49 - def test_multiple_registrations_are_idempotent(self, memori_instance, xai_api_key):
tests\integration\providers\test_xai.py:322 - def test_invalid_api_key_raises_error(self, memori_instance):
tests\integration\providers\test_xai.py:345 - async def test_async_invalid_api_key_raises_error(self, memori_instance):
tests\integration\providers\test_xai.py:418 - class TestMemoriIntegration:
tests\integration\providers\test_xai.py:421 - def test_memori_wrapper_does_not_modify_response_type(
tests\integration\providers\test_xai.py:446 - def test_config_captures_provider_info(self, memori_instance, xai_api_key):
tests\integration\providers\test_xai.py:450 - assert memori_instance.config.llm.provider_sdk_version is not None
tests\integration\providers\test_xai.py:465 - assert memori_instance.config.entity_id == "user-123"
tests\integration\providers\test_xai.py:466 - assert memori_instance.config.process_id == "process-456"
tests\integration\providers\test_xai.py:474 - assert memori_instance.config.entity_id == "user-123"
tests\integration\providers\test_xai.py:475 - assert memori_instance.config.process_id == "process-456"
tests\integration\providers\test_xai.py:490 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_xai.py:493 - conversation = memori_instance.config.storage.driver.conversation.read(
tests\integration\providers\test_xai.py:501 - def test_messages_stored_with_content(self, registered_xai_client, memori_instance):
tests\integration\providers\test_xai.py:510 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_xai.py:513 - messages = memori_instance.config.storage.driver.conversation.messages.read(
tests\integration\providers\test_xai.py:539 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_xai.py:542 - conversation = memori_instance.config.storage.driver.conversation.read(
tests\integration\providers\test_xai.py:558 - conversation_id = memori_instance.config.cache.conversation_id
tests\integration\providers\test_xai.py:560 - memori_instance.config.storage.driver.conversation.messages.read(
... and 1 more

## tests\integration_v2\cloud_v2\cloud_helpers.py
tests\integration_v2\cloud_v2\cloud_helpers.py:43 - def inject_recall_fact(fact_content="The user's favorite word is 'MEMORI_42'."):

## tests\integration_v2\cloud_v2\conftest.py
tests\integration_v2\cloud_v2\conftest.py:6 - from memori import Memori
tests\integration_v2\cloud_v2\conftest.py:22 - def universal_memori_mock():
tests\integration_v2\cloud_v2\conftest.py:31 - def memori_setup(request):

## tests\integration_v2\cloud_v2\test_cloud_anthropic.py
tests\integration_v2\cloud_v2\test_cloud_anthropic.py:25 - def test_sync(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_anthropic.py:38 - async def test_async(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_anthropic.py:51 - def test_multi_turn(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_anthropic.py:75 - def test_recall_fact_injection(memori_setup):

## tests\integration_v2\cloud_v2\test_cloud_gemini.py
tests\integration_v2\cloud_v2\test_cloud_gemini.py:25 - def test_sync(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_gemini.py:35 - def test_streaming(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_gemini.py:49 - async def test_async(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_gemini.py:62 - async def test_async_streaming(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_gemini.py:78 - def test_multi_turn(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_gemini.py:98 - def test_recall_fact_injection(memori_setup):

## tests\integration_v2\cloud_v2\test_cloud_openai.py
tests\integration_v2\cloud_v2\test_cloud_openai.py:25 - def test_sync(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_openai.py:37 - def test_streaming(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_openai.py:55 - async def test_async(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_openai.py:69 - async def test_async_streaming(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_openai.py:87 - def test_multi_turn(memori_setup):
tests\integration_v2\cloud_v2\test_cloud_openai.py:109 - def test_recall_fact_injection(memori_setup):

## tests\llm\test_llm_base.py
tests\llm\test_llm_base.py:6 - from memori._config import Config
tests\llm\test_llm_base.py:7 - from memori.llm._base import BaseInvoke, BaseLlmAdaptor
tests\llm\test_llm_base.py:8 - from memori.llm._constants import (
tests\llm\test_llm_base.py:13 - from memori.llm.helpers.google_system_instruction import (
tests\llm\test_llm_base.py:18 - from memori.llm.helpers.query_extraction import (
tests\llm\test_llm_base.py:23 - from memori.llm.helpers.serialization import dict_to_json, get_response_content
tests\llm\test_llm_base.py:24 - from memori.llm.pipelines.conversation_injection import inject_conversation_messages
tests\llm\test_llm_base.py:25 - from memori.llm.pipelines.post_invoke import handle_post_response
tests\llm\test_llm_base.py:26 - from memori.llm.pipelines.recall_injection import inject_recalled_facts
tests\llm\test_llm_base.py:171 - with patch("memori.memory._manager.Manager") as mock_memory_manager:
tests\llm\test_llm_base.py:173 - mock_memory_manager.return_value = mock_manager_instance
tests\llm\test_llm_base.py:182 - mock_memory_manager.assert_called_once_with(config)
tests\llm\test_llm_base.py:197 - with patch("memori.memory._manager.Manager") as mock_memory_manager:
tests\llm\test_llm_base.py:199 - mock_memory_manager.return_value = mock_manager_instance
tests\llm\test_llm_base.py:208 - mock_memory_manager.assert_called_once_with(config)
tests\llm\test_llm_base.py:230 - with patch("memori.memory._manager.Manager") as mock_memory_manager:
tests\llm\test_llm_base.py:232 - mock_memory_manager.return_value = mock_manager_instance
tests\llm\test_llm_base.py:241 - mock_memory_manager.assert_called_once_with(config)
tests\llm\test_llm_base.py:377 - with patch("memori.memory.recall.Recall") as mock_recall:
tests\llm\test_llm_base.py:395 - with patch("memori.memory.recall.Recall") as mock_recall:
... and 10 more

## tests\llm\test_llm_clients.py
tests\llm\test_llm_clients.py:3 - from memori._config import Config
tests\llm\test_llm_clients.py:4 - from memori.llm.clients import (
tests\llm\test_llm_clients.py:55 - def test_anthropic_register_adds_memori_wrappers_sync(anthropic_client, mocker):
tests\llm\test_llm_clients.py:122 - async def test_anthropic_register_adds_memori_wrappers_async(anthropic_client, mocker):
tests\llm\test_llm_clients.py:155 - def test_google_register_adds_memori_wrappers(google_client, mocker):
tests\llm\test_llm_clients.py:238 - def test_openai_register_adds_memori_wrappers_sync(openai_client, mocker):
tests\llm\test_llm_clients.py:323 - async def test_openai_register_adds_memori_wrappers_async(openai_client, mocker):
tests\llm\test_llm_clients.py:369 - def test_pydantic_ai_register_adds_memori_wrappers(pydantic_client, mocker):
tests\llm\test_llm_clients.py:565 - def test_xai_register_adds_memori_wrappers(xai_client, mocker):

## tests\llm\test_llm_deprecation_warnings.py
tests\llm\test_llm_deprecation_warnings.py:3 - from memori import Memori
tests\llm\test_llm_deprecation_warnings.py:7 - def memori_instance(mocker):
tests\llm\test_llm_deprecation_warnings.py:12 - "memori.memory.augmentation.Manager.start", return_value=mocker.MagicMock()
tests\llm\test_llm_deprecation_warnings.py:17 - def test_openai_register_shows_deprecation_warning(memori_instance, mocker):
tests\llm\test_llm_deprecation_warnings.py:34 - def test_anthropic_register_shows_deprecation_warning(memori_instance, mocker):
tests\llm\test_llm_deprecation_warnings.py:52 - def test_google_register_shows_deprecation_warning(memori_instance, mocker):
tests\llm\test_llm_deprecation_warnings.py:75 - def test_xai_register_shows_deprecation_warning(memori_instance, mocker):
tests\llm\test_llm_deprecation_warnings.py:92 - def test_pydantic_ai_register_shows_deprecation_warning(memori_instance, mocker):
tests\llm\test_llm_deprecation_warnings.py:105 - def test_langchain_register_shows_deprecation_warning(memori_instance, mocker):
tests\llm\test_llm_deprecation_warnings.py:118 - def test_agno_register_shows_deprecation_warning(memori_instance, mocker):
tests\llm\test_llm_deprecation_warnings.py:138 - def test_llm_register_no_deprecation_warning(memori_instance, mocker):

## tests\llm\test_llm_embeddings.py
tests\llm\test_llm_embeddings.py:17 - import memori.embeddings._sentence_transformers as st_core
tests\llm\test_llm_embeddings.py:18 - from memori._config import Config
tests\llm\test_llm_embeddings.py:19 - from memori.embeddings import TEI, embed_texts, format_embedding_for_db

## tests\llm\test_llm_embeddings_bundled.py
tests\llm\test_llm_embeddings_bundled.py:3 - import memori.embeddings._sentence_transformers as st_core

## tests\llm\test_llm_provider_sdk_version.py
tests\llm\test_llm_provider_sdk_version.py:3 - from memori._config import Config
tests\llm\test_llm_provider_sdk_version.py:4 - from memori.llm.clients import Anthropic, Google, OpenAi, XAi

## tests\llm\test_llm_registry.py
tests\llm\test_llm_registry.py:3 - from memori._exceptions import UnsupportedLLMProviderError
tests\llm\test_llm_registry.py:4 - from memori.llm._constants import (
tests\llm\test_llm_registry.py:11 - from memori.llm._registry import Registry
tests\llm\test_llm_registry.py:12 - from memori.llm.adapters.anthropic._adapter import Adapter as AnthropicLlmAdapter
tests\llm\test_llm_registry.py:13 - from memori.llm.adapters.bedrock._adapter import Adapter as BedrockLlmAdapter
tests\llm\test_llm_registry.py:14 - from memori.llm.adapters.google._adapter import Adapter as GoogleLlmAdapter
tests\llm\test_llm_registry.py:15 - from memori.llm.adapters.openai._adapter import Adapter as OpenAiLlmAdapter

## tests\llm\test_llm_utils.py
tests\llm\test_llm_utils.py:1 - from memori.llm._constants import (
tests\llm\test_llm_utils.py:16 - from memori.llm._utils import (

## tests\llm\test_llm_xai_wrappers.py
tests\llm\test_llm_xai_wrappers.py:5 - from memori._config import Config
tests\llm\test_llm_xai_wrappers.py:6 - from memori.llm._xai_wrappers import XAiWrappers
tests\llm\test_llm_xai_wrappers.py:288 - mock_manager = mocker.patch("memori.memory._manager.Manager")
tests\llm\test_llm_xai_wrappers.py:307 - mock_manager = mocker.patch("memori.memory._manager.Manager")
tests\llm\test_llm_xai_wrappers.py:334 - mock_manager = mocker.patch("memori.memory._manager.Manager")
tests\llm\test_llm_xai_wrappers.py:363 - mock_manager = mocker.patch("memori.memory._manager.Manager")
tests\llm\test_llm_xai_wrappers.py:386 - mock_manager = mocker.patch("memori.memory._manager.Manager")

## tests\llm\adapters\anthropic\test_llm_adapters_anthropic_adapter.py
tests\llm\adapters\anthropic\test_llm_adapters_anthropic_adapter.py:1 - from memori.llm.adapters.anthropic._adapter import Adapter

## tests\llm\adapters\bedrock\test_llm_adapters_bedrock_adapter.py
tests\llm\adapters\bedrock\test_llm_adapters_bedrock_adapter.py:1 - from memori.llm.adapters.bedrock._adapter import Adapter

## tests\llm\adapters\google\test_llm_adapters_google_adapter.py
tests\llm\adapters\google\test_llm_adapters_google_adapter.py:1 - from memori.llm.adapters.google._adapter import Adapter

## tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:5 - from memori._config import Config
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:6 - from memori.llm._base import BaseInvoke
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:7 - from memori.llm.adapters.openai._adapter import Adapter
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:8 - from memori.llm.helpers.query_extraction import extract_user_query
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:9 - from memori.llm.invoke.invoke import Invoke, InvokeAsync
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:10 - from memori.llm.invoke.iterator import AsyncIterator, Iterator
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:11 - from memori.llm.pipelines.conversation_injection import inject_conversation_messages
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:12 - from memori.llm.pipelines.recall_injection import inject_recalled_facts
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:167 - def test_responses_get_formatted_query_strips_memori_context():
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:238 - def test_iterator_yields_all_events(mock_format_payload, mock_memory_manager):
tests\llm\adapters\openai\test_llm_adapters_openai_adapter.py:374 - with patch("memori.memory.recall.Recall") as MockRecall:

## tests\llm\adapters\xai\test_llm_adapters_xai_adapter.py
tests\llm\adapters\xai\test_llm_adapters_xai_adapter.py:1 - from memori.llm.adapters.xai._adapter import Adapter

## tests\llm\clients\oss\agno\anthropic_async.py
tests\llm\clients\oss\agno\anthropic_async.py:9 - from memori import Memori

## tests\llm\clients\oss\agno\anthropic_sync.py
tests\llm\clients\oss\agno\anthropic_sync.py:8 - from memori import Memori

## tests\llm\clients\oss\agno\gemini_async.py
tests\llm\clients\oss\agno\gemini_async.py:9 - from memori import Memori

## tests\llm\clients\oss\agno\gemini_streaming.py
tests\llm\clients\oss\agno\gemini_streaming.py:8 - from memori import Memori

## tests\llm\clients\oss\agno\gemini_sync.py
tests\llm\clients\oss\agno\gemini_sync.py:8 - from memori import Memori

## tests\llm\clients\oss\agno\openai_async.py
tests\llm\clients\oss\agno\openai_async.py:9 - from memori import Memori

## tests\llm\clients\oss\agno\openai_streaming.py
tests\llm\clients\oss\agno\openai_streaming.py:8 - from memori import Memori

## tests\llm\clients\oss\agno\openai_sync.py
tests\llm\clients\oss\agno\openai_sync.py:8 - from memori import Memori

## tests\llm\clients\oss\agno\xai_async.py
tests\llm\clients\oss\agno\xai_async.py:9 - from memori import Memori

## tests\llm\clients\oss\agno\xai_streaming.py
tests\llm\clients\oss\agno\xai_streaming.py:8 - from memori import Memori

## tests\llm\clients\oss\agno\xai_sync.py
tests\llm\clients\oss\agno\xai_sync.py:8 - from memori import Memori

## tests\llm\clients\oss\anthropic\async.py
tests\llm\clients\oss\anthropic\async.py:8 - from memori import Memori

## tests\llm\clients\oss\anthropic\sync.py
tests\llm\clients\oss\anthropic\sync.py:7 - from memori import Memori

## tests\llm\clients\oss\gemini\async.py
tests\llm\clients\oss\gemini\async.py:8 - from memori import Memori

## tests\llm\clients\oss\gemini\async_streaming.py
tests\llm\clients\oss\gemini\async_streaming.py:8 - from memori import Memori

## tests\llm\clients\oss\gemini\sync.py
tests\llm\clients\oss\gemini\sync.py:7 - from memori import Memori

## tests\llm\clients\oss\langchain\chatbedrock\async_runnable.py
tests\llm\clients\oss\langchain\chatbedrock\async_runnable.py:11 - from memori import Memori

## tests\llm\clients\oss\langchain\chatgooglegenai\async_runnable.py
tests\llm\clients\oss\langchain\chatgooglegenai\async_runnable.py:10 - from memori import Memori

## tests\llm\clients\oss\langchain\chatgooglegenai\async_streaming.py
tests\llm\clients\oss\langchain\chatgooglegenai\async_streaming.py:9 - from memori import Memori

## tests\llm\clients\oss\langchain\chatgooglegenai\sync.py
tests\llm\clients\oss\langchain\chatgooglegenai\sync.py:7 - from memori import Memori

## tests\llm\clients\oss\langchain\chatgooglegenai\sync_runnable.py
tests\llm\clients\oss\langchain\chatgooglegenai\sync_runnable.py:9 - from memori import Memori

## tests\llm\clients\oss\langchain\chatgooglegenai\sync_runnable_structured_output.py
tests\llm\clients\oss\langchain\chatgooglegenai\sync_runnable_structured_output.py:9 - from memori import Memori

## tests\llm\clients\oss\langchain\chatopenai\async_ainvoke.py
tests\llm\clients\oss\langchain\chatopenai\async_ainvoke.py:9 - from memori import Memori

## tests\llm\clients\oss\langchain\chatopenai\async_runnable.py
tests\llm\clients\oss\langchain\chatopenai\async_runnable.py:10 - from memori import Memori

## tests\llm\clients\oss\langchain\chatopenai\async_streaming.py
tests\llm\clients\oss\langchain\chatopenai\async_streaming.py:9 - from memori import Memori

## tests\llm\clients\oss\langchain\chatopenai\sync.py
tests\llm\clients\oss\langchain\chatopenai\sync.py:7 - from memori import Memori

## tests\llm\clients\oss\langchain\chatopenai\sync_runnable.py
tests\llm\clients\oss\langchain\chatopenai\sync_runnable.py:9 - from memori import Memori

## tests\llm\clients\oss\langchain\chatopenai\sync_runnable_structured_output.py
tests\llm\clients\oss\langchain\chatopenai\sync_runnable_structured_output.py:9 - from memori import Memori

## tests\llm\clients\oss\langchain\chatvertexai\sync.py
tests\llm\clients\oss\langchain\chatvertexai\sync.py:7 - from memori import Memori

## tests\llm\clients\oss\openai\async.py
tests\llm\clients\oss\openai\async.py:9 - from memori import Memori
tests\llm\clients\oss\openai\async.py:42 - mem.config.storage.build()

## tests\llm\clients\oss\openai\async_streaming.py
tests\llm\clients\oss\openai\async_streaming.py:8 - from memori import Memori

## tests\llm\clients\oss\openai\sync.py
tests\llm\clients\oss\openai\sync.py:7 - from memori import Memori

## tests\llm\clients\oss\xai\async.py
tests\llm\clients\oss\xai\async.py:10 - from memori import Memori
tests\llm\clients\oss\xai\async.py:44 - mem.config.storage.build()

## tests\llm\clients\oss\xai\async_stream.py
tests\llm\clients\oss\xai\async_stream.py:10 - from memori import Memori
tests\llm\clients\oss\xai\async_stream.py:44 - mem.config.storage.build()

## tests\llm\clients\oss\xai\sync.py
tests\llm\clients\oss\xai\sync.py:8 - from memori import Memori

## tests\llm\providers\azure_openai\test_azure_openai.py
tests\llm\providers\azure_openai\test_azure_openai.py:11 - from memori._config import Config
tests\llm\providers\azure_openai\test_azure_openai.py:12 - from memori.llm.clients import OpenAi

## tests\llm\providers\google_genai\test_google_genai.py
tests\llm\providers\google_genai\test_google_genai.py:11 - from memori._config import Config
tests\llm\providers\google_genai\test_google_genai.py:12 - from memori.llm._base import BaseInvoke, BaseIterator
tests\llm\providers\google_genai\test_google_genai.py:13 - from memori.llm.helpers.serialization import format_response

## tests\memory\test_conversation_messages.py
tests\memory\test_conversation_messages.py:3 - from memori.memory._conversation_messages import parse_payload_conversation_messages

## tests\memory\test_manager_enterprise_retry.py
tests\memory\test_manager_enterprise_retry.py:3 - from memori._config import Config
tests\memory\test_manager_enterprise_retry.py:4 - from memori._exceptions import MemoriApiError
tests\memory\test_manager_enterprise_retry.py:5 - from memori.memory._manager import Manager
tests\memory\test_manager_enterprise_retry.py:16 - mocker.patch("memori.memory._manager.Api", return_value=api)
tests\memory\test_manager_enterprise_retry.py:17 - sleep = mocker.patch("memori.memory._manager.time.sleep")
tests\memory\test_manager_enterprise_retry.py:34 - mocker.patch("memori.memory._manager.Api", return_value=api)

## tests\memory\test_memory_augmentation_db_writer.py
tests\memory\test_memory_augmentation_db_writer.py:5 - from memori.memory.augmentation._db_writer import DbWriterRuntime, WriteTask

## tests\memory\test_memory_struct.py
tests\memory\test_memory_struct.py:1 - from memori.memory._struct import Conversation, Entity, Memories, Process
tests\memory\test_memory_struct.py:64 - def test_memories_configure_from_advanced_augmentation():
tests\memory\test_memory_struct.py:82 - assert memories.conversation.summary == "Abc def"
tests\memory\test_memory_struct.py:83 - assert memories.entity.facts == ["Abc def", "ghi", "jkl"]
tests\memory\test_memory_struct.py:90 - assert memories.process.attributes == ["Abc", "def"]

## tests\memory\test_memory_struct_triples.py
tests\memory\test_memory_struct_triples.py:1 - from memori.memory._struct import Entity

## tests\memory\test_memory_writer.py
tests\memory\test_memory_writer.py:1 - from memori.memory._writer import Writer

## tests\memory\test_recall.py
tests\memory\test_recall.py:17 - from memori._config import Config
tests\memory\test_recall.py:18 - from memori.memory.recall import MAX_RETRIES, RETRY_BACKOFF_BASE, Recall
tests\memory\test_recall.py:19 - from memori.search import FactSearchResult
tests\memory\test_recall.py:82 - with patch("memori.memory.recall.embed_texts") as mock_embed:
tests\memory\test_recall.py:85 - with patch("memori.memory.recall.search_facts_api") as mock_search:
tests\memory\test_recall.py:112 - with patch("memori.memory.recall.embed_texts") as mock_embed:
tests\memory\test_recall.py:115 - with patch("memori.memory.recall.search_facts_api") as mock_search:
tests\memory\test_recall.py:162 - with patch("memori.memory.recall.embed_texts") as mock_embed:
tests\memory\test_recall.py:165 - with patch("memori.memory.recall.search_facts_api") as mock_search:
tests\memory\test_recall.py:181 - with patch("memori.memory.recall.embed_texts") as mock_embed:
tests\memory\test_recall.py:184 - with patch("memori.memory.recall.search_facts_api") as mock_search:
tests\memory\test_recall.py:192 - with patch("memori.memory.recall.time.sleep") as mock_sleep:
tests\memory\test_recall.py:207 - with patch("memori.memory.recall.embed_texts") as mock_embed:
tests\memory\test_recall.py:210 - with patch("memori.memory.recall.search_facts_api") as mock_search:
tests\memory\test_recall.py:221 - with patch("memori.memory.recall.time.sleep") as mock_sleep:
tests\memory\test_recall.py:237 - with patch("memori.memory.recall.embed_texts") as mock_embed:
tests\memory\test_recall.py:240 - with patch("memori.memory.recall.search_facts_api") as mock_search:
tests\memory\test_recall.py:245 - with patch("memori.memory.recall.time.sleep"):
tests\memory\test_recall.py:258 - with patch("memori.memory.recall.embed_texts") as mock_embed:
tests\memory\test_recall.py:261 - with patch("memori.memory.recall.search_facts_api") as mock_search:
... and 4 more

## tests\memory\test_recall_eval_harness.py
tests\memory\test_recall_eval_harness.py:18 - from memori._config import Config
tests\memory\test_recall_eval_harness.py:19 - from memori.memory.recall import Recall
tests\memory\test_recall_eval_harness.py:139 - mocker.patch("memori.memory.recall.embed_texts", side_effect=_embed_side_effect)

## tests\memory\augmentation\test_aa_payload_unit.py
tests\memory\augmentation\test_aa_payload_unit.py:5 - from memori.memory.augmentation._models import (
tests\memory\augmentation\test_aa_payload_unit.py:231 - from memori.memory.augmentation.augmentations.memori._augmentation import (
tests\memory\augmentation\test_aa_payload_unit.py:535 - from memori.memory.augmentation.augmentations.memori._augmentation import (

## tests\memory\augmentation\test_advanced_augmentation.py
tests\memory\augmentation\test_advanced_augmentation.py:5 - from memori._config import Config
tests\memory\augmentation\test_advanced_augmentation.py:6 - from memori.memory._struct import Memories
tests\memory\augmentation\test_advanced_augmentation.py:7 - from memori.memory.augmentation._base import AugmentationContext
tests\memory\augmentation\test_advanced_augmentation.py:8 - from memori.memory.augmentation._message import ConversationMessage
tests\memory\augmentation\test_advanced_augmentation.py:9 - from memori.memory.augmentation.augmentations.memori._augmentation import (
tests\memory\augmentation\test_advanced_augmentation.py:12 - from memori.memory.augmentation.input import AugmentationInput
tests\memory\augmentation\test_advanced_augmentation.py:254 - async def test_process_api_response_dict_to_memories(augmentation):
tests\memory\augmentation\test_advanced_augmentation.py:362 - from memori.memory._struct import SemanticTriple

## tests\memory\augmentation\test_base.py
tests\memory\augmentation\test_base.py:3 - from memori.memory.augmentation._base import AugmentationContext, BaseAugmentation
tests\memory\augmentation\test_base.py:18 - from memori.memory.augmentation.input import AugmentationInput

## tests\memory\augmentation\test_handler.py
tests\memory\augmentation\test_handler.py:1 - from memori._config import Config
tests\memory\augmentation\test_handler.py:2 - from memori.memory.augmentation._handler import handle_augmentation
tests\memory\augmentation\test_handler.py:3 - from memori.memory.augmentation.augmentations.memori.models import (
tests\memory\augmentation\test_handler.py:29 - mocker.patch("memori.memory.augmentation._handler.Api", return_value=api)
tests\memory\augmentation\test_handler.py:31 - sleep = mocker.patch("memori.memory.augmentation._handler.time.sleep")
tests\memory\augmentation\test_handler.py:114 - mocker.patch("memori.memory.augmentation._handler.Api", return_value=api)
tests\memory\augmentation\test_handler.py:115 - err = mocker.patch("memori.memory.augmentation._handler.logger.error")
tests\memory\augmentation\test_handler.py:148 - mocker.patch("memori.memory.augmentation._handler.Api", return_value=api)
tests\memory\augmentation\test_handler.py:178 - mocker.patch("memori.memory.augmentation._handler.Api", return_value=api)

## tests\memory\augmentation\test_manager.py
tests\memory\augmentation\test_manager.py:8 - from memori._config import Config
tests\memory\augmentation\test_manager.py:9 - from memori.memory.augmentation._manager import Manager
tests\memory\augmentation\test_manager.py:10 - from memori.memory.augmentation._runtime import AugmentationRuntime, get_runtime
tests\memory\augmentation\test_manager.py:69 - from memori.memory.augmentation.input import AugmentationInput
tests\memory\augmentation\test_manager.py:83 - from memori.memory.augmentation.input import AugmentationInput
tests\memory\augmentation\test_manager.py:112 - from memori.memory.augmentation.input import AugmentationInput
tests\memory\augmentation\test_manager.py:174 - from memori.memory.augmentation._db_writer import WriteTask, get_db_writer

## tests\memory\augmentation\test_manager_quota.py
tests\memory\augmentation\test_manager_quota.py:7 - from memori._config import Config
tests\memory\augmentation\test_manager_quota.py:8 - from memori._exceptions import QuotaExceededError
tests\memory\augmentation\test_manager_quota.py:9 - from memori.memory.augmentation._manager import Manager
tests\memory\augmentation\test_manager_quota.py:10 - from memori.memory.augmentation._message import ConversationMessage
tests\memory\augmentation\test_manager_quota.py:11 - from memori.memory.augmentation.input import AugmentationInput

## tests\memory\augmentation\test_models.py
tests\memory\augmentation\test_models.py:1 - from memori.memory.augmentation._models import (
tests\memory\augmentation\test_models.py:194 - from memori.memory.augmentation._models import (
tests\memory\augmentation\test_models.py:213 - from memori.memory.augmentation._models import (

## tests\memory\augmentation\test_quota_propagation.py
tests\memory\augmentation\test_quota_propagation.py:6 - from memori._config import Config
tests\memory\augmentation\test_quota_propagation.py:7 - from memori._exceptions import QuotaExceededError
tests\memory\augmentation\test_quota_propagation.py:8 - from memori.memory.augmentation._base import AugmentationContext
tests\memory\augmentation\test_quota_propagation.py:9 - from memori.memory.augmentation._message import ConversationMessage
tests\memory\augmentation\test_quota_propagation.py:10 - from memori.memory.augmentation.augmentations.memori._augmentation import (
tests\memory\augmentation\test_quota_propagation.py:13 - from memori.memory.augmentation.input import AugmentationInput

## tests\memory\augmentation\test_registry.py
tests\memory\augmentation\test_registry.py:1 - from memori.memory.augmentation._base import BaseAugmentation
tests\memory\augmentation\test_registry.py:2 - from memori.memory.augmentation._registry import Registry

## tests\storage\test_connection.py
tests\storage\test_connection.py:5 - from memori.storage._connection import connection_context

## tests\storage\test_connection_factory.py
tests\storage\test_connection_factory.py:3 - from memori.storage.adapters.dbapi._adapter import Adapter as DBAPIAdapter

## tests\storage\test_storage_builder.py
tests\storage\test_storage_builder.py:5 - from memori._config import Config
tests\storage\test_storage_builder.py:6 - from memori.storage import Manager as StorageManager
tests\storage\test_storage_builder.py:7 - from memori.storage._builder import Builder
tests\storage\test_storage_builder.py:8 - from memori.storage.drivers.mysql._driver import Driver as MysqlDriver
tests\storage\test_storage_builder.py:9 - from memori.storage.drivers.oceanbase._driver import Driver as OceanbaseDriver
tests\storage\test_storage_builder.py:10 - from memori.storage.drivers.postgresql._driver import Driver as PostgresqlDriver

## tests\storage\test_storage_init.py
tests\storage\test_storage_init.py:7 - from memori.storage import _import_optional_module
tests\storage\test_storage_init.py:20 - from memori.storage import _import_optional_module
tests\storage\test_storage_init.py:31 - import memori.storage
tests\storage\test_storage_init.py:39 - import memori.storage

## tests\storage\test_storage_manager.py
tests\storage\test_storage_manager.py:3 - from memori._config import Config
tests\storage\test_storage_manager.py:4 - from memori.storage._manager import Manager

## tests\storage\test_storage_registry.py
tests\storage\test_storage_registry.py:3 - from memori._exceptions import UnsupportedDatabaseError
tests\storage\test_storage_registry.py:4 - from memori.storage._registry import Registry
tests\storage\test_storage_registry.py:5 - from memori.storage.adapters.sqlalchemy._adapter import (
tests\storage\test_storage_registry.py:8 - from memori.storage.drivers.mysql._driver import Driver as MysqlStorageDriver
tests\storage\test_storage_registry.py:9 - from memori.storage.drivers.oceanbase._driver import Driver as OceanbaseStorageDriver
tests\storage\test_storage_registry.py:10 - from memori.storage.drivers.postgresql._driver import Driver as PostgresqlStorageDriver

## tests\storage\adapters\dbapi\test_dbapi_no_conflicts.py
tests\storage\adapters\dbapi\test_dbapi_no_conflicts.py:1 - from memori.storage._registry import Registry
tests\storage\adapters\dbapi\test_dbapi_no_conflicts.py:2 - from memori.storage.adapters.dbapi._adapter import (
tests\storage\adapters\dbapi\test_dbapi_no_conflicts.py:5 - from memori.storage.adapters.dbapi._adapter import (
tests\storage\adapters\dbapi\test_dbapi_no_conflicts.py:8 - from memori.storage.adapters.django._adapter import Adapter as DjangoAdapter
tests\storage\adapters\dbapi\test_dbapi_no_conflicts.py:9 - from memori.storage.adapters.sqlalchemy._adapter import Adapter as SQLAlchemyAdapter

## tests\storage\adapters\dbapi\test_storage_adapters_dbapi_adapter.py
tests\storage\adapters\dbapi\test_storage_adapters_dbapi_adapter.py:3 - from memori.storage._registry import Registry
tests\storage\adapters\dbapi\test_storage_adapters_dbapi_adapter.py:4 - from memori.storage.adapters.dbapi._adapter import (
tests\storage\adapters\dbapi\test_storage_adapters_dbapi_adapter.py:7 - from memori.storage.adapters.dbapi._adapter import (

## tests\storage\adapters\django\test_storage_adapters_django_adapter.py
tests\storage\adapters\django\test_storage_adapters_django_adapter.py:3 - from memori.storage._registry import Registry
tests\storage\adapters\django\test_storage_adapters_django_adapter.py:4 - from memori.storage.adapters.django._adapter import (
tests\storage\adapters\django\test_storage_adapters_django_adapter.py:7 - from memori.storage.adapters.django._adapter import (

## tests\storage\adapters\sqlalchemy\test_storage_adaptors_sqlalchemy_adapter.py
tests\storage\adapters\sqlalchemy\test_storage_adaptors_sqlalchemy_adapter.py:1 - from memori.storage.adapters.mongodb._adapter import Adapter as MongoAdapter
tests\storage\adapters\sqlalchemy\test_storage_adaptors_sqlalchemy_adapter.py:2 - from memori.storage.adapters.sqlalchemy._adapter import Adapter as SqlAlchemyAdapter

## tests\storage\cockroachdb\test_storage_cockroachdb_display.py
tests\storage\cockroachdb\test_storage_cockroachdb_display.py:1 - from memori.storage.cockroachdb._display import Display

## tests\storage\cockroachdb\test_storage_cockroachdb_files.py
tests\storage\cockroachdb\test_storage_cockroachdb_files.py:5 - from memori.storage.cockroachdb._files import Files
tests\storage\cockroachdb\test_storage_cockroachdb_files.py:30 - def test_storage_dir_memori_home():
tests\storage\cockroachdb\test_storage_cockroachdb_files.py:31 - os.environ["MEMORI_HOME"] = "/def"
tests\storage\cockroachdb\test_storage_cockroachdb_files.py:32 - assert Files().storage_dir() == "/def/.memori"
tests\storage\cockroachdb\test_storage_cockroachdb_files.py:36 - os.environ["MEMORI_HOME"] = "/def"
tests\storage\cockroachdb\test_storage_cockroachdb_files.py:37 - assert Files().cluster_dir() == "/def/.memori/cluster"
tests\storage\cockroachdb\test_storage_cockroachdb_files.py:41 - os.environ["MEMORI_HOME"] = "/def"
tests\storage\cockroachdb\test_storage_cockroachdb_files.py:42 - assert Files().cluster_id() == "/def/.memori/cluster/id"

## tests\storage\drivers\test_mongodb_driver.py
tests\storage\drivers\test_mongodb_driver.py:5 - from memori.storage.drivers.mongodb._driver import (
tests\storage\drivers\test_mongodb_driver.py:368 - from memori.storage.drivers.mongodb._driver import Driver
tests\storage\drivers\test_mongodb_driver.py:369 - from memori.storage.migrations._mongodb import migrations
tests\storage\drivers\test_mongodb_driver.py:376 - from memori.storage.drivers.mongodb._driver import Driver
tests\storage\drivers\test_mongodb_driver.py:383 - from memori.storage._registry import Registry

## tests\storage\drivers\test_mysql_driver.py
tests\storage\drivers\test_mysql_driver.py:4 - from memori.storage.drivers.mysql._driver import (
tests\storage\drivers\test_mysql_driver.py:47 - assert "FROM memori_entity" in select_call[0][0]
tests\storage\drivers\test_mysql_driver.py:85 - assert "FROM memori_process" in select_call[0][0]
tests\storage\drivers\test_mysql_driver.py:109 - assert "FROM memori_session" in select_call[0][0]
tests\storage\drivers\test_mysql_driver.py:159 - assert "FROM memori_conversation" in select_call[0][0]
tests\storage\drivers\test_mysql_driver.py:264 - assert "FROM memori_conversation_message" in select_call[0][0]
tests\storage\drivers\test_mysql_driver.py:303 - assert "FROM memori_schema_version" in select_call[0][0]
tests\storage\drivers\test_mysql_driver.py:315 - assert "DELETE FROM memori_schema_version" in delete_call[0][0]

## tests\storage\drivers\test_oceanbase_driver.py
tests\storage\drivers\test_oceanbase_driver.py:4 - from memori._utils import generate_uniq
tests\storage\drivers\test_oceanbase_driver.py:5 - from memori.storage.drivers.mysql._driver import (
tests\storage\drivers\test_oceanbase_driver.py:14 - from memori.storage.drivers.oceanbase._driver import Driver, EntityFact
tests\storage\drivers\test_oceanbase_driver.py:15 - from memori.storage.migrations._oceanbase import migrations
tests\storage\drivers\test_oceanbase_driver.py:82 - assert "FROM memori_entity" in select_call[0][0]
tests\storage\drivers\test_oceanbase_driver.py:115 - assert "FROM memori_process" in select_call[0][0]
tests\storage\drivers\test_oceanbase_driver.py:137 - assert "FROM memori_session" in select_call[0][0]
tests\storage\drivers\test_oceanbase_driver.py:180 - assert "FROM memori_conversation" in select_call[0][0]
tests\storage\drivers\test_oceanbase_driver.py:280 - assert "FROM memori_conversation_message" in select_call[0][0]
tests\storage\drivers\test_oceanbase_driver.py:315 - assert "FROM memori_schema_version" in select_call[0][0]
tests\storage\drivers\test_oceanbase_driver.py:325 - assert "DELETE FROM memori_schema_version" in delete_call[0][0]

## tests\storage\drivers\test_oracle_driver.py
tests\storage\drivers\test_oracle_driver.py:4 - from memori.storage.drivers.oracle._driver import (
tests\storage\drivers\test_oracle_driver.py:49 - assert "FROM memori_entity" in select_call[0][0]
tests\storage\drivers\test_oracle_driver.py:89 - assert "FROM memori_process" in select_call[0][0]
tests\storage\drivers\test_oracle_driver.py:115 - assert "FROM memori_session" in select_call[0][0]
tests\storage\drivers\test_oracle_driver.py:166 - assert "FROM memori_conversation" in select_call[0][0]
tests\storage\drivers\test_oracle_driver.py:271 - assert "FROM memori_conversation_message" in select_call[0][0]
tests\storage\drivers\test_oracle_driver.py:310 - assert "FROM memori_schema_version" in select_call[0][0]
tests\storage\drivers\test_oracle_driver.py:322 - assert "DELETE FROM memori_schema_version" in delete_call[0][0]

## tests\storage\drivers\test_postgresql_driver.py
tests\storage\drivers\test_postgresql_driver.py:4 - from memori.storage.drivers.postgresql._driver import (
tests\storage\drivers\test_postgresql_driver.py:48 - assert "FROM memori_entity" in select_call[0][0]
tests\storage\drivers\test_postgresql_driver.py:87 - assert "FROM memori_process" in select_call[0][0]
tests\storage\drivers\test_postgresql_driver.py:112 - assert "FROM memori_session" in select_call[0][0]
tests\storage\drivers\test_postgresql_driver.py:163 - assert "FROM memori_conversation" in select_call[0][0]
tests\storage\drivers\test_postgresql_driver.py:268 - assert "FROM memori_conversation_message" in select_call[0][0]
tests\storage\drivers\test_postgresql_driver.py:307 - assert "FROM memori_schema_version" in select_call[0][0]
tests\storage\drivers\test_postgresql_driver.py:319 - assert "DELETE FROM memori_schema_version" in delete_call[0][0]

## tests\storage\drivers\test_sqlite_driver.py
tests\storage\drivers\test_sqlite_driver.py:4 - from memori.storage.drivers.sqlite._driver import (
tests\storage\drivers\test_sqlite_driver.py:49 - assert "from memori_entity" in select_call[0][0].lower()
tests\storage\drivers\test_sqlite_driver.py:89 - assert "from memori_process" in select_call[0][0].lower()
tests\storage\drivers\test_sqlite_driver.py:113 - assert "from memori_session" in select_call[0][0].lower()
tests\storage\drivers\test_sqlite_driver.py:163 - assert "from memori_conversation" in select_call[0][0].lower()
tests\storage\drivers\test_sqlite_driver.py:268 - assert "from memori_conversation_message" in select_call[0][0].lower()
tests\storage\drivers\test_sqlite_driver.py:308 - assert "from memori_schema_version" in select_call[0][0].lower()
tests\storage\drivers\test_sqlite_driver.py:320 - assert "delete from memori_schema_version" in delete_call[0][0].lower()
tests\storage\drivers\test_sqlite_driver.py:446 - assert "from memori_entity_fact" in select_call[0][0].lower()
tests\storage\drivers\test_sqlite_driver.py:513 - assert "from memori_entity_fact" in fact_select_call[0][0].lower()
tests\storage\drivers\test_sqlite_driver.py:518 - assert "from memori_entity_fact_mention" in summary_select_call[0][0].lower()
