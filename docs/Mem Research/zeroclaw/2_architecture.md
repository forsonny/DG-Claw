# Memory Architecture
1. **Traits**: The system revolves around a polymorphic `Memory` Rust trait.
2. **SQLite**: The primary backend uses SQLite to support measurable memory store/recall cycles. Categorization is natively supported (e.g., `MemoryCategory::Core` vs `MemoryCategory::Daily`).
3. **AOP Audit**: Includes `InMemoryAuditStorage` for tracking and auditing aspect-oriented programming (AOP) tool calls.
4. **Hardware Targeting**: Specialized features like `probe-rs` are designed to directly read memory from embedded hardware (like Nucleo or Raspberry Pi deployments).
