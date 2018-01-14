import Axios from 'axios'

export default {
  state: {
    items: []
  },
  getters: {
    getItems(state) {
      return state.items
    }
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items
    }
  },
  actions: {
    FETCH_ITEMS({commit}) {
      Axios.get("http://localhost:3000/items")
        .then((response) => {
          commit("SET_ITEMS", response.data)
        })
        .catch((error)=> {
          console.log(error.response.data)
        })
    }
  }
}