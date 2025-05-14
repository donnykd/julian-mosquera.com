<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte';
    export let data

    //function to check if image dimension is 1.5
        //if it is then set the image width to 60%
        //else set the image width to 40%
    
</script>

<div in:fade class="flex justify-center items-center w-full min-h-screen p-4">
    <div class=" justify-center items-center grid grid-cols-2 gap-16 w-6xl">
        {#each data.images as image}
                <img 
                src={image.url}
                alt="test" 
                class="w-[60%]"    
                />
        {/each}
    </div>
</div>