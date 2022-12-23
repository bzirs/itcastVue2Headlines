/**
 * @Author: bzirs
 * @Date: 2022-12-23 16:43:23
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 16:43:24
 * @FilePath: /vue2-itcast-headlines/src/utils/auth.js
 * @Description: 身份验证 本地存储
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

const TOKEN = 'itcast_headlines_token'

// 本地存储token
export const setToken = token => localStorage.setItem(TOKEN, token)

// 获取本地token
export const getToken = _ => localStorage.getItem(TOKEN)

// 删除本地token
export const rmToken = _ => localStorage.removeItem(TOKEN)
