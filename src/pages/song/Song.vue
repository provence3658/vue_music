<template>
  <div>
    <song-header :name="name" :singer="singer"></song-header>
    <song-content :img="img"></song-content>
    <song-footer></song-footer>
  </div>
</template>

<script>
import SongHeader from './components/SongHeader'
import SongContent from './components/SongContent'
import SongFooter from './components/SongFooter'
import axios from 'axios'
export default {
  name: 'Song',
  components: {
    SongHeader,
    SongContent,
    SongFooter
  },
  data () {
    return {
      id: '',
      img: '',
      name: '',
      singer: ''
    }
  },
  methods: {
    getSongInfo () {
      axios.get('/api/song.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data.songs[parseInt(this.$route.params.songId) - 1]
        this.id = data.id
        this.img = data.img
        this.name = data.name
        this.singer = data.singer
      }
    }
  },
  mounted () {
    this.getSongInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
