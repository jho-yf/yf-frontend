import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/props',
            component: () => import('@/pages/props/Parent.vue')
        },
        {
            path: '/custom-event',
            component: () => import('@/pages/custom-event/Parent.vue')
        },
        {
            path: '/mitt',
            component: () => import('@/pages/mitt/Parent.vue')
        },
        {
            path: '/v-model',
            component: () => import('@/pages/v-model/Parent.vue')
        },
        {
            path: '/attrs',
            component: () => import('@/pages/attrs/Parent.vue')
        },
        {
            path: '/$ref-$parent',
            component: () => import('@/pages/$ref-$parent/Parent.vue')
        },
        {
            path: '/provide-inject',
            component: () => import('@/pages/provide-inject/Parent.vue')
        },
        {
            path: '/pinia',
            component: () => import('@/pages/pinia/Parent.vue')
        },
        {
            path: '/slot',
            component: () => import('@/pages/slot/Parent.vue')
        }
    ]
})

export default router