import Vue from 'vue'
import Vuex from 'vuex'
// import JSON from '../store.data.json'

import dataJson from './data.json'
import categoriesJson from './categories.json'

Vue.use(Vuex)
// Vue.use(Json)

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
    currentRecord: [],
    myDataJson: dataJson,
    myCategoriesJson: categoriesJson
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
      window.localStorage.setItem(this.myDataJson, this.getFullPaymentsList)
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
      // this.myJson = Json.parse()
      return commit('setFullPaymentsListData', this.state.myDataJson)
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
      return commit('setCategoryListData', this.state.myCategoriesJson)
    }
  },
  methods: {

  }
})
