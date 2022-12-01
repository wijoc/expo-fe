<template>
  <header id="header" ref="header" :class="'fixed top-0 left-0 w-full py-0.5 z-10 transition-all duration-200 ' + (this.headerType === 'exhibition' ? 'hidden sm:flex sm:max-h-6 bg-sky-400' : 'max-h-9')" v-if="this.headerType !== 'login'">
    <div class="container">
      <div :class="'relative flex items-center w-full ' + this.divClass">
        <router-link class="flex flex-row flex-nowrap justify-between items-center" v-if="this.headerType !== 'exhibition'" to="/">
          <img src="@/assets/img/Logo.png" alt="" class="w-7 h-7">
          <span id="brand" :class="'uppercase font-semibold ml-1 ' + (this.headerType === 'login' ? 'text-primary text-2xl' : 'text-white text-lg')">UMKM EXPO</span>
        </router-link>
        <div id="menu-bar" ref="menu-bar" class="absolute right-0 flex items-center sm:hidden" @click="menuClicked()" v-if="this.headerType !== 'login'">
          <button type="button" id="menu-btn" ref="menu-btn" class="block relative">
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
          </button>
        </div>
        <div id="menu-item" ref="menu-item" class="absolute flex flex-col w-8/12 bg-sky-100 rounded drop-shadow-2xl top-7 -right-[30rem] transition-all ease-in-out duration-300 sm:relative sm:flex-row sm:justify-end sm:top-0 sm:right-0 sm:max-w-6/12 sm:bg-transparent sm:drop-shadow-none md:max-w-5/12" v-if="this.headerType !== 'login'">
          <nav class="flex flex-col sm:flex-row sm:items-center">
            <router-link :class="(this.headerType === 'exhibition' ? 'nav-item-sm' : 'nav-item')" to="/#home">
              Home
            </router-link>
            <router-link :class="(this.headerType === 'exhibition' ? 'nav-item-sm' : 'nav-item')" to="/#about">
              Tentang
            </router-link>
            <router-link :class="(this.headerType === 'exhibition' ? 'nav-item-sm' : 'nav-item')" to="/#contact">
              Kontak
            </router-link>
            <router-link :class="(this.headerType === 'exhibition' ? 'nav-item-sm' : 'nav-item')" to="/exhibition">
              Pameran
            </router-link>
            <router-link :class="(this.headerType === 'exhibition' ? 'nav-item-sm' : 'nav-item')" to="/faq">
              faQ
            </router-link>
            <router-link :class="(this.headerType === 'exhibition' ? 'nav-item-sm uppercase' : 'nav-item sm:btn sm:btn-primary sm:rounded-lg sm:ml-1')" to="/registration">
              Daftar
            </router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    headerType: {
      type: String,
      default: () => { return 'landing' }
    }
  },
  methods: {
    windowScrolled () {
      if (window.scrollY > 10) {
        this.$refs.header.classList.add('header-scrolled')
        this.$refs.header.classList.add('animate-slideDown')
      } else {
        this.$refs.header.classList.remove('header-scrolled')
        this.$refs.header.classList.remove('animate-slideDown')
      }
    },
    menuClicked () {
      this.$refs['menu-btn'].classList.toggle('menu-active')

      if (this.$refs['menu-btn'].classList.contains('menu-active')) {
        this.$refs['menu-item'].classList.add('right-0')
        this.$refs['menu-item'].classList.remove('-right-[30rem]')
      } else {
        this.$refs['menu-item'].classList.remove('right-0')
        this.$refs['menu-item'].classList.add('-right-[30rem]')
      }
    }
  },
  computed: {
    divClass: function () {
      if (this.headerType === 'landing') {
        return 'justify-between sm:justify-between'
      } else if (this.headerType === 'exhibition') {
        return 'justify-between sm:justify-end'
      } else {
        return 'justify-center text-primary'
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.windowScrolled)
    console.log(this.headerType)
  },
  destroyed () {
    window.removeEventListener('scroll', this.windowScrolled)
  }
}
</script>
