/*
 * @Author: your name
 * @Date: 2020-06-10 09:29:00
 * @LastEditTime: 2020-06-10 09:33:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/router/index.js
 */

import Vue from "vue"
import VueRouter from "vue-router"
import { routes } from "./routes"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
})

export default router
