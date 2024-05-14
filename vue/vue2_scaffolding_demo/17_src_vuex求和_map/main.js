import Vue from 'vue'
import App from './App'
// 引入插件
import VueResource from 'vue-resource'
// 引入store
import store from './store'

Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)

new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
      Vue.prototype.$bus = this
  }
}).$mount('#app')