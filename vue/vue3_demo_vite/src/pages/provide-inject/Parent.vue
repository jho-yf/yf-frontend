<template>
  <div class="parent">
    <h3>父组件 provide-inject</h3>
    <h4>账户: {{ money }}w</h4>
    <h4>车子: {{ car }}</h4>
    <button @click="updateMoney">+1w</button>
    <br><br>
    <Child></Child>
  </div>
</template>

<script setup lang="ts" name="Parent">
  import { provide, reactive, ref } from 'vue';
  import Child from './Child.vue';

  let money = ref(1000);
  let car = reactive({
    brand: 'BMW',
    price: 1000000
  })

  function updateMoney() {
    money.value++;
  }

  // 向后代组建提供数据
  provide('moneyContext', {money, updateMoney});
  provide('car', car);

</script>

<style scoped>
  .parent {
    background-color: rgb(113, 104, 196);
    padding: 10px;
  }
</style>
