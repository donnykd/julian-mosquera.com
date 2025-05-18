<script>
    import { fade } from 'svelte/transition'
    export let data

    //function to check if image dimension is 1.5
        //if it is then set the image width to 60%
        //else set the image width to 40%
    // @ts-ignore
    function getWidth(image){
        const aspectRatio = image.naturalWidth / image.naturalHeight
        if(aspectRatio >= 1.45 || aspectRatio <= 1.55){
            const array = ['51%', '52%', '53%', '54%', '55%', '56%', '57%', '58%', '59%', '60%']
            const random = array[Math.floor(Math.random() * array.length)]
            return `w-[${random}]`
        }
        else{
            const array = ['41%', '42%', '43%', '44%', '45%', '46%', '47%', '48%', '49%', '50%']
            const random = array[Math.floor(Math.random() * array.length)]
            return `w-[${random}]`
        }
    }
    

    //Change the width of the image so that when dimension is 1.5 make the image width either 50-60% or else 40-50%
</script>

<div in:fade class="flex justify-center items-center w-full  p-4">
    <div class=" justify-center items-center grid grid-cols-3 gap-16 w-6xl">
        {#each data.images as image}
                <img 
                src={image.url}
                alt="test" 
                class="opacity-0 transition-all duration-300" 
                onload={(e) => {
                    const image = e.currentTarget
                    const width = getWidth(image)
                    image.classList.remove('opacity-0');
                    image.classList.add(width)
                }}
                />
        {/each}
    </div>
</div>