<script>
// @ts-nocheck

    import { fade } from 'svelte/transition'
    let { data } = $props();

    function getWidth(image){
        const aspectRatio = image.naturalWidth / image.naturalHeight
        const wide = ['w-[90%]', 'w-[80%]', 'w-[70%]']
        const tall = ['w-[70%]', 'w-[60%]', 'w-[50%]']
        const selected = aspectRatio >= 1.45 ? wide : tall;
        return selected[Math.floor(Math.random() * selected.length)]
    }

    function getTranslate(){
        const translateX = ['left-[5%]', 'left-[10%]', 'left-[20%]', 'right-[5%]', 'right-[10%]', 'right-[20%]']
        const translateY = ['top-[5%]', 'top-[10%]', 'top-[20%]', 'bottom-[5%]', 'bottom-[10%]', 'bottom-[20%]']
        return {
        x: translateX[Math.floor(Math.random() * translateX.length)],
        y: translateY[Math.floor(Math.random() * translateY.length)]
        }
    }
    
    function getRotation(){
        const rotations = ['rotate-[-6deg]', 'rotate-[-3deg]', 'rotate-[3deg]', 'rotate-[6deg]']
        return rotations[Math.floor(Math.random() * rotations.length)]
    }

</script>

<div in:fade class="w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8">
        {#each data.images as image}
            <div class="relative aspect-[3/4] overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                    <img 
                    src={image.url}
                    alt="test" 
                    loading="lazy"
                    class="absolute opacity-0 transition-all duration-300" 
                    onload={(e) => {
                        const image = e.currentTarget
                        const width = getWidth(image)
                        const translate = getTranslate()
                        const rotation = getRotation()
                        image.classList.remove('opacity-0')
                        image.classList.add(width, translate.x, translate.y, rotation)
                    }}
                    />
                </div>
            </div>
        {/each}
    </div>
</div>