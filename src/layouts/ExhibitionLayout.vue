<template>
  <div>
    <ExhibitionHeader />
    <slot />
  </div>
</template>

<script>
import ExhibitionHeader from '@/components/visitor/ExhibitionHeader.vue'

export default {
  name: 'ExhibitionLayout',
  components: {
    ExhibitionHeader
  }
}
</script>
