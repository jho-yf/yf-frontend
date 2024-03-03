import Vue from 'vue'
import App from './App'
import { globalMixin } from './globalMixin'

Vue.config.productionTip = false

Vue.mixin(globalMixin)

new Vue({
  render: h => h(App)
}).$mount('#app')