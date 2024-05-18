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
              component: Details
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