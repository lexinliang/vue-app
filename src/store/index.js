/*
 * @Author: your name
 * @Date: 2020-06-10 09:47:31
 * @LastEditTime: 2020-06-10 10:08:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/store/index.js
 */

import Vue from "vue"
import Vuex from "vuex"
import home from "./modules/home"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
  },
})
