<template>
  <h1>Vue 3</h1>
  <Person></Person>
</template>

<script lang="ts">
  import Person from './components/Person.vue'

  export default {
    name: 'App',
    components: { Person }
  }
</script>

<style scoped>
</style>
