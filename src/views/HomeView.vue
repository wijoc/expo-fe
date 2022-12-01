<template>
  <div class="bg-sky-400">
    <HomeW msg="jajal" />
  </div>
</template>

<style>
 @import url("@/assets/css/index.css");
</style>

<script>
import '@/assets/css/index.css'
import HomeW from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HomeW
  }
}
</script>
