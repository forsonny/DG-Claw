# DG-Claw VPS Deployment

Deploy DG-Claw on any Ubuntu VPS with one command.

## Prerequisites

- Ubuntu 22.04+ VPS (tested on Hostinger KVM)
- Root SSH access
- A domain name with DNS A record pointing to the VPS IP

## Quick Start

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Clone the repo (or upload the deploy/ directory)
git clone https://github.com/forsonny/DG-Claw.git
cd DG-Claw/deploy

# Run setup
bash setup.sh
```

The script will:
1. Install Docker and Docker Compose (if not present)
2. Prompt for domain, email, password, and API keys
3. Build and start the stack
4. Set up HTTPS via Let's Encrypt

## Architecture

Three containers managed by Docker Compose:

| Container | Image | Role |
|---|---|---|
| **traefik** | traefik:v3 | HTTPS reverse proxy, auto Let's Encrypt |
| **server** | dg-claw:latest (built) | Fastify server + web-ui SPA |
| **socket-proxy** | tecnativa/docker-socket-proxy | Restricts Docker API for sandbox |

## Management

```bash
cd /opt/dg-claw

# View logs
docker compose logs -f

# Restart
docker compose restart

# Stop
docker compose down

# Update (pull latest code and rebuild)
git pull
docker compose up -d --build

# Backup data
docker compose stop
tar czf backup-$(date +%Y%m%d).tar.gz \
  -C /var/lib/docker/volumes \
  dg-claw-data dg-claw-workspaces
docker compose start
```

## Configuration

Edit `.env` and restart:

```bash
nano .env
docker compose up -d
```

See `.env.example` for all available options.

## Persistent Data

| Volume | Contents |
|---|---|
| `dg-claw-data` | Memory DB, sessions, skills, config, auth |
| `dg-claw-workspaces` | Sandbox workspace files |
| `traefik-certs` | Let's Encrypt TLS certificates |

Data survives `docker compose restart` and `docker compose down`.
Only `docker compose down -v` removes volumes.

## Troubleshooting

**HTTPS not working:** Ensure your domain's DNS A record points to the VPS IP. Let's Encrypt needs to reach port 80 for the HTTP challenge.

**Port 80/443 blocked:** Check your VPS firewall (Hostinger panel or `ufw allow 80,443/tcp`).

**Out of memory:** Increase VPS RAM or reduce sandbox limits in `.env`.

**Server won't start:** Check logs with `docker compose logs server`.
