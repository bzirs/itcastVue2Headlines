<!--
 * @Author: bzirs
 * @Date: 2022-12-26 21:20:02
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 21:59:40
 * @FilePath: /vue2-itcast-headlines/src/components/search/ArticleList.vue
 * @Description: 搜索结果列表
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->

<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <article-item v-for="item in articles" :ele="item" :key="item.art_id" :flag="false"></article-item>
  </van-list>
</template>

<script>
import { getSearchResult } from '@/api/search'

import ArticleItem from '@/components/ArticleItem.vue'
export default {
  name: 'SearchList',
  components: { ArticleItem },
  props: {},
  data () {
    return {
      loading: false,
      finished: false,
      reqObj: {
        page: 1,
        per_page: 10
      },
      // 文章列表
      articles: []
    }
  },
  async created () {},
  mounted () {},
  updated () {},
  methods: {
    async onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求

      const {
        data: { results }
      } = await getSearchResult(this.$route.params.q, this.reqObj)
      // 数据全部加载完成
      if (!results.length) this.finished = true

      results.forEach(ele => {
        const flag = this.articles.findIndex(item => item.art_id === ele.art_id)
        flag === -1 && this.articles.push(ele)
      })

      // this.articles.push(...results)
      this.reqObj.page++

      // 加载状态结束
      this.loading = false
    }
  },
  computed: {},
  watch: {
  },
  directives: {},
  activated () {
    this.articles = []
    this.loading = true
    this.finished = false
    this.reqObj = {
      page: 1,
      per_page: 10
    }
    this.onLoad()
  }
}
</script>

<style scoped lang=""></style>
