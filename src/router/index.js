import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import items from '@/components/items/items-page'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    { path: '/', name: 'items', component: items }
  ]
})
