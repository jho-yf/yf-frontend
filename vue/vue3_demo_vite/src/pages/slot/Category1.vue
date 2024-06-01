<template>
    <div class="category">
        <slot name="title-slot">标题默认内容</slot>
        <slot name="content-slot">正文默认内容</slot>
    </div>
</template>

<script setup name="Category1">
</script>

<style scoped>
    .category {
        background-color: skyblue;
        border-radius: 5px;
        box-shadow: 0 0 10px;
        padding: 10px;
        width: 200px;
        height: 300px;
    }
    .category h2 {
        background-color: orange;
        text-align: center;
        font-size: 18px;
        font-weight: 800;
    }
</style>
  