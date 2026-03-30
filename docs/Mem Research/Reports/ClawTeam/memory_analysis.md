# Memory Analysis Report: ClawTeam

## 1. Overview
The `ClawTeam` repository utilizes a distinct inter-agent filesystem-based "Mailbox" and "Event Log" system to facilitate agent memory. Instead of routing events straight into memory structures or databases, it treats memory conceptually as a combination of persistent inboxes and an unalterable global event tracker.

## 2. Architecture & Key Modules

### `MailboxManager`
Located in `clawteam/team/mailbox.py`, the `MailboxManager` manages I/O operations for agent message delivery:
- **`_transport` Layer:** Implemented with `file` (default JSON FS storage) or `p2p` variations.
- **Atomic File Writing:** Writes incoming payloads to `.tmp` files and swaps them into the destination tracking index, ensuring thread safety and intact message reads.

### Inbox Persistence and Event Logs
- **Event Log (`_events_dir`)**: Every message sent across the team is duplicated directly into a chronological event log directory (`evt-{timestamp}-{uuid}.json`). The event log acts as a read-only historical memory for diagnostic checks resulting from `get_event_log(limit=100)`.
- **Claim & Quarantine Logic:** Memory components explicitly acknowledge (`item.ack()`) or quarantine (`item.quarantine()`) bad messages during deserialization based on Pydantic `TeamMessage` models. 

### `TeamManager` & Identity
- Configures members and coordinates shared memory identities (`TeamConfig`, `TeamMember`). Memory aliases enable simplified tracking of which agent is playing a specific persona role.

## 3. Data Flow
1. Agent A invokes `send()` indicating the recipient alias/role.
2. The payload is encapsulated into a `TeamMessage` with `request_id`, capability dependencies, and `msg_type`.
3. The message is pushed to the target's inbox via the active `Transport` implementation and simultaneously logged to the central chronological `_events_dir`.
4. Agent B uses `receive()` or background polling `claim_messages()` to ingest context, validating structure and handling JSON schema parsing.

## 4. Strengths & Takeaways
- **File-Backed Resiliency:** The file transport system naturally enables high debugging observability since all memories lie raw on the filesystem.
- **Atomic Safeties:** Native atomic rename actions protect data corruption in concurrent I/O.
- **Robust Model Validation:** Strict use of Pydantic models for unmarshalling memory objects filters out corrupted states proactively.
