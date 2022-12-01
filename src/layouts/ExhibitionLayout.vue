<template>
  <div>
    <TheHeader headerType="exhibition" />
    <slot />
  </div>
</template>

<script>
import TheHeader from '@/components/visitor/TheHeader.vue'

export default {
  name: 'LandingLayout',
  components: {
    TheHeader
  }
}
</script>
