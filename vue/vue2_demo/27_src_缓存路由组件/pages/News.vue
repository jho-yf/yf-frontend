<template>
  <ul>
    <li>news 001</li>
    <li>news 002</li>
    <li>news 003</li>
  </ul>
</template>

<script>
  export default {
      name: 'News',
      mounted() {
        console.log('News组件挂载后执行')
      },
      beforeDestroy() {
        console.log('News组件销毁前执行')
      },
  };
</script>