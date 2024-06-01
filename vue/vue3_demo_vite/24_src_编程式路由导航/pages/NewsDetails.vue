<template>
  <div>
    <p>编号：{{ id }}</p>
    <p>标题：{{ title }}</p>
    <p>内容：{{ content }}</p>
  </div>
</template>

<script setup lang="ts" name="NewsDetails">
  defineProps(['id', 'title', 'content'])
</script>
