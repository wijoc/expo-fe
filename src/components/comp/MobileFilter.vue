<template>
  <div id="filter-mobile" ref="filter-mobile" class="fixed w-full h-full inset-x-0 z-50 top-10 pt-10 px-2 backdrop-blur-[2px] bg-white/30 transform translate-y-full transition-all ease-in-out duration-200 sm:top-16 md:hidden">
    <div class="relative h-full px-2 pt-1.5 pb-28 bg-white border-2 border-gray-400 rounded-t-md">
      <span class="sticky top-0 z-10 flex items-center justify-between mb-2 bg-white flex-nowrap">
        <h5 class="text-lg font-medium">Filters</h5>
        <svg id="filter-mobile-close" ref="filter-mobile-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 text-gray-500 cursor-pointer fill-current" @click="toggleFilter(false)">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
        </svg>
      </span>
      <div class="p-1 text-sm text-justify rounded-md bg-primary/30 border-1 border-darker-primary">
        <a class="font-bold">NOTE</a>:
        Data akan langsung berubah secara otomatis sesuai dengan perubahan filter yang dilakukan.
      </div>
      <div class="relative h-[95%] mt-3 pb-5 overflow-y-scroll overflow-x-hidden">
        <div v-if="this.content === 'content-shop'">
          <template v-if="this.loading.filterShop || this.loading.filterLocation">
            <div id="m-skeleton-shop-sort-filter" class="mb-1.5">
              <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
              <ul class="flex flex-col gap-1 mt-2">
                <li class="flex flex-row items-center gap-2" v-for="i in 3" :key="i">
                  <input type="radio" class="input-radio" disabled>
                  <div class="w-40 h-5 rounded bg-gray-300/80 skeleton"></div>
                </li>
              </ul>
            </div>
            <div id="m-skeleton-shop-category-filter" class="mb-1.5">
              <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
              <ul class="flex flex-col gap-1 mt-2">
                <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
                  <input type="checkbox" class="input-checkbox" disabled>
                  <div class="w-[60%] h-5 rounded bg-gray-300/80 skeleton"></div>
                </li>
              </ul>
            </div>
            <div id="m-skeleton-shop-location-filter" class="mb-1.5">
              <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
              <ul class="flex flex-col gap-1 mt-2">
                <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
                  <input type="checkbox" class="input-checkbox" disabled>
                  <div class="w-[60%] h-5 rounded bg-gray-300/80 skeleton"></div>
                </li>
              </ul>
            </div>
          </template>
          <template v-else>
          </template>
        </div>
        <div v-else>
          <template v-if="this.loading.filterProduct || this.loading.filterLocation">
            <div id="m-skeleton-produt-sort-filter" class="mb-1.5">
              <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
              <ul class="flex flex-col gap-1 mt-2">
                <li class="flex flex-row items-center gap-2" v-for="i in 3" :key="i">
                  <input type="radio" class="input-radio" disabled>
                  <div class="w-40 h-5 rounded bg-gray-300/80 skeleton"></div>
                </li>
              </ul>
            </div>
            <div id="m-skeleton-produt-category-filter" class="mb-1.5">
              <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
              <ul class="flex flex-col gap-1 mt-2">
                <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
                  <input type="checkbox" class="input-checkbox" disabled>
                  <div class="w-[60%] h-5 rounded bg-gray-300/80 skeleton"></div>
                </li>
              </ul>
            </div>
            <div id="m-skeleton-produt-category-filter" class="mb-1.5">
              <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
              <ul class="flex flex-col gap-1 mt-2">
                <li class="flex flex-row items-center gap-2" v-for="i in 2" :key="i">
                  <input type="checkbox" class="input-checkbox" disabled>
                  <div class="w-[60%] h-5 rounded bg-gray-300/80 skeleton"></div>
                </li>
              </ul>
            </div>
            <div id="m-skeleton-produt-location-filter" class="mb-1.5" v-if="this.location">
              <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
              <ul class="flex flex-col gap-1 mt-2">
                <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
                  <input type="checkbox" class="input-checkbox" disabled>
                  <div class="w-[60%] h-5 rounded bg-gray-300/80 skeleton"></div>
                </li>
              </ul>
            </div>
          </template>
          <template v-else>
            <div id="m-product-sort" class="accordion">
              <label for="ms-checkbox-sort" class="mb-2 accordion-label">
                Urutkan
              </label>
              <ul class="flex flex-row flex-wrap gap-x-2 gap-y-4">
                <li class="relative">
                  <input type="radio" class="radio-tag" name="mp-checkbox-sort" id="mp-sort-relevant" value="relevant" v-model="productSort">
                  <label for="mp-sort-relevant">Paling Sesuai</label>
                </li>
                <li class="relative">
                  <input type="radio" class="radio-tag" name="mp-checkbox-sort" id="mp-sort-name-asc" value="name-asc" v-model="productSort">
                  <label for="mp-sort-name-asc">Nama A->Z</label>
                </li>
                <li class="relative">
                  <input type="radio" class="radio-tag" name="mp-checkbox-sort" id="mp-sort-name-desc" value="name-desc" v-model="productSort">
                  <label for="mp-sort-name-desc">Nama Z->A</label>
                </li>
                <li class="relative">
                  <input type="radio" class="radio-tag" name="mp-checkbox-sort" id="mp-sort-price-asc" value="price-asc" v-model="productSort">
                  <label for="mp-sort-price-asc">Harga Terendah</label>
                </li>
                <li class="relative">
                  <input type="radio" class="radio-tag" name="mp-checkbox-sort" id="mp-sort-price-desc" value="price-desc" v-model="productSort">
                  <label for="mp-sort-price-desc">Harga Tertinggi</label>
                </li>
              </ul>
            </div>
            <div id="m-product-category-filter" ref="category-filter" class="accordion">
              <input type="checkbox" id="mp-checkbox-category" class="accordion-checkbox" checked>
              <label for="mp-checkbox-category" class="relative accordion-label">
                Kategori
                <i class="absolute fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out"></i>
              </label>
              <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxProductCtgrs.count_data <= 0">
                <a class="font-bold">WARNING</a>:
                Filter kategori tidak tersedia!
                Jika masalah berlanjut mohon hubungi kami
                <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
              </div>
              <ul class="accordion-content" v-else>
                <li v-for="(fCategory, i) in this.vxProductCtgrs.data" :key="i">
                  <div class="flex flex-row items-center gap-3">
                    <input type="checkbox" class="input-checkbox" :id="'mp-filter-category-' + fCategory.id" :value="fCategory.id" v-model="productFilter.category" @change="setProductFilter('main', i)">
                    <label :for="'mp-filter-category-' + fCategory.id">{{ fCategory.name }}</label>
                  </div>
                  <ul class="pl-6" v-if="fCategory.sub_category.length > 0">
                    <li class="flex flex-row items-center gap-3" v-for="(subCategory, j) in fCategory.sub_category" :key="j">
                      <input type="checkbox" class="input-checkbox" :id="'mp-filter-sub-category-' + subCategory.id" :value="subCategory.id" v-model="productFilter.category" @change="setProductFilter('sub', i, j)">
                      <label :for="'mp-filter-sub-category-' + subCategory.id">{{ subCategory.name }}</label>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div id="m-product-condition-filter" class="accordion">
              <input type="checkbox" name="" id="mp-checkbox-filter-condition" class="accordion-checkbox" checked>
              <label for="mp-checkbox-filter-condition" class="accordion-label">
                Kondisi
                <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
              </label>
              <ul class="accordion-content">
                <li class="flex flex-row items-center gap-3">
                  <input type="radio" class="input-radio"  name="" id="mp-filter-condition-new" value="new" v-model="productFilter.condition">
                  <label for="mp-filter-condition-new">Baru</label>
                </li>
                <li class="flex flex-row items-center gap-3">
                  <input type="radio" class="input-radio"  name="" id="mp-filter-condition-secondhand" value="secondhand" v-model="productFilter.condition">
                  <label for="mp-filter-condition-secondhand">Bekas</label>
                </li>
                <li class="flex flex-row items-center gap-3">
                  <input type="radio" class="input-radio"  name="" id="mp-filter-condition-both" value="" v-model="productFilter.condition">
                  <label for="mp-filter-condition-both">Semua</label>
                </li>
              </ul>
            </div>
            <div id="m-product-price-filter" class="accordion">
              <input type="checkbox" name="" id="mp-checkbox-filter-price" class="accordion-checkbox" checked>
              <label for="mp-checkbox-filter-price" class="accordion-label">
                Harga
                <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
              </label>
              <div class="accordion-content">
                <div class="my-1 mb-2 input-group">
                  <span class="input-group-text">Rp</span>
                  <input type="text" name="" id="mp-input-harga-min" class="form-control form-control-base" placeholder="Harga Terendah" v-model="productFilter.minPrice">
                </div>
                <div class="mb-2 input-group">
                  <span class="input-group-text">Rp</span>
                  <input type="text" name="" id="mp-input-harga-max" class="form-control form-control-base" placeholder="Harga Tertinggi" v-model="productFilter.maxPrice">
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <!-- Mobile Location Filter -->
      <div id="filter-location-mobile" ref="filter-location-mobile" class="absolute top-0 left-0 z-20 w-full h-[95%] px-2 pb-5 overflow-y-scroll overflow-x-hidden bg-white rounded-md transform translate-y-full transition-all ease-in-out duration-200" v-if="this.location">
        <span class="sticky top-0 z-10 flex items-center justify-between pt-2 mb-2 bg-white flex-nowrap">
          <svg id="filter-location-close" ref="filter-location-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6 text-gray-500 cursor-pointer fill-current" @click="toggleLocFilter('mobile', false)">
            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
          <h5 class="text-lg font-medium text-center">Location</h5>
        </span>
        <div class="w-full flex flex-nowrap justify-center items-center gap-0 rounded p-0.5 overflow-hidden relative">
          <input type="text" class="w-full p-0.5 text bg-white border-1 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary rounded" placeholder="Cari Lokasi ..." v-model="searchLoc">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="max-w-4 max-h-[0.85rem] text-gray-400 fill-current absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
          </svg>
        </div>
        <ul>
          <!-- <li v-for="(value, alphakey, i) in this.filterProvinces" :key="'dp' + i">
            <div class="flex flex-row items-center gap-2" v-for="(fProv, p) in value" :key="'p' + p">
              <input type="checkbox" class="input-checkbox-base" :id="'m-filter-prov-location-' + fProv.id" :value="fProv.id" v-model="shopFilter.province" v-if="showContent === 'content-shop'">
              <input type="checkbox" class="input-checkbox-base" :id="'m-filter-prov-location-' + fProv.id" :value="fProv.id" v-model="productFilter.province" v-else>
              <label :for="'m-filter-prov-location-' + fProv.id">{{ fProv.name }}</label>
            </div>
          </li>
          <li v-for="(value, alphakey, i) in this.filterCities" :key="i">
            <div class="flex flex-row items-center gap-2" v-for="(fCity, c) in value" :key="c">
              <input type="checkbox" class="input-checkbox-base" :id="'m-filter-city-location-' + fCity.id" :value="fCity.id" v-model="shopFilter.city" v-if="showContent === 'content-shop'">
              <input type="checkbox" class="input-checkbox-base" :id="'m-filter-city-location-' + fCity.id" :value="fCity.id" v-model="productFilter.city" v-else>
              <label :for="'m-filter-city-location-' + fCity.id">{{ fCity.city }}</label>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'MobileFilter',
  data () {
    return {
      toggle: this.showFilter,
      productFilter: this.filterProduct,
      searchLoc: '',
      showMLocationFilter: false
    }
  },
  props: {
    content: String,
    showFilter: {
      type: Boolean,
      default: () => { return false }
    },
    loading: {
      type: Object,
      default: () => { return {} }
    },
    sortProduct: {
      type: String,
      default: () => { return 'relevant' }
    },
    filterProduct: {
      type: Object,
      default: () => {
        return {
          minPrice: null,
          maxPrice: null,
          condition: null,
          category: [],
          city: [],
          province: []
        }
      }
    },
    location: {
      type: Boolean,
      default: () => { return true }
    }
  },
  methods: {
    toggleFilter (tggl = null) {
      if (tggl || !this.toggle) {
        this.$refs['filter-mobile'].classList.add('translate-y-0')
        this.$refs['filter-mobile'].classList.remove('translate-y-full')
      } else {
        this.$refs['filter-mobile'].classList.add('translate-y-full')
        this.$refs['filter-mobile'].classList.remove('translate-y-0')
      }

      this.$emit('update:showFilter', tggl !== null ? tggl : !this.toggle)
      this.toggle = tggl !== null ? tggl : !this.toggle
    },
    setProductFilter (status = 'main', mainIndex, subIndex) {
      let selected = null
      if (status === 'main') {
        selected = this.vxProductCtgrs.data[mainIndex]
      } else {
        selected = this.vxProductCtgrs.data[mainIndex].sub_category[subIndex]
      }

      if (this.productFilter.category.indexOf(selected.id) !== -1) { // If ID exists in selected filter
        if (selected.is_sub_category === false && selected.sub_category.length > 0) {
          selected.sub_category.forEach((sub) => {
            if (this.productFilter.category.indexOf(sub.id) < 0) {
              this.productFilter.category.push(sub.id) // Add all sub_category to selected filter
            }
          })
        }
      } else {
        if (selected.is_sub_category === false && selected.sub_category.length > 0) {
          selected.sub_category.forEach((sub) => {
            if (this.productFilter.category.indexOf(sub.id) !== -1) {
              this.productFilter.category.splice(this.productFilter.category.indexOf(sub.id), 1)
            }
          })
        } else {
          if (this.productFilter.category.indexOf(selected.parent_id) !== -1) {
            // Remove parent_id from selected filter
            this.productFilter.category.splice(this.productFilter.category.indexOf(selected.parent_id), 1)
          }
        }
      }
    }
  },
  computed: {
    ...mapState('categories', ['vxProductCtgrs', 'verrProductCtgrs']),
    ...mapState('regions', ['vxProvinces', 'verrProvinces', 'vxCities', 'verrCities']),
    ...mapGetters({
      citiesAlphabet: 'regions/getterCitiesAlphabet',
      citiesMetro: 'regions/getterCitiesMetropolitan'
    }),
    filterProvinces: function () {
      if (this.vxProvinces && this.vxProvinces.count_data > 0) {
        var filteredProvinces = this.vxProvinces.data.filter((element) => {
          if (element.name.toString().toLowerCase().indexOf(this.searchLoc.toString().toLowerCase()) > -1) {
            return element
          }
          return false
        })
        var newProvinces = {}

        filteredProvinces.forEach((element) => {
          const firstLetter = element.name.substr(0, 1)
          if (newProvinces[firstLetter]) {
            newProvinces[firstLetter].push(element)
          } else {
            newProvinces[firstLetter] = []
            newProvinces[firstLetter].push(element)
          }
        })

        return newProvinces
      } else {
        return []
      }
    },
    filterCities: function () {
      if (this.citiesAlphabet && this.citiesAlphabet.length > 0) {
        return this.citiesAlphabet(this.searchLoc)
      } else {
        return []
      }
    },
    metroCities: function () {
      return this.citiesMetro()
    },
    productSort: {
      get () {
        return this.sortProduct
      },
      set (value) {
        this.$emit('update:sortProduct', value)
      }
    }
  },
  watch: {
    showFilter: {
      handler: function (newValue) {
        if (newValue !== this.toggle) {
          this.toggleFilter(newValue)
        }
      }
    }
  },
  beforeMount () {
    document.addEventListener('click', this.closeFilter)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeFilter)
  }
}
</script>
