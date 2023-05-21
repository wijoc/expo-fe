<template>
  <div class="relative">
    <div id="cart-mobile" ref="cart-mobile" class="duration-200 ease-in-out transform translate-y-full md:hidden mobile-layer bg-white/30">
      <div class="relative h-full px-2 pt-1.5 pb-10 bg-white border-2 border-gray-400 rounded-t-md flex flex-col">
        <span class="sticky z-10 flex items-center justify-between pb-1 bg-white border-gray-100 -top-1 flex-nowrap border-b-3">
          <div class="flex items-center gap-2 flex-nowrap">
            <svg id="cart-mobile-close" ref="cart-mobile-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 text-gray-500 cursor-pointer fill-current" @click="toggleCart(false)">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
            </svg>
            <h5 class="text-lg font-medium">Keranjang</h5>
          </div>
          <span class="w-12 h-5 rounded bg-gray-300/80 skeleton" v-if="this.isLoading.cart"></span>
          <h5 class="rounded btn btn-sm btn-outline-secondary" v-else>Hapus</h5>
        </span>
        <div class="h-full overflow-y-scroll grow">
          <div class="flex flex-row items-center justify-start w-full gap-1.5 pb-1 pl-1 mt-1 border-gray-100 border-b-3">
            <span class="w-3 h-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
            </span>
            <div class="flex items-center gap-1 flex-nowrap">
              <p class="mt-1 text-xs">Dikirim ke </p>
              <span class="w-20 h-5 rounded bg-gray-300/80 skeleton" v-if="this.isLoading.address"></span>
              <span class="text-sm font-bold cursor-pointer" v-else>qwerty asdfgh zxcvbn</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[0.65rem] h-[0.65rem]">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
              </svg>
            </div>
          </div>
          <div class="w-full pt-1">
            <template v-if="this.isLoading.cart">
              <div class="flex gap-1 mb-3 flex-nowrap">
                <div class="flex items-center justify-center w-4/12 h-24 bg-gray-300/80 skeleton"></div>
                <div class="w-8/12">
                  <p class="w-full h-6 rounded bg-gray-300/80 skeleton"></p>
                  <p class="w-1/2 h-6 mt-2 rounded bg-gray-300/80 skeleton"></p>
                </div>
              </div>
            </template>
            <div class="w-full" v-else-if="this.verrCart.error">
              <div class="p-1 text-sm rounded-md bg-tertiary/30 border-1 border-secondary">
                <a class="font-bold">HALAMAN RUSAK</a>
                <p class="text-justify"> Keranjang sedang tidak dapat diakses. Silahkan coba kembali setelah beberapa saat.
                Hubungi kami di <span class="underline">csxxxx@xxx.com</span> jika halaman masih tidak bisa diakses.</p>
              </div>
            </div>
            <template v-else>
              <div :id="'m-cart-item-shop-' + i" class="flex flex-col pt-1 pb-3 border-b-2 border-gray-100" v-for="(item, i) in this.vxCart.items" :key="'mcs' + i">
                <div class="flex flex-row items-center gap-2 px-1 py-0.5 bg-gray-100/50">
                  <input :id="'m-cart-select-shop-' + i" type="checkbox" class="relative appearance-none flex justify-center items-center w-[1.15rem] h-[1.15rem] border border-gray-300 rounded bg-white checked:bg-primary checked:border-primary checked:text-white checked:after:content-['✔'] checked:after:absolute checked:after:text-xs focus:outline-none transition duration-[25ms] cursor-pointer">
                  <label :for="'m-cart-select-shop-' + i">{{ item.store_name }}</label>
                </div>
                <div :id="'m-cart-shop-product-' + i + p" class="flex flex-col px-0.5" v-for="(prd, p) in item.items" :key="'mcp' + p">
                  <div class="flex flex-row items-center gap-1">
                    <div class="flex items-center justify-center w-[10%]">
                      <input :id="'m-shop-product-' + p" type="checkbox" class="w-[1.15rem] h-[1.15rem] relative appearance-none flex justify-center items-center border border-gray-300 rounded bg-white checked:bg-primary checked:border-primary checked:text-white checked:after:content-['✔'] checked:after:absolute checked:after:text-xs focus:outline-none transition duration-[25ms] cursor-pointer">
                    </div>
                    <label :for="'m-shop-product-' + p" class="flex gap-1 mb-3 flex-nowrap">
                      <div class="flex items-center justify-center w-4/12 h-16 bg-gray-100/50">
                        <img src="@/assets/img/product/product_1.jpg" alt="" class="object-scale-down max-w-full max-h-16">
                      </div>
                      <div class="w-8/12">
                        <p class="text-sm font-light text-justify">{{ prd.product_name | shortTitle }}</p>
                        <p class="text-sm font-medium text-left">{{ prd.product_net_price | rupiah}}</p>
                        <span class="flex items-center gap-1 flex-nowrap">
                          <span class="bg-tertiary/60 rounded font-medium text-xs text-white py-0.5 px-1">
                            {{ prd.product_discount_percent | disc }}
                          </span>
                          <h5 class="text-sm font-normal text-left text-gray-400 line-through">
                            {{ prd.product_initial_price | rupiah }}
                          </h5>
                        </span>
                      </div>
                    </label>
                  </div>
                  <div class="w-full pl-1.5 pr-1 text-xs font-light text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorem minus suscipit est sunt maiores quasi officia fugiat explicabo dicta sit.
                  </div>
                  <div class="flex items-center justify-end gap-3 mt-2 flex-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4" @click="deleteCartItem(i, p)">
                      <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                      <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
                    </svg>
                    <div class="flex h-full flex-nowrap w-fit">
                      <button class="items-center px-1 border-gray-300 rounded-l cursor-pointer border-y-1 border-l-1 disabled:cursor-not-allowed disabled:bg-gray-100" @click="changeQty('decrease', i, p)">
                        <i class="w-3 h-3 fill-current fa-solid fa-minus"></i>
                      </button>
                      <span class="px-2 border-gray-300 border-1">
                        <input type="number" name="inputCartQty" id="input-m-cart-qty" class="text-center max-w-[4rem] no-spinner focus:outline-none focus:ring-0" min='1' step="1" @change="changeQty('input', i, p, $event)" :value="localCart[i].items[p].quantity">
                      </span>
                      <button class="px-1 border-gray-300 rounded-r cursor-pointer border-y-1 border-r-1" @click="changeQty('increase', i, p)">
                        <i class="w-4 h-4 fill-current fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="sticky bottom-0 left-0 z-10 flex items-center justify-between w-full p-2 bg-white border-t-2 border-gray-200 shadow">
          <div class="flex flex-row items-center gap-1.5">
            <input type="checkbox" class="relative appearance-none flex justify-center items-center w-4 h-4 border border-gray-300 rounded bg-white checked:bg-primary checked:border-primary checked:text-white checked:after:content-['✔'] checked:after:absolute checked:after:text-xs focus:outline-none transition duration-[25ms] cursor-pointer" id="m-cart-select-all">
            <label for="m-cart-select-all" class="text-sm">Pilih Semua</label>
          </div>
          <div class="flex gap-2 flex-nowrap">
            <template v-if="this.isLoading.cart">
              <span class="flex flex-col gap-1">
                <p class="h-4 w-14 bg-gray-300/80 skeleton"></p>
                <p class="w-20 h-4 bg-gray-300/80 skeleton"></p>
              </span>
              <span class="h-10 rounded w-14 bg-gray-300/80 skeleton"></span>
            </template>
            <template v-else>
              <span class="flex flex-col">
                <p class="text-xs font-light">Total Belanja</p>
                <p class="text-xs font-medium">{{ vxCart.total_cart | rupiah }}</p>
              </span>
              <button class="rounded btn btn-disabled" v-if="this.verrCart.error" disabled>Beli</button>
              <button class="rounded btn btn-tertiary" v-else>Beli (3)</button>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div id="cart-desktop" ref="cart-desktop" class="fixed right-0 z-50 hidden w-5/12 h-[calc(100%-4rem)] px-2 overflow-y-scroll transition-all bg-white border-2 border-gray-200 rounded-l shadow-lg translate-x-full top-10 sm:top-16 md:block lg:w-4/12">
      <span class="sticky top-0 z-10 flex items-center justify-between pb-1 bg-white border-gray-100 flex-nowrap border-b-3">
        <div class="flex items-center gap-2 flex-nowrap">
          <h5 class="text-lg font-medium">Keranjang</h5>
        </div>
        <span class="w-12 h-5 rounded bg-gray-300/80 skeleton" v-if="this.isLoading.cart"></span>
        <h5 class="rounded btn btn-sm btn-outline-secondary" v-else>Hapus</h5>
      </span>
      <div class="mb-12 grow">
        <div class="flex flex-row items-center justify-start w-full gap-1.5 pb-1 pl-1 mt-1 border-gray-100 border-b-3">
          <span class="w-3 h-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
            </svg>
          </span>
          <div class="flex items-center gap-1 flex-nowrap">
            <p class="mt-1 text-xs">Dikirim ke </p>
            <span class="w-20 h-5 rounded bg-gray-300/80 skeleton" v-if="this.isLoading.address"></span>
            <span class="text-sm font-bold cursor-pointer" v-else>qwerty asdfgh zxcvbn</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[0.65rem] h-[0.65rem]">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
          </div>
        </div>
        <div class="w-full pt-1">
          <template v-if="this.isLoading.cart">
            <div class="flex gap-1 mb-3 flex-nowrap">
              <div class="flex items-center justify-center w-4/12 h-24 bg-gray-300/80 skeleton"></div>
              <div class="w-8/12">
                <p class="w-full h-6 rounded bg-gray-300/80 skeleton"></p>
                <p class="w-1/2 h-6 mt-2 rounded bg-gray-300/80 skeleton"></p>
              </div>
            </div>
          </template>
          <div class="w-full" v-else-if="this.verrCart.error">
            <div class="p-1 text-sm rounded-md bg-tertiary/30 border-1 border-secondary">
              <a class="font-bold">HALAMAN RUSAK</a>
              <p class="text-justify"> Keranjang sedang tidak dapat diakses. Silahkan coba kembali setelah beberapa saat.
              Hubungi kami di <span class="underline">csxxxx@xxx.com</span> jika halaman masih tidak bisa diakses.</p>
            </div>
          </div>
          <template v-else>
            <div :id="'m-cart-item-shop-' + i" class="flex flex-col pt-1 pb-3 border-b-2 border-gray-100" v-for="(item, i) in this.vxCart.items" :key="'mcs' + i">
              <div class="flex flex-row items-center gap-2 px-1 py-0.5 bg-gray-100/50">
                <input :id="'m-cart-select-shop-' + i" type="checkbox" class="relative appearance-none flex justify-center items-center w-[1.15rem] h-[1.15rem] border border-gray-300 rounded bg-white checked:bg-primary checked:border-primary checked:text-white checked:after:content-['✔'] checked:after:absolute checked:after:text-xs focus:outline-none transition duration-[25ms] cursor-pointer">
                <label :for="'m-cart-select-shop-' + i">{{ item.store_name }}</label>
              </div>
              <div :id="'m-cart-shop-product-' + i + p" class="flex flex-col px-0.5" v-for="(prd, p) in item.items" :key="'mcp' + p">
                <div class="flex flex-row items-center gap-1">
                  <div class="flex items-center justify-center w-[10%]">
                    <input :id="'m-shop-product-' + p" type="checkbox" class="w-[1.15rem] h-[1.15rem] relative appearance-none flex justify-center items-center border border-gray-300 rounded bg-white checked:bg-primary checked:border-primary checked:text-white checked:after:content-['✔'] checked:after:absolute checked:after:text-xs focus:outline-none transition duration-[25ms] cursor-pointer">
                  </div>
                  <label :for="'m-shop-product-' + p" class="flex gap-1 mb-3 flex-nowrap">
                    <div class="flex items-center justify-center w-4/12 h-16 bg-gray-100/50">
                      <img src="@/assets/img/product/product_1.jpg" alt="" class="object-scale-down max-w-full max-h-16">
                    </div>
                    <div class="w-8/12">
                      <p class="text-sm font-light text-justify">{{ prd.product_name | shortTitle }}</p>
                      <p class="text-sm font-medium text-left">{{ prd.product_net_price | rupiah}}</p>
                      <span class="flex items-center gap-1 flex-nowrap">
                        <span class="bg-tertiary/60 rounded font-medium text-xs text-white py-0.5 px-1">
                          {{ prd.product_discount_percent | disc }}
                        </span>
                        <h5 class="text-sm font-normal text-left text-gray-400 line-through">
                          {{ prd.product_initial_price | rupiah }}
                        </h5>
                      </span>
                    </div>
                  </label>
                </div>
                <div class="w-full pl-1.5 pr-1 text-xs font-light text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem minus suscipit est sunt maiores quasi officia fugiat explicabo dicta sit.
                </div>
                <div class="flex items-center justify-end gap-3 mt-2 flex-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4" @click="deleteCartItem(i, p)">
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
                  </svg>
                  <div class="flex h-full flex-nowrap w-fit">
                    <button class="items-center px-1 border-gray-300 rounded-l cursor-pointer border-y-1 border-l-1 disabled:cursor-not-allowed disabled:bg-gray-100" @click="changeQty('decrease', i, p)">
                      <i class="w-3 h-3 fill-current fa-solid fa-minus"></i>
                    </button>
                    <span class="px-2 border-gray-300 border-1">
                      <input type="number" name="inputCartQty" id="input-m-cart-qty" class="text-center max-w-[4rem] no-spinner focus:outline-none focus:ring-0" min='1' step="1" @change="changeQty('input', i, p, $event)" :value="localCart[i].items[p].quantity">
                    </span>
                    <button class="px-1 border-gray-300 rounded-r cursor-pointer border-y-1 border-r-1" @click="changeQty('increase', i, p)">
                      <i class="w-4 h-4 fill-current fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="sticky bottom-0 flex items-center justify-between w-full p-2 bg-white border-t-2 border-gray-300">
        <div class="flex flex-row items-center gap-1.5">
          <input type="checkbox" class="relative appearance-none flex justify-center items-center w-4 h-4 border border-gray-300 rounded bg-white checked:bg-primary checked:border-primary checked:text-white checked:after:content-['✔'] checked:after:absolute checked:after:text-xs focus:outline-none transition duration-[25ms] cursor-pointer" id="m-cart-select-all">
          <label for="m-cart-select-all" class="text-sm">Pilih Semua</label>
        </div>
        <div class="flex gap-2 flex-nowrap">
          <template v-if="this.isLoading.cart">
            <span class="flex flex-col gap-1">
              <p class="h-4 w-14 bg-gray-300/80 skeleton"></p>
              <p class="w-20 h-4 bg-gray-300/80 skeleton"></p>
            </span>
            <span class="h-10 rounded w-14 bg-gray-300/80 skeleton"></span>
          </template>
          <template v-else>
            <span class="flex flex-col">
              <p class="text-xs font-light">Total Belanja</p>
              <p class="text-xs font-medium">{{ vxCart.total_cart | rupiah }}</p>
            </span>
            <button class="rounded btn btn-disabled" v-if="this.verrCart.error" disabled>Beli</button>
            <button class="rounded btn btn-tertiary" v-else>Beli (3)</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import * as currencyHelper from '@/helper/CurrencyHelper.js'
import * as stringHelper from '@/helper/StringHelper.js'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ExhibitionCart',
  data () {
    return {
      toggle: this.show,
      localCart: [],
      isLoading: {
        address: true,
        cart: true,
        update: true
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      default: () => { return false }
    }
  },
  methods: {
    ...mapActions({
      getCart: 'carts/getCart',
      updateCart: 'carts/updateCart',
      deleteCart: 'carts/deleteCart'
    }),
    toggleClass (tggl) {
      if (tggl) {
        this.$refs['cart-mobile'].classList.add('translate-y-0')
        this.$refs['cart-mobile'].classList.remove('translate-y-full')
        this.$refs['cart-desktop'].classList.add('translate-x-0')
        this.$refs['cart-desktop'].classList.remove('translate-x-full')
      } else {
        this.$refs['cart-mobile'].classList.add('translate-y-full')
        this.$refs['cart-mobile'].classList.remove('translate-y-0')
        this.$refs['cart-desktop'].classList.add('translate-x-full')
        this.$refs['cart-desktop'].classList.remove('translate-x-0')
      }
    },
    toggleCart (tggl = null) {
      this.$emit('update:show', tggl !== null ? tggl : this.show)
    },
    closeCart (el) {
      const toggleDOM = document.getElementById('toggle-cart-button')
      if (!toggleDOM.contains(el.target.parentNode) && !(el.target.id === 'cart-mobile-close') && !(el.target.id === 'toggle-cart-button')) {
        const cartDOM = document.getElementById('cart-mobile')
        if (!cartDOM.contains(el.target.parentNode)) { // Check if cartDOM not contains target parentNode
          if (el.target.id !== 'cart-mobile-close') {
            this.toggleCart(false)
          }
        }
      }
    },
    async changeQty (action, shopI, itemsI, e = null) {
      if (action === 'input') {
        this.localCart[shopI].items[itemsI].quantity = e.target.value < 1 ? 1 : parseInt(e.target.value)
      } else if (action === 'increase') {
        this.localCart[shopI].items[itemsI].quantity++
      } else {
        if (this.localCart[shopI].items[itemsI].quantity > 1) {
          this.localCart[shopI].items[itemsI].quantity--
        }
      }

      const response = await this.updateCart({ cart_id: this.localCart[shopI].items[itemsI].cart_id, uuid: this.localCart[shopI].items[itemsI].product_uuid, qty: this.localCart[shopI].items[itemsI].quantity })
      if (!response.success) {
        if (response.code === 'ERR_NETWORK') {
          Swal.fire({
            position: 'center',
            showConfirmButton: true,
            timer: 2500,
            icon: 'error',
            title: 'Mohon maaf, Kami sedang offline.',
            html: 'Silahkan coba lagi nanti.'
          })
        } else if (response.code === 'invalid') {
          let msg = ''
          response.errors.forEach(e => {
            if (e.product_uuid) {
              msg += e.product_uuid + '<br>'
            }
            if (e.qty) {
              msg += e.qty + '<br>'
            }
          })

          Swal.fire({
            position: 'center',
            showConfirmButton: true,
            timer: 2500,
            icon: 'error',
            title: 'Invalid Input',
            html: msg
          })
        } else {
          Swal.fire({
            position: 'center',
            showConfirmButton: true,
            timer: 2500,
            icon: 'error',
            title: 'Mohon maaf, Halaman tidak bisa diakses.',
            html: 'Silahkan coba lagi nanti.'
          })
        }
      }
    },
    async deleteCartItem (shopI, itemsI) {
      Swal.fire({
        position: 'center',
        showConfirmButton: false,
        customClass: 'overflow-hidden w-44 h-44',
        html: `<div class="inline-block overflow-hidden bg-transparent w-[7.5rem] h-[7.5rem]">
            <div class="relative flex items-center justify-center w-full h-full overflow-hidden bg-transparent">
              <div class="absolute w-14 h-14 border-[10px] border-secondary border-solid border-t-transparent rounded-[50%] animate-[spin_1s_linear_infinite] box-content"></div>
            </div>
          </div>`,
        onBeforeOpen () {
          Swal.showLoading()
        },
        onAfterClose () {
          Swal.hideLoading()
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
      })

      const response = await this.deleteCart({ cart_id: this.localCart[shopI].items[itemsI].cart_id })
      this.getData(true)
      Swal.close()

      if (!response.success) {
        if (response.code === 'ERR_NETWORK') {
          Swal.fire({
            position: 'center',
            showConfirmButton: true,
            timer: 2500,
            icon: 'error',
            title: 'Mohon maaf, Kami sedang offline.',
            html: 'Silahkan coba lagi nanti.'
          })
        } else {
          Swal.fire({
            position: 'center',
            showConfirmButton: true,
            timer: 2500,
            icon: 'error',
            title: 'Kesalaham sistem',
            html: response.message + '. Silahkan coba lagi nanti.'
          })
        }
      }
    },
    async getData (getNew = false) { // if getNew = true -> ignore cache data and fetch new data from api
      this.isLoading.address = true
      this.isLoading.cart = true
      await this.getCart(getNew)
      this.localCart = this.vxCart.items
      this.isLoading.cart = false
    }
  },
  computed: {
    ...mapState('carts', ['vxCart', 'verrCart', 'vxShippingAddress'])
  },
  watch: {
    show: function (newValue) {
      if (newValue) {
        this.getData()
      }
      this.toggleClass(newValue)
    }
  },
  filters: {
    shortTitle: function (value) {
      return stringHelper.shortenStr(value, 20)
    },
    rupiah: function (value) {
      return currencyHelper.currencyFormat(value, '.', 'Rp')
    },
    disc: function (value) {
      const disc = value.split('.', value)
      if (disc[1] === 0 || disc[1] === '00') {
        return Math.floor(value) + '%'
      } else {
        return value + '%'
      }
    },
    weight: function (value) {
      return (parseFloat(value) / 1000) + ' Kg'
    }
  },
  beforeMount () {
    document.addEventListener('click', this.closeCart)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeCart)
  }
}
</script>
