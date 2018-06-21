<template>
  <div class="content">
    <div class="cd">
      <div class="line">
        <div class="switch">
          <img class="switch-img" src="@/assets/images/swith.png">
        </div>
      </div>
      <div class="cd-content">
        <div class="wrapper">
          <img :src="this.img" class="image">
        </div>
      </div>
    </div>
    <div class="musicDo">
      <i class="iconfont">&#xe660;</i>
      <i class="iconfont">&#xe60e;</i>
      <i class="iconfont">&#xe601;</i>
      <i class="iconfont">&#xe65a;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongContent',
  props: {
    img: String
  }
}
</script>

<style lang="stylus" scoped>
.content
  width 100%
  height 10rem
  position relative
  .cd
    width 100%
    height 8rem
    .line
      margin 0 2rem
      height 0
      box-sizing border-box
      border 1px solid #999
      .switch
        width 100%
        position relative
        left 40%
        top -.15rem
        .switch-img
          width 40%
    .cd-content
      width 100%
      .wrapper
        width 6.6rem
        height 6.6rem
        margin 0 auto
        margin-top 1.3rem
        background url('http://www.daiwei.org/static/images/cd-mine.png') no-repeat
        background-size 6.6rem 6.6rem
        .image
          width 4.4rem
          height 4.4rem
          margin 1.1rem 1.1rem
          position absolute
          z-index -1
  .musicDo
    position absolute
    left 0
    right 0
    bottom 0
    display flex
    text-align center
    padding 0 1rem
    .iconfont
      flex 1
      font-size .6rem
</style>
