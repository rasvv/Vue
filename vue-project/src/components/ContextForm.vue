<template>
    <div class="context">
			<div class="context__item context__edit" @click="editcontext">Редактировать</div>
			<div class="context__item context__delete" @click="deletecontext">Удалить</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showcontext: false
    }
  },
  computed: {

  },
  methods: {
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
