# Supermemory: Architecture and Components

Supermemory is built as a scalable memory and context layer engineered for high-performance AI state tracking. It claims top efficiency across several benchmarks (LongMemEval, LoCoMo, ConvoMem). Notably, it handles dynamic memory resolution—including automatic forgetting, temporal mutation, and conflict tracking.

## Architecture
The repository is structured as a robust Monorepo (using Turborepo) covering a wide array of application surfaces:
- **Core SDKs**: Provided universally across Node (`supermemory`) and Python (`supermemory`), complete with `SupermemoryChatMiddleware` bindings for Microsoft's Agent Framework.
- **Protocol Wrappers**: Implements the open Model Context Protocol (MCP) via `apps/mcp`, exposing endpoints like `supermemory://profile` and `supermemory://projects`.
- **Integrations**: Standalone browser extensions, Twitter bookmark importers, Raycast workflows, and Vercel AI SDK wrappers (`@supermemory/tools/ai-sdk`).
- **Memory Graph Visualizer**: Packaged natively in `packages/memory-graph` to render memory connections on an HTML canvas using interactive node physics.

## Core Data Schema
Supermemory stores memories internally using Document-to-Memory relations. Memory items can be graphed and connected:
- `nodeType`: distinguishing between raw `document` and extracted `memory`.
- `parentMemoryId`: creating a "version chain" that tracks how a specific memory mutated over time.
- `edgeType`: tracking linkages (`doc-memory` for source-attributions, `version` for mutation histories, and `similarity` for cross-references).
