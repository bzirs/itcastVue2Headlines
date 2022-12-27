<!--
 * @Author: bzirs
 * @Date: 2022-12-24 15:51:39
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-27 17:36:45
 * @FilePath: /vue2-itcast-headlines/src/components/home/ChannelEdit.vue
 * @Description: 使用vant组件实现
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <van-popup v-if="value" v-model="show" get-container="#app" class="edit-channel">
    <!-- 顶部栏 -->
    <van-nav-bar placeholder fixed title="频道管理" @click-right="$emit('input', false)">
      <template #right>
        <van-icon name="cross" size="20" />
      </template>
    </van-nav-bar>

    <!-- 我的频道 -->
    <channel-edit-item :flag="flag" :list="$store.getters.channelList">
      <template #left>
        <span class="custom-title">我的频道</span>
        <span class="go-channel">点击{{ changeChannel }}频道</span>
      </template>
      <template #right>
        <span @click="flag = !flag">{{ changeCheck }}</span>
      </template>
      <template #icon="{ row }">
        <div class="icon-right" v-if="row.flag && row.list.length === $store.getters.channelList.length">
          <van-icon name="cross" />
        </div>
      </template>
    </channel-edit-item>

    <!-- 添加频道 -->
    <channel-edit-item :flag="flag" :list="$store.getters.notSelectChannel">
      <template #left>
        <span class="custom-title">点击添加更多频道：</span>
      </template>
      <template #icon="{ row }">
        <div class="icon-right" v-if="row.flag && row.list.length === $store.getters.notSelectChannel.length">
          <van-icon name="plus" />
        </div>
      </template>
    </channel-edit-item>
  </van-popup>
</template>

<script>
import ChannelEditItem from './ChannelEditItem.vue'
export default {
  name: 'ChannelEdit',
  components: { ChannelEditItem },
  props: {
    value: {
      type: Boolean
    }
  },
  data () {
    return {
      // 显示左上叉叉
      flag: false
    }
  },
  async created () {
    // console.log(this.$store.getters.notSelectChannel)
  },
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    // 获取dom挂载
    getContainer () {}
  },
  computed: {
    // 显示隐藏
    show: {
      get () {
        return this.value
      },
      set (val) {
        // console.log(val)
      }
    },
    // 显示进入删除频道
    changeChannel () {
      return this.flag ? '删除' : '进入'
    },
    // 显示编辑确定按钮
    changeCheck () {
      return this.flag ? '确定' : '编辑'
    }

    // 未选择的频道
    // notSelectChannel () {
    //   console.log(this.$store.getters.channelList)
    //   console.log(this.$store.getters.allChannelList)
    // return this.allList.filter(ele => this.list.findIndex(e => e.id === ele.id) === -1)
    // }
  },
  watch: {},
  directives: {},
  deactivated () {
    this.flag = false
    this.$emit('input', false)
    // this.$destroy()
  }
}
</script>

<style scoped lang="scss">
.edit-channel {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
}

::v-deep .van-icon {
  color: #fff;
}
.go-channel {
  margin-left: 5px;
  color: grey;
  font-size: 12px;
}
::v-deep .van-cell__value {
  color: #000;
  font-size: 14px;
}
</style>
