<template>
  <div>
    <button @click="isShow = !isShow">{{isShow ? '隐藏' : '显示'}}</button>
    <transition-group 
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp" 
    >
      <h1 v-show="isShow" key="k1">My Component 3</h1>
      <h1 v-show="isShow" key="k2">My Component 3 Copy</h1>
    </transition-group>

    <h1 class="animate__animated animate__bounce">An animated element</h1>

  </div>
</template>

<script>
  import 'animate.css'
  export default {
    name: 'MyComponent3',
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

</style>
