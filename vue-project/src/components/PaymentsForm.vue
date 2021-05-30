<template>
  <div  class="paymentsform">
    <input type="date" class="paymentsform__date" v-model="date" >
    <!-- <input placeholder="Категория" v-model="category"> -->
    <select v-model="category" class="paymentsform__category">
      <option v-for="(category, index) in getCategoryList" :key="index">{{ category }}</option>
    </select>
    <input placeholder="Описание" class="paymentsform__description" v-model="description">
    <input placeholder="Цена" class="paymentsform__price" v-model.number="price">
    <button class="button" v-if="newRecord" @click="newsave">Добавить</button>
    <button class="button" v-else @click="save">Редактировать</button>
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
      address: '',
      haveCategory: false,
      showcategory: false,
      currentRecord: [],
      newRecord: false
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryList',
      'getFullPaymentsList',
      'getCurrentRecord'
    ])
  },
  methods: {
    ...mapActions([
      'addFullData',
      'addCategoryData',
      'changeRecord'
    ]),
    newsave () {
      const { date, category, description, price } = this
      const rec = [{ date, category, description, price }]
      this.addFullData(rec)
      this.$modal.close('PaymentsForm')
    },
    save () {
      const { date, category, description, price } = this
      const rec = [{ date, category, description, price }]
      this.changeRecord(rec)
      this.$modal.close('PaymentsForm')
    },
    onGetCategory () {
      this.categories = this.getCategoryList
    },
    onGetCurrentRecord () {
      this.currentRecord = this.getCurrentRecord
    },
    setValues (category, price) {
      this.category = category
      this.price = price
    },
    checkCategory () {
      this.haveCategory = false
      this.categories.forEach((item) => {
        if (item === this.category) { this.haveCategory = true }
      })
      // return haveCategory
    },
    parseAddress () {
      this.category = this.$route.params.category
      this.price = this.$route.query.value
    }
  },
  mounted () {
    this.onGetCategory()
    this.parseAddress()
    this.checkCategory()
    this.onGetCurrentRecord()
    if (this.currentRecord.length !== 0) {
      this.date = this.currentRecord.date
      this.category = this.currentRecord.category
      this.description = this.currentRecord.description
      this.price = this.currentRecord.price
      this.newRecord = false
    } else {
      this.newRecord = true
    }
    if (!this.haveCategory) {
      this.showcategory = true
      this.newcategory = this.category
    }
    if (this.haveCategory && this.price > 0) {
      this.save()
    }
  }
}
</script>

<style lang="sass">
$block-height: 30px
.paymentsform
  padding: 15px
  // height: $block-height
  margin-bottom: 15px
  // box-sizing: border-box
  border: 1px solid #000
  background: #fff

  &__date
    margin-right: 10px
    height: $block-height
    box-sizing: border-box
  &__category
    width: 120px
    margin-right: 10px
    height: $block-height
    box-sizing: border-box
  &__description
    width: 250px
    margin-left: 10px
    height: $block-height
    box-sizing: border-box
  &__price
    width: 70px
    margin: 0 10px
    height: $block-height
    box-sizing: border-box
.button
  height: $block-height
  // width: 80px

</style>
