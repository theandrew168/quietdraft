<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		href: string;
		children: Snippet;
	};

	let { href, children }: Props = $props();
</script>

<a {href}>{@render children()}</a>

<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0.5em 1em;
		border-radius: 0.5em;
		background-color: var(--primary-background);
		color: var(--primary-foreground);
		border: none;
	}

	a:hover {
		opacity: 0.9;
		transition: opacity 0.2s;
	}
</style>
