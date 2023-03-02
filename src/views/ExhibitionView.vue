<template>
  <main class="bg-white/95 min-h-screen">
    <SearchBar
      :shopSearch="false"
      :search.sync="searchTerm" />
    <section class="container min-h-screen">
      <div id="content" class="flex flex-row flex-nowrap gap-5 pt-10 sm:pt-16">
        <div id="filter" class="hidden h-full md:flex md:flex-col md:gap-2 md:w-3/12">
          <h3 class="font-medium text-lg">Filter</h3>
          <div class="card w-full max-h-screen shadow-md border border-gray-200 flex flex-col py-2 px-2 transition-all duration-200 ease-in-out divide-y-2">
            <div v-show="this.showContent === 'content-toko'">
              <div id="skeleton-shop-category-filter" class="max-h-screen" v-if="this.isLoading.filterShopCategory">
                <div class="w-24 h-6 bg-gray-300/80 rounded skeleton"></div>
                <ul class="mt-2 flex flex-col gap-1">
                  <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
                    <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" disabled>
                    <div class="w-32 h-5 bg-gray-300/80 rounded skeleton"></div>
                  </li>
                </ul>
              </div>
              <div id="shop-category-filter" class="accordion" v-else>
                <input type="checkbox" name="" id="checkbox-kategori" class="accordion-checkbox" checked>
                <label for="checkbox-kategori" class="accordion-label relative">
                  Kategori
                  <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
                </label>
                <ul class="accordion-content">
                  <li class="flex flex-row items-center gap-2" v-for="(fCategory, i) in this.vxShopCategories" :key="i">
                    <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-shop-category-' + fCategory.id" :value="fCategory.id" v-model="shopFilter.category">
                    <label :for="'filter-shop-category-' + fCategory.id">{{ fCategory.name }}</label>
                  </li>
                </ul>
              </div>
              <div id="skeleton-shop-location-filter" class="max-h-screen" v-if="this.isLoading.filterLocation">
                <div class="w-24 h-6 bg-gray-300/80 rounded skeleton"></div>
                <ul class="mt-2 flex flex-col gap-1">
                  <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
                    <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" disabled>
                    <div class="w-32 h-5 bg-gray-300/80 rounded skeleton"></div>
                  </li>
                </ul>
              </div>
              <div id="shop-location-filter" class="relative accordion" v-else>
                <input type="checkbox" name="" id="checkbox-shop-location" class="accordion-checkbox" checked>
                <label for="checkbox-shop-location" class="accordion-label relative">
                  Lokasi
                  <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
                </label>
                <ul class="accordion-content">
                  <li class="flex flex-row items-center gap-2" v-for="(fLoc, i) in this.fiveCities" :key="i">
                    <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-shop-location-' + fLoc.id" :value="fLoc.id" v-model="shopFilter.city">
                    <label :for="'filter-shop-location-' + fLoc.id">{{ fLoc.city }}</label>
                  </li>
                  <li ref="filter-shop-location-button" class="mt-1 text-xs text-primary font-normal cursor-pointer md:text-sm" @click="toggleFilterLocation('shop', 'toggle')">
                    Lihat Selengkapnya >>
                  </li>
                </ul>
                <div v-show="this.isShopLocation" ref="shop-location-filter" class="hidden md:fixed md:top-[40%] md:left-5 md:w-6/12 md:h-[40%] md:flex md:flex-col md:gap-2 md:p-2 md:bg-white md:border-2 md:border-gray-300 md:rounded md:z-20 lg:left-[4.5rem] lg:w-5/12 lg:h-3/6 xl:left-24">
                  <div class="flex flex-nowrap justify-between items-center pb-2 border-b-1 border-gray-300">
                    <h5 class="w-2/12 font-medium tracking-wide uppercase">Lokasi</h5>
                    <div class="w-9/12 flex flex-nowrap justify-center items-center gap-0 rounded p-0.5 overflow-hidden relative">
                      <input type="text" class="w-full p-0.5 text-sm bg-white border-1 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 rounded" placeholder="Cari Lokasi ..." v-model="searchCity">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="max-w-4 max-h-[0.85rem] text-gray-400 fill-current absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer">
                        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
                      </svg>
                    </div>
                    <span class="w-1/12 flex items-center justify-end">
                      <svg ref="close-shop-location-filter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 text-gray-400 fill-current cursor-pointer" @click="toggleFilterLocation('shop', false)">
                        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                      </svg>
                    </span>
                  </div>
                  <div class="flex flex-col gap-2 overflow-y-scroll overflow-x-hidden">
                    <div v-for="(value, key, i) in this.filterCities" :key="i">
                      <h5 class="w-full font-medium uppercase">{{ key }}</h5>
                      <div class="grid grid-cols-2">
                        <div class="col-span-1 flex flex-row items-center gap-2" v-for="(fCity, c) in value" :key="c">
                          <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-shop-city-' + fCity.id" :value="fCity.id" v-model="shopFilter.city">
                          <label :for="'filter-shop-city-' + fCity.id">{{ fCity.city }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div v-show="this.showContent === 'content-product'">
              <div id="kategori-section" class="accordion">
                <input type="checkbox" name="" id="checkbox-kategori" class="accordion-checkbox" checked>
                <label for="checkbox-kategori" class="accordion-label relative">
                  Kategori
                  <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
                </label>
                <ul class="accordion-content">
                  <li v-for="(fCategory, i) in this.vxProductCategories" :key="i">
                    <div class="flex flex-row items-center gap-2">
                      <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-kategori-' + fCategory.id" :value="fCategory.id" v-model="productFilter.category">
                      <label :for="'filter-kategori-' + fCategory.id">{{ fCategory.name }}</label>
                    </div>
                    <ul v-if="fCategory.sub_category.length > 0" class="pl-4 mt-1">
                      <li class="flex flex-row items-center gap-2 mb-0.5" v-for="(subCategory, j) in fCategory.sub_category" :key="j">
                        <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-kategori-' + subCategory.id" :value="subCategory.id" v-model="productFilter.category">
                        <label :for="'filter-kategori-' + subCategory.id">{{ subCategory.name }}</label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div id="kondisi-section" class="accordion">
                <input type="checkbox" name="" id="checkbox-kondisi" class="accordion-checkbox" checked>
                <label for="checkbox-kondisi" class="accordion-label">
                  Kondisi
                  <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
                </label>
                <ul class="accordion-content">
                  <li class="flex flex-row items-center gap-3">
                    <input type="radio" class="input-radio-sm lg:input-radio-base xl:input-radio"  name="" id="filter-condition-new" value="new" v-model="productFilter.condition">
                    <label for="filter-condition-new">Baru</label>
                  </li>
                  <li class="flex flex-row items-center gap-3">
                    <input type="radio" class="input-radio-sm lg:input-radio-base xl:input-radio"  name="" id="filter-condition-secondhand" value="secondhand" v-model="productFilter.condition">
                    <label for="filter-condition-secondhand">Bekas</label>
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
                    <input type="text" name="" id="input-harga-min" class="form-control form-control-base" placeholder="Harga Terendah" v-model="productFilter.minPrice">
                  </div>
                  <div class="input-group mb-2">
                    <span class="input-group-text">Rp</span>
                    <input type="text" name="" id="input-harga-max" class="form-control form-control-base" placeholder="Harga Tertinggi" v-model="productFilter.maxPrice">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="item" class="w-full md:w-9/12">
          <div class="tab-nav bg-white">
            <a :class="'tab-nav-item ' + (this.showContent === 'content-toko' ? 'active' : '')" @click="changeContent('content-toko')">
              <i class="fa-solid fa-shop"></i>
              Toko
            </a>
            <button :class="'tab-nav-item ' + (this.showContent === 'content-product' ? 'active' : '')" @click="changeContent('content-product')">
              <i class="fa-solid fa-box"></i>
              Product
            </button>
          </div>
          <div class="tab-content">
            <ContentShop
              ref="content-toko"
              :keyword="this.searchTerm"
              :filterData.sync="shopFilter"
              :filterLoading="this.isLoading.filterShop"
              v-show="showContent === 'content-toko'" />

            <ContentProduct
              ref="content-product"
              :keyword="this.searchTerm"
              :filterData.sync="productFilter"
              :filterLoading="this.isLoading.filterProduct"
              v-show="showContent === 'content-product'" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SearchBar from '@/components/exhibition/SearchBar.vue'
// import ProductView from '@/views/ProductView.vue'
import ContentShop from '@/components/exhibition/ContentShop.vue'
import ContentProduct from '@/components/exhibition/ContentProduct.vue'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'ExhibitionView',
  components: {
    SearchBar,
    ContentShop,
    ContentProduct
  },
  data () {
    return {
      showContent: this.exhibContent,
      productsRawData: [],
      listInfo: {
        count_all_data: 30,
        count_show: 30,
        active_page: 1,
        row_start: 0,
        row_end: 30
      },
      sort: {
        by: 'name',
        order: 'asc'
      },
      searchTerm: '',
      searchCity: '',
      isLoading: {
        filterShopCategory: true,
        filterProduct: false,
        filterLocation: false
      },
      productFilter: {
        minPrice: null,
        maxPrice: null,
        condition: null,
        city: [],
        category: []
      },
      shopFilter: {
        city: [],
        category: []
      },
      isShopLocation: false,
      isProductLocation: false
    }
  },
  props: {
    exhibContent: {
      type: String,
      default: () => {
        return 'content-toko'
      }
    }
  },
  methods: {
    ...mapActions({
      getPrdCategories: 'categories/getProductCategories',
      getShopCategories: 'categories/getShopCategories',
      getCities: 'regions/getCities'
    }),
    changeContent (target) {
      this.sort.by = null
      this.sort.order = null
      this.listInfo.active_page = 1

      this.showContent = target
    },
    shortenTitle (title) {
      let newTitle = title.trimLeft().substr(0, 35)

      if (title.trimLeft().length > 12) {
        newTitle = newTitle + '...'
      }
      return newTitle
    },
    async getFilters () {
      this.isLoading.filterShopCategory = true
      this.isLoading.filterProduct = true
      this.isLoading.filterLocation = true
      await this.getShopCategories({ search: false, parent_id: false })
      this.isLoading.filterShopCategory = false
      await this.getPrdCategories({ search: false })
      this.isLoading.filterProduct = false
      await this.getCities({ search: false, province: false })
      this.isLoading.filterLocation = false
    },
    toggleFilterLocation (content, toggle) {
      if (toggle === 'toggle') {
        if (content === 'all' || content === 'shop') { this.isShopLocation = !this.isShopLocation }
        if (content === 'all' || content === 'product') { this.isProductLocation = !this.isProductLocation }
      } else {
        if (content === 'all' || content === 'shop') { this.isShopLocation = toggle }
        if (content === 'all' || content === 'product') { this.isProductLocation = toggle }
      }
    },
    closeFilter (el) {
      if (!(el.target.id === 'shop-location-filter') && !(el.target.id === 'close-shop-location-filter')) {
        var filterDOM = document.getElementById('shop-location-filter')
        if (!filterDOM.contains(el.target.parentNode)) {
          if (el.target.id !== 'filter-shop-location-button') {
            this.toggleFilterLocation('all', false)
          }
        }
      }
    }
  },
  computed: {
    ...mapState('categories', ['vxProductCategories']),
    ...mapState('categories', ['vxShopCategories']),
    ...mapGetters({
      fiveCities: 'regions/getterFiveCity',
      alphabetCities: 'regions/getterCityByAlphabet'
    }),
    filterCities: function () {
      if (this.alphabetCities && this.alphabetCities.length > 0) {
        return this.alphabetCities(this.searchCity)
      } else {
        return []
      }
    }
  },
  watch: {
    exhibContent: function (value) {
      this.changeContent(value)
    }
  },
  beforeMount () {
    this.getFilters()
  },
  mounted () {
    document.addEventListener('click', this.closeFilter)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeFilter)
  }
}
</script>
