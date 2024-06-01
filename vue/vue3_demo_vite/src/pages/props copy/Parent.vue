<template>
  <div class="parent">
    <h3>父组件</h3>
    <Child></Child>
  </div>
</template>

<script setup lang="ts" name="Parent">
  import Child from './Child.vue';

</script>

<style scoped>
  .parent {
    background-color: rgb(113, 104, 196);
    padding: 10px;
  }
</style>
