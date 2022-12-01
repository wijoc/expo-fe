<template>
  <main id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>
