/*
 * @Author: your name
 * @Date: 2020-06-08 09:25:41
 * @LastEditTime: 2020-06-09 16:17:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/babel.config.js
 */

module.exports = {
  presets: ["@vue/app", ["@babel/preset-env", { modules: false }]],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
}
