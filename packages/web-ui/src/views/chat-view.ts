/**
 * Chat view -- standalone chat component with WebSocket transport.
 *
 * Renders messages directly from WS server events rather than bridging to
 * the local Agent class (whose emit() is private and not designed for remote
 * driving). Provides the same user-facing capabilities: streaming text,
 * abort, and session loading.
 */

import type { AgentMessage } from "@dg-claw/agent";
import { html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { WsClient, type WsConnectionState, type WsServerMessage } from "../ws-client.js";

// ---------------------------------------------------------------------------
// Local render model
// ---------------------------------------------------------------------------

interface ChatMessage {
	id: string;
	role: "user" | "assistant";
	/** Plain text content accumulated from message_start / message_update */
	text: string;
	/** True while the server is still streaming this message */
	streaming: boolean;
}

let _nextId = 0;
function nextId(): string {
	return String(++_nextId);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

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
	}

	// ------------------------------------------------------------------------
	// Connection
	// ------------------------------------------------------------------------

	private _initConnection(): void {
		this.wsClient = new WsClient();

		this.unsubscribeWs = this.wsClient.onMessage((msg: WsServerMessage) => {
			this._handleServerMessage(msg);
		});

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

	// ------------------------------------------------------------------------
	// WS message handling
	// ------------------------------------------------------------------------

	private _handleServerMessage(msg: WsServerMessage): void {
		switch (msg.type) {
			case "agent_start":
				this.isAgentRunning = true;
				break;

			case "agent_end":
				this.isAgentRunning = false;
				// Finalise any still-streaming messages
				this.messages = this.messages.map((m) => (m.streaming ? { ...m, streaming: false } : m));
				break;

			case "message_start": {
				const agentMsg = (msg as { type: string; message: AgentMessage }).message;
				const role = _resolveRole(agentMsg);
				if (!role) break;
				const chatMsg: ChatMessage = {
					id: nextId(),
					role,
					text: _extractText(agentMsg),
					streaming: role === "assistant",
				};
				this.messages = [...this.messages, chatMsg];
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

	// ------------------------------------------------------------------------
	// User actions
	// ------------------------------------------------------------------------

	private _handleInput(e: InputEvent): void {
		this.inputText = (e.target as HTMLInputElement).value;
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

		// Optimistically add the user message
		this.messages = [...this.messages, { id: nextId(), role: "user", text: content, streaming: false }];
		this.inputText = "";

		this.wsClient?.send({ type: "message", content });
	}

	private _abort(): void {
		this.wsClient?.send({ type: "abort" });
	}

	// ------------------------------------------------------------------------
	// Render
	// ------------------------------------------------------------------------

	override render() {
		const connected = this.connectionState === "connected";

		return html`
			<div class="flex flex-col h-full">
				${
					!connected
						? html`
						<div class="bg-yellow-500/10 text-yellow-600 text-xs px-3 py-1 text-center">
							${this.connectionState === "connecting" ? "Connecting..." : "Reconnecting to server..."}
						</div>
					`
						: nothing
				}

				<!-- Message list -->
				<div class="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
					${
						this.messages.length === 0
							? html`
							<div class="flex items-center justify-center h-full text-muted-foreground text-sm">
								No messages yet. Say something!
							</div>
						`
							: this.messages.map((m) => this._renderMessage(m))
					}
				</div>

				<!-- Input area -->
				<div class="border-t border-border p-3 flex gap-2">
					<textarea
						class="flex-1 resize-none bg-secondary text-foreground border border-border rounded-md
							   px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary
							   focus:border-transparent placeholder:text-muted-foreground disabled:opacity-50"
						rows="2"
						placeholder="Type a message... (Enter to send, Shift+Enter for newline)"
						.value=${this.inputText}
						@input=${this._handleInput}
						@keydown=${this._handleKeyDown}
						?disabled=${!connected || this.isAgentRunning}
					></textarea>

					${
						this.isAgentRunning
							? html`
							<button
								class="px-3 py-2 bg-destructive text-destructive-foreground rounded-md
									   hover:bg-destructive/90 text-sm font-medium transition-colors self-end"
								@click=${this._abort}
							>
								Stop
							</button>
						`
							: html`
							<button
								class="px-3 py-2 bg-primary text-primary-foreground rounded-md
									   hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed
									   text-sm font-medium transition-colors self-end"
								?disabled=${!connected || !this.inputText.trim()}
								@click=${this._send}
							>
								Send
							</button>
						`
					}
				</div>
			</div>
		`;
	}

	private _renderMessage(m: ChatMessage) {
		const isUser = m.role === "user";
		return html`
			<div class="flex ${isUser ? "justify-end" : "justify-start"}">
				<div
					class="max-w-[80%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap
						   ${
								isUser
									? "bg-primary text-primary-foreground"
									: "bg-secondary text-foreground border border-border"
							}"
				>
					${m.text || nothing}
					${
						m.streaming
							? html`<span class="inline-block w-2 h-4 bg-current animate-pulse ml-0.5 align-middle"></span>`
							: nothing
					}
				</div>
			</div>
		`;
	}
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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
