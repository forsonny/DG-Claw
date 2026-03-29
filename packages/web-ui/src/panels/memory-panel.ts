/**
 * Memory panel -- sidebar component for the memory dashboard.
 *
 * Fetches from /api/memory/* and displays:
 * - Facts browser (filterable table)
 * - Top-of-Mind summary
 * - Experiment history
 * - Memory stats
 */

import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

interface MemoryFact {
	id: string;
	entity: string;
	slot: string;
	value: string;
	category: string;
	salience: number;
	confidence: number;
	updatedAt: string;
}

interface ExperimentEntry {
	id: number;
	target: string;
	mutation: string;
	score: number | null;
	status: string;
	timestamp: string;
}

interface MemoryStats {
	total: number;
	byCategory: Record<string, number>;
	bySalience: { high: number; medium: number; low: number };
}

type Tab = "facts" | "top-of-mind" | "experiments" | "stats";

const CATEGORIES = ["Profile", "Preference", "Goal", "Entity", "Event", "Case", "Pattern", "Tool"];

@customElement("memory-panel")
export class MemoryPanel extends LitElement {
	@state() private activeTab: Tab = "facts";
	@state() private facts: MemoryFact[] = [];
	@state() private factsTotal = 0;
	@state() private topOfMind = "";
	@state() private experiments: ExperimentEntry[] = [];
	@state() private stats: MemoryStats | null = null;
	@state() private categoryFilter = "";
	@state() private loading = false;

	createRenderRoot() {
		return this;
	}

	override connectedCallback() {
		super.connectedCallback();
		this.loadData();
	}

	private async loadData(): Promise<void> {
		this.loading = true;
		await Promise.all([this.loadFacts(), this.loadTopOfMind(), this.loadExperiments(), this.loadStats()]);
		this.loading = false;
	}

	private async loadFacts(): Promise<void> {
		try {
			const params = new URLSearchParams();
			if (this.categoryFilter) params.set("category", this.categoryFilter);
			params.set("limit", "100");

			const res = await fetch(`/api/memory/facts?${params}`);
			const data = await res.json();
			this.facts = data.facts ?? [];
			this.factsTotal = data.total ?? 0;
		} catch (err) {
			console.error("[MemoryPanel] Failed to load facts:", err);
		}
	}

	private async loadTopOfMind(): Promise<void> {
		try {
			const res = await fetch("/api/memory/top-of-mind");
			const data = await res.json();
			this.topOfMind = data.summary ?? "";
		} catch (err) {
			console.error("[MemoryPanel] Failed to load top-of-mind:", err);
		}
	}

	private async loadExperiments(): Promise<void> {
		try {
			const res = await fetch("/api/memory/experiments");
			const data = await res.json();
			this.experiments = data.experiments ?? [];
		} catch (err) {
			console.error("[MemoryPanel] Failed to load experiments:", err);
		}
	}

	private async loadStats(): Promise<void> {
		try {
			const res = await fetch("/api/memory/stats");
			this.stats = await res.json();
		} catch (err) {
			console.error("[MemoryPanel] Failed to load stats:", err);
		}
	}

	private onCategoryChange(e: Event): void {
		this.categoryFilter = (e.target as HTMLSelectElement).value;
		this.loadFacts();
	}

	private renderTabs() {
		const tabs: Array<{ id: Tab; label: string }> = [
			{ id: "facts", label: "Facts" },
			{ id: "top-of-mind", label: "Top of Mind" },
			{ id: "experiments", label: "Experiments" },
			{ id: "stats", label: "Stats" },
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

	private renderFacts() {
		return html`
			<div class="space-y-3">
				<div class="flex items-center gap-2">
					<select
						class="px-2 py-1 text-sm bg-secondary text-foreground border border-border rounded"
						@change=${this.onCategoryChange}
					>
						<option value="">All categories</option>
						${CATEGORIES.map(
							(cat) => html`<option value=${cat} ?selected=${this.categoryFilter === cat}>${cat}</option>`,
						)}
					</select>
					<span class="text-xs text-muted-foreground">${this.factsTotal} facts</span>
				</div>

				<div class="space-y-1 max-h-[60vh] overflow-y-auto">
					${this.facts.map(
						(fact) => html`
							<div class="p-2 bg-secondary/50 rounded text-sm">
								<div class="flex items-center justify-between">
									<span class="font-medium text-foreground">${fact.entity}:${fact.slot}</span>
									<span class="text-xs px-1.5 py-0.5 bg-primary/10 text-primary rounded"
										>${fact.category}</span
									>
								</div>
								<div class="text-muted-foreground mt-1">${fact.value}</div>
								<div class="flex gap-3 mt-1 text-xs text-muted-foreground">
									<span>Salience: ${(fact.salience * 100).toFixed(0)}%</span>
									<span>Conf: ${(fact.confidence * 100).toFixed(0)}%</span>
								</div>
							</div>
						`,
					)}

					${
						this.facts.length === 0
							? html`<p class="text-sm text-muted-foreground p-4 text-center">No facts found.</p>`
							: null
					}
				</div>
			</div>
		`;
	}

	private renderTopOfMind() {
		return html`
			<div class="space-y-3">
				<h3 class="text-sm font-medium text-foreground">L0 Summary</h3>
				${
					this.topOfMind
						? html`<div class="p-3 bg-secondary/50 rounded text-sm text-foreground whitespace-pre-wrap">
							${this.topOfMind}
						</div>`
						: html`<p class="text-sm text-muted-foreground">No top-of-mind summary available.</p>`
				}
			</div>
		`;
	}

	private renderExperiments() {
		return html`
			<div class="space-y-2 max-h-[60vh] overflow-y-auto">
				${this.experiments.map(
					(exp) => html`
						<div class="p-2 bg-secondary/50 rounded text-sm">
							<div class="flex items-center justify-between">
								<span class="font-medium text-foreground">${exp.target}</span>
								<span
									class="text-xs px-1.5 py-0.5 rounded
									${exp.status === "kept" ? "bg-green-500/10 text-green-600" : ""}
									${exp.status === "discarded" ? "bg-yellow-500/10 text-yellow-600" : ""}
									${exp.status === "crashed" ? "bg-red-500/10 text-red-600" : ""}
								"
									>${exp.status}</span
								>
							</div>
							<div class="text-muted-foreground mt-1">${exp.mutation}</div>
							<div class="flex gap-3 mt-1 text-xs text-muted-foreground">
								${exp.score !== null ? html`<span>Score: ${(exp.score * 100).toFixed(1)}%</span>` : null}
								<span>${new Date(exp.timestamp).toLocaleString()}</span>
							</div>
						</div>
					`,
				)}

				${
					this.experiments.length === 0
						? html`<p class="text-sm text-muted-foreground p-4 text-center">No experiments recorded.</p>`
						: null
				}
			</div>
		`;
	}

	private renderStats() {
		if (!this.stats) {
			return html`<p class="text-sm text-muted-foreground">Loading stats...</p>`;
		}

		return html`
			<div class="space-y-4">
				<div class="p-3 bg-secondary/50 rounded">
					<div class="text-2xl font-bold text-foreground">${this.stats.total}</div>
					<div class="text-sm text-muted-foreground">Total active facts</div>
				</div>

				<div>
					<h4 class="text-sm font-medium text-foreground mb-2">By Category</h4>
					<div class="space-y-1">
						${Object.entries(this.stats.byCategory).map(
							([cat, count]) => html`
								<div class="flex justify-between items-center text-sm">
									<span class="text-foreground">${cat}</span>
									<span class="text-muted-foreground">${count}</span>
								</div>
							`,
						)}
					</div>
				</div>

				<div>
					<h4 class="text-sm font-medium text-foreground mb-2">By Salience</h4>
					<div class="space-y-1 text-sm">
						<div class="flex justify-between">
							<span class="text-green-600">High (&gt;=70%)</span>
							<span class="text-muted-foreground">${this.stats.bySalience.high}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-yellow-600">Medium (30-69%)</span>
							<span class="text-muted-foreground">${this.stats.bySalience.medium}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-red-600">Low (&lt;30%)</span>
							<span class="text-muted-foreground">${this.stats.bySalience.low}</span>
						</div>
					</div>
				</div>
			</div>
		`;
	}

	override render() {
		return html`
			<div class="p-4">
				<h2 class="text-lg font-semibold text-foreground mb-4">Memory</h2>

				${
					this.loading
						? html`<div class="text-sm text-muted-foreground">Loading...</div>`
						: html`
							${this.renderTabs()}
							${this.activeTab === "facts" ? this.renderFacts() : null}
							${this.activeTab === "top-of-mind" ? this.renderTopOfMind() : null}
							${this.activeTab === "experiments" ? this.renderExperiments() : null}
							${this.activeTab === "stats" ? this.renderStats() : null}
						`
				}
			</div>
		`;
	}
}
