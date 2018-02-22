export default {

  state: {
    showForm: false
  },
  getters: {
    showLoginForm(state) {
      return state.showForm
    }
  },
  mutations: {
    SET_LOGIN_FORM_VISIBLE(state, visible) {
      state.showForm = visible
    }
  },
  actions: {
    SHOW_LOGIN_FORM({commit}) {
      commit("SET_LOGIN_FORM_VISIBLE", true)
    },
    HIDE_LOGIN_FORM({commit}) {
      commit("SET_LOGIN_FORM_VISIBLE", false)
    }
  }

}