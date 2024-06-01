<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>a: {{ a }}</h4>
    <h4>attrs: {{ $attrs }}</h4>
    <GrandChild v-bind="$attrs" />
  </div>
</template>

<script setup>
  import GrandChild from './GrandChild.vue'

  defineProps(['a'])
</script>

<style scoped>
  .child {
    background-color: rgb(42, 201, 201);
    padding: 5px;
  }
</style>
