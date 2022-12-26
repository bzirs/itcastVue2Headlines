/**
 * @Author: bzirs
 * @Date: 2022-12-26 20:39:41
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 21:08:52
 * @FilePath: /vue2-itcast-headlines/src/api/search.js
 * @Description:search api
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import request from '@/utils/request'

export const getSearchResult = (q, params) => request.get(`/v1_0/search?q=${q}`, { params })
