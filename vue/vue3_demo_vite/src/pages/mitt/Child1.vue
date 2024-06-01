<template>
  <div class="child">
    <h3>子组件1</h3>
    <h4>电脑: {{ computer }}</h4>
    <h4 v-if="toy">玩具: {{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child1">
  import { ref } from 'vue'
  import emitter from '@/utils/emitter'

  let computer = ref('外星人')
  let toy = ref('')
  
  // 绑定事件
  emitter.on('send-toy', (data: string) => {
    console.log('子组件1接收到玩具:', data)
    toy.value = data
    emitter.off('send-toy')
  })
</script>

<style scoped>
  .child {
    background-color: rgb(42, 201, 201);
    padding: 5px;
  }
</style>
