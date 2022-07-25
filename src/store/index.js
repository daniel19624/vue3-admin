import { createStore } from 'vuex'
import user from './user'
import getters from './getters'
export default createStore({
  getters,
  modules: {
    user
  },
  state: {},
  mutations: {},
  actions: {}
})
