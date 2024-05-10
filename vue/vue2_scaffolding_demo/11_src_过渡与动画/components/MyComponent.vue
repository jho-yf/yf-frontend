<template>
  <div>
    <button @click="isShow = !isShow">{{isShow ? '隐藏' : '显示'}}</button>
    <transition name="t1" appear>
      <h1 v-show="isShow">My Component 1</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
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

    .t1-enter-active {
      animation: myMove 0.5s linear;
    }

    .t1-leave-active {
      animation: myMove 0.5s linear reverse;
    }

    @keyframes myMove {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0px);
      }
    }
</style>
