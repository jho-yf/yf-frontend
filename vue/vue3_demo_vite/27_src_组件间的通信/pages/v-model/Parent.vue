<template>
  <div class="parent">
    <h3>父组件 v-model</h3>
    v-model在html标签上: <input type="text" v-model="username" />
    <br>
    v-model原理: <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value" />
    <br>
    v-model用于组件标签上: 
    <MyInput v-model:username="username" v-model:password="password" /> 
  </div>
</template>

<script setup lang="ts" name="Parent">
  import MyInput from './MyInput.vue';
  import { ref } from 'vue';

  let username = ref('zhangsan');
  let password = ref('123456');
</script>

<style scoped>
  .parent {
    background-color: rgb(113, 104, 196);
    padding: 10px;
  }
</style>
