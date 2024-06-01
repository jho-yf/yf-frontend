<template>
    <div class="home">
        <img src="https://images.dog.ceo/breeds/pointer-german/n02100236_44.jpg" alt="">
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    onMounted(() => {
        // 动态路由导航
        setTimeout(() => {
            router.push('/news')
        }, 3000)
    })
</script>

<style scoped>
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>
  