<template>
  <button @click="isShow = true">展示弹窗</button>
  <!-- 传送到body标签中 -->
  <teleport to="body">
    <div class="modal" v-show="isShow">
        <h2>弹窗标题</h2>
        <p>弹窗内容</p>
        <button @click="isShow = false">关闭弹窗</button>
    </div>
  </teleport>
</template>

<script setup>
    import { ref } from 'vue'
    let isShow = ref(false)
</script>

<style scoped>
    .modal {
        width: 300px;
        height: 150px;
        background-color: gray;
        text-align: center;
        position: fixed;
        left: 50%;
        margin-left: -150px;
        top: 30px;
    }
</style>
