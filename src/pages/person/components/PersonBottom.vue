<template>
  <div class="footer">
    <div class="setting">
      <i class="iconfont">&#xe652;</i>设置
    </div>
    <div class="exit">
      <i class="iconfont">&#xe71f;</i>退出
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonBottom'
}
</script>

<style lang="stylus" scoped>
.footer
  position absolute
  bottom 0
  left 0
  height 1rem
  line-height 1rem
  color #999
  font-size .36rem
  .setting
    padding-left .2rem
    display inline-block
    .iconfont
      font-size .4rem
      vertical-align middle
  .exit
    display inline-block
    margin-left .2rem
    .iconfont
      font-size .42rem
      vertical-align middle
</style>
