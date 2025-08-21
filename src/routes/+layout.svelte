<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	export const prerender = true;

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-background text-foreground">
	<main class="mx-auto max-w-4xl px-2 py-5">
		{@render children?.()}
	</main>
</div>
