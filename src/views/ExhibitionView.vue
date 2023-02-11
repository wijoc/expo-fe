<template>
  <main class="bg-white/95 min-h-screen">
    <SearchBar
      :shopSearch="false"
      :search.sync="searchTerm" />
    <section class="container min-h-screen">
      <div id="content" class="flex flex-row flex-nowrap gap-5 pt-10 sm:pt-16">
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
        <div id="item" class="w-full md:w-9/12">
          <div class="tab-nav bg-white">
            <a :class="'tab-nav-item ' + (this.showContent === 'content-toko' ? 'active' : '')" @click="changeContent('content-toko')">
              <i class="fa-solid fa-shop"></i>
              Toko
            </a>
            <button :class="'tab-nav-item ' + (this.showContent === 'content-product' ? 'active' : '')" @click="changeContent('content-product')">
              <i class="fa-solid fa-box"></i>
              Product
            </button>
          </div>
          <div class="tab-content">
            <ContentShop
              ref="content-toko"
              :keyword="this.searchTerm"
              v-show="showContent === 'content-toko'" />

            <ContentProduct
              ref="content-product"
              :rowdata="this.productsFilteredData.rowdata"
              :info="this.listInfo"
              :sort.sync="this.sort"
              :keyword="this.searchTerm"
              v-show="showContent === 'content-product' " />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SearchBar from '@/components/exhibition/SearchBar.vue'
// import ProductView from '@/views/ProductView.vue'
import ContentShop from '@/components/exhibition/ContentShop.vue'
import ContentProduct from '@/components/exhibition/ContentProduct.vue'

export default {
  name: 'ExhibitionView',
  components: {
    SearchBar,
    // ProductView,
    ContentShop,
    ContentProduct
  },
  data () {
    return {
      showContent: this.exhibContent,
      productsRawData: [],
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
    exhibContent: {
      type: String,
      default: () => {
        return 'content-toko'
      }
    }
  },
  methods: {
    changeContent (target) {
      this.sort.by = null
      this.sort.order = null
      this.listInfo.active_page = 1

      this.showContent = target
    },
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
      if (this.productsRawData.length > 0) {
        var filteredData = this.productsRawData.filter((prd) => {
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
              img: data.img,
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
  },
  watch: {
    exhibContent: function (value) {
      this.changeContent(value)
    }
  }
}
</script>
