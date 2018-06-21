<template>
  <div>
    <songlist-header
      :img="img"
      :title="title"
    ></songlist-header>
    <songlist-item
      :num="num"
      :songs="songs"
      @handleFootPlayer="changeFootPlayer"
    ></songlist-item>
    <foot-player
      :id="footer.id"
      :img="footer.img"
      :songName="footer.songName"
      :singer="footer.singer"
    ></foot-player>
  </div>
</template>

<script>
import SonglistHeader from './components/SonglistHeader'
import SonglistItem from './components/SonglistItem'
import axios from 'axios'
import FootPlayer from '../common/FootPlayer'
export default {
  name: 'Songlist',
  data () {
    return {
      id: '',
      img: '',
      num: '',
      title: '',
      songs: [],
      footer: {
        id: '',
        img: '',
        songName: '',
        singer: ''
      }
    }
  },
  components: {
    SonglistHeader,
    SonglistItem,
    FootPlayer
  },
  methods: {
    getSonglistInfo () {
      axios.get('/api/songlist.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let index = parseInt(this.$route.params.songlistId) - 1
        let data = res.data.songlist[index]
        this.img = data.img
        this.title = data.title
        this.num = data.num
        this.songs = data.songs
      }
    },
    changeFootPlayer (id) {
      let song = this.songs[id - 1]
      this.footer.id = song.id
      this.footer.img = song.img
      this.footer.songName = song.songName
      this.footer.singer = song.singer
    }
  },
  mounted () {
    this.getSonglistInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
