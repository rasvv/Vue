<template>
  <v-container class="mx-auto">
    <apexchart
      width='380'
      type='donut'
      :options='options'
      :series='series'
      class="mt-10 mb-4"
    ></apexchart>
    <v-btn
      @click="getValues"
    >Обновить</v-btn>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      categories: [],
      prices: [],
      options: {
        labels: []
      },
      series: []
    }
  },
  computed: {
    ...mapGetters([
      'getFullPaymentsList'
    ])
  },
  methods: {
    getValues () {
      const arr = this.getFullPaymentsList
      let position = -1
      const cat = []
      const pri = []

      arr.forEach(function (el) {
        position = cat.indexOf(el.category)
        if (position === -1) {
          cat.push(el.category)
          pri.push(el.price)
        } else {
          pri[position] += el.price
        }
      })

      this.options = { labels: cat }
      this.series = pri
    }
  },
  mounted () {
    this.getValues()
  }
}
</script>

<style lang='sass'>

</style>
