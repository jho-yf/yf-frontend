<template>
    <h1>情况二：监视ref定义的对象类型数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    &nbsp;
    <button @click="changeAge">修改年龄</button>
    &nbsp;
    <button @click="changePerson">修改所有</button>
</template>

<script lang="ts" setup name="Person">
    import { ref, watch } from 'vue'

    let person = ref({
        name: 'zhangsan',
        age: 18
    })

    function changeName() {
        person.value.name += 1
    }

    function changeAge() {
        person.value.age++
    }

    function changePerson() {
        person.value = {
            name: 'lisi',
            age: 20
        }
    }

    // 监视person对象
    // deep: true 监视对象内部属性的变化
    // immediate: true 立即执行，在页面加载时执行
    watch(person, (newValue, oldValue) => {
        console.log('person change');
        console.log('newValue', newValue)
        console.log('oldValue', oldValue)
    }, { deep: true, immediate: true })
</script>
