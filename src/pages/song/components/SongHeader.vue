<template>
  <div class="header">
    <i class="iconfont return" @click="routerBack">&#xe720;</i>
    <div class="musicDetail">
      <p class="name">{{this.name}}</p>
      <p class="singer">{{this.singer}}</p>
    </div>
    <i class="iconfont share">&#xe600;</i>
  </div>
</template>

<script>
export default {
  name: 'SongHeader',
  props: {
    name: String,
    singer: String
  },
  methods: {
    routerBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 1.2rem
  display flex
  padding-top .1rem
  box-sizing border-box
  .return
    font-size .5rem
    line-height 1rem
    width 1rem
    text-align center
  .musicDetail
    display inline-block
    flex 1
    .name
      margin .15rem 0
      font-size .30rem
    .singer
      font-size .22rem
  .share
    font-size .54rem
    line-height 1rem
    width 1rem
    text-align center
</style>
