/**
 * Login view -- branded password gate.
 *
 * Industrial command aesthetic: dark, sharp, monospace accents.
 * The claw mark and amber accent establish the brand identity.
 */

import { html, LitElement, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("login-view")
export class LoginView extends LitElement {
	@state() private password = "";
	@state() private error = "";
	@state() private loading = false;

	createRenderRoot() {
		return this;
	}

	private async handleSubmit(e: Event): Promise<void> {
		e.preventDefault();
		this.error = "";
		this.loading = true;

		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ password: this.password }),
			});

			if (response.ok) {
				this.dispatchEvent(new CustomEvent("login-success", { bubbles: true, composed: true }));
			} else {
				const data = await response.json();
				this.error = data.error || "Invalid password";
			}
		} catch {
			this.error = "Connection failed. Is the server running?";
		} finally {
			this.loading = false;
		}
	}

	private handleInput(e: InputEvent): void {
		this.password = (e.target as HTMLInputElement).value;
	}

	private handleKeyDown(e: KeyboardEvent): void {
		if (e.key === "Enter") {
			this.handleSubmit(e);
		}
	}

	override render() {
		return html`
			<div class="w-full h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
				<!-- Subtle grid background -->
				<div class="absolute inset-0 opacity-[0.03]"
					style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
								linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px);
						   background-size: 40px 40px;">
				</div>

				<!-- Ambient glow -->
				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
					style="background: radial-gradient(circle, #f59e0b, transparent 70%);">
				</div>

				<div class="relative w-full max-w-sm p-8">
					<!-- Logo mark -->
					<div class="flex items-center gap-3 mb-8">
						<div class="w-10 h-10 flex items-center justify-center border border-amber-500/30 bg-amber-500/5">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								 class="text-amber-500" stroke-width="1.5">
								<path d="M6 3L2 7v7l4 4M18 3l4 4v7l-4 4M9 8l3-3 3 3M9 16l3 3 3-3M12 5v14"/>
							</svg>
						</div>
						<div>
							<h1 class="text-lg font-medium text-white tracking-tight" style="font-family: 'Geist Mono', ui-monospace, monospace;">
								DG-Claw
							</h1>
							<p class="text-[11px] text-neutral-500 tracking-widest uppercase">Agent Platform</p>
						</div>
					</div>

					<!-- Divider -->
					<div class="h-px bg-gradient-to-r from-amber-500/20 via-neutral-800 to-transparent mb-6"></div>

					<form @submit=${this.handleSubmit} class="space-y-4">
						<div>
							<label class="block text-[11px] text-neutral-400 uppercase tracking-wider mb-2"
								   style="font-family: 'Geist Mono', ui-monospace, monospace;">
								Password
							</label>
							<input
								type="password"
								.value=${this.password}
								@input=${this.handleInput}
								@keydown=${this.handleKeyDown}
								?disabled=${this.loading}
								class="w-full px-3 py-2.5 bg-neutral-900 text-white border border-neutral-800
									   focus:outline-none focus:border-amber-500/50 focus:shadow-[0_0_0_1px_rgba(245,158,11,0.15)]
									   placeholder:text-neutral-600 disabled:opacity-50
									   transition-all duration-150 text-sm"
								style="font-family: 'Geist Mono', ui-monospace, monospace;"
								placeholder="Enter access key"
								autocomplete="current-password"
								autofocus
							/>
						</div>

						${
							this.error
								? html`
								<div class="flex items-center gap-2 text-xs text-red-400 bg-red-500/5 border border-red-500/10 px-3 py-2">
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
									</svg>
									${this.error}
								</div>
							`
								: nothing
						}

						<button
							type="submit"
							?disabled=${this.loading || !this.password}
							class="w-full px-3 py-2.5 bg-amber-500 text-black font-medium text-sm
								   hover:bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed
								   transition-all duration-150 tracking-wide uppercase"
							style="font-family: 'Geist Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.1em;"
						>
							${this.loading ? "Authenticating..." : "Authenticate"}
						</button>
					</form>

					<!-- Footer -->
					<p class="mt-8 text-center text-[10px] text-neutral-600"
					   style="font-family: 'Geist Mono', ui-monospace, monospace;">
						Self-hosted AI agent platform
					</p>
				</div>
			</div>
		`;
	}
}
