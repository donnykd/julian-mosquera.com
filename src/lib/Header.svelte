<script>
    import logo1 from '$lib/assets/jul (1).png'
    import logo2 from '$lib/assets/jul (2).png'
    let currentLogo = $state(logo1)
</script>

<nav class="w-80 bg-white text-gray-600 p-8 flex flex-col justify-between justify-center items-center">
    <div>
        <a href="/">
            <img alt="julian mosquera"
            src={currentLogo} 
            class="w-60"
            onmouseenter={() => currentLogo = logo2}
            onmouseleave={() => currentLogo = logo1}/>
        </a>
    </div>
</nav>