import axios from 'axios'
import * as axConfig from '@/config.js'

const namespaced = true

const state = {
  vxProductCategories: []
}

const mutations = {
  setProductCategories (state, payload) {
    state.vxProductCategories = payload
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
  }
}

const getters = {}

export default {
  namespaced, state, mutations, actions, getters
}
