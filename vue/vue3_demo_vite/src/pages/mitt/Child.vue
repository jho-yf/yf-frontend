<template>
  <div class="child">
    <h3>子组件0</h3>
    <h4 v-if="toy">玩具: {{ toy }}</h4>
    <button @click="sendToy">将玩具给子组件1</button>
  </div>
</template>

<script setup lang="ts" name="Child">
  import { ref } from 'vue'
  import emitter from '@/utils/emitter'

  let toy = ref('小汽车')

  function sendToy() {
    emitter.emit('send-toy', toy.value);
    toy.value = ''
  }
  
</script>

<style scoped>
  .child {
    background-color: rgb(42, 201, 201);
    padding: 5px;
  }
</style>
