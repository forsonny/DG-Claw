/**
 * Tests for panel-layout.ts -- panel state management logic.
 *
 * We test the URL management and panel-state helpers in isolation without a DOM.
 * Vitest runs in node (see vitest.config.ts).
 */

import { describe, expect, it } from "vitest";

// ---------------------------------------------------------------------------
// Helpers replicated from panel-layout (tested in isolation)
// ---------------------------------------------------------------------------

/** Determine whether a sidebar should be shown */
function shouldShowPanel(panelName: string | null): boolean {
	return panelName !== null && panelName.length > 0;
}

/** Build a URL string with the ?panel= query param set */
function buildPanelUrl(base: string, panel: string): string {
	const url = new URL(base);
	url.searchParams.set("panel", panel);
	return url.toString();
}

/** Build a URL string with the ?panel= query param removed */
function buildClosedUrl(base: string): string {
	const url = new URL(base);
	url.searchParams.delete("panel");
	return url.toString();
}

/** Read the active panel name from a URL search string */
function readPanelFromSearch(search: string): string | null {
	const params = new URLSearchParams(search);
	return params.get("panel");
}

/** Determine the panel label to display in the sidebar header */
function panelLabel(panelName: string | null): string {
	if (!panelName) return "";
	// Capitalize first letter
	return panelName.charAt(0).toUpperCase() + panelName.slice(1);
}

/** Determine if a given panel toggle button should be in the active state */
function isPanelActive(currentPanel: string | null, buttonPanel: string): boolean {
	return currentPanel === buttonPanel;
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("shouldShowPanel()", () => {
	it("returns false for null", () => {
		expect(shouldShowPanel(null)).toBe(false);
	});

	it("returns false for empty string", () => {
		expect(shouldShowPanel("")).toBe(false);
	});

	it("returns true for 'memory'", () => {
		expect(shouldShowPanel("memory")).toBe(true);
	});

	it("returns true for 'admin'", () => {
		expect(shouldShowPanel("admin")).toBe(true);
	});
});

describe("buildPanelUrl()", () => {
	it("adds ?panel= to a base URL", () => {
		const result = buildPanelUrl("http://localhost:3000/", "memory");
		expect(result).toContain("panel=memory");
	});

	it("replaces existing panel param", () => {
		const result = buildPanelUrl("http://localhost:3000/?panel=admin", "memory");
		expect(result).toContain("panel=memory");
		expect(result).not.toContain("panel=admin");
	});

	it("preserves other query params", () => {
		const result = buildPanelUrl("http://localhost:3000/?foo=bar", "admin");
		expect(result).toContain("foo=bar");
		expect(result).toContain("panel=admin");
	});
});

describe("buildClosedUrl()", () => {
	it("removes ?panel= from URL", () => {
		const result = buildClosedUrl("http://localhost:3000/?panel=memory");
		expect(result).not.toContain("panel=");
	});

	it("preserves other params when removing panel", () => {
		const result = buildClosedUrl("http://localhost:3000/?panel=admin&session=123");
		expect(result).toContain("session=123");
		expect(result).not.toContain("panel=");
	});

	it("is a no-op when no panel param exists", () => {
		const result = buildClosedUrl("http://localhost:3000/");
		expect(result).not.toContain("panel=");
	});
});

describe("readPanelFromSearch()", () => {
	it("reads 'memory' from ?panel=memory", () => {
		expect(readPanelFromSearch("?panel=memory")).toBe("memory");
	});

	it("reads 'admin' from ?panel=admin", () => {
		expect(readPanelFromSearch("?panel=admin")).toBe("admin");
	});

	it("returns null when no panel param", () => {
		expect(readPanelFromSearch("")).toBeNull();
	});

	it("returns null when only other params present", () => {
		expect(readPanelFromSearch("?foo=bar")).toBeNull();
	});
});

describe("panelLabel()", () => {
	it("capitalizes 'memory' to 'Memory'", () => {
		expect(panelLabel("memory")).toBe("Memory");
	});

	it("capitalizes 'admin' to 'Admin'", () => {
		expect(panelLabel("admin")).toBe("Admin");
	});

	it("returns empty string for null", () => {
		expect(panelLabel(null)).toBe("");
	});
});

describe("isPanelActive()", () => {
	it("returns true when currentPanel matches buttonPanel", () => {
		expect(isPanelActive("memory", "memory")).toBe(true);
	});

	it("returns false when currentPanel does not match", () => {
		expect(isPanelActive("admin", "memory")).toBe(false);
	});

	it("returns false when currentPanel is null", () => {
		expect(isPanelActive(null, "memory")).toBe(false);
	});
});

describe("Panel toggle behavior", () => {
	it("opening a panel when none active sets that panel", () => {
		let current: string | null = null;
		// Simulate clicking "memory" when no panel open
		current = "memory";
		expect(shouldShowPanel(current)).toBe(true);
		expect(isPanelActive(current, "memory")).toBe(true);
	});

	it("clicking the active panel closes it", () => {
		let current: string | null = "memory";
		// Simulate clicking "memory" again (toggle off)
		if (isPanelActive(current, "memory")) {
			current = null;
		}
		expect(shouldShowPanel(current)).toBe(false);
	});

	it("clicking a different panel switches to it", () => {
		let current: string | null = "memory";
		// Simulate clicking "admin" while "memory" is open
		current = "admin";
		expect(isPanelActive(current, "admin")).toBe(true);
		expect(isPanelActive(current, "memory")).toBe(false);
	});

	it("closing panel updates URL correctly", () => {
		const closedUrl = buildClosedUrl("http://localhost:3000/?panel=memory");
		expect(readPanelFromSearch(new URL(closedUrl).search)).toBeNull();
	});

	it("opening panel updates URL correctly", () => {
		const openUrl = buildPanelUrl("http://localhost:3000/", "admin");
		expect(readPanelFromSearch(new URL(openUrl).search)).toBe("admin");
	});
});
