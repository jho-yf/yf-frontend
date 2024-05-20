<template>
  <div>
    <ul>
      <li v-for="msg in messages" :key="msg.id">
        <!-- 携带query参数路由，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/details/${ msg.id }?title=${ msg.title }`">{{ msg.title }}</router-link> -->
        <!-- 携带query参数路由，to的对象写法 -->
        <router-link :to="{ 
          name: 'pageDetails',
          params: { id: msg.id },
          query: { title: msg.title } 
          }">
          {{ msg.title }}
        </router-link>
        <button @click="push(msg)">push查看详情</button>
        <button @click="replace(msg)">replace查看详情</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
      name: 'Message',
      data() {
          return {
              messages: [
                {id: 1, title: 'message 001'},
                {id: 2, title: 'message 002'},
                {id: 3, title: 'message 003'}
              ]
          }
      },
      methods: {
        push(msg) {
          this.$router.push({
            name: 'pageDetails',
            params: { id: msg.id },
            query: { title: msg.title }
          })
        },
        replace(msg) {
          this.$router.replace({
            name: 'pageDetails',
            params: { id: msg.id },
            query: { title: msg.title }
          })
        }
      }
  };
</script>