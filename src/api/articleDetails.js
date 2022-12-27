/**
 * @Author: bzirs
 * @Date: 2022-12-26 22:37:31
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-27 15:42:50
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
