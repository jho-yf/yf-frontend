<template>
    <div class="game">
        <h2>游戏列表</h2>
        <slot :games="games"></slot>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'

    let games = reactive([
        {
            id: '1',
            name: '英雄联盟1',
        },
        {
            id: '2',
            name: '王者荣耀1',
        },
        {
            id: '3',
            name: '和平精英2',
        }
   ])
</script>

<style scoped>
    .game {
        background-color: skyblue;
        border-radius: 5px;
        box-shadow: 0 0 10px;
        padding: 10px;
        width: 200px;
        height: 300px;
    }
    .game h2 {
        background-color: orange;
        text-align: center;
        font-size: 18px;
        font-weight: 800;
    }
</style>
  