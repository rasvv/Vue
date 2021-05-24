<template>
<div class="main">
  <!-- <div>Dashboard</div> -->
  <button @click="onChangeVisibleForm">Форма добавления данных</button>
  <PaymentsForm v-show="checked"/>
  <PaymentsList :items="paymentsList"/>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import PaymentsList from '../components/PaymentsList'
import PaymentsForm from '../components/PaymentsForm'

export default {
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
    onChangeVisibleForm () {
      this.checked = !this.checked
    },
    checkHash (category, price) {
      if (category !== '' && price !== '') {
        this.checked = true
      }
    }
  },
  mounted () {
    if (this.$route.params.command === 'add' &&
      this.$route.params.target === 'payment'
    ) {
      this.checked = true
    }
  },
  created () {
    this.fetchFullData()
    this.fetchCategoryData()
  }
}
</script>

<style>

</style>
