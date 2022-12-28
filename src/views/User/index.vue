<!--
 * @Author: bzirs
 * @Date: 2022-12-22 21:38:53
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 14:55:14
 * @FilePath: /vue2-itcast-headlines/src/views/User/index.vue
 * @Description: User.vue
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="user">
    <!-- 用户个人资料 -->
    <div class="user-profile">
      <div class="info">
        <van-image v-if="UserInfo.photo" round :src="UserInfo.photo" />
        <van-image v-else round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <h3 class="name">
          {{ UserInfo.name }}
          <br />
          <van-tag size="mini">申请认证</van-tag>
        </h3>
      </div>
      <van-row>
        <van-col span="8">
          <p>{{ UserInfo.art_count }}</p>
          <p>动态</p>
        </van-col>
        <van-col span="8">
          <p>{{ UserInfo.follow_count }}</p>
          <p>关注</p>
        </van-col>
        <van-col span="8">
          <p>{{ UserInfo.fans_count }}</p>
          <p>粉丝</p>
        </van-col>
      </van-row>
    </div>

    <!-- 操作链接 -->
    <van-row class="user-links">
      <van-col span="8">
        <van-icon name="newspaper-o" color="#7af" />
        我的作品
      </van-col>
      <van-col span="8">
        <van-icon name="star-o" color="#f00" />
        我的收藏
      </van-col>
      <van-col span="8">
        <van-icon name="tosend" color="#fa0" />
        阅读历史
      </van-col>
    </van-row>

    <!-- 编辑入口
        is-link: 产生一个向右的箭头
        to: 用来做路由的跳转
      -->
    <van-cell-group class="user-group">
      <van-cell icon="edit" title="编辑资料" to="/edit" is-link />
      <van-cell icon="chat-o" title="小智同学" to="/chat" is-link />
      <van-cell icon="setting-o" title="系统设置" is-link />
      <van-cell icon="warning-o" title="退出登录" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  components: {},
  props: {},
  data () {
    return {}
  },
  async created () {},
  mounted () {},
  activated () {
    this.$store.dispatch('user/getUserInfo')
  },
  updated () {},
  methods: {},
  computed: {
    UserInfo () {
      return this.$store.getters.userInfo
    }
  },
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
.user {
  .user-profile {
    width: 100%;
    height: 200px;
    display: block;
    background: #3296fa;
    color: #fff;

    .info {
      display: flex;
      padding: 20px;
      align-items: center;

      .van-image {
        width: 64px;
        height: 64px;
      }

      .name {
        font-size: 16px;
        font-weight: normal;
        margin-left: 10px;
      }

      .van-tag {
        background: #fff;
        color: #3296fa;
      }
    }

    p {
      margin: 0;
      text-align: center;
    }
  }

  .user-group {
    margin-bottom: 15px;
  }

  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
      padding-bottom: 5px;
    }
  }
}
</style>
