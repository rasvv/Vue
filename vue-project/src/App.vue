<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/calculator.png" /> -->
    <calculator />
  </div>
</template>

<script>
import calculator from './components/calculator.vue'

export default {
  name: 'App',
  components: {
    calculator
  }
}
</script>

<style src="./null.sass" lang="sass"></style>
<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 10px

</style>
