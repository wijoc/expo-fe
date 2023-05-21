import axios from 'axios'
import * as axConfig from '@/config.js'

const namespaced = true

const state = {
  vxCart: {
    items: [],
    total_cart: 0
  },
  vxShippingAddress: {
    address_id: null,
    recepient_name: null,
    province_id: null,
    province: null,
    city_id: null,
    city: null,
    postal_code: null,
    full_address: null,
    note: null
  },
  verrCart: {
    error: true,
    code: null
  }
}

const mutations = {
  setCart: function (state, payload) {
    if (payload !== null) {
      state.vxCart.total_cart = payload.total_cart
      state.vxCart.items = payload.cart
    }
  },
  setCartError: function (state, payload) {
    state.verrCart = payload
  },
  setShippingAddress: function (state, payload) {
    state.vxCart.items = payload
  }
}

const actions = {
  async getCart ({ commit, state }, payload = false) {
    let getData = true
    if (!payload) { // payload = true -> ignore cache, fetch new data
      const lsData = checkLS('ls-cart')

      if (lsData) {
        commit('setCart', lsData.data)
        commit('setCartError', { error: false, code: null })

        getData = false
      } else {
        getData = true
      }
    }

    if (getData) {
      try {
        const response = await axios.get(axConfig.cartUrl, {
          headers: axConfig.getHeaders(this.state.sess.vxAccess, {})
        })

        // Cache to localStorage
        if (response.data.success && response.data.count_data > 0) {
          const cacheData = {
            data: response.data.data,
            expired: new Date().getTime() + (1000 * 60 * 60) // 60 minutes from now
          }

          localStorage.setItem('ls-cart', JSON.stringify(cacheData))
        }

        commit('setCart', response.data.data)
        commit('setCartError', { error: false, code: null })
      } catch (error) {
        commit('setCart', null)

        if (error.response) {
          commit('setCartError', { error: true, code: error.response.status })
        } else if (error.code === 'ERR_NETWORK') {
          commit('setCartError', { error: true, code: 'ERR_NETWORK' })
        } else {
          commit('setCartError', { error: true, code: error.code })
        }
      }
    }
  },
  async updateCart ({ dispatch }, payload) {
    try {
      const updateData = {
        product_uuid: payload.uuid,
        qty: payload.qty
      }

      await axios.put(axConfig.cartUrl + payload.cart_id, updateData, {
        headers: axConfig.getHeaders(this.state.sess.vxAccess, { 'Content-type': 'application/json' })
      })

      dispatch('getCart', true)
      return { success: true }
    } catch (error) {
      if (error.response) {
        if (error.response.data.errors) {
          return { success: false, code: 'invalid', message: 'Invalid input', errors: error.response.data.errors }
        } else {
          return { success: false, code: error.response.status, message: error.response.data.message }
        }
      } else if (error.code === 'ERR_NETWORK') {
        return { success: false, code: 'ERR_NETWORK', message: 'Kami sedang offline' }
      } else {
        return { success: false, code: error.code, message: 'Halaman Rusak' }
      }
    }
  },
  async deleteCart ({ dispatch }, payload) {
    try {
      await axios.delete(axConfig.cartUrl + payload.cart_id, {
        headers: axConfig.getHeaders(this.state.sess.vxAccess, {})
      })

      return { success: true }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 500:
            return { success: false, code: error.response.status, message: 'Kesalahan Sistem' }
          case 400:
            return { success: false, code: error.response.status, message: 'Pilih item yang akan dihapus' }
          case 401:
            return { success: false, code: error.response.status, message: 'Silahkan Login terlebih dahulu' }
          case 404:
            return { success: false, code: error.response.status, message: 'Item tidak ditemukan' }
          default:
            return { success: false, code: error.response.status, message: error.response.data.message }
        }
      } else if (error.code === 'ERR_NETWORK') {
        return { success: false, code: 'ERR_NETWORK', message: 'Kami sedang offline' }
      } else {
        return { success: false, code: error.code, message: 'Halaman Rusak' }
      }
    }
  },
  async addCart ({ dispatch }, payload) {
    const postData = {
      product_uuid: payload.uuid,
      qty: payload.qty,
      note: payload.note
    }

    try {
      await axios.post(axConfig.cartUrl, postData, {
        headers: axConfig.getHeaders(this.state.sess.vxAccess, { 'Content-type': 'application/json' })
      })

      dispatch('getCart', true)
      return { success: true }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 500:
            return { success: false, code: error.response.status, message: 'Kesalahan Sistem' }
          case 400:
            return { success: false, code: error.response.status, message: 'Pilih item yang akan dihapus' }
          case 401:
            return { success: false, code: error.response.status, message: 'Silahkan Login terlebih dahulu' }
          case 404:
            return { success: false, code: error.response.status, message: 'Item tidak ditemukan' }
          default:
            return { success: false, code: error.response.status, message: error.response.data.message }
        }
      } else if (error.code === 'ERR_NETWORK') {
        return { success: false, code: 'ERR_NETWORK', message: 'Kami sedang offline' }
      } else {
        return { success: false, code: error.code, message: 'Halaman Rusak' }
      }
    }
  }
}

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
  namespaced, state, mutations, actions
}
