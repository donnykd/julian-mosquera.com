<script>
    import logo1 from '$lib/assets/jul (1).png';
    import logo2 from '$lib/assets/jul (2).png';
    import { Instagram, Mail } from '@lucide/svelte';
    let currentLogo = $state(logo1);
    const email = "Juliantmosquera@gmail.com"
</script>

<nav class="sticky top-0 w-80 h-screen bg-white text-gray-500 p-8 flex flex-col">
    <div class="flex flex-col justify-center items-center flex-grow space-y-10">
        <div>
            <a href="/">
                <img alt="julian mosquera"
                src={currentLogo} 
                class="w-60"
                onmouseenter={() => currentLogo = logo2}
                onmouseleave={() => currentLogo = logo1}/>
            </a>
        </div>

        <ul class="font-[Alegraya Sans] font-light lowercase tracking-widest space-y-3">
            <li><a href="/personal" class="hover:text-black transition">personal</a></li>
            <li><a href="/projects" class="hover:text-black transition">projects</a></li>
            <li><a href="/about" class="hover:text-black transition">about</a></li>
            <li><a href="/contact" class="hover:text-black transition">contact</a></li>
        </ul>
    </div>

    <div class="font-[Alegraya Sans] font-light lowercase tracking-wider text-center mt-auto mr-8">
        <p class="mb-3">©2025 julianmosquera</p>
        <div class="flex justify-center space-x-5">
            <a href="https://www.instagram.com/miramiramemories/"><Instagram class="w-5 h-6"/></a>
            <a href={"mailto:" + email}><Mail class="w-5 h-6"/></a>
        </div>
    </div>
</nav>
