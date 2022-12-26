<!--
 * @Author: bzirs
 * @Date: 2022-12-22 21:35:55
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 22:45:03
 * @FilePath: /vue2-itcast-headlines/src/views/ArticleDetails/index.vue
 * @Description: ArticleDetails.vue
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="">
    <!-- 顶部栏 -->
    <van-nav-bar placeholder fixed title="文章详情" @click-left="$router.back()">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>

    <van-skeleton :row="18" title animate round />
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
::v-deep .van-nav-bar__title {
  color: #fff;
}
::v-deep .van-icon-arrow-left {
  color: #fff;
  font-size: 18px;
}
</style>
