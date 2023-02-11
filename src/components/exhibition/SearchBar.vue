<template>
  <div id="exhibition-nav" ref="exhibition-nav" class="flex flex-nowrap justify-center items-center gap-2 px-1.5 fixed w-full bg-white z-50 sm:top-5 lg:px-[4.5rem] xl:px-[5.5rem]">
    <section id="search-bar" ref="search-bar" class="w-full flex flex-nowrap gap-1 px-1 py-2">
      <div class="flex flex-nowrap justify-center items-center gap-0 min-w-full border-gradient-to-r rounded-md p-0.5 overflow-hidden relative">
        <select class="form-control form-control-xs p-1 w-fit rounded-l" v-if="this.shopSearch">
          <option value="">Di Toko ini</option>
          <option value="">Di Pameran</option>
        </select>
        <input type="text" :class="'w-full p-0.5 text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 ' + (this.shopSearch ? 'rounded-r' : 'rounded')" placeholder="Cari Barang ..." v-model="keyword">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="max-w-4 max-h-[0.85rem] text-gray-400 fill-current absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
        </svg>
      </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 text-gray-400 fill-current">
      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/>
    </svg>
    <div id="menu-bar" ref="menu-bar" class="exhibition right-0 flex items-center sm:hidden" @click="menuClicked()">
      <button type="button" id="menu-btn" ref="menu-btn" class="block relative">
        <span class="menu-line bg-gray-400 w-5 my-1"></span>
        <span class="menu-line bg-gray-400 w-5 my-1"></span>
        <span class="menu-line bg-gray-400 w-5 my-1"></span>
      </button>
    </div>
    <div id="menu-item" ref="menu-item" class="absolute flex flex-col w-8/12 bg-sky-100 rounded drop-shadow-2xl top-12 -right-[30rem] z-50 transition-all ease-in-out duration-300 sm:hidden">
      <nav class="flex flex-col sm:flex-row sm:items-center">
        <router-link class="nav-item" to="/#home">
          Home
        </router-link>
        <router-link class="nav-item" to="/#about">
          Tentang
        </router-link>
        <router-link class="nav-item" to="/#contact">
          Kontak
        </router-link>
        <router-link class="nav-item" to="/exhibition">
          Pameran
        </router-link>
        <router-link class="nav-item" to="/faq">
          faQ
        </router-link>
        <router-link class="nav-item sm:btn sm:btn-primary sm:rounded-lg sm:ml-1" to="/registration">
          Daftar
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    shopSearch: {
      type: Boolean,
      default: () => { return false }
    },
    search: {
      type: String,
      default: () => { return null }
    }
  },
  methods: {
    windowScrolled () {
      if (window.scrollY > 45) {
        // this.$refs['exhibition-nav'].classList.add('z-50')
        // this.$refs['exhibition-nav'].classList.add('bg-white')
        this.$refs['exhibition-nav'].classList.add('animate-headerDown')
        this.$refs['exhibition-nav'].classList.add('shadow-xl')
      } else {
        // this.$refs['exhibition-nav'].classList.remove('z-50')
        // this.$refs['exhibition-nav'].classList.remove('bg-white')
        this.$refs['exhibition-nav'].classList.remove('animate-headerDown')
        this.$refs['exhibition-nav'].classList.remove('shadow-xl')
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
    keyword: {
      get () {
        return this.search
      },
      set (value) {
        this.$emit('update:search', value)
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.windowScrolled)
  },
  destroyed () {
    window.removeEventListener('scroll', this.windowScrolled)
  }
}
</script>
