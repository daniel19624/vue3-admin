import variables from '@/style/variables.scss'
const getters = {
  token: state => state.user.token,
  hasUserInfo: state => JSON.stringify(state.user.userInfo) !== '{}',
  avatar: state => state.user.userInfo.avatar,
  cssVar: state => variables,
  sidebarOpened: state => state.app.sidebarOpened
}

export default getters
