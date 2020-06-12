/*
 * @Author: your name
 * @Date: 2020-06-11 14:14:04
 * @LastEditTime: 2020-06-12 17:09:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/vue.config.js
 */

module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "^/api": {
        target: "https://devfintech.cgws.com:8443",
        ws: true,
        changeOrigin: true,
      },
      "^/biz": {
        target: "https://devfintech.cgws.com:8443",
        ws: true,
        changeOrigin: true,
      },
      "^/fund": {
        target: "https://devfintech.cgws.com:8443",
        ws: true,
        changeOrigin: true,
      },
      "^/app": {
        target: "https://devfintech.cgws.com:8443",
        ws: true,
        changeOrigin: true,
      },
    },
  },
}
