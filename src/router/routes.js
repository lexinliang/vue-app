/*
 * @Author: your name
 * @Date: 2020-06-10 09:29:17
 * @LastEditTime: 2020-06-10 09:36:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/router/routes.js
 */

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../pages/home"),
  },
  {
    path: "/mainproducts",
    name: "mainproducts",
    component: () => import(/* webpackChunkName: "about" */ "../pages/mainproducts"),
  },
]
export { routes }
