/**
 * @Author: bzirs
 * @Date: 2022-12-23 17:13:25
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 10:29:01
 * @FilePath: /vue2-itcast-headlines/src/api/home.js
 * @Description: api home.js
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import request from '@/utils/request'

// 获取全部频道列表
export const getHomeChannelList = _ => request.get('/v1_0/channels')

// 获取游客频道列表
export const getChannerList = _ => request.get('/v1_0/user/channels')

// 获取文章列表
export const getHomeArticleList = obj => request.get('/v1_0/articles', { params: obj })

// 不感兴趣
export const toUninterested = target => request.post('/v1_0/article/dislikes', { target })

// 举报
export const toReport = obj => request.post('/v1_0/article/dislikes', obj)

// 添加取消频道
export const changeChannel = channels => request.put('/v1_0/user/channels', { channels })
