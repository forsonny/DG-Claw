/**
 * Database initialization for @dg-claw/memory.
 */

import Database from "better-sqlite3";

export function createMemoryDb(dbPath: string): Database.Database {
	const db = new Database(dbPath);

	db.pragma("journal_mode = WAL");
	db.pragma("busy_timeout = 5000");
	db.pragma("foreign_keys = ON");

	db.exec(SCHEMA_SQL);

	return db;
}

export function closeMemoryDb(db: Database.Database): void {
	db.close();
}

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS schema_version (
  version INTEGER PRIMARY KEY,
  applied_at TEXT NOT NULL
);
INSERT OR IGNORE INTO schema_version VALUES (1, datetime('now'));

CREATE TABLE IF NOT EXISTS memories (
  id TEXT PRIMARY KEY,
  entity TEXT NOT NULL,
  slot TEXT NOT NULL,
  value TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'Profile', 'Preference', 'Goal', 'Entity', 'Event', 'Case', 'Pattern', 'Tool'
  )),
  scope_user_id TEXT,
  scope_agent_id TEXT,
  scope_group_id TEXT NOT NULL,
  salience REAL DEFAULT 1.0,
  confidence REAL DEFAULT 1.0,
  embedding BLOB,
  parent_id TEXT,
  source_session_id TEXT,
  source_turn INTEGER,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived')),
  expires_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  accessed_at TEXT NOT NULL,
  CHECK (
    (category IN ('Profile', 'Preference', 'Goal', 'Entity', 'Event') AND scope_agent_id IS NULL)
    OR
    (category IN ('Case', 'Pattern', 'Tool') AND scope_agent_id IS NOT NULL)
  )
);

CREATE INDEX IF NOT EXISTS idx_memories_scope
  ON memories(scope_group_id, scope_user_id, scope_agent_id);
CREATE INDEX IF NOT EXISTS idx_memories_salience
  ON memories(scope_group_id, salience DESC);
CREATE INDEX IF NOT EXISTS idx_memories_category
  ON memories(category);

CREATE VIRTUAL TABLE IF NOT EXISTS memories_fts USING fts5(
  entity, slot, value, category,
  content='memories',
  content_rowid='rowid'
);

CREATE TRIGGER IF NOT EXISTS memories_ai AFTER INSERT ON memories BEGIN
  INSERT INTO memories_fts(rowid, entity, slot, value, category)
  VALUES (new.rowid, new.entity, new.slot, new.value, new.category);
END;
CREATE TRIGGER IF NOT EXISTS memories_ad AFTER DELETE ON memories BEGIN
  INSERT INTO memories_fts(memories_fts, rowid, entity, slot, value, category)
  VALUES ('delete', old.rowid, old.entity, old.slot, old.value, old.category);
END;
CREATE TRIGGER IF NOT EXISTS memories_au AFTER UPDATE ON memories BEGIN
  INSERT INTO memories_fts(memories_fts, rowid, entity, slot, value, category)
  VALUES ('delete', old.rowid, old.entity, old.slot, old.value, old.category);
  INSERT INTO memories_fts(rowid, entity, slot, value, category)
  VALUES (new.rowid, new.entity, new.slot, new.value, new.category);
END;

CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  memory_id TEXT,
  action TEXT NOT NULL,
  actor TEXT NOT NULL,
  details TEXT,
  timestamp TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS experiments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  target TEXT NOT NULL,
  mutation TEXT NOT NULL,
  score REAL,
  status TEXT NOT NULL CHECK (status IN ('kept', 'discarded', 'crashed')),
  commit_hash TEXT,
  timestamp TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS top_of_mind (
  scope_key TEXT PRIMARY KEY,
  summary TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS redo_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  batch_id TEXT NOT NULL,
  payload TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'done', 'failed')),
  retry_count INTEGER DEFAULT 0,
  created_at TEXT NOT NULL,
  completed_at TEXT
);

CREATE TABLE IF NOT EXISTS pending_approvals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  memory_id TEXT NOT NULL,
  entity TEXT NOT NULL,
  slot TEXT NOT NULL,
  value TEXT NOT NULL,
  category TEXT NOT NULL,
  scope_user_id TEXT,
  scope_agent_id TEXT,
  scope_group_id TEXT NOT NULL,
  confidence REAL,
  source_session_id TEXT,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS session_groups (
  session_id TEXT PRIMARY KEY,
  group_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  agent_id TEXT,
  created_at TEXT NOT NULL
);
`;
