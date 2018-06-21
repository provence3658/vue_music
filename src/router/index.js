import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Recommend from '@/pages/recommend/Recommend'
import Songlist from '@/pages/songlist/Songlist'
import Song from '@/pages/song/Song'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/songlist/:songlistId',
      name: 'Songlist',
      component: Songlist
    },
    {
      path: '/song/:songId',
      name: 'Song',
      component: Song
    }
  ]
})
