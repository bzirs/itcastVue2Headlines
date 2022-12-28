/**
 * @Author: bzirs
 * @Date: 2022-12-28 09:50:01
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 09:56:21
 * @FilePath: /vue2-itcast-headlines/src/permission.js
 * @Description:
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import router from './router'
import store from './store'

const balckList = ['/layout/user', '/chat']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    next()
  } else if (balckList.includes(to.path)) {
    next('/login')
  } else {
    next()
  }
})
