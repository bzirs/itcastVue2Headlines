/**
 * @Author: bzirs
 * @Date: 2022-12-22 21:15:29
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 14:56:31
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
  { path: '/details', component: () => import('@/views/ArticleDetails'), name: 'details' },
  {
    path: '/search',
    component: () => import('@/views/Search'),
    name: 'search',
    // 动态路由
    children: [
    ]
  },
  { path: '/search/:q', component: () => import('@/views/Search/SearchResult.vue') },
  { path: '/edit', component: () => import('@/views/User/Edit.vue'), name: 'edit' }

]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
