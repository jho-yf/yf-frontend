<template>
  <h1>Vue 3</h1>
  <Person :list="personList" />
</template>

<script lang="ts" setup name="App">
  import { reactive } from 'vue'
  import { type Persons } from './types'
  import Person from './components/Person.vue'

  let personList = reactive<Persons>([
        { id: '1', name: '张三', age: 18 },
        { id: '2', name: '李四', age: 19 },
        { id: '3', name: '王五', age: 20 },
    ])
</script>

<style scoped>
</style>
