/**
 * Chat view -- industrial command aesthetic.
 *
 * Dark background, amber accents, monospace system feel.
 * Messages render with clear visual hierarchy.
 */

import type { AgentMessage } from "@dg-claw/agent";
import { html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { WsClient, type WsConnectionState, type WsServerMessage } from "../ws-client.js";

interface ChatMessage {
	id: string;
	role: "user" | "assistant";
	text: string;
	streaming: boolean;
	timestamp: number;
}

let _nextId = 0;
function nextId(): string {
	return String(++_nextId);
}

@customElement("chat-view")
export class ChatView extends LitElement {
	@property({ type: String }) sessionId: string | null = null;
	@property({ type: String }) activePanel: string | null = null;

	@state() private connectionState: WsConnectionState = "disconnected";
	@state() private messages: ChatMessage[] = [];
	@state() private inputText = "";
	@state() private isAgentRunning = false;

	private wsClient: WsClient | null = null;
	private unsubscribeWs: (() => void) | null = null;
	private unsubscribeState: (() => void) | null = null;

	createRenderRoot() {
		return this;
	}

	override connectedCallback() {
		super.connectedCallback();
		this._initConnection();
	}

	override disconnectedCallback() {
		super.disconnectedCallback();
		this._cleanup();
	}

	override updated(changedProperties: Map<string, unknown>) {
		if (changedProperties.has("sessionId") && this.sessionId) {
			this._loadSession(this.sessionId);
		}
		// Auto-scroll on new messages
		if (changedProperties.has("messages")) {
			requestAnimationFrame(() => {
				const container = this.querySelector("#message-scroll");
				if (container) container.scrollTop = container.scrollHeight;
			});
		}
	}

	// -- Connection --

	private _initConnection(): void {
		this.wsClient = new WsClient();
		this.unsubscribeWs = this.wsClient.onMessage((msg: WsServerMessage) => this._handleServerMessage(msg));
		this.unsubscribeState = this.wsClient.onStateChange((s: WsConnectionState) => {
			this.connectionState = s;
		});
		this.wsClient.connect();

		if (this.sessionId) {
			const unsub = this.wsClient.onStateChange((s: WsConnectionState) => {
				if (s === "connected") {
					unsub();
					this._loadSession(this.sessionId!);
				}
			});
		}
	}

	private _loadSession(id: string): void {
		if (this.wsClient?.connectionState === "connected") {
			this.wsClient.send({ type: "session_load", sessionId: id });
		}
	}

	private _cleanup(): void {
		this.unsubscribeWs?.();
		this.unsubscribeState?.();
		this.wsClient?.close();
		this.wsClient = null;
	}

	// -- WS messages --

	private _handleServerMessage(msg: WsServerMessage): void {
		switch (msg.type) {
			case "agent_start":
				this.isAgentRunning = true;
				break;
			case "agent_end":
				this.isAgentRunning = false;
				this.messages = this.messages.map((m) => (m.streaming ? { ...m, streaming: false } : m));
				break;
			case "message_start": {
				const agentMsg = (msg as { type: string; message: AgentMessage }).message;
				const role = _resolveRole(agentMsg);
				if (!role || role === "user") break;
				this.messages = [
					...this.messages,
					{
						id: nextId(),
						role,
						text: _extractText(agentMsg),
						streaming: true,
						timestamp: Date.now(),
					},
				];
				break;
			}
			case "message_update": {
				const agentMsg = (msg as { type: string; message: AgentMessage }).message;
				const fullText = _extractText(agentMsg);
				this.messages = this.messages.map((m, idx) =>
					idx === this.messages.length - 1 && m.streaming ? { ...m, text: fullText } : m,
				);
				break;
			}
			case "message_end": {
				const agentMsg = (msg as { type: string; message: AgentMessage }).message;
				const fullText = _extractText(agentMsg);
				this.messages = this.messages.map((m, idx) =>
					idx === this.messages.length - 1 && m.streaming ? { ...m, text: fullText, streaming: false } : m,
				);
				break;
			}
			case "session_loaded": {
				const entries = (msg as { type: string; entries: Array<{ type: string; message?: AgentMessage }> }).entries;
				this.messages = [];
				for (const entry of entries) {
					if (entry.type === "message" && entry.message) {
						const role = _resolveRole(entry.message);
						if (role) {
							this.messages = [
								...this.messages,
								{
									id: nextId(),
									role,
									text: _extractText(entry.message),
									streaming: false,
									timestamp: Date.now(),
								},
							];
						}
					}
				}
				break;
			}
			case "error":
				console.error("[ChatView] Server error:", (msg as { type: string; message: string }).message);
				break;
		}
	}

	// -- User actions --

	private _handleInput(e: InputEvent): void {
		this.inputText = (e.target as HTMLTextAreaElement).value;
	}

	private _handleKeyDown(e: KeyboardEvent): void {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			this._send();
		}
	}

	private _send(): void {
		const content = this.inputText.trim();
		if (!content || this.isAgentRunning || this.connectionState !== "connected") return;
		this.messages = [
			...this.messages,
			{
				id: nextId(),
				role: "user",
				text: content,
				streaming: false,
				timestamp: Date.now(),
			},
		];
		this.inputText = "";
		this.wsClient?.send({ type: "message", content });
	}

	private _abort(): void {
		this.wsClient?.send({ type: "abort" });
	}

	// -- Render --

	override render() {
		const connected = this.connectionState === "connected";

		return html`
			<div class="flex flex-col h-full bg-[#0a0a0a]">
				<!-- Connection status -->
				${
					!connected
						? html`
					<div class="px-4 py-1.5 text-[11px] tracking-wider uppercase text-center border-b border-neutral-800"
						 style="font-family: 'Geist Mono', ui-monospace, monospace;
								color: ${this.connectionState === "connecting" ? "#a3a3a3" : "#f59e0b"};
								background: ${this.connectionState === "connecting" ? "rgba(163,163,163,0.03)" : "rgba(245,158,11,0.03)"};">
						${this.connectionState === "connecting" ? "Connecting..." : "Reconnecting..."}
					</div>
				`
						: nothing
				}

				<!-- Messages -->
				<div id="message-scroll" class="flex-1 overflow-y-auto min-h-0">
					${
						this.messages.length === 0
							? html`
						<div class="flex flex-col items-center justify-center h-full text-neutral-500 gap-4">
							<div class="w-16 h-16 flex items-center justify-center border border-neutral-800 bg-neutral-900/50">
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
									 class="text-amber-500/40" stroke-width="1">
									<path d="M6 3L2 7v7l4 4M18 3l4 4v7l-4 4M9 8l3-3 3 3M9 16l3 3 3-3M12 5v14"/>
								</svg>
							</div>
							<div class="text-center">
								<p class="text-sm text-neutral-400">Ready</p>
								<p class="text-xs text-neutral-600 mt-1"
								   style="font-family: 'Geist Mono', ui-monospace, monospace;">
									Type a message to begin
								</p>
							</div>
						</div>
					`
							: html`
						<div class="max-w-3xl mx-auto px-4 py-6 space-y-1">
							${this.messages.map((m) => this._renderMessage(m))}
						</div>
					`
					}
				</div>

				<!-- Input -->
				<div class="border-t border-neutral-800 bg-[#0d0d0d]">
					<div class="max-w-3xl mx-auto px-4 py-3 flex gap-2 items-end">
						<textarea
							class="flex-1 resize-none bg-neutral-900 text-neutral-200 border border-neutral-800
								   px-3 py-2.5 text-sm
								   focus:outline-none focus:border-amber-500/40
								   focus:shadow-[0_0_0_1px_rgba(245,158,11,0.1)]
								   placeholder:text-neutral-600 disabled:opacity-40
								   transition-all duration-150"
							rows="1"
							placeholder="Message DG-Claw..."
							.value=${this.inputText}
							@input=${this._handleInput}
							@keydown=${this._handleKeyDown}
							?disabled=${!connected || this.isAgentRunning}
							style="font-family: 'Geist Mono', ui-monospace, monospace; font-size: 13px;"
						></textarea>

						${
							this.isAgentRunning
								? html`
							<button
								class="px-4 py-2.5 bg-red-500/10 text-red-400 border border-red-500/20
									   hover:bg-red-500/20 text-xs font-medium transition-all duration-150
									   uppercase tracking-wider shrink-0"
								style="font-family: 'Geist Mono', ui-monospace, monospace;"
								@click=${this._abort}
							>Stop</button>
						`
								: html`
							<button
								class="px-4 py-2.5 bg-amber-500 text-black
									   hover:bg-amber-400 disabled:opacity-20 disabled:cursor-not-allowed
									   text-xs font-medium transition-all duration-150
									   uppercase tracking-wider shrink-0"
								style="font-family: 'Geist Mono', ui-monospace, monospace;"
								?disabled=${!connected || !this.inputText.trim()}
								@click=${this._send}
							>Send</button>
						`
						}
					</div>
				</div>
			</div>
		`;
	}

	private _renderMessage(m: ChatMessage) {
		const isUser = m.role === "user";

		return html`
			<div class="py-3 ${isUser ? "" : ""}">
				<!-- Role label -->
				<div class="flex items-center gap-2 mb-1.5">
					<span class="text-[10px] uppercase tracking-widest font-medium
						${isUser ? "text-neutral-500" : "text-amber-500/70"}"
						style="font-family: 'Geist Mono', ui-monospace, monospace;">
						${isUser ? "You" : "DG-Claw"}
					</span>
					${
						m.streaming
							? html`
						<span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
					`
							: nothing
					}
				</div>

				<!-- Content -->
				<div class="text-sm leading-relaxed whitespace-pre-wrap
					${isUser ? "text-neutral-300 pl-0" : "text-neutral-200 pl-0"}">
					${m.text || nothing}
				</div>
			</div>
		`;
	}
}

// -- Helpers --

function _resolveRole(msg: AgentMessage): "user" | "assistant" | null {
	if (!msg || typeof msg !== "object") return null;
	const role = (msg as { role?: string }).role;
	if (role === "user" || role === "user-with-attachments") return "user";
	if (role === "assistant") return "assistant";
	return null;
}

function _extractText(msg: AgentMessage): string {
	if (!msg || typeof msg !== "object") return "";
	const content = (msg as { content?: unknown }).content;
	if (typeof content === "string") return content;
	if (Array.isArray(content)) {
		return content
			.filter((block): block is { type: "text"; text: string } => block?.type === "text")
			.map((block) => block.text)
			.join("");
	}
	return "";
}
