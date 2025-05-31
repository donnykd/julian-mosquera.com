<script>
// @ts-nocheck

    import { fade } from 'svelte/transition'
    import { X } from '@lucide/svelte'
    import { receive } from '$lib/transition.js';
    
    let { data } = $props();
    let displayImage = $state(null);

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

    $effect(() => {
		if (displayImage != null) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
    });
</script>

<div in:fade class="w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8">
        {#each data.images as image}
            <div class="relative aspect-[3/4] overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                    <img 
                    src={image.url}
                    alt="" 
                    loading="lazy"
                    class="absolute opacity-0 transition-all duration-300 cursor-pointer"
                    onclick={() => (displayImage = image)}
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

{#if displayImage != null}
    <div
    	in:fade={{ duration: 100 }}
    	class="fixed inset-0 z-20 flex items-center justify-center bg-gray-300/50 p-8 backdrop-blur">
        <div class="fixed top-0 right-0 z-50 p-4">
            <div class="relative h-9 w-9">
                <div in:receive={{ key: 'menu-icon' }}>
                    <X
    					data-icon="X"
    					onclick={() => (displayImage = null)}
    					color="#616161"
    					size={36}
    					strokeWidth={1}
    					style="cursor: pointer"
					/>
                </div>
            </div>
        </div>
        <img
            src={displayImage.url}
            alt=""
            class="max-w-[90vw] max-h-[80vh] object-contain"
        />
    </div>
{/if}