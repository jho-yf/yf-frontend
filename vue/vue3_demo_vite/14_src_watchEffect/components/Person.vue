<template>
    <h1>watch effect</h1>
    <h2>水温：{{ temp }}摄氏度</h2>
    <h2>水位：{{ height }}cm</h2>
    <button @click="changeTemp">水温+1</button>&nbsp;
    <button @click="changeHeight">水位+1</button>
</template>

<script lang="ts" setup name="Person">
    import { ref,watch,watchEffect} from 'vue'

    let temp = ref(0)
    let height = ref(0)

    function changeTemp() {
        temp.value++
    }

    function changeHeight() {
        height.value++
    }

    // watch实现
    // watch([temp, height], (value) => {
    //     let [newTemp, newHeight] = value
    //     console.log(`最新水温：${newTemp}摄氏度，最新水位：${newHeight}cm`);
    //     if (newTemp >= 5 && newHeight >= 2) {
    //         console.log('警告：水位和温度同时达到5摄氏度和2厘米以上')
    //     }
    // })
    
    // watchEffect实现
    watchEffect(() => {
        if (temp.value >= 5 && height.value >= 2) {
            console.log('警告：水位和温度同时达到5摄氏度和2厘米以上')
        }
    })
</script>
