<template>
  <main class="container min-h-screen">
    <div id="content" class="relative flex flex-row gap-5 pt-12 flex-nowrap sm:pt-16">
      <!-- Moblie Filter -->
      <div id="filter-mobile" ref="filter-mobile" class="fixed w-full h-full inset-x-0 z-50 top-10 pt-10 px-2 backdrop-blur-[2px] bg-white/30 transform translate-y-full transition-all ease-in-out duration-200 sm:top-16 md:hidden">
        <div class="relative h-full px-2 pt-1.5 pb-28 bg-white border-2 border-gray-400 rounded-t-md">
          <span class="sticky top-0 z-10 flex items-center justify-between mb-2 bg-white flex-nowrap">
            <h5 class="text-lg font-medium">Filters</h5>
            <svg id="filter-mobile-close" ref="filter-mobile-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 text-gray-500 cursor-pointer fill-current" @click="toggleFilter(false)">
              <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
            </svg>
          </span>
          <div class="p-1 text-sm text-justify rounded-md bg-primary/30 border-1 border-darker-primary">
            <a class="font-bold">NOTE</a>:
            Data akan langsung berubah secara otomatis sesuai dengan perubahan filter yang dilakukan.
          </div>
          <div class="relative h-[95%] mt-3 pb-5 overflow-y-scroll overflow-x-hidden">
            <div v-if="this.showContent === 'content-shop'">
              <template v-if="this.isLoading.filterShop || this.isLoading.filterLocation">
                <div id="m-skeleton-shop-sort-filter" class="mb-1.5">
                  <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
                  <ul class="flex flex-col gap-1 mt-2">
                    <li class="flex flex-row items-center gap-2" v-for="i in 3" :key="i">
                      <input type="radio" class="input-radio" disabled>
                      <div class="w-40 h-5 rounded bg-gray-300/80 skeleton"></div>
                    </li>
                  </ul>
                </div>
                <div id="m-skeleton-shop-category-filter" class="mb-1.5">
                  <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
                  <ul class="flex flex-col gap-1 mt-2">
                    <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
                      <input type="checkbox" class="input-checkbox" disabled>
                      <div class="w-[60%] h-5 rounded bg-gray-300/80 skeleton"></div>
                    </li>
                  </ul>
                </div>
                <div id="m-skeleton-shop-location-filter" class="mb-1.5">
                  <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
                  <ul class="flex flex-col gap-1 mt-2">
                    <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
                      <input type="checkbox" class="input-checkbox" disabled>
                      <div class="w-[60%] h-5 rounded bg-gray-300/80 skeleton"></div>
                    </li>
                  </ul>
                </div>
              </template>
              <template v-else>
                <div id="m-shop-sort" class="accordion">
                  <label for="ms-checkbox-sort" class="mb-2 accordion-label">
                    Urutkan
                  </label>
                  <ul class="flex flex-row flex-wrap gap-x-2 gap-y-4">
                    <li class="relative">
                      <input type="radio" class="radio-tag" name="ms-checkbox-sort" id="ms-sort-relevant" value="relevant" v-model="shopSort.selected">
                      <label for="ms-sort-relevant">Paling Sesuai</label>
                    </li>
                    <li class="relative">
                      <input type="radio" class="radio-tag" name="ms-checkbox-sort" id="ms-sort-name-asc" value="name-asc" v-model="shopSort.selected">
                      <label for="ms-sort-name-asc">Nama A->Z</label>
                    </li>
                    <li class="relative">
                      <input type="radio" class="radio-tag" name="ms-checkbox-sort" id="ms-sort-name-desc" value="name-desc" v-model="shopSort.selected">
                      <label for="ms-sort-name-desc">Nama Z->A</label>
                    </li>
                  </ul>
                </div>
                <div id="m-shop-category-filter" class="accordion">
                  <input type="checkbox" name="" id="ms-checkbox-category" class="accordion-checkbox" checked>
                  <label for="ms-checkbox-category" class="relative accordion-label">
                    Kategori
                    <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
                  </label>
                  <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxShopCtgrs.count_data <= 0">
                    <a class="font-bold">WARNING</a>:
                    Filter kategori tidak tersedia!
                    Jika masalah berlanjut mohon hubungi kami
                    <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
                  </div>
                  <ul class="accordion-content" v-else>
                    <li class="flex flex-row items-center gap-2" v-for="(fCategory, i) in this.vxShopCtgrs.data" :key="i">
                      <input type="checkbox" class="input-checkbox" :id="'ms-filter-category-' + fCategory.id" :value="fCategory.id" v-model="shopFilter.category">
                      <label :for="'ms-filter-category-' + fCategory.id">{{ fCategory.name }}</label>
                    </li>
                  </ul>
                </div>
                <div id="m-shop-location-filter" class="relative accordion">
                  <!-- <input type="checkbox" name="" id="checkbox-shop-location" class="accordion-checkbox" checked> -->
                  <label for="checkbox-shop-location" class="relative accordion-label">
                    Lokasi
                    <a ref="filter-shop-location-button" class="mt-1 text-xs font-normal cursor-pointer text-secondary md:text-sm" @click="toggleLocFilter('mobile')" v-if="this.vxProvinces.count_data > 0 && this.vxProvinces.count_data > 0">
                      Lihat Semua
                    </a>
                    <a ref="filter-shop-location-button" class="mt-1 text-xs font-normal text-gray-400 cursor-not-allowed md:text-sm" v-else>
                      Lihat Semua
                    </a>
                  </label>
                  <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxProvinces.count_data <= 0 && this.vxProvinces.count_data <= 0">
                    <a class="font-bold">WARNING</a>:
                    Filter lokasi tidak tersedia!
                    Jika masalah berlanjut mohon hubungi kami
                    <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
                  </div>
                  <ul class="px-2" v-else>
                    <li class="flex flex-row items-center gap-2" v-for="(fMC, i) in this.metroCities" :key="i">
                      <input type="checkbox" class="input-checkbox" :id="'m-filter-shop-location-' + fMC.id" :value="fMC.id" v-if="fMC.special" @change="setLocationFilter('shop', fMC.id, $event)">
                      <input type="checkbox" class="input-checkbox" :id="'m-filter-shop-location-' + fMC.id" :value="fMC.id" v-model="shopFilter.city" v-else>
                      <label :for="'m-filter-shop-location-' + fMC.id">{{ fMC.city }}</label>
                    </li>
                  </ul>
                </div>
              </template>
            </div>
            <div v-if="this.showContent === 'content-product'">
              <div id="m-product-sort" class="accordion">
                <label for="ms-checkbox-sort" class="mb-2 accordion-label">
                  Urutkan
                </label>
                <ul class="flex flex-row flex-wrap gap-x-2 gap-y-4">
                  <li class="relative">
                    <input type="radio" class="radio-tag" name="mp-checkbox-sort" id="mp-sort-relevant" value="relevant" v-model="productSort.selected">
                    <label for="mp-sort-relevant">Paling Sesuai</label>
                  </li>
                  <li class="relative">
                    <input type="radio" class="radio-tag" name="mp-checkbox-sort" id="mp-sort-name-asc" value="name-asc" v-model="productSort.selected">
                    <label for="mp-sort-name-asc">Nama A->Z</label>
                  </li>
                  <li class="relative">
                    <input type="radio" class="radio-tag" name="mp-checkbox-sort" id="mp-sort-name-desc" value="name-desc" v-model="productSort.selected">
                    <label for="mp-sort-name-desc">Nama Z->A</label>
                  </li>
                  <li class="relative">
                    <input type="radio" class="radio-tag" name="mp-checkbox-sort" id="mp-sort-price-asc" value="price-asc" v-model="productSort.selected">
                    <label for="mp-sort-price-asc">Harga Terendah</label>
                  </li>
                  <li class="relative">
                    <input type="radio" class="radio-tag" name="mp-checkbox-sort" id="mp-sort-price-desc" value="price-desc" v-model="productSort.selected">
                    <label for="mp-sort-price-desc">Harga Tertinggi</label>
                  </li>
                </ul>
              </div>
              <div id="m-product-category-filter" ref="category-filter" class="accordion">
                <input type="checkbox" id="mp-checkbox-category" class="accordion-checkbox" checked>
                <label for="mp-checkbox-category" class="relative accordion-label">
                  Kategori
                  <i class="absolute fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out"></i>
                </label>
                <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxProductCtgrs.count_data <= 0">
                  <a class="font-bold">WARNING</a>:
                  Filter kategori tidak tersedia!
                  Jika masalah berlanjut mohon hubungi kami
                  <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
                </div>
                <ul class="accordion-content" v-else>
                  <li v-for="(fCategory, i) in this.vxProductCtgrs.data" :key="i">
                    <div class="flex flex-row items-center gap-3">
                      <input type="checkbox" class="input-checkbox" :id="'mp-filter-category-' + fCategory.id" :value="fCategory.id" v-model="productFilter.category" @change="setProductFilter('main', i)">
                      <label :for="'mp-filter-category-' + fCategory.id">{{ fCategory.name }}</label>
                    </div>
                    <ul class="pl-6" v-if="fCategory.sub_category.length > 0">
                      <li class="flex flex-row items-center gap-3" v-for="(subCategory, j) in fCategory.sub_category" :key="j">
                        <input type="checkbox" class="input-checkbox" :id="'mp-filter-sub-category-' + subCategory.id" :value="subCategory.id" v-model="productFilter.category" @change="setProductFilter('sub', i, j)">
                        <label :for="'mp-filter-sub-category-' + subCategory.id">{{ subCategory.name }}</label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div id="m-product-condition-filter" class="accordion">
                <input type="checkbox" name="" id="mp-checkbox-filter-condition" class="accordion-checkbox" checked>
                <label for="mp-checkbox-filter-condition" class="accordion-label">
                  Kondisi
                  <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
                </label>
                <ul class="accordion-content">
                  <li class="flex flex-row items-center gap-3">
                    <input type="radio" class="input-radio"  name="" id="mp-filter-condition-new" value="new" v-model="productFilter.condition">
                    <label for="mp-filter-condition-new">Baru</label>
                  </li>
                  <li class="flex flex-row items-center gap-3">
                    <input type="radio" class="input-radio"  name="" id="mp-filter-condition-secondhand" value="secondhand" v-model="productFilter.condition">
                    <label for="mp-filter-condition-secondhand">Bekas</label>
                  </li>
                </ul>
              </div>
              <div id="m-product-price-filter" class="accordion">
                <input type="checkbox" name="" id="mp-checkbox-filter-price" class="accordion-checkbox" checked>
                <label for="mp-checkbox-filter-price" class="accordion-label">
                  Harga
                  <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
                </label>
                <div class="accordion-content">
                  <div class="my-1 mb-2 input-group">
                    <span class="input-group-text">Rp</span>
                    <input type="text" name="" id="mp-input-harga-min" class="form-control form-control-base" placeholder="Harga Terendah" v-model="productFilter.minPrice">
                  </div>
                  <div class="mb-2 input-group">
                    <span class="input-group-text">Rp</span>
                    <input type="text" name="" id="mp-input-harga-max" class="form-control form-control-base" placeholder="Harga Tertinggi" v-model="productFilter.maxPrice">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Mobile Location Filter -->
          <div id="filter-location-mobile" ref="filter-location-mobile" class="absolute top-0 left-0 z-20 w-full h-[95%] px-2 pb-5 overflow-y-scroll overflow-x-hidden bg-white rounded-md transform translate-y-full transition-all ease-in-out duration-200">
            <span class="sticky top-0 z-10 flex items-center justify-between pt-2 mb-2 bg-white flex-nowrap">
              <svg id="filter-location-close" ref="filter-location-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6 text-gray-500 cursor-pointer fill-current" @click="toggleLocFilter('mobile', false)">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
              </svg>
              <h5 class="text-lg font-medium text-center">Location</h5>
            </span>
            <div class="w-full flex flex-nowrap justify-center items-center gap-0 rounded p-0.5 overflow-hidden relative">
              <input type="text" class="w-full p-0.5 text bg-white border-1 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary rounded" placeholder="Cari Lokasi ..." v-model="searchLoc">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="max-w-4 max-h-[0.85rem] text-gray-400 fill-current absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
              </svg>
            </div>
            <ul>
              <li v-for="(value, alphakey, i) in this.filterProvinces" :key="'dp' + i">
                <div class="flex flex-row items-center gap-2" v-for="(fProv, p) in value" :key="'p' + p">
                  <input type="checkbox" class="input-checkbox-base" :id="'m-filter-prov-location-' + fProv.id" :value="fProv.id" v-model="shopFilter.province" v-if="showContent === 'content-shop'">
                  <input type="checkbox" class="input-checkbox-base" :id="'m-filter-prov-location-' + fProv.id" :value="fProv.id" v-model="productFilter.province" v-else>
                  <label :for="'m-filter-prov-location-' + fProv.id">{{ fProv.name }}</label>
                </div>
              </li>
              <li v-for="(value, alphakey, i) in this.filterCities" :key="i">
                <div class="flex flex-row items-center gap-2" v-for="(fCity, c) in value" :key="c">
                  <input type="checkbox" class="input-checkbox-base" :id="'m-filter-city-location-' + fCity.id" :value="fCity.id" v-model="shopFilter.city" v-if="showContent === 'content-shop'">
                  <input type="checkbox" class="input-checkbox-base" :id="'m-filter-city-location-' + fCity.id" :value="fCity.id" v-model="productFilter.city" v-else>
                  <label :for="'m-filter-city-location-' + fCity.id">{{ fCity.city }}</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Desktop Filter -->
      <div id="filter" class="hidden h-fit bg-white md:flex md:flex-col md:gap-2 md:w-[33.3%] lg:w-[30%] xl:w-[21%]">
        <a class="text-lg font-medium">Filters</a>
        <div class="flex flex-col w-full h-full px-2 py-2 border-gray-200 divide-y-2 shadow-md card border-1">
          <div v-if="this.showContent === 'content-shop'">
            <div id="skeleton-shop-category-filter" class="max-h-screen" v-if="this.isLoading.filterShop">
              <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
              <ul class="flex flex-col gap-1 mt-2">
                <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
                  <input type="checkbox" class="input-checkbox md:input-checkbox-base" disabled>
                  <div class="w-32 h-5 rounded bg-gray-300/80 skeleton"></div>
                </li>
              </ul>
            </div>
            <div id="shop-category-filter" class="accordion" v-else>
              <input type="checkbox" name="" id="checkbox-kategori" class="accordion-checkbox" checked>
              <label for="checkbox-kategori" class="relative accordion-label">
                Kategori
                <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
              </label>
              <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxShopCtgrs.count_data <= 0">
                <a class="font-bold">WARNING</a>:
                Filter kategori tidak tersedia!
                Jika masalah berlanjut mohon hubungi kami
                <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
              </div>
              <ul class="accordion-content" v-else>
                <li class="flex flex-row items-center gap-2" v-for="(fCategory, i) in this.vxShopCtgrs.data" :key="i">
                  <input type="checkbox" class="input-checkbox md:input-checkbox-base" :id="'filter-shop-category-' + fCategory.id" :value="fCategory.id" v-model="shopFilter.category">
                  <label :for="'filter-shop-category-' + fCategory.id">{{ fCategory.name }}</label>
                </li>
              </ul>
            </div>
            <div id="skeleton-shop-location-filter" class="max-h-screen" v-if="this.isLoading.filterLocation">
              <div class="w-24 h-6 rounded bg-gray-300/80 skeleton"></div>
              <ul class="flex flex-col gap-1 mt-2">
                <li class="flex flex-row items-center gap-2" v-for="i in 5" :key="i">
                  <input type="checkbox" class="input-checkbox md:input-checkbox-base" disabled>
                  <div class="w-32 h-5 rounded bg-gray-300/80 skeleton"></div>
                </li>
              </ul>
            </div>
            <div id="shop-location-filter" class="relative accordion" v-else>
              <input type="checkbox" name="" id="checkbox-shop-location" class="accordion-checkbox" checked>
              <label for="checkbox-shop-location" class="relative accordion-label">
                Lokasi
                <i class="fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out absolute"></i>
              </label>
              <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxProvinces.count_data <= 0 && this.vxProvinces.count_data <= 0">
                <a class="font-bold">WARNING</a>:
                Filter lokasi tidak tersedia!
                Jika masalah berlanjut mohon hubungi kami
                <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
              </div>
              <ul class="accordion-content" v-else>
                <li class="flex flex-row items-center gap-2" v-for="(fMC, i) in this.metroCities" :key="i">
                  <input type="checkbox" class="input-checkbox md:input-checkbox-base" :id="'filter-shop-location-m' + i" :value="fMC.id" v-if="fMC.special" @change="setLocationFilter('shop', fMC.id, $event)">
                  <input type="checkbox" class="input-checkbox md:input-checkbox-base" :id="'filter-shop-location-m' + i" :value="fMC.id" v-model="shopFilter.city" v-else>
                  <label :for="'filter-shop-location-m' + i">{{ fMC.city }}</label>
                </li>
                <li id="filter-shop-location-button" ref="filter-shop-location-button" class="right-0 mt-1 font-normal text-right cursor-pointer text-secondary hover:underline md:text-md" @click="toggleLocFilter('desktop', true)">
                  Lihat Selengkapnya >
                </li>
              </ul>
            </div>
          </div>
          <div v-if="this.showContent === 'content-product'">
            <div id="category-filter" ref="category-filter" class="accordion">
              <input type="checkbox" id="checkbox-category" class="accordion-checkbox" checked>
              <label for="checkbox-category" class="relative accordion-label">
                Kategori
                <i class="absolute fa-solid fa-caret-right right-0 transition duration-[250ms] ease-in-out"></i>
              </label>
              <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxProductCtgrs.count_data <= 0">
                <a class="font-bold">WARNING</a>:
                Filter kategori tidak tersedia!
                Jika masalah berlanjut mohon hubungi kami
                <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
              </div>
              <ul class="accordion-content" v-else>
                <li v-for="(fCategory, i) in this.vxProductCtgrs.data" :key="i">
                  <div class="flex flex-row items-center gap-2">
                    <input type="checkbox" class="input-checkbox md:input-checkbox-base" :id="'filter-category-' + fCategory.id" :value="fCategory.id" v-model="productFilter.category" @change="setProductFilter('main', i)">
                    <label :for="'filter-category-' + fCategory.id">{{ fCategory.name }}</label>
                  </div>
                  <ul class="pl-6" v-if="fCategory.sub_category.length > 0">
                    <li class="flex flex-row items-center gap-2" v-for="(subCategory, j) in fCategory.sub_category" :key="j">
                      <input type="checkbox" class="input-checkbox md:input-checkbox-base" :id="'filter-sub-category-' + subCategory.id" :value="subCategory.id" v-model="productFilter.category" @change="setProductFilter('sub', i, j)">
                      <label :for="'filter-sub-category-' + subCategory.id">{{ subCategory.name }}</label>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div id="condition-section" class="accordion">
              <input type="checkbox" name="" id="checkbox-filter-condition" class="accordion-checkbox" checked>
              <label for="checkbox-filter-condition" class="accordion-label">
                Kondisi
                <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
              </label>
              <ul class="accordion-content">
                <li class="flex flex-row items-center gap-3">
                  <input type="radio" class="input-radio"  name="" id="filter-condition-new" value="new" v-model="productFilter.condition">
                  <label for="filter-condition-new">Baru</label>
                </li>
                <li class="flex flex-row items-center gap-3">
                  <input type="radio" class="input-radio"  name="" id="filter-condition-secondhand" value="secondhand" v-model="productFilter.condition">
                  <label for="filter-condition-secondhand">Bekas</label>
                </li>
              </ul>
            </div>
            <div id="price-section" class="accordion">
              <input type="checkbox" name="" id="checkbox-filter-price" class="accordion-checkbox" checked>
              <label for="checkbox-filter-price" class="accordion-label">
                Harga
                <i class="fa-solid fa-caret-right transition duration-[250ms] ease-in-out"></i>
              </label>
              <div class="accordion-content">
                <div class="my-1 mb-2 input-group">
                  <span class="input-group-text">Rp</span>
                  <input type="text" name="" id="input-harga-min" class="form-control w-[90%] px-2 py-1.5 text-base leading-3" placeholder="Harga Terendah" v-model="productFilter.minPrice">
                </div>
                <div class="mb-2 input-group">
                  <span class="input-group-text">Rp</span>
                  <input type="text" name="" id="input-harga-max" class="form-control w-[90%] px-2 py-1.5 text-base leading-3" placeholder="Harga Tertinggi" v-model="productFilter.maxPrice">
                </div>
              </div>
            </div>
          </div>
          <div v-show="this.showLocationFilter" id="location-filter" ref="location-filter" class="hidden bg-white p-2 border-2 border-gray-400 rounded sm:fixed sm:flex sm:flex-col sm:bottom-[10%] sm:left-7 sm:h-[40%] sm:w-[65%] lg:left-20 lg:w-7/12">
            <div class="p-1 text-sm text-justify rounded-md bg-secondary/30 border-1 border-darker-secondary" v-if="this.vxProvinces.count_data <= 0 && this.vxProvinces.count_data <= 0">
              <a class="font-bold">WARNING</a>:
              Filter lokasi tidak tersedia!
              Jika masalah berlanjut mohon hubungi kami
              <router-link to="/" target="_blank" class="font-medium underline">disini</router-link>
            </div>
            <template v-else>
              <div class="flex items-center justify-between pb-2 border-gray-300 flex-nowrap border-b-1">
                <h5 class="w-2/12">Lokasi</h5>
                <div class="w-9/12 flex flex-nowrap justify-center items-center gap-0 rounded p-0.5 overflow-hidden relative">
                  <input type="text" class="w-full p-0.5 text-sm bg-white border-1 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 rounded" placeholder="Cari Lokasi ..." v-model="searchLoc">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="max-w-4 max-h-[0.85rem] text-gray-400 fill-current absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer">
                    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
                  </svg>
                </div>
                <span class="flex items-center justify-end w-1/12">
                  <svg ref="close-location-filter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 text-gray-400 cursor-pointer fill-current" @click="toggleLocFilter('desktop', false)">
                    <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                  </svg>
                </span>
              </div>
              <div class="relative max-h-[85%]">
                <div class="max-h-full overflow-y-scroll">
                  <h5 class="w-full font-medium capitalize">Provinsi</h5>
                  <div v-for="(value, alphakey, i) in this.filterProvinces" :key="'dp' + i">
                    <div class="grid grid-cols-2">
                      <div class="flex flex-row items-center gap-2" v-for="(fProv, p) in value" :key="'p' + p">
                        <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-prov-location-' + fProv.id" :value="fProv.id" v-model="shopFilter.province" v-if="showContent === 'content-shop'">
                        <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-prov-location-' + fProv.id" :value="fProv.id" v-model="productFilter.province" v-else>
                        <label :for="'filter-prov-location-' + fProv.id">{{ fProv.name }}</label>
                      </div>
                    </div>
                  </div>
                  <div v-for="(value, key, i) in this.filterCities" :key="i">
                    <h5 class="w-full font-medium uppercase">{{ key }}</h5>
                    <div class="grid grid-cols-2">
                      <div class="flex flex-row items-center col-span-1 gap-2" v-for="(fCity, c) in value" :key="c">
                        <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-shop-city-' + fCity.id" :value="fCity.id" v-model="shopFilter.city" v-if="showContent === 'content-shop'">
                        <input type="checkbox" class="input-checkbox-sm lg:input-checkbox-base" :id="'filter-shop-city-' + fCity.id" :value="fCity.id" v-model="productFilter.city" v-else>
                        <label :for="'filter-shop-city-' + fCity.id">{{ fCity.city }}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div id="item" class="w-full md:w-[66.6%] lg:w-[70%] xl:w-[79%]">
        <div class="bg-white tab-nav">
          <a :class="'tab-nav-item ' + (this.showContent === 'content-shop' ? 'active' : '')" @click="changeContent('content-shop')">
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
            ref="content-shop"
            :keyword="this.$route.query.s"
            :sortData.sync="shopSort"
            :filterData="this.shopFilter"
            :filterLoading="this.isLoading.filterShop"
            @toggleFilter="toggleFilter($event)"
            v-show="showContent === 'content-shop'" />

          <ContentProduct
            ref="content-product"
            :keyword="this.$route.query.s"
            :sortData.sync="productSort"
            :filterData.sync="productFilter"
            :filterLoading="this.isLoading.filterProduct"
            @toggleFilter="toggleFilter($event)"
            v-show="showContent === 'content-product'" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ContentShop from '@/components/exhibition/ContentShop.vue'
import ContentProduct from '@/components/exhibition/ContentProduct.vue'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'ExhibitionView',
  components: {
    ContentShop,
    ContentProduct
  },
  data () {
    return {
      showContent: 'content-shop',
      searchLoc: '',
      isLoading: {
        filterShop: false,
        filterProductCtgr: false,
        filterLocation: false
      },
      productFilter: {
        minPrice: null,
        maxPrice: null,
        condition: null,
        category: [],
        city: [],
        province: []
      },
      productSort: {
        by: '',
        order: '',
        selected: 'relevant'
      },
      shopFilter: {
        category: [],
        city: [],
        province: []
      },
      shopSort: {
        by: '',
        order: '',
        selected: 'relevant'
      },
      showMobileFilter: false,
      showMLocationFilter: false,
      showLocationFilter: false
    }
  },
  props: {},
  methods: {
    ...mapActions({
      getProductCtgrs: 'categories/getProductCategories',
      getShopCtgrs: 'categories/getShopCategories',
      getProvinces: 'regions/getProvinces',
      getCities: 'regions/getCities'
    }),
    async getFilterData () {
      await this.getShopCtgrs({ search: false, parent_id: false })
      await this.getProductCtgrs({ search: false })
      await this.getProvinces({ search: false })
      await this.getCities({ search: false, province: false, order: 'asc' })

      if (this.verrProductCtgrs.error || this.verrShopCtgrs.error || this.verrCities.error || this.verrProvinces.error) {
        if (this.verrProductCtgrs.code === 'ERR_NETWORK' || this.verrShopCtgrs.code === 'ERR_NETWORK' || this.verrCities.code === 'ERR_NETWORK' || this.verrProvinces.code === 'ERR_NETWORK') {
          console.log('a')
          // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Kami sedang offline', subMessage: 'Silahkan coba kembali setelah beberapa saat.</br>Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        } else {
          console.log('a')
          // this.$router.push({ name: 'server-error', props: { statusCode: 500, message: 'Halaman Rusak. Coba lagi nanti', subMessage: 'Hubungi kontak dibawah jika halaman masih tidak bisa diakses.' } })
        }
      } else {
        this.isLoading.filterLocation = false
        this.isLoading.filterShop = false
        this.isLoading.filterProduct = false
      }
    },
    toggleFilter (toggle = null) {
      if (toggle || !this.showMobileFilter) {
        this.$refs['filter-mobile'].classList.add('translate-y-0')
        this.$refs['filter-mobile'].classList.remove('translate-y-full')
      } else {
        this.$refs['filter-mobile'].classList.add('translate-y-full')
        this.$refs['filter-mobile'].classList.remove('translate-y-0')
      }

      this.showMobileFilter = toggle ?? !this.showMobileFilter
    },
    toggleLocFilter (mode = 'mobile', toggle) {
      if (mode === 'mobile') {
        if (toggle || !this.showMLocationFilter) {
          this.$refs['filter-location-mobile'].classList.add('translate-y-0')
          this.$refs['filter-location-mobile'].classList.remove('translate-y-full')
        } else {
          this.$refs['filter-location-mobile'].classList.add('translate-y-full')
          this.$refs['filter-location-mobile'].classList.remove('translate-y-0')
        }

        this.showMLocationFilter = toggle ?? !this.showMLocationFilter
      } else {
        this.showLocationFilter = toggle ?? !this.showLocationFilter
      }
    },
    setProductFilter (status = 'main', mainIndex, subIndex) {
      let selected = null
      if (status === 'main') {
        selected = this.vxProductCtgrs[mainIndex]
      } else {
        selected = this.vxProductCtgrs[mainIndex].sub_category[subIndex]
      }

      if (this.productFilter.category.indexOf(selected.id) !== -1) { // If ID exists in selected filter
        if (selected.is_sub_category === false && selected.sub_category.length > 0) {
          selected.sub_category.forEach((sub) => {
            if (this.productFilter.category.indexOf(sub.id) < 0) {
              this.productFilter.category.push(sub.id) // Add all sub_category to selected filter
            }
          })
        }
      } else {
        if (selected.is_sub_category === false && selected.sub_category.length > 0) {
          selected.sub_category.forEach((sub) => {
            if (this.productFilter.category.indexOf(sub.id) !== -1) {
              this.productFilter.category.splice(this.productFilter.category.indexOf(sub.id), 1)
            }
          })
        } else {
          if (this.productFilter.category.indexOf(selected.parent_id) !== -1) {
            // Remove parent_id from selected filter
            this.productFilter.category.splice(this.productFilter.category.indexOf(selected.parent_id), 1)
          }
        }
      }
    },
    setLocationFilter (content = 'shop', slctd, event) {
      if (content === 'shop') {
        if (event.target.checked) {
          this.shopFilter.city = this.shopFilter.city.concat(slctd)
        } else {
          slctd.forEach((el) => {
            const i = this.shopFilter.city.indexOf(el)
            if (i !== -1) {
              this.shopFilter.city.splice(i, 1)
            }
          })
        }
      } else {
        this.productFilter.city = this.productFilter.city.concat(slctd)
      }
    },
    closeFilter (el) {
      if (!(el.target.id === 'location-filter') && !(el.target.id === 'close-location-filter')) {
        var filterDOM = document.getElementById('location-filter')

        if (!filterDOM.contains(el.target.parentNode)) {
          if (el.target.id !== 'filter-shop-location-button') {
            this.toggleLocFilter('desktop', false)
          }
        }
      }
    },
    changeContent (target) {
      this.showContent = target
    }
  },
  computed: {
    ...mapState('categories', ['vxProductCtgrs', 'vxShopCtgrs', 'verrProductCtgrs', 'verrShopCtgrs']),
    ...mapState('regions', ['vxProvinces']),
    ...mapState('regions', ['verrProvinces']),
    ...mapState('regions', ['vxCities']),
    ...mapState('regions', ['verrCities']),
    ...mapGetters({
      citiesAlphabet: 'regions/getterCitiesAlphabet',
      citiesMetro: 'regions/getterCitiesMetropolitan'
    }),
    filterProvinces: function () {
      if (this.vxProvinces && this.vxProvinces.count_data > 0) {
        var filteredProvinces = this.vxProvinces.data.filter((element) => {
          if (element.name.toString().toLowerCase().indexOf(this.searchLoc.toString().toLowerCase()) > -1) {
            return element
          }
          return false
        })
        var newProvinces = {}

        filteredProvinces.forEach((element) => {
          const firstLetter = element.name.substr(0, 1)
          if (newProvinces[firstLetter]) {
            newProvinces[firstLetter].push(element)
          } else {
            newProvinces[firstLetter] = []
            newProvinces[firstLetter].push(element)
          }
        })

        return newProvinces
      } else {
        return []
      }
    },
    filterCities: function () {
      if (this.citiesAlphabet && this.citiesAlphabet.length > 0) {
        return this.citiesAlphabet(this.searchLoc)
      } else {
        return []
      }
    },
    metroCities: function () {
      return this.citiesMetro()
    }
  },
  watch: {
    'shopSort.selected': function (newValue) {
      if (newValue === 'relevant') {
        this.shopSort.by = null
        this.shopSort.order = null
      } else {
        const s = newValue.split('-')
        this.shopSort.by = s[0]
        this.shopSort.order = s[1]
      }
    },
    'productSort.selected': function (newValue) {
      if (newValue === 'relevant') {
        this.productSort.by = null
        this.productSort.order = null
      } else {
        const s = newValue.split('-')
        this.productSort.by = s[0]
        this.productSort.order = s[1]
      }
    }
  },
  beforeMount () {
    this.isLoading.filterShop = true
    this.isLoading.filterProductCtgr = true
    this.isLoading.filterLocation = true
    this.getFilterData()

    document.addEventListener('click', this.closeFilter)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeFilter)
  }
}
</script>
