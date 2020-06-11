/*
 * @Author: your name
 * @Date: 2020-06-10 09:29:00
 * @LastEditTime: 2020-06-11 09:05:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/router/index.js
 */

import Vue from "vue"
import VueRouter from "vue-router"
import { routes } from "./routes"

Vue.use(VueRouter)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
})

export default router
