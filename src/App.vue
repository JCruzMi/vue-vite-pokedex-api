<template>
  <suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <div>
          <span class="text-primary font-semibold">Cargando informacion...</span>
        </div>
      </template>
    </suspense>
</template>

<script setup>

  import {provide , ref} from "vue";

  const list = ref([])

  provide("list", list);

</script>

<style>
::-webkit-scrollbar {display: none;}

body {
  background-color: #242424;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
