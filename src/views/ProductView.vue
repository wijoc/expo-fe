<template>
  <div class="bg-white/30 relative container min-h-screen flex flex-col pt-12 pb-20 z-0 sm:pt-16 md:gap-4">
    <div class="grid grid-flow-row grid-cols-12 content-start md:gap-4">
      <div class="col-span-12 h-fit bg-white sm:col-span-5 md:row-span-2 md:sticky md:top-0">
        <ul ref="carousel-preview" class="flex flex-row flex-nowrap gap-3 max-h-56 overflow-x-scroll overflow-y-hidden snap-mandatory snap-x sm:overflow-x-hidden">
          <li id="a" class="relative flex justify-center items-center snap-center min-w-full max-w-full max-h-56">
            <img src="@/assets/img/product/product_1.jpg" alt="Product Image" class="max-h-56 max-w-full">
            <span class="absolute bg-black/30 rounded text-center text-sm text-white font-medium left-1 bottom-1 px-2 py-1">1/8</span>
          </li>
          <li id="b" class="relative flex justify-center items-center snap-center min-w-full max-w-full max-h-56">
            <img src="@/assets/img/toko/toko_1.jpg" alt="Product Image" class="max-h-56 max-w-full">
            <span class="absolute bg-black/30 rounded text-center text-sm text-white font-medium left-1 bottom-1 px-2 py-1">2/8</span>
          </li>
          <li id="c" class="relative flex justify-center items-center snap-center min-w-full max-w-full max-h-56">
            <img src="@/assets/img/toko/toko_2.jpg" alt="Product Image" class="max-h-56 max-w-full">
            <span class="absolute bg-black/30 rounded text-center text-sm text-white font-medium left-1 bottom-1 px-2 py-1">2/8</span>
          </li>
        </ul>
        <div class="carousel hidden my-2 sm:relative sm:flex">
          <ul ref="carousel-item" class="carousel-item flex flex-row flex-nowrap gap-1 w-full overflow-x-auto overflow-y-hidden snap-mandatory snap-x">
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
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 -rotate-90 text-white fill-current">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
             </svg>
          </span>
          <span class="absolute px-0.5 py-2 rounded bg-black/50 self-center right-1 cursor-pointer" ref="btn-next" @click="scrollToNext()">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 rotate-90 text-white fill-current">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
             </svg>
          </span>
        </div>
      </div>
      <div ref="about" class="col-span-12 flex flex-col gap-2 px-2 py-3 sm:col-span-7 md:col-span-7 md:row-span-1">
        <h4 class="title-product">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h4>
        <p class="font-bold">Rp99.999</p>
        <table class="table-auto table-bordered-b w-full text-sm font-light">
          <tr class="p-5">
            <td class="w-[35%] py-1.5 font-medium">Kondisi</td>
            <td class="w-fit px-1">:</td>
            <td class="w-full">Baru</td>
          </tr>
          <tr>
            <td class="w-[35%] py-1.5 font-medium">Berat Satuan</td>
            <td class="w-fit px-1">:</td>
            <td class="w-full">1 Kg</td>
          </tr>
          <tr>
            <td class="w-[35%] py-1.5 font-medium">Min. Pembelian</td>
            <td class="w-fit px-1">:</td>
            <td class="w-full">1</td>
          </tr>
        </table>
        <span class="text-sm font-medium">Deskripsi : </span>
        <p class="text-sm font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis repellendus, alias
          dolorum magni nulla maiores dolorem architecto sapiente labore voluptate, commodi et repudiandae,
          laborum minus sit impedit debitis! Adipisci.
        </p>
      </div>
      <div class="col-span-12 fixed w-full pt-1.5 pb-2 px-1.5 left-0 bottom-0 bg-white z-50 md:relative md:col-span-7 md:row-span-1 md:rounded md:h-fit md:z-0">
        <div class="hidden md:flex md:flex-col md:w-full">
          <p class="text-md font-medium">Atur jumlah dan catatan</p>
        </div>
        <div class="flex flex-nowrap gap-1">
          <button class="btn btn-base btn-outline-gray w-fit h-fit rounded text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 fill-current">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </button>
          <button class="btn btn-base btn-outline-secondary w-[90%] h-fit rounded">
            Pre-Order
          </button>
          <button class="btn btn-base btn-secondary w-[90%] h-fit rounded">
            Keranjang
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-start items-start gap-2 w-full sm:rounded sm:shadow sm:border-1 sm:border-gray-100">
      <img src="@/assets/img/toko/toko_2.jpg" alt="brand logo image" class="max-w-2xl max-h-24 border-1 border-gray-100 rounded">
      <div class="flex flex-col items-start mx-2 mt-3">
        <h2 class="text-sm font-bold">Toko Lorem ipsum</h2>
        <h5 class="text-xs font-light">Lorem, Kota Ipsum, Dolor sit (5xxxx).</h5>
      </div>
    </div>
    <div class="py-3">
      <div class="flex flex-nowrap justify-between">
        <h4 class="text-md font-medium tracking-wide">Lainnya dari toko ini</h4>
        <h4 class="text-sm font-light tracking-wide text-secondary underline underline-offset-[3px]">
          Lihat semua
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="inline w-3 h-3 fill-current">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
          </svg>
        </h4>
      </div>
      <div class="relative flex flex-row gap-2 overflow-x-scroll pt-2 sm:grid sm:grid-flow-row sm:grid-cols-6 sm:overflow-x-hidden lg:grid-cols-7 xl:grid-cols-8">
        <div class="card shadow-lg flex flex-col justify-center min-w-[8rem] w-fit max-h-48 border border-gray-100 cursor-pointer hover:border-primary hover:-mt-1 transition duration-75 sm:col-span-1 sm:min-w-0" v-for="(prd, i) in this.storeDetail.products" :key='i'>
          <img src="@/assets/img/product/product_1.jpg" alt="" class="max-w-full max-h-36">
          <div class="flex flex-col gap-[0.125rem] py-2 px-1">
            <p class="title-product">
              {{ prd.name }}
            </p>
            <h5 class="font-bold text-normal text-left">
              <!-- {{ prd.salePrice }} -->
            </h5>
            <span class="flex flex-nowrap items-center gap-1">
              <span class="bg-green-300 rounded font-medium text-xs text-primary p-0.5">
                {{ prd.disc_percent }}
              </span>
              <p class="font-normal text-xs text-left line-through text-gray-400">
                {{ prd.price }}
              </p>
            </span>
          </div>
        </div>
        <div class="card shadow-lg flex flex-col justify-center items-center gap-3 min-w-[8rem] w-fit max-h-48 border border-gray-100 sm:col-span-1 sm:min-w-0 sm:w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-8 -rotate-90 fill-current">
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/>
          </svg>
          <span class="text-sm font-light">Lihat lainnya</span>
        </div>
      </div>
    </div>
    <div class="py-3">
      <div class="flex flex-nowrap justify-between">
        <h4 class="text-md font-medium tracking-wide">Product Serupa</h4>
      </div>
      <div class="relative grid grid-flow-row grid-cols-2 gap-2 pt-2 sm:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
        <div class="col-span-1 card shadow-lg flex flex-col justify-center w-full border border-gray-100 cursor-pointer hover:border-primary hover:-mt-1 transition duration-75" v-for="(prd, i) in this.storeDetail.products" :key='i'>
          <img src="@/assets/img/product/product_1.jpg" alt="" class="max-w-full max-h-36">
          <div class="flex flex-col gap-[0.125rem] py-2 px-1">
            <p class="title-product">
              {{ prd.name }}
            </p>
            <h5 class="font-bold text-normal text-left">
              <!-- {{ prd.salePrice }} -->
            </h5>
            <span class="flex flex-nowrap items-center gap-1">
              <span class="bg-green-300 rounded font-medium text-xs text-primary p-0.5">
                {{ prd.disc_percent }}
              </span>
              <p class="font-normal text-xs text-left line-through text-gray-400">
                {{ prd.price }}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductView',
  data () {
    return {
      productDetail: {
        id: 1,
        product_code: 'PRD001',
        store_id: 1,
        name: 'T1 Prod 01',
        image: 'src/assets/img/product/product_1.jpg',
        price: 35000,
        disc_percent: 100,
        disc_price: 10000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam?'
      },
      storeDetail: {
        id: 1,
        store_code: 'STR001',
        name: 'Toko 1',
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam?',
        image: 'src/assets/img/toko/toko_1.jpg',
        products: [
          {
            id: 1,
            product_code: 'PRD001',
            store_id: 1,
            name: 'T1 Prod 01',
            image: 'src/assets/img/product/product_1.jpg',
            price: 35000,
            disc_percent: 100,
            disc_price: 10000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam?'
          },
          {
            id: 2,
            product_code: 'PRD002',
            store_id: 1,
            name: 'T1 Prod 02',
            image: 'src/assets/img/product/product_1.jpg',
            price: 45000,
            disc_percent: 100,
            disc_price: 10000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam?'
          },
          {
            id: 3,
            product_code: 'PRD003',
            store_id: 1,
            name: 'T1 Prod 03',
            image: 'src/assets/img/product/product_1.jpg',
            price: 55000,
            disc_percent: 100,
            disc_price: 10000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam?'
          },
          {
            id: 4,
            product_code: 'PRD004',
            store_id: 1,
            name: 'T1 Prod 04',
            image: 'src/assets/img/product/product_1.jpg',
            price: 55000,
            disc_percent: 100,
            disc_price: 10000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam?'
          },
          {
            id: 5,
            product_code: 'PRD005',
            store_id: 1,
            name: 'T1 Prod 05',
            image: 'src/assets/img/product/product_1.jpg',
            price: 55000,
            disc_percent: 100,
            disc_price: 10000,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam?'
          }
        ]
      }
    }
  },
  props: {
    productID: {
      type: [String, Number],
      default: () => { return null }
    }
  },
  methods: {
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
    }
  }
}
</script>
