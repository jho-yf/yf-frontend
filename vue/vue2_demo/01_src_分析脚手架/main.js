/*
    项目入口
*/

// 引入Vue
import Vue from 'vue'
// 引入App组件（所有组件的父组件）
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例
new Vue({
  // 将App组件放入容器中
  render: h => h(App),
})
  // 将App组件挂载到id为app的元素上
.$mount('#app')
