/**
 * @Author: bzirs
 * @Date: 2022-12-26 22:37:31
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 09:19:24
 * @FilePath: /vue2-itcast-headlines/src/api/articleDetails.js
 * @Description: 文章详情相关api
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import request from '@/utils/request'

// 获取文章详情
export const getArticleDetails = id => request.get(`/v1_0/articles/${id}`)

// 收藏文章
export const collectionArticle = id => request.post('/v1_0/article/collections', { target: id })

// 取消收藏
export const cancelCollectionArticle = id => request.delete(`/v1_0/article/collections/${id}`)

// 点赞
export const articleFabulous = target => request.post('/v1_0/article/likings', { target })

// 取消点赞
export const articleNotFabulous = target => request.delete(`/v1_0/article/likings/${target}`)

// 不感兴趣
export const articleNotLike = target => request.post('/v1_0/article/dislikes', { target })

// 关注作者
export const articleAttention = target => request.post('/v1_0/user/followings', { target })

// 取消关注作者
export const articleNotAttention = target => request.delete(`/v1_0/user/followings/${target}`)
