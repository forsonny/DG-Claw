# memvid: Usage and Configuration

Memvid provides a high-performance Rust SDK and a versatile, Dockerized standard CLI intended for production runtime environments.

## Docker CLI
Memvid files can be directly initialized and fed files via a mount:
```bash
# Create a new local .mv2 file
docker run --rm -v $(pwd):/data memvid/cli create my-memory.mv2

# Ingest and Extract Triplets from a PDF
docker run --rm -v $(pwd):/data memvid/cli put my-memory.mv2 --input document.pdf

# Retrieve memory bounds
docker run --rm -v $(pwd):/data memvid/cli find my-memory.mv2 --query "search term"
```

## Programmatic Usage (Rust)
Interfacing with the core `Memvid` struct allows precise control over tracks and extraction rules:
```rust
let mut mem = Memvid::open("memory.mv2")?;

// Programmatically constructing a MemoryCard
let card = MemoryCardBuilder::new()
    .kind(MemoryKind::Preference)
    .entity("user")
    .slot("employer")
    .value("Acme Corp")
    .build(1)?;

mem.put_memory_card(card)?;
```

## Security and Control Plane
To mutate a memory container locally, users may need to apply a cryptographic `SignedTicket` (Argon2 validated) issued from the core Memvid Server dashboard. This enforces a remote control-plane authorization model tied explicitly to dashboard `memory_id` UUID bindings.
