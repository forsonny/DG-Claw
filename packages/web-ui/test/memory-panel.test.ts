/**
 * Tests for memory-panel.ts -- fetch logic and data-transformation helpers.
 *
 * We test the data-loading helpers in isolation without a DOM/Lit environment.
 * Vitest runs in node (see vitest.config.ts).
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// ---------------------------------------------------------------------------
// Types (mirrored from memory-panel.ts)
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Helpers replicated from memory-panel (tested in isolation)
// ---------------------------------------------------------------------------

/** Build URLSearchParams for a facts fetch */
function buildFactsParams(category: string, limit: number): URLSearchParams {
	const p = new URLSearchParams();
	if (category) p.set("category", category);
	p.set("limit", String(limit));
	return p;
}

/** Parse the /api/memory/facts response body */
function parseFacts(data: unknown): { facts: MemoryFact[]; total: number } {
	if (!data || typeof data !== "object") return { facts: [], total: 0 };
	const d = data as { facts?: MemoryFact[]; total?: number };
	return { facts: d.facts ?? [], total: d.total ?? 0 };
}

/** Parse the /api/memory/top-of-mind response body */
function parseTopOfMind(data: unknown): string {
	if (!data || typeof data !== "object") return "";
	const d = data as { summary?: string };
	return d.summary ?? "";
}

/** Parse the /api/memory/experiments response body */
function parseExperiments(data: unknown): ExperimentEntry[] {
	if (!data || typeof data !== "object") return [];
	const d = data as { experiments?: ExperimentEntry[] };
	return d.experiments ?? [];
}

/** Determine CSS class suffix for an experiment status */
function experimentStatusColor(status: string): "green" | "yellow" | "red" | "gray" {
	if (status === "kept") return "green";
	if (status === "discarded") return "yellow";
	if (status === "crashed") return "red";
	return "gray";
}

/** Format salience as a percentage string */
function formatSalience(salience: number): string {
	return `${(salience * 100).toFixed(0)}%`;
}

// ---------------------------------------------------------------------------
// fetch-level helpers (simulate loadFacts / loadTopOfMind / etc.)
// ---------------------------------------------------------------------------

function mockResponse(body: unknown): Response {
	return {
		ok: true,
		json: () => Promise.resolve(body),
	} as unknown as Response;
}

async function loadFacts(category: string): Promise<{ facts: MemoryFact[]; total: number }> {
	const params = buildFactsParams(category, 100);
	const res = await fetch(`/api/memory/facts?${params}`);
	return parseFacts(await res.json());
}

async function loadTopOfMind(): Promise<string> {
	const res = await fetch("/api/memory/top-of-mind");
	return parseTopOfMind(await res.json());
}

async function loadExperiments(): Promise<ExperimentEntry[]> {
	const res = await fetch("/api/memory/experiments");
	return parseExperiments(await res.json());
}

async function loadStats(): Promise<MemoryStats | null> {
	try {
		const res = await fetch("/api/memory/stats");
		return (await res.json()) as MemoryStats;
	} catch {
		return null;
	}
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("buildFactsParams()", () => {
	it("includes category when provided", () => {
		const p = buildFactsParams("Profile", 100);
		expect(p.get("category")).toBe("Profile");
		expect(p.get("limit")).toBe("100");
	});

	it("omits category when empty string", () => {
		const p = buildFactsParams("", 50);
		expect(p.has("category")).toBe(false);
		expect(p.get("limit")).toBe("50");
	});
});

describe("parseFacts()", () => {
	it("returns facts array and total from valid response", () => {
		const fact: MemoryFact = {
			id: "1",
			entity: "user",
			slot: "name",
			value: "Alice",
			category: "Profile",
			salience: 0.9,
			confidence: 0.95,
			updatedAt: "2026-01-01T00:00:00Z",
		};
		const result = parseFacts({ facts: [fact], total: 1 });
		expect(result.facts).toHaveLength(1);
		expect(result.facts[0].entity).toBe("user");
		expect(result.total).toBe(1);
	});

	it("returns empty array and 0 when facts missing", () => {
		expect(parseFacts({})).toEqual({ facts: [], total: 0 });
	});

	it("returns empty array for null input", () => {
		expect(parseFacts(null)).toEqual({ facts: [], total: 0 });
	});
});

describe("parseTopOfMind()", () => {
	it("returns summary string", () => {
		expect(parseTopOfMind({ summary: "User is a developer" })).toBe("User is a developer");
	});

	it("returns empty string when summary absent", () => {
		expect(parseTopOfMind({})).toBe("");
	});

	it("returns empty string for null", () => {
		expect(parseTopOfMind(null)).toBe("");
	});
});

describe("parseExperiments()", () => {
	it("returns experiments array", () => {
		const exp: ExperimentEntry = {
			id: 1,
			target: "system-prompt",
			mutation: "Be more concise",
			score: 0.82,
			status: "kept",
			timestamp: "2026-01-01T00:00:00Z",
		};
		const result = parseExperiments({ experiments: [exp] });
		expect(result).toHaveLength(1);
		expect(result[0].target).toBe("system-prompt");
	});

	it("returns empty array when experiments missing", () => {
		expect(parseExperiments({})).toEqual([]);
	});
});

describe("experimentStatusColor()", () => {
	it("returns green for kept", () => {
		expect(experimentStatusColor("kept")).toBe("green");
	});

	it("returns yellow for discarded", () => {
		expect(experimentStatusColor("discarded")).toBe("yellow");
	});

	it("returns red for crashed", () => {
		expect(experimentStatusColor("crashed")).toBe("red");
	});

	it("returns gray for unknown status", () => {
		expect(experimentStatusColor("pending")).toBe("gray");
	});
});

describe("formatSalience()", () => {
	it("formats 0.9 as 90%", () => {
		expect(formatSalience(0.9)).toBe("90%");
	});

	it("formats 0.333 as 33%", () => {
		expect(formatSalience(0.333)).toBe("33%");
	});

	it("formats 0 as 0%", () => {
		expect(formatSalience(0)).toBe("0%");
	});
});

describe("MemoryPanel fetch logic", () => {
	let fetchMock: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		fetchMock = vi.fn();
		vi.stubGlobal("fetch", fetchMock);
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe("loadFacts()", () => {
		it("fetches /api/memory/facts with category filter", async () => {
			fetchMock.mockResolvedValue(mockResponse({ facts: [], total: 0 }));
			await loadFacts("Goal");
			expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining("/api/memory/facts"));
			const url = fetchMock.mock.calls[0][0] as string;
			expect(url).toContain("category=Goal");
		});

		it("fetches /api/memory/facts without category when empty", async () => {
			fetchMock.mockResolvedValue(mockResponse({ facts: [], total: 0 }));
			await loadFacts("");
			const url = fetchMock.mock.calls[0][0] as string;
			expect(url).not.toContain("category=");
		});

		it("returns parsed facts and total", async () => {
			const facts: MemoryFact[] = [
				{
					id: "1",
					entity: "user",
					slot: "lang",
					value: "TypeScript",
					category: "Preference",
					salience: 0.8,
					confidence: 0.9,
					updatedAt: "",
				},
			];
			fetchMock.mockResolvedValue(mockResponse({ facts, total: 1 }));
			const result = await loadFacts("");
			expect(result.facts).toHaveLength(1);
			expect(result.total).toBe(1);
		});
	});

	describe("loadTopOfMind()", () => {
		it("fetches /api/memory/top-of-mind", async () => {
			fetchMock.mockResolvedValue(mockResponse({ summary: "Hello" }));
			const result = await loadTopOfMind();
			expect(fetchMock).toHaveBeenCalledWith("/api/memory/top-of-mind");
			expect(result).toBe("Hello");
		});

		it("returns empty string when summary missing", async () => {
			fetchMock.mockResolvedValue(mockResponse({}));
			const result = await loadTopOfMind();
			expect(result).toBe("");
		});
	});

	describe("loadExperiments()", () => {
		it("fetches /api/memory/experiments", async () => {
			fetchMock.mockResolvedValue(mockResponse({ experiments: [] }));
			await loadExperiments();
			expect(fetchMock).toHaveBeenCalledWith("/api/memory/experiments");
		});

		it("returns experiments array", async () => {
			const exps = [{ id: 1, target: "t", mutation: "m", score: 0.5, status: "kept", timestamp: "" }];
			fetchMock.mockResolvedValue(mockResponse({ experiments: exps }));
			const result = await loadExperiments();
			expect(result).toHaveLength(1);
			expect(result[0].target).toBe("t");
		});
	});

	describe("loadStats()", () => {
		it("fetches /api/memory/stats and returns data", async () => {
			const stats: MemoryStats = {
				total: 42,
				byCategory: { Profile: 10 },
				bySalience: { high: 5, medium: 20, low: 17 },
			};
			fetchMock.mockResolvedValue(mockResponse(stats));
			const result = await loadStats();
			expect(fetchMock).toHaveBeenCalledWith("/api/memory/stats");
			expect(result?.total).toBe(42);
			expect(result?.byCategory.Profile).toBe(10);
		});

		it("returns null when fetch throws", async () => {
			fetchMock.mockRejectedValue(new Error("network error"));
			const result = await loadStats();
			expect(result).toBeNull();
		});
	});
});
