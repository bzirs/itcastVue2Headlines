<!--
 * @Author: bzirs
 * @Date: 2022-12-22 21:36:33
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 21:06:28
 * @FilePath: /vue2-itcast-headlines/src/views/Search/index.vue
 * @Description: search.vue
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="">
    <!-- 顶部搜索栏 -->
    <van-search clearable clear-trigger="always" v-model="value" placeholder="请输入搜索关键词" shape="round" @input="inputChange" @search="onSearch" background="#007BFF">
      <template #left>
        <div class="back" @click="toBack">
          <van-icon name="arrow-left" />
        </div>
      </template>
    </van-search>
    <!-- 搜索历史相关 -->
    <div v-show="show" class="history">
      <!-- 搜索历史顶部 -->
      <van-cell>
        <template #title>
          <span>搜索历史</span>
        </template>

        <template #default>
          <van-icon name="delete" @click="toDelHistory" />
        </template>
      </van-cell>

      <!-- 搜索历史 -->
      <van-grid :gutter="10" :column-num="5">
        <van-grid-item v-for="(item, index) in $store.getters.historys" :key="index" :text="item" class="history-item" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  components: {},
  props: {},
  data () {
    return {
      // 搜索框内的值
      value: '',
      // 搜索历史显示隐藏
      show: true
    }
  },
  async created () {
  },
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    // 回车搜索事件
    onSearch (val) {
      this.$store.commit('search/updateHistorys', [...this.$store.getters.historys, val])
      this.value = ''
      this.$router.push('/search/' + val)
    },
    // 输入框输入内容事件
    inputChange (val) {
      this.show = false

      !val.length && (this.show = true)
    },
    // 返回home
    toBack () {
      this.value = ''
      this.$router.push('/')
    },
    // 删除搜索历史
    toDelHistory () {
      this.$store.commit('search/updateHistorys', [])
    }
  },
  computed: {},
  watch: {
    $route (newV) {
      // console.log(newV)
      this.show = true
    }

  },
  directives: {}
}
</script>

<style scoped lang="scss">

::v-deep .van-search{
  padding-top:0;
  padding-bottom: 0;
  height: 46px;
}
::v-deep .van-search {
  .van-icon-clear {
    color: #c8c9cc;
  }
}
.back {
  color: #fff;
  font-size: 16px;
  padding-right: 15px;
  // margin-top: 4px;
}

.history {
  ::v-deep .van-icon-delete {
    color: #000;
    font-size: 16px;
  }
}

::v-deep .van-grid {
  padding-top: 10px;

  .van-grid-item__content {
    // padding: 8px 14px;
    padding: 4px 0;
    background-color: #efefef;
    border-radius: 10px;

    .van-grid-item__text {
      color: #000;
    }
  }

  [class*='van-hairline']::after {
    border: 0;
  }
}

::v-deep .van-icon-clear {
  color: #efefef;
}
</style>
