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

    // 8 seconds interval
    onMount(() => {
        const interval = setInterval(nextImage, 8000)

        return () => clearInterval(interval)
    })

</script>


<div in:fade class="flex justify-center items-center w-full min-h-screen p-4">
    <div class="flex flex-col md:flex-row items-center justify-center gap-8 w-6xl">
        {#key currentImage}
        <div in:fade class="max-w-[70%] md:max-w-[60%] md:pr-8">
            <enhanced:img 
            src={horizontalImages[currentImage]} 
            alt="landscape shot" 
            class="opacity-0" 
            onload={(e) => {
                const image = e.currentTarget
                image.classList.remove('opacity-0')
            }}
            />
        </div>

        <div in:fade class="max-w-[50%] md:max-w-[40%] md:pl-8">
            <enhanced:img 
            src={verticalImages[currentImage]} 
            alt="portrait shot"
            class="opacity-0" 
            onload={(e) => {
                const image = e.currentTarget
                image.classList.remove('opacity-0')
            }}
            />
        </div>
        {/key}
    </div>
</div>

