<template>
  <h1>Vue 3</h1>
  <Person v-if="isShow" />
  <br>
  <button @click="isShow = !isShow">Toggle</button>
</template>

<script lang="ts" setup name="App">
  import { ref } from 'vue';
import Person from './components/Person.vue'

  let isShow = ref(true)
 
</script>

<style scoped>
</style>
