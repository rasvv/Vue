<template>
  <div class="list">
    <div class="list__header">
      <!-- <div class="list__header-cell index">№</div> -->
      <div class="list__header-cell date">Дата</div>
      <div class="list__header-cell category">Категория</div>
      <div class="list__header-cell price">Цена</div>
    </div>

    <div class="list__data" v-for="(item, index) in paginatedData" :key="index">
      <!-- <div class="list__data-cell index">{{ index + 1 }}</div> -->
      <div class="list__data-cell date">{{ item.date }}</div>
      <div class="list__data-cell category">{{ item.category }}</div>
      <div class="list__data-cell price">{{ item.price }}</div>
    </div>

    <div class="btn-toolbar">
      <button v-for="page in pageCount" v-bind:key="page" class="btn btn-primary" @click.prevent="setPage(page)">
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      size: 2,
      pageNumber: 0
    }
  },
  computed: {
    pageCount () {
      const l = this.items.length
      const s = this.size
      return Math.ceil(l / s)
    },
    paginatedData () {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.items.slice(start, end)
    }
  },
  methods: {
    setPage (page) {
      this.pageNumber = page - 1
    }
  },
  created () {
    // this.setPage = 1
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
  width: 150px
.category
  width: 300px
.price
  width: 100px
</style>
