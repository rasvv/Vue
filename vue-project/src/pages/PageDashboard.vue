<template>
<!-- <v-main class="main"> -->
  <v-row>
    <v-col>
      <h2>Подсчет расходов</h2>
      <v-btn
        color="teal"
        dark
        @click="addRecord"
      >
        Добавить запись <v-icon dark>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        dark
        @click="addCategory"
      >
        Добавить категорию
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
      <PaymentsList />
    </v-col>
    <v-col>
      <ApexChart />
      Diagram
    </v-col>
  </v-row>
<!-- </v-main> -->
</template>

<script>
import { mapActions } from 'vuex'
import PaymentsList from '../components/PaymentsList'
import ApexChart from '../components/ApexChart'

export default {
  // vuetify: new Vuetify(),
  components: {
    PaymentsList,
    ApexChart
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
    addRecord () {
      this.$modal.open('PaymentsForm')
    },
    addCategory () {
      this.$modal.open('CategoryForm')
    },
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
    // this.renderChart(data, options)
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
