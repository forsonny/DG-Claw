// @dg-claw/server -- stub, implemented in a later task

export function hashPassword(_password: string): Promise<string> {
	throw new Error("Not implemented");
}

export function verifyPassword(_password: string, _hash: string): Promise<boolean> {
	throw new Error("Not implemented");
}
