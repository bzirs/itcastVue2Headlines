<!--
 * @Author: bzirs
 * @Date: 2022-12-27 21:44:17
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-27 22:25:50
 * @FilePath: /vue2-itcast-headlines/src/views/ArticleDetails/components/ArticleDetails.vue
 * @Description:
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <!-- 文章详情 -->
  <div class="detail">
    <h3 class="title">{{ article.title }}</h3>
    <div class="author">
      <van-image class="img" round :src="article.aut_photo" fit="fill" />
      <div class="text">
        <p class="name">{{ article.aut_name }}</p>
        <p class="time">4天前</p>
      </div>
      <van-button round size="small" type="info">+ 关注</van-button>
    </div>
    <div class="content">
      <div v-html="article.content"></div>
    </div>
    <van-divider>END</van-divider>
    <div class="zan">
      <van-button round size="small" hairline type="primary" plain icon="good-job-o" @click.native="handleFabulous" :class="{ 'active-zan': attitude===1 }">{{ Fabulous }}</van-button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <van-button round size="small" hairline type="danger" plain icon="delete" @click.native="handleLike" :class="{'active-like':like}">不喜欢</van-button>
    </div>
  </div>
</template>

<script>
import { articleFabulous, articleNotFabulous, articleNotLike } from '@/api/articleDetails'
export default {
  name: 'ArticleDetails',
  components: {},
  props: {
    article: {
      type: Object
    },
    attitude: {
      type: Number
    }
  },
  data () {
    return {
      // 是否感兴趣
      like: false
    }
  },
  async created () {},
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    // 点赞
    async handleFabulous () {
      const id = this.article.art_id
      await (this.FabulousStatus ? articleNotFabulous(id) : articleFabulous(id))

      this.$emit('update:attitude', this.FabulousStatus ? 0 : 1)
    },
    // 喜欢
    async handleLike () {
      const id = this.article.art_id
      await (this.like && articleNotLike(id))

      this.like = !this.like
    }
  },
  computed: {
    // 显示是否点赞
    Fabulous () {
      return this.FabulousStatus ? '已点赞' : '点赞'
    },
    // 点赞状态
    FabulousStatus () {
      return this.attitude === 1
    }
  },
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
.article-container {
  position: absolute;
  left: 0;
  top: 0;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}
.article-loading {
  padding-top: 100px;
  text-align: center;
}
.error {
  padding-top: 100px;
  text-align: center;
}
.detail {
  padding: 0 10px;
  padding-bottom: 80px;
  .title {
    font-size: 16px;
  }
  .zan {
    text-align: center;

    .active-zan {
      color: #fff;
      background-color: #07c160;
    }

    .active-like{
            color: #fff;
      background-color: #ee0a24;
    }
  }
  .author {
    padding: 10px 0;
    display: flex;

    .img {
      width: 36px;
      height: 36px;
    }
    .text {
      flex: 1;
      padding-left: 10px;
      line-height: 1.3;
      .name {
        font-size: 14px;
        margin: 0;
      }
      .time {
        margin: 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
  .content {
    font-size: 14px;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-all;
    ::v-deep img {
      max-width: 100%;
      background: #f9f9f9;
    }
  }
}
</style>
