/*
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-21 21:56:02
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-01 09:57:43
 * @FilePath: \jungehousing\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
const { resolve } = require("path");
const port = 9010
const name = '俊阁家园'
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  devServer: {
    host: "0.0.0.0",
    port,
    proxy: {
      // 开发模式请求基础api反代理
      [process.env.VUE_APP_BASE_API]: {
        target: `http://43.143.41.35:8080`,
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
