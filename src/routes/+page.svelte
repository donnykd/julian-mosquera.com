<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte';
    import img1 from '$lib/assets/gallery/DSCF0341_3.jpg?enhanced'
    import img2 from '$lib/assets/gallery/DSCF4090.jpg?enhanced'
    import img3 from '$lib/assets/gallery/DSCF3527 2.jpg?enhanced'
    import img4 from '$lib/assets/gallery/DSCF4021.jpg?enhanced'
    import img5 from '$lib/assets/gallery/DSCF0358 3.jpg?enhanced'
    import img6 from '$lib/assets/gallery/DSCF4107.jpg?enhanced'

    const verticalImages = [img2, img4, img6]
    const horizontalImages = [img1, img3, img5]

    let currentImage = $state(0)

    function nextImage(){
        currentImage = (currentImage + 1) % Math.min(verticalImages.length, horizontalImages.length)
    }

    // 4 seconds interval
    onMount(() => {
        const interval = setInterval(nextImage, 4000)

        return () => clearInterval(interval)
    })

</script>


<div class="flex justify-center items-center w-full min-h-screen p-4">
    <div class="flex items-center justify-center gap-16 w-6xl">
        {#key currentImage}
        <div in:fade class="max-w-[60%] pr-8">
            <enhanced:img 
            src={horizontalImages[currentImage]} 
            alt="landscape shot" />
        </div>

        <div in:fade class="max-w-[40%] pl-8">
            <enhanced:img 
            src={verticalImages[currentImage]} 
            alt="portrait shot" />
        </div>
        {/key}
    </div>
</div>

