<template>
  <div>
    <h2>当前求和： {{ countStore.sum }}</h2>
    <h2>当前求和： {{ sum }}</h2>
    <h2>当前求和的两倍： {{ double }}</h2>
    <select v-model.number="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
    </select>
    &nbsp;&nbsp;
    <button @click="add">+</button>
    &nbsp;&nbsp;
    <button @click="minus">-</button>
  </div>
</template>

<script setup lang="ts" name="Count">
    import { ref, toRefs } from 'vue'
    import { useCountStore } from '@/store/count'
    import { storeToRefs } from 'pinia';

    const countStore = useCountStore()
    // 以下两种方式都可以获取sum的值
    console.log(countStore.sum);
    console.log(countStore.$state.sum)

    let { sum, double } = storeToRefs(countStore)
    console.log(sum, double)
    
    let n = ref(1)

    function add() {
      // 修改方式一：直接修改
      // countStore.sum += n.value

      // 修改方式二：使用$patch，批量修改
      // countStore.$patch({
      //   sum: countStore.sum + n.value
      // })

      // 修改方式三：o调用actions
      countStore.increment(n.value)
    }

    function minus() {
      countStore.sum -= n.value
    }
</script>
