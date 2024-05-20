<template>
    <div>
        <h2 @click="showName">学校姓名：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <h2>全局变量：{{globalVar}}</h2>
    </div>
</template>

<script>
    import {myMixin} from '../mixin'
    export default {
        name: 'School',

        data() {
            return {
                name: '北京大学',
                address: '北京市'
            };
        },
        mixins: [myMixin],
    };
</script>