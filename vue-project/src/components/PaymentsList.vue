<template>
  <div class="list">
    <button @click="addRecord">Добавить запись</button>
    <div class="list__table" :style="style">
      <div class="list__header">
        <div class="list__header-cell date">Дата</div>
        <div class="list__header-cell category">Категория</div>
        <div class="list__header-cell description">Описание</div>
        <div class="list__header-cell price">Цена</div>
        <div class="list__header-cell context"></div>
      </div>

      <div class="list__data" v-for="(item, index) in currentElements" :key="index" >
        <div class="list__data-cell date">{{ item.date }}</div>
        <div class="list__data-cell category">{{ item.category }}</div>
        <div class="list__data-cell description">{{ item.description }}</div>
        <div class="list__data-cell price">{{ item.price }}</div>
        <div class="list__data-cell context" @click="openContextMenu(index)">...</div>
      </div>
    </div>
    <Paginator
      :length = "getFullPaymentsList.length"
      :size = "size"
      :currentlyPage = "page"
      @paginate = "onPaginate"
    />
  </div>
</template>

<script>
import Paginator from './Paginator'
import { mapGetters, mapActions } from 'vuex'

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
        height: (this.size + 1) * 30 + 'px'
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
    ...mapActions([
      'fetchCurrentRecord'
    ]),
    onPaginate (page) {
      this.page = page
      // this.$router.replace() .page = this.page
      this.$route.params.page = this.page
    },
    addRecord () {
      this.$modal.open('PaymentsForm')
    },
    openContextMenu (index) {
      // const index = this.currentElements.findIndex(el => el.price === this.currentElements.item.price)
      const id = (this.page - 1) * this.size + index
      this.fetchCurrentRecord(id)
      this.$modal.open('ContextForm')
    },
    closeContextMenu () {
      this.$modal.close('ContextForm')
    }
  },
  mounted () {

  }
}
</script>

<style lang='sass'>
$fontsize: 16px
// $blockwidth:
.list
  margin: 10px 0

  &__header
    display: flex
    font-weight: bold

    &-cell
      border: 1px solid black
      padding: 2px
      background-color: #eee
      font-size: $fontsize

  &__data
    display: flex

    &-cell
      border: 1px solid black
      padding: 2px
      font-size: $fontsize

.index
  width: $fontsize * 4
.date
  width: $fontsize * 8
.category
  width: $fontsize * 8
.description
  width: $fontsize * 30
.price
  width: $fontsize * 8
.context
  width: $fontsize
</style>
