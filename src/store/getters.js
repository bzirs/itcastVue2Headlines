/**
 * @Author: bzirs
 * @Date: 2022-12-23 16:32:37
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 14:47:46
 * @FilePath: /vue2-itcast-headlines/src/store/getters.js
 * @Description: vuex 计算属性
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

const getters = {
  token: state => state.user.token,
  channelList: state => state.channel.channelList,
  allChannelList: state => state.channel.allChannelList,
  notSelectChannel: state => state.channel.notSelectChannel,
  historys: state => state.search.historys,
  userInfo: state => state.user.userInfo
}
export default getters
