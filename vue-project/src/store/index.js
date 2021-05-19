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
    fullpaymentsList: [],
    paginatedpaymentsList: [],
    categoryList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    setPaginatePaymentsListData (state, payload) {
      state.paginatedpaymentsList = payload
    },
    setFullPaymentsListData (state, payload) {
      state.fullpaymentsList = payload
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
    paginateData ({ commit }, size) {
      return commit('setPaginatePaymentsListData', () => {
				const count = Math.ceil(this.fullpaymentsList.length / size) + 1
				for (let i = 1; i <= count; i++) {
					for (let k = 1; k <= size; k++) {
						let tempArr = []
						tempArr.push(`"page {{ count }}": [`) 
						let tek = k * (i - 1)
						tempArr.push(
							{
								"id": tek,
								"date": this.fullpaymentsList(tek).date,
								"category": this.fullpaymentsList(tek).category,
								"description": this.fullpaymentsList(tek).description,
								"price": this.fullpaymentsList(tek).price
							}
						)

						tempArr.push(`]`, ) 						
					}

				} 
				this.fullpaymentsList.fo
			}
        )
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
