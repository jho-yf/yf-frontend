<template>
  <div class="category">
    <h1>{{title}}</h1>
    <!-- 定义插槽 -->
    <slot><h1>默认插槽</h1></slot>
  </div>
</template>

<script>
    export default {
        name: 'Category',
        props: ['title']
    };
</script>

<style scoped>
    .category{
        background-color: red;
        width: 300px;
        height: 300px;
    }
</style>