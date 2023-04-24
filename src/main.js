import { createApp } from 'vue'
import App from './App.vue'

import dataV from '@jiaminghi/data-view'

import router from './router'

const app = createApp(App)
app.use(router)
app.use(dataV)
app.mount('#app')