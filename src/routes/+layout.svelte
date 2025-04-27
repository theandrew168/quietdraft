<script lang="ts">
	import type { LayoutProps } from "./$types";

	let { children }: LayoutProps = $props();
</script>

<div>
	<header>
		<nav class="container">
			<ul>
				<li>
					<a href="/">FussyCoder</a>
				</li>
				<li>
					<a href="/features">Features</a>
				</li>
			</ul>
		</nav>
	</header>
	<main class="container">
		{@render children()}
	</main>
</div>

<style>
	header {
		border-bottom: 1px solid var(--border);
		margin-bottom: 1em;
	}
	nav {
		padding: 1em;
	}
	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1em;
	}
	li:first-child {
		margin-right: auto;
		font-size: 1.5rem;
	}
</style>
