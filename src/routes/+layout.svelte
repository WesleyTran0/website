<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from '$lib/components/NavBar.svelte';

	export const prerender = true;

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Wesley Tran - Developer</title>
</svelte:head>

<div class="bg-background text-foreground">
	<NavBar />

	<main class="mx-auto max-w-3xl px-2 py-5">
		{@render children?.()}
	</main>
</div>
