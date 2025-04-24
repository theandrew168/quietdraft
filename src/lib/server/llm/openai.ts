import OpenAI from "openai";

import type { LLM } from "$lib/server/domain/llm";

export class OpenAILLM implements LLM {
	private client: OpenAI;
	private model: string;

	constructor(apiKey: string, model: string = "gpt-4o-mini") {
		this.client = new OpenAI({ apiKey });
		this.model = model;
	}

	async ask(prompt: string): Promise<string> {
		const response = await this.client.responses.create({
			input: prompt,
			model: this.model,
		});
		return response.output_text;
	}
}
