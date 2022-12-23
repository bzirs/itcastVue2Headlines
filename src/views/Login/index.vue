<!--
 * @Author: bzirs
 * @Date: 2022-12-22 21:28:47
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 17:03:25
 * @FilePath: /vue2-itcast-headlines/src/views/Login/index.vue
 * @Description: Login.vue
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="">
    <!-- 顶部栏 -->
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" fixed placeholder />
    <!-- 登录表单 -->
    <van-form @submit="onLogin">
      <van-field v-model="loginFormData.mobile" name="mobile" label="手机号" placeholder="请输入手机号"
        :rules="[{ required: true, pattern: /^(?:(?:\+|00)86)?1\d{10}$/, message: '请输入正确的手机号捏' }]" />
      <van-field v-model="loginFormData.code" name="code" label="验证码" placeholder="请输入验证码"
        :rules="[{ required: true, pattern: /^\d{6}$/, message: '请输入正确的验证码捏' }]">
        <template #button>
          <van-button block type="primary" size="mini" @click.prevent>发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 10px;">
        <van-button round block type="info" native-type="submit">前进四！</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      loginFormData: {
        mobile: '13888888888',
        code: '246810'
      }
    }
  },
  async created () {},
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    // 顶部栏左侧按钮
    onClickLeft () {
      // 返回上一个页面
      this.$router.back()
    },
    // 登录
    async onLogin (values) {
      if (values) {
        // 登录
        try {
          await this.$store.dispatch('user/toUserLogin', values)

          this.$toast.success('欢迎回家捏!')
          this.$router.push('/')
        } catch (error) {
          console.log('error!!')
        }
      }
    }

  },
  computed: {},
  watch: {},
  directives: {}
}
</script>

<style scoped lang='scss'>
::v-deep .van-nav-bar__title {
  color: #fff
}

::v-deep .van-nav-bar {
  .van-icon {
    color: #fff
  }
}
</style>
