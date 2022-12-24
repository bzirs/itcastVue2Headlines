<!--
 * @Author: bzirs
 * @Date: 2022-12-22 21:29:39
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-24 18:04:06
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
      <van-nav-bar placeholder fixed title="黑马头条" right-text="搜索" @click-right="onNavClickRight" />

      <!-- 频道列表 -->
      <van-tabs @click="changeTab">
        <van-tab v-for="it in channelList" :title="it.name" :key="it.id">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <van-cell-group v-for="(it, i) in articleList" :key="it.art_id">
                <van-cell>
                  <template #title>
                    <div class="cell-title">
                      <span>{{ it.title }}</span>
                      <div v-if="it.cover.type === 1">
                        <van-image lazy-load width="112" height="70" :src="it.cover.images[0]" />
                      </div>
                    </div>
                    <div class="cell-img" v-if="it.cover.type === 3">
                      <van-image lazy-load v-for="(item, i) in it.cover.images" :key="i" width="112" height="70" :src="item" />
                    </div>
                  </template>
                  <template #label>
                    <div class="cell-label">
                      <span>{{ it.aut_name }}&nbsp;&nbsp;{{ it.comm_count }}&nbsp;评论&nbsp;&nbsp;{{ it.pubdate | relativeTime }}</span>
                      <van-icon name="cross" @click="toOpenInterest(it.art_id, i)" />
                    </div>
                  </template>
                </van-cell>
              </van-cell-group>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
      <!-- 频道右侧按钮 -->
      <div class="tabsleft" @click="toChannel">
        <van-icon name="plus" />
      </div>
    </div>

    <!-- 编辑频道组件 -->
    <!-- <channel v-model="channelShow"></channel> -->
    <channel-edit v-model="channelShow" :allList="channelAll" :list="channelList" ></channel-edit>

    <!-- 不感兴趣和反馈 -->
    <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" close-on-click-action @select="toSelect" />
  </div>
</template>

<script>
import { getHomeArticleList, getGuestChannerList, toReport, toUninterested, getHomeChannelList } from '@/api/home'

// import channel from '@/components/home/Channel.vue'
import ChannelEdit from '@/components/home/ChannelEdit.vue'

import { feedbackList, interestActions } from '@/constant/reports'

export default {
  name: 'HomePage',
  components: {
    ChannelEdit
    // channel
  },
  props: {},
  data () {
    return {
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
      // 加载flag
      loading: false,
      // 加载完毕flag
      finished: false,
      // 上拉刷新flag
      refreshing: false,
      // 不感兴趣和反馈相关
      show: false,
      actions: [],
      // 选中的相关文章信息
      articleInfo: {}
    }
  },
  async created () {
    // 获取频道列表
    const {
      data: { channels }
    } = await getGuestChannerList()
    this.channelList = channels
  },
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    // 加载事件
    async onLoad () {
      const {
        data: { pre_timestamp: timestamp, results }
      } = await getHomeArticleList(this.articleListObj)
      this.articleListObj.timestamp = timestamp
      this.articleList.push(...results)
      // 加载状态结束
      this.loading = false

      // 数据全部加载完成
      if (!timestamp) this.finished = true
    },
    // 顶部栏右侧搜索按钮
    onNavClickRight () {
      console.log(111)
    },
    // 去频道页
    async toChannel () {
      // this.$refs.editChannel.style.display = 'block'
      const { data: { channels } } = await getHomeChannelList()
      this.channelAll = channels

      // this.channelShow = 'block'
      this.channelShow = true

      console.log(11)
    },
    // 改变tabs事件
    changeTab (e) {
      this.articleListObj = {
        channel_id: e,
        timestamp: Date.now()
      }
      this.articleList = []
      this.onLoad()
    },
    // 下拉刷新事件
    onRefresh () {
      // 清空列表数据
      this.finished = false

      this.articleListObj.timestamp = Date.now()
      this.articleList = []

      // 重新加载数据
      // 将 refreshing 设置为 true，表示处于加载状态
      this.refreshing = true
      this.onLoad()

      this.refreshing = false
    },
    // 是否感兴趣事件
    toOpenInterest (id, i) {
      this.articleInfo.index = i
      this.articleInfo.target = id
      this.actions = interestActions

      this.show = true
    },
    // 选择是否感兴趣事件
    async toSelect ({ name }, i) {
      if (name === '不感兴趣') {
        await toUninterested(this.articleInfo.index)
        this.$toast.success('屏蔽成功了捏!')
        this.articleList.splice(this.articleInfo.index, 1)
      } else if (name === '反馈垃圾内容') {
        this.show = true
        this.actions = feedbackList
      } else if (this.actions.length === 9) {
        const obj = {
          target: this.articleInfo.index,
          type: i
        }

        !i && (obj.remark = name)

        await toReport(obj)

        this.$toast.success('举报成功了捏!')
        this.articleList.splice(this.articleInfo.index, 1)
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
