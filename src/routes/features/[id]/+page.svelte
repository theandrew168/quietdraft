<script lang="ts">
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<p>it works: {data.id}</p>
<p>feature? {data.feature}</p>
