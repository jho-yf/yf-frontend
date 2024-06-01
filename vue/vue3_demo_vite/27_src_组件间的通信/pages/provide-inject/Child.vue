<template>
  <div class="child">
    <h3>子组件</h3>
    <GrandChild />
  </div>
</template>

<script setup>
  import GrandChild from './GrandChild.vue';

</script>

<style scoped>
  .child {
    background-color: rgb(42, 201, 201);
    padding: 5px;
  }
</style>
