<template>
  <div class="parent">
    <h3>父组件 mitt</h3>
    <Child></Child>
    <Child1></Child1>
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child from './Child.vue';
  import Child1 from './Child1.vue';

</script>

<style scoped>
  .parent {
    background-color: rgb(113, 104, 196);
    padding: 10px;
  }
</style>
