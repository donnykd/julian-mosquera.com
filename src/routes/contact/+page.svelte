<script>
    import { fade } from 'svelte/transition';
    const email = "Juliantmosquera@gmail.com"
</script>

<div in:fade class="flex flex-col justify-center items-center w-full min-h-screen
            font-[Alegraya Sans] font-mono lowercase tracking-wider text-center text-gray-700">
    
    <p>
        Email: 
        <a class="hover:underline transition" href={"mailto:" + email}>{email}</a>
    </p>
</div>