<template>
  <div class="parent">
    <h3>父组件 props</h3>
    <h4>汽车：{{ car }}</h4>
    <h4 v-if="toy">子组件给的toy：{{ toy }}</h4>
    <Child :car="car" :sendToy="getToy"></Child>
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child from './Child.vue';
  import { ref } from 'vue';

  let car = ref('奔驰');
  let toy = ref('')

  function getToy(value:string) {
    toy.value = value
  }
</script>

<style scoped>
  .parent {
    background-color: rgb(113, 104, 196);
    padding: 10px;
  }
</style>
