<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>职位：{{ person.job.type }}</h2>
  <h2>工资：{{ person.job.salary }}</h2>
  <h2>测试数据： {{ person.school.a.b.c }}</h2>
  <h2>兴趣爱好：{{ hobby }}</h2>
  <button @click="changeInfo">修改信息</button>
  &nbsp;
  <button @click="addSex">添加sex属性</button>
  &nbsp;
  <button @click="removeSex">删除sex属性</button>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    name: 'App',
    setup() {
      let person = reactive({
        name: 'jho',
        age: 18,
        job: {
          type: '码农',
          salary: 100000000
        },
        school: {
          name: '北京大学',
          address: '北京',
          a: {
            b: {
              c: 1
            }
          }
        },
        hobby: ['打篮球', '打羽毛球']
      })

      function changeInfo() {
        person.name = '乙方小弟'
        person.age = 19
        // job.value = {
        //   type: 'CEO',
        //   salary: 200000000
        // }
        person.job.type = 'CEO'
        person.job.salary = 200000000

        person.school.a.b.c = 100
        person.hobby[0] = '打足球'

        console.log(person)
      }

      function addSex() {
        person.sex = '男'
      }

      function removeSex() {
        delete person.sex
      }

      return {
        person,
        hobby: ref(person.hobby),
        changeInfo,
        addSex,
        removeSex
      }
    }
  }
</script>

<style>

</style>
