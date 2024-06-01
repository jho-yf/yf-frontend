import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import NewsDetails from '@/pages/NewsDetails.vue'

const router = createRouter({
    // 路由器的工作模式
    history: createWebHashHistory(),
    // 路由规则
    routes: [
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
            component: News,
            children: [
                {
                    name: 'details',
                    path: 'details/:id/:title/:content',
                    component: NewsDetails,
                    
                    // 写法一：将路由传递的所有paramsANH参数传递给路由组件的props
                    // props: true

                    // 写法二：将路由传递的指定params参数传递给路由组件的props
                    props(route) {
                        console.log('route', route)
                        // return {
                        //     id: '1111',
                        //     title: 'xxxxx',
                        //     content: 'cccccccccc'
                        // }
                        return route.params
                    }

                    // 写法三：对象a写法
                    // props: {
                    //     id: '1111',
                    //     title: 'xxxxx',
                    //     content: 'cccccccccc'
                    // }

                }
            ]
        }
    ]
})

export default router