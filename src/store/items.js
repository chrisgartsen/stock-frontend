import Axios from 'axios'

export default {
  state: {
    items: [],
    loading: false
  },
  getters: {
    getItems(state) {
      return state.items
    },
    isLoading(state) {
      return state.loading
    }
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items
    },
    SET_LOADING_STATE(state, loading) {
      state.loading = loading
    },
    REMOVE_ITEM(state, itemId) {
      var removeIndex = state.items.map(function(item) { return item.id; }).indexOf(itemId);
      state.items.splice(removeIndex, 1);
    }
  },
  actions: {
    FETCH_ITEMS({commit}) {
      commit("SET_LOADING_STATE", true)
      Axios.get("http://localhost:3000/items")
        .then((response) => {
          commit("SET_ITEMS", response.data)
          commit("SET_LOADING_STATE", false)
        })
        .catch((error)=> {
          console.log(error.response.data)
        })
    },
    DELETE_ITEM({commit}, itemId) {
      Axios.delete("http://localhost:3000/items/"+itemId).then((response) => {
        commit("REMOVE_ITEM", itemId)
      }).catch((error) =>{
        console.log(error.response)
      })
    }
  }
}