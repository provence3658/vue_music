<template>
  <div class="menu">
    <div class="menu-item">
      <i class="iconfont">&#xe70a;</i>&nbsp;我的消息
    </div>
    <div class="menu-item">
      <i class="iconfont">&#xe703;</i>&nbsp;我的会员
    </div>
    <div class="menu-item">
      <i class="iconfont">&#xe63f;</i>&nbsp;商城
    </div>
    <div class="interval"></div>
    <div class="menu-item">
      <i class="iconfont">&#xe715;</i>&nbsp;我的好友
    </div>
    <div class="menu-item">
      <i class="iconfont">&#xe6ec;</i>&nbsp;附近的人
    </div>
    <div class="interval"></div>
    <div class="menu-item">
      <i class="iconfont">&#xe69e;</i>&nbsp;个性换肤
    </div>
    <div class="menu-item">
      <i class="iconfont">&#xe735;</i>&nbsp;定时播放
    </div>
    <div class="menu-item">
      <i class="iconfont">&#xe6e8;</i>&nbsp;音乐闹钟
    </div>
    <div class="menu-item">
      <i class="iconfont">&#xe616;</i>&nbsp;驾驶模式
    </div>
    <div class="menu-item">
      <i class="iconfont">&#xe77e;</i>&nbsp;音乐云盘
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonMenu'
}
</script>

<style lang="stylus" scoped>
.menu
  .menu-item
    width 100%
    height .8rem
    line-height .8rem
    font-size .3rem
    padding 0 .2rem
    box-sizing border-box
    color #999
    .iconfont
      font-size .4rem
      vertical-align middle
  .interval
    height 0.1rem
    background #eee
</style>
