<template>
  <div v-bind:class="{showOverflow : personInfo}">
    <recommend-header @clickShowPerson="showPerson"></recommend-header>
    <recommend-swiper></recommend-swiper>
    <recommend-icon></recommend-icon>
    <recommend-list :recommendList="recommendList"></recommend-list>
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
import RecommendHeader from './components/RecommendHeader'
import RecommendSwiper from './components/RecommendSwiper'
import RecommendIcon from './components/RecommendIcon'
import RecommendList from './components/RecommendList'
import Person from '../person/Person.vue'
import axios from 'axios'
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [],
      personInfo: false
    }
  },
  components: {
    RecommendHeader,
    RecommendSwiper,
    RecommendIcon,
    RecommendList,
    Person
  },
  methods: {
    getRecommendInfo () {
      axios.get('/api/recommend.json').then(this.getRecommendInfoSucc)
    },
    getRecommendInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.recommendList = data.recommendList
      }
    },
    showPerson () {
      this.personInfo = !this.personInfo
    }
  },
  mounted () {
    this.getRecommendInfo()
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
