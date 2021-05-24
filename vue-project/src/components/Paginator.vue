<template>
  <div class="btn-toolbar">
    <button @click.prevent="setPage(currentlyPage - 1)" :disabled="currentlyPage === 1">prev</button>
    <button
      v-for="page in pageCount"
      :key="page"
      v-bind:class="{ active: page === currentlyPage }"
      @click.prevent="setPage(page)">
      {{ page }}
    </button>
    <button @click.prevent="setPage(currentlyPage + 1)" :disabled="currentlyPage === this.pageCount">next</button>
  </div>
</template>

<script>

export default {
  props: {
    length: Number,
    size: Number,
    currentlyPage: Number
  },
  data () {
    return {

    }
  },
  computed: {
    pageCount () {
      const { length, size } = this
      return Math.ceil(length / size)
    }
  },
  methods: {
    setPage (page) {
      // this.currentlyPage = page
      this.$emit('paginate', page)
    }
  },
  mounted () {
    if (!isNaN(this.$route.params.page)) {
      this.setPage(+this.$route.params.page)
    }
  }
}
</script>

<style lang="sass">
button:hover:disabled
  cursor:not-allowed

.active
  background: lightblue
</style>
