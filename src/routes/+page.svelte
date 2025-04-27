<script lang="ts">
	import FeatureCard from "$lib/ui/FeatureCard.svelte";
	import IntegrationCard from "$lib/ui/IntegrationCard.svelte";

	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<section>
	<h1>Dashboard</h1>
</section>
<section>
	<h2>Features Being Documented</h2>
	<ul>
		{#each data.features as feature}
			<li>
				<FeatureCard {feature} />
			</li>
		{/each}
	</ul>
</section>
<section>
	<h2>Connected Integrations</h2>
	<ul>
		{#each data.integrations as integration}
			<li>
				<IntegrationCard {integration} />
			</li>
		{/each}
	</ul>
</section>

<style>
	h2 {
		margin-bottom: 1em;
	}
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1em;
	}
</style>
