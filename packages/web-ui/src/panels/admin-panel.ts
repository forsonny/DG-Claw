/**
 * Admin panel -- sidebar component for server administration.
 *
 * Sections:
 * - Model selector (from /api/admin/models)
 * - Sandbox status (from /api/admin/sandbox/status)
 * - AutoLearn controls (from /api/admin/autolearn/*)
 * - Settings (from /api/admin/config)
 */

import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

interface ModelInfo {
	provider: string;
	id: string;
	label: string;
}

interface SandboxStatus {
	available: boolean;
	status: string;
	message: string;
}

interface ScheduleEntry {
	id: string;
	target: string;
	cron: string;
	enabled: boolean;
}

type Tab = "models" | "sandbox" | "autolearn" | "settings";

@customElement("admin-panel")
export class AdminPanel extends LitElement {
	@state() private activeTab: Tab = "models";
	@state() private models: ModelInfo[] = [];
	@state() private sandboxStatus: SandboxStatus | null = null;
	@state() private schedules: ScheduleEntry[] = [];
	@state() private settings: Record<string, unknown> = {};
	@state() private loading = false;
	@state() private ratchetTarget = "";
	@state() private ratchetMessage = "";

	createRenderRoot() {
		return this;
	}

	override connectedCallback() {
		super.connectedCallback();
		this.loadData();
	}

	private async loadData(): Promise<void> {
		this.loading = true;
		await Promise.all([this.loadModels(), this.loadSandboxStatus(), this.loadSchedules(), this.loadSettings()]);
		this.loading = false;
	}

	private async loadModels(): Promise<void> {
		try {
			const res = await fetch("/api/admin/models");
			const data = await res.json();
			this.models = data.models ?? [];
		} catch (err) {
			console.error("[AdminPanel] Failed to load models:", err);
		}
	}

	private async loadSandboxStatus(): Promise<void> {
		try {
			const res = await fetch("/api/admin/sandbox/status");
			this.sandboxStatus = await res.json();
		} catch (err) {
			console.error("[AdminPanel] Failed to load sandbox status:", err);
		}
	}

	private async loadSchedules(): Promise<void> {
		try {
			const res = await fetch("/api/admin/autolearn/schedules");
			const data = await res.json();
			this.schedules = data.schedules ?? [];
		} catch (err) {
			console.error("[AdminPanel] Failed to load schedules:", err);
		}
	}

	private async loadSettings(): Promise<void> {
		try {
			const res = await fetch("/api/admin/config");
			const data = await res.json();
			this.settings = data.settings ?? {};
		} catch (err) {
			console.error("[AdminPanel] Failed to load settings:", err);
		}
	}

	private async triggerRatchet(): Promise<void> {
		if (!this.ratchetTarget) return;
		this.ratchetMessage = "";

		try {
			const res = await fetch("/api/admin/autolearn/run", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ target: this.ratchetTarget }),
			});
			const data = await res.json();
			this.ratchetMessage = (data as { message?: string }).message || "Ratchet triggered.";
		} catch (err) {
			this.ratchetMessage = `Failed: ${err instanceof Error ? err.message : String(err)}`;
		}
	}

	private renderTabs() {
		const tabs: Array<{ id: Tab; label: string }> = [
			{ id: "models", label: "Models" },
			{ id: "sandbox", label: "Sandbox" },
			{ id: "autolearn", label: "AutoLearn" },
			{ id: "settings", label: "Settings" },
		];

		return html`
			<div class="flex border-b border-border mb-4">
				${tabs.map(
					(tab) => html`
						<button
							class="px-3 py-2 text-sm font-medium transition-colors
								   ${
										this.activeTab === tab.id
											? "text-primary border-b-2 border-primary"
											: "text-muted-foreground hover:text-foreground"
									}"
							@click=${() => {
								this.activeTab = tab.id;
							}}
						>
							${tab.label}
						</button>
					`,
				)}
			</div>
		`;
	}

	private renderModels() {
		return html`
			<div class="space-y-2">
				<h3 class="text-sm font-medium text-foreground">Available Models</h3>
				${this.models.map(
					(model) => html`
						<div class="p-2 bg-secondary/50 rounded text-sm">
							<div class="font-medium text-foreground">${model.label}</div>
							<div class="text-xs text-muted-foreground">${model.provider} / ${model.id}</div>
						</div>
					`,
				)}
				${this.models.length === 0 ? html`<p class="text-sm text-muted-foreground">No models available.</p>` : null}
			</div>
		`;
	}

	private renderSandbox() {
		if (!this.sandboxStatus) {
			return html`<p class="text-sm text-muted-foreground">Loading...</p>`;
		}

		return html`
			<div class="space-y-3">
				<div class="p-3 bg-secondary/50 rounded">
					<div class="flex items-center gap-2">
						<span
							class="w-2 h-2 rounded-full
							${this.sandboxStatus.available ? "bg-green-500" : "bg-red-500"}"
						></span>
						<span class="text-sm font-medium text-foreground">
							${this.sandboxStatus.available ? "Available" : "Unavailable"}
						</span>
					</div>
					<div class="text-xs text-muted-foreground mt-1">${this.sandboxStatus.message}</div>
				</div>
			</div>
		`;
	}

	private renderAutoLearn() {
		return html`
			<div class="space-y-4">
				<div>
					<h3 class="text-sm font-medium text-foreground mb-2">Trigger Ratchet Run</h3>
					<div class="flex gap-2">
						<input
							type="text"
							placeholder="Target (e.g., system-prompt)"
							.value=${this.ratchetTarget}
							@input=${(e: InputEvent) => {
								this.ratchetTarget = (e.target as HTMLInputElement).value;
							}}
							class="flex-1 px-2 py-1 text-sm bg-secondary text-foreground border border-border rounded"
						/>
						<button
							@click=${this.triggerRatchet}
							?disabled=${!this.ratchetTarget}
							class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90
								   disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Run
						</button>
					</div>
					${
						this.ratchetMessage
							? html`<p class="text-xs text-muted-foreground mt-1">${this.ratchetMessage}</p>`
							: null
					}
				</div>

				<div>
					<h3 class="text-sm font-medium text-foreground mb-2">Schedules</h3>
					${this.schedules.map(
						(sched) => html`
							<div class="p-2 bg-secondary/50 rounded text-sm mb-1">
								<div class="flex items-center justify-between">
									<span class="font-medium text-foreground">${sched.target}</span>
									<span
										class="text-xs px-1.5 py-0.5 rounded
										${sched.enabled ? "bg-green-500/10 text-green-600" : "bg-gray-500/10 text-gray-500"}"
									>
										${sched.enabled ? "Active" : "Disabled"}
									</span>
								</div>
								<div class="text-xs text-muted-foreground">${sched.cron}</div>
							</div>
						`,
					)}
					${
						this.schedules.length === 0
							? html`<p class="text-sm text-muted-foreground">No schedules configured.</p>`
							: null
					}
				</div>
			</div>
		`;
	}

	private renderSettings() {
		const entries = Object.entries(this.settings);

		return html`
			<div class="space-y-3">
				<h3 class="text-sm font-medium text-foreground">Current Settings</h3>
				${
					entries.length > 0
						? html`
							<div class="p-3 bg-secondary/50 rounded">
								<pre class="text-xs text-foreground whitespace-pre-wrap font-mono">${JSON.stringify(this.settings, null, 2)}</pre>
							</div>
						`
						: html`<p class="text-sm text-muted-foreground">No settings configured.</p>`
				}
			</div>
		`;
	}

	override render() {
		return html`
			<div class="p-4">
				<h2 class="text-lg font-semibold text-foreground mb-4">Admin</h2>

				${
					this.loading
						? html`<div class="text-sm text-muted-foreground">Loading...</div>`
						: html`
							${this.renderTabs()}
							${this.activeTab === "models" ? this.renderModels() : null}
							${this.activeTab === "sandbox" ? this.renderSandbox() : null}
							${this.activeTab === "autolearn" ? this.renderAutoLearn() : null}
							${this.activeTab === "settings" ? this.renderSettings() : null}
						`
				}
			</div>
		`;
	}
}
