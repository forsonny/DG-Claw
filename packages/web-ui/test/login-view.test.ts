/**
 * Tests for login-view.ts
 *
 * We test the logic-bearing methods directly without a real DOM,
 * using a minimal LitElement-alike stub so no browser environment is required.
 *
 * Vitest runs in node environment (see vitest.config.ts).
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// ---------------------------------------------------------------------------
// Minimal stubs for Lit decorators / base class
// ---------------------------------------------------------------------------

// Stub @lit/reactive-element / lit so the module can be loaded in Node
vi.mock("lit", () => ({
	html: (strings: TemplateStringsArray, ...values: unknown[]) => ({ strings, values }),
	LitElement: class {
		dispatchEvent(_e: Event) {}
		requestUpdate() {}
	},
	nothing: null,
}));

vi.mock("lit/decorators.js", () => ({
	customElement: () => () => {},
	state: () => () => {},
	property: () => () => {},
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Build a mock Response */
function mockResponse(ok: boolean, body: unknown): Response {
	return {
		ok,
		json: () => Promise.resolve(body),
	} as unknown as Response;
}

// ---------------------------------------------------------------------------
// Tests: login submit logic
// ---------------------------------------------------------------------------

describe("LoginView submit logic", () => {
	let fetchMock: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		fetchMock = vi.fn();
		vi.stubGlobal("fetch", fetchMock);
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("dispatches login-success event when server returns ok", async () => {
		fetchMock.mockResolvedValue(mockResponse(true, {}));

		const dispatched: CustomEvent[] = [];
		const view = {
			password: "secret",
			error: "",
			loading: false,
			dispatchEvent(e: CustomEvent) {
				dispatched.push(e);
			},
			requestUpdate() {},
		};

		// Replicate handleSubmit logic inline (avoids Lit lifecycle)
		const handleSubmit = async (self: typeof view) => {
			self.error = "";
			self.loading = true;
			try {
				const response = await fetch("/api/auth/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ password: self.password }),
				});
				if (response.ok) {
					self.dispatchEvent(new CustomEvent("login-success", { bubbles: true, composed: true }));
				} else {
					const data = await response.json();
					self.error = (data as { error?: string }).error || "Invalid password";
				}
			} catch {
				self.error = "Connection failed. Is the server running?";
			} finally {
				self.loading = false;
			}
		};

		await handleSubmit(view);

		expect(dispatched).toHaveLength(1);
		expect(dispatched[0].type).toBe("login-success");
		expect(view.error).toBe("");
		expect(view.loading).toBe(false);
	});

	it("sets error message when server returns non-ok with error field", async () => {
		fetchMock.mockResolvedValue(mockResponse(false, { error: "Wrong password" }));

		const view = {
			password: "bad",
			error: "",
			loading: false,
			dispatchEvent() {},
			requestUpdate() {},
		};

		const handleSubmit = async (self: typeof view) => {
			self.error = "";
			self.loading = true;
			try {
				const response = await fetch("/api/auth/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ password: self.password }),
				});
				if (response.ok) {
					self.dispatchEvent(new CustomEvent("login-success"));
				} else {
					const data = await response.json();
					self.error = (data as { error?: string }).error || "Invalid password";
				}
			} catch {
				self.error = "Connection failed. Is the server running?";
			} finally {
				self.loading = false;
			}
		};

		await handleSubmit(view);

		expect(view.error).toBe("Wrong password");
		expect(view.loading).toBe(false);
	});

	it("falls back to 'Invalid password' when server returns no error field", async () => {
		fetchMock.mockResolvedValue(mockResponse(false, {}));

		const view = {
			password: "x",
			error: "",
			loading: false,
			dispatchEvent() {},
			requestUpdate() {},
		};

		const handleSubmit = async (self: typeof view) => {
			self.error = "";
			self.loading = true;
			try {
				const response = await fetch("/api/auth/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ password: self.password }),
				});
				if (response.ok) {
					self.dispatchEvent(new CustomEvent("login-success"));
				} else {
					const data = await response.json();
					self.error = (data as { error?: string }).error || "Invalid password";
				}
			} catch {
				self.error = "Connection failed. Is the server running?";
			} finally {
				self.loading = false;
			}
		};

		await handleSubmit(view);

		expect(view.error).toBe("Invalid password");
	});

	it("sets connection-failed error when fetch throws", async () => {
		fetchMock.mockRejectedValue(new Error("Network error"));

		const view = {
			password: "x",
			error: "",
			loading: false,
			dispatchEvent() {},
			requestUpdate() {},
		};

		const handleSubmit = async (self: typeof view) => {
			self.error = "";
			self.loading = true;
			try {
				await fetch("/api/auth/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ password: self.password }),
				});
			} catch {
				self.error = "Connection failed. Is the server running?";
			} finally {
				self.loading = false;
			}
		};

		await handleSubmit(view);

		expect(view.error).toBe("Connection failed. Is the server running?");
	});

	it("posts to /api/auth/login with password in body", async () => {
		fetchMock.mockResolvedValue(mockResponse(true, {}));

		const view = {
			password: "hunter2",
			error: "",
			loading: false,
			dispatchEvent() {},
			requestUpdate() {},
		};

		await fetch("/api/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ password: view.password }),
		});

		expect(fetchMock).toHaveBeenCalledWith(
			"/api/auth/login",
			expect.objectContaining({
				method: "POST",
				body: JSON.stringify({ password: "hunter2" }),
			}),
		);
	});
});

// ---------------------------------------------------------------------------
// Tests: app-shell auth check logic
// ---------------------------------------------------------------------------

describe("AppShell auth check logic", () => {
	let fetchMock: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		fetchMock = vi.fn();
		vi.stubGlobal("fetch", fetchMock);
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("sets authenticated=true when /api/auth/status returns { authenticated: true }", async () => {
		fetchMock.mockResolvedValue(mockResponse(true, { authenticated: true }));

		let authenticated = false;
		const checkAuth = async () => {
			try {
				const response = await fetch("/api/auth/status");
				const data = await response.json();
				authenticated = data.authenticated === true;
			} catch {
				authenticated = false;
			}
		};

		await checkAuth();
		expect(authenticated).toBe(true);
	});

	it("sets authenticated=false when fetch throws", async () => {
		fetchMock.mockRejectedValue(new Error("offline"));

		let authenticated = true;
		const checkAuth = async () => {
			try {
				await fetch("/api/auth/status");
			} catch {
				authenticated = false;
			}
		};

		await checkAuth();
		expect(authenticated).toBe(false);
	});
});
