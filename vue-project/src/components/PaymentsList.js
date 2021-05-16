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
    style () {
      return {
        height: this.size * 25 + 30 + 'px'
      }
    },
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
    }
  }
}
