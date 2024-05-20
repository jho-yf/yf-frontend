import Vue from 'vue'
import App from './App'
import plugins from './plugins'

Vue.config.productionTip = false

Vue.use(plugins, 'str', 1)

new Vue({
  render: h => h(App)
}).$mount('#app')