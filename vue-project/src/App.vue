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
import PaymentsList from './components/PaymentsList'
import PaymentsForm from './components/PaymentsForm'
export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentsForm
  },
  data () {
    return {
      checked: false,
      paymentsList: [
        { date: '2021-05-01', category: 'еда', price: 754 },
        { date: '2021-05-02', category: 'одежда', price: 2500 },
        { date: '2021-05-03', category: 'заправка', price: 2000 },
        { date: '2021-05-04', category: 'еда', price: 754 },
        { date: '2021-05-05', category: 'одежда', price: 2500 },
        { date: '2021-05-06', category: 'заправка', price: 2000 },
        { date: '2021-05-07', category: 'еда', price: 754 },
        { date: '2021-05-08', category: 'одежда', price: 2500 },
        { date: '2021-05-11', category: 'заправка', price: 2000 },
        { date: '2021-05-12', category: 'проезд', price: 49 }
      ]
    }
  },
  methods: {
    onDatAdded (data) {
      this.paymentsList.push(data)
    },
    onChangeVisibleForm () {
      this.checked = !this.checked
    }
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
