/**
 * @Author: bzirs
 * @Date: 2022-12-22 21:15:29
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 16:07:06
 * @FilePath: /vue2-itcast-headlines/vue.config.js
 * @Description:
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'nav-bar-background-color': '#1989fa'
          }
        }
      }
    }
  }
})
