<!--
 * @Author: bzirs
 * @Date: 2022-12-25 14:57:03
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-26 22:28:10
 * @FilePath: /vue2-itcast-headlines/src/components/ArticleItem.vue
 * @Description: home页文章列表item
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <van-cell @click.native="toArticleDetails">
    <template #title>
      <div class="cell-title">
        <span>{{ ele.title }}</span>
        <div v-if="ele.cover.type === 1">
          <van-image lazy-load width="112" height="70" :src="ele.cover.images[0]" />
        </div>
      </div>
      <div class="cell-img" v-if="ele.cover.type === 3">
        <van-image lazy-load v-for="(item, i) in ele.cover.images" :key="i" width="112" height="70" :src="item" />
      </div>
    </template>
    <template #label>
      <div class="cell-label">
        <span>{{ ele.aut_name }}&nbsp;&nbsp;{{ ele.comm_count }}&nbsp;评论&nbsp;&nbsp;{{ ele.pubdate | relativeTime }}</span>
        <van-icon v-if="flag" name="cross" @click="toOpenInterest(ele.art_id, index)" />
      </div>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    flag: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number
    },
    ele: {
      type: Object
    }
  },
  data () {
    return {}
  },
  async created () {},
  mounted () {},
  activated () {},
  updated () {},
  // 依赖注入 孙子(或者子组件)组件接收爷爷组件的方法
  // inject: ['toOpenInterest'],
  methods: {
    // 去文章详情
    toArticleDetails (e) {
      const flag = e.target.classList.contains('van-icon-cross')
      !flag && this.$router.push({
        path: '/details',
        query: {
          art_id: this.ele.art_id
        }
      })
    },
    // 是否感兴趣事件
    toOpenInterest (id, i) {
      // console.log(this.toOpenInterest)
      // this.toOpenInterest({ id, i })
      // this.articleInfo.index = i
      // this.articleInfo.target = id
      // console.log(1111)
      // console.log(this.$parent.$parent.$parent._uid)
      const uid = this.$parent.$parent.$parent._uid
      const obj = {
        index: i,
        target: id,
        uid
      }
      console.log(obj)
      this.$emit('openInterest', obj)
      // this.actions = interestActions

      // this.toOpenInterest({
      //   index: i,
      //   target: id
      // })
      // this.show = true
    }
  },
  computed: {},
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
::v-deep .van-nav-bar__title {
  color: #fff;
}

::v-deep .van-tabs__content {
  padding-top: 44px;
}

::v-deep .van-nav-bar__right {
  .van-nav-bar__text {
    color: #fff;
  }
}

::v-deep .van-tabs--line {
  .van-tabs__wrap {
    position: fixed;
    width: 100%;
    z-index: 1;

    .van-tabs__nav--complete {
      padding-right: 35px;
    }
  }
}

.tabsleft {
  z-index: 2;
  position: fixed;
  right: 0;
  top: 46px;
  width: 35px;
  height: 44px;
  background-color: #fff;
  text-align: center;
  line-height: 44px;
}

.cell-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cell-img {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cell-label {
  display: flex;
  justify-content: space-between;

  i {
    margin-top: 4px;
  }
}

::v-deep .van-pull-refresh {
  overflow: visible !important;
}
</style>
