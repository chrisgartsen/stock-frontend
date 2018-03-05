import Axios from 'axios'

import AuthApi from '@/resource/auth-api'

let api = new AuthApi()

export default {

  state: {
    showForm: false,
    authToken: null,
    userId: null,
    loginState: false,
    loginError: false,
    loginErrorMessage: ''
  },
  getters: {
    showLoginForm(state) {
      return state.showForm
    },
    isLoggingIn(state) {
      return state.loginState
    },
    isLoggedIn(state) {
      return state.userId != null
    },
    hasLoginError(state) {
      return state.loginError
    },
    loginError(state) {
      return state.loginErrorMessage
    }
  },
  mutations: {
    SET_LOGIN_FORM_VISIBLE(state, visible) {
      state.showForm = visible
    },
    SET_TOKEN(state, authToken) {
      state.authToken = authToken
    },
    SET_USER_ID(state, userId) {
      state.userId = userId
    },
    SET_LOGIN_STATE(state, login) {
      state.loginState = login
    },
    SET_LOGIN_ERROR(state, errorMessage) {
      state.loginError = true
      state.loginErrorMessage = errorMessage
    },
    RESET_LOGIN_ERROR(state) {
      state.loginError = false
      state.loginErrorMessage = ''
    },
    CLEAR_TOKEN(state) {
      state.authToken = null
    },
    CLEAR_USER_ID(state) {
      state.userId = null
    }
  },
  actions: {
    SHOW_LOGIN_FORM({commit}) {
      commit('SET_LOGIN_FORM_VISIBLE', true)
    },
    HIDE_LOGIN_FORM({commit}) {
      commit('SET_LOGIN_FORM_VISIBLE', false)
      commit('SET_LOGIN_STATE', false)
      commit('RESET_LOGIN_ERROR')
    },
    RESET_LOGIN({commit}) {
      commit('RESET_LOGIN_ERROR')
    },
    LOGOUT({commit}){
      commit('CLEAR_TOKEN')
      commit('CLEAR_USER_ID')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
    AUTO_LOGIN({commit}) {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      if(token) {
        commit('SET_TOKEN', token)
        commit('SET_USER_ID', user)
      }
    },
    LOGIN({commit, dispatch}, authData) {
      commit('SET_LOGIN_STATE', true)
      return new Promise((resolve, reject) => {
        api.login(authData.email, authData.password) .then((response) => {
          commit('SET_TOKEN', response.data.auth_token)
          commit('SET_USER_ID', response.data.user_id)
          commit('SET_LOGIN_STATE', false)
          localStorage.setItem('token', response.data.auth_token)
          localStorage.setItem('user', response.data.user_id)
          resolve(Response)
        })
        .catch((error) => {
          commit('SET_LOGIN_STATE', false)
          commit('SET_LOGIN_ERROR', error.response.data.error)
        })   
      })     
    }  

  }

}