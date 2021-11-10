/*
 * @Descripttion: 路由配置文件
 * @version: 
 * @Author: ahao
 * @Date: 2021-10-25 20:17:34
 * @LastEditors: ahao
 * @LastEditTime: 2021-11-10 22:28:15
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export const constantRoutes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import("../layout/layout.vue"),
        children: [
            { path: '/home', component: () => import('../components/HelloWorld') }
        ]
    },
    
    // 404 page must be placed at the end !!!
    { path: '/*', redirect: '/404', component: () => import("../components/404") }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()
export default router