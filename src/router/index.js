import Vue from 'vue'
import Router from 'vue-router'

import items from '@/components/items/items-page'
import users from '@/components/users/users-page'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', name: 'items', component: items },
    { path: '/users', name: 'users', component: users, meta: { requiresAuth: true }}
  ],

})

router.beforeEach((to, from, next) =>{
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("NAV - AUTH REQUIRED")
    next({
      path: '/'
    })
  } else {
    next()
  }
})

export default router