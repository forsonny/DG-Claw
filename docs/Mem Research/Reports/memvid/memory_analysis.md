# memvid Memory Context

## Files with 'mem' in name:
src\memvid\memory.rs
src\types\memories_track.rs
src\types\memory_card.rs


## .\CLAUDE.md
.\CLAUDE.md:16 - ├── memvid/             # Main Memvid struct and operations

## .\CONTRIBUTING.md
.\CONTRIBUTING.md:3 - Thank you for your interest in contributing to Memvid! We welcome contributions from everyone.

## .\MV2_SPEC.md
.\MV2_SPEC.md:7 - MV2 is a single-file format for AI memory storage. Everything lives in one file: header, write-ahead log, data segments, search indices, and metadata. No sidecar files.

## .\README.md
.\README.md:49 - **🚀 Higher accuracy than any other memory system :** +35% SOTA on LoCoMo, best-in-class long-horizon conversational recall & reasoning
.\README.md:62 - Instead of running complex RAG pipelines or server-based vector databases, Memvid enables fast retrieval directly from the file.
.\README.md:69 - Memvid draws inspiration from video encoding, not to store video, but to **organize AI memory as an append-only, ultra-efficient sequence of Smart Frames.**

## .\SECURITY.md
.\SECURITY.md:58 - 3. **Validation**: Validate input before ingesting into memory

## data\frequency_bigramdictionary_en_243_342.txt
data\frequency_bigramdictionary_en_243_342.txt:16523 - members from 87255744
data\frequency_bigramdictionary_en_243_342.txt:76940 - class members 16984512
data\frequency_bigramdictionary_en_243_342.txt:106932 - from member 6897280
data\frequency_bigramdictionary_en_243_342.txt:106933 - from members 37566016
data\frequency_bigramdictionary_en_243_342.txt:106934 - from membership 7089280
data\frequency_bigramdictionary_en_243_342.txt:106935 - from memory 30847296
data\frequency_bigramdictionary_en_243_342.txt:141312 - member from 28957568
data\frequency_bigramdictionary_en_243_342.txt:141388 - membership from 6664192
data\frequency_bigramdictionary_en_243_342.txt:141408 - memo from 6918784
data\frequency_bigramdictionary_en_243_342.txt:141422 - memories from 8707776
data\frequency_bigramdictionary_en_243_342.txt:141439 - memory from 9008832
data\frequency_bigramdictionary_en_243_342.txt:182727 - remember from 11433216

## docker\README.md
docker\README.md:38 - docker run --rm -v $(pwd):/data memvid/cli create my-memory.mv2
docker\README.md:41 - docker run --rm -v $(pwd):/data memvid/cli put my-memory.mv2 --input doc.pdf
docker\README.md:44 - docker run --rm -v $(pwd):/data memvid/cli find my-memory.mv2 --query "search"

## docker\cli\README.md
docker\cli\README.md:12 - docker run --rm -v $(pwd):/data memvid/cli create my-memory.mv2
docker\cli\README.md:15 - docker run --rm -v $(pwd):/data memvid/cli put my-memory.mv2 --input doc.pdf
docker\cli\README.md:18 - docker run --rm -v $(pwd):/data memvid/cli find my-memory.mv2 --query "search"
docker\cli\README.md:31 - docker run --rm -v $(pwd):/data memvid/cli create my-memory.mv2
docker\cli\README.md:34 - docker run --rm -v $(pwd):/data memvid/cli put my-memory.mv2 --input document.pdf
docker\cli\README.md:37 - docker run --rm -v $(pwd):/data memvid/cli find my-memory.mv2 --query "search term"
docker\cli\README.md:45 - docker run --rm -v $(pwd):/data memvid/cli stats my-memory.mv2
docker\cli\README.md:87 - command: ["stats", "my-memory.mv2"]

## docker\cli\TESTING.md
docker\cli\TESTING.md:35 - memvid/cli:test create test-memory.mv2
docker\cli\TESTING.md:40 - memvid/cli:test put test-memory.mv2 --input test.txt
docker\cli\TESTING.md:45 - memvid/cli:test find test-memory.mv2 --query "AI"
docker\cli\TESTING.md:50 - memvid/cli:test stats test-memory.mv2
docker\cli\TESTING.md:59 - memvid/cli:test ask test-memory.mv2 "What is this about?" -m openai

## docker\core\DOCKER.md
docker\core\DOCKER.md:131 - Test OOM prevention with memory limits:
docker\core\DOCKER.md:135 - docker run --rm --memory=150m --memory-swap=150m \
docker\core\DOCKER.md:198 - # Or use memory limits in docker run:
docker\core\DOCKER.md:199 - docker run --memory=2g --memory-swap=2g ...

## docker\core\README.md
docker\core\README.md:131 - Test OOM prevention with memory limits:
docker\core\README.md:135 - docker run --rm --memory=150m --memory-swap=150m \
docker\core\README.md:198 - # Or use memory limits in docker run:
docker\core\README.md:199 - docker run --memory=2g --memory-swap=2g ...

## examples\basic_usage.rs
examples\basic_usage.rs:20 - println!("1. Creating memory file at {:?}", path);
examples\basic_usage.rs:74 - println!("3. Memory statistics:");

## examples\clip_visual_search.rs
examples\clip_visual_search.rs:213 - println!("\n   Memory stats:");

## examples\generate_performance_report.rs
examples\generate_performance_report.rs:24 - 3 => ("rust systems programming", "memory safety"),
examples\generate_performance_report.rs:133 - println!("│   Memory:      ~{} KB", (avg_results * 3).max(1));
examples\generate_performance_report.rs:148 - println!("│   • Memory: ~20 KB           │   • Memory: ~300 KB");

## examples\pdf_ingestion.rs
examples\pdf_ingestion.rs:45 - println!("   Memory created at {:?}\n", mv2_path);
examples\pdf_ingestion.rs:82 - println!("3. Memory statistics:");

## examples\text_embedding.rs
examples\text_embedding.rs:149 - // Example 5: Model unloading (memory management)
examples\text_embedding.rs:150 - println!("--- Example 5: Memory Management ---");

## src\api_embed.rs
src\api_embed.rs:245 - std::env::var(&config.api_key_env).map_err(|_| MemvidError::EmbeddingFailed {

## src\clip.rs
src\clip.rs:523 - let models_dir = std::env::var("MEMVID_MODELS_DIR")
src\clip.rs:527 - .unwrap_or_else(|| PathBuf::from(".memvid/models"));
src\clip.rs:530 - std::env::var("MEMVID_CLIP_MODEL").unwrap_or_else(|_| "mobileclip-s2".to_string());
src\clip.rs:532 - let offline = std::env::var("MEMVID_OFFLINE").is_ok();
src\clip.rs:574 - impl From<ClipError> for MemvidError {
src\clip.rs:976 - image::load_from_memory(bytes).map_err(|e| ClipError::ImageBytesDecodeError {
src\clip.rs:1400 - if let Ok(img) = image::load_from_memory(&data) {
src\clip.rs:1737 - std::env::remove_var("MEMVID_CLIP_MODEL");
src\clip.rs:1738 - std::env::remove_var("MEMVID_OFFLINE");

## src\enrichment_worker.rs
src\enrichment_worker.rs:277 - /// 1. Reads the frame from the memory

## src\error.rs
src\error.rs:7 - pub type Result<T> = std::result::Result<T, MemvidError>;
src\error.rs:133 - #[error("Apply a ticket before mutating this memory (tier {tier:?})")]
src\error.rs:149 - "Memory already bound to '{existing_memory_name}' ({existing_memory_id}). Bound at: {bound_at}"
src\error.rs:152 - existing_memory_id: uuid::Uuid,
src\error.rs:153 - existing_memory_name: String,
src\error.rs:224 - impl From<std::io::Error> for MemvidError {
src\error.rs:231 - impl From<tantivy::TantivyError> for MemvidError {

## src\graph_search.rs
src\graph_search.rs:254 - if let Some(card) = self.memvid.get_current_memory(entity, slot) {
src\graph_search.rs:268 - if let Some(card) = self.memvid.get_current_memory(entity, slot) {

## src\lib.rs
src\lib.rs:75 - pub const MEMVID_CORE_VERSION: &str = env!("CARGO_PKG_VERSION");
src\lib.rs:245 - pub use memvid::memory::SchemaSummaryEntry;
src\lib.rs:254 - // Enrichment engine types for extracting memory cards from frames
src\lib.rs:605 - let path = dir.path().join("memory.mv2");
src\lib.rs:681 - let _seq1 = mem.put_bytes(b"Rust memory engine").expect("put");
src\lib.rs:687 - query: "memory".to_string(),
src\lib.rs:1215 - println!("test: verifying corrupted memory");
src\lib.rs:1240 - println!("test: verifying repaired memory");

## src\lockfile.rs
src\lockfile.rs:175 - "memory locked by pid {} (cmd: {}) since {}",

## src\registry.rs
src\registry.rs:163 - if let Some(override_root) = env::var_os("MEMVID_LOCK_REGISTRY_DIR") {

## src\signature.rs
src\signature.rs:15 - memory_id: &'a Uuid,
src\signature.rs:32 - memory_id: &Uuid,
src\signature.rs:71 - memory_id: &Uuid,
src\signature.rs:78 - let message = ticket_message_bytes(memory_id, issuer, seq_no, expires_in, capacity_bytes)?;
src\signature.rs:146 - let memory_id = Uuid::parse_str("123e4567-e89b-12d3-a456-426614174000").unwrap();
src\signature.rs:149 - memory_id: &memory_id,
src\signature.rs:157 - let expected = r#"{"version":1,"memory_id":"123e4567-e89b-12d3-a456-426614174000","issuer":"memvid-dashboard","seq_no":2,"expires_in":86400,"capacity_bytes":10737418240}"#;
src\signature.rs:165 - let memory_id = Uuid::nil();
src\signature.rs:166 - let message = ticket_message_bytes(&memory_id, "issuer", 5, 60, Some(42)).unwrap();
src\signature.rs:215 - let memory_id = Uuid::parse_str("123e4567-e89b-12d3-a456-426614174000").unwrap();
src\signature.rs:251 - let memory_id = Uuid::parse_str("69601cef-bea5-7ba3-fec3-9b5c00000000").unwrap();

## src\text_embed.rs
src\text_embed.rs:253 - PathBuf::from(".memvid-cache/text-models")

## src\toc.rs
src\toc.rs:34 - pub memory_binding: Option<MemoryBinding>,
src\toc.rs:53 - pub memory_binding: Option<MemoryBinding>,
src\toc.rs:73 - memory_binding: legacy.memory_binding,
src\toc.rs:96 - memory_binding: legacy.memory_binding,
src\toc.rs:224 - memory_binding: self.memory_binding.clone(),
src\toc.rs:248 - memory_binding: self.memory_binding.clone(),
src\toc.rs:369 - memory_binding: None,

## src\whisper.rs
src\whisper.rs:155 - let models_dir = std::env::var("MEMVID_MODELS_DIR")
src\whisper.rs:159 - .unwrap_or_else(|| PathBuf::from(".memvid/models"));
src\whisper.rs:161 - let model_name = std::env::var("MEMVID_WHISPER_MODEL")
src\whisper.rs:164 - let offline = std::env::var("MEMVID_OFFLINE").is_ok();
src\whisper.rs:243 - impl From<WhisperError> for MemvidError {

## src\analysis\auto_tag.rs
src\analysis\auto_tag.rs:223 - let text = "Rust memory engines power efficient systems. Memory safety ensures reliability in 2025.";

## src\encryption\constants.rs
src\encryption\constants.rs:25 - pub const ARGON2_MEMORY_KIB: u32 = 64 * 1024; // 64 MiB

## src\enrich\engine.rs
src\enrich\engine.rs:8 - use crate::types::{FrameId, MemoryCard};
src\enrich\engine.rs:52 - /// Memory cards extracted from the frame.
src\enrich\engine.rs:53 - pub cards: Vec<MemoryCard>,
src\enrich\engine.rs:64 - pub fn success(cards: Vec<MemoryCard>) -> Self {
src\enrich\engine.rs:111 - ///         // Extract memory cards from ctx.text

## src\enrich\mod.rs
src\enrich\mod.rs:1 - //! Enrichment engine framework for extracting memory cards from frames.

## src\enrich\rules.rs
src\enrich\rules.rs:3 - //! This engine extracts memory cards from text using configurable regex
src\enrich\rules.rs:7 - use crate::types::{MemoryCard, MemoryCardBuilder, MemoryKind, Polarity};
src\enrich\rules.rs:16 - /// A rule for extracting memory cards from text.
src\enrich\rules.rs:24 - pub kind: MemoryKind,
src\enrich\rules.rs:40 - kind: MemoryKind,
src\enrich\rules.rs:68 - kind: MemoryKind::Preference,
src\enrich\rules.rs:77 - fn apply(&self, ctx: &EnrichmentContext) -> Vec<MemoryCard> {
src\enrich\rules.rs:90 - let mut builder = MemoryCardBuilder::new()
src\enrich\rules.rs:127 - /// structured memory cards from text. Rules can target facts,
src\enrich\rules.rs:174 - MemoryKind::Fact,
src\enrich\rules.rs:186 - MemoryKind::Fact,
src\enrich\rules.rs:198 - MemoryKind::Fact,
src\enrich\rules.rs:210 - MemoryKind::Profile,
src\enrich\rules.rs:222 - MemoryKind::Profile,
src\enrich\rules.rs:258 - MemoryKind::Profile,
src\enrich\rules.rs:282 - MemoryKind::Preference,
src\enrich\rules.rs:294 - MemoryKind::Fact,
src\enrich\rules.rs:306 - MemoryKind::Fact,
src\enrich\rules.rs:318 - MemoryKind::Profile,
src\enrich\rules.rs:330 - MemoryKind::Profile,
... and 32 more

## src\memvid\builder.rs
src\memvid\builder.rs:27 - const DEFAULT_MEMORY_CAP_BYTES: u64 = 4 * 1024 * 1024 * 1024; // 4 GiB
src\memvid\builder.rs:38 - pub memory_cap_bytes: u64,
src\memvid\builder.rs:51 - memory_cap_bytes: DEFAULT_MEMORY_CAP_BYTES,
src\memvid\builder.rs:73 - if self.memory_cap_bytes == 0 {
src\memvid\builder.rs:74 - self.memory_cap_bytes = DEFAULT_MEMORY_CAP_BYTES;

## src\memvid\doctor.rs
src\memvid\doctor.rs:131 - doctor_log!("doctor: WAL rebuilt, attempting to open memory");
src\memvid\doctor.rs:880 - doctor_log!("doctor: trying to open memory");
src\memvid\doctor.rs:1011 - detail: Some("memory handle unavailable".into()),
src\memvid\doctor.rs:1090 - detail: Some("memory handle unavailable".into()),
src\memvid\doctor.rs:1136 - detail: Some("memory handle unavailable".into()),

## src\memvid\enrichment.rs
src\memvid\enrichment.rs:77 - /// let memvid = Arc::new(Mutex::new(Memvid::open("memory.mv2")?));

## src\memvid\frame.rs
src\memvid\frame.rs:45 - fn from_memory(bytes: Vec<u8>) -> Self {
src\memvid\frame.rs:47 - inner: BlobReaderInner::Memory(Cursor::new(bytes)),
src\memvid\frame.rs:55 - BlobReaderInner::Memory(cursor) => cursor.get_ref().len() as u64,
src\memvid\frame.rs:80 - BlobReaderInner::Memory(cursor) => cursor.read(buf),
src\memvid\frame.rs:135 - BlobReaderInner::Memory(cursor) => cursor.seek(position),
src\memvid\frame.rs:249 - Ok(BlobReader::from_memory(bytes))

## src\memvid\lifecycle.rs
src\memvid\lifecycle.rs:48 - pub struct Memvid {
src\memvid\lifecycle.rs:635 - /// Load the memories track from the manifest if present.
src\memvid\lifecycle.rs:799 - pub fn get_memory_binding(&self) -> Option<&crate::types::MemoryBinding> {
src\memvid\lifecycle.rs:814 - binding: crate::types::MemoryBinding,
src\memvid\lifecycle.rs:818 - if let Some(existing) = self.get_memory_binding() {
src\memvid\lifecycle.rs:819 - if existing.memory_id != binding.memory_id {
src\memvid\lifecycle.rs:820 - return Err(MemvidError::MemoryAlreadyBound {
src\memvid\lifecycle.rs:821 - existing_memory_id: existing.memory_id,
src\memvid\lifecycle.rs:822 - existing_memory_name: existing.memory_name.clone(),
src\memvid\lifecycle.rs:832 - self.toc.memory_binding = Some(binding);
src\memvid\lifecycle.rs:847 - pub fn set_memory_binding_only(&mut self, binding: crate::types::MemoryBinding) -> Result<()> {
src\memvid\lifecycle.rs:851 - if let Some(existing) = self.get_memory_binding() {
src\memvid\lifecycle.rs:852 - if existing.memory_id != binding.memory_id {
src\memvid\lifecycle.rs:853 - return Err(MemvidError::MemoryAlreadyBound {
src\memvid\lifecycle.rs:854 - existing_memory_id: existing.memory_id,
src\memvid\lifecycle.rs:855 - existing_memory_name: existing.memory_name.clone(),
src\memvid\lifecycle.rs:862 - self.toc.memory_binding = Some(binding);
src\memvid\lifecycle.rs:868 - /// Unbind this file from its dashboard memory.
src\memvid\lifecycle.rs:872 - self.toc.memory_binding = None;
src\memvid\lifecycle.rs:1191 - memory_binding: None,

## src\memvid\memory.rs
src\memvid\memory.rs:78 - pub fn put_memory_card(&mut self, card: MemoryCard) -> Result<MemoryCardId> {
src\memvid\memory.rs:118 - pub fn put_memory_cards(&mut self, cards: Vec<MemoryCard>) -> Result<Vec<MemoryCardId>> {
src\memvid\memory.rs:172 - card_ids: Vec<MemoryCardId>,
src\memvid\memory.rs:213 - /// Get the current (most recent, non-retracted) memory for an entity:slot.
src\memvid\memory.rs:222 - pub fn get_current_memory(&self, entity: &str, slot: &str) -> Option<&MemoryCard> {
src\memvid\memory.rs:253 - pub fn get_entity_memories(&self, entity: &str) -> Vec<&MemoryCard> {
src\memvid\memory.rs:269 - pub fn aggregate_memory_slot(&self, entity: &str, slot: &str) -> Vec<String> {
src\memvid\memory.rs:305 - pub fn get_memory_timeline(&self, entity: &str) -> Vec<&MemoryCard> {
src\memvid\memory.rs:311 - pub fn get_preferences(&self, entity: &str) -> Vec<&MemoryCard> {
src\memvid\memory.rs:392 - pub fn validate_card(&self, card: &MemoryCard) -> std::result::Result<(), SchemaError> {
src\memvid\memory.rs:395 - crate::types::MemoryKind::Fact
src\memvid\memory.rs:396 - | crate::types::MemoryKind::Preference
src\memvid\memory.rs:397 - | crate::types::MemoryKind::Profile
src\memvid\memory.rs:398 - | crate::types::MemoryKind::Relationship => Some(EntityKind::Person),
src\memvid\memory.rs:400 - crate::types::MemoryKind::Event
src\memvid\memory.rs:401 - | crate::types::MemoryKind::Goal
src\memvid\memory.rs:402 - | crate::types::MemoryKind::Other => None,
src\memvid\memory.rs:417 - pub fn validate_cards(&self, cards: &[MemoryCard]) -> Vec<(usize, SchemaError)> {
src\memvid\memory.rs:425 - /// Infer schemas from existing memory cards.
src\memvid\memory.rs:657 - use crate::types::MemoryCardBuilder;
... and 13 more

## src\memvid\mod.rs
src\memvid\mod.rs:1 - //! Core `Memvid` type orchestrating `.mv2` lifecycle and mutations.

## src\memvid\mutation.rs
src\memvid\mutation.rs:1280 - reason: "frame id too large for memory",

## src\memvid\ticket.rs
src\memvid\ticket.rs:166 - /// * `ticket` - A signed ticket obtained from the Memvid API
src\memvid\ticket.rs:195 - let binding = self.toc.memory_binding.as_ref().ok_or_else(|| {
src\memvid\ticket.rs:197 - reason: "cannot apply signed ticket: memory is not bound to the Memvid API".into(),
src\memvid\ticket.rs:202 - if ticket.memory_id != binding.memory_id {
src\memvid\ticket.rs:272 - let memory_id = uuid::Uuid::new_v4();
src\memvid\ticket.rs:294 - let memory_id = uuid::Uuid::nil();
src\memvid\ticket.rs:297 - let ticket = SignedTicket::new("test", 5, 3600, None, memory_id, signature);
src\memvid\ticket.rs:325 - let memory_id = uuid::Uuid::new_v4();

## src\memvid\search\api.rs
src\memvid\search\api.rs:489 - /// let result = memvid.search_adaptive("query", &embedding, config, 200, None)?;
src\memvid\search\api.rs:945 - std::env::var("MEMVID_MAX_INDEX_PAYLOAD")

## src\replay\engine.rs
src\replay\engine.rs:127 - pub fn new(mem: &'a mut Memvid, config: ReplayExecutionConfig) -> Self {
src\replay\engine.rs:128 - Self { mem, config }

## src\replay\types.rs
src\replay\types.rs:66 - /// - **Memory Safety**: Uses safe UTF-8 conversion with lossy handling
src\replay\types.rs:67 - /// - **`DoS` Prevention**: Prevents memory exhaustion and resource abuse
src\replay\types.rs:122 - /// - **Memory Safety**: Uses safe UTF-8 conversion with lossy handling
src\replay\types.rs:123 - /// - **`DoS` Prevention**: Prevents memory exhaustion and resource abuse

## src\table\storage.rs
src\table\storage.rs:274 - /// * `mem` - The Memvid instance to read from (mutable due to internal caching)
src\table\storage.rs:343 - /// * `mem` - The Memvid instance to read from (mutable due to internal caching)

## src\triplet\extractor.rs
src\triplet\extractor.rs:10 - use crate::types::{FrameId, MemoryCard};
src\triplet\extractor.rs:76 - /// Extract triplets from text and convert to memory cards.
src\triplet\extractor.rs:163 - fn deduplicate_cards(mut cards: Vec<MemoryCard>) -> (Vec<MemoryCard>, usize) {
src\triplet\extractor.rs:262 - use crate::types::MemoryCardBuilder;
src\triplet\extractor.rs:265 - MemoryCardBuilder::new()
src\triplet\extractor.rs:275 - MemoryCardBuilder::new()

## src\triplet\mod.rs
src\triplet\mod.rs:39 - //! // - MemoryCard { entity: "user", slot: "employer", value: "Acme Corp" }
src\triplet\mod.rs:40 - //! // - MemoryCard { entity: "user", slot: "location", value: "San Francisco" }

## src\triplet\types.rs
src\triplet\types.rs:4 - //! They map directly to `MemoryCards`: entity=Subject, slot=Predicate, value=Object.

## src\types\adaptive.rs
src\types\adaptive.rs:23 - //! let results = memvid.search_adaptive(&query, config)?;

## src\types\audit.rs
src\types\audit.rs:547 - answer: Some("Memvid is an AI memory system.".to_string()),

## src\types\binding.rs
src\types\binding.rs:12 - pub struct MemoryBinding {
src\types\binding.rs:14 - pub memory_id: Uuid,
src\types\binding.rs:16 - pub memory_name: String,

## src\types\common.rs
src\types\common.rs:88 - /// Marker type signifying an open (mutable) memory.
src\types\common.rs:91 - /// Marker type signifying a sealed (read-only) memory.
src\types\common.rs:96 - pub struct MemvidHandle<Mode> {

## src\types\manifest.rs
src\types\manifest.rs:782 - pub memory_binding: Option<super::MemoryBinding>,
src\types\manifest.rs:817 - pub struct MemoriesTrackManifest {

## src\types\memories_track.rs
src\types\memories_track.rs:13 - use crate::types::memory_card::{MemoryCard, MemoryCardId, MemoryKind, Polarity, VersionRelation};
src\types\memories_track.rs:35 - entries: HashMap<String, Vec<MemoryCardId>>,
src\types\memories_track.rs:46 - pub fn insert(&mut self, card: &MemoryCard) {
src\types\memories_track.rs:53 - pub fn get(&self, entity: &str, slot: &str) -> Option<&[MemoryCardId]> {
src\types\memories_track.rs:68 - pub fn get_by_entity(&self, entity: &str) -> Vec<MemoryCardId> {
src\types\memories_track.rs:142 - pub card_ids: Vec<MemoryCardId>,
src\types\memories_track.rs:206 - card_ids: Vec<MemoryCardId>,
src\types\memories_track.rs:257 - pub struct MemoriesTrack {
src\types\memories_track.rs:259 - cards: Vec<MemoryCard>,
src\types\memories_track.rs:261 - next_id: MemoryCardId,
src\types\memories_track.rs:276 - pub fn add_card(&mut self, mut card: MemoryCard) -> MemoryCardId {
src\types\memories_track.rs:292 - pub fn add_cards(&mut self, cards: Vec<MemoryCard>) -> Vec<MemoryCardId> {
src\types\memories_track.rs:298 - pub fn get_card(&self, id: MemoryCardId) -> Option<&MemoryCard> {
src\types\memories_track.rs:331 - card_ids: Vec<MemoryCardId>,
src\types\memories_track.rs:352 - pub fn get_cards(&self, entity: &str, slot: &str) -> Vec<&MemoryCard> {
src\types\memories_track.rs:365 - pub fn get_current(&self, entity: &str, slot: &str) -> Option<&MemoryCard> {
src\types\memories_track.rs:381 - pub fn get_at_time(&self, entity: &str, slot: &str, timestamp: i64) -> Option<&MemoryCard> {
src\types\memories_track.rs:399 - pub fn get_entity_cards(&self, entity: &str) -> Vec<&MemoryCard> {
src\types\memories_track.rs:451 - pub fn get_timeline(&self, entity: &str) -> Vec<&MemoryCard> {
src\types\memories_track.rs:455 - .filter(|c| c.kind == MemoryKind::Event)
... and 15 more

## src\types\memory_card.rs
src\types\memory_card.rs:13 - pub type MemoryCardId = u64;
src\types\memory_card.rs:160 - impl std::fmt::Display for MemoryKind {
src\types\memory_card.rs:166 - /// A structured memory unit extracted from conversation content.
src\types\memory_card.rs:176 - pub struct MemoryCard {
src\types\memory_card.rs:178 - pub id: MemoryCardId,
src\types\memory_card.rs:181 - pub kind: MemoryKind,
src\types\memory_card.rs:248 - pub fn supersedes(&self, other: &MemoryCard) -> bool {
src\types\memory_card.rs:291 - pub struct MemoryCardBuilder {
src\types\memory_card.rs:292 - kind: Option<MemoryKind>,
src\types\memory_card.rs:318 - pub fn kind(mut self, kind: MemoryKind) -> Self {
src\types\memory_card.rs:326 - self.kind(MemoryKind::Fact)
src\types\memory_card.rs:332 - self.kind(MemoryKind::Preference)
src\types\memory_card.rs:338 - self.kind(MemoryKind::Event)
src\types\memory_card.rs:344 - self.kind(MemoryKind::Profile)
src\types\memory_card.rs:350 - self.kind(MemoryKind::Relationship)
src\types\memory_card.rs:356 - self.kind(MemoryKind::Goal)
src\types\memory_card.rs:478 - pub fn build(self, id: MemoryCardId) -> Result<MemoryCard, MemoryCardBuilderError> {
src\types\memory_card.rs:481 - .ok_or(MemoryCardBuilderError::MissingField("kind"))?;
src\types\memory_card.rs:484 - .ok_or(MemoryCardBuilderError::MissingField("entity"))?;
src\types\memory_card.rs:487 - .ok_or(MemoryCardBuilderError::MissingField("slot"))?;
... and 18 more

## src\types\mod.rs
src\types\mod.rs:34 - pub use binding::{FileInfo, MemoryBinding};
src\types\mod.rs:87 - pub use memory_card::{

## src\types\options.rs
src\types\options.rs:41 - /// Extract triplets (Subject-Predicate-Object) from text and store as `MemoryCards`.
src\types\options.rs:344 - /// Run rules-based memory extraction after ingestion (default: true).

## src\types\schema.rs
src\types\schema.rs:476 - /// Infer a schema from existing memory cards.

## src\types\ticket.rs
src\types\ticket.rs:52 - /// A cryptographically signed ticket from the Memvid control plane.
src\types\ticket.rs:65 - pub memory_id: Uuid,
src\types\ticket.rs:79 - memory_id: Uuid,

## src\types\verification.rs
src\types\verification.rs:154 - /// Memory path the plan was derived from.

## tests\encryption_capsule.rs
tests\encryption_capsule.rs:185 - println!("Restored memory verified: {} frames", stats.frame_count);

## tests\search.rs
tests\search.rs:9 - fn create_searchable_memory(path: &std::path::Path) {
