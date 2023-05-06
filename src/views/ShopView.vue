<template>
  <section class="min-h-screen bg-white">
    <div class="container">
      <!-- Mobile Filter -->
      <MobileFilter
        :loading="this.isLoadingFilter"
        :showFilter.sync="showMobileFilter"
        :sortProduct.sync="productSort.selected"
        :filterProduct.sync="productFilter"
        :location="false"
        content="content-product" />

      <div class="flex flex-col gap-2 pt-12 pb-5 shadow-sm sm:pt-16 lg:px-20">
        <template v-if="this.isLoading.shop">
          <section class="flex justify-start items-center gap-2 py-2 px-1 w-full rounded bg-white/40 border-b-[1px] border-gray-300/50 sm:px-2 sm:border-[1px] lg:py-4 skeleton">
            <div class="w-24 h-24 rounded-lg bg-gray-300/80 border-1 border-gray-400/70"></div>
            <div class="flex flex-col gap-1 mx-2">
              <div class="w-[8.5rem] h-6 bg-gray-300/80 rounded-lg"></div>
              <div class="w-[10.5rem] h-5 bg-gray-300/80 rounded-lg"></div>
              <div class="flex gap-1 mt-1">
                <button class="h-8 rounded-lg w-28 bg-gray-300/80"></button>
                <button class="h-8 rounded-lg w-9 bg-gray-300/80"></button>
                <button class="h-8 rounded-lg w-9 bg-gray-300/80"></button>
              </div>
            </div>
          </section>
          <nav class="flex flex-row items-center justify-start gap-3 px-1 pb-1 mb-2 bg-white border-b-2 border-gray-300">
            <button class="h-8 bg-gray-300 rounded-lg w-36 skeleton"></button>
          </nav>
        </template>
        <template v-else>
          <section class="flex items-center justify-start w-full gap-2 px-1 py-2 border-b-2 rounded shadow-sm bg-white/40 border-gray-300/50 sm:px-2 sm:border-1 lg:py-4 lg:px-2">
            <img src="@/assets/img/toko/toko_2.jpg" alt="brand logo image" class="max-w-2xl border-gray-100 rounded max-h-24 border-1">
            <div class="flex flex-col mx-2">
              <h2 class="text-lg font-bold">Toko Lorem ipsum</h2>
              <h5 class="text-sm font-light">Lorem, Kota Ipsum, Dolor sit (5xxxx).</h5>
              <div class="flex gap-1 mt-1">
                <button class="rounded btn btn-base btn-outline-green max-w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 fill-current">
                    <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Whatsapp
                </button>
                <button class="items-center rounded btn btn-base btn-outline-gray max-w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                    <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/>
                  </svg>
                </button>
                <button class="items-center rounded btn btn-base btn-outline-gray max-w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 fill-current">
                    <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
                  </svg>
                </button>
              </div>
            </div>
          </section>
          <nav class="mb-2 bg-white tab-nav">
            <button class="tab-nav-item active">
              <i class="fa-solid fa-box"></i>
              Product
            </button>
          </nav>
        </template>

        <section class="relative flex flex-col gap-2 px-2 sm:px-5 md:flex-row md:flex-nowrap md:gap-4">
          <div class="relative flex flex-row w-full h-full gap-2 overflow-x-scroll md:hidden">
            <template v-if="this.isLoading.product">
              <button class="h-8 bg-gray-300 rounded-lg w-28 skeleton"></button>
              <button class="h-8 bg-gray-300 rounded-lg w-28 skeleton"></button>
            </template>
            <template v-else>
              <button class="sticky left-0 rounded-md btn btn-outline-gray" ref="filter-button" id="filter-button" @click="toggleFilter()">
                <i class="fa-solid fa-filter"></i>
                Filter
              </button>
            </template>
          </div>

          <!-- Desktop Filter -->
          <DesktopFilter
            :loading="this.isLoadingFilter"
            :sortProduct.sync="productSort.selected"
            :filterProduct.sync="productFilter"
            content="content-product" />

          <div class="tab-content w-full md:w-[66.6%] lg:w-[70%] xl:w-[79%]">
            <div v-if="this.isLoading.product" class="grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 xl:grid-cols-5">
              <div class="flex flex-col justify-center w-full h-48 border border-gray-200 bg-gray-100/60 skeleton" v-for="i in 5" :key="i">
                <span class="w-full bg-gray-300 h-28">
                </span>
                <div class="flex flex-col gap-[0.125rem] py-2 px-1">
                  <span class="w-full h-5 bg-gray-300 rounded-lg"></span>
                  <span class="w-4/6 h-6 bg-gray-300 rounded-lg"></span>
                  <span class="flex items-center gap-1 flex-nowrap">
                    <span class="w-4/12 h-4 bg-gray-300 rounded-lg"></span>
                    <span class="w-6/12 h-4 bg-gray-300 rounded-lg"></span>
                  </span>
                </div>
              </div>
            </div>
            <div v-else-if="this.isError.status" class="flex flex-row items-center justify-between mb-3">
              <div class="flex items-center justify-start w-full gap-2 p-2 tracking-wider text-justify rounded-lg text-space-black bg-secondary/10 border-1 border-tertiary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 fill-red-500">
                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                </svg>
                {{ this.isError.message }}
              </div>
            </div>
            <template v-else>
              <div class="hidden md:flex md:flex-row md:items-center md:flex-wrap md:gap-2 md:mb-3">
                <p class="text-sm w-fit">
                  Menampilkan {{
                    this.productsInfo.row_start +
                    (this.productsInfo.row_end > this.productsInfo.row_start ? '-' + this.productsInfo.row_end : '') }}
                  product dari total {{ this.productsInfo.count_data }}
                  <span v-if="this.$route.query.s !== null && this.$route.query.s !== '' && typeof(this.$route.query.s) !== 'undefined'">
                    untuk <span class="font-bold">"{{ this.$route.query.s }}"</span>
                  </span>
                </p>
                <div class="flex flex-row items-center self-end gap-1 ml-auto flex-nowrap">
                  <label for="input-sort" class="text-sm">Urutkan :</label>
                  <select name="inputSort" id="input-sort" ref="input-sort" class="rounded-md form-control form-control-base w-fit" v-model="productSort.selected" @change="changeSort()">
                    <option value="relevant">Terkait</option>
                    <option value="name-asc">Nama A -> Z</option>
                    <option value="name-desc">Nama Z -> A</option>
                    <option value="price-asc">Harga Terendah</option>
                    <option value="price-desc">Harga Tertinggi</option>
                  </select>
                </div>
              </div>
              <GridProduct
                :divClass="'grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 xl:grid-cols-5'"
                :rowdata="this.paginateProducts"
                @detail="showProduct" />
            </template>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import * as axConfig from '@/config.js'
// import * as currencyHelper from '@/helper/CurrencyHelper.js'
import { mapState, mapActions } from 'vuex'

import MobileFilter from '@/components/comp/MobileFilter.vue'
import DesktopFilter from '@/components/comp/DesktopFilter.vue'
import GridProduct from '@/components/comp/GridProduct.vue'

export default {
  name: 'ShopView',
  components: {
    MobileFilter,
    DesktopFilter,
    GridProduct
  },
  data () {
    return {
      showMobileFilter: false,
      isLoading: {
        shop: false,
        product: false
      },
      isLoadingFilter: {
        filterProduct: false
      },
      isError: {
        status: false,
        message: ''
      },
      searchLoc: '',
      selectedShop: {},
      products: [],
      productFilter: {
        minPrice: null,
        maxPrice: null,
        condition: null,
        category: []
      },
      productSort: {
        by: '',
        order: '',
        selected: 'relevant'
      },
      productsInfo: {
        filtered: '',
        count_all: 0,
        count_data: 0,
        active_page: 1,
        row_per_page: 50,
        row_start: 0,
        row_end: 0
      },
      requestPage: 'all',
      requestPerPage: 1000,
      notFound: false
    }
  },
  methods: {
    ...mapActions({
      getProductCtgrs: 'categories/getProductCategories'
    }),
    async getData () {
      this.isLoading.shop = true
      try {
        const response = await axios.get(axConfig.shopUrl + this.$route.params.domain, {
          params: {
            with_product: false
          }
        })
        this.selectedShop = response.data.data
        this.isLoading.shop = false

        this.isLoadingFilter.filterProduct = true
        await this.getFilterData()
        await this.getProducts()
      } catch (err) {
        if (err.response && err.response.status === 404) {
          console.log('not-found')
          this.notFound = true
        } else if (err.response) {
          console.log('a')
          // this.$router.push({ name: 'server-error', props: { statusCode: err.response.status, message: err.response.data.message, subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else if (err.code === 'ERR_NETWORK') {
          console.log('b')
          // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Kami sedang offline', subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else {
          console.log(err)
          // this.$router.push({ name: 'server-error', props: { statusCode: err.code, message: 'Halaman Rusak. Coba lagi nanti', subMessage: 'Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        }
      }
    },
    async getFilterData () {
      await this.getProductCtgrs({ search: false })

      if (this.verrProductCtgrs.error) {
        if (this.verrProductCtgrs.code === 'ERR_NETWORK') {
          console.log('a')
          // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Kami sedang offline', subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else {
          console.log('a')
          // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Halaman Rusak. Coba lagi nanti', subMessage: 'Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        }
      } else {
        this.isLoadingFilter.filterProduct = false
      }
    },
    async getProducts () {
      this.isLoading.product = true
      try {
        const response = await axios.get(axConfig.shopUrl + this.$route.params.domain + '/products', {
          params: {
            search: this.$route.query.s,
            min_price: this.productFilter.minPrice,
            max_price: this.productFilter.maxPrice,
            condition: this.productFilter.condition,
            page: this.requestPage,
            sort: this.productSort.by,
            order: this.productSort.order
          }
        })

        this.productsInfo.count_data = response.data.count_data
        this.productsInfo.count_all = response.data.count_all
        this.productsInfo.filtered = response.data.filtered ?? false
        this.products = response.data.data
        // this.setRowStartEnd()

        this.isLoading.product = false
      } catch (err) {
        if (err.response) {
          console.log('a')
          // this.$router.push({ name: 'server-error', props: { statusCode: err.response.status, message: err.response.data.message, subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else if (err.code === 'ERR_NETWORK') {
          console.log('b')
          // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Kami sedang offline', subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else {
          console.log(err)
          // this.$router.push({ name: 'server-error', props: { statusCode: err.code, message: 'Halaman Rusak. Coba lagi nanti', subMessage: 'Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        }
      }
      this.setRowStartEnd()
    },
    setRowStartEnd (dataLen = null) {
      if (this.productsInfo.active_page > 1) {
        var pageBefore = this.productsInfo.active_page - 1
        this.productsInfo.row_start = (pageBefore * this.productsInfo.row_per_page)
      } else {
        this.productsInfo.row_start = 1
      }

      this.productsInfo.count_data = dataLen ?? this.productsInfo.count_data

      const rowEnd = this.productsInfo.row_start + this.productsInfo.row_per_page
      this.productsInfo.row_end = (rowEnd > this.productsInfo.count_data ? this.productsInfo.count_data : rowEnd)
    },
    toggleFilter (toggle = null) {
      this.showMobileFilter = toggle ?? !this.showMobileFilter
    },
    showProduct () {
      console.log('show product')
    }
  },
  computed: {
    ...mapState('categories', ['verrProductCtgrs']),
    paginateProducts: function () {
      let rawdata = null
      const keyword = this.$route.query.s ?? ''

      if (!this.productsInfo.filtered && this.productsInfo.count_all <= this.requestPerPage) {
        if (this.productFilter.condition) {
          var cond = this.productFilter.condition === 'new' ? 'Baru' : 'Bekas'
        }
        const sB = this.productSort.by
        const sO = this.productSort.order
        rawdata = this.products.filter((element) => {
          // Filter by search Keyword
          const containKeyword = element.name.toString().toLowerCase().includes(keyword.toString().toLowerCase())

          // Filter by Condition
          let inCondition = true
          if (this.productFilter.condition) {
            inCondition = element.condition === cond ?? false
          }

          // Filter by Price
          let inPrice = true
          if (this.productFilter.minPrice || this.productFilter.maxPrice) {
            const min = parseFloat(this.productFilter.minPrice ?? 0)
            if (this.productFilter.maxPrice) {
              if (this.productFilter.maxPrice > min) {
                inPrice = parseFloat(element.price_net) >= min && parseFloat(element.price_net) <= parseFloat(this.productFilter.maxPrice)
              } else {
                inPrice = false
              }
            } else {
              inPrice = parseFloat(element.price_net) >= min
            }
          }

          // Filter Category
          let inCategory = true
          if (this.productFilter.category && this.productFilter.category.length > 0) {
            inCategory = this.productFilter.category.includes(element.category_id) ?? false
          }

          return containKeyword && inCondition && inPrice && inCategory
        })

        if (this.productSort.selected !== 'relevant') {
          rawdata.sort(function (a, b) {
            if (a[sB] > b[sB]) {
              return (sO === 'asc' ? 1 : -1)
            } else if (a[sB] < b[sB]) {
              return (sO === 'asc' ? -1 : 1)
            }
            return 0
          })
        }
      } else {
        rawdata = this.products
      }

      this.setRowStartEnd(rawdata.length) // update count_data base on this filtered array length

      if (rawdata.length > 0) {
        const data = []

        rawdata.slice(this.productsInfo.row_start - 1, this.productsInfo.row_end).map((element) => {
          return data.push(element)
        })

        return data
      } else {
        return []
      }
    }
  },
  watch: {
    '$route.query': {
      deep: true,
      immediate: true,
      handler: function (newValue) {
        if (this.productsInfo.filtered || (this.productsInfo.filtered === false && this.productsInfo.count_all >= this.requestPerPage)) {
          this.getProducts()
        }
      }
    },
    'productSort.selected': {
      handler: function (newValue) {
        if (newValue === 'relevant') {
          this.productSort.by = null
          this.productSort.order = null
        } else {
          const s = newValue.split('-')
          this.productSort.by = s[0]
          this.productSort.order = s[1]
        }
      }
    },
    productFilter: {
      deep: true,
      handler: function (newValue) {
        if (newValue.maxPrice && parseFloat(newValue.maxPrice) < parseFloat(newValue.minPrice ?? 0)) {
          this.isError.status = true
          this.isError.message = '"Harga Maksimum" harus sama dengan atau lebih besar dari "Harga Minimum"'
        } else {
          this.isError.status = false
          this.isError.message = ''
        }

        if (this.productsInfo.filtered || (this.productsInfo.filtered === false && this.productsInfo.count_all >= this.requestPerPage)) {
          this.getProducts()
        }
      }
    },
    'productsInfo.active_page': function (newValue, oldValue) {
      this.setRowStartEnd()
    }
  },
  beforeMount () {
    this.getData()
  }
}
</script>
