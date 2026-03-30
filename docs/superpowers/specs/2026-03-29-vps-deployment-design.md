# DG-Claw VPS Deployment Spec

**Date:** 2026-03-29
**Subsystem:** 6 of 6 (VPS Deployment)
**Status:** Draft
**Depends on:** All 5 previous subsystems -- DONE

---

## Overview

Production deployment of DG-Claw on a VPS (targeting Hostinger Ubuntu) via Docker Compose. Three containers: Traefik (HTTPS reverse proxy with auto Let's Encrypt), DG-Claw server (Fastify + web-ui SPA), and Tecnativa socket proxy (restricts Docker API access for sandbox containers). One-command setup script for fresh VPS provisioning.

Sandbox containers spawn as siblings on the host Docker daemon via the socket proxy -- no Docker-in-Docker nesting. The socket proxy limits API access to container/exec/image operations only, blocking network/volume/swarm management.

---

## 1. Architecture

```
docker-compose.yml
  |
  +-- traefik (reverse proxy)
  |     HTTPS via Let's Encrypt (automatic)
  |     Docker label-based routing
  |     Dashboard at /traefik/ (password protected)
  |
  +-- dg-claw-server (Node.js + Fastify)
  |     Serves web-ui SPA static files
  |     WebSocket + REST APIs
  |     Talks to socket-proxy for sandbox containers
  |
  +-- socket-proxy (Tecnativa)
        Restricts Docker API access
        Allows: containers, exec, images
        Blocks: networks, volumes, swarm, secrets
```

Traefik reads Docker labels from the server container to configure routing. No separate Traefik config files -- everything is declared in docker-compose.yml.

Sandbox containers spawn as **siblings** on the host Docker daemon. The server container connects to the socket proxy (not the real Docker socket), which filters API calls before forwarding to the host daemon.

---

## 2. File Deliverables

```
deploy/
  docker-compose.yml          -- full stack: traefik + server + socket-proxy
  Dockerfile                  -- multi-stage build for dg-claw-server image
  .env.example                -- template for environment variables
  setup.sh                    -- one-command VPS setup script
  README.md                   -- deployment guide
```

No new TypeScript packages. This subsystem is purely deployment configuration.

---

## 3. Docker Compose

### docker-compose.yml

```yaml
services:
  traefik:
    image: traefik:v3
    restart: unless-stopped
    command:
      - --api.dashboard=true
      - --providers.docker=true
      - --providers.docker.exposedbydefault=false
      - --providers.docker.network=dg-claw-public
      - --entrypoints.web.address=:80
      - --entrypoints.websecure.address=:443
      - --entrypoints.web.http.redirections.entrypoint.to=websecure
      - --certificatesresolvers.letsencrypt.acme.email=${DG_CLAW_ACME_EMAIL}
      - --certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json
      - --certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - traefik-certs:/letsencrypt
    networks:
      - dg-claw-public
    labels:
      - traefik.enable=true
      - traefik.http.routers.traefik-dashboard.rule=Host(`${DG_CLAW_DOMAIN}`) && PathPrefix(`/traefik`)
      - traefik.http.routers.traefik-dashboard.entrypoints=websecure
      - traefik.http.routers.traefik-dashboard.tls.certresolver=letsencrypt
      - traefik.http.routers.traefik-dashboard.service=api@internal
      - traefik.http.routers.traefik-dashboard.middlewares=traefik-auth,traefik-strip
      - traefik.http.middlewares.traefik-auth.basicauth.users=${TRAEFIK_DASHBOARD_AUTH}
      - traefik.http.middlewares.traefik-strip.stripprefix.prefixes=/traefik

  server:
    build:
      context: ..
      dockerfile: deploy/Dockerfile
    restart: unless-stopped
    environment:
      - DG_CLAW_PASSWORD=${DG_CLAW_PASSWORD}
      - DG_CLAW_PORT=3000
      - DOCKER_HOST=tcp://socket-proxy:2375
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - DG_CLAW_SANDBOX_IMAGE=${DG_CLAW_SANDBOX_IMAGE:-node:20-slim}
    volumes:
      - dg-claw-data:/root/.dg-claw
      - dg-claw-workspaces:/workspaces
    networks:
      - dg-claw-public
      - dg-claw-internal
    depends_on:
      - socket-proxy
    labels:
      - traefik.enable=true
      - traefik.http.routers.dg-claw.rule=Host(`${DG_CLAW_DOMAIN}`)
      - traefik.http.routers.dg-claw.entrypoints=websecure
      - traefik.http.routers.dg-claw.tls.certresolver=letsencrypt
      - traefik.http.services.dg-claw.loadbalancer.server.port=3000

  socket-proxy:
    image: tecnativa/docker-socket-proxy:latest
    restart: unless-stopped
    environment:
      CONTAINERS: 1
      EXEC: 1
      IMAGES: 1
      POST: 1
      NETWORKS: 0
      VOLUMES: 0
      SERVICES: 0
      SWARM: 0
      SECRETS: 0
      CONFIGS: 0
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    networks:
      - dg-claw-internal

networks:
  dg-claw-public:
    name: dg-claw-public
  dg-claw-internal:
    name: dg-claw-internal
    internal: true

volumes:
  traefik-certs:
  dg-claw-data:
  dg-claw-workspaces:
```

### Network isolation

- `dg-claw-public` -- Traefik + server. Traefik exposes ports 80/443 to the internet. Server is only accessible via Traefik.
- `dg-claw-internal` -- server + socket-proxy. The socket proxy is NOT on the public network. Only the server can reach it.

### Sandbox container networking

Sandbox containers spawned by the server are created on the host Docker daemon (via socket proxy). They are NOT part of the Compose networks. They have their own bridge network with outbound internet access (agents need browser/API access) but no inbound ports.

---

## 4. Dockerfile

Multi-stage build for the dg-claw-server image:

```dockerfile
# Stage 1: Build
FROM node:20-slim AS builder
WORKDIR /app

# Copy workspace root files
COPY package.json package-lock.json tsconfig.base.json ./

# Copy all package directories
COPY packages/ packages/

# Install dependencies
RUN npm ci

# Build all packages in dependency order
RUN npm run build

# Build web-ui SPA
RUN cd packages/web-ui && npm run build:spa

# Build server
RUN cd packages/server && npm run build

# Build memory, autolearn, sandbox
RUN cd packages/memory && npm run build
RUN cd packages/autolearn && npm run build
RUN cd packages/sandbox && npm run build

# Stage 2: Production
FROM node:20-slim AS production
WORKDIR /app

# Copy built artifacts
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/packages/ai/dist packages/ai/dist
COPY --from=builder /app/packages/ai/package.json packages/ai/
COPY --from=builder /app/packages/agent/dist packages/agent/dist
COPY --from=builder /app/packages/agent/package.json packages/agent/
COPY --from=builder /app/packages/tui/dist packages/tui/dist
COPY --from=builder /app/packages/tui/package.json packages/tui/
COPY --from=builder /app/packages/coding-agent/dist packages/coding-agent/dist
COPY --from=builder /app/packages/coding-agent/package.json packages/coding-agent/
COPY --from=builder /app/packages/web-ui/dist packages/web-ui/dist
COPY --from=builder /app/packages/web-ui/dist-spa packages/web-ui/dist-spa
COPY --from=builder /app/packages/web-ui/package.json packages/web-ui/
COPY --from=builder /app/packages/memory/dist packages/memory/dist
COPY --from=builder /app/packages/memory/package.json packages/memory/
COPY --from=builder /app/packages/autolearn/dist packages/autolearn/dist
COPY --from=builder /app/packages/autolearn/package.json packages/autolearn/
COPY --from=builder /app/packages/sandbox/dist packages/sandbox/dist
COPY --from=builder /app/packages/sandbox/package.json packages/sandbox/
COPY --from=builder /app/packages/server/dist packages/server/dist
COPY --from=builder /app/packages/server/package.json packages/server/

# Install production dependencies only
RUN npm ci --omit=dev

# Server listens on 3000
EXPOSE 3000

# Start the server, serving web-ui SPA from dist-spa/
CMD ["node", "packages/server/dist/cli.js", "--static-dir", "packages/web-ui/dist-spa"]
```

---

## 5. Environment Variables

### .env.example

```env
# ============================================================
# Required
# ============================================================

# Password for the web interface
DG_CLAW_PASSWORD=changeme

# Your domain (must point to this VPS via DNS A record)
DG_CLAW_DOMAIN=claw.yourdomain.com

# Email for Let's Encrypt certificate notifications
DG_CLAW_ACME_EMAIL=you@example.com

# ============================================================
# LLM Provider API Keys (at least one required)
# ============================================================

ANTHROPIC_API_KEY=
OPENAI_API_KEY=
GEMINI_API_KEY=
GROQ_API_KEY=

# ============================================================
# Optional Configuration
# ============================================================

# Default LLM model
# DG_CLAW_MODEL=anthropic:claude-sonnet-4-5

# Sandbox container image (default: node:20-slim)
# DG_CLAW_SANDBOX_IMAGE=node:20-slim

# Sandbox resource limits
# DG_CLAW_SANDBOX_CPU=1
# DG_CLAW_SANDBOX_MEMORY=536870912
# DG_CLAW_SANDBOX_IDLE_TIMEOUT=1800000

# AutoLearn models
# DG_CLAW_AUTOLEARN_MODEL=anthropic:claude-sonnet-4-5
# DG_CLAW_AUTOLEARN_JUDGE_MODEL=anthropic:claude-haiku-4-5

# Traefik dashboard auth (generated by setup.sh)
# Format: user:bcrypt_hash (use htpasswd to generate)
# TRAEFIK_DASHBOARD_AUTH=admin:$$2y$$...
```

---

## 6. Setup Script

### setup.sh

One-command VPS provisioning script:

```bash
#!/bin/bash
set -euo pipefail

echo "=== DG-Claw VPS Setup ==="

# 1. Install Docker if not present
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com | sh
    systemctl enable docker
    systemctl start docker
fi

# 2. Install Docker Compose plugin if not present
if ! docker compose version &> /dev/null; then
    echo "Installing Docker Compose plugin..."
    apt-get update && apt-get install -y docker-compose-plugin
fi

# 3. Create deployment directory
mkdir -p ~/dg-claw
cd ~/dg-claw

# 4. Clone or copy deploy files
# (In production, this would clone the repo or download a release)
echo "Copying deployment files..."

# 5. Interactive configuration
read -p "Domain name (e.g., claw.example.com): " DOMAIN
read -p "Email for Let's Encrypt: " EMAIL
read -sp "Password for web interface: " PASSWORD
echo ""

# 6. Generate .env
cp .env.example .env
sed -i "s/DG_CLAW_DOMAIN=.*/DG_CLAW_DOMAIN=${DOMAIN}/" .env
sed -i "s/DG_CLAW_ACME_EMAIL=.*/DG_CLAW_ACME_EMAIL=${EMAIL}/" .env
sed -i "s/DG_CLAW_PASSWORD=.*/DG_CLAW_PASSWORD=${PASSWORD}/" .env

# Generate Traefik dashboard auth
TRAEFIK_AUTH=$(docker run --rm httpd:2-alpine htpasswd -nbB admin "${PASSWORD}" | sed 's/\$/\$\$/g')
echo "TRAEFIK_DASHBOARD_AUTH=${TRAEFIK_AUTH}" >> .env

# 7. Pull images and start
echo "Starting DG-Claw..."
docker compose up -d --build

# 8. Wait for health check
echo "Waiting for server to start..."
sleep 10
if curl -sf http://localhost:3000/api/health > /dev/null 2>&1; then
    echo ""
    echo "=== DG-Claw is running! ==="
    echo "URL: https://${DOMAIN}"
    echo "Traefik dashboard: https://${DOMAIN}/traefik/"
    echo ""
    echo "Login with the password you set."
else
    echo "Server may still be starting. Check: docker compose logs -f"
fi
```

---

## 7. Persistent Volumes

| Volume | Container Path | Purpose | Survives restart? |
|---|---|---|---|
| `traefik-certs` | `/letsencrypt` | TLS certificates from Let's Encrypt | Yes |
| `dg-claw-data` | `/root/.dg-claw` | Memory DB, sessions, skills, eval, config, auth | Yes |
| `dg-claw-workspaces` | `/workspaces` | Sandbox workspace files per group | Yes |

All data persists across `docker compose restart` and `docker compose down && docker compose up -d`.

Only `docker compose down -v` destroys volumes (requires explicit `-v` flag).

### Backup

```bash
# Backup all persistent data
docker compose stop
tar czf dg-claw-backup-$(date +%Y%m%d).tar.gz \
  -C /var/lib/docker/volumes \
  dg-claw-data dg-claw-workspaces
docker compose start
```

---

## 8. Docker Backend Configuration

The existing `@dg-claw/sandbox` DockerBackend needs one configuration change: connect to the socket proxy instead of the local Docker socket.

The `DOCKER_HOST=tcp://socket-proxy:2375` environment variable is set in docker-compose.yml. The dockerode library reads this automatically -- no code changes needed in `docker-backend.ts`.

Sandbox containers are created on the host Docker daemon (via the proxy). They are NOT part of the Compose networks. Their workspace volumes are mounted from `dg-claw-workspaces` on the host.

---

## 9. Success Criteria

1. `ssh root@vps && bash setup.sh` results in a running DG-Claw instance
2. HTTPS works automatically via Let's Encrypt (no manual cert management)
3. Web app accessible at `https://claw.yourdomain.com`
4. Password login protects the instance
5. Chat with agent works in real-time via WebSocket
6. Sandbox containers spawn as siblings via socket proxy
7. Data persists across `docker compose restart`
8. `docker compose logs -f` shows server activity
9. Traefik dashboard accessible at `https://claw.yourdomain.com/traefik/`
10. Socket proxy blocks unauthorized Docker API operations (networks, volumes, swarm)

---

## 10. What This Spec Does NOT Cover

- Multi-VPS clustering / horizontal scaling (single VPS only)
- Automated backup scheduling (manual backup command provided)
- Monitoring / alerting beyond Traefik dashboard
- CI/CD pipeline (manual deploy via SSH + docker compose)
- Custom domain DNS setup (user configures their DNS provider)
- Multi-user account management (single password auth)
- Log rotation configuration (Docker default log rotation applies)
- VPS firewall setup (user configures via Hostinger panel or ufw)
