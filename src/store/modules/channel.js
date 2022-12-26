/**
 * @Author: bzirs
 * @Date: 2022-12-26 10:23:53
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 11:17:41
 * @FilePath: /vue2-itcast-headlines/src/store/modules/channel.js
 * @Description: 频道列表vuex
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
import { getChannerList, getHomeChannelList } from '@/api/home'

const getChannelState = _ => ({
  channelList: [],
  allChannelList: [],
  notSelectChannel: []
})

const mutations = {
  // 更新频道列表
  updateChannelList (state, payload) {
    state.channelList = payload
  },
  // 更新所有频道列表
  updateAllChannelList (state, payload) {
    state.allChannelList = payload
  },
  // 更新未选择的频道列表
  updatenNotSelectChannel (state, payload) {
    state.notSelectChannel = state.allChannelList.filter(
      (ele) => state.channelList.findIndex((e) => e.id === ele.id) === -1)
  }
}

const actions = {
  // 获取文章列表
  async toGetChannelList ({ commit }, payload) {
    const {
      data: { channels }
    } = await getChannerList()

    commit('updateChannelList', channels)
  },
  // 获取所有频道列表
  async toGetAllChannelList ({ commit }, payload) {
    const {
      data: { channels }
    } = await getHomeChannelList()

    commit('updateAllChannelList', channels)
  }
}

const state = getChannelState()

const channel = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default channel
