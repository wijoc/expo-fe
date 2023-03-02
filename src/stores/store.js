import Vue from 'vue'
import Vuex from 'vuex'

import moduleShops from '@/stores/modules/moduleShops.js'
import moduleProducts from '@/stores/modules/moduleProducts.js'
import moduleCategories from '@/stores/modules/moduleCategories.js'
import moduleRegion from '@/stores/modules/moduleRegion.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shops: moduleShops,
    products: moduleProducts,
    categories: moduleCategories,
    regions: moduleRegion
  }
})
