import Axios from 'axios'

export default {

  state: {
    showForm: false,
    authToken: null,
    userId: null
  },
  getters: {
    showLoginForm(state) {
      return state.showForm
    },

  },
  mutations: {
    SET_LOGIN_FORM_VISIBLE(state, visible) {
      state.showForm = visible
    },
    SET_TOKEN(state, authToken) {
      state.authToken = authToken
    }
  },
  actions: {
    SHOW_LOGIN_FORM({commit}) {
      commit("SET_LOGIN_FORM_VISIBLE", true)
    },
    HIDE_LOGIN_FORM({commit}) {
      commit("SET_LOGIN_FORM_VISIBLE", false)
    },
    LOGIN({commit}, authData) {
      Axios.post("http://localhost:3000/login", {email: authData.email, password: authData.password})
      .then((response) => {
        commit('SET_TOKEN', response.data.auth_token)
      }).catch((error) => { 
        console.log("Error")
        console.log(error.response)
      })
    }
  }

}