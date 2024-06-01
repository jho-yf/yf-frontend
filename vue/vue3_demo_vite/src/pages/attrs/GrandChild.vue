<template>
    <div class="grandchild">
      <h3>孙组件</h3>
      <h4>b: {{ b }}</h4>
      <h4>attrs: {{ $attrs }}</h4>
      <button @click="updateB">更新父组件的b变量</button>
    </div>
  </template>
  
  <script setup>
    defineProps(['b', 'updateB'])
  </script>
  
  <style scoped>
    .grandchild {
      background-color: rgb(201, 42, 90);
      padding: 5px;
    }
  </style>
  