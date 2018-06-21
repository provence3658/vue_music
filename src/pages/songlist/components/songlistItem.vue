<template>
  <div>
    <div class="header border-bottom">
      <i class="iconfont">&#xe610;</i>
      <span class="title">播放全部</span>
      <span class="num">(共{{this.num}}首)</span>
      <i class="iconfont">&#xe65a;</i>
      <span class="set">多选</span>
    </div>
    <div class="content">
      <div
        class="item border-bottom"
        v-for="item of songs"
        :key="item.songId"
        @click="handlePlay(item.songId)"
      >
        <div class="iconfont" v-if="item.songId == isPlaying">&#xe730;</div>
        <div class="id" v-else>{{item.songId}}</div>
        <div class="desc">
          <p class="songName">{{item.songName}}</p>
          <p class="singer">{{item.singer}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SonglistItem',
  data () {
    return {
      isPlaying: 0
    }
  },
  props: {
    num: String,
    songs: Array
  },
  methods: {
    handlePlay (id) {
      this.isPlaying = id
      this.$emit('handleFootPlayer', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height .8rem
  line-height .8rem
  padding 0 .2rem
  box-sizing border-box
  display flex
  color #999
  .iconfont
    font-size .32rem
    vertical-align middle
    margin-right .1rem
  .title
    font-size .32rem
    vertical-align middle
    margin-right .1rem
  .num
    font-size .2rem
    vertical-align middle
    flex 1
  .set
    font-size .26rem
    vertical-align middle
.content
  .item
    display flex
    height 1.2rem
    line-height 1rem
    color #999
    padding-top .1rem
    box-sizing border-box
    .iconfont
      width 1.2rem
      text-align center
      color #FD2E2E
      font-size .5rem
    .id
      width 1.2rem
      text-align center
      font-size .42rem
    .desc
      flex 1
      line-height .5rem
      .songName
        width 5rem
        font-size .32rem
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        color #666
      .singer
        font-size .26rem
        width 5rem
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
    .more
      width .8rem
      text-align center
      .iconfont
        font-size .5rem
</style>
