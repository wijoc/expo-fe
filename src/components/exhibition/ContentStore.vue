<template>
  <div id="content-toko" class="animate-fadeIn">
    <template v-if="this.info.count_all_data > 0">
      <div class="flex flex-row justify-between items-center gap-2 mb-3">
        <p class="w-fit text-sm">
          Menampilkan 1 - 30 Toko dari total {{ this.info.count_all_data }}
          <span v-if="this.keyword !== null && this.keyword !== ''">
            untuk <span class="font-bold">"{{ this.keyword }}"</span>
          </span>
        </p>
        <div class="flex flex-row flex-nowrap items-center gap-1">
          <label for="input-sort">Urutkan :</label>
          <select name="inputSort" id="input-sort" class="form-control w-fit">
            <option value="name-asc">Nama A -> Z</option>
            <option value="name-desc">Nama A -> Z</option>
          </select>
        </div>
      </div>
      <div class="grid grid-flow-row grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-5 lg:grid-cols-3">
        <div class="content-item pb-1 flex flex-col gap-y-3" v-for="(store, i) in data" :key="i">
          <div class="flex flex-row gap-2 md:flex-col" @click="showDetail(store.identification)">
            <img src="@/assets/img/toko/toko_1.jpg" alt="" class="max-w-full max-h-28 w-1/2 rounded-r-sm sm:w-5/12 md:w-auto md:rounded-b-sm lg:max-h-36">
            <div class="flex flex-col gap-2 pt-2 px-1">
              <h6 class="uppercase font-semibold text-sm tracking-tight text-left md:text-center">
                {{ store.name }}
              </h6>
              <p class="text-justify text-sm tracking-tight">
                Lokasi : {{ store.address }}
              </p>
              <div class="hidden sm:flex sm:flex-row">
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center flex-nowrap gap-2 mx-1">
            <div class="flex flex-col justify-center gap-2 shadow-md rounded-sm max-w-1/3" v-for="(products, spI) in store.products" :key="spI" @click="showProduct(products.id)">
              <img src="@/assets/img/product/product_1.jpg" alt="" class="max-h-[4.5rem]">
              <p class="text-sm font-semibold text-secondary text-center">{{ products.price }}</p>
            </div>
          </div>
          <button class="flex justify-center btn btn-sm btn-outline-primary rounded text-center mx-1" @click="showDetail(store.identification)">
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
export default {
  name: 'ContentStore',
  data () {
    return {
      sort: {
        order: 'asc',
        by: 'name'
      }
    }
  },
  props: {
    data: {
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
    showDetail (id) {
      this.$router.push({ path: '/exhibition/store/' + id })
    },
    showProduct (product) {
      this.$router.push({ path: '/exhibition/product/' + product })
    }
  },
  beforeMount () {
    console.log(this.data)
  }
}
</script>
