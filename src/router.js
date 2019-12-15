import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/columns',
            name: 'columns',
            component: () => import( /* webpackChunkName: "columns" */ './views/Columns.vue')
        },
        {
            path: '/grid',
            name: 'grid',
            component: () => import( /* webpackChunkName: "grid" */ './views/Grid.vue')
        },
        {
            path: '/flex',
            name: 'flex',
            component: () => import( /* webpackChunkName: "flex" */ './views/Flex.vue')
        },
        {
            path: '/number/:name',
            props: true,
            name: 'number',
            // 路由独享守卫
            beforeEnter: (to, from, next) => {
                console.log('beforeEnter 路由独享守卫');
                next();
            },
            component: () => import( /* webpackChunkName: "number" */ './views/Number.vue')
        },
        {
            path: '/notification',
            name: 'notification',
            component: () => import( /* webpackChunkName: "notification" */ './views/Notification.vue')
        },
        {
            path: '/promise',
            name: 'promise',
            component: () => import( /* webpackChunkName: "promise" */ './views/Promise.vue')
        },
        ,
        {
            path: '/props',
            name: 'props',
            component: () => import( /* webpackChunkName: "props" */ './views/Props.vue')
        }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 1000, y: 1000 }
    //     }
    // }
})