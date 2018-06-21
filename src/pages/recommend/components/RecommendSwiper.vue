<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <router-link
          tag="img"
          to="/song/0001"
          class="swiper-img"
          src="http://p1.music.126.net/SPzFztesG0KPZKnq-9V3qA==/109951163291546754.jpg"
        ></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link
          tag="img"
          to="/song/0002"
          class="swiper-img"
          src="http://p1.music.126.net/-DtIvbFj7S9QEIhwvZlKkQ==/109951163291456756.jpg"
        ></router-link>
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://p1.music.126.net/LZL0KlJd17MmOwm9xjZy1w==/109951163289674713.jpg"
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://p1.music.126.net/K_7MLPYpcC4TuampeKyYcQ==/109951163291885961.jpg"
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://p1.music.126.net/5gazNuw5UrRczepKN0uZPg==/109951163291460140.jpg"
        >
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'RecommendBanner',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          loop: true
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  height 0
  padding-bottom 46%
  .swiper-img
    width 100%
</style>
