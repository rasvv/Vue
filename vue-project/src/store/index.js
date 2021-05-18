import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    setCategoryListData (state, payload) {
      state.categoryList = payload
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getCategoryList: state => state.categoryList
  },
  actions: {
    fetchData ({ commit }) {
      return commit('setPaymentsListData',
        [
          { date: '2021-05-01', category: 'Еда', description: 'Бутылка кефира, полбатона', price: 754 },
          { date: '2021-05-02', category: 'Одежда', description: 'Брюки', price: 2500 },
          { date: '2021-05-03', category: 'Авто', description: 'Поменял резину', price: 2000 },
          { date: '2021-05-04', category: 'Еда', description: 'Креветки с пивом', price: 754 },
          { date: '2021-05-05', category: 'Одежда', description: 'Рубашка', price: 2500 },
          { date: '2021-05-06', category: 'Прочее', description: 'Разное', price: 2000 },
          { date: '2021-05-07', category: 'Еда', description: 'Разное', price: 754 },
          { date: '2021-05-08', category: 'Авто', description: 'Заправка', price: 2500 },
          { date: '2021-05-11', category: 'Развлечения', description: 'Сходил в кино', price: 600 },
          { date: '2021-05-12', category: 'Прочее', description: 'Проезд', price: 49 }
        ])
    },
    fetchCategoryData ({ commit }) {
      return commit('setCategoryListData',
        [
          'Еда',
          'Одежда',
          'Авто',
          'Прочее',
          'Развлечения'
        ]
      )
    }
  }
})
