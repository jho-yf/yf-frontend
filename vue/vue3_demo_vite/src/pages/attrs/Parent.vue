<template>
  <div class="parent">
    <h3>父组件 attrs</h3>
    <h4>a: {{ a }}</h4>
    <h4>b: {{ b }}</h4>
    <h4>c: {{ c }}</h4>
    <h4>d: {{ d }}</h4>
    <Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100, y:200}" :updateB="updateB"></Child>
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child from './Child.vue'
  import { ref } from 'vue'

  let a = ref(0)
  let b = ref(1)
  let c = ref(2)
  let d = ref(3)

  function updateB() {
    b.value++
  }

</script>

<style scoped>
  .parent {
    background-color: rgb(113, 104, 196);
    padding: 10px;
  }
</style>
