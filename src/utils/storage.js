
// 存储数据到本地存储
export const saveItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 从本地存储中取出数据
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 从本地存储中删除某一项数据

export const clearItem = (key) => {
  window.localStorage.removeItem(key)
}

// 从本地存储中删除所有的数据

export const clearAll = () => {
  window.localStorage.clear()
}
