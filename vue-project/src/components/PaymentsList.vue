<template>
  <div class="list">
    <!-- <button @click="addRecord">Добавить запись</button>
    <button @click="addCategory">Добавить категорию</button> -->
    <v-data-table
      :headers="headers"
      :items="listWithIndex"
      :items-per-page="5"
    >
    </v-data-table>
    <!-- <v-data-table class="list__table" :style="style">
      <v-data-table-header class="list__header">
        <div class="list__header-cell date">Дата</div>
        <div class="list__header-cell category">Категория</div>
        <div class="list__header-cell description">Описание</div>
        <div class="list__header-cell price">Цена</div>
        <div class="list__header-cell context"></div>
      </v-data-table-header>

      <div class="list__data" v-for="(item, index) in currentElements" :key="index" >
        <div class="list__data-cell date">{{ item.date }}</div>
        <div class="list__data-cell category">{{ item.category }}</div>
        <div class="list__data-cell description">{{ item.description }}</div>
        <div class="list__data-cell price">{{ item.price }}</div>
        <div class="list__data-cell context" @click="openContextMenu(index)">...</div>
      </div>
    </v-data-table> -->
    <!-- <Paginator
      :length = "getFullPaymentsList.length"
      :size = "size"
      :currentlyPage = "page"
      @paginate = "onPaginate"
    /> -->
  </div>
</template>

<script>
// import Paginator from './Paginator'
import { mapGetters, mapActions } from 'vuex'

export default {
  // vuetify: new Vuetify(),
  components: {
    // Paginator
  },
  data () {
    return {
      headers: [
        { text: '#', value: 'index' },
        { text: 'Дата', value: 'date' },
        { text: 'Категория', value: 'category' },
        { text: 'Описание', value: 'description' },
        { text: 'Цена', value: 'price' }
      ],
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
    listWithIndex () {
      return this.getFullPaymentsList.map((obj, i) => {
        obj.index = i + 1
        return obj
      })
    },
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
// $fontsize: 16px
// // $blockwidth:
// .list
//   margin: 10px 0

//   &__header
//     display: flex
//     font-weight: bold

//     &-cell
//       border: 1px solid black
//       padding: 2px
//       background-color: #eee
//       font-size: $fontsize

//   &__data
//     display: flex

//     &-cell
//       border: 1px solid black
//       padding: 2px
//       font-size: $fontsize

// .index
//   width: $fontsize * 4
// .date
//   width: $fontsize * 8
// .category
//   width: $fontsize * 8
// .description
//   width: $fontsize * 30
// .price
//   width: $fontsize * 8
// .context
//   width: $fontsize
</style>
