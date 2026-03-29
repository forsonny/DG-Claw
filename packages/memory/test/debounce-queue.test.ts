import { afterEach, describe, expect, it, vi } from "vitest";
import { DebounceQueue } from "../src/write/debounce-queue.js";

describe("DebounceQueue", () => {
	afterEach(() => {
		vi.useRealTimers();
	});

	it("coalesces rapidly pushed items into a single batch", async () => {
		vi.useFakeTimers();
		const batches: number[][] = [];
		const queue = new DebounceQueue<number>(100);
		queue.onFlush((batch) => batches.push(batch));

		queue.push(1);
		queue.push(2);
		queue.push(3);

		// Advance past debounce window
		vi.advanceTimersByTime(150);

		expect(batches.length).toBe(1);
		expect(batches[0]).toEqual([1, 2, 3]);

		queue.dispose();
	});

	it("fires multiple batches when pushes are separated by the debounce interval", async () => {
		vi.useFakeTimers();
		const batches: string[][] = [];
		const queue = new DebounceQueue<string>(100);
		queue.onFlush((batch) => batches.push(batch));

		queue.push("a");
		vi.advanceTimersByTime(150); // Fires batch 1

		queue.push("b");
		vi.advanceTimersByTime(150); // Fires batch 2

		expect(batches.length).toBe(2);
		expect(batches[0]).toEqual(["a"]);
		expect(batches[1]).toEqual(["b"]);

		queue.dispose();
	});

	it("resets the timer on each push (true debounce)", async () => {
		vi.useFakeTimers();
		const batches: number[][] = [];
		const queue = new DebounceQueue<number>(100);
		queue.onFlush((batch) => batches.push(batch));

		queue.push(1);
		vi.advanceTimersByTime(80); // Not yet fired
		queue.push(2); // Resets timer
		vi.advanceTimersByTime(80); // 80ms after push(2), still not fired
		expect(batches.length).toBe(0);

		vi.advanceTimersByTime(30); // Now 110ms after push(2) -- fires
		expect(batches.length).toBe(1);
		expect(batches[0]).toEqual([1, 2]);

		queue.dispose();
	});

	it("flushes immediately when flush() is called", () => {
		const batches: number[][] = [];
		const queue = new DebounceQueue<number>(60000); // Very long debounce
		queue.onFlush((batch) => batches.push(batch));

		queue.push(1);
		queue.push(2);
		const flushed = queue.flush();

		expect(flushed).toEqual([1, 2]);
		expect(batches.length).toBe(1);
		expect(batches[0]).toEqual([1, 2]);

		queue.dispose();
	});

	it("flush returns empty array when queue is empty", () => {
		const queue = new DebounceQueue<number>(100);
		const result = queue.flush();
		expect(result).toEqual([]);
		queue.dispose();
	});

	it("dispose cancels pending timer and clears items", () => {
		vi.useFakeTimers();
		const batches: number[][] = [];
		const queue = new DebounceQueue<number>(100);
		queue.onFlush((batch) => batches.push(batch));

		queue.push(1);
		queue.dispose();

		vi.advanceTimersByTime(200);
		expect(batches.length).toBe(0); // Timer was cancelled
	});

	it("flushes immediately when max depth is reached", () => {
		vi.useFakeTimers();
		const batches: number[][] = [];
		const queue = new DebounceQueue<number>(60000, 3); // maxDepth=3
		queue.onFlush((batch) => batches.push(batch));

		queue.push(1);
		queue.push(2);
		expect(batches.length).toBe(0);

		queue.push(3); // Hits maxDepth, should flush immediately
		expect(batches.length).toBe(1);
		expect(batches[0]).toEqual([1, 2, 3]);

		queue.dispose();
	});
});
