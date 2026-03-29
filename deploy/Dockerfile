# ==============================================================================
# Stage 1: Build all packages
# ==============================================================================
FROM node:20-slim AS builder
WORKDIR /app

# Install git (needed by isomorphic-git and some build scripts)
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Copy workspace root files
COPY package.json package-lock.json tsconfig.base.json ./

# Copy all package directories (including package.json for each)
COPY packages/ai/package.json packages/ai/
COPY packages/agent/package.json packages/agent/
COPY packages/tui/package.json packages/tui/
COPY packages/coding-agent/package.json packages/coding-agent/
COPY packages/web-ui/package.json packages/web-ui/
COPY packages/memory/package.json packages/memory/
COPY packages/autolearn/package.json packages/autolearn/
COPY packages/sandbox/package.json packages/sandbox/
COPY packages/server/package.json packages/server/

# Install all dependencies (cached unless package.json changes)
RUN npm ci

# Copy all source code
COPY packages/ packages/
COPY tsconfig.json ./

# Build packages in correct dependency order:
# tui -> ai -> agent -> memory -> sandbox -> coding-agent -> web-ui -> autolearn -> server
# (memory must be built before coding-agent because memory-extension.ts imports from it)
RUN cd packages/tui && npm run build
RUN cd packages/ai && npm run build
RUN cd packages/agent && npm run build
RUN cd packages/memory && npm run build
RUN cd packages/sandbox && npm run build
RUN cd packages/coding-agent && npm run build
RUN cd packages/web-ui && npm run build
RUN cd packages/autolearn && npm run build
RUN cd packages/server && npm run build

# Build web-ui SPA (Vite build for the served app -- separate from library build)
RUN cd packages/web-ui && npm run build:spa

# ==============================================================================
# Stage 2: Production image (only dist files + production deps)
# ==============================================================================
FROM node:20-slim AS production
WORKDIR /app

# Install git (needed by autolearn for ratchet loop git operations)
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Copy workspace root
COPY package.json package-lock.json ./

# Copy built packages (dist only + package.json for each)
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

# Server listens on port 3000
EXPOSE 3000

# Start the server, serving the web-ui SPA
CMD ["node", "packages/server/dist/cli.js", "--static-dir", "packages/web-ui/dist-spa"]
