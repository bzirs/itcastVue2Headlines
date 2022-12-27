<!--
 * @Author: bzirs
 * @Date: 2022-12-27 11:14:04
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-27 17:02:31
 * @FilePath: /vue2-itcast-headlines/src/views/ArticleDetails/components/DetailsBottom.vue
 * @Description:
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->

<template>
  <div class="">
    <!-- 默认显示 -->
    <div v-if="show" class="bottom_nav">
      <van-nav-bar @click-left="$router.back()">
        <template #left>
          <van-icon name="arrow-left" />
        </template>
        <template #title>
          <div class="title_content" @click="toComment">发表评论</div>
          <div class="right">
            <van-icon color="#000" size="20" name="comment-o" />
            <van-icon @click="handleStar" v-if="!star" color="#000" size="20" name="star-o" />
            <van-icon @click="handleStar" v-else name="star"  color="red" size="20" />
            <van-icon color="#000" size="20" name="share-o" />
          </div>
        </template>
      </van-nav-bar>
    </div>
    <!-- 切换评论 -->
    <div v-else class="comment">
      <van-form @submit="onSubmit">
        <van-field ref="commentInput" @blur="show = true;commitVal=''" v-model="commitVal" type="textarea" placeholder="发一条友善的评论" name="content" />
        <div class="commit-button">
          <van-button round block type="info" native-type="submit">发布</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsBottom',
  components: {},
  props: {
    star: {
      type: Boolean
      // required: true
    }
  },
  data () {
    return {
      // true不显示评论框
      show: true,
      // 评论内容
      commitVal: ''
    }
  },
  async created () {},
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    async handleStar () {
      // this.star
    },
    // 打开评论框
    toComment () {
      this.show = false
      this.$nextTick(() => this.$refs.commentInput.focus())
    },
    // 提交评论
    onSubmit (val) {
      this.show = true
      console.log(val)
    }
  },
  computed: {},
  watch: {},
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@mixin bottom-nav-public {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  border-top: 1px solid #f7f8f9;
}
.bottom_nav {
  @include bottom-nav-public;
  height: 45px;

  ::v-deep .van-nav-bar {
    background-color: #fff;

    .van-nav-bar__left {
      position: static;
    }

    .van-nav-bar__content {
      justify-content: space-between;

      .van-nav-bar__title {
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;

        .title_content {
          flex: 1;
          height: 30px;
          // line-height: 30px;
          background-color: #f8f8f8;
          display: flex;
          align-items: center;
          // justify-content: center;
          border-radius: 15px;
          padding-left: 10px;
          font-size: 10px;
          border: 1px solid #efefef;
        }

        .right {
          width: 40%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }

      .van-nav-bar__right {
        justify-content: space-between;
        width: 30%;
      }
    }

    .van-icon-arrow-left {
      color: #000;
    }
  }
}
.comment {
  @include bottom-nav-public;
  height: 75px;
  // display: flex;
  // align-self: center;
  ::v-deep .van-form {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .van-cell {
      padding: 10px 0;
      padding-left: 10px;
    }

    .van-field__control {
      background-color: #f8f8f8;

      border-radius: 6px;
      overflow: hidden;
      padding-left: 6px;
      font-size: 10px;
      color: #000 !important;
    }

    .commit-button {
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;

      .van-button::before {
        background-color: #fff;
      }
    }
    .van-button--info {
      border-radius: 0;
      background-color: #fff;
      color: #999999;
      border: 0;
      padding: 0;
    }
  }
}
</style>
