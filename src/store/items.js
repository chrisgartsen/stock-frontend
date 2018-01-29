import Axios from 'axios'
import Vue from 'vue'
import HttpApi from './../resource/HttpApi'

let api = new HttpApi('items')

export default {
  state: {
    item: {},
    items: [],
    loading: false,
    editMode: false,
    showForm: false
  },
  getters: {
    getItems(state) {
      return state.items
    },
    getItemsMissingAndLow(state) {
      return state.items.filter((item) => {
        return item.minimum_quantity > 0 &&   
                (item.quantity == item.minimum_quantity || item.quantity < item.minimum_quantity)
      })
    },
    getItemsLow(state) {
      return state.items.filter((item) => {
        return item.minimum_quantity > 0 && item.quantity == item.minimum_quantity
      })
    },
    getItemsMissing(state) {
      return state.items.filter((item) => {
        return item.minimum_quantity > 0 && item.quantity < item.minimum_quantity
      })
    },
    getItem(state) {
      return state.item
    },
    isLoading(state) {
      return state.loading
    },
    showItemForm(state) {
      return state.showForm
    },
    isEditMode(state) {
      return state.editMode
    },
    editItemId(state) {
      return state.itemId
    }
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items
    },
    SET_ITEM(state, item) {
      state.item = item
    },
    ADD_ITEM(state, item) {
      state.items.push(item)
    },
    UPDATE_ITEM(state, item) {
      var updateIndex = state.items.map(function(item) { return item.id; }).indexOf(item.id);
      Vue.set(state.items, updateIndex, item)
    },
    SET_LOADING_STATE(state, loading) {
      state.loading = loading
    },
    SET_EDIT_MODE(state, editMode) {
      state.editMode = editMode
    },
    SET_ITEM_ID(state, id) {
      state.itemId = id
    },
    REMOVE_ITEM(state, itemId) {
      var removeIndex = state.items.map(function(item) { return item.id; }).indexOf(itemId);
      state.items.splice(removeIndex, 1);
    },
    SET_FORM_VISIBLE(state, visible) {
      state.showForm = visible
    } 
  },
  actions: {
    FETCH_ITEMS({commit}) {
      commit("SET_LOADING_STATE", true)
      api.getAll().then((response) => {
        commit("SET_ITEMS", response.data)
        commit("SET_LOADING_STATE", false)
      }).catch((error)=> {
        console.log(error.response.data)
      })
    },
    DELETE_ITEM({commit}, itemId) {
      api.delete(itemId).then((response) => {
        commit("REMOVE_ITEM", itemId)
      }).catch((error) =>{
        console.log(error.response)
      })
    },
    SHOW_NEW_ITEM_FORM({commit}) {
      commit('SET_FORM_VISIBLE', true)
    },
    SHOW_EDIT_ITEM_FORM({commit, dispatch}, itemId) {
      api.get(itemId).then((response) =>{
        commit('SET_EDIT_MODE', true)
        commit('SET_ITEM', response.data)
        commit('SET_FORM_VISIBLE', true)      
      }).catch((error) => {
        console.log(error)
        reject(error)
      })
    },
    HIDE_ITEM_FORM({commit}) {
      commit('SET_EDIT_MODE', false)
      commit('SET_ITEM_ID',0), 
      commit('SET_FORM_VISIBLE', false)
    },
    CREATE_ITEM({commit}, item) {
      api.create(item).then((response) => {
        commit('ADD_ITEM', response.data)
      }).catch((error) =>{
        console.log(error.response)
      })
    },
    UPDATE_ITEM({commit}, item) {
      api.update(item).then((response) => {
        commit('UPDATE_ITEM', response.data)
      }).catch((error) =>{
        console.log(error.response)
      })
    },
  }
}