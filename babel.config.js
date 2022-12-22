/**
 * @Author: bzirs
 * @Date: 2022-12-22 21:15:29
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-22 22:43:41
 * @FilePath: /vue2-itcast-headlines/babel.config.js
 * @Description:
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
