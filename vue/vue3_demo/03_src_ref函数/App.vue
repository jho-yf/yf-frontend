<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>职位：{{ job.type }}</h2>
  <h2>工资：{{ job.salary }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'App',
    setup() {
      let name = ref('jho')
      let age = ref(18)
      let job = ref({
        type: '码农',
        salary: 100000000
      })

      function changeInfo() {
        name.value = '乙方小弟'
        age.value = 19
        // job.value = {
        //   type: 'CEO',
        //   salary: 200000000
        // }
        job.value.type = 'CEO'
        job.value.salary = 200000000
      }

      return {
        name,
        age,
        job,
        changeInfo
      }
    }
  }
</script>

<style>

</style>
