<template>
    <!-- 组件结构 -->
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    // 组件交互相关代码（数据、方法等）
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 18
            }
        }
    }
</script>