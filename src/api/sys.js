/*
在此封装登录请求
*/
import request from '../utils/request.js'

// 登录的请求方法
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 获取用户信息的请求方法
export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}
