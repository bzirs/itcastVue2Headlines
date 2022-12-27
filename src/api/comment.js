/**
 * @Author: bzirs
 * @Date: 2022-12-27 22:33:33
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-27 22:35:10
 * @FilePath: /vue2-itcast-headlines/src/api/comment.js
 * @Description:
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
import request from '@/utils/request'

// 获取评论列表
export const getComments = params => request.get('/v1_0/comments', { params })
