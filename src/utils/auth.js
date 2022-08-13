import { getItem, saveItem } from './storage.js'

import { TIME_STAMP, TOKEN_TIME_OUT_VALUE } from '@/constants'
// 获取时间戳
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

// 设置时间戳
export function setTimeStamp() {
  saveItem(TIME_STAMP, Date.now())
}

// 判断是否超时
export function isCheckTimeOut() {
  const currentTimeStamp = Date.now()
  const tokenTimeStamp = getTimeStamp()
  return currentTimeStamp - tokenTimeStamp > TOKEN_TIME_OUT_VALUE
}
