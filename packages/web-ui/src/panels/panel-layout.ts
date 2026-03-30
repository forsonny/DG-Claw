/**
 * Panel layout -- industrial command aesthetic.
 *
 * Dark shell with header bar, panel toggle buttons, and slide-in sidebar.
 * The header establishes the DG-Claw brand identity.
 */

import { html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./memory-panel.js";
import "./admin-panel.js";

@customElement("panel-layout")
export class PanelLayout extends LitElement {
	@property({ type: String }) activePanel: string | null = null;
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

	private _renderNavButton(label: string, panel: string, icon: unknown) {
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
			<div class="flex flex-col h-screen bg-[#0a0a0a] text-neutral-200">
				<!-- Header bar -->
				<header class="flex items-center justify-between px-4 h-11 border-b border-neutral-800 bg-[#0d0d0d] shrink-0 order-first z-10">
					<!-- Brand -->
					<div class="flex items-center gap-2.5">
						<div class="w-6 h-6 flex items-center justify-center">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								 class="text-amber-500" stroke-width="1.5">
								<path d="M6 3L2 7v7l4 4M18 3l4 4v7l-4 4M9 8l3-3 3 3M9 16l3 3 3-3M12 5v14"/>
							</svg>
						</div>
						<span class="text-xs text-neutral-400 tracking-widest uppercase"
							  style="font-family: 'Geist Mono', ui-monospace, monospace;">
							DG-Claw
						</span>
						<span class="text-[10px] text-neutral-700 ml-1"
							  style="font-family: 'Geist Mono', ui-monospace, monospace;">
							v0.1.0
						</span>
					</div>

					<!-- Nav buttons -->
					<div class="flex items-center gap-1">
						${this._renderNavButton(
							"Memory",
							"memory",
							html`
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8l2.8-2.8M17 7l2.8-2.8"/>
							</svg>
						`,
						)}
						${this._renderNavButton(
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
				</header>

				<!-- Body -->
				<div class="flex flex-1 min-h-0 overflow-hidden">
					<!-- Main content -->
					<div class="flex-1 min-w-0">
						<slot name="main"></slot>
					</div>

					<!-- Panel sidebar -->
					${
						this.panelOpen
							? html`
						<div class="w-80 shrink-0 flex flex-col bg-[#0d0d0d] border-l border-neutral-800
								   overflow-hidden"
							 style="animation: panel-slide-in 0.15s ease-out;">
							<!-- Panel header -->
							<div class="flex items-center justify-between px-4 py-2.5 border-b border-neutral-800 shrink-0">
								<span class="text-[11px] text-amber-500/80 uppercase tracking-widest font-medium"
									  style="font-family: 'Geist Mono', ui-monospace, monospace;">
									${this.activePanel}
								</span>
								<button
									class="text-neutral-600 hover:text-neutral-300 transition-colors p-0.5"
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

							<!-- Panel content -->
							<div class="flex-1 overflow-y-auto">
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
				@media (max-width: 768px) {
					.w-80 {
						position: fixed;
						top: 44px;
						right: 0;
						bottom: 0;
						width: 100%;
						max-width: 400px;
						z-index: 50;
					}
				}
			</style>
		`;
	}
}
