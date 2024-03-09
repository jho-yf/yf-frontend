<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">将学生名传给App</button>
        <button @click="unbind">解绑自定义事件</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        props: ['name', 'sex'],
        methods: {
            sendStudentName() {
                // 触发studentNameSend事件
                this.$emit('studentNameSend', this.name, 666, 888);
            },
            unbind() {
                // 解绑指定事件
                this.$off('studentNameSend');
                // 批量解绑事件
                // this.$off(['studentNameSend', 'xxxx', 'yyyyy']);
                // 解绑所有事件
                // this.$off();
            }
        }
    };
</script>

<style scoped>
    .demo {
        background-color: burlywood;
        padding: 5px;
    }
</style>