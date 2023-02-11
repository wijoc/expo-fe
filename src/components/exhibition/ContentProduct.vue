<template>
  <div id="content-product" class="animate-[fade_0.5s_ease-in-out_normal]">
    <template v-if="this.rowdata.length > 0">
      <div class="flex flex-col justify-between gap-2 mb-3 lg:flex-row xl:flex-nowrap">
        <p class="w-fit text-sm">Menampilkan 1 - 30 Produk dari total 99.999 asdasdasd
          <span v-if="this.keyword !== null && this.keyword !== ''">
            untuk <span class="font-bold">"{{ this.keyword }}"</span>
          </span>
        </p>
        <div class="flex flex-nowrap justify-end items-center gap-1">
          <label for="input-sort" class="text-sm font-semibold">Urutkan :</label>
          <select name="inputSort" id="input-sort" class="form-control form-control-sm w-fit">
            <option value="name-asc">Nama A -> Z</option>
            <option value="name-desc">Nama Z -> A</option>
            <option value="price-asc">Harga Tinggi ke Rendah</option>
            <option value="price-desc">Harga Rendah ke Tinggi</option>
          </select>
        </div>
      </div>
      <div class="grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-5">
        <div class="content-item border border-gray-200 flex flex-col justify-center" v-for="(prd, i) in this.rowdata" :key="i" @click="showProduct(prd.identification)">
          <span class="bg-gray-100 flex justify-center items-center w-full max-h-28">
            <img src="@/assets/img/product/product_1.jpg" alt="" class="max-w-full max-h-28">
          </span>
          <div class="flex flex-col gap-[0.125rem] py-2 px-1">
            <p class="title-product">
              {{ prd.name }}
            </p>
            <h5 class="font-bold text-normal text-left">
              <!-- {{ this.salePrice[prd.identification] }} -->
            </h5>
            <span class="flex flex-nowrap items-center gap-1">
              <span class="bg-green-300 rounded font-medium text-xs text-primary p-0.5">
                {{ prd.disc_percent }}
              </span>
              <p class="font-normal text-xs text-left line-through text-gray-400">
                {{ prd.price }}
              </p>
            </span>
            <p class="text-xs text-justify font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vel! Fugiat asperiores laudantium labore illum.
            </p>
          </div>
        </div>
      </div>
    </template>
    <div class="bg-red-500/50 text-center p-1" v-else>
      <p class="font-bold text-gray-100 tracking-wider uppercase">Tidak ada produk tersimpan</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentProduct',
  props: {
    rowdata: {
      type: Array,
      default: () => { return [] }
    },
    info: {
      type: Object,
      default: () => {
        return {
          count_all_data: 0,
          count_show: 30,
          active_page: 1
        }
      }
    },
    keyword: {
      type: String,
      default: () => { return null }
    }
  },
  methods: {
    showProduct (product) {
      this.$router.push({ path: '/exhibition/product/' + product })
    }
  },
  computed: {
    salePrice: function () {
      var prices = {}

      this.rowdata.forEach((prd) => {
        if (prd.disc_percent && prd.disc_price) {
          prices[prd.id] = prd.price - prd.disc_price
        } else {
          prices[prd.id] = prd.price
        }
      })

      return prices
    }
  },
  mounted () {
    console.log(this.rowdata)
  }
}
</script>`
