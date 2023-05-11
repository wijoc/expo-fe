<template>
  <div>
    <ExhibitionHeader />
    <SearchBar
      :shopSearch="this.$route.meta.shopsearch || false"
      :search.sync="searchKeyword"
      @set="setSearch($event)" />
    <slot />
    <TheFooter />
  </div>
</template>

<script>
import ExhibitionHeader from '@/components/visitor/ExhibitionHeader.vue'
import SearchBar from '@/components/exhibition/SearchBar.vue'
import TheFooter from '@/components/visitor/TheFooter.vue'

export default {
  name: 'ExhibitionLayout',
  components: {
    ExhibitionHeader,
    SearchBar,
    TheFooter
  },
  data () {
    return {
      searchKeyword: ''
    }
  },
  props: {},
  methods: {
    setSearch (inShop) {
      if (this.$route.meta.shopsearch) {
        if (inShop) {
          if (this.searchKeyword !== this.$route.query.s && encodeURIComponent(this.searchKeyword) !== this.$route.query.s) {
            /** Both of this won't refresh page */
            // history.pushState({ s: this.searchKeyword }, null, this.$route.path + '?' + encodeURIComponent('s') + '=' + encodeURIComponent(this.searchKeyword))
            this.$router.push({ query: { s: this.searchKeyword } })
          }
        } else {
          this.$router.push({ name: 'exhibition', query: { s: this.searchKeyword } })
        }
      } else {
        if (this.searchKeyword !== this.$route.query.s && encodeURIComponent(this.searchKeyword) !== this.$route.query.s) {
          /** Both of this won't refresh page */
          // history.pushState({ s: this.searchKeyword }, null, this.$route.path + '?' + encodeURIComponent('s') + '=' + encodeURIComponent(this.searchKeyword))
          this.$router.push({ query: { s: this.searchKeyword } })
        }
      }
    }
  },
  created () {
    this.searchKeyword = this.$route.query.s
  }
}
</script>
