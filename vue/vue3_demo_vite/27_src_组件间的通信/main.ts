import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import emitter from '@/utils/emitter'

const app = createApp(App)

app.use(router)
app.mount('#app')
