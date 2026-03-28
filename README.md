# DG-Claw

A full-service AI agent host for VPS deployment.

Built on the [pi-mono](https://github.com/badlogic/pi-mono) agent runtime.

## Status

**In development.** This is the foundation layer -- agent runtime, multi-provider LLM support, extension system.

## Packages

| Package | Description |
|---|---|
| `@dg-claw/ai` | Multi-provider LLM abstraction (20+ providers) |
| `@dg-claw/agent` | Agent runtime, event system, tool execution |
| `@dg-claw/coding-agent` | CLI agent with extensions, sessions, tools |
| `@dg-claw/tui` | Terminal UI library |
| `@dg-claw/web-ui` | Web UI components |

## Getting Started

```bash
git clone https://github.com/forsonny/DG-Claw.git
cd DG-Claw
npm install
npm run build
```

## Roadmap

- [x] Fork and rebrand from pi-mono
- [ ] Multi-channel messaging gateway
- [ ] Persistent memory layer (episodic, semantic, procedural)
- [ ] Auto-learning engine (Karpathy ratchet loop)
- [ ] Sandboxed execution
- [ ] VPS deployment packaging

## License

MIT -- see [LICENSE](LICENSE)
