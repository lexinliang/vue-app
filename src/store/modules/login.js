/*
 * @Author: your name
 * @Date: 2020-06-10 10:08:22
 * @LastEditTime: 2020-06-12 18:21:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/store/modules/home.js
 */

import { fetchServerData } from "../../utils/request"
//action types
export const LOGIN_ACTION = "LOGIN_ACTION" //登录action

//mutation types
export const LOGIN_MUATION = "LOGIN_MUATION" //mutation

const state = {
  session: {},
}
const actions = {
  //获取列表
  [LOGIN_ACTION]: async function({ commit }, params) {
    const result = await fetchServerData({
      url: "/api/inner-platform-security/app/a/user/login",
      method: "post",
      data: {
        ...params,
      },
    })
    if (!result.data.code) {
      commit(LOGIN_MUATION, result.data.data.session)
    }
  },
}

const mutations = {
  //存储列表
  [LOGIN_MUATION](state, payload) {
    localStorage.setItem("userInfo", JSON.stringify(payload))
    state.session = payload
  },
}
const getters = {}
export default {
  state,
  actions,
  mutations,
  getters,
}
