<template>
  <h1>customRef</h1>
  <h2>{{ msg }}</h2>
  <input type="text" v-model="msg">
</template>

<script lang="ts" setup name="App">
  import useMsgRef from './useMsgRef';

  let { msg } = useMsgRef('hello', 1000);
  
</script>
<style scoped>
</style>
