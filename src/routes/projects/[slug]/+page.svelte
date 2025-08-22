<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	export let data;
	const { ContentComponent, metadata } = data;
</script>

<Project>
	<svelte:component this={ContentComponent} />
</Project>
