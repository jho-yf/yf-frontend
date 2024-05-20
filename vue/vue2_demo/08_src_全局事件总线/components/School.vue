<template>
    <div class="demo">
        <h2>学校姓名：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">将学校名发送到事件总线</button>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: '北京大学',
                address: '北京市',
            };
        },
        methods: {
            sendSchoolName() {
                this.$bus.$emit('SchoolNameSend', this.name);
            }
        },
        mounted() {
            this.$bus.$on('StudentNameSend', (name) => {
                console.log(name);
            });
        },
        beforeDestroy() {
            this.$bus.$off('StudentNameSend');
        }
    };
</script>

<style scoped>
    .demo {
        background-color: skyblue;
        padding: 5px;
    }
</style>