<template>
  <div>
    <div class="area">
      <div class="title" @click="hindCreatedList()">
        <i class="iconfont down">&#xe62d;</i>
        我创建的歌单
        <i class="iconfont set">&#xe652;</i>
      </div>
      <div
        class="item-list"
        v-show="showCreatedList"
        v-for="item of CreatedList"
        :key="item.id"
      >
        <router-link
          tag="div"
          class="item"
          :to="{ name: 'Songlist', params: { name: '+songlist+', songlistId: item.id } }"
        >
          <img class="item-img" :src="item.img">
          <div class="item-content border-bottom">
            <p class="content-title">{{item.title}}</p>
            <p>{{item.num}}首歌曲</p>
          </div>
          <i class="iconfont">&#xe65a;</i>
        </router-link>
      </div>
      <div class="title"  @click="hindLikedList()">
        <i class="iconfont down">&#xe62d;</i>
        我收藏的歌单
        <i class="iconfont set">&#xe652;</i>
      </div>
      <div
        class="item-list"
        v-show="showLikedList"
        v-for="item of LikedList"
        :key="item.id"
      >
        <div class="item">
          <img class="item-img" :src="item.img">
          <div class="item-content border-bottom">
            <p class="content-title">{{item.title}}</p>
            <p>{{item.num}}首歌曲 by {{item.author}}</p>
          </div>
          <i class="iconfont">&#xe65a;</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSong',
  props: {
    LikedList: Array,
    CreatedList: Array
  },
  data () {
    return {
      showCreatedList: true,
      showLikedList: true
    }
  },
  methods: {
    hindCreatedList () {
      this.showCreatedList = !this.showCreatedList
    },
    hindLikedList () {
      this.showLikedList = !this.showLikedList
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  background #ddd
  height .5rem
  line-height .5rem
  position relative
  .down
    margin-left .1rem
  .set
    position absolute
    right .1rem
.item-list
  background #f7f7f7
  color #333
  .item
    height 1.2rem
    display flex
    padding .1rem
    box-sizing border-box
    .item-img
      width 1rem
    .item-content
      flex 1
      line-height .48rem
      margin-left .2rem
      .content-title
        font-size .32rem
    .iconfont
      line-height 1rem
</style>
