const { defineConfig } = require('@vue/cli-service')
const { resolve } = require("path");
const port = 9010
const name = '俊阁家园'
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:'./',
  devServer: {
    host: "0.0.0.0",
    port,
    proxy: {
      // 开发模式请求基础api反代理
      [process.env.VUE_APP_BASE_API]: {
        target: `http://1785s28l17.iask.in:36629`,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
  },
  configureWebpack: {
    name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack(config) {
    config.plugin("html").tap((args) => {
      // 标题
      args[0].title = name;
      return args;
    });
  },
});
