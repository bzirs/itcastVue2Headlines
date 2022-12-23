/**
 * @Author: bzirs
 * @Date: 2022-12-22 21:15:29
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 16:04:00
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
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: (name) => `${name}/style/less`
      },
      'vant'
    ]
  ]
}
