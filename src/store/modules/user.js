/**
 * @Author: bzirs
 * @Date: 2022-12-23 16:34:19
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 17:00:32
 * @FilePath: /vue2-itcast-headlines/src/store/modules/user.js
 * @Description: vuex user.js
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import { userInfo, userLogin, userOtherInfo } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

const getUserState = _ => ({
  token: getToken(),

  // 用户信息
  userInfo: {}
})

const mutations = {
  // 更新token
  updateToken (state, payload) {
    state.token = payload

    // 本地存储token
    setToken(payload)
  },
  // 更新用户信息
  updateUserInfo (state, payload) {
    state.userInfo = payload
  },
  // 更新用户头像
  updateUserAvatar (state, payload) {
    state.userInfo.photo = payload
  }
}

const actions = {
  // 用户登录
  async toUserLogin ({ commit }, payload) {
    const { data: { token, refresh_token: reToken } } = await userLogin(payload)

    // 刷新token存储本地
    localStorage.setItem('refresh_token', reToken)

    commit('updateToken', token)
  },
  // 获取用户信息
  async getUserInfo ({ commit }, payload) {
    const { data } = await userInfo()
    const { data: otherInfo } = await userOtherInfo()

    commit('updateUserInfo', { ...data, ...otherInfo })
  },
  // 删除用户信息
  async removeInfo ({ commit }, payload) {
    await commit('updateUserInfo', payload)
    await commit('updateToken', payload)
  }
}

const state = getUserState()

const user = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default user
