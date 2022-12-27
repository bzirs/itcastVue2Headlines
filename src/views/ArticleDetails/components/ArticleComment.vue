<!--
 * @Author: bzirs
 * @Date: 2022-12-27 22:30:02
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-27 22:49:08
 * @FilePath: /vue2-itcast-headlines/src/views/ArticleDetails/components/ArticleComment.vue
 * @Description:
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="article-comments">
    <!-- 评论列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多评论了" @load="onLoad">
      <template v-if="list.length">
        <van-cell v-for="item in list" :key="item.com_id">
          <van-image slot="icon" round width="30" height="30" style="margin-right: 10px" :src="item.aut_photo" />
          <span style="color: #466b9d" slot="title">{{ item.aut_name }}</span>
          <div slot="label">
            <p style="color: #363636">{{ item.content }}</p>
            <p>
              <span style="margin-right: 10px">{{ item.pubdate | relativeTime }}</span>
            </p>
          </div>
          <van-icon slot="right-icon" name="like-o" />
        </van-cell>
      </template>
    </van-list>
    <!-- 评论列表 -->
  </div>
</template>

<script>
import { getComments } from '@/api/comment'
export default {
  name: 'ArticleComment',
  components: {},
  props: {
  },
  data () {
    return {
      list: [], // 评论列表
      loading: false, // 上拉加载更多的 loading
      finished: false // 是否加载结束
    }
  },
  async created () {
    console.log()
  },
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    // 下拉加载
    async onLoad () {
      const obj = {
        type: 'a',
        source: this.$route.query.art_id
      }

      const { data: { results } } = await getComments({ ...obj })

      !results.length && (this.finished = true)

      this.loading = false

      this.list.push(...results)
    }
  },
  computed: {},
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
// 发表评论的区域是固定在下端的
.publish-wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
// 给发表评论区空出地方
.van-list {
  margin-bottom: 45px;
}

/*美化 - 文章详情 - 底部的发布评论-样式 */
// 外层容器
.art-cmt-container-1 {
  padding-bottom: 46px;
}
.art-cmt-container-2 {
  padding-bottom: 80px;
}

// 发布评论的盒子 - 1
.add-cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  line-height: 46px;
  padding-left: 10px;
  .ipt-cmt-div {
    flex: 1;
    border: 1px solid #efefef;
    border-radius: 15px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    padding-left: 15px;
    margin-left: 10px;
    background-color: #f8f8f8;
  }
  .icon-box {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    line-height: 0;
  }
}

.child {
  width: 20px;
  height: 20px;
  background: #f2f3f5;
}

// 发布评论的盒子 - 2
.cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: white;
  textarea {
    flex: 1;
    height: 66%;
    border: 1px solid #efefef;
    background-color: #f8f8f8;
    resize: none;
    border-radius: 6px;
    padding: 5px;
  }
  .van-button {
    height: 100%;
    border: none;
  }
}
</style>
