/*
 * @Author: your name
 * @Date: 2021-03-15 15:38:11
 * @LastEditTime: 2021-03-23 16:01:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vsCodeProjects/demo/vue-study/blogs-admin/vue.config.js
 */
"use strict";
const path = require("path");

const resolve = dir => {
  return path.join(__dirname, "./", dir);
};

// const isProd = () => {
//   return process.env.NODE_ENV === "production";
// };

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
  chainWebpack: config => {
    // webpack-html-plugin
    config.resolve.alias.set("@", resolve("src"));

    config.resolve.symlinks(true);
  }
};
