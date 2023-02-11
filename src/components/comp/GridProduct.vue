<template>
  <div>
    <div class="content-item border border-gray-200 flex flex-col justify-center" v-for="(prd, i) in this.rowdata" :key="i" @click="showProduct(prd.uuid)">
      <span class="bg-gray-100 flex justify-center items-center w-full max-h-44">
        <img src="@/assets/img/product/product_1.jpg" alt="" class="max-w-full max-h-44">
      </span>
      <div class="flex flex-col gap-[0.125rem] py-2 px-1">
        <p class="title-product">
          {{ prd.name | shortTitle }}
        </p>
        <h5 class="font-bold text-normal text-left">
          {{ prd.price_net | rupiah }}
        </h5>
        <span class="flex flex-nowrap items-center gap-1">
          <span class="bg-green-300 rounded font-medium text-sm text-primary p-0.5">
            {{ prd.discount_percent | disc }}
          </span>
          <p class="font-normal text-sm text-left line-through text-gray-400">
            {{ prd.price_initial | rupiah }}
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import * as currencyHelper from '@/helper/CurrencyHelper.js'
import * as StringHelper from '@/helper/StringHelper.js'

export default {
  name: 'GridProduct',
  props: {
    rowdata: {
      type: Array,
      default: () => { return [] }
    }
  },
  methods: {
    showProduct (id) {
      this.$emit('detail', id)
    }
  },
  filters: {
    rupiah: function (value) {
      return currencyHelper.currencyFormat(value, '.', 'Rp')
    },
    shortTitle: function (value) {
      return StringHelper.ShortenStr(value, 15)
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