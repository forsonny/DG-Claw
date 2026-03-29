import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { loadSchedules, saveSchedule } from "../src/scheduler.js";
import type { ScheduleEntry } from "../src/types.js";

describe("scheduler", () => {
	let tempDir: string;
	let configPath: string;

	beforeEach(() => {
		tempDir = join(tmpdir(), `dg-claw-scheduler-test-${crypto.randomUUID()}`);
		configPath = join(tempDir, "config");
		mkdirSync(configPath, { recursive: true });
	});

	afterEach(() => {
		rmSync(tempDir, { recursive: true, force: true });
	});

	describe("loadSchedules", () => {
		it("returns empty array when schedules.json does not exist", () => {
			const schedules = loadSchedules(configPath);
			expect(schedules).toEqual([]);
		});

		it("loads schedule entries from schedules.json", () => {
			const entries: ScheduleEntry[] = [
				{
					id: "nightly-prompt",
					target: "system-prompt",
					cron: "0 2 * * *",
					config: { maxIterations: 50 },
					enabled: true,
				},
				{
					id: "weekly-skills",
					target: "skill-extract",
					cron: "0 3 * * 0",
					config: { maxIterations: 100 },
					enabled: false,
				},
			];

			writeFileSync(join(configPath, "schedules.json"), JSON.stringify(entries));

			const loaded = loadSchedules(configPath);
			expect(loaded).toHaveLength(2);
			expect(loaded[0].id).toBe("nightly-prompt");
			expect(loaded[0].enabled).toBe(true);
			expect(loaded[1].enabled).toBe(false);
		});

		it("returns empty array for malformed JSON", () => {
			writeFileSync(join(configPath, "schedules.json"), "not valid json{{{");
			const schedules = loadSchedules(configPath);
			expect(schedules).toEqual([]);
		});
	});

	describe("saveSchedule", () => {
		it("creates schedules.json if it does not exist", () => {
			const entry: ScheduleEntry = {
				id: "new-schedule",
				target: "system-prompt",
				cron: "0 2 * * *",
				config: { maxIterations: 30 },
				enabled: true,
			};

			saveSchedule(configPath, entry);

			const loaded = loadSchedules(configPath);
			expect(loaded).toHaveLength(1);
			expect(loaded[0].id).toBe("new-schedule");
		});

		it("appends a new schedule entry", () => {
			const entry1: ScheduleEntry = {
				id: "schedule-1",
				target: "prompt-a",
				cron: "0 1 * * *",
				config: {},
				enabled: true,
			};
			const entry2: ScheduleEntry = {
				id: "schedule-2",
				target: "prompt-b",
				cron: "0 2 * * *",
				config: {},
				enabled: true,
			};

			saveSchedule(configPath, entry1);
			saveSchedule(configPath, entry2);

			const loaded = loadSchedules(configPath);
			expect(loaded).toHaveLength(2);
		});

		it("updates an existing schedule entry by ID", () => {
			const entry: ScheduleEntry = {
				id: "update-me",
				target: "system-prompt",
				cron: "0 2 * * *",
				config: { maxIterations: 30 },
				enabled: true,
			};

			saveSchedule(configPath, entry);

			// Update with same ID but different config
			const updated: ScheduleEntry = {
				...entry,
				cron: "0 3 * * *",
				config: { maxIterations: 100 },
				enabled: false,
			};

			saveSchedule(configPath, updated);

			const loaded = loadSchedules(configPath);
			expect(loaded).toHaveLength(1);
			expect(loaded[0].cron).toBe("0 3 * * *");
			expect(loaded[0].config.maxIterations).toBe(100);
			expect(loaded[0].enabled).toBe(false);
		});

		it("produces valid JSON output", () => {
			const entry: ScheduleEntry = {
				id: "json-test",
				target: "system-prompt",
				cron: "0 2 * * *",
				config: {},
				enabled: true,
			};

			saveSchedule(configPath, entry);

			const raw = readFileSync(join(configPath, "schedules.json"), "utf8");
			const parsed = JSON.parse(raw);
			expect(Array.isArray(parsed)).toBe(true);
			expect(parsed[0].id).toBe("json-test");
		});
	});
});
