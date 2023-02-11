import Vue from 'vue'
import Vuex from 'vuex'

import moduleShops from '@/stores/modules/moduleShops.js'
import moduleCategories from '@/stores/modules/moduleCategories.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shops: moduleShops,
    categories: moduleCategories
  }
})
