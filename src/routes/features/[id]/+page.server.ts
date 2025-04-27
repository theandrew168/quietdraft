import { randomUUID } from "node:crypto";

import { MemoryFeatureRepository } from "$lib/server/repository/memory";
import { isUUID } from "$lib/server/utils";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	// Seed the repository with a feature for demonstration purposes.
	await MemoryFeatureRepository.getInstance().create({
		id: "698e8a93-30e0-46fe-8fc8-825adf1dd8d7",
		name: "Ollama LLM Implementation",
		createdAt: new Date(),
		updatedAt: new Date(),
		sources: [
			{
				id: randomUUID(),
				type: "githubPullRequest",
				owner: "theandrew168",
				repo: "fussy",
				ref: "e4e2dc842022c35f7fe27a45effd1dc2602a23b6",
			},
			{
				id: randomUUID(),
				type: "jiraIssue",
				issueKey: "SCRUM-1",
			},
		],
	});

	if (!isUUID(params.id)) {
		throw new Error(`Invalid UUID: ${params.id}`);
	}

	const featureRepo = MemoryFeatureRepository.getInstance();
	const feature = await featureRepo.read(params.id);
	return { id: params.id, feature: feature?.name };
};
