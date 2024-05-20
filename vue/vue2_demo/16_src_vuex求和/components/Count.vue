<template>
  <div>
    <h1>总数：{{ $store.state.count }}</h1>
    <select v-model="numToAdd">
      <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
    </select>
    <br>
    <button @click="incr">+</button>&nbsp;&nbsp;
    <button @click="decr">-</button>&nbsp;&nbsp;
    <button @click="incrOdd">奇数时+</button>&nbsp;&nbsp;
    <button @click="incrWait">等1秒再+</button>&nbsp;&nbsp;
  </div>
</template>

<script>
    export default {
        name: 'Count',
        data() {
          return {
            numToAdd: 1
          }
        },
        methods: {
          incr() {
            console.log(this.$store)
            this.$store.commit('INCR', this.numToAdd);
          },
          decr() {
            this.$store.commit('DECR', this.numToAdd);
          },
          incrOdd() {
            this.$store.dispatch('incrOdd', this.numToAdd);
          },
          incrWait() {
            this.$store.dispatch('incrWait', this.numToAdd);
          }
        },
    };
</script>

<style scoped>
</style>