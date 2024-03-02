<template>
    <div>
        <h1>{{ school }}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge}}</h2>
        <button @click="myAge++">年龄+1</button>
    </div>
</template>

<script>
export default {
    name: 'Student',

    data() {
        return {
            school: '北京大学',
            myAge: this.age
        };
    },
    
    // props: ['name', 'sex', 'age']    // 简单接收

    // 接收并限制类型
    /* props: {
        name: String,
        sex: String,
        age: Number,
    }, */
    
    props: {
        name: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            default: '男',
        },
        age: {
            type: Number,
            default: 18,
        },
    },
};
</script>