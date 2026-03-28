#!/usr/bin/env node
process.title = "dg-claw";
process.emitWarning = (() => {}) as typeof process.emitWarning;

await import("./register-bedrock.js");
await import("../cli.js");
