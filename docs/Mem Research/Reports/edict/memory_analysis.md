# Memory Analysis Report: Edict

## 1. Overview
The `edict` repository leverages Redis Streams to manage event-driven agent memory. Unlike simpler LLM frameworks, Edict is built on asynchronous message publishing and acknowledgment (ACK) mechanics, utilizing an event bus for robust coordination between tasks, agents, and external consumers.

## 2. Architecture & Key Modules

### `EventBus` (Redis Streams)
Located in `edict/backend/app/services/event_bus.py`, this is the core pipeline for memory events:
- **`publish(topic, ...)`**: Uses Redis `XADD` to emit messages (e.g., `TOPIC_AGENT_THOUGHTS`, `TOPIC_TASK_STATUS`, `TOPIC_TASK_PLANNING_REQUEST`).
- **`consume(topic, group, consumer)`**: Consumers use `XREADGROUP` to extract messages from the persistence stream, guaranteeing correct ordering without data loss.

### Acknowledgment & Crash Resilience
A key feature of Edict's memory architecture is event persistence and consumer idempotency:
- Uses `XACK` to mark a "memory" context event as processed.
- `claim_stale()` implements `XAUTOCLAIM` logic. If an agent process crashes before finalizing an operation, its pending messages are detected and claimed by healthy peers, restoring task memory correctly.

## 3. Data Flow
1. An agent generates a "thought", state update, or interaction payload.
2. The payload is JSON-serialized and written to a specific topic suffix (`edict:stream:{topic}`) alongside a UUID/trace ID.
3. Simultaneously, it broadcasts via standard Redis Pub/Sub (`edict:pubsub:{topic}`) for live WebSocket updates to a dashboard without querying persistent history.
4. Active consumer agents invoke `consume()` and read historical contexts.

## 4. Strengths & Takeaways
- **Durability:** The use of Redis Streams with AOF policies guarantees robust horizontal scaling without losing agent context.
- **Traceability:** Strong integration of UUIDs and timestamps ensures precise timeline rebuilding.
- **Decoupled Architecture:** Memory writes are fully decoupled from real-time communication patterns.
