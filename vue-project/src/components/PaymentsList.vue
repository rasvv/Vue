<template>
  <div class="list">
    <div class="list__table" :style="style">
      <div class="list__header">
        <div class="list__header-cell date">Дата</div>
        <div class="list__header-cell category">Категория</div>
        <div class="list__header-cell description">Описание</div>
        <div class="list__header-cell price">Цена</div>
      </div>

      <div class="list__data" v-for="(item, index) in currentElements" :key="index" >
        <div class="list__data-cell date">{{ item.date }}</div>
        <div class="list__data-cell category">{{ item.category }}</div>
        <div class="list__data-cell description">{{ item.description }}</div>
        <div class="list__data-cell price">{{ item.price }}</div>
      </div>
    </div>
    <Paginator
      :length = "getFullPaymentsList.length"
      :size = "size"
      :currentlyPage = "page"
      @paginate = "onPaginate"
    />
    <button @click="openPaymentsForm">Open</button>
    <button @click="closePaymentsForm">Close</button>
  </div>
</template>

<script>
import Paginator from './Paginator'
import { mapGetters } from 'vuex'

export default {
  components: {
    Paginator
  },
  data () {
    return {
      page: 1,
      size: 4
    }
  },
  computed: {
    style () {
      return {
        height: (this.size + 1) * 25 + 'px'
      }
    },
    ...mapGetters([
      'getFullPaymentsList'
    ]),
    currentElements () {
      const { page, size } = this
      return this.getFullPaymentsList.slice(size * (page - 1), size * (page - 1) + size)
    }
  },
  methods: {
    onPaginate (page) {
      this.page = page
      // this.$router.replace() .page = this.page
      this.$route.params.page = this.page
    },
    openPaymentsForm () {
      this.$modal.open('PaymentsForm')
    },
    closePaymentsForm () {
      this.$modal.close('PaymentsForm')
    }

  },
  mounted () {

  }
}
</script>

<style lang='sass'>
.list
  margin: 10px 0

  &__header
    display: flex
    font-weight: bold

    &-cell
      border: 1px solid black
      padding: 2px
      background-color: #eee

  &__data
    display: flex

    &-cell
      border: 1px solid black
      padding: 2px

.index
  width: 50px
.date
  width: 100px
.category
  width: 100px
.description
  width: 250px
.price
  width: 80px
</style>
