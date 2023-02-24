import Vue from 'vue'
import Vuex from 'vuex'

import moduleShops from '@/stores/modules/moduleShops.js'
import moduleCategories from '@/stores/modules/moduleCategories.js'
import moduleRegion from '@/stores/modules/moduleRegion.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shops: moduleShops,
    categories: moduleCategories,
    regions: moduleRegion
  }
})
