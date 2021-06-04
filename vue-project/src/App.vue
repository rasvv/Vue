<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn plain :ripple="false" to="/dashboard">Dashboard</v-btn>
      <v-btn plain :ripple="false" to="/about">About</v-btn>
      <v-btn plain :ripple="false" to="/404">404</v-btn>
    </v-app-bar>
    <v-main>
      <h2>Подсчет расходов</h2>
      <router-view />
      <!-- <transition  name='fade'>
        <ModalWindow
          v-if='modalWindow'
          :name='modalWindow'
        />
      </transition> -->
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    // ModalWindow: () => import('./components/ModalWindow')
  },
  data () {
    return {
      // modalShow: false,
      // modalWindow: false
      // modalWindowSettings: {}
    }
  },
  methods: {
    onOpened ({ name }) {
      // this.modalWindow = name
      // this.modalWindowSettings = settings
    },
    onClosed () {
      // this.modalWindow = ''
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
  // position: relative

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
