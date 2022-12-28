<!--
 * @Author: bzirs
 * @Date: 2022-12-22 21:29:39
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 15:45:23
 * @FilePath: /vue2-itcast-headlines/src/views/Home/index.vue
 * @Description: Home.vue
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="">
    <!-- 首页 -->
    <div>
      <!-- 顶部栏 -->
      <van-nav-bar placeholder fixed title="黑马头条" right-text="搜索" @click-right="onNavClickRight" >
      <template #left>
        <van-image v-if="$store.getters.avatar" round width="30px" height="30px" fit :src="$store.getters.avatar" />
        <van-image v-else  round width="30px" height="30px" fit :src="loginImg" @click.native="$router.push('/login')" />
      </template>
      </van-nav-bar>

      <!-- 频道列表 -->
      <van-tabs @click="changeTab" ref="vanTabs">
        <van-tab :name="it.id" v-for="it in channelList" :title="it.name" :key="it.id">
          <keep-alive>
            <channel-content ref="channelContent" @openInterest="toOpenInterest" v-model="articleListObj" :articleList="articleList"></channel-content>
          </keep-alive>
        </van-tab>
      </van-tabs>
      <!-- 频道右侧按钮 -->
      <div class="tabsleft" @click="toChannel">
        <van-icon name="plus" />
      </div>
    </div>

    <!-- 编辑频道组件 -->
    <!-- <channel v-model="channelShow"></channel> -->
    <channel-edit v-model="channelShow"></channel-edit>

    <!-- 不感兴趣和反馈 -->
    <van-action-sheet v-model="show" :actions="actions" :cancel-text="cancel" close-on-click-action @select="toSelect" @cancel="toCloseSheet" />
  </div>
</template>

<script>
import loginImg from '@/assets/login.png'
import { getChannerList, toReport, toUninterested, getHomeChannelList } from '@/api/home'

// import channel from '@/components/home/Channel.vue'
import ChannelEdit from '@/components/home/ChannelEdit.vue'

import { feedbackList, interestActions } from '@/constant/reports'
import ChannelContent from '@/components/home/ChannelContent.vue'

export default {
  name: 'HomePage',
  components: {
    ChannelEdit,
    ChannelContent
    // channel
  },
  props: {},
  data () {
    return {
      loginImg,
      // 编辑频道显示隐藏
      // channelShow: 'none',
      channelShow: false,
      // 所有频道列表
      channelAll: [],
      // 频道列表
      channelList: [],
      // 获取文章列表
      articleListObj: {
        channel_id: 0,
        timestamp: Date.now()
      },
      // 文章列表
      articleList: [],

      // 不感兴趣和反馈相关
      show: false,
      actions: [],
      // 取消和返回
      cancel: '取消',
      // 选中的相关文章信息
      articleInfo: {}
    }
  },
  // 依赖注入 孙子组件调用爷爷组件方法
  // 不能使用箭头函数
  // 没成功
  // provide () {
  //   return {
  //     toOpenInterest: this
  //   }
  // },
  async created () {
    // 获取频道列表
    const {
      data: { channels }
    } = await getChannerList()

    const {
      data: { channels: allChannels }
    } = await getHomeChannelList()

    this.$store.commit('channel/updateAllChannelList', allChannels)

    this.$store.commit('channel/updateChannelList', channels)

    this.$store.commit('channel/updatenNotSelectChannel')

    this.channelList = this.$store.getters.channelList
  },
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    // 顶部栏右侧搜索按钮
    onNavClickRight () {
      this.$router.push('/search')
    },
    // 去频道页
    async toChannel () {
      // this.$refs.editChannel.style.display = 'block'

      this.channelAll = this.$store.getters.allChannelList

      // this.channelShow = 'block'
      this.channelShow = true
    },
    // 改变tabs事件
    changeTab (e) {
      console.log(e)
      this.articleListObj = {
        channel_id: e,
        timestamp: Date.now()
      }
      // this.articleList = []
      // this.$refs.vanTabs.resize()
      // this.onLoad()
    },
    // 打开是否感兴趣事件
    toOpenInterest (e) {
      console.log(111)
      this.articleInfo = e
      this.actions = interestActions
      this.show = true
    },

    // 选择是否感兴趣事件
    async toSelect ({ name }, i) {
      const contentList = this.$refs.channelContent
      const index = contentList.findIndex(ele => ele._uid === this.articleInfo.uid)
      if (name === '不感兴趣') {
        await toUninterested(this.articleInfo.index)
        this.$toast.success('屏蔽成功了捏!')
        // this.articleList.splice(this.articleInfo.index, 1)
        // console.log(this.$refs.channelContent)
        // console.log(index)
        contentList[index].removeArticle(this.articleInfo.index)
      } else if (name === '反馈垃圾内容') {
        this.show = true
        this.actions = feedbackList
        this.cancel = '返回'
      } else if (this.actions.length === 9) {
        const obj = {
          target: this.articleInfo.index,
          type: i
        }

        !i && (obj.remark = name)

        await toReport(obj)

        this.$toast.success('举报成功了捏!')
        // this.articleList.splice(this.articleInfo.index, 1)
        contentList[index].removeArticle(this.articleInfo.index)
      }
    },
    // 关闭选择框事件
    toCloseSheet () {
      console.log(222)
      if (this.actions.length === 9) {
        this.show = true
        this.actions = interestActions
        this.cancel = '取消'
      }
    },
    // 选择相关反馈
    toSelectFeedback () {}
  },
  computed: {},
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
::v-deep .van-nav-bar__title {
  color: #fff;
}

::v-deep .van-tabs__content {
  padding-top: 44px;
}

::v-deep .van-nav-bar__right {
  .van-nav-bar__text {
    color: #fff;
  }
}

::v-deep .van-tabs--line {
  .van-tabs__wrap {
    position: fixed;
    width: 100%;
    z-index: 1;

    .van-tabs__nav--complete {
      padding-right: 35px;
    }
  }
}

.tabsleft {
  z-index: 2;
  position: fixed;
  right: 0;
  top: 46px;
  width: 35px;
  height: 44px;
  background-color: #fff;
  text-align: center;
  line-height: 44px;
}

.cell-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cell-img {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cell-label {
  display: flex;
  justify-content: space-between;

  i {
    margin-top: 4px;
  }
}

::v-deep .van-pull-refresh {
  overflow: visible !important;
}
</style>
