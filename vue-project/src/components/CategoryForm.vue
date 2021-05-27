<template>
    <div class="newcategory" v-show="showcategory">
      <input placeholder="Новая категория" class="newcategory__category" v-model="newcategory">
      <button class="newcategorybutton button" @click="addcategory">Добавить категорию</button>
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
      showcategory: false,
      address: '',
      haveCategory: false
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
      const rec = [{ date, category, description, price }]
      this.addFullData(rec)
    },
    addcategory () {
      this.addCategoryData(this.newcategory)
      this.onGetCategory()
    },
    onChangeVisibleForm () {
      this.showcategory = !this.showcategory
    },
    onGetCategory () {
      this.categories = this.getCategoryList
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

.newcategorybutton
  width: 150px

</style>
