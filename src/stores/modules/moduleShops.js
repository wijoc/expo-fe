import axios from 'axios'
import * as axConfig from '@/config.js'

const namespaced = true

const state = {
  vxSelectedShop: {
    success: false,
    message: '',
    data: {
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
  },
  verrSelectedShop: {
    error: false,
    code: null,
    message: ''
  },
  vxShopIDs: {}
}

const mutations = {
  setSelectedShop (state, payload) {
    state.vxSelectedShop = payload
  },
  setShopError (state, payload) {
    state.verrSelectedShop = payload
  },
  setShopIDs (state, payload) {
    state.vxShopIDs[payload.page] = payload.ids
  },
  destroyShopIds (state, payload) {
    state.vxShopIDs = {}
  }
}

const actions = {
  async selectShop ({ commit }, payload) {
    try {
      const response = await axios.get(axConfig.shopUrl + payload.domain, {
        params: {
          with_product: payload.with_product
        }
      })

      commit('setSelectedShop', response.data)
    } catch (err) {
      commit('setSelectedShop', null)

      if (err.response) {
        commit('setShopError', { error: true, code: err.response.status })
      } else if (err.code === 'ERR_NETWORK') {
        commit('setShopError', { error: true, code: 'ERR_NETWORK' })
      } else {
        commit('setShopError', { error: true, code: err.code })
      }
    }
  },
  storeShopIDs ({ commit }, payload) {
    if (payload.command === 'store') {
      commit('setShopIDs', payload.data)
    } else if (payload.command === 'destroy') {
      commit('destroyShopIds')
    }
  }
}

const getters = {
  getterShopExceptPage: (state) => (page = null) => {
    if (page) {
      const cloneID = Object.assign({}, state.vxShopIDs) // clone state
      delete cloneID[page] // delete ids by page-index key
      return cloneID
    } else {
      return state.vxShopIDs
    }
  }
}

export default {
  namespaced, state, mutations, actions, getters
}
