<template>
  <div class="list">
    <div class="list__table" :style="style">
      <div class="list__header">
        <div class="list__header-cell date">Дата</div>
        <div class="list__header-cell category">Категория</div>
        <div class="list__header-cell description">Описание</div>
        <div class="list__header-cell price">Цена</div>
      </div>

      <div class="list__data" v-for="(item, index) in paginatedData" :key="index" >
        <div class="list__data-cell date">{{ item.date }}</div>
        <div class="list__data-cell category">{{ item.category }}</div>
        <div class="list__data-cell description">{{ item.description }}</div>
        <div class="list__data-cell price">{{ item.price }}</div>
      </div>
    </div>
    <Paginator :items="items" @showArr="onShowArr"/>
  </div>
</template>

<script>
import Paginator from './Paginator'
export default {
  components: {
    Paginator
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      paginatedData: [],
      page: 0,
      size: 0
    }
  },
  computed: {
    style () {
      return {
        height: (this.size + 1) * 25 + 'px'
      }
    }
  },
  methods: {
    onShowArr (arr) {
      const { paginatedData, page, size } = arr
      this.paginatedData = paginatedData
      this.page = page
      this.size = size
    }
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
