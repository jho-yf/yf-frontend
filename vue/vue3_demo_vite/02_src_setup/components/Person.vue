<template>
    <div>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>&nbsp;&nbsp;
        <button @click="changeAge">修改年龄</button>&nbsp;&nbsp;
        <button @click="showPhone">查看联系方式</button>
    </div>
</template>

<script>
export default {
    name: 'Person', 
    // setup函数中的this是undefined,Vue3中弱化了this
    setup() {
        // 这样修改name,页面不会响应式变化
        let name = '张三'
        let age = 18
        let phone = 10086

        function changeName() {
            name = '李四'
        }

        return {
            name,
            age,
            changeName,
            changeAge() {
                age = 20
            },
            showPhone() {
                alert(phone)
            }
        };
    },
};
</script>
