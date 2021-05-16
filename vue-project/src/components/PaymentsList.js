import Paginator from './Paginator'
export default {
  components: {
    Paginator
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      paginatedData: [],
      page: 0,
      size: 0
    }
  },
  computed: {
    style () {
      return {
        height: this.size * 25 + 30 + 'px'
      }
    }
  },
  methods: {
    onShowArr (arr) {
      const { paginatedData, page, size } = arr
      this.paginatedData = paginatedData
      this.page = page
      this.size = size
    }
  }
}
