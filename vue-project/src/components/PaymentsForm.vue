<template>
  <div  class="paymentsform">
    <input type="date" class="paymentsform__date" v-model="date" >
    <!-- <input placeholder="Категория" v-model="category"> -->
    <select v-model="category" class="paymentsform__category">
      <option v-for="(category, index) in getCategoryList" :key="index">{{ category }}</option>
    </select>
    <input placeholder="Описание" class="paymentsform__description" v-model="description">
    <input placeholder="Цена" class="paymentsform__price" v-model.number="price">
    <button class="button" @click="save">Добавить</button>
    <br>
    <button @click="onChangeVisibleForm">Форма Добавления категории</button>
    <div class="newcategory" v-show="showcategory">
      <input placeholder="Новая категория" class="paymentsform__category" v-model="newcategory">
      <button class="newcategorybutton" @click="addcategory">Добавить категорию</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      date: new Date().toISOString().substr(0, 10),
      category: 'Еда',
      newcategory: '',
      description: '',
      categories: [],
      price: 0,
      showcategory: false
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryList',
      'getFullPaymentsList'
    ])
  },
  methods: {
    ...mapActions([
      'addFullData',
      'addCategoryData'
    ]),
    save () {
      const { date, category, description, price } = this
      this.addFullData([{ date, category, description, price }])
      this.categories.push(this.getCategoryList)
    },
    addcategory () {
      this.addCategoryData(this.newcategory)
      this.categories = this.getCategoryList
    },
    onChangeVisibleForm () {
      this.showcategory = !this.showcategory
    }
  },
  mounted () {
    this.categories = this.getCategoryList
  }
}
</script>

<style lang="sass">
$block-height: 30px
.paymentsform
  // height: $block-height
  margin-bottom: 15px
  // box-sizing: border-box

  &__date
    margin-right: 10px
    height: $block-height - 4px
    box-sizing: border-box
  &__category
    width: 120px
    margin-right: 10px
    height: 100%
    box-sizing: border-box
  &__description
    width: 250px
    margin-left: 10px
    height: $block-height - 6px
    box-sizing: border-box
  &__price
    width: 70px
    margin: 0 10px
    height: $block-height - 6px
    box-sizing: border-box
.button
  height: $block-height
  width: 80px

.newcategorybutton
  width: 150px

</style>
