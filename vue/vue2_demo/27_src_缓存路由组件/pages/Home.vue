<template>
  <div>
    <h2>Home 内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
      </li>
      &nbsp;
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
      </li>
    </ul>
    <!-- 缓存News组件 -->
    <keep-alive :include="['News', 'Message']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
    export default {
        name: 'Home',
    };
</script>