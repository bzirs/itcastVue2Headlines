<!--
 * @Author: bzirs
 * @Date: 2022-12-22 22:06:13
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 15:18:09
 * @FilePath: /vue2-itcast-headlines/src/views/User/Edit.vue
 * @Description: UserEdit.vue
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
<div class="container">
  <!-- 导航条 -->
  <van-nav-bar left-arrow @click-left="$router.back()" title="编辑资料">
  </van-nav-bar>

  <!-- 编辑区 -->
  <van-cell-group>
    <van-cell is-link title="头像" center>
      <van-image slot="default" width="20px" height="20px" fit="cover" round :src="userInfo.photo" />
    </van-cell>
    <!-- value： 设置右侧显示的文字 -->
    <van-cell is-link title="姓名" :value="userInfo.name" @click="isShowName = true" />

    <van-cell is-link title="性别" :value="userInfo.gender === 1 ? '男' : '女'" @click="isShowGender = true" />

    <van-cell is-link title="生日" :value="userInfo.birthday" @click="isShowBirthday = true" />
  </van-cell-group>
</div>
</template>

<script>
export default {
  name: 'UserEditPage',
  components: {},
  props: {},
  data () {
    return {
      // 控制弹层
      isShowName: false,
      isShowGender: false,
      isShowBirthday: false,

      // 修改后的新名字
      newName: '',
      // 修改后新生日
      newDate: new Date(),
      minDate: new Date(1965, 0, 10), // dateTime-picker中最小时间
      maxDate: new Date() // 当前时间
    }
  },
  async created () {},
  mounted () {},
  activated () {},
  updated () {},
  methods: {},
  computed: {
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  watch: {},
  directives: {}
}
</script>

<style scoped lang='scss'>
::v-deep .van-nav-bar{

  .van-icon{
    color:#fff
  }
}

::v-deep .van-nav-bar__title{
  color:#fff
}
</style>
