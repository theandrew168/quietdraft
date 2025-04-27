<script lang="ts">
	import type { Feature } from "$lib/server/domain/feature";
	import FeatureSource from "./FeatureSource.svelte";

	type Props = {
		feature: Feature;
	};

	let { feature }: Props = $props();
</script>

<article>
	<header>
		<h3>{feature.name}</h3>
		<p>{feature.createdAt.toDateString()}</p>
	</header>
	<ul>
		{#each feature.sources as source}
			<li>
				<FeatureSource {source} />
			</li>
		{/each}
	</ul>
	<a href={`/features/${feature.id}`}>View Documentation</a>
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
		margin-bottom: 1em;
	}
	h3 {
		font-size: 1.125rem;
		font-weight: 700;
	}
	p {
		font-size: 0.875rem;
		color: var(--muted-foreground);
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1em;
		margin-bottom: 1em;
	}
</style>
