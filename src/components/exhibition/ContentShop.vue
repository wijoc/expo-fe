<template>
  <div id="content-shop" class="animate-[fade_0.5s_ease-in-out_normal]">
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
        <button class="rounded-md btn btn-outline-gray">
          <i class="fa-solid fa-arrow-up-short-wide"></i>
          Sort
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
          <!-- Menampilkan {{ this.info.row_start + (this.info.row_end > this.info.row_start ? '-' + this.info.row_end : '') }} product dari total {{ this.info.count_all }}
          <span v-if="this.keyword !== null && this.keyword !== ''">
            untuk <span class="font-bold">"{{ this.keyword }}"</span>
          </span> -->
          Menampilkan hasil untuk "nyenyenye"
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
        active_page: 1,
        row_per_page: 0,
        row_start: 0,
        row_end: 0
      },
      requestPage: 1,
      requestPerPage: 60,
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
    toggleFilter () {
      this.$emit('toggleFilter', true)
    },
    async getShopList () {
      console.log('get')
      this.isLoading = true
      try {
        const response = await axios.get(axConfig.shopUrl, {
          params: {
            with_product: true,
            search: this.keyword,
            sort: this.sort.by,
            order: this.sort.order,
            page: this.requestPage,
            per_page: this.requestPerPage,
            city: this.filterData.city,
            province: this.filterData.province,
            category: this.filterData.category
          }
        })

        this.info.count_all = response.data.count_all
        this.info.count_data = response.data.count_data
        this.info.row_per_page = response.data.row_per_page
        this.rawdata = response.data.data

        if (this.info.active_page > 1) {
          var pageBefore = this.info.active_page - 1
          this.info.row_start = (pageBefore * this.info.row_per_page)
        } else {
          this.info.row_start = 1
        }

        var rowEnd = this.info.row_start + this.info.row_per_page
        this.info.row_end = (rowEnd > this.info.count_all ? this.info.count_all : rowEnd)

        this.isLoading = false
      } catch (err) {
        if (err.code === 'ERR_NETWORK') {
          this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Kami sedang offline', subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else {
          this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Halaman Rusak. Coba lagi nanti', subMessage: 'Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        }
      }
    },
    showShop (domain) {
      // this.$router.push('/' + domain)
      console.log(domain)
    }
  },
  computed: {
    sort: {
      get () {
        return this.sortData
      }
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
        this.getShopList()
      }
    },
    filterData: {
      deep: true,
      handler: function (newValue) {
        this.getShopList()
      }
    },
    sortData: {
      deep: true,
      handler: function (newValue) {
        this.getShopList()
      }
    }
  },
  beforeMount () {
    this.getShopList()
  }
}
</script>
