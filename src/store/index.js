/**
 * @Author: bzirs
 * @Date: 2022-12-22 21:15:29
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 10:33:39
 * @FilePath: /vue2-itcast-headlines/src/store/index.js
 * @Description: vuex 入口文件
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 导入vuex计算属性
import getters from '@/store/getters'
// 导入模块
import user from '@/store/modules/user'
import channel from '@/store/modules/channel'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    user,
    channel
  }
})
