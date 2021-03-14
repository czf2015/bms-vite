import { createWebHashHistory, createWebHistory, createRouter } from 'vue-router'


// const history = createWebHashHistory()
const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        // { path: '/demo', component: () => import('./pages/demo/index.vue') },
        // { path: '/demo/mock', component: () => import('./pages/demo/Mock.vue') },
        { path: '/decorate', component: () => import('./pages/decorate/index.vue') },
    ]
})


export default router