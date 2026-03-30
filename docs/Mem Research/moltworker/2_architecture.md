# Memory Architecture
1. **Hardware Memory**: Focuses on instance billing based on "provisioned memory" (e.g., 4 GiB standard).
2. **In-Memory Flags**: Uses simple in-memory constructs in its `persistence.ts` script to avoid redundant restarts/restores within the same container execution isolate.
