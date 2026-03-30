# OpenViking: Inferred Patterns and Unclear Areas

## Inferred Patterns
1. **Heavy Enterprise Architecture**: The explicit use of `RedoLog`, `SemanticQueue`, and `TreeBuilder` transactions highlights an architecture designed for high-concurrency cloud deployments, likely derived from Volcengine's internal production requirements.
2. **Progressive Memory Abstraction**: The system intentionally keeps memory in hierarchical patches. It pulls L0 (abstract), L1 (overview), and L2 (detail) tiers. The agent receives summaries first, preserving prompt token limits (`memoryExpandMaxResults=6`).

## Unclear Areas / Blind Spots
- **LLM Independence**: OpenViking relies directly on LLM extraction calls to populate its 6 structural categories, but it is not entirely clear from the client codebase how tightly coupled this is to proprietary Volcano models vs. standard OpenAI/Anthropic models.
- **Skill Memory "Phases"**: Documentation mentions "Skill memory Phase 3" as a future or distinct feature, suggesting that the self-updating mechanism for tools (where the agent tracks its past failures with a specific API) is still undergoing heavy architectural refactorings.
