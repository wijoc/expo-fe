<template>
  <div>
    <ExhibitionHeader />
    <SearchBar
      :shopSearch="this.shopsearch"
      :search.sync="searchTerm" />
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
      searchTerm: ''
    }
  },
  props: {
    shopsearch: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  }
}
</script>
