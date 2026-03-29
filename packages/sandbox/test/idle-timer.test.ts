import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { IdleTimer } from "../src/idle-timer.js";

describe("IdleTimer", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it("fires the callback after the timeout elapses", () => {
		const onIdle = vi.fn();
		const timer = new IdleTimer(5000, onIdle);

		timer.reset();
		expect(onIdle).not.toHaveBeenCalled();

		vi.advanceTimersByTime(5000);
		expect(onIdle).toHaveBeenCalledTimes(1);
	});

	it("does not fire if cancelled before timeout", () => {
		const onIdle = vi.fn();
		const timer = new IdleTimer(5000, onIdle);

		timer.reset();
		vi.advanceTimersByTime(3000);
		timer.cancel();
		vi.advanceTimersByTime(5000);

		expect(onIdle).not.toHaveBeenCalled();
	});

	it("resets the countdown on subsequent reset() calls", () => {
		const onIdle = vi.fn();
		const timer = new IdleTimer(5000, onIdle);

		timer.reset();
		vi.advanceTimersByTime(3000); // 3s in, not yet fired
		timer.reset(); // restart countdown
		vi.advanceTimersByTime(3000); // 3s into new countdown, total 6s
		expect(onIdle).not.toHaveBeenCalled();

		vi.advanceTimersByTime(2000); // 5s into new countdown
		expect(onIdle).toHaveBeenCalledTimes(1);
	});

	it("reports isActive correctly", () => {
		const onIdle = vi.fn();
		const timer = new IdleTimer(5000, onIdle);

		expect(timer.isActive()).toBe(false);

		timer.reset();
		expect(timer.isActive()).toBe(true);

		vi.advanceTimersByTime(5000);
		expect(timer.isActive()).toBe(false); // callback fired, timer cleared
	});

	it("reports isActive as false after cancel", () => {
		const onIdle = vi.fn();
		const timer = new IdleTimer(5000, onIdle);

		timer.reset();
		expect(timer.isActive()).toBe(true);

		timer.cancel();
		expect(timer.isActive()).toBe(false);
	});

	it("handles multiple reset-cancel cycles", () => {
		const onIdle = vi.fn();
		const timer = new IdleTimer(1000, onIdle);

		// Cycle 1: reset then cancel
		timer.reset();
		timer.cancel();
		vi.advanceTimersByTime(2000);
		expect(onIdle).not.toHaveBeenCalled();

		// Cycle 2: reset and let it fire
		timer.reset();
		vi.advanceTimersByTime(1000);
		expect(onIdle).toHaveBeenCalledTimes(1);

		// Cycle 3: reset again after firing
		timer.reset();
		vi.advanceTimersByTime(1000);
		expect(onIdle).toHaveBeenCalledTimes(2);
	});
});
