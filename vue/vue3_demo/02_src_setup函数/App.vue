<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHelloVue3">say hello vue3</button>
  &nbsp;
  <button @click="sayHelloVue2">say hello vue2</button>
</template>

<script>

export default {
  name: 'App',
  setup() {
    let name = 'jho'
    let age = 18

    function sayHelloVue3() {
      alert('hello vue3')
    }

    // 返回一个对象，对象中的属性、方法都可以在模板中使用
    return {
      name,
      age,
      sayHelloVue3
    }

    // 返回一个渲染函数
    // return () => h('h1', 'hello vue')
  },
  data() {
    return {
      sex: 'male'
    }
  },
  methods: {
    sayHelloVue2() {
      alert('hello vue2')
    }
  }
}
</script>

<style>

</style>
