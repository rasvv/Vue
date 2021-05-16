<template>
  <div class="btn-toolbar">
    <button
    v-for="page in pageCount"
    v-bind:key="page"
    v-bind:class="{ active: page === currentlyPage }"
    @click.prevent="setPage(page)">
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      size: 4,
      pageNumber: 0,
      currentlyPage: 1
    }
  },
  computed: {
    pageCount () {
      const l = this.items.length
      const s = this.size
      return Math.ceil(l / s)
    },
    paginatedData () {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.items.slice(start, end)
    }
  },
  methods: {
    setPage (page) {
      this.pageNumber = page - 1
      this.currentlyPage = page
      const { paginatedData, size } = this
      this.$emit('showArr', { paginatedData, page, size })
    }
  },
  created () {
    this.setPage(1)
  }
}
</script>

<style>

</style>
