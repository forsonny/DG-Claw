// @dg-claw/server -- public API

export type { AuthPluginOptions } from "./auth/auth-plugin.js";
export { authPluginRegistration } from "./auth/auth-plugin.js";
export {
	generateJwtToken,
	hashPassword,
	loadOrCreateAuth,
	verifyJwtToken,
	verifyPassword,
} from "./auth/password.js";
export { createServer } from "./server.js";
export type {
	ServerConfig,
	SessionSummary,
	WsClientMessage,
	WsServerMessage,
} from "./types.js";
export { SERVER_DEFAULTS } from "./types.js";
export { AgentBridge } from "./ws/agent-bridge.js";
