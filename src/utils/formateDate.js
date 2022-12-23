/**
 * @Author: bzirs
 * @Date: 2022-12-23 21:03:35
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 21:23:57
 * @FilePath: /vue2-itcast-headlines/src/utils/formateDate.js
 * @Description: 格式化时间 过滤器
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

export const relativeTime = time => {
  const t = new Date(time)
  const diff = Date.now() - t.getTime()

  const year = Math.floor(diff / (1000 * 3600 * 24 * 365))
  if (year) {
    return `${year}年前`
  }
  const month = Math.floor(diff / (1000 * 3600 * 24 * 30))
  if (month) {
    return `${month}月前`
  }
  const day = Math.floor(diff / (1000 * 3600 * 24))
  if (day) {
    return `${day}天前`
  }
  const hour = Math.floor(diff / (1000 * 3600))
  if (hour) {
    return `${hour}小时前`
  }
  const minute = Math.floor(diff / (1000 * 60))
  if (minute) {
    return `${minute}分钟前`
  } else {
    return '刚才'
  }
}

// val === Vue
const install = Vue => Vue.filter('relativeTime', relativeTime)

// Vue.use() 要求注册的组件js文件内默认导入的对象中有一个install方法
export default {
  install
}
