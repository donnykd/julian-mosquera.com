<script>
	import { fade } from 'svelte/transition';
	const email = 'Juliantmosquera@gmail.com';
</script>

<div
	in:fade
	class="font-[Alegraya Sans] flex min-h-screen w-full flex-col
            items-center justify-center text-center font-mono tracking-wider text-gray-700 lowercase"
>
	<p>
		Email:
		<a class="transition hover:underline" href={'mailto:' + email}>{email}</a>
	</p>
</div>
