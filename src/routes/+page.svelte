<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte';
    import img from '$lib/assets/gallery/DSCF0341_3.jpg?enhanced'
    import img2 from '$lib/assets/gallery/DSCF4090.jpg?enhanced'

    const images = [img, img2]

    let currentImage = $state(0)

    function nextImage(){
        currentImage = (currentImage + 1) % images.length
    }

    onMount(() => {
        const interval = setInterval(nextImage, 3000)

        return () => clearInterval(interval)
    })

</script>


<div class="flex justify-center items-center w-full min-h-screen p-4">
    <div class="w-xl">
        {#key currentImage}
        <div in:fade>
            <enhanced:img 
            src={images[currentImage]} 
            alt="img" />
        </div>
        {/key}
    </div>
</div>

