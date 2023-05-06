const apiDomain = process.env.VUE_APP_API_URL ?? 'http://localhost:8000/api/'
const prefix = process.env.VUE_APP_API_PREFIX ?? 'beta/'

export const shopUrl = apiDomain + prefix + 'stores/'
export const productUrl = apiDomain + prefix + 'products/'
export const productCategoryUrl = apiDomain + prefix + 'categories/product/'
export const shopCategoryUrl = apiDomain + prefix + 'categories/store/'
export const provinceUrl = apiDomain + prefix + 'provinces/'
export const cityUrl = apiDomain + prefix + 'cities/'
export const districtUrl = apiDomain + prefix + 'districts/'

export const headers = {
  Authorization: 'Bearer ' + localStorage.getItem('access_token')
}

export const getHeaders = function (extraHeader = {}) {
  const main = {
    Authorization: 'Bearer ' + localStorage.getItem('access_token')
  }

  const newHeader = Object.assign(main, extraHeader)

  return newHeader
}
