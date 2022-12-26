/**
 * @Author: bzirs
 * @Date: 2022-12-26 14:12:12
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 14:47:57
 * @FilePath: /vue2-itcast-headlines/src/store/modules/search.js
 * @Description: 搜索相关vuex
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import { getHistory, setHistory } from '@/utils/history'

const getSearchState = _ => ({
  historys: JSON.parse(getHistory()) || []
})

const mutations = {
  // 更新搜索历史记录
  updateHistorys (state, payload) {
    state.historys = payload

    setHistory(JSON.stringify(payload))
  }
}

const state = getSearchState()

const search = {
  namespaced: true,
  state,
  mutations
}

export default search
