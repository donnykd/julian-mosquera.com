<script>
  export let data
  
  const image = data.images[0]
</script>

<div class="flex flex-col space-y-8 justify-center items-center w-full min-h-screen p-4 pt-15">
    <div class="bg-black w-full max-w-6xl h-72 rounded-2xl overflow-hidden shadow-lg flex">
        <div class="">
            <img
                src={image.url}
                alt="project"
                class="h-72"
            />
        </div>
    </div>
    <div class="bg-black w-full max-w-6xl h-72 rounded-2xl overflow-hidden shadow-lg flex">
        <div class="">
            <img
                src={image.url}
                alt="project"
                class="h-72"
            />
        </div>
    </div>
    <div class="bg-black w-full max-w-6xl h-72 rounded-2xl overflow-hidden shadow-lg flex">
        <div class="">
            <img
                src={image.url}
                alt="project"
                class="h-72"
            />
        </div>
    </div>
    <div class="bg-black w-full max-w-6xl h-72 rounded-2xl overflow-hidden shadow-lg flex">
        <div class="">
            <img
                src={image.url}
                alt="project"
                class="h-72"
            />
        </div>
    </div>
</div>