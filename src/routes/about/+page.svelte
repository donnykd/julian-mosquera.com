<script>
    import nira from "$lib/assets/nira.webp?enhanced";
    import { fade } from 'svelte/transition';

</script>

<div in:fade class="flex flex-col justify-center items-center w-full min-h-screen
            font-[Alegraya Sans] font-mono lowercase tracking-wider text-center text-gray-700">
    <p>
        Born in New York — Based in Tokyo — Concrete Child
    </p>
    <enhanced:img 
    src={nira} 
    alt="Nira Dance" />
</div>