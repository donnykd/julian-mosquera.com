<script>
    import logo1 from '$lib/assets/jul (1).png'
    import logo2 from '$lib/assets/jul (2).png'
    let currentLogo = $state(logo1)
</script>

<nav class="w-80 bg-white text-gray-500 p-8 flex flex-col">
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

    <div class="font-[Alegraya Sans] font-light lowercase tracking-wider text-center mt-auto">
        <p>©2025 julian mosquera</p>
    </div>
</nav>
