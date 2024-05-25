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
    let name = '张三'
    let age = 18
    let phone = 10086

    function changeName() {
        name = '李四'
    }

    function changeAge() {
        age = 20
    }

    function showPhone() {
        alert(phone)
    }
</script>
