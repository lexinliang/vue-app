/*
 * @Author: your name
 * @Date: 2020-06-10 10:08:22
 * @LastEditTime: 2020-06-12 17:38:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/store/modules/home.js
 */

import { fetchServerData } from "../../utils/request"
//action types
export const GET_HOME_FUNDS = "GET_HOME_FUNDS" //列表

//mutation types
export const PUT_HOME_FUNDS = "PUT_HOME_FUNDS" //存储列表

const state = {
  funds: [],
}
const actions = {
  //获取列表
  GET_HOME_FUNDS: async function({ commit }) {
    const result = await fetchServerData({
      url: "/fund/fund-biz-operation/op/entry",
      method: "get",
    })
    console.log(result.data)
    commit(PUT_HOME_FUNDS, { list: result.data })
  },
  // getlist({ commit }) {
  //   const result = fetchServerData({
  //     url: "/fund/fund-biz-operation/op/entry",
  //     method: "get",
  //   })
  //   commit(PUT_HOME_FUNDS, { list: result.data })
  // },
}

const mutations = {
  //存储列表
  [PUT_HOME_FUNDS](state, payload) {
    //改造加入filelist，满足el-upload要求
    payload.list.forEach((item) => {
      item["fileList"] = [{ url: item["iconUrl"] }]
    })
    state.funds = payload.list
  },
}
const getters = {}
export default {
  state,
  actions,
  mutations,
  getters,
}
