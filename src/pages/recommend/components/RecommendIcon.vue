<template>
  <div class="wrapper">
    <div class="item">
      <i class="iconfont">&#xe859;</i>
      <div class="title">私人FM</div>
    </div>
    <div class="item">
      <i class="iconfont">&#xe688;</i>
      <div class="title">每日听歌推荐</div>
    </div>
    <div class="item">
      <i class="iconfont">&#xe682;</i>
      <div class="title">云音乐热歌榜</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendIcon'
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  height 0
  padding-top .2rem
  padding-bottom 20%
  text-align center
  .item
    display inline-block
    width 32%
    .iconfont
      font-size 1rem
      color #FD2E2E
    .title
      margin-top .18rem
      color #999
</style>
