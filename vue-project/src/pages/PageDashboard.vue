<template>
<div class="main">
  <PaymentsList />
</div>
</template>

<script>
import { mapActions } from 'vuex'
import PaymentsList from '../components/PaymentsList'
// import PaymentsForm from '../components/PaymentsForm'

export default {
  components: {
    PaymentsList
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'fetchFullData',
      'fetchCategoryData'
    ]),
    checkHash (category, price) {
      if (category !== '' && price !== '') {
        this.$modal.open('PaymentsForm')
      }
    }
  },
  mounted () {
    if (this.$route.params.command === 'add' &&
      this.$route.params.target === 'payment'
    ) {
      this.$modal.open('PaymentsForm')
    }
  },
  created () {
    this.fetchFullData()
    this.fetchCategoryData()
  }
}
</script>

<style lang="sass">
.main
  position: absolute

</style>
