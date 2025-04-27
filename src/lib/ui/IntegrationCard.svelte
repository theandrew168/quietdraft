<script lang="ts">
	import { faCheck } from "@fortawesome/free-solid-svg-icons";

	import Icon from "./Icon.svelte";
	import LinkButton from "./LinkButton.svelte";
	import type { IntegrationOverview } from "./types";

	type Props = {
		integration: IntegrationOverview;
	};

	let { integration }: Props = $props();
</script>

<article>
	<header>
		<Icon icon={integration.icon} size={12} />
		<h3>{integration.name}</h3>
	</header>
	<p>{integration.description}</p>
	<h4>Features</h4>
	<ul>
		{#each integration.features as feature}
			<li>
				<span>
					<Icon icon={faCheck} size={12} />
				</span>
				{feature}
			</li>
		{/each}
	</ul>
	<LinkButton href="/connect">Connect</LinkButton>
</article>

<style>
	article {
		display: inline-block;
		padding: 1em;
		border-radius: 0.5em;
		color: var(--card-foreground);
		background-color: var(--card-background);
		width: 100%;
	}
	header {
		display: flex;
		align-items: center;
		gap: 0.5em;
		margin-bottom: 1em;
	}
	h3 {
		font-weight: 700;
	}
	p {
		font-size: 0.875rem;
		color: var(--muted-foreground);
		margin-bottom: 1em;
	}
	h4 {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--muted-foreground);
		margin-bottom: 0.5em;
	}
	ul {
		font-size: 0.875rem;
		margin-bottom: 1em;
	}
	li {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
	span {
		color: var(--primary-background);
	}
</style>
