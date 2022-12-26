/**
 * @Author: bzirs
 * @Date: 2022-12-26 22:37:31
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 22:40:22
 * @FilePath: /vue2-itcast-headlines/src/api/articleDetails.js
 * @Description: 文章详情相关api
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import request from '@/utils/request'

export const getArticleDetails = id => request.get(`/v1_0/articles/${id}`)
