/**
 * LLM-as-judge scoring for the eval harness.
 *
 * Sends a structured prompt to the judge model asking it to rate
 * a response on accuracy, helpfulness, and conciseness (0-100 each).
 */

import type { Api, Model } from "@dg-claw/ai";
import { completeSimple, getModel } from "@dg-claw/ai";
import type { JudgeScores } from "../types.js";

const JUDGE_PROMPT_TEMPLATE = `Rate the following AI assistant response on three criteria.
Each criterion is scored 0-100.

## User Input
{input}

## Assistant Response
{response}

## Criteria
1. Accuracy: Is the response factually correct and complete?
2. Helpfulness: Does the response directly address what was asked?
3. Conciseness: Is the response appropriately brief without omitting important details?

Return ONLY a JSON object:
{"accuracy": <0-100>, "helpfulness": <0-100>, "conciseness": <0-100>}`;

/**
 * Parse the judge's raw response text into JudgeScores.
 *
 * Attempts to extract a JSON object from the response. Handles cases where
 * the LLM wraps JSON in markdown code fences or adds extra text.
 *
 * Validates that all three scores are numbers between 0 and 100.
 * Clamps out-of-range values. Throws on unparseable input.
 */
export function parseJudgeResponse(raw: string): JudgeScores {
	// Try to extract JSON from the response
	let jsonStr = raw.trim();

	// Strip markdown code fences if present
	const fenceMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
	if (fenceMatch) {
		jsonStr = fenceMatch[1].trim();
	}

	// Try to find a JSON object in the string
	const objectMatch = jsonStr.match(/\{[\s\S]*\}/);
	if (!objectMatch) {
		throw new Error(`No JSON object found in judge response: ${raw.slice(0, 200)}`);
	}

	const parsed = JSON.parse(objectMatch[0]);

	if (
		typeof parsed.accuracy !== "number" ||
		typeof parsed.helpfulness !== "number" ||
		typeof parsed.conciseness !== "number"
	) {
		throw new Error(`Judge response missing required numeric fields. Got: ${JSON.stringify(parsed)}`);
	}

	// Clamp to 0-100
	return {
		accuracy: Math.max(0, Math.min(100, parsed.accuracy)),
		helpfulness: Math.max(0, Math.min(100, parsed.helpfulness)),
		conciseness: Math.max(0, Math.min(100, parsed.conciseness)),
	};
}

/**
 * Resolve a model string like "anthropic:claude-haiku-3-20240307" into a Model object.
 */
function resolveModel(modelStr: string): Model<Api> {
	const [provider, ...rest] = modelStr.split(":");
	const modelId = rest.join(":");
	return getModel(provider as any, modelId as any);
}

/**
 * Judge a single response using the LLM-as-judge pattern.
 *
 * @param input - The original user input
 * @param response - The assistant's response to judge
 * @param judgeModel - Model string (e.g., "anthropic:claude-haiku-3-20240307")
 * @param apiKey - Optional API key
 * @returns Judge scores for accuracy, helpfulness, and conciseness
 */
export async function judgeResponse(
	input: string,
	response: string,
	judgeModel: string,
	apiKey?: string,
): Promise<JudgeScores> {
	const prompt = JUDGE_PROMPT_TEMPLATE.replace("{input}", input).replace("{response}", response);

	const modelObj = resolveModel(judgeModel);

	const assistantMsg = await completeSimple(
		modelObj,
		{
			messages: [
				{
					role: "user",
					content: prompt,
					timestamp: Date.now(),
				},
			],
		},
		apiKey ? { apiKey } : undefined,
	);

	const rawText = assistantMsg.content
		.filter((c): c is { type: "text"; text: string } => c.type === "text")
		.map((c) => c.text)
		.join("");

	return parseJudgeResponse(rawText);
}
