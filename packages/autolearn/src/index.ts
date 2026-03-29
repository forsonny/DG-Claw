// @dg-claw/autolearn -- public API

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
