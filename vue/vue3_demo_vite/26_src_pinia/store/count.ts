import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    sum: 0
  }),
  actions: {
    increment(value) {
      console.log('increment action invoked. value = ', value)
      this.sum += value
    }
  },
  getters: {
    double: (state) => state.sum * 2
  }
})