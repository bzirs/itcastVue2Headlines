<!--
 * @Author: bzirs
 * @Date: 2022-12-29 13:07:38
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-29 14:24:48
 * @FilePath: /vue2-itcast-headlines/src/views/chat/index.vue
 * @Description:
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="container">
    <!-- 固定导航 -->
    <van-nav-bar fixed left-arrow @click-left="$router.back()" title="小智同学"></van-nav-bar>

    <!-- 聊天主体区域 -->
    <div class="chat-list" ref="chatList">
      <div v-for="item in list" :key="item.timestamp">
              <!-- 左侧是机器人小智 -->
              <div class="chat-item left" v-if="item.name === 'xz'">
                <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <div class="chat-pao">{{item.msg}}</div>
              </div>

              <!-- 右侧是当前用户 -->
              <div class="chat-item right" v-else>
                <div class="chat-pao">{{item.msg}}</div>
                <van-image fit="cover" round :src="$store.getters.avatar" />
              </div>
      </div>
    </div>

    <!-- 对话区域 -->
    <div class="reply-container van-hairline--top">
      <van-field v-model.trim="word" placeholder="说点什么...">
        <span @click="send()" slot="button" style="font-size: 12px; color: #999">提交</span>
      </van-field>
    </div>
  </div>
</template>

<script>
import socket from '@/utils/websocket'
export default {
  name: 'ChatPage',
  components: {},
  props: {},
  data () {
    return {
      word: '',
      list: []
    }
  },
  async created () {
    socket.on('connect', () => {
      this.list.push({
        name: 'xz',
        msg: '我已经准备好了，你可以来撩我了',
        timestamp: Date.now()
      })
      // console.log('连接成功....', socket)
    })
    socket.on('message', obj => {
      console.log('从服务器端发过来的数据是', obj)
      this.list.push({
        name: 'xz',
        msg: obj.msg,
        timestamp: obj.timestamp
      })
    })
  },
  mounted () {},
  activated () {

  },
  updated () {},
  methods: {
    send () {
      this.scroll()
      if (this.word === '') {
        return
      }
      // 1. 通过socket.io向服务器发消息
      socket.emit('message', {
        msg: this.word,
        timestamp: Date.now()
      })
      // 2. 把消息添加列表中
      this.list.push({
        name: 'me',
        msg: this.word,
        timestamp: Date.now()
      })

      // 3. 清空内容
      this.word = ''
    },
    scroll () {
      // console.dir(this.$refs.chatList)
      // console.log(this.$refs.chatList.scrollHeight)
      this.$nextTick(() => {
        this.$refs.chatList.scrollTop = this.$refs.chatList.scrollHeight
      })
    }
  },
  computed: {},
  watch: {
    list (newV) {
      // console.log(newV)
      this.scroll()
    }
  },
  directives: {}
}
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  background: #fafafa;
  padding: 46px 0 50px 0;

  .chat-list {
    height: 100%;
    overflow-y: scroll;

    .chat-item {
      padding: 10px;

      .van-image {
        vertical-align: top;
        width: 40px;
        height: 40px;
      }

      .chat-pao {
        vertical-align: top;
        display: inline-block;
        min-width: 40px;
        max-width: 70%;
        min-height: 40px;
        line-height: 38px;
        border: 0.5px solid #c2d9ea;
        border-radius: 4px;
        position: relative;
        padding: 0 10px;
        background-color: #e0effb;
        word-break: break-all;
        font-size: 14px;
        color: #333;

        &::before {
          content: '';
          width: 10px;
          height: 10px;
          position: absolute;
          top: 12px;
          border-top: 0.5px solid #c2d9ea;
          border-right: 0.5px solid #c2d9ea;
          background: #e0effb;
        }
      }
    }
  }
}

.chat-item.right {
  text-align: right;

  .chat-pao {
    margin-left: 0;
    margin-right: 15px;

    &::before {
      right: -6px;
      transform: rotate(45deg);
    }
  }
}

.chat-item.left {
  text-align: left;

  .chat-pao {
    margin-left: 15px;
    margin-right: 0;

    &::before {
      left: -5px;
      transform: rotate(-135deg);
    }
  }
}

.reply-container {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 44px;
  width: 100%;
  background: #f5f5f5;
  z-index: 9999;
}

::v-deep .van-nav-bar {
  .van-icon {
    color: #fff;
  }
}

::v-deep .van-nav-bar__title {
  color: #fff;
}
</style>
