<template>
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
    }
  },
  methods: {
    showProduct (rowIndex) {
      this.$emit('detail', {
        uuid: this.rowdata[rowIndex].uuid,
        slug: stringHelper.createSlug(this.rowdata[rowIndex].name)
      })
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
