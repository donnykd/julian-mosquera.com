<script>
	import nira from '$lib/assets/nira.webp?enhanced';
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade
	class="font-[Alegraya Sans] flex min-h-screen w-full flex-col
            items-center justify-center text-center font-mono tracking-wider text-gray-700 lowercase"
>
	<p>Born in New York — Based in Tokyo — Concrete Child</p>
	<enhanced:img src={nira} alt="Nira Dance" />
</div>
