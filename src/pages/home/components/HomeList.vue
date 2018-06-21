<template>
  <div>
    <div class="item">
      <i class="iconfont">&#xe610;</i>
      <div class="border-bottom item-content">我的音乐</div>
    </div>
    <div class="item">
      <i class="iconfont">&#xe60d;</i>
      <div class="border-bottom item-content">最近播放</div>
    </div>
    <div class="item">
      <i class="iconfont">&#xe607;</i>
      <div class="border-bottom item-content">我的电台</div>
    </div>
    <div class="item">
      <i class="iconfont">&#xe60b;</i>
      <div class="border-bottom item-content">我的收藏</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeList'
}
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border-color #cccccc
.item
  background #f7f7f7
  height 1rem
  line-height 1rem
  color #666
  font-size .28rem
  display flex
  padding 0 .2rem
  .iconfont
    float left
    color #FD2E2E
    font-size .4rem
  .item-content
    flex 1
    padding-left .18rem
</style>
