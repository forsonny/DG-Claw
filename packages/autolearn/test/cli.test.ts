import { describe, expect, it } from "vitest";
import { parseArgs } from "../src/cli.js";

describe("cli argument parsing", () => {
	it("parses on-demand run: dg-claw-optimize system-prompt", () => {
		const args = parseArgs(["system-prompt"]);
		expect(args.command).toBe("run");
		expect(args.target).toBe("system-prompt");
	});

	it("parses --daemon flag", () => {
		const args = parseArgs(["--daemon"]);
		expect(args.command).toBe("daemon");
	});

	it("parses --stop flag", () => {
		const args = parseArgs(["--stop"]);
		expect(args.command).toBe("stop");
	});

	it("parses --list without target", () => {
		const args = parseArgs(["--list"]);
		expect(args.command).toBe("list");
		expect(args.target).toBeNull();
	});

	it("parses --list with target", () => {
		const args = parseArgs(["--list", "system-prompt"]);
		expect(args.command).toBe("list");
		expect(args.target).toBe("system-prompt");
	});

	it("parses --promote with target", () => {
		const args = parseArgs(["--promote", "system-prompt"]);
		expect(args.command).toBe("promote");
		expect(args.target).toBe("system-prompt");
	});

	it("parses --rollback with target", () => {
		const args = parseArgs(["--rollback", "system-prompt"]);
		expect(args.command).toBe("rollback");
		expect(args.target).toBe("system-prompt");
	});

	it("parses --schedule with cron expression and --target", () => {
		const args = parseArgs(["--schedule", "0 2 * * *", "--target", "system-prompt"]);
		expect(args.command).toBe("schedule");
		expect(args.schedule).toBe("0 2 * * *");
		expect(args.target).toBe("system-prompt");
	});

	it("parses --model and --judge-model options", () => {
		const args = parseArgs([
			"system-prompt",
			"--model",
			"anthropic:claude-sonnet-4-20250514",
			"--judge-model",
			"anthropic:claude-haiku-3-20240307",
		]);
		expect(args.command).toBe("run");
		expect(args.target).toBe("system-prompt");
		expect(args.model).toBe("anthropic:claude-sonnet-4-20250514");
		expect(args.judgeModel).toBe("anthropic:claude-haiku-3-20240307");
	});

	it("parses --max-iterations and --max-wall-clock", () => {
		const args = parseArgs(["system-prompt", "--max-iterations", "100", "--max-wall-clock", "7200000"]);
		expect(args.maxIterations).toBe(100);
		expect(args.maxWallClockMs).toBe(7200000);
	});

	it("parses --help flag", () => {
		const args = parseArgs(["--help"]);
		expect(args.command).toBe("help");
	});

	it("parses -h flag", () => {
		const args = parseArgs(["-h"]);
		expect(args.command).toBe("help");
	});

	it("returns null command when no args provided", () => {
		const args = parseArgs([]);
		expect(args.command).toBeNull();
	});

	it("handles combined options for on-demand run", () => {
		const args = parseArgs(["my-skill", "--model", "openai:gpt-4o", "--max-iterations", "25"]);
		expect(args.command).toBe("run");
		expect(args.target).toBe("my-skill");
		expect(args.model).toBe("openai:gpt-4o");
		expect(args.maxIterations).toBe(25);
	});
});
