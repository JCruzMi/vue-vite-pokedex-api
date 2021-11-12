<template>
  <h1>Pokedex</h1>
  <input type="text" v-model="filterText">
  <ul>
    <li v-for="(pokemon, index) in pokeStore.filteredList" 
      :key="`poke-${index}`"
    >
      #{{ pokemon.entry_number }} - {{ pokemon.pokemon_species.name }}
    </li>
  </ul>
</template>

<script setup>

import { onMounted, computed, reactive, ref } from 'vue'

const filterText = ref('')

const pokeStore = reactive({
  list: [],
  filteredList: computed(() => 
    pokeStore.list.filter(pokemon => 
      pokemon.pokemon_species.name.includes(filterText.value)
    )
  )
})


onMounted(async () => {
  const pokeData = await fetch('https:///pokeapi.co/api/v2/pokedex/2/').then(
    response => response.json()
  )
  pokeStore.list = pokeData.pokemon_entries
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
