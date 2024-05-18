export default {
    namespaced: true,
    state:{
      // 当前总数
      count: 0,
      hello: 'Hello ',
    },
    actions:{
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
    },
    // 修改state的唯一手段
    mutations:{
      INCR(state, value) {
        state.count += value
      },
      DECR(state, value) {
        state.count -= value
      }
    },
    getters: {
      bigSum(state) {
        return state.count * 10
      },
      info(state) {
        return 'Vuex'
      }
    }
  }