<script>
    import { fade } from 'svelte/transition'
    export let data


    
</script>

<div in:fade class="flex justify-center items-center w-full min-h-screen p-4">
    <div class=" justify-center items-center grid grid-cols-2 gap-16 w-6xl">
        {#each data.images as image}
                <img 
                src={image.url}
                alt="test" 
                class="w-50"    
                />
        {/each}
    </div>
</div>