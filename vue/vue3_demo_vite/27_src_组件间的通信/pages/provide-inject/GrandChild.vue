<template>
    <div class="grandchild">
      <h3>孙组件</h3>
      <h4>账户: {{ money }}w</h4>
      <h4>车子: {{ car }}</h4>
      <h4>房产: {{ house }}套</h4>
      <button @click="updateMoney">调用父组件+1w方法</button>
    </div>
  </template>
  
  <script setup>
    import { inject } from 'vue'

    let {money, updateMoney} = inject('moneyContext')
    let car = inject('car')
    // 注入并设置默认值
    let house = inject('house', 1)
  </script>
  
  <style scoped>
    .grandchild {
      background-color: rgb(201, 42, 135);
      padding: 5px;
    }
  </style>
  