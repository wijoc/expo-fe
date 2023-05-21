<template>
  <div class="container min-h-screen py-12 bg-gray-100/50 sm:pt-16 md:pt-20 lg:px-20">
    <div class="flex flex-col items-center justify-center w-full h-full gap-3 bg-white/60" v-if="this.notFound">
      <img src="@/assets/img/data_not_found.jpg" alt="data not found. empty-concept bvy storyset on freepik" class="w-56 rounded-lg max-h-56">
      <span class="text-xs italic sm:text-sm">
        <a href="https://www.freepik.com/free-vector/empty-concept-illustration_7117861.htm#query=no%20data&position=5&from_view=keyword&track=sph" class="underline cursor-pointer hover:text-blue-400">Image by storyset</a> on Freepik
        product not found
      </span>
      <h3 class="font-extrabold text-center uppercase font-md text-secondary">Waduh, Tujuanmu tidak ditemukan!</h3>
      <h5 class="font-light text-center">Mungkin salah alamat. Ayo lihat pameran lainnya!</h5>
      <div class="flex flex-wrap items-center justify-center w-full gap-2 sm:flex-nowrap">
        <button class="rounded w-fit btn btn-outline-secondary sm:w-1/2 md:w-fit">
          Home
        </button>
        <button class="rounded w-fit btn btn-secondary sm:w-1/2 md:w-fit">
          Lihat Pameran
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-y-2 md:gap-4 md:divide-y-0" v-else>
      <div class="grid content-start grid-flow-row grid-cols-12 px-2 py-3 bg-white shadow-sm md:gap-4">
        <template v-if="this.isLoading.product">
          <div class="col-span-12 bg-white h-fit sm:col-span-5 md:row-span-2 md:top-0">
            <ul ref="carousel-preview" class="flex flex-row gap-3 overflow-x-scroll overflow-y-hidden flex-nowrap max-h-56 snap-mandatory snap-x sm:overflow-x-hidden">
              <li class="w-full h-56 rounded bg-gray-300/80 skeleton"></li>
            </ul>
            <div class="hidden my-2 carousel sm:relative sm:flex">
              <ul ref="carousel-item" class="flex flex-row w-full gap-1 overflow-x-auto overflow-y-hidden carousel-item flex-nowrap snap-mandatory snap-x">
                <li class="w-[3.5rem] h-14 rounded bg-gray-300/80 skeleton lg:h-20" v-for="i in 5" :key="i"></li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col col-span-12 gap-1 px-2 py-3 sm:col-span-7 md:col-span-7 md:row-span-1">
            <span class="w-11/12 h-6 rounded bg-gray-300/80 skeleton"></span>
            <span class="w-6/12 h-6 rounded bg-gray-300/80 skeleton"></span>
            <table class="w-full text-sm font-light table-auto table-bordered-b">
              <tr class="p-5">
                <td class="w-[35%] py-1.5 font-medium">Kondisi</td>
                <td class="px-1 w-fit">:</td>
                <td class="">
                  <p class="w-48 h-5 rounded bg-gray-300/80 skeleton"></p>
                </td>
              </tr>
              <tr>
                <td class="w-[35%] py-1.5 font-medium">Berat Satuan</td>
                <td class="px-1 w-fit">:</td>
                <td class="">
                  <p class="w-48 h-5 rounded bg-gray-300/80 skeleton"></p>
                </td>
              </tr>
              <tr>
                <td class="w-[35%] py-1.5 font-medium">Min. Pembelian</td>
                <td class="px-1 w-fit">:</td>
                <td class="">
                  <p class="w-48 h-5 rounded bg-gray-300/80 skeleton"></p>
                </td>
              </tr>
            </table>
            <span class="text-sm font-medium">Deskripsi : </span>
            <p class="w-full h-5 rounded bg-gray-300/80 skeleton"></p>
            <p class="w-full h-5 rounded bg-gray-300/80 skeleton"></p>
          </div>
          <div class="col-span-12 fixed w-full pt-1.5 pb-2 px-1.5 left-0 bottom-0 bg-white z-50 md:relative md:col-span-7 md:row-span-1 md:rounded md:h-fit md:z-0">
            <span class="w-full h-6 rounded bg-gray-300/80 skeleton"></span>
            <div class="flex gap-1 flex-nowrap">
              <button class="btn btn-base btn-disabled w-[10%] h-6 rounded skeleton"></button>
              <button class="btn btn-base btn-disabled w-[90%] h-6 rounded skeleton"></button>
              <button class="btn btn-base btn-disabled w-[90%] h-6 rounded skeleton"></button>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="col-span-12 bg-white h-fit sm:col-span-5 md:row-span-2 md:top-0">
            <ul ref="carousel-preview" class="flex flex-row gap-3 overflow-x-scroll overflow-y-hidden border-b-2 border-gray-100/50 flex-nowrap max-h-56 snap-mandatory snap-x sm:overflow-x-hidden">
              <li id="a" class="relative flex items-center justify-center max-w-full min-w-full snap-center max-h-56">
                <img src="@/assets/img/product/product_1.jpg" alt="Product Image" class="max-w-full max-h-56">
                <span class="absolute px-2 py-1 text-sm font-medium text-center text-white rounded bg-black/30 left-1 bottom-1">1/8</span>
              </li>
              <li id="b" class="relative flex items-center justify-center max-w-full min-w-full snap-center max-h-56">
                <img src="@/assets/img/toko/toko_1.jpg" alt="Product Image" class="max-w-full max-h-56">
                <span class="absolute px-2 py-1 text-sm font-medium text-center text-white rounded bg-black/30 left-1 bottom-1">2/8</span>
              </li>
              <li id="c" class="relative flex items-center justify-center max-w-full min-w-full snap-center max-h-56">
                <img src="@/assets/img/toko/toko_2.jpg" alt="Product Image" class="max-w-full max-h-56">
                <span class="absolute px-2 py-1 text-sm font-medium text-center text-white rounded bg-black/30 left-1 bottom-1">2/8</span>
              </li>
            </ul>
            <div class="hidden my-2 carousel sm:relative sm:flex">
              <ul ref="carousel-item" class="flex flex-row w-full gap-1 overflow-x-auto overflow-y-hidden carousel-item flex-nowrap snap-mandatory snap-x">
                <li class="flex justify-center items-center h-14 min-w-[3.5rem] max-w-[3.5rem] rounded snap-end border-1 hover:border-primary lg:min-w-[5rem] lg:max-w-[5rem] lg:h-20" @mouseover="hoverItem('#a')">
                  <img src="@/assets/img/product/product_1.jpg" alt="" class="w-auto max-h-14 lg:max-h-20">
                </li>
                <li class="flex justify-center items-center h-14 min-w-[3.5rem] max-w-[3.5rem] rounded snap-end border-1 hover:border-primary lg:min-w-[5rem] lg:max-w-[5rem] lg:h-20" @mouseover="hoverItem('#b')">
                  <img src="@/assets/img/toko/toko_1.jpg" alt="" class="w-auto max-h-14 lg:max-h-20">
                </li>
                <li class="flex justify-center items-center h-14 min-w-[3.5rem] max-w-[3.5rem] rounded snap-end border-1 hover:border-primary lg:min-w-[5rem] lg:max-w-[5rem] lg:h-20" @mouseover="hoverItem('#c')">
                  <img src="@/assets/img/toko/toko_2.jpg" alt="" class="w-auto max-h-14 lg:max-h-20">
                </li>
              </ul>
              <span class="absolute px-0.5 py-2 rounded bg-black/50 self-center left-0 cursor-pointer" ref="btn-prev" @click="scrollToPrev()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-white -rotate-90 fill-current">
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
                </svg>
              </span>
              <span class="absolute px-0.5 py-2 rounded bg-black/50 self-center right-1 cursor-pointer" ref="btn-next" @click="scrollToNext()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-white rotate-90 fill-current">
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
                </svg>
              </span>
            </div>
          </div>
          <div ref="product-desc" class="flex flex-col col-span-12 gap-1 px-2 py-3 sm:col-span-7 md:col-span-7 md:row-span-1">
            <h4 class="title-product">{{ this.productDetail.name }}</h4>
            <!-- <p class="font-bold">Rp99.999</p> -->
            <h5 class="text-lg font-bold text-left">
              {{ this.productDetail.price_net | rupiah }}
            </h5>
            <span class="flex items-center gap-1 flex-nowrap">
              <span class="bg-tertiary/60 rounded font-medium text-sm text-white py-0.5 px-1.5">
                {{ this.productDetail.discount_percent | disc }}
              </span>
              <h5 class="font-normal text-left text-gray-400 line-through">
                {{ this.productDetail.price_initial | rupiah }}
              </h5>
            </span>
            <table class="w-full text-sm font-light border-gray-300 table-auto table-bordered-b">
              <tr class="p-5">
                <td class="w-[35%] py-1.5 font-medium">Kondisi</td>
                <td class="px-1 w-fit">:</td>
                <td class="w-full">{{ this.productDetail.condition }}</td>
              </tr>
              <tr>
                <td class="w-[35%] py-1.5 font-medium">Berat Satuan</td>
                <td class="px-1 w-fit">:</td>
                <td class="w-full">{{ this.productDetail.weight_in_gram | weight }}</td>
              </tr>
              <tr>
                <td class="w-[35%] py-1.5 font-medium">Min. Pembelian</td>
                <td class="px-1 w-fit">:</td>
                <td class="w-full">{{ this.productDetail.minimal_purchase }}</td>
              </tr>
              <tr>
                <td class="w-[35%] py-1.5 font-medium">Status Stok</td>
                <td class="px-1 w-fit">:</td>
                <td class="w-full py-2">
                  <span :class="'rounded font-medium p-1 ' + (this.productDetail.stock_status === 'Preorder' ? 'bg-secondary text-white' : 'bg-green-300 text-space-black')">
                    {{ this.productDetail.stock_status }}
                  </span>
                </td>
              </tr>
              <tr v-if="this.productDetail.stock_status === 'Preorder'">
                <td class="w-[35%] py-1.5 font-medium">Tersedia pada</td>
                <td class="px-1 w-fit">:</td>
                <td class="w-full" v-if="this.productDetail.available_date">{{ this.productDetail.available_date | datef }}</td>
                <td class="w-full" v-else>{{ this.productDetail.available_days }} Hari</td>
              </tr>
            </table>
            <span class="text-sm font-medium">Deskripsi : </span>
            <p class="text-sm font-light">
              {{ this.productDetail.description }}
            </p>
          </div>
          <div class="col-span-12 fixed w-full pt-1.5 pb-2 px-1.5 left-0 bottom-0 bg-white z-50 md:relative md:col-span-7 md:row-span-1 md:rounded md:h-fit md:z-0">
            <div class="hidden md:flex md:flex-col md:w-full md:mb-3">
              <p class="font-medium">Atur jumlah dan catatan</p>
              <div class="flex items-center justify-between w-full">
                <p>Jumlah</p>
                <div class="flex h-full flex-nowrap w-fit">
                  <span class="items-center rounded-l cursor-pointer btn btn-outline-gray" @click="changeQty('decrease')">
                    <i class="w-4 h-4 fill-current fa-solid fa-minus"></i>
                  </span>
                  <span class="px-3 py-1 border-gray-400 border-y-1">
                    <input type="number" name="inputCartQty" id="input-m-cart-qty" class="text-center max-w-[4rem] form-number no-spinner focus:outline-none focus:ring-0" :min="this.productDetail.minimal_purchase" step="1" v-model="toAddToCart.qty">
                  </span>
                  <button class="rounded-r cursor-pointer btn btn-outline-gray" @click="changeQty('increase')">
                    <i class="w-4 h-4 fill-current fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <div class="flex flex-col w-full">
                <p>Catatan <span class="text-sm italic">(optional)</span></p>
                <textarea name="inputCartNote" id="input-m-cart-note" class="w-full p-1 text-sm rounded form-control no-resize" v-model="toAddToCart.note"></textarea>
              </div>
            </div>
            <div class="flex gap-1 flex-nowrap">
              <button class="h-full rounded text-primary btn btn-base btn-outline-primary w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6 fill-current">
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </button>
              <!-- Cart Button for mobile -->
              <button id="add-to-cart-mobile-toggle" ref="add-to-cart-mobile-toggle" class="btn btn-base btn-outline-secondary bg-secondary/20 w-[90%] h-fit rounded md:hidden" @click="toggleAddCart()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="max-w-[1rem] max-h-4 fill-current">
                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
                Keranjang
              </button>

              <!-- Cart Button for desktop -->
              <button class="hidden md:btn btn-base btn-outline-secondary bg-secondary/20 w-[90%] h-fit rounded" @click="addToCart()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="max-w-[1rem] max-h-4 fill-current">
                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
                Keranjang
              </button>

              <button class="btn btn-base btn-secondary w-[90%] min-h-full rounded text-sm xs:text-base" v-if="this.productDetail.stock_status === 'Preorder'">
                Pesan Langsung
              </button>
              <button class="btn btn-base btn-secondary w-[90%] min-h-full rounded text-sm xs:text-base" v-else>
                Beli Langsung
              </button>
            </div>
          </div>
        </template>
      </div>
      <!-- Shop Section -->
      <div class="flex items-start justify-start w-full gap-2 px-2 py-3 bg-white sm:rounded sm:shadow">
        <template v-if="this.isLoading.shop">
          <div class="w-24 h-24 rounded bg-gray-300/80 skeleton"></div>
          <div class="flex flex-col items-start gap-1 mx-2">
            <span class="w-40 h-5 rounded bg-gray-300/80 skeleton"></span>
            <span class="w-24 h-4 rounded bg-gray-300/80 skeleton"></span>
          </div>
        </template>
        <template v-else>
          <img src="@/assets/img/toko/toko_2.jpg" alt="brand logo image" class="max-w-2xl border-gray-100 rounded max-h-24 border-1">
          <div class="flex flex-col items-start w-full gap-1 mx-2 mt-1">
            <h2 class="text-sm font-bold">{{ this.shopDetail.store_name }}</h2>
            <h5 class="text-xs font-light">{{ this.shopDetail.city + ', ' + this.shopDetail.province }}</h5>
            <div class="flex flex-col w-full gap-1 mt-1 sm:flex-row">
              <button class="w-full rounded btn btn-base btn-outline-green">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 fill-current">
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                Whatsapp
              </button>
              <button class="w-full rounded btn btn-base btn-outline-gray" @click="showShop">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 fill-current">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"/>
                </svg>
                Lihat Toko
              </button>
            </div>
          </div>
        </template>
      </div>
      <!-- Product-in-shop Section -->
      <div class="px-2 py-3 bg-white">
        <div class="flex justify-between flex-nowrap">
          <h4 class="font-medium tracking-wide text-md">Lainnya dari toko ini</h4>
          <h4 class="text-sm font-light tracking-wide text-secondary underline underline-offset-[3px] cursor-pointer" v-if="!this.isLoading.shop" @click="showShop()">
            Lihat semua
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="inline w-3 h-3 fill-current">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
            </svg>
          </h4>
        </div>
        <div class="flex flex-row gap-2 pt-2 overflow-x-scroll md:grid md:grid-flow-row md:grid-cols-5 md:overflow-x-hidden lg:grid-cols-5 xl:grid-cols-6">
          <template v-if="this.isLoading.shop && this.isLoading.shopProduct">
            <div class="min-w-[8rem] w-auto h-40 card shadow-lg rounded bg-gray-300/80 skeleton md:col-span-1 md:min-w-0" v-for="i in 5" :key="i">
            </div>
          </template>
          <template v-else>
            <div :class="'flex flex-col justify-center min-w-[8rem] w-fit max-h-48 border border-gray-200 cursor-pointer content-item hover:border-primary hover:-mt-1 transition duration-75 md:col-span-1 md:min-w-0'" v-for="(prd, i) in this.shopProduct" :key="i" @click="showProduct('shop', i)">
              <div class="flex items-center justify-center bg-gray-100/50 h-36">
                <img src="@/assets/img/product/product_1.jpg" alt="" class="object-scale-down max-w-full max-h-36">
              </div>
              <div class="flex flex-col gap-[0.125rem] py-2 px-1">
                <p class="title-product">
                  {{ prd.name | shortTitle }}
                </p>
                <h5 class="text-sm font-bold text-left">
                  {{ prd.price_net | rupiah }}
                </h5>
                <span class="flex flex-col items-start justify-start gap-1 flex-nowrap sm:flex-row">
                  <span class="bg-green-300 rounded font-medium text-sm text-secondary p-0.5">
                    {{ prd.discount_percent | disc }}
                  </span>
                  <p class="text-xs font-normal text-left text-gray-400 line-through">
                    {{ prd.price_initial | rupiah }}
                  </p>
                </span>
              </div>
            </div>
            <div class="card shadow-lg flex flex-col justify-center items-center gap-3 min-w-[8rem] w-fit max-h-48 border border-gray-100 md:hidden" @click="showShop()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-8 -rotate-90 fill-current">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/>
              </svg>
              <span class="text-sm font-light" @click="showShop">Lihat lainnya</span>
            </div>
          </template>
        </div>
      </div>
      <!-- Similar Product Section -->
      <div class="px-2 py-3 bg-white">
        <div class="flex justify-between flex-nowrap">
          <h4 class="font-medium tracking-wide text-md">Produk serupa</h4>
        </div>
        <div class="relative grid grid-flow-row grid-cols-2 gap-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6">
          <template v-if="this.isLoading.similar">
            <div class="min-w-[8rem] w-full h-40 card shadow-lg rounded bg-gray-300/80 skeleton sm:col-span-1 sm:min-w-0" v-for="i in 5" :key="i">
            </div>
          </template>
          <template v-else>
            <div class="flex flex-col justify-center col-span-1 transition duration-75 border border-gray-100 shadow cursor-pointer hover:border-primary hover:-mt-1" v-for="(prdSmlr, i) in this.productSimilar" :key="i" @click="showProduct('similar', i)">
              <div class="flex items-center justify-center bg-gray-100/50 h-36">
                <img src="@/assets/img/product/product_1.jpg" alt="" class="object-scale-down max-w-full max-h-36">
              </div>
              <div class="flex flex-col gap-[0.125rem] py-2 px-1">
                <p class="title-product">
                  {{ prdSmlr.name | shortTitle }}
                </p>
                <h5 class="text-sm font-bold text-left">
                  {{ prdSmlr.price_net | rupiah }}
                </h5>
                <span class="flex flex-col items-start justify-start gap-1 flex-nowrap sm:flex-row">
                  <span class="bg-green-300 rounded font-medium text-sm text-secondary p-0.5">
                    {{ prdSmlr.discount_percent | disc }}
                  </span>
                  <p class="text-xs font-normal text-left text-gray-400 line-through">
                    {{ prdSmlr.price_initial | rupiah }}
                  </p>
                </span>
              </div>
            </div>
          </template>
        </div>
        <div class="flex items-center justify-center pt-5">
          <router-link class="rounded btn btn-outline-secondary w-fit" to="/exhibition">
            Lihat lainnya
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Add Cart -->
    <div id="add-to-cart-mobile" ref="add-to-cart-mobile" class="duration-200 ease-in-out transform translate-y-full md:hidden mobile-layer bg-white/30">
      <div class="relative flex flex-col gap-3 h-full px-2 pt-1.5 pb-14 bg-white border-2 border-gray-400 rounded-t-md">
        <span class="sticky top-0 z-10 flex items-center justify-between mb-2 bg-white flex-nowrap">
          <h5 class="text-lg font-medium">Tambah ke keranjang</h5>
          <svg id="add-to-cart-mobile-close" ref="add-to-cart-mobile-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 text-gray-500 cursor-pointer fill-current" @click="toggleAddCart(false)">
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
          </svg>
        </span>
        <template v-if="this.isLoading.product">
          <div class="flex gap-1 mb-3 flex-nowrap">
            <div class="flex items-center justify-center w-4/12 h-24 bg-gray-300/80 skeleton"></div>
            <div class="w-8/12">
              <p class="w-full h-6 rounded bg-gray-300/80 skeleton"></p>
              <p class="w-1/2 h-6 mt-2 rounded bg-gray-300/80 skeleton"></p>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="flex gap-1 mb-3 flex-nowrap">
            <div class="flex items-center justify-center w-4/12 h-24 bg-gray-100/50">
              <img src="@/assets/img/product/product_1.jpg" alt="" class="object-scale-down max-w-full max-h-24">
            </div>
            <div class="w-8/12">
              <p class="title-product">{{ this.productDetail.name | shortTitle }}</p>
              <p class="font-medium text-left">{{ this.productDetail.price_net | rupiah }}</p>
              <span class="flex items-center gap-1 flex-nowrap">
                <span class="bg-tertiary/60 rounded font-medium text-sm text-white py-0.5 px-1.5">
                  {{ this.productDetail.discount_percent | disc }}
                </span>
                <h5 class="font-normal text-left text-gray-400 line-through">
                  {{ this.productDetail.price_initial | rupiah }}
                </h5>
              </span>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <p>Catatan <span class="text-sm italic">(optional)</span></p>
            <textarea name="inputCartNote" id="input-m-cart-note" class="w-full p-1 text-sm rounded form-control no-resize" v-model="toAddToCart.note"></textarea>
          </div>
          <div class="flex items-center justify-between w-full">
            <p>Jumlah</p>
            <div class="flex h-full flex-nowrap w-fit">
              <span class="items-center rounded-l cursor-pointer btn btn-outline-gray" @click="changeQty('decrease')">
                <i class="w-4 h-4 fill-current fa-solid fa-minus"></i>
              </span>
              <span class="px-3 py-1 border-gray-400 border-y-1">
                <input type="number" name="inputCartQty" id="input-m-cart-qty" class="text-center max-w-[4rem] form-number no-spinner focus:outline-none focus:ring-0" :min="this.productDetail.minimal_purchase" step="1" v-model="toAddToCart.qty">
              </span>
              <button class="rounded-r cursor-pointer btn btn-outline-gray" @click="changeQty('increase')">
                <i class="w-4 h-4 fill-current fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-between w-full">
            <p>Total</p>
            <h5 class="text-xl font-medium">{{ this.toAddToCart.subtotal | rupiah }}</h5>
          </div>
          <div class="absolute right-0 flex items-center justify-center w-full px-3 bottom-14" @click="addToCart()">
            <button class="w-full rounded btn btn-secondary">
              Tambahkan ke keranjang
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import * as axConfig from '@/config.js'
import * as currencyHelper from '@/helper/CurrencyHelper.js'
import * as stringHelper from '@/helper/StringHelper.js'
import { mapActions } from 'vuex'

export default {
  name: 'ProductView',
  data () {
    return {
      productDetail: {},
      productSimilar: [],
      shopDetail: {},
      shopProduct: [],
      searchTerm: '',
      isLoading: {
        product: false,
        shop: false,
        shopProduct: false,
        similar: false
      },
      isError: {
        shop: false,
        shopMsg: '',
        sProduct: false,
        similar: false
      },
      notFound: false,
      toAddToCart: {
        uuid: null,
        storeID: null,
        note: null,
        qty: 1,
        subtotal: 0
      },
      showAddCartM: false
    }
  },
  props: {},
  methods: {
    ...mapActions({
      addCart: 'carts/addCart'
    }),
    hoverItem (value) {
      var preview = this.$refs['carousel-preview']
      preview.querySelector(value).scrollIntoView({ block: 'end', inline: 'nearest', behavior: 'smooth' })
    },
    scrollToPrev () {
      var items = this.$refs['carousel-item']
      var itemWidth = items.querySelector('li').clientWidth
      if (items.scrollLeft !== 0) {
        items.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' })
      } else {
        items.scrollTo({ left: items.scrollWidth, top: 0, behavior: 'smooth' })
      }
    },
    scrollToNext () {
      var items = this.$refs['carousel-item']
      var itemWidth = items.querySelector('li').clientWidth

      if (items.scrollLeft < this.$refs.carousel.clientWidth) {
      // if (items.scrollLeft < (items.scrollWidth - itemWidth)) { // If items is full width
        items.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' })
      } else {
        items.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
      }
    },
    async getData () {
      this.isLoading.product = true
      try {
        var response = await axios.get(axConfig.productUrl + this.$route.query.pid)
        this.productDetail = response.data.data
        this.notFound = false
        this.isLoading.product = false

        /** Set data to-add-to-cart */
        this.toAddToCart.uuid = this.productDetail.uuid
        this.toAddToCart.storeID = this.productDetail.store_id
        this.toAddToCart.qty = parseInt(this.productDetail.minimal_purchase)

        this.getShop()
        this.getShopProduct()
        this.getSimilarProduct()
      } catch (err) {
        if (err.response && err.response.status === 404) {
          console.log('not-found')
          this.notFound = true
        } else if (err.response) {
          console.log('a')
          // this.$router.push({ name: 'server-error', props: { statusCode: err.response.status, message: err.response.data.message, subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else if (err.code === 'ERR_NETWORK') {
          console.log('b')
          // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Kami sedang offline', subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else {
          console.log(err)
          // this.$router.push({ name: 'server-error', props: { statusCode: err.code, message: 'Halaman Rusak. Coba lagi nanti', subMessage: 'Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        }
      }
    },
    async getShop () {
      this.isLoading.shop = true
      try {
        var response = await axios.get(axConfig.shopUrl + this.productDetail.store_domain, {
          params: {
            with_product: false
          }
        })

        this.shopDetail = response.data.data
        this.isError.shop = false
      } catch (err) {
        this.isError.shop = true
        if (err.response && err.response.status === 404) {
          console.log('not-found')
          this.isError.shopMsg = 'Shop not found!'
        } else if (err.response) {
          console.log('a')
          this.isError.shopMsg = err.response.data.message
          // this.$router.push({ name: 'server-error', props: { statusCode: err.response.status, message: err.response.data.message, subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else if (err.code === 'ERR_NETWORK') {
          console.log('b')
          this.isError.shopMsg = 'Kami sedang offline.'
          // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Kami sedang offline', subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else {
          console.log(err)
          this.isError.shopMsg = 'Halaman rusak!'
          // this.$router.push({ name: 'server-error', props: { statusCode: err.code, message: 'Halaman Rusak. Coba lagi nanti', subMessage: 'Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        }
      }

      this.isLoading.shop = false
    },
    async getShopProduct () {
      this.isLoading.shopProduct = true
      try {
        const response = await axios.get(axConfig.shopUrl + this.productDetail.store_domain + '/products', {
          params: {
            page: 1,
            per_page: 5
          }
        })

        this.shopProduct = response.data.data
        this.isError.sProduct = false
      } catch (err) {
        this.isError.sProduct = true
        this.shopProduct = []
      }

      this.isLoading.shopProduct = false
    },
    async getSimilarProduct () {
      this.isLoading.similar = true
      try {
        const response = await axios.get(axConfig.productUrl + 'similar/' + this.productDetail.uuid, {
          params: {
            page: 1,
            per_page: 60
          }
        })

        this.isError.similar = false
        this.productSimilar = response.data.data
      } catch (err) {
        this.isError.similar = true
        this.productSimilar = []
      }

      this.isLoading.similar = false
    },
    showShop () {
      this.$router.push({ name: 'shop', params: { domain: this.productDetail.store_domain } })
    },
    showProduct (source, index) {
      const prd = source === 'shop' ? this.shopProduct[index] : this.productSimilar[index]

      // push routes then reload the page
      this.$router.push({ name: 'product', params: { slug: stringHelper.createSlug(prd.name) }, query: { pid: prd.uuid } }).then(() => {
        window.location.reload()
      })
    },
    toggleAddCart (tggl = null) {
      this.showAddCartM = tggl !== null ? tggl : !this.showAddCartM
      this.toggleAddCartClass(this.showAddCartM)
    },
    toggleAddCartClass (tggl = false) {
      if (tggl) {
        this.$refs['add-to-cart-mobile'].classList.add('translate-y-0')
        this.$refs['add-to-cart-mobile'].classList.remove('translate-y-full')
      } else {
        this.$refs['add-to-cart-mobile'].classList.add('translate-y-full')
        this.$refs['add-to-cart-mobile'].classList.remove('translate-y-0')
      }
    },
    closeAddCartM (el) {
      if (!(el.target.id === 'add-to-cart-mobile-toggle') && !(el.target.id === 'add-to-cart-mobile-close')) {
        const filterDOM = document.getElementById('add-to-cart-mobile')
        if (!filterDOM.contains(el.target.parentNode)) { // Check if filterDOM not contains target parentNode
          if (el.target.id !== 'add-to-cart-mobile-close') {
            this.toggleAddCart(false)
          }
        }
      }
    },
    changeQty (action) {
      if (action === 'increase') {
        this.toAddToCart.qty = parseInt(this.toAddToCart.qty) + 1
      } else if (action === 'decrease') {
        this.toAddToCart.qty = parseInt(this.toAddToCart.qty) - 1
      }
    },
    calcSubTotal () {
      this.toAddToCart.subtotal = Math.round(parseFloat(this.productDetail.price_net) * parseInt(this.toAddToCart.qty) * 100) / 100
    },
    async addToCart () {
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

      const response = await this.addCart({ uuid: this.toAddToCart.uuid, note: this.toAddToCart.note, qty: this.toAddToCart.qty })
      Swal.close()
      this.toggleAddCart(false)

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
      } else {
        this.toAddToCart.qty = this.productDetail.minimal_purchase
        this.toAddToCart.note = null
        this.$root.$emit('showcart', true)
      }
    }
  },
  watch: {
    'toAddToCart.qty': function (newValue) {
      this.calcSubTotal()
    }
  },
  filters: {
    shortTitle: function (value) {
      return stringHelper.shortenStr(value, 15)
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
    },
    datef: function (value) {
      const inDate = new Date(value)
      const dYear = inDate.getFullYear()
      const dMonth = inDate.getMonth()
      const dDay = inDate.getDay()

      return (dDay < 10 ? '0' + dDay : dDay) + '-' + (dMonth < 10 ? '0' + dMonth : dMonth) + '-' + dYear
    }
  },
  beforeMount () {
    this.getData()
    document.addEventListener('click', this.closeAddCartM)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeAddCartM)
  }
}
</script>
