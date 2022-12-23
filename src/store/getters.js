/**
 * @Author: bzirs
 * @Date: 2022-12-23 16:32:37
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 17:11:57
 * @FilePath: /vue2-itcast-headlines/src/store/getters.js
 * @Description: vuex 计算属性
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

const getters = {
  token: state => state.user.token
}

export default getters
