import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'

// 创建应用实例对象
const app = createApp(App)

// 安装自定义插件
app.use(globalComponent)
// 将应用挂载到挂载点
app.mount('#app')
