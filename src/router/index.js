import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import(/* webpackChunkName: "logins" */ '../views/Logins.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import(/* webpackChunkName: "forget" */ '../views/Forget.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
