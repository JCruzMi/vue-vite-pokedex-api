<template>

    <div class="px-2 md:px-24 lg:px-64 pt-24"><div class="pb-8">
        <p>{{pokemon.value}}</p>
        <button class="text-primary font-semibold transform hover:-translate-y-1 transition-transform ease-in duration-150 focus:outline-none">
            <span class="text-primary font-semibold">Go Back</span>
        </button>
    <div class="flex flex-col lg:flex-row justify-center items-start w-full mx-auto my-4 rounded-lg shadow-lg" :style="{backgroundColor: pokemon.value.color.medium}">
        <div class="w-full">
            <div class="px-4 md:px-8">
                <p class="text-md mt-4 text-white font-medium">#{{pokemon.value.id}}</p>
                <h1 class="text-2xl md:text-3xl lg:text-4xl text-white font-bold pb-6 capitalize">{{pokemon.value.name}}</h1>
            </div>
            <div class="relative text-center mx-auto w-full h-96 mt-8 lg:mt-24">
                <div class="rounded-full absolute inset-x-auto mx-auto z-0 inline-block left-0 right-0" style="width: 350px; height: 350px; bottom: 55px;" :style="{backgroundColor: pokemon.value.color.light}"></div>
                    <div style="width: 325px; height: 325px; display: block; left: 0px; right: 0px; bottom: 5px; margin: auto; position: absolute; transform: translate3d(9.15px, -2.15px, 0px);">
                        <img :src="pokemon.value.img" :alt="pokemon.value.name" style="filter: blur(0px); transition: filter 500ms ease 0s;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script setup>

    import { onMounted, defineProps, ref, watchEffect } from "vue";

    
    const props = defineProps({
        id: {
            type: String,
            required: true,
        }
    })

    const pokemon = ref(null);

    onMounted(async () => {
        const poke = await fetch("/.netlify/functions/pokemon/",{
            method: 'POST',
            body: JSON.stringify({id: props.id}),
        }).then((response) =>
            response.json()
    );

        pokemon.value = poke;
        console.log(pokemon.value.color)
    });

    

</script>

<style>

</style>