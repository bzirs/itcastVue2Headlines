<!--
 * @Author: bzirs
 * @Date: 2022-12-25 10:42:09
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-25 14:48:42
 * @FilePath: /vue2-itcast-headlines/src/components/home/ChannelContent.vue
 * @Description: 每个频道内容
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell-group>
        <van-cell v-for="(ele, i) in articleList" :key="ele.art_id">
          <template #title>
            <div class="cell-title">
              <span>{{ ele.title }}</span>
              <div v-if="ele.cover.type === 1">
                <van-image lazy-load width="112" height="70" :src="ele.cover.images[0]" />
              </div>
            </div>
            <div class="cell-img" v-if="ele.cover.type === 3">
              <van-image lazy-load v-for="(item, i) in ele.cover.images" :key="i" width="112" height="70" :src="item" />
            </div>
          </template>
          <template #label>
            <div class="cell-label">
              <span>{{ ele.aut_name }}&nbsp;&nbsp;{{ ele.comm_count }}&nbsp;评论&nbsp;&nbsp;{{ ele.pubdate | relativeTime }}</span>
              <van-icon name="cross" @click="toOpenInterest(ele.art_id, i)" />
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { getHomeArticleList } from '@/api/home'
// import { interestActions } from '@/constant/reports'

export default {
  name: 'ChannelContent',
  components: {},
  props: {
    // 请求对象
    value: {
      type: Object
    }
  },
  data () {
    return {
      // 加载flag
      loading: false,
      // 加载完毕flag
      finished: false,
      // 上拉刷新flag
      refreshing: false,
      // 文章列表
      articleList: []
    }
  },
  async created () {},
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    // 加载事件
    async onLoad () {
      // Date.now()
      console.log(this.value)
      const {
        data: { pre_timestamp: timestamp, results }
      } = await getHomeArticleList(this.value)

      // const { data } = await getHomeArticleList(this.obj)
      // this.articleListObj.timestamp = timestamp
      // this.obj.timestamp = timestamp

      this.$emit('input', {
        channel_id: this.value.channel_id,
        timestamp
      })

      this.articleList.push(...results)

      // 加载状态结束
      this.loading = false

      // 数据全部加载完成
      if (!timestamp) this.finished = true
      // this.finished = true
    },
    // 下拉刷新事件
    onRefresh () {
      // 清空列表数据
      this.finished = false

      // this.articleListObj.timestamp = Date.now()

      this.articleList = []

      const tempObj = {
        channel_id: this.value.channel_id,
        timestamp: Date.now()
      }

      this.$emit('input', tempObj)

      this.obj = tempObj

      // 重新加载数据
      // 将 refreshing 设置为 true，表示处于加载状态
      this.refreshing = true

      this.onLoad()

      this.refreshing = false
    },
    // 是否感兴趣事件
    toOpenInterest (id, i) {
      // this.articleInfo.index = i
      // this.articleInfo.target = id
      console.log(1111)
      this.$emit('openInterest', {
        index: i,
        target: id
      })
      // this.actions = interestActions

      // this.show = true
    }
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
