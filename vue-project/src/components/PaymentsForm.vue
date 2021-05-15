<template>
  <div>
    <input type="date" placeholder="Дата" v-model="date">
    <input placeholder="Категория" v-model="category">
    <input placeholder="Цена" v-model.number="price">
    <button @click="save">Добавить</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    save () {
      const { date, category, price } = this
      // date = date
      this.$emit('add', { date, category, price })
    }
  }
}
</script>

<style lang="sass">

</style>
