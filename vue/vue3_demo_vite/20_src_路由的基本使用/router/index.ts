import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'


const router = createRouter({
    // 路由器的工作模式
    history: createWebHashHistory(),
    // 路由规则
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/news',
            name: 'news',
            component: News
        }
    ]
})

export default router