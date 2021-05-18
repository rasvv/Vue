<template>
  <div class="btn-toolbar">
		<button @click.prevent="prevPage()" :disabled="currentlyPage == 1">prev</button>
    <button
      v-for="page in pageCount"
      v-bind:key="page"
      v-bind:class="{ active: page === currentlyPage }"
      @click.prevent="setPage(page)">
      {{ page }}
    </button>
		<button @click.prevent="nextPage()" :disabled="this.currentlyPage == this.pageCount">next</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
  },
  data () {
    return {
      size: 3,
      pageNumber: 0,
      currentlyPage: 1
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    pageCount () {
      const l = this.getPaymentsList.length
      const s = this.size
      return Math.ceil(l / s)
    },
    paginatedData () {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.getPaymentsList.slice(start, end)
    }
  },
  methods: {
    setPage (page) {
      this.pageNumber = page - 1
      this.currentlyPage = page
      const { paginatedData, size } = this
      this.$emit('showArr', { paginatedData, page, size })
    },
    nextPage () {
      this.currentlyPage++
      this.setPage(this.currentlyPage)
    },
    prevPage () {
      this.currentlyPage--
      this.setPage(this.currentlyPage)
    }
  },
  mounted () {
    this.setPage(1)
  }
}
</script>

<style lang="sass">
button:hover:disabled
  cursor:not-allowed

.active
  background: lightblue
</style>
