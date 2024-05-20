<template>
  <ul>
    <li :style="{opacity}">Hello Vue</li>
    <li>news 001</li>
    <li>news 002</li>
    <li>news 003</li>
  </ul>
</template>

<script>
  export default {
      name: 'News',
      data() {
        return {
          opacity: 1
        }
      },
      mounted() {
        console.log('News组件挂载后执行')
      },
      beforeDestroy() {
        console.log('News组件销毁前执行')
      },
      activated() {
        console.log('News组件激活时执行')
        this.timer = setInterval(() => {
          this.opacity -= 0.01
          if (this.opacity <= 0) {
            this.opacity = 1
          }
        }, 16)
      },
      deactivated() {
        console.log('News组件失活时执行')
        clearInterval(this.timer)
      },
      // 通过路由规则，进入该组件时被调用
      beforeRouteEnter (to, from, next) {
        console.log('beforeRouteEnter...')
        next()
      },
      // 通过路由规则，离开该组件时被调用
      beforeRouteLeave (to, from, next) {
        console.log('beforeRouteLeave...')
        next()
      }
  };
</script>