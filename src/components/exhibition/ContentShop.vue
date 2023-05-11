<template>
  <div id="content-shop" class="animate-[fade_0.5s_ease-in-out_normal] pb-12">
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

    <div class="grid grid-flow-row grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" v-if="this.isLoading">
      <div class="relative flex flex-col pb-1 border border-gray-300 rounded shadow-md bg-gray-100/50 content-item gap-y-4" v-for="i in 6" :key="i">
        <div class="flex flex-row gap-2 px-2 py-1 md:flex-col md:gap-1 md:h-full">
          <div class="w-20 h-20 rounded-full bg-gray-300/80 skeleton"></div>
          <div class="flex flex-col gap-1 px-1 pt-2">
            <span class="w-48 h-5 rounded bg-gray-300/80 skeleton"></span>
            <span class="w-20 h-4 rounded bg-gray-300/80 skeleton"></span>
          </div>
        </div>
      </div>
    </div>
    <template v-else-if="this.isLoading === false && this.info.count_data > 0">
      <div class="flex-row items-center justify-between hidden gap-2 mb-3 sm:flex">
        <p class="text-sm w-fit">
          Menampilkan {{ this.info.row_start + (this.info.row_end > this.info.row_start ? '-' + this.info.row_end : '') }} data dari total {{ this.info.count_all }}
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
          </select>
        </div>
      </div>
      <div class="grid grid-flow-row grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <div class="relative flex flex-col pb-1 content-item gap-y-3" v-for="(shop, i) in rawdata" :key="i">
          <div class="flex flex-row gap-2 md:flex-col md:gap-1 md:h-full" @click="showShop(shop.domain)">
            <img src="@/assets/img/toko/toko_1.jpg" alt="" class="w-20 h-20 rounded-full md:w-auto md:h-auto md:max-h-32 md:rounded-sm lg:max-h-36">
            <div class="flex flex-col px-1 pt-2">
              <h6 class="text-sm font-semibold tracking-tight text-left uppercase">
                {{ shop.store_name }}
              </h6>
              <p class="text-xs tracking-tight text-left text-gray-500">
                {{ shop.city }}
              </p>
            </div>
          </div>
          <div :class="'flex flex-row flex-nowrap gap-1 mx-1 min-h-full' + (shop.products && shop.products.length < 3 ? 'justify-start' : 'justify-center')">
            <div class="flex flex-col justify-center gap-2 shadow-md rounded-sm max-w-[33.333333%] h-full border-1 border-gray-300" v-for="(products, spI) in shop.products" :key="spI" @click="showProduct(shop.domain, products.uuid)">
              <img src="@/assets/img/product/product_1.jpg" alt="" class="h-full max-h-[4.5rem]">
              <p class="text-xs font-semibold text-center whitespace-normal text-secondary">{{ products.price | abbrev }}</p>
            </div>
          </div>
          <button class="self-center w-10/12 text-center rounded bottom-1 btn btn-sm btn-outline-secondary" @click="showShop(shop.domain)">
            Lihat Toko
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center w-full mt-5 h-fit">
        <ul class="justify-end w-full pagination">
          <li :class="'page-item ' + (this.info.active_page <= 1 ? 'disabled' : '')" @click="changePage(prevPage)"><i class="text-xs fa-solid fa-chevron-left"></i></li>
          <li :class="'page-item ' + (info.active_page === 1 ? 'active' : '')" @click="changePage(1)">1</li>
          <li class="font-bold page-item disabled" v-show="this.numBtn[0] >= 3">...</li>
          <li :class="'page-item ' + (parseInt(info.active_page) === p ? 'active' : '')" v-for="(p, i) in numBtn" :key="i" @click="changePage(p)">{{ p }}</li>
          <li class="font-bold page-item disabled" v-show="this.numBtn[4] < this.maxPageBtn - 1">...</li>
          <li class="page-item" v-show="this.maxPageBtn > this.numBtn[4]" @click="changePage(maxPageBtn)">{{ this.maxPageBtn }}</li>
          <li :class="'page-item ' + (this.info.active_page >= this.maxPageBtn ? 'disabled' : '')" @click="changePage(nextPage)"><i class="text-xs fa-solid fa-chevron-right"></i></li>
        </ul>
      </div>
    </template>
    <div class="flex flex-col items-center w-full h-full gap-3 justify-items-center bg-white/60" v-else >
      <img src="@/assets/img/data_not_found.jpg" alt="no data found" class="w-56 rounded-lg max-h-56">
      <h3 class="font-extrabold uppercase font-md text-secondary">Belum ada toko terdaftar</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import * as axConfig from '@/config.js'
import * as currencyHelper from '@/helper/CurrencyHelper.js'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'ContentShop',
  components: {},
  data () {
    return {
      isLoading: false,
      rawdata: [],
      info: {
        count_all: 0,
        count_data: 0,
        active_page: parseInt(this.$route.query.page) ?? 1,
        row_per_page: 30,
        row_start: 0,
        row_end: 0
      },
      requestPerPage: 30,
      message: ''
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
    ...mapActions({ storeShopIDs: 'shops/storeShopIDs' }),
    toggleFilter () {
      this.$emit('toggleFilter', true)
    },
    async getShopList () {
      if (this.filterLoading) {
        this.isLoading = true
      } else {
        this.isLoading = true
        var getData = 'new'
        if (this.sort.by === '' || this.sort.by === 'relevant') {
          if (typeof this.vxShopIDs[this.info.active_page] !== 'undefined') {
            getData = 'cache'
          } else {
            getData = 'except-cache'
            var exceptShop = this.shopException(this.info.active_page)
          }
        }
        try {
          if (getData === 'new' || getData === 'except-cache') {
            const response = await axios.get(axConfig.shopUrl, {
              headers: axConfig.getHeaders({ 'Content-type': 'application/json' }),
              params: {
                with_product: true,
                search: this.keyword,
                sort: this.sort.by,
                order: this.sort.order,
                page: this.info.active_page,
                per_page: this.requestPerPage,
                city: this.filterData.city,
                province: this.filterData.province,
                category: this.filterData.category,
                except: getData === 'except-cache' && exceptShop && exceptShop.length > 0 ? exceptShop : false
              }
            })

            this.info.count_all = response.data.count_all
            this.info.count_data = response.data.count_data
            this.info.row_per_page = response.data.row_per_page
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

              this.storeShopIDs({ data: lsData, command: 'store' })
            }
          } else {
            const response = await axios.get(axConfig.shopUrl + 'multiple', {
              headers: axConfig.getHeaders({ 'Content-type': 'application/json' }),
              params: {
                with_product: true,
                ids: this.vxShopIDs[this.info.active_page]
              }
            })

            this.info.count_data = response.data.count_data
            this.rawdata = response.data.data
          }

          this.setRowStartEnd()
          this.isLoading = false
        } catch (err) {
          if (err.code === 'ERR_NETWORK') {
            console.log('cs-a')
            // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Kami sedang offline', subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
          } else {
            console.log('cs-b')
            // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Halaman Rusak. Coba lagi nanti', subMessage: 'Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
          }
        }
      }
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
    showShop (domain) {
      this.$router.push('/' + domain)
    },
    changePage (page) {
      if (page !== this.$route.query.page && encodeURIComponent(page) !== this.$route.query.page) {
        /** Both of this won't refresh page */
        // history.pushState({ page: page }, null, this.$route.path + '?' + encodeURIComponent('page') + '=' + encodeURIComponent(page))
        this.$router.push({ query: { page: page } })
      }
      this.info.active_page = page
      this.getShopList()
    }
  },
  computed: {
    ...mapState('shops', ['vxShopIDs']),
    ...mapGetters({ shopException: 'shops/getterShopExceptPage' }),
    sort: {
      get () {
        return this.sortData
      }
    },
    maxPageBtn: function () {
      if (parseInt(this.info.count_all) > 0) {
        return Math.ceil(parseInt(this.info.count_all) / this.info.row_per_page)
      } else {
        return 20
      }
    },
    prevPage: function () {
      return this.info.active_page - 1
    },
    nextPage: function () {
      return this.info.active_page + 1
    },
    numBtn: function () {
      const btn = []
      if (this.info.active_page > 3) {
        for (let p = this.info.active_page - 2; p <= this.info.active_page + 2; p++) {
          if (p <= this.maxPageBtn) {
            btn.push(p)
          }
        }
      } else {
        for (let p = this.info.active_page > 1 ? 2 : this.nextPage; p <= 6; p++) {
          if (p <= this.maxPageBtn) {
            btn.push(p)
          }
        }
      }
      return btn
    }
  },
  filters: {
    rupiah: function (value) {
      return currencyHelper.currencyFormat(value, '.', 'Rp')
    },
    abbrev: function (value) {
      return currencyHelper.currencyAbbreviate(value, 100000, 0)
    }
  },
  watch: {
    keyword: {
      handler: function (newValue) {
        this.storeShopIDs({ command: 'destroy' })
        this.changePage(1)
      }
    },
    filterData: {
      deep: true,
      handler: function (newValue) {
        this.storeShopIDs({ command: 'destroy' })
        this.changePage(1)
      }
    },
    filterLoading: {
      deep: true,
      handler: function (newValue) {
        this.getShopList()
      }
    },
    sortData: {
      deep: true,
      handler: function (newValue) {
        this.storeShopIDs({ command: 'destroy' })
        this.changePage(1)
      }
    }
  },
  beforeMount () {
    this.changePage(1)
  },
  beforeDestroy () {
    this.storeShopIDs({ command: 'destroy' })
  }
}
</script>
