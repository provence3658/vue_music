<template>
  <div class="footer">
    <div class="playing">
      <span class="time">00:03</span>
      <div class="duration">
        <span class="current"></span>
        <div class="ball"></div>
      </div>
      <span class="time">04:08</span>
    </div>
    <div class="playCtrl">
      <i class="iconfont">&#xe613;</i>
      <i class="iconfont">&#xe60a;</i>
      <i class="iconfont pause" @click="togglePause">{{isPause?'&#xe60d;':'&#xe609;'}}</i>
      <i class="iconfont">&#xe611;</i>
      <i class="iconfont">&#xe65f;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongFooter',
  data () {
    return {
      isPause: false
    }
  },
  methods: {
    togglePause () {
      this.isPause = !this.isPause
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  position absolute
  bottom 0
  left 0
  right 0
  .playing
    width 100%
    padding 0 .5rem
    box-sizing border-box
    display flex
    margin-bottom .2rem
    .duration
      display inline-block
      flex 1
      height 0
      border 1px solid #000
      margin-top .1rem
      .ball
        width 14px
        height 14px
        background #000
        border-radius 50%
        margin-top -7px
    .time
      margin 0 .1rem
  .playCtrl
    display flex
    text-align center
    height 1.8rem
    line-height 1.8rem
    .iconfont
      flex 1
      font-size .6rem
      vertical-align middle
    .pause
      font-size 1rem
      vertical-align middle
</style>
