<template>
    <h1>中国</h1>
    <h2 ref="h2Title">广东</h2>
    <h3>广州</h3>
    <button @click="showH2">点我输出h2元素</button>
</template>

<script lang="ts" setup name="Person">
    import { ref } from 'vue';

    // 创建一个变量用于存储ref标记的内容
    let h2Title = ref()

    function showH2() {
        console.log(h2Title.value);
    }

    let var1 = ref(1)

    // 定义要暴露的变量
    defineExpose({
        var1,
        var2: ref(2)
    })
</script>
