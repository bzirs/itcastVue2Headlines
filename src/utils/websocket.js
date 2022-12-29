/**
 * @Author: bzirs
 * @Date: 2022-12-29 13:41:00
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-29 14:01:19
 * @FilePath: /vue2-itcast-headlines/src/utils/websocket.js
 * @Description:
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import store from '@/store'
import io from 'socket.io-client'

const socket = io('http://geek.itheima.net', {
  query: {
    token: store.getters.token
  },
  transports: ['websocket']
})

export default socket
