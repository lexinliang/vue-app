/*
 * @Author: your name
 * @Date: 2020-06-11 13:36:28
 * @LastEditTime: 2020-06-12 18:16:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/utils/request.js
 */
import axios from "axios"
// import { Message, Loading } from "element-ui"
import sha1 from "crypto-js/sha1"
export const fetchServerData = (payload) => {
  const {
    baseURL = process.env.VUE_APP_BASE_URL || "",
    // callback,
    // errorCallback,
    // headers = {
    //   "Content-Type": "application/json;charset=UTF-8",
    // },
    // loadingText = "加载中",
    // showLoading = true,
    method = "post",
    data,
    params,
    // showSuccessMsg = false,
    timeout = 16 * 1000,
    url = "",
  } = payload
  let headers = payload.headers || {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  }
  let timestamp = new Date().valueOf()
  function MathRand() {
    let num = ""
    for (let i = 0; i < 6; i++) {
      num += Math.floor(Math.random() * 10)
    }
    return num
  }
  let nonce = MathRand()
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  console.log(userInfo, 1111)
  if (userInfo && userInfo.sessionid) {
    let session = userInfo
    headers.nonce = nonce
    headers.sessionid = session.sessionid
    headers.signature = sha1("access_token=" + session.access_token + "&nonce=" + nonce + "&timestamp=" + timestamp + "&url=" + url + "")
    headers.signature_refresh = sha1("refresh_token=" + session.refresh_token + "&nonce=" + nonce + "&timestamp=" + timestamp + "&url=" + url + "")
    headers.timestamp = timestamp
  }
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
      console.log(config, "config======>")
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
