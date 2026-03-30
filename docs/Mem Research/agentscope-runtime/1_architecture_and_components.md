# AgentScope-Runtime Memory System

## Overview and Role
AgentScope-Runtime extends the core AgentScope ecosystem by providing specialized production deployments and tools. Within this repository, Memory takes the form of the **ModelStudio Memory Component**, which delegates long-term memory operations entirely to a managed remote service (Alibaba Cloud's DashScope API) rather than local file structures or local vector databases.

## Architecture Integration
The architecture is structured around standard AgentScope `Tool` classes that encapsulate REST API calls. Because it relies on a discrete service (`https://dashscope.aliyuncs.com/api/v2/apps/memory`), the memory state is entirely out-of-process and decoupled from local working memory.

Six distinct tool classes serve as the interaction surface:
1. `AddMemory`: Pushes new conversation nodes to the remote API.
2. `SearchMemory`: Queries the remote API for related chunks.
3. `ListMemory`: Paginates through memory nodes.
4. `DeleteMemory`: Cleans up memory references.
5. `CreateProfileSchema`: Configures structured attribute templates.
6. `GetUserProfile`: Fetches metadata (Name, Value attributes).

## Key Files, Modules, and Classes
- **`src/agentscope_runtime/tools/modelstudio_memory/core.py`**: Defines elements such as `AddMemory`, `SearchMemory`, `ListMemory`, etc. These all inherit from `Tool` and `ModelStudioMemoryBase`.
- **`src/agentscope_runtime/tools/modelstudio_memory/base.py`**: Abstract base managing the HTTP `_request` lifecycle over `aiohttp` to DashScope.
- **`src/agentscope_runtime/tools/modelstudio_memory/config.py`**: Reads variables, hosts `DEFAULT_MEMORY_SERVICE_ENDPOINT`, and provisions `MemoryServiceConfig`.
- **`src/agentscope_runtime/tools/modelstudio_memory/schemas.py`**: Pydantic models for explicit parsing (e.g., `MemoryNode`, `UserProfile`, `AddMemoryInput`).

## Data and Control Flow
1. **Component Initialization**: By default, components fall back to environment variables (`DASHSCOPE_API_KEY`) to instantiate configurations.
2. **Execution**: The Agent issues an asynchronous tool call via `_arun`.
3. **Serialization**: Pydantic inputs (`args.model_dump(exclude_none=True)`) serialize to JSON requests.
4. **Network Access**: Using the parent's generic `_request` handler, a payload goes to `/add`, `/search`, or `/memory_nodes`.
5. **Deserialization**: Resulting dictionaries map back to specialized output definitions (`AddMemoryOutput`), forming a standardized block containing `MemoryNode` structures.
