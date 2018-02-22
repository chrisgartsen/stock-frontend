import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import items from './items'
import users from './users'
import auth from './auth'

export default new Vuex.Store({
  modules: {
    items,
    users,
    auth
  }
})
