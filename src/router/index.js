import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import home from '@/components/home/home-page'
import login from '@/components/auth/login-page'
import error from '@/components/auth/error-page'
import register from '@/components/auth/registration-page'
import recover from '@/components/auth/recover-page'
import items from '@/components/items/items-page'
import users from '@/components/users/users-page'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', name: 'home', component: home}, 
    { path: '/login', name: 'login', component: login},
    { path: '/login-error', name: 'loginError', component: error}, 
    { path: '/register', name: 'register', component: register},
    { path: '/recover', name: 'recover', component: recover},
    { path: '/items', name: 'items', component: items, meta: { requiresAuth: true }},
    { path: '/users', name: 'users', component: users, meta: { requiresAuth: true }},
  ],

})

router.beforeEach((to, from, next) =>{
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.isLoggedIn) {
      next()
    } else {
      next({path: '/login-error'})
    }
  } else {
    next()
  }
})

export default router