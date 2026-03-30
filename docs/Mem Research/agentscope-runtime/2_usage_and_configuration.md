# Usage and Configuration: AgentScope-Runtime

## Setup and Configuration
Because this operates as a wrapper for external DashScope capabilities, the underlying mechanism is configured predominantly by environment variables globally.

**Environment Variables Required:**
- `DASHSCOPE_API_KEY`: The root authentication key.
- `MODELSTUDIO_SERVICE_ID`: The identifier. Falls back to "memory_service".
- `MEMORY_SERVICE_ENDPOINT`: Falls back to `"https://dashscope.aliyuncs.com/api/v2/apps/memory"`.

## Practical Tool Usage
The agent interacts with the functions natively as provided AgentScope `Tool` items.
```python
# To register the components
tools = [
  AddMemory(),
  SearchMemory(),
  ListMemory()
]
# Agent invokes tool based on LLM instruction:
result = await tools[1]._arun(SearchMemoryInput(user_id="xyz123", top_k=5, min_score=0.3))
```

This model is fully declarative, relying strictly on Pydantic schemas validating correct type bounds.

## Profile System Features
This implementation diverges by supporting an explicitly strongly-typed **User Profile Schema** instead of unstructured flat text lists.
```python
# CreateProfileSchemaInput 
# Attributes like: "communication_style", "timezone", "language_preference"
```
The agent queries this metadata through `GetUserProfileInput(schema_id=..., user_id=...)` recovering `UserProfileAttribute` lists that help bootstrap the core behavioral context block.
