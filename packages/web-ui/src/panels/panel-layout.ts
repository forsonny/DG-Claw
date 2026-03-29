/**
 * Panel layout -- container that renders main content with optional sidebar.
 *
 * Reads the `activePanel` property to decide which panel to render.
 * Provides open/close controls and slide-in animation.
 *
 * Usage:
 *   <panel-layout .activePanel=${"memory"}>
 *     <chat-view slot="main"></chat-view>
 *   </panel-layout>
 */

import { html, LitElement } from "lit";
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

		// Update URL
		const url = new URL(window.location.href);
		url.searchParams.set("panel", panel);
		window.history.replaceState({}, "", url.toString());
	}

	private closePanel(): void {
		this.panelOpen = false;
		this.activePanel = null;

		// Update URL
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

	override render() {
		return html`
			<div class="flex h-screen overflow-hidden">
				<!-- Main content area -->
				<div class="flex-1 flex flex-col min-w-0 ${this.panelOpen ? "border-r border-border" : ""}">
					<!-- Panel toggle buttons -->
					<div class="flex items-center gap-1 px-2 py-1 border-b border-border shrink-0">
						<button
							class="px-2 py-1 text-xs font-medium rounded transition-colors
								   ${
										this.activePanel === "memory"
											? "bg-primary/10 text-primary"
											: "text-muted-foreground hover:text-foreground hover:bg-secondary"
									}"
							@click=${() => (this.activePanel === "memory" ? this.closePanel() : this.openPanel("memory"))}
						>
							Memory
						</button>
						<button
							class="px-2 py-1 text-xs font-medium rounded transition-colors
								   ${
										this.activePanel === "admin"
											? "bg-primary/10 text-primary"
											: "text-muted-foreground hover:text-foreground hover:bg-secondary"
									}"
							@click=${() => (this.activePanel === "admin" ? this.closePanel() : this.openPanel("admin"))}
						>
							Admin
						</button>
						<div class="flex-1"></div>
						<slot name="header-actions"></slot>
					</div>

					<!-- Slotted main content -->
					<div class="flex-1 min-h-0">
						<slot name="main"></slot>
					</div>
				</div>

				<!-- Panel sidebar -->
				${
					this.panelOpen
						? html`
							<div
								class="w-80 shrink-0 flex flex-col bg-background border-l border-border
										overflow-y-auto animate-slide-in"
							>
								<!-- Panel header with close button -->
								<div
									class="flex items-center justify-between px-4 py-2 border-b border-border shrink-0"
								>
									<span class="text-sm font-medium text-foreground capitalize">
										${this.activePanel}
									</span>
									<button
										class="text-muted-foreground hover:text-foreground transition-colors p-1"
										@click=${this.closePanel}
										aria-label="Close panel"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<line x1="18" y1="6" x2="6" y2="18"></line>
											<line x1="6" y1="6" x2="18" y2="18"></line>
										</svg>
									</button>
								</div>

								<!-- Panel content -->
								${this.renderPanelContent()}
							</div>
						`
						: null
				}
			</div>

			<style>
				@keyframes slide-in {
					from {
						transform: translateX(100%);
						opacity: 0;
					}
					to {
						transform: translateX(0);
						opacity: 1;
					}
				}
				.animate-slide-in {
					animation: slide-in 0.2s ease-out;
				}

				@media (max-width: 768px) {
					.animate-slide-in {
						position: fixed;
						top: 0;
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
