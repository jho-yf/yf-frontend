<template>
  <h2>About 内容</h2>
</template>

<script>
    export default {
        name: 'About',
        mounted() {
          console.log('About组件挂载后执行')
        },
        beforeDestroy() {
          console.log('About组件销毁前执行')
        },
    };
</script>