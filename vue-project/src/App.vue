<template>
  <div id="app" :class="[$style.app]">
    <header :class="[$style.header]">
      <router-link :class="[$style.link]" to="/dashboard">Dashboard</router-link>
      <router-link :class="[$style.link]" to="/about">About</router-link>
      <router-link :class="[$style.link]" to="/404">404</router-link>
      <br>
      <h2>Подсчет расходов</h2>
    </header>
    <main>
      <router-view />
      <transition  name='fade'>
        <ModalWindow
          v-if='modalWindow'
          :name='modalWindow'
        />
      </transition>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    ModalWindow: () => import('./components/ModalWindow')
  },
  data () {
    return {
      // modalShow: false,
      modalWindow: false
      // modalWindowSettings: {}
    }
  },
  methods: {
    onOpened ({ name }) {
      this.modalWindow = name
      // this.modalWindowSettings = settings
    },
    onClosed () {
      this.modalWindow = ''
      // this.modalWindowSettings = {}
    }
  },
  mounted () {
    this.$modal.EventBus.$on('open', this.onOpened)
    this.$modal.EventBus.$on('close', this.onClosed)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('open', this.onOpened)
    this.$modal.EventBus.$off('close', this.onClosed)
  }
}
</script>

<style  lang="sass">
.fade-enter-active
  transition: opacity 1s

.fade-leave-active
  transition: opacity 1s

.fade-enter, .fade-leave-to
  opacity: 0

</style>

<style lang="sass" module>
main
  position: relative

body
  width: 800px
  margin: 0 auto

.header
  color: red
  font-size: 24px

button
  margin: 10px 0

a
	margin: 15px
	font-size: 14px

</style>
