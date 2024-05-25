<template>
    <h1>情况一：监视ref定义的基本数据类型</h1>
    <h2>当前求和：{{ sum }}</h2>
    <button @click="incr">+1</button>
</template>

<script lang="ts" setup name="Person">
    import { ref, watch } from 'vue'

    let sum = ref(0)

    function incr() {
        sum.value++
    }

    // 监听sum的变化
    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log('sum变化了', newValue, oldValue)
        if (newValue >= 10) {
            console.log('sum大于10了，停止监听');
            stopWatch()
        }
    })
    console.log(stopWatch);
    
</script>
