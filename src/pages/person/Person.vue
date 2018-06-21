<template>
  <div class="wrapper">
    <div class="left">
      <person-banner></person-banner>
      <person-menu></person-menu>
      <person-bottom></person-bottom>
    </div>
    <div class="right" @click="handlePerson"></div>
  </div>
</template>

<script>
import PersonBanner from './components/PersonBanner'
import PersonMenu from './components/PersonMenu'
import PersonBottom from './components/PersonBottom'
export default {
  name: 'Person',
  components: {
    PersonBanner,
    PersonMenu,
    PersonBottom
  },
  methods: {
    handlePerson () {
      this.$emit('showPerson')
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  display flex
  flex-direction row
  width 100%
  height 100%
  background rgba(0, 0, 0, .4)
  overflow hidden
  .left
    width 6rem
    overflow hidden
    background #fff
  .right
    flex 1
</style>
