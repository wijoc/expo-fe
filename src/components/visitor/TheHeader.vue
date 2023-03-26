<template>
  <header id="header" ref="header" class="z-50 fixed w-full py-0.5 transition-all duration-200 sm:max-h-9 sm:top-5 lg:px-[4.5rem] xl:px-[5.5rem]">
    <div class="container">
      <div class="relative flex flex-row items-center justify-between w-full flex-nowrap">
        <router-link class="flex flex-row items-center justify-between flex-nowrap sm:max-w-[25%]" to="/">
          <img src="@/assets/img/Logo.png" alt="UKM Virtual Expo Logo" class="w-7 h-7">
          <span id="brand" class="ml-1 text-lg font-semibold text-black uppercase">UMKM Expo</span>
        </router-link>
        <nav class="hidden sm:relative sm:flex sm:flex-row sm:items-center">
          <router-link class="hidden sm:nav-item" to="/#home">
            Home
          </router-link>
          <router-link class="hidden sm:nav-item" to="/#about">
            Tentang
          </router-link>
          <router-link class="hidden sm:nav-item" to="/#contact">
            Kontak
          </router-link>
          <router-link class="hidden sm:nav-item" to="/exhibition">
            Pameran
          </router-link>
          <router-link class="hidden sm:nav-item" to="/faq">
            FAQ
          </router-link>
          <router-link class="hidden sm:nav-item sm:btn sm:btn-tertiary sm:rounded-md" to="/registration">
            DAFTAR
          </router-link>
        </nav>

        <!-- Mobile menu -->
        <div id="menu-bar" ref="menu-bar" class="absolute right-0 flex items-center sm:hidden" @click="menuClicked()">
          <button type="button" id="menu-btn" ref="menu-btn" class="relative block">
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
          </button>
        </div>
      </div>
    </div>
    <div id="menu-item" ref="menu-item" class="absolute flex flex-col w-full h-screen transition-all duration-200 translate-y-full bg-white/30 backdrop-blur-[2px] top-8 pt-6 px-2 sm:hidden">
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
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  methods: {
    windowScrolled () {
      if (window.scrollY > 10) {
        this.$refs.header.classList.add('header-scrolled')
        this.$refs.header.classList.add('animate-headerDown')
      } else {
        this.$refs.header.classList.remove('header-scrolled')
        this.$refs.header.classList.remove('animate-headerDown')
      }
    },
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
    window.addEventListener('scroll', this.windowScrolled)
    console.log(this.headerType)
  },
  destroyed () {
    window.removeEventListener('scroll', this.windowScrolled)
  }
}
</script>
