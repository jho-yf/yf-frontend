<template>
    <div class="demo">
        <h2>学校姓名：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">将学校名传给App</button>
    </div>
</template>

<script>
    export default {
        name: 'School',
        props: ['onNameReceived'],
        data() {
            return {
                name: '北京大学',
                address: '北京市',
            };
        },
        methods: {
            sendSchoolName() {
                this.onNameReceived(this.name, 888);
            },
        },
    };
</script>

<style scoped>
    .demo {
        background-color: skyblue;
        padding: 5px;
    }
</style>