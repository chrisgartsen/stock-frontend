import HttpApi from '@/resource/http-api'

let api = new HttpApi('users')

export default {

  state: {
    users: [],
    loading: false
  },

  getters: {
    getUsers(state) {
      return state.users
    },
    isUsersLoading(state) {
      return state.loading
    }
  },

  mutations: {
    SET_USERS_LOADING_STATE(state, loading) {
      state.loading = loading
    },
    SET_USERS(state, users) {
      state.users = users
    }
  },

  actions: {
    FETCH_USERS({commit}) {
      commit('SET_USERS_LOADING_STATE', true)
      api.getAll().then((response) => {
        commit('SET_USERS', response.data)
        commit('SET_USERS_LOADING_STATE', false)
      })
    }
  }

}