/*
在此封装登录请求

*/
import request from '../utils/request.js'

export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
