import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './style/index.scss'
import installIcons from '@/icons'
import i18n from '@/i18n/index.js'

import './permission.js'
const app = createApp(App)

installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
