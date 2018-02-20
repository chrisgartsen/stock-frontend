import HttpApi from '@/resource/http-api'

let api = new HttpApi('users')

export default {

  state: {
    users: [],
    loading: false,
    showForm: false
  },

  getters: {
    getUsers(state) {
      return state.users
    },
    isUsersLoading(state) {
      return state.loading
    },
    showUserForm(state) {
      return state.showForm
    }
  },

  mutations: {
    SET_USERS_LOADING_STATE(state, loading) {
      state.loading = loading
    },
    SET_USERS(state, users) {
      state.users = users
    },
    ADD_USER(state, user) {
      state.users.push(user)
    },
    SET_USER_FORM_VISIBLE(state, visible) {
      state.showForm = visible
    }
  },

  actions: {
    FETCH_USERS({commit}) {
      commit('SET_USERS_LOADING_STATE', true)
      api.getAll().then((response) => {
        commit('SET_USERS', response.data)
        commit('SET_USERS_LOADING_STATE', false)
      })
    },
    SHOW_NEW_USER_FORM({commit}) {
      commit("SET_USER_FORM_VISIBLE",true)
    },
    HIDE_USER_FORM({commit}) {
      commit("SET_USER_FORM_VISIBLE", false)
    },
    PROCESS_USER(context, user) {
      console.log(user)
      context.dispatch("CREATE_USER",{
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
        active: user.active,
        admin: user.admin
      })
    },
    CREATE_USER({commit}, user) {
      api.create(user).then((response) => {
          commit("ADD_USER", response.data)
      }).catch((error) => {
        console.log(error.response)
      })
    }
  }
}