<template>
  <div id="content-product" class="animate-[fade_0.5s_ease-in-out_normal]">
    <!-- Mobile Filter -->
    <div class="relative w-full h-full flex flex-row gap-2 mb-2 overflow-x-scroll md:hidden">
      <template v-if="this.filterLoading">
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

    <div v-if="this.isLoading.data" class="grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-5">
      <div class="relative content-item p-1 flex flex-col gap-y-1 bg-gray-100/50 border border-gray-300 rounded shadow-md" v-for="i in 5" :key="i">
        <div class="w-full h-24 mb-1 rounded-lg bg-gray-300/80 skeleton sm:h-28"></div>
        <span class="w-full h-5 rounded bg-gray-300/80 skeleton sm:w-48 md:w-40"></span>
        <span class="w-20 h-4 rounded bg-gray-300/80 skeleton sm:w-32 md:w-18"></span>
      </div>
    </div>
    <template v-else-if="this.isLoading.data === false && this.info.count_data > 0">
      <div class="hidden sm:flex flex-row justify-between items-center gap-2 mb-3">
        <p class="w-fit text-sm">
          Menampilkan {{ this.info.row_start + (this.info.row_end > this.info.row_start ? '-' + this.info.row_end : '') }} product dari total {{ this.info.count_all }}
          <span v-if="this.keyword !== null && this.keyword !== ''">
            untuk <span class="font-bold">"{{ this.keyword }}"</span>
          </span>
        </p>
        <div class="flex flex-row flex-nowrap items-center gap-1">
          <label for="input-sort">Urutkan :</label>
          <select name="inputSort" id="input-sort" ref="input-sort" class="form-control w-fit" v-model="sortSelected" @change="changeSort()">
            <option value="relevant">Terkait</option>
            <option value="name-asc">Nama A -> Z</option>
            <option value="name-desc">Nama Z -> A</option>
            <option value="price-asc">Harga Terendah</option>
            <option value="price-desc">Harga Tertinggi</option>
            <option value="newest">Terbaru</option>
            <option value="oldest">Product Terlama</option>
          </select>
        </div>
      </div>
      <GridProduct
        :divClass="'grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-5'"
        :rowdata="this.rawdata"
        @detail="showProduct" />
    </template>
    <div class="flex flex-col justify-items-center items-center gap-3 w-full h-full bg-white/60" v-else >
      <img src="@/assets/img/data_not_found.jpg" alt="no data found" class="w-56 max-h-56 rounded-lg">
      <h3 class="font-md font-extrabold text-primary uppercase">Belum ada product terdaftar</h3>
    </div>
  </div>
</template>

<script>
import GridProduct from '@/components/comp/GridProduct.vue'

import axios from 'axios'
import * as axConfig from '@/config.js'

export default {
  name: 'ContentProduct',
  components: {
    GridProduct
  },
  data () {
    return {
      rawdata: [],
      sort: {
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
      requestPage: 1,
      requestPerPage: 30,
      message: '',
      isLoading: {
        data: false
      }
    }
  },
  props: {
    keyword: {
      type: String,
      default: () => { return null }
    },
    filterData: {
      type: Object,
      default: () => {
        return {
          minPrice: null,
          maxPrice: null,
          condition: null,
          city: [],
          category: []
        }
      }
    },
    filterLoading: {
      type: Boolean,
      default: () => { return false }
    }
  },
  methods: {
    async getProductList () {
      this.isLoading.data = true
      this.rawdata = await axios.get(axConfig.productUrl, {
        params: {
          search: this.keyword,
          sort: this.sort.by,
          order: this.sort.order,
          page: this.requestPage,
          per_page: this.requestPerPage,
          min_price: this.filterData.minPrice,
          max_price: this.filterData.maxPrice,
          condition: this.filterData.condition,
          city: this.filterData.city,
          category: this.filterData.category
        }
      })
        .then((response) => {
          this.info.count_all = response.data.count_all
          this.info.count_data = response.data.count_data
          this.info.row_per_page = response.data.row_per_page

          return response.data.data
        })
        .catch((error) => {
          this.message = error.response.data.message

          return []
        })

      await this.setRowStartEnd()
      this.isLoading.data = false
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
    },
    changeSort () {
      if (this.$refs['input-sort'].value === 'relevant') {
        this.sort.by = null
        this.sort.order = null
      } else if (this.$refs['input-sort'].value === 'newest' || this.$refs['input-sort'].value === 'oldest') {
        this.sort.by = this.$refs['input-sort'].value
        this.sort.order = null
      } else {
        const s = this.$refs['input-sort'].value.split('-')
        this.sort.by = s[0]
        this.sort.order = s[1]
      }

      this.getShopList()
    },
    async showProduct (prd) {
      this.$router.push({ name: 'product', params: { slug: prd.slug }, query: { pid: prd.uuid } })
    }
  },
  beforeMount () {
    this.getProductList()
  }
}
</script>`
