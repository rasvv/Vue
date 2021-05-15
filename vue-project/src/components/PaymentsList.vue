<template>
  <div class="list">
    <div class="list__header">
      <div class="list__header-cell index">№</div>
      <div class="list__header-cell date">Дата</div>
      <div class="list__header-cell category">Категория</div>
      <div class="list__header-cell price">Цена</div>
    </div>
    <div class="list__data" v-for="(item, index) in items" :key="index">
      <div class="list__data-cell index">{{ index+1 }}</div>
      <div class="list__data-cell date">{{ item.date }}</div>
      <div class="list__data-cell category">{{ item.category }}</div>
      <div class="list__data-cell price">{{ item.price }}</div>
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
  methods: {

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
