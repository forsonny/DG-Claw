/**
 * Login view -- simple password form.
 *
 * On success, dispatches a "login-success" custom event.
 */

import { html, LitElement } from "lit";
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
			<div class="w-full h-screen flex items-center justify-center bg-background">
				<div class="w-full max-w-sm p-8">
					<h1 class="text-2xl font-bold text-foreground mb-2">DG-Claw</h1>
					<p class="text-sm text-muted-foreground mb-8">Enter your password to continue.</p>

					<form @submit=${this.handleSubmit}>
						<div class="space-y-4">
							<input
								type="password"
								placeholder="Password"
								.value=${this.password}
								@input=${this.handleInput}
								@keydown=${this.handleKeyDown}
								?disabled=${this.loading}
								class="w-full px-3 py-2 bg-secondary text-foreground border border-border rounded-md
									   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
									   placeholder:text-muted-foreground disabled:opacity-50"
								autocomplete="current-password"
								autofocus
							/>

							${this.error ? html`<p class="text-sm text-destructive">${this.error}</p>` : null}

							<button
								type="submit"
								?disabled=${this.loading || !this.password}
								class="w-full px-3 py-2 bg-primary text-primary-foreground rounded-md
									   hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed
									   transition-colors font-medium"
							>
								${this.loading ? "Signing in..." : "Sign in"}
							</button>
						</div>
					</form>
				</div>
			</div>
		`;
	}
}
