/**
 * @Author: bzirs
 * @Date: 2022-12-22 21:15:29
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-22 22:44:30
 * @FilePath: /vue2-itcast-headlines/src/main.js
 * @Description:
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant
import '@/utils/vant'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
