<template>
  <div class="player">
    <router-link
      class="play-img"
      tag="img"
      :to="{ name: 'Song',params: { name: '+song+', songId: id } }"
      :src="img">
    </router-link>
    <div class="content">
      <p class="songName">{{songName}}</p>
      <p class="singer">{{singer}}</p>
    </div>
    <div class="control">
      <i class="iconfont" @click="togglePause">{{isPause?'&#xe60d;':'&#xe609;'}}</i>
      <i class="iconfont">&#xe65f;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootPlayer',
  data () {
    return {
      isPause: false
    }
  },
  props: {
    id: String,
    img: String,
    songName: String,
    singer: String
  },
  methods: {
    togglePause () {
      this.isPause = !this.isPause
    }
  }
}
</script>

<style lang="stylus" scoped>
.player
  position fixed
  bottom 0
  left 0
  right 0
  height 1rem
  display flex
  background #fff
  padding .1rem .1rem
  box-sizing border-box
  .play-img
    height .8rem
    width .8rem
  .content
    margin-left .1rem
    flex 1
    .songName
      margin .1rem 0
    .singer
      font-size .22rem
  .control
    .iconfont
      width .8rem
      height .8rem
      color #999
      line-height .8rem
      font-size .6rem
      margin-right .1rem
</style>
