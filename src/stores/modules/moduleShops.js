import axios from 'axios'
import * as axConfig from '@/config.js'

const namespaced = true

const state = {
  vxSelectedShop: {
    id: null,
    domain: null,
    store_name: null,
    email: null,
    phone: null,
    whatsapp: null,
    description: null,
    full_address: null,
    district: null,
    city: null,
    city_ro_code: null,
    province: null,
    store_image_path: null,
    store_image_mime: null,
    registered_at: null,
    last_updated_at: null,
    products: []
  }
}

const mutations = {
  setSelectedShop (state, payload) {
    state.vxSelectedShop = payload
  }
}

const actions = {
  async selectShop ({ commit }, payload) {
    var selected = await axios.get(axConfig.shopUrl + payload.domain, {
      params: {
        with_product: payload.with_product
      }
    })
      .then((response) => {
        return response.data.data
      })
      .catch(() => {
        return null
      })

    commit('setSelectedShop', selected)
  }
}

const getters = {}

export default {
  namespaced, state, mutations, actions, getters
}
