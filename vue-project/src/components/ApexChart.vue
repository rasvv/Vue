<template>
  <div>
    <apexchart width='380' type='donut' :options='options' :series='series'></apexchart>
  </div>
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
    getValues (arr) {
      // var data = [
      //   { date: '2021-05-01', category: 'Еда', description: 'Бутылка кефира, полбатона', price: 754 },
      //   { date: '2021-05-02', category: 'Одежда', description: 'Брюки', price: 2500 },
      //   { date: '2021-05-03', category: 'Авто', description: 'Поменял резину', price: 2000 },
      //   { date: '2021-05-04', category: 'Еда', description: 'Креветки с пивом', price: 754 },
      //   { date: '2021-05-05', category: 'Одежда', description: 'Рубашка', price: 2500 },
      //   { date: '2021-05-06', category: 'Прочее', description: 'Разное', price: 2000 },
      //   { date: '2021-05-07', category: 'Еда', description: 'Разное', price: 754 },
      //   { date: '2021-05-08', category: 'Авто', description: 'Заправка', price: 2500 },
      //   { date: '2021-05-11', category: 'Развлечения', description: 'Сходил в кино', price: 600 },
      //   { date: '2021-05-12', category: 'Прочее', description: 'Проезд', price: 49 }
      // ]

      // const result = this.getFullPaymentsList.reduce((r, { category, price }) => {
      //   r[category] = r[category] || { category, price }
      //   r[category].price += price
      //   return r
      // }, {})

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

      // console.log(result)
    }
  },
  mounted () {
    this.getValues(this.getFullPaymentsList)
  }
}
</script>

<style>

</style>
