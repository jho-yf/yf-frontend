<template>
  <ul class="todo-main">
    <MyItem 
      v-for="item in todoList" 
      :key="item.id" 
      :todo="item" />
  </ul>
</template>

<script>
import MyItem from './MyItem.vue';

export default {
  name: 'MyList',
  props: ['todoList'],
  components: {MyItem},
};
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
