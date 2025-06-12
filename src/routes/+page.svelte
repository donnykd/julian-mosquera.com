<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import img1 from '$lib/assets/gallery/IMG_0771.jpg?enhanced';
	import img2 from '$lib/assets/gallery/IMG_1897.jpg?enhanced';
	import img3 from '$lib/assets/gallery/08490024.jpg?enhanced';
	import img4 from '$lib/assets/gallery/000042890006.jpg?enhanced';
	import img5 from '$lib/assets/gallery/DSCF5240.jpg?enhanced';
	import img6 from '$lib/assets/gallery/IMG_1876.jpg?enhanced';
	import img7 from '$lib/assets/gallery/IMG_9406.png?enhanced';
	import img8 from '$lib/assets/gallery/IMG_3243.jpg?enhanced';
	import img9 from '$lib/assets/gallery/1809_023.jpg?enhanced';
	import img10 from '$lib/assets/gallery/IMG_1908.jpg?enhanced';

	const horizontalImages = [img1, img3, img5, img7, img9];
	const verticalImages = [img2, img4, img6, img8, img10];

	let currentImage = $state(0);

	function nextImage() {
		currentImage = (currentImage + 1) % Math.min(verticalImages.length, horizontalImages.length);
	}

	// 7 seconds interval
	$effect(() => {
		const interval = setInterval(nextImage, 7000);

		return () => clearInterval(interval);
	});
</script>

<div in:fade class="flex min-h-screen w-full items-center justify-center p-4">
	<div class="flex w-6xl flex-col items-center justify-center gap-8 md:flex-row">
		{#key currentImage}
			<div in:fade class="max-w-[70%] md:max-w-[60%] md:pr-8">
				<enhanced:img
					src={horizontalImages[currentImage]}
					alt="landscape shot"
					loading="lazy"
					class="opacity-0 transition-all duration-300"
					onload={(e) => {
						const image = e.currentTarget;
						image.classList.remove('opacity-0');
					}}
				/>
			</div>

			<div in:fade class="max-w-[50%] md:max-w-[40%] md:pl-8">
				<enhanced:img
					src={verticalImages[currentImage]}
					alt="portrait shot"
					class="opacity-0"
					onload={(e) => {
						const image = e.currentTarget;
						image.classList.remove('opacity-0');
					}}
				/>
			</div>
		{/key}
	</div>
</div>
