import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import items from '@/components/items/items-page'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', name: 'items', component: items }
  ]
})
