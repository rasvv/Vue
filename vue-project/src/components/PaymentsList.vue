<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="listWithIndex"
			:items-per-page="5"
			@click="openContextMenu"
    >
    </v-data-table>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
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
    }
  },
  methods: {
    ...mapActions([
      'fetchCurrentRecord'
    ]),
    openContextMenu (index) {
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

</style>
