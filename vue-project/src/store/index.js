import Vue from 'vue'
import Vuex from 'vuex'

// import Json from './data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  data () {
    return {
      // myJson: Json
    }
  },
  state: {
    paymentsList: [],
    fullPaymentsList: [],
    paginatedPaymentsList: [],
    categoryList: [],
    currentRecord: []
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
    },
    setCurrentRecord (state, payload) {
      state.currentRecord = payload
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getFullPaymentsList: state => state.fullPaymentsList,
    getPaginatedPaymentsList: state => state.paginatedPaymentsList,
    getCategoryList: state => state.categoryList,
    getCurrentRecord: state => state.currentRecord
  },
  actions: {
    // paginateData ({ commit }, size) { },
    addFullData ({ commit }, rec) {
      let haveData = false
      this.state.fullPaymentsList.forEach((item) => {
        if (item.date === rec[0].date &&
        item.category === rec[0].category &&
        item.description === rec[0].description &&
        item.price === rec[0].price) {
          haveData = true
        }
      })
      if (!haveData) {
        return commit('setFullPaymentsListData', this.state.fullPaymentsList.concat(rec))
      }
    },
    changeRecord ({ commit }, rec) {
      this.state.fullPaymentsList[this.state.currentRecord.idx].date = rec[0].date
      this.state.fullPaymentsList[this.state.currentRecord.idx].category = rec[0].category
      this.state.fullPaymentsList[this.state.currentRecord.idx].description = rec[0].description
      this.state.fullPaymentsList[this.state.currentRecord.idx].price = rec[0].price
      return commit('setFullPaymentsListData', this.state.fullPaymentsList)
    },
    addCategoryData ({ commit }, rec) {
      let havecategory = false
      this.state.categoryList.forEach((item) => {
        if (item === rec) { havecategory = true }
      })
      if (!havecategory) {
        return commit('setCategoryListData', this.state.categoryList.concat(rec))
      }
    },
    deleteRecord ({ commit }) {
      const arr1 = this.state.fullPaymentsList.slice(0, this.state.currentRecord.idx)
      const arr2 = this.state.fullPaymentsList.slice(this.state.currentRecord.idx + 1)
      return commit('setFullPaymentsListData', arr1.concat(arr2))
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
    fetchCurrentRecord ({ commit }, index) {
      const arr = this.state.fullPaymentsList[index]
      arr.idx = index
      return commit('setCurrentRecord', arr)
    },
    clearCurrentRecord ({ commit }) {
      const arr = []
      return commit('setCurrentRecord', arr)
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
  },
  methods: {

  }
})
