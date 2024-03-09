<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">将学生名发送到事件总线</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        props: ['name', 'sex'],
        methods: {
            sendStudentName() {
                this.$bus.$emit('StudentNameSend', this.name);
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