<template>
    <h1>情况三：监视reactive定义的对象类型数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    &nbsp;
    <button @click="changeAge">修改年龄</button>
    &nbsp;
    <button @click="changePerson">修改所有</button>
</template>

<script lang="ts" setup name="Person">
    import { reactive, watch } from 'vue'

    let person = reactive({
        name: 'zhangsan',
        age: 18
    })

    function changeName() {
        person.name += 1
    }

    function changeAge() {
        person.age++
    }

    function changePerson() {
        Object.assign(person, {
            name: 'lisi',
            age: 20
        })
    }

    // 监视reactive对象默认开启深度监视
    // newValue和oldValue值一样是因为，指向同一个块内存
    watch(person, (newValue, oldValue) => {
        console.log('person change');
        console.log('newValue', newValue)
        console.log('oldValue', oldValue)
    })
</script>
