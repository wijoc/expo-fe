<template>
  <div id="filter" class="hidden h-fit bg-white md:flex md:flex-col md:gap-2 md:w-[33.3%] lg:w-[30%] xl:w-[21%]">
    <a class="text-lg font-medium">Filters</a>
    <div class="flex flex-col w-full h-full px-2 py-2 border-gray-200 divide-y-2 shadow-md card border-1">
      <div v-if="this.content === 'content-shop'">
        <div id="skeleton-shop-category-filter" class="max-h-screen" v-if="this.loading.filterShop">
          <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
          <ul class="flex flex-col gap-1 mt-2">
            <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
              <input type="checkbox" class="input-checkbox md:input-checkbox-base" disabled>
              <div class="w-32 h-5 rounded bg-gray-300/80 skeleton"></div>
            </li>
          </ul>
        </div>
        <div id="shop-category-filter" class="accordion" v-else>
          <input type="checkbox" name="" id="checkbox-kategori" class="accordion-checkbox" checked>
          <label for="checkbox-kategori" class="relative accordion-label">
            Kategori
            <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
          </label>
          <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxShopCtgrs.count_data <= 0">
            <a class="font-bold">WARNING</a>:
            Filter kategori tidak tersedia!
            Jika masalah berlanjut mohon hubungi kami
            <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
          </div>
          <ul class="accordion-content" v-else>
            <li class="flex flex-row items-center gap-2" v-for="(fCategory, i) in this.vxShopCtgrs.data" :key="i">
              <input type="checkbox" class="input-checkbox md:input-checkbox-base" :id="'filter-shop-category-' + fCategory.id" :value="fCategory.id" v-model="shopFilter.category">
              <label :for="'filter-shop-category-' + fCategory.id">{{ fCategory.name }}</label>
            </li>
          </ul>
        </div>
        <div id="skeleton-shop-location-filter" class="max-h-screen" v-if="this.loading.filterLocation">
          <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
          <ul class="flex flex-col gap-1 mt-2">
            <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
              <input type="checkbox" class="input-checkbox md:input-checkbox-base" disabled>
              <div class="w-32 h-5 rounded bg-gray-300/80 skeleton"></div>
            </li>
          </ul>
        </div>
        <div id="shop-location-filter" class="relative accordion" v-else>
          <input type="checkbox" name="" id="checkbox-shop-location" class="accordion-checkbox" checked>
          <label for="checkbox-shop-location" class="relative accordion-label">
            Lokasi
            <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
          </label>
          <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxProvinces.count_data <= 0 && this.vxProvinces.count_data <= 0">
            <a class="font-bold">WARNING</a>:
            Filter lokasi tidak tersedia!
            Jika masalah berlanjut mohon hubungi kami
            <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
          </div>
          <ul class="accordion-content" v-else>
            <li class="flex flex-row items-center gap-2" v-for="(fMC, i) in this.metroCities" :key="i">
              <input type="checkbox" class="input-checkbox md:input-checkbox-base" :id="'filter-shop-location-m' + i" :value="fMC.id" v-if="fMC.special" @change="setLocationFilter('shop', fMC.id, $event)">
              <input type="checkbox" class="input-checkbox md:input-checkbox-base" :id="'filter-shop-location-m' + i" :value="fMC.id" v-model="shopFilter.city" v-else>
              <label :for="'filter-shop-location-m' + i">{{ fMC.city }}</label>
            </li>
            <li id="filter-shop-location-button" ref="filter-shop-location-button" class="right-0 mt-1 font-normal text-right cursor-pointer text-secondary hover:underline md:text-md" @click="toggleLocFilter('desktop', true)">
              Lihat Selengkapnya >
            </li>
          </ul>
        </div>
      </div>
      <div v-if="this.content === 'content-product'">
        <div id="category-filter" ref="category-filter" class="accordion">
          <input type="checkbox" id="checkbox-category" class="accordion-checkbox" checked>
          <label for="checkbox-category" class="relative accordion-label">
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
              <div class="flex flex-row items-center gap-2">
                <input type="checkbox" class="input-checkbox md:input-checkbox-base" :id="'filter-category-' + fCategory.id" :value="fCategory.id" v-model="productFilter.category" @change="setProductFilter('main', i)">
                <label :for="'filter-category-' + fCategory.id">{{ fCategory.name }}</label>
              </div>
              <ul class="pl-6" v-if="fCategory.sub_category.length > 0">
                <li class="flex flex-row items-center gap-2" v-for="(subCategory, j) in fCategory.sub_category" :key="j">
                  <input type="checkbox" class="input-checkbox md:input-checkbox-base" :id="'filter-sub-category-' + subCategory.id" :value="subCategory.id" v-model="productFilter.category" @change="setProductFilter('sub', i, j)">
                  <label :for="'filter-sub-category-' + subCategory.id">{{ subCategory.name }}</label>
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
              <input type="radio" class="input-radio"  name="" id="filter-condition-new" value="new" v-model="productFilter.condition">
              <label for="filter-condition-new">Baru</label>
            </li>
            <li class="flex flex-row items-center gap-3">
              <input type="radio" class="input-radio"  name="" id="filter-condition-secondhand" value="secondhand" v-model="productFilter.condition">
              <label for="filter-condition-secondhand">Bekas</label>
            </li>
            <li class="flex flex-row items-center gap-3">
              <input type="radio" class="input-radio"  name="" id="filter-condition-both" value="" v-model="productFilter.condition">
              <label for="filter-condition-both">Semua</label>
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
            <div class="my-1 mb-2 input-group">
              <span class="input-group-text">Rp</span>
              <input type="text" name="" id="input-harga-min" class="form-control w-[90%] px-2 py-1.5 text-base leading-3" placeholder="Harga Terendah" v-model.lazy="productFilter.minPrice">
            </div>
            <div class="mb-2 input-group">
              <span class="input-group-text">Rp</span>
              <input type="text" name="" id="input-harga-max" class="form-control w-[90%] px-2 py-1.5 text-base leading-3" placeholder="Harga Tertinggi" v-model.lazy="productFilter.maxPrice">
            </div>
          </div>
        </div>
      </div>
      <div v-show="this.showLocationFilter" id="location-filter" ref="location-filter" class="hidden bg-white p-2 border-2 border-gray-400 rounded sm:fixed sm:flex sm:flex-col sm:bottom-[10%] sm:left-7 sm:h-[40%] sm:w-[65%] lg:left-20 lg:w-7/12">
        <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxProvinces.count_data <= 0 && this.vxProvinces.count_data <= 0">
          <a class="font-bold">WARNING</a>:
          Filter lokasi tidak tersedia!
          Jika masalah berlanjut mohon hubungi kami
          <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
        </div>
        <template v-else>
          <div class="flex items-center justify-between pb-2 border-gray-300 flex-nowrap border-b-1">
            <h5 class="w-2/12">Lokasi</h5>
            <div class="w-9/12 flex flex-nowrap justify-center items-center gap-0 rounded p-0.5 overflow-hidden relative">
              <input type="text" class="w-full p-0.5 text-sm bg-white border-1 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 rounded" placeholder="Cari Lokasi ..." v-model="searchLoc">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="max-w-4 max-h-[0.85rem] text-gray-400 fill-current absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
              </svg>
            </div>
            <span class="flex items-center justify-end w-1/12">
              <svg ref="close-location-filter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 text-gray-400 cursor-pointer fill-current" @click="toggleLocFilter('desktop', false)">
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
              </svg>
            </span>
          </div>
          <div class="relative max-h-[85%]">
            <div class="max-h-full overflow-y-scroll">
              <h5 class="w-full font-medium capitalize">Provinsi</h5>
              <div v-for="(value, alphakey, i) in this.filterProvinces" :key="'dp' + i">
                <div class="grid grid-cols-2">
                  <div class="flex flex-row items-center gap-2" v-for="(fProv, p) in value" :key="'p' + p">
                    <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-prov-location-' + fProv.id" :value="fProv.id" v-model="shopFilter.province" v-if="content === 'content-shop'">
                    <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-prov-location-' + fProv.id" :value="fProv.id" v-model="productFilter.province" v-else>
                    <label :for="'filter-prov-location-' + fProv.id">{{ fProv.name }}</label>
                  </div>
                </div>
              </div>
              <div v-for="(value, key, i) in this.filterCities" :key="i">
                <h5 class="w-full font-medium uppercase">{{ key }}</h5>
                <div class="grid grid-cols-2">
                  <div class="flex flex-row items-center col-span-1 gap-2" v-for="(fCity, c) in value" :key="c">
                    <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-shop-city-' + fCity.id" :value="fCity.id" v-model="shopFilter.city" v-if="content === 'content-shop'">
                    <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-shop-city-' + fCity.id" :value="fCity.id" v-model="productFilter.city" v-else>
                    <label :for="'filter-shop-city-' + fCity.id">{{ fCity.city }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'DesktopFilter',
  data () {
    return {
      productFilter: this.filterProduct,
      searchLoc: '',
      showLocationFilter: false
    }
  },
  props: {
    content: String,
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
    }
  },
  methods: {
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
  }
}
</script>
