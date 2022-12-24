<!--
 * @Author: bzirs
 * @Date: 2022-12-24 16:52:02
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-24 18:18:50
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
  <!-- <van-grid :gutter="10">
    <van-grid-item
      v-for="item in list"
      :key="item.id"
      icon="photo-o"
      text="文字"
    />
  </van-grid> -->
 </div>
</template>

<script>
export default {
  name: 'ChannelEditItem',
  components: {},
  props: {
    list: {
      type: Array
    }
  },
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

<style scoped lang=''>
</style>
