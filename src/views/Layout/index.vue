<!--
 * @Author: bzirs
 * @Date: 2022-12-22 21:28:57
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 21:36:51
 * @FilePath: /vue2-itcast-headlines/src/views/Layout/index.vue
 * @Description: Layout.vue
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="">
    <!-- 二级路由出口 -->
    <router-view />

    <!-- 底部导航栏 -->
    <van-tabbar route placeholder>
      <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/layout/question" icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item replace to="/layout/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item replace to="/layout/user" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',
  components: {},
  props: {},
  data () {
    return {}
  },
  async created () {},
  mounted () {},
  activated () {},
  updated () {},
  methods: {},
  computed: {},
  watch: {},
  directives: {}
}
</script>

<style scoped lang='scss'>

</style>
