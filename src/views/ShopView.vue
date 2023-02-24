<template>
  <main class="bg-white/95 min-h-screen">
    <SearchBar
      :shopSearch="true"
      :search.sync="searchTerm" />
    <div class="flex flex-col gap-2 pt-12 pb-5 px-3 shadow-sm sm:pt-16 lg:px-20">
      <section v-if="this.isLoading.store" class="flex justify-start items-center gap-2 py-2 px-1 w-full rounded bg-white/40 border-b-1 border-gray-300/50 sm:px-2 sm:border-1 lg:py-4 lg:px-2 skeleton">
        <div class="w-24 h-24 bg-gray-300/80 border-1 border-gray-400/70 rounded-lg"></div>
        <div class="flex flex-col mx-2 gap-1">
          <div class="w-[8.5rem] h-6 bg-gray-300/80 rounded-lg"></div>
          <div class="w-[10.5rem] h-5 bg-gray-300/80 rounded-lg"></div>
          <div class="flex gap-1 mt-1">
            <button class="w-28 h-8 bg-gray-300/80 rounded-lg"></button>
            <button class="w-9 h-8 bg-gray-300/80 rounded-lg"></button>
            <button class="w-9 h-8 bg-gray-300/80 rounded-lg"></button>
          </div>
        </div>
      </section>
      <section v-else class="flex justify-start items-center gap-2 py-2 px-1 w-full rounded bg-white/40 border-b-2 border-gray-300/50 shadow-sm sm:px-2 sm:border-1 lg:py-4 lg:px-2">
        <img src="@/assets/img/toko/toko_2.jpg" alt="brand logo image" class="max-w-2xl max-h-24 border-1 border-gray-100 rounded">
        <div class="flex flex-col mx-2">
          <h2 class="text-lg font-bold">Toko Lorem ipsum</h2>
          <h5 class="text-sm font-light">Lorem, Kota Ipsum, Dolor sit (5xxxx).</h5>
          <div class="flex gap-1 mt-1">
            <button class="btn btn-base btn-outline-green rounded max-w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 fill-current">
                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Whatsapp
            </button>
            <button class="btn btn-base btn-outline-gray rounded max-w-fit items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/>
              </svg>
            </button>
            <button class="btn btn-base btn-outline-gray rounded max-w-fit items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 fill-current">
                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <nav v-if="this.isLoading.store" class="flex flex-row justify-start items-center gap-3 px-1 pb-1 border-b-2 border-gray-300 bg-white mb-2">
        <button class="w-36 h-8 bg-gray-300 rounded-lg skeleton"></button>
      </nav>
      <nav v-else class="tab-nav bg-white mb-2">
        <button class="tab-nav-item active">
          <i class="fa-solid fa-box"></i>
          Product
        </button>
      </nav>

      <section class="relative flex flex-col gap-2 px-2 sm:px-5 md:flex-row md:flex-nowrap md:gap-4">
        <div class="relative w-full h-full flex flex-row gap-2 overflow-x-scroll sm:hidden">
          <template v-if="this.isLoading.product">
            <button class="w-28 h-8 bg-gray-300 rounded-lg skeleton"></button>
            <button class="w-28 h-8 bg-gray-300 rounded-lg skeleton"></button>
          </template>
          <template v-else>
            <button class="sticky left-0 btn btn-outline-gray rounded-md" ref="filter-button" id="filter-button" @click="toggleFilter('toggle')">
              <i class="fa-solid fa-filter"></i>
              Filter
            </button>
            <button class="btn btn-outline-gray rounded-md">
              <i class="fa-solid fa-arrow-up-short-wide"></i>
              Sort
            </button>
          </template>
        </div>

        <!-- Mobile Filter (res <= 640px) -->
        <div ref="div-filter" class="fixed inset-x-0 top-0 z-10 backdrop-blur-[2px] w-full h-full transform translate-y-full transition-all ease-in-out duration-[250ms] sm:hidden">
          <div id="mobile-filter" ref="mobile-filter" class="w-full h-full mt-24 border-t-2 bg-white border-gray-600 rounded-t-2xl drop-shadow-2xl px-5 py-3">
            <span class="flex flex-nowrap justify-between mb-1">
              <h3 class="font-bold text-2xl text-center">Filter</h3>
              <i class="fa-solid fa-xmark text-xl text-gray-400" id="filter-close-button" @click="toggleFilter(false)"></i>
            </span>
            <div class="flex flex-col transition-all duration-200 ease-in-out divide-y-2">
              <div ref="category-filter" class="accordion">
                <input type="checkbox" name="" id="checkbox-kategori" class="accordion-checkbox" checked>
                <label for="checkbox-kategori" class="accordion-label relative">
                  Kategori
                  <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
                </label>
                <ul class="accordion-content">
                  <li v-for="(fCategory, i) in this.vxProductCategories" :key="i">
                    <div class="flex flex-row items-center gap-3">
                      <input type="checkbox" class="input-checkbox" :id="'filter-kategori-' + fCategory.id" :value="fCategory.id" v-model="dataFilter.category" @change="setFilter(i)">
                      <label :for="'filter-kategori-' + fCategory.id">{{ fCategory.name }}</label>
                    </div>
                    <ul v-if="fCategory.sub_category.length > 0" class="pl-6">
                      <li class="flex flex-row items-center gap-3" v-for="(subCategory, j) in fCategory.sub_category" :key="j">
                        <input type="checkbox" class="input-checkbox" :id="'filter-kategori-' + fCategory.id" :value="subCategory.id" v-model="dataFilter.category">
                        <label :for="'filter-kategori-' + subCategory.id">{{ subCategory.name }}</label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div ref="condition-section" class="accordion">
                <input type="checkbox" name="" id="checkbox-kondisi" class="accordion-checkbox" checked>
                <label for="checkbox-kondisi" class="accordion-label">
                  Kondisi
                  <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
                </label>
                <ul class="accordion-content">
                  <li class="flex flex-row items-center gap-3">
                    <input type="radio" class="input-radio" name="" id="mobile-filter-condition-new" value="new" v-model="dataFilter.condition">
                    <label for="mobile-filter-condition-new">Baru</label>
                  </li>
                  <li class="flex flex-row items-center gap-3">
                    <input type="radio" class="input-radio" name="" id="mobile-filter-condition-secondhand" value="secondhand" v-model="dataFilter.condition">
                    <label for="mobile-filter-condition-secondhand">Bekas</label>
                  </li>
                </ul>
              </div>
              <div id="harga-section" class="accordion">
                <input type="checkbox" name="" id="checkbox-harga" class="accordion-checkbox" checked>
                <label for="checkbox-harga" class="accordion-label">
                  Harga
                  <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
                </label>
                <div class="accordion-content">
                  <div class="input-group my-1 mb-2">
                    <span class="input-group-text">Rp</span>
                    <input type="text" name="" id="input-harga-min" class="form-control form-control-base" placeholder="Harga Terendah" v-model="dataFilter.minPrice">
                  </div>
                  <div class="input-group mb-2">
                    <span class="input-group-text">Rp</span>
                    <input type="text" name="" id="input-harga-max" class="form-control form-control-base" placeholder="Harga Tertinggi" v-model="dataFilter.maxPrice">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Filter (res > 640px) -->
        <div id="filter" class="hidden h-full md:flex md:flex-col md:gap-2 md:w-[28%] lg:w-[30%] xl:w-[21%]">
          <div class="card w-full max-h-screen shadow-md border border-gray-200 flex flex-col py-2 px-3 transition-all duration-200 ease-in-out divide-y-2">
            <h3 class="font-medium text-lg mb-2">Filter</h3>
            <div id="category-section" class="accordion">
              <input type="checkbox" name="" id="checkbox-filter-category" class="accordion-checkbox" checked>
              <label for="checkbox-filter-category" class="accordion-label relative">
                Kategori
                <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
              </label>
              <ul class="accordion-content">
                <li v-for="(fCategory, i) in this.vxProductCategories" :key="i">
                  <div class="flex flex-row items-center gap-2">
                    <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-kategori-' + fCategory.id" :value="fCategory.id" v-model="dataFilter.category" @change="setFilter(i)">
                    <label :for="'filter-kategori-' + fCategory.id">{{ fCategory.name }}</label>
                  </div>
                  <ul v-if="fCategory.sub_category.length > 0" class="pl-4 mt-1">
                    <li class="flex flex-row items-center gap-2 mb-0.5" v-for="(subCategory, j) in fCategory.sub_category" :key="j">
                      <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-kategori-' + subCategory.id" :value="subCategory.id" v-model="dataFilter.category">
                      <label :for="'filter-kategori-' + subCategory.id">{{ subCategory.name }}</label>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div id="condition-section" class="accordion">
              <input type="checkbox" name="" id="checkbox-filter-condition" class="accordion-checkbox" checked>
              <label for="checkbox-filter-condition" class="accordion-label">
                Kondisi
                <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
              </label>
              <ul class="accordion-content">
                <li class="flex flex-row items-center gap-3">
                  <input type="radio" class="input-radio-sm lg:input-radio-base xl:input-radio"  name="" id="filter-condition-new" value="new" v-model="dataFilter.condition">
                  <label for="filter-condition-new">Baru</label>
                </li>
                <li class="flex flex-row items-center gap-3">
                  <input type="radio" class="input-radio-sm lg:input-radio-base xl:input-radio"  name="" id="filter-condition-secondhand" value="secondhand" v-model="dataFilter.condition">
                  <label for="filter-condition-secondhand">Bekas</label>
                </li>
              </ul>
            </div>
            <div id="price-section" class="accordion">
              <input type="checkbox" name="" id="checkbox-filter-price" class="accordion-checkbox" checked>
              <label for="checkbox-filter-price" class="accordion-label">
                Harga
                <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
              </label>
              <div class="accordion-content">
                <div class="input-group my-1 mb-2">
                  <span class="input-group-text">Rp</span>
                  <input type="text" name="" id="input-harga-min" class="form-control form-control-base" placeholder="Harga Terendah" v-model="dataFilter.minPrice">
                </div>
                <div class="input-group mb-2">
                  <span class="input-group-text">Rp</span>
                  <input type="text" name="" id="input-harga-max" class="form-control form-control-base" placeholder="Harga Tertinggi" v-model="dataFilter.maxPrice">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-content w-full md:w-[72%] lg:w-[70%] xl:w-[79%]">
          <div v-if="this.isLoading.product" class="grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 xl:grid-cols-5">
            <div class="bg-gray-100/60 w-full h-48 border border-gray-200 flex flex-col justify-center skeleton" v-for="i in 5" :key="i">
              <span class="bg-gray-300 w-full h-28">
              </span>
              <div class="flex flex-col gap-[0.125rem] py-2 px-1">
                <span class="bg-gray-300 w-full h-5 rounded-lg"></span>
                <span class="bg-gray-300 w-4/6 h-6 rounded-lg"></span>
                <span class="flex flex-nowrap items-center gap-1">
                  <span class="bg-gray-300 w-4/12 h-4 rounded-lg"></span>
                  <span class="bg-gray-300 w-6/12 h-4 rounded-lg"></span>
                </span>
              </div>
            </div>
          </div>
          <template v-else>
            <div class="flex flex-col justify-items-center items-center gap-3 w-full h-full bg-white/60" v-if="this.info.count_all === 0 && this.products === null || this.products.length <= 0" >
              <img src="@/assets/img/data_not_found.jpg" alt="no data found" class="w-56 max-h-56 rounded-lg">
              <h3 class="font-md font-extrabold text-primary uppercase">Belum ada produk di toko ini</h3>
            </div>
            <template v-else>
              <div class="flex flex-row justify-between items-center gap-2 mb-3">
                <p class="w-fit text-sm">
                  Menampilkan {{ this.info.row_start + (this.info.row_end > this.info.row_start ? '-' + this.info.row_end : '') }} product dari total {{ this.info.count_all }}
                  <span v-if="this.searchTerm !== null && this.searchTerm !== ''">
                    untuk <span class="font-bold">"{{ this.searchTerm }}"</span>
                  </span>
                </p>
                <div class="flex flex-row flex-nowrap items-center gap-1">
                  <label for="input-sort">Urutkan :</label>
                  <select name="inputSort" id="input-sort" ref="input-sort" class="form-control w-fit" v-model="sortSelected" @change="changeSort()">
                    <option value="relevant">Terkait</option>
                    <option value="name-asc">Nama A -> Z</option>
                    <option value="name-desc">Nama Z -> A</option>
                  </select>
                </div>
              </div>
              <GridProduct
                :divClass="'grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 xl:grid-cols-5'"
                :rowdata="this.products"
                @detail="showProduct" />
            </template>
          </template>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import SearchBar from '@/components/exhibition/SearchBar.vue'
import GridProduct from '@/components/comp/GridProduct.vue'

import axios from 'axios'
import * as axConfig from '@/config.js'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShopView',
  components: {
    SearchBar,
    GridProduct
  },
  data () {
    return {
      showContent: 'product',
      isLoading: {
        store: false,
        product: false,
        category: false
      },
      searchTerm: '',
      products: [],
      isMobileFilter: false,
      dataFilter: {
        minPrice: null,
        maxPrice: null,
        condition: null,
        category: []
      },
      dataSort: {
        by: 'relevant',
        order: 'asc'
      },
      sortSelected: 'relevant',
      info: {
        count_all: 0,
        count_data: 0,
        active_page: 1,
        row_per_page: 0,
        row_start: 0,
        row_end: 0
      },
      requestPage: 'all',
      requestPerPage: 30
    }
  },
  methods: {
    ...mapActions({
      getShop: 'shops/selectShop',
      getPrdCategory: 'categories/getProductCategories'
    }),
    async getProducts () {
      this.products = await axios.get(axConfig.shopUrl + this.$route.params.domain + '/products', {
        params: {
          search: this.searchTerm,
          min_price: this.dataFilter.minPrice,
          max_price: this.dataFilter.maxPrice,
          condition: this.dataFilter.condition,
          page: this.requestPage,
          sort: this.dataSort.by,
          order: this.dataSort.order
        }
      })
        .then((response) => {
          this.info.count_data = response.data.count_data
          this.info.count_all = response.data.count_all
          return response.data.data
        })
        .catch(() => {
          return []
        })
      this.setRowStartEnd()
    },
    async getData () {
      await this.getPrdCategory({ search: false, parent_id: false })
      this.isLoading.category = false
      await this.getShop({ domain: this.$route.params.domain, with_product: false })
      this.isLoading.store = false
      await this.getProducts()
      this.isLoading.product = false
    },
    toggleFilter (toggle) {
      if (toggle === 'toggle') {
        if (!this.isMobileFilter === false) {
          this.$refs['div-filter'].classList.add('translate-y-full')
          this.$refs['div-filter'].classList.remove('translate-y-0')
        } else {
          this.$refs['div-filter'].classList.add('translate-y-0')
          this.$refs['div-filter'].classList.remove('translate-y-full')
        }

        this.isMobileFilter = !this.isMobileFilter
      } else {
        if (toggle === false) {
          this.$refs['div-filter'].classList.add('translate-y-full')
          this.$refs['div-filter'].classList.remove('translate-y-0')
        } else {
          this.$refs['div-filter'].classList.add('translate-y-0')
          this.$refs['div-filter'].classList.remove('translate-y-full')
        }

        this.isMobileFilter = toggle
      }
    },
    closeFilter (el) {
      if (!(el.target.id === 'mobile-filter') && !(el.target.id === 'filter-close-button')) {
        var filterDOM = document.getElementById('mobile-filter')
        if (!filterDOM.contains(el.target.parentNode)) {
          if (el.target.id !== 'filter-button') {
            this.toggleFilter(false)
          }
        }
      }
    },
    setFilter (index) {
      const selected = this.vxProductCategories[index]

      if (this.dataFilter.category.indexOf(selected.id) !== -1) {
        if (selected.sub_category.length > 0) {
          selected.sub_category.forEach((sub) => {
            if (this.dataFilter.category.indexOf(sub.id) < 0) {
              this.dataFilter.category.push(sub.id)
            }
          })
        }
      } else {
        if (selected.sub_category.length > 0) {
          selected.sub_category.forEach((sub) => {
            if (this.dataFilter.category.indexOf(sub.id) !== -1) {
              this.dataFilter.category.splice(this.dataFilter.category.indexOf(sub.id), 1)
            }
          })
        }
      }
    },
    changeSort () {
      if (this.$refs['input-sort'].value === 'relevant') {
        this.dataSort.by = null
        this.dataSort.order = null
      } else {
        const s = this.$refs['input-sort'].value.split('-')
        this.dataSort.by = s[0]
        this.dataSort.order = s[1]
      }
    },
    showProduct (id) {
      console.log(id)
    },
    setRowStartEnd () {
      if (this.info.active_page > 1) {
        var pageBefore = this.info.active_page - 1
        this.info.row_start = (pageBefore * this.info.row_per_page)
      } else {
        this.info.row_start = 1
      }

      var rowEnd = this.info.row_start + this.info.row_per_page
      this.info.row_end = (rowEnd > this.info.count_all ? this.info.count_all : rowEnd)
    }
  },
  computed: {
    ...mapState('categories', ['vxProductCategories'])
  },
  watch: {
    searchTerm: {
      handler: async function (newValue) {
        this.isLoading.product = true
        await this.getProducts()
        this.isLoading.product = false
      }
    },
    'dataSort.by': {
      handler: async function (newValue) {
        this.isLoading.product = true
        await this.getProducts()
        this.isLoading.product = false
      }
    },
    'dataSort.order': {
      handler: async function (newValue) {
        this.isLoading.product = true
        await this.getProducts()
        this.isLoading.product = false
      }
    },
    'dataFilter.category': {
      handler: async function (newValue) {
        this.isLoading.product = true
        await this.getProducts()
        this.isLoading.product = false
      }
    },
    'dataFilter.condition': {
      handler: async function (newValue) {
        this.isLoading.product = true
        await this.getProducts()
        this.isLoading.product = false
      }
    },
    'dataFilter.minPrice': {
      handler: async function (newValue) {
        this.isLoading.product = true
        await this.getProducts()
        this.isLoading.product = false
      }
    },
    'dataFilter.maxPrice': {
      handler: async function (newValue) {
        this.isLoading.product = true
        await this.getProducts()
        this.isLoading.product = false
      }
    }
  },
  mounted () {
    this.isLoading.store = true
    this.isLoading.product = true
    this.isLoading.category = true
    this.getData()

    document.addEventListener('click', this.closeFilter)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeFilter)
  }
}
</script>
