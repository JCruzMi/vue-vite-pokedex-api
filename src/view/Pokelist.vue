<template>
      <div style="opacity: 1; width: 100%; position: absolute">
        <div class="px-2 md:px-24 lg:px-64 pt-1">
          <div class="flex items-center justify-between ">
            <h1
              class="text-3xl lg:text-5xl font-semibold sm:text-left inline-block"
            >
              Vue Pokédex
            </h1>
            <a
              href="https://github.com/JCruzMi/vue-vite-pokedex-api"
              target="_blank"
              rel="noopener noreferrer"
              class="
                inline-block
                ml-4
                transform
                hover:opacity-50 hover:-translate-y-1
                transition-all
                duration-150
              "
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                size="32"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                ></path></svg
            ></a>
          </div>
          <div class="my-4 md:my-6 lg:my-8 w-full">
            <div
              class="flex items-center justify-center md:justify-start flex-wrap"
            >
              <div class="relative inline-flex">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2"
                  ><div
                    class="
                      absolute
                      flex
                      items-center
                      justify-center
                      pointer-events-none
                    "
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      color="#8A8A8A"
                      height="1em"
                      width="1em"
                      style="color: rgb(138, 138, 138)"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
                      ></path>
                    </svg></div></span>
                <input
                  style="color: rgb(248, 88, 136)"
                  class="
                    py-2
                    pl-10
                    md:pr-24
                    lg:pr-48
                    w-full
                    text-sm
                    rounded-lg
                    bg-primaryGray
                    text-tertiaryGray
                    placeholder-tertiaryGray
                    appearance-none
                    focus:outline-none focus:font-medium focus:border-secondaryGray
                  "
                  placeholder="Search for a pokémon..."
                  v-model="filterText"
                />
              </div>          
            </div>
          </div>
            <div class="mx-auto w-full text-center pb-5">
              <div
                class="
                  w-full
                  mx-auto
                  grid grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-3
                  gap-x-8
                  lg:gap-x-5
                  gap-y-6
                "
              >
                <PokemonCard
                  v-for="(pokemon, index) in pokeStore.filteredList"
                  :key="`poke-${index}`"
                  :name="pokemon.name"
                  :number="pokemon.id"
                  :img="pokemon.img"
                  :medium="pokemon.color.medium"
                  :light="pokemon.color.light"
                  :types="pokemon.types"
                />
                
              </div>
          </div>
        </div>
      </div>
 
</template>

<script setup>
import { watchEffect, computed, reactive, ref, inject } from "vue";

import PokemonCard from "../components/PokemonCard.vue";

const filterText = ref("");

const list = inject("list")

const pokeStore = reactive({
  list: list,
  filteredList: computed(() =>
    pokeStore.list.filter((pokemon) => pokemon.name.includes(filterText.value))
  ),
});

watchEffect(async () => {
  //898
  if (pokeStore.list.length <= 0){
    for (let i = 1; i<= 151; i++){
      let pokeData = await fetch("/.netlify/functions/pokemon/",{
          method: 'POST',
          body: JSON.stringify({id: i}),
      }).then((response) =>
          response.json()
      );
      pokeStore.list.push(pokeData);
    }
  }
});
</script>

<style>

</style>
