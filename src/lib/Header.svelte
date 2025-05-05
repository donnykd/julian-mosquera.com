<script>
    import logo1 from '$lib/assets/jul (1).png'
    import logo2 from '$lib/assets/jul (2).png'
    let currentLogo = $state(logo1)
</script>

<nav class="w-80 bg-white text-gray-400 p-8 flex flex-col justify-between justify-center items-center space-y-10">
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
</nav>
