<template>
  <ul class="todo-main">
    <transition-group name="todo">
      <MyItem 
        v-for="item in todoList" 
        :key="item.id" 
        :todo="item" />
    </transition-group>
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

  .todo-enter-active {
    animation: myMove 0.5s linear;
  }

  .todo-leave-active {
    animation: myMove 0.5s linear reverse;
  }

  @keyframes myMove {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0px);
      }
    }
</style>
