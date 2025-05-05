<script lang="ts">
	import '../app.css';
	import '@fontsource/alegreya-sans';
	import Header from '$lib/Header.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen">
	<Header />

	{@render children()}
</div>
