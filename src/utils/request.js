/**
 * @Author: bzirs
 * @Date: 2022-12-23 16:28:44
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 17:02:17
 * @FilePath: /vue2-itcast-headlines/src/utils/request.js
 * @Description: aixos二次封装
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import axios from 'axios'
import { Toast } from 'vant'

const request = axios.create({
  baseURL: 'http://geek.itheima.net',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
// 在发送请求之前做些什么

  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
request.interceptors.response.use(function (response) {
// 2xx 范围内的状态码都会触发该函数。
  console.log(response)

  const res = response.data

  // const { message } = res
  // Toast.success(message)
  // 对响应数据做点什么
  return res
}, function (error) {
// 超出 2xx 范围的状态码都会触发该函数。
  const { response: { data: { message } } } = error

  Toast.fail(message)

  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request
