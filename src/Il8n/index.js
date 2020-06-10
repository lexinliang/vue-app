/*
 * @Author: your name
 * @Date: 2020-06-10 14:56:29
 * @LastEditTime: 2020-06-10 15:12:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/Il8n/index.js
 */
//中英文切换
import Vue from "vue"
import VueI18n from "vue-i18n"
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: "zh", //从localStorage里获取用户中英文选择，没有则默认中文
  messages: {
    zh: require("../language/zh.js"),
    en: require("../language/en.js"),
  },
})

export default i18n
