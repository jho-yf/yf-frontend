<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">将学生名发送到其他组件</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'

    export default {
        name: 'Student',
        props: ['name', 'sex'],
        methods: {
            sendStudentName() {
                // this.$bus.$emit('StudentNameSend', this.name);
                pubsub.publish('StudentNameSend', this.name);
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