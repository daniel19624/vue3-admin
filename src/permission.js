/*
在这里做一下登录的鉴权处理
1. 用户已经登录，再token未过期的情况下，无法跳转到登录页面
2. 用户已经登录了，token过期了，跳转到登录页面
3. 用户未登录，只要用户访问的是页面的白名单，都可以放行
*/

import Router from '@/router/index.js'
import store from '@/store/index.js'
const whiteList = ['/login']
Router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
