<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">显示学校名称</button>
    </div>
</template>

<script>
    // 组件交互相关代码（数据、方法等）
    export default {
        name: 'School',
        data() {
            return {
                name: '北京邮电大学',
                address: '北京'
            }
        },
        methods: {
            showName() {
                alert(this.name);
            }
        }
    }
</script>

<style>
    /* 
        组件样式
    */
    .demo {
        color: rgb(196, 83, 83);
    }
</style>