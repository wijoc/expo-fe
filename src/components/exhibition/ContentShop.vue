<template>
  <div id="content-toko" class="animate-[fade_0.5s_ease-in-out_normal]">
    <template v-if="this.info.count_data > 0">
      <div class="flex flex-row justify-between items-center gap-2 mb-3">
        <p class="w-fit text-sm">
          Menampilkan {{ this.info.row_start }} - {{ this.info.row_end }} Toko dari total {{ this.info.count_all }}
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
          </select>
        </div>
      </div>
      <div class="grid grid-flow-row grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-5 lg:grid-cols-3">
        <div class="relative content-item pb-1 flex flex-col gap-y-3" v-for="(shop, i) in rawdata" :key="i">
          <div class="flex flex-row gap-2 md:flex-col md:gap-1 md:h-full" @click="showDetail(shop.identification)">
            <img src="@/assets/img/toko/toko_1.jpg" alt="" class="w-4/12 md:w-auto md:rounded-b-sm lg:max-h-36">
            <div class="flex flex-col pt-2 px-1">
              <h6 class="uppercase font-semibold text-sm tracking-tight text-left">
                {{ shop.store_name }}
              </h6>
              <p class="text-left text-xs tracking-tight text-gray-500">
                {{ shop.city }}
              </p>
            </div>
          </div>
          <div :class="'flex flex-row flex-nowrap gap-2 mx-1' + (shop.products && shop.products.length < 3 ? 'justify-start' : 'justify-center')">
            <div class="flex flex-col justify-center gap-2 shadow-md rounded-sm max-w-1/3" v-for="(products, spI) in shop.products" :key="spI" @click="showProduct(shop.domain, products.uuid)">
              <img src="@/assets/img/product/product_1.jpg" alt="" class="max-h-[4.5rem]">
              <p class="text-sm font-semibold text-secondary text-center">{{ products.price | rupiah }}</p>
            </div>
          </div>
          <button class="bottom-1 w-10/12 self-center btn btn-sm btn-outline-primary rounded text-center" @click="showShop(shop.domain)">
            Lihat Toko
          </button>
        </div>
      </div>
    </template>
    <div class="bg-red-500/50 text-center p-1" v-else>
      <p class="font-bold text-gray-100 tracking-wider uppercase">Tidak ada toko terdaftar</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import * as axConfig from '@/config.js'
import * as currencyHelper from '@/helper/CurrencyHelper.js'

export default {
  name: 'ContentShop',
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
      message: ''
    }
  },
  props: {
    keyword: {
      type: String,
      default: () => { return null }
    }
  },
  methods: {
    async getShopList () {
      this.rawdata = await axios.get(axConfig.shopUrl, {
        params: {
          with_product: true,
          search: this.keyword,
          sort: this.sort.by,
          order: this.sort.order,
          page: this.requestPage,
          per_page: this.requestPerPage
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

      this.setRowStartEnd()
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
      } else {
        const s = this.$refs['input-sort'].value.split('-')
        this.sort.by = s[0]
        this.sort.order = s[1]
      }

      this.getShopList()
    },
    showShop (domain) {
      console.log(domain)
      // this.$router.push('/store/' + domain)
      this.$router.push('/' + domain)
    },
    showProduct (shop, id) {
      console.log(id)
    }
  },
  filters: {
    rupiah: function (value) {
      return currencyHelper.currencyFormat(value, '.', 'Rp')
    }
  },
  mounted () {
    this.getShopList()
  }
}
</script>
