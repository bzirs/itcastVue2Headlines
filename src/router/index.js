/**
 * @Author: bzirs
 * @Date: 2022-12-22 21:15:29
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-22 22:55:56
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
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    name: 'layout',
    children: [
      { path: '/', redirect: '/layout/home' },
      { path: '/layout/home', component: () => import('@/views/Home'), name: 'home' },
      { path: '/layout/question', component: () => import('@/views/Question'), name: 'question' },
      { path: '/layout/video', component: () => import('@/views/Video'), name: 'video' },
      { path: '/layout/user', component: () => import('@/views/User'), name: 'user' }
    ]
  },
  { path: '/login', component: () => import('@/views/Login'), name: 'login' },
  { path: '/register', component: () => import('@/views/Register'), name: 'register' },
  { path: '/search', component: () => import('@/views/Search'), name: 'search' }
]

const router = new VueRouter({
  routes
})

export default router
