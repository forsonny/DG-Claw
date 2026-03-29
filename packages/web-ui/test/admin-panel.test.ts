/**
 * Tests for admin-panel.ts -- fetch logic and data-transformation helpers.
 *
 * We test the data-loading helpers in isolation without a DOM/Lit environment.
 * Vitest runs in node (see vitest.config.ts).
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// ---------------------------------------------------------------------------
// Types (mirrored from admin-panel.ts)
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Helpers replicated from admin-panel (tested in isolation)
// ---------------------------------------------------------------------------

function parseModels(data: unknown): ModelInfo[] {
	if (!data || typeof data !== "object") return [];
	const d = data as { models?: ModelInfo[] };
	return d.models ?? [];
}

function parseSchedules(data: unknown): ScheduleEntry[] {
	if (!data || typeof data !== "object") return [];
	const d = data as { schedules?: ScheduleEntry[] };
	return d.schedules ?? [];
}

function parseSettings(data: unknown): Record<string, unknown> {
	if (!data || typeof data !== "object") return {};
	const d = data as { settings?: Record<string, unknown> };
	return d.settings ?? {};
}

function sandboxAvailable(status: SandboxStatus | null): boolean {
	return status?.available === true;
}

// ---------------------------------------------------------------------------
// fetch-level helpers
// ---------------------------------------------------------------------------

function mockResponse(body: unknown, ok = true): Response {
	return {
		ok,
		json: () => Promise.resolve(body),
	} as unknown as Response;
}

async function loadModels(): Promise<ModelInfo[]> {
	const res = await fetch("/api/admin/models");
	return parseModels(await res.json());
}

async function loadSandboxStatus(): Promise<SandboxStatus | null> {
	try {
		const res = await fetch("/api/admin/sandbox/status");
		return (await res.json()) as SandboxStatus;
	} catch {
		return null;
	}
}

async function loadSchedules(): Promise<ScheduleEntry[]> {
	const res = await fetch("/api/admin/autolearn/schedules");
	return parseSchedules(await res.json());
}

async function loadSettings(): Promise<Record<string, unknown>> {
	const res = await fetch("/api/admin/config");
	return parseSettings(await res.json());
}

async function triggerRatchet(target: string): Promise<string> {
	const res = await fetch("/api/admin/autolearn/run", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ target }),
	});
	const data = await res.json();
	return (data as { message?: string }).message || "Ratchet triggered.";
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("parseModels()", () => {
	it("returns models array from valid response", () => {
		const models: ModelInfo[] = [{ provider: "anthropic", id: "claude-3", label: "Claude 3" }];
		expect(parseModels({ models })).toEqual(models);
	});

	it("returns empty array when models missing", () => {
		expect(parseModels({})).toEqual([]);
	});

	it("returns empty array for null input", () => {
		expect(parseModels(null)).toEqual([]);
	});
});

describe("parseSchedules()", () => {
	it("returns schedules array from valid response", () => {
		const schedules: ScheduleEntry[] = [{ id: "s1", target: "system-prompt", cron: "0 2 * * *", enabled: true }];
		expect(parseSchedules({ schedules })).toEqual(schedules);
	});

	it("returns empty array when schedules missing", () => {
		expect(parseSchedules({})).toEqual([]);
	});

	it("returns empty array for null", () => {
		expect(parseSchedules(null)).toEqual([]);
	});
});

describe("parseSettings()", () => {
	it("returns settings object", () => {
		expect(parseSettings({ settings: { model: "claude-3" } })).toEqual({ model: "claude-3" });
	});

	it("returns empty object when settings missing", () => {
		expect(parseSettings({})).toEqual({});
	});

	it("returns empty object for null", () => {
		expect(parseSettings(null)).toEqual({});
	});
});

describe("sandboxAvailable()", () => {
	it("returns true when available=true", () => {
		expect(sandboxAvailable({ available: true, status: "running", message: "OK" })).toBe(true);
	});

	it("returns false when available=false", () => {
		expect(sandboxAvailable({ available: false, status: "stopped", message: "Not running" })).toBe(false);
	});

	it("returns false for null status", () => {
		expect(sandboxAvailable(null)).toBe(false);
	});
});

describe("AdminPanel fetch logic", () => {
	let fetchMock: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		fetchMock = vi.fn();
		vi.stubGlobal("fetch", fetchMock);
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe("loadModels()", () => {
		it("fetches /api/admin/models", async () => {
			fetchMock.mockResolvedValue(mockResponse({ models: [] }));
			await loadModels();
			expect(fetchMock).toHaveBeenCalledWith("/api/admin/models");
		});

		it("returns model list", async () => {
			const models: ModelInfo[] = [{ provider: "anthropic", id: "claude-3-opus", label: "Claude 3 Opus" }];
			fetchMock.mockResolvedValue(mockResponse({ models }));
			const result = await loadModels();
			expect(result).toHaveLength(1);
			expect(result[0].provider).toBe("anthropic");
		});

		it("returns empty array when response has no models key", async () => {
			fetchMock.mockResolvedValue(mockResponse({}));
			const result = await loadModels();
			expect(result).toEqual([]);
		});
	});

	describe("loadSandboxStatus()", () => {
		it("fetches /api/admin/sandbox/status", async () => {
			const status: SandboxStatus = { available: true, status: "running", message: "OK" };
			fetchMock.mockResolvedValue(mockResponse(status));
			await loadSandboxStatus();
			expect(fetchMock).toHaveBeenCalledWith("/api/admin/sandbox/status");
		});

		it("returns sandbox status object", async () => {
			const status: SandboxStatus = { available: false, status: "stopped", message: "Not running" };
			fetchMock.mockResolvedValue(mockResponse(status));
			const result = await loadSandboxStatus();
			expect(result?.available).toBe(false);
			expect(result?.message).toBe("Not running");
		});

		it("returns null when fetch throws", async () => {
			fetchMock.mockRejectedValue(new Error("network error"));
			const result = await loadSandboxStatus();
			expect(result).toBeNull();
		});
	});

	describe("loadSchedules()", () => {
		it("fetches /api/admin/autolearn/schedules", async () => {
			fetchMock.mockResolvedValue(mockResponse({ schedules: [] }));
			await loadSchedules();
			expect(fetchMock).toHaveBeenCalledWith("/api/admin/autolearn/schedules");
		});

		it("returns schedules array", async () => {
			const schedules: ScheduleEntry[] = [{ id: "s1", target: "t", cron: "0 2 * * *", enabled: true }];
			fetchMock.mockResolvedValue(mockResponse({ schedules }));
			const result = await loadSchedules();
			expect(result).toHaveLength(1);
			expect(result[0].cron).toBe("0 2 * * *");
		});
	});

	describe("loadSettings()", () => {
		it("fetches /api/admin/config", async () => {
			fetchMock.mockResolvedValue(mockResponse({ settings: {} }));
			await loadSettings();
			expect(fetchMock).toHaveBeenCalledWith("/api/admin/config");
		});

		it("returns settings record", async () => {
			fetchMock.mockResolvedValue(mockResponse({ settings: { port: 3000 } }));
			const result = await loadSettings();
			expect(result.port).toBe(3000);
		});
	});

	describe("triggerRatchet()", () => {
		it("POSTs to /api/admin/autolearn/run with target", async () => {
			fetchMock.mockResolvedValue(mockResponse({ message: "Ratchet triggered." }));
			await triggerRatchet("system-prompt");
			expect(fetchMock).toHaveBeenCalledWith(
				"/api/admin/autolearn/run",
				expect.objectContaining({
					method: "POST",
					body: JSON.stringify({ target: "system-prompt" }),
				}),
			);
		});

		it("returns message from response", async () => {
			fetchMock.mockResolvedValue(mockResponse({ message: "Run queued." }));
			const result = await triggerRatchet("system-prompt");
			expect(result).toBe("Run queued.");
		});

		it("falls back to default message when response has no message field", async () => {
			fetchMock.mockResolvedValue(mockResponse({}));
			const result = await triggerRatchet("system-prompt");
			expect(result).toBe("Ratchet triggered.");
		});
	});
});
