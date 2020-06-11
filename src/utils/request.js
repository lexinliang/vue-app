/*
 * @Author: your name
 * @Date: 2020-06-11 13:36:28
 * @LastEditTime: 2020-06-11 17:16:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/utils/request.js
 */
import axios from "axios"
// import { Message, Loading } from "element-ui"
export const fetchServerData = (payload) => {
  const {
    baseURL = process.env.VUE_APP_BASE_URL || "",
    // callback,
    // errorCallback,
    headers = {
      "Content-Type": "application/json;charset=UTF-8",
    },
    // loadingText = "加载中",
    // showLoading = true,
    method = "post",
    data,
    params,
    // showSuccessMsg = false,
    timeout = 16 * 1000,
    url = "",
  } = payload
  console.log(params, 111)
  //请求参数
  const config = {
    baseURL,
    data,
    url,
    method,
    params,
    timeout,
    headers,
  }
  const server = axios.create()
  server.interceptors.request.use(
    (config) => {
      console.log(config, 123)
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  server.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // 发起请求
  return server(config)
}
