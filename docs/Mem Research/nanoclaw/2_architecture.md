# Memory Architecture
1. **Hierarchy**: NanoClaw uses a strict folder hierarchy for memory, partitioned into global memory (`groups/global/CLAUDE.md`) and per-group memory (`groups/{name}/CLAUDE.md`).
2. **Isolation**: A running agent in a group container only has mount access to its specific folder, thereby strictly isolating its memory from other groups. 
3. **SDK Tie-in**: Relies deeply on Claude's built-in memory auto-management by injecting these directory paths into Claude's memory endpoints.
