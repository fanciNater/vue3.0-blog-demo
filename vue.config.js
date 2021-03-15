/*
 * @Author: your name
 * @Date: 2021-03-15 15:38:11
 * @LastEditTime: 2021-03-15 17:33:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vsCodeProjects/demo/vue-study/blogs-admin/vue.config.js
 */
const path = require("path");

const resolve = dir => {
  return path.join(__dirname, "./", dir);
};

module.exports = {
  lintOnSave: false,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: "8090",
    disableHostCheck: false,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: () => ({
    // name: 'vue-cli3-template',
    resolve: {
      alias: {
        // vue动态值
        // vue$: 'vue/dist/vue.esm.js',

        // vue快速路径
        "@": resolve("src")
      }
    },
    plugins: []
  })
};
