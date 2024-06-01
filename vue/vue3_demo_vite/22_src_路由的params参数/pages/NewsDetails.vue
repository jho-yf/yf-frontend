<template>
  <div>
    <p>编号：{{ params.id }}</p>
    <p>标题：{{ params.title }}</p>
    <p>内容：{{ params.content }}</p>
  </div>
</template>

<script setup lang="ts" name="NewsDetails">
  import { useRoute } from 'vue-router';
  import { toRefs } from 'vue';

  const route = useRoute()
  console.log('route', route)

  let { params } = toRefs(route)
  console.log('params', params)
</script>
