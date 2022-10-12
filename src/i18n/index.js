import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
}

const locale = 'zh'

const i18n = createI18n({
  locale,
  legacy: false,
  globalInjection: true,
  messages
})

export default i18n
