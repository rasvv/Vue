<template>
  <div id="app" class="app">
    <header :class="[$style.header]">
      Подсчет расходов
    </header>
    <main>
      <button @click="onChangeVisibleForm">Форма добавления данных</button>
      <PaymentsForm @add="onDatAdded" v-show="checked"/>
      <PaymentsList :items="paymentsList"/>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PaymentsList from './components/PaymentsList.vue'
import PaymentsForm from './components/PaymentsForm.vue'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentsForm
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    ...mapActions([
      'fetchFullData',
      'fetchCategoryData'
    ]),
    onDatAdded (data) {
      this.paymentsList.push(data)
    },
    onChangeVisibleForm () {
      this.checked = !this.checked
    }
  },
  created () {
    this.fetchFullData()
    this.fetchCategoryData()
  }
}
</script>

<style lang="sass" module>
body
	width: 800px
	margin: 0 auto

.header
  color: red
  font-size: 24px

button
  margin: 10px 0
</style>
