<template>
  <div id="exhibition-bar" ref="exhibition-bar" class="flex flex-row justify-center items-center gap-2 px-1.5 fixed w-full z-50 bg-white sm:top-5 sm:px-8 md:px-6 lg:px-[4.5rem] xl:px-[5.5rem]">
    <router-link class="hidden sm:flex sm:flex-row sm:flex-nowrap sm:justify-start sm:items-center sm:w-full sm:max-w-[22%] md:max-w-[20%] lg:max-w-[16.3%] xl:max-w-[13%] 2xl:max-w-[12%]" to="/">
      <img src="@/assets/img/Logo.png" alt="UKM Virtual Expo Logo" class="w-7 h-7">
      <span id="brand" class="ml-1 text-lg font-semibold text-black uppercase whitespace-nowrap">UMKM Expo</span>
    </router-link>
    <div id="search-bar" class="flex w-full gap-1 px-1 py-2 flex-nowrap">
      <div class="relative flex items-center justify-start min-w-full gap-0 p-0 overflow-hidden border-2 rounded-md flex-nowrap border-secondary focus-within:border-primary">
        <select class="p-1 rounded-l form-control form-control-xs w-fit focus:outline-none focus:ring-0 focus:border-none" v-if="this.shopSearch" v-model="searchInShop">
          <option :value="true">Di Toko ini</option>
          <option :value="false">Di Pameran</option>
        </select>
        <input type="text" :class="'w-[90%] p-[.2rem] text-sm bg-white placeholder:text-gray-400 focus:outline-none ' + (this.shopSearch ? 'rounded-r' : 'rounded')" placeholder="Cari Barang ..." v-model="keyword" @keyup.enter="setSearch">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="max-w-4 max-h-[0.85rem] text-gray-400 fill-current absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer" @click="setSearch">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
        </svg>
      </div>
    </div>
    <button id="toggle-cart-button" ref="toggle-cart-button" class="btn btn-normal hover:bg-gray-200" @click="toggleCart()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 text-gray-500 fill-current">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/>
      </svg>
    </button>
    <div id="menu-bar" ref="menu-bar" class="relative flex items-center sm:hidden" @click="menuClicked()">
      <button type="button" id="menu-btn" ref="menu-btn" class="relative block transition-all duration-300 opacity-100 cursor-pointer">
        <span class="w-5 my-1 bg-gray-500 menu-line"></span>
        <span class="w-5 my-1 bg-gray-500 menu-line"></span>
        <span class="w-5 my-1 bg-gray-500 menu-line"></span>
      </button>
      <svg id="menu-close" ref="menu-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="absolute text-gray-500 transition-all duration-300 opacity-0 fill-current">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
      </svg>
    </div>
    <div id="menu-item" ref="menu-item" class="absolute flex flex-col w-full h-screen transition-all duration-200 translate-y-full bg-white/30 backdrop-blur-[2px] top-10 pt-6 px-2 sm:hidden">
      <div class="flex flex-col justify-start min-h-full gap-2 px-2 pt-3 pb-1 bg-white border-2 border-gray-400 rounded-t-md sm:hidden">
        <div class="grid grid-cols-3 gap-2">
          <div class="cursor-pointer flex flex-col items-center justify-center col-span-1 py-2.5 bg-white border-gray-200 rounded border-1">
            <i class="fa-solid fa-house-chimney"></i>
            Home
          </div>
          <div class="cursor-pointer flex flex-col items-center justify-center col-span-1 py-2.5 bg-white border-gray-200 rounded border-1">
            <i class="fa-solid fa-info"></i>
            Tentang
          </div>
          <div class="cursor-pointer flex flex-col items-center justify-center col-span-1 py-2.5 bg-white border-gray-200 rounded border-1">
            <i class="fa-solid fa-phone"></i>
            Kontak
          </div>
          <div class="cursor-pointer flex flex-col items-center justify-center col-span-1 py-2.5 bg-white border-gray-200 rounded border-1">
            <i class="fa-solid fa-bag-shopping"></i>
            Pameran
          </div>
          <div class="cursor-pointer flex flex-col items-center justify-center col-span-1 py-2.5 bg-white border-gray-200 rounded border-1">
            <i class="fa-solid fa-question"></i>
            FAQ
          </div>
          <div class="cursor-pointer flex flex-col items-center justify-center col-span-1 py-2.5 text-white border-2 border-gray-300 rounded bg-secondary hover:bg-darkersecondary">
            <i class="fa-solid fa-door-open"></i>
            <p class="text-sm">Daftar / Masuk</p>
          </div>
        </div>
        <hr>
        <span class="font-medium">Aktivitas Saya</span>
        <ul class="flex flex-col gap-2 px-2 list-none">
          <li class="flex flex-row items-center gap-2 cursor-pointer text-light">
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-[1.15rem] h-[1.15rem] text-gray-500 fill-current">
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.2-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.2 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z"/>
              </svg>
            </div>
            <span class="font-light">History Transaksi</span>
          </li>
          <li class="flex flex-row items-center gap-2 cursor-pointer text-light">
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[1.15rem] h-[1.15rem] text-gray-500 fill-current">
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
              </svg>
            </div>
            <span class="font-light">Keranjang Belanja</span>
          </li>
          <li class="flex flex-row items-center gap-2 cursor-pointer text-light">
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-[1.15rem] h-[1.15rem] text-gray-500 fill-current">
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"/>
              </svg>
            </div>
            <span class="font-light">Toko Saya</span>
          </li>
          <li class="flex flex-row items-center gap-2 cursor-pointer text-light">
            <div class="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[1.15rem] h-[1.15rem] text-gray-500 fill-current">
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
              </svg>
            </div>
            <span class="font-light">Profil Saya</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      isMenu: false,
      searchInShop: this.shopSearch ? true : false // eslint-disable-line
    }
  },
  props: {
    shopSearch: {
      type: Boolean,
      default: () => { return false }
    },
    search: {
      type: String,
      default: () => { return null }
    },
    showCart: {
      type: Boolean,
      default: () => { return false }
    }
  },
  methods: {
    windowScrolled () {
      if (window.scrollY > 45) {
        // this.$refs['exhibition-bar'].classList.add('z-50')
        // this.$refs['exhibition-bar'].classList.add('bg-white')
        this.$refs['exhibition-bar'].classList.add('animate-headerDown')
        this.$refs['exhibition-bar'].classList.add('shadow-xl')
      } else {
        // this.$refs['exhibition-bar'].classList.remove('z-50')
        // this.$refs['exhibition-bar'].classList.remove('bg-white')
        this.$refs['exhibition-bar'].classList.remove('animate-headerDown')
        this.$refs['exhibition-bar'].classList.remove('shadow-xl')
      }
    },
    menuClicked () {
      this.isMenu = !this.isMenu

      this.$refs['menu-btn'].classList.add('rotate-[360deg]')
      this.$refs['menu-close'].classList.add('-rotate-[360deg]')
      if (this.isMenu) {
        this.$refs['menu-btn'].classList.add('opacity-0')
        this.$refs['menu-btn'].classList.remove('opacity-100')
        this.$refs['menu-btn'].classList.remove('rotate-[360deg]')

        this.$refs['menu-close'].classList.add('opacity-100')
        this.$refs['menu-close'].classList.remove('opacity-0')
        this.$refs['menu-close'].classList.remove('-rotate-[360deg]')

        this.$refs['menu-item'].classList.add('-translate-y-0')
        this.$refs['menu-item'].classList.remove('translate-y-full')
      } else {
        this.$refs['menu-btn'].classList.add('opacity-100')
        this.$refs['menu-btn'].classList.remove('opacity-0')
        this.$refs['menu-close'].classList.remove('opacity-100')
        this.$refs['menu-close'].classList.add('opacity-0')

        this.$refs['menu-item'].classList.remove('-translate-y-0')
        this.$refs['menu-item'].classList.add('translate-y-full')
      }
    },
    setSearch () {
      this.$emit('set', this.searchInShop)
    },
    toggleCart () {
      this.$emit('update:showCart', !this.showCart)
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
    console.log(this.shopsearch)
  },
  destroyed () {
    window.removeEventListener('scroll', this.windowScrolled)
  }
}
</script>
