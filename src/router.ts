import { createWebHashHistory, createWebHistory, createRouter } from 'vue-router'


const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: () => import('./pages/decorate/index.vue') },
    ]
})


export default router