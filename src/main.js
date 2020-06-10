/*
 * @Author: your name
 * @Date: 2020-06-08 09:25:41
 * @LastEditTime: 2020-06-10 15:47:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/main.js
 */

import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import i18n from "./Il8n"
import "./utils/element-ui"
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app")
