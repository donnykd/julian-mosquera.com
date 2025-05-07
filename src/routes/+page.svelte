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

    // Pair of horizontal and vertical photos
    let currentPair = $state({
        horizontal: horizontalImages[0],
        vertical: verticalImages [0]
    })


    function getRandomImages(){
        var newHorizontal, newVertical
        do{
            newHorizontal = horizontalImages[Math.floor(Math.random() * horizontalImages.length)]
            newVertical = verticalImages[Math.floor(Math.random() * verticalImages.length)]
        } while (
            newHorizontal === currentPair.horizontal && newVertical === currentPair.vertical
        )
        return { horizontal: newHorizontal, vertical: newVertical }
    }

    /*function nextImage(){
        currentImage = (currentImage + 1) % Math.min(verticalImages.length, horizontalImages.length)
    }*/

    // 4 seconds interval
    onMount(() => {
        const interval = setInterval(() => {
            currentPair = getRandomImages()
        }, 4000)

        return () => clearInterval(interval)
    })

</script>


<div class="flex justify-center items-center w-full min-h-screen p-4">
    <div class="flex items-center justify-center gap-16 w-6xl">
        {#key currentPair}
        <div in:fade class="max-w-[60%] pr-8">
            <enhanced:img 
            src={currentPair.horizontal} 
            alt="landscape shot" />
        </div>

        <div in:fade class="max-w-[40%] pl-8">
            <enhanced:img 
            src={currentPair.vertical} 
            alt="portrait shot" />
        </div>
        {/key}
    </div>
</div>

