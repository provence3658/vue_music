<template>
  <div class="menu">
    <div class="menu-info">
      <img class="user-img" src="@/assets/images/81.jpg">
      <div class="user-detail">
        <span class="name">Provence3658</span>
        <span class="progress">Lv.9</span>
        <span class="sign">签到</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonBanner'
}
</script>

<style lang="stylus" scoped>
.menu
  .menu-info
    width 100%
    padding-bottom 50%
    background-image url("http://www.daiwei.org/index/images/img/indeximg.jpg")
    background-size cover
    padding 1.5rem .5rem .3rem .5rem
    box-sizing border-box
    .user-img
      width 1.2rem
      border-radius 50%
    .user-detail
      margin-top .2rem
      height .5rem
      .name
        height .5rem
        line-height .5rem
        font-size .32rem
        color #fff
        vertical-align middle
      .progress
        border 1px solid #fff
        border-radius 5px
        padding 1px 3px
        color #fff
        font-size .2rem
        box-sizing border-box
        vertical-align middle
      .sign
        height .5rem
        line-height .5rem
        font-size .32rem
        color #fff
        vertical-align middle
        border 1px solid #fff
        padding 2px 4px
        border-radius 6px
        margin-left 1rem
</style>
