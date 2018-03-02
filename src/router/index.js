import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import welcome from '@/components/static/welcome-page'
import login from '@/components/auth/login-page'
import items from '@/components/items/items-page'
import users from '@/components/users/users-page'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', name: 'home', component: welcome}, 
    { path: '/login', name: 'login', component: login}, 
    { path: '/items', name: 'items', component: items, meta: { requiresAuth: true }},
    { path: '/users', name: 'users', component: users, meta: { requiresAuth: true }}
  ],

})

router.beforeEach((to, from, next) =>{
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("NAV - AUTH REQUIRED")
    if(store.getters.isLoggedIn) {
      next()
    } else {
      next({path: '/login'})
    }
  } else {
    next()
  }
})

export default router