/**
 * Panel layout -- renders header, chat view, and optional sidebar panel.
 *
 * No Shadow DOM slots -- renders chat-view directly in the correct DOM order.
 */

import { html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "../views/chat-view.js";
import "./memory-panel.js";
import "./admin-panel.js";

@customElement("panel-layout")
export class PanelLayout extends LitElement {
	@property({ type: String }) activePanel: string | null = null;
	@property({ type: String }) sessionId: string | null = null;
	@state() private panelOpen = false;

	createRenderRoot() {
		return this;
	}

	override updated(changedProperties: Map<string, unknown>) {
		if (changedProperties.has("activePanel")) {
			this.panelOpen = !!this.activePanel;
		}
	}

	private openPanel(panel: string): void {
		this.activePanel = panel;
		this.panelOpen = true;
		const url = new URL(window.location.href);
		url.searchParams.set("panel", panel);
		window.history.replaceState({}, "", url.toString());
	}

	private closePanel(): void {
		this.panelOpen = false;
		this.activePanel = null;
		const url = new URL(window.location.href);
		url.searchParams.delete("panel");
		window.history.replaceState({}, "", url.toString());
	}

	private renderPanelContent() {
		switch (this.activePanel) {
			case "memory":
				return html`<memory-panel></memory-panel>`;
			case "admin":
				return html`<admin-panel></admin-panel>`;
			default:
				return null;
		}
	}

	private _navBtn(label: string, panel: string, icon: unknown) {
		const active = this.activePanel === panel;
		return html`
			<button
				class="flex items-center gap-1.5 px-2.5 py-1 text-[11px] uppercase tracking-wider
					   transition-all duration-150
					   ${
							active
								? "text-amber-500 bg-amber-500/5 border border-amber-500/20"
								: "text-neutral-500 hover:text-neutral-300 border border-transparent hover:border-neutral-800"
						}"
				style="font-family: 'Geist Mono', ui-monospace, monospace;"
				@click=${() => (active ? this.closePanel() : this.openPanel(panel))}
			>
				${icon}
				${label}
			</button>
		`;
	}

	override render() {
		return html`
			<div style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a0a0a;color:#e5e5e5;">
				<!-- HEADER -->
				<div style="display:flex;align-items:center;justify-content:space-between;padding:0 16px;height:44px;border-bottom:1px solid #262626;background:#0d0d0d;flex-shrink:0;">
					<div style="display:flex;align-items:center;gap:10px;">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="1.5">
							<path d="M6 3L2 7v7l4 4M18 3l4 4v7l-4 4M9 8l3-3 3 3M9 16l3 3 3-3M12 5v14"/>
						</svg>
						<span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:12px;color:#a3a3a3;letter-spacing:0.1em;text-transform:uppercase;">
							DG-Claw
						</span>
						<span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:10px;color:#404040;">
							v0.1.0
						</span>
					</div>
					<div style="display:flex;align-items:center;gap:4px;">
						${this._navBtn(
							"Memory",
							"memory",
							html`
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8l2.8-2.8M17 7l2.8-2.8"/>
							</svg>
						`,
						)}
						${this._navBtn(
							"Admin",
							"admin",
							html`
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"/>
								<circle cx="12" cy="12" r="3"/>
							</svg>
						`,
						)}
					</div>
				</div>

				<!-- BODY -->
				<div style="display:flex;flex:1;min-height:0;overflow:hidden;">
					<!-- Chat -->
					<div style="flex:1;min-width:0;overflow:hidden;">
						<chat-view .sessionId=${this.sessionId}></chat-view>
					</div>

					<!-- Panel sidebar -->
					${
						this.panelOpen
							? html`
						<div style="width:320px;flex-shrink:0;display:flex;flex-direction:column;background:#0d0d0d;border-left:1px solid #262626;overflow:hidden;animation:panel-slide-in 0.15s ease-out;">
							<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-bottom:1px solid #262626;flex-shrink:0;">
								<span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:11px;color:rgba(245,158,11,0.8);text-transform:uppercase;letter-spacing:0.1em;font-weight:500;">
									${this.activePanel}
								</span>
								<button
									style="color:#525252;cursor:pointer;padding:2px;background:none;border:none;"
									@click=${this.closePanel}
									aria-label="Close panel"
								>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
										 stroke-width="2" stroke-linecap="round">
										<line x1="18" y1="6" x2="6" y2="18"></line>
										<line x1="6" y1="6" x2="18" y2="18"></line>
									</svg>
								</button>
							</div>
							<div style="flex:1;overflow-y:auto;">
								${this.renderPanelContent()}
							</div>
						</div>
					`
							: nothing
					}
				</div>
			</div>

			<style>
				@keyframes panel-slide-in {
					from { transform: translateX(20px); opacity: 0; }
					to { transform: translateX(0); opacity: 1; }
				}
			</style>
		`;
	}
}
