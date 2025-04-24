import ollama from "ollama";

import type { LLM } from "$lib/server/domain/llm";

export class OllamaLLM implements LLM {
	private static instance?: OllamaLLM;
	private model: string;

	constructor(model: string = "llama3.2") {
		this.model = model;
	}

	static getInstance(): OllamaLLM {
		if (!this.instance) {
			this.instance = new OllamaLLM();
		}

		return this.instance;
	}

	async ask(prompt: string): Promise<string> {
		const response = await ollama.chat({
			model: this.model,
			messages: [{ role: "user", content: prompt }],
		});
		return response.message.content;
	}
}
