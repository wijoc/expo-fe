<template>
  <main class="bg-white/[0.97] min-h-screen">
    <SearchBar
      :shopSearch="false"
      :search.sync="searchTerm" />
    <div class="container h-full pt-12 pb-20 flex flex-col gap-y-2 divide-y-1 divide-gray-400 md:gap-4 md:divide-y-0">
      <div class="grid grid-flow-row grid-cols-12 content-start md:gap-4">
        <div class="col-span-12 h-fit bg-white sm:col-span-5 md:row-span-2 md:sticky md:top-0">
          <template v-if="this.isLoading.product">
            <ul ref="carousel-preview" class="flex flex-row flex-nowrap gap-3 max-h-56 overflow-x-scroll overflow-y-hidden snap-mandatory snap-x sm:overflow-x-hidden">
              <li class="w-full h-56 rounded bg-gray-300/80 skeleton"></li>
            </ul>
            <div class="carousel hidden my-2 sm:relative sm:flex">
              <ul ref="carousel-item" class="carousel-item flex flex-row flex-nowrap gap-1 w-full overflow-x-auto overflow-y-hidden snap-mandatory snap-x">
                <li class="w-[3.5rem] h-14 rounded bg-gray-300/80 skeleton lg:h-20" v-for="i in 5" :key="i"></li>
              </ul>
            </div>
          </template>
          <template v-else>
            <ul ref="carousel-preview" class="flex flex-row flex-nowrap gap-3 max-h-56 overflow-x-scroll overflow-y-hidden snap-mandatory snap-x sm:overflow-x-hidden">
              <li id="a" class="relative flex justify-center items-center snap-center min-w-full max-w-full max-h-56">
                <img src="@/assets/img/product/product_1.jpg" alt="Product Image" class="max-h-56 max-w-full">
                <span class="absolute bg-black/30 rounded text-center text-sm text-white font-medium left-1 bottom-1 px-2 py-1">1/8</span>
              </li>
              <li id="b" class="relative flex justify-center items-center snap-center min-w-full max-w-full max-h-56">
                <img src="@/assets/img/toko/toko_1.jpg" alt="Product Image" class="max-h-56 max-w-full">
                <span class="absolute bg-black/30 rounded text-center text-sm text-white font-medium left-1 bottom-1 px-2 py-1">2/8</span>
              </li>
              <li id="c" class="relative flex justify-center items-center snap-center min-w-full max-w-full max-h-56">
                <img src="@/assets/img/toko/toko_2.jpg" alt="Product Image" class="max-h-56 max-w-full">
                <span class="absolute bg-black/30 rounded text-center text-sm text-white font-medium left-1 bottom-1 px-2 py-1">2/8</span>
              </li>
            </ul>
            <div class="carousel hidden my-2 sm:relative sm:flex">
              <ul ref="carousel-item" class="carousel-item flex flex-row flex-nowrap gap-1 w-full overflow-x-auto overflow-y-hidden snap-mandatory snap-x">
                <li class="flex justify-center items-center h-14 min-w-[3.5rem] max-w-[3.5rem] rounded snap-end border-1 hover:border-primary lg:min-w-[5rem] lg:max-w-[5rem] lg:h-20" @mouseover="hoverItem('#a')">
                  <img src="@/assets/img/product/product_1.jpg" alt="" class="w-auto max-h-14 lg:max-h-20">
                </li>
                <li class="flex justify-center items-center h-14 min-w-[3.5rem] max-w-[3.5rem] rounded snap-end border-1 hover:border-primary lg:min-w-[5rem] lg:max-w-[5rem] lg:h-20" @mouseover="hoverItem('#b')">
                  <img src="@/assets/img/toko/toko_1.jpg" alt="" class="w-auto max-h-14 lg:max-h-20">
                </li>
                <li class="flex justify-center items-center h-14 min-w-[3.5rem] max-w-[3.5rem] rounded snap-end border-1 hover:border-primary lg:min-w-[5rem] lg:max-w-[5rem] lg:h-20" @mouseover="hoverItem('#c')">
                  <img src="@/assets/img/toko/toko_2.jpg" alt="" class="w-auto max-h-14 lg:max-h-20">
                </li>
              </ul>
              <span class="absolute px-0.5 py-2 rounded bg-black/50 self-center left-0 cursor-pointer" ref="btn-prev" @click="scrollToPrev()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 -rotate-90 text-white fill-current">
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
                </svg>
              </span>
              <span class="absolute px-0.5 py-2 rounded bg-black/50 self-center right-1 cursor-pointer" ref="btn-next" @click="scrollToNext()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 rotate-90 text-white fill-current">
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
                </svg>
              </span>
            </div>
          </template>
        </div>
        <div ref="product-desc" class="col-span-12 flex flex-col gap-2 px-2 py-3 sm:col-span-7 md:col-span-7 md:row-span-1">
          <template v-if="this.isLoading.product">
            <span class="w-11/12 h-6 rounded bg-gray-300/80 skeleton"></span>
            <span class="w-6/12 h-6 rounded bg-gray-300/80 skeleton"></span>
            <table class="table-auto table-bordered-b w-full text-sm font-light">
              <tr class="p-5">
                <td class="w-[35%] py-1.5 font-medium">Kondisi</td>
                <td class="w-fit px-1">:</td>
                <td class="">
                  <p class="w-48 h-5 rounded bg-gray-300/80 skeleton"></p>
                </td>
              </tr>
              <tr>
                <td class="w-[35%] py-1.5 font-medium">Berat Satuan</td>
                <td class="w-fit px-1">:</td>
                <td class="">
                  <p class="w-48 h-5 rounded bg-gray-300/80 skeleton"></p>
                </td>
              </tr>
              <tr>
                <td class="w-[35%] py-1.5 font-medium">Min. Pembelian</td>
                <td class="w-fit px-1">:</td>
                <td class="">
                  <p class="w-48 h-5 rounded bg-gray-300/80 skeleton"></p>
                </td>
              </tr>
            </table>
            <span class="text-sm font-medium">Deskripsi : </span>
            <p class="w-full h-5 rounded bg-gray-300/80 skeleton"></p>
            <p class="w-full h-5 rounded bg-gray-300/80 skeleton"></p>
          </template>
          <template v-else>
            <h4 class="title-product">Lorem ipsum dolor sit amet consectetur adipisicing</h4>
            <p class="font-bold">Rp99.999</p>
            <table class="table-auto table-bordered-b w-full text-sm font-light">
              <tr class="p-5">
                <td class="w-[35%] py-1.5 font-medium">Kondisi</td>
                <td class="w-fit px-1">:</td>
                <td class="w-full">Baru</td>
              </tr>
              <tr>
                <td class="w-[35%] py-1.5 font-medium">Berat Satuan</td>
                <td class="w-fit px-1">:</td>
                <td class="w-full">1 Kg</td>
              </tr>
              <tr>
                <td class="w-[35%] py-1.5 font-medium">Min. Pembelian</td>
                <td class="w-fit px-1">:</td>
                <td class="w-full">1</td>
              </tr>
            </table>
            <span class="text-sm font-medium">Deskripsi : </span>
            <p class="text-sm font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis repellendus, alias
              dolorum magni nulla maiores dolorem architecto sapiente labore voluptate, commodi et repudiandae,
              laborum minus sit impedit debitis! Adipisci.
            </p>
          </template>
        </div>
        <div class="col-span-12 fixed w-full pt-1.5 pb-2 px-1.5 left-0 bottom-0 bg-white z-50 md:relative md:col-span-7 md:row-span-1 md:rounded md:h-fit md:z-0">
          <template v-if="this.isLoading.product">
            <span class="w-full h-6 rounded bg-gray-300/80 skeleton"></span>
            <div class="flex flex-nowrap gap-1">
              <button class="btn btn-base btn-disabled w-[10%] h-6 rounded skeleton"></button>
              <button class="btn btn-base btn-disabled w-[90%] h-6 rounded skeleton"></button>
              <button class="btn btn-base btn-disabled w-[90%] h-6 rounded skeleton"></button>
            </div>
          </template>
          <template v-else>
            <div class="hidden md:flex md:flex-col md:w-full">
              <p class="font-medium">Atur jumlah dan catatan</p>
            </div>
            <div class="flex flex-nowrap gap-1">
              <button class="btn btn-base btn-outline-gray w-fit h-fit rounded text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 fill-current">
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </button>
              <button class="btn btn-base btn-outline-secondary w-[90%] h-fit rounded">
                Pre-Order
              </button>
              <button class="btn btn-base btn-secondary w-[90%] h-fit rounded">
                Keranjang
              </button>
            </div>
          </template>
        </div>
      </div>
      <div class="w-full p-2 flex justify-start items-start gap-2 sm:rounded sm:shadow-lg">
        <template v-if="this.isLoading.shop">
          <div class="w-24 h-24 rounded bg-gray-300/80 skeleton"></div>
          <div class="flex flex-col gap-1 items-start mx-2">
            <span class="w-40 h-5 rounded bg-gray-300/80 skeleton"></span>
            <span class="w-24 h-4 rounded bg-gray-300/80 skeleton"></span>
          </div>
        </template>
        <template v-else>
          <img src="@/assets/img/toko/toko_2.jpg" alt="brand logo image" class="max-w-2xl max-h-24 border-1 border-gray-100 rounded">
          <div class="flex flex-col gap-1 items-start mx-2 mt-1">
            <h2 class="text-sm font-bold">{{ this.shopDetail.store_name }}</h2>
            <h5 class="text-xs font-light">{{ this.shopDetail.city + ', ' + this.shopDetail.province }}</h5>
            <div class="flex gap-1 mt-1">
              <button class="btn btn-base btn-outline-green rounded max-w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 fill-current">
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                Whatsapp
              </button>
              <button class="btn btn-base btn-outline-gray rounded max-w-fit" @click="showShop">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 fill-current">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"/>
                </svg>
                Lihat Toko
              </button>
            </div>
          </div>
        </template>
      </div>
      <div class="pt-3">
        <div class="flex flex-nowrap justify-between">
          <h4 class="text-md font-medium tracking-wide">Lainnya dari toko ini</h4>
          <h4 class="text-sm font-light tracking-wide text-secondary underline underline-offset-[3px] cursor-pointer" v-if="!this.isLoading.shop" @click="showShop()">
            Lihat semua
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="inline w-3 h-3 fill-current">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
            </svg>
          </h4>
        </div>
        <div class="relative flex flex-row gap-2 overflow-x-scroll pt-2 md:grid md:grid-flow-row md:grid-cols-5 md:overflow-x-hidden lg:grid-cols-5 xl:grid-cols-6">
          <template v-if="this.isLoading.shop && this.isLoading.shopProduct">
            <div class="min-w-[8rem] w-auto h-40 card shadow-lg rounded bg-gray-300/80 skeleton md:col-span-1 md:min-w-0" v-for="i in 5" :key="i">
            </div>
          </template>
          <template v-else>
            <div :class="'flex flex-col card shadow-lg justify-center min-w-[8rem] w-fit max-h-48 border border-gray-100 cursor-pointer hover:border-primary hover:-mt-1 transition duration-75 md:col-span-1 md:min-w-0'" v-for="(prd, i) in this.shopProduct" :key="i">
              <img src="@/assets/img/product/product_1.jpg" alt="" class="max-w-full max-h-36">
              <div class="flex flex-col gap-[0.125rem] py-2 px-1">
                <p class="title-product">
                  {{ prd.name }}
                </p>
                <h5 class="font-bold text-normal text-left">
                  <!-- {{ prd.salePrice }} -->
                </h5>
                <span class="flex flex-nowrap items-center gap-1">
                  <span class="bg-green-300 rounded font-medium text-xs text-primary p-0.5">
                    {{ prd.disc_percent }}
                  </span>
                  <p class="font-normal text-xs text-left line-through text-gray-400">
                    {{ prd.price }}
                  </p>
                </span>
              </div>
            </div>
            <div class="card shadow-lg flex flex-col justify-center items-center gap-3 min-w-[8rem] w-fit max-h-48 border border-gray-100 md:hidden" @click="showShop()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-8 -rotate-90 fill-current">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/>
              </svg>
              <span class="text-sm font-light">Lihat lainnya</span>
            </div>
          </template>
        </div>
      </div>
      <div class="pt-3">
        <div class="flex flex-nowrap justify-between">
          <h4 class="text-md font-medium tracking-wide">Produk serupa</h4>
        </div>
        <div class="relative grid grid-flow-row grid-cols-2 gap-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6">
          <template v-if="this.isLoading.similar">
            <div class="min-w-[8rem] w-full h-40 card shadow-lg rounded bg-gray-300/80 skeleton sm:col-span-1 sm:min-w-0" v-for="i in 5" :key="i">
            </div>
          </template>
          <template v-else>
            <div class="col-span-1 card shadow flex flex-col justify-center border border-gray-100 cursor-pointer hover:border-primary hover:-mt-1 transition duration-75" v-for="i in 12" :key="i">
              <img src="@/assets/img/product/product_1.jpg" alt="" class="max-w-full max-h-36">
              <div class="flex flex-col gap-[0.125rem] py-2 px-1">
                <p class="title-product">
                  test prd
                </p>
                <h5 class="font-bold text-normal text-left">
                  <!-- {{ prd.salePrice }} -->
                </h5>
                <span class="flex flex-nowrap items-center gap-1">
                  <span class="bg-green-300 rounded font-medium text-xs text-primary p-0.5">
                    100%
                  </span>
                  <p class="font-normal text-xs text-left line-through text-gray-400">
                    RP99.9999,00
                  </p>
                </span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SearchBar from '@/components/exhibition/SearchBar.vue'

import axios from 'axios'
import * as axConfig from '@/config.js'

export default {
  name: 'ProductView',
  data () {
    return {
      productDetail: {},
      productSimilar: [],
      shopDetail: {},
      shopProduct: [],
      searchTerm: '',
      isLoading: {
        product: false,
        shop: false,
        shopProduct: false,
        similar: false
      }
    }
  },
  components: {
    SearchBar
  },
  props: {},
  methods: {
    hoverItem (value) {
      var preview = this.$refs['carousel-preview']
      preview.querySelector(value).scrollIntoView({ block: 'end', inline: 'nearest', behavior: 'smooth' })
    },
    scrollToPrev () {
      var items = this.$refs['carousel-item']
      var itemWidth = items.querySelector('li').clientWidth
      if (items.scrollLeft !== 0) {
        items.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' })
      } else {
        items.scrollTo({ left: items.scrollWidth, top: 0, behavior: 'smooth' })
      }
    },
    scrollToNext () {
      var items = this.$refs['carousel-item']
      var itemWidth = items.querySelector('li').clientWidth

      if (items.scrollLeft < this.$refs.carousel.clientWidth) {
      // if (items.scrollLeft < (items.scrollWidth - itemWidth)) { // If items is full width
        items.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' })
      } else {
        items.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
      }
    },
    async getData () {
      this.isLoading.product = true
      try {
        var response = await axios.get(axConfig.productUrl + this.$route.query.pid)
        this.productDetail = response.data.data
        this.isLoading.product = false

        this.getShop()
        this.getShopProduct()
        this.getSimilarProduct()
      } catch (error) {
        console.log(error)
      }
    },
    async getProduct () {
      axios.get(axConfig.productUrl + this.$route.query.pid)
        .then((response) => {
          return response.data.data
        })
        .catch((error) => {
          return error
        })
    },
    async getShop () {
      this.isLoading.shop = true
      this.shopDetail = await axios.get(axConfig.shopUrl + this.productDetail.store_domain, {
        params: {
          with_product: false
        }
      })
        .then((response) => {
          return response.data.data
        })
        .catch(() => {
          return null
        })
      this.isLoading.shop = false
    },
    async getShopProduct () {
      this.isLoading.shopProduct = true
      this.shopProduct = await axios.get(axConfig.shopUrl + this.productDetail.store_domain + '/products', {
        params: {
          page: 1,
          per_page: 5
        }
      })
        .then((response) => {
          return response.data.data
        })
        .catch(() => {
          return []
        })
      this.isLoading.shopProduct = false
    },
    async getSimilarProduct () {
      this.isLoading.similar = true
      this.productSimilar = await axios.get(axConfig.productUrl + 'similar', {
        params: {
          id: this.productDetail.uuid,
          page: 1,
          per_page: 60
        }
      })
        .then((response) => {
          return response.data.data
        })
        .catch(() => {
          return []
        })
      this.isLoading.similar = false
    },
    showShop () {
      this.$router.push({ name: 'shop', params: { domain: this.productDetail.store_domain } })
    }
  },
  beforeMount () {
    this.getData()
  }
}
</script>
