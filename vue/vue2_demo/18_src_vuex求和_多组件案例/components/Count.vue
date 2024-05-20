<template>
  <div>
    <h1>总数：{{ $store.state.count }}</h1>
    <h1>总数 * 10：{{ bigSum }}</h1>
    <h1>{{ myHello }}{{ info }}</h1>
    <h1>Person组件总人数: {{ persons.length }}</h1>
    <select v-model="numToAdd">
      <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
    </select>
    <br>
    <button @click="incr">+</button>&nbsp;&nbsp;
    <button @click="decr(numToAdd)">-</button>&nbsp;&nbsp;
    <button @click="incrOdd">奇数时+</button>&nbsp;&nbsp;
    <button @click="incrWait(numToAdd)">等1秒再+</button>&nbsp;&nbsp;
  </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
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
          // 借用mapMutations映射对应的方法，方法中会调用commit去调用mutations中的方法
          ...mapMutations({'decr': 'DECR'}),
          incrOdd() {
            this.$store.dispatch('incrOdd', this.numToAdd);
          },
          ...mapActions(['incrWait'])
        },
        computed: {
          bigSum() {
            return this.$store.getters.bigSum
          },
          // 对象写法
          ...mapState({myHello: 'hello', persons: 'persons'}),
          // 数组写法
          ...mapGetters(['info'])
        }
    };
</script>

<style scoped>
</style>