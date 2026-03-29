// @dg-claw/server -- public API

export type { AdminRoutesConfig } from "./api/admin.js";
export { registerAdminRoutes } from "./api/admin.js";
export type { MemoryRoutesConfig } from "./api/memory.js";
export { registerMemoryRoutes } from "./api/memory.js";
export type { SessionRoutesConfig } from "./api/sessions.js";
export { registerSessionRoutes } from "./api/sessions.js";
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
export type { AgentBridgeConfig, WsMessageCallback } from "./ws/agent-bridge.js";
export { AgentBridge, createAgentBridge } from "./ws/agent-bridge.js";
export type { WsHandlerOptions } from "./ws/ws-handler.js";
export { registerWsHandler } from "./ws/ws-handler.js";
