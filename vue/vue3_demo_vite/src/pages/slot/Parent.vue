<template>
  <div class="parent">
    <h3>父组件 - slot</h3>
    <h4>默认插槽</h4>
    <div class="content">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="game in games" :key="game.id">
            {{ game.name }}
          </li>
        </ul>
      </Category>
      <Category title="动物">
        <img :src="imgUrl" />
      </Category>
      <Category title="今日影视推荐">
        <video :src="videoUrl" controls></video>
      </Category>
    </div>

    <h4>具名插槽</h4>
    <div class="content">
      <Category1 v-slot:content-slot>
        <h2>热门游戏列表</h2>
        <ul>
          <li v-for="game in games" :key="game.id">
            {{ game.name }}
          </li>
        </ul>
      </Category1>
      <Category1>
        <template v-slot:title-slot>
          <h2>动物</h2>
        </template>
        <template v-slot:content-slot>
          <img :src="imgUrl" />
        </template>
      </Category1>
      <Category1>
        <template #content-slot>
          <video :src="videoUrl" controls></video>
        </template>
        <template #title-slot>
          <h2>今日影视推荐</h2>
        </template>
      </Category1>
    </div>

    <h4>作用域插槽</h4>
    <div class="content">
      <Game>
        <template v-slot:default="params">
          <ul>
            <li v-for="game in params.games" :key="game.id">
              {{ game.name }}
            </li>
          </ul>
        </template>
      </Game>
      <Game>
        <template #default="params">
          <ol>
            <li v-for="game in params.games" :key="game.id">
              {{ game.name }}
            </li>
          </ol>
        </template>
      </Game>
      <Game>
        <template v-slot="{ games }">
            <h3 v-for="game in games" :key="game.id">
              {{ game.name }}
            </h3>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Parent">
  import { reactive, ref } from 'vue'
  import Category from './Category.vue'
  import Category1 from './Category1.vue'
  import Game from './Game.vue'

  let games = reactive([
    {
      id: '1',
      name: '英雄联盟',
    },
    {
      id: '2',
      name: '王者荣耀',
    },
    {
      id: '3',
      name: '和平精英',
    }
   ])

   let imgUrl = ref('https://img.yzcdn.cn/vant/cat.jpeg')
   let videoUrl = ref('https://v.cic.tsinghua.edu.cn/vod/rmtpt/c/2/F9ECEB1A8B8D5E8039F33A904BE1BC7F.mp4')
</script>

<style scoped>
  .parent {
    background-color: rgb(113, 104, 196);
    padding: 10px;
  }

  .content {
    display: flex;
    justify-content: space-evenly;
  }

  img, video {
    width: 100%;
  }

  h2 {
    background-color: orange;
    text-align: center;
    font-size: 18px;
    font-weight: 800;
  }
</style>
