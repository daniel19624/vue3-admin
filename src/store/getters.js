import variables from '@/style/variables.scss'
const getters = {
  token: state => state.user.token,
  hasUserInfo: state => JSON.stringify(state.user.userInfo) !== '{}',
  avatar: state => state.user.userInfo.avatar,
  cssVar: state => variables,
  sidebarOpened: state => state.app.sidebarOpened,
  language: state => state.app.language
}

export default getters
