<!--
 * @Author: bzirs
 * @Date: 2022-12-26 19:58:54
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 21:23:03
 * @FilePath: /vue2-itcast-headlines/src/views/Search/SearchResult.vue
 * @Description: 搜索结果
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="">
    <!-- 顶部栏 -->
    <van-nav-bar placeholder fixed title="搜索结果" @click-left="$router.back()">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>

    <!-- 文章列表 -->
    <article-list></article-list>
  </div>
</template>

<script>
import ArticleList from '@/components/search/ArticleList.vue'
export default {
  components: { ArticleList },
  name: 'SearchResult',
  props: {},
  data () {
    return {

    }
  },
  async created () {
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
::v-deep .van-nav-bar__title {
  color: #fff;
}
::v-deep .van-icon-arrow-left {
  color: #fff;
  font-size: 18px;
}
</style>
