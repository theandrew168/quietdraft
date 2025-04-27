<script lang="ts">
	import { faGithub, faJira } from "@fortawesome/free-brands-svg-icons";

	import type { Source } from "$lib/server/domain/source";
	import Icon from "./Icon.svelte";

	type Props = {
		source: Source;
	};

	let { source }: Props = $props();
</script>

<span>
	{#if source.type === "githubPullRequest"}
		<Icon icon={faGithub} size={12} />
		{`${source.owner}/${source.repo}`}
	{:else if source.type === "jiraIssue"}
		<Icon icon={faJira} size={12} />
		{source.issueKey}
	{/if}
</span>

<style>
	span {
		display: flex;
		align-items: center;
		gap: 0.25em;
		color: var(--muted-foreground);
		text-wrap: nowrap;
	}
</style>
