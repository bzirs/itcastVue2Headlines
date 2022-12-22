/**
 * @Author: bzirs
 * @Date: 2022-12-22 21:15:29
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-22 22:18:29
 * @FilePath: /vue2-itcast-headlines/src/router/index.js
 * @Description: 路由
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/layout' },
  { path: '/user', component: () => import('@/views/User'), name: 'user' },
  { path: '/login', component: () => import('@/views/Login'), name: 'login' },
  { path: '/register', component: () => import('@/views/Register'), name: 'register' },
  { path: '/search', component: () => import('@/views/Search'), name: 'search' }
]

const router = new VueRouter({
  routes
})

export default router
