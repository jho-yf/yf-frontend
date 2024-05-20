import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Details from '../pages/Details.vue'

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children:[
            {
              name: 'pageDetails',
              path: 'details/:id',
              component: Details,
              // props第一种写法
              // props: {a: 1, b:2},
              
              // props第二种写法。将所有该路由组件收到的params参数，以props形式传给Details组件
              // props: true

              // pros第三种写法。动态传值
              // props($route) {
              //   return {
              //     id: $route.query.id,
              //     title: $route.query.title
              //   }
              // }
              // props({query}) {
              //   return {
              //     id: query.id,
              //     title: query.title
              //   }
              // }
              props({query:{id, title}}) {
                return {id, title}
              }
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      component: About
    }
  ]
})