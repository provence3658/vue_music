<template>
  <div class="wrapper">
    <div class="title">推荐歌单</div>
    <div class="content">
      <div class="item" v-for="(item, index) of recommendList" :key="index">
        <i class="iconfont">&#xe608;{{item.num}}</i>
        <img class="item-img" :src="item.img">
        <p class="item-text">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendList',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  height 0
  padding-bottom 100%
  .title
    width 100%
    padding 0 .2rem
    margin .2rem 0
    border-left .05rem solid #FD2E2E
    font-size .33rem
    box-sizing border-box
  .content
    width 100%
    .item
      position relative
      width 33.3%
      display inline-block
      text-align center
      .iconfont
        float right
        height 0
        position relative
        top .1rem
        right .1rem
        color #ffffff
        font-size .28rem
        z-index 2
        text-shadow 0 0 .01rem #000
      .item-img
        width 100%
      .item-text
        padding .1rem
        height .5rem
        line-height .5rem
        color #777
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
</style>
