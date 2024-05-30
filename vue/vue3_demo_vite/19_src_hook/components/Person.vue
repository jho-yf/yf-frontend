<template>
    <h2>当前求和：{{ sum }}</h2>
    <button @click="incr">+1</button>
    <hr>
    <img v-for="(dog, index) in dogs" :src="dog" :key="index">
    <br>
    <button @click="addDog">再来一只修狗</button>
</template>

<script lang="ts" setup name="Person">
    import useDog from '@/hooks/useDog';
    import useSum from '@/hooks/useSum';

    const { sum, incr } = useSum();
    const { dogs, addDog } = useDog();
</script>

<style scoped>
    img {
        width: 150px;
        height: 100%;
        margin-right: 5px;
    }
</style>
