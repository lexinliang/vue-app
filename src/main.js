/*
 * @Author: your name
 * @Date: 2020-06-08 09:25:41
 * @LastEditTime: 2020-06-09 16:20:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/main.js
 */

import Vue from "vue"
import App from "./App.vue"
import "./utils/element-ui"
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")
