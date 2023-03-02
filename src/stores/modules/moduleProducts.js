import axios from 'axios'
import * as axConfig from '@/config.js'

const namespaced = true

const state = {
  vxSelectedProduct: {
    uuid: null,
    name: null,
    condition: null,
    price_initial: null,
    price_net: null,
    discount_percent: null,
    discount_price: null,
    weight_in_gram: null,
    minimal_purchase: null,
    store_id: null,
    store_name: null,
    store_domain: null,
    category_id: null,
    category_name: null,
    is_sub_category: null,
    category_parent_id: null,
    category_parent_name: null,
    city: null,
    province: null,
    images: [],
    created_at: null,
    last_updated_at: null
  }
}

const mutations = {
  setSelectedProduct (state, payload) {
    state.vxSelectedProduct.uuid = payload.uuid
    state.vxSelectedProduct.name = payload.name
    state.vxSelectedProduct.condition = payload.condition
    state.vxSelectedProduct.price_initial = payload.price_initial
    state.vxSelectedProduct.price_net = payload.price_net
    state.vxSelectedProduct.discount_percent = payload.discount_percent
    state.vxSelectedProduct.discount_price = payload.discount_price
    state.vxSelectedProduct.weight_in_gram = payload.weight_in_gram
    state.vxSelectedProduct.minimal_purchase = payload.minimal_purchase
    state.vxSelectedProduct.store_id = payload.store_id
    state.vxSelectedProduct.store_name = payload.store_name
    state.vxSelectedProduct.store_domain = payload.store_domain
    state.vxSelectedProduct.category_id = payload.category_id
    state.vxSelectedProduct.category_name = payload.category_name
    state.vxSelectedProduct.is_sub_category = payload.is_sub_category
    state.vxSelectedProduct.category_parent_id = payload.category_parent_id
    state.vxSelectedProduct.category_parent_name = payload.category_parent_name
    state.vxSelectedProduct.city = payload.city
    state.vxSelectedProduct.province = payload.province
    state.vxSelectedProduct.images = payload.images
    state.vxSelectedProduct.created_at = payload.created_at
    state.vxSelectedProduct.last_updated_at = payload.last_updated_at
  }
}

const actions = {
  async selectProduct ({ commit }, payload) {
    if (payload.uuid || state.vxSelectedUUID) {
      var selected = await axios.get(axConfig.productUrl + (payload.uuid ?? state.vxSelectedUUID), {
        params: {
        }
      })
        .then((response) => {
          return response.data.data
        })
        .catch((error) => {
          console.log(error)
          return null
        })

      commit('setSelectedProduct', selected)
    } else {
      // this.$router.push({ name: '404', params: { message: 'Product tidak ditemukan' } })
      console.log('a')
    }
  }
}

const getters = {}

export default {
  namespaced, state, mutations, actions, getters
}
