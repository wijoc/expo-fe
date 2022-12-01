<template>
  <div>
    <TheHeader headerType="landing" />
    <slot />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/visitor/TheHeader.vue'
import TheFooter from '@/components/visitor/TheFooter.vue'

export default {
  name: 'LandingLayout',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
