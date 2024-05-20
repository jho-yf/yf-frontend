<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>全局变量：{{globalVar}}</h2>
    </div>
</template>

<script>
    import {myMixin} from '../mixin';
    export default {
        name: 'Student',

        data() {
            return {
                name: '张三',
                sex: '男'
            };
        },
        mixins: [myMixin],
    };
</script>