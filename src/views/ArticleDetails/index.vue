<!--
 * @Author: bzirs
 * @Date: 2022-12-22 21:35:55
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-27 11:05:27
 * @FilePath: /vue2-itcast-headlines/src/views/ArticleDetails/index.vue
 * @Description: ArticleDetails.vue
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="">
    <!-- 顶部栏 -->
    <div class="top_nav">
      <van-nav-bar placeholder fixed title="文章详情" @click-left="$router.back()">
        <template #left>
          <van-icon name="arrow-left" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 骨架屏 -->
    <van-skeleton :row="18" title animate round />

    <!-- 底部导航栏 -->
    <div class="bottom_nav">
      <van-nav-bar @click-left="$router.back()">
        <template #left>
          <van-icon name="arrow-left" />
        </template>
        <template #title>
          <div class="title_content">发表评论</div>
          <div class="right">
            <van-icon color="#000" size="20" name="comment-o" />
            <van-icon color="#000" size="20" name="star-o" />
            <van-icon color="#000" size="20" name="share-o" />
          </div>
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
import { getArticleDetails } from '@/api/articleDetails'
export default {
  name: 'ArticleDetailsPage',
  components: {},
  props: {},
  data () {
    return {
      artInfo: {}
    }
  },
  async created () {
    const { data } = await getArticleDetails(this.$route.query.art_id)
    this.artInfo = data
  },
  mounted () {},
  activated () {},
  updated () {},
  methods: {},
  computed: {},
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
.top_nav {
  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
  ::v-deep .van-icon-arrow-left {
    color: #fff;
    font-size: 18px;
  }
}

.bottom_nav {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 45px;
  border-top: 1px solid #f7f8f9;

  ::v-deep .van-nav-bar {
    background-color: #fff;

    .van-nav-bar__left {
      position: static;
    }

    .van-nav-bar__content {
      justify-content: space-between;

      .van-nav-bar__title {
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;

        .title_content {
          flex: 1;
          height: 30px;
          // line-height: 30px;
          background-color: #f8f8f8;
          display: flex;
          align-items: center;
          // justify-content: center;
          border-radius: 15px;
          padding-left: 10px;
          font-size: 10px;
          border: 1px solid #efefef;
        }

        .right {
          width: 40%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }

      .van-nav-bar__right {
        justify-content: space-between;
        width: 30%;
      }
    }

    .van-icon-arrow-left {
      color: #000;
    }
  }
}
</style>
