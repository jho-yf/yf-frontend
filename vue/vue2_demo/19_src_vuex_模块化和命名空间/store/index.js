// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import countScope from './count'
import personScope from './person'

// 应用Vuex插件
Vue.use(Vuex)

// 创建store
export default new Vuex.Store({
  modules: {
    countScope,
    personScope
  }
})