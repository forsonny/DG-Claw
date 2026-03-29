#!/bin/bash
set -euo pipefail

# ==============================================================================
# DG-Claw VPS Setup Script
# Run on a fresh Ubuntu VPS: bash setup.sh
# ==============================================================================

echo ""
echo "  ____   ____       ____ _                 "
echo " |  _ \\ / ___|     / ___| | __ ___      __ "
echo " | | | | |  _ ____| |   | |/ _\` \\ \\ /\\ / / "
echo " | |_| | |_| |____| |___| | (_| |\\ V  V /  "
echo " |____/ \\____|      \\____|_|\\__,_| \\_/\\_/   "
echo ""
echo "=== VPS Setup Script ==="
echo ""

# ---------- 1. Check we're root ----------
if [ "$(id -u)" -ne 0 ]; then
    echo "Error: This script must be run as root."
    echo "Run: sudo bash setup.sh"
    exit 1
fi

# ---------- 2. Install Docker ----------
if ! command -v docker &> /dev/null; then
    echo "[1/6] Installing Docker..."
    curl -fsSL https://get.docker.com | sh
    systemctl enable docker
    systemctl start docker
    echo "Docker installed."
else
    echo "[1/6] Docker already installed."
fi

# ---------- 3. Install Docker Compose plugin ----------
if ! docker compose version &> /dev/null; then
    echo "[2/6] Installing Docker Compose plugin..."
    apt-get update -qq && apt-get install -y -qq docker-compose-plugin
    echo "Docker Compose installed."
else
    echo "[2/6] Docker Compose already installed."
fi

# ---------- 4. Set up in repo directory ----------
echo "[3/6] Setting up deployment directory..."
# The setup script must run from the deploy/ directory inside the cloned repo.
# The Dockerfile needs the full repo as build context (context: ..)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# Verify we're inside a DG-Claw repo
if [ ! -f "$REPO_DIR/packages/server/package.json" ]; then
    echo "Error: setup.sh must be run from inside the DG-Claw repo."
    echo "Run: git clone https://github.com/forsonny/DG-Claw.git && cd DG-Claw/deploy && bash setup.sh"
    exit 1
fi

cd "$SCRIPT_DIR"

# ---------- 5. Interactive configuration ----------
echo "[4/6] Configuration..."
echo ""

if [ -f .env ]; then
    read -p ".env already exists. Overwrite? (y/N): " OVERWRITE
    if [ "$OVERWRITE" != "y" ] && [ "$OVERWRITE" != "Y" ]; then
        echo "Keeping existing .env."
    else
        rm .env
    fi
fi

if [ ! -f .env ]; then
    read -p "Domain name (e.g., claw.example.com): " DOMAIN
    read -p "Email for Let's Encrypt: " EMAIL
    read -sp "Password for web interface: " PASSWORD
    echo ""

    # Generate .env from template
    cp .env.example .env
    sed -i "s|DG_CLAW_PASSWORD=changeme|DG_CLAW_PASSWORD=${PASSWORD}|" .env
    sed -i "s|DG_CLAW_DOMAIN=claw.yourdomain.com|DG_CLAW_DOMAIN=${DOMAIN}|" .env
    sed -i "s|DG_CLAW_ACME_EMAIL=you@example.com|DG_CLAW_ACME_EMAIL=${EMAIL}|" .env

    # Generate Traefik dashboard basic auth
    TRAEFIK_AUTH=$(docker run --rm httpd:2-alpine htpasswd -nbB admin "${PASSWORD}" 2>/dev/null | sed 's/\$/\$\$/g')
    echo "TRAEFIK_DASHBOARD_AUTH=${TRAEFIK_AUTH}" >> .env

    # Prompt for API keys
    echo ""
    echo "Enter API keys (press Enter to skip):"
    read -p "  Anthropic API key: " ANTHROPIC_KEY
    read -p "  OpenAI API key: " OPENAI_KEY
    [ -n "$ANTHROPIC_KEY" ] && sed -i "s|ANTHROPIC_API_KEY=|ANTHROPIC_API_KEY=${ANTHROPIC_KEY}|" .env
    [ -n "$OPENAI_KEY" ] && sed -i "s|OPENAI_API_KEY=|OPENAI_API_KEY=${OPENAI_KEY}|" .env

    echo ".env configured."
fi

# ---------- 6. Build and start ----------
echo "[5/6] Building and starting DG-Claw..."
echo "This may take a few minutes on first run..."
docker compose up -d --build

# ---------- 7. Health check ----------
echo "[6/6] Waiting for server to start..."
DOMAIN=$(grep DG_CLAW_DOMAIN .env | cut -d= -f2)
for i in {1..30}; do
    if docker compose exec -T server curl -sf http://localhost:3000/api/health > /dev/null 2>&1; then
        echo ""
        echo "============================================"
        echo "  DG-Claw is running!"
        echo "============================================"
        echo ""
        echo "  Web app:   https://${DOMAIN}"
        echo "  Dashboard: https://${DOMAIN}/traefik/"
        echo "  Logs:      docker compose logs -f"
        echo ""
        echo "  Login with the password you set."
        echo ""
        echo "============================================"
        exit 0
    fi
    sleep 2
done

echo ""
echo "Server is still starting. Check logs:"
echo "  cd $SCRIPT_DIR && docker compose logs -f"
