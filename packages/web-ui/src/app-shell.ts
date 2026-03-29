/**
 * App shell -- root component for the DG-Claw SPA.
 *
 * Handles:
 * - Client-side routing via @lit-labs/router
 * - Auth state management (checks /api/auth/status on load)
 * - Panel system (reads ?panel= query param)
 */

import { Router } from "@lit-labs/router";
import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./views/login-view.js";
import "./views/chat-view.js";
import "./panels/panel-layout.js";

@customElement("dg-claw-app")
export class AppShell extends LitElement {
	@state() private authenticated = false;
	@state() private loading = true;
	@state() private activePanel: string | null = null;

	private router = new Router(this, [
		{
			path: "/login",
			render: () => html`<login-view @login-success=${this._onLoginSuccess}></login-view>`,
		},
		{
			path: "/",
			render: () => this._renderMain(),
		},
		{
			path: "/sessions/:id",
			render: (params: Record<string, string | undefined>) => this._renderMain(params.id),
		},
	]);

	createRenderRoot() {
		return this;
	}

	override async connectedCallback() {
		super.connectedCallback();
		await this._checkAuth();

		// Read panel from URL
		const params = new URLSearchParams(window.location.search);
		this.activePanel = params.get("panel");
	}

	private async _checkAuth(): Promise<void> {
		try {
			const response = await fetch("/api/auth/status");
			const data = await response.json();
			this.authenticated = data.authenticated === true;
		} catch {
			this.authenticated = false;
		}

		this.loading = false;

		// Redirect if not authenticated and not already on login page
		if (!this.authenticated && !window.location.pathname.startsWith("/login")) {
			window.history.pushState({}, "", "/login");
			this.router.goto("/login");
		}
	}

	private _onLoginSuccess(): void {
		this.authenticated = true;
		window.history.pushState({}, "", "/");
		this.router.goto("/");
	}

	private _renderMain(sessionId?: string | undefined): unknown {
		if (!this.authenticated) {
			return html`<login-view @login-success=${this._onLoginSuccess}></login-view>`;
		}

		return html`
			<panel-layout .activePanel=${this.activePanel}>
				<chat-view
					slot="main"
					.sessionId=${sessionId ?? null}
				></chat-view>
			</panel-layout>
		`;
	}

	override render() {
		if (this.loading) {
			return html`
				<div class="w-full h-screen flex items-center justify-center bg-background text-foreground">
					<div class="text-muted-foreground">Loading...</div>
				</div>
			`;
		}

		return html`${this.router.outlet()}`;
	}
}
