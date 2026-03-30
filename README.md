# DG-Claw

A self-hosted AI agent platform for VPS deployment. Chat with AI agents through a web interface, with persistent memory, auto-learning, and sandboxed execution.

Built on [pi-mono](https://github.com/badlogic/pi-mono) by Mario Zechner.

## Features

- **Web Interface** -- real-time chat via WebSocket, memory dashboard, admin panel
- **Multi-Provider LLM** -- 20+ providers (Anthropic, OpenAI, Google, Groq, xAI, Mistral, and more)
- **Persistent Memory** -- Entity:Slot:Value triples with 8 typed categories, hybrid BM25 + vector retrieval, salience decay
- **Auto-Learning** -- Karpathy-style ratchet loop that self-improves system prompts overnight
- **Sandboxed Execution** -- Docker container isolation for all tool execution (bash, file I/O, browser)
- **One-Command Deploy** -- Docker Compose with Traefik (auto HTTPS) on any VPS

## Quick Start (VPS)

```bash
ssh root@your-vps
git clone https://github.com/forsonny/DG-Claw.git
cd DG-Claw/deploy
bash setup.sh
```

The setup script installs Docker, prompts for your domain and password, and starts everything.

## Quick Start (Local Dev)

```bash
git clone https://github.com/forsonny/DG-Claw.git
cd DG-Claw
npm install
npm run build
```

## Packages

| Package | Description |
|---|---|
| `@dg-claw/ai` | Multi-provider LLM abstraction (20+ providers, streaming, tool use) |
| `@dg-claw/agent` | Agent runtime with event system and tool execution |
| `@dg-claw/coding-agent` | CLI agent with extensions, sessions, compaction |
| `@dg-claw/memory` | Persistent memory -- SQLite + FTS5 + vector search |
| `@dg-claw/autolearn` | Auto-learning ratchet loop with eval harness |
| `@dg-claw/sandbox` | Docker container isolation with fallback |
| `@dg-claw/server` | Fastify web server -- WebSocket, REST APIs, auth |
| `@dg-claw/web-ui` | Lit web components + Vite SPA |
| `@dg-claw/tui` | Terminal UI library |

## Architecture

```
Browser --> Traefik (HTTPS) --> Fastify Server
                                    |
                                    +-- WebSocket (agent streaming)
                                    +-- REST API (memory, admin, sessions)
                                    +-- Static files (Lit SPA)
                                    |
                                    +-- Agent Runtime
                                    +-- Memory Layer (SQLite)
                                    +-- Sandbox (Docker)
                                    +-- AutoLearn (ratchet loop)
```

## CLIs

| Command | Purpose |
|---|---|
| `dg-claw` | Interactive coding agent (terminal) |
| `dg-claw-server` | Start the web server |
| `dg-claw-optimize <target>` | Run the auto-learning ratchet loop |

## License

MIT -- see [LICENSE](LICENSE)
