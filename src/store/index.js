import { createStore } from 'vuex'
import user from './user'
import app from './app'
import getters from './getters'
export default createStore({
  getters,
  modules: {
    user,
    app
  },
  state: {},
  mutations: {},
  actions: {}
})
