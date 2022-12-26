/**
 * @Author: bzirs
 * @Date: 2022-12-26 14:08:13
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 14:45:46
 * @FilePath: /vue2-itcast-headlines/src/utils/history.js
 * @Description: 搜索历史持久化
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

const HISTORY = 'itcast_headlines_search_history'

// 本地存储历史搜索记录
export const setHistory = str => localStorage.setItem(HISTORY, str)

// 获取本地历史搜索记录
export const getHistory = _ => localStorage.getItem(HISTORY)

// 删除本地历史搜索记录
export const rmHistory = _ => localStorage.removeItem(HISTORY)
