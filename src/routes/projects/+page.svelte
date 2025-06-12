<script>
	// @ts-nocheck
	import { fade } from 'svelte/transition';
	import { ChevronRight } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	let { data } = $props();

	let hoveredIndex = $state(-1);

	function formatProjectName(name) {
		return name.split('_').join(' ');
	}
</script>

<div in:fade class="w-full">
	<div class="flex min-h-screen w-full flex-col items-center justify-center space-y-8 p-4 pt-15">
		{#each data.images as image, i}
			<button
				class="group relative flex h-60 w-full max-w-6xl cursor-pointer overflow-hidden rounded-2xl shadow-lg"
				onclick={() => goto(`/projects/${image.project}`)}
				onmouseover={() => (hoveredIndex = i)}
				onmouseout={() => (hoveredIndex = -1)}
				onfocus={() => (hoveredIndex = i)}
				onblur={() => (hoveredIndex = -1)}
			>
				<img
					src={data.images[i].url}
					alt="project card"
					loading="lazy"
					class="h-full w-1/2 object-cover transition-all ease-in-out"
					class:md:blur-xs={hoveredIndex !== i}
					class:md:opacity-90={hoveredIndex !== i}
				/>

				<div
					class="font-[Alegraya Sans] flex w-1/2 flex-col items-center justify-center
                        space-y-10 p-4 text-center font-mono tracking-wider text-gray-700 lowercase"
				>
					<h2 class="text-xl font-semibold">{formatProjectName(image.project)}</h2>
					<p class="text-gray-600">{image.date}</p>
				</div>

				{#if hoveredIndex === i}
					<div class="absolute top-1/2 right-4 -z-10">
						<ChevronRight class="h-6 w-6 text-gray-800" />
					</div>
				{/if}
			</button>
		{/each}
	</div>
</div>
