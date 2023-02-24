import axios from 'axios'
import * as axConfig from '@/config.js'

const namespaced = true

const state = {
  vxProvince: [],
  provLastRequest: null,
  vxCities: [],
  cityLastRequest: null,
  vxDistrict: [],
  districtLastRequest: null
}

const mutations = {
  setProvince (state, payload) {
    state.vxProvince = payload
  },
  setProvLastRequest (state, payload) {
    state.provLastRequest = payload
  },
  setCity (state, payload) {
    state.vxCities = payload
  },
  setCityLastRequest (state, payload) {
    state.cityLastRequest = payload
  },
  setDistrict (state, payload) {
    state.vxDistrict = payload
  },
  setDistrictLastRequest (state, payload) {
    state.districtLastRequest = payload
  }
}

const actions = {
  async getProvinces ({ commit }, payload) {
    var province = await axios.get(axConfig.provincesUrl, {
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

    commit('setProvince', province)
    commit('setProvLastRequest', new Date())
  },
  async getCities ({ commit }, payload) {
    var city = await axios.get(axConfig.cityUrl, {
      params: {
        search: payload.search ? payload.search : null,
        province: payload.province ? payload.province : null
      }
    })
      .then((response) => {
        return response.data.data
      })
      .catch(() => {
        return null
      })

    commit('setCity', city)
    commit('setCityLastRequest', new Date())
  },
  async getDistricts ({ commit }, payload) {
    var district = await axios.get(axConfig.districtUrl, {
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

    commit('setDistrict', district)
    commit('setDistrictLastRequest', new Date())
  }
}

const getters = {
  getterFiveCity: (state) => {
    if (state.vxCities && state.vxCities.length > 0) {
      var fiveCity = []
      for (let i = 0; i < 5; i++) {
        fiveCity.push(state.vxCities[Math.floor(Math.random() * state.vxCities.length)])
      }

      return fiveCity
    } else {
      return []
    }
  },
  getterCityByAlphabet: (state) => (keyword) => {
    if (state.vxCities && state.vxCities.length > 0) {
      var filteredCities = state.vxCities.filter((element) => {
        if (element.city.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1) {
          return element
        }
        return false
      })
      var newCities = {}

      // state.vxCities.forEach((element) => {
      filteredCities.forEach((element) => {
        const firstLetter = element.city.replace('Kab. ', '').substr(0, 1)
        if (newCities[firstLetter]) {
          newCities[firstLetter].push(element)
        } else {
          newCities[firstLetter] = []
          newCities[firstLetter].push(element)
        }
      })

      return newCities
    } else {
      return []
    }
  }
}

export default {
  namespaced, state, mutations, actions, getters
}
