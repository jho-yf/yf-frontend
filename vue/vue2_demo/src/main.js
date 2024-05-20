import Vue from 'vue'
import App from './App'

import { Button } from 'element-ui';

Vue.config.productionTip = false

Vue.component(Button.name, Button);

new Vue({
  render: h => h(App),
  beforeCreate() {
      Vue.prototype.$bus = this
  },
}).$mount('#app')