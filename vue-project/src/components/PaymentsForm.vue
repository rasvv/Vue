<template>
  <v-container>
   <v-menu
      v-model="menu"
      :close-on-content-click="true"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Дата"
          prepend-icon="mdi-calendar"
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
      ></v-date-picker>
    </v-menu>
    <v-select
      v-model="category"
      :items="getCategoryList"
      label="Категория"
    ></v-select>
    <v-text-field
      label='Описание'
      v-model='description'
      hide-details='auto'
    ></v-text-field>
    <v-text-field
      label='Цена'
      v-model='price'
      hide-details='auto'
      value=0
    ></v-text-field>
    <v-btn
      v-if="newRecord"
      @click="newsave"
      class="mt-7 mx-auto"
    >Добавить</v-btn>
    <v-btn
      v-else
      @click="save"
      class="mt-7 mx-auto"
    >Редактировать</v-btn>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
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
      let { date, category, description, price } = this
      price = +price
      const rec = [{ date, category, description, price }]
      this.addFullData(rec)
      this.$modal.close('PaymentsForm')
    },
    save () {
      let { date, category, description, price } = this
      price = +price
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

</style>
