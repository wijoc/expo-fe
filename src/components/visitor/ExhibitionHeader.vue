<template>
  <header id="header" ref="header" class="hidden bg-primary top-0 left-0 w-full py-0.5 z-10 transition-all duration-200 sm:fixed sm:flex sm:max-h-6">
    <div class="container">
      <div class="relative flex flex-row items-center justify-end w-full flex-nowrap">
        <nav class="hidden sm:relative sm:flex sm:flex-row sm:items-center">
          <router-link class="hidden sm:nav-item-sm" to="/#home">
            Home
          </router-link>
          <router-link class="hidden sm:nav-item-sm" to="/#about">
            Tentang
          </router-link>
          <router-link class="hidden sm:nav-item-sm" to="/#contact">
            Kontak
          </router-link>
          <router-link class="hidden sm:nav-item-sm" to="/exhibition">
            Pameran
          </router-link>
          <router-link class="hidden sm:nav-item-sm" to="/faq">
            FAQ
          </router-link>
          <router-link class="hidden sm:nav-item-sm sm:uppercase" to="/registration">
            DAFTAR
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ExhibitionHeader',
  methods: {
    menuClicked () {
      this.$refs['menu-btn'].classList.toggle('menu-active')

      if (this.$refs['menu-btn'].classList.contains('menu-active')) {
        this.$refs['menu-item'].classList.add('-translate-y-0')
        this.$refs['menu-item'].classList.remove('translate-y-full')
      } else {
        this.$refs['menu-item'].classList.remove('-translate-y-0')
        this.$refs['menu-item'].classList.add('translate-y-full')
      }
    }
  },
  created () {
  },
  destroyed () {
  }
}
</script>
