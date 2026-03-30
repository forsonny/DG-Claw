# Inferred and Unclear Mechanisms in Hermes Agent Memory

## 1. Frozen Mid-Session Memory Access
**Inferred Behavior:** The `_system_prompt_snapshot` design locks the LLM's prompt state at session initialization. 
**Unclear Edge Case:** It is partially unclear whether an agent, having just executed an `add` action to its `user` target, might hallucinate about whether the memory truly "stuck," as the LLM will not see the new memory materialized in its system prompt until the *next* session. Tool responses provide confirmation ("Entry added"), but the agent must carry that new knowledge strictly in its conversational history context window until reboot.

## 2. Substring Ambiguity
**Inferred Behavior:** When an agent attempts a `replace` or `remove` action, it utilizes a substring match on `old_text`. If the text targets multiple entries, the system yields an error demanding more specificity.
**Unclear Extent:** If an agent heavily consolidates memories natively ("Project uses Python" vs "Project runs Python"), the short substring pattern might cause frustration loops if the agent fails to fetch the precise text segment needed to accurately isolate the object without encountering a multi-match collision.

## 3. Honcho Integration
**Inferred Behavior:** Honcho runs in tandem with standard Memory (`MEMORY.md` vs `Honcho`). It acts as a "hybrid" model.
**Unclear Aspects:** It is not entirely clear from the base tool logic how Honcho and the built-in memory prioritize contexts. Does Honcho inject into the system prompt, or is it exclusively an active retrieve-and-fetch memory node? Based on the documentation, Honcho adds a persistent user modeling "on top," but the exact data flow of Honcho vs native `MemoryStore` conflict resolution is implied to be minimal.
