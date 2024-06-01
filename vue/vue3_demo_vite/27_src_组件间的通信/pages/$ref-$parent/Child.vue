<template>
  <div class="child">
    <h3>子组件0</h3>
    <h4>玩具: {{ toy }}</h4>
    <h4>书籍: {{ book }}本</h4>
    <h4>房产: {{ house }}套</h4>
    <button @click="getParentHouse($parent)">获取父组件的一套房</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  let toy = ref('小玩具');
  let book = ref(6);
  let house = ref(0);

  function getParentHouse(parent) {
    console.log(parent)
    parent.house -= 1
    house.value += 1
  }

  // 暴露数据
  defineExpose({ toy, book })
</script>

<style scoped>
  .child {
    background-color: rgb(42, 201, 201);
    padding: 5px;
  }
</style>
