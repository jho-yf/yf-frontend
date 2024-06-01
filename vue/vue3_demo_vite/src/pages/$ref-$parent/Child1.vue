<template>
  <div class="child">
    <h3>子组件1</h3>
    <h4>电脑: {{ computer }}</h4>
    <h4>书籍: {{ book }}本</h4>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  let computer = ref('外星人');
  let book = ref(9);

  defineExpose({
    computer,
    book
  });
</script>

<style scoped>
  .child {
    background-color: rgb(148, 41, 59);
    padding: 5px;
  }
</style>
