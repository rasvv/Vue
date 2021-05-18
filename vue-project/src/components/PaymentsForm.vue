<template>
  <div  class="paymentsform">
    <input type="date" class="paymentsform__date" v-model="date" >
    <!-- <input placeholder="Категория" v-model="category"> -->
		<select v-model="category" class="paymentsform__category">
			<option v-for="(category, index) in getCategoryList" :key="index">{{ category }}</option>
		</select>
    <input placeholder="Цена" class="paymentsform__price" v-model.number="price">
    <button class="button" @click="save">Добавить</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      date: new Date().toISOString().substr(0, 10),
      category: 'Еда',
      categories: [],
      price: 0
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryList'
    ])
  },
  methods: {
    save () {
      const { date, category, price } = this
      // date = date
      this.$emit('add', { date, category, price })
    }
  },
  mounted () {
    this.categories.push(this.getCategoryList)
  }
}
</script>

<style lang="sass">
$block-height: 30px
.paymentsform
	height: $block-height
	margin-bottom: 20px
	box-sizing: border-box

	&__date
		margin-right: 10px
		height: $block-height - 4px
    box-sizing: border-box
	&__category
		width: 120px
    margin-right: 10px
		height: 100%
    box-sizing: border-box
	&__price
		margin: 0 10px
		height: $block-height - 6px
    box-sizing: border-box
.button
	height: $block-height
	width: 80px

</style>
