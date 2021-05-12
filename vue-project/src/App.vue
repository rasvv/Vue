<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/calculator.png" /> -->
    <calculator msg="Welcome to Your Vue.js App" :myBool="false" />
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

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

</style>
