<template>
  <div>
    <ExhibitionHeader />
    <SearchBar
      :shopSearch="this.shopsearch"
      :search.sync="searchKeyword"
      @set="setSearch($event)" />
    <slot />
  </div>
</template>

<script>
import ExhibitionHeader from '@/components/visitor/ExhibitionHeader.vue'
import SearchBar from '@/components/exhibition/SearchBar.vue'

export default {
  name: 'ExhibitionLayout',
  components: {
    ExhibitionHeader,
    SearchBar
  },
  data () {
    return {
      searchKeyword: ''
    }
  },
  props: {
    shopsearch: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  methods: {
    setSearch () {
      if (this.searchKeyword !== this.$route.query.s && encodeURIComponent(this.searchKeyword) !== this.$route.query.s) {
        /** Both of this won't refresh page */
        // history.pushState({ s: this.searchKeyword }, null, this.$route.path + '?' + encodeURIComponent('s') + '=' + encodeURIComponent(this.searchKeyword))
        this.$router.push({ props: { searchTerm: this.searchKeyword }, query: { s: this.searchKeyword } })
      }
    }
  },
  created () {
    this.searchKeyword = this.$route.query.s
  }
}
</script>
