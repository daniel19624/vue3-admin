import { getItem, saveItem } from '../utils/storage'
import { LANG } from '../constants'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage(state, lang) {
      saveItem(LANG, lang)
      console.log(lang)
      state.language = lang
    }
  },
  actions: {}
}
