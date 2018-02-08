import Vue from 'vue'
import Router from 'vue-router'

import home from  '@/components/home-page'
import items from '@/components/items/items-page'
import users from '@/components/users/users-page'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/items', name: 'items', component: items },
    { path: '/users', name: 'users', component: users}
  ]
})
