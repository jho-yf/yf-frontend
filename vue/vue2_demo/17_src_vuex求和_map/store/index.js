// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 准备actions--用于响应组件中的动作
const actions = {
  incrOdd(ctx, value) {
    if (ctx.state.count % 2) {
      ctx.commit('INCR', value)
    }
  },
  incrWait(ctx, value) {
    setTimeout(() => {
      ctx.commit('INCR', value);
    }, 1000);
  }
}

// 准备mutations--用于操作数据(state)
const mutations = {
  INCR(state, value) {
    state.count += value
  },
  DECR(state, value) {
    state.count -= value
  }
}

// 准备state--用于存储数据
const state = {
  // 当前总数
  count: 0,
  hello: 'Hello '
}

const getters = {
  bigSum(state) {
    return state.count * 10
  },
  info(state) {
    return 'Vuex'
  }
}

// 应用Vuex插件
Vue.use(Vuex)

// 创建store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})