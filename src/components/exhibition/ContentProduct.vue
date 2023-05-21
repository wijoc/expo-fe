<template>
  <div id="content-product" class="animate-[fade_0.5s_ease-in-out_normal]">
    <!-- Mobile Filter Button -->
    <div class="relative flex flex-row w-full h-full gap-2 mb-2 overflow-x-scroll md:hidden">
      <template v-if="this.filterLoading">
        <button class="h-8 bg-gray-300 rounded-lg w-28 skeleton"></button>
        <button class="h-8 bg-gray-300 rounded-lg w-28 skeleton"></button>
      </template>
      <template v-else>
        <button class="sticky left-0 py-0.5 btn btn-outline-gray rounded-md" ref="filter-button" id="filter-button" @click="toggleFilter()">
          <i class="fa-solid fa-filter"></i>
          Filter
        </button>
      </template>
    </div>

    <div v-if="this.isLoading" class="grid grid-flow-row grid-cols-2 gap-2 sm:grid-cols-3 md:gap-2 lg:grid-cols-5">
      <div class="relative flex flex-col p-1 border border-gray-300 rounded shadow-md content-item gap-y-1 bg-gray-100/50" v-for="i in 6" :key="i">
        <div class="w-full h-24 mb-1 rounded-lg bg-gray-300/80 skeleton sm:h-28"></div>
        <span class="w-full h-5 rounded bg-gray-300/80 skeleton sm:w-48 md:w-40"></span>
        <span class="w-20 h-4 rounded bg-gray-300/80 skeleton sm:w-32 md:w-18"></span>
      </div>
    </div>
    <template v-else-if="this.info.count_data > 0">
      <div class="flex-row items-center justify-between hidden gap-2 mb-3 sm:flex">
        <p class="text-sm w-fit">
          Menampilkan {{ this.info.row_start + (this.info.row_end > this.info.row_start ? '-' + this.info.row_end : '') }} product dari total {{ this.info.count_all }}
          <span v-if="this.keyword !== null && this.keyword !== ''">
            untuk <span class="font-bold">"{{ this.keyword }}"</span>
          </span>
        </p>
        <div class="flex flex-row items-center gap-1 flex-nowrap">
          <label for="input-sort">Urutkan :</label>
          <select name="inputSort" id="input-sort" ref="input-sort" class="form-control w-fit" v-model="sort.selected">
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
        :divClass="'grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 xl:grid-cols-5'"
        :rowdata="this.rawdata"
        :info="this.info"
        @detail="showProduct"
        @page="changePage" />
    </template>
    <div class="flex flex-col items-center w-full h-full gap-3 justify-items-center bg-white/60" v-else >
      <img src="@/assets/img/data_not_found.jpg" alt="no data found" class="w-56 rounded-lg max-h-56">
      <h3 class="font-extrabold uppercase font-md text-primary">Belum ada product terdaftar</h3>
    </div>
  </div>
</template>

<script>
import GridProduct from '@/components/comp/GridProduct.vue'

import axios from 'axios'
import * as axConfig from '@/config.js'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'ContentProduct',
  components: {
    GridProduct
  },
  data () {
    return {
      isLoading: false,
      rawdata: [],
      info: {
        count_all: 1,
        count_data: 1,
        active_page: parseInt(this.$route.query.page) ?? 1,
        row_per_page: 120,
        row_start: 0,
        row_end: 0
      },
      requestPerPage: 120
    }
  },
  props: {
    keyword: {
      type: String,
      default: () => { return null }
    },
    sortData: {
      type: Object,
      default: () => {
        return {
          by: 'name',
          order: 'asc'
        }
      }
    },
    filterData: {
      type: Object,
      default: () => {
        return {
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
    ...mapActions({ storeProductIDs: 'products/storeProductIDs' }),
    toggleFilter () {
      this.$emit('toggleFilter', true)
    },
    async getProductList () {
      if (this.filterLoading) {
        this.isLoading = true
      } else {
        this.isLoading = true
        var getData = 'new'
        if (this.sort.by === '' || this.sort.by === 'relevant') {
          if (typeof this.vxProductIDs[this.info.active_page] !== 'undefined') {
            getData = 'cache'
          } else {
            getData = 'except-cache'
            var exceptProduct = this.productException(this.info.active_page)
          }
        }

        try {
          if (getData === 'new' || getData === 'except-cache') {
            const response = await axios.get(axConfig.productUrl, {
              headers: axConfig.getHeaders(null, { 'Content-type': 'application/json' }),
              params: {
                search: this.keyword,
                sort: this.sort.by,
                order: this.sort.order,
                page: this.info.active_page,
                per_page: this.requestPerPage,
                min_price: this.filterData.minPrice,
                max_price: this.filterData.maxPrice,
                condition: this.filterData.condition,
                city: this.filterData.city,
                category: this.filterData.category,
                except: getData === 'except-cache' && exceptProduct && exceptProduct.length > 0 ? exceptProduct : false
              }
            })

            this.info.count_all = response.data.count_all
            this.info.count_data = response.data.count_data
            this.info.row_per_page = response.data.row_per_page ?? this.requestPerPage
            this.rawdata = response.data.data

            // Store id each page to vuex, when sort by 'relevant'
            if (response.data.sort_by == null || response.data.sort_by === 'relevant') {
              const lsData = {
                page: this.info.active_page,
                ids: []
              }
              this.rawdata.forEach((element) => {
                lsData.ids.push(element.id)
              })

              this.storeProductIDs({ data: lsData, command: 'store' })
            }
          } else {
            const response = await axios.get(axConfig.productUrl + 'multiple', {
              headers: axConfig.getHeaders(null, { 'Content-type': 'application/json' }),
              params: {
                ids: this.vxProductIDs[this.info.active_page]
              }
            })

            this.info.count_data = response.data.count_data
            this.rawdata = response.data.data
          }

          this.setRowStartEnd()
          this.isLoading = false
        } catch (err) {
          if (err.code === 'ERR_NETWORK') {
            console.log('cp-a')
            // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Kami sedang offline', subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
          } else {
            console.log('cp-b')
            // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Halaman Rusak. Coba lagi nanti', subMessage: 'Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
          }
        }
      }
    },
    setRowStartEnd () {
      let rowEnd = 0
      if (this.info.active_page > 1) {
        var pageBefore = this.info.active_page - 1
        this.info.row_start = (pageBefore * parseInt(this.info.row_per_page)) + 1
        rowEnd = parseInt(this.info.row_start) + parseInt(this.info.row_per_page) - 1
      } else {
        this.info.row_start = 1
        rowEnd = parseInt(this.info.row_per_page)
      }

      this.info.row_end = (rowEnd > this.info.count_all ? this.info.count_all : rowEnd)
    },
    showProduct (prd) {
      this.$router.push({ name: 'product', params: { slug: prd.slug }, query: { pid: prd.uuid } })
    },
    changePage (page) {
      if (page !== this.$route.query.page && encodeURIComponent(page) !== this.$route.query.page) {
        /** Both of this won't refresh page */
        // history.pushState({ page: page }, null, this.$route.path + '?' + encodeURIComponent('page') + '=' + encodeURIComponent(page))
        this.$router.push({ query: { page: page } })
      }
      this.info.active_page = page
      this.getProductList()
    }
  },
  computed: {
    ...mapState('products', ['vxProductIDs']),
    ...mapGetters({ productException: 'products/getterProductExceptPage' }),
    sort: {
      get () {
        return this.sortData
      }
    }
  },
  watch: {
    keyword: {
      handler: function (newValue) {
        this.storeProductIDs({ command: 'destroy' })
        this.changePage(1)
      }
    },
    filterData: {
      deep: true,
      handler: function (newValue) {
        this.storeProductIDs({ command: 'destroy' })
        this.changePage(1)
      }
    },
    sortData: {
      deep: true,
      handler: function (newValue) {
        this.storeProductIDs({ command: 'destroy' })
        this.changePage(1)
      }
    }
  },
  beforeMount () {
    this.changePage(1)
  },
  beforeDestroy () {
    this.storeProductIDs({ command: 'destroy' })
  }
}
</script>
