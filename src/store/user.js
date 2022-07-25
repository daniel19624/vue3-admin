/*
用户信息相关的state模块

*/
import { login } from '@/api/sys.js'
import { getItem, saveItem } from '@/utils/storage.js'

import { TOKEN } from '@/constants/index.js'

import Router from '../router/index'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    saveToken(state, token) {
      state.token = token
      saveItem(TOKEN, token)
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            this.commit('user/saveToken', data.token)
            resolve(data)
            Router.push('/')
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
