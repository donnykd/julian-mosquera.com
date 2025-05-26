<script>
	import logo1 from '$lib/assets/jul-1.png';
	import logo2 from '$lib/assets/jul-2.png';
	import { fade } from 'svelte/transition';
	import { receive } from '$lib/transition.js';
	import { Instagram, Mail, AlignJustify, X } from '@lucide/svelte';

	let currentLogo = $state(logo1);
	let isMenuOpen = $state(false);

	const email = 'Juliantmosquera@gmail.com';
</script>

<div class="fixed top-0 right-0 z-50 p-4 md:hidden">
	<div class="relative h-9 w-9">
		{#if !isMenuOpen}
			<div in:receive={{ key: 'menu-icon' }}>
				<AlignJustify
					data-icon="menu"
					onclick={() => (isMenuOpen = true)}
					color="#616161"
					size={36}
					strokeWidth={1}
					style="cursor: pointer"
				/>
			</div>
		{:else}
			<div in:receive={{ key: 'menu-icon' }}>
				<X
					data-icon="X"
					onclick={() => (isMenuOpen = false)}
					color="#616161"
					size={36}
					strokeWidth={1}
					style="cursor: pointer"
				/>
			</div>
		{/if}
	</div>
</div>

{#if isMenuOpen}
	<div
		in:fade={{ duration: 100 }}
		class="fixed inset-0 z-20 flex flex-col bg-gray-300/50 p-8 backdrop-blur md:hidden"
	>
		<ul
			class="font-[Alegraya Sans] w-full space-y-6 text-center text-3xl font-light tracking-widest text-gray-700 lowercase"
		>
			<li>
				<a href="/" class="transition hover:text-black" onclick={() => (isMenuOpen = false)}>Home</a
				>
			</li>
			<li>
				<a href="/personal" class="transition hover:text-black" onclick={() => (isMenuOpen = false)}
					>personal</a
				>
			</li>
			<li>
				<a href="/projects" class="transition hover:text-black" onclick={() => (isMenuOpen = false)}
					>projects</a
				>
			</li>
			<li>
				<a href="/about" class="transition hover:text-black" onclick={() => (isMenuOpen = false)}
					>about</a
				>
			</li>
			<li>
				<a href="/contact" class="transition hover:text-black" onclick={() => (isMenuOpen = false)}
					>contact</a
				>
			</li>
		</ul>

		<div
			class="font-[Alegraya Sans] mt-auto mr-8 text-center font-light tracking-wider text-gray-700 lowercase"
		>
			<p class="mb-3">©2025 julianmosquera</p>
			<div class="flex justify-center space-x-6">
				<a href="https://www.instagram.com/miramiramemories/" class="transition hover:text-black"
					><Instagram class="h-6 w-5" /></a
				>
				<a href={'mailto:' + email} class="transition hover:text-black"><Mail class="h-6 w-5" /></a>
			</div>
		</div>
	</div>
{/if}

<nav class="sticky top-0 hidden h-screen w-80 flex-col bg-white p-8 text-gray-500 md:flex">
	<div class="flex flex-grow flex-col items-center justify-center space-y-10">
		<div>
			<a href="/">
				<img
					alt="julian mosquera"
					src={currentLogo}
					class="w-60"
					onmouseenter={() => (currentLogo = logo2)}
					onmouseleave={() => (currentLogo = logo1)}
				/>
			</a>
		</div>

		<ul class="font-[Alegraya Sans] space-y-3 font-light tracking-widest lowercase">
			<li><a href="/personal" class="transition hover:text-black">personal</a></li>
			<li><a href="/projects" class="transition hover:text-black">projects</a></li>
			<li><a href="/about" class="transition hover:text-black">about</a></li>
			<li><a href="/contact" class="transition hover:text-black">contact</a></li>
		</ul>
	</div>

	<div class="font-[Alegraya Sans] mt-auto mr-8 text-center font-light tracking-wider lowercase">
		<p class="mb-3">©2025 julianmosquera</p>
		<div class="flex justify-center space-x-5">
			<a href="https://www.instagram.com/miramiramemories/" class="transition hover:text-gray-800"
				><Instagram class="h-6 w-5" /></a
			>
			<a href={'mailto:' + email} class="transition hover:text-gray-800"><Mail class="h-6 w-5" /></a
			>
		</div>
	</div>
</nav>
