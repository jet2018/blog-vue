import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/Register.vue'
import Forgot from '../views/auth/Forgot.vue'
import Page404 from '../views/404.vue'
import Authors from "../components/authors"
import joinus from "../components/joinus"
import single from "../views/single_blog"
import contactUs from "../components/contactUs"
import community_home from "../views/community/index"
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/join',
        name: 'Join',
        component: joinus
    },
    {
        path: "/contact",
        component: contactUs,
        name: "",
    }, {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('access')
            if (to.name === 'Login' && !token) {
                next()
            } else {
                next()
            }
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/:slug',
        name: 'Single',
        component: single
    }, {
        path: 'forgot',
        name: 'Forgot',
        component: Forgot
    },
    {
        path: 'authors',
        name: 'Authors',
        component: Authors
    },
    {
        path: "community",
        name: "Community",
        component: community_home
    },
    {
        path: "*",
        name: "404",
        component: Page404
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
})

export default router