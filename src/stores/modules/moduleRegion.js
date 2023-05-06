import axios from 'axios'
import * as axConfig from '@/config.js'

const namespaced = true

const state = {
  vxProvinces: {},
  verrProvinces: {
    error: false,
    code: null
  },
  vxCities: {},
  verrCities: {
    error: false,
    code: null
  },
  vxDistricts: {},
  verrDistricts: {
    error: false,
    code: null
  }
}

const mutations = {
  setProvinces (state, payload) {
    state.vxProvinces = payload
  },
  setProvincesError (state, payload) {
    state.verrProvinces = payload
  },
  setCities (state, payload) {
    state.vxCities = payload
  },
  setCitiesError (state, payload) {
    state.verrCities = payload
  },
  setDistricts (state, payload) {
    state.vxDistrict = payload
  },
  setDistrictsError (state, payload) {
    state.verrDistricts = payload
  }
}

const actions = {
  async getProvinces ({ commit }, payload) {
    const lsData = checkLS('ls-province')

    if (lsData) {
      commit('setProvinces', lsData.data)
      commit('setProvincesError', { error: false, code: 0 })
    } else {
      try {
        var response = await axios.get(axConfig.provinceUrl, {
          params: {
            search: payload.search ?? null,
            order: payload.order ?? 'asc'
          }
        })

        // Cache to localStorage
        if (response.data.success && response.data.count_data > 0) {
          const cacheData = {
            data: response.data,
            expired: new Date().getTime() + (1000 * 60 * 60) // 60 minutes from now
          }

          localStorage.setItem('ls-province', JSON.stringify(cacheData))
        }

        commit('setProvinces', response.data)
        commit('setProvincesError', { error: false, code: 0 })
      } catch (err) {
        commit('setProvinces', null)

        if (err.response) {
          commit('setProvincesError', { error: true, code: err.response.status })
        } else if (err.code === 'ERR_NETWORK') {
          commit('setProvincesError', { error: true, code: 'ERR_NETWORK' })
        } else {
          commit('setProvincesError', { error: true, code: err.code })
        }
      }
    }
  },
  async getCities ({ commit }, payload) {
    const lsData = checkLS('ls-city')

    if (lsData) {
      commit('setCities', lsData.data)
      commit('setCitiesError', { error: false, code: 0 })
    } else {
      try {
        const response = await axios.get(axConfig.cityUrl, {
          params: {
            search: payload.search ? payload.search : null,
            province: payload.province ? payload.province : null
          }
        })

        // Cache to localStorage
        if (response.data.success && response.data.count_data > 0) {
          const cacheData = {
            data: response.data,
            expired: new Date().getTime() + (1000 * 60 * 60) // 60 minutes from now
          }

          localStorage.setItem('ls-city', JSON.stringify(cacheData))
        }

        commit('setCities', response.data)
        commit('setCitiesError', { error: false, code: 0 })
      } catch (err) {
        commit('setCities', null)

        if (err.response) {
          commit('setCitiesError', { error: true, code: err.response.status })
        } else if (err.code === 'ERR_NETWORK') {
          commit('setCitiesError', { error: true, code: 'ERR_NETWORK' })
        } else {
          commit('setCitiesError', { error: true, code: err.code })
        }
      }
    }
  },
  async getDistricts ({ commit }, payload) {
    const lsData = checkLS('ls-district')

    if (lsData) {
      commit('setDistricts', lsData.data)
      commit('setDistrictsError', { error: false, code: 0 })
    } else {
      try {
        const response = await axios.get(axConfig.districtUrl, {
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

          localStorage.setItem('ls-district', JSON.stringify(cacheData))
        }

        commit('setDistricts', response.data)
        commit('setDistrictsError', { error: false, code: 0 })
      } catch (err) {
        commit('setDistricts', null)

        if (err.response) {
          commit('setDistrictsError', { error: true, code: err.response.status })
        } else if (err.code === 'ERR_NETWORK') {
          commit('setDistrictsError', { error: true, code: 'ERR_NETWORK' })
        } else {
          commit('setDistrictsError', { error: true, code: err.code })
        }
      }
    }
  }
}

const getters = {
  getterCitiesAlphabet: (state) => (keyword) => {
    if (state.vxCities && state.vxCities.count_data > 0) {
      var filteredCities = state.vxCities.data.filter((element) => {
        if (element.city.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1) {
          return element
        }
        return false
      })
      var newCities = {}

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
  },
  getterCitiesMetropolitan: (state) => () => {
    if (state.vxCities && state.vxCities.count_data > 0) {
      var popular = [
        {
          id: [],
          city: 'Jabodetabek',
          special: true
        },
        {
          id: [],
          city: 'DKI Jakarta',
          special: true
        },
        {
          id: [],
          city: 'DI Yogyakarta',
          special: true
        }
      ]

      var jabodetabek = ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi']
      var diy = ['Yogyakarta', 'Bantul', 'Sleman', 'Gunungkidul', 'Gunung Kidul', 'Kulonprogo', 'Kulon Progo']
      var metropolitan = ['Medan', 'Palembang', 'Bandung', 'Semarang', 'Surabaya', 'Denpasar', 'Banjarmasin', 'Makassar', 'Manado', 'Kab. Manokwari', 'Sorong']

      state.vxCities.data.filter((element) => {
        if (metropolitan.toString().toLowerCase().indexOf(element.city.toString().toLowerCase()) > -1) {
          popular.push(element)
          return element
        }

        jabodetabek.forEach((keyword) => {
          if (element.city.toString().toLowerCase().includes(keyword.toString().toLowerCase())) {
            popular[0].id.push(element.id)
          }
        })

        diy.forEach((keyword) => {
          if (element.city.toString().toLowerCase().includes(keyword.toString().toLowerCase())) {
            popular[2].id.push(element.id)
          }
        })

        if (element.city.toString().toLowerCase().includes('jakarta') || element.city.toString().toLowerCase().includes('kepulauan seribu')) {
          popular[1].id.push(element.id)
        }

        return false
      })

      return popular
    } else {
      return []
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
  namespaced, state, mutations, actions, getters
}
