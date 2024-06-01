<template>
  <h2>Vue3组件通信</h2>
  <hr>
  <div class="left">
    <ul>
      <li v-for="menu in menuList">
        <RouterLink :to="menu.path" :key="menu.name">{{ menu.name }}</RouterLink>
      </li>
    </ul>
  </div>
  <div class="right">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup name="App">
  import { RouterLink, RouterView } from 'vue-router';
  import { reactive } from 'vue';

  let menuList = reactive([
    {name: 'props', path: '/props'},
    {name: '自定义事件', path: '/custom-event'},
    {name: 'mitt', path: '/mitt'},
    {name: 'v-model', path: '/v-model'},
    {name: 'attrs', path: '/attrs'},
    {name: '$ref $parent', path: '/$ref-$parent'},
    {name: 'provide-inject', path: '/provide-inject'},
    {name: 'pinia', path: '/pinia'},
    {name: 'slot', path: '/slot'}
  ]);
</script>

<style scoped>
  .app {
    width: 80%;
  }

  .left {
    width: 20%;
    float: left;
    height: 100%;
  }

  .right {
    width: 80%;
    float: right;
  }
</style>
