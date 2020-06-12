/*
 * @Author: your name
 * @Date: 2020-06-10 09:47:31
 * @LastEditTime: 2020-06-12 17:08:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/store/index.js
 */

import Vue from "vue"
import Vuex from "vuex"
import login from "./modules/login"
import home from "./modules/home"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    home,
  },
})
