import { randomUUID } from "node:crypto";
import { faGithub, faJira, faTrello } from "@fortawesome/free-brands-svg-icons";

import type { Feature } from "$lib/server/domain/feature";
import type { IntegrationOverview } from "$lib/ui/types";

import type { PageServerLoad } from "./$types";

// Actual existing features.
const features: Feature[] = [
	{
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
	},
	{
		id: randomUUID(),
		name: "Dashboard Analytics Widgets",
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
	},
	{
		id: randomUUID(),
		name: "User Profile Management",
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
	},
	{
		id: randomUUID(),
		name: "API Rate Limiting",
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
	},
	{
		id: randomUUID(),
		name: "Notification System",
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
	},
	{
		id: randomUUID(),
		name: "Dark Mode Support",
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
	},
];

// Potential integrations (connected if already connected).
const integrations: IntegrationOverview[] = [
	{
		name: "GitHub",
		icon: faGithub,
		description: "Connect to GitHub to track pull requests and code changes.",
		features: ["Simple integration process", "Pull request summaries", "Analyze commits and comments"],
	},
	{
		name: "Jira",
		icon: faJira,
		description: "Connect to Jira to track issues and link them to code changes.",
		features: [
			"Simple integration process",
			"Epic, story, and issue tracking",
			"Analyze comments, status, and history",
		],
	},
	{
		name: "Trello",
		icon: faTrello,
		description: "Connect to Jira to track cards and link them to code changes.",
		features: ["Simple integration process", "Board and card tracking", "Analyze descriptions and comments"],
	},
];

export const load: PageServerLoad = async () => {
	return { features, integrations };
};
