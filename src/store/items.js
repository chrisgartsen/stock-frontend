export default {
  state: {
    name: 'Test name'
  },
  getters: {
    getName(state) {
      return state.name
    }
  }
}