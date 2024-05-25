<template>
    <div>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>&nbsp;&nbsp;
        <button @click="changeAge">修改年龄</button>&nbsp;&nbsp;
        <button @click="showPhone">查看联系方式</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref } from 'vue'

    let name = ref('张三')
    let age = ref(18)
    let phone = 10086

    console.log('name', name)
    console.log('age', age)
    console.log('phone', phone)

    function changeName() {
        name.value = '李四'
    }

    function changeAge() {
        age.value = 20
    }

    function showPhone() {
        alert(phone)
    }
</script>
