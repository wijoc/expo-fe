import axios from 'axios'
import * as axConfig from '@/config.js'

const namespaced = true

const state = {
  vxProductCategories: [],
  vxShopCategories: []
}

const mutations = {
  setProductCategories (state, payload) {
    state.vxProductCategories = payload
  },
  setShopCategories (state, payload) {
    state.vxShopCategories = payload
  }
}

const actions = {
  async getProductCategories ({ commit }, payload) {
    var categories = await axios.get(axConfig.productCategoryUrl, {
      params: {
        search: payload.search ? payload.search : null,
        prent: payload.parent_id ? payload.parent_id : null
      }
    })
      .then((response) => {
        return response.data.data
      })
      .catch(() => {
        return null
      })

    commit('setProductCategories', categories)
  },
  async getShopCategories ({ commit }, payload) {
    var categories = await axios.get(axConfig.shopCategoryUrl, {
      params: {
        search: payload.search ? payload.search : null
      }
    })
      .then((response) => {
        return response.data.data
      })
      .catch(() => {
        return null
      })

    commit('setShopCategories', categories)
  }
}

const getters = {}

export default {
  namespaced, state, mutations, actions, getters
}
