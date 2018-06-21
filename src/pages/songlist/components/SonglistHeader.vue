<template>
  <div class="area">
    <div class="header">
      <router-link
        tag="i"
        class="iconfont back"
        to="/"
      >
        &#xe720;
      </router-link>
      <span class="title">歌单</span>
      <i class="iconfont search">&#xe606;</i>
      <i class="iconfont more">&#xe65a;</i>
    </div>
    <div class="content">
      <img class="songlist-img" :src="this.img">
      <div class="songlist-info">
        <p class="songlist-title">{{this.title}}</p>
        <div class="user">
          <img src="@/assets/images/81.jpg" class="user-img">
          <span class="user-name">Provence3658</span>
        </div>
      </div>
      <div class="dolist">
        <div class="collect">
          <i class="iconfont">&#xe660;</i>
          <p class="func">收藏</p>
        </div>
        <div class="comment">
          <i class="iconfont">&#xe601;</i>
          <p class="func">评论</p>
        </div>
        <div class="share">
          <i class="iconfont">&#xe600;</i>
          <p class="func">分享</p>
        </div>
        <div class="download">
          <i class="iconfont">&#xe60e;</i>
          <p class="func">下载</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SonglistHeader',
  props: {
    img: String,
    title: String
  }
}
</script>

<style lang="stylus" scoped>
.area
  width 100%
  height 0
  padding-bottom 64%
  background #E4EDDB
  .header
    position fixed
    top 0
    left 0
    right 0
    background #E4EDDB
    height 1rem
    line-height 1rem
    display flex
    text-align center
    z-index 2
    .back
      font-size .6rem
      width .8rem
    .search
      font-size .5rem
      width .8rem
    .more
      font-size .5rem
      width .8rem
    .title
      font-size .36rem
      flex 1
      text-align left
  .content
    padding 1.5rem .5rem .5rem .5rem
    .songlist-img
      width 2rem
      height 2rem
    .songlist-info
      margin-left .3rem
      padding-top .2rem
      display inline-block
      box-sizing border-box
      .songlist-title
        font-size .32rem
      .user
        position relative
        top .4rem
        .user-img
          width .6rem
          height .6rem
          border-radius 50%
        .user-name
          vertical-align middle
          font-size .24rem
    .dolist
      display flex
      text-align center
      margin-top .4rem
      .collect
        flex 1
      .comment
        flex 1
      .share
        flex 1
      .download
        flex 1
      .iconfont
        font-size .4rem
      .func
        margin-top .1rem
</style>
