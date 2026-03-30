# DG-Claw Web Gateway Spec

**Date:** 2026-03-29
**Subsystem:** 2 of 6 (Multi-Channel Gateway -- Web App)
**Status:** Draft
**Depends on:** Subsystem 1 (Fork & Rebrand) -- DONE, Subsystem 3 (Memory) -- DONE, Subsystem 4 (Auto-Learning) -- DONE, Subsystem 5 (Sandbox) -- DONE

---

## Overview

A web-based interface for DG-Claw hosted on the VPS. Users visit a URL, authenticate with a password, and chat with agents in real-time via WebSocket. The web app provides chat, session management, a memory dashboard, and an admin panel -- all in a single-page application built with Lit, Vite, and @lit-labs/router.

This replaces the traditional "multi-channel messaging gateway" with a self-hosted web app that gives full control over the user experience. The gateway abstraction is designed so messaging channel adapters (Telegram, Discord, Slack) can be added later without rearchitecting.

---

## 1. Tech Stack

| Layer | Tech | Role |
|---|---|---|
| Build | Vite | Dev server with HMR, production bundling |
| Styling | Tailwind CSS v4 | Already in @dg-claw/web-ui |
| Components | Lit | Web components, already in @dg-claw/web-ui |
| Routing | @lit-labs/router | Client-side SPA routing (Lit team) |
| Content | Artifacts system | Interactive HTML/SVG/Markdown/code (already built) |
| Language | TypeScript | Already everywhere |
| Server | Fastify | HTTP server, WebSocket, REST APIs |
| Auth | JWT + bcrypt | Password-based, HTTP-only cookies |

---

## 2. Package Structure

### @dg-claw/server (NEW)

The backend. Serves the web app, handles WebSocket connections, exposes REST APIs.

Dependencies:
- `fastify` -- HTTP server
- `@fastify/websocket` -- WebSocket support
- `@fastify/static` -- static file serving
- `@fastify/cookie` -- cookie parsing for JWT
- `bcryptjs` -- password hashing (pure JS, no native deps)
- `jsonwebtoken` -- JWT token generation and verification
- `@dg-claw/coding-agent` -- agent session management
- `@dg-claw/memory` -- memory queries for dashboard
- `@dg-claw/sandbox` -- sandbox status for admin panel
- `@dg-claw/autolearn` -- ratchet loop triggers for admin panel

CLI binary: `dg-claw-server` (starts the server)

### @dg-claw/web-ui (MODIFY)

The frontend. Updated build pipeline and new views added.

Changes:
- Add Vite as build tool (replace tsc + tailwindcss CLI)
- Add `@lit-labs/router` for SPA routing
- Add WebSocket client for real-time agent streaming
- Add panel layout system (memory sidebar, admin sidebar)
- Add login view
- Add memory dashboard components
- Add admin panel components
- Existing components (ChatPanel, artifacts, dialogs, message renderers) stay as-is

---

## 3. Architecture

```
Browser <-- HTTPS --> Fastify Server (@dg-claw/server)
                        |
                        +-- Static files (web-ui dist/)
                        +-- WebSocket /ws (agent streaming)
                        +-- REST API /api/* (memory, admin, sessions)
                        |
                        +-- Agent Runtime (@dg-claw/coding-agent)
                        +-- Sandbox (@dg-claw/sandbox)
                        +-- Memory (@dg-claw/memory)
                        +-- AutoLearn (@dg-claw/autolearn)
```

Single port serves everything. In production, a reverse proxy (nginx/Caddy) handles TLS termination and forwards to Fastify.

---

## 4. Authentication

### Password-based single-user auth

- Password set via `DG_CLAW_PASSWORD` environment variable or `~/.dg-claw/config/settings.json`
- On first run, if no password is set, the server generates a random one and prints it to stdout
- Password stored as bcrypt hash in `~/.dg-claw/config/auth.json`
- Sessions use JWT in HTTP-only secure cookies
- JWT secret auto-generated and stored in `~/.dg-claw/config/auth.json`

### Auth flow

1. User visits `/` -- server checks JWT cookie
2. No valid JWT -> redirect to `/login`
3. User enters password -> `POST /api/auth/login`
4. Server verifies against bcrypt hash -> sets JWT cookie (24h expiry)
5. Subsequent requests include cookie automatically
6. WebSocket upgrade requires valid JWT cookie

### API endpoints

- `POST /api/auth/login` -- body: `{ password: string }`, response: sets cookie, returns `{ ok: true }`
- `POST /api/auth/logout` -- clears cookie
- `GET /api/auth/status` -- returns `{ authenticated: boolean }`

---

## 5. WebSocket Protocol

### Connection

- Endpoint: `ws://host/ws`
- Requires valid JWT cookie (verified on upgrade)
- Auto-reconnect on disconnect (exponential backoff: 1s, 2s, 4s, 8s, max 30s)

### Client -> Server messages

```typescript
// Send a message to the agent
{ type: "message", content: string }

// Send message with attachments
{ type: "message", content: string, attachments?: Attachment[] }

// Abort current agent response
{ type: "abort" }

// Load a specific session
{ type: "session_load", sessionId: string }

// Create a new session
{ type: "session_new" }

// Fork a session at an entry
{ type: "session_fork", entryId: string }
```

### Server -> Client messages

Maps directly to `AgentEvent` types from `@dg-claw/agent`:

```typescript
{ type: "agent_start" }
{ type: "turn_start" }
{ type: "message_start", message: AgentMessage }
{ type: "message_update", delta: AssistantMessageEvent }
{ type: "message_end", message: AgentMessage }
{ type: "tool_execution_start", toolCallId: string, toolName: string }
{ type: "tool_execution_update", toolCallId: string, partialResult: any }
{ type: "tool_execution_end", toolCallId: string, result: any, isError: boolean }
{ type: "turn_end" }
{ type: "agent_end" }

// Session events
{ type: "session_loaded", sessionId: string, entries: SessionEntry[] }
{ type: "session_list", sessions: SessionSummary[] }

// Error
{ type: "error", message: string }
```

---

## 6. REST APIs

### Sessions

- `GET /api/sessions` -- list all sessions with metadata (id, name, timestamp, message count)
- `GET /api/sessions/:id` -- get full session with entries
- `DELETE /api/sessions/:id` -- delete a session

### Memory

- `GET /api/memory/facts?groupId=&category=&limit=&offset=` -- browse memory entries with filtering
- `GET /api/memory/top-of-mind?groupId=` -- get L0 summary
- `GET /api/memory/experiments?target=` -- ratchet loop experiment history
- `GET /api/memory/stats?groupId=` -- memory statistics (total facts, by category, by salience)

### Admin

- `GET /api/admin/config` -- current settings (model, sandbox config, autolearn config)
- `PUT /api/admin/config` -- update settings
- `GET /api/admin/models` -- list available models
- `GET /api/admin/sandbox/status` -- container status (running, stopped, resource usage)
- `POST /api/admin/autolearn/run` -- trigger ratchet loop for a target
- `GET /api/admin/autolearn/schedules` -- list autolearn schedules
- `POST /api/admin/autolearn/schedules` -- add/update a schedule

All REST endpoints require valid JWT cookie. Responses are JSON.

---

## 7. Frontend: URL Structure

Chat-centric with panel overlays:

```
/login              -- password entry (no auth required)
/                   -- chat (main interface, always visible)
/sessions/:id       -- chat with specific session loaded
/?panel=memory      -- chat + memory dashboard sidebar
/?panel=admin       -- chat + admin panel sidebar
```

Chat is always the primary view. Panels slide in alongside without replacing it. Closing a panel returns to full-width chat.

---

## 8. Frontend: Views and Components

### Login View

Simple password field + submit button. On success, redirects to `/`. Displays error on wrong password.

### Chat View (main)

Uses the existing `ChatPanel` / `AgentInterface` components from @dg-claw/web-ui. The only change: replace the direct `streamFn` callback with a WebSocket-backed transport.

```typescript
// Before (direct LLM call)
streamFn: (messages, options) => streamSimple(messages, options)

// After (WebSocket proxy)
streamFn: (messages, options) => wsTransport.stream(messages, options)
```

The existing ChatPanel, message renderers, artifact system, and tool renderers all work unchanged.

### Memory Panel

A sidebar component that fetches from `/api/memory/*`:
- **Facts browser** -- filterable table of Entity:Slot:Value triples with category, salience, timestamps
- **Top-of-Mind** -- displays the L0 summary
- **Experiments** -- table of ratchet loop history (target, mutation, score, status)
- **Stats** -- pie chart or summary of memory by category

### Admin Panel

A sidebar component that fetches from `/api/admin/*`:
- **Model selector** -- dropdown to change active model (reuses existing ModelSelector dialog)
- **Sandbox status** -- shows container state (running/stopped), resource usage
- **AutoLearn** -- trigger ratchet run, view/edit schedules, see experiment history
- **Settings** -- general configuration (password change, port, etc.)

---

## 9. Frontend: Build Migration

### Current build (web-ui)

```
tsc -p tsconfig.build.json && tailwindcss -i ./src/app.css -o ./dist/app.css --minify
```

### New build (Vite)

```
vite build
```

The existing library build (`tsc` for the npm package export) remains for consumers who import `@dg-claw/web-ui` as a library. Vite is added as a SECOND build target for the SPA. The `vite.config.ts` configures:
- Input: `src/index.html` (new entry point)
- Lit component discovery for Tailwind
- Output: `dist/` directory served by Fastify

### Dev mode

```
vite dev
```

HMR for instant feedback. Proxy `/api` and `/ws` to the Fastify server running on a different port.

---

## 10. Server: File Layout

```
packages/server/
  package.json
  tsconfig.build.json
  vitest.config.ts
  src/
    index.ts              -- public API exports
    types.ts              -- ServerConfig, WsMessage types
    cli.ts                -- dg-claw-server CLI entry
    server.ts             -- Fastify setup, plugin registration
    auth/
      auth-plugin.ts      -- JWT cookie auth as Fastify plugin
      password.ts         -- bcrypt hash/verify, auth.json management
    ws/
      ws-handler.ts       -- WebSocket connection handler
      agent-bridge.ts     -- bridges AgentSession events to WS messages
    api/
      sessions.ts         -- /api/sessions routes
      memory.ts           -- /api/memory routes
      admin.ts            -- /api/admin routes
      auth-routes.ts      -- /api/auth routes
  test/
    auth.test.ts
    ws-handler.test.ts
    sessions-api.test.ts
    memory-api.test.ts
    admin-api.test.ts
```

---

## 11. Web-UI: File Changes

```
packages/web-ui/
  vite.config.ts          -- NEW: Vite configuration
  index.html              -- NEW: SPA entry point
  src/
    app-shell.ts          -- NEW: root component with router
    router.ts             -- NEW: @lit-labs/router setup
    ws-client.ts          -- NEW: WebSocket client with reconnect
    views/
      login-view.ts       -- NEW: password login
      chat-view.ts        -- NEW: wraps existing ChatPanel with WS transport
    panels/
      memory-panel.ts     -- NEW: memory dashboard sidebar
      admin-panel.ts      -- NEW: admin settings sidebar
      panel-layout.ts     -- NEW: panel container with open/close
    -- All existing components unchanged --
```

---

## 12. Implementation Dependencies

| Dependency | Purpose | Package |
|---|---|---|
| `fastify` | HTTP server | @dg-claw/server |
| `@fastify/websocket` | WebSocket support | @dg-claw/server |
| `@fastify/static` | Static file serving | @dg-claw/server |
| `@fastify/cookie` | Cookie parsing | @dg-claw/server |
| `bcryptjs` | Password hashing | @dg-claw/server |
| `jsonwebtoken` | JWT tokens | @dg-claw/server |
| `vite` | Build tool | @dg-claw/web-ui |
| `@lit-labs/router` | SPA routing | @dg-claw/web-ui |

---

## 13. Success Criteria

1. `dg-claw-server` starts and serves the web app on a configurable port
2. Password login protects the instance; invalid passwords are rejected
3. User can chat with the agent in real-time via WebSocket with streaming responses
4. Sessions persist and can be browsed, resumed, and deleted
5. Memory dashboard shows facts, Top-of-Mind summary, and experiment history
6. Admin panel allows model selection and displays sandbox status
7. The existing web-ui components (ChatPanel, artifacts, message renderers) work unchanged
8. `?panel=memory` and `?panel=admin` toggle sidebars without losing chat context
9. WebSocket auto-reconnects on disconnect
10. Server runs on a single port (static files + WS + REST on same Fastify instance)

---

## 14. What This Spec Does NOT Cover

- Multi-user accounts and role-based access (deferred to VPS deployment subsystem)
- Messaging channel adapters: Telegram, Discord, Slack (future expansion via ChannelAdapter interface)
- HTTPS/TLS termination (handled by reverse proxy in VPS deployment)
- File upload to agent (v2 -- text-only chat in v1)
- Mobile-specific responsive design (Tailwind handles basic responsiveness)
- Real-time collaborative editing (single user per session)
- OAuth/SSO authentication (v2)
- Push notifications (v2)
