import axios from 'axios'
import * as axConfig from '@/config.js'

const namespaced = true

const state = {
  vxProductCtgrs: [],
  verrProductCtgrs: {
    error: false,
    code: null
  },
  vxShopCtgrs: [],
  verrShopCtgrs: {
    error: false,
    code: null,
    message: ''
  }
}

const mutations = {
  setProductCategories (state, payload) {
    state.vxProductCtgrs = payload
  },
  setProductError (state, payload) {
    state.verrProductCtgrs = payload
  },
  setShopCategories (state, payload) {
    state.vxShopCtgrs = payload
  },
  setShopError (state, payload) {
    state.verrShopCtgrs = payload
  }
}

const actions = {
  async getProductCategories ({ commit }, payload) {
    const lsData = checkLS('ls-prd-ctgrs')

    if (lsData) {
      commit('setProductCategories', lsData.data)
      commit('setProductError', { error: false, code: 0 })
    } else {
      try {
        const response = await axios.get(axConfig.productCategoryUrl, {
          headers: axConfig.getHeaders(null, { 'Content-type': 'application/json' }),
          params: {
            search: payload.search ? payload.search : null,
            prent: payload.parent_id ? payload.parent_id : null
          }
        })

        // Cache to localStorage
        if (response.data.success && response.data.count_data > 0) {
          const cacheData = {
            data: response.data,
            expired: new Date().getTime() + (1000 * 60 * 30) // 30 minutes from now
          }

          localStorage.setItem('ls-prd-ctgrs', JSON.stringify(cacheData))
        }

        commit('setProductCategories', response.data)
        commit('setProductError', { error: false, code: 0 })
      } catch (err) {
        commit('setProductCategories', null)

        if (err.response) {
          commit('setProductError', { error: true, code: err.response.status })
        } else if (err.code === 'ERR_NETWORK') {
          commit('setProductError', { error: true, code: 'ERR_NETWORK' })
        } else {
          commit('setProductError', { error: true, code: err.code })
        }
      }
    }
  },
  async getShopCategories ({ commit }, payload) {
    const lsData = checkLS('ls-shop-ctgrs')

    if (lsData) {
      commit('setShopCategories', lsData.data)
      commit('setShopError', { error: false, code: 0 })
    } else {
      try {
        const response = await axios.get(axConfig.productCategoryUrl, {
          headers: axConfig.getHeaders(null, { 'Content-type': 'application/json' }),
          params: {
            search: payload.search ? payload.search : null,
            prent: payload.parent_id ? payload.parent_id : null
          }
        })

        // Cache to localStorage
        if (response.data.success && response.data.count_data > 0) {
          const cacheData = {
            data: response.data,
            expired: new Date().getTime() + (1000 * 60 * 30) // 30 minutes from now
          }

          localStorage.setItem('ls-shop-ctgrs', JSON.stringify(cacheData))
        }

        commit('setShopCategories', response.data)
        commit('setShopError', { error: false, code: 0 })
      } catch (err) {
        commit('setShopCategories', null)

        if (err.response) {
          commit('setShopError', { error: true, code: err.response.status })
        } else if (err.code === 'ERR_NETWORK') {
          commit('setShopError', { error: true, code: 'ERR_NETWORK' })
        } else {
          commit('setShopError', { error: true, code: err.code })
        }
      }
    }
  }
}

const getters = {}

const checkLS = (key) => {
  // var now = new Date()
  if (localStorage.getItem(key)) {
    const lsValue = JSON.parse(localStorage.getItem(key))

    if (new Date().getTime() > lsValue.expired) {
      return lsValue
    } else {
      return false
    }
  } else {
    return false
  }
}

export default {
  namespaced, state, mutations, actions, getters
}
