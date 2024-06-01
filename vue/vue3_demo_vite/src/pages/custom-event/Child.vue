<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  let toy = ref('小汽车');

  // 声明事件
  const emit = defineEmits(['sendToy'])

  onMounted(() => {
    setTimeout(() => {
      // 触发事件
      emit('sendToy', toy.value, 1000)
    }, 3000)
  })
</script>

<style scoped>
  .child {
    background-color: rgb(42, 201, 201);
    padding: 5px;
  }
</style>
