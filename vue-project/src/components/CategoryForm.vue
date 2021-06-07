<template>
  <v-container>
    <v-text-field
      label='Новая категория'
      v-model='newcategory'
      hide-details='auto'
    ></v-text-field>
    <v-btn
			@click='addcategory'
			class="mt-5"
		> Добавить категорию </v-btn>
  </v-container>
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
      this.$modal.close('CategoryForm')
    },
    onGetCategory () {
      this.categories = this.getCategoryList
    },
    checkCategory () {
      this.haveCategory = false
      this.categories.forEach((item) => {
        if (item === this.category) { this.haveCategory = true }
      })
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

<style module lang='sass'>

</style>
