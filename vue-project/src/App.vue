<template>
  <div id="app" class="app">
    <header class="header">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/404">404</router-link>
      <br>
      Подсчет расходов
    </header>
    <main>
      <router-view />
      <transition  name='fade'>
        <ModalWindow
          v-if='modalWindow'
          :modalWindow='modalWindow'
          :modalWindowSettings='modalWindowSettings'
        />
      </transition>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    modalWindow: () => import('./components/ModalWindow.vue')
  },
  data () {
    return {
      modalWindow: '',
      modalWindowSettings: {}
    }
  },
  methods: {
    onOpened (settings) {
      this.modalWindow = settings.name
      this.modalWindowSettings = settings
    },
    onClosed () {
      this.modalWindow = ''
      this.modalWindowSettings = {}
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

<style lang="sass">
body
  width: 800px
  margin: 0 auto

.header
  color: red
  font-size: 24px

button
  margin: 10px 0
</style>
