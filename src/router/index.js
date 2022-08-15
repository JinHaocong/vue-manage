/*
 * @Author: Jin Haocong
 * @Date: 2022-08-15 09:44:38
 * @LastEditTime: 2022-08-15 21:37:55
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const includPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return includPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        // component: HomePage
        component: () => import('@/views/MainPage'),
        children: [
            {
                path: '/home',
                name: "HomePage",
                component: () => import('@/views/home/HomePage')
            },
            {
                path: '/user',
                name: 'UserPage',
                component: () => import('@/views/user/UserPage')
            },
            {
                path: '/mall',
                name: 'MallPage',
                component: () => import('@/views/mall/MallPage')
            },
            {
                path: '/page1',
                name: "OtherPage1",
                component: () => import('@/views/other/OtherPage1')
            },
            {
                path: '/page2',
                name: "OtherPage2",
                component: () => import('@/views/other/OtherPage2')
            },
        ]
    },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router