<template>
  <h1>toRaw</h1>
  <!--  -->
  <h2>响应式数据</h2>
  <h3>姓名: {{ person.name }}</h3>
  <h3>年龄: {{ person.age }}</h3>
  <button @click="person.age++">年龄+1</button>
  <!--  -->
  <h2>原始数据</h2>
  <h3>姓名: {{ personRaw.name }}</h3>
  <h3>年龄: {{ personRaw.age }}</h3>
  <button @click="updateRaw">年龄+1</button>
  <hr>

  <h1>markRaw</h1>
  <h2>{{ car1 }}</h2>
  <button @click="car1.price++">点我价格+1</button>
  
</template>

<script lang="ts" setup name="App">
  import { markRaw, reactive, toRaw } from 'vue';

  let person = reactive({
    name: '张三',
    age: 18,
  })
  console.log('响应式数据', person)

  // 将响应式的数据转成原始
  let personRaw = toRaw(person)
  console.log('原始数据', personRaw)

  function updateRaw() {
    personRaw.age++
    console.log('原始数据', personRaw)
  }

  // markRaw
  // 标记一个对象,使其永远不会成为响应式对象
  let car = markRaw({
    name: 'BMW',
    price: 100000,
  })
  // 即使car1使用了reactive,car1仍然是非响应式的
  let car1 = reactive(car)
  console.log('car', car)
  console.log('car1', car1)


</script>

<style scoped>
</style>
