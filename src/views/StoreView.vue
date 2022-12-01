<template>
  <div class="pt-12 pb-5 sm:pt-16">
    <section class="flex justify-start items-center gap-2 py-2 px-1 w-full rounded border-b-1 border-gray-300/50 sm:px-2 sm:border-1 lg:py-4 lg:px-2">
      <img src="@/assets/img/toko/toko_2.jpg" alt="brand logo image" class="max-w-2xl max-h-24 border-1 border-gray-100 rounded">
      <div class="flex flex-col mx-2">
        <h2 class="text-lg font-bold">Toko Lorem ipsum</h2>
        <h5 class="text-sm font-light">Lorem, Kota Ipsum, Dolor sit (5xxxx).</h5>
        <div class="flex gap-1 mt-1">
          <button class="btn btn-base btn-outline-green rounded max-w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 fill-current">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            Whatsapp
          </button>
          <button class="btn btn-base btn-outline-gray rounded max-w-fit items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/>
            </svg>
          </button>
          <button class="btn btn-base btn-outline-gray rounded max-w-fit items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 fill-current">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
    <nav class="tab-nav bg-white mb-2">
      <button class="tab-nav-item active">
        <i class="fa-solid fa-box"></i>
        Product
      </button>
    </nav>
    <section class="flex flex-row flex-nowrap gap-5 px-2 sm:px-5">
      <div id="filter" class="hidden h-full md:flex md:flex-col md:gap-2 md:w-3/12">
        <h3 class="font-medium text-lg">Filter</h3>
        <div class="card w-full max-h-screen shadow-md border border-gray-200 flex flex-col py-2 px-3 transition-all duration-200 ease-in-out divide-y-2">
          <div id="kategori-section" class="accordion">
            <input type="checkbox" name="" id="checkbox-kategori" class="accordion-checkbox" checked>
            <label for="checkbox-kategori" class="accordion-label relative">
              Kategori
              <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
            </label>
            <ul class="accordion-content">
              <li class="flex flex-row gap-2">
                <input type="checkbox" name="" id="filter-kategori-1">
                <label for="filter-kategori-1">Kategori 1</label>
              </li>
              <li class="flex flex-row gap-2">
                <input type="checkbox" name="" id="filter-kategori-2">
                <label for="filter-kategori-2">Kategori 2</label>
              </li>
              <li class="flex flex-row gap-2">
                <input type="checkbox" name="" id="filter-kategori-3">
                <label for="filter-kategori-3">Kategori 3</label>
              </li>
            </ul>
          </div>
          <div id="kondisi-section" class="accordion">
            <input type="checkbox" name="" id="checkbox-kondisi" class="accordion-checkbox" checked>
            <label for="checkbox-kondisi" class="accordion-label">
              Kondisi
              <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
            </label>
            <ul class="accordion-content">
              <li class="flex flex-row gap-2">
                <input type="checkbox" name="" id="filter-kondisi-1">
                <label for="filter-kondisi-1">kondisi 1</label>
              </li>
              <li class="flex flex-row gap-2">
                <input type="checkbox" name="" id="filter-kondisi-2">
                <label for="filter-kondisi-2">kondisi 2</label>
              </li>
              <li class="flex flex-row gap-2">
                <input type="checkbox" name="" id="filter-kondisi-3">
                <label for="filter-kondisi-3">kondisi 3</label>
              </li>
            </ul>
          </div>
          <div id="harga-section" class="accordion">
            <input type="checkbox" name="" id="checkbox-harga" class="accordion-checkbox" checked>
            <label for="checkbox-harga" class="accordion-label">
              Harga
              <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
            </label>
            <div class="accordion-content">
              <div class="input-group my-1 mb-2">
                <span class="input-group-text">Rp</span>
                <input type="text" name="" id="input-harga-min" class="form-control form-control-base" placeholder="Harga Terendah">
              </div>
              <div class="input-group mb-2">
                <span class="input-group-text">Rp</span>
                <input type="text" name="" id="input-harga-max" class="form-control form-control-base" placeholder="Harga Tertinggi">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-content w-full md:w-9/12">
        <ContentProduct
          ref="product"
          :rowdata="this.productsFilteredData.rowdata"
          :info="this.listInfo"
          :sort.sync="this.sort"
          :keyword="this.searchTerm"
          v-show="showContent === 'product' " />
      </div>
    </section>
  </div>
</template>

<script>
import ContentProduct from '@/components/exhibition/ContentProduct.vue'

export default {
  name: 'StoreView',
  components: {
    ContentProduct
  },
  data () {
    return {
      showContent: 'product',
      storeData: {
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
          }
        ]
      },
      productsRawData: [
        {
          id: 'PRD001',
          name: 'T1 Prod 01',
          price: 35000,
          disc_percent: 100,
          disc_price: 10000,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam?'
        },
        {
          id: 'PRD002',
          name: 'T1 Prod 02',
          image: 'src/assets/img/product/product_1.jpg',
          price: 45000,
          disc_percent: 100,
          disc_price: 10000,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam?'
        },
        {
          id: 'PRD003',
          name: 'T1 Prod 03',
          image: 'src/assets/img/product/product_1.jpg',
          price: 55000,
          disc_percent: 100,
          disc_price: 10000,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam?'
        }
      ],
      listInfo: {
        count_all_data: 30,
        count_show: 30,
        active_page: 1,
        row_start: 0,
        row_end: 30
      },
      sort: {
        by: 'name',
        order: 'asc'
      },
      searchTerm: ''
    }
  },
  props: {
    storeID: {
      type: [String, Number],
      default: () => { return null }
    }
  },
  methods: {
    shortenTitle (title) {
      let newTitle = title.trimLeft().substr(0, 35)

      if (title.trimLeft().length > 12) {
        newTitle = newTitle + '...'
      }
      return newTitle
    }
  },
  computed: {
    productsFilteredData: function () {
      if (this.storeData.products.length > 0) {
        var filteredData = this.storeData.products.filter((prd) => {
          /** Filter berdasar hasil filter option */
          return prd
        }).filter((prd) => {
          if (prd.name.toString().toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
            return prd
          }
          return false
        })

        if (this.sort.by !== null && this.sort.by !== '') {
          const sB = this.sort.by
          const sO = this.sort.order

          filteredData = filteredData.sort(function (a, b) {
            if (a[sB] > b[sB]) {
              return (sO === 'asc' ? 1 : -1)
            } else if (a[sB] < b[sB]) {
              return (sO === 'asc' ? -1 : 1)
            }
            return 0
          })
        }

        if (filteredData.length > 0) {
          var listData = {
            filtered: filteredData.length,
            rowdata: []
          }

          filteredData.slice(this.listInfo.row_start, this.listInfo.row_end).map((data, index) => {
            return listData.rowdata.push({
              identification: data.id,
              id: data.id,
              name: this.shortenTitle(data.name),
              price: data.price,
              disc_percent: data.disc_percent,
              disc_price: data.disc_price,
              image: data.image,
              desc: data.description
            })
          })

          return listData
        } else {
          return {
            filtered: filteredData.length,
            rowdata: []
          }
        }
      } else {
        return {
          filtered: 0,
          rowdata: []
        }
      }
    }
  }
}
</script>
