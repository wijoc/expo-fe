<template>
  <div>
    <div :class="this.divClass">
      <div class="flex flex-col justify-center transition duration-75 border border-gray-200 cursor-pointer content-item hover:border-primary hover:-mt-1" v-for="(prd, i) in this.rowdata" :key="i" @click="showProduct(i)">
        <span class="flex items-center justify-center w-full bg-gray-100 max-h-44">
          <img src="@/assets/img/product/product_1.jpg" alt="" class="max-w-full max-h-44">
        </span>
        <div class="flex flex-col gap-[0.125rem] py-2 px-1">
          <p class="title-product">
            {{ prd.name | shortTitle }}
          </p>
          <h5 class="font-bold text-left text-normal">
            {{ prd.price_net | rupiah }}
          </h5>
          <span class="flex items-center gap-1 flex-nowrap">
            <span class="bg-green-300 rounded font-medium text-sm text-secondary p-0.5">
              {{ prd.discount_percent | disc }}
            </span>
            <p class="text-sm font-normal text-left text-gray-400 line-through">
              {{ prd.price_initial | rupiah }}
            </p>
          </span>
          <p class="mt-2 text-xs text-left text-gray-400">
            <template v-if="prd.store_name">
              <i class="fa-solid fa-shop text-secondary"></i> {{ prd.store_name + ' - ' }}
            </template>
            {{ prd.city }}
          </p>
        </div>
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
  </div>
</template>

<script>
import * as currencyHelper from '@/helper/CurrencyHelper.js'
import * as stringHelper from '@/helper/StringHelper.js'

export default {
  name: 'GridProduct',
  props: {
    divClass: {},
    rowdata: {
      type: Array,
      default: () => { return [] }
    },
    info: {
      type: Object,
      default: () => { return {} }
    }
  },
  methods: {
    showProduct (rowIndex) {
      this.$emit('detail', {
        uuid: this.rowdata[rowIndex].uuid,
        slug: stringHelper.createSlug(this.rowdata[rowIndex].name)
      })
    },
    changePage (page) {
      this.$emit('page', page)
    }
  },
  computed: {
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
    shortTitle: function (value) {
      return stringHelper.shortenStr(value, 15)
    },
    disc: function (value) {
      const disc = value.split('.', value)
      if (disc[1] === 0 || disc[1] === '00') {
        return Math.floor(value) + '%'
      } else {
        return value + '%'
      }
    }
  }
}
</script>
