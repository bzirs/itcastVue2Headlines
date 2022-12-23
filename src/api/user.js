/**
 * @Author: bzirs
 * @Date: 2022-12-23 16:30:37
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 16:31:42
 * @FilePath: /vue2-itcast-headlines/src/api/user.js
 * @Description: user登录api
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import request from '@/utils/request'

// 用户登录注册
export const userLogin = obj => request.post('/v1_0/authorizations', obj)
