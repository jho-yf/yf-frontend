<template>
  <div class="parent">
    <h3>父组件 自定义事件</h3>
    <h4 v-if="toy">子组件给的toy：{{ toy }}</h4>
    <Child @send-toy="onToySend"></Child>
  </div>
</template>

<script setup lang="ts" name="Parent">
  import { ref } from 'vue';
import Child from './Child.vue';

  let toy = ref('')
  function onToySend(value: string, num: number) {
    console.log('父组件接收到子组件传来的值：', value, num)
    toy.value = value
  }
</script>

<style scoped>
  .parent {
    background-color: rgb(113, 104, 196);
    padding: 10px;
  }
</style>
