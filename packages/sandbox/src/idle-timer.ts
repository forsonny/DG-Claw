/**
 * Manages an idle timeout that fires a callback after a period of inactivity.
 * Call reset() on every activity to postpone the timeout.
 */
export class IdleTimer {
	private timer: ReturnType<typeof setTimeout> | null = null;
	private readonly timeoutMs: number;
	private readonly onIdle: () => void;

	constructor(timeoutMs: number, onIdle: () => void) {
		this.timeoutMs = timeoutMs;
		this.onIdle = onIdle;
	}

	/** Reset the idle timer. Call this on every activity. */
	reset(): void {
		if (this.timer) clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.timer = null;
			this.onIdle();
		}, this.timeoutMs);
	}

	/** Cancel the timer without triggering the callback. */
	cancel(): void {
		if (this.timer) {
			clearTimeout(this.timer);
			this.timer = null;
		}
	}

	/** Whether the timer is currently active (counting down). */
	isActive(): boolean {
		return this.timer !== null;
	}
}
