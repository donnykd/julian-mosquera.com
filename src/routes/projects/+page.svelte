<script>
	import { fade } from 'svelte/transition';
	import { ChevronRight } from 'lucide-svelte';
	let { data } = $props();
	
	let hoveredIndex = $state(-1);
</script>

<div in:fade class="w-full">
    <div class="flex flex-col space-y-8 justify-center items-center w-full min-h-screen p-4 pt-15">
        {#each data.images as image, i}
        <button 
        class="w-full max-w-6xl h-60 rounded-2xl overflow-hidden shadow-lg flex relative group"
        onmouseover={ () => hoveredIndex = i}
        onmouseout={ () => hoveredIndex = -1}
        onfocus={ () => hoveredIndex = i}
        onblur={ () => hoveredIndex = -1}
        >
            <img
                src={data.images[i].url}
                alt="project"
                loading="lazy"
                class="h-full w-1/2 object-cover ease-in-out transition-all"
                class:blur-xs={hoveredIndex !== i}
                class:opacity-90={hoveredIndex !== i}
            />
            {#if hoveredIndex === i}
				<div class="absolute top-1/2 right-4 -z-10">
					<ChevronRight class="text-gray-800 w-6 h-6" />
				</div>
			{/if}
        </button>
        {/each}
    </div>
</div>