<template>
  <div>
    <button @click="isShow = !isShow">{{isShow ? '隐藏' : '显示'}}</button>
    <transition-group name="t1" appear>
      <h1 v-show="isShow" key="k1">My Component 2</h1>
      <h1 v-show="!isShow" key="k2">My Component 2 Copy</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'MyComponent2',
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
    h1 {
        background-color: aquamarine;
    }

    .t1-enter-active, .t1-leave-active {
      transition: 0.5s linear;
    }

    /* 进入的起点、离开的终点 */
    .t1-enter, .t1-leave-to {
      transform: translateX(-100%);
    }

    /* 进入的终点、离开的起点 */
    .t1-enter-to, .t1-leave {
      transform: translateX(0);
    }

</style>
