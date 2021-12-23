<template>

            <div class="px-2 md:px-24 lg:px-64 pt-0 pb-2">
                <div class="pb-1 text-left">
                    <button class="text-primary font-semibold transform hover:-translate-y-1 transition-transform ease-in duration-150 focus:outline-none">
                        <span class="text-primary font-semibold" @click="$router.go(-1)">Go Back</span>
                    </button>
                <div class="flex flex-col lg:flex-row justify-center items-start w-full mx-auto my-4 rounded-lg shadow-lg" :style="{backgroundColor: pokemon.list.color.medium}">
                    <div class="w-full">
                        <div class="px-4 md:px-5 pt-5">
                            <h6 class="text-2xl text-white pb-0 text-left"># {{pokemon.list.id}}</h6>
                            <h1 class="text-2xl md:text-3xl lg:text-4xl text-white font-bold pb-0 capitalize text-left">{{pokemon.list.name}}</h1>
                        </div>
                        <div class="relative text-center mx-auto w-full h-96 mt-8 lg:mt-24">
                            <div class="rounded-full absolute inset-x-auto mx-auto z-0 inline-block left-0 right-0" style="width: 350px; height: 350px; bottom: 55px;" :style="{backgroundColor: pokemon.list.color.light}"></div>
                                <div style="width: 325px; height: 325px; display: block; left: 0px; right: 0px; bottom: 50px; margin: auto; position: absolute;">
                                    <img :src="pokemon.list.img" :alt="pokemon.list.name" style="filter: blur(0px); transition: filter 500ms ease 0s;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row pb-5 gap-5">
                    <span class="flex flex-col mx-auto w-full text-center py-4 rounded-lg font-bold text-lg shadow-lg"
                        v-for="type in pokemon.list.types" :key="type"
                        :style="{backgroundColor: type.value.light}">
                        {{type["key"]}}
                    </span>
                </div>
                <div class="flex flex-col lg:flex-row justify-center items-start w-full mx-auto my-0 rounded-lg shadow-lg py-7" style="backgroundColor: #292929">
                    <div class="flex flex-col mx-auto w-full text-center" 
                        v-for="stat in pokemon.list.stats" :key="stat">
                        <span class="text-primary font-semibold">{{stat.key}}</span>
                        <span class="text-primary pt-3">{{stat.value}}</span>
                    </div>
                </div>
            </div>
  

</template>

<script setup>
    import { onMounted, computed, reactive, watchEffect } from "vue";

    
    import { useRoute } from 'vue-router'

    const route = useRoute()

    const pokemon = reactive({
        list: []
    });

    watchEffect(async () => {
        const poke = await fetch("/.netlify/functions/pokemon/",{
            method: 'POST',
            body: JSON.stringify({id: route.params.id}),
        }).then((response) =>
            response.json()
    );

        pokemon.list = poke;
    });





</script>

<style>

</style>