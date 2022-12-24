<!--
 * @Author: bzirs
 * @Date: 2022-12-24 09:31:17
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-24 15:51:10
 * @FilePath: /vue2-itcast-headlines/src/components/home/Channel.vue
 * @Description: 自己实现的频道编辑 未实现淡入淡出效果
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <!-- 编辑频道 -->
  <div class="edit-channel" ref="editChannel" :style="{ display: value }">
    <!-- 顶部栏 -->
    <van-nav-bar
      placeholder
      fixed
      title="频道管理"
      right-text="返回"
      @click-right="$emit('input', 'none')"
    />
  </div>
</template>

<script>
export default {
  name: 'ChannelPage',
  components: {},
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {}
  },
  async created () {},
  mounted () {},
  activated () {},
  updated () {},
  methods: {
  },
  computed: {},
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
.edit-channel {
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  transition: all .3s;
  // display: none;
}
</style>
