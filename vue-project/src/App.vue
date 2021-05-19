<template>
  <div id="app">
    <header :class="[$style.header]">
      Мой подсчет расходов
    </header>
    <main>
      <button @click="onChangeVisibleForm">Добавить данные</button>
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
      'fetchData',
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
    this.fetchData()
    this.fetchCategoryData()
  }
}
</script>

<style lang="sass" module>
.header
  color: red
  font-size: 24px

button
  margin: 10px 0
</style>
