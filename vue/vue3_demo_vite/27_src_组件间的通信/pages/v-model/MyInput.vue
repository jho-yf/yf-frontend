<template>
  <!-- 
    对于原生事件,$event就是事件对象
    对于自定义事件,$event就是触发事件时传递的数据
   -->

  <input 
    type="text" 
    :value="username"
    @input="emit('update:username', $event.target.value)"
    >
  &nbsp;
  <input 
    type="text" 
    :value="password"
    @input="emit('update:password', $event.target.value)"
    >
</template>

<script setup lang="ts" name="MyInput">
  defineProps(['username', 'password'])
  const emit = defineEmits(['update:username', 'update:password'])
</script>

<style scoped>
  input {
    border: 2px solid #ccc;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>
