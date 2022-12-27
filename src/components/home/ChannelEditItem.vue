<!--
 * @Author: bzirs
 * @Date: 2022-12-24 16:52:02
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-27 17:36:52
 * @FilePath: /vue2-itcast-headlines/src/components/home/ChannelEditItem.vue
 * @Description:
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div>
    <!-- 频道顶部 -->
    <van-cell>
      <template #title>
        <slot name="left"></slot>
      </template>

      <template #default>
        <slot name="right"></slot>
      </template>
    </van-cell>

    <!-- 频道列表 -->
    <van-grid :gutter="10">
      <van-grid-item @click.native="toChangeChannelList(item.id)" v-for="item in list" :key="item.id" :text="item.name">
        <template #icon>
          <slot name="icon" :row="{ flag, list }"></slot>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { changeChannel } from '@/api/home'
export default {
  name: 'ChannelEditItem',
  components: {},
  props: {
    list: {
      type: Array
    },
    flag: {
      type: Boolean
    },
    selectList: {
      type: Array
    }
  },
  data () {
    return {
      channelList: []
    }
  },
  async created () {},
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    // 跳转到相应的频道 添加删除频道
    async toChangeChannelList (id) {
      console.log(id)
      // flag为真的时候选中了编辑按钮
      const flag = this.flag
      // 选中的频道列表
      const selectList = this.$store.getters.channelList
      // 选中的频道下标
      const index = selectList.findIndex(ele => ele.id === id)

      const listLength = this.list.length
      // 选中的频道列表长度
      const selectListLeng = selectList.length
      // 判断本地是否有token
      const token = this.$store.getters.token
      // 跳转频道
      if (!flag && listLength === selectListLeng) {
        console.log(index)
        // console.log(this.$parent.$parent.$parent.changeTab)
        this.$parent.$parent.$parent.changeTab(id)
        this.$parent.$parent.$parent.$refs.vanTabs.scrollTo(id)
        this.$parent.$parent.$parent.channelShow = false
      } else if (listLength === selectListLeng) {
        // 删除频道
        // console.log(id, index)
        token && selectList.splice(index, 1)

        // this.channelList.splice(index, 1)

        // console.log(this.channelList)

        await changeChannel(selectList)
      }
      // 添加频道
      if (flag && listLength !== selectListLeng) {
        const notSelectChannel = this.$store.getters.notSelectChannel
        const index = notSelectChannel.findIndex(ele => ele.id === id)

        token && selectList.push(notSelectChannel[index])
        await changeChannel(selectList)
      }

      // 更新未选择的频道列表
      this.$store.commit('channel/updatenNotSelectChannel')
    }
  },
  computed: {},
  watch: {},
  directives: {},
  deactivated () {

  }
}
</script>

<style scoped lang="scss">
::v-deep .van-grid-item__content--center {
  position: relative;
  background-color: #fafafa;
  height: 36px;
  .van-grid-item__icon-wrapper {
    position: static;
  }
  .icon-right {
    position: absolute;
    right: 0;
    top: -2px;
    // display: none;
  }
}
::v-deep i.van-icon {
  color: rgb(207, 207, 207);
  font-size: 12px;
}

::v-deep .van-grid {
  margin-top: 10px;
}
</style>
