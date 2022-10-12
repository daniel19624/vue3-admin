import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store/index.js'
import { isCheckTimeOut } from './auth.js'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

// 设置请求拦截器
service.interceptors.request.use(config => {
  // config.headers.icode = '986D83B9A59EF15B'
  config.headers.icode = '3796B0E53DFF92CE'

  if (store.state.user.token) {
    if (isCheckTimeOut()) {
      // token 过期
      store.dispatch('user/logout')
      return Promise.reject(new Error('token已过期'))
    }
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(
  // 请求成功
  response => {
    const { success, message, data } = response.data
    if (!success) {
      // 业务失败
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    } else {
      // 业务成功
      return data
    }
  },
  // 请求失败
  err => {
    if (err.response && err.response.data && err.response.data.code === 401) {
      // token超时
      store.dispatch('user/logout')
    }
    ElMessage.error(err)
    return Promise.reject(new Error(err))
  }
)

export default service
