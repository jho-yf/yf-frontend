const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave: false,
  // 开启代理服务器 方式一
  // devServer: {
  //   proxy: 'http://localhost:3000'
  // }
  // 开启代理服务器 方式二
  devServer: {
    proxy: {
      '/server1': {
        target: 'http://localhost:3000',
      },
      '/server2': {
        target: 'http://localhost:3001',
        // 用于重写请求路径
        // pathRewrite: {'^/server2': ''},
        // 用于支持websocket
        // ws: true,
        // 用于控制请求头中的host值
        // changeOrigin: true
      }
    }
  }
})
