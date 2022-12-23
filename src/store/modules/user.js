/**
 * @Author: bzirs
 * @Date: 2022-12-23 16:34:19
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 16:51:36
 * @FilePath: /vue2-itcast-headlines/src/store/modules/user.js
 * @Description: vuex user.js
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import { userLogin } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

const getUserState = _ => ({
  token: getToken()
})

const mutations = {
  // 更新token
  updateToken (state, payload) {
    state.token = payload

    // 本地存储token
    setToken(payload)
  }
}

const actions = {
  // 用户登录
  async toUserLogin ({ commit }, payload) {
    const { data: { token } } = await userLogin(payload)

    commit('updateToken', token)
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
