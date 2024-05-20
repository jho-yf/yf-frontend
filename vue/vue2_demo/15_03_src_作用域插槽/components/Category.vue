<template>
  <div class="category">
    <h1>{{title}}</h1>
    <slot :games="games">默认插槽内容</slot>
  </div>
</template>

<script>
    export default {
        name: 'Category',
        props: ['title'],
        data() {
          return {
            games: ["刀塔", "英雄联盟", "守望先锋", "王者荣耀"]
          }
        }
    };
</script>

<style scoped>
    .category{
        background-color: blueviolet;
        width: 300px;
        height: 300px;
    }
</style>