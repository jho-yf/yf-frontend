<template>
  <div class="child">
    <h3>子组件 props</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>父组件传递的车：{{ car }}</h4>
    <button @click="sendToy(toy)">把玩具发送给父组件</button>
  </div>
</template>

<script setup>
  import {ref} from 'vue'

  let toy = ref('奥特曼')

  // 父组件传递过来的属性
  let props = defineProps(['car', 'sendToy'])
  console.log(props)
</script>

<style scoped>
  .child {
    background-color: rgb(42, 201, 201);
    padding: 5px;
  }
</style>
