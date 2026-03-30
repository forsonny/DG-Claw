# ReMe: Architecture and Components

ReMe (Memory Management Kit for Agents) approaches memory management through a sophisticated, multi-tiered architecture that provides agents with both short-term Contextual tracking and long-term persistent storage.

## Memory Types
ReMe divides Agent Memory into two distinct hemispheres:
`Agent Memory = Long-Term Memory + Short-Term Memory`

1. **Short-Term (Working Memory)**: 
   - Manages context overflow through Message Offload and Reload operations.
   - Includes `ContextChecker` to monitor token thresholds and `Compactor` to structurally summarize context. 
   - Implemented via `ReMeInMemoryMemory` integrating directly with AgentScope context handling (`InMemoryMemory`).

2. **Long-Term Memory**:
   - **Personal Memory**: Captures facts, preferences, and observations about user profiles (`MemoryType.PERSONAL`). Handled by `PersonalSummarizer` and `PersonalRetriever`.
   - **Task (Procedural) Memory**: Extracts "Experience" from successful or failed trajectories. Configured through `summary_task_memory` and retrieved via `retrieve_task_memory`. Handled by `ProceduralSummarizer`.
   - **Tool Memory**: Captures historical data on tool usages for dynamic tool parameter adjustments (`MemoryType.TOOL`).

## Architecture and Key Classes
- **Core Entities**: Data flows securely through `MemoryChunk`, `MemoryNode`, and `VectorNode`. 
- **Agent Roles**: Operations are performed by ReAct agents extending `BaseMemoryAgent` (e.g., `ReMeRetriever`, `ReMeSummarizer`, `PersonalRetriever`, `ProceduralRetriever`).
- **Store Backends**: Long-Term storage uses polymorphic Vector databases, offering `MemoryVectorStore`, `ChromaFileStore`, `QdrantVectorStore`, `SqliteFileStore`, and `LocalFileStore`.
- **Procedural Extension Hooks**: Extraction logic is decomposed into modular flows (`SuccessExtraction`, `FailureExtraction`, `ComparativeExtraction`, `MemoryValidation`, `MemoryDeduplication`).

## Data Flow
The data flow typically centers around Summarization and Retrieval loops:
1. **Summarization**: Unprocessed conversations flow through `summary_task_memory` -> `TrajectoryPreprocess` -> `Extraction` -> `MemoryValidation` -> `MemoryDeduplication` -> Vector DB updates.
2. **Retrieval**: User queries execute `retrieve_task_memory` -> `BuildQuery` -> `MemoryRetrieval` -> `RerankMemory` -> `RewriteMemory`, injecting previous `Experiences` as instructions into the LLM's prompt.
