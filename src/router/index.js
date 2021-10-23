import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/Register.vue'
import Forgot from '../views/auth/Forgot.vue'
import Page404 from '../views/404.vue'
import Authors from "../components/authors"
import FullReaders from "../views/Readers"
import FullSponsors from "../views/Sponsors"
import joinus from "../components/joinus"
import single from "../views/single_blog"
import community from "../views/community"
import becomeauthor from "../components/becomeauthor"
import createArticle from "../components/create_article"
import categorical from '../components/categorical'
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
        path: '/categorical/:name',
        name: 'Categorical',
        component: categorical
    },
    {
        path: '/author/registion',
        name: 'AuthorJoin',
        component: becomeauthor
    }, {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('access')
            if (to.name === 'Login' && !token) {
                next()
            } else {
                window.location.href = "/"
            }
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/article/:slug',
        name: 'Single',
        component: single
    }, {
        path: '/forgot',
        name: 'Forgot',
        component: Forgot
    },
    {
        path: '/authors',
        name: 'Authors',
        component: Authors
    },
    {
        path: '/readers',
        name: 'Readers',
        component: FullReaders
    },
    {
        path: '/sponsors',
        name: 'Sponsors',
        component: FullSponsors
    },
    {
        path: "/community",
        name: "Community",
        component: community
    },
    {
        path: "/compose",
        name: "createArticle",
        component: createArticle
    },
    {
        path: '/:catchAll(.*)',
        component: Page404,
        name: '404'
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
})

export default router