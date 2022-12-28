/**
 * @Author: bzirs
 * @Date: 2022-12-28 09:50:01
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 10:04:48
 * @FilePath: /vue2-itcast-headlines/src/permission.js
 * @Description:
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import router from './router'
import store from './store'

import 'nprogress/nprogress.css' // progress bar style
import nProgress from 'nprogress'

nProgress.configure({ showSpinner: false }) // NProgress Configuration

const balckList = ['/layout/user', '/chat']
router.beforeEach((to, from, next) => {
  nProgress.start()
  const token = store.getters.token
  if (token) {
    store.dispatch('user/getUserInfo')
    next()
  } else if (balckList.includes(to.path)) {
    next('/login')
  } else {
    next()
  }

  nProgress.done()
})

router.afterEach(() => {
  nProgress.done()
})
