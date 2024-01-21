// 引入自定义组件
import SvgIcon from './SvgIcon/index.vue'

const globalComponents = { SvgIcon }

// 对外暴漏插件对象
export default {
  install(app) {
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key])
    })
  },
}
