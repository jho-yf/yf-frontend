<template>
  <h1>Vue 3</h1>
  <Person ref="person"></Person>
  <br>
  <button @click="showPerson">点我输出Person元素</button>
</template>

<script lang="ts" setup name="App">
  import { ref } from 'vue';
  import Person from './components/Person.vue'

  let person = ref()

  function showPerson() {
    console.log(person.value)
    console.log(person.value.var1)
    console.log(person.value.var2)
  }
</script>

<style scoped>
</style>
