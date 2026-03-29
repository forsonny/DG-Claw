// @dg-claw/autolearn -- public API

// Eval layer
export { evaluate } from "./eval/harness.js";
export { judgeResponse, parseJudgeResponse } from "./eval/judge.js";
export { evaluateTestCase, loadTestCases, runTestCases } from "./eval/test-runner.js";
export {
	gitBranchExists,
	gitCheckoutBranch,
	gitCommit,
	gitCurrentBranch,
	gitInit,
	gitMerge,
	gitReset,
	gitResetToMain,
} from "./git.js";
// Mutation engine
export { proposeMutation } from "./mutation-engine.js";
export type {
	EvalResult,
	IterationOutcome,
	JudgeScores,
	MutationResult,
	RatchetConfig,
	RatchetRunSummary,
	ScheduleEntry,
	TestCase,
	TestCaseResult,
} from "./types.js";
export { DEFAULTS } from "./types.js";
