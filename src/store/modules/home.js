/*
 * @Author: your name
 * @Date: 2020-06-10 10:08:22
 * @LastEditTime: 2020-06-11 17:12:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/store/modules/home.js
 */
// import request from "../../utils/request"
const state = {
  n: 3,
  todolist: [],
  input1: "121",
}
const actions = {
  actionadd({ commit }, n) {
    commit("add", n)
  },
  gethomelist({ commit }, payload) {
    console.log(commit, 22, payload, 111)
    // request({
    //   url: "/fund/fund-biz-operation/op/entry",
    //   method: "post",
    // })
  },
}

const mutations = {
  add(state, n) {
    console.log(111, n)
    state.n = n
  },
  addTolist(state, input) {
    input && state.todolist.push(input)
  },
}
const getters = {}
export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
}
