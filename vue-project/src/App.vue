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
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
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
