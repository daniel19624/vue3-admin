/*
用户信息相关的state模块
*/
import { login, getUserInfo } from '@/api/sys.js'
import { getItem, saveItem, clearAll } from '@/utils/storage.js'

import { TOKEN } from '@/constants/index.js'

import Router from '../router/index'
import md5 from 'md5'

import { setTimeStamp } from '@/utils/auth.js'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    saveToken(state, token) {
      state.token = token
      saveItem(TOKEN, token)
    },
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 登录的请求动作
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            // 设置用户登录的token时间戳
            setTimeStamp()
            this.commit('user/saveToken', data.token)
            resolve(data)
            Router.push('/')
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/saveUserInfo', res)
      return res
    },
    logout() {
      this.commit('user/saveToken', '')
      this.commit('user/saveUserInfo', {})
      clearAll()
    }
  }
}
