<!--
 * @Author: bzirs
 * @Date: 2022-12-22 22:06:13
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-28 17:41:09
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
    <van-cell is-link title="头像" center @click.native="toAvatarUpload">
      <van-image slot="default" class="img-avatar" fit="cover" round :src="userInfo.photo" />
      <van-uploader :after-read="afterRead" style="display:none" ref="avatarUpload" />
    </van-cell>
    <!-- value： 设置右侧显示的文字 -->
    <van-cell is-link title="姓名" :value="userInfo.name" @click="isShowName = true; newName = $store.getters.userInfo.name" />

    <van-cell is-link title="性别" :value="userInfo.gender === 1 ? '男' : '女'" @click="isShowGender = true" />

    <van-cell is-link title="生日" :value="userInfo.birthday" @click="isShowBirthday = true" />
  </van-cell-group>

  <!-- 弹出修改信息框 -->
  <van-dialog v-model="isShowName" title="修改名称" show-cancel-button @confirm="toEditName">
    <template #default>
      <van-field :maxlength="7" v-model="newName" placeholder="请输入名称" center />
    </template>
  </van-dialog>

  <!-- 年月日 -->
  <van-action-sheet v-model="isShowBirthday">
      <van-datetime-picker @confirm="toChangeDate" @cancel="isShowBirthday = false" v-model="newDate" type="date" title="选择年月日" :min-date="minDate" :max-date="maxDate" />
  </van-action-sheet>
</div>
</template>

<script>
import moment from 'moment'
import { updateUserAvatar, updateUserInfo } from '@/api/user'
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
      newDate: new Date(2000, 0, 1),
      minDate: new Date(1965, 0, 10), // dateTime-picker中最小时间
      maxDate: new Date() // 当前时间
    }
  },
  async created () {},
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    // 头像上传
    toAvatarUpload () {
      this.$refs.avatarUpload.chooseFile()
    },
    async afterRead ({ file }) {
      console.log(file)
      try {
        const fd = new FormData()
        fd.append('photo', file)
        const { data: { photo } } = await updateUserAvatar(fd)
        // console.log(photo)
        this.$store.commit('user/updateUserAvatar', photo)
        this.$toast.success('更新用户头像成功')
      } catch (error) {
        console.dir(error)
      }
    },
    // 编辑用户名
    async toEditName () {
      this.toUpdageUserInfo('name', this.newName)
      this.$toast.success('更新用户名称成功')
    },
    // 改变生日
    async toChangeDate (value) {
      this.toUpdageUserInfo('birthday', moment(value).format('YYYY-MM-DD'))

      this.$toast.success('更新用户生日成功')
      this.isShowBirthday = false
    },
    // 更新用户信息
    async toUpdageUserInfo (key, value) {
      const obj = {}
      obj[key] = value
      console.log(obj)
      await updateUserInfo(obj)

      console.log({ ...this.$store.getters.userInfo, ...obj })
      this.$store.commit('user/updateUserInfo', { ...this.$store.getters.userInfo, ...obj })
    }

  },
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
.img-avatar{
  width: 40px;
  height: 40px;
}
::v-deep .van-nav-bar{

  .van-icon{
    color:#fff
  }
}

::v-deep .van-nav-bar__title{
  color:#fff
}

::v-deep .van-field__control{
  text-align: center;
}
</style>
