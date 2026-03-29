/**
 * Timer-based debounce queue for batching write operations.
 *
 * Collects items and fires a callback after `debounceMs` of no new pushes.
 * If `maxDepth` is reached before the timer fires, flushes immediately.
 *
 * Scope: one queue per group. Groups do not share queues.
 */

export class DebounceQueue<T> {
	private items: T[] = [];
	private timer: ReturnType<typeof setTimeout> | null = null;
	private callback: ((batch: T[]) => void) | null = null;
	private readonly debounceMs: number;
	private readonly maxDepth: number;

	/**
	 * @param debounceMs - Milliseconds of silence before flushing (default 5000)
	 * @param maxDepth - Maximum items before forced flush (default 50)
	 */
	constructor(debounceMs = 5000, maxDepth = 50) {
		this.debounceMs = debounceMs;
		this.maxDepth = maxDepth;
	}

	/** Register a callback that fires when the batch is ready. */
	onFlush(callback: (batch: T[]) => void): void {
		this.callback = callback;
	}

	/** Push an item into the queue. Resets the debounce timer. */
	push(item: T): void {
		this.items.push(item);

		// Immediate flush if max depth reached
		if (this.items.length >= this.maxDepth) {
			this.doFlush();
			return;
		}

		// Reset debounce timer
		this.clearTimer();
		this.timer = setTimeout(() => {
			this.doFlush();
		}, this.debounceMs);
	}

	/**
	 * Force-flush the queue immediately. Returns the flushed items.
	 * If the queue is empty, returns an empty array and does not fire the callback.
	 */
	flush(): T[] {
		this.clearTimer();
		if (this.items.length === 0) {
			return [];
		}
		const batch = [...this.items];
		this.items = [];
		this.callback?.(batch);
		return batch;
	}

	/** Dispose: cancel pending timer and clear all items without firing callback. */
	dispose(): void {
		this.clearTimer();
		this.items = [];
		this.callback = null;
	}

	private doFlush(): void {
		this.clearTimer();
		if (this.items.length === 0) return;
		const batch = [...this.items];
		this.items = [];
		this.callback?.(batch);
	}

	private clearTimer(): void {
		if (this.timer !== null) {
			clearTimeout(this.timer);
			this.timer = null;
		}
	}
}
