<!--
 * @Author: bzirs
 * @Date: 2022-12-22 21:35:55
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-27 22:48:39
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
    <van-skeleton :loading="show" :row="18" title anima te round>
      <!-- 文章详情 -->
    <article-details :attitude.sync="artInfo.attitude" :article="artInfo"></article-details>

      <!-- 评论列表 -->
      <article-comment ></article-comment>

    </van-skeleton>

    <!-- 底部导航栏 -->
    <details-bottom :star.sync="artInfo.is_collected" :id="artInfo.art_id"></details-bottom>
  </div>
</template>

<script>
import { getArticleDetails } from '@/api/articleDetails'
import DetailsBottom from './components/DetailsBottom.vue'
import ArticleDetails from './components/ArticleDetails.vue'
import ArticleComment from './components/ArticleComment.vue'
export default {
  name: 'ArticleDetailsPage',
  components: { DetailsBottom, ArticleDetails, ArticleComment },
  props: {},
  data () {
    return {
      artInfo: {},
      // 是否显示文章内容
      show: true

    }
  },
  async created () {},
  mounted () {},
  activated () {
    this.getArticleContent()
  },
  updated () {},
  methods: {
    async getArticleContent () {
      const { data } = await getArticleDetails(this.$route.query.art_id)
      this.show = false
      this.artInfo = data
    }
  },
  computed: {},
  watch: {},
  directives: {},

  deactivated () {
    this.show = true
  }
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

</style>
