<template>
    <div :class="[$style.newcategory]" >
      <input :class="[$style.newcategory__category]" placeholder="Новая категория" v-model="newcategory">
      <button :class="[$style.newcategory__button]" @click="addcategory">Добавить категорию</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      newcategory: '',
      address: '',
      haveCategory: false
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryList'
    ])
  },
  methods: {
    ...mapActions([
      'addCategoryData'
    ]),
    addcategory () {
      this.addCategoryData(this.newcategory)
      this.onGetCategory()
    },
    onGetCategory () {
      this.categories = this.getCategoryList
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

<style module lang="sass">
$block-height: 30px
.newcategory
  width: 450px
  padding: 15px

  &__button
    width: 150px
    height: $block-height
    box-sizing: border-box

  &__category
    height: $block-height
    box-sizing: border-box
    margin-right: 10px

</style>
