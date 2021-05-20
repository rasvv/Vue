import Vue from 'vue'
import Vuex from 'vuex'

import Json from './data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  data () {
    return {
      myJson: Json
    }
  },
  state: {
    paymentsList: [],
    fullPaymentsList: [],
    paginatedPaymentsList: [],
    categoryList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    setPaginatedPaymentsListData (state, payload) {
      state.paginatedPaymentsList = payload
    },
    setFullPaymentsListData (state, payload) {
      state.fullPaymentsList = payload
    },
    setCategoryListData (state, payload) {
      state.categoryList = payload
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getFullPaymentsList: state => state.fullPaymentsList,
    getPaginatedPaymentsList: state => state.paginatedPaymentsList,
    getCategoryList: state => state.categoryList
  },
  actions: {
    // paginateData ({ commit }, size) { },
    addFullData ({ commit }, rec) {
      return commit('setFullPaymentsListData', this.state.fullPaymentsList.concat(rec))
    },
    fetchFullData ({ commit }) {
      return commit('setFullPaymentsListData',
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
    fetchData ({ commit }, attr) {
      const pageNumber = attr[0]
      const size = attr[1]

      return commit('setPaginatedPaymentsListData', this.state.fullPaymentsList.slice(pageNumber * size, pageNumber * size + size))
    },
    addCategoryData ({ commit }, rec) {
      return commit('setCategoryListData', this.state.categoryList.concat(rec))
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
