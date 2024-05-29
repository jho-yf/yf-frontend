<template>
    <h2>当前求和：{{ sum }}</h2>
    <button @click="incr">+1</button>
</template>

<script lang="ts" setup name="Person">
    import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'

    let sum = ref(0)
    function incr() {
        sum.value++
    }

    console.log('created...')

    onBeforeMount(() => {
        console.log('before mounte...')
    })

    onMounted(() => {
        console.log('mounted...')
    })

    onBeforeUpdate(() => {
        console.log('before update...')
    })

    onUpdated(() => {
        console.log('updated...')
    })

    onBeforeUnmount(() => {
        console.log('before unmount...')
    })

    onUnmounted(() => {
        console.log('unmounted...')
    })
</script>
