/**
 * Mutation engine for the ratchet loop.
 *
 * Uses the LLM to propose targeted changes to a target file (e.g., a system prompt).
 * The mutation prompt follows the template from the spec (section 3).
 */

import type { Api, AssistantMessage, Model } from "@dg-claw/ai";
import { completeSimple, getModel } from "@dg-claw/ai";
import type { ExperimentEntry } from "@dg-claw/memory";
import type { MutationResult } from "./types.js";

const MUTATION_PROMPT_TEMPLATE = `You are optimizing a system prompt for an AI coding agent called DG-Claw.

## Current System Prompt
{currentContent}

## Recent Experiment History
{history}

## Eval Criteria
{evalCriteria}

## Your Task
Propose ONE specific change to the system prompt that might improve eval scores.

Rules:
- Make one focused change, not a complete rewrite
- Prefer removing complexity over adding it
- If a shorter prompt achieves the same score, that's a win
- Explain what you're changing and why in a one-line comment
- Return the complete modified system prompt

## Output Format
MUTATION_DESCRIPTION: {one-line description of what changed}
---
{complete modified system prompt content}`;

const RETRY_PROMPT = "You returned the same content. Try a different approach.";

/**
 * Format experiment history for the mutation prompt.
 * Takes the last 10 experiments and formats them as a readable list.
 */
function formatHistory(history: ExperimentEntry[]): string {
	const recent = history.slice(-10);
	if (recent.length === 0) {
		return "No previous experiments.";
	}

	return recent
		.map((e) => `- ${e.mutation} | score: ${e.score !== null ? e.score.toFixed(3) : "N/A"} | status: ${e.status}`)
		.join("\n");
}

/**
 * Parse the LLM's mutation response.
 *
 * Expected format:
 * ```
 * MUTATION_DESCRIPTION: <description>
 * ---
 * <complete modified content>
 * ```
 */
function parseMutationResponse(raw: string): { description: string; content: string } | null {
	// Find the MUTATION_DESCRIPTION line
	const descMatch = raw.match(/MUTATION_DESCRIPTION:\s*(.+)/);
	if (!descMatch) {
		return null;
	}
	const description = descMatch[1].trim();

	// Find the separator and take everything after it
	const separatorIndex = raw.indexOf("---");
	if (separatorIndex === -1) {
		return null;
	}

	// Content is everything after the first "---" line
	const afterSeparator = raw.slice(separatorIndex + 3);
	const content = afterSeparator.trim();

	if (!content) {
		return null;
	}

	return { description, content };
}

/**
 * Extract text from an AssistantMessage.
 */
function extractText(msg: AssistantMessage): string {
	return msg.content
		.filter((c): c is { type: "text"; text: string } => c.type === "text")
		.map((c) => c.text)
		.join("");
}

/**
 * Resolve a model string into a Model object.
 */
function resolveModel(modelStr: string): Model<Api> {
	const [provider, ...rest] = modelStr.split(":");
	const modelId = rest.join(":");
	return getModel(provider as any, modelId as any);
}

/**
 * Propose a mutation to the target file content.
 *
 * @param currentContent - Current content of the target file
 * @param experimentHistory - Full experiment history for this target
 * @param evalCriteria - Description of eval criteria for context
 * @param model - Model string (e.g., "anthropic:claude-sonnet-4-20250514")
 * @param apiKey - Optional API key
 * @returns MutationResult with the proposed change
 */
export async function proposeMutation(
	currentContent: string,
	experimentHistory: ExperimentEntry[],
	evalCriteria: string,
	model: string,
	apiKey?: string,
): Promise<MutationResult> {
	const prompt = MUTATION_PROMPT_TEMPLATE.replace("{currentContent}", currentContent)
		.replace("{history}", formatHistory(experimentHistory))
		.replace("{evalCriteria}", evalCriteria);

	const modelObj = resolveModel(model);
	const MAX_RETRIES = 3;

	for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
		try {
			const messages: Array<{ role: "user"; content: string; timestamp: number }> = [
				{ role: "user", content: prompt, timestamp: Date.now() },
			];

			// On retry, append a nudge to try something different
			if (attempt > 0) {
				messages.push({
					role: "user",
					content: RETRY_PROMPT,
					timestamp: Date.now(),
				});
			}

			const assistantMsg = await completeSimple(modelObj, { messages }, apiKey ? { apiKey } : undefined);

			const rawText = extractText(assistantMsg);
			const parsed = parseMutationResponse(rawText);

			if (!parsed) {
				// Couldn't parse -- try again
				continue;
			}

			// Guard: reject content identical to current
			if (parsed.content.trim() === currentContent.trim()) {
				// Will retry with the nudge prompt
				continue;
			}

			// Guard: reject empty content
			if (parsed.content.length === 0) {
				continue;
			}

			return {
				success: true,
				content: parsed.content,
				description: parsed.description,
			};
		} catch (err) {
			// Last attempt -- report the error
			if (attempt === MAX_RETRIES - 1) {
				return {
					success: false,
					content: null,
					description: "Mutation generation failed",
					error: err instanceof Error ? err.message : String(err),
				};
			}
		}
	}

	return {
		success: false,
		content: null,
		description: "Mutation generation failed after max retries",
		error: "All retry attempts exhausted (identical content or parse failures)",
	};
}
