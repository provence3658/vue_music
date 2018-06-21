<template>
  <div v-bind:class="{showOverflow : personInfo}">
    <home-header @clickShowPerson="showPerson"></home-header>
    <home-list></home-list>
    <home-song
      :LikedList="LikedList"
      :CreatedList="CreatedList"
    ></home-song>
    <foot-player></foot-player>
    <transition
      name="fade"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft"
    >
      <div v-show="personInfo" class="personInfo">
        <person @showPerson="showPerson"></person>
      </div>
    </transition>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeList from './components/HomeList'
import HomeSong from './components/HomeSong'
import axios from 'axios'
import Person from '../person/Person.vue'
import FootPlayer from '../common/FootPlayer.vue'
export default {
  name: 'Home',
  data () {
    return {
      LikedList: [],
      CreatedList: [],
      personInfo: false
    }
  },
  components: {
    HomeHeader,
    HomeList,
    HomeSong,
    Person,
    FootPlayer
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.LikedList = data.LikedList
        this.CreatedList = data.createdList
      }
    },
    showPerson () {
      this.personInfo = !this.personInfo
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
.showOverflow
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  overflow hidden
.personInfo
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  z-index 99
</style>
