import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)
    // routes是用来配置路由的
    // 基础部分有3个: path:路径 name: 路由的名字  component: 组件
    //  /代表根路径 通常是指首页 
    // path:路径 name: 路由的名字  component: 组件 都是自己定义的  通常情况下他们都是一样的 (除了首页以外)
const routes = [{
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [{
            path: '/',
            name: 'Home',
            component: Home
        }, ]
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        meta: {
            title: '酒店管理',
        },
        children: [{
            path: '/hotel',
            name: 'Hotel',
            component: () =>
                import ("../components/hotel/hotel.vue")
        }, ]
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        meta: {
            title: '客房管理',
        },
        children: [{
            path: '/guestRoom',
            name: 'GuestRoom',
            component: () =>
                import ("../components/guestRoom/guestRoom.vue")
        }, ]
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        meta: {
            title: '服务管理',
        },
        children: [{
            path: '/service',
            name: 'Service',
            component: () =>
                import ("../components/service/service.vue")
        }, ]
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        meta: {
            title: '商品管理',
        },
        children: [{
            path: '/market',
            name: 'Market',
            component: () =>
                import ("../components/market/market.vue")
        }, ]
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        meta: {
            title: '订单管理',
        },
        children: [{
            path: '/order',
            name: 'Order',
            component: () =>
                import ("../components/order/order.vue")
        }, ]
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        meta: {
            title: '旅游攻略',
        },
        children: [{
            path: '/travel',
            name: 'Travel',
            component: () =>
                import ("../components/travel/travel.vue")
        }, ]
    },


    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },

    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../components/login/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../components/register/register.vue'),
        meta: {
            title: '注册'
        },
    },
    // {
    //     path: '*',
    //     meta: {
    //         title: '错误页面'
    //     },
    // },
]

const isPro = process.env.NODE_ENV === 'production'


const router = new VueRouter({
    mode: isPro ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let userName = localStorage.getItem('userName')
    if (to.path === '/login') {
        next()
    } else {
        userName ? next() : next('/login')
    }
})

export default router