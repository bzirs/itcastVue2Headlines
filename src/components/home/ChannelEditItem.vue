<!--
 * @Author: bzirs
 * @Date: 2022-12-24 16:52:02
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-24 21:22:04
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
      <van-grid-item v-for="item in list" :key="item.id" :text="item.name">
        <template #icon>
          <div class="icon-right" v-if="flag">
            <van-icon name="cross" />
          </div>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'ChannelEditItem',
  components: {},
  props: {
    list: {
      type: Array
    },
    flag: {
      type: Boolean
    }
  },
  data () {
    return {
    }
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
</style>
