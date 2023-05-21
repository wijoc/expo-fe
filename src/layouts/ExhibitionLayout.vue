<template>
  <div class="relative bg-gray-100/50">
    <ExhibitionHeader />
    <SearchBar
      :shopSearch="this.$route.meta.shopsearch || false"
      :search.sync="searchKeyword"
      :showCart.sync="showCart"
      @set="setSearch($event)" />
    <ExhibitionCart
      :show.sync="showCart" />
    <slot :show-cart="toggleCart" />
    <TheFooter />
  </div>
</template>

<script>
import ExhibitionHeader from '@/components/visitor/ExhibitionHeader.vue'
import TheFooter from '@/components/visitor/TheFooter.vue'
import ExhibitionCart from '@/components/exhibition/ExhibitionCart.vue'
import SearchBar from '@/components/exhibition/SearchBar.vue'

export default {
  name: 'ExhibitionLayout',
  components: {
    ExhibitionHeader,
    SearchBar,
    ExhibitionCart,
    TheFooter
  },
  data () {
    return {
      searchKeyword: '',
      showCart: false
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
    },
    toggleCart (tggl = false) {
      this.showCart = tggl
    }
  },
  created () {
    this.$root.$on('showcart', this.toggleCart)
    this.searchKeyword = this.$route.query.s
  }
}
</script>
