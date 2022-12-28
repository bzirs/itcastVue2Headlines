/**
 * @Author: bzirs
 * @Date: 2022-12-23 16:30:37
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 11:39:04
 * @FilePath: /vue2-itcast-headlines/src/api/user.js
 * @Description: user登录api
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import request from '@/utils/request'

// 用户登录注册
export const userLogin = obj => request.post('/v1_0/authorizations', obj)

// 获取用户信息
export const userInfo = _ => request.get('/v1_0/user')

// 获取用户其他信息
export const userOtherInfo = _ => request.get('/v1_0/user/profile')
