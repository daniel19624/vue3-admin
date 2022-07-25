
export const validatePassword = () => {
  return (rules, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码长度不能少于6位'))
    } else {
      callback()
    }
  }
}
