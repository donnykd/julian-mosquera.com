<script>
    import { fade } from 'svelte/transition'
    export let data
    
</script>

<div in:fade class="flex justify-center items-center text-gray-700 w-full min-h-screen p-4 ">
    {#each data.images as image}
        <img 
        src={image.url}
        alt="test" 
        class="w-50"    
        />
    {/each}
</div>