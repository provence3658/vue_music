<template>
  <div class="header">
    <div class="left">
      <i class="iconfont" @click="showPerson">&#xe65f;</i>
    </div>
    <div class="center">
      <router-link tag="i" to="/" class="iconfont dis">&#xe7da;</router-link>
      <i class="iconfont">&#xe658;</i>
      <router-link tag="i" to="/recommend" class="iconfont dis">&#xe691;</router-link>
    </div>
    <div class="right">
      <i class="iconfont">&#xe606;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendHeader',
  methods: {
    showPerson () {
      this.$emit('clickShowPerson')
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 1rem
  background-color #FD2E2E
  display flex
  padding 0 .2rem
  box-sizing border-box
  .left
    float left
    color #fff
    width .8rem
    line-height 1rem
    text-align center
    .iconfont
      font-size .56rem
  .center
    flex 1
    color #fff
    text-align center
    line-height 1rem
    .iconfont
      margin 0 .4rem
      font-size .5rem
    .dis
      color #ccc
  .right
    float right
    width .8rem
    text-align center
    color #fff
    line-height 1rem
    .iconfont
      font-size .5rem
</style>
