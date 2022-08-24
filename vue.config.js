const { defineConfig } = require('@vue/cli-service')
const port = 9010
const name = '俊阁家园'
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0',
    port,
    proxy: {
      // 开发模式请求基础api反代理
      [process.env.VUE_APP_BASE_API]: {
        target: `https://wx.hw.hongweisoft.com/veterans`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
