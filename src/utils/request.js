import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

// 设置请求拦截器

service.interceptors.request.use(config => {
  config.headers.icode = '986D83B9A59EF15B'
  return config
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
    ElMessage.error(err)
    return Promise.reject(new Error(err))
  }
)

export default service
