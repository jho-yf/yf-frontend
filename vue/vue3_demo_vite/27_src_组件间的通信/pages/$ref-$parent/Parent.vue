<template>
  <div class="parent">
    <h3>父组件 $ref $parent</h3>
    <h4>房产: {{ house }}套</h4>
    <button @click="changeC0Toy">修改子组件0的玩具</button>&nbsp;
    <button @click="changeC1Computer">修改子组件1的电脑</button>&nbsp;
    <button @click="getChildren($event, $refs)">所有子组件的书籍+1</button>
    <br><br>
    <Child ref="c0"></Child>
    <Child1 ref="c1"></Child1>
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child from './Child.vue'
  import Child1 from './Child1.vue'
  import { ref } from 'vue'

  let house = ref(4);

  let c0 = ref();
  let c1 = ref();

  function changeC0Toy() {
    console.log(c0);
    c0.value.toy = '小球';
  }

  function changeC1Computer() {
    console.log(c1);
    c1.value.computer = '联想';
  }

  function getChildren(event:object, refs:{[key:string]:any}) {
    console.log('$event', event);
    console.log('$refs', refs)
    for (let key in refs) {
      console.log(key, refs[key])
      refs[key].book += 1;
    }
  }

  defineExpose({
    house
  })

</script>

<style scoped>
  .parent {
    background-color: rgb(113, 104, 196);
    padding: 10px;
  }
</style>
