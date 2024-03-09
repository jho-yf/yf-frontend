<template>
    <div class="demo">
        <h2>学校姓名：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'

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
            // this.$bus.$on('StudentNameSend', (name) => {
            //     console.log(name);
            // });
            this.subId = pubsub.subscribe('StudentNameSend', (eventName, StudentName) => {
                console.log(eventName, StudentName);
            });
        },
        beforeDestroy() {
            // this.$bus.$off('StudentNameSend');
            pubsub.unsubscribe(this.subId);
        }
    };
</script>

<style scoped>
    .demo {
        background-color: skyblue;
        padding: 5px;
    }
</style>