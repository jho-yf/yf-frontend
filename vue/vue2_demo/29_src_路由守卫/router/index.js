import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Details from '../pages/Details.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: 'news',
          component: News,
          // 局部路由拦截器
          beforeEnter: (to, from, next) => {
            console.log('beforeEnter...')
            next()
          }
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
              // props({query:{id, title}}) {
              //   return {id, title}
              // }
            }
          ]
        }
      ],
      meta: {
        title: '主页'
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    }
  ]
})

localStorage.setItem('num', 0)

// 全局路由前置拦截器，初始化的时候被调用，每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  console.log("router.beforeEach...")
  console.log()

  let num = Number.parseInt(localStorage.getItem('num'))
  console.log("num = ", num)

  localStorage.setItem('num', num + 1)
  if (num % 2 === 0) {
    console.log('不拦截')
    next()
  } else {
    alert('没有权限')
  }
})

router.afterEach((to, from) => {
  console.log('router.afterEach...')
  document.title = to.meta.title || 'Vue Router Demo'
})

export default router